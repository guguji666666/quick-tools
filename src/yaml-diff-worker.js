importScripts("https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js");
importScripts("./yaml-diff-core.js");

self.onmessage = (event) => {
  const startedAt = performance.now();
  const { leftText, rightText, options } = event.data;

  try {
    const left = parseYaml(leftText, "原始 YAML");
    const right = parseYaml(rightText, "修改后 YAML");
    const changes = self.YamlDiffCore.diffValues(left, right, options);
    const counts = self.YamlDiffCore.countChanges(changes);
    const leftLines = self.YamlDiffCore.renderYamlDiffLines(left, changes, "left", options);
    const rightLines = self.YamlDiffCore.renderYamlDiffLines(right, changes, "right", options);

    self.postMessage({
      ok: true,
      changes,
      leftLines,
      rightLines,
      counts,
      durationMs: Math.round(performance.now() - startedAt)
    });
  } catch (error) {
    self.postMessage({
      ok: false,
      message: error && error.message ? error.message : String(error),
      durationMs: Math.round(performance.now() - startedAt)
    });
  }
};

function parseYaml(text, label) {
  const documents = jsyaml.loadAll(text);
  if (documents.length === 0) {
    return null;
  }

  if (documents.length === 1) {
    return documents[0];
  }

  return documents;
}
