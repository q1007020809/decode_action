//Mon Jan 05 2026 03:45:37 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _xor = function (_0x47333e, _0x434ff8) {
  return _0x47333e ^ _0x434ff8;
};
var _and = function (_0x2af2d6, _0x2dee04) {
  return _0x2af2d6 & _0x2dee04;
};
var _or = function (_0xbe6242, _0x15b527) {
  return _0xbe6242 | _0x15b527;
};
var _shl = function (_0x15ff42, _0x58f462) {
  return _0x15ff42 << _0x58f462;
};
var _shr = function (_0x6386fa, _0x1cf204) {
  return _0x6386fa >> _0x1cf204;
};
var _not = function (_0xffbdf7) {
  return ~_0xffbdf7;
};
var _add = function (_0x38db4d, _0x37087a) {
  return _0x38db4d + _0x37087a;
};
var _sub = function (_0x199bd5, _0x561a05) {
  return _0x199bd5 - _0x561a05;
};
var unsafeWindow = window;
(function () {
  "use strict";
  console.log("[淬炼助手] 脚本已启动，等待游戏环境...");
  const _0x52b178 = {
    "1": "攻击",
    "2": "血量",
    "3": "防御",
    "4": "速度",
    "5": "破甲",
    "6": "破甲抵抗",
    "7": "精准",
    "8": "格挡",
    "9": "减伤",
    "10": "暴击",
    "11": "暴击抵抗",
    "12": "爆伤",
    "13": "爆伤抵抗",
    "14": "技能伤害",
    "15": "免控",
    "16": "眩晕免疫",
    "17": "冰冻免疫",
    "18": "沉默免疫",
    "19": "流血免疫",
    "20": "中毒免疫",
    "21": "灼烧免疫"
  };
  let _0x50d10e = {
    helperEnabled: false,
    quenchCount: 0,
    targetAttrId: null,
    targetAttrValue: null,
    currentDialog: null
  };
  let _0x34c947 = null;
  const _0x50a018 = _0x370f87 => _0x52b178[String(_0x370f87)] || "属性" + _0x370f87;
  function _0x1be8f1(_0x39492b, _0x4f3bf4) {
    try {
      const _0x5d4360 = unsafeWindow.ROLE?.["heroes"]?.["get"]?.(_0x39492b);
      if (!_0x5d4360 || !_0x5d4360.equips) {
        return null;
      }
      const _0x289710 = _0x4f3bf4 - 1;
      if (_0x289710 < 0 || _0x289710 >= _0x5d4360.equips.length) {
        return null;
      }
      const _0x264132 = _0x5d4360.equips[_0x289710];
      return _0x264132?.["quenches"] || null;
    } catch (_0x2c01c9) {
      console.error("[淬炼助手] 获取装备淬炼属性失败:", _0x2c01c9);
      return null;
    }
  }
  function _0x5904f8(_0x2aa56d) {
    if (!_0x50d10e.helperEnabled) {
      return false;
    }
    if (!_0x50d10e.targetAttrId || !_0x50d10e.targetAttrValue) {
      return false;
    }
    const _0x30695d = _0x2aa56d?.["_equipInfo"];
    if (!_0x30695d) {
      return false;
    }
    const _0x6ea6de = _0x1be8f1(_0x30695d.heroId, _0x30695d.part);
    if (!_0x6ea6de) {
      return false;
    }
    for (const [, _0x50b810] of _0x6ea6de) {
      {
        if (_0x50b810.attrId === Number(_0x50d10e.targetAttrId) && _0x50b810.attrNum >= Number(_0x50d10e.targetAttrValue)) {
          return true;
        }
      }
    }
    return false;
  }
  function _0x38d8a2(_0x13fa56) {
    try {
      {
        const _0x22d078 = unsafeWindow.__require?.("TipsManager");
        _0x22d078?.["SHOW_TIP"]?.(_0x13fa56);
      }
    } catch (_0x302b39) {
      console.log("[淬炼助手]", _0x13fa56);
    }
  }
  function _0x6a7ea4(_0x1d21bb) {
    {
      if (!_0x1d21bb) {
        return;
      }
      _0x1d21bb._quenchTimes = 0;
      if (typeof _0x1d21bb._clearQuenchAnims === "function") {
        {
          _0x1d21bb._clearQuenchAnims();
        }
      }
      _0x50d10e.helperEnabled = false;
      if (_0x1d21bb._helperBtn) {
        {
          _0x1d21bb._helperBtn.selected = false;
        }
      }
      _0x38d8a2("已达成目标属性! 共淬炼" + _0x50d10e.quenchCount + "次");
      console.log("[淬炼助手] 已达成目标，停止自动淬炼");
    }
  }
  function _0x4c1145() {
    if (_0x34c947) {
      _0x34c947.style.display = "flex";
      return _0x34c947;
    }
    const _0x5cf182 = document.createElement("div");
    _0x5cf182.id = "quench-helper-overlay";
    _0x5cf182.style.cssText = "\n      position: fixed;\n      top: 0; left: 0; right: 0; bottom: 0;\n      background: rgba(0, 0, 0, 0.3);\n      display: flex;\nvar _0xd4fa86=(10042544^8357733).toString(16);\n      justify-content: center;\n      align-items: center;\n      z-index: 999998;\n    ";
    _0x5cf182.onclick = _0x48884a => {
      {
        if (_0x48884a.target === _0x5cf182) {
          _0x531ac4();
        }
      }
    };
    const _0x4d2c96 = document.createElement("div");
    _0x4d2c96.style.cssText = "\n      width: 300px;\n      background: #fff;\n      border: 1px solid rgba(74,144,226,0.2);\n      border-radius: 12px;\n      padding: 12px;\n      color: #333;\n      font-family: 'Microsoft YaHei', sans-serif;\n      box-shadow: 0 4px 24px rgba(74,144,226,0.18);\n      font-size: 13px;\n    ";
    const _0x2360e8 = document.createElement("div");
    _0x2360e8.style.cssText = "\n      font-size: 16px;\n      font-weight: bold;\nvar _0xded77d=\"d3e870029d13edd2e1e9752634e4e36c\";\n      color: #4A90E2;\n      margin-bottom: 10px;\n      text-align: center;\n      padding: 8px 10px;\n      border-bottom: 1px solid rgba(74,144,226,0.15);\n      cursor: pointer;\n    ";
    _0x2360e8.textContent = "淬炼助手";
    _0x2360e8.onclick = _0x531ac4;
    _0x4d2c96.appendChild(_0x2360e8);
    const _0x3be2ca = document.createElement("div");
    _0x3be2ca.style.cssText = "\n      text-align: center;\n      padding: 8px;\n      margin-bottom: 12px;\n      background: rgba(74,144,226,0.1);\n      border-radius: 6px;\n      font-size: 12px;\n      color: #4A90E2;\n    ";
    _0x3be2ca.textContent = "设置目标后，自动淬炼达到目标会自动停止";
    _0x4d2c96.appendChild(_0x3be2ca);
    const _0x48d776 = document.createElement("div");
    _0x48d776.style.cssText = "display:flex;gap:10px;margin-bottom:12px;align-items:center;";
    const _0x24406b = document.createElement("span");
    _0x24406b.style.cssText = "color:#666;font-size:13px;min-width:70px;";
    _0x24406b.textContent = "目标属性";
    _0x48d776.appendChild(_0x24406b);
    const _0x46d8c5 = document.createElement("select");
    _0x46d8c5.id = "quench-attr-select";
    _0x46d8c5.style.cssText = "\n      flex: 1;\n      padding: 8px 10px;\n      background: rgba(74,144,226,0.05);\n      border: 1px solid rgba(74,144,226,0.3);\n      border-radius: 6px;\n      color: #333;\n      font-size: 13px;\n      cursor: pointer;\n      outline: none;\n    ";
    _0x46d8c5.innerHTML = "<option value=\"\">选择属性</option>" + Object.entries(_0x52b178).map(([_0x50e8f9, _0x4c5fb0]) => "<option value=\"" + _0x50e8f9 + "\">" + _0x4c5fb0 + "</option>").join("");
    _0x48d776.appendChild(_0x46d8c5);
    _0x4d2c96.appendChild(_0x48d776);
    var _0x5f41fa = function () {
      {
        return "1eb3cb6b8b83c97d2416e0fb";
      }
    }();
    const _0x586a3a = document.createElement("div");
    _0x586a3a.style.cssText = "display:flex;gap:10px;margin-bottom:15px;align-items:center;";
    const _0xac27b6 = document.createElement("span");
    _0xac27b6.style.cssText = "color:#666;font-size:13px;min-width:70px;";
    _0xac27b6.textContent = "目标数值 ≥";
    _0x586a3a.appendChild(_0xac27b6);
    const _0x52cd8d = document.createElement("input");
    _0x52cd8d.id = "quench-value-input";
    _0x52cd8d.type = "number";
    _0x52cd8d.min = "1";
    _0x52cd8d.max = "100";
    _0x52cd8d.value = "10";
    _0x52cd8d.style.cssText = "\n      flex: 1;\n      padding: 8px 10px;\n      background: rgba(74,144,226,0.03);\n      border: 1px solid rgba(74,144,226,0.2);\n      border-radius: 6px;\n      color: #333;\n      font-size: 13px;\n      text-align: center;\n      outline: none;\n    ";
    _0x586a3a.appendChild(_0x52cd8d);
    _0x4d2c96.appendChild(_0x586a3a);
    const _0x5a7390 = document.createElement("button");
    _0x5a7390.textContent = "确认设置";
    _0x5a7390.style.cssText = "\n      width: 100%;\n      padding: 10px;\n      border: none;\n      border-radius: 8px;\n      color: white;\n      font-size: 13px;\n      font-weight: bold;\n      cursor: pointer;\n      background: linear-gradient(135deg, #5BA0E8 0%, #4A90E2 100%);\n      box-shadow: 0 2px 8px rgba(74,144,226,0.3);\n    ";
    _0x5a7390.onclick = () => {
      {
        if (!_0x46d8c5.value || !_0x52cd8d.value) {
          {
            _0x38d8a2("请选择属性和目标数值");
            return;
          }
        }
        _0x50d10e.targetAttrId = _0x46d8c5.value;
        _0x50d10e.targetAttrValue = parseInt(_0x52cd8d.value);
        _0x50d10e.helperEnabled = true;
        _0x50d10e.quenchCount = 0;
        _0x50d10e.currentDialog?.["_helperBtn"] && (_0x50d10e.currentDialog._helperBtn.selected = true);
        _0x38d8a2("已设置目标: " + _0x50a018(_0x50d10e.targetAttrId) + " ≥ " + _0x50d10e.targetAttrValue);
        _0x531ac4(true);
      }
    };
    _0x4d2c96.appendChild(_0x5a7390);
    _0x5cf182.appendChild(_0x4d2c96);
    document.body.appendChild(_0x5cf182);
    _0x34c947 = _0x5cf182;
    return _0x5cf182;
  }
  function _0x14c846() {
    const _0x3fb9f1 = _0x4c1145();
    _0x3fb9f1.style.display = "flex";
    const _0x34e730 = document.getElementById("quench-attr-select");
    const _0x3a7401 = document.getElementById("quench-value-input");
    _0x34e730 && _0x50d10e.targetAttrId && (_0x34e730.value = _0x50d10e.targetAttrId);
    if (_0x3a7401 && _0x50d10e.targetAttrValue) {
      {
        _0x3a7401.value = _0x50d10e.targetAttrValue;
      }
    }
  }
  function _0x531ac4(_0x3edaa3 = false) {
    _0x34c947 && (_0x34c947.style.display = "none");
    if (!_0x3edaa3 && !_0x50d10e.helperEnabled && _0x50d10e.currentDialog?.["_helperBtn"]) {
      var _0xab2e4e = ["865d99d9", "0b248db8", "6e03e704"];
      _0x50d10e.currentDialog._helperBtn.selected = false;
    }
  }
  function _0x5a6fa5() {
    {
      const _0x570181 = setInterval(() => {
        {
          try {
            if (typeof unsafeWindow.__require !== "function") {
              return;
            }
            if (typeof unsafeWindow.fgui !== "object") {
              return;
            }
            const _0xa7dbaf = unsafeWindow.__require("QuenchStageUpDialog");
            if (!_0xa7dbaf?.["QuenchStageUpDialog"]) {
              return;
            }
            const _0x20d3b4 = _0xa7dbaf.QuenchStageUpDialog;
            if (_0x20d3b4.prototype._quenchHelperPatched) {
              return;
            }
            _0x20d3b4.prototype._quenchHelperPatched = true;
            _0x20d3b4.prototype._helperBtn = null;
            _0x20d3b4.prototype._helperLabel = null;
            const _0x3ae3ff = _0x20d3b4.prototype._doEquipQuench;
            _0x20d3b4.prototype._doEquipQuench = async function () {
              const _0x1f8233 = await _0x3ae3ff.apply(this, arguments);
              _0x50d10e.helperEnabled && this._isOpenAuto && (_0x50d10e.quenchCount++, setTimeout(() => {
                if (_0x5904f8(this)) {
                  {
                    _0x6a7ea4(this);
                  }
                }
              }, 100));
              return _0x1f8233;
            };
            const _0x2298c9 = _0x20d3b4.prototype._changeAutoState;
            _0x20d3b4.prototype._changeAutoState = function () {
              {
                _0x2298c9.apply(this, arguments);
                if (this._isOpenAuto) {
                  if (!this._helperBtn) {
                    try {
                      {
                        const _0xda05f = this.ui;
                        const _0x1f2d33 = _0xda05f.m_btnHelp;
                        if (!_0x1f2d33) {
                          console.error("[淬炼助手] 找不到帮助按钮作为定位锚点");
                          return;
                        }
                        const _0x1011de = unsafeWindow.fgui.UIPackage.createObject("ui_common", "BtnCheckBox").asButton;
                        _0x1011de.selected = false;
                        const _0x467348 = unsafeWindow.fgui.UIPackage.createObject("ui_common", "TextArea").asTextField;
                        _0x467348.text = "淬炼助手";
                        _0x467348.fontSize = 24;
                        _0x467348.color = new unsafeWindow.cc.Color(155, 92, 46);
                        const _0x2b6518 = 200;
                        _0x1011de.setPosition(_0x2b6518, _0x1f2d33.y + (_0x1f2d33.height - _0x1011de.height) / 2);
                        _0x467348.setPosition(_0x1011de.x + _0x1011de.width, _0x1f2d33.y + 12 + (_0x1f2d33.height - _0x1011de.height) / 2);
                        _0x1011de.onClick(() => {
                          if (_0x1011de.selected) {
                            {
                              _0x14c846();
                            }
                          } else {
                            _0x50d10e.helperEnabled = false;
                            _0x531ac4();
                          }
                        });
                        _0xda05f.addChild(_0x1011de);
                        _0xda05f.addChild(_0x467348);
                        this._helperBtn = _0x1011de;
                        this._helperLabel = _0x467348;
                        console.log("[淬炼助手] 助手按钮已显示");
                      }
                    } catch (_0x199ee9) {
                      console.error("[淬炼助手] 创建助手按钮失败:", _0x199ee9);
                    }
                  }
                } else {
                  {
                    this._helperBtn && (this._helperBtn.dispose(), this._helperBtn = null);
                    this._helperLabel && (this._helperLabel.dispose(), this._helperLabel = null);
                    _0x50d10e.helperEnabled = false;
                    _0x531ac4();
                  }
                }
              }
            };
            const _0x3b590d = _0x20d3b4.prototype.onShow;
            _0x20d3b4.prototype.onShow = function () {
              _0x3b590d.apply(this, arguments);
              _0x50d10e.currentDialog = this;
            };
            const _0x3e4a4c = _0x20d3b4.prototype.onHide;
            _0x20d3b4.prototype.onHide = function () {
              {
                _0x50d10e.helperEnabled = false;
                _0x50d10e.currentDialog = null;
                _0x531ac4();
                var _0x294847 = 10547450 .toString(16);
                if (this._helperBtn) {
                  this._helperBtn.dispose();
                  this._helperBtn = null;
                }
                this._helperLabel && (this._helperLabel.dispose(), this._helperLabel = null);
                _0x3e4a4c.apply(this, arguments);
              }
            };
            clearInterval(_0x570181);
            console.log("[淬炼助手] 成功注入到 QuenchStageUpDialog");
          } catch (_0x3cbd84) {}
        }
      }, 200);
    }
  }
  _0x5a6fa5();
  console.log("[淬炼助手] 脚本已加载");
})();
function _0xb036cc() {
  return "7a30be06d35ca76b2f69";
}
var _0xa9f84b = 11163958 .toString(16);
function _0xe49985() {
  return "be79de336b8e5d1aad03";
}
var _0xabb4c7 = 12299379 .toString(16);
var _0xa098cb = 3256539 .toString(16);