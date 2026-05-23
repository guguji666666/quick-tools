const leftInput = document.querySelector("#leftInput");
const rightInput = document.querySelector("#rightInput");
const leftDiffPane = document.querySelector("#leftDiffPane");
const rightDiffPane = document.querySelector("#rightDiffPane");
const compareButton = document.querySelector("#compareButton");
const editButton = document.querySelector("#editButton");
const sampleButton = document.querySelector("#sampleButton");
const clearButton = document.querySelector("#clearButton");
const sortKeys = document.querySelector("#sortKeys");
const workerStatus = document.querySelector("#workerStatus");
const message = document.querySelector("#message");
const addedCount = document.querySelector("#addedCount");
const removedCount = document.querySelector("#removedCount");
const changedCount = document.querySelector("#changedCount");
const duration = document.querySelector("#duration");
const sessionTabs = document.querySelector("#sessionTabs");
const newSessionButton = document.querySelector("#newSessionButton");
const languageButtons = document.querySelectorAll("[data-language]");
const toolNav = document.querySelector(".tool-nav");
const toolButtons = document.querySelectorAll("[data-tool]");
const toolPanels = document.querySelectorAll("[data-tool-panel]");
const toolTitle = document.querySelector("#tool-title");
const toolEyebrow = document.querySelector("#toolEyebrow");
const itToolList = document.querySelector(".it-tool-list");
const itToolButtons = document.querySelectorAll("[data-it-tool]");
const itToolType = document.querySelector("#itToolType");
const itToolTitle = document.querySelector("#itToolTitle");
const itModeField = document.querySelector("#itModeField");
const itModeSelect = document.querySelector("#itModeSelect");
const itInputLabel = document.querySelector("#itInputLabel");
const itOutputLabel = document.querySelector("#itOutputLabel");
const itInput = document.querySelector("#itInput");
const itOutput = document.querySelector("#itOutput");
const itMessage = document.querySelector("#itMessage");
const runItToolButton = document.querySelector("#runItToolButton");
const fillItSampleButton = document.querySelector("#fillItSampleButton");
const copyItOutputButton = document.querySelector("#copyItOutputButton");
const clearItToolButton = document.querySelector("#clearItToolButton");

