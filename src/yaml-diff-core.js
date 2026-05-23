(function initYamlDiffCore(root) {
  "use strict";

  const ROW_HEIGHT = 46;

  function normalizeValue(value, options = {}) {
    if (value instanceof Date) {
      return value.toISOString();
    }

    if (Array.isArray(value)) {
      return value.map((item) => normalizeValue(item, options));
    }

    if (value && typeof value === "object") {
      const keys = Object.keys(value);
      if (options.sortKeys !== false) {
        keys.sort((left, right) => left.localeCompare(right));
      }

      return keys.reduce((next, key) => {
        next[key] = normalizeValue(value[key], options);
        return next;
      }, {});
    }

    return value;
  }

  function diffValues(left, right, options = {}) {
    const changes = [];
    walk(normalizeValue(left, options), normalizeValue(right, options), "$", changes);
    return changes;
  }

  function walk(left, right, path, changes) {
    if (Object.is(left, right)) {
      return;
    }

    if (Array.isArray(left) || Array.isArray(right)) {
      if (!Array.isArray(left) || !Array.isArray(right)) {
        changes.push(makeChange("changed", path, left, right));
        return;
      }

      const max = Math.max(left.length, right.length);
      for (let index = 0; index < max; index += 1) {
        const childPath = `${path}[${index}]`;
        if (index >= left.length) {
          changes.push(makeChange("added", childPath, undefined, right[index]));
        } else if (index >= right.length) {
          changes.push(makeChange("removed", childPath, left[index], undefined));
        } else {
          walk(left[index], right[index], childPath, changes);
        }
      }
      return;
    }

    if (isPlainObject(left) || isPlainObject(right)) {
      if (!isPlainObject(left) || !isPlainObject(right)) {
        changes.push(makeChange("changed", path, left, right));
        return;
      }

      const keys = Array.from(new Set([...Object.keys(left), ...Object.keys(right)]));
      keys.sort((a, b) => a.localeCompare(b));
      for (const key of keys) {
        const childPath = `${path}.${escapePathKey(key)}`;
        if (!Object.hasOwn(left, key)) {
          changes.push(makeChange("added", childPath, undefined, right[key]));
        } else if (!Object.hasOwn(right, key)) {
          changes.push(makeChange("removed", childPath, left[key], undefined));
        } else {
          walk(left[key], right[key], childPath, changes);
        }
      }
      return;
    }

    changes.push(makeChange("changed", path, left, right));
  }

  function isPlainObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value) && !(value instanceof Date);
  }

  function escapePathKey(key) {
    return /^[A-Za-z_$][\w$-]*$/.test(key) ? key : JSON.stringify(key);
  }

  function makeChange(type, path, left, right) {
    return {
      type,
      path,
      left: formatValue(left),
      right: formatValue(right)
    };
  }

  function formatValue(value) {
    if (value === undefined) {
      return "";
    }

    if (value === null) {
      return "null";
    }

    if (typeof value === "string") {
      return value;
    }

    if (typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }

    return stableStringify(value, 0).trimStart();
  }

  function stableStringify(value, depth) {
    const indent = "  ".repeat(depth);
    const nextIndent = "  ".repeat(depth + 1);

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return "[]";
      }

      return value.map((item) => {
        if (isPlainObject(item) || Array.isArray(item)) {
          return `${nextIndent}- ${stableStringify(item, depth + 1).trimStart()}`;
        }
        return `${nextIndent}- ${formatValue(item)}`;
      }).join("\n");
    }

    if (isPlainObject(value)) {
      const keys = Object.keys(value).sort((a, b) => a.localeCompare(b));
      if (keys.length === 0) {
        return "{}";
      }

      return keys.map((key) => {
        const item = value[key];
        if (isPlainObject(item) || Array.isArray(item)) {
          return `${nextIndent}${key}:\n${stableStringify(item, depth + 1)}`;
        }
        return `${nextIndent}${key}: ${formatValue(item)}`;
      }).join("\n");
    }

    return `${indent}${formatValue(value)}`;
  }

  function countChanges(changes) {
    return changes.reduce((counts, change) => {
      counts[change.type] += 1;
      return counts;
    }, { added: 0, removed: 0, changed: 0 });
  }

  function renderYamlDiffLines(value, changes, side, options = {}) {
    const lineItems = [];
    writeYamlLines(normalizeValue(value, options), "$", 0, lineItems, side, changes);
    return lineItems.map((line, index) => ({
      number: index + 1,
      text: line.text,
      type: line.type
    }));
  }

  function writeYamlLines(value, path, depth, lines, side, changes) {
    const indent = "  ".repeat(depth);

    if (Array.isArray(value)) {
      if (value.length === 0) {
        lines.push(makeLine(path, `${indent}[]`, side, changes));
        return;
      }

      value.forEach((item, index) => {
        const childPath = `${path}[${index}]`;
        if (isPlainObject(item)) {
          lines.push(makeLine(childPath, `${indent}-`, side, changes));
          writeYamlLines(item, childPath, depth + 1, lines, side, changes);
        } else if (Array.isArray(item)) {
          lines.push(makeLine(childPath, `${indent}-`, side, changes));
          writeYamlLines(item, childPath, depth + 1, lines, side, changes);
        } else {
          lines.push(makeLine(childPath, `${indent}- ${formatValue(item)}`, side, changes));
        }
      });
      return;
    }

    if (isPlainObject(value)) {
      const keys = Object.keys(value).sort((a, b) => a.localeCompare(b));
      if (keys.length === 0) {
        lines.push(makeLine(path, `${indent}{}`, side, changes));
        return;
      }

      for (const key of keys) {
        const childPath = `${path}.${escapePathKey(key)}`;
        const item = value[key];
        if (isPlainObject(item) || Array.isArray(item)) {
          lines.push(makeLine(childPath, `${indent}${key}:`, side, changes));
          writeYamlLines(item, childPath, depth + 1, lines, side, changes);
        } else {
          lines.push(makeLine(childPath, `${indent}${key}: ${formatValue(item)}`, side, changes));
        }
      }
      return;
    }

    lines.push(makeLine(path, `${indent}${formatValue(value)}`, side, changes));
  }

  function makeLine(path, text, side, changes) {
    return {
      text,
      type: lineTypeForPath(path, side, changes)
    };
  }

  function lineTypeForPath(path, side, changes) {
    for (const change of changes) {
      if (!pathTouchesChange(path, change.path)) {
        continue;
      }

      if (change.type === "added" && side === "right") {
        return "added";
      }

      if (change.type === "removed" && side === "left") {
        return "removed";
      }

      if (change.type === "changed") {
        return "changed";
      }
    }

    return "same";
  }

  function pathTouchesChange(linePath, changePath) {
    return linePath === changePath || linePath.startsWith(`${changePath}.`) || linePath.startsWith(`${changePath}[`);
  }

  const api = {
    ROW_HEIGHT,
    countChanges,
    diffValues,
    formatValue,
    normalizeValue,
    renderYamlDiffLines
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.YamlDiffCore = api;
  }
})(typeof self !== "undefined" ? self : globalThis);
