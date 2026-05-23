import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const source = readFileSync(new URL("../src/yaml-diff-core.js", import.meta.url), "utf8");
const context = { module: { exports: {} }, globalThis };
vm.createContext(context);
vm.runInContext(source, context);

const core = context.module.exports;

const changes = core.diffValues(
  {
    apiVersion: "apps/v1",
    metadata: { name: "checkout", labels: { app: "checkout" } },
    spec: { replicas: 2, ports: [8080, 9090] }
  },
  {
    metadata: { name: "checkout", labels: { app: "checkout", tier: "edge" } },
    apiVersion: "apps/v1",
    spec: { replicas: 3, ports: [8080] }
  },
  { sortKeys: true }
);

assertJsonEqual(changes.map((change) => [change.type, change.path, change.left, change.right]), [
  ["added", "$.metadata.labels.tier", "", "edge"],
  ["removed", "$.spec.ports[1]", "9090", ""],
  ["changed", "$.spec.replicas", "2", "3"]
]);

assertJsonEqual(core.countChanges(changes), { added: 1, removed: 1, changed: 1 });

const unchanged = core.diffValues({ b: 1, a: [true, null] }, { a: [true, null], b: 1 }, { sortKeys: true });
assert.equal(unchanged.length, 0);

console.log("yaml-diff-core: 3 passed");

function assertJsonEqual(actual, expected) {
  assert.equal(JSON.stringify(actual), JSON.stringify(expected));
}