const messages = {
  zh: {
    metaDescription: "Quick Tools 是一个运行在浏览器里的常用小工具集合。",
    toolList: "工具列表",
    brandSubtitle: "本地浏览器工具箱",
    semanticDiff: "语义比对",
    embeddedToolbox: "内嵌工具集",
    toolTitle: "快速比对两个 YAML 文件",
    yamlEyebrow: "YAML Diff",
    itToolsHeaderTitle: "内嵌 IT Tools",
    itToolsHeaderEyebrow: "IT Tools",
    languageSwitch: "语言切换",
    sessionBar: "比对会话",
    newSession: "新建会话",
    leftYaml: "原始 YAML",
    rightYaml: "修改后 YAML",
    leftPlaceholder: "粘贴旧版本 YAML",
    rightPlaceholder: "粘贴新版本 YAML",
    editContent: "编辑内容",
    fillSample: "填入示例",
    clear: "清空",
    sortKeys: "排序对象键",
    summary: "比对摘要",
    added: "新增",
    removed: "删除",
    changed: "修改",
    duration: "耗时",
    idle: "空闲",
    runningCount: "{count} 个比对中",
    startCompare: "开始比对",
    compareAgain: "重新比对",
    sessionName: "会话 {number}",
    running: "比对中",
    notCompared: "未比对",
    diffCount: "{count} 处差异",
    close: "关闭",
    closeSessionLabel: "关闭{session}",
    noContent: "没有内容",
    fileOpenNotice: "当前是 file:// 打开：示例可用；YAML 比对需要通过本地服务或 GitHub Pages 打开。",
    fileCompareBlocked: "请用 http://127.0.0.1:5173 或 GitHub Pages 打开后再比对，file:// 不支持本工具的后台解析线程。",
    needBothYaml: "两边都需要粘贴 YAML。",
    workerStartFailed: "后台解析线程启动失败。",
    closedSession: "已关闭 {session}",
    undoClose: "撤销关闭",
    itToolsEyebrow: "内嵌工具集",
    itToolsTitle: "常用开发转换工具",
    itToolsDescription: "这些工具直接运行在当前页面里，不上传数据，不依赖外部服务。",
    viewSource: "参考项目",
    embeddedToolList: "内嵌工具列表",
    jsonToolMeta: "格式化 / 压缩",
    base64ToolMeta: "编码 / 解码",
    urlToolMeta: "编码 / 解码",
    shaToolMeta: "生成摘要",
    uuidToolMeta: "生成 UUID",
    timestampToolMeta: "时间戳转换",
    textCaseToolMeta: "大小写转换",
    mode: "模式",
    runTool: "运行",
    copyOutput: "复制结果",
    copied: "结果已复制。",
    copyFailed: "复制失败，请手动选择结果复制。",
    itInput: "输入",
    itOutput: "输出",
    jsonFormatTitle: "JSON 格式化",
    jsonCompactTitle: "JSON 压缩",
    jsonFormat: "格式化",
    jsonCompact: "压缩",
    base64EncodeTitle: "Base64 编码",
    base64DecodeTitle: "Base64 解码",
    encode: "编码",
    decode: "解码",
    urlEncodeTitle: "URL 编码",
    urlDecodeTitle: "URL 解码",
    sha256Title: "SHA-256 摘要",
    uuidTitle: "UUID 生成器",
    timestampToDateTitle: "时间戳转日期",
    dateToTimestampTitle: "日期转时间戳",
    toDate: "转日期",
    toTimestamp: "转时间戳",
    textUpperTitle: "转大写",
    textLowerTitle: "转小写",
    textTitleTitle: "转标题大小写",
    upper: "大写",
    lower: "小写",
    titleCase: "标题大小写",
    jsonSample: "{\"name\":\"quick-tools\",\"tools\":[\"yaml-diff\",\"json\"]}",
    textSample: "Quick Tools runs in your browser.",
    base64Sample: "Quick Tools",
    urlSample: "https://example.com/search?q=quick tools&lang=zh",
    timestampSample: "1779352980000",
    dateSample: "2026-05-21T16:43:00+08:00",
    uuidInputHelp: "点击运行会生成新的 UUID。",
    invalidJson: "JSON 无效：{message}",
    invalidBase64: "Base64 无效。",
    invalidUrl: "URL 编码内容无效。",
    invalidDate: "日期无效，请输入 ISO 日期或浏览器能识别的日期。",
    invalidTimestamp: "时间戳无效，请输入毫秒数字。",
    cryptoUnavailable: "当前浏览器不支持 crypto.subtle，无法生成 SHA-256。"
  },
  en: {
    metaDescription: "Quick Tools is a browser-based collection of everyday utilities.",
    toolList: "Tool list",
    brandSubtitle: "Local browser toolbox",
    semanticDiff: "Semantic diff",
    embeddedToolbox: "Embedded tools",
    toolTitle: "Compare two YAML files quickly",
    yamlEyebrow: "YAML Diff",
    itToolsHeaderTitle: "Embedded IT Tools",
    itToolsHeaderEyebrow: "IT Tools",
    languageSwitch: "Language switch",
    sessionBar: "Compare sessions",
    newSession: "New session",
    leftYaml: "Original YAML",
    rightYaml: "Modified YAML",
    leftPlaceholder: "Paste old YAML",
    rightPlaceholder: "Paste new YAML",
    editContent: "Edit content",
    fillSample: "Fill sample",
    clear: "Clear",
    sortKeys: "Sort object keys",
    summary: "Diff summary",
    added: "Added",
    removed: "Removed",
    changed: "Changed",
    duration: "Time",
    idle: "Idle",
    runningCount: "{count} running",
    startCompare: "Compare",
    compareAgain: "Compare again",
    sessionName: "Session {number}",
    running: "Comparing",
    notCompared: "Not compared",
    diffCount: "{count} diffs",
    close: "Close",
    closeSessionLabel: "Close {session}",
    noContent: "No content",
    fileOpenNotice: "Opened through file://: samples work, but YAML diff needs the local server or GitHub Pages.",
    fileCompareBlocked: "Open http://127.0.0.1:5173 or GitHub Pages before comparing. file:// cannot run the background parser.",
    needBothYaml: "Paste YAML on both sides.",
    workerStartFailed: "Background parser failed to start.",
    closedSession: "Closed {session}",
    undoClose: "Undo close",
    itToolsEyebrow: "Embedded tools",
    itToolsTitle: "Common developer converters",
    itToolsDescription: "These tools run directly on this page. Data is not uploaded and no external service is required.",
    viewSource: "Reference project",
    embeddedToolList: "Embedded tool list",
    jsonToolMeta: "Format / compact",
    base64ToolMeta: "Encode / decode",
    urlToolMeta: "Encode / decode",
    shaToolMeta: "Create digest",
    uuidToolMeta: "Generate UUID",
    timestampToolMeta: "Timestamp convert",
    textCaseToolMeta: "Case convert",
    mode: "Mode",
    runTool: "Run",
    copyOutput: "Copy result",
    copied: "Result copied.",
    copyFailed: "Copy failed. Select the result manually.",
    itInput: "Input",
    itOutput: "Output",
    jsonFormatTitle: "Format JSON",
    jsonCompactTitle: "Compact JSON",
    jsonFormat: "Format",
    jsonCompact: "Compact",
    base64EncodeTitle: "Encode Base64",
    base64DecodeTitle: "Decode Base64",
    encode: "Encode",
    decode: "Decode",
    urlEncodeTitle: "Encode URL",
    urlDecodeTitle: "Decode URL",
    sha256Title: "SHA-256 digest",
    uuidTitle: "UUID generator",
    timestampToDateTitle: "Timestamp to date",
    dateToTimestampTitle: "Date to timestamp",
    toDate: "To date",
    toTimestamp: "To timestamp",
    textUpperTitle: "Uppercase",
    textLowerTitle: "Lowercase",
    textTitleTitle: "Title Case",
    upper: "Upper",
    lower: "Lower",
    titleCase: "Title case",
    jsonSample: "{\"name\":\"quick-tools\",\"tools\":[\"yaml-diff\",\"json\"]}",
    textSample: "Quick Tools runs in your browser.",
    base64Sample: "Quick Tools",
    urlSample: "https://example.com/search?q=quick tools&lang=en",
    timestampSample: "1779352980000",
    dateSample: "2026-05-21T16:43:00+08:00",
    uuidInputHelp: "Click run to generate a new UUID.",
    invalidJson: "Invalid JSON: {message}",
    invalidBase64: "Invalid Base64.",
    invalidUrl: "Invalid URL-encoded content.",
    invalidDate: "Invalid date. Enter an ISO date or a date your browser can parse.",
    invalidTimestamp: "Invalid timestamp. Enter milliseconds.",
    cryptoUnavailable: "This browser does not support crypto.subtle, so SHA-256 cannot run."
  }
};

