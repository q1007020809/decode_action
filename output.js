//Tue Jan 06 2026 15:34:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
'use strict';

(function () {
  var _0xkwedfsis = {
    'stack': [],
    'ip': 0,
    'memory': {}
  };
  function _0xzxkmus(_0xogsu) {
    _0xkwedfsis.stack.push(_0xogsu);
  }
  function _0xwakhnyj() {
    return _0xkwedfsis.stack.pop();
  }
  function _0xhmosttsnz(_0xogsu) {
    var _0xnuqc = _0xwakhnyj();
    var _0xndrsy = _0xwakhnyj();
    _0xkwedfsis.stack.push(_0xnuqc + _0xndrsy);
  }
  function _0xygmyeljpck(_0xogsu) {
    var _0xvnlh = _0xwakhnyj();
    var _0xclqah = _0xwakhnyj();
    _0xkwedfsis.stack.push(_0xvnlh - _0xclqah);
  }
  return {
    'push': _0xzxkmus,
    'pop': _0xwakhnyj,
    'add': _0xhmosttsnz,
    'sub': _0xygmyeljpck
  };
})();
(function () {
  var _0xatnfefth = function () {
    var _0xbjfpwt = new Date();
    debugger;
    if (new Date() - _0xbjfpwt > 100) {
      while (true) {}
    }
  };
  if (typeof setInterval !== 'undefined') {
    setInterval(_0xatnfefth, 1000);
  }
})();
function wrapjxNlhFrB(i) {
  return strwzoMMvkS[i];
}
const strwzoMMvkS = ["\u7ea2\u9c7c", "\u6a59\u9c7c", "\u7d2b\u9c7c", "\u84dd\u9c7c", "function", "info", "fish-star-log", "div", "color:#666", "color:#22c55e", "color:#ef4444", "fish-star-progress", "artifact_upgradestar", "book_upgradeartifact", "success", "error", "book_claimpointreward", "\u5347\u661f\u4efb\u52a1\u5df2\u624b\u52a8\u505c\u6b62", "fish-star-start", "fish-star-stop", "0.6", "1", "fish-star-float-btn", "\u9c7c\u7075", "scale(1.1)", "scale(1)", "fish-star-panel", "none", "block", "click", "\u811a\u672c\u5df2\u52a0\u8f7d", "complete", "load"];
let isRunning = false;
const baseDelay = 300;
const starUpgradeRanges = [{
  start: 1301,
  end: 1305,
  name: wrapjxNlhFrB(0)
}, {
  start: 1401,
  end: 1412,
  name: wrapjxNlhFrB(1)
}, {
  start: 1501,
  end: 1506,
  name: wrapjxNlhFrB(2)
}, {
  start: 1601,
  end: 1604,
  name: wrapjxNlhFrB(3)
}];
async function waitForWS() {
  return new Promise(resolve => {
    const check = () => {
      if (window.ws && typeof window.ws.sendAsync === wrapjxNlhFrB(4)) {
        resolve();
      } else {
        setTimeout(check, 500);
      }
    };
    check();
  });
}
async function sendCmd(cmd, params = {}) {
  let msg;
  if (window.g_utils && typeof window.g_utils.bon?.encode === wrapjxNlhFrB(4)) {
    msg = {
      ack: 0,
      body: window.g_utils.bon.encode(params),
      cmd: cmd,
      seq: Date.now(),
      time: Date.now()
    };
  } else {
    msg = {
      ack: 0,
      cmd: cmd,
      params: params,
      seq: Date.now(),
      time: Date.now()
    };
  }
  return await window.ws.sendAsync(msg);
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function showLog(msg, type = wrapjxNlhFrB(5)) {
  const logContainer = document.getElementById(wrapjxNlhFrB(6));
  if (!logContainer) return;
  const time = new Date().toLocaleTimeString();
  const logItem = document.createElement(wrapjxNlhFrB(7));
  var dcjeCwwiTV = 90;
  const styles = {
    info: wrapjxNlhFrB(8),
    success: wrapjxNlhFrB(9),
    error: wrapjxNlhFrB(10)
  };
  logItem.style = `${styles[type]};margin:4px 0;font-size:12px;line-height:1.4`;
  logItem.innerHTML = `[${time}] ${msg}`;
  logContainer.appendChild(logItem);
  for (var dcWoTPmvCw = 0; dcWoTPmvCw < 0; dcWoTPmvCw++) {}
  var dctUzthCBc = 67;
  logContainer.scrollTop = logContainer.scrollHeight;
}
function updateProgress(current, total) {
  const progressText = document.getElementById(wrapjxNlhFrB(11));
  if (progressText) {
    progressText.textContent = `\u8fdb\u5ea6\uff1a${current}/${total}`;
  }
}
async function executeOneKeyFishStarUpgrade() {
  if (isRunning) return;
  isRunning = true;
  var dcVHUptldD = 113;
  updateButtonState();
  const totalCount = starUpgradeRanges.reduce((total, range) => {
    return total + (range.end - range.start + 1);
  }, 0);
  let globalSuccessCount = 0;
  let globalProgress = 0;
  showLog(`\u5f00\u59cb\u5206\u6bb5\u6279\u91cf\u9c7c\u7075\u5347\u661f - \u5171${starUpgradeRanges.length}\u6bb5\uff0c\u603b\u6570\u91cf\uff1a${totalCount}\u4e2a`, wrapjxNlhFrB(5));
  updateProgress(globalProgress, totalCount);
  for (const range of starUpgradeRanges) {
    for (var dcgFsjvDOQ = 0; dcgFsjvDOQ < 0; dcgFsjvDOQ++) {}
    const {
      start,
      end,
      name
    } = range;
    const rangeCount = end - start + 1;
    let rangeSuccessCount = 0;
    showLog(`
=== \u542f\u52a8${name}\u5347\u661f\uff08ID:${start}~${end}\uff0c\u5171${rangeCount}\u4e2a\uff09 ===`, wrapjxNlhFrB(5));
    for (let itemId = start; itemId <= end; itemId++) {
      globalProgress++;
      const currentGlobalProgress = `${globalProgress}/${totalCount}`;
      const rangeProgress = `${itemId - start + 1}/${rangeCount}`;
      var dcdDkveCKl = 58;
      const progressDesc = `${name} ID:${itemId}\uff08\u6bb5\u5185\uff1a${rangeProgress} | \u5168\u5c40\uff1a${currentGlobalProgress}\uff09`;
      showLog(`\u5f00\u59cb${progressDesc}`, wrapjxNlhFrB(5));
      for (var dcLWlqphSv = 0; dcLWlqphSv < 0; dcLWlqphSv++) {}
      updateProgress(globalProgress, totalCount);
      try {
        let currentItemId = itemId * 10 + 1;
        for (let i = 0; i < 4; i++) {
          const response = await sendCmd(wrapjxNlhFrB(12), {
            heroId: -1,
            itemId: currentItemId
          });
          await sleep(100);
          await sendCmd(wrapjxNlhFrB(13), {
            artifactId: itemId
          });
          currentItemId++;
          if (response?.ack === 1 || response?.code === 0) {
            globalSuccessCount++;
            rangeSuccessCount++;
          }
        }
        for (var dcWZfozgtN = 0; dcWZfozgtN < 0; dcWZfozgtN++) {}
        showLog(`${progressDesc} \u5347\u661f\u6210\u529f`, wrapjxNlhFrB(14));
      } catch (error) {
        showLog(`${progressDesc} \u5347\u661f\u5931\u8d25\uff1a${error.message}`, wrapjxNlhFrB(15));
      }
      if (!(itemId === end && range === starUpgradeRanges[starUpgradeRanges.length - 1])) {
        await sleep(baseDelay);
      }
    }
    var dcAEXMgYpE = 21;
    showLog(`${name}\u5347\u661f\u5b8c\u6210\uff0c\u5f00\u59cb\u9886\u53d6\u56fe\u9274\u5956\u52b1...`, wrapjxNlhFrB(5));
    for (let i = 0; i < 10; i++) {
      await sendCmd(wrapjxNlhFrB(16), {});
      await sleep(100);
    }
    const rangeSummary = `${name}\u5347\u661f\u603b\u7ed3\uff1a\u603b\u6570${rangeCount}\u4e2a\uff0c\u6210\u529f${rangeSuccessCount}\u4e2a`;
    showLog(rangeSummary, rangeSuccessCount === rangeCount ? wrapjxNlhFrB(14) : wrapjxNlhFrB(5));
  }
  for (var dcOIqMKBYu = 0; dcOIqMKBYu < 0; dcOIqMKBYu++) {}
  const globalSummary = `\u6279\u91cf\u9c7c\u7075\u5347\u661f\u4efb\u52a1\u5168\u90e8\u5b8c\u6210\uff01\u603b\u6570\u91cf\uff1a${totalCount}\u4e2a | \u6210\u529f\uff1a${globalSuccessCount}\u4e2a | \u6d89\u53ca\u533a\u95f4\uff1a1301~1305\u30011401~1412\u30011501~1506\u30011601~1604`;
  showLog(`\n${globalSummary}`, globalSuccessCount === totalCount ? wrapjxNlhFrB(14) : wrapjxNlhFrB(5));
  isRunning = false;
  updateButtonState();
}
function stopUpgrade() {
  var swbxBLYgTa = 0;
  while (swbxBLYgTa !== 65620) {
    switch (swbxBLYgTa) {
      case 0:
        isRunning = false;
        swbxBLYgTa = 8659;
        break;
      case 9096:
        updateButtonState();
        swbxBLYgTa = 65620;
        break;
      case 8659:
        showLog(wrapjxNlhFrB(17), wrapjxNlhFrB(15));
        swbxBLYgTa = 9096;
        break;
      default:
        break;
    }
  }
}
function updateButtonState() {
  for (var dcpzQWkzTy = 0; dcpzQWkzTy < 0; dcpzQWkzTy++) {}
  const startBtn = document.getElementById(wrapjxNlhFrB(18));
  const stopBtn = document.getElementById(wrapjxNlhFrB(19));
  if (startBtn && stopBtn) {
    startBtn.disabled = isRunning;
    stopBtn.disabled = !isRunning;
    startBtn.style.opacity = isRunning ? wrapjxNlhFrB(20) : wrapjxNlhFrB(21);
    stopBtn.style.opacity = !isRunning ? wrapjxNlhFrB(20) : wrapjxNlhFrB(21);
  }
}
function createUI() {
  const floatBtn = document.createElement(wrapjxNlhFrB(7));
  var dccIFoeErp = 76;
  for (var dcoZrVmAwi = 0; dcoZrVmAwi < 0; dcoZrVmAwi++) {}
  floatBtn.id = wrapjxNlhFrB(22);
  floatBtn.style.cssText = `
        position:fixed;top:80px;right:20px;width:40px;height:40px;
        background:#4f46e5;border-radius:50%;color:white;font-size:14px;
        display:flex;align-items:center;justify-content:center;cursor:pointer;
        box-shadow:0 2px 10px rgba(0,0,0,0.2);z-index:9999;
        transition:transform 0.2s;
    `;
  floatBtn.textContent = wrapjxNlhFrB(23);
  floatBtn.onmouseover = () => floatBtn.style.transform = wrapjxNlhFrB(24);
  floatBtn.onmouseout = () => floatBtn.style.transform = wrapjxNlhFrB(25);
  var dciREtOlrj = 95;
  const panel = document.createElement(wrapjxNlhFrB(7));
  panel.id = wrapjxNlhFrB(26);
  panel.style.cssText = `
        position:fixed;top:130px;right:20px;width:320px;background:white;
        border-radius:8px;box-shadow:0 2px 16px rgba(0,0,0,0.15);z-index:9998;
        padding:16px;display:none;
    `;
  panel.innerHTML = `
        <h4 style="margin:0 0 12px 0;color:#333;font-size:16px;">\u9c7c\u7075\u6279\u91cf\u5347\u661f</h4>
        <div id="fish-star-progress" style="margin-bottom:12px;font-size:14px;color:#666;">\u8fdb\u5ea6\uff1a0/0</div>
        <div style="display:flex;gap:8px;margin-bottom:12px;">
            <button id="fish-star-start" style="flex:1;padding:8px 0;background:#4f46e5;color:white;border:none;border-radius:4px;cursor:pointer;">\u5f00\u59cb\u5347\u661f</button>
            <button id="fish-star-stop" style="flex:1;padding:8px 0;background:#ef4444;color:white;border:none;border-radius:4px;cursor:pointer;" disabled>\u505c\u6b62</button>
        </div>
        <div style="height:220px;overflow-y:auto;border:1px solid #f0f0f0;border-radius:4px;padding:8px;">
            <div id="fish-star-log" style="font-size:12px;"></div>
        </div>
    `;
  floatBtn.onclick = () => {
    panel.style.display = panel.style.display === wrapjxNlhFrB(27) ? wrapjxNlhFrB(28) : wrapjxNlhFrB(27);
  };
  document.body.appendChild(floatBtn);
  document.body.appendChild(panel);
  document.getElementById(wrapjxNlhFrB(18)).addEventListener(wrapjxNlhFrB(29), executeOneKeyFishStarUpgrade);
  document.getElementById(wrapjxNlhFrB(19)).addEventListener(wrapjxNlhFrB(29), stopUpgrade);
}
async function init() {
  var swBtwnOVox = 0;
  while (swBtwnOVox !== 96313) {
    switch (swBtwnOVox) {
      case 3828:
        createUI();
        swBtwnOVox = 6588;
        break;
      case 0:
        await waitForWS();
        swBtwnOVox = 3828;
        break;
      case 6588:
        showLog(wrapjxNlhFrB(30), wrapjxNlhFrB(14));
        swBtwnOVox = 96313;
        break;
      default:
        break;
    }
  }
}
if (document.readyState === wrapjxNlhFrB(31)) {
  init();
} else {
  window.addEventListener(wrapjxNlhFrB(32), init);
}