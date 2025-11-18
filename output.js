//Tue Nov 18 2025 12:53:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x5e410f = (_0x990397, _0x1975e5, _0x594af8) => new Promise((_0x130ae3, _0x4db5bc) => {
  var _0x42c8a2 = _0xe88830 => {
    try {
      _0x52a68a(_0x594af8.next(_0xe88830));
    } catch (_0x54ac76) {
      _0x4db5bc(_0x54ac76);
    }
  };
  var _0x5b41b6 = _0x573cd8 => {
    try {
      _0x52a68a(_0x594af8.throw(_0x573cd8));
    } catch (_0x3ed81f) {
      _0x4db5bc(_0x3ed81f);
    }
  };
  var _0x52a68a = _0xf52ecc => _0xf52ecc.done ? _0x130ae3(_0xf52ecc.value) : Promise.resolve(_0xf52ecc.value).then(_0x42c8a2, _0x5b41b6);
  _0x52a68a((_0x594af8 = _0x594af8.apply(_0x990397, _0x1975e5)).next());
});
import { i as _0x2b079b } from "./vendor-CRMXTsHm.js";
class _0x2717b0 {
  constructor() {
    this.qrCodeUrl = null;
    this.uuid = null;
    this.timeout = 300000;
    this.interval = 2000;
  }
  fetchQRCode() {
    return _0x5e410f(this, null, function* () {
      const {
        qr_code_url: _0x51526d,
        uuid: _0x18b5a7
      } = yield _0x2b079b("fetch_qr_code");
      this.qrCodeUrl = _0x51526d;
      this.uuid = _0x18b5a7;
      return _0x51526d;
    });
  }
  sendPhoneVerificationCode(_0x291604) {
    return _0x5e410f(this, null, function* () {
      yield _0x2b079b("send_phone_verification_code", {
        phone: _0x291604
      });
    });
  }
  pollLoginStatus(_0x43d4dc) {
    return _0x5e410f(this, null, function* () {
      const {
        last_code: _0x2e21b3
      } = yield _0x2b079b("poll_login_status", {
        uuid: _0x43d4dc.uuid,
        lastCode: _0x43d4dc.lastCode
      });
      return _0x2e21b3;
    });
  }
  login() {
    return _0x5e410f(this, null, function* () {
      const _0x4cb2ba = Date.now();
      const _0x318249 = {
        uuid: this.uuid,
        lastCode: null
      };
      return new Promise((_0x30b45c, _0x4e6f52) => {
        const _0x149dd4 = () => _0x5e410f(this, null, function* () {
          try {
            if (_0x318249.lastCode = yield this.pollLoginStatus(_0x318249), _0x318249.lastCode && "waiting" !== _0x318249.lastCode) {
              return void _0x30b45c(_0x318249.lastCode);
            }
            if (Date.now() - _0x4cb2ba > this.timeout) {
              return void _0x4e6f52("登录超时");
            }
            setTimeout(_0x149dd4, this.interval);
          } catch (_0x263dbb) {
            setTimeout(_0x149dd4, interval);
          }
        });
        _0x149dd4();
      });
    });
  }
  gzipEnCode(_0x26bdd6, _0x241fc2, _0x43c4fa, _0x3b3b78, _0x46e099) {
    const _0x429536 = function () {
      function _0x5b6653() {}
      _0x5b6653.decode = function (_0x1a3a04, _0x37b333, _0x293871, _0x20b953, _0x1df4fb) {
        var _0x26865e = _0x37b333;
        var _0x16d338 = this.transCode(_0x26865e, _0x293871);
        var _0x2b7765 = this.getKey(_0x16d338, _0x20b953);
        return this.crypto(_0x1a3a04, _0x2b7765, _0x2b7765.length >> _0x1df4fb);
      };
      _0x5b6653.encode = function (_0x4ab5f7, _0x2aa528, _0x2ce827, _0x2c653d, _0x457201) {
        return this.decode(_0x4ab5f7, _0x2aa528, _0x2ce827, _0x2c653d, _0x457201);
      };
      _0x5b6653.crypto = function (_0x134961, _0x4561dd, _0x46d759) {
        if (null != _0x134961 && null != _0x4561dd) {
          for (var _0xc52afa = "", _0x5ebb6b = 0; _0x5ebb6b < _0x134961.length; _0x5ebb6b++) {
            _0x46d759 >= _0x4561dd.length && (_0x46d759 = 0);
            _0xc52afa += String.fromCharCode(_0x134961[_0x5ebb6b].charCodeAt(0) ^ _0x4561dd[_0x46d759].charCodeAt(0));
            _0x46d759++;
          }
          return _0xc52afa;
        }
        return null;
      };
      _0x5b6653.getKey = function (_0x90cdce, _0xd0ed80) {
        for (var _0x353ffe = _0x90cdce, _0x48373b = "", _0x1a3e3d = Math.floor(_0x90cdce.length / _0xd0ed80), _0x26ee29 = 0; _0x26ee29 < _0x1a3e3d; _0x26ee29++) {
          _0x48373b += _0x353ffe[_0x26ee29 * _0xd0ed80];
        }
        return _0x48373b;
      };
      _0x5b6653.transCode = function (_0x3c9a50, _0x3c7717) {
        if (_0x3c7717 > 0) {
          _0x3c7717--;
          var _0x459bb3 = this.rightSide(_0x3c9a50);
          var _0x34a1ca = this.leftSide(_0x3c9a50);
          return this.transCode(_0x459bb3, _0x3c7717) + this.transCode(_0x34a1ca, _0x3c7717);
        }
        return _0x3c9a50;
      };
      _0x5b6653.swap = function (_0x4ab930) {
        return this.rightSide(_0x4ab930) + this.leftSide(_0x4ab930);
      };
      _0x5b6653.rightSide = function (_0xb63196) {
        return _0xb63196.length % 2 != 0 ? null : _0xb63196.substring(_0xb63196.length / 2, _0xb63196.length);
      };
      _0x5b6653.leftSide = function (_0x5b41bb) {
        return _0x5b41bb.length % 2 != 0 ? null : _0x5b41bb.substring(0, _0x5b41bb.length / 2);
      };
      return _0x5b6653;
    }();
    const _0x53bb0a = function (_0xeabac7) {
      const _0x4c4199 = new TextEncoder().encode(_0xeabac7);
      return btoa(String.fromCharCode(..._0x4c4199));
    };
    const _0x558fdb = function (_0x1c1fe8, _0x5614d6) {
      undefined === _0x5614d6 && (_0x5614d6 = false);
      return _0x5614d6 ? _0x53bb0a(_0x1c1fe8).replace(/=/g, "").replace(/[+\/]/g, function (_0x43eccc) {
        return "+" == _0x43eccc ? "-" : "_";
      }) : _0x53bb0a(_0x1c1fe8);
    };
    return _0x558fdb(_0x429536.encode(_0x558fdb(JSON.stringify(_0x26bdd6)), _0x241fc2, _0x43c4fa, _0x3b3b78, _0x46e099));
  }
  getSmsUser(_0x48be14, _0x387df1) {
    return _0x5e410f(this, null, function* () {
      const {
        detail: _0x250252
      } = yield _0x2b079b("get_mix");
      const _0x27ab84 = JSON.parse(_0x250252).data;
      const _0x346bb0 = this.gzipEnCode({
        gameId: "xyzwapp",
        gameTp: "app",
        sysInfo: "{\"SDKVersion\":\"3.3.5\",\"brand\":\"microsoft\",\"model\":\"microsoft\",\"system\":\"Windows 11 x64\",\"version\":\"3.9.10\",\"screenHeight\":1184,\"screenWidth\":666,\"pixelRatio\":1,\"benchmarkLevel\":-1,\"hortorSDKVersion\":\"1.10.14\"}",
        smsCode: _0x387df1,
        mobile: _0x48be14,
        channel: "android",
        distinctId: "DID-c96a17f3-fbb0-43ca-a515-8b8af8ea7b14",
        packageName: "com.hortor.games.xyzw",
        signPrint: "E6:F7:FE:A9:EC:8E:24:D0:4F:2A:32:50:28:78:E1:C5:5E:70:81:13",
        tp: "app-mobile",
        androidId: "",
        oaid: ""
      }, _0x27ab84.cryptRule.codeBook, _0x27ab84.cryptRule.swapTimes, _0x27ab84.cryptRule.keySkip, _0x27ab84.cryptRule.keyOffset);
      const _0x536d08 = new URL("https://comb-platform.hortorgames.com/comb-login-server/api/v1/login");
      const _0x15c94f = {
        gameId: "xyzwapp",
        timestamp: Math.floor(Date.now() / 1000),
        version: "android-4.2.1-cn-release",
        cryptVersion: "1.1.0",
        gameTp: "app",
        system: "android",
        deviceUniqueId: "DID-c31a89d3-1a85-474f-b529-5135135f56ed",
        packageName: "com.hortor.games.xyzw"
      };
      Object.entries(_0x15c94f).forEach(([_0x635c17, _0x402045]) => _0x536d08.searchParams.append(_0x635c17, _0x402045));
      const _0x59036d = yield _0x2b079b("get_comb_user", {
        url: _0x536d08.toString(),
        body: _0x346bb0
      });
      return JSON.parse(_0x59036d.detail).data;
    });
  }
  getCombUser(_0xabe0be) {
    return _0x5e410f(this, null, function* () {
      const {
        detail: _0x4c8ec9
      } = yield _0x2b079b("get_mix");
      const _0x4b6d0d = JSON.parse(_0x4c8ec9).data;
      const _0x187e32 = this.gzipEnCode({
        gameId: "xyzwapp",
        code: _0xabe0be,
        gameTp: "app",
        sysInfo: "{\"SDKVersion\":\"3.3.5\",\"brand\":\"microsoft\",\"model\":\"microsoft\",\"system\":\"Windows 11 x64\",\"version\":\"3.9.10\",\"screenHeight\":1184,\"screenWidth\":666,\"pixelRatio\":1,\"benchmarkLevel\":-1,\"hortorSDKVersion\":\"1.10.14\"}",
        channel: "android",
        appFrom: "com.tencent.mm",
        noLogin: "2",
        distinctId: "DID-12f90e14-dbe1-4eb0-819b-35b66b0d805d",
        state: "hortor",
        packageName: "com.hortor.games.xyzw",
        tp: "app-we"
      }, _0x4b6d0d.cryptRule.codeBook, _0x4b6d0d.cryptRule.swapTimes, _0x4b6d0d.cryptRule.keySkip, _0x4b6d0d.cryptRule.keyOffset);
      const _0xc75b51 = new URL("https://comb-platform.hortorgames.com/comb-login-server/api/v1/login");
      const _0x1bda03 = {
        gameId: "xyzwapp",
        timestamp: Math.floor(Date.now() / 1000),
        version: "android-4.2.1-cn-release",
        cryptVersion: "1.1.0",
        gameTp: "app",
        system: "android",
        deviceUniqueId: "DID-c31a89d3-1a85-474f-b529-5135135f56ed",
        packageName: "com.hortor.games.xyzw"
      };
      Object.entries(_0x1bda03).forEach(([_0x5b4a75, _0x43155f]) => _0xc75b51.searchParams.append(_0x5b4a75, _0x43155f));
      const _0x3144c7 = yield _0x2b079b("get_comb_user", {
        url: _0xc75b51.toString(),
        body: _0x187e32
      });
      return JSON.parse(_0x3144c7.detail).data;
    });
  }
}
export { _0x2717b0 as W };