let nextSessionNumber = 1;
let activeSessionId = null;
let activeTool = "yaml-diff";
let activeItTool = "json";
let syncingDiffScroll = false;
let lastClosedSession = null;
let currentLanguage = detectLanguage();
let toolDrag = null;
let suppressToolClick = false;
const sessions = [];
const toolOrderStorageKey = "quick-tools-tool-order";
const itToolOrderStorageKey = "quick-tools-it-tool-order";

const itToolState = {
  json: { mode: "format", input: "", output: "" },
  base64: { mode: "encode", input: "", output: "" },
  url: { mode: "encode", input: "", output: "" },
  sha256: { mode: "digest", input: "", output: "" },
  uuid: { mode: "generate", input: "", output: "" },
  timestamp: { mode: "toDate", input: "", output: "" },
  "text-case": { mode: "upper", input: "", output: "" }
};

toolButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTool(button.dataset.tool));
});
itToolButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveItTool(button.dataset.itTool));
});
languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
setupSortableToolList(toolNav, "tool", toolOrderStorageKey);
setupSortableToolList(itToolList, "itTool", itToolOrderStorageKey);
newSessionButton.addEventListener("click", createSession);
compareButton.addEventListener("click", compare);
editButton.addEventListener("click", editActiveSession);
sampleButton.addEventListener("click", fillSample);
clearButton.addEventListener("click", clearAll);
runItToolButton.addEventListener("click", runActiveItTool);
fillItSampleButton.addEventListener("click", fillItSample);
copyItOutputButton.addEventListener("click", copyItOutput);
clearItToolButton.addEventListener("click", clearItTool);
leftInput.addEventListener("input", () => saveActiveInput(true));
rightInput.addEventListener("input", () => saveActiveInput(true));
itInput.addEventListener("input", saveItInput);
itModeSelect.addEventListener("change", changeItMode);
sortKeys.addEventListener("change", () => saveActiveInput(true));
leftDiffPane.addEventListener("scroll", () => syncDiffScroll(leftDiffPane, rightDiffPane));
rightDiffPane.addEventListener("scroll", () => syncDiffScroll(rightDiffPane, leftDiffPane));

applyStoredOrder(toolNav, "tool", toolOrderStorageKey);
applyStoredOrder(itToolList, "itTool", itToolOrderStorageKey);
applyLanguage();
createSession();
syncItTool();

if (window.location.protocol === "file:") {
  showMessage(t("fileOpenNotice"));
}

