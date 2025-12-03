//Wed Dec 03 2025 13:26:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
  app,
  BrowserWindow,
  dialog,
  ipcMain
} = require("electron");
const path = require("path");
const fs = require("fs");
let windows = [];
function createWindow(_0x2af2ac) {
  let _0x1ecaa1 = "";
  if (_0x2af2ac) {
    {
      const _0x442bd7 = path.basename(_0x2af2ac);
      _0x1ecaa1 = _0x442bd7.replace(/\.bin$/i, "");
    }
  }
  const _0x2d394e = {
    nodeIntegration: true,
    contextIsolation: false,
    webSecurity: false,
    allowRunningInsecureContent: true,
    devTools: false,
    backgroundThrottling: false
  };
  const _0x107759 = new BrowserWindow({
    width: 440,
    height: 800,
    resizable: true,
    title: _0x1ecaa1 ? "免费之王  谁买谁傻逼之王 - " + _0x1ecaa1 : "免费之王  谁买谁傻逼之王",
    icon: path.join(__dirname, "../../resources/icon.png"),
    autoHideMenuBar: true,
    webPreferences: _0x2d394e
  });
  _0x107759.binPath = _0x2af2ac;
  _0x107759.binFileName = _0x1ecaa1;
  const _0x24a3d4 = path.join(__dirname, "../renderer/index.html");
  _0x107759.loadFile(_0x24a3d4);
  _0x107759.webContents.on("did-finish-load", () => {
    {
      const _0x2cb8f0 = _0x107759.binPath;
      const _0x480b8e = _0x107759.binFileName;
      if (_0x2cb8f0 && fs.existsSync(_0x2cb8f0)) {
        {
          const _0xe27cb0 = path.dirname(_0x2cb8f0);
          try {
            {
              const _0x213d2a = fs.readdirSync(_0xe27cb0);
              const _0xd1974b = _0x213d2a.filter(_0xbdc54b => _0xbdc54b.endsWith(".js") && _0xbdc54b.includes("扩展"));
              if (_0xd1974b.length > 0) {
                {
                  _0xd1974b.forEach((_0x4176aa, _0x1c76d0) => {
                    {
                      const _0x2af9db = path.join(_0xe27cb0, _0x4176aa);
                      try {
                        {
                          const _0x69fb84 = fs.readFileSync(_0x2af9db, "utf8");
                          _0x107759.webContents.executeJavaScript("\n                (function() {\n                  try {\n                    // console.log('[扩展脚本] 开始执行扩展脚本: " + _0x4176aa + "');\n                    \n                    // ==================== 油猴脚本兼容层 ====================\n                    // 为油猴脚本提供必要的全局变量和API\n                    if (typeof unsafeWindow === 'undefined') {\n                      window.unsafeWindow = window;\n                    }\n                    \n                    // 提供 GM_* API 的简单实现（如果脚本需要）\n                    if (typeof GM_getValue === 'undefined') {\n                      window.GM_getValue = function(key, defaultValue) {\n                        const value = localStorage.getItem('GM_' + key);\n                        return value !== null ? JSON.parse(value) : defaultValue;\n                      };\n                    }\n                    \n                    if (typeof GM_setValue === 'undefined') {\n                      window.GM_setValue = function(key, value) {\n                        localStorage.setItem('GM_' + key, JSON.stringify(value));\n                      };\n                    }\n                    \n                    if (typeof GM_deleteValue === 'undefined') {\n                      window.GM_deleteValue = function(key) {\n                        localStorage.removeItem('GM_' + key);\n                      };\n                    }\n                    \n                    if (typeof GM_listValues === 'undefined') {\n                      window.GM_listValues = function() {\n                        const keys = [];\n                        for (let i = 0; i < localStorage.length; i++) {\n                          const key = localStorage.key(i);\n                          if (key && key.startsWith('GM_')) {\n                            keys.push(key.substring(3));\n                          }\n                        }\n                        return keys;\n                      };\n                    }\n                    \n                    if (typeof GM_xmlhttpRequest === 'undefined') {\n                      window.GM_xmlhttpRequest = function(details) {\n                        const xhr = new XMLHttpRequest();\n                        xhr.open(details.method || 'GET', details.url, true);\n                        \n                        if (details.headers) {\n                          for (let key in details.headers) {\n                            xhr.setRequestHeader(key, details.headers[key]);\n                          }\n                        }\n                        \n                        xhr.onload = function() {\n                          if (details.onload) {\n                            details.onload({\n                              status: xhr.status,\n                              statusText: xhr.statusText,\n                              responseText: xhr.responseText,\n                              responseHeaders: xhr.getAllResponseHeaders()\n                            });\n                          }\n                        };\n                        \n                        xhr.onerror = function() {\n                          if (details.onerror) details.onerror(xhr);\n                        };\n                        \n                        xhr.send(details.data || null);\n                        return xhr;\n                      };\n                    }\n                    \n                    // console.log('[扩展脚本] ✓ 油猴兼容层已加载');\n                    \n                    // ==================== 执行扩展脚本 ====================\n                    " + _0x69fb84 + "\n                    // console.log('[扩展脚本] ✓ 执行完成: " + _0x4176aa + "');\n                  } catch(e) {\n                    // console.error('[扩展脚本] 执行失败 (" + _0x4176aa + "):', e);\n                  }\n                })();\n              ").catch(_0x26f6dd => {});
                        }
                      } catch (_0xa201b4) {}
                    }
                  });
                }
              }
            }
          } catch (_0x12e116) {}
        }
      }
      if (_0x2cb8f0 && fs.existsSync(_0x2cb8f0)) {
        {
          const _0x24bd9a = fs.readFileSync(_0x2cb8f0);
          const _0x429d0b = _0x24bd9a.toString("base64");
          _0x107759.webContents.executeJavaScript("\n        (function() {\n          try {\n            // console.log('[登录拦截器] 开始注入');\n\n            function base64ToArrayBuffer(base64) {\n              const binaryString = atob(base64);\n              const length = binaryString.length;\n              const bytes = new Uint8Array(length);\n              for (let i = 0; i < length; i++) {\n                bytes[i] = binaryString.charCodeAt(i);\n              }\n              return bytes.buffer;\n            }\n\n            const binBase64 = '" + _0x429d0b + "';\n            const arrayBuffer = base64ToArrayBuffer(binBase64);\n            // console.log('[登录拦截器] Bin文件大小:', arrayBuffer.byteLength, '字节');\n\n            function applyLoginHook() {\n              if (!window.__require || !window.o4e || !window.o4e.HttpDelegate) {\n                // console.log('[登录拦截器] 依赖未就绪，稍后重试');\n                return false;\n              }\n\n              try {\n                const c = window.__require(\"13\");\n                const account = c.decMsg(arrayBuffer, {\n                  decrypt: c.lz4XorDecode,\n                  encrypt: c.lz4XorEncode,\n                });\n\n                const info = account._raw;\n                let serverId = info && info.serverId;\n\n                const originalSendAsync = window.o4e.HttpDelegate.prototype.sendAsync;\n                if (!originalSendAsync || originalSendAsync.__isPatchedByBinLogin) {\n                  // console.log('[登录拦截器] 已被处理，跳过');\n                  return true;\n                }\n\n                window.o4e.HttpDelegate.prototype.sendAsync = function (e) {\n                  if (e && e.params && e.params.info) {\n                    if (e.params.serverId) {\n                      e.params = { ...info, serverId: e.params.serverId };\n                    } else {\n                      e.params = { ...info };\n                    }\n                    if (serverId) {\n                      e.params.serverId = serverId;\n                      serverId = null;\n                    }\n                  }\n                  return originalSendAsync.call(this, e);\n                };\n                window.o4e.HttpDelegate.prototype.sendAsync.__isPatchedByBinLogin = true;\n\n                // console.log('[登录拦截器] ✓ 已注入 bin 账号信息');\n                return true;\n              } catch (e) {\n                // console.error('[登录拦截器] 注入失败:', e);\n                return false;\n              }\n            }\n\n            let attempts = 0;\n            const maxAttempts = 10;\n\n            function tryApplyLoginHook() {\n              attempts++;\n              // console.log('[登录拦截器] 尝试注入，第 ' + attempts + ' 次');\n              const success = applyLoginHook();\n              if (!success && attempts < maxAttempts) {\n                setTimeout(tryApplyLoginHook, 2000);\n              } else if (!success) {\n                // console.log('[登录拦截器] 多次失败，停止重试');\n              }\n            }\n\n            tryApplyLoginHook();\n          } catch (err) {\n            // console.error('[登录拦截器] 注入出错:', err);\n          }\n        })();\n      ").catch(_0x89abde => {});
        }
      }
      setTimeout(() => {
        {
          const _0x24087f = _0x107759.binFileName || "";
          _0x107759.webContents.executeJavaScript("\n        (function() {\n          try {\n            // console.log('[修改器] 开始执行');\n            \n            // localStorage 扩展\n            const recordItems = {};\n            for (var key in recordItems) {\n              localStorage.setItem(key, recordItems[key]);\n            }\n            \n            function applyGameMods() {\n              // console.log('[修改器] 尝试应用游戏修改');\n              \n              if (!window.__require || !window.cc) {\n                // console.log('[修改器] 游戏引擎未加载');\n                return false;\n              }\n              \n              // console.log('[修改器] 游戏引擎已加载');\n\n              // 游戏速度修改\n              try {\n                const configs = window.__require('Configs');\n                \n                if(configs.HorseConstant) {\n                  configs.HorseConstant.config.pvpBattleSpeed = 100;\n                  // console.log('[修改器] ✓ 已修改 pvpBattleSpeed');\n                }\n                \n                if(configs.NightMare) {\n                  configs.NightMare.map.forEach((v, index)=> {\n                    if (v) v.BattleSpeed = 100;\n                  });\n                  // console.log('[修改器] ✓ 已修改 NightMare BattleSpeed');\n                }\n              } catch(e) {\n                // console.error('[修改器] 速度修改失败:', e);\n              }\n\n              // PlatformManager 修改\n              try {\n                const PlatformManager = window.__require(\"PlatformManager\").PlatformManager;\n                const oldExitGame = PlatformManager.instance.exitGame;\n                if (!oldExitGame.isSelfCreate) {\n                  PlatformManager.instance.exitGame = function () {\n                    const floatText = document.createElement('div');\n                    floatText.textContent = '禁止退出游戏！3分钟后自动刷新重连...';\n                    floatText.style.cssText = `\n                      position: fixed; top: 50%; left: 50%;\n                      transform: translate(-50%, -50%);\n                      color: red; background-color: white;\n                      padding: 12px 24px; border-radius: 8px;\n                      box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n                      font-size: 30px; font-weight: bold; z-index: 10000;\n                    `;\n                    document.body.appendChild(floatText);\n                    if (window.cc) cc.director.pause();\n                    \n                    setTimeout(() => {\n                      // console.log('[修改器] 3分钟已到，刷新窗口');\n                      location.reload();\n                    }, 3 * 60 * 1000);\n                  };\n                  PlatformManager.instance.exitGame.isSelfCreate = true;\n                  // console.log('[修改器] ✓ 已修改 PlatformManager');\n                }\n              } catch(e) {\n                // console.error('[修改器] PlatformManager修改失败:', e);\n              }\n\n              // 自定义 UI 按钮\n              try {\n                if (window.cc && !cc.isAddCustomBtn) {\n                  const binFileName = '" + _0x24087f + "';\n                  document.title = binFileName ? '免费之王  谁买谁傻逼之王 - ' + binFileName : '免费之王  谁买谁傻逼之王';\n                  \n                  const oldRender = cc.renderer.render;\n                  let isRenderClosed = false;\n                  \n                  const buttonContainer = document.createElement(\"div\");\n                  buttonContainer.style.cssText = `\n                    position: fixed; top: 5px; right: 5px;\n                    display: inline-flex; gap: 5px; z-index: 10000;\n                    background-color: rgba(255, 255, 255, 0.15);\n                    padding: 3px 6px; border-radius: 8px;\n                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n                    width: auto;\n                  `;\n\n                  const renderButton = document.createElement(\"button\");\n                  renderButton.id = \"toggleRender\";\n                  renderButton.textContent = \"关渲染\";\n                  renderButton.style.cssText = `\n                    padding: 4px 8px; border: none; border-radius: 10px;\n                    background-color: #F44336; color: white; cursor: pointer;\n                    font-weight: bold; transition: all 0.3s; font-size: 0.6em;\n                  `;\n                  \n                  renderButton.addEventListener(\"click\", function () {\n                    if (!isRenderClosed) {\n                      cc.renderer.customRenderCount = 0;\n                      cc.renderer.render = function (ecScene, dt) {\n                        cc.renderer.customRenderCount++;\n                        if (cc.renderer.customRenderCount % 300 == 0) {\n                          oldRender.call(this, ecScene, dt);\n                        }\n                      };\n                      renderButton.textContent = \"开渲染\";\n                      renderButton.style.backgroundColor = \"#4CAF50\";\n                      isRenderClosed = true;\n                    } else {\n                      cc.renderer.render = oldRender;\n                      renderButton.textContent = \"关渲染\";\n                      renderButton.style.backgroundColor = \"#F44336\";\n                      isRenderClosed = false;\n                    }\n                  });\n\n                  buttonContainer.appendChild(renderButton);\n                  document.body.appendChild(buttonContainer);\n                  cc.isAddCustomBtn = true;\n                  // console.log('[修改器] ✓ 已添加自定义按钮');\n                }\n              } catch(e) {\n                // console.error('[修改器] UI按钮添加失败:', e);\n              }\n\n              // console.log('[修改器] ✓ 游戏修改应用完成');\n              return true;\n            }\n\n            let attempts = 0;\n            const maxAttempts = 10;\n            \n            function tryApplyMods() {\n              attempts++;\n              // console.log('[修改器] 尝试应用修改，第 ' + attempts + ' 次');\n              \n              const success = applyGameMods();\n              if (success) {\n                // console.log('[修改器] ✓ 修改已成功应用');\n              } else if (attempts < maxAttempts) {\n                setTimeout(tryApplyMods, 2000 * attempts);\n              } else {\n                // console.log('[修改器] 达到最大重试次数');\n              }\n            }\n            \n            tryApplyMods();\n\n          } catch(e) {\n            // console.error('[修改器] 初始化失败:', e);\n          }\n        })();\n      ").catch(_0x291a08 => {});
        }
      }, 5000);
    }
  });
  _0x107759.webContents.on("before-input-event", (_0x4eaead, _0x1a0cc8) => {
    {
      if (_0x1a0cc8.key === "F12" || _0x1a0cc8.control && _0x1a0cc8.shift && _0x1a0cc8.key === "I" || _0x1a0cc8.control && _0x1a0cc8.shift && _0x1a0cc8.key === "J" || _0x1a0cc8.control && _0x1a0cc8.shift && _0x1a0cc8.key === "C") {
        {
          _0x4eaead.preventDefault();
          return;
        }
      }
      if (_0x1a0cc8.key === "F5" && _0x1a0cc8.type === "keyDown") {
        {
          _0x107759.reload();
          _0x4eaead.preventDefault();
        }
      }
    }
  });
  _0x107759.on("ready-to-show", () => {
    {
      _0x107759.show();
    }
  });
  _0x107759.on("closed", function () {
    {
      console.log("窗口已关闭");
      const _0x3ba429 = windows.indexOf(_0x107759);
      if (_0x3ba429 > -1) {
        {
          windows.splice(_0x3ba429, 1);
        }
      }
    }
  });
  windows.push(_0x107759);
  return _0x107759;
}
app.whenReady().then(async () => {
  try {
    console.log("[应用] Electron 应用已准备就绪");
    const _0x130de5 = process.argv.slice(2);
    console.log("[应用] 命令行参数:", _0x130de5);
    let _0x1f7ba8 = [];
    _0x130de5.length > 0 && (_0x1f7ba8 = _0x130de5.filter(_0x5c7eae => _0x5c7eae.toLowerCase().endsWith(".bin") && fs.existsSync(_0x5c7eae)), console.log("[应用] 从命令行参数找到的 BIN 文件:", _0x1f7ba8));
    if (_0x1f7ba8.length === 0) {
      {
        console.log("[应用] 显示文件选择对话框");
        const _0x1cfdfc = {
          nodeIntegration: false,
          contextIsolation: true
        };
        const _0x8284db = {
          show: false,
          webPreferences: _0x1cfdfc
        };
        const _0x548e4a = new BrowserWindow(_0x8284db);
        const _0xeb6df3 = {
          title: "选择游戏 BIN 文件（可多选）",
          properties: ["openFile", "multiSelections"],
          filters: [{
            name: "BIN 文件",
            extensions: ["bin", "BIN"]
          }]
        };
        const _0x568049 = await dialog.showOpenDialog(_0x548e4a, _0xeb6df3);
        _0x548e4a.close();
        _0x1f7ba8 = _0x568049.canceled ? [] : _0x568049.filePaths;
        console.log("[应用] 用户选择的 BIN 文件:", _0x1f7ba8);
      }
    }
    if (_0x1f7ba8.length > 0) {
      {
        console.log("[应用] 为 " + _0x1f7ba8.length + " 个 BIN 文件创建窗口");
        for (let _0x18a834 = 0; _0x18a834 < _0x1f7ba8.length; _0x18a834++) {
          createWindow(_0x1f7ba8[_0x18a834]);
        }
      }
    } else {
      {
        console.log("[应用] 未选择 BIN 文件，创建普通窗口");
        createWindow(null);
      }
    }
  } catch (_0x5c8483) {
    console.error("[  应用启动] 启动失败:", _0x5c8483);
    dialog.showErrorBox("应用启动失败", "启动时发生错误: " + _0x5c8483.message);
    app.quit();
  }
});
app.on("window-all-closed", function () {
  console.log("[应用] 所有窗口已关闭");
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  BrowserWindow.getAllWindows().length === 0 && createWindow(null);
});