function applyStoredOrder(container, dataName, storageKey) {
  const savedOrder = localStorage.getItem(storageKey);
  if (!savedOrder) {
    return;
  }

  const order = JSON.parse(savedOrder);
  if (!Array.isArray(order)) {
    throw new Error(`Invalid stored order: ${storageKey}`);
  }

  const items = getToolItems(container);
  const itemsByValue = new Map(items.map((item) => [getToolItemValue(item, dataName), item]));
  const seen = new Set();
  if (order.length !== itemsByValue.size) {
    throw new Error(`Stored order length mismatch: ${storageKey}`);
  }

  for (const value of order) {
    if (seen.has(value) || !itemsByValue.has(value)) {
      throw new Error(`Stored order item mismatch: ${storageKey}`);
    }
    seen.add(value);
    container.append(itemsByValue.get(value));
  }
}

function persistToolOrder(container, dataName, storageKey) {
  const order = getToolItems(container).map((item) => getToolItemValue(item, dataName));
  localStorage.setItem(storageKey, JSON.stringify(order));
}

function setupSortableToolList(container, dataName, storageKey) {
  container.addEventListener("pointerdown", (event) => {
    startToolDrag(event, container, dataName, storageKey);
  });

  container.addEventListener("mousedown", (event) => {
    startToolDrag(event, container, dataName, storageKey);
  });

  container.addEventListener("click", (event) => {
    if (!suppressToolClick) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    suppressToolClick = false;
  }, true);
}

function startToolDrag(event, container, dataName, storageKey) {
  if (event.button !== 0 || toolDrag) {
    return;
  }

  const item = event.target.closest(".tool-list-item");
  if (!item || !container.contains(item)) {
    return;
  }

  toolDrag = {
    item,
    container,
    dataName,
    storageKey,
    startX: event.clientX,
    startY: event.clientY,
    moved: false
  };
}

function moveToolDrag(event) {
  if (!toolDrag) {
    return;
  }

  const distance = Math.hypot(event.clientX - toolDrag.startX, event.clientY - toolDrag.startY);
  if (distance < 4) {
    return;
  }

  event.preventDefault();
  toolDrag.moved = true;
  toolDrag.item.classList.add("dragging");

  const nextItem = getToolItems(toolDrag.container)
    .filter((item) => item !== toolDrag.item)
    .find((item) => {
      const rect = item.getBoundingClientRect();
      return event.clientY < rect.top + rect.height / 2;
    });

  toolDrag.container.insertBefore(toolDrag.item, nextItem || null);
}

function finishToolDrag() {
  if (!toolDrag) {
    return;
  }

  const finishedDrag = toolDrag;
  finishedDrag.item.classList.remove("dragging");
  if (finishedDrag.moved) {
    persistToolOrder(finishedDrag.container, finishedDrag.dataName, finishedDrag.storageKey);
    suppressToolClick = true;
    setTimeout(() => {
      suppressToolClick = false;
    }, 0);
  }
  toolDrag = null;
}

function cancelToolDrag() {
  if (!toolDrag) {
    return;
  }

  toolDrag.item.classList.remove("dragging");
  toolDrag = null;
}

document.addEventListener("pointermove", moveToolDrag);
document.addEventListener("mousemove", moveToolDrag);
document.addEventListener("pointerup", finishToolDrag);
document.addEventListener("mouseup", finishToolDrag);
document.addEventListener("pointercancel", cancelToolDrag);

function getToolItems(container) {
  return [...container.querySelectorAll(":scope > .tool-list-item")];
}

function getToolItemValue(item, dataName) {
  const selector = dataName === "tool" ? "[data-tool]" : "[data-it-tool]";
  return item.querySelector(selector).dataset[dataName];
}

function detectLanguage() {
  const savedLanguage = localStorage.getItem("quick-tools-language");
  if (savedLanguage === "zh" || savedLanguage === "en") {
    return savedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function setLanguage(language) {
  if (language !== "zh" && language !== "en") {
    throw new Error(`Unsupported language: ${language}`);
  }

  currentLanguage = language;
  localStorage.setItem("quick-tools-language", language);
  applyLanguage();
  syncToolHeader();
  syncItTool();
  syncFromSession();
  if (window.location.protocol === "file:") {
    showMessage(t("fileOpenNotice"));
  }
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

  for (const element of document.querySelectorAll("[data-i18n]")) {
    element.textContent = t(element.dataset.i18n);
  }

  for (const element of document.querySelectorAll("[data-i18n-placeholder]")) {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  }

  for (const element of document.querySelectorAll("[data-i18n-aria-label]")) {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  }

  for (const element of document.querySelectorAll("[data-i18n-content]")) {
    element.setAttribute("content", t(element.dataset.i18nContent));
  }

  for (const button of languageButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  }

  syncToolHeader();
  syncItTool();
}

function t(key, values = {}) {
  const text = messages[currentLanguage][key];
  if (text === undefined) {
    throw new Error(`Missing translation: ${currentLanguage}.${key}`);
  }

  return text.replace(/\{(\w+)\}/g, (match, name) => {
    if (!(name in values)) {
      throw new Error(`Missing translation value: ${name}`);
    }
    return String(values[name]);
  });
}

function createSession() {
  saveActiveInput();
  lastClosedSession = null;

  const sessionNumber = nextSessionNumber;
  const session = {
    id: `session-${Date.now()}-${nextSessionNumber}`,
    number: sessionNumber,
    leftText: "",
    rightText: "",
    sortKeys: true,
    changes: [],
    leftLines: [],
    rightLines: [],
    counts: { added: 0, removed: 0, changed: 0 },
    durationMs: 0,
    status: "idle",
    message: "",
    compared: false,
    viewMode: "edit",
    runId: 0
  };

  nextSessionNumber += 1;
  sessions.push(session);
  activeSessionId = session.id;
  syncFromSession();
}

function setActiveTool(tool) {
  if (tool !== "yaml-diff" && tool !== "it-tools") {
    throw new Error(`Unsupported tool: ${tool}`);
  }

  activeTool = tool;

  for (const button of toolButtons) {
    const active = button.dataset.tool === tool;
    button.classList.toggle("active", active);
    if (active) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  }

  for (const panel of toolPanels) {
    panel.hidden = panel.dataset.toolPanel !== tool;
  }

  syncToolHeader();
}

function setActiveItTool(tool) {
  if (!(tool in itToolState)) {
    throw new Error(`Unsupported embedded tool: ${tool}`);
  }

  saveItInput();
  activeItTool = tool;
  syncItTool();
}

function syncToolHeader() {
  if (activeTool === "it-tools") {
    toolEyebrow.textContent = t("itToolsHeaderEyebrow");
    toolTitle.textContent = t("itToolsHeaderTitle");
    workerStatus.hidden = true;
    return;
  }

  toolEyebrow.textContent = t("yamlEyebrow");
  toolTitle.textContent = t("toolTitle");
  workerStatus.hidden = false;
}

function getItToolConfig(tool) {
  const configs = {
    json: {
      type: "JSON",
      modes: [
        { value: "format", labelKey: "jsonFormat", titleKey: "jsonFormatTitle" },
        { value: "compact", labelKey: "jsonCompact", titleKey: "jsonCompactTitle" }
      ],
      sampleKey: "jsonSample",
      inputReadonly: false
    },
    base64: {
      type: "Base64",
      modes: [
        { value: "encode", labelKey: "encode", titleKey: "base64EncodeTitle" },
        { value: "decode", labelKey: "decode", titleKey: "base64DecodeTitle" }
      ],
      sampleKey: "base64Sample",
      inputReadonly: false
    },
    url: {
      type: "URL",
      modes: [
        { value: "encode", labelKey: "encode", titleKey: "urlEncodeTitle" },
        { value: "decode", labelKey: "decode", titleKey: "urlDecodeTitle" }
      ],
      sampleKey: "urlSample",
      inputReadonly: false
    },
    sha256: {
      type: "SHA-256",
      modes: [
        { value: "digest", labelKey: "shaToolMeta", titleKey: "sha256Title" }
      ],
      sampleKey: "textSample",
      inputReadonly: false
    },
    uuid: {
      type: "UUID",
      modes: [
        { value: "generate", labelKey: "uuidToolMeta", titleKey: "uuidTitle" }
      ],
      sampleKey: "uuidInputHelp",
      inputReadonly: true
    },
    timestamp: {
      type: "Timestamp",
      modes: [
        { value: "toDate", labelKey: "toDate", titleKey: "timestampToDateTitle" },
        { value: "toTimestamp", labelKey: "toTimestamp", titleKey: "dateToTimestampTitle" }
      ],
      sampleKey: "timestampSample",
      inputReadonly: false
    },
    "text-case": {
      type: "Text Case",
      modes: [
        { value: "upper", labelKey: "upper", titleKey: "textUpperTitle" },
        { value: "lower", labelKey: "lower", titleKey: "textLowerTitle" },
        { value: "title", labelKey: "titleCase", titleKey: "textTitleTitle" }
      ],
      sampleKey: "textSample",
      inputReadonly: false
    }
  };

  return configs[tool];
}

function syncItTool() {
  const state = itToolState[activeItTool];
  const config = getItToolConfig(activeItTool);
  const activeMode = config.modes.find((mode) => mode.value === state.mode) || config.modes[0];

  for (const button of itToolButtons) {
    const active = button.dataset.itTool === activeItTool;
    button.classList.toggle("active", active);
    if (active) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  }

  itToolType.textContent = config.type;
  itToolTitle.textContent = t(activeMode.titleKey);
  itInputLabel.textContent = t("itInput");
  itOutputLabel.textContent = t("itOutput");
  itInput.readOnly = config.inputReadonly;
  itInput.value = state.input;
  itOutput.value = state.output;
  itModeField.hidden = config.modes.length === 1;

  itModeSelect.replaceChildren();
  for (const mode of config.modes) {
    const option = document.createElement("option");
    option.value = mode.value;
    option.textContent = t(mode.labelKey);
    option.selected = mode.value === state.mode;
    itModeSelect.append(option);
  }

  hideItMessage();
}

function saveItInput() {
  itToolState[activeItTool].input = itInput.value;
}

function changeItMode() {
  const state = itToolState[activeItTool];
  state.mode = itModeSelect.value;

  if (activeItTool === "timestamp") {
    state.input = state.mode === "toDate" ? t("timestampSample") : t("dateSample");
  }

  syncItTool();
}

function fillItSample() {
  const state = itToolState[activeItTool];
  const config = getItToolConfig(activeItTool);
  state.input = t(config.sampleKey);
  if (activeItTool === "timestamp" && state.mode === "toTimestamp") {
    state.input = t("dateSample");
  }
  state.output = "";
  syncItTool();
}

function clearItTool() {
  const state = itToolState[activeItTool];
  state.input = "";
  state.output = "";
  syncItTool();
}

async function runActiveItTool() {
  saveItInput();
  hideItMessage();

  const state = itToolState[activeItTool];

  try {
    state.output = await transformItTool(activeItTool, state.mode, state.input);
    syncItTool();
  } catch (error) {
    state.output = "";
    itOutput.value = "";
    showItMessage(error.message);
  }
}

async function transformItTool(tool, mode, input) {
  if (tool === "json") {
    const parsed = parseJson(input);
    return mode === "compact" ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 2);
  }

  if (tool === "base64") {
    return mode === "decode" ? decodeBase64(input) : encodeBase64(input);
  }

  if (tool === "url") {
    return mode === "decode" ? decodeUrl(input) : encodeURIComponent(input);
  }

  if (tool === "sha256") {
    return createSha256(input);
  }

  if (tool === "uuid") {
    return crypto.randomUUID();
  }

  if (tool === "timestamp") {
    return mode === "toTimestamp" ? dateToTimestamp(input) : timestampToDate(input);
  }

  if (tool === "text-case") {
    return transformTextCase(mode, input);
  }

  throw new Error(`Unsupported embedded tool: ${tool}`);
}

function parseJson(input) {
  try {
    return JSON.parse(input);
  } catch (error) {
    throw new Error(t("invalidJson", { message: error.message }));
  }
}

function encodeBase64(input) {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

function decodeBase64(input) {
  try {
    const binary = atob(input.trim());
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    throw new Error(t("invalidBase64"));
  }
}

function decodeUrl(input) {
  try {
    return decodeURIComponent(input);
  } catch {
    throw new Error(t("invalidUrl"));
  }
}

async function createSha256(input) {
  if (!crypto.subtle) {
    throw new Error(t("cryptoUnavailable"));
  }

  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function timestampToDate(input) {
  const value = Number(input.trim());
  if (!Number.isFinite(value)) {
    throw new Error(t("invalidTimestamp"));
  }

  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) {
    throw new Error(t("invalidTimestamp"));
  }

  return date.toISOString();
}

function dateToTimestamp(input) {
  const milliseconds = Date.parse(input.trim());
  if (!Number.isFinite(milliseconds)) {
    throw new Error(t("invalidDate"));
  }

  return String(milliseconds);
}

function transformTextCase(mode, input) {
  if (mode === "upper") {
    return input.toUpperCase();
  }

  if (mode === "lower") {
    return input.toLowerCase();
  }

  return input
    .toLowerCase()
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

async function copyItOutput() {
  if (!itOutput.value) {
    return;
  }

  try {
    await navigator.clipboard.writeText(itOutput.value);
    showItMessage(t("copied"));
  } catch {
    showItMessage(t("copyFailed"));
  }
}

function showItMessage(text) {
  itMessage.textContent = text;
  itMessage.hidden = false;
}

function hideItMessage() {
  itMessage.textContent = "";
  itMessage.hidden = true;
}

function closeSession(sessionId) {
  if (sessions.length === 1) {
    clearAll();
    return;
  }

  const index = sessions.findIndex((session) => session.id === sessionId);
  if (index === -1) {
    return;
  }

  const [closedSession] = sessions.splice(index, 1);
  lastClosedSession = {
    session: closedSession,
    index
  };

  if (activeSessionId === sessionId) {
    activeSessionId = sessions[Math.max(0, index - 1)].id;
  }
  syncFromSession();
  showUndoCloseMessage(sessionTitle(closedSession));
}

function undoCloseSession() {
  if (!lastClosedSession) {
    return;
  }

  saveActiveInput();
  const insertIndex = Math.min(lastClosedSession.index, sessions.length);
  sessions.splice(insertIndex, 0, lastClosedSession.session);
  activeSessionId = lastClosedSession.session.id;
  lastClosedSession = null;
  syncFromSession();
}

function switchSession(sessionId) {
  if (activeSessionId === sessionId) {
    return;
  }

  saveActiveInput();
  activeSessionId = sessionId;
  syncFromSession();
}

function compare() {
  const session = currentSession();
  saveActiveInput();

  hideMessage();
  if (window.location.protocol === "file:") {
    session.message = t("fileCompareBlocked");
    showMessage(session.message);
    return;
  }

  if (!session.leftText.trim() || !session.rightText.trim()) {
    session.message = t("needBothYaml");
    showMessage(session.message);
    return;
  }

  session.runId += 1;
  session.status = "running";
  session.message = "";
  renderSessionTabs();
  syncControls();

  const currentRun = session.runId;
  const worker = new Worker("./src/yaml-diff-worker.js");

  worker.onmessage = (event) => {
    worker.terminate();
    if (session.runId !== currentRun) {
      return;
    }

    session.status = "idle";
    session.durationMs = event.data.durationMs || 0;
    session.compared = true;

    if (!event.data.ok) {
      session.changes = [];
      session.leftLines = [];
      session.rightLines = [];
      session.counts = { added: 0, removed: 0, changed: 0 };
      session.message = event.data.message;
      session.viewMode = "edit";
    } else {
      session.changes = event.data.changes;
      session.leftLines = event.data.leftLines;
      session.rightLines = event.data.rightLines;
      session.counts = event.data.counts;
      session.message = "";
      session.viewMode = "diff";
    }

    if (activeSessionId === session.id) {
      syncFromSession();
    } else {
      renderSessionTabs();
    }
  };

  worker.onerror = (error) => {
    worker.terminate();
    if (session.runId !== currentRun) {
      return;
    }

    session.status = "idle";
    session.compared = true;
    session.changes = [];
    session.leftLines = [];
    session.rightLines = [];
    session.counts = { added: 0, removed: 0, changed: 0 };
    session.message = error.message || t("workerStartFailed");
    session.viewMode = "edit";

    if (activeSessionId === session.id) {
      syncFromSession();
    } else {
      renderSessionTabs();
    }
  };

  worker.postMessage({
    leftText: session.leftText.trim(),
    rightText: session.rightText.trim(),
    options: {
      sortKeys: session.sortKeys
    }
  });
}

function renderDiffPanes() {
  const session = currentSession();
  renderDiffPane(leftDiffPane, session.leftLines);
  renderDiffPane(rightDiffPane, session.rightLines);
}

function renderSessionTabs() {
  sessionTabs.replaceChildren();

  for (const session of sessions) {
    const tab = document.createElement("div");
    tab.className = session.id === activeSessionId ? "session-tab active" : "session-tab";
    tab.dataset.sessionId = session.id;

    const label = document.createElement("button");
    label.className = "session-select";
    label.type = "button";
    const title = document.createElement("strong");
    const meta = document.createElement("small");
    title.textContent = sessionTitle(session);
    meta.textContent = session.status === "running" ? t("running") : sessionSummary(session);
    label.append(title, meta);
    label.addEventListener("click", () => switchSession(session.id));

    const close = document.createElement("button");
    close.className = "session-close";
    close.type = "button";
    close.textContent = t("close");
    close.setAttribute("aria-label", t("closeSessionLabel", { session: sessionTitle(session) }));
    close.disabled = sessions.length === 1;
    close.addEventListener("click", (event) => {
      event.stopPropagation();
      closeSession(session.id);
    });

    tab.append(label, close);
    sessionTabs.append(tab);
  }
}

function sessionSummary(session) {
  if (!session.compared) {
    return t("notCompared");
  }

  const total = session.counts.added + session.counts.removed + session.counts.changed;
  return t("diffCount", { count: total });
}

function sessionTitle(session) {
  return t("sessionName", { number: session.number });
}

function renderDiffPane(container, lines) {
  container.replaceChildren();

  if (lines.length === 0) {
    const empty = document.createElement("div");
    empty.className = "diff-empty";
    empty.textContent = t("noContent");
    container.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  for (const line of lines) {
    const row = document.createElement("div");
    row.className = `diff-line ${line.type}`;

    const number = document.createElement("span");
    number.className = "diff-line-number";
    number.textContent = String(line.number);

    const code = document.createElement("code");
    code.className = "diff-line-code";
    code.textContent = line.text || " ";

    row.append(number, code);
    fragment.append(row);
  }

  container.append(fragment);
}

function syncFromSession() {
  const session = currentSession();
  leftInput.value = session.leftText;
  rightInput.value = session.rightText;
  sortKeys.checked = session.sortKeys;
  syncPanels(session);
  syncControls();
  renderSessionTabs();
  updateSummary(session.counts, session.durationMs);
  if (session.message) {
    showMessage(session.message);
  } else {
    hideMessage();
  }
  renderDiffPanes();
}

function syncControls() {
  const runningCount = sessions.filter((session) => session.status === "running").length;
  const session = currentSession();

  workerStatus.textContent = runningCount > 0 ? t("runningCount", { count: runningCount }) : t("idle");
  compareButton.disabled = session.status === "running";
  compareButton.textContent = session.compared ? t("compareAgain") : t("startCompare");
  editButton.hidden = session.viewMode === "edit";
}

function saveActiveInput(markEdited = false) {
  const session = currentSession(false);
  if (!session) {
    return;
  }

  session.leftText = leftInput.value;
  session.rightText = rightInput.value;
  session.sortKeys = sortKeys.checked;
  if (markEdited) {
    session.viewMode = "edit";
  }
}

function updateSummary(counts, durationMs) {
  addedCount.textContent = String(counts.added);
  removedCount.textContent = String(counts.removed);
  changedCount.textContent = String(counts.changed);
  duration.textContent = `${durationMs || 0}ms`;
}

function showMessage(text) {
  message.textContent = text;
  message.hidden = false;
}

function showUndoCloseMessage(sessionName) {
  message.replaceChildren();

  const text = document.createElement("span");
  text.textContent = t("closedSession", { session: sessionName });

  const undo = document.createElement("button");
  undo.className = "message-action";
  undo.type = "button";
  undo.textContent = t("undoClose");
  undo.addEventListener("click", undoCloseSession);

  message.append(text, undo);
  message.hidden = false;
}

function hideMessage() {
  message.replaceChildren();
  message.hidden = true;
}

function clearAll() {
  const session = currentSession();
  session.leftText = "";
  session.rightText = "";
  session.changes = [];
  session.leftLines = [];
  session.rightLines = [];
  session.counts = { added: 0, removed: 0, changed: 0 };
  session.durationMs = 0;
  session.message = "";
  session.compared = false;
  session.viewMode = "edit";
  session.runId += 1;
  session.status = "idle";
  syncFromSession();
}

function editActiveSession() {
  const session = currentSession();
  session.viewMode = "edit";
  syncFromSession();
}

function fillSample() {
  const session = currentSession();
  session.leftText = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: checkout
  labels:
    app: checkout
spec:
  replicas: 2
  template:
    spec:
      containers:
        - name: web
          image: checkout:v1
          ports:
            - containerPort: 8080
`;

  session.rightText = `kind: Deployment
apiVersion: apps/v1
metadata:
  labels:
    app: checkout
    tier: edge
  name: checkout
spec:
  replicas: 3
  template:
    spec:
      containers:
        - name: web
          image: checkout:v2
          env:
            - name: LOG_LEVEL
              value: info
`;

  session.message = "";
  session.viewMode = "edit";
  syncFromSession();
}

function currentSession(required = true) {
  const session = sessions.find((item) => item.id === activeSessionId);
  if (!session && required) {
    throw new Error("No active session");
  }
  return session;
}

function syncPanels(session) {
  const diffMode = session.viewMode === "diff";
  leftInput.hidden = diffMode;
  rightInput.hidden = diffMode;
  leftDiffPane.hidden = !diffMode;
  rightDiffPane.hidden = !diffMode;
}

function syncDiffScroll(source, target) {
  if (syncingDiffScroll) {
    return;
  }

  syncingDiffScroll = true;
  target.scrollTop = source.scrollTop;
  target.scrollLeft = source.scrollLeft;
  syncingDiffScroll = false;
}
