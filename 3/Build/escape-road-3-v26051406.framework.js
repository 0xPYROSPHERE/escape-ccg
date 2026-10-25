var unityFramework = (() => {
  var _0x36c523 = typeof document !== "undefined" && document["currentScript"] ? document["currentScript"]["src"] : undefined;
  if (typeof __filename !== "undefined") _0x36c523 = _0x36c523 || __filename;
  return function (_0x59b85f) {
    _0x59b85f = _0x59b85f || {};
    var _0x4bcfe1 = typeof _0x59b85f != "undefined" ? _0x59b85f : {}, _0x308627, _0x57536e;
    _0x4bcfe1["ready"] = new Promise(function (_0x3d3858, _0x28328e) {
      _0x308627 = _0x3d3858, _0x57536e = _0x28328e;
    });
    function _0x46897a(_0x181783, _0x22ae90) {
      return _0x528b37("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead."), _0x30a7f6(_0x181783, _0x22ae90);
    }
    _0x4bcfe1["Pointer_stringify"] = _0x46897a;
    var _0x3d2646 = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)", _0x20a9c5 = _0x4c743f()["match"](new RegExp(_0x3d2646));
    if (_0x20a9c5) _0x4bcfe1["stackTraceRegExp"] = new RegExp(_0x3d2646["replace"]("([^\\n]+)", _0x20a9c5[4]["replace"](/[\\^${}[\]().*+?|]/g, "\\$&"))["replace"]("jsStackTrace", "[^\\n]+"));
    var _0x4a2433 = function (_0x2ade37) {
      if (_0x533336) return;
      _0x533336 = true, _0x2f5541 = 1;
      if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) console["error"]("Pthread aborting at " + (new Error)["stack"]);
      _0x2ade37 !== undefined ? (_0x3402e6(_0x2ade37), _0x119168(_0x2ade37), _0x2ade37 = JSON["stringify"](_0x2ade37)) : _0x2ade37 = "";
      var _0x3a4716 = "abort(" + _0x2ade37 + ") at " + _0x1aa9c0();
      if (_0x4bcfe1["abortHandler"] && _0x4bcfe1["abortHandler"](_0x3a4716)) return;
      throw _0x3a4716;
    };
    _0x4bcfe1["SetFullscreen"] = function (_0x3a349f) {
      if (typeof _0x44279c === "undefined" || !_0x44279c) console["log"]("Runtime not initialized yet."); else {
        if (typeof _0x1d6235 === "undefined") console["log"]("Player not loaded yet."); else {
          var _0x30cfcd = _0x1d6235["canPerformEventHandlerRequests"];
          _0x1d6235["canPerformEventHandlerRequests"] = function () {
            return 1;
          }, _0x4bcfe1["ccall"]("SetFullscreen", null, ["number"], [_0x3a349f]), _0x1d6235["canPerformEventHandlerRequests"] = _0x30cfcd;
        }
      }
    };
    !_0x4bcfe1["ENVIRONMENT_IS_PTHREAD"] && _0x4bcfe1["preRun"]["push"](function () {
      function _0x44494d() {
        _0x3eb30b["queuePersist"] = function (_0xd147cd) {
          function _0x25363e() {
            if (_0xd147cd["idbPersistState"] === "again") _0x1434a3(); else _0xd147cd["idbPersistState"] = 0;
          }
          function _0x1434a3() {
            _0xd147cd["idbPersistState"] = "idb", _0x3eb30b["syncfs"](_0xd147cd, false, _0x25363e);
          }
          if (!_0xd147cd["idbPersistState"]) _0xd147cd["idbPersistState"] = setTimeout(_0x1434a3, 0); else _0xd147cd["idbPersistState"] === "idb" && (_0xd147cd["idbPersistState"] = "again");
        }, _0x3eb30b["mount"] = function (_0x1ef848) {
          var _0x5577dd = _0x187d72["mount"](_0x1ef848);
          if (typeof _0x1ef848 !== "undefined" && _0x1ef848["opts"] && _0x1ef848["opts"]["autoPersist"]) {
            _0x5577dd["idbPersistState"] = 0;
            var _0x3709c0 = _0x5577dd["node_ops"];
            _0x5577dd["node_ops"] = Object["assign"]({}, _0x5577dd["node_ops"]), _0x5577dd["node_ops"]["mknod"] = function (_0x117621, _0x3ff04b, _0x524518, _0x1bed4a) {
              var _0x21c7f8 = _0x3709c0["mknod"](_0x117621, _0x3ff04b, _0x524518, _0x1bed4a);
              return _0x21c7f8["node_ops"] = _0x5577dd["node_ops"], _0x21c7f8["idbfs_mount"] = _0x5577dd["mount"], _0x21c7f8["memfs_stream_ops"] = _0x21c7f8["stream_ops"], _0x21c7f8["stream_ops"] = Object["assign"]({}, _0x21c7f8["stream_ops"]), _0x21c7f8["stream_ops"]["write"] = function (_0x462f86, _0x173e86, _0x2e3c61, _0x5d4b63, _0x1ea822, _0x2511e0) {
                return _0x462f86["node"]["isModified"] = true, _0x21c7f8["memfs_stream_ops"]["write"](_0x462f86, _0x173e86, _0x2e3c61, _0x5d4b63, _0x1ea822, _0x2511e0);
              }, _0x21c7f8["stream_ops"]["close"] = function (_0x44a326) {
                var _0x18453c = _0x44a326["node"];
                _0x18453c["isModified"] && (_0x3eb30b["queuePersist"](_0x18453c["idbfs_mount"]), _0x18453c["isModified"] = false);
                if (_0x18453c["memfs_stream_ops"]["close"]) return _0x18453c["memfs_stream_ops"]["close"](_0x44a326);
              }, _0x21c7f8;
            }, _0x5577dd["node_ops"]["rmdir"] = function (_0x4c28a0) {
              return _0x3eb30b["queuePersist"](_0x5577dd["mount"]), _0x3709c0["rmdir"](_0x4c28a0);
            }, _0x5577dd["node_ops"]["unlink"] = function (_0x15e6a7) {
              return _0x3eb30b["queuePersist"](_0x5577dd["mount"]), _0x3709c0["unlink"](_0x15e6a7);
            }, _0x5577dd["node_ops"]["mkdir"] = function (_0x3d6b14, _0x2a33a9) {
              return _0x3eb30b["queuePersist"](_0x5577dd["mount"]), _0x3709c0["mkdir"](_0x3d6b14, _0x2a33a9);
            }, _0x5577dd["node_ops"]["symlink"] = function (_0x5a1069, _0xa88aef, _0x479b4b) {
              return _0x3eb30b["queuePersist"](_0x5577dd["mount"]), _0x3709c0["symlink"](_0x5a1069, _0xa88aef, _0x479b4b);
            }, _0x5577dd["node_ops"]["rename"] = function (_0x227485, _0x4c5101, _0x28d0af) {
              return _0x3eb30b["queuePersist"](_0x5577dd["mount"]), _0x3709c0["rename"](_0x227485, _0x4c5101, _0x28d0af);
            };
          }
          return _0x5577dd;
        };
      }
      _0x44494d();
      var _0x490fbc = _0x4bcfe1["unityFileSystemInit"] || function () {
        _0x278315["mkdir"]("/idbfs"), _0x4bcfe1["__unityIdbfsMount"] = _0x278315["mount"](_0x3eb30b, {autoPersist: !!_0x4bcfe1["autoSyncPersistentDataPath"]}, "/idbfs"), _0x4bcfe1["addRunDependency"]("JS_FileSystem_Mount"), _0x278315["syncfs"](true, function (_0x5eda1f) {
          if (_0x5eda1f) console["log"]("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
          _0x4bcfe1["removeRunDependency"]("JS_FileSystem_Mount");
        });
      };
      _0x490fbc();
    });
    var _0xe8e1c3 = [], _0x492542 = false, _0x2d9982, _0x36ca1b = null;
    function _0x26ca7d(_0x188c66) {
      var _0x321cf = Object["keys"](_0xe8e1c3);
      for (var _0x518b2a = 0; _0x518b2a < _0x321cf["length"]; ++_0x518b2a) {
        var _0x17aa8b = _0xe8e1c3[_0x321cf[_0x518b2a]];
        if (_0x17aa8b["deviceId"] && _0x17aa8b["deviceId"] == _0x188c66["deviceId"]) return _0x17aa8b;
      }
      for (var _0x518b2a = 0; _0x518b2a < _0x321cf["length"]; ++_0x518b2a) {
        var _0x17aa8b = _0xe8e1c3[_0x321cf[_0x518b2a]];
        if (_0x17aa8b == _0x188c66) return _0x17aa8b;
      }
      for (var _0x518b2a = 0; _0x518b2a < _0x321cf["length"]; ++_0x518b2a) {
        var _0x17aa8b = _0xe8e1c3[_0x321cf[_0x518b2a]];
        if (_0x17aa8b["label"] && _0x17aa8b["label"] == _0x188c66["label"]) return _0x17aa8b;
      }
      for (var _0x518b2a = 0; _0x518b2a < _0x321cf["length"]; ++_0x518b2a) {
        var _0x17aa8b = _0xe8e1c3[_0x321cf[_0x518b2a]];
        if (_0x17aa8b["groupId"] && _0x17aa8b["kind"] && _0x17aa8b["groupId"] == _0x188c66["groupId"] && _0x17aa8b["kind"] == _0x188c66["kind"]) return _0x17aa8b;
      }
    }
    function _0xb95ae5() {
      for (var _0xd062a9 = 0;; ++_0xd062a9) {
        if (!_0xe8e1c3[_0xd062a9]) return _0xd062a9;
      }
    }
    function _0x202b37(_0x45dbc5) {
      _0x2d9982(), _0xe8e1c3 = [];
      var _0x1bd65b = {}, _0x2785ec = [];
      _0x45dbc5["forEach"](function (_0x4576d3) {
        if (_0x4576d3["kind"] === "videoinput") {
          var _0x35de3b = _0x26ca7d(_0x4576d3);
          _0x35de3b ? _0x1bd65b[_0x35de3b["id"]] = _0x35de3b : _0x2785ec["push"](_0x4576d3);
        }
      }), _0xe8e1c3 = _0x1bd65b, _0x2785ec["forEach"](function (_0x373aca) {
        !_0x373aca["id"] && (_0x373aca["id"] = _0xb95ae5(), _0x373aca["name"] = _0x373aca["label"] || "Video input #" + (_0x373aca["id"] + 1), _0x373aca["isFrontFacing"] = _0x373aca["name"]["toLowerCase"]()["includes"]("front") || !_0x373aca["name"]["toLowerCase"]()["includes"]("front") && !_0x373aca["name"]["toLowerCase"]()["includes"]("back"), _0xe8e1c3[_0x373aca["id"]] = _0x373aca);
      });
    }
    function _0x2d9bfe() {
      if (!_0xe8e1c3) return;
      navigator["mediaDevices"]["enumerateDevices"]()["then"](function (_0x174692) {
        _0x202b37(_0x174692), _0x492542 = true;
      })["catch"](function (_0x3566a4) {
        console["warn"]("Unable to enumerate media devices: " + _0x3566a4 + "\nWebcams will not be available."), _0x5a4664();
      }), /Firefox/["test"](navigator["userAgent"]) && (setTimeout(_0x2d9bfe, 6e4), _0x528b37("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977"));
    }
    function _0x5a4664() {
      navigator["mediaDevices"] && navigator["mediaDevices"]["removeEventListener"] && navigator["mediaDevices"]["removeEventListener"]("devicechange", _0x2d9bfe), _0xe8e1c3 = null;
    }
    _0x4bcfe1["disableAccessToMediaDevices"] = _0x5a4664;
    if (!navigator["mediaDevices"]) console["warn"]("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location["protocol"] == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used.")), _0x5a4664(); else {
      if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) setTimeout(function () {
        try {
          _0x441879("enumerateMediaDevices"), _0x2d9982 = function () {
            if (_0x36ca1b !== null) clearTimeout(_0x36ca1b);
            _0x3b7ae4("enumerateMediaDevices");
            if (navigator["mediaDevices"]) console["log"]("navigator.mediaDevices support available");
            _0x2d9982 = function () {};
          }, _0x2d9bfe(), _0x36ca1b = setTimeout(_0x2d9982, 1e3), navigator["mediaDevices"]["addEventListener"]("devicechange", _0x2d9bfe);
        } catch (_0x451aa3) {
          console["warn"]("Unable to enumerate media devices: " + _0x451aa3), _0x5a4664();
        }
      }, 0);
    }
    function _0x2fae3e(_0x27e76a, _0x6e5d78, _0x3704eb) {
      var _0xcf4c90 = _0x539986(_0x6e5d78), _0x1262e4 = _0x539986(_0x27e76a), _0x17c014 = 0;
      try {
        if (_0x3704eb === undefined) _0x5c8177(_0x1262e4, _0xcf4c90); else {
          if (typeof _0x3704eb === "string") _0x17c014 = _0x539986(_0x3704eb), _0x1d2ab4(_0x1262e4, _0xcf4c90, _0x17c014); else {
            if (typeof _0x3704eb === "number") _0x3bed77(_0x1262e4, _0xcf4c90, _0x3704eb); else throw "" + _0x3704eb + " is does not have a type which is supported by SendMessage.";
          }
        }
      } finally {
        _0x14a4bc(_0x17c014), _0x14a4bc(_0x1262e4), _0x14a4bc(_0xcf4c90);
      }
    }
    _0x4bcfe1["SendMessage"] = _0x2fae3e;
    var _0x2101ce = Object["assign"]({}, _0x4bcfe1), _0x2d1e5d = [], _0x5877fe = "./this.program", _0x15c649 = (_0x458822, _0xdb0efa) => {
      throw _0xdb0efa;
    }, _0x266229 = typeof window == "object", _0x132c1d = typeof importScripts == "function", _0x4da766 = typeof process == "object" && typeof process["versions"] == "object" && typeof process["versions"]["node"] == "string", _0x437a81 = "";
    function _0x42ee71(_0x125596) {
      if (_0x4bcfe1["locateFile"]) return _0x4bcfe1["locateFile"](_0x125596, _0x437a81);
      return _0x437a81 + _0x125596;
    }
    var _0x44d954, _0x27b369, _0x27b012, _0x1e8370;
    function _0xce63a0(_0x2eb69f) {
      if (_0x2eb69f instanceof _0x13a7a5) return;
      let _0x4293bd = _0x2eb69f;
      _0x119168("exiting due to exception: " + _0x4293bd);
    }
    var _0x415551, _0x4a7a82, _0x2c3e93;
    if (_0x4da766) _0x132c1d ? _0x437a81 = require("path")["dirname"](_0x437a81) + "/" : _0x437a81 = __dirname + "/", _0x2c3e93 = () => {
      !_0x4a7a82 && (_0x415551 = require("fs"), _0x4a7a82 = require("path"));
    }, _0x44d954 = function _0x587309(_0x12fa73, _0x290fbd) {
      return _0x2c3e93(), _0x12fa73 = _0x4a7a82["normalize"](_0x12fa73), _0x415551["readFileSync"](_0x12fa73, _0x290fbd ? undefined : "utf8");
    }, _0x27b012 = _0xdc81e9 => {
      var _0x5ba31d = _0x44d954(_0xdc81e9, true);
      return !_0x5ba31d["buffer"] && (_0x5ba31d = new Uint8Array(_0x5ba31d)), _0x5ba31d;
    }, _0x27b369 = (_0x53770f, _0x970533, _0x519000) => {
      _0x2c3e93(), _0x53770f = _0x4a7a82["normalize"](_0x53770f), _0x415551["readFile"](_0x53770f, function (_0xcd4025, _0x314fc3) {
        if (_0xcd4025) _0x519000(_0xcd4025); else _0x970533(_0x314fc3["buffer"]);
      });
    }, process["argv"]["length"] > 1 && (_0x5877fe = process["argv"][1]["replace"](/\\/g, "/")), _0x2d1e5d = process["argv"]["slice"](2), process["on"]("uncaughtException", function (_0xb11a72) {
      if (!(_0xb11a72 instanceof _0x13a7a5)) throw _0xb11a72;
    }), process["on"]("unhandledRejection", function (_0x356abd) {
      throw _0x356abd;
    }), _0x15c649 = (_0x2222fa, _0xf631e6) => {
      if (_0x29a856()) {
        process["exitCode"] = _0x2222fa;
        throw _0xf631e6;
      }
      _0xce63a0(_0xf631e6), process["exit"](_0x2222fa);
    }, _0x4bcfe1["inspect"] = function () {
      return "[Emscripten Module object]";
    }; else {
      if (_0x266229 || _0x132c1d) {
        if (_0x132c1d) _0x437a81 = self["location"]["href"]; else typeof document != "undefined" && document["currentScript"] && (_0x437a81 = document["currentScript"]["src"]);
        _0x36c523 && (_0x437a81 = _0x36c523);
        _0x437a81["indexOf"]("blob:") !== 0 ? _0x437a81 = _0x437a81["substr"](0, _0x437a81["replace"](/[?#].*/, "")["lastIndexOf"]("/") + 1) : _0x437a81 = "";
        {
          _0x44d954 = _0x23a5ee => {
            var _0x26ccf5 = new XMLHttpRequest;
            return _0x26ccf5["open"]("GET", _0x23a5ee, false), _0x26ccf5["send"](null), _0x26ccf5["responseText"];
          }, _0x132c1d && (_0x27b012 = _0x569a67 => {
            var _0x452648 = new XMLHttpRequest;
            return _0x452648["open"]("GET", _0x569a67, false), _0x452648["responseType"] = "arraybuffer", _0x452648["send"](null), new Uint8Array(_0x452648["response"]);
          }), _0x27b369 = (_0xa6e5b8, _0x8e96ea, _0x147633) => {
            var _0x7bef91 = new XMLHttpRequest;
            _0x7bef91["open"]("GET", _0xa6e5b8, true), _0x7bef91["responseType"] = "arraybuffer", _0x7bef91["onload"] = () => {
              if (_0x7bef91["status"] == 200 || _0x7bef91["status"] == 0 && _0x7bef91["response"]) {
                _0x8e96ea(_0x7bef91["response"]);
                return;
              }
              _0x147633();
            }, _0x7bef91["onerror"] = _0x147633, _0x7bef91["send"](null);
          };
        }
        _0x1e8370 = _0x4b4208 => document["title"] = _0x4b4208;
      } else {}
    }
    var _0x3402e6 = _0x4bcfe1["print"] || console["log"]["bind"](console), _0x119168 = _0x4bcfe1["printErr"] || console["warn"]["bind"](console);
    Object["assign"](_0x4bcfe1, _0x2101ce), _0x2101ce = null;
    if (_0x4bcfe1["arguments"]) _0x2d1e5d = _0x4bcfe1["arguments"];
    if (_0x4bcfe1["thisProgram"]) _0x5877fe = _0x4bcfe1["thisProgram"];
    if (_0x4bcfe1["quit"]) _0x15c649 = _0x4bcfe1["quit"];
    var _0x18132c = 4;
    function _0x528b37(_0x3ff9e5) {
      if (!_0x528b37["shown"]) _0x528b37["shown"] = {};
      !_0x528b37["shown"][_0x3ff9e5] && (_0x528b37["shown"][_0x3ff9e5] = 1, _0x119168(_0x3ff9e5));
    }
    function _0xb0f610(_0x3b6bdf, _0x1a60f) {
      if (typeof WebAssembly["Function"] == "function") {
        var _0x3a8006 = {i: "i32", j: "i64", f: "f32", d: "f64"}, _0xc093ed = {parameters: [], results: _0x1a60f[0] == "v" ? [] : [_0x3a8006[_0x1a60f[0]]]};
        for (var _0x192c0e = 1; _0x192c0e < _0x1a60f["length"]; ++_0x192c0e) {
          _0xc093ed["parameters"]["push"](_0x3a8006[_0x1a60f[_0x192c0e]]);
        }
        return new WebAssembly["Function"](_0xc093ed, _0x3b6bdf);
      }
      var _0x11d9aa = [1, 0, 1, 96], _0x50a488 = _0x1a60f["slice"](0, 1), _0x50f58f = _0x1a60f["slice"](1), _0x43c2cb = {i: 127, j: 126, f: 125, d: 124};
      _0x11d9aa["push"](_0x50f58f["length"]);
      for (var _0x192c0e = 0; _0x192c0e < _0x50f58f["length"]; ++_0x192c0e) {
        _0x11d9aa["push"](_0x43c2cb[_0x50f58f[_0x192c0e]]);
      }
      _0x50a488 == "v" ? _0x11d9aa["push"](0) : _0x11d9aa = _0x11d9aa["concat"]([1, _0x43c2cb[_0x50a488]]);
      _0x11d9aa[1] = _0x11d9aa["length"] - 2;
      var _0x297094 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]["concat"](_0x11d9aa, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0])), _0x58e969 = new WebAssembly["Module"](_0x297094), _0x272685 = new WebAssembly["Instance"](_0x58e969, {e: {f: _0x3b6bdf}}), _0x1d8684 = _0x272685["exports"]["f"];
      return _0x1d8684;
    }
    var _0x1baed5 = [], _0x11ae1e;
    function _0x432888() {
      if (_0x1baed5["length"]) return _0x1baed5["pop"]();
      try {
        _0xfb4ade["grow"](1);
      } catch (_0x46b0e4) {
        if (!(_0x46b0e4 instanceof RangeError)) throw _0x46b0e4;
        throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
      }
      return _0xfb4ade["length"] - 1;
    }
    function _0x56ded2(_0x4f0462, _0x534057) {
      for (var _0xfbfca9 = _0x4f0462; _0xfbfca9 < _0x4f0462 + _0x534057; _0xfbfca9++) {
        var _0x596fba = _0x2fb7fc(_0xfbfca9);
        _0x596fba && _0x11ae1e["set"](_0x596fba, _0xfbfca9);
      }
    }
    var _0x4d0bae = 0, _0x3a12a5 = _0x559ec9 => {
      _0x4d0bae = _0x559ec9;
    }, _0x31fc00 = () => _0x4d0bae, _0x8b7407;
    if (_0x4bcfe1["wasmBinary"]) _0x8b7407 = _0x4bcfe1["wasmBinary"];
    var _0x4f166f = _0x4bcfe1["noExitRuntime"] || true;
    typeof WebAssembly != "object" && _0x4a2433("no native wasm support detected");
    var _0x24f604, _0x533336 = false, _0x2f5541;
    function _0x35e637(_0xf7fc67, _0x394b47) {
      !_0xf7fc67 && _0x4a2433(_0x394b47);
    }
    function _0x140af2(_0x11e3d4) {
      var _0x34f7fe = _0x4bcfe1["_" + _0x11e3d4];
      return _0x34f7fe;
    }
    function _0x3fb673(_0x5b8d62, _0x3a17d5, _0x21a181, _0x4fdacb, _0x337018) {
      var _0x3b3292 = {string: function (_0x289e46) {
        var _0x4efc31 = 0;
        if (_0x289e46 !== null && _0x289e46 !== undefined && _0x289e46 !== 0) {
          var _0x581ee8 = (_0x289e46["length"] << 2) + 1;
          _0x4efc31 = _0x1d99d1(_0x581ee8), _0x1714da(_0x289e46, _0x4efc31, _0x581ee8);
        }
        return _0x4efc31;
      }, array: function (_0x23b729) {
        var _0x1387af = _0x1d99d1(_0x23b729["length"]);
        return _0x12c519(_0x23b729, _0x1387af), _0x1387af;
      }};
      function _0x13119e(_0x3f113f) {
        if (_0x3a17d5 === "string") return _0x30a7f6(_0x3f113f);
        if (_0x3a17d5 === "boolean") return Boolean(_0x3f113f);
        return _0x3f113f;
      }
      var _0x53cb27 = _0x140af2(_0x5b8d62), _0x3b249b = [], _0x4b2ccc = 0;
      if (_0x4fdacb) for (var _0x38173f = 0; _0x38173f < _0x4fdacb["length"]; _0x38173f++) {
        var _0x44910e = _0x3b3292[_0x21a181[_0x38173f]];
        if (_0x44910e) {
          if (_0x4b2ccc === 0) _0x4b2ccc = _0x381588();
          _0x3b249b[_0x38173f] = _0x44910e(_0x4fdacb[_0x38173f]);
        } else _0x3b249b[_0x38173f] = _0x4fdacb[_0x38173f];
      }
      var _0x4b88e7 = _0x53cb27["apply"](null, _0x3b249b);
      function _0x5cb3fa(_0x4367c5) {
        if (_0x4b2ccc !== 0) _0x770e87(_0x4b2ccc);
        return _0x13119e(_0x4367c5);
      }
      return _0x4b88e7 = _0x5cb3fa(_0x4b88e7), _0x4b88e7;
    }
    function _0x4b7ee7(_0x4e8482, _0xd9dbe0, _0x3f0f21, _0x1e1ff3) {
      _0x3f0f21 = _0x3f0f21 || [];
      var _0x691697 = _0x3f0f21["every"](function (_0xe656f0) {
        return _0xe656f0 === "number";
      }), _0xea7310 = _0xd9dbe0 !== "string";
      if (_0xea7310 && _0x691697 && !_0x1e1ff3) return _0x140af2(_0x4e8482);
      return function () {
        return _0x3fb673(_0x4e8482, _0xd9dbe0, _0x3f0f21, arguments, _0x1e1ff3);
      };
    }
    var _0x1c397e = 1, _0x2a51e5 = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
    function _0x344b4c(_0x33db72, _0x140287, _0x19cc21) {
      var _0x34aabe = _0x140287 + _0x19cc21, _0x2226d9 = _0x140287;
      while (_0x33db72[_0x2226d9] && !(_0x2226d9 >= _0x34aabe)) ++_0x2226d9;
      if (_0x2226d9 - _0x140287 > 16 && _0x33db72["buffer"] && _0x2a51e5) return _0x2a51e5["decode"](_0x33db72["subarray"](_0x140287, _0x2226d9)); else {
        var _0x4aa88a = "";
        while (_0x140287 < _0x2226d9) {
          var _0x5ccfbb = _0x33db72[_0x140287++];
          if (!(_0x5ccfbb & 128)) {
            _0x4aa88a += String["fromCharCode"](_0x5ccfbb);
            continue;
          }
          var _0x3173fe = _0x33db72[_0x140287++] & 63;
          if ((_0x5ccfbb & 224) == 192) {
            _0x4aa88a += String["fromCharCode"]((_0x5ccfbb & 31) << 6 | _0x3173fe);
            continue;
          }
          var _0x1aeee6 = _0x33db72[_0x140287++] & 63;
          (_0x5ccfbb & 240) == 224 ? _0x5ccfbb = (_0x5ccfbb & 15) << 12 | _0x3173fe << 6 | _0x1aeee6 : _0x5ccfbb = (_0x5ccfbb & 7) << 18 | _0x3173fe << 12 | _0x1aeee6 << 6 | _0x33db72[_0x140287++] & 63;
          if (_0x5ccfbb < 65536) _0x4aa88a += String["fromCharCode"](_0x5ccfbb); else {
            var _0x4f8e2a = _0x5ccfbb - 65536;
            _0x4aa88a += String["fromCharCode"](55296 | _0x4f8e2a >> 10, 56320 | _0x4f8e2a & 1023);
          }
        }
      }
      return _0x4aa88a;
    }
    function _0x30a7f6(_0x52ae6e, _0x546dbb) {
      return _0x52ae6e ? _0x344b4c(_0x18c91b, _0x52ae6e, _0x546dbb) : "";
    }
    function _0x2f86f3(_0x406ac7, _0x23730c, _0xf81516, _0x541d5f) {
      if (!(_0x541d5f > 0)) return 0;
      var _0x1c2ff6 = _0xf81516, _0x581302 = _0xf81516 + _0x541d5f - 1;
      for (var _0x1f1c4d = 0; _0x1f1c4d < _0x406ac7["length"]; ++_0x1f1c4d) {
        var _0x3bbccc = _0x406ac7["charCodeAt"](_0x1f1c4d);
        if (_0x3bbccc >= 55296 && _0x3bbccc <= 57343) {
          var _0x2ec49f = _0x406ac7["charCodeAt"](++_0x1f1c4d);
          _0x3bbccc = 65536 + ((_0x3bbccc & 1023) << 10) | _0x2ec49f & 1023;
        }
        if (_0x3bbccc <= 127) {
          if (_0xf81516 >= _0x581302) break;
          _0x23730c[_0xf81516++] = _0x3bbccc;
        } else {
          if (_0x3bbccc <= 2047) {
            if (_0xf81516 + 1 >= _0x581302) break;
            _0x23730c[_0xf81516++] = 192 | _0x3bbccc >> 6, _0x23730c[_0xf81516++] = 128 | _0x3bbccc & 63;
          } else {
            if (_0x3bbccc <= 65535) {
              if (_0xf81516 + 2 >= _0x581302) break;
              _0x23730c[_0xf81516++] = 224 | _0x3bbccc >> 12, _0x23730c[_0xf81516++] = 128 | _0x3bbccc >> 6 & 63, _0x23730c[_0xf81516++] = 128 | _0x3bbccc & 63;
            } else {
              if (_0xf81516 + 3 >= _0x581302) break;
              _0x23730c[_0xf81516++] = 240 | _0x3bbccc >> 18, _0x23730c[_0xf81516++] = 128 | _0x3bbccc >> 12 & 63, _0x23730c[_0xf81516++] = 128 | _0x3bbccc >> 6 & 63, _0x23730c[_0xf81516++] = 128 | _0x3bbccc & 63;
            }
          }
        }
      }
      return _0x23730c[_0xf81516] = 0, _0xf81516 - _0x1c2ff6;
    }
    function _0x1714da(_0x162386, _0x42be7a, _0x5d7fb6) {
      return _0x2f86f3(_0x162386, _0x18c91b, _0x42be7a, _0x5d7fb6);
    }
    function _0x4d063a(_0x793076) {
      var _0x3a38b1 = 0;
      for (var _0x5a4b70 = 0; _0x5a4b70 < _0x793076["length"]; ++_0x5a4b70) {
        var _0x112011 = _0x793076["charCodeAt"](_0x5a4b70);
        if (_0x112011 >= 55296 && _0x112011 <= 57343) _0x112011 = 65536 + ((_0x112011 & 1023) << 10) | _0x793076["charCodeAt"](++_0x5a4b70) & 1023;
        if (_0x112011 <= 127) ++_0x3a38b1; else {
          if (_0x112011 <= 2047) _0x3a38b1 += 2; else {
            if (_0x112011 <= 65535) _0x3a38b1 += 3; else _0x3a38b1 += 4;
          }
        }
      }
      return _0x3a38b1;
    }
    var _0x1f8815 = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : undefined;
    function _0x186836(_0xf184d5) {
      var _0x329eb5 = _0x4d063a(_0xf184d5) + 1, _0x38f873 = _0x1f6602(_0x329eb5);
      if (_0x38f873) _0x2f86f3(_0xf184d5, _0x59ed12, _0x38f873, _0x329eb5);
      return _0x38f873;
    }
    function _0x388784(_0x142600) {
      var _0x3bf59d = _0x4d063a(_0x142600) + 1, _0x5d9233 = _0x1d99d1(_0x3bf59d);
      return _0x2f86f3(_0x142600, _0x59ed12, _0x5d9233, _0x3bf59d), _0x5d9233;
    }
    function _0x12c519(_0x2b2c2e, _0x4c8584) {
      _0x59ed12["set"](_0x2b2c2e, _0x4c8584);
    }
    function _0x6407fd(_0x4d2b, _0x35b50d, _0x20dd43) {
      for (var _0x835402 = 0; _0x835402 < _0x4d2b["length"]; ++_0x835402) {
        _0x59ed12[_0x35b50d++ >> 0] = _0x4d2b["charCodeAt"](_0x835402);
      }
      if (!_0x20dd43) _0x59ed12[_0x35b50d >> 0] = 0;
    }
    var _0x14ab10, _0x59ed12, _0x18c91b, _0x3e563b, _0x8b963d, _0x46c9cf, _0x29f705, _0x33f22d, _0x267920;
    function _0x2d9e2a(_0x7e364a) {
      _0x14ab10 = _0x7e364a, _0x4bcfe1["HEAP8"] = _0x59ed12 = new Int8Array(_0x7e364a), _0x4bcfe1["HEAP16"] = _0x3e563b = new Int16Array(_0x7e364a), _0x4bcfe1["HEAP32"] = _0x46c9cf = new Int32Array(_0x7e364a), _0x4bcfe1["HEAPU8"] = _0x18c91b = new Uint8Array(_0x7e364a), _0x4bcfe1["HEAPU16"] = _0x8b963d = new Uint16Array(_0x7e364a), _0x4bcfe1["HEAPU32"] = _0x29f705 = new Uint32Array(_0x7e364a), _0x4bcfe1["HEAPF32"] = _0x33f22d = new Float32Array(_0x7e364a), _0x4bcfe1["HEAPF64"] = _0x267920 = new Float64Array(_0x7e364a);
    }
    var _0x2f2a25 = _0x4bcfe1["INITIAL_MEMORY"] || 33554432, _0xfb4ade, _0x148e55 = [], _0x76a5e8 = [], _0x1654fa = [], _0xdd5bdd = [], _0x1ac4a3 = [], _0x44279c = false;
    function _0x29a856() {
      return _0x4f166f;
    }
    function _0x72e475() {
      if (_0x4bcfe1["preRun"]) {
        if (typeof _0x4bcfe1["preRun"] == "function") _0x4bcfe1["preRun"] = [_0x4bcfe1["preRun"]];
        while (_0x4bcfe1["preRun"]["length"]) {
          _0x427c41(_0x4bcfe1["preRun"]["shift"]());
        }
      }
      _0x45685e(_0x148e55);
    }
    function _0x1cd07e() {
      _0x44279c = true;
      if (!_0x4bcfe1["noFSInit"] && !_0x278315["init"]["initialized"]) _0x278315["init"]();
      _0x278315["ignorePermissions"] = false, _0x4f6acc["init"](), _0x2badf6["root"] = _0x278315["mount"](_0x2badf6, {}, null), _0x593392["root"] = _0x278315["mount"](_0x593392, {}, null), _0x45685e(_0x76a5e8);
    }
    function _0x14f6df() {
      _0x45685e(_0x1654fa);
    }
    function _0x1b8cb3() {
      if (_0x4bcfe1["postRun"]) {
        if (typeof _0x4bcfe1["postRun"] == "function") _0x4bcfe1["postRun"] = [_0x4bcfe1["postRun"]];
        while (_0x4bcfe1["postRun"]["length"]) {
          _0x5007d3(_0x4bcfe1["postRun"]["shift"]());
        }
      }
      _0x45685e(_0x1ac4a3);
    }
    function _0x427c41(_0x3cd73d) {
      _0x148e55["unshift"](_0x3cd73d);
    }
    function _0x5f2cfd(_0x14c0f2) {
      _0x76a5e8["unshift"](_0x14c0f2);
    }
    function _0x5007d3(_0x976867) {
      _0x1ac4a3["unshift"](_0x976867);
    }
    var _0x190e0a = 0, _0x8adb3a = null, _0x151408 = null;
    function _0x3c35f3(_0x5928b2) {
      return _0x5928b2;
    }
    function _0x441879(_0x16d37e) {
      _0x190e0a++, _0x4bcfe1["monitorRunDependencies"] && _0x4bcfe1["monitorRunDependencies"](_0x190e0a);
    }
    function _0x3b7ae4(_0x47832c) {
      _0x190e0a--;
      _0x4bcfe1["monitorRunDependencies"] && _0x4bcfe1["monitorRunDependencies"](_0x190e0a);
      if (_0x190e0a == 0) {
        _0x8adb3a !== null && (clearInterval(_0x8adb3a), _0x8adb3a = null);
        if (_0x151408) {
          var _0x2c76d4 = _0x151408;
          _0x151408 = null, _0x2c76d4();
        }
      }
    }
    _0x4bcfe1["preloadedImages"] = {}, _0x4bcfe1["preloadedAudios"] = {};
    function _0x4a2433(_0x1986e8) {
      {
        _0x4bcfe1["onAbort"] && _0x4bcfe1["onAbort"](_0x1986e8);
      }
      _0x1986e8 = "Aborted(" + _0x1986e8 + ")", _0x119168(_0x1986e8), _0x533336 = true, _0x2f5541 = 1, _0x1986e8 += ". Build with -s ASSERTIONS=1 for more info.";
      var _0x4cd31d = new WebAssembly["RuntimeError"](_0x1986e8);
      _0x57536e(_0x4cd31d);
      throw _0x4cd31d;
    }
    var _0x5ea6fc = "data:application/octet-stream;base64,";
    function _0x189384(_0x53c3ef) {
      return _0x53c3ef["startsWith"](_0x5ea6fc);
    }
    function _0xac425e(_0x513786) {
      return _0x513786["startsWith"]("file://");
    }
    var _0x586392;
    _0x586392 = "build.wasm";
    !_0x189384(_0x586392) && (_0x586392 = _0x42ee71(_0x586392));
    function _0x19183c(_0xf70512) {
      try {
        if (_0xf70512 == _0x586392 && _0x8b7407) return new Uint8Array(_0x8b7407);
        if (_0x27b012) return _0x27b012(_0xf70512); else throw "both async and sync fetching of the wasm failed";
      } catch (_0x579e08) {
        _0x4a2433(_0x579e08);
      }
    }
    function _0x4b7231() {
      if (!_0x8b7407 && (_0x266229 || _0x132c1d)) {
        if (typeof fetch == "function" && !_0xac425e(_0x586392)) return fetch(_0x586392, {credentials: "same-origin"})["then"](function (_0x577277) {
          if (!_0x577277["ok"]) throw "failed to load wasm binary file at '" + _0x586392 + "'";
          return _0x577277["arrayBuffer"]();
        })["catch"](function () {
          return _0x19183c(_0x586392);
        }); else {
          if (_0x27b369) return new Promise(function (_0x32c025, _0xcac004) {
            _0x27b369(_0x586392, function (_0x1dc6af) {
              _0x32c025(new Uint8Array(_0x1dc6af));
            }, _0xcac004);
          });
        }
      }
      return Promise["resolve"]()["then"](function () {
        return _0x19183c(_0x586392);
      });
    }
    function _0x1a14b8() {
      var _0x5d7480 = {env: _0x4735b1, wasi_snapshot_preview1: _0x4735b1};
      function _0x2a7539(_0x1ed9a4, _0x23a8ff) {
        var _0x4cafcf = _0x1ed9a4["exports"];
        _0x4bcfe1["asm"] = _0x4cafcf, _0x24f604 = _0x4bcfe1["asm"]["memory"], _0x2d9e2a(_0x24f604["buffer"]), _0xfb4ade = _0x4bcfe1["asm"]["__indirect_function_table"], _0x5f2cfd(_0x4bcfe1["asm"]["__wasm_call_ctors"]), _0x3b7ae4("wasm-instantiate");
      }
      _0x441879("wasm-instantiate");
      function _0x53bb64(_0x6f0e18) {
        _0x2a7539(_0x6f0e18["instance"]);
      }
      function _0x1b095f(_0x25ae80) {
        return _0x4b7231()["then"](function (_0x4b84b3) {
          return WebAssembly["instantiate"](_0x4b84b3, _0x5d7480);
        })["then"](function (_0x161a02) {
          return _0x161a02;
        })["then"](_0x25ae80, function (_0x42733f) {
          _0x119168("failed to asynchronously prepare wasm: " + _0x42733f), _0x4a2433(_0x42733f);
        });
      }
      function _0x1504ac() {
        return !_0x8b7407 && typeof WebAssembly["instantiateStreaming"] == "function" && !_0x189384(_0x586392) && !_0xac425e(_0x586392) && typeof fetch == "function" ? fetch(_0x586392, {credentials: "same-origin"})["then"](function (_0x3057eb) {
          var _0xffa71d = WebAssembly["instantiateStreaming"](_0x3057eb, _0x5d7480);
          return _0xffa71d["then"](_0x53bb64, function (_0x50e09a) {
            return _0x119168("wasm streaming compile failed: " + _0x50e09a), _0x119168("falling back to ArrayBuffer instantiation"), _0x1b095f(_0x53bb64);
          });
        }) : _0x1b095f(_0x53bb64);
      }
      if (_0x4bcfe1["instantiateWasm"]) try {
        var _0xcb5c21 = _0x4bcfe1["instantiateWasm"](_0x5d7480, _0x2a7539);
        return _0xcb5c21;
      } catch (_0xedfd4b) {
        return _0x119168("Module.instantiateWasm callback failed with error: " + _0xedfd4b), false;
      }
      return _0x1504ac()["catch"](_0x57536e), {};
    }
    var _0x12ce7f, _0x3c0e3f, _0x1d9234 = {5147192: function () {
      return _0x4bcfe1["webglContextAttributes"]["premultipliedAlpha"];
    }, 5147253: function () {
      return _0x4bcfe1["webglContextAttributes"]["preserveDrawingBuffer"];
    }, 5147317: function () {
      return _0x4bcfe1["webglContextAttributes"]["powerPreference"];
    }};
    function _0x45685e(_0x597610) {
      while (_0x597610["length"] > 0) {
        var _0x12ab03 = _0x597610["shift"]();
        if (typeof _0x12ab03 == "function") {
          _0x12ab03(_0x4bcfe1);
          continue;
        }
        var _0x2a244e = _0x12ab03["func"];
        typeof _0x2a244e == "number" ? _0x12ab03["arg"] === undefined ? function () {
          _0x2b31cb["call"](null, _0x2a244e);
        }() : function (_0x161d3f) {
          _0xe4a07d["apply"](null, [_0x2a244e, _0x161d3f]);
        }(_0x12ab03["arg"]) : _0x2a244e(_0x12ab03["arg"] === undefined ? null : _0x12ab03["arg"]);
      }
    }
    function _0xaee4cf(_0x18d0db) {
      var _0x17bac7 = _0x381588(), _0x4bb48b = _0x18d0db();
      return _0x770e87(_0x17bac7), _0x4bb48b;
    }
    function _0x466546(_0x4a5e74) {
      return _0x4a5e74;
    }
    function _0x53e2a6(_0x1f3110) {
      var _0x3c2461 = /\b_Z[\w\d_]+/g;
      return _0x1f3110["replace"](_0x3c2461, function (_0xe4198b) {
        var _0xaaa3a4 = _0x466546(_0xe4198b);
        return _0xe4198b === _0xaaa3a4 ? _0xe4198b : _0xaaa3a4 + " [" + _0xe4198b + "]";
      });
    }
    function _0x22d0b6(_0x528382, _0x4762d1, _0x59037c) {
      var _0x36ade2 = _0x4bcfe1["dynCall_" + _0x528382];
      return _0x59037c && _0x59037c["length"] ? _0x36ade2["apply"](null, [_0x4762d1]["concat"](_0x59037c)) : _0x36ade2["call"](null, _0x4762d1);
    }
    var _0x380b16 = [];
    function _0x2fb7fc(_0x208f9e) {
      var _0x53a1aa = _0x380b16[_0x208f9e];
      if (!_0x53a1aa) {
        if (_0x208f9e >= _0x380b16["length"]) _0x380b16["length"] = _0x208f9e + 1;
        _0x380b16[_0x208f9e] = _0x53a1aa = _0xfb4ade["get"](_0x208f9e);
      }
      return _0x53a1aa;
    }
    function _0xdf0b6c(_0x7ede6b, _0x3e3933, _0x3517c8) {
      return _0x22d0b6(_0x7ede6b, _0x3e3933, _0x3517c8);
    }
    function _0x406d9e(_0x3b6016) {
      if (_0x3b6016 instanceof _0x13a7a5 || _0x3b6016 == "unwind") return _0x2f5541;
      _0x15c649(1, _0x3b6016);
    }
    function _0x4c743f() {
      var _0x4b45cc = new Error;
      if (!_0x4b45cc["stack"]) {
        try {
          throw new Error;
        } catch (_0x10d8e7) {
          _0x4b45cc = _0x10d8e7;
        }
        if (!_0x4b45cc["stack"]) return "(no stack trace available)";
      }
      return _0x4b45cc["stack"]["toString"]();
    }
    function _0x53c589(_0x5e050d, _0x35d5fe) {
      _0xfb4ade["set"](_0x5e050d, _0x35d5fe), _0x380b16[_0x5e050d] = _0x35d5fe;
    }
    function _0x1aa9c0() {
      var _0x4e51b4 = _0x4c743f();
      if (_0x4bcfe1["extraStackTrace"]) _0x4e51b4 += "\n" + _0x4bcfe1["extraStackTrace"]();
      return _0x53e2a6(_0x4e51b4);
    }
    function _0x36b4a3(_0x2e814c, _0x23ac20, _0x5f4ee0, _0x53ac1e, _0x46f5e2) {
      var _0x7ad8ff = _0x30a7f6(_0x2e814c), _0x1a89c3 = _0x30a7f6(_0x23ac20), _0x1d6414 = _0x30a7f6(_0x5f4ee0), _0x26a97b = _0x30a7f6(_0x53ac1e), _0x2a084e = _0x30a7f6(_0x46f5e2);
      try {
        firebase["firestore"]()["collection"](_0x7ad8ff)["add"](JSON["parse"](_0x1a89c3))["then"](function (_0x3d3ca8) {
          window["unityInstance"]["SendMessage"](_0x1d6414, _0x26a97b, "Success: document added in collection " + _0x7ad8ff);
        })["catch"](function (_0x4a305d) {
          window["unityInstance"]["SendMessage"](_0x1d6414, _0x2a084e, JSON["stringify"](_0x4a305d, Object["getOwnPropertyNames"](_0x4a305d)));
        });
      } catch (_0x1783e2) {
        window["unityInstance"]["SendMessage"](_0x1d6414, _0x2a084e, JSON["stringify"](_0x1783e2, Object["getOwnPropertyNames"](_0x1783e2)));
      }
    }
    function _0x4288ce(_0xb51ebb, _0x37c7f6, _0x5598df, _0x263a6f, _0x373f2d, _0xbcaf0c, _0x272264) {
      var _0x47dc96 = _0x30a7f6(_0xb51ebb), _0x11d0d7 = _0x30a7f6(_0x37c7f6), _0x2b27dc = _0x30a7f6(_0x5598df), _0x197655 = _0x30a7f6(_0x263a6f), _0x1ae045 = _0x30a7f6(_0x373f2d), _0x43066b = _0x30a7f6(_0xbcaf0c), _0x424af9 = _0x30a7f6(_0x272264);
      try {
        var _0x263a6f = {};
        _0x263a6f[_0x2b27dc] = firebase["firestore"]["FieldValue"]["arrayUnion"](JSON["parse"](_0x197655)), firebase["firestore"]()["collection"](_0x47dc96)["doc"](_0x11d0d7)["update"](_0x263a6f)["then"](function () {
          window["unityInstance"]["SendMessage"](_0x1ae045, _0x43066b, "Success: element " + _0x197655 + " was added in " + _0x2b27dc);
        })["catch"](function (_0x308f01) {
          window["unityInstance"]["SendMessage"](_0x1ae045, _0x424af9, JSON["stringify"](_0x308f01, Object["getOwnPropertyNames"](_0x308f01)));
        });
      } catch (_0x540f23) {
        window["unityInstance"]["SendMessage"](_0x1ae045, _0x424af9, JSON["stringify"](_0x540f23, Object["getOwnPropertyNames"](_0x540f23)));
      }
    }
    function _0x493a10(_0x2a1b63) {
      try {
        window["CrazyGames"]["SDK"]["user"]["addScore"](_0x2a1b63);
      } catch (_0x26385e) {
        window["UnitySDK"]["logError"]("Error while calling addScore:", _0x26385e);
      }
    }
    function _0x598ab4(_0x553267, _0x4c0357) {
      try {
        window["CrazyGames"]["SDK"]["analytics"]["trackOrder"](window["unityStringify"](_0x553267), JSON["parse"](window["unityStringify"](_0x4c0357)));
      } catch (_0x3a530d) {
        window["UnitySDK"]["logError"]("Error while calling trackOrder:", _0x3a530d);
      }
    }
    function _0x430e2b() {
      var _0x40181b = document["querySelector"]("#unity-canvas");
      !_0x40181b && (_0x40181b = document["querySelector"]("canvas"));
      if (_0x40181b) {
        _0x40181b["style"]["cursor"] = "default";
        var _0x38fca9 = true;
        _0x40181b["addEventListener"]("mouseenter", function () {
          _0x38fca9 = true;
        }), _0x40181b["addEventListener"]("mouseleave", function (_0x3cd5b8) {
          if (window["mouseConfined"]) return _0x3cd5b8["preventDefault"](), _0x3cd5b8["stopPropagation"](), false;
        }), window["mouseConfined"] = true;
      }
    }
    function _0x51d2f1(_0x1ef751) {
      var _0x43fe62 = _0x30a7f6(_0x1ef751);
      if (navigator["clipboard"] && window["isSecureContext"]) navigator["clipboard"]["writeText"](_0x43fe62)["then"](function () {
        console["log"]("Text copied to clipboard");
      })["catch"](function (_0x42cbef) {
        console["error"]("Failed to copy text: ", _0x42cbef);
      }); else {
        var _0x1fb33a = document["createElement"]("textarea");
        _0x1fb33a["value"] = _0x43fe62, _0x1fb33a["style"]["position"] = "fixed", _0x1fb33a["style"]["left"] = "-999999px", document["body"]["appendChild"](_0x1fb33a), _0x1fb33a["focus"](), _0x1fb33a["select"]();
        try {
          document["execCommand"]("copy"), console["log"]("Text copied to clipboard (fallback)");
        } catch (_0x3e8fd5) {
          console["error"]("Failed to copy text: ", _0x3e8fd5);
        }
        document["body"]["removeChild"](_0x1fb33a);
      }
    }
    function _0x53d9fc(_0x53a48b) {
      const _0x57f6e4 = document["createElement"]("textarea");
      _0x57f6e4["value"] = window["unityStringify"](_0x53a48b), document["body"]["appendChild"](_0x57f6e4), _0x57f6e4["select"](), _0x57f6e4["setSelectionRange"](0, 99999), document["execCommand"]("copy"), document["body"]["removeChild"](_0x57f6e4);
    }
    function _0x5844c3(_0x1db297, _0x4788d1, _0x7b3a7d, _0x32ad8d, _0x272ea8) {
      var _0x5f081e = _0x30a7f6(_0x1db297), _0x36049 = _0x30a7f6(_0x4788d1), _0x27d29b = _0x30a7f6(_0x7b3a7d), _0xed1083 = _0x30a7f6(_0x32ad8d), _0x55c049 = _0x30a7f6(_0x272ea8);
      try {
        firebase["auth"]()["createUserWithEmailAndPassword"](_0x5f081e, _0x36049)["then"](function (_0xfa6b56) {
          window["unityInstance"]["SendMessage"](_0x27d29b, _0xed1083, "Success: signed up for " + _0x5f081e);
        })["catch"](function (_0x2906b3) {
          window["unityInstance"]["SendMessage"](_0x27d29b, _0x55c049, JSON["stringify"](_0x2906b3, Object["getOwnPropertyNames"](_0x2906b3)));
        });
      } catch (_0x1d42cb) {
        window["unityInstance"]["SendMessage"](_0x27d29b, _0x55c049, JSON["stringify"](_0x1d42cb, Object["getOwnPropertyNames"](_0x1d42cb)));
      }
    }
    function _0x3d5e98() {
      try {
        window["CrazyGames"]["SDK"]["data"]["clear"]();
      } catch (_0x39bffa) {
        window["UnitySDK"]["logError"]("Error while calling clear:", _0x39bffa);
      }
    }
    function _0x22e089(_0x5cb7f2) {
      var _0x240fa4 = null;
      try {
        _0x240fa4 = window["CrazyGames"]["SDK"]["data"]["getItem"](window["unityStringify"](_0x5cb7f2));
      } catch (_0x3bf6dc) {
        window["UnitySDK"]["logError"]("Error while calling getItem:", _0x3bf6dc);
      }
      var _0x570c0c = _0x4d063a(_0x240fa4 + "") + 1, _0x2e2c7d = _0x1f6602(_0x570c0c);
      return _0x1714da(_0x240fa4, _0x2e2c7d, _0x570c0c), _0x2e2c7d;
    }
    function _0x45dd45(_0x5c9619) {
      var _0x3338a3 = null;
      try {
        _0x3338a3 = window["CrazyGames"]["SDK"]["data"]["getItem"](window["unityStringify"](_0x5c9619));
      } catch (_0x365665) {
        window["UnitySDK"]["logError"]("Error while calling getItem:", _0x365665);
      }
      return _0x3338a3 !== null;
    }
    function _0x542769(_0x54f829) {
      try {
        window["CrazyGames"]["SDK"]["data"]["removeItem"](window["unityStringify"](_0x54f829));
      } catch (_0x309857) {
        window["UnitySDK"]["logError"]("Error while calling removeItem:", _0x309857);
      }
    }
    function _0xb7f8c5(_0x577832, _0x11338b) {
      try {
        window["CrazyGames"]["SDK"]["data"]["setItem"](window["unityStringify"](_0x577832), window["unityStringify"](_0x11338b));
      } catch (_0x5afbc7) {
        window["UnitySDK"]["logError"]("Error while calling setItem:", _0x5afbc7);
      }
    }
    function _0xe09791(_0x189582, _0x1702bd, _0x4fda99, _0x29bcfb, _0xd9ce04) {
      var _0x1f987e = _0x30a7f6(_0x189582), _0x311f95 = _0x30a7f6(_0x1702bd), _0xd89847 = _0x30a7f6(_0x4fda99), _0x4f59f6 = _0x30a7f6(_0x29bcfb), _0x286114 = _0x30a7f6(_0xd9ce04);
      try {
        firebase["firestore"]()["collection"](_0x1f987e)["doc"](_0x311f95)["delete"]()["then"](function () {
          window["unityInstance"]["SendMessage"](_0xd89847, _0x4f59f6, "Success: document " + _0x311f95 + " was deleted");
        })["catch"](function (_0x47920a) {
          window["unityInstance"]["SendMessage"](_0xd89847, _0x286114, JSON["stringify"](_0x47920a, Object["getOwnPropertyNames"](_0x47920a)));
        });
      } catch (_0x1179b4) {
        window["unityInstance"]["SendMessage"](_0xd89847, _0x286114, JSON["stringify"](_0x1179b4, Object["getOwnPropertyNames"](_0x1179b4)));
      }
    }
    function _0xb93715(_0x996b83, _0x4d72b9, _0x55cf03, _0x590cc5, _0x451931, _0x3f6218) {
      var _0x54844f = _0x30a7f6(_0x996b83), _0x9f460a = _0x30a7f6(_0x4d72b9), _0x575448 = _0x30a7f6(_0x55cf03), _0x2cfae7 = _0x30a7f6(_0x590cc5), _0x4a25c7 = _0x30a7f6(_0x451931), _0x1534ca = _0x30a7f6(_0x3f6218);
      try {
        var _0x9a789a = {};
        _0x9a789a[_0x575448] = firebase["firestore"]["FieldValue"]["delete"](), firebase["firestore"]()["collection"](_0x54844f)["doc"](_0x9f460a)["update"](_0x9a789a)["then"](function () {
          window["unityInstance"]["SendMessage"](_0x2cfae7, _0x4a25c7, "Success: field " + _0x575448 + " was deleted");
        })["catch"](function (_0x2a862b) {
          window["unityInstance"]["SendMessage"](_0x2cfae7, _0x1534ca, JSON["stringify"](_0x2a862b, Object["getOwnPropertyNames"](_0x2a862b)));
        });
      } catch (_0x5795f2) {
        window["unityInstance"]["SendMessage"](_0x2cfae7, _0x1534ca, JSON["stringify"](_0x5795f2, Object["getOwnPropertyNames"](_0x5795f2)));
      }
    }
    function _0x593aeb(_0x47f1bb, _0x565a9e, _0x4cb285, _0x29e70f) {
      var _0x1e0334 = _0x30a7f6(_0x47f1bb), _0x26f39d = _0x30a7f6(_0x565a9e), _0x8df4ba = _0x30a7f6(_0x4cb285), _0x36d61c = _0x30a7f6(_0x29e70f);
      try {
        firebase["database"]()["ref"](_0x1e0334)["remove"]()["then"](function (_0x196deb) {
          window["unityInstance"]["SendMessage"](_0x26f39d, _0x8df4ba, "Success: " + _0x1e0334 + " was deleted");
        });
      } catch (_0x28df7a) {
        window["unityInstance"]["SendMessage"](_0x26f39d, _0x36d61c, JSON["stringify"](_0x28df7a, Object["getOwnPropertyNames"](_0x28df7a)));
      }
    }
    function _0x4ff1ea(_0x25f40c, _0x79ea1d, _0x478f6c, _0x5059d4) {
      var _0x257a2c = _0x30a7f6(_0x25f40c), _0x34e132 = _0x30a7f6(_0x79ea1d), _0x588ddc = _0x30a7f6(_0x478f6c), _0x4b445b = _0x30a7f6(_0x5059d4);
      try {
        firebase["storage"]()["ref"](_0x257a2c)["getDownloadURL"]()["then"](function (_0x205be5) {
          var _0x48b0e0 = new XMLHttpRequest;
          _0x48b0e0["responseType"] = "arraybuffer", _0x48b0e0["onload"] = function (_0x2ffd03) {
            var _0x4c0823 = _0x48b0e0["response"];
            window["unityInstance"]["SendMessage"](_0x34e132, _0x588ddc, _0x3a35bf(_0x4c0823));
          }, _0x48b0e0["open"]("GET", _0x205be5), _0x48b0e0["send"]();
        })["catch"](function (_0x440545) {
          window["unityInstance"]["SendMessage"](_0x34e132, _0x4b445b, JSON["stringify"](_0x440545, Object["getOwnPropertyNames"](_0x440545)));
        });
      } catch (_0xa32616) {
        window["unityInstance"]["SendMessage"](_0x34e132, _0x4b445b, JSON["stringify"](_0xa32616, Object["getOwnPropertyNames"](_0xa32616)));
      }
      function _0x3a35bf(_0x4f6d21) {
        var _0x366cdf = "", _0x41815e = new Uint8Array(_0x4f6d21), _0x1253e8 = _0x41815e["byteLength"];
        for (var _0x4b01d9 = 0; _0x4b01d9 < _0x1253e8; _0x4b01d9++) {
          _0x366cdf += String["fromCharCode"](_0x41815e[_0x4b01d9]);
        }
        return window["btoa"](_0x366cdf);
      }
    }
    function _0x443136() {
      try {
        window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: Getting WeeGoo InGame Ad"), window[preroll["config"]["loaderObjectName"]]["refetchAd"]();
      } catch (_0x100db3) {
        console["log"]("No WeeGooAFG implementation found!");
      }
    }
    function _0x7a0974(_0x3060cb) {
      var _0x1f3db7 = {adStarted: function () {
        _0x2fae3e("GMSDKAdvertisement", "JSLibCallback_AdStarted");
      }, adFinished: function () {
        _0x2fae3e("GMSDKAdvertisement", "JSLibCallback_AdFinished");
      }, adError: function (_0x2218f8) {
        _0x2fae3e("GMSDKAdvertisement", "JSLibCallback_AdError", JSON["stringify"](_0x2218f8));
      }}, _0x58f786 = window["GMSOFT_GMADS_INFO"]["reward"], _0x11908e = _0x58f786[Math["floor"](Math["random"]() * _0x58f786["length"])];
      try {
        var _0x496fe6 = document["createElement"]("div");
        _0x496fe6["id"] = "gm-ad-overlay", _0x496fe6["style"]["cssText"] = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
        var _0x11b307 = document["createElement"]("div");
        _0x11b307["style"]["cssText"] = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
        var _0x49348c = document["createElement"]("video");
        _0x49348c["src"] = _0x11908e["image"], _0x49348c["style"]["cssText"] = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ", _0x49348c["autoplay"] = true, _0x49348c["muted"] = true, _0x49348c["preload"] = "auto";
        var _0x29c7f6 = document["createElement"]("button");
        _0x29c7f6["innerHTML"] = "Skip (5)", _0x29c7f6["disabled"] = true, _0x29c7f6["style"]["cssText"] = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ", _0x29c7f6["disabled"] = true, _0x29c7f6["style"]["opacity"] = "0.5";
        var _0x295951 = document["createElement"]("div");
        _0x295951["style"]["cssText"] = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
        var _0x2ccf54 = document["createElement"]("div");
        _0x2ccf54["style"]["cssText"] = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
        var _0x9efc4e = 5, _0x21f7e7 = setInterval(function () {
          _0x9efc4e--, _0x9efc4e > 0 ? _0x29c7f6["innerHTML"] = "Skip (" + _0x9efc4e + ")" : (_0x29c7f6["innerHTML"] = "Skip", _0x29c7f6["disabled"] = false, _0x29c7f6["style"]["opacity"] = "1", _0x29c7f6["style"]["cursor"] = "pointer", clearInterval(_0x21f7e7));
        }, 1e3);
        function _0x14ee98() {
          _0x496fe6 && _0x496fe6["parentNode"] && _0x496fe6["parentNode"]["removeChild"](_0x496fe6), clearInterval(_0x21f7e7), _0x1f3db7["adFinished"]();
        }
        function _0x5ce247() {
          window["open"](_0x11908e["url"], "_blank");
        }
        function _0x56135a() {
          if (_0x49348c["duration"] && _0x49348c["currentTime"]) {
            var _0x152337 = _0x49348c["currentTime"] / _0x49348c["duration"] * 100;
            _0x2ccf54["style"]["width"] = _0x152337 + "%";
          }
        }
        _0x49348c["addEventListener"]("loadstart", function () {
          _0x1f3db7["adStarted"]();
        }), _0x49348c["addEventListener"]("timeupdate", function () {
          _0x56135a();
        }), _0x49348c["addEventListener"]("ended", function () {
          _0x14ee98();
        }), _0x49348c["addEventListener"]("error", function (_0x5228d6) {
          var _0x476212 = {message: "Video load error", code: _0x5228d6["target"]["error"] ? _0x5228d6["target"]["error"]["code"] : "unknown"};
          _0x1f3db7["adError"](_0x476212), _0x14ee98();
        }), _0x49348c["addEventListener"]("click", function () {
          _0x5ce247();
        }), _0x29c7f6["addEventListener"]("click", function () {
          !_0x29c7f6["disabled"] && _0x14ee98();
        }), _0x49348c["addEventListener"]("contextmenu", function (_0x3367cf) {
          _0x3367cf["preventDefault"]();
        }), _0x295951["appendChild"](_0x2ccf54), _0x11b307["appendChild"](_0x49348c), _0x11b307["appendChild"](_0x29c7f6), _0x11b307["appendChild"](_0x295951), _0x496fe6["appendChild"](_0x11b307), document["body"]["appendChild"](_0x496fe6), _0x49348c["play"]()["catch"](function (_0x48dda2) {
          console["error"]("Video play error:", _0x48dda2), _0x1f3db7["adError"]({message: "Cannot play video", details: _0x48dda2["message"]}), _0x14ee98();
        });
      } catch (_0x233ed2) {
        console["error"]("Ad overlay creation error:", _0x233ed2), _0x1f3db7["adError"]({message: "Failed to create ad overlay", details: _0x233ed2["message"]});
      }
    }
    function _0x557129(_0x19df49, _0x4c74fd) {
      gmEvent(_0x30a7f6(_0x19df49), _0x30a7f6(_0x4c74fd));
    }
    function _0xc73f4e() {
      const _0x33d583 = "gmsdksigndomain";
      try {
        if (localStorage["hasOwnProperty"](_0x33d583)) {
          let _0x22961d = localStorage["getItem"](_0x33d583);
          if (_0x22961d && _0x22961d["length"] > 10) {
            window["GMSOFT_SIGNED"] = _0x22961d, console["log"]("Local storage GM_SDK_GetVeryfiedSignature: ", window["GMSOFT_SIGNED"]), _0x2fae3e("GmSoft", "OnGetVeryfiedSignature", window["GMSOFT_SIGNED"]);
            return;
          }
        }
      } catch (_0x350086) {
        console["error"]("Error getting GM_SDK_GetVeryfiedSignature from local storage: ", _0x350086);
      }
      try {
        let _0x2a0bbe = "hn=" + window["location"]["hostname"], _0x37d559 = btoa(_0x2a0bbe), _0xcada7f = "https://api.cdnwave.com/sdkdom/keysigned";
        window["GMSOFT_OPTIONS"] && window["GMSOFT_OPTIONS"]["signedurl"] && (_0xcada7f = window["GMSOFT_OPTIONS"]["signedurl"]);
        let _0xe3b11 = _0xcada7f + "?params=" + _0x37d559;
        var _0x19e21b = new XMLHttpRequest;
        let _0x43e2d6 = "";
        _0x19e21b["open"]("GET", _0xe3b11, false), _0x19e21b["send"](_0x43e2d6);
        let _0x5614ea = _0x19e21b["responseText"];
        if (_0x5614ea && atob(_0x5614ea) === "bangame") {
          return;
        }
        window["GMSOFT_SIGNED"] = _0x5614ea, localStorage["setItem"](_0x33d583, _0x5614ea), console["log"]("send request GM_SDK_GetVeryfiedSignature: ", window["GMSOFT_SIGNED"]), _0x2fae3e("GmSoft", "OnGetVeryfiedSignature", window["GMSOFT_SIGNED"]);
      } catch (_0x30d218) {
        console["error"]("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x30d218);
      }
    }
    function _0x255279() {
      let _0x4bd9a9 = document["location"]["hostname"];
      _0x2fae3e("GmSoft", "SetUnityHostName", _0x4bd9a9), _0x2fae3e("GmSoft", "SetSDKType", window["GMSOFT_SDKTYPE"]);
    }
    function _0x1da9f5() {
      console["log"]("GM_SDK_StartGame");
      try {
        gmStartGame(function () {
          _0x2fae3e("GmSoft", "SetGameInfoParam", JSON["stringify"](window["GMSOFT_GAME_INFO"]));
        });
      } catch (_0x43242e) {
        console["error"]("Error JS 12", _0x43242e);
      }
      try {
        gmStartAds(function () {
          _0x2fae3e("GmSoft", "SetAdParam", JSON["stringify"](window["GMSOFT_ADS_INFO"]));
        });
      } catch (_0x3e0fbb) {
        console["error"]("Error JS 20", _0x3e0fbb);
      }
      try {
        document["addEventListener"]("gmsoftbanevent", _0x318f69 => {
          _0x2fae3e("GmSoft", "LockGame", _0x318f69["detail"]);
        });
      } catch (_0x3eccc2) {
        console["error"]("Error JS 28", _0x3eccc2);
      }
    }
    function _0xfd6898(_0x2b4da2) {
      try {
        window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: Sending game event"), window[preroll["config"]["loaderObjectName"]]["GameEvent"](_0x2b4da2);
      } catch (_0x5ee629) {
        console["log"]("No WeeGooAFG implementation found!");
      }
    }
    function _0x37c0c3() {
      try {
        window["CrazyGames"]["SDK"]["game"]["gameplayStart"]();
      } catch (_0x592d05) {
        window["UnitySDK"]["logError"]("Error while calling gameplayStart:", _0x592d05);
      }
    }
    function _0x5cd640() {
      try {
        window["CrazyGames"]["SDK"]["game"]["gameplayStop"]();
      } catch (_0x12caff) {
        window["UnitySDK"]["logError"]("Error while calling gameplayStop:", _0x12caff);
      }
    }
    function _0x1b8189() {
      var _0x55450b = firebaseConfig["projectId"], _0xbdc957 = _0x4d063a(_0x55450b) + 1, _0x57187f = _0x1f6602(_0xbdc957);
      return _0x1714da(_0x55450b, _0x57187f, _0xbdc957), _0x57187f;
    }
    function _0x1df97c(_0x1a6b9d, _0x331a4b, _0x1c1397, _0x6bfa21, _0x17c3b4) {
      var _0x5eb65f = _0x30a7f6(_0x1a6b9d), _0x4b1950 = _0x30a7f6(_0x331a4b), _0x209a70 = _0x30a7f6(_0x1c1397), _0x274785 = _0x30a7f6(_0x6bfa21), _0x566352 = _0x30a7f6(_0x17c3b4);
      try {
        firebase["firestore"]()["collection"](_0x5eb65f)["doc"](_0x4b1950)["get"]()["then"](function (_0x40e858) {
          _0x40e858["exists"] ? window["unityInstance"]["SendMessage"](_0x209a70, _0x274785, JSON["stringify"](_0x40e858["data"]())) : window["unityInstance"]["SendMessage"](_0x209a70, _0x274785, "null");
        })["catch"](function (_0x292a80) {
          window["unityInstance"]["SendMessage"](_0x209a70, _0x566352, JSON["stringify"](_0x292a80, Object["getOwnPropertyNames"](_0x292a80)));
        });
      } catch (_0x2066a4) {
        window["unityInstance"]["SendMessage"](_0x209a70, _0x566352, JSON["stringify"](_0x2066a4, Object["getOwnPropertyNames"](_0x2066a4)));
      }
    }
    function _0x40c23f(_0x25cba5, _0x2aea11, _0x4cee5a, _0x372796) {
      var _0x1004d9 = _0x30a7f6(_0x25cba5), _0x1734e1 = _0x30a7f6(_0x2aea11), _0x469647 = _0x30a7f6(_0x4cee5a), _0x2397b5 = _0x30a7f6(_0x372796);
      try {
        firebase["firestore"]()["collection"](_0x1004d9)["get"]()["then"](function (_0x4f1cfc) {
          var _0x2df29f = {};
          _0x4f1cfc["forEach"](function (_0x1138c3) {
            _0x2df29f[_0x1138c3["id"]] = _0x1138c3["data"]();
          }), window["unityInstance"]["SendMessage"](_0x1734e1, _0x469647, JSON["stringify"](_0x2df29f));
        })["catch"](function (_0x2c7b99) {
          window["unityInstance"]["SendMessage"](_0x1734e1, _0x2397b5, JSON["stringify"](_0x2c7b99, Object["getOwnPropertyNames"](_0x2c7b99)));
        });
      } catch (_0x241362) {
        window["unityInstance"]["SendMessage"](_0x1734e1, _0x2397b5, JSON["stringify"](_0x241362, Object["getOwnPropertyNames"](_0x241362)));
      }
    }
    function _0x26ca24() {
      var _0x311cec = window["CrazyGames"]["SDK"]["environment"], _0x555738 = _0x4d063a(_0x311cec) + 1, _0x1e36cb = _0x1f6602(_0x555738);
      return _0x1714da(_0x311cec, _0x1e36cb, _0x555738), _0x1e36cb;
    }
    function _0x1144b2() {
      var _0x1c6b7f = JSON["stringify"](window["CrazyGames"]["SDK"]["game"]["settings"]), _0x9bb31b = _0x4d063a(_0x1c6b7f) + 1, _0x2634a8 = _0x1f6602(_0x9bb31b);
      return _0x1714da(_0x1c6b7f, _0x2634a8, _0x9bb31b), _0x2634a8;
    }
    function _0x37cdae(_0x46dbf6) {
      var _0x313e73 = new URLSearchParams(window["location"]["search"]), _0x140506 = _0x313e73["get"](window["unityStringify"](_0x46dbf6));
      _0x140506 === null && (_0x140506 = "");
      var _0x28231e = _0x4d063a(_0x140506) + 1, _0x4c3f4f = _0x1f6602(_0x28231e);
      return _0x1714da(_0x140506, _0x4c3f4f, _0x28231e), _0x4c3f4f;
    }
    function _0x5aba99() {
      return window["CrazyGames"]["SDK"]["isQaTool"];
    }
    function _0x1ba6cb(_0x4e1f42, _0x56442a) {
      performance["memory"] ? (_0x267920[_0x4e1f42 >> 3] = performance["memory"]["totalJSHeapSize"], _0x267920[_0x56442a >> 3] = performance["memory"]["usedJSHeapSize"]) : (_0x267920[_0x4e1f42 >> 3] = NaN, _0x267920[_0x56442a >> 3] = NaN);
    }
    function _0x3c7145(_0x475bfb, _0x352381, _0x5adb11, _0x332347) {
      var _0x101a07 = _0x30a7f6(_0x475bfb), _0x8a7cca = _0x30a7f6(_0x352381), _0x30d774 = _0x30a7f6(_0x5adb11), _0x304161 = _0x30a7f6(_0x332347);
      try {
        firebase["database"]()["ref"](_0x101a07)["once"]("value")["then"](function (_0x271e7c) {
          window["unityInstance"]["SendMessage"](_0x8a7cca, _0x30d774, JSON["stringify"](_0x271e7c["val"]()));
        });
      } catch (_0x222b33) {
        window["unityInstance"]["SendMessage"](_0x8a7cca, _0x304161, JSON["stringify"](_0x222b33, Object["getOwnPropertyNames"](_0x222b33)));
      }
    }
    function _0x970d5f() {
      var _0x5d702d = JSON["stringify"](window["CrazyGames"]["SDK"]["user"]["systemInfo"]), _0x54c691 = _0x4d063a(_0x5d702d) + 1, _0x5e1965 = _0x1f6602(_0x54c691);
      return _0x1714da(_0x5d702d, _0x5e1965, _0x54c691), _0x5e1965;
    }
    function _0x78d0e2() {
      window["CrazyGames"]["SDK"]["user"]["getUser"]()["then"](function (_0x351f11) {
        _0x2fae3e("CrazySDKSingleton", "JSLibCallback_GetUser", JSON["stringify"]({userJson: JSON["stringify"](_0x351f11)}));
      })["catch"](function (_0x50b108) {
        _0x2fae3e("CrazySDKSingleton", "JSLibCallback_GetUser", JSON["stringify"]({errorJson: JSON["stringify"](_0x50b108)}));
      });
    }
    function _0x33c01e() {
      window["CrazyGames"]["SDK"]["user"]["getUserToken"]()["then"](function (_0x521d43) {
        _0x2fae3e("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON["stringify"]({token: _0x521d43}));
      })["catch"](function (_0x45b094) {
        _0x2fae3e("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON["stringify"]({errorJson: JSON["stringify"](_0x45b094)}));
      });
    }
    function _0x3d4fba() {
      window["CrazyGames"]["SDK"]["user"]["getXsollaUserToken"]()["then"](function (_0x2287db) {
        _0x2fae3e("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON["stringify"]({token: _0x2287db}));
      })["catch"](function (_0xab2c0e) {
        _0x2fae3e("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON["stringify"]({errorJson: JSON["stringify"](_0xab2c0e)}));
      });
    }
    function _0x40abb7() {}
    function _0x222b3f() {
      console["log"]("afg.ready: " + afg["ready"]), afg["ready"] ? (_0x2fae3e("H5Adverisement", "PreloadRewardedVideoCallback", 1), afg["adBreak"]({type: "reward", name: "reward ads", beforeReward: function (_0xde0c7c) {
        this["_showRewardAdFn"] = _0xde0c7c, console["log"]("[H5 Ads] before reward");
      }["bind"](this), adViewed: function () {
        this["_showRewardAdFn"] = null, _0x2fae3e("H5Adverisement", "RewardedVideoSuccessCallback"), console["log"]("[H5 Ads] ad viewed");
      }["bind"](this), adDismissed: function () {
        this["_showRewardAdFn"] = null, _0x2fae3e("H5Adverisement", "RewardedVideoFailureCallback"), console["log"]("[H5 Ads] ad failure");
      }["bind"](this), adBreakDone: function (_0x3b4c82) {
        console["log"]("[H5 Ads] Reward break done"), _0x2fae3e("H5Adverisement", "ResumeGameCallback");
      }["bind"](this)})) : (console["log"]("[H5 Ads] no reward ads"), _0x2fae3e("H5Adverisement", "PreloadRewardedVideoCallback", 0));
    }
    function _0xd2e590() {
      afg["ready"] ? afg["adBreak"]({type: "next", name: "next", beforeAd: function () {
        afg["onBeforeAd"](), console["log"]("[H5 Ads] Before ad"), _0x2fae3e("H5Adverisement", "PauseGameCallback");
      }["bind"](this), adBreakDone: function () {
        console["log"]("[H5 Ads] Ad break done"), _0x2fae3e("H5Adverisement", "ResumeGameCallback");
      }["bind"](this)}) : (console["log"]("no " + adType + " ads"), _0x2fae3e("H5Adverisement", "ResumeGameCallback"));
    }
    function _0x123a39() {
      this["_showRewardAdFn"] ? (_0x2fae3e("H5Adverisement", "PauseGameCallback"), this["_showRewardAdFn"]()) : _0x2fae3e("H5Adverisement", "ResumeGameCallback");
    }
    function _0x43b7ce() {
      try {
        window["CrazyGames"]["SDK"]["game"]["happytime"]();
      } catch (_0x51c703) {
        window["UnitySDK"]["logError"]("Error while calling happytime:", _0x51c703);
      }
    }
    function _0x516e54() {
      try {
        window["CrazyGames"]["SDK"]["game"]["hideInviteButton"]();
      } catch (_0x105254) {
        window["UnitySDK"]["logError"]("Error while calling hideInviteButton:", _0x105254);
      }
    }
    function _0x5494b8(_0xa887ab, _0xb3fe29, _0x3f31f4, _0x168056, _0x36f1aa, _0x5d2454, _0x326076) {
      var _0x9dd083 = _0x30a7f6(_0xa887ab), _0x4dccb3 = _0x30a7f6(_0xb3fe29), _0x5926dd = _0x30a7f6(_0x3f31f4), _0x103b75 = _0x30a7f6(_0x36f1aa), _0x4b47e0 = _0x30a7f6(_0x5d2454), _0x58e666 = _0x30a7f6(_0x326076);
      try {
        var _0xd3a9da = {};
        _0xd3a9da[_0x5926dd] = firebase["firestore"]["FieldValue"]["increment"](_0x168056), firebase["firestore"]()["collection"](_0x9dd083)["doc"](_0x4dccb3)["update"](_0xd3a9da)["then"](function () {
          window["unityInstance"]["SendMessage"](_0x103b75, _0x4b47e0, "Success: incremented " + _0x5926dd + " by " + _0x168056);
        })["catch"](function (_0x50561a) {
          window["unityInstance"]["SendMessage"](_0x103b75, _0x58e666, JSON["stringify"](_0x50561a, Object["getOwnPropertyNames"](_0x50561a)));
        });
      } catch (_0x536985) {
        window["unityInstance"]["SendMessage"](_0x103b75, _0x58e666, JSON["stringify"](_0x536985, Object["getOwnPropertyNames"](_0x536985)));
      }
    }
    function _0x1faead(_0x3d6db7) {
      typeof _0x30a7f6 !== "undefined" ? window["unityStringify"] = _0x30a7f6 : window["unityStringify"] = _0x30a7f6;
      window["UnitySDK"] = {version: window["unityStringify"](_0x3d6db7), pointerLockElement: undefined, unlockPointer: function () {
        this["pointerLockElement"] = document["pointerLockElement"] || null, this["pointerLockElement"] && document["exitPointerLock"] && document["exitPointerLock"]();
      }, lockPointer: function () {
        this["pointerLockElement"] && this["pointerLockElement"]["requestPointerLock"] && this["pointerLockElement"]["requestPointerLock"]();
      }, logError: function () {
        var _0x1012b4 = Array["prototype"]["slice"]["call"](arguments);
        _0x1012b4["unshift"]("[JsLib]"), console["error"]["apply"](console, _0x1012b4);
      }};
      var _0x57010a = {wrapper: {engine: "unity", sdkVersion: window["unityStringify"](_0x3d6db7)}}, _0x321f31 = document["createElement"]("script");
      _0x321f31["src"] = "https://sdk.crazygames.com/crazygames-sdk-v3.js", document["head"]["appendChild"](_0x321f31), _0x321f31["addEventListener"]("load", function () {
        window["CrazyGames"]["SDK"]["init"](_0x57010a)["then"](function () {
          _0x2fae3e("CrazySDKSingleton", "JSLibCallback_Init"), window["CrazyGames"]["SDK"]["ad"]["hasAdblock"]()["then"](function (_0xe12f) {
            _0x2fae3e("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0xe12f ? 1 : 0);
          })["catch"](function (_0x22d741) {
            window["UnitySDK"]["logError"]("Error while checking adblock:", _0x22d741), _0x2fae3e("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
          }), window["CrazyGames"]["SDK"]["user"]["addAuthListener"](function (_0xef82ec) {
            _0x2fae3e("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON["stringify"]({userJson: JSON["stringify"](_0xef82ec)}));
          });
        });
      });
    }
    function _0x9c5b04() {
      return window["mouseConfined"] === true;
    }
    function _0x1cc26f() {
      return window["CrazyGames"]["SDK"]["user"]["isUserAccountAvailable"];
    }
    var _0x52b96a = null, _0xe9c265 = 0;
    function _0x4b2e68() {
      return _0x52b96a && _0x52b96a["activated"] || _0xe9c265 != 0;
    }
    var _0x301761 = 1, _0x2c783c = {x: 0, y: 0, z: 0};
    function _0x1572df() {
      _0x2c783c = {x: _0x52b96a["x"] * _0x301761, y: _0x52b96a["y"] * _0x301761, z: _0x52b96a["z"] * _0x301761};
      if (_0xe9c265 != 0) _0x2d9738(_0xe9c265, _0x2c783c["x"], _0x2c783c["y"], _0x2c783c["z"]);
    }
    var _0x2b40dd = 0, _0x133c99 = 0, _0x2401e8 = 0, _0x40d53b = 0, _0xf51981 = 0;
    function _0x20675a(_0x5bdf61, _0x1da269) {
      var _0x23048c = {x: _0x5bdf61["x"] - _0x1da269["x"], y: _0x5bdf61["y"] - _0x1da269["y"], z: _0x5bdf61["z"] - _0x1da269["z"]}, _0xdbc735 = _0x23048c["x"] * _0x23048c["x"] + _0x23048c["y"] * _0x23048c["y"] + _0x23048c["z"] * _0x23048c["z"], _0x5ba80f = {x: _0x5bdf61["x"] + _0x1da269["x"], y: _0x5bdf61["y"] + _0x1da269["y"], z: _0x5bdf61["z"] + _0x1da269["z"]}, _0x19f2ff = _0x5ba80f["x"] * _0x5ba80f["x"] + _0x5ba80f["y"] * _0x5ba80f["y"] + _0x5ba80f["z"] * _0x5ba80f["z"];
      return _0xdbc735 <= _0x19f2ff ? _0x23048c : _0x5ba80f;
    }
    function _0x922202(_0x438adc) {
      var _0x5b4f1c = {x: _0x438adc["accelerationIncludingGravity"]["x"] * _0x301761, y: _0x438adc["accelerationIncludingGravity"]["y"] * _0x301761, z: _0x438adc["accelerationIncludingGravity"]["z"] * _0x301761};
      if (_0xe9c265 != 0) _0x2d9738(_0xe9c265, _0x5b4f1c["x"], _0x5b4f1c["y"], _0x5b4f1c["z"]);
      var _0x49191e = {x: _0x438adc["acceleration"]["x"] * _0x301761, y: _0x438adc["acceleration"]["y"] * _0x301761, z: _0x438adc["acceleration"]["z"] * _0x301761};
      if (_0x2401e8 != 0) _0x2d9738(_0x2401e8, _0x49191e["x"], _0x49191e["y"], _0x49191e["z"]);
      if (_0x40d53b != 0) {
        var _0x4a6459 = _0x20675a(_0x5b4f1c, _0x49191e);
        _0x2d9738(_0x40d53b, _0x4a6459["x"], _0x4a6459["y"], _0x4a6459["z"]);
      }
      if (_0xf51981 != 0) {
        var _0x50bcc9 = Math["PI"] / 180;
        _0x2d9738(_0xf51981, _0x438adc["rotationRate"]["alpha"] * _0x50bcc9, _0x438adc["rotationRate"]["beta"] * _0x50bcc9, _0x438adc["rotationRate"]["gamma"] * _0x50bcc9);
      }
    }
    var _0x8edf4a = 0;
    function _0x5ade90(_0x2e5c91) {
      _0x2e5c91 & 1 && (typeof DeviceOrientationEvent["requestPermission"] === "function" && DeviceOrientationEvent["requestPermission"]()["then"](function (_0x3591ef) {
        _0x3591ef === "granted" ? _0x8edf4a &= -2 : _0x528b37("DeviceOrientationEvent permission not granted");
      })["catch"](function (_0x306afe) {
        _0x528b37(_0x306afe), _0x8edf4a |= 1;
      })), _0x2e5c91 & 2 && (typeof DeviceMotionEvent["requestPermission"] === "function" && DeviceMotionEvent["requestPermission"]()["then"](function (_0x31b248) {
        _0x31b248 === "granted" ? _0x8edf4a &= -3 : _0x528b37("DeviceMotionEvent permission not granted");
      })["catch"](function (_0x1b76ab) {
        _0x528b37(_0x1b76ab), _0x8edf4a |= 2;
      }));
    }
    function _0x3ab8c3() {
      _0xe9c265 == 0 && _0x2401e8 == 0 && _0x40d53b == 0 && _0xf51981 == 0 && (_0x5ade90(2), window["addEventListener"]("devicemotion", _0x922202));
    }
    function _0x7f0352() {
      var _0x330bba = 9.80665;
      _0x301761 = /(iPhone|iPad|Macintosh)/i["test"](navigator["userAgent"]) ? 1 / _0x330bba : -1 / _0x330bba;
    }
    function _0x18e32e(_0x53bf15, _0x4325fa) {
      _0x7f0352();
      if (typeof Accelerometer === "undefined") {
        _0x3ab8c3();
        if (_0x53bf15 != 0) _0xe9c265 = _0x53bf15;
        return;
      }
      if (_0x53bf15 != 0) _0xe9c265 = _0x53bf15;
      function _0xae657d(_0x4b833a) {
        _0x52b96a = new Accelerometer({frequency: _0x4b833a, referenceFrame: "device"}), _0x52b96a["addEventListener"]("reading", _0x1572df), _0x52b96a["addEventListener"]("error", function (_0x3b1120) {
          _0x528b37(_0x3b1120["error"] ? _0x3b1120["error"] : _0x3b1120);
        }), _0x52b96a["start"](), _0x133c99 = _0x4b833a;
      }
      if (_0x52b96a) _0x133c99 != _0x4325fa && (_0x52b96a["stop"](), _0x52b96a["removeEventListener"]("reading", _0x1572df), _0xae657d(_0x4325fa)); else _0x2b40dd != 0 ? _0x2b40dd = _0x4325fa : (_0x2b40dd = _0x4325fa, navigator["permissions"]["query"]({name: "accelerometer"})["then"](function (_0x2a6ca4) {
        _0x2a6ca4["state"] === "granted" ? _0xae657d(_0x2b40dd) : _0x528b37("No permission to use Accelerometer."), _0x2b40dd = 0;
      }));
    }
    function _0x371713() {
      _0xe9c265 == 0 && _0x2401e8 == 0 && _0x40d53b == 0 && _0xf51981 == 0 && window["removeEventListener"]("devicemotion", _0x5543b5);
    }
    function _0x4cc832() {
      if (_0x52b96a) (typeof GravitySensor !== "undefined" || _0x40d53b == 0) && (_0x52b96a["stop"](), _0x52b96a["removeEventListener"]("reading", _0x1572df), _0x52b96a = null), _0xe9c265 = 0, _0x133c99 = 0; else _0xe9c265 != 0 && (_0xe9c265 = 0, _0x371713());
    }
    var _0x58682d = 0;
    function _0x583215(_0x2f6541) {
      if (!_0x58682d) try {
        (function () {
          _0x2b31cb["call"](null, _0x2f6541);
        }());
      } catch (_0x202d35) {
        _0x58682d = 1, console["error"]("Uncaught exception from main loop:"), console["error"](_0x202d35), console["error"]("Halting program.");
        if (_0x4bcfe1["errorHandler"]) _0x4bcfe1["errorHandler"](_0x202d35);
        throw _0x202d35;
      }
    }
    function _0x4e2e9f(_0x2b55f6, _0x42060f) {
      var _0x2b25f9 = "";
      for (var _0x68e163 = 0; _0x68e163 < _0x42060f; _0x68e163++) _0x2b25f9 += String["fromCharCode"](_0x18c91b[_0x2b55f6 + _0x68e163]);
      _0x4bcfe1["canvas"]["style"]["cursor"] = "url(data:image/cur;base64," + btoa(_0x2b25f9) + "),default";
    }
    function _0x307168(_0x4a4077) {
      _0x4bcfe1["canvas"]["style"]["cursor"] = _0x4a4077 ? "default" : "none";
    }
    function _0x5a8b17(_0x1c4734) {
      if (typeof window["CSS"] !== "undefined" && typeof window["CSS"]["escape"] !== "undefined") return window["CSS"]["escape"](_0x1c4734);
      return _0x1c4734["replace"](/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
    }
    function _0x13ac5b() {
      var _0x40d308 = _0x4bcfe1["canvas"] ? _0x4bcfe1["canvas"]["id"] : "unity-canvas";
      return "#" + _0x5a8b17(_0x40d308);
    }
    function _0x5178f6(_0x435cb5, _0x1c1920, _0xfdf0f0, _0x4932df) {
      var _0x34b2d2 = document["querySelector"](_0x13ac5b()), _0x2884bd = _0x34b2d2 && _0x34b2d2["getBoundingClientRect"]();
      _0x29f705[_0xfdf0f0 >> 2] = _0x435cb5 - (_0x2884bd ? _0x2884bd["left"] : 0), _0x29f705[_0x4932df >> 2] = _0x1c1920 - (_0x2884bd ? _0x2884bd["top"] : 0);
    }
    function _0x539986(_0x41e051) {
      var _0x1171ee = _0x4d063a(_0x41e051) + 1, _0x5db908 = _0x1f6602(_0x1171ee);
      return _0x1714da(_0x41e051, _0x5db908, _0x1171ee), _0x5db908;
    }
    function _0x48476c() {
      var _0x330acf = _0x13ac5b();
      return _0x48476c["selector"] != _0x330acf && (_0x14a4bc(_0x48476c["ptr"]), _0x48476c["ptr"] = _0x539986(_0x330acf), _0x48476c["selector"] = _0x330acf), _0x48476c["ptr"];
    }
    function _0x512048(_0xffcb2e) {
      var _0x2a0663 = _0x30a7f6(_0xffcb2e);
      try {
        eval(_0x2a0663);
      } catch (_0x3827dc) {
        console["error"](_0x3827dc);
      }
    }
    function _0x503a4e(_0x5f3eb0) {
      var _0x526988 = _0x30a7f6(_0x5f3eb0);
      window["open"](_0x526988, "_blank", "");
    }
    function _0x27ac74() {}
    function _0x251f49() {
      _0x3eb30b["queuePersist"](_0x4bcfe1["__unityIdbfsMount"]["mount"]), !window["warnedAboutManualFilesystemSyncGettingDeprecated"] && (window["warnedAboutManualFilesystemSyncGettingDeprecated"] = true, !_0x4bcfe1["autoSyncPersistentDataPath"] && console["warn"]("Manual synchronization of Unity Application.persistentDataPath via JS_FileSystem_Sync() is deprecated and will be later removed in a future Unity version. The persistent data directory will be automatically synchronized instead on file modification. Pass config.autoSyncPersistentDataPath = true; to configuration in createUnityInstance() to opt in to the new behavior."));
    }
    var _0x4d9492 = null;
    function _0x398a4c() {
      return typeof GravitySensor !== "undefined" ? _0x4d9492 && _0x4d9492["activated"] : _0x40d53b != 0;
    }
    function _0x3ebd2a() {
      if (_0x40d53b != 0) _0x2d9738(_0x40d53b, _0x4d9492["x"] * _0x301761, _0x4d9492["y"] * _0x301761, _0x4d9492["z"] * _0x301761);
    }
    var _0x4fdfa5 = 0, _0x19e849 = null;
    function _0x5c88d0() {
      var _0x306976 = {x: _0x19e849["x"] * _0x301761, y: _0x19e849["y"] * _0x301761, z: _0x19e849["z"] * _0x301761};
      if (_0x2401e8 != 0) _0x2d9738(_0x2401e8, _0x306976["x"], _0x306976["y"], _0x306976["z"]);
      if (_0x40d53b != 0 && typeof GravitySensor === "undefined") {
        var _0x7adaf6 = _0x20675a(_0x2c783c, _0x306976);
        _0x2d9738(_0x40d53b, _0x7adaf6["x"], _0x7adaf6["y"], _0x7adaf6["z"]);
      }
    }
    var _0x19be64 = 0, _0x833869 = 0;
    function _0x541c52(_0x58cde8, _0x2e925e) {
      _0x7f0352();
      if (typeof LinearAccelerationSensor === "undefined") {
        _0x3ab8c3();
        if (_0x58cde8 != 0) _0x2401e8 = _0x58cde8;
        return;
      }
      if (_0x58cde8 != 0) _0x2401e8 = _0x58cde8;
      function _0x1788f0(_0x42ea8e) {
        _0x19e849 = new LinearAccelerationSensor({frequency: _0x42ea8e, referenceFrame: "device"}), _0x19e849["addEventListener"]("reading", _0x5c88d0), _0x19e849["addEventListener"]("error", function (_0x2da793) {
          _0x528b37(_0x2da793["error"] ? _0x2da793["error"] : _0x2da793);
        }), _0x19e849["start"](), _0x833869 = _0x42ea8e;
      }
      if (_0x19e849) _0x833869 != _0x2e925e && (_0x19e849["stop"](), _0x19e849["removeEventListener"]("reading", _0x5c88d0), _0x1788f0(_0x2e925e)); else _0x19be64 != 0 ? _0x19be64 = _0x2e925e : (_0x19be64 = _0x2e925e, navigator["permissions"]["query"]({name: "accelerometer"})["then"](function (_0x25faeb) {
        _0x25faeb["state"] === "granted" ? _0x1788f0(_0x19be64) : _0x528b37("No permission to use LinearAccelerationSensor."), _0x19be64 = 0;
      }));
    }
    function _0x1aabba(_0x23de1d, _0xf74bd6) {
      if (typeof GravitySensor === "undefined") {
        _0x18e32e(0, Math["max"](_0xf74bd6, _0x133c99)), _0x541c52(0, Math["max"](_0xf74bd6, _0x833869)), _0x40d53b = _0x23de1d;
        return;
      }
      _0x7f0352(), _0x40d53b = _0x23de1d;
      function _0x5a2078(_0x31724a) {
        _0x4d9492 = new GravitySensor({frequency: _0x31724a, referenceFrame: "device"}), _0x4d9492["addEventListener"]("reading", _0x3ebd2a), _0x4d9492["addEventListener"]("error", function (_0x2a8f71) {
          _0x528b37(_0x2a8f71["error"] ? _0x2a8f71["error"] : _0x2a8f71);
        }), _0x4d9492["start"]();
      }
      if (_0x4d9492) _0x4d9492["stop"](), _0x4d9492["removeEventListener"]("reading", _0x3ebd2a), _0x5a2078(_0xf74bd6); else _0x4fdfa5 != 0 ? _0x4fdfa5 = _0xf74bd6 : (_0x4fdfa5 = _0xf74bd6, navigator["permissions"]["query"]({name: "accelerometer"})["then"](function (_0x112a08) {
        _0x112a08["state"] === "granted" ? _0x5a2078(_0x4fdfa5) : _0x528b37("No permission to use GravitySensor."), _0x4fdfa5 = 0;
      }));
    }
    function _0x5331f4() {
      if (_0x19e849) (typeof GravitySensor !== "undefined" || _0x40d53b == 0) && (_0x19e849["stop"](), _0x19e849["removeEventListener"]("reading", _0x5c88d0), _0x19e849 = null), _0x2401e8 = 0, _0x833869 = 0; else _0x2401e8 != 0 && (_0x2401e8 = 0, _0x371713());
    }
    function _0x52fa3d() {
      _0x40d53b = 0;
      if (typeof GravitySensor === "undefined") {
        if (_0xe9c265 == 0) _0x4cc832();
        if (_0x2401e8 == 0) _0x5331f4();
        return;
      }
      _0x4d9492 && (_0x4d9492["stop"](), _0x4d9492["removeEventListener"]("reading", _0x3ebd2a), _0x4d9492 = null);
    }
    function _0x343e76(_0x517dcb) {
      try {
        (function () {
          _0x2b31cb["call"](null, _0x517dcb);
        }());
      } catch (_0x48d0d2) {
        console["warn"](_0x48d0d2);
      }
    }
    var _0x22f84c = null;
    function _0x2a2fd5() {
      return _0x22f84c && _0x22f84c["activated"] || _0xf51981 != 0;
    }
    function _0x36f82a() {
      if (_0xf51981 != 0) _0x2d9738(_0xf51981, _0x22f84c["x"], _0x22f84c["y"], _0x22f84c["z"]);
    }
    var _0x76ccb8 = 0;
    function _0x1a3353(_0x265cd7, _0x2e9350) {
      if (typeof Gyroscope === "undefined") {
        _0x3ab8c3(), _0xf51981 = _0x265cd7;
        return;
      }
      _0xf51981 = _0x265cd7;
      function _0x57163d(_0x2abed0) {
        _0x22f84c = new Gyroscope({frequency: _0x2abed0, referenceFrame: "device"}), _0x22f84c["addEventListener"]("reading", _0x36f82a), _0x22f84c["addEventListener"]("error", function (_0x21fbee) {
          _0x528b37(_0x21fbee["error"] ? _0x21fbee["error"] : _0x21fbee);
        }), _0x22f84c["start"]();
      }
      if (_0x22f84c) _0x22f84c["stop"](), _0x22f84c["removeEventListener"]("reading", _0x36f82a), _0x57163d(_0x2e9350); else _0x76ccb8 != 0 ? _0x76ccb8 = _0x2e9350 : (_0x76ccb8 = _0x2e9350, navigator["permissions"]["query"]({name: "gyroscope"})["then"](function (_0x5364cb) {
        _0x5364cb["state"] === "granted" ? _0x57163d(_0x76ccb8) : _0x528b37("No permission to use Gyroscope."), _0x76ccb8 = 0;
      }));
    }
    function _0x421416() {
      if (_0x22f84c) _0x22f84c["stop"](), _0x22f84c["removeEventListener"]("reading", _0x36f82a), _0x22f84c = null, _0xf51981 = 0; else _0xf51981 != 0 && (_0xf51981 = 0, _0x371713());
    }
    function _0x2b3b91() {
      const _0x4d4c1f = function (_0x1d5628) {
        if (_0x1d5628["target"]["localName"] !== "canvas") _0x1a342e();
      };
      document["addEventListener"]("contextmenu", _0x4d4c1f), _0x4bcfe1["deinitializers"]["push"](function () {
        document["removeEventListener"]("contextmenu", _0x4d4c1f);
      });
    }
    function _0x11a0e4() {
      return _0x19e849 && _0x19e849["activated"] || _0x2401e8 != 0;
    }
    function _0x424d5f(_0x52b380, _0x2b7ab3) {
      var _0x3c3c45 = _0x30a7f6(_0x52b380);
      if (typeof dump == "function") dump(_0x3c3c45);
      switch (_0x2b7ab3) {
        case 0:
        case 1:
        case 4:
          console["error"](_0x3c3c45);
          return;
        case 2:
          console["warn"](_0x3c3c45);
          return;
        case 3:
        case 5:
          console["log"](_0x3c3c45);
          return;
        default:
          console["error"]("Unknown console message type!"), console["error"](_0x3c3c45);
      }
    }
    function _0x1b8ce6(_0xf97e49, _0x50c943) {
      var _0x2b37a1 = _0x1aa9c0();
      if (_0xf97e49) _0x1714da(_0x2b37a1, _0xf97e49, _0x50c943);
      return _0x4d063a(_0x2b37a1);
    }
    var _0x250b8c = null, _0x5d4793 = null, _0x1354c9 = null, _0x590a60 = false;
    function _0x1a24b3() {
      return _0x590a60;
    }
    function _0x264a32() {
      var _0x363a98 = 0, _0x5ecd13 = 1;
      if (!_0x1354c9) return _0x5ecd13;
      return _0x363a98;
    }
    function _0xf5fa31(_0x143f42, _0x4ecfef) {
      var _0x11a803 = _0x1354c9 && _0x1354c9["input"] ? _0x1354c9["input"]["value"] : _0x5d4793 ? _0x5d4793 : "";
      if (_0x143f42) _0x1714da(_0x11a803, _0x143f42, _0x4ecfef);
      return _0x4d063a(_0x11a803);
    }
    function _0x57f0d6(_0xae3bc2, _0x5d7e69) {
      if (!_0x1354c9) {
        _0x46c9cf[_0xae3bc2 >> 2] = 0, _0x46c9cf[_0x5d7e69 >> 2] = 0;
        return;
      }
      _0x46c9cf[_0xae3bc2 >> 2] = _0x1354c9["input"]["selectionStart"], _0x46c9cf[_0x5d7e69 >> 2] = _0x1354c9["input"]["selectionEnd"] - _0x1354c9["input"]["selectionStart"];
    }
    function _0x3dbe95(_0x1eb470) {
      if (_0x250b8c) return;
      _0x590a60 = true;
      function _0x3aab20() {
        _0x1354c9 && _0x1354c9["input"] && (_0x5d4793 = _0x1354c9["input"]["value"], _0x1354c9["input"] = null, _0x1354c9["parentNode"] && _0x1354c9["parentNode"] && _0x1354c9["parentNode"]["removeChild"](_0x1354c9)), _0x1354c9 = null, _0x250b8c = null, setTimeout(function () {
          _0x590a60 = false;
        }, 100);
      }
      if (_0x1eb470) {
        var _0x32aa1c = 200;
        _0x250b8c = setTimeout(_0x3aab20, _0x32aa1c);
      } else _0x3aab20();
    }
    function _0x371b98(_0x48739d) {
      if (!_0x1354c9) return;
      _0x1354c9["input"]["maxLength"] = _0x48739d;
    }
    function _0x3f506f(_0x2c8947) {
      if (!_0x1354c9) return;
      _0x2c8947 = _0x30a7f6(_0x2c8947), _0x1354c9["input"]["value"] = _0x2c8947;
    }
    function _0x39f912(_0x45604e, _0x166557) {
      if (!_0x1354c9) return;
      _0x1354c9["input"]["type"] === "number" ? (_0x1354c9["input"]["type"] = "text", _0x1354c9["input"]["setSelectionRange"](_0x45604e, _0x45604e + _0x166557), _0x1354c9["input"]["type"] = "number") : _0x1354c9["input"]["setSelectionRange"](_0x45604e, _0x45604e + _0x166557);
    }
    function _0x37223b(_0x2c4b2f, _0x2844c2, _0x215b28, _0x559100, _0x4f97f6, _0x5bbda3, _0x1ba249, _0x335c82) {
      _0x250b8c && (clearTimeout(_0x250b8c), _0x250b8c = null);
      _0x2c4b2f = _0x30a7f6(_0x2c4b2f), _0x5d4793 = _0x2c4b2f, _0x1ba249 = _0x30a7f6(_0x1ba249);
      var _0x32d32e = document["body"], _0x59d529 = !!_0x1354c9, _0x4b835c, _0x211220 = 2, _0x4383a2 = 3, _0x22f824 = 4, _0x35d386 = 5, _0x273628 = 7;
      if (!_0x4f97f6) switch (_0x2844c2) {
        case _0x273628:
          _0x4b835c = "email";
          break;
        case _0x4383a2:
          _0x4b835c = "url";
          break;
        case _0x211220:
        case _0x22f824:
        case _0x35d386:
          _0x4b835c = "number";
          break;
        default:
          _0x4b835c = "text";
          break;
      } else _0x4b835c = "password";
      if (_0x59d529) {
        if (_0x1354c9["multiline"] != _0x559100) {
          _0x3dbe95(false);
          return;
        }
      }
      var _0x4e8092 = _0x1354c9 || document["createElement"]("div");
      !_0x59d529 && (_0x4e8092["style"] = "width:100%; position:fixed; bottom:0px; margin:0px; padding:0px; left:0px; border: 1px solid #000; border-radius: 5px; background-color:#fff; font-size:14pt;", _0x32d32e["appendChild"](_0x4e8092), _0x1354c9 = _0x4e8092);
      var _0x2b4192 = _0x59d529 ? _0x1354c9["input"] : document["createElement"](_0x559100 ? "textarea" : "input");
      _0x1354c9["multiline"] = _0x559100, _0x1354c9["secure"] = _0x4f97f6, _0x1354c9["keyboardType"] = _0x2844c2, _0x1354c9["inputType"] = _0x4b835c, _0x2b4192["type"] = _0x4b835c, _0x2b4192["style"] = "width:calc(100% - 85px); " + (_0x559100 ? "height:100px;" : "") + "vertical-align:top; border-radius: 5px; outline:none; cursor:default; resize:none; border:0px; padding:10px 0px 10px 10px;", _0x2b4192["spellcheck"] = _0x215b28 ? true : false, _0x2b4192["maxLength"] = _0x335c82 > 0 ? _0x335c82 : 524288, _0x2b4192["value"] = _0x2c4b2f, _0x2b4192["placeholder"] = _0x1ba249;
      !_0x59d529 && (_0x4e8092["appendChild"](_0x2b4192), _0x4e8092["input"] = _0x2b4192);
      if (!_0x59d529) {
        var _0x12a359 = document["createElement"]("button");
        _0x12a359["innerText"] = "OK", _0x12a359["style"] = "border:0; position:absolute; left:calc(100% - 75px); top:0px; width:75px; height:100%; margin:0; padding:0; border-radius: 5px; background-color:#fff", _0x12a359["addEventListener"]("touchend", function () {
          _0x3dbe95(true);
        }), _0x4e8092["appendChild"](_0x12a359), _0x4e8092["okButton"] = _0x12a359, _0x2b4192["addEventListener"]("keyup", function (_0x40321b) {
          if (_0x2b4192["parentNode"]["multiline"]) return;
          (_0x40321b["code"] == "Enter" || _0x40321b["which"] == 13 || _0x40321b["keyCode"] == 13) && _0x3dbe95(true);
        }), _0x2b4192["addEventListener"]("blur", function (_0x3b64cb) {
          _0x3dbe95(true), _0x3b64cb["stopPropagation"](), _0x3b64cb["preventDefault"]();
        }), _0x2b4192["select"](), _0x2b4192["focus"]();
      } else _0x2b4192["select"]();
    }
    var _0x4e3f7a = null, _0x32c221 = 0;
    function _0x11fd21() {
      return _0x4e3f7a && _0x4e3f7a["activated"] || _0x32c221 != 0;
    }
    function _0x410637() {
      if (_0x32c221 != 0) _0x12c204(_0x32c221, _0x4e3f7a["quaternion"][0], _0x4e3f7a["quaternion"][1], _0x4e3f7a["quaternion"][2], _0x4e3f7a["quaternion"][3]);
    }
    var _0x1954e6 = 0;
    function _0x5543b5(_0x522791) {
      if (_0x32c221) {
        var _0x4540da = Math["PI"] / 180, _0x448424 = _0x522791["beta"] * _0x4540da, _0x492881 = _0x522791["gamma"] * _0x4540da, _0x49ebbb = _0x522791["alpha"] * _0x4540da, _0x58a656 = Math["cos"](_0x448424 / 2), _0x5d76b = Math["sin"](_0x448424 / 2), _0x4a32dd = Math["cos"](_0x492881 / 2), _0x49f718 = Math["sin"](_0x492881 / 2), _0x43746f = Math["cos"](_0x49ebbb / 2), _0x17226c = Math["sin"](_0x49ebbb / 2), _0x3e5f98 = _0x5d76b * _0x4a32dd * _0x43746f - _0x58a656 * _0x49f718 * _0x17226c, _0x448896 = _0x58a656 * _0x49f718 * _0x43746f + _0x5d76b * _0x4a32dd * _0x17226c, _0x520bcc = _0x58a656 * _0x4a32dd * _0x17226c + _0x5d76b * _0x49f718 * _0x43746f, _0x33b7c6 = _0x58a656 * _0x4a32dd * _0x43746f - _0x5d76b * _0x49f718 * _0x17226c;
        _0x12c204(_0x32c221, _0x3e5f98, _0x448896, _0x520bcc, _0x33b7c6);
      }
    }
    function _0x3927ad(_0x3c3682, _0x18db22) {
      if (typeof RelativeOrientationSensor === "undefined") {
        _0x32c221 == 0 && (_0x32c221 = _0x3c3682, _0x5ade90(1), window["addEventListener"]("deviceorientation", _0x5543b5));
        return;
      }
      _0x32c221 = _0x3c3682;
      function _0x2c14d8(_0x20263e) {
        _0x4e3f7a = new RelativeOrientationSensor({frequency: _0x20263e, referenceFrame: "device"}), _0x4e3f7a["addEventListener"]("reading", _0x410637), _0x4e3f7a["addEventListener"]("error", function (_0x1844c2) {
          _0x528b37(_0x1844c2["error"] ? _0x1844c2["error"] : _0x1844c2);
        }), _0x4e3f7a["start"]();
      }
      if (_0x4e3f7a) _0x4e3f7a["stop"](), _0x4e3f7a["removeEventListener"]("reading", _0x410637), _0x2c14d8(_0x18db22); else _0x1954e6 != 0 ? _0x1954e6 = _0x18db22 : (_0x1954e6 = _0x18db22, Promise["all"]([navigator["permissions"]["query"]({name: "accelerometer"}), navigator["permissions"]["query"]({name: "gyroscope"})])["then"](function (_0x1fdc70) {
        _0x1fdc70["every"](function (_0x51d9bf) {
          return _0x51d9bf["state"] === "granted";
        }) ? _0x2c14d8(_0x1954e6) : _0x528b37("No permissions to use RelativeOrientationSensor."), _0x1954e6 = 0;
      }));
    }
    function _0x1fdd0c() {
      if (_0x4e3f7a) _0x4e3f7a["stop"](), _0x4e3f7a["removeEventListener"]("reading", _0x410637), _0x4e3f7a = null; else _0x32c221 != 0 && window["removeEventListener"]("deviceorientation", _0x5543b5);
      _0x32c221 = 0;
    }
    function _0x89cc22() {
      if (_0x8edf4a == 0) return;
      _0x5ade90(_0x8edf4a);
    }
    function _0x1a06a1() {
      _0x4bcfe1["QuitCleanup"]();
    }
    var _0xde8dcf = 0;
    function _0x5c8c52() {
      if (_0xde8dcf) _0x14e1db(_0xde8dcf, window["innerWidth"], window["innerHeight"], screen["orientation"] ? screen["orientation"]["angle"] : window["orientation"]);
    }
    function _0x1a399b() {
      _0xde8dcf = 0, window["removeEventListener"]("resize", _0x5c8c52), screen["orientation"] && screen["orientation"]["removeEventListener"]("change", _0x5c8c52);
    }
    function _0x148353(_0xb7394e) {
      !_0xde8dcf && (screen["orientation"] && screen["orientation"]["addEventListener"]("change", _0x5c8c52), window["addEventListener"]("resize", _0x5c8c52), _0xde8dcf = _0xb7394e, setTimeout(_0x5c8c52, 0));
    }
    var _0x468475 = -1, _0x5f2084 = -1, _0x1720b0 = -1;
    function _0x4b7761(_0x5eb52f) {
      if (!screen["orientation"] || !screen["orientation"]["lock"]) return;
      function _0x454a74() {
        _0x5f2084 = _0x468475;
        var _0x21c95f = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"], _0x1e2070 = _0x21c95f[_0x5f2084];
        screen["orientation"]["lock"](_0x1e2070)["then"](function () {
          _0x468475 != _0x5f2084 ? _0x1720b0 = setTimeout(_0x454a74, 0) : _0x1720b0 = -1;
        })["catch"](function (_0x322f72) {
          _0x528b37(_0x322f72), _0x1720b0 = -1;
        });
      }
      _0x468475 = _0x5eb52f, _0x1720b0 == -1 && _0x5eb52f != _0x5f2084 && (_0x1720b0 = setTimeout(_0x454a74, 0));
    }
    var _0x117e01 = {audioInstanceIdCounter: 0, audioInstances: {}, audioContext: null, audioWebEnabled: 0, audioCache: [], pendingAudioSources: {}, FAKEMOD_SAMPLERATE: 44100};
    function _0x1bd4ef(_0x359cbd) {
      _0x359cbd["estimatePlaybackPosition"] = function () {
        var _0x5d4469 = (_0x117e01["audioContext"]["currentTime"] - _0x359cbd["playbackStartTime"]) * _0x359cbd["playbackRate"]["value"];
        return _0x359cbd["loop"] && _0x5d4469 >= _0x359cbd["loopStart"] && (_0x5d4469 = (_0x5d4469 - _0x359cbd["loopStart"]) % (_0x359cbd["loopEnd"] - _0x359cbd["loopStart"]) + _0x359cbd["loopStart"]), _0x5d4469;
      }, _0x359cbd["setPitch"] = function (_0x125086) {
        var _0x3dd23f = _0x359cbd["estimatePlaybackPosition"]();
        _0x3dd23f >= 0 && (_0x359cbd["playbackStartTime"] = _0x117e01["audioContext"]["currentTime"] - _0x3dd23f / _0x125086);
        if (_0x359cbd["playbackRate"]["value"] !== _0x125086) _0x359cbd["playbackRate"]["value"] = _0x125086;
      };
    }
    function _0x35802f(_0x340e12, _0x3679d4) {
      var _0x4b9556 = {buffer: _0x340e12, error: _0x3679d4};
      return _0x4b9556["release"] = function () {}, _0x4b9556["getLength"] = function () {
        if (!this["buffer"]) return console["log"]("Trying to get length of sound which is not loaded."), 0;
        return this["buffer"]["length"];
      }, _0x4b9556["getData"] = function (_0x134b3d, _0x12e1a0) {
        if (!this["buffer"]) return console["log"]("Trying to get data of sound which is not loaded."), 0;
        var _0x19379b = _0x134b3d >> 2, _0x5c809b = _0x33f22d["subarray"](_0x19379b, _0x19379b + (_0x12e1a0 >> 2)), _0xaa1959 = Math["floor"]((_0x12e1a0 >> 2) / this["buffer"]["numberOfChannels"]), _0x4d21e4 = Math["min"](this["buffer"]["length"], _0xaa1959);
        for (var _0x541be5 = 0; _0x541be5 < this["buffer"]["numberOfChannels"]; _0x541be5++) {
          var _0x45d371 = this["buffer"]["getChannelData"](_0x541be5)["subarray"](0, _0x4d21e4);
          _0x5c809b["set"](_0x45d371, _0x541be5 * _0x4d21e4);
        }
        return _0x4d21e4 * this["buffer"]["numberOfChannels"] * 4;
      }, _0x4b9556["getNumberOfChannels"] = function () {
        if (!this["buffer"]) return console["log"]("Trying to get metadata of sound which is not loaded."), 0;
        return this["buffer"]["numberOfChannels"];
      }, _0x4b9556["getFrequency"] = function () {
        if (!this["buffer"]) return console["log"]("Trying to get metadata of sound which is not loaded."), 0;
        return this["buffer"]["sampleRate"];
      }, _0x4b9556["createSourceNode"] = function () {
        !this["buffer"] && console["log"]("Trying to play sound which is not loaded.");
        var _0x5a84c4 = _0x117e01["audioContext"]["createBufferSource"]();
        return _0x5a84c4["buffer"] = this["buffer"], _0x1bd4ef(_0x5a84c4), _0x5a84c4;
      }, _0x4b9556;
    }
    function _0x570b23(_0x4721c2, _0x31019e) {
      var _0x3ed96a = {callback: _0x4721c2, userData: _0x31019e, source: null, gain: _0x117e01["audioContext"]["createGain"](), panner: _0x117e01["audioContext"]["createPanner"](), spatialBlendDryGain: _0x117e01["audioContext"]["createGain"](), spatialBlendWetGain: _0x117e01["audioContext"]["createGain"](), spatialBlendLevel: 0, loop: false, loopStart: 0, loopEnd: 0, pitch: 1};
      return _0x3ed96a["panner"]["rolloffFactor"] = 0, _0x3ed96a["release"] = function () {
        this["disconnectSource"](), this["gain"]["disconnect"](), this["panner"]["disconnect"]();
      }, _0x3ed96a["playSoundClip"] = function (_0x526c5c, _0x3f55ae, _0x1dac09) {
        try {
          var _0x3f3cfa = this;
          this["source"] = _0x526c5c["createSourceNode"](), this["configurePanningNodes"](), this["setSpatialBlendLevel"](this["spatialBlendLevel"]), this["source"]["onended"] = function () {
            _0x3f3cfa["source"]["isStopped"] = true, _0x3f3cfa["disconnectSource"](), _0x3f3cfa["callback"] && _0xdf0b6c("vi", _0x3f3cfa["callback"], [_0x3f3cfa["userData"]]);
          }, this["source"]["loop"] = this["loop"], this["source"]["loopStart"] = this["loopStart"], this["source"]["loopEnd"] = this["loopEnd"], this["source"]["start"](_0x3f55ae, _0x1dac09), this["source"]["playbackStartTime"] = _0x3f55ae - _0x1dac09 / this["source"]["playbackRate"]["value"], this["source"]["setPitch"](this["pitch"]);
        } catch (_0xa8e232) {
          console["error"]("Channel.playSoundClip error. Exception: " + _0xa8e232);
        }
      }, _0x3ed96a["stop"] = function (_0x5107c9) {
        if (!this["source"]) return;
        try {
          _0x3ed96a["source"]["stop"](_0x117e01["audioContext"]["currentTime"] + _0x5107c9);
        } catch (_0x57563b) {}
        _0x5107c9 == 0 && this["disconnectSource"]();
      }, _0x3ed96a["isPaused"] = function () {
        if (!this["source"]) return true;
        if (this["source"]["isPausedMockNode"]) return true;
        if (this["source"]["mediaElement"]) return this["source"]["mediaElement"]["paused"] || this["source"]["pauseRequested"];
        return false;
      }, _0x3ed96a["pause"] = function () {
        if (!this["source"] || this["source"]["isPausedMockNode"]) return;
        if (this["source"]["mediaElement"]) {
          this["source"]["_pauseMediaElement"]();
          return;
        }
        var _0x2ac1f3 = {isPausedMockNode: true, buffer: this["source"]["buffer"], loop: this["source"]["loop"], loopStart: this["source"]["loopStart"], loopEnd: this["source"]["loopEnd"], playbackRate: this["source"]["playbackRate"]["value"], scheduledStopTime: undefined, playbackPausedAtPosition: this["source"]["estimatePlaybackPosition"](), setPitch: function (_0x56dae4) {
          this["playbackRate"] = _0x56dae4;
        }, stop: function (_0x2d0836) {
          this["scheduledStopTime"] = _0x2d0836;
        }};
        this["stop"](0), this["disconnectSource"](), this["source"] = _0x2ac1f3;
      }, _0x3ed96a["resume"] = function () {
        if (this["source"] && this["source"]["mediaElement"]) {
          this["source"]["start"](undefined, this["source"]["currentTime"]);
          return;
        }
        if (!this["source"] || !this["source"]["isPausedMockNode"]) return;
        var _0x349b6c = this["source"], _0x2940e4 = _0x35802f(_0x349b6c["buffer"], false);
        this["playSoundClip"](_0x2940e4, _0x117e01["audioContext"]["currentTime"], Math["max"](0, _0x349b6c["playbackPausedAtPosition"])), this["source"]["loop"] = _0x349b6c["loop"], this["source"]["loopStart"] = _0x349b6c["loopStart"], this["source"]["loopEnd"] = _0x349b6c["loopEnd"], this["source"]["setPitch"](_0x349b6c["playbackRate"]);
        if (typeof _0x349b6c["scheduledStopTime"] !== "undefined") {
          var _0x3e6635 = Math["max"](_0x349b6c["scheduledStopTime"] - _0x117e01["audioContext"]["currentTime"], 0);
          this["stop"](_0x3e6635);
        }
      }, _0x3ed96a["setLoop"] = function (_0x550b4a) {
        this["loop"] = _0x550b4a;
        if (!this["source"] || this["source"]["loop"] == _0x550b4a) return;
        this["source"]["loop"] = _0x550b4a;
      }, _0x3ed96a["setLoopPoints"] = function (_0x3262b7, _0x56a571) {
        this["loopStart"] = _0x3262b7, this["loopEnd"] = _0x56a571;
        if (!this["source"]) return;
        this["source"]["loopStart"] !== _0x3262b7 && (this["source"]["loopStart"] = _0x3262b7), this["source"]["loopEnd"] !== _0x56a571 && (this["source"]["loopEnd"] = _0x56a571);
      }, _0x3ed96a["set3D"] = function (_0x40e6ed) {
        this["spatialBlendLevel"] != _0x40e6ed && this["setSpatialBlendLevel"](_0x40e6ed);
      }, _0x3ed96a["setPitch"] = function (_0x2d8093) {
        this["pitch"] = _0x2d8093;
        if (!this["source"]) return;
        this["source"]["setPitch"](_0x2d8093);
      }, _0x3ed96a["setVolume"] = function (_0x3d9fd3) {
        if (this["gain"]["gain"]["value"] == _0x3d9fd3) return;
        this["gain"]["gain"]["value"] = _0x3d9fd3;
      }, _0x3ed96a["setPosition"] = function (_0x23e714, _0x3c5d0a, _0x58da02) {
        var _0x28391f = this["panner"];
        if (_0x28391f["positionX"]) {
          if (_0x28391f["positionX"]["value"] !== _0x23e714) _0x28391f["positionX"]["value"] = _0x23e714;
          if (_0x28391f["positionY"]["value"] !== _0x3c5d0a) _0x28391f["positionY"]["value"] = _0x3c5d0a;
          if (_0x28391f["positionZ"]["value"] !== _0x58da02) _0x28391f["positionZ"]["value"] = _0x58da02;
        } else (_0x28391f["_x"] !== _0x23e714 || _0x28391f["_y"] !== _0x3c5d0a || _0x28391f["_z"] !== _0x58da02) && (_0x28391f["setPosition"](_0x23e714, _0x3c5d0a, _0x58da02), _0x28391f["_x"] = _0x23e714, _0x28391f["_y"] = _0x3c5d0a, _0x28391f["_z"] = _0x58da02);
      }, _0x3ed96a["disconnectSource"] = function () {
        if (!this["source"] || this["source"]["isPausedMockNode"]) return;
        this["source"]["mediaElement"] && this["source"]["_pauseMediaElement"](), this["source"]["onended"] = null, this["source"]["disconnect"](), delete this["source"];
      }, _0x3ed96a["setSpatialBlendLevel"] = function (_0x5203ba) {
        var _0x507dc1 = this["source"] && !this["source"]["isPausedMockNode"], _0x4eb7f6 = this["spatialBlendLevel"] > 0 && _0x5203ba == 0 || this["spatialBlendLevel"] == 0 && _0x5203ba > 0, _0x26fa9f = _0x507dc1 && _0x4eb7f6;
        this["spatialBlendWetGain"]["gain"]["value"] = _0x5203ba, this["spatialBlendDryGain"]["gain"]["value"] = 1 - _0x5203ba, this["spatialBlendLevel"] = _0x5203ba;
        if (_0x26fa9f) this["configurePanningNodes"]();
      }, _0x3ed96a["configurePanningNodes"] = function () {
        if (!this["source"]) return;
        this["source"]["disconnect"](), this["spatialBlendDryGain"]["disconnect"](), this["spatialBlendWetGain"]["disconnect"](), this["panner"]["disconnect"](), this["gain"]["disconnect"](), this["spatialBlendLevel"] > 0 ? (this["source"]["connect"](this["spatialBlendDryGain"]), this["spatialBlendDryGain"]["connect"](this["gain"]), this["source"]["connect"](this["spatialBlendWetGain"]), this["spatialBlendWetGain"]["connect"](this["panner"]), this["panner"]["connect"](this["gain"])) : this["source"]["connect"](this["gain"]), this["gain"]["connect"](_0x117e01["audioContext"]["destination"]);
      }, _0x3ed96a["isStopped"] = function () {
        if (!this["source"]) return true;
        if (this["source"]["mediaElement"]) return this["source"]["isStopped"];
        return false;
      }, _0x3ed96a;
    }
    function _0x42a3ee(_0xaa00bd, _0xa2ef17) {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      return _0x117e01["audioInstances"][++_0x117e01["audioInstanceIdCounter"]] = _0x570b23(_0xaa00bd, _0xa2ef17), _0x117e01["audioInstanceIdCounter"];
    }
    function _0x2b37c9(_0x4a9ea9) {
      if (_0x117e01["audioWebEnabled"] == 0) return _0x117e01["FAKEMOD_SAMPLERATE"];
      var _0x1c513e = _0x117e01["audioInstances"][_0x4a9ea9];
      if (!_0x1c513e) return _0x117e01["FAKEMOD_SAMPLERATE"];
      var _0xcdf880 = _0x1c513e["buffer"] ? _0x1c513e["buffer"] : _0x1c513e["source"] ? _0x1c513e["source"]["buffer"] : 0;
      if (!_0xcdf880) return _0x117e01["FAKEMOD_SAMPLERATE"];
      return _0xcdf880["sampleRate"];
    }
    function _0x514991() {
      if (_0x117e01["audioWebEnabled"] == 0) return _0x117e01["FAKEMOD_SAMPLERATE"];
      return _0x117e01["audioContext"]["sampleRate"];
    }
    function _0x3d8ba7(_0x33995e) {
      if (_0x117e01["audioWebEnabled"] == 0) return 0;
      var _0x1e8013 = _0x117e01["audioInstances"][_0x33995e];
      if (!_0x1e8013) return 0;
      return _0x1e8013["getLength"]();
    }
    function _0x1505dd(_0x354970) {
      if (_0x117e01["audioWebEnabled"] == 0) return 2;
      var _0xf00274 = _0x117e01["audioInstances"][_0x354970];
      if (_0xf00274["error"]) return 2;
      if (_0xf00274["buffer"] || _0xf00274["url"]) return 0;
      return 1;
    }
    function _0x3e998f(_0x1e2a6a) {
      var _0x31217f = _0x117e01["pendingAudioSources"][_0x1e2a6a];
      _0x31217f["sourceNode"]["_startPlayback"](_0x31217f["offset"]), delete _0x117e01["pendingAudioSources"][_0x1e2a6a];
    }
    function _0x4f3354() {
      Object["keys"](_0x117e01["pendingAudioSources"])["forEach"](function (_0x5db90a) {
        _0x3e998f(_0x5db90a);
      });
    }
    function _0x34e821() {
      try {
        window["AudioContext"] = window["AudioContext"] || window["webkitAudioContext"], _0x117e01["audioContext"] = new AudioContext;
        var _0x572ac5 = function () {
          if (_0x117e01["audioContext"]["state"] === "suspended") _0x117e01["audioContext"]["resume"]()["catch"](function (_0x5684a1) {
            console["warn"]("Could not resume audio context. Exception: " + _0x5684a1);
          }); else _0x4bcfe1["clearInterval"](_0x2fc539);
        }, _0x2fc539 = _0x4bcfe1["setInterval"](_0x572ac5, 400);
        _0x117e01["audioWebEnabled"] = 1;
        var _0xf793cf = function () {
          try {
            _0x117e01["audioContext"]["state"] !== "running" && _0x117e01["audioContext"]["state"] !== "closed" && _0x117e01["audioContext"]["resume"]()["catch"](function (_0x50e392) {
              console["warn"]("Could not resume audio context. Exception: " + _0x50e392);
            });
            _0x4f3354();
            var _0x55fa29 = 20;
            while (_0x117e01["audioCache"]["length"] < _0x55fa29) {
              var _0x3d6c66 = new Audio;
              _0x3d6c66["autoplay"] = false, _0x117e01["audioCache"]["push"](_0x3d6c66);
            }
          } catch (_0x237af1) {}
        };
        window["addEventListener"]("mousedown", _0xf793cf), window["addEventListener"]("touchstart", _0xf793cf), _0x4bcfe1["deinitializers"]["push"](function () {
          window["removeEventListener"]("mousedown", _0xf793cf), window["removeEventListener"]("touchstart", _0xf793cf);
        });
      } catch (_0x2f005e) {
        alert("Web Audio API is not supported in this browser");
      }
    }
    function _0x235e9f(_0x41baa9) {
      if (_0x117e01["audioWebEnabled"] == 0) return true;
      var _0x1a9510 = _0x117e01["audioInstances"][_0x41baa9];
      if (!_0x1a9510) return true;
      return _0x1a9510["isStopped"]();
    }
    function _0x507de5(_0x1e9c51) {
      var _0x381022 = _0x35802f(null, false);
      return _0x117e01["audioContext"]["decodeAudioData"](_0x1e9c51, function (_0x138b7c) {
        _0x381022["buffer"] = _0x138b7c;
      }, function (_0x742d81) {
        _0x381022["error"] = true, console["log"]("Decode error: " + _0x742d81);
      }), _0x381022;
    }
    function _0x5d58d5(_0x5a91a5, _0x41b443) {
      _0x117e01["pendingAudioSources"][_0x5a91a5["mediaElement"]["src"]] = {sourceNode: _0x5a91a5, offset: _0x41b443};
    }
    function _0x19f45f(_0xbd465d) {
      switch (_0xbd465d) {
        case 13:
          return "audio/mpeg";
        case 20:
          return "audio/wav";
        default:
          return "audio/mp4";
      }
    }
    function _0x3262c9(_0x186df0, _0x348c4b) {
      var _0x26a6f3 = _0x19f45f(_0x348c4b), _0xff67d3 = new Blob([_0x186df0], {type: _0x26a6f3}), _0x225213 = {url: URL["createObjectURL"](_0xff67d3), error: false, mediaElement: new Audio};
      return _0x225213["mediaElement"]["preload"] = "metadata", _0x225213["mediaElement"]["src"] = _0x225213["url"], _0x225213["release"] = function () {
        if (!this["mediaElement"]) return;
        this["mediaElement"]["src"] = "", URL["revokeObjectURL"](this["url"]), delete this["mediaElement"], delete this["url"];
      }, _0x225213["getLength"] = function () {
        return this["mediaElement"]["duration"] * 44100;
      }, _0x225213["getData"] = function (_0x2db3c8, _0x3ace7f) {
        return console["warn"]("getData() is not supported for compressed sound."), 0;
      }, _0x225213["getNumberOfChannels"] = function () {
        return console["warn"]("getNumberOfChannels() is not supported for compressed sound."), 0;
      }, _0x225213["getFrequency"] = function () {
        return console["warn"]("getFrequency() is not supported for compressed sound."), 0;
      }, _0x225213["createSourceNode"] = function () {
        var _0x3fc192 = this, _0x2176cb = _0x117e01["audioCache"]["length"] ? _0x117e01["audioCache"]["pop"]() : new Audio;
        _0x2176cb["preload"] = "metadata", _0x2176cb["src"] = this["url"];
        var _0x29383c = _0x117e01["audioContext"]["createMediaElementSource"](_0x2176cb);
        return Object["defineProperty"](_0x29383c, "loop", {get: function () {
          return _0x29383c["mediaElement"]["loop"];
        }, set: function (_0x1ee9b7) {
          if (_0x29383c["mediaElement"]["loop"] !== _0x1ee9b7) _0x29383c["mediaElement"]["loop"] = _0x1ee9b7;
        }}), _0x29383c["playbackRate"] = {}, Object["defineProperty"](_0x29383c["playbackRate"], "value", {get: function () {
          return _0x29383c["mediaElement"]["playbackRate"];
        }, set: function (_0x410804) {
          if (_0x29383c["mediaElement"]["playbackRate"] !== _0x410804) _0x29383c["mediaElement"]["playbackRate"] = _0x410804;
        }}), Object["defineProperty"](_0x29383c, "currentTime", {get: function () {
          return _0x29383c["mediaElement"]["currentTime"];
        }, set: function (_0x305798) {
          if (_0x29383c["mediaElement"]["currentTime"] !== _0x305798) _0x29383c["mediaElement"]["currentTime"] = _0x305798;
        }}), Object["defineProperty"](_0x29383c, "mute", {get: function () {
          return _0x29383c["mediaElement"]["mute"];
        }, set: function (_0x3095c1) {
          if (_0x29383c["mediaElement"]["mute"] !== _0x3095c1) _0x29383c["mediaElement"]["mute"] = _0x3095c1;
        }}), Object["defineProperty"](_0x29383c, "onended", {get: function () {
          return _0x29383c["mediaElement"]["onended"];
        }, set: function (_0x434c92) {
          _0x29383c["mediaElement"]["onended"] = _0x434c92;
        }}), _0x29383c["playPromise"] = null, _0x29383c["playTimeout"] = null, _0x29383c["pauseRequested"] = false, _0x29383c["isStopped"] = false, _0x29383c["_pauseMediaElement"] = function () {
          _0x29383c["playPromise"] || _0x29383c["playTimeout"] ? _0x29383c["pauseRequested"] = true : _0x29383c["mediaElement"]["pause"]();
        }, _0x29383c["_startPlayback"] = function (_0x2353f4) {
          if (_0x29383c["playPromise"] || _0x29383c["playTimeout"]) {
            _0x29383c["mediaElement"]["currentTime"] = _0x2353f4, _0x29383c["pauseRequested"] = false;
            return;
          }
          _0x29383c["mediaElement"]["currentTime"] = _0x2353f4, _0x29383c["playPromise"] = _0x29383c["mediaElement"]["play"](), _0x29383c["playPromise"] && _0x29383c["playPromise"]["then"](function () {
            _0x29383c["pauseRequested"] && (_0x29383c["mediaElement"]["pause"](), _0x29383c["pauseRequested"] = false), _0x29383c["playPromise"] = null;
          })["catch"](function (_0x5b265f) {
            _0x29383c["playPromise"] = null;
            if (_0x5b265f["name"] !== "NotAllowedError") throw _0x5b265f;
            _0x5d58d5(_0x29383c, _0x2353f4);
          });
        }, _0x29383c["start"] = function (_0x20c252, _0x527eae) {
          typeof _0x20c252 === "undefined" && (_0x20c252 = _0x117e01["audioContext"]["currentTime"]);
          typeof _0x527eae === "undefined" && (_0x527eae = 0);
          var _0x37bea7 = 4, _0x1a1a5c = (_0x20c252 - _0x117e01["audioContext"]["currentTime"]) * 1e3;
          _0x1a1a5c > _0x37bea7 ? _0x29383c["playTimeout"] = setTimeout(function () {
            _0x29383c["playTimeout"] = null, _0x29383c["_startPlayback"](_0x527eae);
          }, _0x1a1a5c) : _0x29383c["_startPlayback"](_0x527eae);
        }, _0x29383c["stop"] = function (_0x54ba21) {
          typeof _0x54ba21 === "undefined" && (_0x54ba21 = _0x117e01["audioContext"]["currentTime"]);
          var _0x52e8ec = 4, _0x1ec136 = (_0x54ba21 - _0x117e01["audioContext"]["currentTime"]) * 1e3;
          _0x1ec136 > _0x52e8ec ? setTimeout(function () {
            _0x29383c["_pauseMediaElement"](), _0x29383c["isStopped"] = true;
          }, _0x1ec136) : (_0x29383c["_pauseMediaElement"](), _0x29383c["isStopped"] = true);
        }, _0x1bd4ef(_0x29383c), _0x29383c;
      }, _0x225213;
    }
    function _0x1c8be5(_0x290b12, _0xf14773, _0x1f8953, _0x38a485) {
      if (_0x117e01["audioWebEnabled"] == 0) return 0;
      var _0x31a929 = _0x18c91b["buffer"]["slice"](_0x290b12, _0x290b12 + _0xf14773);
      if (_0xf14773 < 131072) _0x1f8953 = 1;
      var _0x56eb40;
      return _0x1f8953 ? _0x56eb40 = _0x507de5(_0x31a929) : _0x56eb40 = _0x3262c9(_0x31a929, _0x38a485), _0x117e01["audioInstances"][++_0x117e01["audioInstanceIdCounter"]] = _0x56eb40, _0x117e01["audioInstanceIdCounter"];
    }
    function _0x28c3da(_0x3c96e2, _0x294c8e, _0x3d9df4, _0x552809) {
      var _0x135edd = _0x117e01["audioContext"]["createBuffer"](_0x3c96e2, _0x294c8e, _0x3d9df4);
      for (var _0x24230d = 0; _0x24230d < _0x3c96e2; _0x24230d++) {
        var _0x3ac01a = (_0x552809 >> 2) + _0x294c8e * _0x24230d, _0x5f5503 = _0x135edd["copyToChannel"] || function (_0x3f77e0, _0x5d8ff, _0x44f07d) {
          var _0x4b2dc4 = _0x3f77e0["subarray"](0, Math["min"](_0x3f77e0["length"], this["length"] - (_0x44f07d | 0)));
          this["getChannelData"](_0x5d8ff | 0)["set"](_0x4b2dc4, _0x44f07d | 0);
        };
        _0x5f5503["apply"](_0x135edd, [_0x33f22d["subarray"](_0x3ac01a, _0x3ac01a + _0x294c8e), _0x24230d, 0]);
      }
      return _0x35802f(_0x135edd, false);
    }
    function _0x531901(_0x58b9f7, _0x4cca8b, _0x5205a6, _0x418d44) {
      if (_0x117e01["audioWebEnabled"] == 0) return 0;
      var _0x14dea4 = _0x28c3da(_0x58b9f7, _0x4cca8b, _0x5205a6, _0x418d44);
      return _0x117e01["audioInstances"][++_0x117e01["audioInstanceIdCounter"]] = _0x14dea4, _0x117e01["audioInstanceIdCounter"];
    }
    function _0x5a5996(_0x3f0edc, _0x57600d, _0x11ce81, _0x155093) {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      _0xb13c23(_0x57600d, 0);
      var _0x599f48 = _0x117e01["audioInstances"][_0x3f0edc], _0x32d13e = _0x117e01["audioInstances"][_0x57600d];
      if (!_0x599f48) {
        console["log"]("Trying to play sound which is not loaded.");
        return;
      }
      try {
        _0x32d13e["playSoundClip"](_0x599f48, _0x117e01["audioContext"]["currentTime"] + _0x155093, _0x11ce81);
      } catch (_0x51ccdd) {
        console["error"]("playSoundClip error. Exception: " + e);
      }
    }
    function _0x112f79(_0xc1141f) {
      var _0x156354 = _0x117e01["audioInstances"][_0xc1141f];
      _0x156354 && _0x156354["release"](), delete _0x117e01["audioInstances"][_0xc1141f];
    }
    function _0x1bd363() {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      if (_0x117e01["audioContext"]["state"] === "suspended") _0x117e01["audioContext"]["resume"]()["catch"](function (_0x14dcc2) {
        console["warn"]("Could not resume audio context. Exception: " + _0x14dcc2);
      });
    }
    function _0x36beb4(_0x248ddf, _0x29b673) {
      var _0x1d5172 = _0x117e01["audioInstances"][_0x248ddf];
      _0x1d5172["set3D"](_0x29b673);
    }
    function _0x2be9b2(_0x58af5c, _0x3bba24, _0x1bc80a, _0x47f153, _0x143d52, _0x1ffb4b) {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      _0x58af5c = -_0x58af5c, _0x3bba24 = -_0x3bba24, _0x1bc80a = -_0x1bc80a;
      var _0x3ac536 = _0x117e01["audioContext"]["listener"];
      if (_0x3ac536["forwardX"]) {
        if (_0x3ac536["forwardX"]["value"] !== _0x58af5c) _0x3ac536["forwardX"]["value"] = _0x58af5c;
        if (_0x3ac536["forwardY"]["value"] !== _0x3bba24) _0x3ac536["forwardY"]["value"] = _0x3bba24;
        if (_0x3ac536["forwardZ"]["value"] !== _0x1bc80a) _0x3ac536["forwardZ"]["value"] = _0x1bc80a;
        if (_0x3ac536["upX"]["value"] !== _0x47f153) _0x3ac536["upX"]["value"] = _0x47f153;
        if (_0x3ac536["upY"]["value"] !== _0x143d52) _0x3ac536["upY"]["value"] = _0x143d52;
        if (_0x3ac536["upZ"]["value"] !== _0x1ffb4b) _0x3ac536["upZ"]["value"] = _0x1ffb4b;
      } else (_0x3ac536["_forwardX"] !== _0x58af5c || _0x3ac536["_forwardY"] !== _0x3bba24 || _0x3ac536["_forwardZ"] !== _0x1bc80a || _0x3ac536["_upX"] !== _0x47f153 || _0x3ac536["_upY"] !== _0x143d52 || _0x3ac536["_upZ"] !== _0x1ffb4b) && (_0x3ac536["setOrientation"](_0x58af5c, _0x3bba24, _0x1bc80a, _0x47f153, _0x143d52, _0x1ffb4b), _0x3ac536["_forwardX"] = _0x58af5c, _0x3ac536["_forwardY"] = _0x3bba24, _0x3ac536["_forwardZ"] = _0x1bc80a, _0x3ac536["_upX"] = _0x47f153, _0x3ac536["_upY"] = _0x143d52, _0x3ac536["_upZ"] = _0x1ffb4b);
    }
    function _0x4ceb0c(_0x3671fa, _0x18a237, _0x125686) {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      var _0x487819 = _0x117e01["audioContext"]["listener"];
      if (_0x487819["positionX"]) {
        if (_0x487819["positionX"]["value"] !== _0x3671fa) _0x487819["positionX"]["value"] = _0x3671fa;
        if (_0x487819["positionY"]["value"] !== _0x18a237) _0x487819["positionY"]["value"] = _0x18a237;
        if (_0x487819["positionZ"]["value"] !== _0x125686) _0x487819["positionZ"]["value"] = _0x125686;
      } else (_0x487819["_positionX"] !== _0x3671fa || _0x487819["_positionY"] !== _0x18a237 || _0x487819["_positionZ"] !== _0x125686) && (_0x487819["setPosition"](_0x3671fa, _0x18a237, _0x125686), _0x487819["_positionX"] = _0x3671fa, _0x487819["_positionY"] = _0x18a237, _0x487819["_positionZ"] = _0x125686);
    }
    function _0x81dc53(_0xd22385, _0xb5679d) {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      var _0x40dc86 = _0x117e01["audioInstances"][_0xd22385];
      _0x40dc86["setLoop"](_0xb5679d);
    }
    function _0x4d71f6(_0x2e26e4, _0x1b4af4, _0x155015) {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      var _0x3e33eb = _0x117e01["audioInstances"][_0x2e26e4];
      _0x3e33eb["setLoopPoints"](_0x1b4af4, _0x155015);
    }
    function _0x4fad31(_0x120f6b, _0x5088cf) {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      var _0x242bfd = _0x117e01["audioInstances"][_0x120f6b];
      if (_0x5088cf != _0x242bfd["isPaused"]()) {
        if (_0x5088cf) _0x242bfd["pause"](); else _0x242bfd["resume"]();
      }
    }
    function _0x4e27f9(_0x218071, _0x7724c4) {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      try {
        var _0x571f50 = _0x117e01["audioInstances"][_0x218071];
        _0x571f50["setPitch"](_0x7724c4);
      } catch (_0x525b5e) {
        console["error"]("JS_Sound_SetPitch(channel=" + _0x218071 + ", pitch=" + _0x7724c4 + ") threw an exception: " + _0x525b5e);
      }
    }
    function _0x2b3d54(_0x647008, _0x9f8200, _0x998cee, _0x28b62a) {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      var _0x5ac6f3 = _0x117e01["audioInstances"][_0x647008];
      _0x5ac6f3["setPosition"](_0x9f8200, _0x998cee, _0x28b62a);
    }
    function _0x5e4e52(_0x3ae0c3, _0x3e53e8) {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      try {
        var _0x3f16f7 = _0x117e01["audioInstances"][_0x3ae0c3];
        _0x3f16f7["setVolume"](_0x3e53e8);
      } catch (_0x4c9125) {
        console["error"]("JS_Sound_SetVolume(channel=" + _0x3ae0c3 + ", volume=" + _0x3e53e8 + ") threw an exception: " + _0x4c9125);
      }
    }
    function _0xb13c23(_0x4a7dd0, _0x26d26c) {
      if (_0x117e01["audioWebEnabled"] == 0) return;
      var _0x33f590 = _0x117e01["audioInstances"][_0x4a7dd0];
      _0x33f590["stop"](_0x26d26c);
    }
    function _0x5f4010(_0x16a878, _0x572e5f) {
      var _0x216178 = _0x4bcfe1["SystemInfo"]["browser"];
      if (_0x16a878) _0x1714da(_0x216178, _0x16a878, _0x572e5f);
      return _0x4d063a(_0x216178);
    }
    function _0x1920dc(_0x32522e, _0x471f06) {
      var _0x15790e = _0x4bcfe1["SystemInfo"]["browserVersion"];
      if (_0x32522e) _0x1714da(_0x15790e, _0x32522e, _0x471f06);
      return _0x4d063a(_0x15790e);
    }
    function _0x50a3f6(_0x1d22c6, _0x5b4ab3, _0x55802a) {
      var _0x476791 = _0x30a7f6(_0x1d22c6), _0x4c3779 = _0x476791 == "#canvas" ? _0x4bcfe1["canvas"] : document["querySelector"](_0x476791), _0x196c83 = 0, _0x46e7fe = 0;
      if (_0x4c3779) {
        var _0x12e1bb = _0x4c3779["getBoundingClientRect"]();
        _0x196c83 = _0x12e1bb["width"], _0x46e7fe = _0x12e1bb["height"];
      }
      _0x267920[_0x5b4ab3 >> 3] = _0x196c83, _0x267920[_0x55802a >> 3] = _0x46e7fe;
    }
    function _0x458e9a(_0x3e5519, _0xb7dd66) {
      if (_0x3e5519) _0x1714da(document["URL"], _0x3e5519, _0xb7dd66);
      return _0x4d063a(document["URL"]);
    }
    function _0x35f3ce(_0x155889, _0x59b531) {
      var _0x455bee = _0x4bcfe1["SystemInfo"]["gpu"];
      if (_0x155889) _0x1714da(_0x455bee, _0x155889, _0x59b531);
      return _0x4d063a(_0x455bee);
    }
    function _0x16ad31(_0xcdcc40, _0x462c0a) {
      var _0x51e9cb = _0x4bcfe1["SystemInfo"]["language"];
      if (_0xcdcc40) _0x1714da(_0x51e9cb, _0xcdcc40, _0x462c0a);
      return _0x4d063a(_0x51e9cb);
    }
    function _0x372768() {
      return _0x4bcfe1["matchWebGLToCanvasSize"] || _0x4bcfe1["matchWebGLToCanvasSize"] === undefined;
    }
    function _0x3308f7() {
      return _0x18c91b["length"] / 1048576;
    }
    function _0x31ed06(_0xa642af, _0x34ab9d) {
      var _0x55d486 = _0x4bcfe1["SystemInfo"]["os"] + " " + _0x4bcfe1["SystemInfo"]["osVersion"];
      if (_0xa642af) _0x1714da(_0x55d486, _0xa642af, _0x34ab9d);
      return _0x4d063a(_0x55d486);
    }
    function _0x3869f6() {
      return _0x4bcfe1["matchWebGLToCanvasSize"] == false ? 1 : _0x4bcfe1["devicePixelRatio"] || window["devicePixelRatio"] || 1;
    }
    function _0x4c1803(_0x5a2e90, _0x3833de) {
      _0x267920[_0x5a2e90 >> 3] = _0x4bcfe1["SystemInfo"]["width"], _0x267920[_0x3833de >> 3] = _0x4bcfe1["SystemInfo"]["height"];
    }
    function _0x2e04c0(_0x4fd85f, _0x55f656) {
      if (_0x4fd85f) _0x1714da(_0x4bcfe1["streamingAssetsUrl"], _0x4fd85f, _0x55f656);
      return _0x4d063a(_0x4bcfe1["streamingAssetsUrl"]);
    }
    function _0x520c53() {
      var _0xb2b315 = _0x20ed22["getExtension"]("WEBGL_compressed_texture_astc");
      if (_0xb2b315 && _0xb2b315["getSupportedProfiles"]) return _0xb2b315["getSupportedProfiles"]()["includes"]("hdr");
      return false;
    }
    function _0x1f0824() {
      return _0x4bcfe1["SystemInfo"]["hasCursorLock"];
    }
    function _0x3e7b35() {
      return _0x4bcfe1["SystemInfo"]["hasFullscreen"];
    }
    function _0x7e3fff() {
      return _0x4bcfe1["SystemInfo"]["hasWebGL"];
    }
    function _0x4ea1e5() {
      return !!_0x4bcfe1["shouldQuit"];
    }
    var _0x37bf00 = {requests: {}, responses: {}, abortControllers: {}, timer: {}, nextRequestId: 1};
    function _0x66cfa2(_0x3e77ac) {
      var _0x394dbb = _0x37bf00["abortControllers"][_0x3e77ac];
      if (!_0x394dbb || _0x394dbb["signal"]["aborted"]) return;
      _0x394dbb["abort"]();
    }
    function _0x3ec6c9(_0x5c89d7, _0x8225e1) {
      var _0x5d88f4 = _0x30a7f6(_0x5c89d7), _0xb4f22e = _0x30a7f6(_0x8225e1), _0x588499 = new AbortController, _0x1acf32 = {url: _0x5d88f4, init: {method: _0xb4f22e, signal: _0x588499["signal"], headers: {}, enableStreamingDownload: true}, tempBuffer: null, tempBufferSize: 0};
      return _0x37bf00["abortControllers"][_0x37bf00["nextRequestId"]] = _0x588499, _0x37bf00["requests"][_0x37bf00["nextRequestId"]] = _0x1acf32, _0x37bf00["nextRequestId"]++;
    }
    function _0x390772(_0x3b8a70) {
      var _0x3ccdfb = _0x37bf00["responses"][_0x3b8a70];
      if (!_0x3ccdfb) return "";
      if (_0x3ccdfb["headerString"]) return _0x3ccdfb["headerString"];
      var _0x178907 = "", _0x34bb0f = _0x3ccdfb["headers"]["entries"]();
      for (var _0x5bed15 = _0x34bb0f["next"](); !_0x5bed15["done"]; _0x5bed15 = _0x34bb0f["next"]()) {
        _0x178907 += _0x5bed15["value"][0] + ": " + _0x5bed15["value"][1] + "\r\n";
      }
      return _0x3ccdfb["headerString"] = _0x178907, _0x178907;
    }
    function _0x55f90f(_0x421425, _0x1f7f66, _0x429f38, _0x7d8d49, _0x3521c7) {
      var _0x175c0a = _0x37bf00["responses"][_0x421425];
      if (!_0x175c0a) {
        _0x1714da("", _0x1f7f66, _0x429f38), _0x1714da("", _0x7d8d49, _0x3521c7);
        return;
      }
      if (_0x1f7f66) {
        var _0x37618e = _0x390772(_0x421425);
        _0x1714da(_0x37618e, _0x1f7f66, _0x429f38);
      }
      _0x7d8d49 && _0x1714da(_0x175c0a["url"], _0x7d8d49, _0x3521c7);
    }
    function _0x3e7191(_0x5a5257, _0x64b590) {
      var _0x2ed643 = _0x37bf00["responses"][_0x5a5257];
      if (!_0x2ed643) {
        _0x29f705[_0x64b590 >> 2] = 0, _0x29f705[(_0x64b590 >> 2) + 1] = 0;
        return;
      }
      var _0x458a84 = _0x390772(_0x5a5257);
      _0x29f705[_0x64b590 >> 2] = _0x4d063a(_0x458a84), _0x29f705[(_0x64b590 >> 2) + 1] = _0x4d063a(_0x2ed643["url"]);
    }
    function _0x33b254(_0x19c8d4) {
      _0x37bf00["timer"][_0x19c8d4] && clearTimeout(_0x37bf00["timer"][_0x19c8d4]), delete _0x37bf00["requests"][_0x19c8d4], delete _0x37bf00["responses"][_0x19c8d4], delete _0x37bf00["abortControllers"][_0x19c8d4], delete _0x37bf00["timer"][_0x19c8d4];
    }
    function _0x50d492(_0x1527d6, _0x350520, _0xd246f, _0xa6b0cf, _0x22ef7a, _0x3a7c5e) {
      var _0xa62d08 = _0x37bf00["requests"][_0x1527d6], _0x3a45a0 = _0x37bf00["abortControllers"][_0x1527d6];
      function _0x3bcf46(_0x498c12) {
        if (!_0xa62d08["tempBuffer"]) {
          const _0x184ad7 = Math["max"](_0x498c12, 1024);
          _0xa62d08["tempBuffer"] = _0x1f6602(_0x184ad7), _0xa62d08["tempBufferSize"] = _0x184ad7;
        }
        return _0xa62d08["tempBufferSize"] < _0x498c12 && (_0x14a4bc(_0xa62d08["tempBuffer"]), _0xa62d08["tempBuffer"] = _0x1f6602(_0x498c12), _0xa62d08["tempBufferSize"] = _0x498c12), _0xa62d08["tempBuffer"];
      }
      function _0x2413d6() {
        _0x37bf00["timer"][_0x1527d6] && (clearTimeout(_0x37bf00["timer"][_0x1527d6]), delete _0x37bf00["timer"][_0x1527d6]);
      }
      function _0x20c3ad(_0x5e6230, _0x45e6f3) {
        _0x2413d6();
        if (!_0x22ef7a) return;
        var _0x472d09 = 0;
        if (_0xa62d08["init"]["enableStreamingDownload"]) _0xdf0b6c("viiiiii", _0x22ef7a, [_0xa6b0cf, _0x5e6230["status"], 0, _0x45e6f3["length"], 0, _0x472d09]); else {
          if (_0x45e6f3["length"] != 0) {
            var _0x4fbe30 = _0x1f6602(_0x45e6f3["length"]);
            _0x18c91b["set"](_0x45e6f3, _0x4fbe30), _0xdf0b6c("viiiiii", _0x22ef7a, [_0xa6b0cf, _0x5e6230["status"], _0x4fbe30, _0x45e6f3["length"], 0, _0x472d09]);
          } else _0xdf0b6c("viiiiii", _0x22ef7a, [_0xa6b0cf, _0x5e6230["status"], 0, 0, 0, _0x472d09]);
        }
        _0xa62d08["tempBuffer"] && _0x14a4bc(_0xa62d08["tempBuffer"]);
      }
      function _0xb9fd87(_0x37a2fa, _0x5c135e) {
        _0x2413d6();
        if (!_0x22ef7a) return;
        var _0x3987a9 = _0x4d063a(_0x37a2fa) + 1, _0x57728b = _0x1f6602(_0x3987a9);
        _0x1714da(_0x37a2fa, _0x57728b, _0x3987a9), _0xdf0b6c("viiiiii", _0x22ef7a, [_0xa6b0cf, 500, 0, 0, _0x57728b, _0x5c135e]), _0x14a4bc(_0x57728b), _0xa62d08["tempBuffer"] && _0x14a4bc(_0xa62d08["tempBuffer"]);
      }
      function _0x220132(_0xfe1ecb) {
        if (!_0x3a7c5e || !_0xfe1ecb["lengthComputable"]) return;
        var _0x2556ca = _0xfe1ecb["response"];
        _0x37bf00["responses"][_0x1527d6] = _0x2556ca;
        if (_0xfe1ecb["chunk"]) {
          var _0x11ce41 = _0x3bcf46(_0xfe1ecb["chunk"]["length"]);
          _0x18c91b["set"](_0xfe1ecb["chunk"], _0x11ce41), _0xdf0b6c("viiiiii", _0x3a7c5e, [_0xa6b0cf, _0x2556ca["status"], _0xfe1ecb["loaded"], _0xfe1ecb["total"], _0x11ce41, _0xfe1ecb["chunk"]["length"]]);
        } else _0xdf0b6c("viiiiii", _0x3a7c5e, [_0xa6b0cf, _0x2556ca["status"], _0xfe1ecb["loaded"], _0xfe1ecb["total"], 0, 0]);
      }
      try {
        if (_0xd246f > 0) {
          var _0x608acd = _0x18c91b["subarray"](_0x350520, _0x350520 + _0xd246f);
          _0xa62d08["init"]["body"] = new Blob([_0x608acd]);
        }
        _0xa62d08["timeout"] && (_0x37bf00["timer"][_0x1527d6] = setTimeout(function () {
          _0xa62d08["isTimedOut"] = true, _0x3a45a0["abort"]();
        }, _0xa62d08["timeout"]));
        var _0x562c9a = _0x4bcfe1["fetchWithProgress"];
        _0xa62d08["init"]["onProgress"] = _0x220132, _0x4bcfe1["companyName"] && _0x4bcfe1["productName"] && _0x4bcfe1["cachedFetch"] && (_0x562c9a = _0x4bcfe1["cachedFetch"], _0xa62d08["init"]["companyName"] = _0x4bcfe1["companyName"], _0xa62d08["init"]["productName"] = _0x4bcfe1["productName"], _0xa62d08["init"]["productVersion"] = _0x4bcfe1["productVersion"], _0xa62d08["init"]["control"] = _0x4bcfe1["cacheControl"](_0xa62d08["url"])), _0x562c9a(_0xa62d08["url"], _0xa62d08["init"])["then"](function (_0x56f044) {
          _0x37bf00["responses"][_0x1527d6] = _0x56f044, _0x20c3ad(_0x56f044, _0x56f044["parsedBody"]);
        })["catch"](function (_0x4ec980) {
          var _0x197d5f = 2, _0x22ca01 = 17, _0x4d2c75 = 14;
          if (_0xa62d08["isTimedOut"]) _0xb9fd87("Connection timed out.", _0x4d2c75); else _0x3a45a0["signal"]["aborted"] ? _0xb9fd87("Aborted.", _0x22ca01) : _0xb9fd87(_0x4ec980["message"], _0x197d5f);
        });
      } catch (_0x1c535e) {
        var _0x3b8492 = 2;
        _0xb9fd87(_0x1c535e["message"], _0x3b8492);
      }
    }
    function _0x228e72(_0x308d50, _0x419498) {
      var _0x4b589 = _0x37bf00["requests"][_0x308d50];
      if (!_0x4b589) return;
      _0x4b589["init"]["redirect"] = _0x419498 === 0 ? "error" : "follow";
    }
    function _0x20b372(_0x4d675f, _0x246f64, _0x566a64) {
      var _0x274010 = _0x37bf00["requests"][_0x4d675f];
      if (!_0x274010) return;
      var _0x199007 = _0x30a7f6(_0x246f64), _0xd83dc5 = _0x30a7f6(_0x566a64);
      _0x274010["init"]["headers"][_0x199007] = _0xd83dc5;
    }
    function _0x38114d(_0xa699c2, _0x3ee358) {
      var _0xecb12f = _0x37bf00["requests"][_0xa699c2];
      if (!_0xecb12f) return;
      _0xecb12f["timeout"] = _0x3ee358;
    }
    function _0x5d30ca(_0x365696, _0x4c22e5, _0x260438, _0x585f60) {
      var _0x4a0976 = _0x30a7f6(_0x365696), _0x5aed31 = _0x30a7f6(_0x4c22e5), _0x494a9e = _0x30a7f6(_0x260438), _0x2fefa0 = _0x30a7f6(_0x585f60);
      try {
        firebase["database"]()["ref"](_0x4a0976)["on"]("child_added", function (_0x4d5a20) {
          window["unityInstance"]["SendMessage"](_0x5aed31, _0x494a9e, JSON["stringify"](_0x4d5a20["val"]()));
        });
      } catch (_0x5ed66b) {
        window["unityInstance"]["SendMessage"](_0x5aed31, _0x2fefa0, JSON["stringify"](_0x5ed66b, Object["getOwnPropertyNames"](_0x5ed66b)));
      }
    }
    function _0x3792f0(_0xe6b49a, _0x26f9ed, _0x206c9e, _0x302231) {
      var _0x7fd6fc = _0x30a7f6(_0xe6b49a), _0x1ed882 = _0x30a7f6(_0x26f9ed), _0x1532e8 = _0x30a7f6(_0x206c9e), _0x3362e1 = _0x30a7f6(_0x302231);
      try {
        firebase["database"]()["ref"](_0x7fd6fc)["on"]("child_changed", function (_0x244b17) {
          window["unityInstance"]["SendMessage"](_0x1ed882, _0x1532e8, JSON["stringify"](_0x244b17["val"]()));
        });
      } catch (_0x442919) {
        window["unityInstance"]["SendMessage"](_0x1ed882, _0x3362e1, JSON["stringify"](_0x442919, Object["getOwnPropertyNames"](_0x442919)));
      }
    }
    function _0x501782(_0x351373, _0x229dca, _0xcd316f, _0x4f2d74) {
      var _0x34064b = _0x30a7f6(_0x351373), _0x10cb03 = _0x30a7f6(_0x229dca), _0x7fb1f6 = _0x30a7f6(_0xcd316f), _0x4670af = _0x30a7f6(_0x4f2d74);
      try {
        firebase["database"]()["ref"](_0x34064b)["on"]("child_removed", function (_0x1402d8) {
          window["unityInstance"]["SendMessage"](_0x10cb03, _0x7fb1f6, JSON["stringify"](_0x1402d8["val"]()));
        });
      } catch (_0x10166e) {
        window["unityInstance"]["SendMessage"](_0x10cb03, _0x4670af, JSON["stringify"](_0x10166e, Object["getOwnPropertyNames"](_0x10166e)));
      }
    }
    function _0x514a76(_0x4085d6, _0x41a950, _0x3e99a6, _0xf481de, _0x41502c) {
      var _0x86f14a = _0x30a7f6(_0x4085d6), _0x572b02 = _0x30a7f6(_0x3e99a6), _0x1b433a = _0x30a7f6(_0xf481de), _0x562a7a = _0x30a7f6(_0x41502c);
      try {
        if (typeof firestorelisteners === "undefined") firestorelisteners = {};
        this["firestorelisteners"][_0x86f14a + "/collection/"] = firebase["firestore"]()["collection"](_0x86f14a)["onSnapshot"]({includeMetadataChanges: _0x41a950 == 1}, function (_0x344910) {
          var _0x5a7faf = {};
          _0x344910["forEach"](function (_0x387074) {
            _0x5a7faf[_0x387074["id"]] = _0x387074["data"]();
          }), window["unityInstance"]["SendMessage"](_0x572b02, _0x1b433a, JSON["stringify"](_0x5a7faf));
        }, function (_0x38a69e) {
          window["unityInstance"]["SendMessage"](_0x572b02, _0x562a7a, JSON["stringify"](_0x38a69e, Object["getOwnPropertyNames"](_0x38a69e)));
        });
      } catch (_0x47d53f) {
        window["unityInstance"]["SendMessage"](_0x572b02, _0x562a7a, JSON["stringify"](_0x47d53f, Object["getOwnPropertyNames"](_0x47d53f)));
      }
    }
    function _0x1f1ec0(_0x3b1338, _0x2a5de9, _0x276c8, _0x1ef493, _0x4a6b23, _0x2fa43f) {
      var _0x49fa74 = _0x30a7f6(_0x3b1338), _0x51c118 = _0x30a7f6(_0x2a5de9), _0x1f6db1 = _0x30a7f6(_0x1ef493), _0x3b2d3f = _0x30a7f6(_0x4a6b23), _0x2966ce = _0x30a7f6(_0x2fa43f);
      try {
        if (typeof firestorelisteners === "undefined") firestorelisteners = {};
        this["firestorelisteners"][_0x49fa74 + "/" + _0x51c118] = firebase["firestore"]()["collection"](_0x49fa74)["doc"](_0x51c118)["onSnapshot"]({includeMetadataChanges: _0x276c8 == 1}, function (_0x20f2be) {
          window["unityInstance"]["SendMessage"](_0x1f6db1, _0x3b2d3f, JSON["stringify"](_0x20f2be["data"]()));
        }, function (_0x436ada) {
          window["unityInstance"]["SendMessage"](_0x1f6db1, _0x2966ce, JSON["stringify"](_0x436ada, Object["getOwnPropertyNames"](_0x436ada)));
        });
      } catch (_0x16c465) {
        window["unityInstance"]["SendMessage"](_0x1f6db1, _0x2966ce, JSON["stringify"](_0x16c465, Object["getOwnPropertyNames"](_0x16c465)));
      }
    }
    function _0x4fa2c6(_0x120016, _0x235d59, _0x38cd8e, _0x4f4ba6) {
      var _0x47dc72 = _0x30a7f6(_0x120016), _0x1b40e2 = _0x30a7f6(_0x235d59), _0x537337 = _0x30a7f6(_0x38cd8e), _0x60cde8 = _0x30a7f6(_0x4f4ba6);
      try {
        firebase["database"]()["ref"](_0x47dc72)["on"]("value", function (_0x58dd5c) {
          window["unityInstance"]["SendMessage"](_0x1b40e2, _0x537337, JSON["stringify"](_0x58dd5c["val"]()));
        });
      } catch (_0x1a3131) {
        window["unityInstance"]["SendMessage"](_0x1b40e2, _0x60cde8, JSON["stringify"](_0x1a3131, Object["getOwnPropertyNames"](_0x1a3131)));
      }
    }
    function _0xf4a269(_0x179956) {
      var _0x1b6462 = _0x30a7f6(_0x179956);
      firebaseLogEvent(_0x1b6462);
    }
    function _0x269912(_0x25e2a5, _0x2fffc0) {
      var _0x5b95f5 = _0x30a7f6(_0x25e2a5), _0x571a4c = JSON["parse"](_0x30a7f6(_0x2fffc0));
      firebaseLogEventParameter(_0x5b95f5, _0x571a4c);
    }
    function _0x250563(_0x198021, _0xe5bb4c, _0x562b7f, _0x4c53e0, _0x4fe1df) {
      var _0x16712a = _0x30a7f6(_0x198021), _0x4ac632 = _0x30a7f6(_0x562b7f), _0x210f74 = _0x30a7f6(_0x4c53e0), _0x45d40c = _0x30a7f6(_0x4fe1df);
      try {
        firebase["database"]()["ref"](_0x16712a)["transaction"](function (_0x478095) {
          return !isNaN(_0x478095) ? _0x478095 + _0xe5bb4c : _0xe5bb4c;
        })["then"](function (_0x52cd94) {
          window["unityInstance"]["SendMessage"](_0x4ac632, _0x210f74, "Success: transaction run in " + _0x16712a);
        });
      } catch (_0x1e21a7) {
        window["unityInstance"]["SendMessage"](_0x4ac632, _0x45d40c, JSON["stringify"](_0x1e21a7, Object["getOwnPropertyNames"](_0x1e21a7)));
      }
    }
    function _0x5b4042(_0x2ca143, _0x37e75b, _0x653317) {
      var _0x3dc549 = _0x30a7f6(_0x2ca143), _0x95d5df = _0x30a7f6(_0x37e75b), _0x2744e6 = _0x30a7f6(_0x653317);
      firebase["auth"]()["onAuthStateChanged"](function (_0x2f6da0) {
        _0x2f6da0 ? window["unityInstance"]["SendMessage"](_0x3dc549, _0x95d5df, JSON["stringify"](_0x2f6da0)) : window["unityInstance"]["SendMessage"](_0x3dc549, _0x2744e6, "User signed out");
      });
    }
    function _0xb3ef3c(_0x1b3e13) {
      window["wgUnityInstance"] = _0x4bcfe1;
      try {
        window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: WeeGoo InGame Ad, pinging."), window[preroll["config"]["loaderObjectName"]]["ping"](_0x1b3e13);
      } catch (_0x56dba0) {
        console["log"]("WGSDK: No production WGSDK resources found, loading development resources.");
        var _0x5c6654 = document["createElement"]("script");
        _0x5c6654["addEventListener"]("load", function (_0x13cac6) {
          var _0x184f86 = document["createElement"]("script");
          _0x184f86["addEventListener"]("load", function (_0x326694) {
            console["log"]("WGSDK: Development resources loaded."), _0x5c0c4b(_0x1b3e13, true);
          }["bind"](this)), document["getElementsByTagName"]("head")[0]["appendChild"](_0x184f86), _0x184f86["src"] = window["GMSOFT_ADS_INFO"]["wgLibrary"];
        }["bind"](this)), document["getElementsByTagName"]("head")[0]["appendChild"](_0x5c6654), _0x5c6654["src"] = window["GMSOFT_ADS_INFO"]["wgConf"];
      }
    }
    function _0x5c0c4b(_0x2aea7b, _0x226662) {
      var _0x3bf0e2;
      _0x226662 === true ? _0x3bf0e2 = _0x2aea7b : _0x3bf0e2 = _0x30a7f6(_0x2aea7b), setTimeout(function () {
        _0xb3ef3c(_0x3bf0e2);
      }, 250);
    }
    function _0x59a54f(_0x2949aa, _0x3ab714, _0x5caf73, _0x3910c7, _0x16cb65) {
      var _0x531c0d = _0x30a7f6(_0x2949aa), _0x11ff1f = _0x30a7f6(_0x3ab714), _0x4cae8f = _0x30a7f6(_0x5caf73), _0x592f46 = _0x30a7f6(_0x3910c7), _0x5de142 = _0x30a7f6(_0x16cb65);
      try {
        firebase["database"]()["ref"](_0x531c0d)["set"](JSON["parse"](_0x11ff1f))["then"](function (_0x31e517) {
          window["unityInstance"]["SendMessage"](_0x4cae8f, _0x592f46, "Success: " + _0x11ff1f + " was posted to " + _0x531c0d);
        });
      } catch (_0x146c45) {
        window["unityInstance"]["SendMessage"](_0x4cae8f, _0x5de142, JSON["stringify"](_0x146c45, Object["getOwnPropertyNames"](_0x146c45)));
      }
    }
    function _0x14bab7(_0x53dbbb, _0x22027c, _0x4f21a9, _0x33baa7, _0x1dd47d) {
      var _0x42ccb2 = _0x30a7f6(_0x53dbbb), _0x587aca = _0x30a7f6(_0x22027c), _0x16594e = _0x30a7f6(_0x4f21a9), _0x19a9fb = _0x30a7f6(_0x33baa7), _0x1e5bfc = _0x30a7f6(_0x1dd47d);
      try {
        firebase["database"]()["ref"](_0x42ccb2)["push"]()["set"](JSON["parse"](_0x587aca))["then"](function (_0x4bdd09) {
          window["unityInstance"]["SendMessage"](_0x16594e, _0x19a9fb, "Success: " + _0x587aca + " was pushed to " + _0x42ccb2);
        });
      } catch (_0x393671) {
        window["unityInstance"]["SendMessage"](_0x16594e, _0x1e5bfc, JSON["stringify"](_0x393671, Object["getOwnPropertyNames"](_0x393671)));
      }
    }
    function _0x134e10(_0x48fd2a, _0x2ededb) {
      var _0x365b63 = true, _0x192293 = _0x46897a(_0x48fd2a), _0x183576 = _0x46897a(_0x2ededb), _0x3cc46c = _0x192293["split"]("|");
      for (var _0x2d806f = 0; _0x2d806f < _0x3cc46c["length"]; _0x2d806f++) {
        var _0x1ba215 = _0x3cc46c[_0x2d806f];
        document["location"]["host"] == _0x1ba215 && (_0x365b63 = false);
      }
      if (_0x365b63) return document["location"] = _0x183576, true;
      return false;
    }
    function _0xb0673a() {
      try {
        window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: Refetching reward ad."), window[preroll["config"]["loaderObjectName"]]["rewarded"]["initSlot"]["call"](window[preroll["config"]["loaderObjectName"]]);
      } catch (_0x134565) {
        console["log"]("No WeeGooAFG implementation found!");
      }
    }
    function _0x7ff2fc() {
      try {
        window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: Game controls registered."), window[window["preroll"]["config"]["loaderObjectName"]]["registerGameControls"](_0x4bcfe1);
      } catch (_0x20a5ac) {
        console["log"]("WGSDK: Can not register game controls."), setTimeout(function () {
          _0x7ff2fc();
        }, 250);
      }
    }
    function _0x38c99c() {
      try {
        window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: Reward callbacks registered."), window[window["preroll"]["config"]["loaderObjectName"]]["registerRewardCallbacks"]({onReady: "OnReadyMethod", onSuccess: "OnSuccessMethod", onFail: "OnFailMethod"});
      } catch (_0x432748) {
        console["log"]("WGSDK: Can not register reward ad callbacks."), _0x291595();
      }
    }
    function _0x291595() {
      setTimeout(function () {
        _0x38c99c();
      }, 250);
    }
    function _0x45d8ca(_0x5d2e79, _0x22db22, _0x1eace3, _0x69e4a8, _0x3480c7, _0x130261, _0x22bc64) {
      var _0x13d00e = _0x30a7f6(_0x5d2e79), _0xd1edc8 = _0x30a7f6(_0x22db22), _0x2a9115 = _0x30a7f6(_0x1eace3), _0x32a1f8 = _0x30a7f6(_0x69e4a8), _0x2e5abc = _0x30a7f6(_0x3480c7), _0x426e44 = _0x30a7f6(_0x130261), _0xd1c932 = _0x30a7f6(_0x22bc64);
      try {
        var _0x69e4a8 = {};
        _0x69e4a8[_0x2a9115] = firebase["firestore"]["FieldValue"]["arrayRemove"](JSON["parse"](_0x32a1f8)), firebase["firestore"]()["collection"](_0x13d00e)["doc"](_0xd1edc8)["update"](_0x69e4a8)["then"](function () {
          window["unityInstance"]["SendMessage"](_0x2e5abc, _0x426e44, "Success: element " + _0x32a1f8 + " was removed in " + _0x2a9115);
        })["catch"](function (_0xa9efbe) {
          window["unityInstance"]["SendMessage"](_0x2e5abc, _0xd1c932, JSON["stringify"](_0xa9efbe, Object["getOwnPropertyNames"](_0xa9efbe)));
        });
      } catch (_0x70125b) {
        window["unityInstance"]["SendMessage"](_0x2e5abc, _0xd1c932, JSON["stringify"](_0x70125b, Object["getOwnPropertyNames"](_0x70125b)));
      }
    }
    function _0x5451a7(_0x4afe29) {
      var _0x167913 = window["unityStringify"](_0x4afe29), _0x23977c = {adStarted: function () {
        window["UnitySDK"]["unlockPointer"](), _0x2fae3e("CrazySDKSingleton", "JSLibCallback_AdStarted");
      }, adFinished: function () {
        window["UnitySDK"]["lockPointer"](), _0x2fae3e("CrazySDKSingleton", "JSLibCallback_AdFinished");
      }, adError: function (_0xda9d9f) {
        _0x2fae3e("CrazySDKSingleton", "JSLibCallback_AdError", JSON["stringify"](_0xda9d9f));
      }};
      window["CrazyGames"]["SDK"]["ad"]["requestAd"](_0x167913, _0x23977c)["catch"](function (_0x1f3507) {
        window["UnitySDK"]["logError"]("Error while requesting ad:", _0x1f3507), _0x2fae3e("CrazySDKSingleton", "JSLibCallback_AdError", JSON["stringify"]({code: "unknown", message: _0x1f3507["message"] || "Unknown error"}));
      });
    }
    function _0x861d21(_0x25c4c3) {
      var _0xc5982b = JSON["parse"](window["unityStringify"](_0x25c4c3));
      try {
        window["CrazyGames"]["SDK"]["banner"]["requestOverlayBanners"](_0xc5982b, function (_0x46cac2, _0x501667, _0x5d49b2) {});
      } catch (_0x77ed83) {
        window["UnitySDK"]["logError"]("Error while requesting banners:", _0x77ed83);
      }
    }
    function _0x7ef627(_0x250b89) {
      var _0x38bec6 = JSON["parse"](window["unityStringify"](_0x250b89)), _0x2dd12e = "";
      try {
        _0x2dd12e = window["CrazyGames"]["SDK"]["game"]["inviteLink"](_0x38bec6);
      } catch (_0x33d248) {
        window["UnitySDK"]["logError"]("Error while requesting invite url:", _0x33d248);
      }
      var _0x2ea30e = _0x4d063a(_0x2dd12e) + 1, _0x149e78 = _0x1f6602(_0x2ea30e);
      return _0x1714da(_0x2dd12e, _0x149e78, _0x2ea30e), _0x149e78;
    }
    function _0x2125e3(_0xa0e64a) {
      _0xa0e64a = _0x30a7f6(_0xa0e64a), window["GD_OPTIONS"] = {debug: false, gameId: _0xa0e64a, onEvent: function (_0x252d77) {
        switch (_0x252d77["name"]) {
          case "SDK_GAME_START":
            _0x2fae3e("GameDistribution", "ResumeGameCallback");
            break;
          case "SDK_GAME_PAUSE":
            _0x2fae3e("GameDistribution", "PauseGameCallback");
            break;
          case "SDK_REWARDED_WATCH_COMPLETE":
            _0x2fae3e("GameDistribution", "RewardedCompleteCallback");
            break;
          case "SDK_ERROR":
            break;
          default:
            _0x2fae3e("GameDistribution", "EventCallback", _0x252d77["name"]);
        }
      }}, function (_0x411b8f, _0x38ae3c, _0xff0d89) {
        var _0x13aa2a, _0x568f6a = _0x411b8f["getElementsByTagName"](_0x38ae3c)[0];
        if (_0x411b8f["getElementById"](_0xff0d89)) return;
        _0x13aa2a = _0x411b8f["createElement"](_0x38ae3c), _0x13aa2a["id"] = _0xff0d89, _0x13aa2a["src"] = "//html5.api.gamedistribution.com/main.min.js", _0x568f6a["parentNode"]["insertBefore"](_0x13aa2a, _0x568f6a);
      }(document, "script", "gamedistribution-jssdk");
    }
    function _0x476239() {
      typeof gdsdk !== "undefined" && typeof gdsdk["preloadAd"] !== "undefined" && gdsdk["preloadAd"](gdsdk["AdType"]["Rewarded"])["then"](function (_0x19c687) {
        _0x2fae3e("GameDistribution", "PreloadRewardedVideoCallback", 1);
      })["catch"](function (_0x5613c2) {
        _0x2fae3e("GameDistribution", "PreloadRewardedVideoCallback", 0);
      });
    }
    function _0x267a99(_0x11fd8e) {
      _0x11fd8e = _0x30a7f6(_0x11fd8e), typeof gdsdk !== "undefined" && typeof gdsdk["sendEvent"] !== "undefined" && typeof _0x11fd8e !== "undefined" && gdsdk["sendEvent"](_0x11fd8e)["then"](function (_0x21b1f6) {
        console["log"]("Game event post message sent Succesfully...");
      })["catch"](function (_0x29776c) {
        console["log"](_0x29776c["message"]);
      });
    }
    function _0x4d4aa5(_0x68cc19) {
      typeof gdsdk !== "undefined" && typeof gdsdk["showAd"] !== "undefined" && (_0x68cc19 = _0x30a7f6(_0x68cc19) || gdsdk["AdType"]["Interstitial"], gdsdk["showAd"](_0x68cc19)["then"](function (_0xb5b8fb) {
        _0x68cc19 === gdsdk["AdType"]["Rewarded"] && _0x2fae3e("GameDistribution", "RewardedVideoSuccessCallback");
      })["catch"](function (_0x9c9df4) {
        _0x68cc19 === gdsdk["AdType"]["Rewarded"] && _0x2fae3e("GameDistribution", "RewardedVideoFailureCallback");
      }));
    }
    function _0x5de778(_0x328a3c, _0x13ae49, _0x217382, _0x2ff63b, _0x55784d, _0x37f5a9) {
      var _0x42af48 = _0x30a7f6(_0x328a3c), _0x1d9534 = _0x30a7f6(_0x13ae49), _0x53eef8 = _0x30a7f6(_0x217382), _0x9d7e7c = _0x30a7f6(_0x2ff63b), _0x2f4ffe = _0x30a7f6(_0x55784d), _0x1de6d9 = _0x30a7f6(_0x37f5a9);
      try {
        firebase["firestore"]()["collection"](_0x42af48)["doc"](_0x1d9534)["set"](JSON["parse"](_0x53eef8))["then"](function () {
          window["unityInstance"]["SendMessage"](_0x9d7e7c, _0x2f4ffe, "Success: document " + _0x1d9534 + " was set");
        })["catch"](function (_0x25e92e) {
          window["unityInstance"]["SendMessage"](_0x9d7e7c, _0x1de6d9, JSON["stringify"](_0x25e92e, Object["getOwnPropertyNames"](_0x25e92e)));
        });
      } catch (_0xd802f3) {
        window["unityInstance"]["SendMessage"](_0x9d7e7c, _0x1de6d9, JSON["stringify"](_0xd802f3, Object["getOwnPropertyNames"](_0xd802f3)));
      }
    }
    function _0x20c304(_0x19df46) {
      var _0xafafcd = JSON["parse"](_0x30a7f6(_0x19df46));
      firebaseSetUserProperties(_0xafafcd);
    }
    function _0x2213b1() {
      window["CrazyGames"]["SDK"]["user"]["showAccountLinkPrompt"]()["then"](function (_0x2689b4) {
        _0x2fae3e("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON["stringify"]({linkAccountResponseStr: JSON["stringify"](_0x2689b4)}));
      })["catch"](function (_0x4a585d) {
        _0x2fae3e("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON["stringify"]({errorJson: JSON["stringify"](_0x4a585d)}));
      });
    }
    function _0x1ca6be() {
      window["CrazyGames"]["SDK"]["user"]["showAuthPrompt"]()["then"](function (_0x361ea2) {
        _0x2fae3e("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON["stringify"]({userJson: JSON["stringify"](_0x361ea2)}));
      })["catch"](function (_0x350d66) {
        _0x2fae3e("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON["stringify"]({errorJson: JSON["stringify"](_0x350d66)}));
      });
    }
    function _0x60a3a3(_0x12a458) {
      var _0x52452b = JSON["parse"](window["unityStringify"](_0x12a458)), _0x2fc334 = "";
      try {
        _0x2fc334 = window["CrazyGames"]["SDK"]["game"]["showInviteButton"](_0x52452b);
      } catch (_0x420475) {
        window["UnitySDK"]["logError"]("Error while showing invite button:", _0x420475);
      }
      var _0x497195 = _0x4d063a(_0x2fc334) + 1, _0x485746 = _0x1f6602(_0x497195);
      return _0x1714da(_0x2fc334, _0x485746, _0x497195), _0x485746;
    }
    function _0x362b55() {
      window[preroll["config"]["loaderObjectName"]]["showRewardAd"]();
    }
    function _0x47bd03(_0x5c150d, _0x1b7355, _0x17de1c) {
      var _0x2e68af = _0x30a7f6(_0x5c150d), _0x4fd2f0 = _0x30a7f6(_0x1b7355), _0xc6805 = _0x30a7f6(_0x17de1c);
      try {
        firebase["auth"]()["signInAnonymously"]()["then"](function (_0xb504c6) {
          window["unityInstance"]["SendMessage"](_0x2e68af, _0x4fd2f0, "Success: signed up for " + _0xb504c6);
        })["catch"](function (_0x5eda26) {
          window["unityInstance"]["SendMessage"](_0x2e68af, _0xc6805, JSON["stringify"](_0x5eda26, Object["getOwnPropertyNames"](_0x5eda26)));
        });
      } catch (_0x15af17) {
        window["unityInstance"]["SendMessage"](_0x2e68af, _0xc6805, JSON["stringify"](_0x15af17, Object["getOwnPropertyNames"](_0x15af17)));
      }
    }
    function _0x2983aa(_0x13e48d, _0x11dd57, _0x2675d0, _0x5b4e73, _0x49648d) {
      var _0x2f0bb6 = _0x30a7f6(_0x13e48d), _0x38d58f = _0x30a7f6(_0x11dd57), _0x4841c1 = _0x30a7f6(_0x2675d0), _0x523d82 = _0x30a7f6(_0x5b4e73), _0x109552 = _0x30a7f6(_0x49648d);
      try {
        firebase["auth"]()["signInWithEmailAndPassword"](_0x2f0bb6, _0x38d58f)["then"](function (_0x211656) {
          window["unityInstance"]["SendMessage"](_0x4841c1, _0x523d82, "Success: signed in for " + _0x2f0bb6);
        })["catch"](function (_0x4e4958) {
          window["unityInstance"]["SendMessage"](_0x4841c1, _0x109552, JSON["stringify"](_0x4e4958, Object["getOwnPropertyNames"](_0x4e4958)));
        });
      } catch (_0x354550) {
        window["unityInstance"]["SendMessage"](_0x4841c1, _0x109552, JSON["stringify"](_0x354550, Object["getOwnPropertyNames"](_0x354550)));
      }
    }
    function _0x5c3ea1(_0x48be0b, _0x9c60c8, _0x1901ad) {
      var _0x3c8805 = _0x30a7f6(_0x48be0b), _0x47b689 = _0x30a7f6(_0x9c60c8), _0x1827cb = _0x30a7f6(_0x1901ad);
      try {
        var _0x3f1741 = new firebase["auth"]["FacebookAuthProvider"];
        firebase["auth"]()["signInWithRedirect"](_0x3f1741)["then"](function (_0x1b9f1b) {
          window["unityInstance"]["SendMessage"](_0x3c8805, _0x47b689, "Success: signed in with Facebook!");
        })["catch"](function (_0xfafb5f) {
          window["unityInstance"]["SendMessage"](_0x3c8805, _0x1827cb, JSON["stringify"](_0xfafb5f, Object["getOwnPropertyNames"](_0xfafb5f)));
        });
      } catch (_0x24a800) {
        window["unityInstance"]["SendMessage"](_0x3c8805, _0x1827cb, JSON["stringify"](_0x24a800, Object["getOwnPropertyNames"](_0x24a800)));
      }
    }
    function _0x1dd1da(_0x28dfd9, _0x471bbd, _0x503a1e) {
      var _0x1b7b74 = _0x30a7f6(_0x28dfd9), _0x15a6f3 = _0x30a7f6(_0x471bbd), _0x582dc3 = _0x30a7f6(_0x503a1e);
      try {
        var _0x51bd99 = new firebase["auth"]["GoogleAuthProvider"];
        firebase["auth"]()["signInWithRedirect"](_0x51bd99)["then"](function (_0x5e6005) {
          window["unityInstance"]["SendMessage"](_0x1b7b74, _0x15a6f3, "Success: signed in with Google!");
        })["catch"](function (_0x4bcd68) {
          window["unityInstance"]["SendMessage"](_0x1b7b74, _0x582dc3, JSON["stringify"](_0x4bcd68, Object["getOwnPropertyNames"](_0x4bcd68)));
        });
      } catch (_0x391fdb) {
        window["unityInstance"]["SendMessage"](_0x1b7b74, _0x582dc3, JSON["stringify"](_0x391fdb, Object["getOwnPropertyNames"](_0x391fdb)));
      }
    }
    function _0x1e6210(_0x2df361, _0x2e9baa, _0x7e5927, _0x24f174) {
      var _0xda0e36 = _0x30a7f6(_0x2df361), _0x1688df = _0x30a7f6(_0x2e9baa), _0x2cdcd6 = _0x30a7f6(_0x7e5927), _0x111958 = _0x30a7f6(_0x24f174);
      try {
        firebase["database"]()["ref"](_0xda0e36)["off"]("child_added"), window["unityInstance"]["SendMessage"](_0x1688df, _0x2cdcd6, "Success: listener removed");
      } catch (_0x54d2d6) {
        window["unityInstance"]["SendMessage"](_0x1688df, _0x111958, JSON["stringify"](_0x54d2d6, Object["getOwnPropertyNames"](_0x54d2d6)));
      }
    }
    function _0x5606fc(_0x2bf5a3, _0x9be6d9, _0x5b3585, _0x81f457) {
      var _0xd70a07 = _0x30a7f6(_0x2bf5a3), _0x4d6366 = _0x30a7f6(_0x9be6d9), _0x8b709b = _0x30a7f6(_0x5b3585), _0x3521c8 = _0x30a7f6(_0x81f457);
      try {
        firebase["database"]()["ref"](_0xd70a07)["off"]("child_changed"), window["unityInstance"]["SendMessage"](_0x4d6366, _0x8b709b, "Success: listener removed");
      } catch (_0x4aeb8f) {
        window["unityInstance"]["SendMessage"](_0x4d6366, _0x3521c8, JSON["stringify"](_0x4aeb8f, Object["getOwnPropertyNames"](_0x4aeb8f)));
      }
    }
    function _0x19906b(_0x102f6b, _0x21c0f4, _0x230803, _0x40f7a8) {
      var _0x452d72 = _0x30a7f6(_0x102f6b), _0x24a10c = _0x30a7f6(_0x21c0f4), _0x451958 = _0x30a7f6(_0x230803), _0x484392 = _0x30a7f6(_0x40f7a8);
      try {
        firebase["database"]()["ref"](_0x452d72)["off"]("child_removed"), window["unityInstance"]["SendMessage"](_0x24a10c, _0x451958, "Success: listener removed");
      } catch (_0x479f2a) {
        window["unityInstance"]["SendMessage"](_0x24a10c, _0x484392, JSON["stringify"](_0x479f2a, Object["getOwnPropertyNames"](_0x479f2a)));
      }
    }
    function _0x2f3020(_0x37d1c7, _0x519473, _0x36e32a, _0xb379) {
      var _0x4c17f7 = _0x30a7f6(_0x37d1c7), _0x4ddf55 = _0x30a7f6(_0x519473), _0x4039a0 = _0x30a7f6(_0x36e32a), _0x1cf048 = _0x30a7f6(_0xb379);
      try {
        if (typeof firestorelisteners === "undefined") firestorelisteners = {};
        this["firestorelisteners"][_0x4c17f7 + "/collection/"](), window["unityInstance"]["SendMessage"](_0x4ddf55, _0x4039a0, "Success: listener was removed");
      } catch (_0x5ead12) {
        window["unityInstance"]["SendMessage"](_0x4ddf55, _0x1cf048, JSON["stringify"](_0x5ead12, Object["getOwnPropertyNames"](_0x5ead12)));
      }
    }
    function _0x3f3cb5(_0x1b1cb2, _0xd53f22, _0x4ea836, _0x512f10, _0x2c1078) {
      var _0x550545 = _0x30a7f6(_0x1b1cb2), _0xe45985 = _0x30a7f6(_0xd53f22), _0x2a0d52 = _0x30a7f6(_0x4ea836), _0x1aae61 = _0x30a7f6(_0x512f10), _0x44efcb = _0x30a7f6(_0x2c1078);
      try {
        if (typeof firestorelisteners === "undefined") firestorelisteners = {};
        this["firestorelisteners"][_0x550545 + "/" + _0xe45985](), window["unityInstance"]["SendMessage"](_0x2a0d52, _0x1aae61, "Success: listener was removed");
      } catch (_0x2e9361) {
        window["unityInstance"]["SendMessage"](_0x2a0d52, _0x44efcb, JSON["stringify"](_0x2e9361, Object["getOwnPropertyNames"](_0x2e9361)));
      }
    }
    function _0x339465(_0x2912ab, _0x538c11, _0x4d835d, _0x243e4f) {
      var _0x25357a = _0x30a7f6(_0x2912ab), _0x7f084 = _0x30a7f6(_0x538c11), _0x5a0b29 = _0x30a7f6(_0x4d835d), _0x12dc7f = _0x30a7f6(_0x243e4f);
      try {
        firebase["database"]()["ref"](_0x25357a)["off"]("value"), window["unityInstance"]["SendMessage"](_0x7f084, _0x5a0b29, "Success: listener removed");
      } catch (_0x39804b) {
        window["unityInstance"]["SendMessage"](_0x7f084, _0x12dc7f, JSON["stringify"](_0x39804b, Object["getOwnPropertyNames"](_0x39804b)));
      }
    }
    function _0x5f3eb9() {
      try {
        window["CrazyGames"]["SDK"]["data"]["syncUnityGameData"]();
      } catch (_0x5c83bc) {
        window["UnitySDK"]["logError"]("Error while calling syncUnityGameData:", _0x5c83bc);
      }
    }
    function _0x3041ab(_0x2ec06c, _0x33dea1, _0x57c06e, _0x2fcfc2) {
      var _0x5bdcfe = _0x30a7f6(_0x2ec06c), _0x400162 = _0x30a7f6(_0x33dea1), _0x5e1142 = _0x30a7f6(_0x57c06e), _0x5bed43 = _0x30a7f6(_0x2fcfc2);
      try {
        firebase["database"]()["ref"](_0x5bdcfe)["transaction"](function (_0x5c9ad5) {
          return typeof _0x5c9ad5 === "boolean" ? !_0x5c9ad5 : true;
        })["then"](function (_0x3a75dc) {
          window["unityInstance"]["SendMessage"](_0x400162, _0x5e1142, "Success: transaction run in " + _0x5bdcfe);
        });
      } catch (_0x3698d1) {
        window["unityInstance"]["SendMessage"](_0x400162, _0x5bed43, JSON["stringify"](_0x3698d1, Object["getOwnPropertyNames"](_0x3698d1)));
      }
    }
    function _0x483867() {
      window["mouseConfined"] = false;
    }
    function _0x3f8b9d(_0x586439, _0xd04f65, _0xbc8039, _0x22f663, _0x5178ea, _0x4821b6) {
      var _0x1a91c3 = _0x30a7f6(_0x586439), _0x43b4f2 = _0x30a7f6(_0xd04f65), _0x10de6 = _0x30a7f6(_0xbc8039), _0x148197 = _0x30a7f6(_0x22f663), _0x8f1b92 = _0x30a7f6(_0x5178ea), _0x2f2d49 = _0x30a7f6(_0x4821b6);
      try {
        firebase["firestore"]()["collection"](_0x1a91c3)["doc"](_0x43b4f2)["update"](JSON["parse"](_0x10de6))["then"](function () {
          window["unityInstance"]["SendMessage"](_0x148197, _0x8f1b92, "Success: document " + _0x43b4f2 + " was updated");
        })["catch"](function (_0x3f42a7) {
          window["unityInstance"]["SendMessage"](_0x148197, _0x2f2d49, JSON["stringify"](_0x3f42a7, Object["getOwnPropertyNames"](_0x3f42a7)));
        });
      } catch (_0x2115d5) {
        window["unityInstance"]["SendMessage"](_0x148197, _0x2f2d49, JSON["stringify"](_0x2115d5, Object["getOwnPropertyNames"](_0x2115d5)));
      }
    }
    function _0x1f16ab(_0x265ac7, _0x4e7f88, _0x822600, _0x4c5600, _0x1ace82) {
      var _0xfb514f = _0x30a7f6(_0x265ac7), _0x14fc04 = _0x30a7f6(_0x4e7f88), _0x1d009f = _0x30a7f6(_0x822600), _0x5573b4 = _0x30a7f6(_0x4c5600), _0x16d6fe = _0x30a7f6(_0x1ace82);
      try {
        firebase["database"]()["ref"](_0xfb514f)["update"](JSON["parse"](_0x14fc04))["then"](function (_0x521b2f) {
          window["unityInstance"]["SendMessage"](_0x1d009f, _0x5573b4, "Success: " + _0x14fc04 + " was updated in " + _0xfb514f);
        });
      } catch (_0x5be2ad) {
        window["unityInstance"]["SendMessage"](_0x1d009f, _0x16d6fe, JSON["stringify"](_0x5be2ad, Object["getOwnPropertyNames"](_0x5be2ad)));
      }
    }
    function _0xde1413(_0x407b08, _0x27f303, _0x561e00, _0x30bfe6, _0xfc15f5) {
      var _0x34aff2 = _0x30a7f6(_0x407b08), _0xac93a5 = _0x30a7f6(_0x27f303), _0x57025f = _0x30a7f6(_0x561e00), _0x135256 = _0x30a7f6(_0x30bfe6), _0x8a6c0f = _0x30a7f6(_0xfc15f5);
      try {
        firebase["storage"]()["ref"](_0x34aff2)["put"](_0xb5bf1a(_0xac93a5))["then"](function (_0x3f96d2) {
          window["unityInstance"]["SendMessage"](_0x57025f, _0x135256, "Success: data was posted to " + _0x34aff2);
        });
      } catch (_0x2b8e4e) {
        window["unityInstance"]["SendMessage"](_0x57025f, _0x8a6c0f, JSON["stringify"](_0x2b8e4e, Object["getOwnPropertyNames"](_0x2b8e4e)));
      }
      function _0xb5bf1a(_0x19c032) {
        var _0x182cb9 = window["atob"](_0x19c032), _0x2f406a = _0x182cb9["length"], _0x4b94bb = new Uint8Array(_0x2f406a);
        for (var _0x2847dc = 0; _0x2847dc < _0x2f406a; _0x2847dc++) {
          _0x4b94bb[_0x2847dc] = _0x182cb9["charCodeAt"](_0x2847dc);
        }
        return _0x4b94bb["buffer"];
      }
    }
    var _0xd7c6e5 = {requestInstances: {}, nextRequestId: 1, loglevel: 2, SendTextToCSharpSide: function (_0x3a451e, _0x37cdeb, _0x2d70c5) {
      const _0x20b179 = new TextEncoder, _0x36af99 = _0x20b179["encode"](_0x2d70c5), _0x253aa1 = function (_0x4b81ce, _0x377580) {
        return _0x5ea6d0["apply"](null, [_0xd7c6e5["onallocbuffer"], _0x4b81ce, _0x377580]);
      }(_0x3a451e, _0x36af99["length"]);
      _0x18c91b["set"](_0x36af99, _0x253aa1), function (_0x1e44e5, _0x576d7d, _0x19593a) {
        _0x14e1db["apply"](null, [_0x37cdeb, _0x1e44e5, _0x576d7d, _0x19593a]);
      }(_0x3a451e, _0x253aa1, _0x36af99["length"]);
    }, GetResponseHeaders: function (_0x118eb7, _0x3d2c2c) {
      if (_0xd7c6e5["loglevel"] <= 1) console["log"]("GetResponseHeaders(" + _0x118eb7 + ")");
      var _0x13cd40 = "";
      if (document && document["cookie"]) {
        var _0x28a956 = document["cookie"]["split"](";");
        for (var _0x47f908 = 0; _0x47f908 < _0x28a956["length"]; ++_0x47f908) {
          const _0x36a3db = _0x28a956[_0x47f908]["trim"]();
          if (_0x36a3db["length"] > 0) _0x13cd40 += "Set-Cookie:" + _0x36a3db + "\n";
        }
      }
      const _0xeb450a = _0xd7c6e5["requestInstances"][_0x118eb7]["getAllResponseHeaders"]()["trim"]()["split"](/[\r\n]+/);
      _0xeb450a["forEach"](_0x22697c => {
        const _0x5bb1cd = _0x22697c["split"](": "), _0x3ce3e6 = _0x5bb1cd["shift"](), _0x9e721a = _0x5bb1cd["join"](": ");
        if (_0x3ce3e6 !== "content-length") _0x13cd40 += _0x3ce3e6 + ":" + _0x9e721a + "\n";
      }), _0xd7c6e5["SendTextToCSharpSide"](_0x118eb7, _0x3d2c2c, _0x13cd40);
    }};
    function _0x1a3813(_0x2afb45) {
      if (_0xd7c6e5["loglevel"] <= 1) console["log"]("XHR_Abort(" + _0x2afb45 + ")");
      _0xd7c6e5["requestInstances"][_0x2afb45]["abort"]();
    }
    function _0x38d074(_0x246aaa, _0x444675, _0x289ea8, _0x341a8d, _0x2fef91) {
      var _0x43976e = new URL(_0x30a7f6(_0x444675)), _0x549765 = _0x30a7f6(_0x246aaa);
      if (_0xd7c6e5["loglevel"] <= 1) console["log"]("XHR_Create (" + _0xd7c6e5["nextRequestId"] + ", " + _0x549765 + ", " + _0x43976e["toString"]() + ", " + _0x2fef91 + ")");
      var _0x1024d5 = new XMLHttpRequest;
      if (_0x289ea8 && _0x341a8d) {
        var _0x1e068c = _0x30a7f6(_0x289ea8), _0x52b00d = _0x30a7f6(_0x341a8d);
        _0x1024d5["withCredentials"] = true, _0x1024d5["open"](_0x549765, _0x43976e["toString"](), true, _0x1e068c, _0x52b00d);
      } else _0x1024d5["withCredentials"] = _0x2fef91, _0x1024d5["open"](_0x549765, _0x43976e["toString"](), true);
      return _0x1024d5["responseType"] = "arraybuffer", _0xd7c6e5["requestInstances"][_0xd7c6e5["nextRequestId"]] = _0x1024d5, _0xd7c6e5["nextRequestId"]++;
    }
    function _0x2d8d45(_0x2e8e87) {
      if (_0xd7c6e5["loglevel"] <= 1) console["log"]("XHR_Release(" + _0x2e8e87 + ")");
      delete _0xd7c6e5["requestInstances"][_0x2e8e87];
    }
    function _0x345a1f(_0x28ca10, _0x55a73a, _0x1ac993) {
      if (_0xd7c6e5["loglevel"] <= 1) console["log"]("XHR_Send(" + _0x28ca10 + ", " + _0x55a73a + ", " + _0x1ac993 + ")");
      var _0x22cebb = _0xd7c6e5["requestInstances"][_0x28ca10];
      try {
        if (_0x1ac993 > 0) _0x22cebb["send"](_0x18c91b["subarray"](_0x55a73a, _0x55a73a + _0x1ac993)); else _0x22cebb["send"]();
      } catch (_0x4c0062) {
        if (_0xd7c6e5["loglevel"] <= 4) console["error"]("XHR_Send(" + _0x28ca10 + "): " + _0x4c0062["name"] + " : " + _0x4c0062["message"]);
      }
    }
    function _0x322ff8(_0x57e8db) {
      _0xd7c6e5["loglevel"] = _0x57e8db;
    }
    function _0x1b30d3(_0x1d2434, _0x8d8d5a, _0x1dd743) {
      if (_0xd7c6e5["loglevel"] <= 1) console["log"]("XHR_SetProgressHandler(" + _0x1d2434 + ")");
      var _0x3ad396 = _0xd7c6e5["requestInstances"][_0x1d2434];
      if (_0x3ad396) {
        if (_0x8d8d5a) _0x3ad396["onprogress"] = function _0x195d02(_0xdd79c7) {
          if (_0xd7c6e5["loglevel"] <= 1) console["log"]("XHR_SetProgressHandler download(" + _0x1d2434 + ", " + _0xdd79c7["loaded"] + ", " + _0xdd79c7["total"] + ")");
          _0xdd79c7["lengthComputable"] && function (_0x4722f7, _0x1ad51c, _0x5a971e) {
            _0x14e1db["apply"](null, [_0x8d8d5a, _0x4722f7, _0x1ad51c, _0x5a971e]);
          }(_0x1d2434, _0xdd79c7["loaded"], _0xdd79c7["total"]);
        };
        if (_0x1dd743) _0x3ad396["upload"]["addEventListener"]("progress", function _0x543004(_0x56b0bb) {
          if (_0xd7c6e5["loglevel"] <= 1) console["log"]("XHR_SetProgressHandler upload(" + _0x1d2434 + ", " + _0x56b0bb["loaded"] + ", " + _0x56b0bb["total"] + ")");
          _0x56b0bb["lengthComputable"] && function (_0x1fd7be, _0x59cad0, _0x268f79) {
            _0x14e1db["apply"](null, [_0x1dd743, _0x1fd7be, _0x59cad0, _0x268f79]);
          }(_0x1d2434, _0x56b0bb["loaded"], _0x56b0bb["total"]);
        }, true);
      }
    }
    function _0x3fe864(_0x216179, _0x5707f5, _0x7194db) {
      var _0x41eaf9 = _0x30a7f6(_0x5707f5), _0x4d314b = _0x30a7f6(_0x7194db);
      if (_0xd7c6e5["loglevel"] <= 1) console["log"]("XHR_SetRequestHeader(" + _0x41eaf9 + ", " + _0x4d314b + ")");
      if (_0x41eaf9 != "Cookie") _0xd7c6e5["requestInstances"][_0x216179]["setRequestHeader"](_0x41eaf9, _0x4d314b); else {
        var _0x3c2e18 = _0x4d314b["split"](";");
        for (var _0x11508d = 0; _0x11508d < _0x3c2e18["length"]; _0x11508d++) {
          document["cookie"] = _0x3c2e18[_0x11508d];
        }
      }
    }
    function _0x3323f7(_0x21fe19, _0xb95970, _0x4201c7, _0x1e6c2b, _0x247975, _0x513007, _0x4fa929) {
      if (_0xd7c6e5["loglevel"] <= 1) console["log"]("XHR_SetResponseHandler(" + _0x21fe19 + ")");
      _0xd7c6e5["onallocbuffer"] = _0x4fa929;
      var _0x33a75e = _0xd7c6e5["requestInstances"][_0x21fe19];
      _0x33a75e["onreadystatechange"] = _0x1d57db => {
        if (_0xd7c6e5["loglevel"] <= 1) console["log"](_0x21fe19 + " onreadystatechange(" + _0x33a75e["readyState"] + ")");
        switch (_0x33a75e["readyState"]) {
          case XMLHttpRequest["UNSENT"]:
            break;
          case XMLHttpRequest["OPENED"]:
            break;
          case XMLHttpRequest["HEADERS_RECEIVED"]:
            {
              _0xd7c6e5["SendTextToCSharpSide"](_0x21fe19, _0x513007, "HTTP/1.1 " + _0x33a75e["status"] + " " + _0x33a75e["statusText"] + "\n"), _0xd7c6e5["GetResponseHeaders"](_0x21fe19, _0x513007);
              break;
            }
          case XMLHttpRequest["LOADING"]:
            break;
          case XMLHttpRequest["DONE"]:
            break;
        }
      }, _0x33a75e["onloadstart"] = _0x48ef64 => {
        if (_0xd7c6e5["loglevel"] <= 1) console["log"](_0x21fe19 + " onloadstart: " + _0x48ef64);
      }, _0x33a75e["onload"] = function _0x5bbe1f(_0x319a47) {
        if (_0xd7c6e5["loglevel"] <= 1) console["log"](_0x21fe19 + " onload(" + _0x33a75e["status"] + ", " + _0x33a75e["statusText"] + ")");
        if (_0xb95970) {
          var _0x58a662 = 0, _0x410d9d = 0;
          if (!!_0x33a75e["response"]) {
            var _0x4e0787 = _0x33a75e["response"];
            _0x58a662 = _0x4e0787["byteLength"], _0xd7c6e5["SendTextToCSharpSide"](_0x21fe19, _0x513007, "content-length:" + _0x58a662 + "\n\n"), _0x410d9d = function (_0x26aa3b, _0x142162) {
              return _0x5ea6d0["apply"](null, [_0x4fa929, _0x26aa3b, _0x142162]);
            }(_0x21fe19, _0x58a662);
            var _0x5e3127 = new Uint8Array(_0x4e0787), _0x2d9a59 = _0x18c91b["subarray"](_0x410d9d, _0x410d9d + _0x58a662);
            _0x2d9a59["set"](_0x5e3127);
          } else _0xd7c6e5["SendTextToCSharpSide"](_0x21fe19, _0x513007, "content-length:0\n\n");
          (function (_0xd4f0e7, _0x8e18a2, _0x41b2f1) {
            _0x14e1db["apply"](null, [_0xb95970, _0xd4f0e7, _0x8e18a2, _0x41b2f1]);
          }(_0x21fe19, _0x410d9d, _0x58a662));
        }
      };
      _0x4201c7 && (_0x33a75e["onerror"] = function _0x498b57(_0x501ee4) {
        function _0x1c85a9(_0x29784b) {
          var _0x4af92e = _0x4d063a(_0x29784b) + 1, _0x513b13 = _0x1f6602(_0x4af92e);
          _0x2f86f3(_0x29784b, _0x18c91b, _0x513b13, _0x4af92e), function (_0x33ed90, _0x323b60) {
            _0x3b5585["apply"](null, [_0x4201c7, _0x33ed90, _0x323b60]);
          }(_0x21fe19, _0x513b13), _0x14a4bc(_0x513b13);
        }
        if (_0x501ee4["error"]) _0x1c85a9(_0x501ee4["error"]); else _0x1c85a9("Unknown Error! Maybe a CORS porblem?");
      });
      if (_0x1e6c2b) _0x33a75e["ontimeout"] = function _0x134bc4(_0x32e04a) {
        (function (_0x347626) {
          _0xe4a07d["apply"](null, [_0x1e6c2b, _0x347626]);
        }(_0x21fe19));
      };
      if (_0x247975) _0x33a75e["onabort"] = function _0x275a95(_0x40e314) {
        (function (_0x38b20d) {
          _0xe4a07d["apply"](null, [_0x247975, _0x38b20d]);
        }(_0x21fe19));
      };
    }
    function _0xf10a6d(_0x40a9c3, _0x2d8966) {
      if (_0xd7c6e5["loglevel"] <= 1) console["log"]("XHR_SetTimeout(" + _0x40a9c3 + ", " + _0x2d8966 + ")");
      _0xd7c6e5["requestInstances"][_0x40a9c3]["timeout"] = _0x2d8966;
    }
    function _0x259bf9(_0x3178af) {
      return _0x1f6602(_0x3178af + 16) + 16;
    }
    function _0x55c4bc(_0x342234) {
      this["excPtr"] = _0x342234, this["ptr"] = _0x342234 - 16, this["set_type"] = function (_0x592268) {
        _0x46c9cf[this["ptr"] + 4 >> 2] = _0x592268;
      }, this["get_type"] = function () {
        return _0x46c9cf[this["ptr"] + 4 >> 2];
      }, this["set_destructor"] = function (_0x58ddff) {
        _0x46c9cf[this["ptr"] + 8 >> 2] = _0x58ddff;
      }, this["get_destructor"] = function () {
        return _0x46c9cf[this["ptr"] + 8 >> 2];
      }, this["set_refcount"] = function (_0x311023) {
        _0x46c9cf[this["ptr"] >> 2] = _0x311023;
      }, this["set_caught"] = function (_0x49d1f7) {
        _0x49d1f7 = _0x49d1f7 ? 1 : 0, _0x59ed12[this["ptr"] + 12 >> 0] = _0x49d1f7;
      }, this["get_caught"] = function () {
        return _0x59ed12[this["ptr"] + 12 >> 0] != 0;
      }, this["set_rethrown"] = function (_0x34c5a2) {
        _0x34c5a2 = _0x34c5a2 ? 1 : 0, _0x59ed12[this["ptr"] + 13 >> 0] = _0x34c5a2;
      }, this["get_rethrown"] = function () {
        return _0x59ed12[this["ptr"] + 13 >> 0] != 0;
      }, this["init"] = function (_0x11ac56, _0x28ae90) {
        this["set_type"](_0x11ac56), this["set_destructor"](_0x28ae90), this["set_refcount"](0), this["set_caught"](false), this["set_rethrown"](false);
      }, this["add_ref"] = function () {
        var _0xa92b31 = _0x46c9cf[this["ptr"] >> 2];
        _0x46c9cf[this["ptr"] >> 2] = _0xa92b31 + 1;
      }, this["release_ref"] = function () {
        var _0x1d6f0f = _0x46c9cf[this["ptr"] >> 2];
        return _0x46c9cf[this["ptr"] >> 2] = _0x1d6f0f - 1, _0x1d6f0f === 1;
      };
    }
    function _0x47a08a(_0x10ed05) {
      this["free"] = function () {
        _0x14a4bc(this["ptr"]), this["ptr"] = 0;
      }, this["set_base_ptr"] = function (_0x5a95b6) {
        _0x46c9cf[this["ptr"] >> 2] = _0x5a95b6;
      }, this["get_base_ptr"] = function () {
        return _0x46c9cf[this["ptr"] >> 2];
      }, this["set_adjusted_ptr"] = function (_0x43d225) {
        _0x46c9cf[this["ptr"] + 4 >> 2] = _0x43d225;
      }, this["get_adjusted_ptr_addr"] = function () {
        return this["ptr"] + 4;
      }, this["get_adjusted_ptr"] = function () {
        return _0x46c9cf[this["ptr"] + 4 >> 2];
      }, this["get_exception_ptr"] = function () {
        var _0x3837b9 = _0x158620(this["get_exception_info"]()["get_type"]());
        if (_0x3837b9) return _0x46c9cf[this["get_base_ptr"]() >> 2];
        var _0x641c68 = this["get_adjusted_ptr"]();
        if (_0x641c68 !== 0) return _0x641c68;
        return this["get_base_ptr"]();
      }, this["get_exception_info"] = function () {
        return new _0x55c4bc(this["get_base_ptr"]());
      }, _0x10ed05 === undefined ? (this["ptr"] = _0x1f6602(8), this["set_adjusted_ptr"](0)) : this["ptr"] = _0x10ed05;
    }
    var _0x1f3315 = [];
    function _0x23bb85(_0x2fe169) {
      _0x2fe169["add_ref"]();
    }
    var _0x153403 = 0;
    function _0x451726(_0x27470e) {
      var _0x3accbf = new _0x47a08a(_0x27470e), _0x4504e2 = _0x3accbf["get_exception_info"]();
      return !_0x4504e2["get_caught"]() && (_0x4504e2["set_caught"](true), _0x153403--), _0x4504e2["set_rethrown"](false), _0x1f3315["push"](_0x3accbf), _0x23bb85(_0x4504e2), _0x3accbf["get_exception_ptr"]();
    }
    var _0x27ee7b = 0;
    function _0x31cafc(_0x18daaf) {
      return _0x14a4bc(new _0x55c4bc(_0x18daaf)["ptr"]);
    }
    function _0x58ce14(_0x3422d8) {
      if (_0x3422d8["release_ref"]() && !_0x3422d8["get_rethrown"]()) {
        var _0x37f117 = _0x3422d8["get_destructor"]();
        _0x37f117 && function (_0x56d86d) {
          return _0x89bc0e["apply"](null, [_0x37f117, _0x56d86d]);
        }(_0x3422d8["excPtr"]), _0x31cafc(_0x3422d8["excPtr"]);
      }
    }
    function _0x33a569() {
      _0x3444d6(0);
      var _0xae8230 = _0x1f3315["pop"]();
      _0x58ce14(_0xae8230["get_exception_info"]()), _0xae8230["free"](), _0x27ee7b = 0;
    }
    function _0xb7ce82(_0x54eafa) {
      var _0x5e20d9 = new _0x47a08a(_0x54eafa), _0x6cc537 = _0x5e20d9["get_base_ptr"]();
      !_0x27ee7b && (_0x27ee7b = _0x6cc537);
      _0x5e20d9["free"]();
      throw _0x6cc537;
    }
    function _0x49137b() {
      var _0xa25676 = _0x27ee7b;
      if (!_0xa25676) return _0x3a12a5(0), 0;
      var _0xb92bc1 = new _0x55c4bc(_0xa25676), _0x38bdc3 = _0xb92bc1["get_type"](), _0x305c3d = new _0x47a08a;
      _0x305c3d["set_base_ptr"](_0xa25676), _0x305c3d["set_adjusted_ptr"](_0xa25676);
      if (!_0x38bdc3) return _0x3a12a5(0), _0x305c3d["ptr"] | 0;
      var _0x19fbfc = Array["prototype"]["slice"]["call"](arguments);
      for (var _0x17ef3f = 0; _0x17ef3f < _0x19fbfc["length"]; _0x17ef3f++) {
        var _0x23b026 = _0x19fbfc[_0x17ef3f];
        if (_0x23b026 === 0 || _0x23b026 === _0x38bdc3) break;
        if (_0x15648c(_0x23b026, _0x38bdc3, _0x305c3d["get_adjusted_ptr_addr"]())) return _0x3a12a5(_0x23b026), _0x305c3d["ptr"] | 0;
      }
      return _0x3a12a5(_0x38bdc3), _0x305c3d["ptr"] | 0;
    }
    function _0x48140c() {
      var _0x4418ef = _0x27ee7b;
      if (!_0x4418ef) return _0x3a12a5(0), 0;
      var _0x44e322 = new _0x55c4bc(_0x4418ef), _0x493789 = _0x44e322["get_type"](), _0x4ff4b4 = new _0x47a08a;
      _0x4ff4b4["set_base_ptr"](_0x4418ef), _0x4ff4b4["set_adjusted_ptr"](_0x4418ef);
      if (!_0x493789) return _0x3a12a5(0), _0x4ff4b4["ptr"] | 0;
      var _0x1c5be4 = Array["prototype"]["slice"]["call"](arguments);
      for (var _0x5760bc = 0; _0x5760bc < _0x1c5be4["length"]; _0x5760bc++) {
        var _0x1613e8 = _0x1c5be4[_0x5760bc];
        if (_0x1613e8 === 0 || _0x1613e8 === _0x493789) break;
        if (_0x15648c(_0x1613e8, _0x493789, _0x4ff4b4["get_adjusted_ptr_addr"]())) return _0x3a12a5(_0x1613e8), _0x4ff4b4["ptr"] | 0;
      }
      return _0x3a12a5(_0x493789), _0x4ff4b4["ptr"] | 0;
    }
    function _0x264925() {
      var _0x57467c = _0x27ee7b;
      if (!_0x57467c) return _0x3a12a5(0), 0;
      var _0x32608e = new _0x55c4bc(_0x57467c), _0x41fbc8 = _0x32608e["get_type"](), _0x2b683 = new _0x47a08a;
      _0x2b683["set_base_ptr"](_0x57467c), _0x2b683["set_adjusted_ptr"](_0x57467c);
      if (!_0x41fbc8) return _0x3a12a5(0), _0x2b683["ptr"] | 0;
      var _0x422741 = Array["prototype"]["slice"]["call"](arguments);
      for (var _0x40f7cd = 0; _0x40f7cd < _0x422741["length"]; _0x40f7cd++) {
        var _0x1fca16 = _0x422741[_0x40f7cd];
        if (_0x1fca16 === 0 || _0x1fca16 === _0x41fbc8) break;
        if (_0x15648c(_0x1fca16, _0x41fbc8, _0x2b683["get_adjusted_ptr_addr"]())) return _0x3a12a5(_0x1fca16), _0x2b683["ptr"] | 0;
      }
      return _0x3a12a5(_0x41fbc8), _0x2b683["ptr"] | 0;
    }
    function _0x376515() {
      var _0x2ce1cf = _0x1f3315["pop"]();
      !_0x2ce1cf && _0x4a2433("no exception to throw");
      var _0x1b44b0 = _0x2ce1cf["get_exception_info"](), _0x25a9bf = _0x2ce1cf["get_base_ptr"]();
      !_0x1b44b0["get_rethrown"]() ? (_0x1f3315["push"](_0x2ce1cf), _0x1b44b0["set_rethrown"](true), _0x1b44b0["set_caught"](false), _0x153403++) : _0x2ce1cf["free"]();
      _0x27ee7b = _0x25a9bf;
      throw _0x25a9bf;
    }
    function _0x1e0517(_0x19b6a4, _0x3ba949, _0x318fab) {
      var _0x425dee = new _0x55c4bc(_0x19b6a4);
      _0x425dee["init"](_0x3ba949, _0x318fab), _0x27ee7b = _0x19b6a4, _0x153403++;
      throw _0x19b6a4;
    }
    var _0x353c9a = {splitPath: function (_0x4ddf09) {
      var _0x21e801 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return _0x21e801["exec"](_0x4ddf09)["slice"](1);
    }, normalizeArray: function (_0xb2b510, _0x2ecd20) {
      var _0xe1eeea = 0;
      for (var _0x2670c6 = _0xb2b510["length"] - 1; _0x2670c6 >= 0; _0x2670c6--) {
        var _0x599f69 = _0xb2b510[_0x2670c6];
        if (_0x599f69 === ".") _0xb2b510["splice"](_0x2670c6, 1); else {
          if (_0x599f69 === "..") _0xb2b510["splice"](_0x2670c6, 1), _0xe1eeea++; else _0xe1eeea && (_0xb2b510["splice"](_0x2670c6, 1), _0xe1eeea--);
        }
      }
      if (_0x2ecd20) for (; _0xe1eeea; _0xe1eeea--) {
        _0xb2b510["unshift"]("..");
      }
      return _0xb2b510;
    }, normalize: function (_0x3115a7) {
      var _0x58ebbf = _0x3115a7["charAt"](0) === "/", _0x301ec3 = _0x3115a7["substr"](-1) === "/";
      return _0x3115a7 = _0x353c9a["normalizeArray"](_0x3115a7["split"]("/")["filter"](function (_0x23bb4a) {
        return !!_0x23bb4a;
      }), !_0x58ebbf)["join"]("/"), !_0x3115a7 && !_0x58ebbf && (_0x3115a7 = "."), _0x3115a7 && _0x301ec3 && (_0x3115a7 += "/"), (_0x58ebbf ? "/" : "") + _0x3115a7;
    }, dirname: function (_0x278b4f) {
      var _0x28bb4e = _0x353c9a["splitPath"](_0x278b4f), _0x5cbe40 = _0x28bb4e[0], _0x4c7de8 = _0x28bb4e[1];
      if (!_0x5cbe40 && !_0x4c7de8) return ".";
      return _0x4c7de8 && (_0x4c7de8 = _0x4c7de8["substr"](0, _0x4c7de8["length"] - 1)), _0x5cbe40 + _0x4c7de8;
    }, basename: function (_0x397969) {
      if (_0x397969 === "/") return "/";
      _0x397969 = _0x353c9a["normalize"](_0x397969), _0x397969 = _0x397969["replace"](/\/$/, "");
      var _0x4eaf85 = _0x397969["lastIndexOf"]("/");
      if (_0x4eaf85 === -1) return _0x397969;
      return _0x397969["substr"](_0x4eaf85 + 1);
    }, extname: function (_0x5b835d) {
      return _0x353c9a["splitPath"](_0x5b835d)[3];
    }, join: function () {
      var _0x5deb3e = Array["prototype"]["slice"]["call"](arguments, 0);
      return _0x353c9a["normalize"](_0x5deb3e["join"]("/"));
    }, join2: function (_0xf9564d, _0x62e67a) {
      return _0x353c9a["normalize"](_0xf9564d + "/" + _0x62e67a);
    }};
    function _0xe6f731() {
      if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
        var _0x8af5f4 = new Uint8Array(1);
        return function () {
          return crypto["getRandomValues"](_0x8af5f4), _0x8af5f4[0];
        };
      } else {
        if (_0x4da766) try {
          var _0x28d28e = require("crypto");
          return function () {
            return _0x28d28e["randomBytes"](1)[0];
          };
        } catch (_0x6ca540) {}
      }
      return function () {
        _0x4a2433("randomDevice");
      };
    }
    var _0x7c6eff = {resolve: function () {
      var _0x429e97 = "", _0x3b9536 = false;
      for (var _0x5ab984 = arguments["length"] - 1; _0x5ab984 >= -1 && !_0x3b9536; _0x5ab984--) {
        var _0x49f7db = _0x5ab984 >= 0 ? arguments[_0x5ab984] : _0x278315["cwd"]();
        if (typeof _0x49f7db != "string") throw new TypeError("Arguments to path.resolve must be strings"); else {
          if (!_0x49f7db) return "";
        }
        _0x429e97 = _0x49f7db + "/" + _0x429e97, _0x3b9536 = _0x49f7db["charAt"](0) === "/";
      }
      return _0x429e97 = _0x353c9a["normalizeArray"](_0x429e97["split"]("/")["filter"](function (_0x50a5c3) {
        return !!_0x50a5c3;
      }), !_0x3b9536)["join"]("/"), (_0x3b9536 ? "/" : "") + _0x429e97 || ".";
    }, relative: function (_0x47b22f, _0xe905b3) {
      _0x47b22f = _0x7c6eff["resolve"](_0x47b22f)["substr"](1), _0xe905b3 = _0x7c6eff["resolve"](_0xe905b3)["substr"](1);
      function _0x1b34d1(_0x3f0e03) {
        var _0xe047d7 = 0;
        for (; _0xe047d7 < _0x3f0e03["length"]; _0xe047d7++) {
          if (_0x3f0e03[_0xe047d7] !== "") break;
        }
        var _0x28812d = _0x3f0e03["length"] - 1;
        for (; _0x28812d >= 0; _0x28812d--) {
          if (_0x3f0e03[_0x28812d] !== "") break;
        }
        if (_0xe047d7 > _0x28812d) return [];
        return _0x3f0e03["slice"](_0xe047d7, _0x28812d - _0xe047d7 + 1);
      }
      var _0xcea4bc = _0x1b34d1(_0x47b22f["split"]("/")), _0x537e54 = _0x1b34d1(_0xe905b3["split"]("/")), _0x47ff9f = Math["min"](_0xcea4bc["length"], _0x537e54["length"]), _0x247b6f = _0x47ff9f;
      for (var _0x5a24a9 = 0; _0x5a24a9 < _0x47ff9f; _0x5a24a9++) {
        if (_0xcea4bc[_0x5a24a9] !== _0x537e54[_0x5a24a9]) {
          _0x247b6f = _0x5a24a9;
          break;
        }
      }
      var _0x58e6f9 = [];
      for (var _0x5a24a9 = _0x247b6f; _0x5a24a9 < _0xcea4bc["length"]; _0x5a24a9++) {
        _0x58e6f9["push"]("..");
      }
      return _0x58e6f9 = _0x58e6f9["concat"](_0x537e54["slice"](_0x247b6f)), _0x58e6f9["join"]("/");
    }}, _0x4f6acc = {ttys: [], init: function () {}, shutdown: function () {}, register: function (_0x30f67c, _0x5ccf1f) {
      _0x4f6acc["ttys"][_0x30f67c] = {input: [], output: [], ops: _0x5ccf1f}, _0x278315["registerDevice"](_0x30f67c, _0x4f6acc["stream_ops"]);
    }, stream_ops: {open: function (_0x2af201) {
      var _0x3ee34d = _0x4f6acc["ttys"][_0x2af201["node"]["rdev"]];
      if (!_0x3ee34d) throw new _0x278315["ErrnoError"](43);
      _0x2af201["tty"] = _0x3ee34d, _0x2af201["seekable"] = false;
    }, close: function (_0x509f1d) {
      _0x509f1d["tty"]["ops"]["flush"](_0x509f1d["tty"]);
    }, flush: function (_0x3cffbf) {
      _0x3cffbf["tty"]["ops"]["flush"](_0x3cffbf["tty"]);
    }, read: function (_0x1e7fc5, _0x53fe95, _0x2cdd61, _0x2f39de, _0x20de94) {
      if (!_0x1e7fc5["tty"] || !_0x1e7fc5["tty"]["ops"]["get_char"]) throw new _0x278315["ErrnoError"](60);
      var _0x1a1554 = 0;
      for (var _0x3939cf = 0; _0x3939cf < _0x2f39de; _0x3939cf++) {
        var _0x4cae82;
        try {
          _0x4cae82 = _0x1e7fc5["tty"]["ops"]["get_char"](_0x1e7fc5["tty"]);
        } catch (_0x4b1aa0) {
          throw new _0x278315["ErrnoError"](29);
        }
        if (_0x4cae82 === undefined && _0x1a1554 === 0) throw new _0x278315["ErrnoError"](6);
        if (_0x4cae82 === null || _0x4cae82 === undefined) break;
        _0x1a1554++, _0x53fe95[_0x2cdd61 + _0x3939cf] = _0x4cae82;
      }
      return _0x1a1554 && (_0x1e7fc5["node"]["timestamp"] = Date["now"]()), _0x1a1554;
    }, write: function (_0x166886, _0x1945d1, _0xe8ab3a, _0x171d3c, _0x5540e1) {
      if (!_0x166886["tty"] || !_0x166886["tty"]["ops"]["put_char"]) throw new _0x278315["ErrnoError"](60);
      try {
        for (var _0x421afe = 0; _0x421afe < _0x171d3c; _0x421afe++) {
          _0x166886["tty"]["ops"]["put_char"](_0x166886["tty"], _0x1945d1[_0xe8ab3a + _0x421afe]);
        }
      } catch (_0x1158fe) {
        throw new _0x278315["ErrnoError"](29);
      }
      return _0x171d3c && (_0x166886["node"]["timestamp"] = Date["now"]()), _0x421afe;
    }}, default_tty_ops: {get_char: function (_0x268b5d) {
      if (!_0x268b5d["input"]["length"]) {
        var _0x32828d = null;
        if (_0x4da766) {
          var _0x530fbb = 256, _0xe9823e = Buffer["alloc"](_0x530fbb), _0x298027 = 0;
          try {
            _0x298027 = _0x415551["readSync"](process["stdin"]["fd"], _0xe9823e, 0, _0x530fbb, -1);
          } catch (_0x31cf27) {
            if (_0x31cf27["toString"]()["includes"]("EOF")) _0x298027 = 0; else throw _0x31cf27;
          }
          _0x298027 > 0 ? _0x32828d = _0xe9823e["slice"](0, _0x298027)["toString"]("utf-8") : _0x32828d = null;
        } else {
          if (typeof window != "undefined" && typeof window["prompt"] == "function") _0x32828d = window["prompt"]("Input: "), _0x32828d !== null && (_0x32828d += "\n"); else typeof readline == "function" && (_0x32828d = readline(), _0x32828d !== null && (_0x32828d += "\n"));
        }
        if (!_0x32828d) return null;
        _0x268b5d["input"] = _0x3b0517(_0x32828d, true);
      }
      return _0x268b5d["input"]["shift"]();
    }, put_char: function (_0x1539b2, _0x3caea5) {
      if (_0x3caea5 === null || _0x3caea5 === 10) _0x3402e6(_0x344b4c(_0x1539b2["output"], 0)), _0x1539b2["output"] = []; else {
        if (_0x3caea5 != 0) _0x1539b2["output"]["push"](_0x3caea5);
      }
    }, flush: function (_0x1c44c9) {
      _0x1c44c9["output"] && _0x1c44c9["output"]["length"] > 0 && (_0x3402e6(_0x344b4c(_0x1c44c9["output"], 0)), _0x1c44c9["output"] = []);
    }}, default_tty1_ops: {put_char: function (_0x571a65, _0x2b0f01) {
      if (_0x2b0f01 === null || _0x2b0f01 === 10) _0x119168(_0x344b4c(_0x571a65["output"], 0)), _0x571a65["output"] = []; else {
        if (_0x2b0f01 != 0) _0x571a65["output"]["push"](_0x2b0f01);
      }
    }, flush: function (_0x576cda) {
      _0x576cda["output"] && _0x576cda["output"]["length"] > 0 && (_0x119168(_0x344b4c(_0x576cda["output"], 0)), _0x576cda["output"] = []);
    }}};
    function _0x3988d6(_0x5e9986, _0x23ff0a) {
      _0x18c91b["fill"](0, _0x5e9986, _0x5e9986 + _0x23ff0a);
    }
    function _0x170872(_0x4a3c47, _0x3ccc2f) {
      return Math["ceil"](_0x4a3c47 / _0x3ccc2f) * _0x3ccc2f;
    }
    function _0x33fedd(_0x1cc754) {
      _0x1cc754 = _0x170872(_0x1cc754, 65536);
      var _0x23716c = _0x4469d9(65536, _0x1cc754);
      if (!_0x23716c) return 0;
      return _0x3988d6(_0x23716c, _0x1cc754), _0x23716c;
    }
    var _0x187d72 = {ops_table: null, mount: function (_0x497a92) {
      return _0x187d72["createNode"](null, "/", 16895, 0);
    }, createNode: function (_0x1066bd, _0x54f8c8, _0x4e1f86, _0x252a66) {
      if (_0x278315["isBlkdev"](_0x4e1f86) || _0x278315["isFIFO"](_0x4e1f86)) throw new _0x278315["ErrnoError"](63);
      !_0x187d72["ops_table"] && (_0x187d72["ops_table"] = {dir: {node: {getattr: _0x187d72["node_ops"]["getattr"], setattr: _0x187d72["node_ops"]["setattr"], lookup: _0x187d72["node_ops"]["lookup"], mknod: _0x187d72["node_ops"]["mknod"], rename: _0x187d72["node_ops"]["rename"], unlink: _0x187d72["node_ops"]["unlink"], rmdir: _0x187d72["node_ops"]["rmdir"], readdir: _0x187d72["node_ops"]["readdir"], symlink: _0x187d72["node_ops"]["symlink"]}, stream: {llseek: _0x187d72["stream_ops"]["llseek"]}}, file: {node: {getattr: _0x187d72["node_ops"]["getattr"], setattr: _0x187d72["node_ops"]["setattr"]}, stream: {llseek: _0x187d72["stream_ops"]["llseek"], read: _0x187d72["stream_ops"]["read"], write: _0x187d72["stream_ops"]["write"], allocate: _0x187d72["stream_ops"]["allocate"], mmap: _0x187d72["stream_ops"]["mmap"], msync: _0x187d72["stream_ops"]["msync"]}}, link: {node: {getattr: _0x187d72["node_ops"]["getattr"], setattr: _0x187d72["node_ops"]["setattr"], readlink: _0x187d72["node_ops"]["readlink"]}, stream: {}}, chrdev: {node: {getattr: _0x187d72["node_ops"]["getattr"], setattr: _0x187d72["node_ops"]["setattr"]}, stream: _0x278315["chrdev_stream_ops"]}});
      var _0x2a501e = _0x278315["createNode"](_0x1066bd, _0x54f8c8, _0x4e1f86, _0x252a66);
      if (_0x278315["isDir"](_0x2a501e["mode"])) _0x2a501e["node_ops"] = _0x187d72["ops_table"]["dir"]["node"], _0x2a501e["stream_ops"] = _0x187d72["ops_table"]["dir"]["stream"], _0x2a501e["contents"] = {}; else {
        if (_0x278315["isFile"](_0x2a501e["mode"])) _0x2a501e["node_ops"] = _0x187d72["ops_table"]["file"]["node"], _0x2a501e["stream_ops"] = _0x187d72["ops_table"]["file"]["stream"], _0x2a501e["usedBytes"] = 0, _0x2a501e["contents"] = null; else {
          if (_0x278315["isLink"](_0x2a501e["mode"])) _0x2a501e["node_ops"] = _0x187d72["ops_table"]["link"]["node"], _0x2a501e["stream_ops"] = _0x187d72["ops_table"]["link"]["stream"]; else _0x278315["isChrdev"](_0x2a501e["mode"]) && (_0x2a501e["node_ops"] = _0x187d72["ops_table"]["chrdev"]["node"], _0x2a501e["stream_ops"] = _0x187d72["ops_table"]["chrdev"]["stream"]);
        }
      }
      return _0x2a501e["timestamp"] = Date["now"](), _0x1066bd && (_0x1066bd["contents"][_0x54f8c8] = _0x2a501e, _0x1066bd["timestamp"] = _0x2a501e["timestamp"]), _0x2a501e;
    }, getFileDataAsTypedArray: function (_0xf59fde) {
      if (!_0xf59fde["contents"]) return new Uint8Array(0);
      if (_0xf59fde["contents"]["subarray"]) return _0xf59fde["contents"]["subarray"](0, _0xf59fde["usedBytes"]);
      return new Uint8Array(_0xf59fde["contents"]);
    }, expandFileStorage: function (_0xd0f55c, _0x5ab52c) {
      var _0x480966 = _0xd0f55c["contents"] ? _0xd0f55c["contents"]["length"] : 0;
      if (_0x480966 >= _0x5ab52c) return;
      var _0x243683 = 1048576;
      _0x5ab52c = Math["max"](_0x5ab52c, _0x480966 * (_0x480966 < _0x243683 ? 2 : 1.125) >>> 0);
      if (_0x480966 != 0) _0x5ab52c = Math["max"](_0x5ab52c, 256);
      var _0x19e6e8 = _0xd0f55c["contents"];
      _0xd0f55c["contents"] = new Uint8Array(_0x5ab52c);
      if (_0xd0f55c["usedBytes"] > 0) _0xd0f55c["contents"]["set"](_0x19e6e8["subarray"](0, _0xd0f55c["usedBytes"]), 0);
    }, resizeFileStorage: function (_0x11d8fd, _0x36fbbe) {
      if (_0x11d8fd["usedBytes"] == _0x36fbbe) return;
      if (_0x36fbbe == 0) _0x11d8fd["contents"] = null, _0x11d8fd["usedBytes"] = 0; else {
        var _0x3e4083 = _0x11d8fd["contents"];
        _0x11d8fd["contents"] = new Uint8Array(_0x36fbbe), _0x3e4083 && _0x11d8fd["contents"]["set"](_0x3e4083["subarray"](0, Math["min"](_0x36fbbe, _0x11d8fd["usedBytes"]))), _0x11d8fd["usedBytes"] = _0x36fbbe;
      }
    }, node_ops: {getattr: function (_0x1557f3) {
      var _0x5d18e7 = {};
      _0x5d18e7["dev"] = _0x278315["isChrdev"](_0x1557f3["mode"]) ? _0x1557f3["id"] : 1, _0x5d18e7["ino"] = _0x1557f3["id"], _0x5d18e7["mode"] = _0x1557f3["mode"], _0x5d18e7["nlink"] = 1, _0x5d18e7["uid"] = 0, _0x5d18e7["gid"] = 0, _0x5d18e7["rdev"] = _0x1557f3["rdev"];
      if (_0x278315["isDir"](_0x1557f3["mode"])) _0x5d18e7["size"] = 4096; else {
        if (_0x278315["isFile"](_0x1557f3["mode"])) _0x5d18e7["size"] = _0x1557f3["usedBytes"]; else _0x278315["isLink"](_0x1557f3["mode"]) ? _0x5d18e7["size"] = _0x1557f3["link"]["length"] : _0x5d18e7["size"] = 0;
      }
      return _0x5d18e7["atime"] = new Date(_0x1557f3["timestamp"]), _0x5d18e7["mtime"] = new Date(_0x1557f3["timestamp"]), _0x5d18e7["ctime"] = new Date(_0x1557f3["timestamp"]), _0x5d18e7["blksize"] = 4096, _0x5d18e7["blocks"] = Math["ceil"](_0x5d18e7["size"] / _0x5d18e7["blksize"]), _0x5d18e7;
    }, setattr: function (_0x1c3543, _0x4d2a6a) {
      _0x4d2a6a["mode"] !== undefined && (_0x1c3543["mode"] = _0x4d2a6a["mode"]), _0x4d2a6a["timestamp"] !== undefined && (_0x1c3543["timestamp"] = _0x4d2a6a["timestamp"]), _0x4d2a6a["size"] !== undefined && _0x187d72["resizeFileStorage"](_0x1c3543, _0x4d2a6a["size"]);
    }, lookup: function (_0x3a9133, _0x285a69) {
      throw _0x278315["genericErrors"][44];
    }, mknod: function (_0x26f70e, _0x20fa46, _0x335fc1, _0x5f4b84) {
      return _0x187d72["createNode"](_0x26f70e, _0x20fa46, _0x335fc1, _0x5f4b84);
    }, rename: function (_0x463d3e, _0x5a0d2c, _0x332c55) {
      if (_0x278315["isDir"](_0x463d3e["mode"])) {
        var _0x1fd904;
        try {
          _0x1fd904 = _0x278315["lookupNode"](_0x5a0d2c, _0x332c55);
        } catch (_0x4b5483) {}
        if (_0x1fd904) for (var _0x3bca68 in _0x1fd904["contents"]) {
          throw new _0x278315["ErrnoError"](55);
        }
      }
      delete _0x463d3e["parent"]["contents"][_0x463d3e["name"]], _0x463d3e["parent"]["timestamp"] = Date["now"](), _0x463d3e["name"] = _0x332c55, _0x5a0d2c["contents"][_0x332c55] = _0x463d3e, _0x5a0d2c["timestamp"] = _0x463d3e["parent"]["timestamp"], _0x463d3e["parent"] = _0x5a0d2c;
    }, unlink: function (_0x234566, _0x3f2655) {
      delete _0x234566["contents"][_0x3f2655], _0x234566["timestamp"] = Date["now"]();
    }, rmdir: function (_0x1ba029, _0x4d2a36) {
      var _0x47ccfd = _0x278315["lookupNode"](_0x1ba029, _0x4d2a36);
      for (var _0x22a63c in _0x47ccfd["contents"]) {
        throw new _0x278315["ErrnoError"](55);
      }
      delete _0x1ba029["contents"][_0x4d2a36], _0x1ba029["timestamp"] = Date["now"]();
    }, readdir: function (_0x1f8abf) {
      var _0xf0502 = [".", ".."];
      for (var _0x185837 in _0x1f8abf["contents"]) {
        if (!_0x1f8abf["contents"]["hasOwnProperty"](_0x185837)) continue;
        _0xf0502["push"](_0x185837);
      }
      return _0xf0502;
    }, symlink: function (_0x3b94d9, _0x422452, _0x2fa275) {
      var _0x329750 = _0x187d72["createNode"](_0x3b94d9, _0x422452, 41471, 0);
      return _0x329750["link"] = _0x2fa275, _0x329750;
    }, readlink: function (_0x255f7c) {
      if (!_0x278315["isLink"](_0x255f7c["mode"])) throw new _0x278315["ErrnoError"](28);
      return _0x255f7c["link"];
    }}, stream_ops: {read: function (_0x2af7df, _0x38cb9a, _0x5b6232, _0x4e04ad, _0x61f878) {
      var _0x25cb2d = _0x2af7df["node"]["contents"];
      if (_0x61f878 >= _0x2af7df["node"]["usedBytes"]) return 0;
      var _0x1faeda = Math["min"](_0x2af7df["node"]["usedBytes"] - _0x61f878, _0x4e04ad);
      if (_0x1faeda > 8 && _0x25cb2d["subarray"]) _0x38cb9a["set"](_0x25cb2d["subarray"](_0x61f878, _0x61f878 + _0x1faeda), _0x5b6232); else {
        for (var _0x3bac94 = 0; _0x3bac94 < _0x1faeda; _0x3bac94++) _0x38cb9a[_0x5b6232 + _0x3bac94] = _0x25cb2d[_0x61f878 + _0x3bac94];
      }
      return _0x1faeda;
    }, write: function (_0x1efb9b, _0x35cacc, _0x593841, _0x3a4217, _0x44f41f, _0x54755b) {
      _0x35cacc["buffer"] === _0x59ed12["buffer"] && (_0x54755b = false);
      if (!_0x3a4217) return 0;
      var _0x1c125 = _0x1efb9b["node"];
      _0x1c125["timestamp"] = Date["now"]();
      if (_0x35cacc["subarray"] && (!_0x1c125["contents"] || _0x1c125["contents"]["subarray"])) {
        if (_0x54755b) return _0x1c125["contents"] = _0x35cacc["subarray"](_0x593841, _0x593841 + _0x3a4217), _0x1c125["usedBytes"] = _0x3a4217, _0x3a4217; else {
          if (_0x1c125["usedBytes"] === 0 && _0x44f41f === 0) return _0x1c125["contents"] = _0x35cacc["slice"](_0x593841, _0x593841 + _0x3a4217), _0x1c125["usedBytes"] = _0x3a4217, _0x3a4217; else {
            if (_0x44f41f + _0x3a4217 <= _0x1c125["usedBytes"]) return _0x1c125["contents"]["set"](_0x35cacc["subarray"](_0x593841, _0x593841 + _0x3a4217), _0x44f41f), _0x3a4217;
          }
        }
      }
      _0x187d72["expandFileStorage"](_0x1c125, _0x44f41f + _0x3a4217);
      if (_0x1c125["contents"]["subarray"] && _0x35cacc["subarray"]) _0x1c125["contents"]["set"](_0x35cacc["subarray"](_0x593841, _0x593841 + _0x3a4217), _0x44f41f); else for (var _0x3fbe9f = 0; _0x3fbe9f < _0x3a4217; _0x3fbe9f++) {
        _0x1c125["contents"][_0x44f41f + _0x3fbe9f] = _0x35cacc[_0x593841 + _0x3fbe9f];
      }
      return _0x1c125["usedBytes"] = Math["max"](_0x1c125["usedBytes"], _0x44f41f + _0x3a4217), _0x3a4217;
    }, llseek: function (_0x5973dd, _0x4217b1, _0x44ce62) {
      var _0x22156d = _0x4217b1;
      if (_0x44ce62 === 1) _0x22156d += _0x5973dd["position"]; else _0x44ce62 === 2 && (_0x278315["isFile"](_0x5973dd["node"]["mode"]) && (_0x22156d += _0x5973dd["node"]["usedBytes"]));
      if (_0x22156d < 0) throw new _0x278315["ErrnoError"](28);
      return _0x22156d;
    }, allocate: function (_0x1bf905, _0x108ccb, _0x4efb06) {
      _0x187d72["expandFileStorage"](_0x1bf905["node"], _0x108ccb + _0x4efb06), _0x1bf905["node"]["usedBytes"] = Math["max"](_0x1bf905["node"]["usedBytes"], _0x108ccb + _0x4efb06);
    }, mmap: function (_0x231490, _0x5d8ab3, _0x387823, _0x301f6a, _0x578c8a, _0xcebc4a) {
      if (_0x5d8ab3 !== 0) throw new _0x278315["ErrnoError"](28);
      if (!_0x278315["isFile"](_0x231490["node"]["mode"])) throw new _0x278315["ErrnoError"](43);
      var _0x5d9cf3, _0x57cbff, _0x3e5187 = _0x231490["node"]["contents"];
      if (!(_0xcebc4a & 2) && _0x3e5187["buffer"] === _0x14ab10) _0x57cbff = false, _0x5d9cf3 = _0x3e5187["byteOffset"]; else {
        (_0x301f6a > 0 || _0x301f6a + _0x387823 < _0x3e5187["length"]) && (_0x3e5187["subarray"] ? _0x3e5187 = _0x3e5187["subarray"](_0x301f6a, _0x301f6a + _0x387823) : _0x3e5187 = Array["prototype"]["slice"]["call"](_0x3e5187, _0x301f6a, _0x301f6a + _0x387823));
        _0x57cbff = true, _0x5d9cf3 = _0x33fedd(_0x387823);
        if (!_0x5d9cf3) throw new _0x278315["ErrnoError"](48);
        _0x59ed12["set"](_0x3e5187, _0x5d9cf3);
      }
      return {ptr: _0x5d9cf3, allocated: _0x57cbff};
    }, msync: function (_0xeeeff, _0xec641, _0x1be965, _0x3ce19b, _0x1e85e3) {
      if (!_0x278315["isFile"](_0xeeeff["node"]["mode"])) throw new _0x278315["ErrnoError"](43);
      if (_0x1e85e3 & 2) return 0;
      var _0x34919e = _0x187d72["stream_ops"]["write"](_0xeeeff, _0xec641, 0, _0x3ce19b, _0x1be965, false);
      return 0;
    }}};
    function _0x466e8b(_0x46d0a1, _0x3a2845, _0x17d4a2, _0x222a88) {
      var _0x5d1527 = !_0x222a88 ? _0x3c35f3("al " + _0x46d0a1) : "";
      _0x27b369(_0x46d0a1, function (_0x134498) {
        _0x35e637(_0x134498, 'Loading data file "' + _0x46d0a1 + '" failed (no arrayBuffer).'), _0x3a2845(new Uint8Array(_0x134498));
        if (_0x5d1527) _0x3b7ae4(_0x5d1527);
      }, function (_0x353e82) {
        if (_0x17d4a2) _0x17d4a2(); else throw 'Loading data file "' + _0x46d0a1 + '" failed.';
      });
      if (_0x5d1527) _0x441879(_0x5d1527);
    }
    var _0x3eb30b = {dbs: {}, indexedDB: () => {
      if (typeof indexedDB != "undefined") return indexedDB;
      var _0x46c788 = null;
      if (typeof window == "object") _0x46c788 = window["indexedDB"] || window["mozIndexedDB"] || window["webkitIndexedDB"] || window["msIndexedDB"];
      return _0x35e637(_0x46c788, "IDBFS used, but indexedDB not supported"), _0x46c788;
    }, DB_VERSION: 21, DB_STORE_NAME: "FILE_DATA", mount: function (_0x2b4c64) {
      return _0x187d72["mount"]["apply"](null, arguments);
    }, syncfs: (_0x342750, _0x42e596, _0x86ec10) => {
      _0x3eb30b["getLocalSet"](_0x342750, (_0x5865a6, _0x2a9544) => {
        if (_0x5865a6) return _0x86ec10(_0x5865a6);
        _0x3eb30b["getRemoteSet"](_0x342750, (_0x2d0970, _0x1706e4) => {
          if (_0x2d0970) return _0x86ec10(_0x2d0970);
          var _0x41f728 = _0x42e596 ? _0x1706e4 : _0x2a9544, _0x4549e0 = _0x42e596 ? _0x2a9544 : _0x1706e4;
          _0x3eb30b["reconcile"](_0x41f728, _0x4549e0, _0x86ec10);
        });
      });
    }, getDB: (_0x6aacf9, _0x182833) => {
      var _0x8316d7 = _0x3eb30b["dbs"][_0x6aacf9];
      if (_0x8316d7) return _0x182833(null, _0x8316d7);
      var _0x136e70;
      try {
        _0x136e70 = _0x3eb30b["indexedDB"]()["open"](_0x6aacf9, _0x3eb30b["DB_VERSION"]);
      } catch (_0xe29f67) {
        return _0x182833(_0xe29f67);
      }
      if (!_0x136e70) return _0x182833("Unable to connect to IndexedDB");
      _0x136e70["onupgradeneeded"] = _0x52b698 => {
        var _0x41a701 = _0x52b698["target"]["result"], _0x151850 = _0x52b698["target"]["transaction"], _0x3b8fb4;
        _0x41a701["objectStoreNames"]["contains"](_0x3eb30b["DB_STORE_NAME"]) ? _0x3b8fb4 = _0x151850["objectStore"](_0x3eb30b["DB_STORE_NAME"]) : _0x3b8fb4 = _0x41a701["createObjectStore"](_0x3eb30b["DB_STORE_NAME"]), !_0x3b8fb4["indexNames"]["contains"]("timestamp") && _0x3b8fb4["createIndex"]("timestamp", "timestamp", {unique: false});
      }, _0x136e70["onsuccess"] = () => {
        _0x8316d7 = _0x136e70["result"], _0x3eb30b["dbs"][_0x6aacf9] = _0x8316d7, _0x182833(null, _0x8316d7);
      }, _0x136e70["onerror"] = _0x4552e5 => {
        _0x182833(this["error"]), _0x4552e5["preventDefault"]();
      };
    }, getLocalSet: (_0x4ab71c, _0x79d29d) => {
      var _0x55bc94 = {};
      function _0x1a485d(_0x2633f3) {
        return _0x2633f3 !== "." && _0x2633f3 !== "..";
      }
      function _0x25b676(_0x21d83f) {
        return _0x5e3711 => {
          return _0x353c9a["join2"](_0x21d83f, _0x5e3711);
        };
      }
      var _0x569893 = _0x278315["readdir"](_0x4ab71c["mountpoint"])["filter"](_0x1a485d)["map"](_0x25b676(_0x4ab71c["mountpoint"]));
      while (_0x569893["length"]) {
        var _0x530bdf = _0x569893["pop"](), _0x40ace1;
        try {
          _0x40ace1 = _0x278315["stat"](_0x530bdf);
        } catch (_0x5904b3) {
          return _0x79d29d(_0x5904b3);
        }
        _0x278315["isDir"](_0x40ace1["mode"]) && _0x569893["push"]["apply"](_0x569893, _0x278315["readdir"](_0x530bdf)["filter"](_0x1a485d)["map"](_0x25b676(_0x530bdf))), _0x55bc94[_0x530bdf] = {timestamp: _0x40ace1["mtime"]};
      }
      return _0x79d29d(null, {type: "local", entries: _0x55bc94});
    }, getRemoteSet: (_0x274c72, _0x1ae25c) => {
      var _0xf2d67b = {};
      _0x3eb30b["getDB"](_0x274c72["mountpoint"], (_0x837445, _0x29d970) => {
        if (_0x837445) return _0x1ae25c(_0x837445);
        try {
          var _0x44c88e = _0x29d970["transaction"]([_0x3eb30b["DB_STORE_NAME"]], "readonly");
          _0x44c88e["onerror"] = _0x1d79a6 => {
            _0x1ae25c(this["error"]), _0x1d79a6["preventDefault"]();
          };
          var _0x5958ff = _0x44c88e["objectStore"](_0x3eb30b["DB_STORE_NAME"]), _0x312a93 = _0x5958ff["index"]("timestamp");
          _0x312a93["openKeyCursor"]()["onsuccess"] = _0x2e2e04 => {
            var _0x2ed370 = _0x2e2e04["target"]["result"];
            if (!_0x2ed370) return _0x1ae25c(null, {type: "remote", db: _0x29d970, entries: _0xf2d67b});
            _0xf2d67b[_0x2ed370["primaryKey"]] = {timestamp: _0x2ed370["key"]}, _0x2ed370["continue"]();
          };
        } catch (_0x3711ba) {
          return _0x1ae25c(_0x3711ba);
        }
      });
    }, loadLocalEntry: (_0x2770d6, _0x4aaba3) => {
      var _0x3ee98c, _0x86f3cf;
      try {
        var _0x4a232b = _0x278315["lookupPath"](_0x2770d6);
        _0x86f3cf = _0x4a232b["node"], _0x3ee98c = _0x278315["stat"](_0x2770d6);
      } catch (_0x41832c) {
        return _0x4aaba3(_0x41832c);
      }
      if (_0x278315["isDir"](_0x3ee98c["mode"])) return _0x4aaba3(null, {timestamp: _0x3ee98c["mtime"], mode: _0x3ee98c["mode"]}); else return _0x278315["isFile"](_0x3ee98c["mode"]) ? (_0x86f3cf["contents"] = _0x187d72["getFileDataAsTypedArray"](_0x86f3cf), _0x4aaba3(null, {timestamp: _0x3ee98c["mtime"], mode: _0x3ee98c["mode"], contents: _0x86f3cf["contents"]})) : _0x4aaba3(new Error("node type not supported"));
    }, storeLocalEntry: (_0x4bfb79, _0x5ac021, _0x46b035) => {
      try {
        if (_0x278315["isDir"](_0x5ac021["mode"])) _0x278315["mkdirTree"](_0x4bfb79, _0x5ac021["mode"]); else {
          if (_0x278315["isFile"](_0x5ac021["mode"])) _0x278315["writeFile"](_0x4bfb79, _0x5ac021["contents"], {canOwn: true}); else return _0x46b035(new Error("node type not supported"));
        }
        _0x278315["chmod"](_0x4bfb79, _0x5ac021["mode"]), _0x278315["utime"](_0x4bfb79, _0x5ac021["timestamp"], _0x5ac021["timestamp"]);
      } catch (_0x490f25) {
        return _0x46b035(_0x490f25);
      }
      _0x46b035(null);
    }, removeLocalEntry: (_0x286399, _0x3f54) => {
      try {
        var _0x3d68d0 = _0x278315["lookupPath"](_0x286399), _0x44c24e = _0x278315["stat"](_0x286399);
        if (_0x278315["isDir"](_0x44c24e["mode"])) _0x278315["rmdir"](_0x286399); else _0x278315["isFile"](_0x44c24e["mode"]) && _0x278315["unlink"](_0x286399);
      } catch (_0x28fa1e) {
        return _0x3f54(_0x28fa1e);
      }
      _0x3f54(null);
    }, loadRemoteEntry: (_0x4f2dac, _0x4e7701, _0x181e3e) => {
      var _0x3f6509 = _0x4f2dac["get"](_0x4e7701);
      _0x3f6509["onsuccess"] = _0x56f213 => {
        _0x181e3e(null, _0x56f213["target"]["result"]);
      }, _0x3f6509["onerror"] = _0x52f80e => {
        _0x181e3e(this["error"]), _0x52f80e["preventDefault"]();
      };
    }, storeRemoteEntry: (_0x857946, _0x4126fc, _0x52fc1f, _0x1302fd) => {
      try {
        var _0x18a3f7 = _0x857946["put"](_0x52fc1f, _0x4126fc);
      } catch (_0x230dec) {
        _0x1302fd(_0x230dec);
        return;
      }
      _0x18a3f7["onsuccess"] = () => {
        _0x1302fd(null);
      }, _0x18a3f7["onerror"] = _0x235c70 => {
        _0x1302fd(this["error"]), _0x235c70["preventDefault"]();
      };
    }, removeRemoteEntry: (_0x1224ea, _0x5401dd, _0x296c90) => {
      var _0x256f10 = _0x1224ea["delete"](_0x5401dd);
      _0x256f10["onsuccess"] = () => {
        _0x296c90(null);
      }, _0x256f10["onerror"] = _0x46df13 => {
        _0x296c90(this["error"]), _0x46df13["preventDefault"]();
      };
    }, reconcile: (_0x1b999e, _0x5b80df, _0x253f9a) => {
      var _0x16c6fd = 0, _0x3844db = [];
      Object["keys"](_0x1b999e["entries"])["forEach"](function (_0xcdeef2) {
        var _0x173ee0 = _0x1b999e["entries"][_0xcdeef2], _0x2da87b = _0x5b80df["entries"][_0xcdeef2];
        (!_0x2da87b || _0x173ee0["timestamp"]["getTime"]() != _0x2da87b["timestamp"]["getTime"]()) && (_0x3844db["push"](_0xcdeef2), _0x16c6fd++);
      });
      var _0x4b5359 = [];
      Object["keys"](_0x5b80df["entries"])["forEach"](function (_0x255033) {
        !_0x1b999e["entries"][_0x255033] && (_0x4b5359["push"](_0x255033), _0x16c6fd++);
      });
      if (!_0x16c6fd) return _0x253f9a(null);
      var _0x399187 = false, _0x228977 = _0x1b999e["type"] === "remote" ? _0x1b999e["db"] : _0x5b80df["db"], _0x39bc3b = _0x228977["transaction"]([_0x3eb30b["DB_STORE_NAME"]], "readwrite"), _0x3ea7dd = _0x39bc3b["objectStore"](_0x3eb30b["DB_STORE_NAME"]);
      function _0x2f4f55(_0x3c1a39) {
        if (_0x3c1a39 && !_0x399187) return _0x399187 = true, _0x253f9a(_0x3c1a39);
      }
      _0x39bc3b["onerror"] = _0x213c0f => {
        _0x2f4f55(this["error"]), _0x213c0f["preventDefault"]();
      }, _0x39bc3b["oncomplete"] = _0x2240ab => {
        !_0x399187 && _0x253f9a(null);
      }, _0x3844db["sort"]()["forEach"](_0x9bb921 => {
        _0x5b80df["type"] === "local" ? _0x3eb30b["loadRemoteEntry"](_0x3ea7dd, _0x9bb921, (_0x2ff605, _0x122266) => {
          if (_0x2ff605) return _0x2f4f55(_0x2ff605);
          _0x3eb30b["storeLocalEntry"](_0x9bb921, _0x122266, _0x2f4f55);
        }) : _0x3eb30b["loadLocalEntry"](_0x9bb921, (_0x3469fc, _0x2fe0b5) => {
          if (_0x3469fc) return _0x2f4f55(_0x3469fc);
          _0x3eb30b["storeRemoteEntry"](_0x3ea7dd, _0x9bb921, _0x2fe0b5, _0x2f4f55);
        });
      }), _0x4b5359["sort"]()["reverse"]()["forEach"](_0x5173e2 => {
        _0x5b80df["type"] === "local" ? _0x3eb30b["removeLocalEntry"](_0x5173e2, _0x2f4f55) : _0x3eb30b["removeRemoteEntry"](_0x3ea7dd, _0x5173e2, _0x2f4f55);
      });
    }}, _0x278315 = {root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: (_0x673342, _0x1d5ab0 = {}) => {
      _0x673342 = _0x7c6eff["resolve"](_0x278315["cwd"](), _0x673342);
      if (!_0x673342) return {path: "", node: null};
      var _0x3068ce = {follow_mount: true, recurse_count: 0};
      _0x1d5ab0 = Object["assign"](_0x3068ce, _0x1d5ab0);
      if (_0x1d5ab0["recurse_count"] > 8) throw new _0x278315["ErrnoError"](32);
      var _0x39a0ac = _0x353c9a["normalizeArray"](_0x673342["split"]("/")["filter"](_0xac382e => !!_0xac382e), false), _0x3b552d = _0x278315["root"], _0x32c850 = "/";
      for (var _0x1d6719 = 0; _0x1d6719 < _0x39a0ac["length"]; _0x1d6719++) {
        var _0x1a4671 = _0x1d6719 === _0x39a0ac["length"] - 1;
        if (_0x1a4671 && _0x1d5ab0["parent"]) break;
        _0x3b552d = _0x278315["lookupNode"](_0x3b552d, _0x39a0ac[_0x1d6719]), _0x32c850 = _0x353c9a["join2"](_0x32c850, _0x39a0ac[_0x1d6719]);
        _0x278315["isMountpoint"](_0x3b552d) && ((!_0x1a4671 || _0x1a4671 && _0x1d5ab0["follow_mount"]) && (_0x3b552d = _0x3b552d["mounted"]["root"]));
        if (!_0x1a4671 || _0x1d5ab0["follow"]) {
          var _0x40d5ab = 0;
          while (_0x278315["isLink"](_0x3b552d["mode"])) {
            var _0x2f4b4f = _0x278315["readlink"](_0x32c850);
            _0x32c850 = _0x7c6eff["resolve"](_0x353c9a["dirname"](_0x32c850), _0x2f4b4f);
            var _0x14e612 = _0x278315["lookupPath"](_0x32c850, {recurse_count: _0x1d5ab0["recurse_count"] + 1});
            _0x3b552d = _0x14e612["node"];
            if (_0x40d5ab++ > 40) throw new _0x278315["ErrnoError"](32);
          }
        }
      }
      return {path: _0x32c850, node: _0x3b552d};
    }, getPath: _0x4f28ab => {
      var _0x2d82fe;
      while (true) {
        if (_0x278315["isRoot"](_0x4f28ab)) {
          var _0xfe21e8 = _0x4f28ab["mount"]["mountpoint"];
          if (!_0x2d82fe) return _0xfe21e8;
          return _0xfe21e8[_0xfe21e8["length"] - 1] !== "/" ? _0xfe21e8 + "/" + _0x2d82fe : _0xfe21e8 + _0x2d82fe;
        }
        _0x2d82fe = _0x2d82fe ? _0x4f28ab["name"] + "/" + _0x2d82fe : _0x4f28ab["name"], _0x4f28ab = _0x4f28ab["parent"];
      }
    }, hashName: (_0x35c47d, _0x167fc8) => {
      var _0x21e72b = 0;
      for (var _0x1e42d9 = 0; _0x1e42d9 < _0x167fc8["length"]; _0x1e42d9++) {
        _0x21e72b = (_0x21e72b << 5) - _0x21e72b + _0x167fc8["charCodeAt"](_0x1e42d9) | 0;
      }
      return (_0x35c47d + _0x21e72b >>> 0) % _0x278315["nameTable"]["length"];
    }, hashAddNode: _0x5d255e => {
      var _0x9e2ad2 = _0x278315["hashName"](_0x5d255e["parent"]["id"], _0x5d255e["name"]);
      _0x5d255e["name_next"] = _0x278315["nameTable"][_0x9e2ad2], _0x278315["nameTable"][_0x9e2ad2] = _0x5d255e;
    }, hashRemoveNode: _0x195f65 => {
      var _0x42e8c1 = _0x278315["hashName"](_0x195f65["parent"]["id"], _0x195f65["name"]);
      if (_0x278315["nameTable"][_0x42e8c1] === _0x195f65) _0x278315["nameTable"][_0x42e8c1] = _0x195f65["name_next"]; else {
        var _0x51784a = _0x278315["nameTable"][_0x42e8c1];
        while (_0x51784a) {
          if (_0x51784a["name_next"] === _0x195f65) {
            _0x51784a["name_next"] = _0x195f65["name_next"];
            break;
          }
          _0x51784a = _0x51784a["name_next"];
        }
      }
    }, lookupNode: (_0x5906fe, _0x45a089) => {
      var _0x386db8 = _0x278315["mayLookup"](_0x5906fe);
      if (_0x386db8) throw new _0x278315["ErrnoError"](_0x386db8, _0x5906fe);
      var _0x1edf41 = _0x278315["hashName"](_0x5906fe["id"], _0x45a089);
      for (var _0x590ce2 = _0x278315["nameTable"][_0x1edf41]; _0x590ce2; _0x590ce2 = _0x590ce2["name_next"]) {
        var _0x11dbdd = _0x590ce2["name"];
        if (_0x590ce2["parent"]["id"] === _0x5906fe["id"] && _0x11dbdd === _0x45a089) return _0x590ce2;
      }
      return _0x278315["lookup"](_0x5906fe, _0x45a089);
    }, createNode: (_0x53ba61, _0x21380a, _0x799a4b, _0x44a925) => {
      var _0x51cf30 = new _0x278315["FSNode"](_0x53ba61, _0x21380a, _0x799a4b, _0x44a925);
      return _0x278315["hashAddNode"](_0x51cf30), _0x51cf30;
    }, destroyNode: _0x3dcbdd => {
      _0x278315["hashRemoveNode"](_0x3dcbdd);
    }, isRoot: _0x52717a => {
      return _0x52717a === _0x52717a["parent"];
    }, isMountpoint: _0x1e4c8b => {
      return !!_0x1e4c8b["mounted"];
    }, isFile: _0x507fcb => {
      return (_0x507fcb & 61440) === 32768;
    }, isDir: _0x41f24e => {
      return (_0x41f24e & 61440) === 16384;
    }, isLink: _0x142b07 => {
      return (_0x142b07 & 61440) === 40960;
    }, isChrdev: _0x20b6b5 => {
      return (_0x20b6b5 & 61440) === 8192;
    }, isBlkdev: _0x5d1ee6 => {
      return (_0x5d1ee6 & 61440) === 24576;
    }, isFIFO: _0x279f6a => {
      return (_0x279f6a & 61440) === 4096;
    }, isSocket: _0xed0555 => {
      return (_0xed0555 & 49152) === 49152;
    }, flagModes: {r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090}, modeStringToFlags: _0x28ba8a => {
      var _0x22044b = _0x278315["flagModes"][_0x28ba8a];
      if (typeof _0x22044b == "undefined") throw new Error("Unknown file open mode: " + _0x28ba8a);
      return _0x22044b;
    }, flagsToPermissionString: _0x20a52b => {
      var _0x1c83f3 = ["r", "w", "rw"][_0x20a52b & 3];
      return _0x20a52b & 512 && (_0x1c83f3 += "w"), _0x1c83f3;
    }, nodePermissions: (_0x13798c, _0x40e8b5) => {
      if (_0x278315["ignorePermissions"]) return 0;
      if (_0x40e8b5["includes"]("r") && !(_0x13798c["mode"] & 292)) return 2; else {
        if (_0x40e8b5["includes"]("w") && !(_0x13798c["mode"] & 146)) return 2; else {
          if (_0x40e8b5["includes"]("x") && !(_0x13798c["mode"] & 73)) return 2;
        }
      }
      return 0;
    }, mayLookup: _0x2c2d98 => {
      var _0x198729 = _0x278315["nodePermissions"](_0x2c2d98, "x");
      if (_0x198729) return _0x198729;
      if (!_0x2c2d98["node_ops"]["lookup"]) return 2;
      return 0;
    }, mayCreate: (_0x47aea3, _0x121429) => {
      try {
        var _0x3d2d30 = _0x278315["lookupNode"](_0x47aea3, _0x121429);
        return 20;
      } catch (_0x346438) {}
      return _0x278315["nodePermissions"](_0x47aea3, "wx");
    }, mayDelete: (_0x2b7049, _0x41d024, _0x974b0) => {
      var _0x17c57e;
      try {
        _0x17c57e = _0x278315["lookupNode"](_0x2b7049, _0x41d024);
      } catch (_0x5081bf) {
        return _0x5081bf["errno"];
      }
      var _0x2feb11 = _0x278315["nodePermissions"](_0x2b7049, "wx");
      if (_0x2feb11) return _0x2feb11;
      if (_0x974b0) {
        if (!_0x278315["isDir"](_0x17c57e["mode"])) return 54;
        if (_0x278315["isRoot"](_0x17c57e) || _0x278315["getPath"](_0x17c57e) === _0x278315["cwd"]()) return 10;
      } else {
        if (_0x278315["isDir"](_0x17c57e["mode"])) return 31;
      }
      return 0;
    }, mayOpen: (_0x40c42a, _0xcd0a29) => {
      if (!_0x40c42a) return 44;
      if (_0x278315["isLink"](_0x40c42a["mode"])) return 32; else {
        if (_0x278315["isDir"](_0x40c42a["mode"])) {
          if (_0x278315["flagsToPermissionString"](_0xcd0a29) !== "r" || _0xcd0a29 & 512) return 31;
        }
      }
      return _0x278315["nodePermissions"](_0x40c42a, _0x278315["flagsToPermissionString"](_0xcd0a29));
    }, MAX_OPEN_FDS: 4096, nextfd: (_0x4c1aab = 0, _0x3b16e3 = _0x278315["MAX_OPEN_FDS"]) => {
      for (var _0x456fee = _0x4c1aab; _0x456fee <= _0x3b16e3; _0x456fee++) {
        if (!_0x278315["streams"][_0x456fee]) return _0x456fee;
      }
      throw new _0x278315["ErrnoError"](33);
    }, getStream: _0x4d69bf => _0x278315["streams"][_0x4d69bf], createStream: (_0x497d5d, _0x376048, _0x410197) => {
      !_0x278315["FSStream"] && (_0x278315["FSStream"] = function () {}, _0x278315["FSStream"]["prototype"] = {object: {get: function () {
        return this["node"];
      }, set: function (_0x3fc289) {
        this["node"] = _0x3fc289;
      }}, isRead: {get: function () {
        return (this["flags"] & 2097155) !== 1;
      }}, isWrite: {get: function () {
        return (this["flags"] & 2097155) !== 0;
      }}, isAppend: {get: function () {
        return this["flags"] & 1024;
      }}});
      _0x497d5d = Object["assign"](new _0x278315["FSStream"], _0x497d5d);
      var _0x496643 = _0x278315["nextfd"](_0x376048, _0x410197);
      return _0x497d5d["fd"] = _0x496643, _0x278315["streams"][_0x496643] = _0x497d5d, _0x497d5d;
    }, closeStream: _0x377933 => {
      _0x278315["streams"][_0x377933] = null;
    }, chrdev_stream_ops: {open: _0x544dcc => {
      var _0x9cf90b = _0x278315["getDevice"](_0x544dcc["node"]["rdev"]);
      _0x544dcc["stream_ops"] = _0x9cf90b["stream_ops"], _0x544dcc["stream_ops"]["open"] && _0x544dcc["stream_ops"]["open"](_0x544dcc);
    }, llseek: () => {
      throw new _0x278315["ErrnoError"](70);
    }}, major: _0x233128 => _0x233128 >> 8, minor: _0x3547ce => _0x3547ce & 255, makedev: (_0x2113ca, _0x47bccf) => _0x2113ca << 8 | _0x47bccf, registerDevice: (_0x132d8a, _0x2de60d) => {
      _0x278315["devices"][_0x132d8a] = {stream_ops: _0x2de60d};
    }, getDevice: _0x40fe9c => _0x278315["devices"][_0x40fe9c], getMounts: _0xefba1c => {
      var _0x55d77c = [], _0xb42909 = [_0xefba1c];
      while (_0xb42909["length"]) {
        var _0x5acdd4 = _0xb42909["pop"]();
        _0x55d77c["push"](_0x5acdd4), _0xb42909["push"]["apply"](_0xb42909, _0x5acdd4["mounts"]);
      }
      return _0x55d77c;
    }, syncfs: (_0x1f7b42, _0x3e4d33) => {
      typeof _0x1f7b42 == "function" && (_0x3e4d33 = _0x1f7b42, _0x1f7b42 = false);
      _0x278315["syncFSRequests"]++;
      _0x278315["syncFSRequests"] > 1 && _0x119168("warning: " + _0x278315["syncFSRequests"] + " FS.syncfs operations in flight at once, probably just doing extra work");
      var _0x1df0ba = _0x278315["getMounts"](_0x278315["root"]["mount"]), _0x2c3b81 = 0;
      function _0x17bbb1(_0x58a7b1) {
        return _0x278315["syncFSRequests"]--, _0x3e4d33(_0x58a7b1);
      }
      function _0x565678(_0x34bbfe) {
        if (_0x34bbfe) {
          if (!_0x565678["errored"]) return _0x565678["errored"] = true, _0x17bbb1(_0x34bbfe);
          return;
        }
        ++_0x2c3b81 >= _0x1df0ba["length"] && _0x17bbb1(null);
      }
      _0x1df0ba["forEach"](_0x39c727 => {
        if (!_0x39c727["type"]["syncfs"]) return _0x565678(null);
        _0x39c727["type"]["syncfs"](_0x39c727, _0x1f7b42, _0x565678);
      });
    }, mount: (_0x23f229, _0x3db249, _0x255e95) => {
      var _0x32fae1 = _0x255e95 === "/", _0x2a1ede = !_0x255e95, _0x20f49a;
      if (_0x32fae1 && _0x278315["root"]) throw new _0x278315["ErrnoError"](10); else {
        if (!_0x32fae1 && !_0x2a1ede) {
          var _0x22de7d = _0x278315["lookupPath"](_0x255e95, {follow_mount: false});
          _0x255e95 = _0x22de7d["path"], _0x20f49a = _0x22de7d["node"];
          if (_0x278315["isMountpoint"](_0x20f49a)) throw new _0x278315["ErrnoError"](10);
          if (!_0x278315["isDir"](_0x20f49a["mode"])) throw new _0x278315["ErrnoError"](54);
        }
      }
      var _0x1ee8e1 = {type: _0x23f229, opts: _0x3db249, mountpoint: _0x255e95, mounts: []}, _0x21e2e8 = _0x23f229["mount"](_0x1ee8e1);
      _0x21e2e8["mount"] = _0x1ee8e1, _0x1ee8e1["root"] = _0x21e2e8;
      if (_0x32fae1) _0x278315["root"] = _0x21e2e8; else _0x20f49a && (_0x20f49a["mounted"] = _0x1ee8e1, _0x20f49a["mount"] && _0x20f49a["mount"]["mounts"]["push"](_0x1ee8e1));
      return _0x21e2e8;
    }, unmount: _0x5daab7 => {
      var _0x58e5c5 = _0x278315["lookupPath"](_0x5daab7, {follow_mount: false});
      if (!_0x278315["isMountpoint"](_0x58e5c5["node"])) throw new _0x278315["ErrnoError"](28);
      var _0x5562dc = _0x58e5c5["node"], _0x48fde1 = _0x5562dc["mounted"], _0x2a0ee8 = _0x278315["getMounts"](_0x48fde1);
      Object["keys"](_0x278315["nameTable"])["forEach"](_0x3aef40 => {
        var _0x55f972 = _0x278315["nameTable"][_0x3aef40];
        while (_0x55f972) {
          var _0x38d29c = _0x55f972["name_next"];
          _0x2a0ee8["includes"](_0x55f972["mount"]) && _0x278315["destroyNode"](_0x55f972), _0x55f972 = _0x38d29c;
        }
      }), _0x5562dc["mounted"] = null;
      var _0x22edf4 = _0x5562dc["mount"]["mounts"]["indexOf"](_0x48fde1);
      _0x5562dc["mount"]["mounts"]["splice"](_0x22edf4, 1);
    }, lookup: (_0x1b4243, _0x393b35) => {
      return _0x1b4243["node_ops"]["lookup"](_0x1b4243, _0x393b35);
    }, mknod: (_0x4f00af, _0x117b18, _0x4f107a) => {
      var _0x4d9611 = _0x278315["lookupPath"](_0x4f00af, {parent: true}), _0x59f849 = _0x4d9611["node"], _0x4930c2 = _0x353c9a["basename"](_0x4f00af);
      if (!_0x4930c2 || _0x4930c2 === "." || _0x4930c2 === "..") throw new _0x278315["ErrnoError"](28);
      var _0x3e0b59 = _0x278315["mayCreate"](_0x59f849, _0x4930c2);
      if (_0x3e0b59) throw new _0x278315["ErrnoError"](_0x3e0b59);
      if (!_0x59f849["node_ops"]["mknod"]) throw new _0x278315["ErrnoError"](63);
      return _0x59f849["node_ops"]["mknod"](_0x59f849, _0x4930c2, _0x117b18, _0x4f107a);
    }, create: (_0x19c544, _0x5eb3cb) => {
      return _0x5eb3cb = _0x5eb3cb !== undefined ? _0x5eb3cb : 438, _0x5eb3cb &= 4095, _0x5eb3cb |= 32768, _0x278315["mknod"](_0x19c544, _0x5eb3cb, 0);
    }, mkdir: (_0x123c8b, _0x188096) => {
      return _0x188096 = _0x188096 !== undefined ? _0x188096 : 511, _0x188096 &= 1023, _0x188096 |= 16384, _0x278315["mknod"](_0x123c8b, _0x188096, 0);
    }, mkdirTree: (_0x54c44e, _0x1a9fe0) => {
      var _0x590bbe = _0x54c44e["split"]("/"), _0x35558c = "";
      for (var _0x39f796 = 0; _0x39f796 < _0x590bbe["length"]; ++_0x39f796) {
        if (!_0x590bbe[_0x39f796]) continue;
        _0x35558c += "/" + _0x590bbe[_0x39f796];
        try {
          _0x278315["mkdir"](_0x35558c, _0x1a9fe0);
        } catch (_0x323816) {
          if (_0x323816["errno"] != 20) throw _0x323816;
        }
      }
    }, mkdev: (_0x15dc57, _0x558e4d, _0x48af67) => {
      return typeof _0x48af67 == "undefined" && (_0x48af67 = _0x558e4d, _0x558e4d = 438), _0x558e4d |= 8192, _0x278315["mknod"](_0x15dc57, _0x558e4d, _0x48af67);
    }, symlink: (_0xdc14f5, _0x8ab1b3) => {
      if (!_0x7c6eff["resolve"](_0xdc14f5)) throw new _0x278315["ErrnoError"](44);
      var _0xcd5c63 = _0x278315["lookupPath"](_0x8ab1b3, {parent: true}), _0x528fae = _0xcd5c63["node"];
      if (!_0x528fae) throw new _0x278315["ErrnoError"](44);
      var _0x14ef16 = _0x353c9a["basename"](_0x8ab1b3), _0x100bfe = _0x278315["mayCreate"](_0x528fae, _0x14ef16);
      if (_0x100bfe) throw new _0x278315["ErrnoError"](_0x100bfe);
      if (!_0x528fae["node_ops"]["symlink"]) throw new _0x278315["ErrnoError"](63);
      return _0x528fae["node_ops"]["symlink"](_0x528fae, _0x14ef16, _0xdc14f5);
    }, rename: (_0x6979bf, _0x598577) => {
      var _0x5042a2 = _0x353c9a["dirname"](_0x6979bf), _0x865e69 = _0x353c9a["dirname"](_0x598577), _0x1488de = _0x353c9a["basename"](_0x6979bf), _0x199153 = _0x353c9a["basename"](_0x598577), _0x5d2e54, _0x68e79f, _0x421add;
      _0x5d2e54 = _0x278315["lookupPath"](_0x6979bf, {parent: true}), _0x68e79f = _0x5d2e54["node"], _0x5d2e54 = _0x278315["lookupPath"](_0x598577, {parent: true}), _0x421add = _0x5d2e54["node"];
      if (!_0x68e79f || !_0x421add) throw new _0x278315["ErrnoError"](44);
      if (_0x68e79f["mount"] !== _0x421add["mount"]) throw new _0x278315["ErrnoError"](75);
      var _0x56b43a = _0x278315["lookupNode"](_0x68e79f, _0x1488de), _0x5d5005 = _0x7c6eff["relative"](_0x6979bf, _0x865e69);
      if (_0x5d5005["charAt"](0) !== ".") throw new _0x278315["ErrnoError"](28);
      _0x5d5005 = _0x7c6eff["relative"](_0x598577, _0x5042a2);
      if (_0x5d5005["charAt"](0) !== ".") throw new _0x278315["ErrnoError"](55);
      var _0xa750d;
      try {
        _0xa750d = _0x278315["lookupNode"](_0x421add, _0x199153);
      } catch (_0x603a1) {}
      if (_0x56b43a === _0xa750d) return;
      var _0x310d10 = _0x278315["isDir"](_0x56b43a["mode"]), _0xc38c7e = _0x278315["mayDelete"](_0x68e79f, _0x1488de, _0x310d10);
      if (_0xc38c7e) throw new _0x278315["ErrnoError"](_0xc38c7e);
      _0xc38c7e = _0xa750d ? _0x278315["mayDelete"](_0x421add, _0x199153, _0x310d10) : _0x278315["mayCreate"](_0x421add, _0x199153);
      if (_0xc38c7e) throw new _0x278315["ErrnoError"](_0xc38c7e);
      if (!_0x68e79f["node_ops"]["rename"]) throw new _0x278315["ErrnoError"](63);
      if (_0x278315["isMountpoint"](_0x56b43a) || _0xa750d && _0x278315["isMountpoint"](_0xa750d)) throw new _0x278315["ErrnoError"](10);
      if (_0x421add !== _0x68e79f) {
        _0xc38c7e = _0x278315["nodePermissions"](_0x68e79f, "w");
        if (_0xc38c7e) throw new _0x278315["ErrnoError"](_0xc38c7e);
      }
      _0x278315["hashRemoveNode"](_0x56b43a);
      try {
        _0x68e79f["node_ops"]["rename"](_0x56b43a, _0x421add, _0x199153);
      } catch (_0x2d8fdc) {
        throw _0x2d8fdc;
      } finally {
        _0x278315["hashAddNode"](_0x56b43a);
      }
    }, rmdir: _0x1e9074 => {
      var _0x3249a9 = _0x278315["lookupPath"](_0x1e9074, {parent: true}), _0x30a495 = _0x3249a9["node"], _0x9cd452 = _0x353c9a["basename"](_0x1e9074), _0x3842bd = _0x278315["lookupNode"](_0x30a495, _0x9cd452), _0x50ed1a = _0x278315["mayDelete"](_0x30a495, _0x9cd452, true);
      if (_0x50ed1a) throw new _0x278315["ErrnoError"](_0x50ed1a);
      if (!_0x30a495["node_ops"]["rmdir"]) throw new _0x278315["ErrnoError"](63);
      if (_0x278315["isMountpoint"](_0x3842bd)) throw new _0x278315["ErrnoError"](10);
      _0x30a495["node_ops"]["rmdir"](_0x30a495, _0x9cd452), _0x278315["destroyNode"](_0x3842bd);
    }, readdir: _0xd823c2 => {
      var _0x5f11ba = _0x278315["lookupPath"](_0xd823c2, {follow: true}), _0x408799 = _0x5f11ba["node"];
      if (!_0x408799["node_ops"]["readdir"]) throw new _0x278315["ErrnoError"](54);
      return _0x408799["node_ops"]["readdir"](_0x408799);
    }, unlink: _0x445a28 => {
      var _0x3bf94c = _0x278315["lookupPath"](_0x445a28, {parent: true}), _0x5adc05 = _0x3bf94c["node"];
      if (!_0x5adc05) throw new _0x278315["ErrnoError"](44);
      var _0x2da442 = _0x353c9a["basename"](_0x445a28), _0x32a923 = _0x278315["lookupNode"](_0x5adc05, _0x2da442), _0x179b5c = _0x278315["mayDelete"](_0x5adc05, _0x2da442, false);
      if (_0x179b5c) throw new _0x278315["ErrnoError"](_0x179b5c);
      if (!_0x5adc05["node_ops"]["unlink"]) throw new _0x278315["ErrnoError"](63);
      if (_0x278315["isMountpoint"](_0x32a923)) throw new _0x278315["ErrnoError"](10);
      _0x5adc05["node_ops"]["unlink"](_0x5adc05, _0x2da442), _0x278315["destroyNode"](_0x32a923);
    }, readlink: _0x3a8a07 => {
      var _0x34ea7e = _0x278315["lookupPath"](_0x3a8a07), _0x2642c7 = _0x34ea7e["node"];
      if (!_0x2642c7) throw new _0x278315["ErrnoError"](44);
      if (!_0x2642c7["node_ops"]["readlink"]) throw new _0x278315["ErrnoError"](28);
      return _0x7c6eff["resolve"](_0x278315["getPath"](_0x2642c7["parent"]), _0x2642c7["node_ops"]["readlink"](_0x2642c7));
    }, stat: (_0x5943d7, _0x30f771) => {
      var _0x1a96e0 = _0x278315["lookupPath"](_0x5943d7, {follow: !_0x30f771}), _0x28793c = _0x1a96e0["node"];
      if (!_0x28793c) throw new _0x278315["ErrnoError"](44);
      if (!_0x28793c["node_ops"]["getattr"]) throw new _0x278315["ErrnoError"](63);
      return _0x28793c["node_ops"]["getattr"](_0x28793c);
    }, lstat: _0x27f8c7 => {
      return _0x278315["stat"](_0x27f8c7, true);
    }, chmod: (_0x330683, _0x15083c, _0x2f63a7) => {
      var _0x2948fb;
      if (typeof _0x330683 == "string") {
        var _0x5e2036 = _0x278315["lookupPath"](_0x330683, {follow: !_0x2f63a7});
        _0x2948fb = _0x5e2036["node"];
      } else _0x2948fb = _0x330683;
      if (!_0x2948fb["node_ops"]["setattr"]) throw new _0x278315["ErrnoError"](63);
      _0x2948fb["node_ops"]["setattr"](_0x2948fb, {mode: _0x15083c & 4095 | _0x2948fb["mode"] & -4096, timestamp: Date["now"]()});
    }, lchmod: (_0x233a36, _0x107bd9) => {
      _0x278315["chmod"](_0x233a36, _0x107bd9, true);
    }, fchmod: (_0x17e5dc, _0x1b9a2d) => {
      var _0x239d00 = _0x278315["getStream"](_0x17e5dc);
      if (!_0x239d00) throw new _0x278315["ErrnoError"](8);
      _0x278315["chmod"](_0x239d00["node"], _0x1b9a2d);
    }, chown: (_0x2906e1, _0x3489f4, _0x526494, _0x334451) => {
      var _0x5e3336;
      if (typeof _0x2906e1 == "string") {
        var _0x2f9d6a = _0x278315["lookupPath"](_0x2906e1, {follow: !_0x334451});
        _0x5e3336 = _0x2f9d6a["node"];
      } else _0x5e3336 = _0x2906e1;
      if (!_0x5e3336["node_ops"]["setattr"]) throw new _0x278315["ErrnoError"](63);
      _0x5e3336["node_ops"]["setattr"](_0x5e3336, {timestamp: Date["now"]()});
    }, lchown: (_0x5db2da, _0x48ef17, _0x84d647) => {
      _0x278315["chown"](_0x5db2da, _0x48ef17, _0x84d647, true);
    }, fchown: (_0x5317e9, _0x58ef93, _0x516655) => {
      var _0x4f08c1 = _0x278315["getStream"](_0x5317e9);
      if (!_0x4f08c1) throw new _0x278315["ErrnoError"](8);
      _0x278315["chown"](_0x4f08c1["node"], _0x58ef93, _0x516655);
    }, truncate: (_0x5161ec, _0x3b927b) => {
      if (_0x3b927b < 0) throw new _0x278315["ErrnoError"](28);
      var _0x390b72;
      if (typeof _0x5161ec == "string") {
        var _0x4de6ff = _0x278315["lookupPath"](_0x5161ec, {follow: true});
        _0x390b72 = _0x4de6ff["node"];
      } else _0x390b72 = _0x5161ec;
      if (!_0x390b72["node_ops"]["setattr"]) throw new _0x278315["ErrnoError"](63);
      if (_0x278315["isDir"](_0x390b72["mode"])) throw new _0x278315["ErrnoError"](31);
      if (!_0x278315["isFile"](_0x390b72["mode"])) throw new _0x278315["ErrnoError"](28);
      var _0x25c01a = _0x278315["nodePermissions"](_0x390b72, "w");
      if (_0x25c01a) throw new _0x278315["ErrnoError"](_0x25c01a);
      _0x390b72["node_ops"]["setattr"](_0x390b72, {size: _0x3b927b, timestamp: Date["now"]()});
    }, ftruncate: (_0x31b475, _0x39704b) => {
      var _0x26e344 = _0x278315["getStream"](_0x31b475);
      if (!_0x26e344) throw new _0x278315["ErrnoError"](8);
      if ((_0x26e344["flags"] & 2097155) === 0) throw new _0x278315["ErrnoError"](28);
      _0x278315["truncate"](_0x26e344["node"], _0x39704b);
    }, utime: (_0x4e7242, _0x65fa13, _0x144a09) => {
      var _0x26a212 = _0x278315["lookupPath"](_0x4e7242, {follow: true}), _0x8950a3 = _0x26a212["node"];
      _0x8950a3["node_ops"]["setattr"](_0x8950a3, {timestamp: Math["max"](_0x65fa13, _0x144a09)});
    }, open: (_0x2127df, _0x312bd4, _0x3ce89f, _0x7aac99, _0x85a53e) => {
      if (_0x2127df === "") throw new _0x278315["ErrnoError"](44);
      _0x312bd4 = typeof _0x312bd4 == "string" ? _0x278315["modeStringToFlags"](_0x312bd4) : _0x312bd4, _0x3ce89f = typeof _0x3ce89f == "undefined" ? 438 : _0x3ce89f;
      _0x312bd4 & 64 ? _0x3ce89f = _0x3ce89f & 4095 | 32768 : _0x3ce89f = 0;
      var _0x23bf6c;
      if (typeof _0x2127df == "object") _0x23bf6c = _0x2127df; else {
        _0x2127df = _0x353c9a["normalize"](_0x2127df);
        try {
          var _0x1c68dd = _0x278315["lookupPath"](_0x2127df, {follow: !(_0x312bd4 & 131072)});
          _0x23bf6c = _0x1c68dd["node"];
        } catch (_0x230345) {}
      }
      var _0x2a4c95 = false;
      if (_0x312bd4 & 64) {
        if (_0x23bf6c) {
          if (_0x312bd4 & 128) throw new _0x278315["ErrnoError"](20);
        } else _0x23bf6c = _0x278315["mknod"](_0x2127df, _0x3ce89f, 0), _0x2a4c95 = true;
      }
      if (!_0x23bf6c) throw new _0x278315["ErrnoError"](44);
      _0x278315["isChrdev"](_0x23bf6c["mode"]) && (_0x312bd4 &= -513);
      if (_0x312bd4 & 65536 && !_0x278315["isDir"](_0x23bf6c["mode"])) throw new _0x278315["ErrnoError"](54);
      if (!_0x2a4c95) {
        var _0x16fbe7 = _0x278315["mayOpen"](_0x23bf6c, _0x312bd4);
        if (_0x16fbe7) throw new _0x278315["ErrnoError"](_0x16fbe7);
      }
      _0x312bd4 & 512 && _0x278315["truncate"](_0x23bf6c, 0);
      _0x312bd4 &= -131713;
      var _0x2bde49 = _0x278315["createStream"]({node: _0x23bf6c, path: _0x278315["getPath"](_0x23bf6c), flags: _0x312bd4, seekable: true, position: 0, stream_ops: _0x23bf6c["stream_ops"], ungotten: [], error: false}, _0x7aac99, _0x85a53e);
      _0x2bde49["stream_ops"]["open"] && _0x2bde49["stream_ops"]["open"](_0x2bde49);
      if (_0x4bcfe1["logReadFiles"] && !(_0x312bd4 & 1)) {
        if (!_0x278315["readFiles"]) _0x278315["readFiles"] = {};
        !(_0x2127df in _0x278315["readFiles"]) && (_0x278315["readFiles"][_0x2127df] = 1);
      }
      return _0x2bde49;
    }, close: _0x5731c5 => {
      if (_0x278315["isClosed"](_0x5731c5)) throw new _0x278315["ErrnoError"](8);
      if (_0x5731c5["getdents"]) _0x5731c5["getdents"] = null;
      try {
        _0x5731c5["stream_ops"]["close"] && _0x5731c5["stream_ops"]["close"](_0x5731c5);
      } catch (_0x4384d3) {
        throw _0x4384d3;
      } finally {
        _0x278315["closeStream"](_0x5731c5["fd"]);
      }
      _0x5731c5["fd"] = null;
    }, isClosed: _0xe32da => {
      return _0xe32da["fd"] === null;
    }, llseek: (_0x41b4c8, _0x213704, _0x415f1a) => {
      if (_0x278315["isClosed"](_0x41b4c8)) throw new _0x278315["ErrnoError"](8);
      if (!_0x41b4c8["seekable"] || !_0x41b4c8["stream_ops"]["llseek"]) throw new _0x278315["ErrnoError"](70);
      if (_0x415f1a != 0 && _0x415f1a != 1 && _0x415f1a != 2) throw new _0x278315["ErrnoError"](28);
      return _0x41b4c8["position"] = _0x41b4c8["stream_ops"]["llseek"](_0x41b4c8, _0x213704, _0x415f1a), _0x41b4c8["ungotten"] = [], _0x41b4c8["position"];
    }, read: (_0x31c5fc, _0x5ae34f, _0x5ae412, _0x5a4bb2, _0x5799b6) => {
      if (_0x5a4bb2 < 0 || _0x5799b6 < 0) throw new _0x278315["ErrnoError"](28);
      if (_0x278315["isClosed"](_0x31c5fc)) throw new _0x278315["ErrnoError"](8);
      if ((_0x31c5fc["flags"] & 2097155) === 1) throw new _0x278315["ErrnoError"](8);
      if (_0x278315["isDir"](_0x31c5fc["node"]["mode"])) throw new _0x278315["ErrnoError"](31);
      if (!_0x31c5fc["stream_ops"]["read"]) throw new _0x278315["ErrnoError"](28);
      var _0x5662ad = typeof _0x5799b6 != "undefined";
      if (!_0x5662ad) _0x5799b6 = _0x31c5fc["position"]; else {
        if (!_0x31c5fc["seekable"]) throw new _0x278315["ErrnoError"](70);
      }
      var _0x41c322 = _0x31c5fc["stream_ops"]["read"](_0x31c5fc, _0x5ae34f, _0x5ae412, _0x5a4bb2, _0x5799b6);
      if (!_0x5662ad) _0x31c5fc["position"] += _0x41c322;
      return _0x41c322;
    }, write: (_0x2fded3, _0x52e4b5, _0x1a1b0e, _0x29612c, _0x1efcd7, _0x3f8fbd) => {
      if (_0x29612c < 0 || _0x1efcd7 < 0) throw new _0x278315["ErrnoError"](28);
      if (_0x278315["isClosed"](_0x2fded3)) throw new _0x278315["ErrnoError"](8);
      if ((_0x2fded3["flags"] & 2097155) === 0) throw new _0x278315["ErrnoError"](8);
      if (_0x278315["isDir"](_0x2fded3["node"]["mode"])) throw new _0x278315["ErrnoError"](31);
      if (!_0x2fded3["stream_ops"]["write"]) throw new _0x278315["ErrnoError"](28);
      _0x2fded3["seekable"] && _0x2fded3["flags"] & 1024 && _0x278315["llseek"](_0x2fded3, 0, 2);
      var _0x5999ea = typeof _0x1efcd7 != "undefined";
      if (!_0x5999ea) _0x1efcd7 = _0x2fded3["position"]; else {
        if (!_0x2fded3["seekable"]) throw new _0x278315["ErrnoError"](70);
      }
      var _0x29f00e = _0x2fded3["stream_ops"]["write"](_0x2fded3, _0x52e4b5, _0x1a1b0e, _0x29612c, _0x1efcd7, _0x3f8fbd);
      if (!_0x5999ea) _0x2fded3["position"] += _0x29f00e;
      return _0x29f00e;
    }, allocate: (_0x1b2486, _0x171e3b, _0x9925d7) => {
      if (_0x278315["isClosed"](_0x1b2486)) throw new _0x278315["ErrnoError"](8);
      if (_0x171e3b < 0 || _0x9925d7 <= 0) throw new _0x278315["ErrnoError"](28);
      if ((_0x1b2486["flags"] & 2097155) === 0) throw new _0x278315["ErrnoError"](8);
      if (!_0x278315["isFile"](_0x1b2486["node"]["mode"]) && !_0x278315["isDir"](_0x1b2486["node"]["mode"])) throw new _0x278315["ErrnoError"](43);
      if (!_0x1b2486["stream_ops"]["allocate"]) throw new _0x278315["ErrnoError"](138);
      _0x1b2486["stream_ops"]["allocate"](_0x1b2486, _0x171e3b, _0x9925d7);
    }, mmap: (_0x25d5ec, _0x174b6d, _0x33b524, _0x5b0956, _0x59bd3f, _0x115c70) => {
      if ((_0x59bd3f & 2) !== 0 && (_0x115c70 & 2) === 0 && (_0x25d5ec["flags"] & 2097155) !== 2) throw new _0x278315["ErrnoError"](2);
      if ((_0x25d5ec["flags"] & 2097155) === 1) throw new _0x278315["ErrnoError"](2);
      if (!_0x25d5ec["stream_ops"]["mmap"]) throw new _0x278315["ErrnoError"](43);
      return _0x25d5ec["stream_ops"]["mmap"](_0x25d5ec, _0x174b6d, _0x33b524, _0x5b0956, _0x59bd3f, _0x115c70);
    }, msync: (_0x2f606e, _0x2f1022, _0xd33086, _0x31dbfb, _0x57dcb2) => {
      if (!_0x2f606e || !_0x2f606e["stream_ops"]["msync"]) return 0;
      return _0x2f606e["stream_ops"]["msync"](_0x2f606e, _0x2f1022, _0xd33086, _0x31dbfb, _0x57dcb2);
    }, munmap: _0x1291a0 => 0, ioctl: (_0x513319, _0x5f127f, _0x262b0d) => {
      if (!_0x513319["stream_ops"]["ioctl"]) throw new _0x278315["ErrnoError"](59);
      return _0x513319["stream_ops"]["ioctl"](_0x513319, _0x5f127f, _0x262b0d);
    }, readFile: (_0x30c489, _0x54612f = {}) => {
      _0x54612f["flags"] = _0x54612f["flags"] || 0, _0x54612f["encoding"] = _0x54612f["encoding"] || "binary";
      if (_0x54612f["encoding"] !== "utf8" && _0x54612f["encoding"] !== "binary") throw new Error('Invalid encoding type "' + _0x54612f["encoding"] + '"');
      var _0x391e67, _0x3a3802 = _0x278315["open"](_0x30c489, _0x54612f["flags"]), _0x2a8425 = _0x278315["stat"](_0x30c489), _0x264ad2 = _0x2a8425["size"], _0x53933b = new Uint8Array(_0x264ad2);
      _0x278315["read"](_0x3a3802, _0x53933b, 0, _0x264ad2, 0);
      if (_0x54612f["encoding"] === "utf8") _0x391e67 = _0x344b4c(_0x53933b, 0); else _0x54612f["encoding"] === "binary" && (_0x391e67 = _0x53933b);
      return _0x278315["close"](_0x3a3802), _0x391e67;
    }, writeFile: (_0x336ebe, _0x4cb78b, _0x1baaf4 = {}) => {
      _0x1baaf4["flags"] = _0x1baaf4["flags"] || 577;
      var _0x5b3adf = _0x278315["open"](_0x336ebe, _0x1baaf4["flags"], _0x1baaf4["mode"]);
      if (typeof _0x4cb78b == "string") {
        var _0x2437a8 = new Uint8Array(_0x4d063a(_0x4cb78b) + 1), _0x7bc888 = _0x2f86f3(_0x4cb78b, _0x2437a8, 0, _0x2437a8["length"]);
        _0x278315["write"](_0x5b3adf, _0x2437a8, 0, _0x7bc888, undefined, _0x1baaf4["canOwn"]);
      } else {
        if (ArrayBuffer["isView"](_0x4cb78b)) _0x278315["write"](_0x5b3adf, _0x4cb78b, 0, _0x4cb78b["byteLength"], undefined, _0x1baaf4["canOwn"]); else throw new Error("Unsupported data type");
      }
      _0x278315["close"](_0x5b3adf);
    }, cwd: () => _0x278315["currentPath"], chdir: _0x5c5995 => {
      var _0x47fe3e = _0x278315["lookupPath"](_0x5c5995, {follow: true});
      if (_0x47fe3e["node"] === null) throw new _0x278315["ErrnoError"](44);
      if (!_0x278315["isDir"](_0x47fe3e["node"]["mode"])) throw new _0x278315["ErrnoError"](54);
      var _0x4c931a = _0x278315["nodePermissions"](_0x47fe3e["node"], "x");
      if (_0x4c931a) throw new _0x278315["ErrnoError"](_0x4c931a);
      _0x278315["currentPath"] = _0x47fe3e["path"];
    }, createDefaultDirectories: () => {
      _0x278315["mkdir"]("/tmp"), _0x278315["mkdir"]("/home"), _0x278315["mkdir"]("/home/web_user");
    }, createDefaultDevices: () => {
      _0x278315["mkdir"]("/dev"), _0x278315["registerDevice"](_0x278315["makedev"](1, 3), {read: () => 0, write: (_0x286c05, _0x248636, _0x52b5fe, _0x1b571d, _0x112845) => _0x1b571d}), _0x278315["mkdev"]("/dev/null", _0x278315["makedev"](1, 3)), _0x4f6acc["register"](_0x278315["makedev"](5, 0), _0x4f6acc["default_tty_ops"]), _0x4f6acc["register"](_0x278315["makedev"](6, 0), _0x4f6acc["default_tty1_ops"]), _0x278315["mkdev"]("/dev/tty", _0x278315["makedev"](5, 0)), _0x278315["mkdev"]("/dev/tty1", _0x278315["makedev"](6, 0));
      var _0x38b536 = _0xe6f731();
      _0x278315["createDevice"]("/dev", "random", _0x38b536), _0x278315["createDevice"]("/dev", "urandom", _0x38b536), _0x278315["mkdir"]("/dev/shm"), _0x278315["mkdir"]("/dev/shm/tmp");
    }, createSpecialDirectories: () => {
      _0x278315["mkdir"]("/proc");
      var _0x1a3fc4 = _0x278315["mkdir"]("/proc/self");
      _0x278315["mkdir"]("/proc/self/fd"), _0x278315["mount"]({mount: () => {
        var _0x510fa4 = _0x278315["createNode"](_0x1a3fc4, "fd", 16895, 73);
        return _0x510fa4["node_ops"] = {lookup: (_0x21810f, _0x3fa261) => {
          var _0x1b8371 = +_0x3fa261, _0x15b5ce = _0x278315["getStream"](_0x1b8371);
          if (!_0x15b5ce) throw new _0x278315["ErrnoError"](8);
          var _0x5699ac = {parent: null, mount: {mountpoint: "fake"}, node_ops: {readlink: () => _0x15b5ce["path"]}};
          return _0x5699ac["parent"] = _0x5699ac, _0x5699ac;
        }}, _0x510fa4;
      }}, {}, "/proc/self/fd");
    }, createStandardStreams: () => {
      _0x4bcfe1["stdin"] ? _0x278315["createDevice"]("/dev", "stdin", _0x4bcfe1["stdin"]) : _0x278315["symlink"]("/dev/tty", "/dev/stdin");
      _0x4bcfe1["stdout"] ? _0x278315["createDevice"]("/dev", "stdout", null, _0x4bcfe1["stdout"]) : _0x278315["symlink"]("/dev/tty", "/dev/stdout");
      _0x4bcfe1["stderr"] ? _0x278315["createDevice"]("/dev", "stderr", null, _0x4bcfe1["stderr"]) : _0x278315["symlink"]("/dev/tty1", "/dev/stderr");
      var _0x351bf2 = _0x278315["open"]("/dev/stdin", 0), _0x44850d = _0x278315["open"]("/dev/stdout", 1), _0x79fda8 = _0x278315["open"]("/dev/stderr", 1);
    }, ensureErrnoError: () => {
      if (_0x278315["ErrnoError"]) return;
      _0x278315["ErrnoError"] = function _0x487642(_0x20b99f, _0x40439b) {
        this["node"] = _0x40439b, this["setErrno"] = function (_0x32a333) {
          this["errno"] = _0x32a333;
        }, this["setErrno"](_0x20b99f), this["message"] = "FS error";
      }, _0x278315["ErrnoError"]["prototype"] = new Error, _0x278315["ErrnoError"]["prototype"]["constructor"] = _0x278315["ErrnoError"], [44]["forEach"](_0x378764 => {
        _0x278315["genericErrors"][_0x378764] = new _0x278315["ErrnoError"](_0x378764), _0x278315["genericErrors"][_0x378764]["stack"] = "<generic error, no stack>";
      });
    }, staticInit: () => {
      _0x278315["ensureErrnoError"](), _0x278315["nameTable"] = new Array(4096), _0x278315["mount"](_0x187d72, {}, "/"), _0x278315["createDefaultDirectories"](), _0x278315["createDefaultDevices"](), _0x278315["createSpecialDirectories"](), _0x278315["filesystems"] = {MEMFS: _0x187d72, IDBFS: _0x3eb30b};
    }, init: (_0x3dd63e, _0xfde82, _0x8f6e4) => {
      _0x278315["init"]["initialized"] = true, _0x278315["ensureErrnoError"](), _0x4bcfe1["stdin"] = _0x3dd63e || _0x4bcfe1["stdin"], _0x4bcfe1["stdout"] = _0xfde82 || _0x4bcfe1["stdout"], _0x4bcfe1["stderr"] = _0x8f6e4 || _0x4bcfe1["stderr"], _0x278315["createStandardStreams"]();
    }, quit: () => {
      _0x278315["init"]["initialized"] = false;
      for (var _0x29e461 = 0; _0x29e461 < _0x278315["streams"]["length"]; _0x29e461++) {
        var _0x3e878f = _0x278315["streams"][_0x29e461];
        if (!_0x3e878f) continue;
        _0x278315["close"](_0x3e878f);
      }
    }, getMode: (_0x62eb3d, _0x5368d1) => {
      var _0x58dd84 = 0;
      if (_0x62eb3d) _0x58dd84 |= 365;
      if (_0x5368d1) _0x58dd84 |= 146;
      return _0x58dd84;
    }, findObject: (_0x42747c, _0x5d0c50) => {
      var _0xe0f7ba = _0x278315["analyzePath"](_0x42747c, _0x5d0c50);
      return _0xe0f7ba["exists"] ? _0xe0f7ba["object"] : null;
    }, analyzePath: (_0x47324a, _0x3c5d4f) => {
      try {
        var _0x3ec250 = _0x278315["lookupPath"](_0x47324a, {follow: !_0x3c5d4f});
        _0x47324a = _0x3ec250["path"];
      } catch (_0x3199f) {}
      var _0x5dc587 = {isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null};
      try {
        var _0x3ec250 = _0x278315["lookupPath"](_0x47324a, {parent: true});
        _0x5dc587["parentExists"] = true, _0x5dc587["parentPath"] = _0x3ec250["path"], _0x5dc587["parentObject"] = _0x3ec250["node"], _0x5dc587["name"] = _0x353c9a["basename"](_0x47324a), _0x3ec250 = _0x278315["lookupPath"](_0x47324a, {follow: !_0x3c5d4f}), _0x5dc587["exists"] = true, _0x5dc587["path"] = _0x3ec250["path"], _0x5dc587["object"] = _0x3ec250["node"], _0x5dc587["name"] = _0x3ec250["node"]["name"], _0x5dc587["isRoot"] = _0x3ec250["path"] === "/";
      } catch (_0x25d571) {
        _0x5dc587["error"] = _0x25d571["errno"];
      }
      return _0x5dc587;
    }, createPath: (_0x3b2ff6, _0x1b96df, _0x4da181, _0x9bf5c) => {
      _0x3b2ff6 = typeof _0x3b2ff6 == "string" ? _0x3b2ff6 : _0x278315["getPath"](_0x3b2ff6);
      var _0x4b9386 = _0x1b96df["split"]("/")["reverse"]();
      while (_0x4b9386["length"]) {
        var _0x117de4 = _0x4b9386["pop"]();
        if (!_0x117de4) continue;
        var _0x3b231a = _0x353c9a["join2"](_0x3b2ff6, _0x117de4);
        try {
          _0x278315["mkdir"](_0x3b231a);
        } catch (_0x20d1d9) {}
        _0x3b2ff6 = _0x3b231a;
      }
      return _0x3b231a;
    }, createFile: (_0x20871d, _0x44e180, _0x1246b0, _0x2bc879, _0x3e03e1) => {
      var _0x45f178 = _0x353c9a["join2"](typeof _0x20871d == "string" ? _0x20871d : _0x278315["getPath"](_0x20871d), _0x44e180), _0x3200cf = _0x278315["getMode"](_0x2bc879, _0x3e03e1);
      return _0x278315["create"](_0x45f178, _0x3200cf);
    }, createDataFile: (_0x25750a, _0x2390c6, _0x1fd75a, _0x352509, _0x721f1b, _0x48a049) => {
      var _0x487ef4 = _0x2390c6;
      _0x25750a && (_0x25750a = typeof _0x25750a == "string" ? _0x25750a : _0x278315["getPath"](_0x25750a), _0x487ef4 = _0x2390c6 ? _0x353c9a["join2"](_0x25750a, _0x2390c6) : _0x25750a);
      var _0x1d16bd = _0x278315["getMode"](_0x352509, _0x721f1b), _0x1bd00a = _0x278315["create"](_0x487ef4, _0x1d16bd);
      if (_0x1fd75a) {
        if (typeof _0x1fd75a == "string") {
          var _0x204291 = new Array(_0x1fd75a["length"]);
          for (var _0x4003c8 = 0, _0x112187 = _0x1fd75a["length"]; _0x4003c8 < _0x112187; ++_0x4003c8) _0x204291[_0x4003c8] = _0x1fd75a["charCodeAt"](_0x4003c8);
          _0x1fd75a = _0x204291;
        }
        _0x278315["chmod"](_0x1bd00a, _0x1d16bd | 146);
        var _0x496f2b = _0x278315["open"](_0x1bd00a, 577);
        _0x278315["write"](_0x496f2b, _0x1fd75a, 0, _0x1fd75a["length"], 0, _0x48a049), _0x278315["close"](_0x496f2b), _0x278315["chmod"](_0x1bd00a, _0x1d16bd);
      }
      return _0x1bd00a;
    }, createDevice: (_0x22ce3d, _0x445fba, _0x1a3456, _0xac8439) => {
      var _0x2ff0aa = _0x353c9a["join2"](typeof _0x22ce3d == "string" ? _0x22ce3d : _0x278315["getPath"](_0x22ce3d), _0x445fba), _0x5efb7e = _0x278315["getMode"](!!_0x1a3456, !!_0xac8439);
      if (!_0x278315["createDevice"]["major"]) _0x278315["createDevice"]["major"] = 64;
      var _0x3272bb = _0x278315["makedev"](_0x278315["createDevice"]["major"]++, 0);
      return _0x278315["registerDevice"](_0x3272bb, {open: _0x4e9864 => {
        _0x4e9864["seekable"] = false;
      }, close: _0x2bb213 => {
        _0xac8439 && _0xac8439["buffer"] && _0xac8439["buffer"]["length"] && _0xac8439(10);
      }, read: (_0xe99b9, _0x2ba374, _0x408f1f, _0x39ba57, _0x2fb224) => {
        var _0xf21cdb = 0;
        for (var _0x4dbd9d = 0; _0x4dbd9d < _0x39ba57; _0x4dbd9d++) {
          var _0x4b1af8;
          try {
            _0x4b1af8 = _0x1a3456();
          } catch (_0x1ba6ef) {
            throw new _0x278315["ErrnoError"](29);
          }
          if (_0x4b1af8 === undefined && _0xf21cdb === 0) throw new _0x278315["ErrnoError"](6);
          if (_0x4b1af8 === null || _0x4b1af8 === undefined) break;
          _0xf21cdb++, _0x2ba374[_0x408f1f + _0x4dbd9d] = _0x4b1af8;
        }
        return _0xf21cdb && (_0xe99b9["node"]["timestamp"] = Date["now"]()), _0xf21cdb;
      }, write: (_0x475468, _0xbc69fe, _0x2a6d30, _0x367892, _0x394321) => {
        for (var _0x2ac973 = 0; _0x2ac973 < _0x367892; _0x2ac973++) {
          try {
            _0xac8439(_0xbc69fe[_0x2a6d30 + _0x2ac973]);
          } catch (_0x4e85cb) {
            throw new _0x278315["ErrnoError"](29);
          }
        }
        return _0x367892 && (_0x475468["node"]["timestamp"] = Date["now"]()), _0x2ac973;
      }}), _0x278315["mkdev"](_0x2ff0aa, _0x5efb7e, _0x3272bb);
    }, forceLoadFile: _0x1aef33 => {
      if (_0x1aef33["isDevice"] || _0x1aef33["isFolder"] || _0x1aef33["link"] || _0x1aef33["contents"]) return true;
      if (typeof XMLHttpRequest != "undefined") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."); else {
        if (_0x44d954) try {
          _0x1aef33["contents"] = _0x3b0517(_0x44d954(_0x1aef33["url"]), true), _0x1aef33["usedBytes"] = _0x1aef33["contents"]["length"];
        } catch (_0x4db698) {
          throw new _0x278315["ErrnoError"](29);
        } else throw new Error("Cannot load without read() or XMLHttpRequest.");
      }
    }, createLazyFile: (_0x232e0, _0x202fad, _0x1531d5, _0x1cae1f, _0xe19b31) => {
      function _0x11a23c() {
        this["lengthKnown"] = false, this["chunks"] = [];
      }
      _0x11a23c["prototype"]["get"] = function _0x27dc60(_0x24478b) {
        if (_0x24478b > this["length"] - 1 || _0x24478b < 0) return undefined;
        var _0x23d335 = _0x24478b % this["chunkSize"], _0x4ae567 = _0x24478b / this["chunkSize"] | 0;
        return this["getter"](_0x4ae567)[_0x23d335];
      }, _0x11a23c["prototype"]["setDataGetter"] = function _0x4bddb8(_0x4e50bb) {
        this["getter"] = _0x4e50bb;
      }, _0x11a23c["prototype"]["cacheLength"] = function _0x307712() {
        var _0x5d0bac = new XMLHttpRequest;
        _0x5d0bac["open"]("HEAD", _0x1531d5, false), _0x5d0bac["send"](null);
        if (!(_0x5d0bac["status"] >= 200 && _0x5d0bac["status"] < 300 || _0x5d0bac["status"] === 304)) throw new Error("Couldn't load " + _0x1531d5 + ". Status: " + _0x5d0bac["status"]);
        var _0x213142 = Number(_0x5d0bac["getResponseHeader"]("Content-length")), _0xb45b0a, _0x2921e9 = (_0xb45b0a = _0x5d0bac["getResponseHeader"]("Accept-Ranges")) && _0xb45b0a === "bytes", _0x1b588e = (_0xb45b0a = _0x5d0bac["getResponseHeader"]("Content-Encoding")) && _0xb45b0a === "gzip", _0x2cb0d7 = 1048576;
        if (!_0x2921e9) _0x2cb0d7 = _0x213142;
        var _0x41e28d = (_0xf7dac8, _0x4659e2) => {
          if (_0xf7dac8 > _0x4659e2) throw new Error("invalid range (" + _0xf7dac8 + ", " + _0x4659e2 + ") or no bytes requested!");
          if (_0x4659e2 > _0x213142 - 1) throw new Error("only " + _0x213142 + " bytes available! programmer error!");
          var _0x12f716 = new XMLHttpRequest;
          _0x12f716["open"]("GET", _0x1531d5, false);
          if (_0x213142 !== _0x2cb0d7) _0x12f716["setRequestHeader"]("Range", "bytes=" + _0xf7dac8 + "-" + _0x4659e2);
          _0x12f716["responseType"] = "arraybuffer";
          _0x12f716["overrideMimeType"] && _0x12f716["overrideMimeType"]("text/plain; charset=x-user-defined");
          _0x12f716["send"](null);
          if (!(_0x12f716["status"] >= 200 && _0x12f716["status"] < 300 || _0x12f716["status"] === 304)) throw new Error("Couldn't load " + _0x1531d5 + ". Status: " + _0x12f716["status"]);
          return _0x12f716["response"] !== undefined ? new Uint8Array(_0x12f716["response"] || []) : _0x3b0517(_0x12f716["responseText"] || "", true);
        }, _0x20d465 = this;
        _0x20d465["setDataGetter"](_0x16b569 => {
          var _0x2b1aec = _0x16b569 * _0x2cb0d7, _0x167250 = (_0x16b569 + 1) * _0x2cb0d7 - 1;
          _0x167250 = Math["min"](_0x167250, _0x213142 - 1);
          typeof _0x20d465["chunks"][_0x16b569] == "undefined" && (_0x20d465["chunks"][_0x16b569] = _0x41e28d(_0x2b1aec, _0x167250));
          if (typeof _0x20d465["chunks"][_0x16b569] == "undefined") throw new Error("doXHR failed!");
          return _0x20d465["chunks"][_0x16b569];
        }), (_0x1b588e || !_0x213142) && (_0x2cb0d7 = _0x213142 = 1, _0x213142 = this["getter"](0)["length"], _0x2cb0d7 = _0x213142, _0x3402e6("LazyFiles on gzip forces download of the whole file when length is accessed")), this["_length"] = _0x213142, this["_chunkSize"] = _0x2cb0d7, this["lengthKnown"] = true;
      };
      if (typeof XMLHttpRequest != "undefined") {
        if (!_0x132c1d) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var _0x5d2bb4 = new _0x11a23c;
        Object["defineProperties"](_0x5d2bb4, {length: {get: function () {
          return !this["lengthKnown"] && this["cacheLength"](), this["_length"];
        }}, chunkSize: {get: function () {
          return !this["lengthKnown"] && this["cacheLength"](), this["_chunkSize"];
        }}});
        var _0x5d09da = {isDevice: false, contents: _0x5d2bb4};
      } else var _0x5d09da = {isDevice: false, url: _0x1531d5};
      var _0x5a4a6e = _0x278315["createFile"](_0x232e0, _0x202fad, _0x5d09da, _0x1cae1f, _0xe19b31);
      if (_0x5d09da["contents"]) _0x5a4a6e["contents"] = _0x5d09da["contents"]; else _0x5d09da["url"] && (_0x5a4a6e["contents"] = null, _0x5a4a6e["url"] = _0x5d09da["url"]);
      Object["defineProperties"](_0x5a4a6e, {usedBytes: {get: function () {
        return this["contents"]["length"];
      }}});
      var _0x4daa66 = {}, _0x2420e1 = Object["keys"](_0x5a4a6e["stream_ops"]);
      return _0x2420e1["forEach"](_0x5e6923 => {
        var _0x56a632 = _0x5a4a6e["stream_ops"][_0x5e6923];
        _0x4daa66[_0x5e6923] = function _0x30b958() {
          return _0x278315["forceLoadFile"](_0x5a4a6e), _0x56a632["apply"](null, arguments);
        };
      }), _0x4daa66["read"] = (_0xa1805d, _0x22e636, _0x1d9317, _0x434fad, _0x1b6742) => {
        _0x278315["forceLoadFile"](_0x5a4a6e);
        var _0x2ffabc = _0xa1805d["node"]["contents"];
        if (_0x1b6742 >= _0x2ffabc["length"]) return 0;
        var _0x534658 = Math["min"](_0x2ffabc["length"] - _0x1b6742, _0x434fad);
        if (_0x2ffabc["slice"]) for (var _0x249a2f = 0; _0x249a2f < _0x534658; _0x249a2f++) {
          _0x22e636[_0x1d9317 + _0x249a2f] = _0x2ffabc[_0x1b6742 + _0x249a2f];
        } else for (var _0x249a2f = 0; _0x249a2f < _0x534658; _0x249a2f++) {
          _0x22e636[_0x1d9317 + _0x249a2f] = _0x2ffabc["get"](_0x1b6742 + _0x249a2f);
        }
        return _0x534658;
      }, _0x5a4a6e["stream_ops"] = _0x4daa66, _0x5a4a6e;
    }, createPreloadedFile: (_0x2ca9d4, _0x3edc79, _0x4038a5, _0x1988f6, _0x401930, _0xeb3458, _0x4918e5, _0x3b27a4, _0x44d5d7, _0x36b7cf) => {
      var _0x2553ef = _0x3edc79 ? _0x7c6eff["resolve"](_0x353c9a["join2"](_0x2ca9d4, _0x3edc79)) : _0x2ca9d4, _0x552ec3 = _0x3c35f3("cp " + _0x2553ef);
      function _0x3d55d3(_0x3a6769) {
        function _0x4bd1b9(_0x2452d7) {
          if (_0x36b7cf) _0x36b7cf();
          !_0x3b27a4 && _0x278315["createDataFile"](_0x2ca9d4, _0x3edc79, _0x2452d7, _0x1988f6, _0x401930, _0x44d5d7);
          if (_0xeb3458) _0xeb3458();
          _0x3b7ae4(_0x552ec3);
        }
        if (_0x20045a["handledByPreloadPlugin"](_0x3a6769, _0x2553ef, _0x4bd1b9, () => {
          if (_0x4918e5) _0x4918e5();
          _0x3b7ae4(_0x552ec3);
        })) return;
        _0x4bd1b9(_0x3a6769);
      }
      _0x441879(_0x552ec3), typeof _0x4038a5 == "string" ? _0x466e8b(_0x4038a5, _0x20ac39 => _0x3d55d3(_0x20ac39), _0x4918e5) : _0x3d55d3(_0x4038a5);
    }, indexedDB: () => {
      return window["indexedDB"] || window["mozIndexedDB"] || window["webkitIndexedDB"] || window["msIndexedDB"];
    }, DB_NAME: () => {
      return "EM_FS_" + window["location"]["pathname"];
    }, DB_VERSION: 20, DB_STORE_NAME: "FILE_DATA", saveFilesToDB: (_0x4909dd, _0x35d7af, _0x244f39) => {
      _0x35d7af = _0x35d7af || (() => {}), _0x244f39 = _0x244f39 || (() => {});
      var _0x4a3de5 = _0x278315["indexedDB"]();
      try {
        var _0x52c6c3 = _0x4a3de5["open"](_0x278315["DB_NAME"](), _0x278315["DB_VERSION"]);
      } catch (_0xdccaaf) {
        return _0x244f39(_0xdccaaf);
      }
      _0x52c6c3["onupgradeneeded"] = () => {
        _0x3402e6("creating db");
        var _0x55939a = _0x52c6c3["result"];
        _0x55939a["createObjectStore"](_0x278315["DB_STORE_NAME"]);
      }, _0x52c6c3["onsuccess"] = () => {
        var _0x8afece = _0x52c6c3["result"], _0x50715b = _0x8afece["transaction"]([_0x278315["DB_STORE_NAME"]], "readwrite"), _0x3d3bbe = _0x50715b["objectStore"](_0x278315["DB_STORE_NAME"]), _0x26064d = 0, _0x11a54d = 0, _0x247016 = _0x4909dd["length"];
        function _0x2df47b() {
          if (_0x11a54d == 0) _0x35d7af(); else _0x244f39();
        }
        _0x4909dd["forEach"](_0x44c2ba => {
          var _0x52da01 = _0x3d3bbe["put"](_0x278315["analyzePath"](_0x44c2ba)["object"]["contents"], _0x44c2ba);
          _0x52da01["onsuccess"] = () => {
            _0x26064d++;
            if (_0x26064d + _0x11a54d == _0x247016) _0x2df47b();
          }, _0x52da01["onerror"] = () => {
            _0x11a54d++;
            if (_0x26064d + _0x11a54d == _0x247016) _0x2df47b();
          };
        }), _0x50715b["onerror"] = _0x244f39;
      }, _0x52c6c3["onerror"] = _0x244f39;
    }, loadFilesFromDB: (_0x2a8208, _0x2427ce, _0x4c5bda) => {
      _0x2427ce = _0x2427ce || (() => {}), _0x4c5bda = _0x4c5bda || (() => {});
      var _0x1aabdf = _0x278315["indexedDB"]();
      try {
        var _0x3690f8 = _0x1aabdf["open"](_0x278315["DB_NAME"](), _0x278315["DB_VERSION"]);
      } catch (_0x470039) {
        return _0x4c5bda(_0x470039);
      }
      _0x3690f8["onupgradeneeded"] = _0x4c5bda, _0x3690f8["onsuccess"] = () => {
        var _0x1763a6 = _0x3690f8["result"];
        try {
          var _0x1b125a = _0x1763a6["transaction"]([_0x278315["DB_STORE_NAME"]], "readonly");
        } catch (_0x75ce2d) {
          _0x4c5bda(_0x75ce2d);
          return;
        }
        var _0x59a561 = _0x1b125a["objectStore"](_0x278315["DB_STORE_NAME"]), _0x29f8cf = 0, _0x4330a6 = 0, _0x83f5af = _0x2a8208["length"];
        function _0x5435ce() {
          if (_0x4330a6 == 0) _0x2427ce(); else _0x4c5bda();
        }
        _0x2a8208["forEach"](_0x8e1712 => {
          var _0x2727e4 = _0x59a561["get"](_0x8e1712);
          _0x2727e4["onsuccess"] = () => {
            _0x278315["analyzePath"](_0x8e1712)["exists"] && _0x278315["unlink"](_0x8e1712);
            _0x278315["createDataFile"](_0x353c9a["dirname"](_0x8e1712), _0x353c9a["basename"](_0x8e1712), _0x2727e4["result"], true, true, true), _0x29f8cf++;
            if (_0x29f8cf + _0x4330a6 == _0x83f5af) _0x5435ce();
          }, _0x2727e4["onerror"] = () => {
            _0x4330a6++;
            if (_0x29f8cf + _0x4330a6 == _0x83f5af) _0x5435ce();
          };
        }), _0x1b125a["onerror"] = _0x4c5bda;
      }, _0x3690f8["onerror"] = _0x4c5bda;
    }}, _0x3c26cf = {DEFAULT_POLLMASK: 5, calculateAt: function (_0x2002d6, _0x982470, _0x3632a5) {
      if (_0x982470[0] === "/") return _0x982470;
      var _0x34c49c;
      if (_0x2002d6 === -100) _0x34c49c = _0x278315["cwd"](); else {
        var _0x2f483d = _0x278315["getStream"](_0x2002d6);
        if (!_0x2f483d) throw new _0x278315["ErrnoError"](8);
        _0x34c49c = _0x2f483d["path"];
      }
      if (_0x982470["length"] == 0) {
        if (!_0x3632a5) throw new _0x278315["ErrnoError"](44);
        return _0x34c49c;
      }
      return _0x353c9a["join2"](_0x34c49c, _0x982470);
    }, doStat: function (_0x2abe5a, _0x4cd2e1, _0xe778b7) {
      try {
        var _0x29b730 = _0x2abe5a(_0x4cd2e1);
      } catch (_0x446607) {
        if (_0x446607 && _0x446607["node"] && _0x353c9a["normalize"](_0x4cd2e1) !== _0x353c9a["normalize"](_0x278315["getPath"](_0x446607["node"]))) return -54;
        throw _0x446607;
      }
      return _0x46c9cf[_0xe778b7 >> 2] = _0x29b730["dev"], _0x46c9cf[_0xe778b7 + 4 >> 2] = 0, _0x46c9cf[_0xe778b7 + 8 >> 2] = _0x29b730["ino"], _0x46c9cf[_0xe778b7 + 12 >> 2] = _0x29b730["mode"], _0x46c9cf[_0xe778b7 + 16 >> 2] = _0x29b730["nlink"], _0x46c9cf[_0xe778b7 + 20 >> 2] = _0x29b730["uid"], _0x46c9cf[_0xe778b7 + 24 >> 2] = _0x29b730["gid"], _0x46c9cf[_0xe778b7 + 28 >> 2] = _0x29b730["rdev"], _0x46c9cf[_0xe778b7 + 32 >> 2] = 0, (_0x3c0e3f = [_0x29b730["size"] >>> 0, (_0x12ce7f = _0x29b730["size"], +Math["abs"](_0x12ce7f) >= 1 ? _0x12ce7f > 0 ? (Math["min"](+Math["floor"](_0x12ce7f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math["ceil"]((_0x12ce7f - +(~~_0x12ce7f >>> 0)) / 4294967296) >>> 0 : 0)], _0x46c9cf[_0xe778b7 + 40 >> 2] = _0x3c0e3f[0], _0x46c9cf[_0xe778b7 + 44 >> 2] = _0x3c0e3f[1]), _0x46c9cf[_0xe778b7 + 48 >> 2] = 4096, _0x46c9cf[_0xe778b7 + 52 >> 2] = _0x29b730["blocks"], _0x46c9cf[_0xe778b7 + 56 >> 2] = _0x29b730["atime"]["getTime"]() / 1e3 | 0, _0x46c9cf[_0xe778b7 + 60 >> 2] = 0, _0x46c9cf[_0xe778b7 + 64 >> 2] = _0x29b730["mtime"]["getTime"]() / 1e3 | 0, _0x46c9cf[_0xe778b7 + 68 >> 2] = 0, _0x46c9cf[_0xe778b7 + 72 >> 2] = _0x29b730["ctime"]["getTime"]() / 1e3 | 0, _0x46c9cf[_0xe778b7 + 76 >> 2] = 0, (_0x3c0e3f = [_0x29b730["ino"] >>> 0, (_0x12ce7f = _0x29b730["ino"], +Math["abs"](_0x12ce7f) >= 1 ? _0x12ce7f > 0 ? (Math["min"](+Math["floor"](_0x12ce7f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math["ceil"]((_0x12ce7f - +(~~_0x12ce7f >>> 0)) / 4294967296) >>> 0 : 0)], _0x46c9cf[_0xe778b7 + 80 >> 2] = _0x3c0e3f[0], _0x46c9cf[_0xe778b7 + 84 >> 2] = _0x3c0e3f[1]), 0;
    }, doMsync: function (_0x493d55, _0x4d649f, _0x4d0376, _0x1fe0bc, _0x2f96a9) {
      var _0x51b354 = _0x18c91b["slice"](_0x493d55, _0x493d55 + _0x4d0376);
      _0x278315["msync"](_0x4d649f, _0x51b354, _0x2f96a9, _0x4d0376, _0x1fe0bc);
    }, doMkdir: function (_0x512539, _0x41b15d) {
      _0x512539 = _0x353c9a["normalize"](_0x512539);
      if (_0x512539[_0x512539["length"] - 1] === "/") _0x512539 = _0x512539["substr"](0, _0x512539["length"] - 1);
      return _0x278315["mkdir"](_0x512539, _0x41b15d, 0), 0;
    }, doMknod: function (_0x3095d4, _0x3ccb85, _0x10c2f7) {
      switch (_0x3ccb85 & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      return _0x278315["mknod"](_0x3095d4, _0x3ccb85, _0x10c2f7), 0;
    }, doReadlink: function (_0x16b2e4, _0x495166, _0x11131c) {
      if (_0x11131c <= 0) return -28;
      var _0x190e71 = _0x278315["readlink"](_0x16b2e4), _0x3c0d22 = Math["min"](_0x11131c, _0x4d063a(_0x190e71)), _0x26a9fd = _0x59ed12[_0x495166 + _0x3c0d22];
      return _0x1714da(_0x190e71, _0x495166, _0x11131c + 1), _0x59ed12[_0x495166 + _0x3c0d22] = _0x26a9fd, _0x3c0d22;
    }, doAccess: function (_0x578626, _0x36d3d6) {
      if (_0x36d3d6 & -8) return -28;
      var _0x43627c = _0x278315["lookupPath"](_0x578626, {follow: true}), _0x37b0d1 = _0x43627c["node"];
      if (!_0x37b0d1) return -44;
      var _0x3d5a58 = "";
      if (_0x36d3d6 & 4) _0x3d5a58 += "r";
      if (_0x36d3d6 & 2) _0x3d5a58 += "w";
      if (_0x36d3d6 & 1) _0x3d5a58 += "x";
      if (_0x3d5a58 && _0x278315["nodePermissions"](_0x37b0d1, _0x3d5a58)) return -2;
      return 0;
    }, doReadv: function (_0xbe4466, _0x5ad2af, _0x328b8b, _0x44df96) {
      var _0x32d04a = 0;
      for (var _0x2faf00 = 0; _0x2faf00 < _0x328b8b; _0x2faf00++) {
        var _0x57147e = _0x46c9cf[_0x5ad2af + _0x2faf00 * 8 >> 2], _0x346bcd = _0x46c9cf[_0x5ad2af + (_0x2faf00 * 8 + 4) >> 2], _0x3d0827 = _0x278315["read"](_0xbe4466, _0x59ed12, _0x57147e, _0x346bcd, _0x44df96);
        if (_0x3d0827 < 0) return -1;
        _0x32d04a += _0x3d0827;
        if (_0x3d0827 < _0x346bcd) break;
      }
      return _0x32d04a;
    }, doWritev: function (_0x266a2d, _0x8ebbe0, _0x476b57, _0x49a2e5) {
      var _0x390e74 = 0;
      for (var _0x38a10a = 0; _0x38a10a < _0x476b57; _0x38a10a++) {
        var _0x41531c = _0x46c9cf[_0x8ebbe0 + _0x38a10a * 8 >> 2], _0x2ea12a = _0x46c9cf[_0x8ebbe0 + (_0x38a10a * 8 + 4) >> 2], _0x3ba98f = _0x278315["write"](_0x266a2d, _0x59ed12, _0x41531c, _0x2ea12a, _0x49a2e5);
        if (_0x3ba98f < 0) return -1;
        _0x390e74 += _0x3ba98f;
      }
      return _0x390e74;
    }, varargs: undefined, get: function () {
      _0x3c26cf["varargs"] += 4;
      var _0x56a6e2 = _0x46c9cf[_0x3c26cf["varargs"] - 4 >> 2];
      return _0x56a6e2;
    }, getStr: function (_0xfc711e) {
      var _0x25452f = _0x30a7f6(_0xfc711e);
      return _0x25452f;
    }, getStreamFromFD: function (_0x44eca2) {
      var _0x2b1c00 = _0x278315["getStream"](_0x44eca2);
      if (!_0x2b1c00) throw new _0x278315["ErrnoError"](8);
      return _0x2b1c00;
    }, get64: function (_0x52b2f4, _0x5a8f76) {
      return _0x52b2f4;
    }};
    function _0x3d2ff4(_0x25f48b, _0x425932, _0x17117d, _0x623cff, _0x2bbd5e) {
      try {
        var _0x143a87 = 0, _0x4f002a = _0x425932 ? _0x46c9cf[_0x425932 >> 2] : 0, _0x123197 = _0x425932 ? _0x46c9cf[_0x425932 + 4 >> 2] : 0, _0x578384 = _0x17117d ? _0x46c9cf[_0x17117d >> 2] : 0, _0x220b98 = _0x17117d ? _0x46c9cf[_0x17117d + 4 >> 2] : 0, _0x3aa434 = _0x623cff ? _0x46c9cf[_0x623cff >> 2] : 0, _0x2fc8bb = _0x623cff ? _0x46c9cf[_0x623cff + 4 >> 2] : 0, _0x26649d = 0, _0x5d1afc = 0, _0x4baaf8 = 0, _0x4a0d80 = 0, _0x639a0 = 0, _0x3832ad = 0, _0x15a635 = (_0x425932 ? _0x46c9cf[_0x425932 >> 2] : 0) | (_0x17117d ? _0x46c9cf[_0x17117d >> 2] : 0) | (_0x623cff ? _0x46c9cf[_0x623cff >> 2] : 0), _0x5089b1 = (_0x425932 ? _0x46c9cf[_0x425932 + 4 >> 2] : 0) | (_0x17117d ? _0x46c9cf[_0x17117d + 4 >> 2] : 0) | (_0x623cff ? _0x46c9cf[_0x623cff + 4 >> 2] : 0), _0x494e2a = function (_0x5506a0, _0x313a67, _0x196304, _0x168e8a) {
          return _0x5506a0 < 32 ? _0x313a67 & _0x168e8a : _0x196304 & _0x168e8a;
        };
        for (var _0x1127dc = 0; _0x1127dc < _0x25f48b; _0x1127dc++) {
          var _0x776fb1 = 1 << _0x1127dc % 32;
          if (!_0x494e2a(_0x1127dc, _0x15a635, _0x5089b1, _0x776fb1)) continue;
          var _0x205546 = _0x278315["getStream"](_0x1127dc);
          if (!_0x205546) throw new _0x278315["ErrnoError"](8);
          var _0x343bc0 = _0x3c26cf["DEFAULT_POLLMASK"];
          _0x205546["stream_ops"]["poll"] && (_0x343bc0 = _0x205546["stream_ops"]["poll"](_0x205546)), _0x343bc0 & 1 && _0x494e2a(_0x1127dc, _0x4f002a, _0x123197, _0x776fb1) && (_0x1127dc < 32 ? _0x26649d = _0x26649d | _0x776fb1 : _0x5d1afc = _0x5d1afc | _0x776fb1, _0x143a87++), _0x343bc0 & 4 && _0x494e2a(_0x1127dc, _0x578384, _0x220b98, _0x776fb1) && (_0x1127dc < 32 ? _0x4baaf8 = _0x4baaf8 | _0x776fb1 : _0x4a0d80 = _0x4a0d80 | _0x776fb1, _0x143a87++), _0x343bc0 & 2 && _0x494e2a(_0x1127dc, _0x3aa434, _0x2fc8bb, _0x776fb1) && (_0x1127dc < 32 ? _0x639a0 = _0x639a0 | _0x776fb1 : _0x3832ad = _0x3832ad | _0x776fb1, _0x143a87++);
        }
        return _0x425932 && (_0x46c9cf[_0x425932 >> 2] = _0x26649d, _0x46c9cf[_0x425932 + 4 >> 2] = _0x5d1afc), _0x17117d && (_0x46c9cf[_0x17117d >> 2] = _0x4baaf8, _0x46c9cf[_0x17117d + 4 >> 2] = _0x4a0d80), _0x623cff && (_0x46c9cf[_0x623cff >> 2] = _0x639a0, _0x46c9cf[_0x623cff + 4 >> 2] = _0x3832ad), _0x143a87;
      } catch (_0x37d84d) {
        if (typeof _0x278315 == "undefined" || !(_0x37d84d instanceof _0x278315["ErrnoError"])) throw _0x37d84d;
        return -_0x37d84d["errno"];
      }
    }
    var _0x2badf6 = {mount: function (_0x15a3a1) {
      return _0x4bcfe1["websocket"] = _0x4bcfe1["websocket"] && "object" === typeof _0x4bcfe1["websocket"] ? _0x4bcfe1["websocket"] : {}, _0x4bcfe1["websocket"]["_callbacks"] = {}, _0x4bcfe1["websocket"]["on"] = function (_0x110304, _0x3a7dd8) {
        return "function" === typeof _0x3a7dd8 && (this["_callbacks"][_0x110304] = _0x3a7dd8), this;
      }, _0x4bcfe1["websocket"]["emit"] = function (_0x5d4a90, _0x2ef566) {
        "function" === typeof this["_callbacks"][_0x5d4a90] && this["_callbacks"][_0x5d4a90]["call"](this, _0x2ef566);
      }, _0x278315["createNode"](null, "/", 16895, 0);
    }, createSocket: function (_0x2dc994, _0x4afb8a, _0x2b2845) {
      _0x4afb8a &= -526337;
      var _0xe11b83 = _0x4afb8a == 1;
      if (_0xe11b83 && _0x2b2845 && _0x2b2845 != 6) throw new _0x278315["ErrnoError"](66);
      var _0x56d7ec = {family: _0x2dc994, type: _0x4afb8a, protocol: _0x2b2845, server: null, error: null, peers: {}, pending: [], recv_queue: [], sock_ops: _0x2badf6["websocket_sock_ops"]}, _0x1e6642 = _0x2badf6["nextname"](), _0x17f74f = _0x278315["createNode"](_0x2badf6["root"], _0x1e6642, 49152, 0);
      _0x17f74f["sock"] = _0x56d7ec;
      var _0x22ab6e = _0x278315["createStream"]({path: _0x1e6642, node: _0x17f74f, flags: 2, seekable: false, stream_ops: _0x2badf6["stream_ops"]});
      return _0x56d7ec["stream"] = _0x22ab6e, _0x56d7ec;
    }, getSocket: function (_0x176fa7) {
      var _0x4c948e = _0x278315["getStream"](_0x176fa7);
      if (!_0x4c948e || !_0x278315["isSocket"](_0x4c948e["node"]["mode"])) return null;
      return _0x4c948e["node"]["sock"];
    }, stream_ops: {poll: function (_0x56974b) {
      var _0x48b0bb = _0x56974b["node"]["sock"];
      return _0x48b0bb["sock_ops"]["poll"](_0x48b0bb);
    }, ioctl: function (_0x593fb7, _0x3ef8ba, _0x3717d2) {
      var _0x50d856 = _0x593fb7["node"]["sock"];
      return _0x50d856["sock_ops"]["ioctl"](_0x50d856, _0x3ef8ba, _0x3717d2);
    }, read: function (_0x37effb, _0x1884a7, _0x28784f, _0x3412c0, _0x58a58f) {
      var _0x3eaa62 = _0x37effb["node"]["sock"], _0x16fab7 = _0x3eaa62["sock_ops"]["recvmsg"](_0x3eaa62, _0x3412c0);
      if (!_0x16fab7) return 0;
      return _0x1884a7["set"](_0x16fab7["buffer"], _0x28784f), _0x16fab7["buffer"]["length"];
    }, write: function (_0x28e3ed, _0x299d0f, _0x508d5c, _0x2842dc, _0x232e7c) {
      var _0x350ddd = _0x28e3ed["node"]["sock"];
      return _0x350ddd["sock_ops"]["sendmsg"](_0x350ddd, _0x299d0f, _0x508d5c, _0x2842dc);
    }, close: function (_0x26e0b9) {
      var _0xe09b4e = _0x26e0b9["node"]["sock"];
      _0xe09b4e["sock_ops"]["close"](_0xe09b4e);
    }}, nextname: function () {
      return !_0x2badf6["nextname"]["current"] && (_0x2badf6["nextname"]["current"] = 0), "socket[" + _0x2badf6["nextname"]["current"]++ + "]";
    }, websocket_sock_ops: {createPeer: function (_0x53e665, _0x13123e, _0x34cbc6) {
      var _0x1f0aa3;
      typeof _0x13123e == "object" && (_0x1f0aa3 = _0x13123e, _0x13123e = null, _0x34cbc6 = null);
      if (_0x1f0aa3) {
        if (_0x1f0aa3["_socket"]) _0x13123e = _0x1f0aa3["_socket"]["remoteAddress"], _0x34cbc6 = _0x1f0aa3["_socket"]["remotePort"]; else {
          var _0x2aea9d = /ws[s]?:\/\/([^:]+):(\d+)/["exec"](_0x1f0aa3["url"]);
          if (!_0x2aea9d) throw new Error("WebSocket URL must be in the format ws(s)://address:port");
          _0x13123e = _0x2aea9d[1], _0x34cbc6 = parseInt(_0x2aea9d[2], 10);
        }
      } else try {
        var _0x1d72b8 = _0x4bcfe1["websocket"] && "object" === typeof _0x4bcfe1["websocket"], _0x34a31b = "ws:#"["replace"]("#", "//");
        _0x1d72b8 && ("string" === typeof _0x4bcfe1["websocket"]["url"] && (_0x34a31b = _0x4bcfe1["websocket"]["url"]));
        if (_0x34a31b === "ws://" || _0x34a31b === "wss://") {
          var _0x53faea = _0x13123e["split"]("/");
          _0x34a31b = _0x34a31b + _0x53faea[0] + ":" + _0x34cbc6 + "/" + _0x53faea["slice"](1)["join"]("/");
        }
        var _0x5456a3 = "binary";
        _0x1d72b8 && ("string" === typeof _0x4bcfe1["websocket"]["subprotocol"] && (_0x5456a3 = _0x4bcfe1["websocket"]["subprotocol"]));
        var _0x47eafd = undefined;
        _0x5456a3 !== "null" && (_0x5456a3 = _0x5456a3["replace"](/^ +| +$/g, "")["split"](/ *, */), _0x47eafd = _0x4da766 ? {protocol: _0x5456a3["toString"]()} : _0x5456a3);
        _0x1d72b8 && null === _0x4bcfe1["websocket"]["subprotocol"] && (_0x5456a3 = "null", _0x47eafd = undefined);
        var _0x23386a;
        _0x4da766 ? _0x23386a = require("ws") : _0x23386a = WebSocket, _0x1f0aa3 = new _0x23386a(_0x34a31b, _0x47eafd), _0x1f0aa3["binaryType"] = "arraybuffer";
      } catch (_0x41cbbe) {
        throw new _0x278315["ErrnoError"](23);
      }
      var _0x541ad7 = {addr: _0x13123e, port: _0x34cbc6, socket: _0x1f0aa3, dgram_send_queue: []};
      return _0x2badf6["websocket_sock_ops"]["addPeer"](_0x53e665, _0x541ad7), _0x2badf6["websocket_sock_ops"]["handlePeerEvents"](_0x53e665, _0x541ad7), _0x53e665["type"] === 2 && typeof _0x53e665["sport"] != "undefined" && _0x541ad7["dgram_send_queue"]["push"](new Uint8Array([255, 255, 255, 255, "p"["charCodeAt"](0), "o"["charCodeAt"](0), "r"["charCodeAt"](0), "t"["charCodeAt"](0), (_0x53e665["sport"] & 65280) >> 8, _0x53e665["sport"] & 255])), _0x541ad7;
    }, getPeer: function (_0x583d11, _0x1d9d12, _0x70a069) {
      return _0x583d11["peers"][_0x1d9d12 + ":" + _0x70a069];
    }, addPeer: function (_0x295fb3, _0x1275d7) {
      _0x295fb3["peers"][_0x1275d7["addr"] + ":" + _0x1275d7["port"]] = _0x1275d7;
    }, removePeer: function (_0x45ec9d, _0x4e79af) {
      delete _0x45ec9d["peers"][_0x4e79af["addr"] + ":" + _0x4e79af["port"]];
    }, handlePeerEvents: function (_0x3342bb, _0x49cd34) {
      var _0xb9c652 = true, _0x4a59e9 = function () {
        _0x4bcfe1["websocket"]["emit"]("open", _0x3342bb["stream"]["fd"]);
        try {
          var _0xc5d463 = _0x49cd34["dgram_send_queue"]["shift"]();
          while (_0xc5d463) {
            _0x49cd34["socket"]["send"](_0xc5d463), _0xc5d463 = _0x49cd34["dgram_send_queue"]["shift"]();
          }
        } catch (_0x40b551) {
          _0x49cd34["socket"]["close"]();
        }
      };
      function _0x1ab8dc(_0x297d65) {
        if (typeof _0x297d65 == "string") {
          var _0x36fba9 = new TextEncoder;
          _0x297d65 = _0x36fba9["encode"](_0x297d65);
        } else {
          _0x35e637(_0x297d65["byteLength"] !== undefined);
          if (_0x297d65["byteLength"] == 0) return; else _0x297d65 = new Uint8Array(_0x297d65);
        }
        var _0x5643f8 = _0xb9c652;
        _0xb9c652 = false;
        if (_0x5643f8 && _0x297d65["length"] === 10 && _0x297d65[0] === 255 && _0x297d65[1] === 255 && _0x297d65[2] === 255 && _0x297d65[3] === 255 && _0x297d65[4] === "p"["charCodeAt"](0) && _0x297d65[5] === "o"["charCodeAt"](0) && _0x297d65[6] === "r"["charCodeAt"](0) && _0x297d65[7] === "t"["charCodeAt"](0)) {
          var _0x1c2ea7 = _0x297d65[8] << 8 | _0x297d65[9];
          _0x2badf6["websocket_sock_ops"]["removePeer"](_0x3342bb, _0x49cd34), _0x49cd34["port"] = _0x1c2ea7, _0x2badf6["websocket_sock_ops"]["addPeer"](_0x3342bb, _0x49cd34);
          return;
        }
        _0x3342bb["recv_queue"]["push"]({addr: _0x49cd34["addr"], port: _0x49cd34["port"], data: _0x297d65}), _0x4bcfe1["websocket"]["emit"]("message", _0x3342bb["stream"]["fd"]);
      }
      _0x4da766 ? (_0x49cd34["socket"]["on"]("open", _0x4a59e9), _0x49cd34["socket"]["on"]("message", function (_0x51a722, _0x306cab) {
        if (!_0x306cab["binary"]) return;
        _0x1ab8dc(new Uint8Array(_0x51a722)["buffer"]);
      }), _0x49cd34["socket"]["on"]("close", function () {
        _0x4bcfe1["websocket"]["emit"]("close", _0x3342bb["stream"]["fd"]);
      }), _0x49cd34["socket"]["on"]("error", function (_0x3f3b57) {
        _0x3342bb["error"] = 14, _0x4bcfe1["websocket"]["emit"]("error", [_0x3342bb["stream"]["fd"], _0x3342bb["error"], "ECONNREFUSED: Connection refused"]);
      })) : (_0x49cd34["socket"]["onopen"] = _0x4a59e9, _0x49cd34["socket"]["onclose"] = function () {
        _0x4bcfe1["websocket"]["emit"]("close", _0x3342bb["stream"]["fd"]);
      }, _0x49cd34["socket"]["onmessage"] = function _0x4abf24(_0x268246) {
        _0x1ab8dc(_0x268246["data"]);
      }, _0x49cd34["socket"]["onerror"] = function (_0x108872) {
        _0x3342bb["error"] = 14, _0x4bcfe1["websocket"]["emit"]("error", [_0x3342bb["stream"]["fd"], _0x3342bb["error"], "ECONNREFUSED: Connection refused"]);
      });
    }, poll: function (_0x4066a6) {
      if (_0x4066a6["type"] === 1 && _0x4066a6["server"]) return _0x4066a6["pending"]["length"] ? 65 : 0;
      var _0x345b21 = 0, _0x2eb7c4 = _0x4066a6["type"] === 1 ? _0x2badf6["websocket_sock_ops"]["getPeer"](_0x4066a6, _0x4066a6["daddr"], _0x4066a6["dport"]) : null;
      return (_0x4066a6["recv_queue"]["length"] || !_0x2eb7c4 || _0x2eb7c4 && _0x2eb7c4["socket"]["readyState"] === _0x2eb7c4["socket"]["CLOSING"] || _0x2eb7c4 && _0x2eb7c4["socket"]["readyState"] === _0x2eb7c4["socket"]["CLOSED"]) && (_0x345b21 |= 65), (!_0x2eb7c4 || _0x2eb7c4 && _0x2eb7c4["socket"]["readyState"] === _0x2eb7c4["socket"]["OPEN"]) && (_0x345b21 |= 4), (_0x2eb7c4 && _0x2eb7c4["socket"]["readyState"] === _0x2eb7c4["socket"]["CLOSING"] || _0x2eb7c4 && _0x2eb7c4["socket"]["readyState"] === _0x2eb7c4["socket"]["CLOSED"]) && (_0x345b21 |= 16), _0x345b21;
    }, ioctl: function (_0x421b8e, _0x1f27ab, _0x39ec11) {
      switch (_0x1f27ab) {
        case 21531:
          var _0x161a27 = 0;
          _0x421b8e["recv_queue"]["length"] && (_0x161a27 = _0x421b8e["recv_queue"][0]["data"]["length"]);
          _0x46c9cf[_0x39ec11 >> 2] = _0x161a27;
          return 0;
        default:
          return 28;
      }
    }, close: function (_0x5a353a) {
      if (_0x5a353a["server"]) {
        try {
          _0x5a353a["server"]["close"]();
        } catch (_0x68633e) {}
        _0x5a353a["server"] = null;
      }
      var _0xb2df4b = Object["keys"](_0x5a353a["peers"]);
      for (var _0x4d0ec0 = 0; _0x4d0ec0 < _0xb2df4b["length"]; _0x4d0ec0++) {
        var _0x493742 = _0x5a353a["peers"][_0xb2df4b[_0x4d0ec0]];
        try {
          _0x493742["socket"]["close"]();
        } catch (_0x5cae22) {}
        _0x2badf6["websocket_sock_ops"]["removePeer"](_0x5a353a, _0x493742);
      }
      return 0;
    }, bind: function (_0x3b3f01, _0x4194df, _0x2c05ac) {
      if (typeof _0x3b3f01["saddr"] != "undefined" || typeof _0x3b3f01["sport"] != "undefined") throw new _0x278315["ErrnoError"](28);
      _0x3b3f01["saddr"] = _0x4194df, _0x3b3f01["sport"] = _0x2c05ac;
      if (_0x3b3f01["type"] === 2) {
        _0x3b3f01["server"] && (_0x3b3f01["server"]["close"](), _0x3b3f01["server"] = null);
        try {
          _0x3b3f01["sock_ops"]["listen"](_0x3b3f01, 0);
        } catch (_0x406363) {
          if (!(_0x406363 instanceof _0x278315["ErrnoError"])) throw _0x406363;
          if (_0x406363["errno"] !== 138) throw _0x406363;
        }
      }
    }, connect: function (_0x53cc8a, _0x2f3cef, _0x2deadb) {
      if (_0x53cc8a["server"]) throw new _0x278315["ErrnoError"](138);
      if (typeof _0x53cc8a["daddr"] != "undefined" && typeof _0x53cc8a["dport"] != "undefined") {
        var _0x5ab310 = _0x2badf6["websocket_sock_ops"]["getPeer"](_0x53cc8a, _0x53cc8a["daddr"], _0x53cc8a["dport"]);
        if (_0x5ab310) {
          if (_0x5ab310["socket"]["readyState"] === _0x5ab310["socket"]["CONNECTING"]) throw new _0x278315["ErrnoError"](7); else throw new _0x278315["ErrnoError"](30);
        }
      }
      var _0x185061 = _0x2badf6["websocket_sock_ops"]["createPeer"](_0x53cc8a, _0x2f3cef, _0x2deadb);
      _0x53cc8a["daddr"] = _0x185061["addr"], _0x53cc8a["dport"] = _0x185061["port"];
      throw new _0x278315["ErrnoError"](26);
    }, listen: function (_0x19f5c7, _0x187f90) {
      if (!_0x4da766) throw new _0x278315["ErrnoError"](138);
      if (_0x19f5c7["server"]) throw new _0x278315["ErrnoError"](28);
      var _0x319ed0 = require("ws")["Server"], _0xa1c14b = _0x19f5c7["saddr"];
      _0x19f5c7["server"] = new _0x319ed0({host: _0xa1c14b, port: _0x19f5c7["sport"]}), _0x4bcfe1["websocket"]["emit"]("listen", _0x19f5c7["stream"]["fd"]), _0x19f5c7["server"]["on"]("connection", function (_0x4e52fc) {
        if (_0x19f5c7["type"] === 1) {
          var _0x59ebfc = _0x2badf6["createSocket"](_0x19f5c7["family"], _0x19f5c7["type"], _0x19f5c7["protocol"]), _0x357acc = _0x2badf6["websocket_sock_ops"]["createPeer"](_0x59ebfc, _0x4e52fc);
          _0x59ebfc["daddr"] = _0x357acc["addr"], _0x59ebfc["dport"] = _0x357acc["port"], _0x19f5c7["pending"]["push"](_0x59ebfc), _0x4bcfe1["websocket"]["emit"]("connection", _0x59ebfc["stream"]["fd"]);
        } else _0x2badf6["websocket_sock_ops"]["createPeer"](_0x19f5c7, _0x4e52fc), _0x4bcfe1["websocket"]["emit"]("connection", _0x19f5c7["stream"]["fd"]);
      }), _0x19f5c7["server"]["on"]("closed", function () {
        _0x4bcfe1["websocket"]["emit"]("close", _0x19f5c7["stream"]["fd"]), _0x19f5c7["server"] = null;
      }), _0x19f5c7["server"]["on"]("error", function (_0x13bcde) {
        _0x19f5c7["error"] = 23, _0x4bcfe1["websocket"]["emit"]("error", [_0x19f5c7["stream"]["fd"], _0x19f5c7["error"], "EHOSTUNREACH: Host is unreachable"]);
      });
    }, accept: function (_0x4aa335) {
      if (!_0x4aa335["server"] || !_0x4aa335["pending"]["length"]) throw new _0x278315["ErrnoError"](28);
      var _0x52b581 = _0x4aa335["pending"]["shift"]();
      return _0x52b581["stream"]["flags"] = _0x4aa335["stream"]["flags"], _0x52b581;
    }, getname: function (_0x3edbc9, _0x1b4251) {
      var _0x155437, _0x3b62a9;
      if (_0x1b4251) {
        if (_0x3edbc9["daddr"] === undefined || _0x3edbc9["dport"] === undefined) throw new _0x278315["ErrnoError"](53);
        _0x155437 = _0x3edbc9["daddr"], _0x3b62a9 = _0x3edbc9["dport"];
      } else _0x155437 = _0x3edbc9["saddr"] || 0, _0x3b62a9 = _0x3edbc9["sport"] || 0;
      return {addr: _0x155437, port: _0x3b62a9};
    }, sendmsg: function (_0x4c3146, _0x2e76ab, _0x188de6, _0x5d6d11, _0x2c6a84, _0x1a1e4c) {
      if (_0x4c3146["type"] === 2) {
        (_0x2c6a84 === undefined || _0x1a1e4c === undefined) && (_0x2c6a84 = _0x4c3146["daddr"], _0x1a1e4c = _0x4c3146["dport"]);
        if (_0x2c6a84 === undefined || _0x1a1e4c === undefined) throw new _0x278315["ErrnoError"](17);
      } else _0x2c6a84 = _0x4c3146["daddr"], _0x1a1e4c = _0x4c3146["dport"];
      var _0x4b1e8a = _0x2badf6["websocket_sock_ops"]["getPeer"](_0x4c3146, _0x2c6a84, _0x1a1e4c);
      if (_0x4c3146["type"] === 1) {
        if (!_0x4b1e8a || _0x4b1e8a["socket"]["readyState"] === _0x4b1e8a["socket"]["CLOSING"] || _0x4b1e8a["socket"]["readyState"] === _0x4b1e8a["socket"]["CLOSED"]) throw new _0x278315["ErrnoError"](53); else {
          if (_0x4b1e8a["socket"]["readyState"] === _0x4b1e8a["socket"]["CONNECTING"]) throw new _0x278315["ErrnoError"](6);
        }
      }
      ArrayBuffer["isView"](_0x2e76ab) && (_0x188de6 += _0x2e76ab["byteOffset"], _0x2e76ab = _0x2e76ab["buffer"]);
      var _0x3737c0;
      _0x3737c0 = _0x2e76ab["slice"](_0x188de6, _0x188de6 + _0x5d6d11);
      if (_0x4c3146["type"] === 2) {
        if (!_0x4b1e8a || _0x4b1e8a["socket"]["readyState"] !== _0x4b1e8a["socket"]["OPEN"]) return (!_0x4b1e8a || _0x4b1e8a["socket"]["readyState"] === _0x4b1e8a["socket"]["CLOSING"] || _0x4b1e8a["socket"]["readyState"] === _0x4b1e8a["socket"]["CLOSED"]) && (_0x4b1e8a = _0x2badf6["websocket_sock_ops"]["createPeer"](_0x4c3146, _0x2c6a84, _0x1a1e4c)), _0x4b1e8a["dgram_send_queue"]["push"](_0x3737c0), _0x5d6d11;
      }
      try {
        return _0x4b1e8a["socket"]["send"](_0x3737c0), _0x5d6d11;
      } catch (_0x522549) {
        throw new _0x278315["ErrnoError"](28);
      }
    }, recvmsg: function (_0x4dbc24, _0x1974c0) {
      if (_0x4dbc24["type"] === 1 && _0x4dbc24["server"]) throw new _0x278315["ErrnoError"](53);
      var _0xf120ae = _0x4dbc24["recv_queue"]["shift"]();
      if (!_0xf120ae) {
        if (_0x4dbc24["type"] === 1) {
          var _0x47615a = _0x2badf6["websocket_sock_ops"]["getPeer"](_0x4dbc24, _0x4dbc24["daddr"], _0x4dbc24["dport"]);
          if (!_0x47615a) throw new _0x278315["ErrnoError"](53); else {
            if (_0x47615a["socket"]["readyState"] === _0x47615a["socket"]["CLOSING"] || _0x47615a["socket"]["readyState"] === _0x47615a["socket"]["CLOSED"]) return null; else throw new _0x278315["ErrnoError"](6);
          }
        } else throw new _0x278315["ErrnoError"](6);
      }
      var _0x4f8861 = _0xf120ae["data"]["byteLength"] || _0xf120ae["data"]["length"], _0x4df36e = _0xf120ae["data"]["byteOffset"] || 0, _0x204fc4 = _0xf120ae["data"]["buffer"] || _0xf120ae["data"], _0x469d0a = Math["min"](_0x1974c0, _0x4f8861), _0x4b14c1 = {buffer: new Uint8Array(_0x204fc4, _0x4df36e, _0x469d0a), addr: _0xf120ae["addr"], port: _0xf120ae["port"]};
      if (_0x4dbc24["type"] === 1 && _0x469d0a < _0x4f8861) {
        var _0x1a8910 = _0x4f8861 - _0x469d0a;
        _0xf120ae["data"] = new Uint8Array(_0x204fc4, _0x4df36e + _0x469d0a, _0x1a8910), _0x4dbc24["recv_queue"]["unshift"](_0xf120ae);
      }
      return _0x4b14c1;
    }}};
    function _0x4d9b09(_0x412791) {
      var _0x710a93 = _0x2badf6["getSocket"](_0x412791);
      if (!_0x710a93) throw new _0x278315["ErrnoError"](8);
      return _0x710a93;
    }
    function _0x2e7eae(_0x256563) {
      return _0x46c9cf[_0x55cd07() >> 2] = _0x256563, _0x256563;
    }
    function _0x3f5c7b(_0x29e523) {
      var _0x476bfb = _0x29e523["split"](".");
      for (var _0x2a7c77 = 0; _0x2a7c77 < 4; _0x2a7c77++) {
        var _0x545eab = Number(_0x476bfb[_0x2a7c77]);
        if (isNaN(_0x545eab)) return null;
        _0x476bfb[_0x2a7c77] = _0x545eab;
      }
      return (_0x476bfb[0] | _0x476bfb[1] << 8 | _0x476bfb[2] << 16 | _0x476bfb[3] << 24) >>> 0;
    }
    function _0x37def1(_0x58ba7a) {
      return parseInt(_0x58ba7a);
    }
    function _0x24e192(_0x165cf4) {
      var _0x4d4ef8, _0x47281a, _0xcfe5e0, _0x7f82f, _0x57f671 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, _0x1b9ce8 = [];
      if (!_0x57f671["test"](_0x165cf4)) return null;
      if (_0x165cf4 === "::") return [0, 0, 0, 0, 0, 0, 0, 0];
      _0x165cf4["startsWith"]("::") ? _0x165cf4 = _0x165cf4["replace"]("::", "Z:") : _0x165cf4 = _0x165cf4["replace"]("::", ":Z:");
      _0x165cf4["indexOf"](".") > 0 ? (_0x165cf4 = _0x165cf4["replace"](new RegExp("[.]", "g"), ":"), _0x4d4ef8 = _0x165cf4["split"](":"), _0x4d4ef8[_0x4d4ef8["length"] - 4] = _0x37def1(_0x4d4ef8[_0x4d4ef8["length"] - 4]) + _0x37def1(_0x4d4ef8[_0x4d4ef8["length"] - 3]) * 256, _0x4d4ef8[_0x4d4ef8["length"] - 3] = _0x37def1(_0x4d4ef8[_0x4d4ef8["length"] - 2]) + _0x37def1(_0x4d4ef8[_0x4d4ef8["length"] - 1]) * 256, _0x4d4ef8 = _0x4d4ef8["slice"](0, _0x4d4ef8["length"] - 2)) : _0x4d4ef8 = _0x165cf4["split"](":");
      _0xcfe5e0 = 0, _0x7f82f = 0;
      for (_0x47281a = 0; _0x47281a < _0x4d4ef8["length"]; _0x47281a++) {
        if (typeof _0x4d4ef8[_0x47281a] == "string") {
          if (_0x4d4ef8[_0x47281a] === "Z") {
            for (_0x7f82f = 0; _0x7f82f < 8 - _0x4d4ef8["length"] + 1; _0x7f82f++) {
              _0x1b9ce8[_0x47281a + _0x7f82f] = 0;
            }
            _0xcfe5e0 = _0x7f82f - 1;
          } else _0x1b9ce8[_0x47281a + _0xcfe5e0] = _0x373c28(parseInt(_0x4d4ef8[_0x47281a], 16));
        } else _0x1b9ce8[_0x47281a + _0xcfe5e0] = _0x4d4ef8[_0x47281a];
      }
      return [_0x1b9ce8[1] << 16 | _0x1b9ce8[0], _0x1b9ce8[3] << 16 | _0x1b9ce8[2], _0x1b9ce8[5] << 16 | _0x1b9ce8[4], _0x1b9ce8[7] << 16 | _0x1b9ce8[6]];
    }
    function _0x22838c(_0x37aac1, _0x2e4e2e, _0x4fe825, _0x138296, _0x413eb3) {
      switch (_0x2e4e2e) {
        case 2:
          _0x4fe825 = _0x3f5c7b(_0x4fe825), _0x3988d6(_0x37aac1, 16);
          _0x413eb3 && (_0x46c9cf[_0x413eb3 >> 2] = 16);
          _0x3e563b[_0x37aac1 >> 1] = _0x2e4e2e, _0x46c9cf[_0x37aac1 + 4 >> 2] = _0x4fe825, _0x3e563b[_0x37aac1 + 2 >> 1] = _0x373c28(_0x138296);
          break;
        case 10:
          _0x4fe825 = _0x24e192(_0x4fe825), _0x3988d6(_0x37aac1, 28);
          _0x413eb3 && (_0x46c9cf[_0x413eb3 >> 2] = 28);
          _0x46c9cf[_0x37aac1 >> 2] = _0x2e4e2e, _0x46c9cf[_0x37aac1 + 8 >> 2] = _0x4fe825[0], _0x46c9cf[_0x37aac1 + 12 >> 2] = _0x4fe825[1], _0x46c9cf[_0x37aac1 + 16 >> 2] = _0x4fe825[2], _0x46c9cf[_0x37aac1 + 20 >> 2] = _0x4fe825[3], _0x3e563b[_0x37aac1 + 2 >> 1] = _0x373c28(_0x138296);
          break;
        default:
          return 5;
      }
      return 0;
    }
    var _0x29554d = {address_map: {id: 1, addrs: {}, names: {}}, lookup_name: function (_0x123a38) {
      var _0x47ee96 = _0x3f5c7b(_0x123a38);
      if (_0x47ee96 !== null) return _0x123a38;
      _0x47ee96 = _0x24e192(_0x123a38);
      if (_0x47ee96 !== null) return _0x123a38;
      var _0x5ab786;
      if (_0x29554d["address_map"]["addrs"][_0x123a38]) _0x5ab786 = _0x29554d["address_map"]["addrs"][_0x123a38]; else {
        var _0x272deb = _0x29554d["address_map"]["id"]++;
        _0x35e637(_0x272deb < 65535, "exceeded max address mappings of 65535"), _0x5ab786 = "172.29." + (_0x272deb & 255) + "." + (_0x272deb & 65280), _0x29554d["address_map"]["names"][_0x5ab786] = _0x123a38, _0x29554d["address_map"]["addrs"][_0x123a38] = _0x5ab786;
      }
      return _0x5ab786;
    }, lookup_addr: function (_0x50091b) {
      if (_0x29554d["address_map"]["names"][_0x50091b]) return _0x29554d["address_map"]["names"][_0x50091b];
      return null;
    }};
    function _0x263fe2(_0x99f0c1, _0x1f699d, _0x2f02a5, _0x587210) {
      try {
        var _0x3317f3 = _0x4d9b09(_0x99f0c1), _0x47b3a3 = _0x3317f3["sock_ops"]["accept"](_0x3317f3);
        if (_0x1f699d) var _0x35dd79 = _0x22838c(_0x1f699d, _0x47b3a3["family"], _0x29554d["lookup_name"](_0x47b3a3["daddr"]), _0x47b3a3["dport"], _0x2f02a5);
        return _0x47b3a3["stream"]["fd"];
      } catch (_0x5a9c2e) {
        if (typeof _0x278315 == "undefined" || !(_0x5a9c2e instanceof _0x278315["ErrnoError"])) throw _0x5a9c2e;
        return -_0x5a9c2e["errno"];
      }
    }
    function _0x1218a6(_0x4b3a58) {
      return (_0x4b3a58 & 255) + "." + (_0x4b3a58 >> 8 & 255) + "." + (_0x4b3a58 >> 16 & 255) + "." + (_0x4b3a58 >> 24 & 255);
    }
    function _0x1c3f95(_0x309ab1) {
      var _0x1dbab9 = "", _0x209bb4 = 0, _0xfe3552 = 0, _0x5910dd = 0, _0x612e97 = 0, _0x4ab78b = 0, _0x1228df = 0, _0x1351e7 = [_0x309ab1[0] & 65535, _0x309ab1[0] >> 16, _0x309ab1[1] & 65535, _0x309ab1[1] >> 16, _0x309ab1[2] & 65535, _0x309ab1[2] >> 16, _0x309ab1[3] & 65535, _0x309ab1[3] >> 16], _0x4d8335 = true, _0x3c6962 = "";
      for (_0x1228df = 0; _0x1228df < 5; _0x1228df++) {
        if (_0x1351e7[_0x1228df] !== 0) {
          _0x4d8335 = false;
          break;
        }
      }
      if (_0x4d8335) {
        _0x3c6962 = _0x1218a6(_0x1351e7[6] | _0x1351e7[7] << 16);
        if (_0x1351e7[5] === -1) return _0x1dbab9 = "::ffff:", _0x1dbab9 += _0x3c6962, _0x1dbab9;
        if (_0x1351e7[5] === 0) {
          _0x1dbab9 = "::";
          if (_0x3c6962 === "0.0.0.0") _0x3c6962 = "";
          if (_0x3c6962 === "0.0.0.1") _0x3c6962 = "1";
          return _0x1dbab9 += _0x3c6962, _0x1dbab9;
        }
      }
      for (_0x209bb4 = 0; _0x209bb4 < 8; _0x209bb4++) {
        _0x1351e7[_0x209bb4] === 0 && (_0x209bb4 - _0x5910dd > 1 && (_0x4ab78b = 0), _0x5910dd = _0x209bb4, _0x4ab78b++), _0x4ab78b > _0xfe3552 && (_0xfe3552 = _0x4ab78b, _0x612e97 = _0x209bb4 - _0xfe3552 + 1);
      }
      for (_0x209bb4 = 0; _0x209bb4 < 8; _0x209bb4++) {
        if (_0xfe3552 > 1) {
          if (_0x1351e7[_0x209bb4] === 0 && _0x209bb4 >= _0x612e97 && _0x209bb4 < _0x612e97 + _0xfe3552) {
            if (_0x209bb4 === _0x612e97) {
              _0x1dbab9 += ":";
              if (_0x612e97 === 0) _0x1dbab9 += ":";
            }
            continue;
          }
        }
        _0x1dbab9 += Number(_0x5bda42(_0x1351e7[_0x209bb4] & 65535))["toString"](16), _0x1dbab9 += _0x209bb4 < 7 ? ":" : "";
      }
      return _0x1dbab9;
    }
    function _0x29b6f8(_0x21addb, _0x19afc2) {
      var _0x3b00f8 = _0x3e563b[_0x21addb >> 1], _0x2520b5 = _0x5bda42(_0x8b963d[_0x21addb + 2 >> 1]), _0x4a2bef;
      switch (_0x3b00f8) {
        case 2:
          if (_0x19afc2 !== 16) return {errno: 28};
          _0x4a2bef = _0x46c9cf[_0x21addb + 4 >> 2], _0x4a2bef = _0x1218a6(_0x4a2bef);
          break;
        case 10:
          if (_0x19afc2 !== 28) return {errno: 28};
          _0x4a2bef = [_0x46c9cf[_0x21addb + 8 >> 2], _0x46c9cf[_0x21addb + 12 >> 2], _0x46c9cf[_0x21addb + 16 >> 2], _0x46c9cf[_0x21addb + 20 >> 2]], _0x4a2bef = _0x1c3f95(_0x4a2bef);
          break;
        default:
          return {errno: 5};
      }
      return {family: _0x3b00f8, addr: _0x4a2bef, port: _0x2520b5};
    }
    function _0xd8d1b(_0x3a8fdf, _0x8dfb8e, _0x54491c) {
      if (_0x54491c && _0x3a8fdf === 0) return null;
      var _0x19d831 = _0x29b6f8(_0x3a8fdf, _0x8dfb8e);
      if (_0x19d831["errno"]) throw new _0x278315["ErrnoError"](_0x19d831["errno"]);
      return _0x19d831["addr"] = _0x29554d["lookup_addr"](_0x19d831["addr"]) || _0x19d831["addr"], _0x19d831;
    }
    function _0x2e1b4f(_0x3e148a, _0x4dcd5a, _0x3a33bf) {
      try {
        var _0x16b3a8 = _0x4d9b09(_0x3e148a), _0x9f6160 = _0xd8d1b(_0x4dcd5a, _0x3a33bf);
        return _0x16b3a8["sock_ops"]["bind"](_0x16b3a8, _0x9f6160["addr"], _0x9f6160["port"]), 0;
      } catch (_0x590436) {
        if (typeof _0x278315 == "undefined" || !(_0x590436 instanceof _0x278315["ErrnoError"])) throw _0x590436;
        return -_0x590436["errno"];
      }
    }
    function _0x5db802(_0x44bfb1, _0x440e6c) {
      try {
        return _0x44bfb1 = _0x3c26cf["getStr"](_0x44bfb1), _0x278315["chmod"](_0x44bfb1, _0x440e6c), 0;
      } catch (_0x462084) {
        if (typeof _0x278315 == "undefined" || !(_0x462084 instanceof _0x278315["ErrnoError"])) throw _0x462084;
        return -_0x462084["errno"];
      }
    }
    function _0x37f820(_0x3ef280, _0x149415, _0x18544e) {
      try {
        var _0x502731 = _0x4d9b09(_0x3ef280), _0x47f61d = _0xd8d1b(_0x149415, _0x18544e);
        return _0x502731["sock_ops"]["connect"](_0x502731, _0x47f61d["addr"], _0x47f61d["port"]), 0;
      } catch (_0x25fedd) {
        if (typeof _0x278315 == "undefined" || !(_0x25fedd instanceof _0x278315["ErrnoError"])) throw _0x25fedd;
        return -_0x25fedd["errno"];
      }
    }
    function _0x424f99(_0x3e5ddd, _0x568840, _0x2e0373) {
      try {
        var _0x58bb38 = _0x3c26cf["getStreamFromFD"](_0x3e5ddd);
        if (_0x58bb38["fd"] === _0x568840) return -28;
        var _0x106afb = _0x278315["getStream"](_0x568840);
        if (_0x106afb) _0x278315["close"](_0x106afb);
        return _0x278315["open"](_0x58bb38["path"], _0x58bb38["flags"], 0, _0x568840, _0x568840)["fd"];
      } catch (_0x125f6c) {
        if (typeof _0x278315 == "undefined" || !(_0x125f6c instanceof _0x278315["ErrnoError"])) throw _0x125f6c;
        return -_0x125f6c["errno"];
      }
    }
    function _0x5eb451(_0x9e990e, _0x183547, _0x18bb3f, _0x331f31) {
      try {
        return _0x183547 = _0x3c26cf["getStr"](_0x183547), _0x183547 = _0x3c26cf["calculateAt"](_0x9e990e, _0x183547), _0x3c26cf["doAccess"](_0x183547, _0x18bb3f);
      } catch (_0x52db90) {
        if (typeof _0x278315 == "undefined" || !(_0x52db90 instanceof _0x278315["ErrnoError"])) throw _0x52db90;
        return -_0x52db90["errno"];
      }
    }
    function _0x1ff544(_0xa36b7b, _0x1632bc, _0x4cb342) {
      _0x3c26cf["varargs"] = _0x4cb342;
      try {
        var _0x49a60b = _0x3c26cf["getStreamFromFD"](_0xa36b7b);
        switch (_0x1632bc) {
          case 0:
            {
              var _0x304157 = _0x3c26cf["get"]();
              if (_0x304157 < 0) return -28;
              var _0x330a17;
              return _0x330a17 = _0x278315["open"](_0x49a60b["path"], _0x49a60b["flags"], 0, _0x304157), _0x330a17["fd"];
            }
          case 1:
          case 2:
            return 0;
          case 3:
            return _0x49a60b["flags"];
          case 4:
            {
              var _0x304157 = _0x3c26cf["get"]();
              return _0x49a60b["flags"] |= _0x304157, 0;
            }
          case 5:
            {
              var _0x304157 = _0x3c26cf["get"](), _0x35ae89 = 0;
              return _0x3e563b[_0x304157 + _0x35ae89 >> 1] = 2, 0;
            }
          case 6:
          case 7:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            _0x2e7eae(28);
            return -1;
          default:
            {
              return -28;
            }
        }
      } catch (_0x3312bf) {
        if (typeof _0x278315 == "undefined" || !(_0x3312bf instanceof _0x278315["ErrnoError"])) throw _0x3312bf;
        return -_0x3312bf["errno"];
      }
    }
    function _0x3b42e0(_0xc4146, _0x59b1c1) {
      try {
        var _0x3dc397 = _0x3c26cf["getStreamFromFD"](_0xc4146);
        return _0x3c26cf["doStat"](_0x278315["stat"], _0x3dc397["path"], _0x59b1c1);
      } catch (_0x427f96) {
        if (typeof _0x278315 == "undefined" || !(_0x427f96 instanceof _0x278315["ErrnoError"])) throw _0x427f96;
        return -_0x427f96["errno"];
      }
    }
    function _0x2b0e27(_0x4d77a6, _0x4344af, _0x3e4328) {
      try {
        var _0x53b458 = _0x3c26cf["get64"](_0x4344af, _0x3e4328);
        return _0x278315["ftruncate"](_0x4d77a6, _0x53b458), 0;
      } catch (_0x28f94e) {
        if (typeof _0x278315 == "undefined" || !(_0x28f94e instanceof _0x278315["ErrnoError"])) throw _0x28f94e;
        return -_0x28f94e["errno"];
      }
    }
    function _0x164362(_0x377c1c, _0x3bda7e) {
      try {
        if (_0x3bda7e === 0) return -28;
        var _0x9a8d21 = _0x278315["cwd"](), _0x163fb8 = _0x4d063a(_0x9a8d21);
        if (_0x3bda7e < _0x163fb8 + 1) return -68;
        return _0x1714da(_0x9a8d21, _0x377c1c, _0x3bda7e), _0x377c1c;
      } catch (_0x2add81) {
        if (typeof _0x278315 == "undefined" || !(_0x2add81 instanceof _0x278315["ErrnoError"])) throw _0x2add81;
        return -_0x2add81["errno"];
      }
    }
    function _0x337620(_0x3f7d02, _0x22c711, _0x26b6e9) {
      try {
        var _0x3c47db = _0x3c26cf["getStreamFromFD"](_0x3f7d02);
        !_0x3c47db["getdents"] && (_0x3c47db["getdents"] = _0x278315["readdir"](_0x3c47db["path"]));
        var _0x3b4de9 = 280, _0x23c4c4 = 0, _0x2265c7 = _0x278315["llseek"](_0x3c47db, 0, 1), _0x3fb006 = Math["floor"](_0x2265c7 / _0x3b4de9);
        while (_0x3fb006 < _0x3c47db["getdents"]["length"] && _0x23c4c4 + _0x3b4de9 <= _0x26b6e9) {
          var _0x90643c, _0x586556, _0x3bb605 = _0x3c47db["getdents"][_0x3fb006];
          if (_0x3bb605 === ".") _0x90643c = _0x3c47db["node"]["id"], _0x586556 = 4; else {
            if (_0x3bb605 === "..") {
              var _0x53bd8b = _0x278315["lookupPath"](_0x3c47db["path"], {parent: true});
              _0x90643c = _0x53bd8b["node"]["id"], _0x586556 = 4;
            } else {
              var _0x170cd4 = _0x278315["lookupNode"](_0x3c47db["node"], _0x3bb605);
              _0x90643c = _0x170cd4["id"], _0x586556 = _0x278315["isChrdev"](_0x170cd4["mode"]) ? 2 : _0x278315["isDir"](_0x170cd4["mode"]) ? 4 : _0x278315["isLink"](_0x170cd4["mode"]) ? 10 : 8;
            }
          }
          _0x3c0e3f = [_0x90643c >>> 0, (_0x12ce7f = _0x90643c, +Math["abs"](_0x12ce7f) >= 1 ? _0x12ce7f > 0 ? (Math["min"](+Math["floor"](_0x12ce7f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math["ceil"]((_0x12ce7f - +(~~_0x12ce7f >>> 0)) / 4294967296) >>> 0 : 0)], _0x46c9cf[_0x22c711 + _0x23c4c4 >> 2] = _0x3c0e3f[0], _0x46c9cf[_0x22c711 + _0x23c4c4 + 4 >> 2] = _0x3c0e3f[1], (_0x3c0e3f = [(_0x3fb006 + 1) * _0x3b4de9 >>> 0, (_0x12ce7f = (_0x3fb006 + 1) * _0x3b4de9, +Math["abs"](_0x12ce7f) >= 1 ? _0x12ce7f > 0 ? (Math["min"](+Math["floor"](_0x12ce7f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math["ceil"]((_0x12ce7f - +(~~_0x12ce7f >>> 0)) / 4294967296) >>> 0 : 0)], _0x46c9cf[_0x22c711 + _0x23c4c4 + 8 >> 2] = _0x3c0e3f[0], _0x46c9cf[_0x22c711 + _0x23c4c4 + 12 >> 2] = _0x3c0e3f[1]), _0x3e563b[_0x22c711 + _0x23c4c4 + 16 >> 1] = 280, _0x59ed12[_0x22c711 + _0x23c4c4 + 18 >> 0] = _0x586556, _0x1714da(_0x3bb605, _0x22c711 + _0x23c4c4 + 19, 256), _0x23c4c4 += _0x3b4de9, _0x3fb006 += 1;
        }
        return _0x278315["llseek"](_0x3c47db, _0x3fb006 * _0x3b4de9, 0), _0x23c4c4;
      } catch (_0x59b2d6) {
        if (typeof _0x278315 == "undefined" || !(_0x59b2d6 instanceof _0x278315["ErrnoError"])) throw _0x59b2d6;
        return -_0x59b2d6["errno"];
      }
    }
    function _0x772641(_0x880482, _0x2c395a, _0x3c7be6) {
      try {
        var _0x54ca32 = _0x4d9b09(_0x880482);
        if (!_0x54ca32["daddr"]) return -53;
        var _0x45a602 = _0x22838c(_0x2c395a, _0x54ca32["family"], _0x29554d["lookup_name"](_0x54ca32["daddr"]), _0x54ca32["dport"], _0x3c7be6);
        return 0;
      } catch (_0x128cc1) {
        if (typeof _0x278315 == "undefined" || !(_0x128cc1 instanceof _0x278315["ErrnoError"])) throw _0x128cc1;
        return -_0x128cc1["errno"];
      }
    }
    function _0x4f3255(_0x14eee0, _0x1260b6, _0x2f165a) {
      try {
        _0x119168("__syscall_getsockname " + _0x14eee0);
        var _0x510132 = _0x4d9b09(_0x14eee0), _0x340e29 = _0x22838c(_0x1260b6, _0x510132["family"], _0x29554d["lookup_name"](_0x510132["saddr"] || "0.0.0.0"), _0x510132["sport"], _0x2f165a);
        return 0;
      } catch (_0x3df7d7) {
        if (typeof _0x278315 == "undefined" || !(_0x3df7d7 instanceof _0x278315["ErrnoError"])) throw _0x3df7d7;
        return -_0x3df7d7["errno"];
      }
    }
    function _0x118d2b(_0x4d9e40, _0x34b1b7, _0xb4f017, _0x1877c2, _0x1add2c) {
      try {
        var _0x10680d = _0x4d9b09(_0x4d9e40);
        if (_0x34b1b7 === 1) {
          if (_0xb4f017 === 4) return _0x46c9cf[_0x1877c2 >> 2] = _0x10680d["error"], _0x46c9cf[_0x1add2c >> 2] = 4, _0x10680d["error"] = null, 0;
        }
        return -50;
      } catch (_0x4994a9) {
        if (typeof _0x278315 == "undefined" || !(_0x4994a9 instanceof _0x278315["ErrnoError"])) throw _0x4994a9;
        return -_0x4994a9["errno"];
      }
    }
    function _0x502455(_0x3476a5, _0x1cf9ff, _0x3fb3e8) {
      _0x3c26cf["varargs"] = _0x3fb3e8;
      try {
        var _0x17c7b9 = _0x3c26cf["getStreamFromFD"](_0x3476a5);
        switch (_0x1cf9ff) {
          case 21509:
          case 21505:
            {
              if (!_0x17c7b9["tty"]) return -59;
              return 0;
            }
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508:
            {
              if (!_0x17c7b9["tty"]) return -59;
              return 0;
            }
          case 21519:
            {
              if (!_0x17c7b9["tty"]) return -59;
              var _0x266ba3 = _0x3c26cf["get"]();
              return _0x46c9cf[_0x266ba3 >> 2] = 0, 0;
            }
          case 21520:
            {
              if (!_0x17c7b9["tty"]) return -59;
              return -28;
            }
          case 21531:
            {
              var _0x266ba3 = _0x3c26cf["get"]();
              return _0x278315["ioctl"](_0x17c7b9, _0x1cf9ff, _0x266ba3);
            }
          case 21523:
            {
              if (!_0x17c7b9["tty"]) return -59;
              return 0;
            }
          case 21524:
            {
              if (!_0x17c7b9["tty"]) return -59;
              return 0;
            }
          default:
            _0x4a2433("bad ioctl syscall " + _0x1cf9ff);
        }
      } catch (_0x34dc8a) {
        if (typeof _0x278315 == "undefined" || !(_0x34dc8a instanceof _0x278315["ErrnoError"])) throw _0x34dc8a;
        return -_0x34dc8a["errno"];
      }
    }
    function _0x421136(_0x213a85, _0xbf127b) {
      try {
        var _0x3c757c = _0x4d9b09(_0x213a85);
        return _0x3c757c["sock_ops"]["listen"](_0x3c757c, _0xbf127b), 0;
      } catch (_0x3b9b9a) {
        if (typeof _0x278315 == "undefined" || !(_0x3b9b9a instanceof _0x278315["ErrnoError"])) throw _0x3b9b9a;
        return -_0x3b9b9a["errno"];
      }
    }
    function _0x13be77(_0x2ccab6, _0x59bd89) {
      try {
        return _0x2ccab6 = _0x3c26cf["getStr"](_0x2ccab6), _0x3c26cf["doStat"](_0x278315["lstat"], _0x2ccab6, _0x59bd89);
      } catch (_0x2d9408) {
        if (typeof _0x278315 == "undefined" || !(_0x2d9408 instanceof _0x278315["ErrnoError"])) throw _0x2d9408;
        return -_0x2d9408["errno"];
      }
    }
    function _0x19569e(_0x1ae995, _0x55b2ca) {
      try {
        return _0x1ae995 = _0x3c26cf["getStr"](_0x1ae995), _0x3c26cf["doMkdir"](_0x1ae995, _0x55b2ca);
      } catch (_0x4014a6) {
        if (typeof _0x278315 == "undefined" || !(_0x4014a6 instanceof _0x278315["ErrnoError"])) throw _0x4014a6;
        return -_0x4014a6["errno"];
      }
    }
    function _0x535da6(_0x52b646, _0x13f1ff, _0x3b4da4, _0x26af07) {
      try {
        _0x13f1ff = _0x3c26cf["getStr"](_0x13f1ff);
        var _0x49e2a9 = _0x26af07 & 256, _0x6b7630 = _0x26af07 & 4096;
        return _0x26af07 = _0x26af07 & -4353, _0x13f1ff = _0x3c26cf["calculateAt"](_0x52b646, _0x13f1ff, _0x6b7630), _0x3c26cf["doStat"](_0x49e2a9 ? _0x278315["lstat"] : _0x278315["stat"], _0x13f1ff, _0x3b4da4);
      } catch (_0x150a1e) {
        if (typeof _0x278315 == "undefined" || !(_0x150a1e instanceof _0x278315["ErrnoError"])) throw _0x150a1e;
        return -_0x150a1e["errno"];
      }
    }
    function _0x51889d(_0x4f8666, _0x3a48dd, _0x23de75, _0x4001a0) {
      _0x3c26cf["varargs"] = _0x4001a0;
      try {
        _0x3a48dd = _0x3c26cf["getStr"](_0x3a48dd), _0x3a48dd = _0x3c26cf["calculateAt"](_0x4f8666, _0x3a48dd);
        var _0x4ba644 = _0x4001a0 ? _0x3c26cf["get"]() : 0;
        return _0x278315["open"](_0x3a48dd, _0x23de75, _0x4ba644)["fd"];
      } catch (_0x4e6fa7) {
        if (typeof _0x278315 == "undefined" || !(_0x4e6fa7 instanceof _0x278315["ErrnoError"])) throw _0x4e6fa7;
        return -_0x4e6fa7["errno"];
      }
    }
    var _0x593392 = {BUCKET_BUFFER_SIZE: 8192, mount: function (_0x3eb8ec) {
      return _0x278315["createNode"](null, "/", 16895, 0);
    }, createPipe: function () {
      var _0x5e7d20 = {buckets: [], refcnt: 2};
      _0x5e7d20["buckets"]["push"]({buffer: new Uint8Array(_0x593392["BUCKET_BUFFER_SIZE"]), offset: 0, roffset: 0});
      var _0x37105d = _0x593392["nextname"](), _0x52d95a = _0x593392["nextname"](), _0x61c4d8 = _0x278315["createNode"](_0x593392["root"], _0x37105d, 4096, 0), _0x371544 = _0x278315["createNode"](_0x593392["root"], _0x52d95a, 4096, 0);
      _0x61c4d8["pipe"] = _0x5e7d20, _0x371544["pipe"] = _0x5e7d20;
      var _0x261f26 = _0x278315["createStream"]({path: _0x37105d, node: _0x61c4d8, flags: 0, seekable: false, stream_ops: _0x593392["stream_ops"]});
      _0x61c4d8["stream"] = _0x261f26;
      var _0x5dee15 = _0x278315["createStream"]({path: _0x52d95a, node: _0x371544, flags: 1, seekable: false, stream_ops: _0x593392["stream_ops"]});
      return _0x371544["stream"] = _0x5dee15, {readable_fd: _0x261f26["fd"], writable_fd: _0x5dee15["fd"]};
    }, stream_ops: {poll: function (_0x14f5ef) {
      var _0x3de5fd = _0x14f5ef["node"]["pipe"];
      if ((_0x14f5ef["flags"] & 2097155) === 1) return 260; else {
        if (_0x3de5fd["buckets"]["length"] > 0) for (var _0x1a2366 = 0; _0x1a2366 < _0x3de5fd["buckets"]["length"]; _0x1a2366++) {
          var _0x6f53f1 = _0x3de5fd["buckets"][_0x1a2366];
          if (_0x6f53f1["offset"] - _0x6f53f1["roffset"] > 0) return 65;
        }
      }
      return 0;
    }, ioctl: function (_0x3a05fc, _0x37dd67, _0xf8c228) {
      return 28;
    }, fsync: function (_0xe982d6) {
      return 28;
    }, read: function (_0x4df91d, _0x2d7216, _0x440515, _0x40e592, _0x5429d1) {
      var _0x3a84df = _0x4df91d["node"]["pipe"], _0x1633fc = 0;
      for (var _0x36f06b = 0; _0x36f06b < _0x3a84df["buckets"]["length"]; _0x36f06b++) {
        var _0x34458b = _0x3a84df["buckets"][_0x36f06b];
        _0x1633fc += _0x34458b["offset"] - _0x34458b["roffset"];
      }
      _0x35e637(_0x2d7216 instanceof ArrayBuffer || ArrayBuffer["isView"](_0x2d7216));
      var _0x3f9c2c = _0x2d7216["subarray"](_0x440515, _0x440515 + _0x40e592);
      if (_0x40e592 <= 0) return 0;
      if (_0x1633fc == 0) throw new _0x278315["ErrnoError"](6);
      var _0x182ddc = Math["min"](_0x1633fc, _0x40e592), _0x328f2a = _0x182ddc, _0x295e72 = 0;
      for (var _0x36f06b = 0; _0x36f06b < _0x3a84df["buckets"]["length"]; _0x36f06b++) {
        var _0x512bf5 = _0x3a84df["buckets"][_0x36f06b], _0x16faab = _0x512bf5["offset"] - _0x512bf5["roffset"];
        if (_0x182ddc <= _0x16faab) {
          var _0xc5f645 = _0x512bf5["buffer"]["subarray"](_0x512bf5["roffset"], _0x512bf5["offset"]);
          _0x182ddc < _0x16faab ? (_0xc5f645 = _0xc5f645["subarray"](0, _0x182ddc), _0x512bf5["roffset"] += _0x182ddc) : _0x295e72++;
          _0x3f9c2c["set"](_0xc5f645);
          break;
        } else {
          var _0xc5f645 = _0x512bf5["buffer"]["subarray"](_0x512bf5["roffset"], _0x512bf5["offset"]);
          _0x3f9c2c["set"](_0xc5f645), _0x3f9c2c = _0x3f9c2c["subarray"](_0xc5f645["byteLength"]), _0x182ddc -= _0xc5f645["byteLength"], _0x295e72++;
        }
      }
      return _0x295e72 && _0x295e72 == _0x3a84df["buckets"]["length"] && (_0x295e72--, _0x3a84df["buckets"][_0x295e72]["offset"] = 0, _0x3a84df["buckets"][_0x295e72]["roffset"] = 0), _0x3a84df["buckets"]["splice"](0, _0x295e72), _0x328f2a;
    }, write: function (_0x1195b3, _0x14affd, _0x299be1, _0xe1f3ff, _0x2d35f6) {
      var _0x224d21 = _0x1195b3["node"]["pipe"];
      _0x35e637(_0x14affd instanceof ArrayBuffer || ArrayBuffer["isView"](_0x14affd));
      var _0x10ccb9 = _0x14affd["subarray"](_0x299be1, _0x299be1 + _0xe1f3ff), _0x21b9eb = _0x10ccb9["byteLength"];
      if (_0x21b9eb <= 0) return 0;
      var _0x328f14 = null;
      _0x224d21["buckets"]["length"] == 0 ? (_0x328f14 = {buffer: new Uint8Array(_0x593392["BUCKET_BUFFER_SIZE"]), offset: 0, roffset: 0}, _0x224d21["buckets"]["push"](_0x328f14)) : _0x328f14 = _0x224d21["buckets"][_0x224d21["buckets"]["length"] - 1];
      _0x35e637(_0x328f14["offset"] <= _0x593392["BUCKET_BUFFER_SIZE"]);
      var _0xf218f = _0x593392["BUCKET_BUFFER_SIZE"] - _0x328f14["offset"];
      if (_0xf218f >= _0x21b9eb) return _0x328f14["buffer"]["set"](_0x10ccb9, _0x328f14["offset"]), _0x328f14["offset"] += _0x21b9eb, _0x21b9eb; else _0xf218f > 0 && (_0x328f14["buffer"]["set"](_0x10ccb9["subarray"](0, _0xf218f), _0x328f14["offset"]), _0x328f14["offset"] += _0xf218f, _0x10ccb9 = _0x10ccb9["subarray"](_0xf218f, _0x10ccb9["byteLength"]));
      var _0x2ad6e0 = _0x10ccb9["byteLength"] / _0x593392["BUCKET_BUFFER_SIZE"] | 0, _0x3648ff = _0x10ccb9["byteLength"] % _0x593392["BUCKET_BUFFER_SIZE"];
      for (var _0x2a7396 = 0; _0x2a7396 < _0x2ad6e0; _0x2a7396++) {
        var _0xaf61cc = {buffer: new Uint8Array(_0x593392["BUCKET_BUFFER_SIZE"]), offset: _0x593392["BUCKET_BUFFER_SIZE"], roffset: 0};
        _0x224d21["buckets"]["push"](_0xaf61cc), _0xaf61cc["buffer"]["set"](_0x10ccb9["subarray"](0, _0x593392["BUCKET_BUFFER_SIZE"])), _0x10ccb9 = _0x10ccb9["subarray"](_0x593392["BUCKET_BUFFER_SIZE"], _0x10ccb9["byteLength"]);
      }
      if (_0x3648ff > 0) {
        var _0xaf61cc = {buffer: new Uint8Array(_0x593392["BUCKET_BUFFER_SIZE"]), offset: _0x10ccb9["byteLength"], roffset: 0};
        _0x224d21["buckets"]["push"](_0xaf61cc), _0xaf61cc["buffer"]["set"](_0x10ccb9);
      }
      return _0x21b9eb;
    }, close: function (_0x2cdf7a) {
      var _0x2d5cb8 = _0x2cdf7a["node"]["pipe"];
      _0x2d5cb8["refcnt"]--, _0x2d5cb8["refcnt"] === 0 && (_0x2d5cb8["buckets"] = null);
    }}, nextname: function () {
      return !_0x593392["nextname"]["current"] && (_0x593392["nextname"]["current"] = 0), "pipe[" + _0x593392["nextname"]["current"]++ + "]";
    }};
    function _0x4928c4(_0x16fad0) {
      try {
        if (_0x16fad0 == 0) throw new _0x278315["ErrnoError"](21);
        var _0x4b5a89 = _0x593392["createPipe"]();
        return _0x46c9cf[_0x16fad0 >> 2] = _0x4b5a89["readable_fd"], _0x46c9cf[_0x16fad0 + 4 >> 2] = _0x4b5a89["writable_fd"], 0;
      } catch (_0x1a7229) {
        if (typeof _0x278315 == "undefined" || !(_0x1a7229 instanceof _0x278315["ErrnoError"])) throw _0x1a7229;
        return -_0x1a7229["errno"];
      }
    }
    function _0x164857(_0x13b52c, _0x4bda36, _0x5e461e) {
      try {
        var _0x44ac46 = 0;
        for (var _0x40e989 = 0; _0x40e989 < _0x4bda36; _0x40e989++) {
          var _0x3c7082 = _0x13b52c + 8 * _0x40e989, _0xc98329 = _0x46c9cf[_0x3c7082 >> 2], _0x2e03a1 = _0x3e563b[_0x3c7082 + 4 >> 1], _0x1d43b7 = 32, _0x2d72e9 = _0x278315["getStream"](_0xc98329);
          _0x2d72e9 && (_0x1d43b7 = _0x3c26cf["DEFAULT_POLLMASK"], _0x2d72e9["stream_ops"]["poll"] && (_0x1d43b7 = _0x2d72e9["stream_ops"]["poll"](_0x2d72e9)));
          _0x1d43b7 &= _0x2e03a1 | 8 | 16;
          if (_0x1d43b7) _0x44ac46++;
          _0x3e563b[_0x3c7082 + 6 >> 1] = _0x1d43b7;
        }
        return _0x44ac46;
      } catch (_0x4022b4) {
        if (typeof _0x278315 == "undefined" || !(_0x4022b4 instanceof _0x278315["ErrnoError"])) throw _0x4022b4;
        return -_0x4022b4["errno"];
      }
    }
    function _0x413df0(_0x404866, _0x5aa8de, _0x1e6742, _0x3f9084) {
      try {
        return _0x5aa8de = _0x3c26cf["getStr"](_0x5aa8de), _0x5aa8de = _0x3c26cf["calculateAt"](_0x404866, _0x5aa8de), _0x3c26cf["doReadlink"](_0x5aa8de, _0x1e6742, _0x3f9084);
      } catch (_0x885258) {
        if (typeof _0x278315 == "undefined" || !(_0x885258 instanceof _0x278315["ErrnoError"])) throw _0x885258;
        return -_0x885258["errno"];
      }
    }
    function _0x2f36ee(_0x101f71, _0x5834fb, _0x570c4e, _0x20e4fc, _0x2f98c4, _0x2cc911) {
      try {
        var _0x2eba7d = _0x4d9b09(_0x101f71), _0x5d6fba = _0x2eba7d["sock_ops"]["recvmsg"](_0x2eba7d, _0x570c4e);
        if (!_0x5d6fba) return 0;
        if (_0x2f98c4) var _0x2ecb5d = _0x22838c(_0x2f98c4, _0x2eba7d["family"], _0x29554d["lookup_name"](_0x5d6fba["addr"]), _0x5d6fba["port"], _0x2cc911);
        return _0x18c91b["set"](_0x5d6fba["buffer"], _0x5834fb), _0x5d6fba["buffer"]["byteLength"];
      } catch (_0xe0b1c7) {
        if (typeof _0x278315 == "undefined" || !(_0xe0b1c7 instanceof _0x278315["ErrnoError"])) throw _0xe0b1c7;
        return -_0xe0b1c7["errno"];
      }
    }
    function _0x56144b(_0x24a14c, _0x3e4285, _0x1cbf5c) {
      try {
        var _0x950091 = _0x4d9b09(_0x24a14c), _0x46d93b = _0x46c9cf[_0x3e4285 + 8 >> 2], _0x4e875f = _0x46c9cf[_0x3e4285 + 12 >> 2], _0xb130be = 0;
        for (var _0xcb5981 = 0; _0xcb5981 < _0x4e875f; _0xcb5981++) {
          _0xb130be += _0x46c9cf[_0x46d93b + (8 * _0xcb5981 + 4) >> 2];
        }
        var _0x1e5a95 = _0x950091["sock_ops"]["recvmsg"](_0x950091, _0xb130be);
        if (!_0x1e5a95) return 0;
        var _0x531493 = _0x46c9cf[_0x3e4285 >> 2];
        if (_0x531493) var _0x4ad250 = _0x22838c(_0x531493, _0x950091["family"], _0x29554d["lookup_name"](_0x1e5a95["addr"]), _0x1e5a95["port"]);
        var _0x1c558f = 0, _0x5aac6d = _0x1e5a95["buffer"]["byteLength"];
        for (var _0xcb5981 = 0; _0x5aac6d > 0 && _0xcb5981 < _0x4e875f; _0xcb5981++) {
          var _0x38bbcb = _0x46c9cf[_0x46d93b + (8 * _0xcb5981 + 0) >> 2], _0x4312ba = _0x46c9cf[_0x46d93b + (8 * _0xcb5981 + 4) >> 2];
          if (!_0x4312ba) continue;
          var _0x147369 = Math["min"](_0x4312ba, _0x5aac6d), _0x491fb8 = _0x1e5a95["buffer"]["subarray"](_0x1c558f, _0x1c558f + _0x147369);
          _0x18c91b["set"](_0x491fb8, _0x38bbcb + _0x1c558f), _0x1c558f += _0x147369, _0x5aac6d -= _0x147369;
        }
        return _0x1c558f;
      } catch (_0x2cf350) {
        if (typeof _0x278315 == "undefined" || !(_0x2cf350 instanceof _0x278315["ErrnoError"])) throw _0x2cf350;
        return -_0x2cf350["errno"];
      }
    }
    function _0x4f13c1(_0x34668e, _0x437599, _0x5dd187, _0x3d0475) {
      try {
        return _0x437599 = _0x3c26cf["getStr"](_0x437599), _0x3d0475 = _0x3c26cf["getStr"](_0x3d0475), _0x437599 = _0x3c26cf["calculateAt"](_0x34668e, _0x437599), _0x3d0475 = _0x3c26cf["calculateAt"](_0x5dd187, _0x3d0475), _0x278315["rename"](_0x437599, _0x3d0475), 0;
      } catch (_0x2aa887) {
        if (typeof _0x278315 == "undefined" || !(_0x2aa887 instanceof _0x278315["ErrnoError"])) throw _0x2aa887;
        return -_0x2aa887["errno"];
      }
    }
    function _0xb4205f(_0x56fcf3) {
      try {
        return _0x56fcf3 = _0x3c26cf["getStr"](_0x56fcf3), _0x278315["rmdir"](_0x56fcf3), 0;
      } catch (_0x3310a6) {
        if (typeof _0x278315 == "undefined" || !(_0x3310a6 instanceof _0x278315["ErrnoError"])) throw _0x3310a6;
        return -_0x3310a6["errno"];
      }
    }
    function _0x212e59(_0x250724, _0x3c2bc9, _0x103864) {
      try {
        var _0xc7e28 = _0x4d9b09(_0x250724), _0x1ebaba = _0x46c9cf[_0x3c2bc9 + 8 >> 2], _0x460e4c = _0x46c9cf[_0x3c2bc9 + 12 >> 2], _0x5c83af, _0x447d78, _0x3cf4b7 = _0x46c9cf[_0x3c2bc9 >> 2], _0x396b27 = _0x46c9cf[_0x3c2bc9 + 4 >> 2];
        if (_0x3cf4b7) {
          var _0x5674ea = _0x29b6f8(_0x3cf4b7, _0x396b27);
          if (_0x5674ea["errno"]) return -_0x5674ea["errno"];
          _0x447d78 = _0x5674ea["port"], _0x5c83af = _0x29554d["lookup_addr"](_0x5674ea["addr"]) || _0x5674ea["addr"];
        }
        var _0x3e0415 = 0;
        for (var _0x4b8ff7 = 0; _0x4b8ff7 < _0x460e4c; _0x4b8ff7++) {
          _0x3e0415 += _0x46c9cf[_0x1ebaba + (8 * _0x4b8ff7 + 4) >> 2];
        }
        var _0x456944 = new Uint8Array(_0x3e0415), _0x676c83 = 0;
        for (var _0x4b8ff7 = 0; _0x4b8ff7 < _0x460e4c; _0x4b8ff7++) {
          var _0x47893a = _0x46c9cf[_0x1ebaba + (8 * _0x4b8ff7 + 0) >> 2], _0x3a469a = _0x46c9cf[_0x1ebaba + (8 * _0x4b8ff7 + 4) >> 2];
          for (var _0x598c93 = 0; _0x598c93 < _0x3a469a; _0x598c93++) {
            _0x456944[_0x676c83++] = _0x59ed12[_0x47893a + _0x598c93 >> 0];
          }
        }
        return _0xc7e28["sock_ops"]["sendmsg"](_0xc7e28, _0x456944, 0, _0x3e0415, _0x5c83af, _0x447d78);
      } catch (_0x3f901c) {
        if (typeof _0x278315 == "undefined" || !(_0x3f901c instanceof _0x278315["ErrnoError"])) throw _0x3f901c;
        return -_0x3f901c["errno"];
      }
    }
    function _0x590172(_0x7ae64c, _0x44c885, _0x4be9c4, _0x5ea4ed, _0x2ce240, _0x3c4434) {
      try {
        var _0x197f39 = _0x4d9b09(_0x7ae64c), _0x608b21 = _0xd8d1b(_0x2ce240, _0x3c4434, true);
        return !_0x608b21 ? _0x278315["write"](_0x197f39["stream"], _0x59ed12, _0x44c885, _0x4be9c4) : _0x197f39["sock_ops"]["sendmsg"](_0x197f39, _0x59ed12, _0x44c885, _0x4be9c4, _0x608b21["addr"], _0x608b21["port"]);
      } catch (_0x395246) {
        if (typeof _0x278315 == "undefined" || !(_0x395246 instanceof _0x278315["ErrnoError"])) throw _0x395246;
        return -_0x395246["errno"];
      }
    }
    function _0x2e2cc3(_0xf01a7e, _0x45d4e4, _0x5565c5) {
      try {
        var _0x3fa7f0 = _0x2badf6["createSocket"](_0xf01a7e, _0x45d4e4, _0x5565c5);
        return _0x3fa7f0["stream"]["fd"];
      } catch (_0x14b882) {
        if (typeof _0x278315 == "undefined" || !(_0x14b882 instanceof _0x278315["ErrnoError"])) throw _0x14b882;
        return -_0x14b882["errno"];
      }
    }
    function _0x14fc1c(_0x2a6a1d, _0x363dbd) {
      try {
        return _0x2a6a1d = _0x3c26cf["getStr"](_0x2a6a1d), _0x3c26cf["doStat"](_0x278315["stat"], _0x2a6a1d, _0x363dbd);
      } catch (_0x3a6649) {
        if (typeof _0x278315 == "undefined" || !(_0x3a6649 instanceof _0x278315["ErrnoError"])) throw _0x3a6649;
        return -_0x3a6649["errno"];
      }
    }
    function _0x2dc891(_0x387864, _0x20e4b2, _0x25fb10) {
      try {
        return _0x387864 = _0x3c26cf["getStr"](_0x387864), _0x46c9cf[_0x25fb10 + 4 >> 2] = 4096, _0x46c9cf[_0x25fb10 + 40 >> 2] = 4096, _0x46c9cf[_0x25fb10 + 8 >> 2] = 1e6, _0x46c9cf[_0x25fb10 + 12 >> 2] = 5e5, _0x46c9cf[_0x25fb10 + 16 >> 2] = 5e5, _0x46c9cf[_0x25fb10 + 20 >> 2] = _0x278315["nextInode"], _0x46c9cf[_0x25fb10 + 24 >> 2] = 1e6, _0x46c9cf[_0x25fb10 + 28 >> 2] = 42, _0x46c9cf[_0x25fb10 + 44 >> 2] = 2, _0x46c9cf[_0x25fb10 + 36 >> 2] = 255, 0;
      } catch (_0x122f5a) {
        if (typeof _0x278315 == "undefined" || !(_0x122f5a instanceof _0x278315["ErrnoError"])) throw _0x122f5a;
        return -_0x122f5a["errno"];
      }
    }
    function _0x4a0b6c(_0x1a5ec7, _0xef93db) {
      try {
        return _0x1a5ec7 = _0x3c26cf["getStr"](_0x1a5ec7), _0xef93db = _0x3c26cf["getStr"](_0xef93db), _0x278315["symlink"](_0x1a5ec7, _0xef93db), 0;
      } catch (_0x1a2c82) {
        if (typeof _0x278315 == "undefined" || !(_0x1a2c82 instanceof _0x278315["ErrnoError"])) throw _0x1a2c82;
        return -_0x1a2c82["errno"];
      }
    }
    function _0x5129e5(_0x1bf2e9, _0x446d48, _0x805852) {
      try {
        _0x1bf2e9 = _0x3c26cf["getStr"](_0x1bf2e9);
        var _0x370348 = _0x3c26cf["get64"](_0x446d48, _0x805852);
        return _0x278315["truncate"](_0x1bf2e9, _0x370348), 0;
      } catch (_0x39f8bc) {
        if (typeof _0x278315 == "undefined" || !(_0x39f8bc instanceof _0x278315["ErrnoError"])) throw _0x39f8bc;
        return -_0x39f8bc["errno"];
      }
    }
    function _0x58515f(_0x2a86dd, _0x190aed, _0x185ef5) {
      try {
        _0x190aed = _0x3c26cf["getStr"](_0x190aed), _0x190aed = _0x3c26cf["calculateAt"](_0x2a86dd, _0x190aed);
        if (_0x185ef5 === 0) _0x278315["unlink"](_0x190aed); else _0x185ef5 === 512 ? _0x278315["rmdir"](_0x190aed) : _0x4a2433("Invalid flags passed to unlinkat");
        return 0;
      } catch (_0x104f81) {
        if (typeof _0x278315 == "undefined" || !(_0x104f81 instanceof _0x278315["ErrnoError"])) throw _0x104f81;
        return -_0x104f81["errno"];
      }
    }
    function _0x5f0bce(_0x4feb4b, _0x1653b2, _0x5ad236, _0x4c0735) {
      try {
        _0x1653b2 = _0x3c26cf["getStr"](_0x1653b2), _0x1653b2 = _0x3c26cf["calculateAt"](_0x4feb4b, _0x1653b2, true);
        if (!_0x5ad236) var _0x49cf56 = Date["now"](), _0x128e0f = _0x49cf56; else {
          var _0xdb8cbe = _0x46c9cf[_0x5ad236 >> 2], _0x29a691 = _0x46c9cf[_0x5ad236 + 4 >> 2];
          _0x49cf56 = _0xdb8cbe * 1e3 + _0x29a691 / 1e6, _0x5ad236 += 8, _0xdb8cbe = _0x46c9cf[_0x5ad236 >> 2], _0x29a691 = _0x46c9cf[_0x5ad236 + 4 >> 2], _0x128e0f = _0xdb8cbe * 1e3 + _0x29a691 / 1e6;
        }
        return _0x278315["utime"](_0x1653b2, _0x49cf56, _0x128e0f), 0;
      } catch (_0x4e97b6) {
        if (typeof _0x278315 == "undefined" || !(_0x4e97b6 instanceof _0x278315["ErrnoError"])) throw _0x4e97b6;
        return -_0x4e97b6["errno"];
      }
    }
    var _0x2e5503 = 0;
    function _0x40ae41(_0x5c0587) {
      var _0x203293 = !_0x2e5503;
      return _0x2e5503 = 1, _0x203293;
    }
    function _0x2641fd(_0x1c5884, _0x8937af) {
      return 0;
    }
    function _0x480141() {
      return Date["now"]();
    }
    var _0x33cc40 = true;
    function _0x47412e() {
      return _0x33cc40;
    }
    function _0xf9ef17() {
      throw Infinity;
    }
    function _0x27ce1e(_0x535c84, _0x3c1448) {
      var _0x4c4667 = new Date(_0x46c9cf[_0x535c84 >> 2] * 1e3);
      _0x46c9cf[_0x3c1448 >> 2] = _0x4c4667["getUTCSeconds"](), _0x46c9cf[_0x3c1448 + 4 >> 2] = _0x4c4667["getUTCMinutes"](), _0x46c9cf[_0x3c1448 + 8 >> 2] = _0x4c4667["getUTCHours"](), _0x46c9cf[_0x3c1448 + 12 >> 2] = _0x4c4667["getUTCDate"](), _0x46c9cf[_0x3c1448 + 16 >> 2] = _0x4c4667["getUTCMonth"](), _0x46c9cf[_0x3c1448 + 20 >> 2] = _0x4c4667["getUTCFullYear"]() - 1900, _0x46c9cf[_0x3c1448 + 24 >> 2] = _0x4c4667["getUTCDay"]();
      var _0x3d839e = Date["UTC"](_0x4c4667["getUTCFullYear"](), 0, 1, 0, 0, 0, 0), _0x395666 = (_0x4c4667["getTime"]() - _0x3d839e) / 864e5 | 0;
      _0x46c9cf[_0x3c1448 + 28 >> 2] = _0x395666;
    }
    function _0x4357b7(_0x464abb, _0x7ef277) {
      var _0x202859 = new Date(_0x46c9cf[_0x464abb >> 2] * 1e3);
      _0x46c9cf[_0x7ef277 >> 2] = _0x202859["getSeconds"](), _0x46c9cf[_0x7ef277 + 4 >> 2] = _0x202859["getMinutes"](), _0x46c9cf[_0x7ef277 + 8 >> 2] = _0x202859["getHours"](), _0x46c9cf[_0x7ef277 + 12 >> 2] = _0x202859["getDate"](), _0x46c9cf[_0x7ef277 + 16 >> 2] = _0x202859["getMonth"](), _0x46c9cf[_0x7ef277 + 20 >> 2] = _0x202859["getFullYear"]() - 1900, _0x46c9cf[_0x7ef277 + 24 >> 2] = _0x202859["getDay"]();
      var _0x506863 = new Date(_0x202859["getFullYear"](), 0, 1), _0x104df8 = (_0x202859["getTime"]() - _0x506863["getTime"]()) / 864e5 | 0;
      _0x46c9cf[_0x7ef277 + 28 >> 2] = _0x104df8, _0x46c9cf[_0x7ef277 + 36 >> 2] = -(_0x202859["getTimezoneOffset"]() * 60);
      var _0xe27523 = new Date(_0x202859["getFullYear"](), 6, 1)["getTimezoneOffset"](), _0xe9ecf2 = _0x506863["getTimezoneOffset"](), _0x142dfc = (_0xe27523 != _0xe9ecf2 && _0x202859["getTimezoneOffset"]() == Math["min"](_0xe9ecf2, _0xe27523)) | 0;
      _0x46c9cf[_0x7ef277 + 32 >> 2] = _0x142dfc;
    }
    function _0x5c73ac(_0x4ba3b1) {
      var _0x367c64 = new Date(_0x46c9cf[_0x4ba3b1 + 20 >> 2] + 1900, _0x46c9cf[_0x4ba3b1 + 16 >> 2], _0x46c9cf[_0x4ba3b1 + 12 >> 2], _0x46c9cf[_0x4ba3b1 + 8 >> 2], _0x46c9cf[_0x4ba3b1 + 4 >> 2], _0x46c9cf[_0x4ba3b1 >> 2], 0), _0x4ba53c = _0x46c9cf[_0x4ba3b1 + 32 >> 2], _0x429fa2 = _0x367c64["getTimezoneOffset"](), _0xcf31bf = new Date(_0x367c64["getFullYear"](), 0, 1), _0x2f1689 = new Date(_0x367c64["getFullYear"](), 6, 1)["getTimezoneOffset"](), _0x24cda7 = _0xcf31bf["getTimezoneOffset"](), _0x46cb51 = Math["min"](_0x24cda7, _0x2f1689);
      if (_0x4ba53c < 0) _0x46c9cf[_0x4ba3b1 + 32 >> 2] = Number(_0x2f1689 != _0x24cda7 && _0x46cb51 == _0x429fa2); else {
        if (_0x4ba53c > 0 != (_0x46cb51 == _0x429fa2)) {
          var _0x2bb9f1 = Math["max"](_0x24cda7, _0x2f1689), _0xe10184 = _0x4ba53c > 0 ? _0x46cb51 : _0x2bb9f1;
          _0x367c64["setTime"](_0x367c64["getTime"]() + (_0xe10184 - _0x429fa2) * 6e4);
        }
      }
      _0x46c9cf[_0x4ba3b1 + 24 >> 2] = _0x367c64["getDay"]();
      var _0x237cf1 = (_0x367c64["getTime"]() - _0xcf31bf["getTime"]()) / 864e5 | 0;
      return _0x46c9cf[_0x4ba3b1 + 28 >> 2] = _0x237cf1, _0x46c9cf[_0x4ba3b1 >> 2] = _0x367c64["getSeconds"](), _0x46c9cf[_0x4ba3b1 + 4 >> 2] = _0x367c64["getMinutes"](), _0x46c9cf[_0x4ba3b1 + 8 >> 2] = _0x367c64["getHours"](), _0x46c9cf[_0x4ba3b1 + 12 >> 2] = _0x367c64["getDate"](), _0x46c9cf[_0x4ba3b1 + 16 >> 2] = _0x367c64["getMonth"](), _0x367c64["getTime"]() / 1e3 | 0;
    }
    function _0x25acc7(_0x5c6684, _0x43faaa, _0x58c313, _0x4e4065, _0x398c83, _0x3927ce, _0xa4509b, _0x1e302c) {
      try {
        var _0x28c084 = _0x278315["getStream"](_0x398c83);
        if (!_0x28c084) return -8;
        var _0x22e71d = _0x278315["mmap"](_0x28c084, _0x5c6684, _0x43faaa, _0x3927ce, _0x58c313, _0x4e4065), _0x35049a = _0x22e71d["ptr"];
        return _0x46c9cf[_0xa4509b >> 2] = _0x22e71d["allocated"], _0x35049a;
      } catch (_0x5761be) {
        if (typeof _0x278315 == "undefined" || !(_0x5761be instanceof _0x278315["ErrnoError"])) throw _0x5761be;
        return -_0x5761be["errno"];
      }
    }
    function _0x4f7e77(_0x27e5b1, _0x2c3a0a, _0x25c845, _0x47bbd0, _0x4f60b0, _0x4c105b) {
      try {
        var _0x27fd8a = _0x278315["getStream"](_0x4f60b0);
        _0x27fd8a && (_0x25c845 & 2 && _0x3c26cf["doMsync"](_0x27e5b1, _0x27fd8a, _0x2c3a0a, _0x47bbd0, _0x4c105b), _0x278315["munmap"](_0x27fd8a));
      } catch (_0x46e032) {
        if (typeof _0x278315 == "undefined" || !(_0x46e032 instanceof _0x278315["ErrnoError"])) throw _0x46e032;
        return -_0x46e032["errno"];
      }
    }
    function _0x241df7(_0x2c4504, _0x420e97, _0x10f36d) {
      var _0x49ac01 = (new Date)["getFullYear"](), _0xa74c07 = new Date(_0x49ac01, 0, 1), _0x849834 = new Date(_0x49ac01, 6, 1), _0x4c5d53 = _0xa74c07["getTimezoneOffset"](), _0x38fd5f = _0x849834["getTimezoneOffset"](), _0x111ff7 = Math["max"](_0x4c5d53, _0x38fd5f);
      _0x46c9cf[_0x2c4504 >> 2] = _0x111ff7 * 60, _0x46c9cf[_0x420e97 >> 2] = Number(_0x4c5d53 != _0x38fd5f);
      function _0x5cef4e(_0x4b6ddb) {
        var _0x1692c7 = _0x4b6ddb["toTimeString"]()["match"](/\(([A-Za-z ]+)\)$/);
        return _0x1692c7 ? _0x1692c7[1] : "GMT";
      }
      var _0xfbd882 = _0x5cef4e(_0xa74c07), _0x34c1ad = _0x5cef4e(_0x849834), _0x475ea6 = _0x186836(_0xfbd882), _0xe0be5e = _0x186836(_0x34c1ad);
      _0x38fd5f < _0x4c5d53 ? (_0x46c9cf[_0x10f36d >> 2] = _0x475ea6, _0x46c9cf[_0x10f36d + 4 >> 2] = _0xe0be5e) : (_0x46c9cf[_0x10f36d >> 2] = _0xe0be5e, _0x46c9cf[_0x10f36d + 4 >> 2] = _0x475ea6);
    }
    function _0xd8c7be(_0x3753e9, _0x5e712f, _0x3c63be) {
      if (_0xd8c7be["called"]) return;
      _0xd8c7be["called"] = true, _0x241df7(_0x3753e9, _0x5e712f, _0x3c63be);
    }
    function _0x36e0e3() {
      _0x4a2433("");
    }
    var _0x437f1d = [];
    function _0x1784d9(_0x473f7e, _0x3a7579) {
      _0x437f1d["length"] = 0;
      var _0x51e77d;
      _0x3a7579 >>= 2;
      while (_0x51e77d = _0x18c91b[_0x473f7e++]) {
        var _0xc644ba = _0x51e77d < 105;
        if (_0xc644ba && _0x3a7579 & 1) _0x3a7579++;
        _0x437f1d["push"](_0xc644ba ? _0x267920[_0x3a7579++ >> 1] : _0x46c9cf[_0x3a7579]), ++_0x3a7579;
      }
      return _0x437f1d;
    }
    function _0x80de8(_0x778b9c, _0x44888a, _0x4e5e19, _0x573906) {
      var _0x31e2fe = _0x1784d9(_0x44888a, _0x4e5e19);
      return _0x1d9234[_0x778b9c]["apply"](null, _0x31e2fe);
    }
    function _0x14ae82(_0xe34616, _0x13f0f8, _0x2ce68b) {
      return _0x80de8(_0xe34616, _0x13f0f8, _0x2ce68b, 1);
    }
    function _0x1fa8ea(_0x67b53f, _0x4306c8) {
      _0x20045a["mainLoop"]["timingMode"] = _0x67b53f, _0x20045a["mainLoop"]["timingValue"] = _0x4306c8;
      if (!_0x20045a["mainLoop"]["func"]) return 1;
      !_0x20045a["mainLoop"]["running"] && (_0x20045a["mainLoop"]["running"] = true);
      if (_0x67b53f == 0) _0x20045a["mainLoop"]["scheduler"] = function _0x10cc49() {
        var _0x51c2a2 = Math["max"](0, _0x20045a["mainLoop"]["tickStartTime"] + _0x4306c8 - _0x511ea2()) | 0;
        setTimeout(_0x20045a["mainLoop"]["runner"], _0x51c2a2);
      }, _0x20045a["mainLoop"]["method"] = "timeout"; else {
        if (_0x67b53f == 1) _0x20045a["mainLoop"]["scheduler"] = function _0x125176() {
          _0x20045a["requestAnimationFrame"](_0x20045a["mainLoop"]["runner"]);
        }, _0x20045a["mainLoop"]["method"] = "rAF"; else {
          if (_0x67b53f == 2) {
            if (typeof setImmediate == "undefined") {
              var _0x58fd07 = [], _0x352e4a = "setimmediate", _0x3e0659 = function (_0x53f33a) {
                (_0x53f33a["data"] === _0x352e4a || _0x53f33a["data"]["target"] === _0x352e4a) && (_0x53f33a["stopPropagation"](), _0x58fd07["shift"]()());
              };
              addEventListener("message", _0x3e0659, true), setImmediate = function _0x39daca(_0x598bbc) {
                _0x58fd07["push"](_0x598bbc);
                if (_0x132c1d) {
                  if (_0x4bcfe1["setImmediates"] === undefined) _0x4bcfe1["setImmediates"] = [];
                  _0x4bcfe1["setImmediates"]["push"](_0x598bbc), postMessage({target: _0x352e4a});
                } else postMessage(_0x352e4a, "*");
              };
            }
            _0x20045a["mainLoop"]["scheduler"] = function _0x3c665b() {
              setImmediate(_0x20045a["mainLoop"]["runner"]);
            }, _0x20045a["mainLoop"]["method"] = "immediate";
          }
        }
      }
      return 0;
    }
    var _0x511ea2;
    if (_0x4da766) _0x511ea2 = () => {
      var _0x3bd08a = process["hrtime"]();
      return _0x3bd08a[0] * 1e3 + _0x3bd08a[1] / 1e6;
    }; else _0x511ea2 = () => performance["now"]();
    function _0x14a8bf(_0x577075) {
      _0x504ca1(_0x577075);
    }
    function _0x76466d() {}
    function _0xe33019(_0x42f95e, _0x1d1b78, _0x29953c, _0x2b8e9b, _0x55ee85) {
      _0x35e637(!_0x20045a["mainLoop"]["func"], "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), _0x20045a["mainLoop"]["func"] = _0x42f95e, _0x20045a["mainLoop"]["arg"] = _0x2b8e9b;
      var _0x294310 = _0x20045a["mainLoop"]["currentlyRunningMainloop"];
      function _0xff61b9() {
        if (_0x294310 < _0x20045a["mainLoop"]["currentlyRunningMainloop"]) return _0x76466d(), false;
        return true;
      }
      _0x20045a["mainLoop"]["running"] = false, _0x20045a["mainLoop"]["runner"] = function _0x219345() {
        if (_0x533336) return;
        if (_0x20045a["mainLoop"]["queue"]["length"] > 0) {
          var _0x176db3 = Date["now"](), _0x5449cd = _0x20045a["mainLoop"]["queue"]["shift"]();
          _0x5449cd["func"](_0x5449cd["arg"]);
          if (_0x20045a["mainLoop"]["remainingBlockers"]) {
            var _0x39a2e0 = _0x20045a["mainLoop"]["remainingBlockers"], _0x26ff7d = _0x39a2e0 % 1 == 0 ? _0x39a2e0 - 1 : Math["floor"](_0x39a2e0);
            _0x5449cd["counted"] ? _0x20045a["mainLoop"]["remainingBlockers"] = _0x26ff7d : (_0x26ff7d = _0x26ff7d + 0.5, _0x20045a["mainLoop"]["remainingBlockers"] = (8 * _0x39a2e0 + _0x26ff7d) / 9);
          }
          _0x3402e6('main loop blocker "' + _0x5449cd["name"] + '" took ' + (Date["now"]() - _0x176db3) + " ms"), _0x20045a["mainLoop"]["updateStatus"]();
          if (!_0xff61b9()) return;
          setTimeout(_0x20045a["mainLoop"]["runner"], 0);
          return;
        }
        if (!_0xff61b9()) return;
        _0x20045a["mainLoop"]["currentFrameNumber"] = _0x20045a["mainLoop"]["currentFrameNumber"] + 1 | 0;
        if (_0x20045a["mainLoop"]["timingMode"] == 1 && _0x20045a["mainLoop"]["timingValue"] > 1 && _0x20045a["mainLoop"]["currentFrameNumber"] % _0x20045a["mainLoop"]["timingValue"] != 0) {
          _0x20045a["mainLoop"]["scheduler"]();
          return;
        } else _0x20045a["mainLoop"]["timingMode"] == 0 && (_0x20045a["mainLoop"]["tickStartTime"] = _0x511ea2());
        _0x2ab728["newRenderingFrameStarted"](), _0x20045a["mainLoop"]["runIter"](_0x42f95e);
        if (!_0xff61b9()) return;
        if (typeof SDL == "object" && SDL["audio"] && SDL["audio"]["queueNewAudioData"]) SDL["audio"]["queueNewAudioData"]();
        _0x20045a["mainLoop"]["scheduler"]();
      };
      if (!_0x55ee85) {
        if (_0x1d1b78 && _0x1d1b78 > 0) _0x1fa8ea(0, 1e3 / _0x1d1b78); else _0x1fa8ea(1, 1);
        _0x20045a["mainLoop"]["scheduler"]();
      }
      if (_0x29953c) throw "unwind";
    }
    function _0x580d98(_0x235409, _0xcaaf1f) {
      if (_0x533336) return;
      if (_0xcaaf1f) {
        _0x235409();
        return;
      }
      try {
        _0x235409();
      } catch (_0x1158fc) {
        _0x406d9e(_0x1158fc);
      }
    }
    function _0x38e9bb(_0x229d0b, _0xf91280) {
      return setTimeout(function () {
        _0x580d98(_0x229d0b);
      }, _0xf91280);
    }
    var _0x20045a = {mainLoop: {running: false, scheduler: null, method: "", currentlyRunningMainloop: 0, func: null, arg: 0, timingMode: 0, timingValue: 0, currentFrameNumber: 0, queue: [], pause: function () {
      _0x20045a["mainLoop"]["scheduler"] = null, _0x20045a["mainLoop"]["currentlyRunningMainloop"]++;
    }, resume: function () {
      _0x20045a["mainLoop"]["currentlyRunningMainloop"]++;
      var _0x59fba4 = _0x20045a["mainLoop"]["timingMode"], _0x1a25d3 = _0x20045a["mainLoop"]["timingValue"], _0x3fa8a7 = _0x20045a["mainLoop"]["func"];
      _0x20045a["mainLoop"]["func"] = null, _0xe33019(_0x3fa8a7, 0, false, _0x20045a["mainLoop"]["arg"], true), _0x1fa8ea(_0x59fba4, _0x1a25d3), _0x20045a["mainLoop"]["scheduler"]();
    }, updateStatus: function () {
      if (_0x4bcfe1["setStatus"]) {
        var _0x2f530b = _0x4bcfe1["statusMessage"] || "Please wait...", _0x170570 = _0x20045a["mainLoop"]["remainingBlockers"], _0x2660b0 = _0x20045a["mainLoop"]["expectedBlockers"];
        _0x170570 ? _0x170570 < _0x2660b0 ? _0x4bcfe1["setStatus"](_0x2f530b + " (" + (_0x2660b0 - _0x170570) + "/" + _0x2660b0 + ")") : _0x4bcfe1["setStatus"](_0x2f530b) : _0x4bcfe1["setStatus"]("");
      }
    }, runIter: function (_0x489c67) {
      if (_0x533336) return;
      if (_0x4bcfe1["preMainLoop"]) {
        var _0xc31f4a = _0x4bcfe1["preMainLoop"]();
        if (_0xc31f4a === false) return;
      }
      _0x580d98(_0x489c67);
      if (_0x4bcfe1["postMainLoop"]) _0x4bcfe1["postMainLoop"]();
    }}, isFullscreen: false, pointerLock: false, moduleContextCreatedCallbacks: [], workers: [], init: function () {
      if (!_0x4bcfe1["preloadPlugins"]) _0x4bcfe1["preloadPlugins"] = [];
      if (_0x20045a["initted"]) return;
      _0x20045a["initted"] = true;
      try {
        new Blob, _0x20045a["hasBlobConstructor"] = true;
      } catch (_0x5da89d) {
        _0x20045a["hasBlobConstructor"] = false, _0x3402e6("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      _0x20045a["BlobBuilder"] = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x20045a["hasBlobConstructor"] ? _0x3402e6("warning: no BlobBuilder") : null, _0x20045a["URLObject"] = typeof window != "undefined" ? window["URL"] ? window["URL"] : window["webkitURL"] : undefined;
      !_0x4bcfe1["noImageDecoding"] && typeof _0x20045a["URLObject"] == "undefined" && (_0x3402e6("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), _0x4bcfe1["noImageDecoding"] = true);
      var _0x540ddb = {};
      _0x540ddb["canHandle"] = function _0x371bb9(_0x45968a) {
        return !_0x4bcfe1["noImageDecoding"] && /\.(jpg|jpeg|png|bmp)$/i["test"](_0x45968a);
      }, _0x540ddb["handle"] = function _0x181cce(_0x1e6293, _0x2ea39d, _0x1031e6, _0x44e194) {
        var _0x1cc403 = null;
        if (_0x20045a["hasBlobConstructor"]) try {
          _0x1cc403 = new Blob([_0x1e6293], {type: _0x20045a["getMimetype"](_0x2ea39d)}), _0x1cc403["size"] !== _0x1e6293["length"] && (_0x1cc403 = new Blob([new Uint8Array(_0x1e6293)["buffer"]], {type: _0x20045a["getMimetype"](_0x2ea39d)}));
        } catch (_0x275688) {
          _0x528b37("Blob constructor present but fails: " + _0x275688 + "; falling back to blob builder");
        }
        if (!_0x1cc403) {
          var _0x47f0d4 = new _0x20045a["BlobBuilder"];
          _0x47f0d4["append"](new Uint8Array(_0x1e6293)["buffer"]), _0x1cc403 = _0x47f0d4["getBlob"]();
        }
        var _0x172c92 = _0x20045a["URLObject"]["createObjectURL"](_0x1cc403), _0x4c1f50 = new Image;
        _0x4c1f50["onload"] = () => {
          _0x35e637(_0x4c1f50["complete"], "Image " + _0x2ea39d + " could not be decoded");
          var _0x1e586a = document["createElement"]("canvas");
          _0x1e586a["width"] = _0x4c1f50["width"], _0x1e586a["height"] = _0x4c1f50["height"];
          var _0x273fa1 = _0x1e586a["getContext"]("2d");
          _0x273fa1["drawImage"](_0x4c1f50, 0, 0), _0x4bcfe1["preloadedImages"][_0x2ea39d] = _0x1e586a, _0x20045a["URLObject"]["revokeObjectURL"](_0x172c92);
          if (_0x1031e6) _0x1031e6(_0x1e6293);
        }, _0x4c1f50["onerror"] = _0x87abc9 => {
          _0x3402e6("Image " + _0x172c92 + " could not be decoded");
          if (_0x44e194) _0x44e194();
        }, _0x4c1f50["src"] = _0x172c92;
      }, _0x4bcfe1["preloadPlugins"]["push"](_0x540ddb);
      var _0x3b9ee6 = {};
      _0x3b9ee6["canHandle"] = function _0xfa1d14(_0x2cc50f) {
        return !_0x4bcfe1["noAudioDecoding"] && _0x2cc50f["substr"](-4) in {".ogg": 1, ".wav": 1, ".mp3": 1};
      }, _0x3b9ee6["handle"] = function _0x4cbf7a(_0xc479b0, _0x1e1632, _0x1abc78, _0x361087) {
        var _0x205ab9 = false;
        function _0xed821a(_0x4c2306) {
          if (_0x205ab9) return;
          _0x205ab9 = true, _0x4bcfe1["preloadedAudios"][_0x1e1632] = _0x4c2306;
          if (_0x1abc78) _0x1abc78(_0xc479b0);
        }
        function _0x4dbfd4() {
          if (_0x205ab9) return;
          _0x205ab9 = true, _0x4bcfe1["preloadedAudios"][_0x1e1632] = new Audio;
          if (_0x361087) _0x361087();
        }
        if (_0x20045a["hasBlobConstructor"]) {
          try {
            var _0x37da50 = new Blob([_0xc479b0], {type: _0x20045a["getMimetype"](_0x1e1632)});
          } catch (_0x4c0cc5) {
            return _0x4dbfd4();
          }
          var _0x3fa88a = _0x20045a["URLObject"]["createObjectURL"](_0x37da50), _0xf5d77c = new Audio;
          _0xf5d77c["addEventListener"]("canplaythrough", function () {
            _0xed821a(_0xf5d77c);
          }, false), _0xf5d77c["onerror"] = function _0x113ffd(_0x1ec5b4) {
            if (_0x205ab9) return;
            _0x3402e6("warning: browser could not fully decode audio " + _0x1e1632 + ", trying slower base64 approach");
            function _0x2e7c8d(_0xa3f66e) {
              var _0x105c49 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _0x286098 = "=", _0x297caa = "", _0x25f2e1 = 0, _0x2fe326 = 0;
              for (var _0x2e9de6 = 0; _0x2e9de6 < _0xa3f66e["length"]; _0x2e9de6++) {
                _0x25f2e1 = _0x25f2e1 << 8 | _0xa3f66e[_0x2e9de6], _0x2fe326 += 8;
                while (_0x2fe326 >= 6) {
                  var _0x2902cd = _0x25f2e1 >> _0x2fe326 - 6 & 63;
                  _0x2fe326 -= 6, _0x297caa += _0x105c49[_0x2902cd];
                }
              }
              if (_0x2fe326 == 2) _0x297caa += _0x105c49[(_0x25f2e1 & 3) << 4], _0x297caa += _0x286098 + _0x286098; else _0x2fe326 == 4 && (_0x297caa += _0x105c49[(_0x25f2e1 & 15) << 2], _0x297caa += _0x286098);
              return _0x297caa;
            }
            _0xf5d77c["src"] = "data:audio/x-" + _0x1e1632["substr"](-3) + ";base64," + _0x2e7c8d(_0xc479b0), _0xed821a(_0xf5d77c);
          }, _0xf5d77c["src"] = _0x3fa88a, _0x38e9bb(function () {
            _0xed821a(_0xf5d77c);
          }, 1e4);
        } else return _0x4dbfd4();
      }, _0x4bcfe1["preloadPlugins"]["push"](_0x3b9ee6);
      function _0x5eb206() {
        _0x20045a["pointerLock"] = document["pointerLockElement"] === _0x4bcfe1["canvas"] || document["mozPointerLockElement"] === _0x4bcfe1["canvas"] || document["webkitPointerLockElement"] === _0x4bcfe1["canvas"] || document["msPointerLockElement"] === _0x4bcfe1["canvas"];
      }
      var _0x513c69 = _0x4bcfe1["canvas"];
      _0x513c69 && (_0x513c69["requestPointerLock"] = _0x513c69["requestPointerLock"] || _0x513c69["mozRequestPointerLock"] || _0x513c69["webkitRequestPointerLock"] || _0x513c69["msRequestPointerLock"] || function () {}, _0x513c69["exitPointerLock"] = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || function () {}, _0x513c69["exitPointerLock"] = _0x513c69["exitPointerLock"]["bind"](document), document["addEventListener"]("pointerlockchange", _0x5eb206, false), document["addEventListener"]("mozpointerlockchange", _0x5eb206, false), document["addEventListener"]("webkitpointerlockchange", _0x5eb206, false), document["addEventListener"]("mspointerlockchange", _0x5eb206, false), _0x4bcfe1["elementPointerLock"] && _0x513c69["addEventListener"]("click", function (_0x423f33) {
        !_0x20045a["pointerLock"] && _0x4bcfe1["canvas"]["requestPointerLock"] && (_0x4bcfe1["canvas"]["requestPointerLock"](), _0x423f33["preventDefault"]());
      }, false));
    }, handledByPreloadPlugin: function (_0x348d55, _0x565ce7, _0x405fd0, _0x260e70) {
      _0x20045a["init"]();
      var _0x4e7233 = false;
      return _0x4bcfe1["preloadPlugins"]["forEach"](function (_0x5db8fa) {
        if (_0x4e7233) return;
        _0x5db8fa["canHandle"](_0x565ce7) && (_0x5db8fa["handle"](_0x348d55, _0x565ce7, _0x405fd0, _0x260e70), _0x4e7233 = true);
      }), _0x4e7233;
    }, createContext: function (_0x502c13, _0x2a620f, _0x657a77, _0x35ed35) {
      if (_0x2a620f && _0x4bcfe1["ctx"] && _0x502c13 == _0x4bcfe1["canvas"]) return _0x4bcfe1["ctx"];
      var _0x10d19a, _0x682b9c;
      if (_0x2a620f) {
        var _0x4dfaaf = {antialias: false, alpha: false, majorVersion: typeof WebGL2RenderingContext != "undefined" ? 2 : 1};
        if (_0x35ed35) for (var _0x353b58 in _0x35ed35) {
          _0x4dfaaf[_0x353b58] = _0x35ed35[_0x353b58];
        }
        typeof _0x2ab728 != "undefined" && (_0x682b9c = _0x2ab728["createContext"](_0x502c13, _0x4dfaaf), _0x682b9c && (_0x10d19a = _0x2ab728["getContext"](_0x682b9c)["GLctx"]));
      } else _0x10d19a = _0x502c13["getContext"]("2d");
      if (!_0x10d19a) return null;
      if (_0x657a77) {
        if (!_0x2a620f) _0x35e637(typeof _0x20ed22 == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
        _0x4bcfe1["ctx"] = _0x10d19a;
        if (_0x2a620f) _0x2ab728["makeContextCurrent"](_0x682b9c);
        _0x4bcfe1["useWebGL"] = _0x2a620f, _0x20045a["moduleContextCreatedCallbacks"]["forEach"](function (_0x5b1482) {
          _0x5b1482();
        }), _0x20045a["init"]();
      }
      return _0x10d19a;
    }, destroyContext: function (_0x58bfab, _0x41795e, _0x477029) {}, fullscreenHandlersInstalled: false, lockPointer: undefined, resizeCanvas: undefined, requestFullscreen: function (_0x1a5927, _0x5e9f83) {
      _0x20045a["lockPointer"] = _0x1a5927, _0x20045a["resizeCanvas"] = _0x5e9f83;
      if (typeof _0x20045a["lockPointer"] == "undefined") _0x20045a["lockPointer"] = true;
      if (typeof _0x20045a["resizeCanvas"] == "undefined") _0x20045a["resizeCanvas"] = false;
      var _0x2a98bb = _0x4bcfe1["canvas"];
      function _0x19a7aa() {
        _0x20045a["isFullscreen"] = false;
        var _0x6e2fb6 = _0x2a98bb["parentNode"];
        if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === _0x6e2fb6) {
          _0x2a98bb["exitFullscreen"] = _0x20045a["exitFullscreen"];
          if (_0x20045a["lockPointer"]) _0x2a98bb["requestPointerLock"]();
          _0x20045a["isFullscreen"] = true, _0x20045a["resizeCanvas"] ? _0x20045a["setFullscreenCanvasSize"]() : _0x20045a["updateCanvasDimensions"](_0x2a98bb);
        } else _0x6e2fb6["parentNode"]["insertBefore"](_0x2a98bb, _0x6e2fb6), _0x6e2fb6["parentNode"]["removeChild"](_0x6e2fb6), _0x20045a["resizeCanvas"] ? _0x20045a["setWindowedCanvasSize"]() : _0x20045a["updateCanvasDimensions"](_0x2a98bb);
        if (_0x4bcfe1["onFullScreen"]) _0x4bcfe1["onFullScreen"](_0x20045a["isFullscreen"]);
        if (_0x4bcfe1["onFullscreen"]) _0x4bcfe1["onFullscreen"](_0x20045a["isFullscreen"]);
      }
      !_0x20045a["fullscreenHandlersInstalled"] && (_0x20045a["fullscreenHandlersInstalled"] = true, document["addEventListener"]("fullscreenchange", _0x19a7aa, false), document["addEventListener"]("mozfullscreenchange", _0x19a7aa, false), document["addEventListener"]("webkitfullscreenchange", _0x19a7aa, false), document["addEventListener"]("MSFullscreenChange", _0x19a7aa, false));
      var _0x43a4c4 = document["createElement"]("div");
      _0x2a98bb["parentNode"]["insertBefore"](_0x43a4c4, _0x2a98bb), _0x43a4c4["appendChild"](_0x2a98bb), _0x43a4c4["requestFullscreen"] = _0x43a4c4["requestFullscreen"] || _0x43a4c4["mozRequestFullScreen"] || _0x43a4c4["msRequestFullscreen"] || (_0x43a4c4["webkitRequestFullscreen"] ? function () {
        _0x43a4c4["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]);
      } : null) || (_0x43a4c4["webkitRequestFullScreen"] ? function () {
        _0x43a4c4["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
      } : null), _0x43a4c4["requestFullscreen"]();
    }, exitFullscreen: function () {
      if (!_0x20045a["isFullscreen"]) return false;
      var _0x566218 = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function () {};
      return _0x566218["apply"](document, []), true;
    }, nextRAF: 0, fakeRequestAnimationFrame: function (_0x2dd5d2) {
      var _0x2392ce = Date["now"]();
      if (_0x20045a["nextRAF"] === 0) _0x20045a["nextRAF"] = _0x2392ce + 16.666666666666668; else while (_0x2392ce + 2 >= _0x20045a["nextRAF"]) {
        _0x20045a["nextRAF"] += 16.666666666666668;
      }
      var _0x41a77f = Math["max"](_0x20045a["nextRAF"] - _0x2392ce, 0);
      setTimeout(_0x2dd5d2, _0x41a77f);
    }, requestAnimationFrame: function (_0x3422a1) {
      if (typeof requestAnimationFrame == "function") {
        requestAnimationFrame(_0x3422a1);
        return;
      }
      var _0x137a28 = _0x20045a["fakeRequestAnimationFrame"];
      _0x137a28(_0x3422a1);
    }, safeSetTimeout: function (_0x40ef7b) {
      return _0x38e9bb(_0x40ef7b);
    }, safeRequestAnimationFrame: function (_0x4c7876) {
      return _0x20045a["requestAnimationFrame"](function () {
        _0x580d98(_0x4c7876);
      });
    }, getMimetype: function (_0x1abde9) {
      return {jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", bmp: "image/bmp", ogg: "audio/ogg", wav: "audio/wav", mp3: "audio/mpeg"}[_0x1abde9["substr"](_0x1abde9["lastIndexOf"](".") + 1)];
    }, getUserMedia: function (_0x2ec320) {
      !window["getUserMedia"] && (window["getUserMedia"] = navigator["getUserMedia"] || navigator["mozGetUserMedia"]), window["getUserMedia"](_0x2ec320);
    }, getMovementX: function (_0x56f0da) {
      return _0x56f0da["movementX"] || _0x56f0da["mozMovementX"] || _0x56f0da["webkitMovementX"] || 0;
    }, getMovementY: function (_0x5d2d13) {
      return _0x5d2d13["movementY"] || _0x5d2d13["mozMovementY"] || _0x5d2d13["webkitMovementY"] || 0;
    }, getMouseWheelDelta: function (_0x43c3cf) {
      var _0x5cc864 = 0;
      switch (_0x43c3cf["type"]) {
        case "DOMMouseScroll":
          _0x5cc864 = _0x43c3cf["detail"] / 3;
          break;
        case "mousewheel":
          _0x5cc864 = _0x43c3cf["wheelDelta"] / 120;
          break;
        case "wheel":
          _0x5cc864 = _0x43c3cf["deltaY"];
          switch (_0x43c3cf["deltaMode"]) {
            case 0:
              _0x5cc864 /= 100;
              break;
            case 1:
              _0x5cc864 /= 3;
              break;
            case 2:
              _0x5cc864 *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + _0x43c3cf["deltaMode"];
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + _0x43c3cf["type"];
      }
      return _0x5cc864;
    }, mouseX: 0, mouseY: 0, mouseMovementX: 0, mouseMovementY: 0, touches: {}, lastTouches: {}, calculateMouseEvent: function (_0x3953bf) {
      if (_0x20045a["pointerLock"]) _0x3953bf["type"] != "mousemove" && "mozMovementX" in _0x3953bf ? _0x20045a["mouseMovementX"] = _0x20045a["mouseMovementY"] = 0 : (_0x20045a["mouseMovementX"] = _0x20045a["getMovementX"](_0x3953bf), _0x20045a["mouseMovementY"] = _0x20045a["getMovementY"](_0x3953bf)), typeof SDL != "undefined" ? (_0x20045a["mouseX"] = SDL["mouseX"] + _0x20045a["mouseMovementX"], _0x20045a["mouseY"] = SDL["mouseY"] + _0x20045a["mouseMovementY"]) : (_0x20045a["mouseX"] += _0x20045a["mouseMovementX"], _0x20045a["mouseY"] += _0x20045a["mouseMovementY"]); else {
        var _0x46a6eb = _0x4bcfe1["canvas"]["getBoundingClientRect"](), _0x319ad4 = _0x4bcfe1["canvas"]["width"], _0x529709 = _0x4bcfe1["canvas"]["height"], _0x894575 = typeof window["scrollX"] != "undefined" ? window["scrollX"] : window["pageXOffset"], _0x47a62a = typeof window["scrollY"] != "undefined" ? window["scrollY"] : window["pageYOffset"];
        if (_0x3953bf["type"] === "touchstart" || _0x3953bf["type"] === "touchend" || _0x3953bf["type"] === "touchmove") {
          var _0x543fed = _0x3953bf["touch"];
          if (_0x543fed === undefined) return;
          var _0x2834cc = _0x543fed["pageX"] - (_0x894575 + _0x46a6eb["left"]), _0x2ccc57 = _0x543fed["pageY"] - (_0x47a62a + _0x46a6eb["top"]);
          _0x2834cc = _0x2834cc * (_0x319ad4 / _0x46a6eb["width"]), _0x2ccc57 = _0x2ccc57 * (_0x529709 / _0x46a6eb["height"]);
          var _0x97aba0 = {x: _0x2834cc, y: _0x2ccc57};
          if (_0x3953bf["type"] === "touchstart") _0x20045a["lastTouches"][_0x543fed["identifier"]] = _0x97aba0, _0x20045a["touches"][_0x543fed["identifier"]] = _0x97aba0; else {
            if (_0x3953bf["type"] === "touchend" || _0x3953bf["type"] === "touchmove") {
              var _0x3f2fe2 = _0x20045a["touches"][_0x543fed["identifier"]];
              if (!_0x3f2fe2) _0x3f2fe2 = _0x97aba0;
              _0x20045a["lastTouches"][_0x543fed["identifier"]] = _0x3f2fe2, _0x20045a["touches"][_0x543fed["identifier"]] = _0x97aba0;
            }
          }
          return;
        }
        var _0x49eb1c = _0x3953bf["pageX"] - (_0x894575 + _0x46a6eb["left"]), _0x2cbfa2 = _0x3953bf["pageY"] - (_0x47a62a + _0x46a6eb["top"]);
        _0x49eb1c = _0x49eb1c * (_0x319ad4 / _0x46a6eb["width"]), _0x2cbfa2 = _0x2cbfa2 * (_0x529709 / _0x46a6eb["height"]), _0x20045a["mouseMovementX"] = _0x49eb1c - _0x20045a["mouseX"], _0x20045a["mouseMovementY"] = _0x2cbfa2 - _0x20045a["mouseY"], _0x20045a["mouseX"] = _0x49eb1c, _0x20045a["mouseY"] = _0x2cbfa2;
      }
    }, resizeListeners: [], updateResizeListeners: function () {
      var _0x12e033 = _0x4bcfe1["canvas"];
      _0x20045a["resizeListeners"]["forEach"](function (_0x29bb2b) {
        _0x29bb2b(_0x12e033["width"], _0x12e033["height"]);
      });
    }, setCanvasSize: function (_0x1fa7bf, _0x3ea0c7, _0x3bb855) {
      var _0x59e49f = _0x4bcfe1["canvas"];
      _0x20045a["updateCanvasDimensions"](_0x59e49f, _0x1fa7bf, _0x3ea0c7);
      if (!_0x3bb855) _0x20045a["updateResizeListeners"]();
    }, windowedWidth: 0, windowedHeight: 0, setFullscreenCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x5b3c8c = _0x29f705[SDL["screen"] >> 2];
        _0x5b3c8c = _0x5b3c8c | 8388608, _0x46c9cf[SDL["screen"] >> 2] = _0x5b3c8c;
      }
      _0x20045a["updateCanvasDimensions"](_0x4bcfe1["canvas"]), _0x20045a["updateResizeListeners"]();
    }, setWindowedCanvasSize: function () {
      if (typeof SDL != "undefined") {
        var _0x287970 = _0x29f705[SDL["screen"] >> 2];
        _0x287970 = _0x287970 & -8388609, _0x46c9cf[SDL["screen"] >> 2] = _0x287970;
      }
      _0x20045a["updateCanvasDimensions"](_0x4bcfe1["canvas"]), _0x20045a["updateResizeListeners"]();
    }, updateCanvasDimensions: function (_0x2ae3bb, _0x5e8062, _0x2ba6dd) {
      _0x5e8062 && _0x2ba6dd ? (_0x2ae3bb["widthNative"] = _0x5e8062, _0x2ae3bb["heightNative"] = _0x2ba6dd) : (_0x5e8062 = _0x2ae3bb["widthNative"], _0x2ba6dd = _0x2ae3bb["heightNative"]);
      var _0x159846 = _0x5e8062, _0x48dfc6 = _0x2ba6dd;
      _0x4bcfe1["forcedAspectRatio"] && _0x4bcfe1["forcedAspectRatio"] > 0 && (_0x159846 / _0x48dfc6 < _0x4bcfe1["forcedAspectRatio"] ? _0x159846 = Math["round"](_0x48dfc6 * _0x4bcfe1["forcedAspectRatio"]) : _0x48dfc6 = Math["round"](_0x159846 / _0x4bcfe1["forcedAspectRatio"]));
      if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === _0x2ae3bb["parentNode"] && typeof screen != "undefined") {
        var _0x255450 = Math["min"](screen["width"] / _0x159846, screen["height"] / _0x48dfc6);
        _0x159846 = Math["round"](_0x159846 * _0x255450), _0x48dfc6 = Math["round"](_0x48dfc6 * _0x255450);
      }
      if (_0x20045a["resizeCanvas"]) {
        if (_0x2ae3bb["width"] != _0x159846) _0x2ae3bb["width"] = _0x159846;
        if (_0x2ae3bb["height"] != _0x48dfc6) _0x2ae3bb["height"] = _0x48dfc6;
        typeof _0x2ae3bb["style"] != "undefined" && (_0x2ae3bb["style"]["removeProperty"]("width"), _0x2ae3bb["style"]["removeProperty"]("height"));
      } else {
        if (_0x2ae3bb["width"] != _0x5e8062) _0x2ae3bb["width"] = _0x5e8062;
        if (_0x2ae3bb["height"] != _0x2ba6dd) _0x2ae3bb["height"] = _0x2ba6dd;
        typeof _0x2ae3bb["style"] != "undefined" && (_0x159846 != _0x5e8062 || _0x48dfc6 != _0x2ba6dd ? (_0x2ae3bb["style"]["setProperty"]("width", _0x159846 + "px", "important"), _0x2ae3bb["style"]["setProperty"]("height", _0x48dfc6 + "px", "important")) : (_0x2ae3bb["style"]["removeProperty"]("width"), _0x2ae3bb["style"]["removeProperty"]("height")));
      }
    }};
    function _0x6e2eec() {
      _0x20045a["mainLoop"]["pause"](), _0x20045a["mainLoop"]["func"] = null;
    }
    function _0x14f42c(_0x32bf33) {
      clearInterval(_0x32bf33);
    }
    var _0x1d6235 = {inEventHandler: 0, removeAllEventListeners: function () {
      for (var _0x141c38 = _0x1d6235["eventHandlers"]["length"] - 1; _0x141c38 >= 0; --_0x141c38) {
        _0x1d6235["_removeHandler"](_0x141c38);
      }
      _0x1d6235["eventHandlers"] = [], _0x1d6235["deferredCalls"] = [];
    }, registerRemoveEventListeners: function () {
      !_0x1d6235["removeEventListenersRegistered"] && (_0xdd5bdd["push"](_0x1d6235["removeAllEventListeners"]), _0x1d6235["removeEventListenersRegistered"] = true);
    }, deferredCalls: [], deferCall: function (_0x31f008, _0x5d7ad3, _0x87e931) {
      function _0x1d8f3e(_0x48ba38, _0x510de5) {
        if (_0x48ba38["length"] != _0x510de5["length"]) return false;
        for (var _0xea1a23 in _0x48ba38) {
          if (_0x48ba38[_0xea1a23] != _0x510de5[_0xea1a23]) return false;
        }
        return true;
      }
      for (var _0x46ffe9 in _0x1d6235["deferredCalls"]) {
        var _0x2629f9 = _0x1d6235["deferredCalls"][_0x46ffe9];
        if (_0x2629f9["targetFunction"] == _0x31f008 && _0x1d8f3e(_0x2629f9["argsList"], _0x87e931)) return;
      }
      _0x1d6235["deferredCalls"]["push"]({targetFunction: _0x31f008, precedence: _0x5d7ad3, argsList: _0x87e931}), _0x1d6235["deferredCalls"]["sort"](function (_0x2c933a, _0x2f9ea2) {
        return _0x2c933a["precedence"] < _0x2f9ea2["precedence"];
      });
    }, removeDeferredCalls: function (_0x5c16b7) {
      for (var _0x25ec7a = 0; _0x25ec7a < _0x1d6235["deferredCalls"]["length"]; ++_0x25ec7a) {
        _0x1d6235["deferredCalls"][_0x25ec7a]["targetFunction"] == _0x5c16b7 && (_0x1d6235["deferredCalls"]["splice"](_0x25ec7a, 1), --_0x25ec7a);
      }
    }, canPerformEventHandlerRequests: function () {
      return _0x1d6235["inEventHandler"] && _0x1d6235["currentEventHandler"]["allowsDeferredCalls"];
    }, runDeferredCalls: function () {
      if (!_0x1d6235["canPerformEventHandlerRequests"]()) return;
      for (var _0x113728 = 0; _0x113728 < _0x1d6235["deferredCalls"]["length"]; ++_0x113728) {
        var _0x305e56 = _0x1d6235["deferredCalls"][_0x113728];
        _0x1d6235["deferredCalls"]["splice"](_0x113728, 1), --_0x113728, _0x305e56["targetFunction"]["apply"](null, _0x305e56["argsList"]);
      }
    }, eventHandlers: [], removeAllHandlersOnTarget: function (_0x2b6cd2, _0x102dbd) {
      for (var _0x23fff4 = 0; _0x23fff4 < _0x1d6235["eventHandlers"]["length"]; ++_0x23fff4) {
        _0x1d6235["eventHandlers"][_0x23fff4]["target"] == _0x2b6cd2 && (!_0x102dbd || _0x102dbd == _0x1d6235["eventHandlers"][_0x23fff4]["eventTypeString"]) && _0x1d6235["_removeHandler"](_0x23fff4--);
      }
    }, _removeHandler: function (_0x41a0a4) {
      var _0x480fbf = _0x1d6235["eventHandlers"][_0x41a0a4];
      _0x480fbf["target"]["removeEventListener"](_0x480fbf["eventTypeString"], _0x480fbf["eventListenerFunc"], _0x480fbf["useCapture"]), _0x1d6235["eventHandlers"]["splice"](_0x41a0a4, 1);
    }, registerOrRemoveHandler: function (_0x45b1ba) {
      var _0x12250d = function _0x346513(_0x4ecc5e) {
        ++_0x1d6235["inEventHandler"], _0x1d6235["currentEventHandler"] = _0x45b1ba, _0x1d6235["runDeferredCalls"](), _0x45b1ba["handlerFunc"](_0x4ecc5e), _0x1d6235["runDeferredCalls"](), --_0x1d6235["inEventHandler"];
      };
      if (_0x45b1ba["callbackfunc"]) _0x45b1ba["eventListenerFunc"] = _0x12250d, _0x45b1ba["target"]["addEventListener"](_0x45b1ba["eventTypeString"], _0x12250d, _0x45b1ba["useCapture"]), _0x1d6235["eventHandlers"]["push"](_0x45b1ba), _0x1d6235["registerRemoveEventListeners"](); else for (var _0x2f67e7 = 0; _0x2f67e7 < _0x1d6235["eventHandlers"]["length"]; ++_0x2f67e7) {
        _0x1d6235["eventHandlers"][_0x2f67e7]["target"] == _0x45b1ba["target"] && _0x1d6235["eventHandlers"][_0x2f67e7]["eventTypeString"] == _0x45b1ba["eventTypeString"] && _0x1d6235["_removeHandler"](_0x2f67e7--);
      }
    }, getNodeNameForTarget: function (_0x38debe) {
      if (!_0x38debe) return "";
      if (_0x38debe == window) return "#window";
      if (_0x38debe == screen) return "#screen";
      return _0x38debe && _0x38debe["nodeName"] ? _0x38debe["nodeName"] : "";
    }, fullscreenEnabled: function () {
      return document["fullscreenEnabled"] || document["webkitFullscreenEnabled"];
    }}, _0x2e5aa0 = {};
    function _0x38880d(_0x5cc27d) {
      return _0x5cc27d > 2 ? _0x30a7f6(_0x5cc27d) : _0x5cc27d;
    }
    var _0x333b7a = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];
    function _0xab2e79(_0x781523) {
      _0x781523 = _0x38880d(_0x781523);
      var _0x45f8e5 = _0x333b7a[_0x781523] || (typeof document != "undefined" ? document["querySelector"](_0x781523) : undefined);
      return _0x45f8e5;
    }
    function _0x422f86(_0x27c0b8) {
      return _0xab2e79(_0x27c0b8);
    }
    function _0x4b4d0d(_0x422188, _0x394343, _0x4bd05f) {
      var _0x19f12d = _0x422f86(_0x422188);
      if (!_0x19f12d) return -4;
      _0x46c9cf[_0x394343 >> 2] = _0x19f12d["width"], _0x46c9cf[_0x4bd05f >> 2] = _0x19f12d["height"];
    }
    function _0x312773(_0x201310) {
      return _0xaee4cf(function () {
        var _0x460c44 = _0x1d99d1(8), _0x558c51 = _0x460c44 + 4, _0x252044 = _0x1d99d1(_0x201310["id"]["length"] + 1);
        _0x1714da(_0x201310["id"], _0x252044, _0x201310["id"]["length"] + 1);
        var _0x14327b = _0x4b4d0d(_0x252044, _0x460c44, _0x558c51), _0x16db1a = [_0x46c9cf[_0x460c44 >> 2], _0x46c9cf[_0x558c51 >> 2]];
        return _0x16db1a;
      });
    }
    function _0x551975(_0x943ae1, _0x59e0dd, _0x2abc9e) {
      var _0x2ff211 = _0x422f86(_0x943ae1);
      if (!_0x2ff211) return -4;
      return _0x2ff211["width"] = _0x59e0dd, _0x2ff211["height"] = _0x2abc9e, 0;
    }
    function _0x17eb4e(_0x40adcc, _0x36b8ff, _0x2567a3) {
      !_0x40adcc["controlTransferredOffscreen"] ? (_0x40adcc["width"] = _0x36b8ff, _0x40adcc["height"] = _0x2567a3) : _0xaee4cf(function () {
        var _0x26cc76 = _0x1d99d1(_0x40adcc["id"]["length"] + 1);
        _0x1714da(_0x40adcc["id"], _0x26cc76, _0x40adcc["id"]["length"] + 1), _0x551975(_0x26cc76, _0x36b8ff, _0x2567a3);
      });
    }
    function _0x155dd3(_0x12de31) {
      var _0x793aa6 = _0x312773(_0x12de31), _0x1b0404 = _0x793aa6[0], _0x43f3a0 = _0x793aa6[1], _0x54b10f = _0x12de31["style"]["width"], _0x2854eb = _0x12de31["style"]["height"], _0x1468c = _0x12de31["style"]["backgroundColor"], _0x434ae9 = document["body"]["style"]["backgroundColor"], _0x59c9a4 = _0x12de31["style"]["paddingLeft"], _0x4c6ef2 = _0x12de31["style"]["paddingRight"], _0x17f1df = _0x12de31["style"]["paddingTop"], _0x89929 = _0x12de31["style"]["paddingBottom"], _0x17a4c5 = _0x12de31["style"]["marginLeft"], _0x398405 = _0x12de31["style"]["marginRight"], _0x3da7a9 = _0x12de31["style"]["marginTop"], _0x57a632 = _0x12de31["style"]["marginBottom"], _0x3267ab = document["body"]["style"]["margin"], _0x12c4bf = document["documentElement"]["style"]["overflow"], _0x153090 = document["body"]["scroll"], _0x5abc79 = _0x12de31["style"]["imageRendering"];
      function _0x558e52() {
        var _0x25c698 = document["fullscreenElement"] || document["webkitFullscreenElement"] || document["msFullscreenElement"];
        if (!_0x25c698) {
          document["removeEventListener"]("fullscreenchange", _0x558e52), document["removeEventListener"]("webkitfullscreenchange", _0x558e52), _0x17eb4e(_0x12de31, _0x1b0404, _0x43f3a0), _0x12de31["style"]["width"] = _0x54b10f, _0x12de31["style"]["height"] = _0x2854eb, _0x12de31["style"]["backgroundColor"] = _0x1468c;
          if (!_0x434ae9) document["body"]["style"]["backgroundColor"] = "white";
          document["body"]["style"]["backgroundColor"] = _0x434ae9, _0x12de31["style"]["paddingLeft"] = _0x59c9a4, _0x12de31["style"]["paddingRight"] = _0x4c6ef2, _0x12de31["style"]["paddingTop"] = _0x17f1df, _0x12de31["style"]["paddingBottom"] = _0x89929, _0x12de31["style"]["marginLeft"] = _0x17a4c5, _0x12de31["style"]["marginRight"] = _0x398405, _0x12de31["style"]["marginTop"] = _0x3da7a9, _0x12de31["style"]["marginBottom"] = _0x57a632, document["body"]["style"]["margin"] = _0x3267ab, document["documentElement"]["style"]["overflow"] = _0x12c4bf, document["body"]["scroll"] = _0x153090, _0x12de31["style"]["imageRendering"] = _0x5abc79;
          if (_0x12de31["GLctxObject"]) _0x12de31["GLctxObject"]["GLctx"]["viewport"](0, 0, _0x1b0404, _0x43f3a0);
          _0x2e5aa0["canvasResizedCallback"] && function (_0xb7a7ae, _0x3cd2cb, _0x53dbad) {
            return _0x3ba9fb["apply"](null, [_0x2e5aa0["canvasResizedCallback"], _0xb7a7ae, _0x3cd2cb, _0x53dbad]);
          }(37, 0, _0x2e5aa0["canvasResizedCallbackUserData"]);
        }
      }
      return document["addEventListener"]("fullscreenchange", _0x558e52), document["addEventListener"]("webkitfullscreenchange", _0x558e52), _0x558e52;
    }
    function _0x574303(_0x5eca29, _0xf84803, _0xd6ccf1) {
      _0x5eca29["style"]["paddingLeft"] = _0x5eca29["style"]["paddingRight"] = _0xd6ccf1 + "px", _0x5eca29["style"]["paddingTop"] = _0x5eca29["style"]["paddingBottom"] = _0xf84803 + "px";
    }
    function _0x455524(_0x3bd168) {
      return _0x333b7a["indexOf"](_0x3bd168) < 0 ? _0x3bd168["getBoundingClientRect"]() : {left: 0, top: 0};
    }
    function _0x59bca3(_0x1ad7d4, _0x12936e) {
      var _0x4bb542 = _0x155dd3(_0x1ad7d4), _0x205332 = _0x12936e["softFullscreen"] ? innerWidth : screen["width"], _0x44aaba = _0x12936e["softFullscreen"] ? innerHeight : screen["height"], _0x5bde5b = _0x455524(_0x1ad7d4), _0xe60330 = _0x5bde5b["width"], _0x40a826 = _0x5bde5b["height"], _0x31c365 = _0x312773(_0x1ad7d4), _0x4637d8 = _0x31c365[0], _0x3fdf3b = _0x31c365[1];
      if (_0x12936e["scaleMode"] == 3) _0x574303(_0x1ad7d4, (_0x44aaba - _0x40a826) / 2, (_0x205332 - _0xe60330) / 2), _0x205332 = _0xe60330, _0x44aaba = _0x40a826; else {
        if (_0x12936e["scaleMode"] == 2) {
          if (_0x205332 * _0x3fdf3b < _0x4637d8 * _0x44aaba) {
            var _0x5e3ed2 = _0x3fdf3b * _0x205332 / _0x4637d8;
            _0x574303(_0x1ad7d4, (_0x44aaba - _0x5e3ed2) / 2, 0), _0x44aaba = _0x5e3ed2;
          } else {
            var _0x93093a = _0x4637d8 * _0x44aaba / _0x3fdf3b;
            _0x574303(_0x1ad7d4, 0, (_0x205332 - _0x93093a) / 2), _0x205332 = _0x93093a;
          }
        }
      }
      if (!_0x1ad7d4["style"]["backgroundColor"]) _0x1ad7d4["style"]["backgroundColor"] = "black";
      if (!document["body"]["style"]["backgroundColor"]) document["body"]["style"]["backgroundColor"] = "black";
      _0x1ad7d4["style"]["width"] = _0x205332 + "px", _0x1ad7d4["style"]["height"] = _0x44aaba + "px";
      _0x12936e["filteringMode"] == 1 && (_0x1ad7d4["style"]["imageRendering"] = "optimizeSpeed", _0x1ad7d4["style"]["imageRendering"] = "-moz-crisp-edges", _0x1ad7d4["style"]["imageRendering"] = "-o-crisp-edges", _0x1ad7d4["style"]["imageRendering"] = "-webkit-optimize-contrast", _0x1ad7d4["style"]["imageRendering"] = "optimize-contrast", _0x1ad7d4["style"]["imageRendering"] = "crisp-edges", _0x1ad7d4["style"]["imageRendering"] = "pixelated");
      var _0x361614 = _0x12936e["canvasResolutionScaleMode"] == 2 ? devicePixelRatio : 1;
      if (_0x12936e["canvasResolutionScaleMode"] != 0) {
        var _0x1cb630 = _0x205332 * _0x361614 | 0, _0x59d135 = _0x44aaba * _0x361614 | 0;
        _0x17eb4e(_0x1ad7d4, _0x1cb630, _0x59d135);
        if (_0x1ad7d4["GLctxObject"]) _0x1ad7d4["GLctxObject"]["GLctx"]["viewport"](0, 0, _0x1cb630, _0x59d135);
      }
      return _0x4bb542;
    }
    function _0x497818(_0x39b3f7, _0x416ea1) {
      (_0x416ea1["scaleMode"] != 0 || _0x416ea1["canvasResolutionScaleMode"] != 0) && _0x59bca3(_0x39b3f7, _0x416ea1);
      if (_0x39b3f7["requestFullscreen"]) _0x39b3f7["requestFullscreen"](); else {
        if (_0x39b3f7["webkitRequestFullscreen"]) _0x39b3f7["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]); else return _0x1d6235["fullscreenEnabled"]() ? -3 : -1;
      }
      return _0x2e5aa0 = _0x416ea1, _0x416ea1["canvasResizedCallback"] && function (_0x4a11a3, _0x29b091, _0xa7cbc8) {
        return _0x3ba9fb["apply"](null, [_0x416ea1["canvasResizedCallback"], _0x4a11a3, _0x29b091, _0xa7cbc8]);
      }(37, 0, _0x416ea1["canvasResizedCallbackUserData"]), 0;
    }
    function _0x5ba88e() {
      if (!_0x1d6235["fullscreenEnabled"]()) return -1;
      _0x1d6235["removeDeferredCalls"](_0x497818);
      var _0x40162f = _0x333b7a[1];
      if (_0x40162f["exitFullscreen"]) _0x40162f["fullscreenElement"] && _0x40162f["exitFullscreen"](); else {
        if (_0x40162f["webkitExitFullscreen"]) _0x40162f["webkitFullscreenElement"] && _0x40162f["webkitExitFullscreen"](); else return -1;
      }
      return 0;
    }
    function _0x56ecee(_0x7501a5) {
      if (_0x7501a5["requestPointerLock"]) _0x7501a5["requestPointerLock"](); else {
        if (_0x7501a5["msRequestPointerLock"]) _0x7501a5["msRequestPointerLock"](); else return document["body"]["requestPointerLock"] || document["body"]["msRequestPointerLock"] ? -3 : -1;
      }
      return 0;
    }
    function _0x421ff2() {
      _0x1d6235["removeDeferredCalls"](_0x56ecee);
      if (document["exitPointerLock"]) document["exitPointerLock"](); else {
        if (document["msExitPointerLock"]) document["msExitPointerLock"](); else return -1;
      }
      return 0;
    }
    function _0x578534(_0x32b07c) {
      var _0x461ce4 = document["fullscreenElement"] || document["mozFullScreenElement"] || document["webkitFullscreenElement"] || document["msFullscreenElement"], _0x13068a = !!_0x461ce4;
      _0x46c9cf[_0x32b07c >> 2] = _0x13068a, _0x46c9cf[_0x32b07c + 4 >> 2] = _0x1d6235["fullscreenEnabled"]();
      var _0x548f9d = _0x13068a ? _0x461ce4 : _0x1d6235["previousFullscreenElement"], _0xd3228e = _0x1d6235["getNodeNameForTarget"](_0x548f9d), _0x77914f = _0x548f9d && _0x548f9d["id"] ? _0x548f9d["id"] : "";
      _0x1714da(_0xd3228e, _0x32b07c + 8, 128), _0x1714da(_0x77914f, _0x32b07c + 136, 128), _0x46c9cf[_0x32b07c + 264 >> 2] = _0x548f9d ? _0x548f9d["clientWidth"] : 0, _0x46c9cf[_0x32b07c + 268 >> 2] = _0x548f9d ? _0x548f9d["clientHeight"] : 0, _0x46c9cf[_0x32b07c + 272 >> 2] = screen["width"], _0x46c9cf[_0x32b07c + 276 >> 2] = screen["height"], _0x13068a && (_0x1d6235["previousFullscreenElement"] = _0x461ce4);
    }
    function _0x2ae944(_0x5db503) {
      if (!_0x1d6235["fullscreenEnabled"]()) return -1;
      return _0x578534(_0x5db503), 0;
    }
    function _0x4ca2ae(_0x6fa92d, _0xf8a962) {
      _0x267920[_0x6fa92d >> 3] = _0xf8a962["timestamp"];
      for (var _0x51555c = 0; _0x51555c < _0xf8a962["axes"]["length"]; ++_0x51555c) {
        _0x267920[_0x6fa92d + _0x51555c * 8 + 16 >> 3] = _0xf8a962["axes"][_0x51555c];
      }
      for (var _0x51555c = 0; _0x51555c < _0xf8a962["buttons"]["length"]; ++_0x51555c) {
        typeof _0xf8a962["buttons"][_0x51555c] == "object" ? _0x267920[_0x6fa92d + _0x51555c * 8 + 528 >> 3] = _0xf8a962["buttons"][_0x51555c]["value"] : _0x267920[_0x6fa92d + _0x51555c * 8 + 528 >> 3] = _0xf8a962["buttons"][_0x51555c];
      }
      for (var _0x51555c = 0; _0x51555c < _0xf8a962["buttons"]["length"]; ++_0x51555c) {
        typeof _0xf8a962["buttons"][_0x51555c] == "object" ? _0x46c9cf[_0x6fa92d + _0x51555c * 4 + 1040 >> 2] = _0xf8a962["buttons"][_0x51555c]["pressed"] : _0x46c9cf[_0x6fa92d + _0x51555c * 4 + 1040 >> 2] = _0xf8a962["buttons"][_0x51555c] == 1;
      }
      _0x46c9cf[_0x6fa92d + 1296 >> 2] = _0xf8a962["connected"], _0x46c9cf[_0x6fa92d + 1300 >> 2] = _0xf8a962["index"], _0x46c9cf[_0x6fa92d + 8 >> 2] = _0xf8a962["axes"]["length"], _0x46c9cf[_0x6fa92d + 12 >> 2] = _0xf8a962["buttons"]["length"], _0x1714da(_0xf8a962["id"], _0x6fa92d + 1304, 64), _0x1714da(_0xf8a962["mapping"], _0x6fa92d + 1368, 64);
    }
    function _0x5883b0(_0x48b8e6, _0x26973d) {
      if (_0x48b8e6 < 0 || _0x48b8e6 >= _0x1d6235["lastGamepadState"]["length"]) return -5;
      if (!_0x1d6235["lastGamepadState"][_0x48b8e6]) return -7;
      return _0x4ca2ae(_0x26973d, _0x1d6235["lastGamepadState"][_0x48b8e6]), 0;
    }
    function _0xf98318() {
      return 2147483648;
    }
    function _0xe1a881() {
      if (_0x4da766) return 1; else return 1e3;
    }
    function _0x2600c3() {
      return _0x1d6235["lastGamepadState"]["length"];
    }
    function _0x4c1226() {
      _0x1d6235["removeAllEventListeners"]();
    }
    function _0x2c6662(_0x21f2e5) {
      return !_0x2ab728["contexts"][_0x21f2e5] || _0x2ab728["contexts"][_0x21f2e5]["GLctx"]["isContextLost"]();
    }
    function _0x38633a(_0x20e018) {
      return _0x20e018 < 0 || _0x20e018 === 0 && 1 / _0x20e018 === -Infinity;
    }
    function _0x16f0ec(_0x5c3b3c, _0x4f5fee) {
      return (_0x5c3b3c >>> 0) + _0x4f5fee * 4294967296;
    }
    function _0x4fe362(_0x224b69, _0x193224) {
      return (_0x224b69 >>> 0) + (_0x193224 >>> 0) * 4294967296;
    }
    function _0x183c7e(_0x217d02, _0x37aac5) {
      if (_0x217d02 <= 0) return _0x217d02;
      var _0x23b98f = _0x37aac5 <= 32 ? Math["abs"](1 << _0x37aac5 - 1) : Math["pow"](2, _0x37aac5 - 1);
      return _0x217d02 >= _0x23b98f && (_0x37aac5 <= 32 || _0x217d02 > _0x23b98f) && (_0x217d02 = -2 * _0x23b98f + _0x217d02), _0x217d02;
    }
    function _0x2f7357(_0x3213f9, _0x3a4df7) {
      if (_0x3213f9 >= 0) return _0x3213f9;
      return _0x3a4df7 <= 32 ? 2 * Math["abs"](1 << _0x3a4df7 - 1) + _0x3213f9 : Math["pow"](2, _0x3a4df7) + _0x3213f9;
    }
    function _0x31c49f(_0x5f1a8e, _0x41ca17) {
      var _0x1f327e = _0x5f1a8e, _0x23483b = _0x41ca17;
      function _0x3c9f82(_0x1bda45, _0x4422f0) {
        if (_0x4422f0 === "double" || _0x4422f0 === "i64") _0x1bda45 & 7 && (_0x1bda45 += 4); else {}
        return _0x1bda45;
      }
      function _0x3dc2ef(_0x4889ce) {
        var _0x31570e;
        _0x23483b = _0x3c9f82(_0x23483b, _0x4889ce);
        if (_0x4889ce === "double") _0x31570e = Number(_0x267920[_0x23483b >> 3]), _0x23483b += 8; else _0x4889ce == "i64" ? (_0x31570e = [_0x46c9cf[_0x23483b >> 2], _0x46c9cf[_0x23483b + 4 >> 2]], _0x23483b += 8) : (_0x4889ce = "i32", _0x31570e = _0x46c9cf[_0x23483b >> 2], _0x23483b += 4);
        return _0x31570e;
      }
      var _0x16dcc6 = [], _0x563af9, _0x7130a6, _0x399e51;
      while (1) {
        var _0x36e7c5 = _0x1f327e;
        _0x563af9 = _0x59ed12[_0x1f327e >> 0];
        if (_0x563af9 === 0) break;
        _0x7130a6 = _0x59ed12[_0x1f327e + 1 >> 0];
        if (_0x563af9 == 37) {
          var _0x58b47f = false, _0x2b08ff = false, _0x88ab86 = false, _0x12d728 = false, _0x564ec5 = false;
          _0x46278b: while (1) {
            switch (_0x7130a6) {
              case 43:
                _0x58b47f = true;
                break;
              case 45:
                _0x2b08ff = true;
                break;
              case 35:
                _0x88ab86 = true;
                break;
              case 48:
                if (_0x12d728) break _0x46278b; else {
                  _0x12d728 = true;
                  break;
                }
              case 32:
                _0x564ec5 = true;
                break;
              default:
                break _0x46278b;
            }
            _0x1f327e++, _0x7130a6 = _0x59ed12[_0x1f327e + 1 >> 0];
          }
          var _0x1c05a4 = 0;
          if (_0x7130a6 == 42) _0x1c05a4 = _0x3dc2ef("i32"), _0x1f327e++, _0x7130a6 = _0x59ed12[_0x1f327e + 1 >> 0]; else while (_0x7130a6 >= 48 && _0x7130a6 <= 57) {
            _0x1c05a4 = _0x1c05a4 * 10 + (_0x7130a6 - 48), _0x1f327e++, _0x7130a6 = _0x59ed12[_0x1f327e + 1 >> 0];
          }
          var _0x58198e = false, _0x57c69e = -1;
          if (_0x7130a6 == 46) {
            _0x57c69e = 0, _0x58198e = true, _0x1f327e++, _0x7130a6 = _0x59ed12[_0x1f327e + 1 >> 0];
            if (_0x7130a6 == 42) _0x57c69e = _0x3dc2ef("i32"), _0x1f327e++; else while (1) {
              var _0x4abe27 = _0x59ed12[_0x1f327e + 1 >> 0];
              if (_0x4abe27 < 48 || _0x4abe27 > 57) break;
              _0x57c69e = _0x57c69e * 10 + (_0x4abe27 - 48), _0x1f327e++;
            }
            _0x7130a6 = _0x59ed12[_0x1f327e + 1 >> 0];
          }
          _0x57c69e < 0 && (_0x57c69e = 6, _0x58198e = false);
          var _0x57c05f;
          switch (String["fromCharCode"](_0x7130a6)) {
            case "h":
              var _0x358b90 = _0x59ed12[_0x1f327e + 2 >> 0];
              _0x358b90 == 104 ? (_0x1f327e++, _0x57c05f = 1) : _0x57c05f = 2;
              break;
            case "l":
              var _0x358b90 = _0x59ed12[_0x1f327e + 2 >> 0];
              _0x358b90 == 108 ? (_0x1f327e++, _0x57c05f = 8) : _0x57c05f = 4;
              break;
            case "L":
            case "q":
            case "j":
              _0x57c05f = 8;
              break;
            case "z":
            case "t":
            case "I":
              _0x57c05f = 4;
              break;
            default:
              _0x57c05f = null;
          }
          if (_0x57c05f) _0x1f327e++;
          _0x7130a6 = _0x59ed12[_0x1f327e + 1 >> 0];
          switch (String["fromCharCode"](_0x7130a6)) {
            case "d":
            case "i":
            case "u":
            case "o":
            case "x":
            case "X":
            case "p":
              {
                var _0x4c59de = _0x7130a6 == 100 || _0x7130a6 == 105;
                _0x57c05f = _0x57c05f || 4, _0x399e51 = _0x3dc2ef("i" + _0x57c05f * 8);
                var _0x3a4161;
                _0x57c05f == 8 && (_0x399e51 = _0x7130a6 == 117 ? _0x4fe362(_0x399e51[0], _0x399e51[1]) : _0x16f0ec(_0x399e51[0], _0x399e51[1]));
                if (_0x57c05f <= 4) {
                  var _0x4e7864 = Math["pow"](256, _0x57c05f) - 1;
                  _0x399e51 = (_0x4c59de ? _0x183c7e : _0x2f7357)(_0x399e51 & _0x4e7864, _0x57c05f * 8);
                }
                var _0x5488fc = Math["abs"](_0x399e51), _0x4391a0 = "";
                if (_0x7130a6 == 100 || _0x7130a6 == 105) _0x3a4161 = _0x183c7e(_0x399e51, 8 * _0x57c05f)["toString"](10); else {
                  if (_0x7130a6 == 117) _0x3a4161 = _0x2f7357(_0x399e51, 8 * _0x57c05f)["toString"](10), _0x399e51 = Math["abs"](_0x399e51); else {
                    if (_0x7130a6 == 111) _0x3a4161 = (_0x88ab86 ? "0" : "") + _0x5488fc["toString"](8); else {
                      if (_0x7130a6 == 120 || _0x7130a6 == 88) {
                        _0x4391a0 = _0x88ab86 && _0x399e51 != 0 ? "0x" : "";
                        if (_0x399e51 < 0) {
                          _0x399e51 = -_0x399e51, _0x3a4161 = (_0x5488fc - 1)["toString"](16);
                          var _0x1c3aa9 = [];
                          for (var _0xd7c221 = 0; _0xd7c221 < _0x3a4161["length"]; _0xd7c221++) {
                            _0x1c3aa9["push"]((15 - parseInt(_0x3a4161[_0xd7c221], 16))["toString"](16));
                          }
                          _0x3a4161 = _0x1c3aa9["join"]("");
                          while (_0x3a4161["length"] < _0x57c05f * 2) _0x3a4161 = "f" + _0x3a4161;
                        } else _0x3a4161 = _0x5488fc["toString"](16);
                        _0x7130a6 == 88 && (_0x4391a0 = _0x4391a0["toUpperCase"](), _0x3a4161 = _0x3a4161["toUpperCase"]());
                      } else _0x7130a6 == 112 && (_0x5488fc === 0 ? _0x3a4161 = "(nil)" : (_0x4391a0 = "0x", _0x3a4161 = _0x5488fc["toString"](16)));
                    }
                  }
                }
                if (_0x58198e) while (_0x3a4161["length"] < _0x57c69e) {
                  _0x3a4161 = "0" + _0x3a4161;
                }
                if (_0x399e51 >= 0) {
                  if (_0x58b47f) _0x4391a0 = "+" + _0x4391a0; else _0x564ec5 && (_0x4391a0 = " " + _0x4391a0);
                }
                _0x3a4161["charAt"](0) == "-" && (_0x4391a0 = "-" + _0x4391a0, _0x3a4161 = _0x3a4161["substr"](1));
                while (_0x4391a0["length"] + _0x3a4161["length"] < _0x1c05a4) {
                  _0x2b08ff ? _0x3a4161 += " " : _0x12d728 ? _0x3a4161 = "0" + _0x3a4161 : _0x4391a0 = " " + _0x4391a0;
                }
                _0x3a4161 = _0x4391a0 + _0x3a4161, _0x3a4161["split"]("")["forEach"](function (_0xde9151) {
                  _0x16dcc6["push"](_0xde9151["charCodeAt"](0));
                });
                break;
              }
            case "f":
            case "F":
            case "e":
            case "E":
            case "g":
            case "G":
              {
                _0x399e51 = _0x3dc2ef("double");
                var _0x3a4161;
                if (isNaN(_0x399e51)) _0x3a4161 = "nan", _0x12d728 = false; else {
                  if (!isFinite(_0x399e51)) _0x3a4161 = (_0x399e51 < 0 ? "-" : "") + "inf", _0x12d728 = false; else {
                    var _0x16bffb = false, _0x44a4b3 = Math["min"](_0x57c69e, 20);
                    if (_0x7130a6 == 103 || _0x7130a6 == 71) {
                      _0x16bffb = true, _0x57c69e = _0x57c69e || 1;
                      var _0x592f8c = parseInt(_0x399e51["toExponential"](_0x44a4b3)["split"]("e")[1], 10);
                      _0x57c69e > _0x592f8c && _0x592f8c >= -4 ? (_0x7130a6 = (_0x7130a6 == 103 ? "f" : "F")["charCodeAt"](0), _0x57c69e -= _0x592f8c + 1) : (_0x7130a6 = (_0x7130a6 == 103 ? "e" : "E")["charCodeAt"](0), _0x57c69e--), _0x44a4b3 = Math["min"](_0x57c69e, 20);
                    }
                    if (_0x7130a6 == 101 || _0x7130a6 == 69) _0x3a4161 = _0x399e51["toExponential"](_0x44a4b3), /[eE][-+]\d$/["test"](_0x3a4161) && (_0x3a4161 = _0x3a4161["slice"](0, -1) + "0" + _0x3a4161["slice"](-1)); else (_0x7130a6 == 102 || _0x7130a6 == 70) && (_0x3a4161 = _0x399e51["toFixed"](_0x44a4b3), _0x399e51 === 0 && _0x38633a(_0x399e51) && (_0x3a4161 = "-" + _0x3a4161));
                    var _0x2b0c03 = _0x3a4161["split"]("e");
                    if (_0x16bffb && !_0x88ab86) while (_0x2b0c03[0]["length"] > 1 && _0x2b0c03[0]["includes"](".") && (_0x2b0c03[0]["slice"](-1) == "0" || _0x2b0c03[0]["slice"](-1) == ".")) {
                      _0x2b0c03[0] = _0x2b0c03[0]["slice"](0, -1);
                    } else {
                      if (_0x88ab86 && _0x3a4161["indexOf"](".") == -1) _0x2b0c03[0] += ".";
                      while (_0x57c69e > _0x44a4b3++) _0x2b0c03[0] += "0";
                    }
                    _0x3a4161 = _0x2b0c03[0] + (_0x2b0c03["length"] > 1 ? "e" + _0x2b0c03[1] : "");
                    if (_0x7130a6 == 69) _0x3a4161 = _0x3a4161["toUpperCase"]();
                    if (_0x399e51 >= 0) {
                      if (_0x58b47f) _0x3a4161 = "+" + _0x3a4161; else _0x564ec5 && (_0x3a4161 = " " + _0x3a4161);
                    }
                  }
                }
                while (_0x3a4161["length"] < _0x1c05a4) {
                  _0x2b08ff ? _0x3a4161 += " " : _0x12d728 && (_0x3a4161[0] == "-" || _0x3a4161[0] == "+") ? _0x3a4161 = _0x3a4161[0] + "0" + _0x3a4161["slice"](1) : _0x3a4161 = (_0x12d728 ? "0" : " ") + _0x3a4161;
                }
                if (_0x7130a6 < 97) _0x3a4161 = _0x3a4161["toUpperCase"]();
                _0x3a4161["split"]("")["forEach"](function (_0x3dc8b7) {
                  _0x16dcc6["push"](_0x3dc8b7["charCodeAt"](0));
                });
                break;
              }
            case "s":
              {
                var _0x40bed2 = _0x3dc2ef("i8*"), _0x3340d2 = _0x40bed2 ? _0x3ebd1b(_0x40bed2) : "(null)"["length"];
                if (_0x58198e) _0x3340d2 = Math["min"](_0x3340d2, _0x57c69e);
                if (!_0x2b08ff) while (_0x3340d2 < _0x1c05a4--) {
                  _0x16dcc6["push"](32);
                }
                if (_0x40bed2) for (var _0xd7c221 = 0; _0xd7c221 < _0x3340d2; _0xd7c221++) {
                  _0x16dcc6["push"](_0x18c91b[_0x40bed2++ >> 0]);
                } else _0x16dcc6 = _0x16dcc6["concat"](_0x3b0517("(null)"["substr"](0, _0x3340d2), true));
                if (_0x2b08ff) while (_0x3340d2 < _0x1c05a4--) {
                  _0x16dcc6["push"](32);
                }
                break;
              }
            case "c":
              {
                if (_0x2b08ff) _0x16dcc6["push"](_0x3dc2ef("i8"));
                while (--_0x1c05a4 > 0) {
                  _0x16dcc6["push"](32);
                }
                if (!_0x2b08ff) _0x16dcc6["push"](_0x3dc2ef("i8"));
                break;
              }
            case "n":
              {
                var _0x4e71d4 = _0x3dc2ef("i32*");
                _0x46c9cf[_0x4e71d4 >> 2] = _0x16dcc6["length"];
                break;
              }
            case "%":
              {
                _0x16dcc6["push"](_0x563af9);
                break;
              }
            default:
              {
                for (var _0xd7c221 = _0x36e7c5; _0xd7c221 < _0x1f327e + 2; _0xd7c221++) {
                  _0x16dcc6["push"](_0x59ed12[_0xd7c221 >> 0]);
                }
              }
          }
          _0x1f327e += 2;
        } else _0x16dcc6["push"](_0x563af9), _0x1f327e += 1;
      }
      return _0x16dcc6;
    }
    function _0x1419fc(_0x3c9c55) {
      if (!_0x3c9c55 || !_0x3c9c55["callee"] || !_0x3c9c55["callee"]["name"]) return [null, "", ""];
      var _0x2e72d9 = _0x3c9c55["callee"]["toString"](), _0x381627 = _0x3c9c55["callee"]["name"], _0x11a5a8 = "(", _0x4f1f6d = true;
      for (var _0xdfa4f9 in _0x3c9c55) {
        var _0x189f47 = _0x3c9c55[_0xdfa4f9];
        !_0x4f1f6d && (_0x11a5a8 += ", "), _0x4f1f6d = false, typeof _0x189f47 == "number" || typeof _0x189f47 == "string" ? _0x11a5a8 += _0x189f47 : _0x11a5a8 += "(" + typeof _0x189f47 + ")";
      }
      _0x11a5a8 += ")";
      var _0x3c72c2 = _0x3c9c55["callee"]["caller"];
      _0x3c9c55 = _0x3c72c2 ? _0x3c72c2["arguments"] : [];
      if (_0x4f1f6d) _0x11a5a8 = "";
      return [_0x3c9c55, _0x381627, _0x11a5a8];
    }
    function _0x4c6e36(_0x212971) {
      var _0x3ed6e4 = _0x4c743f(), _0x336ea4 = _0x3ed6e4["lastIndexOf"]("_emscripten_log"), _0x89f567 = _0x3ed6e4["lastIndexOf"]("_emscripten_get_callstack"), _0x3c2532 = _0x3ed6e4["indexOf"]("\n", Math["max"](_0x336ea4, _0x89f567)) + 1;
      _0x3ed6e4 = _0x3ed6e4["slice"](_0x3c2532);
      _0x212971 & 32 && _0x528b37("EM_LOG_DEMANGLE is deprecated; ignoring");
      _0x212971 & 8 && typeof emscripten_source_map == "undefined" && (_0x528b37('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'), _0x212971 ^= 8, _0x212971 |= 16);
      var _0x47d029 = null;
      if (_0x212971 & 128) {
        _0x47d029 = _0x1419fc(arguments);
        while (_0x47d029[1]["includes"]("_emscripten_")) _0x47d029 = _0x1419fc(_0x47d029[0]);
      }
      var _0x10a20f = _0x3ed6e4["split"]("\n");
      _0x3ed6e4 = "";
      var _0xa84d7f = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"), _0x2fde09 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"), _0x46015c = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
      for (var _0x25bda9 in _0x10a20f) {
        var _0x3c56db = _0x10a20f[_0x25bda9], _0x552eec = "", _0x304808 = "", _0x512d93 = 0, _0x1047b5 = 0, _0x6694cd = _0x46015c["exec"](_0x3c56db);
        if (_0x6694cd && _0x6694cd["length"] == 5) _0x552eec = _0x6694cd[1], _0x304808 = _0x6694cd[2], _0x512d93 = _0x6694cd[3], _0x1047b5 = _0x6694cd[4]; else {
          _0x6694cd = _0xa84d7f["exec"](_0x3c56db);
          if (!_0x6694cd) _0x6694cd = _0x2fde09["exec"](_0x3c56db);
          if (_0x6694cd && _0x6694cd["length"] >= 4) _0x552eec = _0x6694cd[1], _0x304808 = _0x6694cd[2], _0x512d93 = _0x6694cd[3], _0x1047b5 = _0x6694cd[4] | 0; else {
            _0x3ed6e4 += _0x3c56db + "\n";
            continue;
          }
        }
        var _0x43adbe = false;
        if (_0x212971 & 8) {
          var _0x222f0f = emscripten_source_map["originalPositionFor"]({line: _0x512d93, column: _0x1047b5});
          _0x43adbe = _0x222f0f && _0x222f0f["source"], _0x43adbe && (_0x212971 & 64 && (_0x222f0f["source"] = _0x222f0f["source"]["substring"](_0x222f0f["source"]["replace"](/\\/g, "/")["lastIndexOf"]("/") + 1)), _0x3ed6e4 += "    at " + _0x552eec + " (" + _0x222f0f["source"] + ":" + _0x222f0f["line"] + ":" + _0x222f0f["column"] + ")\n");
        }
        (_0x212971 & 16 || !_0x43adbe) && (_0x212971 & 64 && (_0x304808 = _0x304808["substring"](_0x304808["replace"](/\\/g, "/")["lastIndexOf"]("/") + 1)), _0x3ed6e4 += (_0x43adbe ? "     = " + _0x552eec : "    at " + _0x552eec) + " (" + _0x304808 + ":" + _0x512d93 + ":" + _0x1047b5 + ")\n"), _0x212971 & 128 && _0x47d029[0] && (_0x47d029[1] == _0x552eec && _0x47d029[2]["length"] > 0 && (_0x3ed6e4 = _0x3ed6e4["replace"](/\s+$/, ""), _0x3ed6e4 += " with values: " + _0x47d029[1] + _0x47d029[2] + "\n"), _0x47d029 = _0x1419fc(_0x47d029[0]));
      }
      return _0x3ed6e4 = _0x3ed6e4["replace"](/\s+$/, ""), _0x3ed6e4;
    }
    function _0x57835c(_0x514af3, _0x557e18) {
      _0x514af3 & 24 && (_0x557e18 = _0x557e18["replace"](/\s+$/, ""), _0x557e18 += (_0x557e18["length"] > 0 ? "\n" : "") + _0x4c6e36(_0x514af3));
      if (_0x514af3 & 1) {
        if (_0x514af3 & 4) console["error"](_0x557e18); else {
          if (_0x514af3 & 2) console["warn"](_0x557e18); else {
            if (_0x514af3 & 512) console["info"](_0x557e18); else _0x514af3 & 256 ? console["debug"](_0x557e18) : console["log"](_0x557e18);
          }
        }
      } else _0x514af3 & 6 ? _0x119168(_0x557e18) : _0x3402e6(_0x557e18);
    }
    function _0x1bdfbc(_0x51696b, _0x294e36, _0x5293c6) {
      var _0x41c92c = _0x31c49f(_0x294e36, _0x5293c6), _0x57b110 = _0x344b4c(_0x41c92c, 0);
      _0x57835c(_0x51696b, _0x57b110);
    }
    function _0xe4ce94(_0x13f54c, _0x8b3e6b, _0x224a38) {
      _0x18c91b["copyWithin"](_0x13f54c, _0x8b3e6b, _0x8b3e6b + _0x224a38);
    }
    function _0x529376(_0x5616d3, _0x3b0fa1) {
      if (!_0x1d6235["fullscreenEnabled"]()) return -1;
      _0x5616d3 = _0xab2e79(_0x5616d3);
      if (!_0x5616d3) return -4;
      if (!_0x5616d3["requestFullscreen"] && !_0x5616d3["webkitRequestFullscreen"]) return -3;
      var _0x529343 = _0x1d6235["canPerformEventHandlerRequests"]();
      if (!_0x529343) return _0x3b0fa1["deferUntilInEventHandler"] ? (_0x1d6235["deferCall"](_0x497818, 1, [_0x5616d3, _0x3b0fa1]), 1) : -2;
      return _0x497818(_0x5616d3, _0x3b0fa1);
    }
    function _0xafa595(_0x5744e2, _0x288f98) {
      var _0x28a471 = {scaleMode: 0, canvasResolutionScaleMode: 0, filteringMode: 0, deferUntilInEventHandler: _0x288f98, canvasResizedCallbackTargetThread: 2};
      return _0x529376(_0x5744e2, _0x28a471);
    }
    function _0x30b2c5(_0x25fa66, _0x3b73b6) {
      _0x25fa66 = _0xab2e79(_0x25fa66);
      if (!_0x25fa66) return -4;
      if (!_0x25fa66["requestPointerLock"] && !_0x25fa66["msRequestPointerLock"]) return -1;
      var _0x1405b8 = _0x1d6235["canPerformEventHandlerRequests"]();
      if (!_0x1405b8) return _0x3b73b6 ? (_0x1d6235["deferCall"](_0x56ecee, 2, [_0x25fa66]), 1) : -2;
      return _0x56ecee(_0x25fa66);
    }
    function _0x20da3f(_0x199fba) {
      try {
        return _0x24f604["grow"](_0x199fba - _0x14ab10["byteLength"] + 65535 >>> 16), _0x2d9e2a(_0x24f604["buffer"]), 1;
      } catch (_0x4576ff) {}
    }
    function _0x5ad6cb(_0x51ff84) {
      var _0x2447bf = _0x18c91b["length"];
      _0x51ff84 = _0x51ff84 >>> 0;
      var _0x3248bc = _0xf98318();
      if (_0x51ff84 > _0x3248bc) return false;
      let _0x5c5cf3 = (_0x4ebd54, _0x3350ad) => _0x4ebd54 + (_0x3350ad - _0x4ebd54 % _0x3350ad) % _0x3350ad;
      for (var _0xf89f5c = 1; _0xf89f5c <= 4; _0xf89f5c *= 2) {
        var _0x54996d = _0x2447bf * (1 + 0.2 / _0xf89f5c);
        _0x54996d = Math["min"](_0x54996d, _0x51ff84 + 100663296);
        var _0x26b067 = Math["min"](_0x3248bc, _0x5c5cf3(Math["max"](_0x51ff84, _0x54996d), 65536)), _0x4adac2 = _0x20da3f(_0x26b067);
        if (_0x4adac2) return true;
      }
      return false;
    }
    function _0xb349aa() {
      try {
        if (navigator["getGamepads"]) return (_0x1d6235["lastGamepadState"] = navigator["getGamepads"]()) ? 0 : -1;
      } catch (_0x5d268a) {
        navigator["getGamepads"] = null;
      }
      return -1;
    }
    function _0x53ead4(_0x26b4dd, _0x34f8f6, _0x5bc49d, _0x3faf7c, _0x398a89, _0x1a6c23, _0x3ac097) {
      if (!_0x1d6235["focusEvent"]) _0x1d6235["focusEvent"] = _0x1f6602(256);
      var _0x3f078f = function (_0x52fdcc) {
        var _0x173aab = _0x52fdcc || event, _0xc79b2c = _0x1d6235["getNodeNameForTarget"](_0x173aab["target"]), _0x8b4916 = _0x173aab["target"]["id"] ? _0x173aab["target"]["id"] : "", _0x59e27b = _0x1d6235["focusEvent"];
        _0x1714da(_0xc79b2c, _0x59e27b + 0, 128), _0x1714da(_0x8b4916, _0x59e27b + 128, 128);
        if (function (_0x5ca5df, _0x3b45a7, _0xf350b) {
          return _0x3ba9fb["apply"](null, [_0x3faf7c, _0x5ca5df, _0x3b45a7, _0xf350b]);
        }(_0x398a89, _0x59e27b, _0x34f8f6)) _0x173aab["preventDefault"]();
      }, _0x32f041 = {target: _0xab2e79(_0x26b4dd), eventTypeString: _0x1a6c23, callbackfunc: _0x3faf7c, handlerFunc: _0x3f078f, useCapture: _0x5bc49d};
      _0x1d6235["registerOrRemoveHandler"](_0x32f041);
    }
    function _0x4e3f2b(_0xd4b86f, _0x457941, _0x5e8675, _0x397284, _0x394dc4) {
      return _0x53ead4(_0xd4b86f, _0x457941, _0x5e8675, _0x397284, 12, "blur", _0x394dc4), 0;
    }
    function _0x4c842b(_0x36b3ec, _0x4c0002, _0x59b1cd, _0x49b14c, _0x330a3c) {
      return _0x53ead4(_0x36b3ec, _0x4c0002, _0x59b1cd, _0x49b14c, 13, "focus", _0x330a3c), 0;
    }
    function _0x1093e8(_0x3d39d4, _0x533137, _0x40123d, _0x3fa978, _0x50d4fa, _0x4f6850, _0x4b2001) {
      if (!_0x1d6235["fullscreenChangeEvent"]) _0x1d6235["fullscreenChangeEvent"] = _0x1f6602(280);
      var _0x300c50 = function (_0x434109) {
        var _0x1b1691 = _0x434109 || event, _0x579471 = _0x1d6235["fullscreenChangeEvent"];
        _0x578534(_0x579471);
        if (function (_0x236e55, _0x200306, _0x22bbf7) {
          return _0x3ba9fb["apply"](null, [_0x3fa978, _0x236e55, _0x200306, _0x22bbf7]);
        }(_0x50d4fa, _0x579471, _0x533137)) _0x1b1691["preventDefault"]();
      }, _0x23fa76 = {target: _0x3d39d4, eventTypeString: _0x4f6850, callbackfunc: _0x3fa978, handlerFunc: _0x300c50, useCapture: _0x40123d};
      _0x1d6235["registerOrRemoveHandler"](_0x23fa76);
    }
    function _0x164194(_0x1be364, _0x30945b, _0x1ee233, _0xa080a1, _0x2a7dc1) {
      if (!_0x1d6235["fullscreenEnabled"]()) return -1;
      _0x1be364 = _0xab2e79(_0x1be364);
      if (!_0x1be364) return -4;
      return _0x1093e8(_0x1be364, _0x30945b, _0x1ee233, _0xa080a1, 19, "fullscreenchange", _0x2a7dc1), _0x1093e8(_0x1be364, _0x30945b, _0x1ee233, _0xa080a1, 19, "webkitfullscreenchange", _0x2a7dc1), 0;
    }
    function _0x3f60da(_0x34b8ad, _0x32ddb7, _0x1fad7d, _0x23ce9f, _0x529889, _0x4f58ad, _0x2fa2b0) {
      if (!_0x1d6235["gamepadEvent"]) _0x1d6235["gamepadEvent"] = _0x1f6602(1432);
      var _0x53cf35 = function (_0x415526) {
        var _0xe85bd5 = _0x415526 || event, _0x1d10c7 = _0x1d6235["gamepadEvent"];
        _0x4ca2ae(_0x1d10c7, _0xe85bd5["gamepad"]);
        if (function (_0x5e90fb, _0x28351d, _0x79a137) {
          return _0x3ba9fb["apply"](null, [_0x23ce9f, _0x5e90fb, _0x28351d, _0x79a137]);
        }(_0x529889, _0x1d10c7, _0x32ddb7)) _0xe85bd5["preventDefault"]();
      }, _0x4a79cc = {target: _0xab2e79(_0x34b8ad), allowsDeferredCalls: true, eventTypeString: _0x4f58ad, callbackfunc: _0x23ce9f, handlerFunc: _0x53cf35, useCapture: _0x1fad7d};
      _0x1d6235["registerOrRemoveHandler"](_0x4a79cc);
    }
    function _0x5af486(_0x49a2f2, _0x99d7aa, _0x45fc36, _0x5b1e69) {
      if (_0xb349aa()) return -1;
      return _0x3f60da(2, _0x49a2f2, _0x99d7aa, _0x45fc36, 26, "gamepadconnected", _0x5b1e69);
    }
    function _0x4cce54(_0x231717, _0x252d38, _0x5ce2f5, _0x190f85) {
      if (_0xb349aa()) return -1;
      return _0x3f60da(2, _0x231717, _0x252d38, _0x5ce2f5, 27, "gamepaddisconnected", _0x190f85);
    }
    function _0x54ee09(_0x4cb75e, _0x177394, _0x2a7ece) {
      return setInterval(function () {
        _0x580d98(function () {
          (function (_0x17a503) {
            _0xe4a07d["apply"](null, [_0x4cb75e, _0x17a503]);
          }(_0x2a7ece));
        });
      }, _0x177394);
    }
    function _0x339422(_0x31b2d5, _0x473629, _0x169811, _0x4bff7d, _0x576785, _0x1a929d, _0x3568aa) {
      if (!_0x1d6235["keyEvent"]) _0x1d6235["keyEvent"] = _0x1f6602(176);
      var _0x1490c0 = function (_0x143d26) {
        var _0x45122c = _0x1d6235["keyEvent"];
        _0x267920[_0x45122c >> 3] = _0x143d26["timeStamp"];
        var _0x12ab72 = _0x45122c >> 2;
        _0x46c9cf[_0x12ab72 + 2] = _0x143d26["location"], _0x46c9cf[_0x12ab72 + 3] = _0x143d26["ctrlKey"], _0x46c9cf[_0x12ab72 + 4] = _0x143d26["shiftKey"], _0x46c9cf[_0x12ab72 + 5] = _0x143d26["altKey"], _0x46c9cf[_0x12ab72 + 6] = _0x143d26["metaKey"], _0x46c9cf[_0x12ab72 + 7] = _0x143d26["repeat"], _0x46c9cf[_0x12ab72 + 8] = _0x143d26["charCode"], _0x46c9cf[_0x12ab72 + 9] = _0x143d26["keyCode"], _0x46c9cf[_0x12ab72 + 10] = _0x143d26["which"], _0x1714da(_0x143d26["key"] || "", _0x45122c + 44, 32), _0x1714da(_0x143d26["code"] || "", _0x45122c + 76, 32), _0x1714da(_0x143d26["char"] || "", _0x45122c + 108, 32), _0x1714da(_0x143d26["locale"] || "", _0x45122c + 140, 32);
        if (function (_0x1c6318, _0x40075a, _0x1e0681) {
          return _0x3ba9fb["apply"](null, [_0x4bff7d, _0x1c6318, _0x40075a, _0x1e0681]);
        }(_0x576785, _0x45122c, _0x473629)) _0x143d26["preventDefault"]();
      }, _0x4875aa = {target: _0xab2e79(_0x31b2d5), allowsDeferredCalls: true, eventTypeString: _0x1a929d, callbackfunc: _0x4bff7d, handlerFunc: _0x1490c0, useCapture: _0x169811};
      _0x1d6235["registerOrRemoveHandler"](_0x4875aa);
    }
    function _0x1e2cd6(_0x4bf332, _0x6df55f, _0x562374, _0x1c1913, _0x2cb0b9) {
      return _0x339422(_0x4bf332, _0x6df55f, _0x562374, _0x1c1913, 2, "keydown", _0x2cb0b9), 0;
    }
    function _0x222941(_0x25cdbc, _0x380d7d, _0x355483, _0x166c58, _0x52fd82) {
      return _0x339422(_0x25cdbc, _0x380d7d, _0x355483, _0x166c58, 1, "keypress", _0x52fd82), 0;
    }
    function _0x1c38b5(_0x27d93a, _0x1b7bae, _0x1d55ff, _0x197932, _0x2a1389) {
      return _0x339422(_0x27d93a, _0x1b7bae, _0x1d55ff, _0x197932, 3, "keyup", _0x2a1389), 0;
    }
    function _0x4196c8(_0x41e2df, _0x471de8, _0x389611) {
      var _0x2c2cce = function () {
        _0x2b31cb["call"](null, _0x41e2df);
      };
      _0xe33019(_0x2c2cce, _0x471de8, _0x389611);
    }
    function _0x3e659c(_0xe5e0c4, _0x8b5132, _0x300bbe) {
      _0x267920[_0xe5e0c4 >> 3] = _0x8b5132["timeStamp"];
      var _0x5c28a1 = _0xe5e0c4 >> 2;
      _0x46c9cf[_0x5c28a1 + 2] = _0x8b5132["screenX"], _0x46c9cf[_0x5c28a1 + 3] = _0x8b5132["screenY"], _0x46c9cf[_0x5c28a1 + 4] = _0x8b5132["clientX"], _0x46c9cf[_0x5c28a1 + 5] = _0x8b5132["clientY"], _0x46c9cf[_0x5c28a1 + 6] = _0x8b5132["ctrlKey"], _0x46c9cf[_0x5c28a1 + 7] = _0x8b5132["shiftKey"], _0x46c9cf[_0x5c28a1 + 8] = _0x8b5132["altKey"], _0x46c9cf[_0x5c28a1 + 9] = _0x8b5132["metaKey"], _0x3e563b[_0x5c28a1 * 2 + 20] = _0x8b5132["button"], _0x3e563b[_0x5c28a1 * 2 + 21] = _0x8b5132["buttons"], _0x46c9cf[_0x5c28a1 + 11] = _0x8b5132["movementX"], _0x46c9cf[_0x5c28a1 + 12] = _0x8b5132["movementY"];
      var _0x473289 = _0x455524(_0x300bbe);
      _0x46c9cf[_0x5c28a1 + 13] = _0x8b5132["clientX"] - _0x473289["left"], _0x46c9cf[_0x5c28a1 + 14] = _0x8b5132["clientY"] - _0x473289["top"];
    }
    function _0x335fff(_0x19cb1d, _0x1f63d1, _0x30edad, _0x40bb59, _0xaef736, _0x4e2853, _0x1a1fb8) {
      if (!_0x1d6235["mouseEvent"]) _0x1d6235["mouseEvent"] = _0x1f6602(72);
      _0x19cb1d = _0xab2e79(_0x19cb1d);
      var _0x20cec0 = function (_0x2b93d7) {
        var _0x58e94b = _0x2b93d7 || event;
        _0x3e659c(_0x1d6235["mouseEvent"], _0x58e94b, _0x19cb1d);
        if (function (_0x34f07e, _0x460387, _0x156d89) {
          return _0x3ba9fb["apply"](null, [_0x40bb59, _0x34f07e, _0x460387, _0x156d89]);
        }(_0xaef736, _0x1d6235["mouseEvent"], _0x1f63d1)) _0x58e94b["preventDefault"]();
      }, _0x26a87e = {target: _0x19cb1d, allowsDeferredCalls: _0x4e2853 != "mousemove" && _0x4e2853 != "mouseenter" && _0x4e2853 != "mouseleave", eventTypeString: _0x4e2853, callbackfunc: _0x40bb59, handlerFunc: _0x20cec0, useCapture: _0x30edad};
      _0x1d6235["registerOrRemoveHandler"](_0x26a87e);
    }
    function _0x2c7e72(_0x145db0, _0x208271, _0x485b45, _0x53c1e1, _0x36b0f1) {
      return _0x335fff(_0x145db0, _0x208271, _0x485b45, _0x53c1e1, 5, "mousedown", _0x36b0f1), 0;
    }
    function _0x5e1fa6(_0x4788d6, _0x198d93, _0x2cb57b, _0x5782a2, _0x316213) {
      return _0x335fff(_0x4788d6, _0x198d93, _0x2cb57b, _0x5782a2, 8, "mousemove", _0x316213), 0;
    }
    function _0x26a6fa(_0xd33119, _0x51ebf4, _0x2d1ce5, _0x3e0c2f, _0xc5b8fa) {
      return _0x335fff(_0xd33119, _0x51ebf4, _0x2d1ce5, _0x3e0c2f, 6, "mouseup", _0xc5b8fa), 0;
    }
    function _0x285d9f(_0x27bd33) {
      var _0x36f585 = document["pointerLockElement"] || document["mozPointerLockElement"] || document["webkitPointerLockElement"] || document["msPointerLockElement"], _0x2802c7 = !!_0x36f585;
      _0x46c9cf[_0x27bd33 >> 2] = _0x2802c7;
      var _0x1f6bc3 = _0x1d6235["getNodeNameForTarget"](_0x36f585), _0x5b0dc9 = _0x36f585 && _0x36f585["id"] ? _0x36f585["id"] : "";
      _0x1714da(_0x1f6bc3, _0x27bd33 + 4, 128), _0x1714da(_0x5b0dc9, _0x27bd33 + 132, 128);
    }
    function _0x21e61b(_0x590d6c, _0x4ec3c1, _0x10ea7a, _0xe26f24, _0x3a96d7, _0xb2b466, _0x13467d) {
      if (!_0x1d6235["pointerlockChangeEvent"]) _0x1d6235["pointerlockChangeEvent"] = _0x1f6602(260);
      var _0x1febdf = function (_0x1213bf) {
        var _0x108524 = _0x1213bf || event, _0x93a1c6 = _0x1d6235["pointerlockChangeEvent"];
        _0x285d9f(_0x93a1c6);
        if (function (_0x23ea87, _0x425b22, _0x1be7af) {
          return _0x3ba9fb["apply"](null, [_0xe26f24, _0x23ea87, _0x425b22, _0x1be7af]);
        }(_0x3a96d7, _0x93a1c6, _0x4ec3c1)) _0x108524["preventDefault"]();
      }, _0x2616a5 = {target: _0x590d6c, eventTypeString: _0xb2b466, callbackfunc: _0xe26f24, handlerFunc: _0x1febdf, useCapture: _0x10ea7a};
      _0x1d6235["registerOrRemoveHandler"](_0x2616a5);
    }
    function _0x4091ac(_0x3681d8, _0x265668, _0x929cfa, _0xf6fa8e, _0x765a22) {
      if (!document || !document["body"] || !document["body"]["requestPointerLock"] && !document["body"]["mozRequestPointerLock"] && !document["body"]["webkitRequestPointerLock"] && !document["body"]["msRequestPointerLock"]) return -1;
      _0x3681d8 = _0xab2e79(_0x3681d8);
      if (!_0x3681d8) return -4;
      return _0x21e61b(_0x3681d8, _0x265668, _0x929cfa, _0xf6fa8e, 20, "pointerlockchange", _0x765a22), _0x21e61b(_0x3681d8, _0x265668, _0x929cfa, _0xf6fa8e, 20, "mozpointerlockchange", _0x765a22), _0x21e61b(_0x3681d8, _0x265668, _0x929cfa, _0xf6fa8e, 20, "webkitpointerlockchange", _0x765a22), _0x21e61b(_0x3681d8, _0x265668, _0x929cfa, _0xf6fa8e, 20, "mspointerlockchange", _0x765a22), 0;
    }
    function _0x147e81(_0x4ae938, _0x34b058, _0x57a1c2, _0x4e64f5, _0x642956, _0x15ea8d, _0x5cdd6c) {
      if (!_0x1d6235["touchEvent"]) _0x1d6235["touchEvent"] = _0x1f6602(1696);
      _0x4ae938 = _0xab2e79(_0x4ae938);
      var _0x5c3731 = function (_0x2999df) {
        var _0x321d29, _0x450e15 = {}, _0x11614e = _0x2999df["touches"];
        for (var _0x3fbcff = 0; _0x3fbcff < _0x11614e["length"]; ++_0x3fbcff) {
          _0x321d29 = _0x11614e[_0x3fbcff], _0x321d29["isChanged"] = _0x321d29["onTarget"] = 0, _0x450e15[_0x321d29["identifier"]] = _0x321d29;
        }
        for (var _0x3fbcff = 0; _0x3fbcff < _0x2999df["changedTouches"]["length"]; ++_0x3fbcff) {
          _0x321d29 = _0x2999df["changedTouches"][_0x3fbcff], _0x321d29["isChanged"] = 1, _0x450e15[_0x321d29["identifier"]] = _0x321d29;
        }
        for (var _0x3fbcff = 0; _0x3fbcff < _0x2999df["targetTouches"]["length"]; ++_0x3fbcff) {
          _0x450e15[_0x2999df["targetTouches"][_0x3fbcff]["identifier"]]["onTarget"] = 1;
        }
        var _0x80b63d = _0x1d6235["touchEvent"], _0x3daa9d = _0x80b63d >> 2;
        _0x46c9cf[_0x3daa9d + 3] = _0x2999df["ctrlKey"], _0x46c9cf[_0x3daa9d + 4] = _0x2999df["shiftKey"], _0x46c9cf[_0x3daa9d + 5] = _0x2999df["altKey"], _0x46c9cf[_0x3daa9d + 6] = _0x2999df["metaKey"], _0x3daa9d += 7;
        var _0x2a8a7d = _0x455524(_0x4ae938), _0xe4ebee = 0;
        for (var _0x3fbcff in _0x450e15) {
          var _0x321d29 = _0x450e15[_0x3fbcff];
          _0x46c9cf[_0x3daa9d + 0] = _0x321d29["identifier"], _0x46c9cf[_0x3daa9d + 1] = _0x321d29["screenX"], _0x46c9cf[_0x3daa9d + 2] = _0x321d29["screenY"], _0x46c9cf[_0x3daa9d + 3] = _0x321d29["clientX"], _0x46c9cf[_0x3daa9d + 4] = _0x321d29["clientY"], _0x46c9cf[_0x3daa9d + 5] = _0x321d29["pageX"], _0x46c9cf[_0x3daa9d + 6] = _0x321d29["pageY"], _0x46c9cf[_0x3daa9d + 7] = _0x321d29["isChanged"], _0x46c9cf[_0x3daa9d + 8] = _0x321d29["onTarget"], _0x46c9cf[_0x3daa9d + 9] = _0x321d29["clientX"] - _0x2a8a7d["left"], _0x46c9cf[_0x3daa9d + 10] = _0x321d29["clientY"] - _0x2a8a7d["top"], _0x3daa9d += 13;
          if (++_0xe4ebee > 31) break;
        }
        _0x46c9cf[_0x80b63d + 8 >> 2] = _0xe4ebee;
        if (function (_0x36085f, _0x7317e5, _0xadbc63) {
          return _0x3ba9fb["apply"](null, [_0x4e64f5, _0x36085f, _0x7317e5, _0xadbc63]);
        }(_0x642956, _0x80b63d, _0x34b058)) _0x2999df["preventDefault"]();
      }, _0x5c638c = {target: _0x4ae938, allowsDeferredCalls: _0x15ea8d == "touchstart" || _0x15ea8d == "touchend", eventTypeString: _0x15ea8d, callbackfunc: _0x4e64f5, handlerFunc: _0x5c3731, useCapture: _0x57a1c2};
      _0x1d6235["registerOrRemoveHandler"](_0x5c638c);
    }
    function _0x1d9655(_0x467f6b, _0x1662d2, _0x261851, _0x5ef95b, _0x1790e4) {
      return _0x147e81(_0x467f6b, _0x1662d2, _0x261851, _0x5ef95b, 25, "touchcancel", _0x1790e4), 0;
    }
    function _0x17d1c8(_0x24d5b8, _0xd56e3d, _0xe53843, _0x37aea0, _0x23da85) {
      return _0x147e81(_0x24d5b8, _0xd56e3d, _0xe53843, _0x37aea0, 23, "touchend", _0x23da85), 0;
    }
    function _0x4738a4(_0xfcedbf, _0x56ab49, _0x1d0e2c, _0x24c439, _0x13ef43) {
      return _0x147e81(_0xfcedbf, _0x56ab49, _0x1d0e2c, _0x24c439, 24, "touchmove", _0x13ef43), 0;
    }
    function _0x3e02bc(_0x3516a9, _0x5a78ec, _0x2e9929, _0x5084ee, _0x363e02) {
      return _0x147e81(_0x3516a9, _0x5a78ec, _0x2e9929, _0x5084ee, 22, "touchstart", _0x363e02), 0;
    }
    function _0x2ee471(_0xf31bd6, _0x421d3c, _0x499c59, _0x31ea95, _0x15fac1, _0xced2d9, _0x303d7f) {
      if (!_0x1d6235["wheelEvent"]) _0x1d6235["wheelEvent"] = _0x1f6602(104);
      var _0x2fbf02 = function (_0x351f17) {
        var _0x48c55b = _0x351f17 || event, _0xbfb3d6 = _0x1d6235["wheelEvent"];
        _0x3e659c(_0xbfb3d6, _0x48c55b, _0xf31bd6), _0x267920[_0xbfb3d6 + 72 >> 3] = _0x48c55b["deltaX"], _0x267920[_0xbfb3d6 + 80 >> 3] = _0x48c55b["deltaY"], _0x267920[_0xbfb3d6 + 88 >> 3] = _0x48c55b["deltaZ"], _0x46c9cf[_0xbfb3d6 + 96 >> 2] = _0x48c55b["deltaMode"];
        if (function (_0xe41ef6, _0x56b47f, _0x325bb8) {
          return _0x3ba9fb["apply"](null, [_0x31ea95, _0xe41ef6, _0x56b47f, _0x325bb8]);
        }(_0x15fac1, _0xbfb3d6, _0x421d3c)) _0x48c55b["preventDefault"]();
      }, _0x553f34 = {target: _0xf31bd6, allowsDeferredCalls: true, eventTypeString: _0xced2d9, callbackfunc: _0x31ea95, handlerFunc: _0x2fbf02, useCapture: _0x499c59};
      _0x1d6235["registerOrRemoveHandler"](_0x553f34);
    }
    function _0x53edb9(_0x37d135, _0xe3939f, _0x5db213, _0x3800dc, _0x1d68ef) {
      return _0x37d135 = _0xab2e79(_0x37d135), typeof _0x37d135["onwheel"] != "undefined" ? (_0x2ee471(_0x37d135, _0xe3939f, _0x5db213, _0x3800dc, 9, "wheel", _0x1d68ef), 0) : -1;
    }
    function _0x20a35b(_0x17ab7c) {
      var _0x5e0150 = _0x17ab7c["getExtension"]("ANGLE_instanced_arrays");
      if (_0x5e0150) return _0x17ab7c["vertexAttribDivisor"] = function (_0x23072c, _0x1eec86) {
        _0x5e0150["vertexAttribDivisorANGLE"](_0x23072c, _0x1eec86);
      }, _0x17ab7c["drawArraysInstanced"] = function (_0x55ccc2, _0x57e3e8, _0x2dd1a1, _0x9a4a18) {
        _0x5e0150["drawArraysInstancedANGLE"](_0x55ccc2, _0x57e3e8, _0x2dd1a1, _0x9a4a18);
      }, _0x17ab7c["drawElementsInstanced"] = function (_0x1bd335, _0x1e3586, _0x2f9915, _0x48cbf9, _0x584fd2) {
        _0x5e0150["drawElementsInstancedANGLE"](_0x1bd335, _0x1e3586, _0x2f9915, _0x48cbf9, _0x584fd2);
      }, 1;
    }
    function _0x5a8970(_0x374785) {
      var _0x156e6e = _0x374785["getExtension"]("OES_vertex_array_object");
      if (_0x156e6e) return _0x374785["createVertexArray"] = function () {
        return _0x156e6e["createVertexArrayOES"]();
      }, _0x374785["deleteVertexArray"] = function (_0x1a9da3) {
        _0x156e6e["deleteVertexArrayOES"](_0x1a9da3);
      }, _0x374785["bindVertexArray"] = function (_0x58b2f7) {
        _0x156e6e["bindVertexArrayOES"](_0x58b2f7);
      }, _0x374785["isVertexArray"] = function (_0x2cedd6) {
        return _0x156e6e["isVertexArrayOES"](_0x2cedd6);
      }, 1;
    }
    function _0x1b6ee6(_0x53384d) {
      var _0x4011d9 = _0x53384d["getExtension"]("WEBGL_draw_buffers");
      if (_0x4011d9) return _0x53384d["drawBuffers"] = function (_0x5cf9ca, _0x469300) {
        _0x4011d9["drawBuffersWEBGL"](_0x5cf9ca, _0x469300);
      }, 1;
    }
    function _0x7aabcf(_0x2a6e5d) {
      return !!(_0x2a6e5d["dibvbi"] = _0x2a6e5d["getExtension"]("WEBGL_draw_instanced_base_vertex_base_instance"));
    }
    function _0xbfdc42(_0xebc101) {
      return !!(_0xebc101["mdibvbi"] = _0xebc101["getExtension"]("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
    }
    function _0x14d8d2(_0x2009e8) {
      return !!(_0x2009e8["multiDrawWebgl"] = _0x2009e8["getExtension"]("WEBGL_multi_draw"));
    }
    var _0x2ab728 = {counter: 1, buffers: [], mappedBuffers: {}, programs: [], framebuffers: [], renderbuffers: [], textures: [], shaders: [], vaos: [], contexts: [], offscreenCanvases: {}, queries: [], samplers: [], transformFeedbacks: [], syncs: [], byteSizeByTypeRoot: 5120, byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8], stringCache: {}, stringiCache: {}, unpackAlignment: 4, recordError: function _0x42b2d5(_0x52974e) {
      !_0x2ab728["lastError"] && (_0x2ab728["lastError"] = _0x52974e);
    }, getNewId: function (_0x5098f7) {
      var _0x99b31a = _0x2ab728["counter"]++;
      for (var _0x21e473 = _0x5098f7["length"]; _0x21e473 < _0x99b31a; _0x21e473++) {
        _0x5098f7[_0x21e473] = null;
      }
      return _0x99b31a;
    }, MAX_TEMP_BUFFER_SIZE: 2097152, numTempVertexBuffersPerSize: 64, log2ceilLookup: function (_0x2ba604) {
      return 32 - Math["clz32"](_0x2ba604 === 0 ? 0 : _0x2ba604 - 1);
    }, generateTempBuffers: function (_0x47f62b, _0x203113) {
      var _0x2a8a83 = _0x2ab728["log2ceilLookup"](_0x2ab728["MAX_TEMP_BUFFER_SIZE"]);
      _0x203113["tempVertexBufferCounters1"] = [], _0x203113["tempVertexBufferCounters2"] = [], _0x203113["tempVertexBufferCounters1"]["length"] = _0x203113["tempVertexBufferCounters2"]["length"] = _0x2a8a83 + 1, _0x203113["tempVertexBuffers1"] = [], _0x203113["tempVertexBuffers2"] = [], _0x203113["tempVertexBuffers1"]["length"] = _0x203113["tempVertexBuffers2"]["length"] = _0x2a8a83 + 1, _0x203113["tempIndexBuffers"] = [], _0x203113["tempIndexBuffers"]["length"] = _0x2a8a83 + 1;
      for (var _0x2a5af3 = 0; _0x2a5af3 <= _0x2a8a83; ++_0x2a5af3) {
        _0x203113["tempIndexBuffers"][_0x2a5af3] = null, _0x203113["tempVertexBufferCounters1"][_0x2a5af3] = _0x203113["tempVertexBufferCounters2"][_0x2a5af3] = 0;
        var _0x447c85 = _0x2ab728["numTempVertexBuffersPerSize"];
        _0x203113["tempVertexBuffers1"][_0x2a5af3] = [], _0x203113["tempVertexBuffers2"][_0x2a5af3] = [];
        var _0x2cde9c = _0x203113["tempVertexBuffers1"][_0x2a5af3], _0x2911f9 = _0x203113["tempVertexBuffers2"][_0x2a5af3];
        _0x2cde9c["length"] = _0x2911f9["length"] = _0x447c85;
        for (var _0x8754f8 = 0; _0x8754f8 < _0x447c85; ++_0x8754f8) {
          _0x2cde9c[_0x8754f8] = _0x2911f9[_0x8754f8] = null;
        }
      }
      if (_0x47f62b) {
        _0x203113["tempQuadIndexBuffer"] = _0x20ed22["createBuffer"](), _0x203113["GLctx"]["bindBuffer"](34963, _0x203113["tempQuadIndexBuffer"]);
        var _0x137c36 = _0x2ab728["MAX_TEMP_BUFFER_SIZE"] >> 1, _0x545110 = new Uint16Array(_0x137c36), _0x2a5af3 = 0, _0x305e73 = 0;
        while (1) {
          _0x545110[_0x2a5af3++] = _0x305e73;
          if (_0x2a5af3 >= _0x137c36) break;
          _0x545110[_0x2a5af3++] = _0x305e73 + 1;
          if (_0x2a5af3 >= _0x137c36) break;
          _0x545110[_0x2a5af3++] = _0x305e73 + 2;
          if (_0x2a5af3 >= _0x137c36) break;
          _0x545110[_0x2a5af3++] = _0x305e73;
          if (_0x2a5af3 >= _0x137c36) break;
          _0x545110[_0x2a5af3++] = _0x305e73 + 2;
          if (_0x2a5af3 >= _0x137c36) break;
          _0x545110[_0x2a5af3++] = _0x305e73 + 3;
          if (_0x2a5af3 >= _0x137c36) break;
          _0x305e73 += 4;
        }
        _0x203113["GLctx"]["bufferData"](34963, _0x545110, 35044), _0x203113["GLctx"]["bindBuffer"](34963, null);
      }
    }, getTempVertexBuffer: function _0x645800(_0x56ea43) {
      var _0x16df42 = _0x2ab728["log2ceilLookup"](_0x56ea43), _0x16b5dd = _0x2ab728["currentContext"]["tempVertexBuffers1"][_0x16df42], _0x44914f = _0x2ab728["currentContext"]["tempVertexBufferCounters1"][_0x16df42];
      _0x2ab728["currentContext"]["tempVertexBufferCounters1"][_0x16df42] = _0x2ab728["currentContext"]["tempVertexBufferCounters1"][_0x16df42] + 1 & _0x2ab728["numTempVertexBuffersPerSize"] - 1;
      var _0xaf5a45 = _0x16b5dd[_0x44914f];
      if (_0xaf5a45) return _0xaf5a45;
      var _0x148377 = _0x20ed22["getParameter"](34964);
      return _0x16b5dd[_0x44914f] = _0x20ed22["createBuffer"](), _0x20ed22["bindBuffer"](34962, _0x16b5dd[_0x44914f]), _0x20ed22["bufferData"](34962, 1 << _0x16df42, 35048), _0x20ed22["bindBuffer"](34962, _0x148377), _0x16b5dd[_0x44914f];
    }, getTempIndexBuffer: function _0x273e85(_0xba5657) {
      var _0x154004 = _0x2ab728["log2ceilLookup"](_0xba5657), _0x25ab4d = _0x2ab728["currentContext"]["tempIndexBuffers"][_0x154004];
      if (_0x25ab4d) return _0x25ab4d;
      var _0x15ba1e = _0x20ed22["getParameter"](34965);
      return _0x2ab728["currentContext"]["tempIndexBuffers"][_0x154004] = _0x20ed22["createBuffer"](), _0x20ed22["bindBuffer"](34963, _0x2ab728["currentContext"]["tempIndexBuffers"][_0x154004]), _0x20ed22["bufferData"](34963, 1 << _0x154004, 35048), _0x20ed22["bindBuffer"](34963, _0x15ba1e), _0x2ab728["currentContext"]["tempIndexBuffers"][_0x154004];
    }, newRenderingFrameStarted: function _0x322e97() {
      if (!_0x2ab728["currentContext"]) return;
      var _0x2b7f64 = _0x2ab728["currentContext"]["tempVertexBuffers1"];
      _0x2ab728["currentContext"]["tempVertexBuffers1"] = _0x2ab728["currentContext"]["tempVertexBuffers2"], _0x2ab728["currentContext"]["tempVertexBuffers2"] = _0x2b7f64, _0x2b7f64 = _0x2ab728["currentContext"]["tempVertexBufferCounters1"], _0x2ab728["currentContext"]["tempVertexBufferCounters1"] = _0x2ab728["currentContext"]["tempVertexBufferCounters2"], _0x2ab728["currentContext"]["tempVertexBufferCounters2"] = _0x2b7f64;
      var _0x50abb5 = _0x2ab728["log2ceilLookup"](_0x2ab728["MAX_TEMP_BUFFER_SIZE"]);
      for (var _0x22b878 = 0; _0x22b878 <= _0x50abb5; ++_0x22b878) {
        _0x2ab728["currentContext"]["tempVertexBufferCounters1"][_0x22b878] = 0;
      }
    }, getSource: function (_0x428396, _0x4597e8, _0x5196ec, _0x1fc74f) {
      var _0x443224 = "";
      for (var _0xc2c3b6 = 0; _0xc2c3b6 < _0x4597e8; ++_0xc2c3b6) {
        var _0x2a98f7 = _0x1fc74f ? _0x46c9cf[_0x1fc74f + _0xc2c3b6 * 4 >> 2] : -1;
        _0x443224 += _0x30a7f6(_0x46c9cf[_0x5196ec + _0xc2c3b6 * 4 >> 2], _0x2a98f7 < 0 ? undefined : _0x2a98f7);
      }
      return _0x443224;
    }, calcBufLength: function _0x44b3e0(_0x37cf14, _0x2dd290, _0x4b6539, _0x3e7594) {
      if (_0x4b6539 > 0) return _0x3e7594 * _0x4b6539;
      var _0x5cad7f = _0x2ab728["byteSizeByType"][_0x2dd290 - _0x2ab728["byteSizeByTypeRoot"]];
      return _0x37cf14 * _0x5cad7f * _0x3e7594;
    }, usedTempBuffers: [], preDrawHandleClientVertexAttribBindings: function _0x2c2473(_0x4a964e) {
      _0x2ab728["resetBufferBinding"] = false;
      for (var _0x3e156a = 0; _0x3e156a < _0x2ab728["currentContext"]["maxVertexAttribs"]; ++_0x3e156a) {
        var _0x542968 = _0x2ab728["currentContext"]["clientBuffers"][_0x3e156a];
        if (!_0x542968["clientside"] || !_0x542968["enabled"]) continue;
        _0x2ab728["resetBufferBinding"] = true;
        var _0x288ef6 = _0x2ab728["calcBufLength"](_0x542968["size"], _0x542968["type"], _0x542968["stride"], _0x4a964e), _0x142ef4 = _0x2ab728["getTempVertexBuffer"](_0x288ef6);
        _0x20ed22["bindBuffer"](34962, _0x142ef4), _0x20ed22["bufferSubData"](34962, 0, _0x18c91b["subarray"](_0x542968["ptr"], _0x542968["ptr"] + _0x288ef6)), _0x542968["vertexAttribPointerAdaptor"]["call"](_0x20ed22, _0x3e156a, _0x542968["size"], _0x542968["type"], _0x542968["normalized"], _0x542968["stride"], 0);
      }
    }, postDrawHandleClientVertexAttribBindings: function _0x4f1a27() {
      _0x2ab728["resetBufferBinding"] && _0x20ed22["bindBuffer"](34962, _0x2ab728["buffers"][_0x20ed22["currentArrayBufferBinding"]]);
    }, createContext: function (_0x4ee31c, _0x52cabe) {
      if (!_0x4ee31c["getContextSafariWebGL2Fixed"]) {
        _0x4ee31c["getContextSafariWebGL2Fixed"] = _0x4ee31c["getContext"];
        function _0x40f987(_0x28a34c, _0x53b1f6) {
          var _0x50790a = _0x4ee31c["getContextSafariWebGL2Fixed"](_0x28a34c, _0x53b1f6);
          return _0x28a34c == "webgl" == _0x50790a instanceof WebGLRenderingContext ? _0x50790a : null;
        }
        _0x4ee31c["getContext"] = _0x40f987;
      }
      var _0x54584f = _0x52cabe["majorVersion"] > 1 ? _0x4ee31c["getContext"]("webgl2", _0x52cabe) : _0x4ee31c["getContext"]("webgl", _0x52cabe);
      if (!_0x54584f) return 0;
      var _0x117d16 = _0x2ab728["registerContext"](_0x54584f, _0x52cabe);
      return _0x117d16;
    }, registerContext: function (_0x2578b3, _0x4ff221) {
      var _0x3eda0c = _0x2ab728["getNewId"](_0x2ab728["contexts"]), _0x4a5df4 = {handle: _0x3eda0c, attributes: _0x4ff221, version: _0x4ff221["majorVersion"], GLctx: _0x2578b3};
      if (_0x2578b3["canvas"]) _0x2578b3["canvas"]["GLctxObject"] = _0x4a5df4;
      _0x2ab728["contexts"][_0x3eda0c] = _0x4a5df4;
      (typeof _0x4ff221["enableExtensionsByDefault"] == "undefined" || _0x4ff221["enableExtensionsByDefault"]) && _0x2ab728["initExtensions"](_0x4a5df4);
      _0x4a5df4["maxVertexAttribs"] = _0x4a5df4["GLctx"]["getParameter"](34921), _0x4a5df4["clientBuffers"] = [];
      for (var _0x16bc75 = 0; _0x16bc75 < _0x4a5df4["maxVertexAttribs"]; _0x16bc75++) {
        _0x4a5df4["clientBuffers"][_0x16bc75] = {enabled: false, clientside: false, size: 0, type: 0, normalized: 0, stride: 0, ptr: 0, vertexAttribPointerAdaptor: null};
      }
      return _0x2ab728["generateTempBuffers"](false, _0x4a5df4), _0x3eda0c;
    }, makeContextCurrent: function (_0x178853) {
      return _0x2ab728["currentContext"] = _0x2ab728["contexts"][_0x178853], _0x4bcfe1["ctx"] = _0x20ed22 = _0x2ab728["currentContext"] && _0x2ab728["currentContext"]["GLctx"], !(_0x178853 && !_0x20ed22);
    }, getContext: function (_0x4d3379) {
      return _0x2ab728["contexts"][_0x4d3379];
    }, deleteContext: function (_0x58c19b) {
      if (_0x2ab728["currentContext"] === _0x2ab728["contexts"][_0x58c19b]) _0x2ab728["currentContext"] = null;
      if (typeof _0x1d6235 == "object") _0x1d6235["removeAllHandlersOnTarget"](_0x2ab728["contexts"][_0x58c19b]["GLctx"]["canvas"]);
      if (_0x2ab728["contexts"][_0x58c19b] && _0x2ab728["contexts"][_0x58c19b]["GLctx"]["canvas"]) _0x2ab728["contexts"][_0x58c19b]["GLctx"]["canvas"]["GLctxObject"] = undefined;
      _0x2ab728["contexts"][_0x58c19b] = null;
    }, initExtensions: function (_0x1c78bd) {
      if (!_0x1c78bd) _0x1c78bd = _0x2ab728["currentContext"];
      if (_0x1c78bd["initExtensionsDone"]) return;
      _0x1c78bd["initExtensionsDone"] = true;
      var _0x5bc221 = _0x1c78bd["GLctx"];
      _0x20a35b(_0x5bc221), _0x5a8970(_0x5bc221), _0x1b6ee6(_0x5bc221), _0x7aabcf(_0x5bc221), _0xbfdc42(_0x5bc221);
      _0x1c78bd["version"] >= 2 && (_0x5bc221["disjointTimerQueryExt"] = _0x5bc221["getExtension"]("EXT_disjoint_timer_query_webgl2"));
      (_0x1c78bd["version"] < 2 || !_0x5bc221["disjointTimerQueryExt"]) && (_0x5bc221["disjointTimerQueryExt"] = _0x5bc221["getExtension"]("EXT_disjoint_timer_query"));
      _0x14d8d2(_0x5bc221);
      var _0x268748 = _0x5bc221["getSupportedExtensions"]() || [];
      _0x268748["forEach"](function (_0x331a4d) {
        !_0x331a4d["includes"]("lose_context") && !_0x331a4d["includes"]("debug") && _0x5bc221["getExtension"](_0x331a4d);
      });
    }}, _0x56b965 = ["default", "low-power", "high-performance"];
    function _0x236a6f(_0x45c01b, _0x25c19f) {
      var _0x539c78 = _0x25c19f >> 2, _0x523fae = _0x46c9cf[_0x539c78 + 6], _0x2c667f = {alpha: !!_0x46c9cf[_0x539c78 + 0], depth: !!_0x46c9cf[_0x539c78 + 1], stencil: !!_0x46c9cf[_0x539c78 + 2], antialias: !!_0x46c9cf[_0x539c78 + 3], premultipliedAlpha: !!_0x46c9cf[_0x539c78 + 4], preserveDrawingBuffer: !!_0x46c9cf[_0x539c78 + 5], powerPreference: _0x56b965[_0x523fae], failIfMajorPerformanceCaveat: !!_0x46c9cf[_0x539c78 + 7], majorVersion: _0x46c9cf[_0x539c78 + 8], minorVersion: _0x46c9cf[_0x539c78 + 9], enableExtensionsByDefault: _0x46c9cf[_0x539c78 + 10], explicitSwapControl: _0x46c9cf[_0x539c78 + 11], proxyContextToMainThread: _0x46c9cf[_0x539c78 + 12], renderViaOffscreenBackBuffer: _0x46c9cf[_0x539c78 + 13]}, _0x28faa2 = _0x422f86(_0x45c01b);
      if (!_0x28faa2) return 0;
      if (_0x2c667f["explicitSwapControl"]) return 0;
      var _0x42015f = _0x2ab728["createContext"](_0x28faa2, _0x2c667f);
      return _0x42015f;
    }
    function _0x572c98(_0x8ebd6c, _0x23641c) {
      return _0x236a6f(_0x8ebd6c, _0x23641c);
    }
    function _0x63234b(_0xdc50c2) {
      if (_0x2ab728["currentContext"] == _0xdc50c2) _0x2ab728["currentContext"] = 0;
      _0x2ab728["deleteContext"](_0xdc50c2);
    }
    function _0x26441d(_0x5d43fa, _0x1dd747) {
      var _0x18135a = _0x2ab728["getContext"](_0x5d43fa), _0x2430c8 = _0x30a7f6(_0x1dd747);
      if (_0x2430c8["startsWith"]("GL_")) _0x2430c8 = _0x2430c8["substr"](3);
      if (_0x2430c8 == "ANGLE_instanced_arrays") _0x20a35b(_0x20ed22);
      if (_0x2430c8 == "OES_vertex_array_object") _0x5a8970(_0x20ed22);
      if (_0x2430c8 == "WEBGL_draw_buffers") _0x1b6ee6(_0x20ed22);
      if (_0x2430c8 == "WEBGL_draw_instanced_base_vertex_base_instance") _0x7aabcf(_0x20ed22);
      if (_0x2430c8 == "WEBGL_multi_draw_instanced_base_vertex_base_instance") _0xbfdc42(_0x20ed22);
      if (_0x2430c8 == "WEBGL_multi_draw") _0x14d8d2(_0x20ed22);
      var _0xd37d18 = _0x18135a["GLctx"]["getExtension"](_0x2430c8);
      return !!_0xd37d18;
    }
    function _0x2910c5() {
      return _0x2ab728["currentContext"] ? _0x2ab728["currentContext"]["handle"] : 0;
    }
    function _0x5e5b6a() {
      return _0x2910c5();
    }
    function _0x3bab87(_0x2519c9) {
      var _0x6038c4 = _0x2519c9 >> 2;
      for (var _0xc5c932 = 0; _0xc5c932 < 14; ++_0xc5c932) {
        _0x46c9cf[_0x6038c4 + _0xc5c932] = 0;
      }
      _0x46c9cf[_0x6038c4 + 0] = _0x46c9cf[_0x6038c4 + 1] = _0x46c9cf[_0x6038c4 + 3] = _0x46c9cf[_0x6038c4 + 4] = _0x46c9cf[_0x6038c4 + 8] = _0x46c9cf[_0x6038c4 + 10] = 1;
    }
    function _0x389f53(_0x1f0d1f) {
      var _0x5446b5 = _0x2ab728["makeContextCurrent"](_0x1f0d1f);
      return _0x5446b5 ? 0 : -5;
    }
    var _0x5c0616 = {};
    function _0x20f3cc() {
      return _0x5877fe || "./this.program";
    }
    function _0xca7c4a() {
      if (!_0xca7c4a["strings"]) {
        var _0x4b1e2a = (typeof navigator == "object" && navigator["languages"] && navigator["languages"][0] || "C")["replace"]("-", "_") + ".UTF-8", _0x3591f0 = {USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: _0x4b1e2a, _: _0x20f3cc()};
        for (var _0x4ed7b1 in _0x5c0616) {
          if (_0x5c0616[_0x4ed7b1] === undefined) delete _0x3591f0[_0x4ed7b1]; else _0x3591f0[_0x4ed7b1] = _0x5c0616[_0x4ed7b1];
        }
        var _0x1aa832 = [];
        for (var _0x4ed7b1 in _0x3591f0) {
          _0x1aa832["push"](_0x4ed7b1 + "=" + _0x3591f0[_0x4ed7b1]);
        }
        _0xca7c4a["strings"] = _0x1aa832;
      }
      return _0xca7c4a["strings"];
    }
    function _0x1a2cab(_0x2b5854, _0x580e36) {
      var _0x2d11e6 = 0;
      return _0xca7c4a()["forEach"](function (_0x7d7689, _0x5e40f8) {
        var _0x4eb950 = _0x580e36 + _0x2d11e6;
        _0x46c9cf[_0x2b5854 + _0x5e40f8 * 4 >> 2] = _0x4eb950, _0x6407fd(_0x7d7689, _0x4eb950), _0x2d11e6 += _0x7d7689["length"] + 1;
      }), 0;
    }
    function _0x52451a(_0x43c32c, _0x3dc809) {
      var _0x269522 = _0xca7c4a();
      _0x46c9cf[_0x43c32c >> 2] = _0x269522["length"];
      var _0x10016b = 0;
      return _0x269522["forEach"](function (_0x2a14ea) {
        _0x10016b += _0x2a14ea["length"] + 1;
      }), _0x46c9cf[_0x3dc809 >> 2] = _0x10016b, 0;
    }
    function _0x100135(_0x3b13f3) {
      try {
        var _0x588149 = _0x3c26cf["getStreamFromFD"](_0x3b13f3);
        return _0x278315["close"](_0x588149), 0;
      } catch (_0x4138b8) {
        if (typeof _0x278315 == "undefined" || !(_0x4138b8 instanceof _0x278315["ErrnoError"])) throw _0x4138b8;
        return _0x4138b8["errno"];
      }
    }
    function _0x117c13(_0x1fbfc2, _0x115bed) {
      try {
        var _0x416eba = _0x3c26cf["getStreamFromFD"](_0x1fbfc2), _0x121399 = _0x416eba["tty"] ? 2 : _0x278315["isDir"](_0x416eba["mode"]) ? 3 : _0x278315["isLink"](_0x416eba["mode"]) ? 7 : 4;
        return _0x59ed12[_0x115bed >> 0] = _0x121399, 0;
      } catch (_0x41d167) {
        if (typeof _0x278315 == "undefined" || !(_0x41d167 instanceof _0x278315["ErrnoError"])) throw _0x41d167;
        return _0x41d167["errno"];
      }
    }
    function _0x173ba4(_0x3b4b93, _0x5e67bc, _0x33845c, _0x18b26a) {
      try {
        var _0x2b33d7 = _0x3c26cf["getStreamFromFD"](_0x3b4b93), _0x501cc9 = _0x3c26cf["doReadv"](_0x2b33d7, _0x5e67bc, _0x33845c);
        return _0x46c9cf[_0x18b26a >> 2] = _0x501cc9, 0;
      } catch (_0x5d8603) {
        if (typeof _0x278315 == "undefined" || !(_0x5d8603 instanceof _0x278315["ErrnoError"])) throw _0x5d8603;
        return _0x5d8603["errno"];
      }
    }
    function _0x12757c(_0x2ada9a, _0xb9a2d9, _0x41b2b9, _0x4c11e9, _0x1f57e1) {
      try {
        var _0x183102 = _0x3c26cf["getStreamFromFD"](_0x2ada9a), _0x2547f1 = 4294967296, _0x25b975 = _0x41b2b9 * _0x2547f1 + (_0xb9a2d9 >>> 0), _0xbbe1f9 = 0x20000000000000;
        if (_0x25b975 <= -_0xbbe1f9 || _0x25b975 >= _0xbbe1f9) return -61;
        _0x278315["llseek"](_0x183102, _0x25b975, _0x4c11e9), (_0x3c0e3f = [_0x183102["position"] >>> 0, (_0x12ce7f = _0x183102["position"], +Math["abs"](_0x12ce7f) >= 1 ? _0x12ce7f > 0 ? (Math["min"](+Math["floor"](_0x12ce7f / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math["ceil"]((_0x12ce7f - +(~~_0x12ce7f >>> 0)) / 4294967296) >>> 0 : 0)], _0x46c9cf[_0x1f57e1 >> 2] = _0x3c0e3f[0], _0x46c9cf[_0x1f57e1 + 4 >> 2] = _0x3c0e3f[1]);
        if (_0x183102["getdents"] && _0x25b975 === 0 && _0x4c11e9 === 0) _0x183102["getdents"] = null;
        return 0;
      } catch (_0x149c43) {
        if (typeof _0x278315 == "undefined" || !(_0x149c43 instanceof _0x278315["ErrnoError"])) throw _0x149c43;
        return _0x149c43["errno"];
      }
    }
    function _0x1aa77e(_0x4e8946, _0x1a5775, _0x3d2cff, _0x314e35) {
      try {
        var _0x48863c = _0x3c26cf["getStreamFromFD"](_0x4e8946), _0x3cb6eb = _0x3c26cf["doWritev"](_0x48863c, _0x1a5775, _0x3d2cff);
        return _0x46c9cf[_0x314e35 >> 2] = _0x3cb6eb, 0;
      } catch (_0x450b36) {
        if (typeof _0x278315 == "undefined" || !(_0x450b36 instanceof _0x278315["ErrnoError"])) throw _0x450b36;
        return _0x450b36["errno"];
      }
    }
    function _0x42a223() {
      return _0x31fc00();
    }
    function _0x30da43(_0x40a3ed, _0x499bbe, _0x3f1ebf, _0x371917) {
      var _0x1ffaee = 0, _0xd5237c = 0, _0x38d923 = 0, _0x38d69a = 0, _0x138ae7 = 0, _0x9aea72 = 0, _0x1f6a9d;
      function _0x274d1e(_0x280faa, _0x2fccfd, _0x49c7d7, _0x5420c2, _0x57dfcf, _0x23e851) {
        var _0x32e601, _0x11c2f6, _0xba33c6, _0x3f8b74;
        return _0x11c2f6 = _0x280faa === 10 ? 28 : 16, _0x57dfcf = _0x280faa === 10 ? _0x1c3f95(_0x57dfcf) : _0x1218a6(_0x57dfcf), _0x32e601 = _0x1f6602(_0x11c2f6), _0x3f8b74 = _0x22838c(_0x32e601, _0x280faa, _0x57dfcf, _0x23e851), _0x35e637(!_0x3f8b74), _0xba33c6 = _0x1f6602(32), _0x46c9cf[_0xba33c6 + 4 >> 2] = _0x280faa, _0x46c9cf[_0xba33c6 + 8 >> 2] = _0x2fccfd, _0x46c9cf[_0xba33c6 + 12 >> 2] = _0x49c7d7, _0x46c9cf[_0xba33c6 + 24 >> 2] = _0x5420c2, _0x46c9cf[_0xba33c6 + 20 >> 2] = _0x32e601, _0x280faa === 10 ? _0x46c9cf[_0xba33c6 + 16 >> 2] = 28 : _0x46c9cf[_0xba33c6 + 16 >> 2] = 16, _0x46c9cf[_0xba33c6 + 28 >> 2] = 0, _0xba33c6;
      }
      _0x3f1ebf && (_0x38d923 = _0x46c9cf[_0x3f1ebf >> 2], _0x38d69a = _0x46c9cf[_0x3f1ebf + 4 >> 2], _0x138ae7 = _0x46c9cf[_0x3f1ebf + 8 >> 2], _0x9aea72 = _0x46c9cf[_0x3f1ebf + 12 >> 2]);
      _0x138ae7 && !_0x9aea72 && (_0x9aea72 = _0x138ae7 === 2 ? 17 : 6);
      !_0x138ae7 && _0x9aea72 && (_0x138ae7 = _0x9aea72 === 17 ? 2 : 1);
      _0x9aea72 === 0 && (_0x9aea72 = 6);
      _0x138ae7 === 0 && (_0x138ae7 = 1);
      if (!_0x40a3ed && !_0x499bbe) return -2;
      if (_0x38d923 & -1088) return -1;
      if (_0x3f1ebf !== 0 && _0x46c9cf[_0x3f1ebf >> 2] & 2 && !_0x40a3ed) return -1;
      if (_0x38d923 & 32) return -2;
      if (_0x138ae7 !== 0 && _0x138ae7 !== 1 && _0x138ae7 !== 2) return -7;
      if (_0x38d69a !== 0 && _0x38d69a !== 2 && _0x38d69a !== 10) return -6;
      if (_0x499bbe) {
        _0x499bbe = _0x30a7f6(_0x499bbe), _0xd5237c = parseInt(_0x499bbe, 10);
        if (isNaN(_0xd5237c)) {
          if (_0x38d923 & 1024) return -2;
          return -8;
        }
      }
      if (!_0x40a3ed) return _0x38d69a === 0 && (_0x38d69a = 2), (_0x38d923 & 1) === 0 && (_0x38d69a === 2 ? _0x1ffaee = _0x43d3ca(2130706433) : _0x1ffaee = [0, 0, 0, 1]), _0x1f6a9d = _0x274d1e(_0x38d69a, _0x138ae7, _0x9aea72, null, _0x1ffaee, _0xd5237c), _0x46c9cf[_0x371917 >> 2] = _0x1f6a9d, 0;
      _0x40a3ed = _0x30a7f6(_0x40a3ed), _0x1ffaee = _0x3f5c7b(_0x40a3ed);
      if (_0x1ffaee !== null) {
        if (_0x38d69a === 0 || _0x38d69a === 2) _0x38d69a = 2; else {
          if (_0x38d69a === 10 && _0x38d923 & 8) _0x1ffaee = [0, 0, _0x43d3ca(65535), _0x1ffaee], _0x38d69a = 10; else return -2;
        }
      } else {
        _0x1ffaee = _0x24e192(_0x40a3ed);
        if (_0x1ffaee !== null) {
          if (_0x38d69a === 0 || _0x38d69a === 10) _0x38d69a = 10; else return -2;
        }
      }
      if (_0x1ffaee != null) return _0x1f6a9d = _0x274d1e(_0x38d69a, _0x138ae7, _0x9aea72, _0x40a3ed, _0x1ffaee, _0xd5237c), _0x46c9cf[_0x371917 >> 2] = _0x1f6a9d, 0;
      if (_0x38d923 & 4) return -2;
      _0x40a3ed = _0x29554d["lookup_name"](_0x40a3ed), _0x1ffaee = _0x3f5c7b(_0x40a3ed);
      if (_0x38d69a === 0) _0x38d69a = 2; else _0x38d69a === 10 && (_0x1ffaee = [0, 0, _0x43d3ca(65535), _0x1ffaee]);
      return _0x1f6a9d = _0x274d1e(_0x38d69a, _0x138ae7, _0x9aea72, null, _0x1ffaee, _0xd5237c), _0x46c9cf[_0x371917 >> 2] = _0x1f6a9d, 0;
    }
    function _0x210144(_0x5f43e9) {
      var _0x2381b9 = _0x1f6602(20), _0x411114 = _0x1f6602(_0x5f43e9["length"] + 1);
      _0x1714da(_0x5f43e9, _0x411114, _0x5f43e9["length"] + 1), _0x46c9cf[_0x2381b9 >> 2] = _0x411114;
      var _0x1f9e0f = _0x1f6602(4);
      _0x46c9cf[_0x1f9e0f >> 2] = 0, _0x46c9cf[_0x2381b9 + 4 >> 2] = _0x1f9e0f;
      var _0x95b4c2 = 2;
      _0x46c9cf[_0x2381b9 + 8 >> 2] = _0x95b4c2, _0x46c9cf[_0x2381b9 + 12 >> 2] = 4;
      var _0x5b1d09 = _0x1f6602(12);
      return _0x46c9cf[_0x5b1d09 >> 2] = _0x5b1d09 + 8, _0x46c9cf[_0x5b1d09 + 4 >> 2] = 0, _0x46c9cf[_0x5b1d09 + 8 >> 2] = _0x3f5c7b(_0x29554d["lookup_name"](_0x5f43e9)), _0x46c9cf[_0x2381b9 + 16 >> 2] = _0x5b1d09, _0x2381b9;
    }
    function _0x34d78f(_0x581830, _0xc5fc47, _0x15b298) {
      if (_0x15b298 !== 2) return _0x2e7eae(5), null;
      _0x581830 = _0x46c9cf[_0x581830 >> 2];
      var _0x5ab4ce = _0x1218a6(_0x581830), _0x2cbae1 = _0x29554d["lookup_addr"](_0x5ab4ce);
      return _0x2cbae1 && (_0x5ab4ce = _0x2cbae1), _0x210144(_0x5ab4ce);
    }
    function _0x10ec7f(_0x3d6f1a) {
      return _0x210144(_0x30a7f6(_0x3d6f1a));
    }
    function _0x30d9e6(_0x1e48d8, _0x30cc87, _0x43c5d6, _0x3d5b90, _0x38d2f3, _0x127170, _0x14115c) {
      var _0x383107 = _0x29b6f8(_0x1e48d8, _0x30cc87);
      if (_0x383107["errno"]) return -6;
      var _0x528c24 = _0x383107["port"], _0xc441b9 = _0x383107["addr"], _0x11cf68 = false;
      if (_0x43c5d6 && _0x3d5b90) {
        var _0x360949;
        if (_0x14115c & 1 || !(_0x360949 = _0x29554d["lookup_addr"](_0xc441b9))) {
          if (_0x14115c & 8) return -2;
        } else _0xc441b9 = _0x360949;
        var _0x1a0bd7 = _0x1714da(_0xc441b9, _0x43c5d6, _0x3d5b90);
        _0x1a0bd7 + 1 >= _0x3d5b90 && (_0x11cf68 = true);
      }
      if (_0x38d2f3 && _0x127170) {
        _0x528c24 = "" + _0x528c24;
        var _0x1a0bd7 = _0x1714da(_0x528c24, _0x38d2f3, _0x127170);
        _0x1a0bd7 + 1 >= _0x127170 && (_0x11cf68 = true);
      }
      if (_0x11cf68) return -12;
      return 0;
    }
    function _0x4989b7(_0x1fbc54) {
      _0x20ed22["activeTexture"](_0x1fbc54);
    }
    function _0x25b874(_0x4dc7f7, _0x1e6493) {
      _0x4dc7f7 = _0x2ab728["programs"][_0x4dc7f7], _0x1e6493 = _0x2ab728["shaders"][_0x1e6493], _0x4dc7f7[_0x1e6493["shaderType"]] = _0x1e6493, _0x20ed22["attachShader"](_0x4dc7f7, _0x1e6493);
    }
    function _0x30b68d(_0x46ae55, _0x4b731e) {
      _0x20ed22["beginQuery"](_0x46ae55, _0x2ab728["queries"][_0x4b731e]);
    }
    function _0x1757a8(_0xcac9c4, _0x75edbd, _0x1d4f34) {
      _0x20ed22["bindAttribLocation"](_0x2ab728["programs"][_0xcac9c4], _0x75edbd, _0x30a7f6(_0x1d4f34));
    }
    function _0x322ae2(_0x5adc60, _0x57ee35) {
      if (_0x5adc60 == 34962) _0x20ed22["currentArrayBufferBinding"] = _0x57ee35; else _0x5adc60 == 34963 && (_0x20ed22["currentElementArrayBufferBinding"] = _0x57ee35);
      if (_0x5adc60 == 35051) _0x20ed22["currentPixelPackBufferBinding"] = _0x57ee35; else _0x5adc60 == 35052 && (_0x20ed22["currentPixelUnpackBufferBinding"] = _0x57ee35);
      _0x20ed22["bindBuffer"](_0x5adc60, _0x2ab728["buffers"][_0x57ee35]);
    }
    function _0x74914f(_0x394b26, _0x5b3189, _0x5db873) {
      _0x20ed22["bindBufferBase"](_0x394b26, _0x5b3189, _0x2ab728["buffers"][_0x5db873]);
    }
    function _0x1fe4c3(_0x5ba142, _0x1eaac0, _0xa01a6b, _0x3ed8d6, _0xa7985c) {
      _0x20ed22["bindBufferRange"](_0x5ba142, _0x1eaac0, _0x2ab728["buffers"][_0xa01a6b], _0x3ed8d6, _0xa7985c);
    }
    function _0x4df6c0(_0x95948, _0x1f4632) {
      _0x20ed22["bindFramebuffer"](_0x95948, _0x2ab728["framebuffers"][_0x1f4632]);
    }
    function _0x45f713(_0x3c1cb3, _0x4ae86b) {
      _0x20ed22["bindRenderbuffer"](_0x3c1cb3, _0x2ab728["renderbuffers"][_0x4ae86b]);
    }
    function _0x5a2419(_0x2ce7bf, _0x30d0b2) {
      _0x20ed22["bindSampler"](_0x2ce7bf, _0x2ab728["samplers"][_0x30d0b2]);
    }
    function _0x56fb0d(_0x47ba16, _0x241ac3) {
      _0x20ed22["bindTexture"](_0x47ba16, _0x2ab728["textures"][_0x241ac3]);
    }
    function _0x21ee2c(_0x21e495) {
      _0x20ed22["bindVertexArray"](_0x2ab728["vaos"][_0x21e495]);
      var _0x5d8f37 = _0x20ed22["getParameter"](34965);
      _0x20ed22["currentElementArrayBufferBinding"] = _0x5d8f37 ? _0x5d8f37["name"] | 0 : 0;
    }
    function _0x208e5c(_0x13551d) {
      _0x20ed22["blendEquation"](_0x13551d);
    }
    function _0x42d1a2(_0x51963a, _0x4e76f4) {
      _0x20ed22["blendEquationSeparate"](_0x51963a, _0x4e76f4);
    }
    function _0x472b4a(_0x4b5254, _0x2d4392, _0xc3efbf, _0x4cb3ce) {
      _0x20ed22["blendFuncSeparate"](_0x4b5254, _0x2d4392, _0xc3efbf, _0x4cb3ce);
    }
    function _0x5d435e(_0x3b9627, _0x27efb4, _0x16e1e8, _0x440138, _0x384c5f, _0x4d989e, _0x643213, _0x489838, _0x5df8bf, _0x5a79e5) {
      _0x20ed22["blitFramebuffer"](_0x3b9627, _0x27efb4, _0x16e1e8, _0x440138, _0x384c5f, _0x4d989e, _0x643213, _0x489838, _0x5df8bf, _0x5a79e5);
    }
    function _0x3839cb(_0x475b12, _0x32b897, _0x5502f9, _0x467906) {
      _0x2ab728["currentContext"]["version"] >= 2 ? _0x5502f9 ? _0x20ed22["bufferData"](_0x475b12, _0x18c91b, _0x467906, _0x5502f9, _0x32b897) : _0x20ed22["bufferData"](_0x475b12, _0x32b897, _0x467906) : _0x20ed22["bufferData"](_0x475b12, _0x5502f9 ? _0x18c91b["subarray"](_0x5502f9, _0x5502f9 + _0x32b897) : _0x32b897, _0x467906);
    }
    function _0x279b7d(_0xc6740a, _0x424f98, _0x5dfa9c, _0x12e01f) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["bufferSubData"](_0xc6740a, _0x424f98, _0x18c91b, _0x12e01f, _0x5dfa9c);
        return;
      }
      _0x20ed22["bufferSubData"](_0xc6740a, _0x424f98, _0x18c91b["subarray"](_0x12e01f, _0x12e01f + _0x5dfa9c));
    }
    function _0xc1398(_0x4dd4da) {
      return _0x20ed22["checkFramebufferStatus"](_0x4dd4da);
    }
    function _0x4f8070(_0x45a377) {
      _0x20ed22["clear"](_0x45a377);
    }
    function _0x406ed4(_0x47d8b2, _0x3ad98e, _0x1aea21, _0x107c5e) {
      _0x20ed22["clearBufferfi"](_0x47d8b2, _0x3ad98e, _0x1aea21, _0x107c5e);
    }
    function _0xfe9bac(_0x5caf6c, _0x52c3c2, _0x3b5e4c) {
      _0x20ed22["clearBufferfv"](_0x5caf6c, _0x52c3c2, _0x33f22d, _0x3b5e4c >> 2);
    }
    function _0xc99862(_0x1f6be6, _0x6f646c, _0xb1399e) {
      _0x20ed22["clearBufferuiv"](_0x1f6be6, _0x6f646c, _0x29f705, _0xb1399e >> 2);
    }
    function _0x412746(_0x3e28e9, _0x4ad80c, _0x354728, _0x590e3f) {
      _0x20ed22["clearColor"](_0x3e28e9, _0x4ad80c, _0x354728, _0x590e3f);
    }
    function _0x4fa8e7(_0xf327c) {
      _0x20ed22["clearDepth"](_0xf327c);
    }
    function _0x146924(_0x5be5ae) {
      _0x20ed22["clearStencil"](_0x5be5ae);
    }
    function _0x37d805(_0xf0bd32, _0x17ae8e, _0x550c5a, _0x4aeede) {
      return _0x20ed22["clientWaitSync"](_0x2ab728["syncs"][_0xf0bd32], _0x17ae8e, _0x16f0ec(_0x550c5a, _0x4aeede));
    }
    function _0x2e678c(_0x26fcf2, _0x29d30f, _0x402ad7, _0x5d660b) {
      _0x20ed22["colorMask"](!!_0x26fcf2, !!_0x29d30f, !!_0x402ad7, !!_0x5d660b);
    }
    function _0x4756fb(_0x408444) {
      _0x20ed22["compileShader"](_0x2ab728["shaders"][_0x408444]);
    }
    function _0x6ffe69(_0x1d3b6b, _0x5789ee, _0x14eee7, _0x37947d, _0x37b411, _0x33b9d1, _0x4e6a97, _0xc585d4) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["currentPixelUnpackBufferBinding"] ? _0x20ed22["compressedTexImage2D"](_0x1d3b6b, _0x5789ee, _0x14eee7, _0x37947d, _0x37b411, _0x33b9d1, _0x4e6a97, _0xc585d4) : _0x20ed22["compressedTexImage2D"](_0x1d3b6b, _0x5789ee, _0x14eee7, _0x37947d, _0x37b411, _0x33b9d1, _0x18c91b, _0xc585d4, _0x4e6a97);
        return;
      }
      _0x20ed22["compressedTexImage2D"](_0x1d3b6b, _0x5789ee, _0x14eee7, _0x37947d, _0x37b411, _0x33b9d1, _0xc585d4 ? _0x18c91b["subarray"](_0xc585d4, _0xc585d4 + _0x4e6a97) : null);
    }
    function _0x4ef3d8(_0x1c2955, _0x2c15e9, _0x1949ed, _0x28d59f, _0x83d1a7, _0x43d666, _0x2e9f47, _0x3df5cd, _0x12fff3) {
      _0x20ed22["currentPixelUnpackBufferBinding"] ? _0x20ed22["compressedTexImage3D"](_0x1c2955, _0x2c15e9, _0x1949ed, _0x28d59f, _0x83d1a7, _0x43d666, _0x2e9f47, _0x3df5cd, _0x12fff3) : _0x20ed22["compressedTexImage3D"](_0x1c2955, _0x2c15e9, _0x1949ed, _0x28d59f, _0x83d1a7, _0x43d666, _0x2e9f47, _0x18c91b, _0x12fff3, _0x3df5cd);
    }
    function _0x5a9410(_0x4d3013, _0x449d01, _0x5edba6, _0x55411c, _0x5c1527, _0x549b50, _0x5440d5, _0x3af65e, _0x34376c) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["currentPixelUnpackBufferBinding"] ? _0x20ed22["compressedTexSubImage2D"](_0x4d3013, _0x449d01, _0x5edba6, _0x55411c, _0x5c1527, _0x549b50, _0x5440d5, _0x3af65e, _0x34376c) : _0x20ed22["compressedTexSubImage2D"](_0x4d3013, _0x449d01, _0x5edba6, _0x55411c, _0x5c1527, _0x549b50, _0x5440d5, _0x18c91b, _0x34376c, _0x3af65e);
        return;
      }
      _0x20ed22["compressedTexSubImage2D"](_0x4d3013, _0x449d01, _0x5edba6, _0x55411c, _0x5c1527, _0x549b50, _0x5440d5, _0x34376c ? _0x18c91b["subarray"](_0x34376c, _0x34376c + _0x3af65e) : null);
    }
    function _0x14abeb(_0x277306, _0x741470, _0x485d2c, _0x387902, _0x545221, _0x3eafd3, _0x268636, _0x5c1614, _0x88911c, _0x26d6c9, _0x51d608) {
      _0x20ed22["currentPixelUnpackBufferBinding"] ? _0x20ed22["compressedTexSubImage3D"](_0x277306, _0x741470, _0x485d2c, _0x387902, _0x545221, _0x3eafd3, _0x268636, _0x5c1614, _0x88911c, _0x26d6c9, _0x51d608) : _0x20ed22["compressedTexSubImage3D"](_0x277306, _0x741470, _0x485d2c, _0x387902, _0x545221, _0x3eafd3, _0x268636, _0x5c1614, _0x88911c, _0x18c91b, _0x51d608, _0x26d6c9);
    }
    function _0x14f3d0(_0x175a57, _0x40b5fe, _0xc15c84, _0x4b564a, _0x175059) {
      _0x20ed22["copyBufferSubData"](_0x175a57, _0x40b5fe, _0xc15c84, _0x4b564a, _0x175059);
    }
    function _0x466738(_0x5a681b, _0x353879, _0x79df23, _0x11b557, _0x1ca471, _0x2e0be1, _0x38c186, _0x5ec4a5) {
      _0x20ed22["copyTexImage2D"](_0x5a681b, _0x353879, _0x79df23, _0x11b557, _0x1ca471, _0x2e0be1, _0x38c186, _0x5ec4a5);
    }
    function _0x392e0a(_0x10d671, _0x7c9b29, _0xad260b, _0x47e232, _0x310240, _0x1fdae0, _0x3784bd, _0x3cd2b0) {
      _0x20ed22["copyTexSubImage2D"](_0x10d671, _0x7c9b29, _0xad260b, _0x47e232, _0x310240, _0x1fdae0, _0x3784bd, _0x3cd2b0);
    }
    function _0x39a665() {
      var _0x354b0a = _0x2ab728["getNewId"](_0x2ab728["programs"]), _0x5f17b9 = _0x20ed22["createProgram"]();
      return _0x5f17b9["name"] = _0x354b0a, _0x5f17b9["maxUniformLength"] = _0x5f17b9["maxAttributeLength"] = _0x5f17b9["maxUniformBlockNameLength"] = 0, _0x5f17b9["uniformIdCounter"] = 1, _0x2ab728["programs"][_0x354b0a] = _0x5f17b9, _0x354b0a;
    }
    function _0x2fcc65(_0x61ccd0) {
      var _0x1ccaea = _0x2ab728["getNewId"](_0x2ab728["shaders"]);
      return _0x2ab728["shaders"][_0x1ccaea] = _0x20ed22["createShader"](_0x61ccd0), _0x2ab728["shaders"][_0x1ccaea]["shaderType"] = _0x61ccd0 & 1 ? "vs" : "fs", _0x1ccaea;
    }
    function _0x37b362(_0x43c8a4) {
      _0x20ed22["cullFace"](_0x43c8a4);
    }
    function _0x540fc3(_0x164b17, _0x19f455) {
      for (var _0x3b2911 = 0; _0x3b2911 < _0x164b17; _0x3b2911++) {
        var _0x4de556 = _0x46c9cf[_0x19f455 + _0x3b2911 * 4 >> 2], _0x3de3c9 = _0x2ab728["buffers"][_0x4de556];
        if (!_0x3de3c9) continue;
        _0x20ed22["deleteBuffer"](_0x3de3c9), _0x3de3c9["name"] = 0, _0x2ab728["buffers"][_0x4de556] = null;
        if (_0x4de556 == _0x20ed22["currentArrayBufferBinding"]) _0x20ed22["currentArrayBufferBinding"] = 0;
        if (_0x4de556 == _0x20ed22["currentElementArrayBufferBinding"]) _0x20ed22["currentElementArrayBufferBinding"] = 0;
        if (_0x4de556 == _0x20ed22["currentPixelPackBufferBinding"]) _0x20ed22["currentPixelPackBufferBinding"] = 0;
        if (_0x4de556 == _0x20ed22["currentPixelUnpackBufferBinding"]) _0x20ed22["currentPixelUnpackBufferBinding"] = 0;
      }
    }
    function _0x1866d8(_0xf8fb8a, _0xf11875) {
      for (var _0x1e75a4 = 0; _0x1e75a4 < _0xf8fb8a; ++_0x1e75a4) {
        var _0x3139a7 = _0x46c9cf[_0xf11875 + _0x1e75a4 * 4 >> 2], _0x275ba5 = _0x2ab728["framebuffers"][_0x3139a7];
        if (!_0x275ba5) continue;
        _0x20ed22["deleteFramebuffer"](_0x275ba5), _0x275ba5["name"] = 0, _0x2ab728["framebuffers"][_0x3139a7] = null;
      }
    }
    function _0x2a53a9(_0x1e007f) {
      if (!_0x1e007f) return;
      var _0x1f43b0 = _0x2ab728["programs"][_0x1e007f];
      if (!_0x1f43b0) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x20ed22["deleteProgram"](_0x1f43b0), _0x1f43b0["name"] = 0, _0x2ab728["programs"][_0x1e007f] = null;
    }
    function _0x670340(_0x125133, _0x118f3d) {
      for (var _0xdf2325 = 0; _0xdf2325 < _0x125133; _0xdf2325++) {
        var _0x11fabe = _0x46c9cf[_0x118f3d + _0xdf2325 * 4 >> 2], _0x135c50 = _0x2ab728["queries"][_0x11fabe];
        if (!_0x135c50) continue;
        _0x20ed22["deleteQuery"](_0x135c50), _0x2ab728["queries"][_0x11fabe] = null;
      }
    }
    function _0x3ec032(_0x52b3fa, _0x420dfb) {
      for (var _0x5bdb01 = 0; _0x5bdb01 < _0x52b3fa; _0x5bdb01++) {
        var _0x161747 = _0x46c9cf[_0x420dfb + _0x5bdb01 * 4 >> 2], _0x492415 = _0x2ab728["renderbuffers"][_0x161747];
        if (!_0x492415) continue;
        _0x20ed22["deleteRenderbuffer"](_0x492415), _0x492415["name"] = 0, _0x2ab728["renderbuffers"][_0x161747] = null;
      }
    }
    function _0x4fbc7b(_0x412514, _0x630ef1) {
      for (var _0x32b762 = 0; _0x32b762 < _0x412514; _0x32b762++) {
        var _0x39cc64 = _0x46c9cf[_0x630ef1 + _0x32b762 * 4 >> 2], _0x3bc471 = _0x2ab728["samplers"][_0x39cc64];
        if (!_0x3bc471) continue;
        _0x20ed22["deleteSampler"](_0x3bc471), _0x3bc471["name"] = 0, _0x2ab728["samplers"][_0x39cc64] = null;
      }
    }
    function _0x2e0389(_0x48d3f6) {
      if (!_0x48d3f6) return;
      var _0x54d0a5 = _0x2ab728["shaders"][_0x48d3f6];
      if (!_0x54d0a5) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x20ed22["deleteShader"](_0x54d0a5), _0x2ab728["shaders"][_0x48d3f6] = null;
    }
    function _0x4218e7(_0x19d778) {
      if (!_0x19d778) return;
      var _0x402dff = _0x2ab728["syncs"][_0x19d778];
      if (!_0x402dff) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x20ed22["deleteSync"](_0x402dff), _0x402dff["name"] = 0, _0x2ab728["syncs"][_0x19d778] = null;
    }
    function _0xd63045(_0x4caae8, _0x5f136e) {
      for (var _0x37549a = 0; _0x37549a < _0x4caae8; _0x37549a++) {
        var _0x19df37 = _0x46c9cf[_0x5f136e + _0x37549a * 4 >> 2], _0x6972a4 = _0x2ab728["textures"][_0x19df37];
        if (!_0x6972a4) continue;
        _0x20ed22["deleteTexture"](_0x6972a4), _0x6972a4["name"] = 0, _0x2ab728["textures"][_0x19df37] = null;
      }
    }
    function _0x4d666a(_0x5ce8a9, _0x487b77) {
      for (var _0x37406a = 0; _0x37406a < _0x5ce8a9; _0x37406a++) {
        var _0xc866cb = _0x46c9cf[_0x487b77 + _0x37406a * 4 >> 2];
        _0x20ed22["deleteVertexArray"](_0x2ab728["vaos"][_0xc866cb]), _0x2ab728["vaos"][_0xc866cb] = null;
      }
    }
    function _0x52b900(_0x141075) {
      _0x20ed22["depthFunc"](_0x141075);
    }
    function _0x464873(_0x578d03) {
      _0x20ed22["depthMask"](!!_0x578d03);
    }
    function _0x459d11(_0x313a2d, _0x127dc8) {
      _0x20ed22["detachShader"](_0x2ab728["programs"][_0x313a2d], _0x2ab728["shaders"][_0x127dc8]);
    }
    function _0x5981cd(_0x668a66) {
      _0x20ed22["disable"](_0x668a66);
    }
    function _0x282e27(_0x3fe972) {
      var _0x2554b6 = _0x2ab728["currentContext"]["clientBuffers"][_0x3fe972];
      _0x2554b6["enabled"] = false, _0x20ed22["disableVertexAttribArray"](_0x3fe972);
    }
    function _0x16e9c7(_0x2a995d, _0x1e1909, _0x47961e) {
      _0x2ab728["preDrawHandleClientVertexAttribBindings"](_0x1e1909 + _0x47961e), _0x20ed22["drawArrays"](_0x2a995d, _0x1e1909, _0x47961e), _0x2ab728["postDrawHandleClientVertexAttribBindings"]();
    }
    function _0xbba121(_0x20240, _0x5886c6, _0x24f25d, _0x46016a) {
      _0x20ed22["drawArraysInstanced"](_0x20240, _0x5886c6, _0x24f25d, _0x46016a);
    }
    var _0x526991 = [];
    function _0x187595(_0x50ec3c, _0x227e11) {
      var _0x2a4b50 = _0x526991[_0x50ec3c];
      for (var _0x3a4ba8 = 0; _0x3a4ba8 < _0x50ec3c; _0x3a4ba8++) {
        _0x2a4b50[_0x3a4ba8] = _0x46c9cf[_0x227e11 + _0x3a4ba8 * 4 >> 2];
      }
      _0x20ed22["drawBuffers"](_0x2a4b50);
    }
    function _0x49b8a0(_0x25a60a, _0x3a8354, _0x508412, _0x4df903) {
      var _0x15960a;
      if (!_0x20ed22["currentElementArrayBufferBinding"]) {
        var _0x35e178 = _0x2ab728["calcBufLength"](1, _0x508412, 0, _0x3a8354);
        _0x15960a = _0x2ab728["getTempIndexBuffer"](_0x35e178), _0x20ed22["bindBuffer"](34963, _0x15960a), _0x20ed22["bufferSubData"](34963, 0, _0x18c91b["subarray"](_0x4df903, _0x4df903 + _0x35e178)), _0x4df903 = 0;
      }
      _0x2ab728["preDrawHandleClientVertexAttribBindings"](_0x3a8354), _0x20ed22["drawElements"](_0x25a60a, _0x3a8354, _0x508412, _0x4df903), _0x2ab728["postDrawHandleClientVertexAttribBindings"](_0x3a8354), !_0x20ed22["currentElementArrayBufferBinding"] && _0x20ed22["bindBuffer"](34963, null);
    }
    function _0x495a6d(_0x4308b7, _0x112f66, _0x386236, _0x4cb2f6, _0x1a6532) {
      _0x20ed22["drawElementsInstanced"](_0x4308b7, _0x112f66, _0x386236, _0x4cb2f6, _0x1a6532);
    }
    function _0x16ac80(_0x24cf03) {
      _0x20ed22["enable"](_0x24cf03);
    }
    function _0x49be46(_0xea78a3) {
      var _0x41ced9 = _0x2ab728["currentContext"]["clientBuffers"][_0xea78a3];
      _0x41ced9["enabled"] = true, _0x20ed22["enableVertexAttribArray"](_0xea78a3);
    }
    function _0x3adb6b(_0x16391b) {
      _0x20ed22["endQuery"](_0x16391b);
    }
    function _0x880b1(_0x328f67, _0x2b578b) {
      var _0x31779f = _0x20ed22["fenceSync"](_0x328f67, _0x2b578b);
      if (_0x31779f) {
        var _0x23bd8a = _0x2ab728["getNewId"](_0x2ab728["syncs"]);
        return _0x31779f["name"] = _0x23bd8a, _0x2ab728["syncs"][_0x23bd8a] = _0x31779f, _0x23bd8a;
      } else return 0;
    }
    function _0x1c15cb() {
      _0x20ed22["finish"]();
    }
    function _0x15f619() {
      _0x20ed22["flush"]();
    }
    function _0x2a4083(_0x1a2183) {
      switch (_0x1a2183) {
        case 34962:
          _0x1a2183 = 34964;
          break;
        case 34963:
          _0x1a2183 = 34965;
          break;
        case 35051:
          _0x1a2183 = 35053;
          break;
        case 35052:
          _0x1a2183 = 35055;
          break;
        case 35982:
          _0x1a2183 = 35983;
          break;
        case 36662:
          _0x1a2183 = 36662;
          break;
        case 36663:
          _0x1a2183 = 36663;
          break;
        case 35345:
          _0x1a2183 = 35368;
          break;
      }
      var _0x5e86cc = _0x20ed22["getParameter"](_0x1a2183);
      if (_0x5e86cc) return _0x5e86cc["name"] | 0; else return 0;
    }
    function _0x3941ca(_0x2e76f1) {
      switch (_0x2e76f1) {
        case 34962:
        case 34963:
        case 36662:
        case 36663:
        case 35051:
        case 35052:
        case 35882:
        case 35982:
        case 35345:
          return true;
        default:
          return false;
      }
    }
    function _0x1a121d(_0x39f877, _0xee438a, _0x387caf) {
      if (!_0x3941ca(_0x39f877)) {
        _0x2ab728["recordError"](1280), _0x119168("GL_INVALID_ENUM in glFlushMappedBufferRange");
        return;
      }
      var _0x415e56 = _0x2ab728["mappedBuffers"][_0x2a4083(_0x39f877)];
      if (!_0x415e56) {
        _0x2ab728["recordError"](1282), _0x119168("buffer was never mapped in glFlushMappedBufferRange");
        return;
      }
      if (!(_0x415e56["access"] & 16)) {
        _0x2ab728["recordError"](1282), _0x119168("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
        return;
      }
      if (_0xee438a < 0 || _0x387caf < 0 || _0xee438a + _0x387caf > _0x415e56["length"]) {
        _0x2ab728["recordError"](1281), _0x119168("invalid range in glFlushMappedBufferRange");
        return;
      }
      _0x20ed22["bufferSubData"](_0x39f877, _0x415e56["offset"], _0x18c91b["subarray"](_0x415e56["mem"] + _0xee438a, _0x415e56["mem"] + _0xee438a + _0x387caf));
    }
    function _0x27705a(_0x57d272, _0x4f93be, _0x544383, _0x9cd689) {
      _0x20ed22["framebufferRenderbuffer"](_0x57d272, _0x4f93be, _0x544383, _0x2ab728["renderbuffers"][_0x9cd689]);
    }
    function _0x24606c(_0x37baa9, _0x2f000d, _0x55e77b, _0x16bc2e, _0x4ed593) {
      _0x20ed22["framebufferTexture2D"](_0x37baa9, _0x2f000d, _0x55e77b, _0x2ab728["textures"][_0x16bc2e], _0x4ed593);
    }
    function _0x364e9e(_0x8b9bb9, _0x1bad34, _0x14bc5c, _0x345df2, _0x293702) {
      _0x20ed22["framebufferTextureLayer"](_0x8b9bb9, _0x1bad34, _0x2ab728["textures"][_0x14bc5c], _0x345df2, _0x293702);
    }
    function _0x5b7914(_0x2c4fa7) {
      _0x20ed22["frontFace"](_0x2c4fa7);
    }
    function _0x4373c7(_0x385aec, _0x3932bc, _0x51b673, _0x26e044) {
      for (var _0x3bd16e = 0; _0x3bd16e < _0x385aec; _0x3bd16e++) {
        var _0x3698f5 = _0x20ed22[_0x51b673](), _0x320ba7 = _0x3698f5 && _0x2ab728["getNewId"](_0x26e044);
        _0x3698f5 ? (_0x3698f5["name"] = _0x320ba7, _0x26e044[_0x320ba7] = _0x3698f5) : _0x2ab728["recordError"](1282), _0x46c9cf[_0x3932bc + _0x3bd16e * 4 >> 2] = _0x320ba7;
      }
    }
    function _0x2e111f(_0x5e5ad0, _0x4fca77) {
      _0x4373c7(_0x5e5ad0, _0x4fca77, "createBuffer", _0x2ab728["buffers"]);
    }
    function _0x497aa6(_0x291432, _0x572961) {
      _0x4373c7(_0x291432, _0x572961, "createFramebuffer", _0x2ab728["framebuffers"]);
    }
    function _0x4de728(_0x12ef51, _0x38f40c) {
      _0x4373c7(_0x12ef51, _0x38f40c, "createQuery", _0x2ab728["queries"]);
    }
    function _0x2543f8(_0x1375e3, _0x1137cd) {
      _0x4373c7(_0x1375e3, _0x1137cd, "createRenderbuffer", _0x2ab728["renderbuffers"]);
    }
    function _0x330f70(_0x23563d, _0x1f6dc8) {
      _0x4373c7(_0x23563d, _0x1f6dc8, "createSampler", _0x2ab728["samplers"]);
    }
    function _0x1d7c21(_0xe8648f, _0x2c9308) {
      _0x4373c7(_0xe8648f, _0x2c9308, "createTexture", _0x2ab728["textures"]);
    }
    function _0x356b0b(_0x53a220, _0x1b0772) {
      _0x4373c7(_0x53a220, _0x1b0772, "createVertexArray", _0x2ab728["vaos"]);
    }
    function _0x17c6ab(_0x505248) {
      _0x20ed22["generateMipmap"](_0x505248);
    }
    function _0x55ba56(_0x5bd36d, _0x4d6845, _0x57b523, _0x3962ac, _0x2d61a2, _0x29eb41, _0x29b634, _0x33a8d0) {
      _0x4d6845 = _0x2ab728["programs"][_0x4d6845];
      var _0x18eede = _0x20ed22[_0x5bd36d](_0x4d6845, _0x57b523);
      if (_0x18eede) {
        var _0x414ff1 = _0x33a8d0 && _0x1714da(_0x18eede["name"], _0x33a8d0, _0x3962ac);
        if (_0x2d61a2) _0x46c9cf[_0x2d61a2 >> 2] = _0x414ff1;
        if (_0x29eb41) _0x46c9cf[_0x29eb41 >> 2] = _0x18eede["size"];
        if (_0x29b634) _0x46c9cf[_0x29b634 >> 2] = _0x18eede["type"];
      }
    }
    function _0x3d7d16(_0xa47a00, _0x5034cc, _0x26455e, _0x32bc0b, _0x549440, _0x300389, _0x5f36ba) {
      _0x55ba56("getActiveAttrib", _0xa47a00, _0x5034cc, _0x26455e, _0x32bc0b, _0x549440, _0x300389, _0x5f36ba);
    }
    function _0x314679(_0x3ef5da, _0x1ae99b, _0x115207, _0x3c1953, _0x14594f, _0x247054, _0x4073e8) {
      _0x55ba56("getActiveUniform", _0x3ef5da, _0x1ae99b, _0x115207, _0x3c1953, _0x14594f, _0x247054, _0x4073e8);
    }
    function _0x4f2508(_0x5a4941, _0x5765fc, _0x40e14b, _0x2e3ce5, _0x1d0325) {
      _0x5a4941 = _0x2ab728["programs"][_0x5a4941];
      var _0x228667 = _0x20ed22["getActiveUniformBlockName"](_0x5a4941, _0x5765fc);
      if (!_0x228667) return;
      if (_0x1d0325 && _0x40e14b > 0) {
        var _0x96443 = _0x1714da(_0x228667, _0x1d0325, _0x40e14b);
        if (_0x2e3ce5) _0x46c9cf[_0x2e3ce5 >> 2] = _0x96443;
      } else {
        if (_0x2e3ce5) _0x46c9cf[_0x2e3ce5 >> 2] = 0;
      }
    }
    function _0x5190a4(_0x2afe8f, _0x131d49, _0x464cad, _0x24b0c8) {
      if (!_0x24b0c8) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x2afe8f = _0x2ab728["programs"][_0x2afe8f];
      if (_0x464cad == 35393) {
        var _0x293176 = _0x20ed22["getActiveUniformBlockName"](_0x2afe8f, _0x131d49);
        _0x46c9cf[_0x24b0c8 >> 2] = _0x293176["length"] + 1;
        return;
      }
      var _0x30bcdd = _0x20ed22["getActiveUniformBlockParameter"](_0x2afe8f, _0x131d49, _0x464cad);
      if (_0x30bcdd === null) return;
      if (_0x464cad == 35395) for (var _0x450418 = 0; _0x450418 < _0x30bcdd["length"]; _0x450418++) {
        _0x46c9cf[_0x24b0c8 + _0x450418 * 4 >> 2] = _0x30bcdd[_0x450418];
      } else _0x46c9cf[_0x24b0c8 >> 2] = _0x30bcdd;
    }
    function _0x584189(_0x112479, _0x53f90c, _0x1725ed, _0x46bbed, _0x2a777a) {
      if (!_0x2a777a) {
        _0x2ab728["recordError"](1281);
        return;
      }
      if (_0x53f90c > 0 && _0x1725ed == 0) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x112479 = _0x2ab728["programs"][_0x112479];
      var _0x446e32 = [];
      for (var _0x2fb5c5 = 0; _0x2fb5c5 < _0x53f90c; _0x2fb5c5++) {
        _0x446e32["push"](_0x46c9cf[_0x1725ed + _0x2fb5c5 * 4 >> 2]);
      }
      var _0x4609dc = _0x20ed22["getActiveUniforms"](_0x112479, _0x446e32, _0x46bbed);
      if (!_0x4609dc) return;
      var _0x561890 = _0x4609dc["length"];
      for (var _0x2fb5c5 = 0; _0x2fb5c5 < _0x561890; _0x2fb5c5++) {
        _0x46c9cf[_0x2a777a + _0x2fb5c5 * 4 >> 2] = _0x4609dc[_0x2fb5c5];
      }
    }
    function _0x506ffb(_0xd460ae, _0x47569f) {
      return _0x20ed22["getAttribLocation"](_0x2ab728["programs"][_0xd460ae], _0x30a7f6(_0x47569f));
    }
    function _0x2bd7fe(_0x3ac9f8, _0x256762, _0x2fbb8a, _0x5bcc39) {
      if (!_0x5bcc39) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x20ed22["getBufferSubData"](_0x3ac9f8, _0x256762, _0x18c91b, _0x5bcc39, _0x2fbb8a);
    }
    function _0x29a87b() {
      var _0x326295 = _0x20ed22["getError"]() || _0x2ab728["lastError"];
      return _0x2ab728["lastError"] = 0, _0x326295;
    }
    function _0x1cd048(_0x3f6dbb, _0x9debc2, _0xa130a7, _0x4752ec) {
      var _0xa9afb8 = _0x20ed22["getFramebufferAttachmentParameter"](_0x3f6dbb, _0x9debc2, _0xa130a7);
      (_0xa9afb8 instanceof WebGLRenderbuffer || _0xa9afb8 instanceof WebGLTexture) && (_0xa9afb8 = _0xa9afb8["name"] | 0), _0x46c9cf[_0x4752ec >> 2] = _0xa9afb8;
    }
    function _0x26b6a6(_0x465ec2, _0x46ef98) {
      _0x29f705[_0x465ec2 >> 2] = _0x46ef98, _0x29f705[_0x465ec2 + 4 >> 2] = (_0x46ef98 - _0x29f705[_0x465ec2 >> 2]) / 4294967296;
    }
    function _0x2c2d45(_0x397206, _0x249bec, _0x559f39, _0x57c4dc) {
      if (!_0x559f39) {
        _0x2ab728["recordError"](1281);
        return;
      }
      var _0xa74c9c = _0x20ed22["getIndexedParameter"](_0x397206, _0x249bec), _0x363c74;
      switch (typeof _0xa74c9c) {
        case "boolean":
          _0x363c74 = _0xa74c9c ? 1 : 0;
          break;
        case "number":
          _0x363c74 = _0xa74c9c;
          break;
        case "object":
          if (_0xa74c9c === null) switch (_0x397206) {
            case 35983:
            case 35368:
              _0x363c74 = 0;
              break;
            default:
              {
                _0x2ab728["recordError"](1280);
                return;
              }
          } else {
            if (_0xa74c9c instanceof WebGLBuffer) _0x363c74 = _0xa74c9c["name"] | 0; else {
              _0x2ab728["recordError"](1280);
              return;
            }
          }
          break;
        default:
          _0x2ab728["recordError"](1280);
          return;
      }
      switch (_0x57c4dc) {
        case 1:
          _0x26b6a6(_0x559f39, _0x363c74);
          break;
        case 0:
          _0x46c9cf[_0x559f39 >> 2] = _0x363c74;
          break;
        case 2:
          _0x33f22d[_0x559f39 >> 2] = _0x363c74;
          break;
        case 4:
          _0x59ed12[_0x559f39 >> 0] = _0x363c74 ? 1 : 0;
          break;
        default:
          throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x57c4dc;
      }
    }
    function _0x282ff2(_0x1b1faf, _0x29cfcc, _0x2fd448) {
      _0x2c2d45(_0x1b1faf, _0x29cfcc, _0x2fd448, 0);
    }
    function _0x3f6ba2(_0x1affeb, _0x53e64c, _0x540b2e) {
      if (!_0x53e64c) {
        _0x2ab728["recordError"](1281);
        return;
      }
      var _0x3ac727 = undefined;
      switch (_0x1affeb) {
        case 36346:
          _0x3ac727 = 1;
          break;
        case 36344:
          _0x540b2e != 0 && _0x540b2e != 1 && _0x2ab728["recordError"](1280);
          return;
        case 34814:
        case 36345:
          _0x3ac727 = 0;
          break;
        case 34466:
          var _0x3e6e8c = _0x20ed22["getParameter"](34467);
          _0x3ac727 = _0x3e6e8c ? _0x3e6e8c["length"] : 0;
          break;
        case 33390:
          _0x3ac727 = 1048576;
          break;
        case 33309:
          if (_0x2ab728["currentContext"]["version"] < 2) {
            _0x2ab728["recordError"](1282);
            return;
          }
          var _0x244639 = _0x20ed22["getSupportedExtensions"]() || [];
          _0x3ac727 = 2 * _0x244639["length"];
          break;
        case 33307:
        case 33308:
          if (_0x2ab728["currentContext"]["version"] < 2) {
            _0x2ab728["recordError"](1280);
            return;
          }
          _0x3ac727 = _0x1affeb == 33307 ? 3 : 0;
          break;
      }
      if (_0x3ac727 === undefined) {
        var _0x583ff2 = _0x20ed22["getParameter"](_0x1affeb);
        switch (typeof _0x583ff2) {
          case "number":
            _0x3ac727 = _0x583ff2;
            break;
          case "boolean":
            _0x3ac727 = _0x583ff2 ? 1 : 0;
            break;
          case "string":
            _0x2ab728["recordError"](1280);
            return;
          case "object":
            if (_0x583ff2 === null) switch (_0x1affeb) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34229:
              case 36662:
              case 36663:
              case 35053:
              case 35055:
              case 36010:
              case 35097:
              case 35869:
              case 32874:
              case 36389:
              case 35983:
              case 35368:
              case 34068:
                {
                  _0x3ac727 = 0;
                  break;
                }
              default:
                {
                  _0x2ab728["recordError"](1280);
                  return;
                }
            } else {
              if (_0x583ff2 instanceof Float32Array || _0x583ff2 instanceof Uint32Array || _0x583ff2 instanceof Int32Array || _0x583ff2 instanceof Array) {
                for (var _0xbb41ca = 0; _0xbb41ca < _0x583ff2["length"]; ++_0xbb41ca) {
                  switch (_0x540b2e) {
                    case 0:
                      _0x46c9cf[_0x53e64c + _0xbb41ca * 4 >> 2] = _0x583ff2[_0xbb41ca];
                      break;
                    case 2:
                      _0x33f22d[_0x53e64c + _0xbb41ca * 4 >> 2] = _0x583ff2[_0xbb41ca];
                      break;
                    case 4:
                      _0x59ed12[_0x53e64c + _0xbb41ca >> 0] = _0x583ff2[_0xbb41ca] ? 1 : 0;
                      break;
                  }
                }
                return;
              } else try {
                _0x3ac727 = _0x583ff2["name"] | 0;
              } catch (_0x41e61f) {
                _0x2ab728["recordError"](1280), _0x119168("GL_INVALID_ENUM in glGet" + _0x540b2e + "v: Unknown object returned from WebGL getParameter(" + _0x1affeb + ")! (error: " + _0x41e61f + ")");
                return;
              }
            }
            break;
          default:
            _0x2ab728["recordError"](1280), _0x119168("GL_INVALID_ENUM in glGet" + _0x540b2e + "v: Native code calling glGet" + _0x540b2e + "v(" + _0x1affeb + ") and it returns " + _0x583ff2 + " of type " + typeof _0x583ff2 + "!");
            return;
        }
      }
      switch (_0x540b2e) {
        case 1:
          _0x26b6a6(_0x53e64c, _0x3ac727);
          break;
        case 0:
          _0x46c9cf[_0x53e64c >> 2] = _0x3ac727;
          break;
        case 2:
          _0x33f22d[_0x53e64c >> 2] = _0x3ac727;
          break;
        case 4:
          _0x59ed12[_0x53e64c >> 0] = _0x3ac727 ? 1 : 0;
          break;
      }
    }
    function _0x331f11(_0x2e3d03, _0x5c6b4b) {
      _0x3f6ba2(_0x2e3d03, _0x5c6b4b, 0);
    }
    function _0x5e9f28(_0x1d16e1, _0x1803a2, _0x597b3a, _0x2bb621, _0xee8933) {
      if (_0x2bb621 < 0) {
        _0x2ab728["recordError"](1281);
        return;
      }
      if (!_0xee8933) {
        _0x2ab728["recordError"](1281);
        return;
      }
      var _0x221ad6 = _0x20ed22["getInternalformatParameter"](_0x1d16e1, _0x1803a2, _0x597b3a);
      if (_0x221ad6 === null) return;
      for (var _0x4b211b = 0; _0x4b211b < _0x221ad6["length"] && _0x4b211b < _0x2bb621; ++_0x4b211b) {
        _0x46c9cf[_0xee8933 + _0x4b211b * 4 >> 2] = _0x221ad6[_0x4b211b];
      }
    }
    function _0x1440cb(_0x5350bd, _0x3d5839, _0x54c728, _0x31487f, _0x48c6ff) {
      _0x2ab728["recordError"](1282);
    }
    function _0x9a981e(_0x192361, _0xdec9df, _0x3228ee, _0x5b65af) {
      var _0x5a19e4 = _0x20ed22["getProgramInfoLog"](_0x2ab728["programs"][_0x192361]);
      if (_0x5a19e4 === null) _0x5a19e4 = "(unknown error)";
      var _0x3c3785 = _0xdec9df > 0 && _0x5b65af ? _0x1714da(_0x5a19e4, _0x5b65af, _0xdec9df) : 0;
      if (_0x3228ee) _0x46c9cf[_0x3228ee >> 2] = _0x3c3785;
    }
    function _0x119c19(_0x4235e7, _0x11910d, _0xb9e11f) {
      if (!_0xb9e11f) {
        _0x2ab728["recordError"](1281);
        return;
      }
      if (_0x4235e7 >= _0x2ab728["counter"]) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x4235e7 = _0x2ab728["programs"][_0x4235e7];
      if (_0x11910d == 35716) {
        var _0x27f9fd = _0x20ed22["getProgramInfoLog"](_0x4235e7);
        if (_0x27f9fd === null) _0x27f9fd = "(unknown error)";
        _0x46c9cf[_0xb9e11f >> 2] = _0x27f9fd["length"] + 1;
      } else {
        if (_0x11910d == 35719) {
          if (!_0x4235e7["maxUniformLength"]) for (var _0x7ceb6f = 0; _0x7ceb6f < _0x20ed22["getProgramParameter"](_0x4235e7, 35718); ++_0x7ceb6f) {
            _0x4235e7["maxUniformLength"] = Math["max"](_0x4235e7["maxUniformLength"], _0x20ed22["getActiveUniform"](_0x4235e7, _0x7ceb6f)["name"]["length"] + 1);
          }
          _0x46c9cf[_0xb9e11f >> 2] = _0x4235e7["maxUniformLength"];
        } else {
          if (_0x11910d == 35722) {
            if (!_0x4235e7["maxAttributeLength"]) for (var _0x7ceb6f = 0; _0x7ceb6f < _0x20ed22["getProgramParameter"](_0x4235e7, 35721); ++_0x7ceb6f) {
              _0x4235e7["maxAttributeLength"] = Math["max"](_0x4235e7["maxAttributeLength"], _0x20ed22["getActiveAttrib"](_0x4235e7, _0x7ceb6f)["name"]["length"] + 1);
            }
            _0x46c9cf[_0xb9e11f >> 2] = _0x4235e7["maxAttributeLength"];
          } else {
            if (_0x11910d == 35381) {
              if (!_0x4235e7["maxUniformBlockNameLength"]) for (var _0x7ceb6f = 0; _0x7ceb6f < _0x20ed22["getProgramParameter"](_0x4235e7, 35382); ++_0x7ceb6f) {
                _0x4235e7["maxUniformBlockNameLength"] = Math["max"](_0x4235e7["maxUniformBlockNameLength"], _0x20ed22["getActiveUniformBlockName"](_0x4235e7, _0x7ceb6f)["length"] + 1);
              }
              _0x46c9cf[_0xb9e11f >> 2] = _0x4235e7["maxUniformBlockNameLength"];
            } else _0x46c9cf[_0xb9e11f >> 2] = _0x20ed22["getProgramParameter"](_0x4235e7, _0x11910d);
          }
        }
      }
    }
    function _0x159b76(_0x1cfd28, _0x367834, _0x40f7ee) {
      if (!_0x40f7ee) {
        _0x2ab728["recordError"](1281);
        return;
      }
      var _0x3f335b = _0x2ab728["queries"][_0x1cfd28], _0x43a90a = _0x20ed22["getQueryParameter"](_0x3f335b, _0x367834), _0x451299;
      typeof _0x43a90a == "boolean" ? _0x451299 = _0x43a90a ? 1 : 0 : _0x451299 = _0x43a90a, _0x46c9cf[_0x40f7ee >> 2] = _0x451299;
    }
    function _0x2bcf70(_0x4dffee, _0x56894b, _0xa0628a) {
      if (!_0xa0628a) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x46c9cf[_0xa0628a >> 2] = _0x20ed22["getQuery"](_0x4dffee, _0x56894b);
    }
    function _0x2f2484(_0x402b00, _0x10a8cd, _0x1399f1) {
      if (!_0x1399f1) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x46c9cf[_0x1399f1 >> 2] = _0x20ed22["getRenderbufferParameter"](_0x402b00, _0x10a8cd);
    }
    function _0x118e8b(_0x3889b0, _0x7b1727, _0x508393, _0x2ff7b1) {
      var _0x3157c6 = _0x20ed22["getShaderInfoLog"](_0x2ab728["shaders"][_0x3889b0]);
      if (_0x3157c6 === null) _0x3157c6 = "(unknown error)";
      var _0x231626 = _0x7b1727 > 0 && _0x2ff7b1 ? _0x1714da(_0x3157c6, _0x2ff7b1, _0x7b1727) : 0;
      if (_0x508393) _0x46c9cf[_0x508393 >> 2] = _0x231626;
    }
    function _0x4a6db3(_0x33626a, _0xf1a3cf, _0x4a0e15, _0x594c0e) {
      var _0x3ac62e = _0x20ed22["getShaderPrecisionFormat"](_0x33626a, _0xf1a3cf);
      _0x46c9cf[_0x4a0e15 >> 2] = _0x3ac62e["rangeMin"], _0x46c9cf[_0x4a0e15 + 4 >> 2] = _0x3ac62e["rangeMax"], _0x46c9cf[_0x594c0e >> 2] = _0x3ac62e["precision"];
    }
    function _0x198173(_0x1ede68, _0x22b0f3, _0xb14a15, _0x5d2371) {
      var _0x25a455 = _0x20ed22["getShaderSource"](_0x2ab728["shaders"][_0x1ede68]);
      if (!_0x25a455) return;
      var _0x56497d = _0x22b0f3 > 0 && _0x5d2371 ? _0x1714da(_0x25a455, _0x5d2371, _0x22b0f3) : 0;
      if (_0xb14a15) _0x46c9cf[_0xb14a15 >> 2] = _0x56497d;
    }
    function _0x42562c(_0x5639eb, _0x46fb75, _0x5bce9a) {
      if (!_0x5bce9a) {
        _0x2ab728["recordError"](1281);
        return;
      }
      if (_0x46fb75 == 35716) {
        var _0x5ed9af = _0x20ed22["getShaderInfoLog"](_0x2ab728["shaders"][_0x5639eb]);
        if (_0x5ed9af === null) _0x5ed9af = "(unknown error)";
        var _0x519b44 = _0x5ed9af ? _0x5ed9af["length"] + 1 : 0;
        _0x46c9cf[_0x5bce9a >> 2] = _0x519b44;
      } else {
        if (_0x46fb75 == 35720) {
          var _0x45dbb4 = _0x20ed22["getShaderSource"](_0x2ab728["shaders"][_0x5639eb]), _0x2cd0e5 = _0x45dbb4 ? _0x45dbb4["length"] + 1 : 0;
          _0x46c9cf[_0x5bce9a >> 2] = _0x2cd0e5;
        } else _0x46c9cf[_0x5bce9a >> 2] = _0x20ed22["getShaderParameter"](_0x2ab728["shaders"][_0x5639eb], _0x46fb75);
      }
    }
    function _0x54cc9e(_0x13b8f1) {
      var _0x2c173c = _0x2ab728["stringCache"][_0x13b8f1];
      if (!_0x2c173c) {
        switch (_0x13b8f1) {
          case 7939:
            var _0x22c5c5 = _0x20ed22["getSupportedExtensions"]() || [];
            _0x22c5c5 = _0x22c5c5["concat"](_0x22c5c5["map"](function (_0x3e3705) {
              return "GL_" + _0x3e3705;
            })), _0x2c173c = _0x539986(_0x22c5c5["join"](" "));
            break;
          case 7936:
          case 7937:
          case 37445:
          case 37446:
            var _0x37e368 = _0x20ed22["getParameter"](_0x13b8f1);
            !_0x37e368 && _0x2ab728["recordError"](1280);
            _0x2c173c = _0x37e368 && _0x539986(_0x37e368);
            break;
          case 7938:
            var _0x45f828 = _0x20ed22["getParameter"](7938);
            if (_0x2ab728["currentContext"]["version"] >= 2) _0x45f828 = "OpenGL ES 3.0 (" + _0x45f828 + ")"; else _0x45f828 = "OpenGL ES 2.0 (" + _0x45f828 + ")";
            _0x2c173c = _0x539986(_0x45f828);
            break;
          case 35724:
            var _0x26f231 = _0x20ed22["getParameter"](35724), _0x25a9c7 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/, _0xe220a3 = _0x26f231["match"](_0x25a9c7);
            if (_0xe220a3 !== null) {
              if (_0xe220a3[1]["length"] == 3) _0xe220a3[1] = _0xe220a3[1] + "0";
              _0x26f231 = "OpenGL ES GLSL ES " + _0xe220a3[1] + " (" + _0x26f231 + ")";
            }
            _0x2c173c = _0x539986(_0x26f231);
            break;
          default:
            _0x2ab728["recordError"](1280);
        }
        _0x2ab728["stringCache"][_0x13b8f1] = _0x2c173c;
      }
      return _0x2c173c;
    }
    function _0x2b2115(_0x24f74f, _0x289795) {
      if (_0x2ab728["currentContext"]["version"] < 2) return _0x2ab728["recordError"](1282), 0;
      var _0x1b6b4b = _0x2ab728["stringiCache"][_0x24f74f];
      if (_0x1b6b4b) {
        if (_0x289795 < 0 || _0x289795 >= _0x1b6b4b["length"]) return _0x2ab728["recordError"](1281), 0;
        return _0x1b6b4b[_0x289795];
      }
      switch (_0x24f74f) {
        case 7939:
          var _0x3275b4 = _0x20ed22["getSupportedExtensions"]() || [];
          _0x3275b4 = _0x3275b4["concat"](_0x3275b4["map"](function (_0x2bd69a) {
            return "GL_" + _0x2bd69a;
          })), _0x3275b4 = _0x3275b4["map"](function (_0x2995ae) {
            return _0x539986(_0x2995ae);
          }), _0x1b6b4b = _0x2ab728["stringiCache"][_0x24f74f] = _0x3275b4;
          if (_0x289795 < 0 || _0x289795 >= _0x1b6b4b["length"]) return _0x2ab728["recordError"](1281), 0;
          return _0x1b6b4b[_0x289795];
        default:
          _0x2ab728["recordError"](1280);
          return 0;
      }
    }
    function _0x5da5cf(_0x369295, _0x1edcc1, _0x19b898) {
      if (!_0x19b898) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x46c9cf[_0x19b898 >> 2] = _0x20ed22["getTexParameter"](_0x369295, _0x1edcc1);
    }
    function _0x3bcd19(_0x25431b, _0x2b7373) {
      return _0x20ed22["getUniformBlockIndex"](_0x2ab728["programs"][_0x25431b], _0x30a7f6(_0x2b7373));
    }
    function _0x4e19a0(_0x31463a, _0x5f4c70, _0x6a00a1, _0x3d4fda) {
      if (!_0x3d4fda) {
        _0x2ab728["recordError"](1281);
        return;
      }
      if (_0x5f4c70 > 0 && (_0x6a00a1 == 0 || _0x3d4fda == 0)) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x31463a = _0x2ab728["programs"][_0x31463a];
      var _0x2dcc2e = [];
      for (var _0x279da3 = 0; _0x279da3 < _0x5f4c70; _0x279da3++) _0x2dcc2e["push"](_0x30a7f6(_0x46c9cf[_0x6a00a1 + _0x279da3 * 4 >> 2]));
      var _0x55df77 = _0x20ed22["getUniformIndices"](_0x31463a, _0x2dcc2e);
      if (!_0x55df77) return;
      var _0x13d1cd = _0x55df77["length"];
      for (var _0x279da3 = 0; _0x279da3 < _0x13d1cd; _0x279da3++) {
        _0x46c9cf[_0x3d4fda + _0x279da3 * 4 >> 2] = _0x55df77[_0x279da3];
      }
    }
    function _0x142417(_0xc7078d) {
      return _0xc7078d["slice"](-1) == "]" && _0xc7078d["lastIndexOf"]("[");
    }
    function _0x1f51b7(_0x9aa260) {
      var _0x311b58 = _0x9aa260["uniformLocsById"], _0x4bc056 = _0x9aa260["uniformSizeAndIdsByName"], _0x3a256f, _0x56b51f;
      if (!_0x311b58) {
        _0x9aa260["uniformLocsById"] = _0x311b58 = {}, _0x9aa260["uniformArrayNamesById"] = {};
        for (_0x3a256f = 0; _0x3a256f < _0x20ed22["getProgramParameter"](_0x9aa260, 35718); ++_0x3a256f) {
          var _0x337bf4 = _0x20ed22["getActiveUniform"](_0x9aa260, _0x3a256f), _0xe0b8f9 = _0x337bf4["name"], _0x5e88d8 = _0x337bf4["size"], _0x4bae3f = _0x142417(_0xe0b8f9), _0x104256 = _0x4bae3f > 0 ? _0xe0b8f9["slice"](0, _0x4bae3f) : _0xe0b8f9, _0x55fd85 = _0x4bc056[_0x104256] ? _0x4bc056[_0x104256][1] : _0x9aa260["uniformIdCounter"];
          _0x9aa260["uniformIdCounter"] = Math["max"](_0x55fd85 + _0x5e88d8, _0x9aa260["uniformIdCounter"]), _0x4bc056[_0x104256] = [_0x5e88d8, _0x55fd85];
          for (_0x56b51f = 0; _0x56b51f < _0x5e88d8; ++_0x56b51f) {
            _0x311b58[_0x55fd85] = _0x56b51f, _0x9aa260["uniformArrayNamesById"][_0x55fd85++] = _0x104256;
          }
        }
      }
    }
    function _0xc26e23(_0x1a36c3, _0x3598bb) {
      _0x3598bb = _0x30a7f6(_0x3598bb);
      if (_0x1a36c3 = _0x2ab728["programs"][_0x1a36c3]) {
        _0x1f51b7(_0x1a36c3);
        var _0x7e45ba = _0x1a36c3["uniformLocsById"], _0x249d6f = 0, _0x4b4080 = _0x3598bb, _0x154246 = _0x142417(_0x3598bb);
        _0x154246 > 0 && (_0x249d6f = _0x37def1(_0x3598bb["slice"](_0x154246 + 1)) >>> 0, _0x4b4080 = _0x3598bb["slice"](0, _0x154246));
        var _0x78d7a8 = _0x1a36c3["uniformSizeAndIdsByName"][_0x4b4080];
        if (_0x78d7a8 && _0x249d6f < _0x78d7a8[0]) {
          _0x249d6f += _0x78d7a8[1];
          if (_0x7e45ba[_0x249d6f] = _0x7e45ba[_0x249d6f] || _0x20ed22["getUniformLocation"](_0x1a36c3, _0x3598bb)) return _0x249d6f;
        }
      } else _0x2ab728["recordError"](1281);
      return -1;
    }
    function _0x484820(_0x1f6881) {
      var _0x31aaee = _0x20ed22["currentProgram"];
      if (_0x31aaee) {
        var _0x4d58e4 = _0x31aaee["uniformLocsById"][_0x1f6881];
        return typeof _0x4d58e4 == "number" && (_0x31aaee["uniformLocsById"][_0x1f6881] = _0x4d58e4 = _0x20ed22["getUniformLocation"](_0x31aaee, _0x31aaee["uniformArrayNamesById"][_0x1f6881] + (_0x4d58e4 > 0 ? "[" + _0x4d58e4 + "]" : ""))), _0x4d58e4;
      } else _0x2ab728["recordError"](1282);
    }
    function _0xd0e82e(_0x1f4af9, _0x514236, _0x25d24d, _0x4f19e9) {
      if (!_0x25d24d) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x1f4af9 = _0x2ab728["programs"][_0x1f4af9], _0x1f51b7(_0x1f4af9);
      var _0x33cd92 = _0x20ed22["getUniform"](_0x1f4af9, _0x484820(_0x514236));
      if (typeof _0x33cd92 == "number" || typeof _0x33cd92 == "boolean") switch (_0x4f19e9) {
        case 0:
          _0x46c9cf[_0x25d24d >> 2] = _0x33cd92;
          break;
        case 2:
          _0x33f22d[_0x25d24d >> 2] = _0x33cd92;
          break;
      } else for (var _0x325359 = 0; _0x325359 < _0x33cd92["length"]; _0x325359++) {
        switch (_0x4f19e9) {
          case 0:
            _0x46c9cf[_0x25d24d + _0x325359 * 4 >> 2] = _0x33cd92[_0x325359];
            break;
          case 2:
            _0x33f22d[_0x25d24d + _0x325359 * 4 >> 2] = _0x33cd92[_0x325359];
            break;
        }
      }
    }
    function _0x54d8a1(_0x4384b4, _0x1acfa0, _0x338722) {
      _0xd0e82e(_0x4384b4, _0x1acfa0, _0x338722, 0);
    }
    function _0x1f310b(_0xa1c078, _0x3c1893, _0x401f3f, _0x4c8543) {
      if (!_0x401f3f) {
        _0x2ab728["recordError"](1281);
        return;
      }
      _0x2ab728["currentContext"]["clientBuffers"][_0xa1c078]["enabled"] && _0x119168("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
      var _0x3b0740 = _0x20ed22["getVertexAttrib"](_0xa1c078, _0x3c1893);
      if (_0x3c1893 == 34975) _0x46c9cf[_0x401f3f >> 2] = _0x3b0740 && _0x3b0740["name"]; else {
        if (typeof _0x3b0740 == "number" || typeof _0x3b0740 == "boolean") switch (_0x4c8543) {
          case 0:
            _0x46c9cf[_0x401f3f >> 2] = _0x3b0740;
            break;
          case 2:
            _0x33f22d[_0x401f3f >> 2] = _0x3b0740;
            break;
          case 5:
            _0x46c9cf[_0x401f3f >> 2] = Math["fround"](_0x3b0740);
            break;
        } else for (var _0x5b7de0 = 0; _0x5b7de0 < _0x3b0740["length"]; _0x5b7de0++) {
          switch (_0x4c8543) {
            case 0:
              _0x46c9cf[_0x401f3f + _0x5b7de0 * 4 >> 2] = _0x3b0740[_0x5b7de0];
              break;
            case 2:
              _0x33f22d[_0x401f3f + _0x5b7de0 * 4 >> 2] = _0x3b0740[_0x5b7de0];
              break;
            case 5:
              _0x46c9cf[_0x401f3f + _0x5b7de0 * 4 >> 2] = Math["fround"](_0x3b0740[_0x5b7de0]);
              break;
          }
        }
      }
    }
    function _0x3a57d0(_0x4500e2, _0x546a7c, _0x54199a) {
      _0x1f310b(_0x4500e2, _0x546a7c, _0x54199a, 5);
    }
    function _0x2e4910(_0x2f3cdc, _0x19277f, _0x303476) {
      var _0x45f583 = _0x526991[_0x19277f];
      for (var _0x457e7a = 0; _0x457e7a < _0x19277f; _0x457e7a++) {
        _0x45f583[_0x457e7a] = _0x46c9cf[_0x303476 + _0x457e7a * 4 >> 2];
      }
      _0x20ed22["invalidateFramebuffer"](_0x2f3cdc, _0x45f583);
    }
    function _0xafd37d(_0x558a9a) {
      return _0x20ed22["isEnabled"](_0x558a9a);
    }
    function _0x2613bc(_0x2c08ec) {
      var _0x1b941e = _0x2ab728["vaos"][_0x2c08ec];
      if (!_0x1b941e) return 0;
      return _0x20ed22["isVertexArray"](_0x1b941e);
    }
    function _0x337519(_0x43a14e) {
      _0x43a14e = _0x2ab728["programs"][_0x43a14e], _0x20ed22["linkProgram"](_0x43a14e), _0x43a14e["uniformLocsById"] = 0, _0x43a14e["uniformSizeAndIdsByName"] = {}, [_0x43a14e["vs"], _0x43a14e["fs"]]["forEach"](function (_0x4c7dc2) {
        Object["keys"](_0x4c7dc2["explicitUniformLocations"])["forEach"](function (_0x4486ae) {
          var _0x9c8d2f = _0x4c7dc2["explicitUniformLocations"][_0x4486ae];
          _0x43a14e["uniformSizeAndIdsByName"][_0x4486ae] = [1, _0x9c8d2f], _0x43a14e["uniformIdCounter"] = Math["max"](_0x43a14e["uniformIdCounter"], _0x9c8d2f + 1);
        });
      });
      function _0x32b9da(_0x37a403, _0x246ac6) {
        Object["keys"](_0x246ac6)["forEach"](function (_0x4da7da) {
          _0x37a403[_0x4da7da] = _0x246ac6[_0x4da7da];
        });
      }
      _0x43a14e["explicitUniformBindings"] = {}, _0x43a14e["explicitSamplerBindings"] = {}, [_0x43a14e["vs"], _0x43a14e["fs"]]["forEach"](function (_0x1613bb) {
        _0x32b9da(_0x43a14e["explicitUniformBindings"], _0x1613bb["explicitUniformBindings"]), _0x32b9da(_0x43a14e["explicitSamplerBindings"], _0x1613bb["explicitSamplerBindings"]);
      }), _0x43a14e["explicitProgramBindingsApplied"] = 0;
    }
    function _0x472db0(_0x678c29, _0x1cc57d, _0x3f67f7, _0x139e01) {
      if (_0x139e01 != 26 && _0x139e01 != 10) return _0x119168("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER"), 0;
      if (!_0x3941ca(_0x678c29)) return _0x2ab728["recordError"](1280), _0x119168("GL_INVALID_ENUM in glMapBufferRange"), 0;
      var _0x31aca9 = _0x1f6602(_0x3f67f7);
      if (!_0x31aca9) return 0;
      return _0x2ab728["mappedBuffers"][_0x2a4083(_0x678c29)] = {offset: _0x1cc57d, length: _0x3f67f7, mem: _0x31aca9, access: _0x139e01}, _0x31aca9;
    }
    function _0x1c1d43(_0x2f11e1, _0x55a6c6) {
      _0x2f11e1 == 3317 && (_0x2ab728["unpackAlignment"] = _0x55a6c6), _0x20ed22["pixelStorei"](_0x2f11e1, _0x55a6c6);
    }
    function _0x241d23(_0x4f4459, _0x2541b7) {
      _0x20ed22["polygonOffset"](_0x4f4459, _0x2541b7);
    }
    function _0x4d971e(_0x4506e7, _0x2853fc, _0x5ab87d, _0xd333d) {
      _0x2ab728["recordError"](1280);
    }
    function _0xd443a4(_0x957bab, _0x4c9f30, _0x1aa642) {
      _0x2ab728["recordError"](1280);
    }
    function _0x423af5(_0x15cc07) {
      _0x20ed22["readBuffer"](_0x15cc07);
    }
    function _0x57b2e2(_0x3b8d14, _0x3fe836, _0x2432cc, _0x577df6) {
      function _0x18b7ca(_0x3d619f, _0x4d6b2a) {
        return _0x3d619f + _0x4d6b2a - 1 & -_0x4d6b2a;
      }
      var _0x2de7c0 = _0x3b8d14 * _0x2432cc, _0x5eefb2 = _0x18b7ca(_0x2de7c0, _0x577df6);
      return _0x3fe836 * _0x5eefb2;
    }
    function _0x9b5597(_0x5bb382) {
      var _0xf159d6 = {5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4, 26917: 2, 26918: 2, 29846: 3, 29847: 4};
      return _0xf159d6[_0x5bb382 - 6402] || 1;
    }
    function _0x533389(_0x22f34b) {
      _0x22f34b -= 5120;
      if (_0x22f34b == 0) return _0x59ed12;
      if (_0x22f34b == 1) return _0x18c91b;
      if (_0x22f34b == 2) return _0x3e563b;
      if (_0x22f34b == 4) return _0x46c9cf;
      if (_0x22f34b == 6) return _0x33f22d;
      if (_0x22f34b == 5 || _0x22f34b == 28922 || _0x22f34b == 28520 || _0x22f34b == 30779 || _0x22f34b == 30782) return _0x29f705;
      return _0x8b963d;
    }
    function _0x2ba3b3(_0xa887cd) {
      return 31 - Math["clz32"](_0xa887cd["BYTES_PER_ELEMENT"]);
    }
    function _0x294f89(_0x10bcd0, _0x1972e5, _0x6c0bf6, _0x1c9700, _0x161386, _0x30ba98) {
      var _0x1ce14a = _0x533389(_0x10bcd0), _0x3e653a = _0x2ba3b3(_0x1ce14a), _0x1d2f7c = 1 << _0x3e653a, _0x676206 = _0x9b5597(_0x1972e5) * _0x1d2f7c, _0x552e55 = _0x57b2e2(_0x6c0bf6, _0x1c9700, _0x676206, _0x2ab728["unpackAlignment"]);
      return _0x1ce14a["subarray"](_0x161386 >> _0x3e653a, _0x161386 + _0x552e55 >> _0x3e653a);
    }
    function _0x1673fb(_0x54df10, _0x1eadca, _0x55c157, _0x25d9d2, _0x13bfe1, _0x24ecec, _0x2f9d77) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        if (_0x20ed22["currentPixelPackBufferBinding"]) _0x20ed22["readPixels"](_0x54df10, _0x1eadca, _0x55c157, _0x25d9d2, _0x13bfe1, _0x24ecec, _0x2f9d77); else {
          var _0x13cd73 = _0x533389(_0x24ecec);
          _0x20ed22["readPixels"](_0x54df10, _0x1eadca, _0x55c157, _0x25d9d2, _0x13bfe1, _0x24ecec, _0x13cd73, _0x2f9d77 >> _0x2ba3b3(_0x13cd73));
        }
        return;
      }
      var _0x3d0319 = _0x294f89(_0x24ecec, _0x13bfe1, _0x55c157, _0x25d9d2, _0x2f9d77, _0x13bfe1);
      if (!_0x3d0319) {
        _0x2ab728["recordError"](1280);
        return;
      }
      _0x20ed22["readPixels"](_0x54df10, _0x1eadca, _0x55c157, _0x25d9d2, _0x13bfe1, _0x24ecec, _0x3d0319);
    }
    function _0x366c5d(_0x2a75bd, _0x3df027, _0x5e7dd8, _0x5d0bfc) {
      _0x20ed22["renderbufferStorage"](_0x2a75bd, _0x3df027, _0x5e7dd8, _0x5d0bfc);
    }
    function _0x4a13b3(_0x464920, _0x5523c7, _0x4e0b47, _0x3dde7e, _0x485905) {
      _0x20ed22["renderbufferStorageMultisample"](_0x464920, _0x5523c7, _0x4e0b47, _0x3dde7e, _0x485905);
    }
    function _0xf5ae73(_0x557773, _0x30f70f, _0x2ce372) {
      _0x20ed22["samplerParameteri"](_0x2ab728["samplers"][_0x557773], _0x30f70f, _0x2ce372);
    }
    function _0x362a32(_0x4c2a60, _0x5e991b, _0x126f83, _0x38d866) {
      _0x20ed22["scissor"](_0x4c2a60, _0x5e991b, _0x126f83, _0x38d866);
    }
    function _0x56969b(_0x5e774d, _0x5f01dc, _0xa3dca6 = "(", _0x1d4fb9 = ")") {
      for (var _0x216cf1 = 0; _0x5f01dc < _0x5e774d["length"]; ++_0x5f01dc) {
        if (_0x5e774d[_0x5f01dc] == _0xa3dca6) ++_0x216cf1;
        if (_0x5e774d[_0x5f01dc] == _0x1d4fb9 && --_0x216cf1 == 0) return _0x5f01dc;
      }
    }
    function _0x26cd79(_0x5e8f4b, _0x851b5d = {}) {
      var _0x554ac5 = 0, _0x498988 = _0x5e8f4b["length"], _0x5b12cb = "", _0x52ede6 = [1];
      _0x851b5d["defined"] = _0x350ed1 => {
        return _0x851b5d[_0x350ed1[0]] ? 1 : 0;
      };
      function _0xc55a45(_0x56370a, _0x1214c9) {
        return !(_0x56370a["charCodeAt"](_0x1214c9) > 32);
      }
      function _0x2f2a0f(_0x3529fd, _0x21e4e2) {
        while (!_0xc55a45(_0x3529fd, _0x21e4e2)) ++_0x21e4e2;
        return _0x21e4e2;
      }
      function _0x282fbb(_0x2aa85a, _0x20e709) {
        var _0x39835b = _0x2aa85a["charCodeAt"](_0x20e709);
        if (_0x39835b > 32) {
          if (_0x39835b < 48) return 1;
          if (_0x39835b < 58) return 2;
          if (_0x39835b < 65) return 1;
          if (_0x39835b < 91 || _0x39835b == 95) return 3;
          if (_0x39835b < 97) return 1;
          if (_0x39835b < 123) return 3;
          return 1;
        }
        return _0x39835b < 33 ? 0 : 4;
      }
      function _0xd07392(_0x34d58f, _0x55163b) {
        var _0x36198a = [], _0x36b000 = _0x34d58f["length"];
        for (var _0x58bb1c = 0; _0x58bb1c <= _0x36b000; ++_0x58bb1c) {
          var _0x1ef566 = _0x282fbb(_0x34d58f, _0x58bb1c);
          if (_0x1ef566 == 2 || _0x1ef566 == 3) for (var _0x59c29d = _0x58bb1c + 1; _0x59c29d <= _0x36b000; ++_0x59c29d) {
            var _0x11dbf1 = _0x282fbb(_0x34d58f, _0x59c29d);
            if (_0x11dbf1 != _0x1ef566 && (_0x11dbf1 != 2 || _0x1ef566 != 3)) {
              _0x36198a["push"](_0x34d58f["substring"](_0x58bb1c, _0x59c29d)), _0x58bb1c = _0x59c29d - 1;
              break;
            }
          } else {
            if (_0x1ef566 == 1) {
              var _0x11fc19 = _0x34d58f["substr"](_0x58bb1c, 2);
              ["<=", ">=", "==", "!=", "&&", "||"]["includes"](_0x11fc19) ? (_0x36198a["push"](_0x11fc19), ++_0x58bb1c) : _0x36198a["push"](_0x34d58f[_0x58bb1c]);
            }
          }
        }
        return _0x36198a;
      }
      function _0x269365(_0x22ba90, _0x3bfc53, _0x507f6e) {
        if (_0x507f6e === undefined) _0x507f6e = _0x22ba90["length"];
        var _0x1356ee = _0x22ba90["length"], _0x39689f = "";
        for (var _0x2f3e56 = _0x3bfc53; _0x2f3e56 < _0x507f6e; ++_0x2f3e56) {
          var _0x22ba8d = _0x282fbb(_0x22ba90, _0x2f3e56);
          if (_0x22ba8d == 3) for (var _0x33ca7e = _0x2f3e56 + 1; _0x33ca7e <= _0x507f6e; ++_0x33ca7e) {
            var _0x329850 = _0x282fbb(_0x22ba90, _0x33ca7e);
            if (_0x329850 != 2 && _0x329850 != 3) {
              var _0x347e91 = _0x22ba90["substring"](_0x2f3e56, _0x33ca7e), _0x5cb006 = _0x851b5d[_0x347e91];
              if (_0x5cb006) {
                var _0x39dcea = _0x22ba90["substring"](_0x3bfc53, _0x2f3e56);
                if (_0x5cb006["length"] && _0x22ba90[_0x33ca7e] == "(") {
                  var _0x383da1 = _0x56969b(_0x22ba90, _0x33ca7e);
                  _0x39dcea += _0x5cb006(_0x22ba90["substring"](_0x33ca7e + 1, _0x383da1)["split"](",")) + _0x22ba90["substring"](_0x383da1 + 1, _0x507f6e);
                } else _0x39dcea += _0x5cb006() + _0x22ba90["substring"](_0x33ca7e, _0x507f6e);
                return _0x269365(_0x39dcea, 0);
              } else {
                _0x39689f += _0x347e91, _0x2f3e56 = _0x33ca7e - 1;
                break;
              }
            }
          } else _0x39689f += _0x22ba90[_0x2f3e56];
        }
        return _0x39689f;
      }
      function _0x4b0fb(_0x59390e) {
        while (_0x59390e["length"] > 1 || typeof _0x59390e[0] != "function") {
          _0x59390e = function (_0x5bd5b7) {
            var _0x5d0006, _0x4878c9, _0x579199, _0x599ef8 = -2;
            for (_0x4878c9 = 0; _0x4878c9 < _0x5bd5b7["length"]; ++_0x4878c9) {
              (_0x579199 = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("]["indexOf"](_0x5bd5b7[_0x4878c9])) > _0x599ef8 && (_0x5d0006 = _0x4878c9, _0x599ef8 = _0x579199);
            }
            if (_0x599ef8 == 13) {
              var _0x4878c9 = _0x56969b(_0x5bd5b7, _0x5d0006);
              if (_0x4878c9) return _0x5bd5b7["splice"](_0x5d0006, _0x4878c9 + 1 - _0x5d0006, _0x4b0fb(_0x5bd5b7["slice"](_0x5d0006 + 1, _0x4878c9))), _0x5bd5b7;
            }
            if (_0x599ef8 == 4) {
              _0x5d0006 = _0x5bd5b7["lastIndexOf"]("!");
              var _0x552cfb = _0x4b0fb(_0x5bd5b7["slice"](_0x5d0006 + 1, _0x5d0006 + 2));
              return _0x5bd5b7["splice"](_0x5d0006, 2, function () {
                return !_0x552cfb();
              }), _0x5bd5b7;
            }
            if (_0x599ef8 >= 0) {
              var _0x10cf5c = _0x4b0fb(_0x5bd5b7["slice"](0, _0x5d0006)), _0x156329 = _0x4b0fb(_0x5bd5b7["slice"](_0x5d0006 + 1));
              switch (_0x5bd5b7[_0x5d0006]) {
                case "&&":
                  return [function () {
                    return _0x10cf5c() && _0x156329();
                  }];
                case "||":
                  return [function () {
                    return _0x10cf5c() || _0x156329();
                  }];
                case "==":
                  return [function () {
                    return _0x10cf5c() == _0x156329();
                  }];
                case "!=":
                  return [function () {
                    return _0x10cf5c() != _0x156329();
                  }];
                case "<":
                  return [function () {
                    return _0x10cf5c() < _0x156329();
                  }];
                case "<=":
                  return [function () {
                    return _0x10cf5c() <= _0x156329();
                  }];
                case ">":
                  return [function () {
                    return _0x10cf5c() > _0x156329();
                  }];
                case ">=":
                  return [function () {
                    return _0x10cf5c() >= _0x156329();
                  }];
                case "+":
                  return [function () {
                    return _0x10cf5c() + _0x156329();
                  }];
                case "-":
                  return [function () {
                    return _0x10cf5c() - _0x156329();
                  }];
                case "*":
                  return [function () {
                    return _0x10cf5c() * _0x156329();
                  }];
                case "/":
                  return [function () {
                    return Math["floor"](_0x10cf5c() / _0x156329());
                  }];
              }
            }
            var _0x555e0f = _0x37def1(_0x5bd5b7[_0x5d0006]);
            return [function () {
              return _0x555e0f;
            }];
          }(_0x59390e);
        }
        return _0x59390e[0];
      }
      for (; _0x554ac5 < _0x498988; ++_0x554ac5) {
        var _0x8c0ff2 = _0x554ac5;
        _0x554ac5 = _0x5e8f4b["indexOf"]("\n", _0x554ac5);
        if (_0x554ac5 < 0) _0x554ac5 = _0x498988;
        for (var _0x2dd546 = _0x8c0ff2; _0x2dd546 < _0x554ac5 && _0xc55a45(_0x5e8f4b, _0x2dd546); ++_0x2dd546) ;
        var _0x1fe43e = _0x52ede6[_0x52ede6["length"] - 1];
        if (_0x5e8f4b[_0x2dd546] != "#") {
          _0x1fe43e && (_0x5b12cb += _0x269365(_0x5e8f4b, _0x8c0ff2, _0x554ac5) + "\n");
          continue;
        }
        var _0x45f3b8 = _0x2f2a0f(_0x5e8f4b, _0x2dd546), _0x561832 = _0x5e8f4b["substring"](_0x2dd546 + 1, _0x45f3b8), _0x5edf1d = _0x5e8f4b["substring"](_0x45f3b8, _0x554ac5)["trim"]();
        switch (_0x561832) {
          case "if":
            var _0x10dbc6 = _0xd07392(_0x269365(_0x5edf1d, 0)), _0x4a6d00 = _0x4b0fb(_0x10dbc6), _0x37f23d = _0x4a6d00();
            _0x52ede6["push"](!!_0x37f23d * _0x52ede6[_0x52ede6["length"] - 1]);
            break;
          case "ifdef":
            _0x52ede6["push"](!!_0x851b5d[_0x5edf1d] * _0x52ede6[_0x52ede6["length"] - 1]);
            break;
          case "ifndef":
            _0x52ede6["push"](!_0x851b5d[_0x5edf1d] * _0x52ede6[_0x52ede6["length"] - 1]);
            break;
          case "else":
            _0x52ede6[_0x52ede6["length"] - 1] = 1 - _0x52ede6[_0x52ede6["length"] - 1];
            break;
          case "endif":
            _0x52ede6["pop"]();
            break;
          case "define":
            if (_0x1fe43e) {
              var _0x227984 = _0x5edf1d["indexOf"]("("), _0x1379e3 = _0x2f2a0f(_0x5edf1d, 0);
              if (_0x1379e3 < _0x227984) _0x227984 = 0;
              if (_0x227984 > 0) {
                var _0x149ce3 = _0x5edf1d["indexOf"](")", _0x227984);
                let _0x253c26 = _0x5edf1d["substring"](_0x227984 + 1, _0x149ce3)["split"](",")["map"](_0x35dede => _0x35dede["trim"]()), _0xa046ee = _0xd07392(_0x5edf1d["substring"](_0x149ce3 + 1)["trim"]());
                _0x851b5d[_0x5edf1d["substring"](0, _0x227984)] = _0x4ad60d => {
                  var _0x1c14c9 = "";
                  return _0xa046ee["forEach"](_0x34de7c => {
                    var _0xaa49e7 = _0x253c26["indexOf"](_0x34de7c);
                    _0x1c14c9 += _0xaa49e7 >= 0 ? _0x4ad60d[_0xaa49e7] : _0x34de7c;
                  }), _0x1c14c9;
                };
              } else {
                let _0x31b01c = _0x269365(_0x5edf1d["substring"](_0x1379e3 + 1)["trim"](), 0);
                _0x851b5d[_0x5edf1d["substring"](0, _0x1379e3)] = () => _0x31b01c;
              }
            }
            break;
          case "undef":
            if (_0x1fe43e) delete _0x851b5d[_0x5edf1d];
            break;
          default:
            if (_0x561832 != "version" && _0x561832 != "pragma" && _0x561832 != "extension") {}
            _0x5b12cb += _0x269365(_0x5e8f4b, _0x8c0ff2, _0x554ac5) + "\n";
        }
      }
      return _0x5b12cb;
    }
    function _0x363f11(_0x25a569) {
      var _0x5d37e6 = 0, _0x110e65 = "", _0x5997c0, _0x1fa8ee, _0x3f73f0 = _0x25a569["length"];
      for (; _0x5d37e6 < _0x3f73f0; ++_0x5d37e6) {
        _0x5997c0 = _0x25a569[_0x5d37e6];
        if (_0x5997c0 == "/") {
          _0x1fa8ee = _0x25a569[_0x5d37e6 + 1];
          if (_0x1fa8ee == "/") {
            while (_0x5d37e6 < _0x3f73f0 && _0x25a569[_0x5d37e6 + 1] != "\n") ++_0x5d37e6;
          } else {
            if (_0x1fa8ee == "*") {
              while (_0x5d37e6 < _0x3f73f0 && (_0x25a569[_0x5d37e6 - 1] != "*" || _0x25a569[_0x5d37e6] != "/")) ++_0x5d37e6;
            } else _0x110e65 += _0x5997c0;
          }
        } else _0x110e65 += _0x5997c0;
      }
      return _0x110e65;
    }
    function _0xa3ca52(_0x26bd8a, _0xa6e92b, _0x1cb3dd, _0x473a69) {
      var _0x36f381 = _0x2ab728["getSource"](_0x26bd8a, _0xa6e92b, _0x1cb3dd, _0x473a69);
      _0x36f381 = _0x26cd79(_0x363f11(_0x36f381), {GL_FRAGMENT_PRECISION_HIGH: () => 1, GL_ES: () => 1, __VERSION__: () => _0x36f381["includes"]("#version 300") ? 300 : 100});
      var _0xe1d80d = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g, _0x461e00 = {}, _0x4aa65c;
      while (_0x4aa65c = _0xe1d80d["exec"](_0x36f381)) {
        _0x461e00[_0x4aa65c[5]] = _0x37def1(_0x4aa65c[1]);
        if (!(_0x461e00[_0x4aa65c[5]] >= 0 && _0x461e00[_0x4aa65c[5]] < 1048576)) {
          _0x119168('Specified an out of range layout(location=x) directive "' + _0x461e00[_0x4aa65c[5]] + '"! (' + _0x4aa65c[0] + ")"), _0x2ab728["recordError"](1281);
          return;
        }
      }
      _0x36f381 = _0x36f381["replace"](_0xe1d80d, "$2"), _0x2ab728["shaders"][_0x26bd8a]["explicitUniformLocations"] = _0x461e00;
      var _0x17775b = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g, _0x472893 = {}, _0x52a71c = {}, _0x2e4fd0;
      while (_0x2e4fd0 = _0x17775b["exec"](_0x36f381)) {
        var _0x46c562 = 1;
        for (var _0x15bf3d = _0x2e4fd0["index"]; _0x15bf3d < _0x36f381["length"] && _0x36f381[_0x15bf3d] != ";"; ++_0x15bf3d) {
          if (_0x36f381[_0x15bf3d] == "[") {
            _0x46c562 = _0x37def1(_0x36f381["slice"](_0x15bf3d + 1));
            break;
          }
          if (_0x36f381[_0x15bf3d] == "{") _0x15bf3d = _0x56969b(_0x36f381, _0x15bf3d, "{", "}") - 1;
        }
        var _0x3d657d = _0x37def1(_0x2e4fd0[1]), _0x179e8f = 34930;
        _0x2e4fd0[3] && _0x2e4fd0[2]["indexOf"]("sampler") != -1 ? _0x472893[_0x2e4fd0[3]] = [_0x3d657d, _0x46c562] : (_0x179e8f = 35374, _0x52a71c[_0x2e4fd0[2]] = [_0x3d657d, _0x46c562]);
        var _0x35b8b6 = _0x20ed22["getParameter"](_0x179e8f);
        if (!(_0x3d657d >= 0 && _0x3d657d + _0x46c562 <= _0x35b8b6)) {
          _0x119168('Specified an out of range layout(binding=x) directive "' + _0x3d657d + '"! (' + _0x2e4fd0[0] + "). Valid range is [0, " + _0x35b8b6 + "-1]"), _0x2ab728["recordError"](1281);
          return;
        }
      }
      _0x36f381 = _0x36f381["replace"](/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, ""), _0x36f381 = _0x36f381["replace"](/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)"), _0x36f381 = _0x36f381["replace"](/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)"), _0x2ab728["shaders"][_0x26bd8a]["explicitSamplerBindings"] = _0x472893, _0x2ab728["shaders"][_0x26bd8a]["explicitUniformBindings"] = _0x52a71c, _0x20ed22["shaderSource"](_0x2ab728["shaders"][_0x26bd8a], _0x36f381);
    }
    function _0x2ed4c9(_0x282662, _0x11a285, _0xf2ece3, _0x4fc1f7) {
      _0x20ed22["stencilFuncSeparate"](_0x282662, _0x11a285, _0xf2ece3, _0x4fc1f7);
    }
    function _0x34411f(_0x5c8be8) {
      _0x20ed22["stencilMask"](_0x5c8be8);
    }
    function _0x5a805f(_0x16c4d6, _0x465c86, _0x146072, _0x3f478d) {
      _0x20ed22["stencilOpSeparate"](_0x16c4d6, _0x465c86, _0x146072, _0x3f478d);
    }
    function _0x183879(_0x6713e5, _0x2a965c, _0x2b91bf, _0xd7e9a3, _0x133a17, _0x4aaf2d, _0x2c1200, _0x1ac6a1, _0x35977e) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        if (_0x20ed22["currentPixelUnpackBufferBinding"]) _0x20ed22["texImage2D"](_0x6713e5, _0x2a965c, _0x2b91bf, _0xd7e9a3, _0x133a17, _0x4aaf2d, _0x2c1200, _0x1ac6a1, _0x35977e); else {
          if (_0x35977e) {
            var _0x4a8000 = _0x533389(_0x1ac6a1);
            _0x20ed22["texImage2D"](_0x6713e5, _0x2a965c, _0x2b91bf, _0xd7e9a3, _0x133a17, _0x4aaf2d, _0x2c1200, _0x1ac6a1, _0x4a8000, _0x35977e >> _0x2ba3b3(_0x4a8000));
          } else _0x20ed22["texImage2D"](_0x6713e5, _0x2a965c, _0x2b91bf, _0xd7e9a3, _0x133a17, _0x4aaf2d, _0x2c1200, _0x1ac6a1, null);
        }
        return;
      }
      _0x20ed22["texImage2D"](_0x6713e5, _0x2a965c, _0x2b91bf, _0xd7e9a3, _0x133a17, _0x4aaf2d, _0x2c1200, _0x1ac6a1, _0x35977e ? _0x294f89(_0x1ac6a1, _0x2c1200, _0xd7e9a3, _0x133a17, _0x35977e, _0x2b91bf) : null);
    }
    function _0x3066d8(_0x3858b2, _0x4c39cf, _0x23147f, _0x22a3d0, _0x3cd6cf, _0x5d9802, _0xbc0bed, _0x362b5f, _0x9c508, _0x47844c) {
      if (_0x20ed22["currentPixelUnpackBufferBinding"]) _0x20ed22["texImage3D"](_0x3858b2, _0x4c39cf, _0x23147f, _0x22a3d0, _0x3cd6cf, _0x5d9802, _0xbc0bed, _0x362b5f, _0x9c508, _0x47844c); else {
        if (_0x47844c) {
          var _0x43d101 = _0x533389(_0x9c508);
          _0x20ed22["texImage3D"](_0x3858b2, _0x4c39cf, _0x23147f, _0x22a3d0, _0x3cd6cf, _0x5d9802, _0xbc0bed, _0x362b5f, _0x9c508, _0x43d101, _0x47844c >> _0x2ba3b3(_0x43d101));
        } else _0x20ed22["texImage3D"](_0x3858b2, _0x4c39cf, _0x23147f, _0x22a3d0, _0x3cd6cf, _0x5d9802, _0xbc0bed, _0x362b5f, _0x9c508, null);
      }
    }
    function _0x966b4d(_0x2e8e3a, _0x20d32e, _0x35c560) {
      _0x20ed22["texParameterf"](_0x2e8e3a, _0x20d32e, _0x35c560);
    }
    function _0xdec211(_0x20c236, _0x4fb64c, _0x17cdb1) {
      _0x20ed22["texParameteri"](_0x20c236, _0x4fb64c, _0x17cdb1);
    }
    function _0x589306(_0x3dec7a, _0x1362ba, _0xf7293a) {
      var _0x5ece78 = _0x46c9cf[_0xf7293a >> 2];
      _0x20ed22["texParameteri"](_0x3dec7a, _0x1362ba, _0x5ece78);
    }
    function _0x26ea33(_0x33ad51, _0x310cf2, _0x2fd181, _0x30b869, _0x26927e) {
      _0x20ed22["texStorage2D"](_0x33ad51, _0x310cf2, _0x2fd181, _0x30b869, _0x26927e);
    }
    function _0x531adc(_0x5bc4a6, _0x42906a, _0xc873c0, _0x3e7e65, _0x50a297, _0x403fed) {
      _0x20ed22["texStorage3D"](_0x5bc4a6, _0x42906a, _0xc873c0, _0x3e7e65, _0x50a297, _0x403fed);
    }
    function _0x262c63(_0x5f0019, _0x32a044, _0x55818b, _0x46d3d6, _0x4ea2f4, _0x308f7a, _0x569983, _0x57a77d, _0x3ca4e4) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        if (_0x20ed22["currentPixelUnpackBufferBinding"]) _0x20ed22["texSubImage2D"](_0x5f0019, _0x32a044, _0x55818b, _0x46d3d6, _0x4ea2f4, _0x308f7a, _0x569983, _0x57a77d, _0x3ca4e4); else {
          if (_0x3ca4e4) {
            var _0x162c74 = _0x533389(_0x57a77d);
            _0x20ed22["texSubImage2D"](_0x5f0019, _0x32a044, _0x55818b, _0x46d3d6, _0x4ea2f4, _0x308f7a, _0x569983, _0x57a77d, _0x162c74, _0x3ca4e4 >> _0x2ba3b3(_0x162c74));
          } else _0x20ed22["texSubImage2D"](_0x5f0019, _0x32a044, _0x55818b, _0x46d3d6, _0x4ea2f4, _0x308f7a, _0x569983, _0x57a77d, null);
        }
        return;
      }
      var _0x473e9c = null;
      if (_0x3ca4e4) _0x473e9c = _0x294f89(_0x57a77d, _0x569983, _0x4ea2f4, _0x308f7a, _0x3ca4e4, 0);
      _0x20ed22["texSubImage2D"](_0x5f0019, _0x32a044, _0x55818b, _0x46d3d6, _0x4ea2f4, _0x308f7a, _0x569983, _0x57a77d, _0x473e9c);
    }
    function _0x7e5312(_0x12e9ed, _0x1cfcee, _0x42216c, _0x3bd943, _0x16aa2b, _0x594085, _0x341d1b, _0x14d16e, _0x49ffce, _0x331db4, _0x92d337) {
      if (_0x20ed22["currentPixelUnpackBufferBinding"]) _0x20ed22["texSubImage3D"](_0x12e9ed, _0x1cfcee, _0x42216c, _0x3bd943, _0x16aa2b, _0x594085, _0x341d1b, _0x14d16e, _0x49ffce, _0x331db4, _0x92d337); else {
        if (_0x92d337) {
          var _0x582f6e = _0x533389(_0x331db4);
          _0x20ed22["texSubImage3D"](_0x12e9ed, _0x1cfcee, _0x42216c, _0x3bd943, _0x16aa2b, _0x594085, _0x341d1b, _0x14d16e, _0x49ffce, _0x331db4, _0x582f6e, _0x92d337 >> _0x2ba3b3(_0x582f6e));
        } else _0x20ed22["texSubImage3D"](_0x12e9ed, _0x1cfcee, _0x42216c, _0x3bd943, _0x16aa2b, _0x594085, _0x341d1b, _0x14d16e, _0x49ffce, _0x331db4, null);
      }
    }
    var _0x1ffef2 = [];
    function _0x46f57f(_0x534d8e, _0x105896, _0x536dd3) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["uniform1fv"](_0x484820(_0x534d8e), _0x33f22d, _0x536dd3 >> 2, _0x105896);
        return;
      }
      if (_0x105896 <= 288) {
        var _0x32e494 = _0x1ffef2[_0x105896 - 1];
        for (var _0x349d41 = 0; _0x349d41 < _0x105896; ++_0x349d41) {
          _0x32e494[_0x349d41] = _0x33f22d[_0x536dd3 + 4 * _0x349d41 >> 2];
        }
      } else var _0x32e494 = _0x33f22d["subarray"](_0x536dd3 >> 2, _0x536dd3 + _0x105896 * 4 >> 2);
      _0x20ed22["uniform1fv"](_0x484820(_0x534d8e), _0x32e494);
    }
    function _0x258c4b(_0x2223c3, _0x5a51f5) {
      _0x20ed22["uniform1i"](_0x484820(_0x2223c3), _0x5a51f5);
    }
    var _0x4a9edb = [];
    function _0x3ac3c4(_0x5f5473, _0x5d6edb, _0x462044) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["uniform1iv"](_0x484820(_0x5f5473), _0x46c9cf, _0x462044 >> 2, _0x5d6edb);
        return;
      }
      if (_0x5d6edb <= 288) {
        var _0x2d6229 = _0x4a9edb[_0x5d6edb - 1];
        for (var _0x23484b = 0; _0x23484b < _0x5d6edb; ++_0x23484b) {
          _0x2d6229[_0x23484b] = _0x46c9cf[_0x462044 + 4 * _0x23484b >> 2];
        }
      } else var _0x2d6229 = _0x46c9cf["subarray"](_0x462044 >> 2, _0x462044 + _0x5d6edb * 4 >> 2);
      _0x20ed22["uniform1iv"](_0x484820(_0x5f5473), _0x2d6229);
    }
    function _0x540c63(_0x35480b, _0x4343f9, _0x193ef4) {
      _0x20ed22["uniform1uiv"](_0x484820(_0x35480b), _0x29f705, _0x193ef4 >> 2, _0x4343f9);
    }
    function _0x4b7e6a(_0xd2270a, _0x53ec3f, _0x5c008a) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["uniform2fv"](_0x484820(_0xd2270a), _0x33f22d, _0x5c008a >> 2, _0x53ec3f * 2);
        return;
      }
      if (_0x53ec3f <= 144) {
        var _0x4c3b0c = _0x1ffef2[2 * _0x53ec3f - 1];
        for (var _0x3cc18a = 0; _0x3cc18a < 2 * _0x53ec3f; _0x3cc18a += 2) {
          _0x4c3b0c[_0x3cc18a] = _0x33f22d[_0x5c008a + 4 * _0x3cc18a >> 2], _0x4c3b0c[_0x3cc18a + 1] = _0x33f22d[_0x5c008a + (4 * _0x3cc18a + 4) >> 2];
        }
      } else var _0x4c3b0c = _0x33f22d["subarray"](_0x5c008a >> 2, _0x5c008a + _0x53ec3f * 8 >> 2);
      _0x20ed22["uniform2fv"](_0x484820(_0xd2270a), _0x4c3b0c);
    }
    function _0x1e10c0(_0x484a1f, _0x35872e, _0x11e79d) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["uniform2iv"](_0x484820(_0x484a1f), _0x46c9cf, _0x11e79d >> 2, _0x35872e * 2);
        return;
      }
      if (_0x35872e <= 144) {
        var _0x2701da = _0x4a9edb[2 * _0x35872e - 1];
        for (var _0x2ec950 = 0; _0x2ec950 < 2 * _0x35872e; _0x2ec950 += 2) {
          _0x2701da[_0x2ec950] = _0x46c9cf[_0x11e79d + 4 * _0x2ec950 >> 2], _0x2701da[_0x2ec950 + 1] = _0x46c9cf[_0x11e79d + (4 * _0x2ec950 + 4) >> 2];
        }
      } else var _0x2701da = _0x46c9cf["subarray"](_0x11e79d >> 2, _0x11e79d + _0x35872e * 8 >> 2);
      _0x20ed22["uniform2iv"](_0x484820(_0x484a1f), _0x2701da);
    }
    function _0x59d442(_0x4ec418, _0x380424, _0x33fcfd) {
      _0x20ed22["uniform2uiv"](_0x484820(_0x4ec418), _0x29f705, _0x33fcfd >> 2, _0x380424 * 2);
    }
    function _0x12820b(_0x553127, _0x56e2c7, _0x4fff25) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["uniform3fv"](_0x484820(_0x553127), _0x33f22d, _0x4fff25 >> 2, _0x56e2c7 * 3);
        return;
      }
      if (_0x56e2c7 <= 96) {
        var _0x887563 = _0x1ffef2[3 * _0x56e2c7 - 1];
        for (var _0x1a87b8 = 0; _0x1a87b8 < 3 * _0x56e2c7; _0x1a87b8 += 3) {
          _0x887563[_0x1a87b8] = _0x33f22d[_0x4fff25 + 4 * _0x1a87b8 >> 2], _0x887563[_0x1a87b8 + 1] = _0x33f22d[_0x4fff25 + (4 * _0x1a87b8 + 4) >> 2], _0x887563[_0x1a87b8 + 2] = _0x33f22d[_0x4fff25 + (4 * _0x1a87b8 + 8) >> 2];
        }
      } else var _0x887563 = _0x33f22d["subarray"](_0x4fff25 >> 2, _0x4fff25 + _0x56e2c7 * 12 >> 2);
      _0x20ed22["uniform3fv"](_0x484820(_0x553127), _0x887563);
    }
    function _0x2aacdc(_0x4df6d7, _0xb63762, _0x17917f) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["uniform3iv"](_0x484820(_0x4df6d7), _0x46c9cf, _0x17917f >> 2, _0xb63762 * 3);
        return;
      }
      if (_0xb63762 <= 96) {
        var _0x3e43e0 = _0x4a9edb[3 * _0xb63762 - 1];
        for (var _0x178a1c = 0; _0x178a1c < 3 * _0xb63762; _0x178a1c += 3) {
          _0x3e43e0[_0x178a1c] = _0x46c9cf[_0x17917f + 4 * _0x178a1c >> 2], _0x3e43e0[_0x178a1c + 1] = _0x46c9cf[_0x17917f + (4 * _0x178a1c + 4) >> 2], _0x3e43e0[_0x178a1c + 2] = _0x46c9cf[_0x17917f + (4 * _0x178a1c + 8) >> 2];
        }
      } else var _0x3e43e0 = _0x46c9cf["subarray"](_0x17917f >> 2, _0x17917f + _0xb63762 * 12 >> 2);
      _0x20ed22["uniform3iv"](_0x484820(_0x4df6d7), _0x3e43e0);
    }
    function _0x441eaf(_0x669877, _0xe73e06, _0x29977e) {
      _0x20ed22["uniform3uiv"](_0x484820(_0x669877), _0x29f705, _0x29977e >> 2, _0xe73e06 * 3);
    }
    function _0xa9a053(_0x5eb349, _0x35e7fe, _0x28e111) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["uniform4fv"](_0x484820(_0x5eb349), _0x33f22d, _0x28e111 >> 2, _0x35e7fe * 4);
        return;
      }
      if (_0x35e7fe <= 72) {
        var _0x2f2ca4 = _0x1ffef2[4 * _0x35e7fe - 1], _0x582ca0 = _0x33f22d;
        _0x28e111 >>= 2;
        for (var _0x1f18b2 = 0; _0x1f18b2 < 4 * _0x35e7fe; _0x1f18b2 += 4) {
          var _0x1bb54e = _0x28e111 + _0x1f18b2;
          _0x2f2ca4[_0x1f18b2] = _0x582ca0[_0x1bb54e], _0x2f2ca4[_0x1f18b2 + 1] = _0x582ca0[_0x1bb54e + 1], _0x2f2ca4[_0x1f18b2 + 2] = _0x582ca0[_0x1bb54e + 2], _0x2f2ca4[_0x1f18b2 + 3] = _0x582ca0[_0x1bb54e + 3];
        }
      } else var _0x2f2ca4 = _0x33f22d["subarray"](_0x28e111 >> 2, _0x28e111 + _0x35e7fe * 16 >> 2);
      _0x20ed22["uniform4fv"](_0x484820(_0x5eb349), _0x2f2ca4);
    }
    function _0x475472(_0x560515, _0x33e2fa, _0x4983c0) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["uniform4iv"](_0x484820(_0x560515), _0x46c9cf, _0x4983c0 >> 2, _0x33e2fa * 4);
        return;
      }
      if (_0x33e2fa <= 72) {
        var _0x3b1ded = _0x4a9edb[4 * _0x33e2fa - 1];
        for (var _0x1b92bd = 0; _0x1b92bd < 4 * _0x33e2fa; _0x1b92bd += 4) {
          _0x3b1ded[_0x1b92bd] = _0x46c9cf[_0x4983c0 + 4 * _0x1b92bd >> 2], _0x3b1ded[_0x1b92bd + 1] = _0x46c9cf[_0x4983c0 + (4 * _0x1b92bd + 4) >> 2], _0x3b1ded[_0x1b92bd + 2] = _0x46c9cf[_0x4983c0 + (4 * _0x1b92bd + 8) >> 2], _0x3b1ded[_0x1b92bd + 3] = _0x46c9cf[_0x4983c0 + (4 * _0x1b92bd + 12) >> 2];
        }
      } else var _0x3b1ded = _0x46c9cf["subarray"](_0x4983c0 >> 2, _0x4983c0 + _0x33e2fa * 16 >> 2);
      _0x20ed22["uniform4iv"](_0x484820(_0x560515), _0x3b1ded);
    }
    function _0x552ea6(_0xec724e, _0xd7e62a, _0x4be293) {
      _0x20ed22["uniform4uiv"](_0x484820(_0xec724e), _0x29f705, _0x4be293 >> 2, _0xd7e62a * 4);
    }
    function _0x49582b(_0x55ff7d, _0x32d119, _0x257b28) {
      _0x55ff7d = _0x2ab728["programs"][_0x55ff7d], _0x20ed22["uniformBlockBinding"](_0x55ff7d, _0x32d119, _0x257b28);
    }
    function _0xb3425d(_0x82ad9, _0x23d540, _0x40b0d7, _0x4e37b6) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["uniformMatrix3fv"](_0x484820(_0x82ad9), !!_0x40b0d7, _0x33f22d, _0x4e37b6 >> 2, _0x23d540 * 9);
        return;
      }
      if (_0x23d540 <= 32) {
        var _0x362e88 = _0x1ffef2[9 * _0x23d540 - 1];
        for (var _0x5347d4 = 0; _0x5347d4 < 9 * _0x23d540; _0x5347d4 += 9) {
          _0x362e88[_0x5347d4] = _0x33f22d[_0x4e37b6 + 4 * _0x5347d4 >> 2], _0x362e88[_0x5347d4 + 1] = _0x33f22d[_0x4e37b6 + (4 * _0x5347d4 + 4) >> 2], _0x362e88[_0x5347d4 + 2] = _0x33f22d[_0x4e37b6 + (4 * _0x5347d4 + 8) >> 2], _0x362e88[_0x5347d4 + 3] = _0x33f22d[_0x4e37b6 + (4 * _0x5347d4 + 12) >> 2], _0x362e88[_0x5347d4 + 4] = _0x33f22d[_0x4e37b6 + (4 * _0x5347d4 + 16) >> 2], _0x362e88[_0x5347d4 + 5] = _0x33f22d[_0x4e37b6 + (4 * _0x5347d4 + 20) >> 2], _0x362e88[_0x5347d4 + 6] = _0x33f22d[_0x4e37b6 + (4 * _0x5347d4 + 24) >> 2], _0x362e88[_0x5347d4 + 7] = _0x33f22d[_0x4e37b6 + (4 * _0x5347d4 + 28) >> 2], _0x362e88[_0x5347d4 + 8] = _0x33f22d[_0x4e37b6 + (4 * _0x5347d4 + 32) >> 2];
        }
      } else var _0x362e88 = _0x33f22d["subarray"](_0x4e37b6 >> 2, _0x4e37b6 + _0x23d540 * 36 >> 2);
      _0x20ed22["uniformMatrix3fv"](_0x484820(_0x82ad9), !!_0x40b0d7, _0x362e88);
    }
    function _0x491482(_0x4d3c64, _0x448d67, _0x323eb2, _0x577db2) {
      if (_0x2ab728["currentContext"]["version"] >= 2) {
        _0x20ed22["uniformMatrix4fv"](_0x484820(_0x4d3c64), !!_0x323eb2, _0x33f22d, _0x577db2 >> 2, _0x448d67 * 16);
        return;
      }
      if (_0x448d67 <= 18) {
        var _0x2f45bd = _0x1ffef2[16 * _0x448d67 - 1], _0x29d1f6 = _0x33f22d;
        _0x577db2 >>= 2;
        for (var _0x2ae750 = 0; _0x2ae750 < 16 * _0x448d67; _0x2ae750 += 16) {
          var _0x5428ea = _0x577db2 + _0x2ae750;
          _0x2f45bd[_0x2ae750] = _0x29d1f6[_0x5428ea], _0x2f45bd[_0x2ae750 + 1] = _0x29d1f6[_0x5428ea + 1], _0x2f45bd[_0x2ae750 + 2] = _0x29d1f6[_0x5428ea + 2], _0x2f45bd[_0x2ae750 + 3] = _0x29d1f6[_0x5428ea + 3], _0x2f45bd[_0x2ae750 + 4] = _0x29d1f6[_0x5428ea + 4], _0x2f45bd[_0x2ae750 + 5] = _0x29d1f6[_0x5428ea + 5], _0x2f45bd[_0x2ae750 + 6] = _0x29d1f6[_0x5428ea + 6], _0x2f45bd[_0x2ae750 + 7] = _0x29d1f6[_0x5428ea + 7], _0x2f45bd[_0x2ae750 + 8] = _0x29d1f6[_0x5428ea + 8], _0x2f45bd[_0x2ae750 + 9] = _0x29d1f6[_0x5428ea + 9], _0x2f45bd[_0x2ae750 + 10] = _0x29d1f6[_0x5428ea + 10], _0x2f45bd[_0x2ae750 + 11] = _0x29d1f6[_0x5428ea + 11], _0x2f45bd[_0x2ae750 + 12] = _0x29d1f6[_0x5428ea + 12], _0x2f45bd[_0x2ae750 + 13] = _0x29d1f6[_0x5428ea + 13], _0x2f45bd[_0x2ae750 + 14] = _0x29d1f6[_0x5428ea + 14], _0x2f45bd[_0x2ae750 + 15] = _0x29d1f6[_0x5428ea + 15];
        }
      } else var _0x2f45bd = _0x33f22d["subarray"](_0x577db2 >> 2, _0x577db2 + _0x448d67 * 64 >> 2);
      _0x20ed22["uniformMatrix4fv"](_0x484820(_0x4d3c64), !!_0x323eb2, _0x2f45bd);
    }
    function _0x295f8e(_0x24dd2) {
      if (!_0x3941ca(_0x24dd2)) return _0x2ab728["recordError"](1280), _0x119168("GL_INVALID_ENUM in glUnmapBuffer"), 0;
      var _0x8d1f4 = _0x2a4083(_0x24dd2), _0x2a1982 = _0x2ab728["mappedBuffers"][_0x8d1f4];
      if (!_0x2a1982) return _0x2ab728["recordError"](1282), _0x119168("buffer was never mapped in glUnmapBuffer"), 0;
      _0x2ab728["mappedBuffers"][_0x8d1f4] = null;
      if (!(_0x2a1982["access"] & 16)) _0x2ab728["currentContext"]["version"] >= 2 ? _0x20ed22["bufferSubData"](_0x24dd2, _0x2a1982["offset"], _0x18c91b, _0x2a1982["mem"], _0x2a1982["length"]) : _0x20ed22["bufferSubData"](_0x24dd2, _0x2a1982["offset"], _0x18c91b["subarray"](_0x2a1982["mem"], _0x2a1982["mem"] + _0x2a1982["length"]));
      return _0x14a4bc(_0x2a1982["mem"]), 1;
    }
    function _0x592045() {
      var _0x66a2f = _0x20ed22["currentProgram"];
      !_0x66a2f["explicitProgramBindingsApplied"] && (_0x2ab728["currentContext"]["version"] >= 2 && Object["keys"](_0x66a2f["explicitUniformBindings"])["forEach"](function (_0x9db9cc) {
        var _0x1414f9 = _0x66a2f["explicitUniformBindings"][_0x9db9cc];
        for (var _0x565616 = 0; _0x565616 < _0x1414f9[1]; ++_0x565616) {
          var _0x5483cc = _0x20ed22["getUniformBlockIndex"](_0x66a2f, _0x9db9cc + (_0x1414f9[1] > 1 ? "[" + _0x565616 + "]" : ""));
          _0x20ed22["uniformBlockBinding"](_0x66a2f, _0x5483cc, _0x1414f9[0] + _0x565616);
        }
      }), Object["keys"](_0x66a2f["explicitSamplerBindings"])["forEach"](function (_0x4325dc) {
        var _0x1c60b1 = _0x66a2f["explicitSamplerBindings"][_0x4325dc];
        for (var _0x1a661f = 0; _0x1a661f < _0x1c60b1[1]; ++_0x1a661f) {
          _0x20ed22["uniform1i"](_0x20ed22["getUniformLocation"](_0x66a2f, _0x4325dc + (_0x1a661f ? "[" + _0x1a661f + "]" : "")), _0x1c60b1[0] + _0x1a661f);
        }
      }), _0x66a2f["explicitProgramBindingsApplied"] = 1);
    }
    function _0x421af9(_0x3cb4f1) {
      _0x3cb4f1 = _0x2ab728["programs"][_0x3cb4f1], _0x20ed22["useProgram"](_0x3cb4f1), (_0x20ed22["currentProgram"] = _0x3cb4f1) && _0x592045();
    }
    function _0x2e0fcd(_0xfe4818) {
      _0x20ed22["validateProgram"](_0x2ab728["programs"][_0xfe4818]);
    }
    function _0x34af9d(_0x25cdee, _0x4888dd, _0x32d96f, _0x382031, _0x437fb7) {
      _0x20ed22["vertexAttrib4f"](_0x25cdee, _0x4888dd, _0x32d96f, _0x382031, _0x437fb7);
    }
    function _0x16419f(_0x31fb08, _0x529801) {
      _0x20ed22["vertexAttrib4f"](_0x31fb08, _0x33f22d[_0x529801 >> 2], _0x33f22d[_0x529801 + 4 >> 2], _0x33f22d[_0x529801 + 8 >> 2], _0x33f22d[_0x529801 + 12 >> 2]);
    }
    function _0x142d8b(_0x2bf3fd, _0x10b5c9, _0x28fb8f, _0x823d46, _0x4228da) {
      var _0x35823e = _0x2ab728["currentContext"]["clientBuffers"][_0x2bf3fd];
      if (!_0x20ed22["currentArrayBufferBinding"]) {
        _0x35823e["size"] = _0x10b5c9, _0x35823e["type"] = _0x28fb8f, _0x35823e["normalized"] = false, _0x35823e["stride"] = _0x823d46, _0x35823e["ptr"] = _0x4228da, _0x35823e["clientside"] = true, _0x35823e["vertexAttribPointerAdaptor"] = function (_0x1a3915, _0x2e1e30, _0x3c7535, _0x133569, _0x4196a1, _0x501a9c) {
          this["vertexAttribIPointer"](_0x1a3915, _0x2e1e30, _0x3c7535, _0x4196a1, _0x501a9c);
        };
        return;
      }
      _0x35823e["clientside"] = false, _0x20ed22["vertexAttribIPointer"](_0x2bf3fd, _0x10b5c9, _0x28fb8f, _0x823d46, _0x4228da);
    }
    function _0x5a89e9(_0x160fe7, _0x49f1e1, _0x1017db, _0x5c0bcd, _0x5b985f, _0x36856a) {
      var _0x2c2384 = _0x2ab728["currentContext"]["clientBuffers"][_0x160fe7];
      if (!_0x20ed22["currentArrayBufferBinding"]) {
        _0x2c2384["size"] = _0x49f1e1, _0x2c2384["type"] = _0x1017db, _0x2c2384["normalized"] = _0x5c0bcd, _0x2c2384["stride"] = _0x5b985f, _0x2c2384["ptr"] = _0x36856a, _0x2c2384["clientside"] = true, _0x2c2384["vertexAttribPointerAdaptor"] = function (_0x3047ca, _0x273808, _0x3cd603, _0x33c62a, _0x4ada75, _0x57ffe0) {
          this["vertexAttribPointer"](_0x3047ca, _0x273808, _0x3cd603, _0x33c62a, _0x4ada75, _0x57ffe0);
        };
        return;
      }
      _0x2c2384["clientside"] = false, _0x20ed22["vertexAttribPointer"](_0x160fe7, _0x49f1e1, _0x1017db, !!_0x5c0bcd, _0x5b985f, _0x36856a);
    }
    function _0x1ade16(_0x25cb4c, _0x5630fb, _0x49734f, _0x54196b) {
      _0x20ed22["viewport"](_0x25cb4c, _0x5630fb, _0x49734f, _0x54196b);
    }
    function _0x3a903f(_0x17e1d5) {
      return _0x17e1d5;
    }
    function _0x1b67f1(_0x658021) {
      _0x3a12a5(_0x658021);
    }
    function _0x2a2386(_0x800ba1) {
      return _0x800ba1 % 4 === 0 && (_0x800ba1 % 100 !== 0 || _0x800ba1 % 400 === 0);
    }
    function _0x54c83e(_0x45993b, _0x527920) {
      var _0x3f612d = 0;
      for (var _0x16caea = 0; _0x16caea <= _0x527920; _0x3f612d += _0x45993b[_0x16caea++]) {}
      return _0x3f612d;
    }
    var _0x374241 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], _0x1c0120 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function _0x5db8f1(_0x456042, _0x27e668) {
      var _0x2bd0c3 = new Date(_0x456042["getTime"]());
      while (_0x27e668 > 0) {
        var _0x528da5 = _0x2a2386(_0x2bd0c3["getFullYear"]()), _0x16e062 = _0x2bd0c3["getMonth"](), _0x4e34b6 = (_0x528da5 ? _0x374241 : _0x1c0120)[_0x16e062];
        if (_0x27e668 > _0x4e34b6 - _0x2bd0c3["getDate"]()) _0x27e668 -= _0x4e34b6 - _0x2bd0c3["getDate"]() + 1, _0x2bd0c3["setDate"](1), _0x16e062 < 11 ? _0x2bd0c3["setMonth"](_0x16e062 + 1) : (_0x2bd0c3["setMonth"](0), _0x2bd0c3["setFullYear"](_0x2bd0c3["getFullYear"]() + 1)); else return _0x2bd0c3["setDate"](_0x2bd0c3["getDate"]() + _0x27e668), _0x2bd0c3;
      }
      return _0x2bd0c3;
    }
    function _0x285687(_0x41be6e, _0x528653, _0x484792, _0x161a25) {
      var _0x1342a9 = _0x46c9cf[_0x161a25 + 40 >> 2], _0x358ae9 = {tm_sec: _0x46c9cf[_0x161a25 >> 2], tm_min: _0x46c9cf[_0x161a25 + 4 >> 2], tm_hour: _0x46c9cf[_0x161a25 + 8 >> 2], tm_mday: _0x46c9cf[_0x161a25 + 12 >> 2], tm_mon: _0x46c9cf[_0x161a25 + 16 >> 2], tm_year: _0x46c9cf[_0x161a25 + 20 >> 2], tm_wday: _0x46c9cf[_0x161a25 + 24 >> 2], tm_yday: _0x46c9cf[_0x161a25 + 28 >> 2], tm_isdst: _0x46c9cf[_0x161a25 + 32 >> 2], tm_gmtoff: _0x46c9cf[_0x161a25 + 36 >> 2], tm_zone: _0x1342a9 ? _0x30a7f6(_0x1342a9) : ""}, _0x4a2881 = _0x30a7f6(_0x484792), _0x1639e5 = {"%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y"};
      for (var _0x2411c4 in _0x1639e5) {
        _0x4a2881 = _0x4a2881["replace"](new RegExp(_0x2411c4, "g"), _0x1639e5[_0x2411c4]);
      }
      var _0x2fb070 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], _0xe71ab1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function _0x1095c1(_0x5a1ca6, _0x3038e7, _0x463c82) {
        var _0x3c53f7 = typeof _0x5a1ca6 == "number" ? _0x5a1ca6["toString"]() : _0x5a1ca6 || "";
        while (_0x3c53f7["length"] < _0x3038e7) {
          _0x3c53f7 = _0x463c82[0] + _0x3c53f7;
        }
        return _0x3c53f7;
      }
      function _0x50c642(_0x4b2d8c, _0x420cdf) {
        return _0x1095c1(_0x4b2d8c, _0x420cdf, "0");
      }
      function _0x115ef6(_0x5cf13c, _0x10ec03) {
        function _0x91891e(_0x1e8564) {
          return _0x1e8564 < 0 ? -1 : _0x1e8564 > 0 ? 1 : 0;
        }
        var _0x2c357c;
        return (_0x2c357c = _0x91891e(_0x5cf13c["getFullYear"]() - _0x10ec03["getFullYear"]())) === 0 && ((_0x2c357c = _0x91891e(_0x5cf13c["getMonth"]() - _0x10ec03["getMonth"]())) === 0 && (_0x2c357c = _0x91891e(_0x5cf13c["getDate"]() - _0x10ec03["getDate"]()))), _0x2c357c;
      }
      function _0x48d091(_0x13a460) {
        switch (_0x13a460["getDay"]()) {
          case 0:
            return new Date(_0x13a460["getFullYear"]() - 1, 11, 29);
          case 1:
            return _0x13a460;
          case 2:
            return new Date(_0x13a460["getFullYear"](), 0, 3);
          case 3:
            return new Date(_0x13a460["getFullYear"](), 0, 2);
          case 4:
            return new Date(_0x13a460["getFullYear"](), 0, 1);
          case 5:
            return new Date(_0x13a460["getFullYear"]() - 1, 11, 31);
          case 6:
            return new Date(_0x13a460["getFullYear"]() - 1, 11, 30);
        }
      }
      function _0x709bfc(_0x1d21e0) {
        var _0x917a97 = _0x5db8f1(new Date(_0x1d21e0["tm_year"] + 1900, 0, 1), _0x1d21e0["tm_yday"]), _0x1196da = new Date(_0x917a97["getFullYear"](), 0, 4), _0x597a01 = new Date(_0x917a97["getFullYear"]() + 1, 0, 4), _0x1425ee = _0x48d091(_0x1196da), _0x4ac282 = _0x48d091(_0x597a01);
        return _0x115ef6(_0x1425ee, _0x917a97) <= 0 ? _0x115ef6(_0x4ac282, _0x917a97) <= 0 ? _0x917a97["getFullYear"]() + 1 : _0x917a97["getFullYear"]() : _0x917a97["getFullYear"]() - 1;
      }
      var _0x204bcf = {"%a": function (_0x3c70b1) {
        return _0x2fb070[_0x3c70b1["tm_wday"]]["substring"](0, 3);
      }, "%A": function (_0x2ffa01) {
        return _0x2fb070[_0x2ffa01["tm_wday"]];
      }, "%b": function (_0x49d07a) {
        return _0xe71ab1[_0x49d07a["tm_mon"]]["substring"](0, 3);
      }, "%B": function (_0x4bb5ed) {
        return _0xe71ab1[_0x4bb5ed["tm_mon"]];
      }, "%C": function (_0x4988c6) {
        var _0x151c84 = _0x4988c6["tm_year"] + 1900;
        return _0x50c642(_0x151c84 / 100 | 0, 2);
      }, "%d": function (_0x52cea3) {
        return _0x50c642(_0x52cea3["tm_mday"], 2);
      }, "%e": function (_0x34246c) {
        return _0x1095c1(_0x34246c["tm_mday"], 2, " ");
      }, "%g": function (_0x1485ce) {
        return _0x709bfc(_0x1485ce)["toString"]()["substring"](2);
      }, "%G": function (_0x4aa298) {
        return _0x709bfc(_0x4aa298);
      }, "%H": function (_0x41efde) {
        return _0x50c642(_0x41efde["tm_hour"], 2);
      }, "%I": function (_0x2e3254) {
        var _0x1f1713 = _0x2e3254["tm_hour"];
        if (_0x1f1713 == 0) _0x1f1713 = 12; else {
          if (_0x1f1713 > 12) _0x1f1713 -= 12;
        }
        return _0x50c642(_0x1f1713, 2);
      }, "%j": function (_0x3a9f80) {
        return _0x50c642(_0x3a9f80["tm_mday"] + _0x54c83e(_0x2a2386(_0x3a9f80["tm_year"] + 1900) ? _0x374241 : _0x1c0120, _0x3a9f80["tm_mon"] - 1), 3);
      }, "%m": function (_0x3af1c0) {
        return _0x50c642(_0x3af1c0["tm_mon"] + 1, 2);
      }, "%M": function (_0x45ff7f) {
        return _0x50c642(_0x45ff7f["tm_min"], 2);
      }, "%n": function () {
        return "\n";
      }, "%p": function (_0xe0596a) {
        return _0xe0596a["tm_hour"] >= 0 && _0xe0596a["tm_hour"] < 12 ? "AM" : "PM";
      }, "%S": function (_0x5d8ddb) {
        return _0x50c642(_0x5d8ddb["tm_sec"], 2);
      }, "%t": function () {
        return "	";
      }, "%u": function (_0x34d002) {
        return _0x34d002["tm_wday"] || 7;
      }, "%U": function (_0x3d95cf) {
        var _0xd62d89 = _0x3d95cf["tm_yday"] + 7 - _0x3d95cf["tm_wday"];
        return _0x50c642(Math["floor"](_0xd62d89 / 7), 2);
      }, "%V": function (_0xca4fac) {
        var _0x5f071f = Math["floor"]((_0xca4fac["tm_yday"] + 7 - (_0xca4fac["tm_wday"] + 6) % 7) / 7);
        (_0xca4fac["tm_wday"] + 371 - _0xca4fac["tm_yday"] - 2) % 7 <= 2 && _0x5f071f++;
        if (!_0x5f071f) {
          _0x5f071f = 52;
          var _0x328f6f = (_0xca4fac["tm_wday"] + 7 - _0xca4fac["tm_yday"] - 1) % 7;
          (_0x328f6f == 4 || _0x328f6f == 5 && _0x2a2386(_0xca4fac["tm_year"] % 400 - 1)) && _0x5f071f++;
        } else {
          if (_0x5f071f == 53) {
            var _0x9f0866 = (_0xca4fac["tm_wday"] + 371 - _0xca4fac["tm_yday"]) % 7;
            if (_0x9f0866 != 4 && (_0x9f0866 != 3 || !_0x2a2386(_0xca4fac["tm_year"]))) _0x5f071f = 1;
          }
        }
        return _0x50c642(_0x5f071f, 2);
      }, "%w": function (_0x1cd39c) {
        return _0x1cd39c["tm_wday"];
      }, "%W": function (_0x8d6d2b) {
        var _0x199924 = _0x8d6d2b["tm_yday"] + 7 - (_0x8d6d2b["tm_wday"] + 6) % 7;
        return _0x50c642(Math["floor"](_0x199924 / 7), 2);
      }, "%y": function (_0x235a9e) {
        return (_0x235a9e["tm_year"] + 1900)["toString"]()["substring"](2);
      }, "%Y": function (_0x5e027a) {
        return _0x5e027a["tm_year"] + 1900;
      }, "%z": function (_0x1ac58e) {
        var _0x14baba = _0x1ac58e["tm_gmtoff"], _0x5f5663 = _0x14baba >= 0;
        return _0x14baba = Math["abs"](_0x14baba) / 60, _0x14baba = _0x14baba / 60 * 100 + _0x14baba % 60, (_0x5f5663 ? "+" : "-") + String("0000" + _0x14baba)["slice"](-4);
      }, "%Z": function (_0x384420) {
        return _0x384420["tm_zone"];
      }, "%%": function () {
        return "%";
      }};
      _0x4a2881 = _0x4a2881["replace"](/%%/g, "");
      for (var _0x2411c4 in _0x204bcf) {
        _0x4a2881["includes"](_0x2411c4) && (_0x4a2881 = _0x4a2881["replace"](new RegExp(_0x2411c4, "g"), _0x204bcf[_0x2411c4](_0x358ae9)));
      }
      _0x4a2881 = _0x4a2881["replace"](/\0\0/g, "%");
      var _0x2d94df = _0x3b0517(_0x4a2881, false);
      if (_0x2d94df["length"] > _0x528653) return 0;
      return _0x12c519(_0x2d94df, _0x41be6e), _0x2d94df["length"] - 1;
    }
    var _0x3e947d = function (_0x1c2a30, _0x3e55df, _0x8e600e, _0x5c5603) {
      !_0x1c2a30 && (_0x1c2a30 = this), this["parent"] = _0x1c2a30, this["mount"] = _0x1c2a30["mount"], this["mounted"] = null, this["id"] = _0x278315["nextInode"]++, this["name"] = _0x3e55df, this["mode"] = _0x8e600e, this["node_ops"] = {}, this["stream_ops"] = {}, this["rdev"] = _0x5c5603;
    }, _0x26b7fa = 365, _0x127db4 = 146;
    Object["defineProperties"](_0x3e947d["prototype"], {read: {get: function () {
      return (this["mode"] & _0x26b7fa) === _0x26b7fa;
    }, set: function (_0x332b9b) {
      _0x332b9b ? this["mode"] |= _0x26b7fa : this["mode"] &= ~_0x26b7fa;
    }}, write: {get: function () {
      return (this["mode"] & _0x127db4) === _0x127db4;
    }, set: function (_0x4557e2) {
      _0x4557e2 ? this["mode"] |= _0x127db4 : this["mode"] &= ~_0x127db4;
    }}, isFolder: {get: function () {
      return _0x278315["isDir"](this["mode"]);
    }}, isDevice: {get: function () {
      return _0x278315["isChrdev"](this["mode"]);
    }}}), _0x278315["FSNode"] = _0x3e947d, _0x278315["staticInit"](), _0x4bcfe1["FS_createPath"] = _0x278315["createPath"], _0x4bcfe1["FS_createDataFile"] = _0x278315["createDataFile"], _0x4bcfe1["requestFullscreen"] = function _0x133193(_0x19dcde, _0x5cb286) {
      _0x20045a["requestFullscreen"](_0x19dcde, _0x5cb286);
    }, _0x4bcfe1["requestAnimationFrame"] = function _0x5d64d9(_0x18830d) {
      _0x20045a["requestAnimationFrame"](_0x18830d);
    }, _0x4bcfe1["setCanvasSize"] = function _0x58052b(_0x506989, _0x3838cc, _0x284b0e) {
      _0x20045a["setCanvasSize"](_0x506989, _0x3838cc, _0x284b0e);
    }, _0x4bcfe1["pauseMainLoop"] = function _0x1606ff() {
      _0x20045a["mainLoop"]["pause"]();
    }, _0x4bcfe1["resumeMainLoop"] = function _0x3a0baa() {
      _0x20045a["mainLoop"]["resume"]();
    }, _0x4bcfe1["getUserMedia"] = function _0x594a79() {
      _0x20045a["getUserMedia"]();
    }, _0x4bcfe1["createContext"] = function _0x33adb6(_0x426f80, _0x1e76ed, _0x5458a7, _0x1b4dbd) {
      return _0x20045a["createContext"](_0x426f80, _0x1e76ed, _0x5458a7, _0x1b4dbd);
    };
    var _0x20ed22;
    for (var _0xa3263e = 0; _0xa3263e < 32; ++_0xa3263e) _0x526991["push"](new Array(_0xa3263e));
    var _0x487b63 = new Float32Array(288);
    for (var _0xa3263e = 0; _0xa3263e < 288; ++_0xa3263e) {
      _0x1ffef2[_0xa3263e] = _0x487b63["subarray"](0, _0xa3263e + 1);
    }
    var _0x45dae3 = new Int32Array(288);
    for (var _0xa3263e = 0; _0xa3263e < 288; ++_0xa3263e) {
      _0x4a9edb[_0xa3263e] = _0x45dae3["subarray"](0, _0xa3263e + 1);
    }
    var _0x5df02b = false;
    function _0x3b0517(_0x20741e, _0x30b3af, _0x1b27a2) {
      var _0x21b73a = _0x1b27a2 > 0 ? _0x1b27a2 : _0x4d063a(_0x20741e) + 1, _0x59abd0 = new Array(_0x21b73a), _0x24b149 = _0x2f86f3(_0x20741e, _0x59abd0, 0, _0x59abd0["length"]);
      if (_0x30b3af) _0x59abd0["length"] = _0x24b149;
      return _0x59abd0;
    }
    var _0x4735b1 = {AddDocument: _0x36b4a3, AddElementInArrayField: _0x4288ce, AddUserScoreSDK: _0x493a10, AnalyticsTrackOrderSDK: _0x598ab4, ConfineMouse: _0x430e2b, CopyToClipboard: _0x51d2f1, CopyToClipboardSDK: _0x53d9fc, CreateUserWithEmailAndPassword: _0x5844c3, DataClearSDK: _0x3d5e98, DataGetItemSDK: _0x22e089, DataHasKeySDK: _0x45dd45, DataRemoveItemSDK: _0x542769, DataSetItemSDK: _0xb7f8c5, DeleteDocument: _0xe09791, DeleteField: _0xb93715, DeleteJSON: _0x593aeb, DownloadFile: _0x4ff1ea, FetchAd: _0x443136, GMRequestAd: _0x7a0974, GM_SDK_GMEvent: _0x557129, GM_SDK_GetVeryfiedSignature: _0xc73f4e, GM_SDK_InitParam: _0x255279, GM_SDK_StartGame: _0x1da9f5, GameEvent: _0xfd6898, GameplayStartSDK: _0x37c0c3, GameplayStopSDK: _0x5cd640, GetCurrentProjectId: _0x1b8189, GetDocument: _0x1df97c, GetDocumentsInCollection: _0x40c23f, GetEnvironmentSDK: _0x26ca24, GetGameSettingsJSONSDK: _0x1144b2, GetInviteLinkParamSDK: _0x37cdae, GetIsQaToolSDK: _0x5aba99, GetJSMemoryInfo: _0x1ba6cb, GetJSON: _0x3c7145, GetSystemInfoSDK: _0x970d5f, GetUserSDK: _0x78d0e2, GetUserTokenSDK: _0x33c01e, GetXsollaUserTokenSDK: _0x3d4fba, H5ADS_Init: _0x40abb7, H5_PreloadAd: _0x222b3f, H5_ShowAd: _0xd2e590, H5_ShowRewardAd: _0x123a39, HappyTimeSDK: _0x43b7ce, HideInviteButtonSDK: _0x516e54, IncrementFieldValue: _0x5494b8, InitSDK: _0x1faead, IsMouseConfined: _0x9c5b04, IsUserAccountAvailableSDK: _0x1cc26f, JS_Accelerometer_IsRunning: _0x4b2e68, JS_Accelerometer_Start: _0x18e32e, JS_Accelerometer_Stop: _0x4cc832, JS_CallAsLongAsNoExceptionsSeen: _0x583215, JS_Cursor_SetImage: _0x4e2e9f, JS_Cursor_SetShow: _0x307168, JS_DOM_MapViewportCoordinateToElementLocalCoordinate: _0x5178f6, JS_DOM_UnityCanvasSelector: _0x48476c, JS_Eval_EvalJS: _0x512048, JS_Eval_OpenURL: _0x503a4e, JS_FileSystem_Initialize: _0x27ac74, JS_FileSystem_Sync: _0x251f49, JS_GravitySensor_IsRunning: _0x398a4c, JS_GravitySensor_Start: _0x1aabba, JS_GravitySensor_Stop: _0x52fa3d, JS_GuardAgainstJsExceptions: _0x343e76, JS_Gyroscope_IsRunning: _0x2a2fd5, JS_Gyroscope_Start: _0x1a3353, JS_Gyroscope_Stop: _0x421416, JS_Init_ContextMenuHandler: _0x2b3b91, JS_LinearAccelerationSensor_IsRunning: _0x11a0e4, JS_LinearAccelerationSensor_Start: _0x541c52, JS_LinearAccelerationSensor_Stop: _0x5331f4, JS_Log_Dump: _0x424d5f, JS_Log_StackTrace: _0x1b8ce6, JS_MobileKeybard_GetIgnoreBlurEvent: _0x1a24b3, JS_MobileKeyboard_GetKeyboardStatus: _0x264a32, JS_MobileKeyboard_GetText: _0xf5fa31, JS_MobileKeyboard_GetTextSelection: _0x57f0d6, JS_MobileKeyboard_Hide: _0x3dbe95, JS_MobileKeyboard_SetCharacterLimit: _0x371b98, JS_MobileKeyboard_SetText: _0x3f506f, JS_MobileKeyboard_SetTextSelection: _0x39f912, JS_MobileKeyboard_Show: _0x37223b, JS_OrientationSensor_IsRunning: _0x11fd21, JS_OrientationSensor_Start: _0x3927ad, JS_OrientationSensor_Stop: _0x1fdd0c, JS_RequestDeviceSensorPermissionsOnTouch: _0x89cc22, JS_RunQuitCallbacks: _0x1a06a1, JS_ScreenOrientation_DeInit: _0x1a399b, JS_ScreenOrientation_Init: _0x148353, JS_ScreenOrientation_Lock: _0x4b7761, JS_Sound_Create_Channel: _0x42a3ee, JS_Sound_GetAudioBufferSampleRate: _0x2b37c9, JS_Sound_GetAudioContextSampleRate: _0x514991, JS_Sound_GetLength: _0x3d8ba7, JS_Sound_GetLoadState: _0x1505dd, JS_Sound_Init: _0x34e821, JS_Sound_IsStopped: _0x235e9f, JS_Sound_Load: _0x1c8be5, JS_Sound_Load_PCM: _0x531901, JS_Sound_Play: _0x5a5996, JS_Sound_ReleaseInstance: _0x112f79, JS_Sound_ResumeIfNeeded: _0x1bd363, JS_Sound_Set3D: _0x36beb4, JS_Sound_SetListenerOrientation: _0x2be9b2, JS_Sound_SetListenerPosition: _0x4ceb0c, JS_Sound_SetLoop: _0x81dc53, JS_Sound_SetLoopPoints: _0x4d71f6, JS_Sound_SetPaused: _0x4fad31, JS_Sound_SetPitch: _0x4e27f9, JS_Sound_SetPosition: _0x2b3d54, JS_Sound_SetVolume: _0x5e4e52, JS_Sound_Stop: _0xb13c23, JS_SystemInfo_GetBrowserName: _0x5f4010, JS_SystemInfo_GetBrowserVersionString: _0x1920dc, JS_SystemInfo_GetCanvasClientSize: _0x50a3f6, JS_SystemInfo_GetDocumentURL: _0x458e9a, JS_SystemInfo_GetGPUInfo: _0x35f3ce, JS_SystemInfo_GetLanguage: _0x16ad31, JS_SystemInfo_GetMatchWebGLToCanvasSize: _0x372768, JS_SystemInfo_GetMemory: _0x3308f7, JS_SystemInfo_GetOS: _0x31ed06, JS_SystemInfo_GetPreferredDevicePixelRatio: _0x3869f6, JS_SystemInfo_GetScreenSize: _0x4c1803, JS_SystemInfo_GetStreamingAssetsURL: _0x2e04c0, JS_SystemInfo_HasAstcHdr: _0x520c53, JS_SystemInfo_HasCursorLock: _0x1f0824, JS_SystemInfo_HasFullscreen: _0x3e7b35, JS_SystemInfo_HasWebGL: _0x7e3fff, JS_UnityEngineShouldQuit: _0x4ea1e5, JS_WebRequest_Abort: _0x66cfa2, JS_WebRequest_Create: _0x3ec6c9, JS_WebRequest_GetResponseMetaData: _0x55f90f, JS_WebRequest_GetResponseMetaDataLengths: _0x3e7191, JS_WebRequest_Release: _0x33b254, JS_WebRequest_Send: _0x50d492, JS_WebRequest_SetRedirectLimit: _0x228e72, JS_WebRequest_SetRequestHeader: _0x20b372, JS_WebRequest_SetTimeout: _0x38114d, ListenForChildAdded: _0x5d30ca, ListenForChildChanged: _0x3792f0, ListenForChildRemoved: _0x501782, ListenForCollectionChange: _0x514a76, ListenForDocumentChange: _0x1f1ec0, ListenForValueChanged: _0x4fa2c6, LogEvent: _0xf4a269, LogEventParameter: _0x269912, ModifyNumberWithTransaction: _0x250563, OnAuthStateChanged: _0x5b4042, Ping: _0x5c0c4b, PostJSON: _0x59a54f, PushJSON: _0x14bab7, RedirectDomain: _0x134e10, RefetchReward: _0xb0673a, RegisterGameControls: _0x7ff2fc, RegisterRewardCallbacks: _0x291595, RemoveElementInArrayField: _0x45d8ca, RequestAdSDK: _0x5451a7, RequestBannersSDK: _0x861d21, RequestInviteUrlSDK: _0x7ef627, SDK_Init: _0x2125e3, SDK_PreloadAd: _0x476239, SDK_SendEvent: _0x267a99, SDK_ShowAd: _0x4d4aa5, SetDocument: _0x5de778, SetUserProperties: _0x20c304, ShowAccountLinkPromptSDK: _0x2213b1, ShowAuthPromptSDK: _0x1ca6be, ShowInviteButtonSDK: _0x60a3a3, ShowRewardAdCallback: _0x362b55, SignInAnonymously: _0x47bd03, SignInWithEmailAndPassword: _0x2983aa, SignInWithFacebook: _0x5c3ea1, SignInWithGoogle: _0x1dd1da, StopListeningForChildAdded: _0x1e6210, StopListeningForChildChanged: _0x5606fc, StopListeningForChildRemoved: _0x19906b, StopListeningForCollectionChange: _0x2f3020, StopListeningForDocumentChange: _0x3f3cb5, StopListeningForValueChanged: _0x339465, SyncUnityGameDataSDK: _0x5f3eb9, ToggleBooleanWithTransaction: _0x3041ab, UnconfineMouse: _0x483867, UpdateDocument: _0x3f8b9d, UpdateJSON: _0x1f16ab, UploadFile: _0xde1413, XHR_Abort: _0x1a3813, XHR_Create: _0x38d074, XHR_Release: _0x2d8d45, XHR_Send: _0x345a1f, XHR_SetLoglevel: _0x322ff8, XHR_SetProgressHandler: _0x1b30d3, XHR_SetRequestHeader: _0x3fe864, XHR_SetResponseHandler: _0x3323f7, XHR_SetTimeout: _0xf10a6d, __cxa_allocate_exception: _0x259bf9, __cxa_begin_catch: _0x451726, __cxa_end_catch: _0x33a569, __cxa_find_matching_catch_2: _0x49137b, __cxa_find_matching_catch_3: _0x48140c, __cxa_find_matching_catch_4: _0x264925, __cxa_free_exception: _0x31cafc, __cxa_rethrow: _0x376515, __cxa_throw: _0x1e0517, __resumeException: _0xb7ce82, __syscall__newselect: _0x3d2ff4, __syscall_accept4: _0x263fe2, __syscall_bind: _0x2e1b4f, __syscall_chmod: _0x5db802, __syscall_connect: _0x37f820, __syscall_dup3: _0x424f99, __syscall_faccessat: _0x5eb451, __syscall_fcntl64: _0x1ff544, __syscall_fstat64: _0x3b42e0, __syscall_ftruncate64: _0x2b0e27, __syscall_getcwd: _0x164362, __syscall_getdents64: _0x337620, __syscall_getpeername: _0x772641, __syscall_getsockname: _0x4f3255, __syscall_getsockopt: _0x118d2b, __syscall_ioctl: _0x502455, __syscall_listen: _0x421136, __syscall_lstat64: _0x13be77, __syscall_mkdir: _0x19569e, __syscall_newfstatat: _0x535da6, __syscall_openat: _0x51889d, __syscall_pipe: _0x4928c4, __syscall_poll: _0x164857, __syscall_readlinkat: _0x413df0, __syscall_recvfrom: _0x2f36ee, __syscall_recvmsg: _0x56144b, __syscall_renameat: _0x4f13c1, __syscall_rmdir: _0xb4205f, __syscall_sendmsg: _0x212e59, __syscall_sendto: _0x590172, __syscall_socket: _0x2e2cc3, __syscall_stat64: _0x14fc1c, __syscall_statfs64: _0x2dc891, __syscall_symlink: _0x4a0b6c, __syscall_truncate64: _0x5129e5, __syscall_unlinkat: _0x58515f, __syscall_utimensat: _0x5f0bce, _dlopen_js: _0x40ae41, _dlsym_js: _0x2641fd, _emscripten_date_now: _0x480141, _emscripten_get_now_is_monotonic: _0x47412e, _emscripten_throw_longjmp: _0xf9ef17, _gmtime_js: _0x27ce1e, _localtime_js: _0x4357b7, _mktime_js: _0x5c73ac, _mmap_js: _0x25acc7, _munmap_js: _0x4f7e77, _tzset_js: _0xd8c7be, abort: _0x36e0e3, emscripten_asm_const_int_sync_on_main_thread: _0x14ae82, emscripten_cancel_main_loop: _0x6e2eec, emscripten_clear_interval: _0x14f42c, emscripten_exit_fullscreen: _0x5ba88e, emscripten_exit_pointerlock: _0x421ff2, emscripten_get_canvas_element_size: _0x4b4d0d, emscripten_get_fullscreen_status: _0x2ae944, emscripten_get_gamepad_status: _0x5883b0, emscripten_get_heap_max: _0xf98318, emscripten_get_now: _0x511ea2, emscripten_get_now_res: _0xe1a881, emscripten_get_num_gamepads: _0x2600c3, emscripten_html5_remove_all_event_listeners: _0x4c1226, emscripten_is_webgl_context_lost: _0x2c6662, emscripten_log: _0x1bdfbc, emscripten_memcpy_big: _0xe4ce94, emscripten_request_fullscreen: _0xafa595, emscripten_request_pointerlock: _0x30b2c5, emscripten_resize_heap: _0x5ad6cb, emscripten_sample_gamepad_data: _0xb349aa, emscripten_set_blur_callback_on_thread: _0x4e3f2b, emscripten_set_canvas_element_size: _0x551975, emscripten_set_focus_callback_on_thread: _0x4c842b, emscripten_set_fullscreenchange_callback_on_thread: _0x164194, emscripten_set_gamepadconnected_callback_on_thread: _0x5af486, emscripten_set_gamepaddisconnected_callback_on_thread: _0x4cce54, emscripten_set_interval: _0x54ee09, emscripten_set_keydown_callback_on_thread: _0x1e2cd6, emscripten_set_keypress_callback_on_thread: _0x222941, emscripten_set_keyup_callback_on_thread: _0x1c38b5, emscripten_set_main_loop: _0x4196c8, emscripten_set_main_loop_timing: _0x1fa8ea, emscripten_set_mousedown_callback_on_thread: _0x2c7e72, emscripten_set_mousemove_callback_on_thread: _0x5e1fa6, emscripten_set_mouseup_callback_on_thread: _0x26a6fa, emscripten_set_pointerlockchange_callback_on_thread: _0x4091ac, emscripten_set_touchcancel_callback_on_thread: _0x1d9655, emscripten_set_touchend_callback_on_thread: _0x17d1c8, emscripten_set_touchmove_callback_on_thread: _0x4738a4, emscripten_set_touchstart_callback_on_thread: _0x3e02bc, emscripten_set_wheel_callback_on_thread: _0x53edb9, emscripten_webgl_create_context: _0x572c98, emscripten_webgl_destroy_context: _0x63234b, emscripten_webgl_enable_extension: _0x26441d, emscripten_webgl_get_current_context: _0x5e5b6a, emscripten_webgl_init_context_attributes: _0x3bab87, emscripten_webgl_make_context_current: _0x389f53, environ_get: _0x1a2cab, environ_sizes_get: _0x52451a, exit: _0x14a8bf, fd_close: _0x100135, fd_fdstat_get: _0x117c13, fd_read: _0x173ba4, fd_seek: _0x12757c, fd_write: _0x1aa77e, getTempRet0: _0x42a223, getaddrinfo: _0x30da43, gethostbyaddr: _0x34d78f, gethostbyname: _0x10ec7f, getnameinfo: _0x30d9e6, glActiveTexture: _0x4989b7, glAttachShader: _0x25b874, glBeginQuery: _0x30b68d, glBindAttribLocation: _0x1757a8, glBindBuffer: _0x322ae2, glBindBufferBase: _0x74914f, glBindBufferRange: _0x1fe4c3, glBindFramebuffer: _0x4df6c0, glBindRenderbuffer: _0x45f713, glBindSampler: _0x5a2419, glBindTexture: _0x56fb0d, glBindVertexArray: _0x21ee2c, glBlendEquation: _0x208e5c, glBlendEquationSeparate: _0x42d1a2, glBlendFuncSeparate: _0x472b4a, glBlitFramebuffer: _0x5d435e, glBufferData: _0x3839cb, glBufferSubData: _0x279b7d, glCheckFramebufferStatus: _0xc1398, glClear: _0x4f8070, glClearBufferfi: _0x406ed4, glClearBufferfv: _0xfe9bac, glClearBufferuiv: _0xc99862, glClearColor: _0x412746, glClearDepthf: _0x4fa8e7, glClearStencil: _0x146924, glClientWaitSync: _0x37d805, glColorMask: _0x2e678c, glCompileShader: _0x4756fb, glCompressedTexImage2D: _0x6ffe69, glCompressedTexImage3D: _0x4ef3d8, glCompressedTexSubImage2D: _0x5a9410, glCompressedTexSubImage3D: _0x14abeb, glCopyBufferSubData: _0x14f3d0, glCopyTexImage2D: _0x466738, glCopyTexSubImage2D: _0x392e0a, glCreateProgram: _0x39a665, glCreateShader: _0x2fcc65, glCullFace: _0x37b362, glDeleteBuffers: _0x540fc3, glDeleteFramebuffers: _0x1866d8, glDeleteProgram: _0x2a53a9, glDeleteQueries: _0x670340, glDeleteRenderbuffers: _0x3ec032, glDeleteSamplers: _0x4fbc7b, glDeleteShader: _0x2e0389, glDeleteSync: _0x4218e7, glDeleteTextures: _0xd63045, glDeleteVertexArrays: _0x4d666a, glDepthFunc: _0x52b900, glDepthMask: _0x464873, glDetachShader: _0x459d11, glDisable: _0x5981cd, glDisableVertexAttribArray: _0x282e27, glDrawArrays: _0x16e9c7, glDrawArraysInstanced: _0xbba121, glDrawBuffers: _0x187595, glDrawElements: _0x49b8a0, glDrawElementsInstanced: _0x495a6d, glEnable: _0x16ac80, glEnableVertexAttribArray: _0x49be46, glEndQuery: _0x3adb6b, glFenceSync: _0x880b1, glFinish: _0x1c15cb, glFlush: _0x15f619, glFlushMappedBufferRange: _0x1a121d, glFramebufferRenderbuffer: _0x27705a, glFramebufferTexture2D: _0x24606c, glFramebufferTextureLayer: _0x364e9e, glFrontFace: _0x5b7914, glGenBuffers: _0x2e111f, glGenFramebuffers: _0x497aa6, glGenQueries: _0x4de728, glGenRenderbuffers: _0x2543f8, glGenSamplers: _0x330f70, glGenTextures: _0x1d7c21, glGenVertexArrays: _0x356b0b, glGenerateMipmap: _0x17c6ab, glGetActiveAttrib: _0x3d7d16, glGetActiveUniform: _0x314679, glGetActiveUniformBlockName: _0x4f2508, glGetActiveUniformBlockiv: _0x5190a4, glGetActiveUniformsiv: _0x584189, glGetAttribLocation: _0x506ffb, glGetBufferSubData: _0x2bd7fe, glGetError: _0x29a87b, glGetFramebufferAttachmentParameteriv: _0x1cd048, glGetIntegeri_v: _0x282ff2, glGetIntegerv: _0x331f11, glGetInternalformativ: _0x5e9f28, glGetProgramBinary: _0x1440cb, glGetProgramInfoLog: _0x9a981e, glGetProgramiv: _0x119c19, glGetQueryObjectuiv: _0x159b76, glGetQueryiv: _0x2bcf70, glGetRenderbufferParameteriv: _0x2f2484, glGetShaderInfoLog: _0x118e8b, glGetShaderPrecisionFormat: _0x4a6db3, glGetShaderSource: _0x198173, glGetShaderiv: _0x42562c, glGetString: _0x54cc9e, glGetStringi: _0x2b2115, glGetTexParameteriv: _0x5da5cf, glGetUniformBlockIndex: _0x3bcd19, glGetUniformIndices: _0x4e19a0, glGetUniformLocation: _0xc26e23, glGetUniformiv: _0x54d8a1, glGetVertexAttribiv: _0x3a57d0, glInvalidateFramebuffer: _0x2e4910, glIsEnabled: _0xafd37d, glIsVertexArray: _0x2613bc, glLinkProgram: _0x337519, glMapBufferRange: _0x472db0, glPixelStorei: _0x1c1d43, glPolygonOffset: _0x241d23, glProgramBinary: _0x4d971e, glProgramParameteri: _0xd443a4, glReadBuffer: _0x423af5, glReadPixels: _0x1673fb, glRenderbufferStorage: _0x366c5d, glRenderbufferStorageMultisample: _0x4a13b3, glSamplerParameteri: _0xf5ae73, glScissor: _0x362a32, glShaderSource: _0xa3ca52, glStencilFuncSeparate: _0x2ed4c9, glStencilMask: _0x34411f, glStencilOpSeparate: _0x5a805f, glTexImage2D: _0x183879, glTexImage3D: _0x3066d8, glTexParameterf: _0x966b4d, glTexParameteri: _0xdec211, glTexParameteriv: _0x589306, glTexStorage2D: _0x26ea33, glTexStorage3D: _0x531adc, glTexSubImage2D: _0x262c63, glTexSubImage3D: _0x7e5312, glUniform1fv: _0x46f57f, glUniform1i: _0x258c4b, glUniform1iv: _0x3ac3c4, glUniform1uiv: _0x540c63, glUniform2fv: _0x4b7e6a, glUniform2iv: _0x1e10c0, glUniform2uiv: _0x59d442, glUniform3fv: _0x12820b, glUniform3iv: _0x2aacdc, glUniform3uiv: _0x441eaf, glUniform4fv: _0xa9a053, glUniform4iv: _0x475472, glUniform4uiv: _0x552ea6, glUniformBlockBinding: _0x49582b, glUniformMatrix3fv: _0xb3425d, glUniformMatrix4fv: _0x491482, glUnmapBuffer: _0x295f8e, glUseProgram: _0x421af9, glValidateProgram: _0x2e0fcd, glVertexAttrib4f: _0x34af9d, glVertexAttrib4fv: _0x16419f, glVertexAttribIPointer: _0x142d8b, glVertexAttribPointer: _0x5a89e9, glViewport: _0x1ade16, invoke_dddi: _0x1dcb81, invoke_ddiii: _0x3a2c8b, invoke_dii: _0x593e1f, invoke_diidi: _0x1eda90, invoke_diii: _0x16f818, invoke_diiii: _0x1545b7, invoke_dji: _0x2ac37a, invoke_fffi: _0x10f2e9, invoke_fi: _0x29efde, invoke_fii: _0x2a39d1, invoke_fiifi: _0x1636b3, invoke_fiii: _0x5216fb, invoke_fiiii: _0x21851d, invoke_i: _0x3b4781, invoke_idi: _0x17f47c, invoke_ifi: _0x53ebf3, invoke_ii: _0x5602bf, invoke_iidi: _0x4c2621, invoke_iifi: _0x258e1c, invoke_iii: _0x3db597, invoke_iiid: _0x1a13e9, invoke_iiidii: _0xc4db30, invoke_iiidiii: _0x231f29, invoke_iiifi: _0x2eefb5, invoke_iiifii: _0x3e0386, invoke_iiii: _0x4b508d, invoke_iiiidii: _0x1173dd, invoke_iiiifi: _0x3cfe12, invoke_iiiifii: _0x1a46b3, invoke_iiiii: _0x5b46f7, invoke_iiiiii: _0x4763ee, invoke_iiiiiii: _0x330333, invoke_iiiiiiii: _0x199958, invoke_iiiiiiiii: _0x119e8a, invoke_iiiiiiiiii: _0x24e36f, invoke_iiiiiiiiiii: _0x4b5b87, invoke_iiiiiiiiiji: _0x41aa96, invoke_iiiiij: _0x60630e, invoke_iiiijii: _0x33c826, invoke_iiiijjii: _0x3d999e, invoke_iiij: _0x478d8b, invoke_iiiji: _0xf73776, invoke_iiijii: _0xbd3a70, invoke_iiijiii: _0x54ce25, invoke_iij: _0x189cfa, invoke_iiji: _0x563479, invoke_iijii: _0x58383e, invoke_iijiii: _0x304fa6, invoke_iijiiiiii: _0x1ecc69, invoke_iijji: _0x4c8cdd, invoke_iijjiiiiii: _0x329037, invoke_iji: _0x1d6570, invoke_ijiii: _0x51aca7, invoke_ijji: _0x52ca17, invoke_j: _0xfef9ab, invoke_jdi: _0x4595c0, invoke_ji: _0x7efa1e, invoke_jidi: _0x485b5f, invoke_jii: _0x5468e9, invoke_jiii: _0x1a7731, invoke_jiiii: _0x48c0ce, invoke_jiiiii: _0x2e3f48, invoke_jiiiiiiiiii: _0xc5cd42, invoke_jiiji: _0x496495, invoke_jiji: _0x23fc54, invoke_jijii: _0x3e5737, invoke_jji: _0x100433, invoke_jjii: _0x42d334, invoke_jjji: _0x33978b, invoke_v: _0x5eb4f9, invoke_vi: _0x555546, invoke_vidd: _0x1460bf, invoke_vidi: _0x3cd361, invoke_viffi: _0x55ece9, invoke_vifi: _0x7bff56, invoke_vifii: _0x36f4f7, invoke_vii: _0x4bcd76, invoke_viid: _0x2a3f35, invoke_viidi: _0x5bf059, invoke_viif: _0x1ed28c, invoke_viiffi: _0x832381, invoke_viifi: _0x1ff3b6, invoke_viifii: _0x4391e4, invoke_viii: _0x501b49, invoke_viiidii: _0x5616e1, invoke_viiii: _0x4de5b0, invoke_viiiifi: _0x59b1fd, invoke_viiiii: _0x537a92, invoke_viiiiii: _0x52060e, invoke_viiiiiifddfiiii: _0xf9dc88, invoke_viiiiiiffffiiii: _0x3ed2be, invoke_viiiiiifiifiiii: _0x2af378, invoke_viiiiiifjjfiiii: _0xf0c903, invoke_viiiiiii: _0x8472ea, invoke_viiiiiiii: _0x3c7f25, invoke_viiiiiiiii: _0x3a764d, invoke_viiiiiiiiii: _0x26c80b, invoke_viiiiiiiiiiii: _0x1ce1b9, invoke_viiiiiiiiiiiii: _0x524f3f, invoke_viiiijiii: _0x391251, invoke_viiiji: _0x3924c4, invoke_viij: _0x36ceb8, invoke_viiji: _0x57aabb, invoke_viijii: _0x4d2307, invoke_viijiii: _0x33a158, invoke_viijiiijiiii: _0x430a3a, invoke_viijji: _0x59dbc9, invoke_viji: _0x4809d9, invoke_vijii: _0x335c52, invoke_vijiii: _0x232974, invoke_vijiiii: _0x1c711e, invoke_vijijii: _0x50f081, invoke_vijji: _0x30c4c0, invoke_vijjji: _0x1bc387, invoke_vji: _0xa9cc6c, invoke_vjiii: _0x4c23d4, invoke_vjiiiii: _0x464156, invoke_vjiiiiii: _0x475c30, invoke_vjjjiiii: _0x30f44d, llvm_eh_typeid_for: _0x3a903f, setTempRet0: _0x1b67f1, strftime: _0x285687}, _0x1b0b39 = _0x1a14b8(), _0x5334a3 = _0x4bcfe1["___wasm_call_ctors"] = function () {
      return (_0x5334a3 = _0x4bcfe1["___wasm_call_ctors"] = _0x4bcfe1["asm"]["__wasm_call_ctors"])["apply"](null, arguments);
    }, _0x1a342e = _0x4bcfe1["_ReleaseKeys"] = function () {
      return (_0x1a342e = _0x4bcfe1["_ReleaseKeys"] = _0x4bcfe1["asm"]["ReleaseKeys"])["apply"](null, arguments);
    }, _0x3cd625 = _0x4bcfe1["_getMemInfo"] = function () {
      return (_0x3cd625 = _0x4bcfe1["_getMemInfo"] = _0x4bcfe1["asm"]["getMemInfo"])["apply"](null, arguments);
    }, _0x3bed77 = _0x4bcfe1["_SendMessageFloat"] = function () {
      return (_0x3bed77 = _0x4bcfe1["_SendMessageFloat"] = _0x4bcfe1["asm"]["SendMessageFloat"])["apply"](null, arguments);
    }, _0x1d2ab4 = _0x4bcfe1["_SendMessageString"] = function () {
      return (_0x1d2ab4 = _0x4bcfe1["_SendMessageString"] = _0x4bcfe1["asm"]["SendMessageString"])["apply"](null, arguments);
    }, _0x5c8177 = _0x4bcfe1["_SendMessage"] = function () {
      return (_0x5c8177 = _0x4bcfe1["_SendMessage"] = _0x4bcfe1["asm"]["SendMessage"])["apply"](null, arguments);
    }, _0x404ecd = _0x4bcfe1["_SetFullscreen"] = function () {
      return (_0x404ecd = _0x4bcfe1["_SetFullscreen"] = _0x4bcfe1["asm"]["SetFullscreen"])["apply"](null, arguments);
    }, _0x4d1486 = _0x4bcfe1["_main"] = function () {
      return (_0x4d1486 = _0x4bcfe1["_main"] = _0x4bcfe1["asm"]["main"])["apply"](null, arguments);
    }, _0x55cd07 = _0x4bcfe1["___errno_location"] = function () {
      return (_0x55cd07 = _0x4bcfe1["___errno_location"] = _0x4bcfe1["asm"]["__errno_location"])["apply"](null, arguments);
    }, _0x1e1e7c = _0x4bcfe1["___dl_seterr"] = function () {
      return (_0x1e1e7c = _0x4bcfe1["___dl_seterr"] = _0x4bcfe1["asm"]["__dl_seterr"])["apply"](null, arguments);
    }, _0x43d3ca = _0x4bcfe1["_htonl"] = function () {
      return (_0x43d3ca = _0x4bcfe1["_htonl"] = _0x4bcfe1["asm"]["htonl"])["apply"](null, arguments);
    }, _0x373c28 = _0x4bcfe1["_htons"] = function () {
      return (_0x373c28 = _0x4bcfe1["_htons"] = _0x4bcfe1["asm"]["htons"])["apply"](null, arguments);
    }, _0x5bda42 = _0x4bcfe1["_ntohs"] = function () {
      return (_0x5bda42 = _0x4bcfe1["_ntohs"] = _0x4bcfe1["asm"]["ntohs"])["apply"](null, arguments);
    }, _0x3ebd1b = _0x4bcfe1["_strlen"] = function () {
      return (_0x3ebd1b = _0x4bcfe1["_strlen"] = _0x4bcfe1["asm"]["strlen"])["apply"](null, arguments);
    }, _0x1f6602 = _0x4bcfe1["_malloc"] = function () {
      return (_0x1f6602 = _0x4bcfe1["_malloc"] = _0x4bcfe1["asm"]["malloc"])["apply"](null, arguments);
    }, _0x14a4bc = _0x4bcfe1["_free"] = function () {
      return (_0x14a4bc = _0x4bcfe1["_free"] = _0x4bcfe1["asm"]["free"])["apply"](null, arguments);
    }, _0x4469d9 = _0x4bcfe1["_emscripten_builtin_memalign"] = function () {
      return (_0x4469d9 = _0x4bcfe1["_emscripten_builtin_memalign"] = _0x4bcfe1["asm"]["emscripten_builtin_memalign"])["apply"](null, arguments);
    }, _0x3444d6 = _0x4bcfe1["_setThrew"] = function () {
      return (_0x3444d6 = _0x4bcfe1["_setThrew"] = _0x4bcfe1["asm"]["setThrew"])["apply"](null, arguments);
    }, _0x39ed5c = _0x4bcfe1["_saveSetjmp"] = function () {
      return (_0x39ed5c = _0x4bcfe1["_saveSetjmp"] = _0x4bcfe1["asm"]["saveSetjmp"])["apply"](null, arguments);
    }, _0x381588 = _0x4bcfe1["stackSave"] = function () {
      return (_0x381588 = _0x4bcfe1["stackSave"] = _0x4bcfe1["asm"]["stackSave"])["apply"](null, arguments);
    }, _0x770e87 = _0x4bcfe1["stackRestore"] = function () {
      return (_0x770e87 = _0x4bcfe1["stackRestore"] = _0x4bcfe1["asm"]["stackRestore"])["apply"](null, arguments);
    }, _0x1d99d1 = _0x4bcfe1["stackAlloc"] = function () {
      return (_0x1d99d1 = _0x4bcfe1["stackAlloc"] = _0x4bcfe1["asm"]["stackAlloc"])["apply"](null, arguments);
    }, _0x15648c = _0x4bcfe1["___cxa_can_catch"] = function () {
      return (_0x15648c = _0x4bcfe1["___cxa_can_catch"] = _0x4bcfe1["asm"]["__cxa_can_catch"])["apply"](null, arguments);
    }, _0x158620 = _0x4bcfe1["___cxa_is_pointer_type"] = function () {
      return (_0x158620 = _0x4bcfe1["___cxa_is_pointer_type"] = _0x4bcfe1["asm"]["__cxa_is_pointer_type"])["apply"](null, arguments);
    }, _0x4b0972 = _0x4bcfe1["dynCall_iidiiii"] = function () {
      return (_0x4b0972 = _0x4bcfe1["dynCall_iidiiii"] = _0x4bcfe1["asm"]["dynCall_iidiiii"])["apply"](null, arguments);
    }, _0x3b5585 = _0x4bcfe1["dynCall_vii"] = function () {
      return (_0x3b5585 = _0x4bcfe1["dynCall_vii"] = _0x4bcfe1["asm"]["dynCall_vii"])["apply"](null, arguments);
    }, _0x3ba9fb = _0x4bcfe1["dynCall_iiii"] = function () {
      return (_0x3ba9fb = _0x4bcfe1["dynCall_iiii"] = _0x4bcfe1["asm"]["dynCall_iiii"])["apply"](null, arguments);
    }, _0x5ea6d0 = _0x4bcfe1["dynCall_iii"] = function () {
      return (_0x5ea6d0 = _0x4bcfe1["dynCall_iii"] = _0x4bcfe1["asm"]["dynCall_iii"])["apply"](null, arguments);
    }, _0x89bc0e = _0x4bcfe1["dynCall_ii"] = function () {
      return (_0x89bc0e = _0x4bcfe1["dynCall_ii"] = _0x4bcfe1["asm"]["dynCall_ii"])["apply"](null, arguments);
    }, _0x363a1a = _0x4bcfe1["dynCall_jiji"] = function () {
      return (_0x363a1a = _0x4bcfe1["dynCall_jiji"] = _0x4bcfe1["asm"]["dynCall_jiji"])["apply"](null, arguments);
    }, _0xe4a07d = _0x4bcfe1["dynCall_vi"] = function () {
      return (_0xe4a07d = _0x4bcfe1["dynCall_vi"] = _0x4bcfe1["asm"]["dynCall_vi"])["apply"](null, arguments);
    }, _0xbe10b6 = _0x4bcfe1["dynCall_iiiii"] = function () {
      return (_0xbe10b6 = _0x4bcfe1["dynCall_iiiii"] = _0x4bcfe1["asm"]["dynCall_iiiii"])["apply"](null, arguments);
    }, _0x14e1db = _0x4bcfe1["dynCall_viii"] = function () {
      return (_0x14e1db = _0x4bcfe1["dynCall_viii"] = _0x4bcfe1["asm"]["dynCall_viii"])["apply"](null, arguments);
    }, _0x2b31cb = _0x4bcfe1["dynCall_v"] = function () {
      return (_0x2b31cb = _0x4bcfe1["dynCall_v"] = _0x4bcfe1["asm"]["dynCall_v"])["apply"](null, arguments);
    }, _0x53694d = _0x4bcfe1["dynCall_viiiiii"] = function () {
      return (_0x53694d = _0x4bcfe1["dynCall_viiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiii"])["apply"](null, arguments);
    }, _0x262251 = _0x4bcfe1["dynCall_viiiii"] = function () {
      return (_0x262251 = _0x4bcfe1["dynCall_viiiii"] = _0x4bcfe1["asm"]["dynCall_viiiii"])["apply"](null, arguments);
    }, _0x1dcc7b = _0x4bcfe1["dynCall_viiii"] = function () {
      return (_0x1dcc7b = _0x4bcfe1["dynCall_viiii"] = _0x4bcfe1["asm"]["dynCall_viiii"])["apply"](null, arguments);
    }, _0x59dcc2 = _0x4bcfe1["dynCall_iiiiii"] = function () {
      return (_0x59dcc2 = _0x4bcfe1["dynCall_iiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiii"])["apply"](null, arguments);
    }, _0x1e0852 = _0x4bcfe1["dynCall_iiiiiiii"] = function () {
      return (_0x1e0852 = _0x4bcfe1["dynCall_iiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiii"])["apply"](null, arguments);
    }, _0x45a414 = _0x4bcfe1["dynCall_iiijiii"] = function () {
      return (_0x45a414 = _0x4bcfe1["dynCall_iiijiii"] = _0x4bcfe1["asm"]["dynCall_iiijiii"])["apply"](null, arguments);
    }, _0x3f3b60 = _0x4bcfe1["dynCall_iij"] = function () {
      return (_0x3f3b60 = _0x4bcfe1["dynCall_iij"] = _0x4bcfe1["asm"]["dynCall_iij"])["apply"](null, arguments);
    }, _0x5415c9 = _0x4bcfe1["dynCall_i"] = function () {
      return (_0x5415c9 = _0x4bcfe1["dynCall_i"] = _0x4bcfe1["asm"]["dynCall_i"])["apply"](null, arguments);
    }, _0x476e9a = _0x4bcfe1["dynCall_iiiiiii"] = function () {
      return (_0x476e9a = _0x4bcfe1["dynCall_iiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiii"])["apply"](null, arguments);
    }, _0x256fad = _0x4bcfe1["dynCall_jii"] = function () {
      return (_0x256fad = _0x4bcfe1["dynCall_jii"] = _0x4bcfe1["asm"]["dynCall_jii"])["apply"](null, arguments);
    }, _0x23e9d4 = _0x4bcfe1["dynCall_iiiifii"] = function () {
      return (_0x23e9d4 = _0x4bcfe1["dynCall_iiiifii"] = _0x4bcfe1["asm"]["dynCall_iiiifii"])["apply"](null, arguments);
    }, _0x562511 = _0x4bcfe1["dynCall_iiiijii"] = function () {
      return (_0x562511 = _0x4bcfe1["dynCall_iiiijii"] = _0x4bcfe1["asm"]["dynCall_iiiijii"])["apply"](null, arguments);
    }, _0x59e8fd = _0x4bcfe1["dynCall_iiiidii"] = function () {
      return (_0x59e8fd = _0x4bcfe1["dynCall_iiiidii"] = _0x4bcfe1["asm"]["dynCall_iiiidii"])["apply"](null, arguments);
    }, _0x2ffa87 = _0x4bcfe1["dynCall_viji"] = function () {
      return (_0x2ffa87 = _0x4bcfe1["dynCall_viji"] = _0x4bcfe1["asm"]["dynCall_viji"])["apply"](null, arguments);
    }, _0x185a31 = _0x4bcfe1["dynCall_viiji"] = function () {
      return (_0x185a31 = _0x4bcfe1["dynCall_viiji"] = _0x4bcfe1["asm"]["dynCall_viiji"])["apply"](null, arguments);
    }, _0x469d59 = _0x4bcfe1["dynCall_iiifii"] = function () {
      return (_0x469d59 = _0x4bcfe1["dynCall_iiifii"] = _0x4bcfe1["asm"]["dynCall_iiifii"])["apply"](null, arguments);
    }, _0x28da8d = _0x4bcfe1["dynCall_viifi"] = function () {
      return (_0x28da8d = _0x4bcfe1["dynCall_viifi"] = _0x4bcfe1["asm"]["dynCall_viifi"])["apply"](null, arguments);
    }, _0x1a08b0 = _0x4bcfe1["dynCall_vidi"] = function () {
      return (_0x1a08b0 = _0x4bcfe1["dynCall_vidi"] = _0x4bcfe1["asm"]["dynCall_vidi"])["apply"](null, arguments);
    }, _0x5c8bd0 = _0x4bcfe1["dynCall_viidi"] = function () {
      return (_0x5c8bd0 = _0x4bcfe1["dynCall_viidi"] = _0x4bcfe1["asm"]["dynCall_viidi"])["apply"](null, arguments);
    }, _0x1cce28 = _0x4bcfe1["dynCall_vifi"] = function () {
      return (_0x1cce28 = _0x4bcfe1["dynCall_vifi"] = _0x4bcfe1["asm"]["dynCall_vifi"])["apply"](null, arguments);
    }, _0x1df748 = _0x4bcfe1["dynCall_iiiiiiiiii"] = function () {
      return (_0x1df748 = _0x4bcfe1["dynCall_iiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiiii"])["apply"](null, arguments);
    }, _0x17a7d2 = _0x4bcfe1["dynCall_viiiiiii"] = function () {
      return (_0x17a7d2 = _0x4bcfe1["dynCall_viiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiii"])["apply"](null, arguments);
    }, _0x5a9796 = _0x4bcfe1["dynCall_iiiiiiiii"] = function () {
      return (_0x5a9796 = _0x4bcfe1["dynCall_iiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiii"])["apply"](null, arguments);
    }, _0x1e9537 = _0x4bcfe1["dynCall_viiiiiiiii"] = function () {
      return (_0x1e9537 = _0x4bcfe1["dynCall_viiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiii"])["apply"](null, arguments);
    }, _0x5713c6 = _0x4bcfe1["dynCall_jjii"] = function () {
      return (_0x5713c6 = _0x4bcfe1["dynCall_jjii"] = _0x4bcfe1["asm"]["dynCall_jjii"])["apply"](null, arguments);
    }, _0x444c81 = _0x4bcfe1["dynCall_viiiiiiii"] = function () {
      return (_0x444c81 = _0x4bcfe1["dynCall_viiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiii"])["apply"](null, arguments);
    }, _0x2a78a3 = _0x4bcfe1["dynCall_viidii"] = function () {
      return (_0x2a78a3 = _0x4bcfe1["dynCall_viidii"] = _0x4bcfe1["asm"]["dynCall_viidii"])["apply"](null, arguments);
    }, _0x3f350e = _0x4bcfe1["dynCall_jji"] = function () {
      return (_0x3f350e = _0x4bcfe1["dynCall_jji"] = _0x4bcfe1["asm"]["dynCall_jji"])["apply"](null, arguments);
    }, _0x5dd778 = _0x4bcfe1["dynCall_viijii"] = function () {
      return (_0x5dd778 = _0x4bcfe1["dynCall_viijii"] = _0x4bcfe1["asm"]["dynCall_viijii"])["apply"](null, arguments);
    }, _0x1d0e1b = _0x4bcfe1["dynCall_iiji"] = function () {
      return (_0x1d0e1b = _0x4bcfe1["dynCall_iiji"] = _0x4bcfe1["asm"]["dynCall_iiji"])["apply"](null, arguments);
    }, _0x14256a = _0x4bcfe1["dynCall_viiiji"] = function () {
      return (_0x14256a = _0x4bcfe1["dynCall_viiiji"] = _0x4bcfe1["asm"]["dynCall_viiiji"])["apply"](null, arguments);
    }, _0x1c37ed = _0x4bcfe1["dynCall_iijii"] = function () {
      return (_0x1c37ed = _0x4bcfe1["dynCall_iijii"] = _0x4bcfe1["asm"]["dynCall_iijii"])["apply"](null, arguments);
    }, _0x55ac1a = _0x4bcfe1["dynCall_iiddi"] = function () {
      return (_0x55ac1a = _0x4bcfe1["dynCall_iiddi"] = _0x4bcfe1["asm"]["dynCall_iiddi"])["apply"](null, arguments);
    }, _0x515b67 = _0x4bcfe1["dynCall_diidi"] = function () {
      return (_0x515b67 = _0x4bcfe1["dynCall_diidi"] = _0x4bcfe1["asm"]["dynCall_diidi"])["apply"](null, arguments);
    }, _0x55957b = _0x4bcfe1["dynCall_diiii"] = function () {
      return (_0x55957b = _0x4bcfe1["dynCall_diiii"] = _0x4bcfe1["asm"]["dynCall_diiii"])["apply"](null, arguments);
    }, _0x34a387 = _0x4bcfe1["dynCall_jiiii"] = function () {
      return (_0x34a387 = _0x4bcfe1["dynCall_jiiii"] = _0x4bcfe1["asm"]["dynCall_jiiii"])["apply"](null, arguments);
    }, _0x2d43d0 = _0x4bcfe1["dynCall_fiiii"] = function () {
      return (_0x2d43d0 = _0x4bcfe1["dynCall_fiiii"] = _0x4bcfe1["asm"]["dynCall_fiiii"])["apply"](null, arguments);
    }, _0x267b85 = _0x4bcfe1["dynCall_jiiji"] = function () {
      return (_0x267b85 = _0x4bcfe1["dynCall_jiiji"] = _0x4bcfe1["asm"]["dynCall_jiiji"])["apply"](null, arguments);
    }, _0x3d09cb = _0x4bcfe1["dynCall_fiifi"] = function () {
      return (_0x3d09cb = _0x4bcfe1["dynCall_fiifi"] = _0x4bcfe1["asm"]["dynCall_fiifi"])["apply"](null, arguments);
    }, _0x5d2b96 = _0x4bcfe1["dynCall_iiffi"] = function () {
      return (_0x5d2b96 = _0x4bcfe1["dynCall_iiffi"] = _0x4bcfe1["asm"]["dynCall_iiffi"])["apply"](null, arguments);
    }, _0x2f5373 = _0x4bcfe1["dynCall_iiiifi"] = function () {
      return (_0x2f5373 = _0x4bcfe1["dynCall_iiiifi"] = _0x4bcfe1["asm"]["dynCall_iiiifi"])["apply"](null, arguments);
    }, _0x527843 = _0x4bcfe1["dynCall_viiiiiiiiii"] = function () {
      return (_0x527843 = _0x4bcfe1["dynCall_viiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiii"])["apply"](null, arguments);
    }, _0x52ed12 = _0x4bcfe1["dynCall_viiiiiiiiiii"] = function () {
      return (_0x52ed12 = _0x4bcfe1["dynCall_viiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiiii"])["apply"](null, arguments);
    }, _0x2c5a99 = _0x4bcfe1["dynCall_viijji"] = function () {
      return (_0x2c5a99 = _0x4bcfe1["dynCall_viijji"] = _0x4bcfe1["asm"]["dynCall_viijji"])["apply"](null, arguments);
    }, _0xb10a21 = _0x4bcfe1["dynCall_ji"] = function () {
      return (_0xb10a21 = _0x4bcfe1["dynCall_ji"] = _0x4bcfe1["asm"]["dynCall_ji"])["apply"](null, arguments);
    }, _0x92ce44 = _0x4bcfe1["dynCall_jdi"] = function () {
      return (_0x92ce44 = _0x4bcfe1["dynCall_jdi"] = _0x4bcfe1["asm"]["dynCall_jdi"])["apply"](null, arguments);
    }, _0xe60327 = _0x4bcfe1["dynCall_vijiii"] = function () {
      return (_0xe60327 = _0x4bcfe1["dynCall_vijiii"] = _0x4bcfe1["asm"]["dynCall_vijiii"])["apply"](null, arguments);
    }, _0x44420d = _0x4bcfe1["dynCall_ijiii"] = function () {
      return (_0x44420d = _0x4bcfe1["dynCall_ijiii"] = _0x4bcfe1["asm"]["dynCall_ijiii"])["apply"](null, arguments);
    }, _0x329f82 = _0x4bcfe1["dynCall_viijiii"] = function () {
      return (_0x329f82 = _0x4bcfe1["dynCall_viijiii"] = _0x4bcfe1["asm"]["dynCall_viijiii"])["apply"](null, arguments);
    }, _0x1f4297 = _0x4bcfe1["dynCall_vjiii"] = function () {
      return (_0x1f4297 = _0x4bcfe1["dynCall_vjiii"] = _0x4bcfe1["asm"]["dynCall_vjiii"])["apply"](null, arguments);
    }, _0x2fe3ae = _0x4bcfe1["dynCall_vjiiiiii"] = function () {
      return (_0x2fe3ae = _0x4bcfe1["dynCall_vjiiiiii"] = _0x4bcfe1["asm"]["dynCall_vjiiiiii"])["apply"](null, arguments);
    }, _0x14955d = _0x4bcfe1["dynCall_vijiiii"] = function () {
      return (_0x14955d = _0x4bcfe1["dynCall_vijiiii"] = _0x4bcfe1["asm"]["dynCall_vijiiii"])["apply"](null, arguments);
    }, _0x52b293 = _0x4bcfe1["dynCall_vijiiiiii"] = function () {
      return (_0x52b293 = _0x4bcfe1["dynCall_vijiiiiii"] = _0x4bcfe1["asm"]["dynCall_vijiiiiii"])["apply"](null, arguments);
    }, _0x1174c8 = _0x4bcfe1["dynCall_iiijii"] = function () {
      return (_0x1174c8 = _0x4bcfe1["dynCall_iiijii"] = _0x4bcfe1["asm"]["dynCall_iiijii"])["apply"](null, arguments);
    }, _0x79c311 = _0x4bcfe1["dynCall_fi"] = function () {
      return (_0x79c311 = _0x4bcfe1["dynCall_fi"] = _0x4bcfe1["asm"]["dynCall_fi"])["apply"](null, arguments);
    }, _0x4257c1 = _0x4bcfe1["dynCall_viijjii"] = function () {
      return (_0x4257c1 = _0x4bcfe1["dynCall_viijjii"] = _0x4bcfe1["asm"]["dynCall_viijjii"])["apply"](null, arguments);
    }, _0x465c65 = _0x4bcfe1["dynCall_dii"] = function () {
      return (_0x465c65 = _0x4bcfe1["dynCall_dii"] = _0x4bcfe1["asm"]["dynCall_dii"])["apply"](null, arguments);
    }, _0x106722 = _0x4bcfe1["dynCall_viiiifi"] = function () {
      return (_0x106722 = _0x4bcfe1["dynCall_viiiifi"] = _0x4bcfe1["asm"]["dynCall_viiiifi"])["apply"](null, arguments);
    }, _0x392e52 = _0x4bcfe1["dynCall_viiidii"] = function () {
      return (_0x392e52 = _0x4bcfe1["dynCall_viiidii"] = _0x4bcfe1["asm"]["dynCall_viiidii"])["apply"](null, arguments);
    }, _0x33fb98 = _0x4bcfe1["dynCall_jiii"] = function () {
      return (_0x33fb98 = _0x4bcfe1["dynCall_jiii"] = _0x4bcfe1["asm"]["dynCall_jiii"])["apply"](null, arguments);
    }, _0x1eb6f6 = _0x4bcfe1["dynCall_ddiii"] = function () {
      return (_0x1eb6f6 = _0x4bcfe1["dynCall_ddiii"] = _0x4bcfe1["asm"]["dynCall_ddiii"])["apply"](null, arguments);
    }, _0x10241d = _0x4bcfe1["dynCall_ijji"] = function () {
      return (_0x10241d = _0x4bcfe1["dynCall_ijji"] = _0x4bcfe1["asm"]["dynCall_ijji"])["apply"](null, arguments);
    }, _0x307fec = _0x4bcfe1["dynCall_jjji"] = function () {
      return (_0x307fec = _0x4bcfe1["dynCall_jjji"] = _0x4bcfe1["asm"]["dynCall_jjji"])["apply"](null, arguments);
    }, _0x5dbd75 = _0x4bcfe1["dynCall_iiiji"] = function () {
      return (_0x5dbd75 = _0x4bcfe1["dynCall_iiiji"] = _0x4bcfe1["asm"]["dynCall_iiiji"])["apply"](null, arguments);
    }, _0xab2e6f = _0x4bcfe1["dynCall_vijjji"] = function () {
      return (_0xab2e6f = _0x4bcfe1["dynCall_vijjji"] = _0x4bcfe1["asm"]["dynCall_vijjji"])["apply"](null, arguments);
    }, _0x5735e6 = _0x4bcfe1["dynCall_viijiiijiiii"] = function () {
      return (_0x5735e6 = _0x4bcfe1["dynCall_viijiiijiiii"] = _0x4bcfe1["asm"]["dynCall_viijiiijiiii"])["apply"](null, arguments);
    }, _0x40d23a = _0x4bcfe1["dynCall_fii"] = function () {
      return (_0x40d23a = _0x4bcfe1["dynCall_fii"] = _0x4bcfe1["asm"]["dynCall_fii"])["apply"](null, arguments);
    }, _0x1cdbca = _0x4bcfe1["dynCall_ifi"] = function () {
      return (_0x1cdbca = _0x4bcfe1["dynCall_ifi"] = _0x4bcfe1["asm"]["dynCall_ifi"])["apply"](null, arguments);
    }, _0x4fdc1c = _0x4bcfe1["dynCall_idi"] = function () {
      return (_0x4fdc1c = _0x4bcfe1["dynCall_idi"] = _0x4bcfe1["asm"]["dynCall_idi"])["apply"](null, arguments);
    }, _0xea456e = _0x4bcfe1["dynCall_fffi"] = function () {
      return (_0xea456e = _0x4bcfe1["dynCall_fffi"] = _0x4bcfe1["asm"]["dynCall_fffi"])["apply"](null, arguments);
    }, _0x52a567 = _0x4bcfe1["dynCall_dddi"] = function () {
      return (_0x52a567 = _0x4bcfe1["dynCall_dddi"] = _0x4bcfe1["asm"]["dynCall_dddi"])["apply"](null, arguments);
    }, _0x1e7d4b = _0x4bcfe1["dynCall_fiii"] = function () {
      return (_0x1e7d4b = _0x4bcfe1["dynCall_fiii"] = _0x4bcfe1["asm"]["dynCall_fiii"])["apply"](null, arguments);
    }, _0x4892fb = _0x4bcfe1["dynCall_diii"] = function () {
      return (_0x4892fb = _0x4bcfe1["dynCall_diii"] = _0x4bcfe1["asm"]["dynCall_diii"])["apply"](null, arguments);
    }, _0x43d114 = _0x4bcfe1["dynCall_iidi"] = function () {
      return (_0x43d114 = _0x4bcfe1["dynCall_iidi"] = _0x4bcfe1["asm"]["dynCall_iidi"])["apply"](null, arguments);
    }, _0x3b09f6 = _0x4bcfe1["dynCall_iifi"] = function () {
      return (_0x3b09f6 = _0x4bcfe1["dynCall_iifi"] = _0x4bcfe1["asm"]["dynCall_iifi"])["apply"](null, arguments);
    }, _0x5422df = _0x4bcfe1["dynCall_dji"] = function () {
      return (_0x5422df = _0x4bcfe1["dynCall_dji"] = _0x4bcfe1["asm"]["dynCall_dji"])["apply"](null, arguments);
    }, _0x2ce225 = _0x4bcfe1["dynCall_iji"] = function () {
      return (_0x2ce225 = _0x4bcfe1["dynCall_iji"] = _0x4bcfe1["asm"]["dynCall_iji"])["apply"](null, arguments);
    }, _0xba5a94 = _0x4bcfe1["dynCall_vifii"] = function () {
      return (_0xba5a94 = _0x4bcfe1["dynCall_vifii"] = _0x4bcfe1["asm"]["dynCall_vifii"])["apply"](null, arguments);
    }, _0xdcba70 = _0x4bcfe1["dynCall_viiiifii"] = function () {
      return (_0xdcba70 = _0x4bcfe1["dynCall_viiiifii"] = _0x4bcfe1["asm"]["dynCall_viiiifii"])["apply"](null, arguments);
    }, _0x22716e = _0x4bcfe1["dynCall_viiffi"] = function () {
      return (_0x22716e = _0x4bcfe1["dynCall_viiffi"] = _0x4bcfe1["asm"]["dynCall_viiffi"])["apply"](null, arguments);
    }, _0x3a204e = _0x4bcfe1["dynCall_fifi"] = function () {
      return (_0x3a204e = _0x4bcfe1["dynCall_fifi"] = _0x4bcfe1["asm"]["dynCall_fifi"])["apply"](null, arguments);
    }, _0x287019 = _0x4bcfe1["dynCall_fiffi"] = function () {
      return (_0x287019 = _0x4bcfe1["dynCall_fiffi"] = _0x4bcfe1["asm"]["dynCall_fiffi"])["apply"](null, arguments);
    }, _0x4ef2ab = _0x4bcfe1["dynCall_fifffi"] = function () {
      return (_0x4ef2ab = _0x4bcfe1["dynCall_fifffi"] = _0x4bcfe1["asm"]["dynCall_fifffi"])["apply"](null, arguments);
    }, _0x107bd = _0x4bcfe1["dynCall_viiiijiii"] = function () {
      return (_0x107bd = _0x4bcfe1["dynCall_viiiijiii"] = _0x4bcfe1["asm"]["dynCall_viiiijiii"])["apply"](null, arguments);
    }, _0x5961cd = _0x4bcfe1["dynCall_iiiiij"] = function () {
      return (_0x5961cd = _0x4bcfe1["dynCall_iiiiij"] = _0x4bcfe1["asm"]["dynCall_iiiiij"])["apply"](null, arguments);
    }, _0x5616c4 = _0x4bcfe1["dynCall_iijiiii"] = function () {
      return (_0x5616c4 = _0x4bcfe1["dynCall_iijiiii"] = _0x4bcfe1["asm"]["dynCall_iijiiii"])["apply"](null, arguments);
    }, _0x82a43b = _0x4bcfe1["dynCall_jijiii"] = function () {
      return (_0x82a43b = _0x4bcfe1["dynCall_jijiii"] = _0x4bcfe1["asm"]["dynCall_jijiii"])["apply"](null, arguments);
    }, _0x11dcbc = _0x4bcfe1["dynCall_iijiiiiii"] = function () {
      return (_0x11dcbc = _0x4bcfe1["dynCall_iijiiiiii"] = _0x4bcfe1["asm"]["dynCall_iijiiiiii"])["apply"](null, arguments);
    }, _0xa0c2b6 = _0x4bcfe1["dynCall_iijjiiiiii"] = function () {
      return (_0xa0c2b6 = _0x4bcfe1["dynCall_iijjiiiiii"] = _0x4bcfe1["asm"]["dynCall_iijjiiiiii"])["apply"](null, arguments);
    }, _0x2db8b2 = _0x4bcfe1["dynCall_iiiijjii"] = function () {
      return (_0x2db8b2 = _0x4bcfe1["dynCall_iiiijjii"] = _0x4bcfe1["asm"]["dynCall_iiiijjii"])["apply"](null, arguments);
    }, _0x5a2fd2 = _0x4bcfe1["dynCall_viifii"] = function () {
      return (_0x5a2fd2 = _0x4bcfe1["dynCall_viifii"] = _0x4bcfe1["asm"]["dynCall_viifii"])["apply"](null, arguments);
    }, _0x11bc7b = _0x4bcfe1["dynCall_iiifi"] = function () {
      return (_0x11bc7b = _0x4bcfe1["dynCall_iiifi"] = _0x4bcfe1["asm"]["dynCall_iiifi"])["apply"](null, arguments);
    }, _0xd00f09 = _0x4bcfe1["dynCall_fiffffi"] = function () {
      return (_0xd00f09 = _0x4bcfe1["dynCall_fiffffi"] = _0x4bcfe1["asm"]["dynCall_fiffffi"])["apply"](null, arguments);
    }, _0x16daf4 = _0x4bcfe1["dynCall_iiiiji"] = function () {
      return (_0x16daf4 = _0x4bcfe1["dynCall_iiiiji"] = _0x4bcfe1["asm"]["dynCall_iiiiji"])["apply"](null, arguments);
    }, _0x1d1cb6 = _0x4bcfe1["dynCall_viiiiiiiiiiiii"] = function () {
      return (_0x1d1cb6 = _0x4bcfe1["dynCall_viiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x4dc0e1 = _0x4bcfe1["dynCall_viiiiiiiiiiii"] = function () {
      return (_0x4dc0e1 = _0x4bcfe1["dynCall_viiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x2cafc2 = _0x4bcfe1["dynCall_viiiiiiiiiiiiii"] = function () {
      return (_0x2cafc2 = _0x4bcfe1["dynCall_viiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x49e505 = _0x4bcfe1["dynCall_viiiiiiiiiiiiiii"] = function () {
      return (_0x49e505 = _0x4bcfe1["dynCall_viiiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x580621 = _0x4bcfe1["dynCall_viiiiiiiiiiiiiiii"] = function () {
      return (_0x580621 = _0x4bcfe1["dynCall_viiiiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x403bee = _0x4bcfe1["dynCall_viiiiiiiiiiiiiiiii"] = function () {
      return (_0x403bee = _0x4bcfe1["dynCall_viiiiiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x1eb96d = _0x4bcfe1["dynCall_viiiiiiiiiiiiiiiiii"] = function () {
      return (_0x1eb96d = _0x4bcfe1["dynCall_viiiiiiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x263173 = _0x4bcfe1["dynCall_vijii"] = function () {
      return (_0x263173 = _0x4bcfe1["dynCall_vijii"] = _0x4bcfe1["asm"]["dynCall_vijii"])["apply"](null, arguments);
    }, _0x28bd4a = _0x4bcfe1["dynCall_viiidi"] = function () {
      return (_0x28bd4a = _0x4bcfe1["dynCall_viiidi"] = _0x4bcfe1["asm"]["dynCall_viiidi"])["apply"](null, arguments);
    }, _0x2b7ac4 = _0x4bcfe1["dynCall_viiifi"] = function () {
      return (_0x2b7ac4 = _0x4bcfe1["dynCall_viiifi"] = _0x4bcfe1["asm"]["dynCall_viiifi"])["apply"](null, arguments);
    }, _0x1323e7 = _0x4bcfe1["dynCall_vijijii"] = function () {
      return (_0x1323e7 = _0x4bcfe1["dynCall_vijijii"] = _0x4bcfe1["asm"]["dynCall_vijijii"])["apply"](null, arguments);
    }, _0x77da4f = _0x4bcfe1["dynCall_viiiiiiiiiiiiiiiiiii"] = function () {
      return (_0x77da4f = _0x4bcfe1["dynCall_viiiiiiiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x94ce4b = _0x4bcfe1["dynCall_didi"] = function () {
      return (_0x94ce4b = _0x4bcfe1["dynCall_didi"] = _0x4bcfe1["asm"]["dynCall_didi"])["apply"](null, arguments);
    }, _0x57606d = _0x4bcfe1["dynCall_jijii"] = function () {
      return (_0x57606d = _0x4bcfe1["dynCall_jijii"] = _0x4bcfe1["asm"]["dynCall_jijii"])["apply"](null, arguments);
    }, _0x1ab10f = _0x4bcfe1["dynCall_jidi"] = function () {
      return (_0x1ab10f = _0x4bcfe1["dynCall_jidi"] = _0x4bcfe1["asm"]["dynCall_jidi"])["apply"](null, arguments);
    }, _0x519b13 = _0x4bcfe1["dynCall_fiiffi"] = function () {
      return (_0x519b13 = _0x4bcfe1["dynCall_fiiffi"] = _0x4bcfe1["asm"]["dynCall_fiiffi"])["apply"](null, arguments);
    }, _0x49e422 = _0x4bcfe1["dynCall_viiififii"] = function () {
      return (_0x49e422 = _0x4bcfe1["dynCall_viiififii"] = _0x4bcfe1["asm"]["dynCall_viiififii"])["apply"](null, arguments);
    }, _0x37d70b = _0x4bcfe1["dynCall_iijji"] = function () {
      return (_0x37d70b = _0x4bcfe1["dynCall_iijji"] = _0x4bcfe1["asm"]["dynCall_iijji"])["apply"](null, arguments);
    }, _0x2f4f97 = _0x4bcfe1["dynCall_j"] = function () {
      return (_0x2f4f97 = _0x4bcfe1["dynCall_j"] = _0x4bcfe1["asm"]["dynCall_j"])["apply"](null, arguments);
    }, _0x424a42 = _0x4bcfe1["dynCall_iiiiiiiiiji"] = function () {
      return (_0x424a42 = _0x4bcfe1["dynCall_iiiiiiiiiji"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiiiji"])["apply"](null, arguments);
    }, _0x1a5a5b = _0x4bcfe1["dynCall_vji"] = function () {
      return (_0x1a5a5b = _0x4bcfe1["dynCall_vji"] = _0x4bcfe1["asm"]["dynCall_vji"])["apply"](null, arguments);
    }, _0x591085 = _0x4bcfe1["dynCall_vjjjiiii"] = function () {
      return (_0x591085 = _0x4bcfe1["dynCall_vjjjiiii"] = _0x4bcfe1["asm"]["dynCall_vjjjiiii"])["apply"](null, arguments);
    }, _0x196001 = _0x4bcfe1["dynCall_vjiiiii"] = function () {
      return (_0x196001 = _0x4bcfe1["dynCall_vjiiiii"] = _0x4bcfe1["asm"]["dynCall_vjiiiii"])["apply"](null, arguments);
    }, _0x2cb1ee = _0x4bcfe1["dynCall_iijiii"] = function () {
      return (_0x2cb1ee = _0x4bcfe1["dynCall_iijiii"] = _0x4bcfe1["asm"]["dynCall_iijiii"])["apply"](null, arguments);
    }, _0x4866bc = _0x4bcfe1["dynCall_jiiiii"] = function () {
      return (_0x4866bc = _0x4bcfe1["dynCall_jiiiii"] = _0x4bcfe1["asm"]["dynCall_jiiiii"])["apply"](null, arguments);
    }, _0x460671 = _0x4bcfe1["dynCall_viffi"] = function () {
      return (_0x460671 = _0x4bcfe1["dynCall_viffi"] = _0x4bcfe1["asm"]["dynCall_viffi"])["apply"](null, arguments);
    }, _0x372774 = _0x4bcfe1["dynCall_vffi"] = function () {
      return (_0x372774 = _0x4bcfe1["dynCall_vffi"] = _0x4bcfe1["asm"]["dynCall_vffi"])["apply"](null, arguments);
    }, _0x2d59c0 = _0x4bcfe1["dynCall_viiifiii"] = function () {
      return (_0x2d59c0 = _0x4bcfe1["dynCall_viiifiii"] = _0x4bcfe1["asm"]["dynCall_viiifiii"])["apply"](null, arguments);
    }, _0x38b795 = _0x4bcfe1["dynCall_vifiiiii"] = function () {
      return (_0x38b795 = _0x4bcfe1["dynCall_vifiiiii"] = _0x4bcfe1["asm"]["dynCall_vifiiiii"])["apply"](null, arguments);
    }, _0x513af6 = _0x4bcfe1["dynCall_viffffiiii"] = function () {
      return (_0x513af6 = _0x4bcfe1["dynCall_viffffiiii"] = _0x4bcfe1["asm"]["dynCall_viffffiiii"])["apply"](null, arguments);
    }, _0x5c76da = _0x4bcfe1["dynCall_vfiiiii"] = function () {
      return (_0x5c76da = _0x4bcfe1["dynCall_vfiiiii"] = _0x4bcfe1["asm"]["dynCall_vfiiiii"])["apply"](null, arguments);
    }, _0x51d61a = _0x4bcfe1["dynCall_vffffiiii"] = function () {
      return (_0x51d61a = _0x4bcfe1["dynCall_vffffiiii"] = _0x4bcfe1["asm"]["dynCall_vffffiiii"])["apply"](null, arguments);
    }, _0x540fcd = _0x4bcfe1["dynCall_iifffi"] = function () {
      return (_0x540fcd = _0x4bcfe1["dynCall_iifffi"] = _0x4bcfe1["asm"]["dynCall_iifffi"])["apply"](null, arguments);
    }, _0x4188b5 = _0x4bcfe1["dynCall_iiffffi"] = function () {
      return (_0x4188b5 = _0x4bcfe1["dynCall_iiffffi"] = _0x4bcfe1["asm"]["dynCall_iiffffi"])["apply"](null, arguments);
    }, _0x218fe9 = _0x4bcfe1["dynCall_iifii"] = function () {
      return (_0x218fe9 = _0x4bcfe1["dynCall_iifii"] = _0x4bcfe1["asm"]["dynCall_iifii"])["apply"](null, arguments);
    }, _0x49063b = _0x4bcfe1["dynCall_viiiifiii"] = function () {
      return (_0x49063b = _0x4bcfe1["dynCall_viiiifiii"] = _0x4bcfe1["asm"]["dynCall_viiiifiii"])["apply"](null, arguments);
    }, _0x4ec152 = _0x4bcfe1["dynCall_viiiiiiiffiii"] = function () {
      return (_0x4ec152 = _0x4bcfe1["dynCall_viiiiiiiffiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiffiii"])["apply"](null, arguments);
    }, _0x1c3509 = _0x4bcfe1["dynCall_viifffi"] = function () {
      return (_0x1c3509 = _0x4bcfe1["dynCall_viifffi"] = _0x4bcfe1["asm"]["dynCall_viifffi"])["apply"](null, arguments);
    }, _0x39a832 = _0x4bcfe1["dynCall_iiiiffi"] = function () {
      return (_0x39a832 = _0x4bcfe1["dynCall_iiiiffi"] = _0x4bcfe1["asm"]["dynCall_iiiiffi"])["apply"](null, arguments);
    }, _0x50f087 = _0x4bcfe1["dynCall_iiiiiffi"] = function () {
      return (_0x50f087 = _0x4bcfe1["dynCall_iiiiiffi"] = _0x4bcfe1["asm"]["dynCall_iiiiiffi"])["apply"](null, arguments);
    }, _0x4f3575 = _0x4bcfe1["dynCall_viiffffi"] = function () {
      return (_0x4f3575 = _0x4bcfe1["dynCall_viiffffi"] = _0x4bcfe1["asm"]["dynCall_viiffffi"])["apply"](null, arguments);
    }, _0x1e9cea = _0x4bcfe1["dynCall_viifffffffi"] = function () {
      return (_0x1e9cea = _0x4bcfe1["dynCall_viifffffffi"] = _0x4bcfe1["asm"]["dynCall_viifffffffi"])["apply"](null, arguments);
    }, _0x5d7d24 = _0x4bcfe1["dynCall_viifffffffffi"] = function () {
      return (_0x5d7d24 = _0x4bcfe1["dynCall_viifffffffffi"] = _0x4bcfe1["asm"]["dynCall_viifffffffffi"])["apply"](null, arguments);
    }, _0x2e7a9b = _0x4bcfe1["dynCall_viiiffi"] = function () {
      return (_0x2e7a9b = _0x4bcfe1["dynCall_viiiffi"] = _0x4bcfe1["asm"]["dynCall_viiiffi"])["apply"](null, arguments);
    }, _0x1f96e6 = _0x4bcfe1["dynCall_viiiiffi"] = function () {
      return (_0x1f96e6 = _0x4bcfe1["dynCall_viiiiffi"] = _0x4bcfe1["asm"]["dynCall_viiiiffi"])["apply"](null, arguments);
    }, _0x416f96 = _0x4bcfe1["dynCall_viiiiifi"] = function () {
      return (_0x416f96 = _0x4bcfe1["dynCall_viiiiifi"] = _0x4bcfe1["asm"]["dynCall_viiiiifi"])["apply"](null, arguments);
    }, _0x2b57d2 = _0x4bcfe1["dynCall_viiifii"] = function () {
      return (_0x2b57d2 = _0x4bcfe1["dynCall_viiifii"] = _0x4bcfe1["asm"]["dynCall_viiifii"])["apply"](null, arguments);
    }, _0xa67dc1 = _0x4bcfe1["dynCall_ffi"] = function () {
      return (_0xa67dc1 = _0x4bcfe1["dynCall_ffi"] = _0x4bcfe1["asm"]["dynCall_ffi"])["apply"](null, arguments);
    }, _0x315404 = _0x4bcfe1["dynCall_fiiffffi"] = function () {
      return (_0x315404 = _0x4bcfe1["dynCall_fiiffffi"] = _0x4bcfe1["asm"]["dynCall_fiiffffi"])["apply"](null, arguments);
    }, _0x2d6a64 = _0x4bcfe1["dynCall_viffffi"] = function () {
      return (_0x2d6a64 = _0x4bcfe1["dynCall_viffffi"] = _0x4bcfe1["asm"]["dynCall_viffffi"])["apply"](null, arguments);
    }, _0x2b4d5f = _0x4bcfe1["dynCall_viiiffffi"] = function () {
      return (_0x2b4d5f = _0x4bcfe1["dynCall_viiiffffi"] = _0x4bcfe1["asm"]["dynCall_viiiffffi"])["apply"](null, arguments);
    }, _0x1c6c6b = _0x4bcfe1["dynCall_viffffii"] = function () {
      return (_0x1c6c6b = _0x4bcfe1["dynCall_viffffii"] = _0x4bcfe1["asm"]["dynCall_viffffii"])["apply"](null, arguments);
    }, _0x397087 = _0x4bcfe1["dynCall_viffii"] = function () {
      return (_0x397087 = _0x4bcfe1["dynCall_viffii"] = _0x4bcfe1["asm"]["dynCall_viffii"])["apply"](null, arguments);
    }, _0x2088a0 = _0x4bcfe1["dynCall_vifffii"] = function () {
      return (_0x2088a0 = _0x4bcfe1["dynCall_vifffii"] = _0x4bcfe1["asm"]["dynCall_vifffii"])["apply"](null, arguments);
    }, _0x5f06ac = _0x4bcfe1["dynCall_viiiiiiifi"] = function () {
      return (_0x5f06ac = _0x4bcfe1["dynCall_viiiiiiifi"] = _0x4bcfe1["asm"]["dynCall_viiiiiiifi"])["apply"](null, arguments);
    }, _0x14227d = _0x4bcfe1["dynCall_vifffffii"] = function () {
      return (_0x14227d = _0x4bcfe1["dynCall_vifffffii"] = _0x4bcfe1["asm"]["dynCall_vifffffii"])["apply"](null, arguments);
    }, _0x46589e = _0x4bcfe1["dynCall_viiffiffi"] = function () {
      return (_0x46589e = _0x4bcfe1["dynCall_viiffiffi"] = _0x4bcfe1["asm"]["dynCall_viiffiffi"])["apply"](null, arguments);
    }, _0x55511b = _0x4bcfe1["dynCall_viiffifi"] = function () {
      return (_0x55511b = _0x4bcfe1["dynCall_viiffifi"] = _0x4bcfe1["asm"]["dynCall_viiffifi"])["apply"](null, arguments);
    }, _0x9e2875 = _0x4bcfe1["dynCall_viiffii"] = function () {
      return (_0x9e2875 = _0x4bcfe1["dynCall_viiffii"] = _0x4bcfe1["asm"]["dynCall_viiffii"])["apply"](null, arguments);
    }, _0x379a1e = _0x4bcfe1["dynCall_viifffiffi"] = function () {
      return (_0x379a1e = _0x4bcfe1["dynCall_viifffiffi"] = _0x4bcfe1["asm"]["dynCall_viifffiffi"])["apply"](null, arguments);
    }, _0x361710 = _0x4bcfe1["dynCall_viifffifi"] = function () {
      return (_0x361710 = _0x4bcfe1["dynCall_viifffifi"] = _0x4bcfe1["asm"]["dynCall_viifffifi"])["apply"](null, arguments);
    }, _0x1583d1 = _0x4bcfe1["dynCall_viifffii"] = function () {
      return (_0x1583d1 = _0x4bcfe1["dynCall_viifffii"] = _0x4bcfe1["asm"]["dynCall_viifffii"])["apply"](null, arguments);
    }, _0x32d4e6 = _0x4bcfe1["dynCall_viiffffiffi"] = function () {
      return (_0x32d4e6 = _0x4bcfe1["dynCall_viiffffiffi"] = _0x4bcfe1["asm"]["dynCall_viiffffiffi"])["apply"](null, arguments);
    }, _0x5bfa29 = _0x4bcfe1["dynCall_viiffffifi"] = function () {
      return (_0x5bfa29 = _0x4bcfe1["dynCall_viiffffifi"] = _0x4bcfe1["asm"]["dynCall_viiffffifi"])["apply"](null, arguments);
    }, _0x7d8721 = _0x4bcfe1["dynCall_viiffffii"] = function () {
      return (_0x7d8721 = _0x4bcfe1["dynCall_viiffffii"] = _0x4bcfe1["asm"]["dynCall_viiffffii"])["apply"](null, arguments);
    }, _0x5d6d14 = _0x4bcfe1["dynCall_iififfi"] = function () {
      return (_0x5d6d14 = _0x4bcfe1["dynCall_iififfi"] = _0x4bcfe1["asm"]["dynCall_iififfi"])["apply"](null, arguments);
    }, _0x32547d = _0x4bcfe1["dynCall_vifiii"] = function () {
      return (_0x32547d = _0x4bcfe1["dynCall_vifiii"] = _0x4bcfe1["asm"]["dynCall_vifiii"])["apply"](null, arguments);
    }, _0x8d15db = _0x4bcfe1["dynCall_iiiiffii"] = function () {
      return (_0x8d15db = _0x4bcfe1["dynCall_iiiiffii"] = _0x4bcfe1["asm"]["dynCall_iiiiffii"])["apply"](null, arguments);
    }, _0x347aae = _0x4bcfe1["dynCall_iifiii"] = function () {
      return (_0x347aae = _0x4bcfe1["dynCall_iifiii"] = _0x4bcfe1["asm"]["dynCall_iifiii"])["apply"](null, arguments);
    }, _0x4c1b38 = _0x4bcfe1["dynCall_iiffiii"] = function () {
      return (_0x4c1b38 = _0x4bcfe1["dynCall_iiffiii"] = _0x4bcfe1["asm"]["dynCall_iiffiii"])["apply"](null, arguments);
    }, _0x4e994b = _0x4bcfe1["dynCall_iifffiii"] = function () {
      return (_0x4e994b = _0x4bcfe1["dynCall_iifffiii"] = _0x4bcfe1["asm"]["dynCall_iifffiii"])["apply"](null, arguments);
    }, _0x1cd92f = _0x4bcfe1["dynCall_vfi"] = function () {
      return (_0x1cd92f = _0x4bcfe1["dynCall_vfi"] = _0x4bcfe1["asm"]["dynCall_vfi"])["apply"](null, arguments);
    }, _0x1c73d8 = _0x4bcfe1["dynCall_ffffi"] = function () {
      return (_0x1c73d8 = _0x4bcfe1["dynCall_ffffi"] = _0x4bcfe1["asm"]["dynCall_ffffi"])["apply"](null, arguments);
    }, _0x322c1b = _0x4bcfe1["dynCall_ffffffi"] = function () {
      return (_0x322c1b = _0x4bcfe1["dynCall_ffffffi"] = _0x4bcfe1["asm"]["dynCall_ffffffi"])["apply"](null, arguments);
    }, _0x485f65 = _0x4bcfe1["dynCall_ffffffffi"] = function () {
      return (_0x485f65 = _0x4bcfe1["dynCall_ffffffffi"] = _0x4bcfe1["asm"]["dynCall_ffffffffi"])["apply"](null, arguments);
    }, _0x388bfd = _0x4bcfe1["dynCall_fiifffi"] = function () {
      return (_0x388bfd = _0x4bcfe1["dynCall_fiifffi"] = _0x4bcfe1["asm"]["dynCall_fiifffi"])["apply"](null, arguments);
    }, _0x1b72a7 = _0x4bcfe1["dynCall_fffii"] = function () {
      return (_0x1b72a7 = _0x4bcfe1["dynCall_fffii"] = _0x4bcfe1["asm"]["dynCall_fffii"])["apply"](null, arguments);
    }, _0x22ef40 = _0x4bcfe1["dynCall_vifffi"] = function () {
      return (_0x22ef40 = _0x4bcfe1["dynCall_vifffi"] = _0x4bcfe1["asm"]["dynCall_vifffi"])["apply"](null, arguments);
    }, _0x350dae = _0x4bcfe1["dynCall_viffiii"] = function () {
      return (_0x350dae = _0x4bcfe1["dynCall_viffiii"] = _0x4bcfe1["asm"]["dynCall_viffiii"])["apply"](null, arguments);
    }, _0x1c56d2 = _0x4bcfe1["dynCall_iiiifffii"] = function () {
      return (_0x1c56d2 = _0x4bcfe1["dynCall_iiiifffii"] = _0x4bcfe1["asm"]["dynCall_iiiifffii"])["apply"](null, arguments);
    }, _0x2d4398 = _0x4bcfe1["dynCall_fiiiifffi"] = function () {
      return (_0x2d4398 = _0x4bcfe1["dynCall_fiiiifffi"] = _0x4bcfe1["asm"]["dynCall_fiiiifffi"])["apply"](null, arguments);
    }, _0x22ee3d = _0x4bcfe1["dynCall_viifffffi"] = function () {
      return (_0x22ee3d = _0x4bcfe1["dynCall_viifffffi"] = _0x4bcfe1["asm"]["dynCall_viifffffi"])["apply"](null, arguments);
    }, _0x396599 = _0x4bcfe1["dynCall_fiffii"] = function () {
      return (_0x396599 = _0x4bcfe1["dynCall_fiffii"] = _0x4bcfe1["asm"]["dynCall_fiffii"])["apply"](null, arguments);
    }, _0x486aca = _0x4bcfe1["dynCall_viiiffiii"] = function () {
      return (_0x486aca = _0x4bcfe1["dynCall_viiiffiii"] = _0x4bcfe1["asm"]["dynCall_viiiffiii"])["apply"](null, arguments);
    }, _0x4066c8 = _0x4bcfe1["dynCall_fiiiffii"] = function () {
      return (_0x4066c8 = _0x4bcfe1["dynCall_fiiiffii"] = _0x4bcfe1["asm"]["dynCall_fiiiffii"])["apply"](null, arguments);
    }, _0x3f090c = _0x4bcfe1["dynCall_fiiiiiii"] = function () {
      return (_0x3f090c = _0x4bcfe1["dynCall_fiiiiiii"] = _0x4bcfe1["asm"]["dynCall_fiiiiiii"])["apply"](null, arguments);
    }, _0x16f083 = _0x4bcfe1["dynCall_vijijijii"] = function () {
      return (_0x16f083 = _0x4bcfe1["dynCall_vijijijii"] = _0x4bcfe1["asm"]["dynCall_vijijijii"])["apply"](null, arguments);
    }, _0x316441 = _0x4bcfe1["dynCall_iiidiiii"] = function () {
      return (_0x316441 = _0x4bcfe1["dynCall_iiidiiii"] = _0x4bcfe1["asm"]["dynCall_iiidiiii"])["apply"](null, arguments);
    }, _0x40acab = _0x4bcfe1["dynCall_viiiijii"] = function () {
      return (_0x40acab = _0x4bcfe1["dynCall_viiiijii"] = _0x4bcfe1["asm"]["dynCall_viiiijii"])["apply"](null, arguments);
    }, _0x7bcedf = _0x4bcfe1["dynCall_viiijiii"] = function () {
      return (_0x7bcedf = _0x4bcfe1["dynCall_viiijiii"] = _0x4bcfe1["asm"]["dynCall_viiijiii"])["apply"](null, arguments);
    }, _0x714468 = _0x4bcfe1["dynCall_iijiiiii"] = function () {
      return (_0x714468 = _0x4bcfe1["dynCall_iijiiiii"] = _0x4bcfe1["asm"]["dynCall_iijiiiii"])["apply"](null, arguments);
    }, _0x4f7f6f = _0x4bcfe1["dynCall_iijiiiiiiii"] = function () {
      return (_0x4f7f6f = _0x4bcfe1["dynCall_iijiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iijiiiiiiii"])["apply"](null, arguments);
    }, _0x2b50ad = _0x4bcfe1["dynCall_viiiijiiiii"] = function () {
      return (_0x2b50ad = _0x4bcfe1["dynCall_viiiijiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiijiiiii"])["apply"](null, arguments);
    }, _0x3ba627 = _0x4bcfe1["dynCall_iiiiiiiiiii"] = function () {
      return (_0x3ba627 = _0x4bcfe1["dynCall_iiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiiiii"])["apply"](null, arguments);
    }, _0x45452d = _0x4bcfe1["dynCall_vidii"] = function () {
      return (_0x45452d = _0x4bcfe1["dynCall_vidii"] = _0x4bcfe1["asm"]["dynCall_vidii"])["apply"](null, arguments);
    }, _0x3b05aa = _0x4bcfe1["dynCall_viiidiiiii"] = function () {
      return (_0x3b05aa = _0x4bcfe1["dynCall_viiidiiiii"] = _0x4bcfe1["asm"]["dynCall_viiidiiiii"])["apply"](null, arguments);
    }, _0x530670 = _0x4bcfe1["dynCall_vifiiii"] = function () {
      return (_0x530670 = _0x4bcfe1["dynCall_vifiiii"] = _0x4bcfe1["asm"]["dynCall_vifiiii"])["apply"](null, arguments);
    }, _0x1538c5 = _0x4bcfe1["dynCall_iiiffi"] = function () {
      return (_0x1538c5 = _0x4bcfe1["dynCall_iiiffi"] = _0x4bcfe1["asm"]["dynCall_iiiffi"])["apply"](null, arguments);
    }, _0x13798d = _0x4bcfe1["dynCall_iiffii"] = function () {
      return (_0x13798d = _0x4bcfe1["dynCall_iiffii"] = _0x4bcfe1["asm"]["dynCall_iiffii"])["apply"](null, arguments);
    }, _0x2febed = _0x4bcfe1["dynCall_iiifiii"] = function () {
      return (_0x2febed = _0x4bcfe1["dynCall_iiifiii"] = _0x4bcfe1["asm"]["dynCall_iiifiii"])["apply"](null, arguments);
    }, _0x57fb42 = _0x4bcfe1["dynCall_iiififii"] = function () {
      return (_0x57fb42 = _0x4bcfe1["dynCall_iiififii"] = _0x4bcfe1["asm"]["dynCall_iiififii"])["apply"](null, arguments);
    }, _0x49ec71 = _0x4bcfe1["dynCall_iiifiiiii"] = function () {
      return (_0x49ec71 = _0x4bcfe1["dynCall_iiifiiiii"] = _0x4bcfe1["asm"]["dynCall_iiifiiiii"])["apply"](null, arguments);
    }, _0x2f76b6 = _0x4bcfe1["dynCall_iiffifiiii"] = function () {
      return (_0x2f76b6 = _0x4bcfe1["dynCall_iiffifiiii"] = _0x4bcfe1["asm"]["dynCall_iiffifiiii"])["apply"](null, arguments);
    }, _0x8416cd = _0x4bcfe1["dynCall_iifiifiiii"] = function () {
      return (_0x8416cd = _0x4bcfe1["dynCall_iifiifiiii"] = _0x4bcfe1["asm"]["dynCall_iifiifiiii"])["apply"](null, arguments);
    }, _0x394414 = _0x4bcfe1["dynCall_iiiifiii"] = function () {
      return (_0x394414 = _0x4bcfe1["dynCall_iiiifiii"] = _0x4bcfe1["asm"]["dynCall_iiiifiii"])["apply"](null, arguments);
    }, _0x1af8c6 = _0x4bcfe1["dynCall_iiifiiii"] = function () {
      return (_0x1af8c6 = _0x4bcfe1["dynCall_iiifiiii"] = _0x4bcfe1["asm"]["dynCall_iiifiiii"])["apply"](null, arguments);
    }, _0x1859ff = _0x4bcfe1["dynCall_iiiffiii"] = function () {
      return (_0x1859ff = _0x4bcfe1["dynCall_iiiffiii"] = _0x4bcfe1["asm"]["dynCall_iiiffiii"])["apply"](null, arguments);
    }, _0x20086e = _0x4bcfe1["dynCall_iiiiifii"] = function () {
      return (_0x20086e = _0x4bcfe1["dynCall_iiiiifii"] = _0x4bcfe1["asm"]["dynCall_iiiiifii"])["apply"](null, arguments);
    }, _0x336aa9 = _0x4bcfe1["dynCall_iifiifffii"] = function () {
      return (_0x336aa9 = _0x4bcfe1["dynCall_iifiifffii"] = _0x4bcfe1["asm"]["dynCall_iifiifffii"])["apply"](null, arguments);
    }, _0x5ab2d0 = _0x4bcfe1["dynCall_fiifii"] = function () {
      return (_0x5ab2d0 = _0x4bcfe1["dynCall_fiifii"] = _0x4bcfe1["asm"]["dynCall_fiifii"])["apply"](null, arguments);
    }, _0x478bdc = _0x4bcfe1["dynCall_viiiiiifiifiiii"] = function () {
      return (_0x478bdc = _0x4bcfe1["dynCall_viiiiiifiifiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiifiifiiii"])["apply"](null, arguments);
    }, _0xb6e8fc = _0x4bcfe1["dynCall_iiffffiii"] = function () {
      return (_0xb6e8fc = _0x4bcfe1["dynCall_iiffffiii"] = _0x4bcfe1["asm"]["dynCall_iiffffiii"])["apply"](null, arguments);
    }, _0x29c7bd = _0x4bcfe1["dynCall_iiidfi"] = function () {
      return (_0x29c7bd = _0x4bcfe1["dynCall_iiidfi"] = _0x4bcfe1["asm"]["dynCall_iiidfi"])["apply"](null, arguments);
    }, _0x4da97d = _0x4bcfe1["dynCall_iiijfi"] = function () {
      return (_0x4da97d = _0x4bcfe1["dynCall_iiijfi"] = _0x4bcfe1["asm"]["dynCall_iiijfi"])["apply"](null, arguments);
    }, _0x56825d = _0x4bcfe1["dynCall_iiiffii"] = function () {
      return (_0x56825d = _0x4bcfe1["dynCall_iiiffii"] = _0x4bcfe1["asm"]["dynCall_iiiffii"])["apply"](null, arguments);
    }, _0x1e5fb3 = _0x4bcfe1["dynCall_iiiififi"] = function () {
      return (_0x1e5fb3 = _0x4bcfe1["dynCall_iiiififi"] = _0x4bcfe1["asm"]["dynCall_iiiififi"])["apply"](null, arguments);
    }, _0x5b7a33 = _0x4bcfe1["dynCall_iiiffifiiii"] = function () {
      return (_0x5b7a33 = _0x4bcfe1["dynCall_iiiffifiiii"] = _0x4bcfe1["asm"]["dynCall_iiiffifiiii"])["apply"](null, arguments);
    }, _0x31d60e = _0x4bcfe1["dynCall_iiifiifiii"] = function () {
      return (_0x31d60e = _0x4bcfe1["dynCall_iiifiifiii"] = _0x4bcfe1["asm"]["dynCall_iiifiifiii"])["apply"](null, arguments);
    }, _0xe1e1e9 = _0x4bcfe1["dynCall_iiifiifiiiii"] = function () {
      return (_0xe1e1e9 = _0x4bcfe1["dynCall_iiifiifiiiii"] = _0x4bcfe1["asm"]["dynCall_iiifiifiiiii"])["apply"](null, arguments);
    }, _0x93cb99 = _0x4bcfe1["dynCall_ifii"] = function () {
      return (_0x93cb99 = _0x4bcfe1["dynCall_ifii"] = _0x4bcfe1["asm"]["dynCall_ifii"])["apply"](null, arguments);
    }, _0x22e9b0 = _0x4bcfe1["dynCall_ifffii"] = function () {
      return (_0x22e9b0 = _0x4bcfe1["dynCall_ifffii"] = _0x4bcfe1["asm"]["dynCall_ifffii"])["apply"](null, arguments);
    }, _0x3ff933 = _0x4bcfe1["dynCall_ffffii"] = function () {
      return (_0x3ff933 = _0x4bcfe1["dynCall_ffffii"] = _0x4bcfe1["asm"]["dynCall_ffffii"])["apply"](null, arguments);
    }, _0x2621ce = _0x4bcfe1["dynCall_ffffifi"] = function () {
      return (_0x2621ce = _0x4bcfe1["dynCall_ffffifi"] = _0x4bcfe1["asm"]["dynCall_ffffifi"])["apply"](null, arguments);
    }, _0x47f79f = _0x4bcfe1["dynCall_ffffiffi"] = function () {
      return (_0x47f79f = _0x4bcfe1["dynCall_ffffiffi"] = _0x4bcfe1["asm"]["dynCall_ffffiffi"])["apply"](null, arguments);
    }, _0x137340 = _0x4bcfe1["dynCall_viiififi"] = function () {
      return (_0x137340 = _0x4bcfe1["dynCall_viiififi"] = _0x4bcfe1["asm"]["dynCall_viiififi"])["apply"](null, arguments);
    }, _0x23473a = _0x4bcfe1["dynCall_viiififfi"] = function () {
      return (_0x23473a = _0x4bcfe1["dynCall_viiififfi"] = _0x4bcfe1["asm"]["dynCall_viiififfi"])["apply"](null, arguments);
    }, _0x52af47 = _0x4bcfe1["dynCall_ifiii"] = function () {
      return (_0x52af47 = _0x4bcfe1["dynCall_ifiii"] = _0x4bcfe1["asm"]["dynCall_ifiii"])["apply"](null, arguments);
    }, _0xf9c52e = _0x4bcfe1["dynCall_iifiiiiii"] = function () {
      return (_0xf9c52e = _0x4bcfe1["dynCall_iifiiiiii"] = _0x4bcfe1["asm"]["dynCall_iifiiiiii"])["apply"](null, arguments);
    }, _0xe154f = _0x4bcfe1["dynCall_iifiiiii"] = function () {
      return (_0xe154f = _0x4bcfe1["dynCall_iifiiiii"] = _0x4bcfe1["asm"]["dynCall_iifiiiii"])["apply"](null, arguments);
    }, _0x432ea8 = _0x4bcfe1["dynCall_iiffiiiii"] = function () {
      return (_0x432ea8 = _0x4bcfe1["dynCall_iiffiiiii"] = _0x4bcfe1["asm"]["dynCall_iiffiiiii"])["apply"](null, arguments);
    }, _0x52539e = _0x4bcfe1["dynCall_iiffifiii"] = function () {
      return (_0x52539e = _0x4bcfe1["dynCall_iiffifiii"] = _0x4bcfe1["asm"]["dynCall_iiffifiii"])["apply"](null, arguments);
    }, _0x2cb4b3 = _0x4bcfe1["dynCall_iifiifiii"] = function () {
      return (_0x2cb4b3 = _0x4bcfe1["dynCall_iifiifiii"] = _0x4bcfe1["asm"]["dynCall_iifiifiii"])["apply"](null, arguments);
    }, _0x1d6a10 = _0x4bcfe1["dynCall_iififi"] = function () {
      return (_0x1d6a10 = _0x4bcfe1["dynCall_iififi"] = _0x4bcfe1["asm"]["dynCall_iififi"])["apply"](null, arguments);
    }, _0x30494b = _0x4bcfe1["dynCall_iiififi"] = function () {
      return (_0x30494b = _0x4bcfe1["dynCall_iiififi"] = _0x4bcfe1["asm"]["dynCall_iiififi"])["apply"](null, arguments);
    }, _0x2d284f = _0x4bcfe1["dynCall_iiiiifiiii"] = function () {
      return (_0x2d284f = _0x4bcfe1["dynCall_iiiiifiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiifiiii"])["apply"](null, arguments);
    }, _0x541a6c = _0x4bcfe1["dynCall_viidiii"] = function () {
      return (_0x541a6c = _0x4bcfe1["dynCall_viidiii"] = _0x4bcfe1["asm"]["dynCall_viidiii"])["apply"](null, arguments);
    }, _0x567d8c = _0x4bcfe1["dynCall_fiifdi"] = function () {
      return (_0x567d8c = _0x4bcfe1["dynCall_fiifdi"] = _0x4bcfe1["asm"]["dynCall_fiifdi"])["apply"](null, arguments);
    }, _0x31f00f = _0x4bcfe1["dynCall_viiiiiifddfiiii"] = function () {
      return (_0x31f00f = _0x4bcfe1["dynCall_viiiiiifddfiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiifddfiiii"])["apply"](null, arguments);
    }, _0x101fdc = _0x4bcfe1["dynCall_fiifji"] = function () {
      return (_0x101fdc = _0x4bcfe1["dynCall_fiifji"] = _0x4bcfe1["asm"]["dynCall_fiifji"])["apply"](null, arguments);
    }, _0x36e4df = _0x4bcfe1["dynCall_viiiiiifjjfiiii"] = function () {
      return (_0x36e4df = _0x4bcfe1["dynCall_viiiiiifjjfiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiifjjfiiii"])["apply"](null, arguments);
    }, _0x2b9229 = _0x4bcfe1["dynCall_viifiii"] = function () {
      return (_0x2b9229 = _0x4bcfe1["dynCall_viifiii"] = _0x4bcfe1["asm"]["dynCall_viifiii"])["apply"](null, arguments);
    }, _0x465fe5 = _0x4bcfe1["dynCall_viiiiiiffffiiii"] = function () {
      return (_0x465fe5 = _0x4bcfe1["dynCall_viiiiiiffffiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiffffiiii"])["apply"](null, arguments);
    }, _0x49123e = _0x4bcfe1["dynCall_viifiiii"] = function () {
      return (_0x49123e = _0x4bcfe1["dynCall_viifiiii"] = _0x4bcfe1["asm"]["dynCall_viifiiii"])["apply"](null, arguments);
    }, _0x528c16 = _0x4bcfe1["dynCall_iiiiifiii"] = function () {
      return (_0x528c16 = _0x4bcfe1["dynCall_iiiiifiii"] = _0x4bcfe1["asm"]["dynCall_iiiiifiii"])["apply"](null, arguments);
    }, _0x26415d = _0x4bcfe1["dynCall_fffffi"] = function () {
      return (_0x26415d = _0x4bcfe1["dynCall_fffffi"] = _0x4bcfe1["asm"]["dynCall_fffffi"])["apply"](null, arguments);
    }, _0x12cedd = _0x4bcfe1["dynCall_fffifffi"] = function () {
      return (_0x12cedd = _0x4bcfe1["dynCall_fffifffi"] = _0x4bcfe1["asm"]["dynCall_fffifffi"])["apply"](null, arguments);
    }, _0x228280 = _0x4bcfe1["dynCall_ifiiii"] = function () {
      return (_0x228280 = _0x4bcfe1["dynCall_ifiiii"] = _0x4bcfe1["asm"]["dynCall_ifiiii"])["apply"](null, arguments);
    }, _0xe6f76 = _0x4bcfe1["dynCall_idiiiii"] = function () {
      return (_0xe6f76 = _0x4bcfe1["dynCall_idiiiii"] = _0x4bcfe1["asm"]["dynCall_idiiiii"])["apply"](null, arguments);
    }, _0x2c0b99 = _0x4bcfe1["dynCall_idiiii"] = function () {
      return (_0x2c0b99 = _0x4bcfe1["dynCall_idiiii"] = _0x4bcfe1["asm"]["dynCall_idiiii"])["apply"](null, arguments);
    }, _0xb56779 = _0x4bcfe1["dynCall_idii"] = function () {
      return (_0xb56779 = _0x4bcfe1["dynCall_idii"] = _0x4bcfe1["asm"]["dynCall_idii"])["apply"](null, arguments);
    }, _0x5c6b90 = _0x4bcfe1["dynCall_iiijiiii"] = function () {
      return (_0x5c6b90 = _0x4bcfe1["dynCall_iiijiiii"] = _0x4bcfe1["asm"]["dynCall_iiijiiii"])["apply"](null, arguments);
    }, _0xffb591 = _0x4bcfe1["dynCall_vjiiii"] = function () {
      return (_0xffb591 = _0x4bcfe1["dynCall_vjiiii"] = _0x4bcfe1["asm"]["dynCall_vjiiii"])["apply"](null, arguments);
    }, _0x2ad655 = _0x4bcfe1["dynCall_iddi"] = function () {
      return (_0x2ad655 = _0x4bcfe1["dynCall_iddi"] = _0x4bcfe1["asm"]["dynCall_iddi"])["apply"](null, arguments);
    }, _0x394039 = _0x4bcfe1["dynCall_iiiiiiiiiiii"] = function () {
      return (_0x394039 = _0x4bcfe1["dynCall_iiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x1d8363 = _0x4bcfe1["dynCall_iiiiiiiiiiiiii"] = function () {
      return (_0x1d8363 = _0x4bcfe1["dynCall_iiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x2eaea7 = _0x4bcfe1["dynCall_viifiifi"] = function () {
      return (_0x2eaea7 = _0x4bcfe1["dynCall_viifiifi"] = _0x4bcfe1["asm"]["dynCall_viifiifi"])["apply"](null, arguments);
    }, _0x2f26c5 = _0x4bcfe1["dynCall_vifiifi"] = function () {
      return (_0x2f26c5 = _0x4bcfe1["dynCall_vifiifi"] = _0x4bcfe1["asm"]["dynCall_vifiifi"])["apply"](null, arguments);
    }, _0x50b7c9 = _0x4bcfe1["dynCall_viddfffi"] = function () {
      return (_0x50b7c9 = _0x4bcfe1["dynCall_viddfffi"] = _0x4bcfe1["asm"]["dynCall_viddfffi"])["apply"](null, arguments);
    }, _0x4a3a5d = _0x4bcfe1["dynCall_viidfffi"] = function () {
      return (_0x4a3a5d = _0x4bcfe1["dynCall_viidfffi"] = _0x4bcfe1["asm"]["dynCall_viidfffi"])["apply"](null, arguments);
    }, _0x2c6952 = _0x4bcfe1["dynCall_vidifffi"] = function () {
      return (_0x2c6952 = _0x4bcfe1["dynCall_vidifffi"] = _0x4bcfe1["asm"]["dynCall_vidifffi"])["apply"](null, arguments);
    }, _0xa9086e = _0x4bcfe1["dynCall_viiifffi"] = function () {
      return (_0xa9086e = _0x4bcfe1["dynCall_viiifffi"] = _0x4bcfe1["asm"]["dynCall_viiifffi"])["apply"](null, arguments);
    }, _0x4a5e1a = _0x4bcfe1["dynCall_viddi"] = function () {
      return (_0x4a5e1a = _0x4bcfe1["dynCall_viddi"] = _0x4bcfe1["asm"]["dynCall_viddi"])["apply"](null, arguments);
    }, _0x5a967e = _0x4bcfe1["dynCall_viiiiffffffffii"] = function () {
      return (_0x5a967e = _0x4bcfe1["dynCall_viiiiffffffffii"] = _0x4bcfe1["asm"]["dynCall_viiiiffffffffii"])["apply"](null, arguments);
    }, _0x6134e7 = _0x4bcfe1["dynCall_iffi"] = function () {
      return (_0x6134e7 = _0x4bcfe1["dynCall_iffi"] = _0x4bcfe1["asm"]["dynCall_iffi"])["apply"](null, arguments);
    }, _0x2ce45a = _0x4bcfe1["dynCall_ffii"] = function () {
      return (_0x2ce45a = _0x4bcfe1["dynCall_ffii"] = _0x4bcfe1["asm"]["dynCall_ffii"])["apply"](null, arguments);
    }, _0x4e3625 = _0x4bcfe1["dynCall_fiiiii"] = function () {
      return (_0x4e3625 = _0x4bcfe1["dynCall_fiiiii"] = _0x4bcfe1["asm"]["dynCall_fiiiii"])["apply"](null, arguments);
    }, _0x2309f9 = _0x4bcfe1["dynCall_ddddi"] = function () {
      return (_0x2309f9 = _0x4bcfe1["dynCall_ddddi"] = _0x4bcfe1["asm"]["dynCall_ddddi"])["apply"](null, arguments);
    }, _0x18835c = _0x4bcfe1["dynCall_ddi"] = function () {
      return (_0x18835c = _0x4bcfe1["dynCall_ddi"] = _0x4bcfe1["asm"]["dynCall_ddi"])["apply"](null, arguments);
    }, _0x2973d2 = _0x4bcfe1["dynCall_viiijiiii"] = function () {
      return (_0x2973d2 = _0x4bcfe1["dynCall_viiijiiii"] = _0x4bcfe1["asm"]["dynCall_viiijiiii"])["apply"](null, arguments);
    }, _0x3c1729 = _0x4bcfe1["dynCall_iiiiiiiiiiiii"] = function () {
      return (_0x3c1729 = _0x4bcfe1["dynCall_iiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x3e0951 = _0x4bcfe1["dynCall_iiiiiji"] = function () {
      return (_0x3e0951 = _0x4bcfe1["dynCall_iiiiiji"] = _0x4bcfe1["asm"]["dynCall_iiiiiji"])["apply"](null, arguments);
    }, _0x4dcf3a = _0x4bcfe1["dynCall_viiijii"] = function () {
      return (_0x4dcf3a = _0x4bcfe1["dynCall_viiijii"] = _0x4bcfe1["asm"]["dynCall_viiijii"])["apply"](null, arguments);
    }, _0x5de217 = _0x4bcfe1["dynCall_viiiiiji"] = function () {
      return (_0x5de217 = _0x4bcfe1["dynCall_viiiiiji"] = _0x4bcfe1["asm"]["dynCall_viiiiiji"])["apply"](null, arguments);
    }, _0xea4223 = _0x4bcfe1["dynCall_ijii"] = function () {
      return (_0xea4223 = _0x4bcfe1["dynCall_ijii"] = _0x4bcfe1["asm"]["dynCall_ijii"])["apply"](null, arguments);
    }, _0x56fc5c = _0x4bcfe1["dynCall_ijjiiii"] = function () {
      return (_0x56fc5c = _0x4bcfe1["dynCall_ijjiiii"] = _0x4bcfe1["asm"]["dynCall_ijjiiii"])["apply"](null, arguments);
    }, _0x1bb9cd = _0x4bcfe1["dynCall_vdiiiii"] = function () {
      return (_0x1bb9cd = _0x4bcfe1["dynCall_vdiiiii"] = _0x4bcfe1["asm"]["dynCall_vdiiiii"])["apply"](null, arguments);
    }, _0xbbd32 = _0x4bcfe1["dynCall_diiji"] = function () {
      return (_0xbbd32 = _0x4bcfe1["dynCall_diiji"] = _0x4bcfe1["asm"]["dynCall_diiji"])["apply"](null, arguments);
    }, _0x173cff = _0x4bcfe1["dynCall_vjiiiiiiii"] = function () {
      return (_0x173cff = _0x4bcfe1["dynCall_vjiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_vjiiiiiiii"])["apply"](null, arguments);
    }, _0x41016e = _0x4bcfe1["dynCall_vjiiiiiii"] = function () {
      return (_0x41016e = _0x4bcfe1["dynCall_vjiiiiiii"] = _0x4bcfe1["asm"]["dynCall_vjiiiiiii"])["apply"](null, arguments);
    }, _0xd4708c = _0x4bcfe1["dynCall_ijiiii"] = function () {
      return (_0xd4708c = _0x4bcfe1["dynCall_ijiiii"] = _0x4bcfe1["asm"]["dynCall_ijiiii"])["apply"](null, arguments);
    }, _0x1c1e79 = _0x4bcfe1["dynCall_iidii"] = function () {
      return (_0x1c1e79 = _0x4bcfe1["dynCall_iidii"] = _0x4bcfe1["asm"]["dynCall_iidii"])["apply"](null, arguments);
    }, _0x44aa7a = _0x4bcfe1["dynCall_iidiii"] = function () {
      return (_0x44aa7a = _0x4bcfe1["dynCall_iidiii"] = _0x4bcfe1["asm"]["dynCall_iidiii"])["apply"](null, arguments);
    }, _0x209272 = _0x4bcfe1["dynCall_diji"] = function () {
      return (_0x209272 = _0x4bcfe1["dynCall_diji"] = _0x4bcfe1["asm"]["dynCall_diji"])["apply"](null, arguments);
    }, _0x3d6177 = _0x4bcfe1["dynCall_fidi"] = function () {
      return (_0x3d6177 = _0x4bcfe1["dynCall_fidi"] = _0x4bcfe1["asm"]["dynCall_fidi"])["apply"](null, arguments);
    }, _0x17cff3 = _0x4bcfe1["dynCall_vifffffi"] = function () {
      return (_0x17cff3 = _0x4bcfe1["dynCall_vifffffi"] = _0x4bcfe1["asm"]["dynCall_vifffffi"])["apply"](null, arguments);
    }, _0x1ece98 = _0x4bcfe1["dynCall_viiiiiffii"] = function () {
      return (_0x1ece98 = _0x4bcfe1["dynCall_viiiiiffii"] = _0x4bcfe1["asm"]["dynCall_viiiiiffii"])["apply"](null, arguments);
    }, _0x2dc9b5 = _0x4bcfe1["dynCall_viiiiiffi"] = function () {
      return (_0x2dc9b5 = _0x4bcfe1["dynCall_viiiiiffi"] = _0x4bcfe1["asm"]["dynCall_viiiiiffi"])["apply"](null, arguments);
    }, _0x306fec = _0x4bcfe1["dynCall_viififi"] = function () {
      return (_0x306fec = _0x4bcfe1["dynCall_viififi"] = _0x4bcfe1["asm"]["dynCall_viififi"])["apply"](null, arguments);
    }, _0x3fbcde = _0x4bcfe1["dynCall_viififfi"] = function () {
      return (_0x3fbcde = _0x4bcfe1["dynCall_viififfi"] = _0x4bcfe1["asm"]["dynCall_viififfi"])["apply"](null, arguments);
    }, _0x64a697 = _0x4bcfe1["dynCall_ijjiii"] = function () {
      return (_0x64a697 = _0x4bcfe1["dynCall_ijjiii"] = _0x4bcfe1["asm"]["dynCall_ijjiii"])["apply"](null, arguments);
    }, _0xc9c2c0 = _0x4bcfe1["dynCall_diiiii"] = function () {
      return (_0xc9c2c0 = _0x4bcfe1["dynCall_diiiii"] = _0x4bcfe1["asm"]["dynCall_diiiii"])["apply"](null, arguments);
    }, _0x166b91 = _0x4bcfe1["dynCall_vijji"] = function () {
      return (_0x166b91 = _0x4bcfe1["dynCall_vijji"] = _0x4bcfe1["asm"]["dynCall_vijji"])["apply"](null, arguments);
    }, _0x1c4674 = _0x4bcfe1["dynCall_vfffi"] = function () {
      return (_0x1c4674 = _0x4bcfe1["dynCall_vfffi"] = _0x4bcfe1["asm"]["dynCall_vfffi"])["apply"](null, arguments);
    }, _0x362e10 = _0x4bcfe1["dynCall_vffffi"] = function () {
      return (_0x362e10 = _0x4bcfe1["dynCall_vffffi"] = _0x4bcfe1["asm"]["dynCall_vffffi"])["apply"](null, arguments);
    }, _0x2b2005 = _0x4bcfe1["dynCall_viiiffii"] = function () {
      return (_0x2b2005 = _0x4bcfe1["dynCall_viiiffii"] = _0x4bcfe1["asm"]["dynCall_viiiffii"])["apply"](null, arguments);
    }, _0xd88d5 = _0x4bcfe1["dynCall_viiiifffi"] = function () {
      return (_0xd88d5 = _0x4bcfe1["dynCall_viiiifffi"] = _0x4bcfe1["asm"]["dynCall_viiiifffi"])["apply"](null, arguments);
    }, _0x155cdf = _0x4bcfe1["dynCall_vfiii"] = function () {
      return (_0x155cdf = _0x4bcfe1["dynCall_vfiii"] = _0x4bcfe1["asm"]["dynCall_vfiii"])["apply"](null, arguments);
    }, _0x4cd0ad = _0x4bcfe1["dynCall_fdi"] = function () {
      return (_0x4cd0ad = _0x4bcfe1["dynCall_fdi"] = _0x4bcfe1["asm"]["dynCall_fdi"])["apply"](null, arguments);
    }, _0x255e82 = _0x4bcfe1["dynCall_vfii"] = function () {
      return (_0x255e82 = _0x4bcfe1["dynCall_vfii"] = _0x4bcfe1["asm"]["dynCall_vfii"])["apply"](null, arguments);
    }, _0x3d93bb = _0x4bcfe1["dynCall_jjjji"] = function () {
      return (_0x3d93bb = _0x4bcfe1["dynCall_jjjji"] = _0x4bcfe1["asm"]["dynCall_jjjji"])["apply"](null, arguments);
    }, _0x2dc1ce = _0x4bcfe1["dynCall_iiiifiiiiii"] = function () {
      return (_0x2dc1ce = _0x4bcfe1["dynCall_iiiifiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiifiiiiii"])["apply"](null, arguments);
    }, _0x451998 = _0x4bcfe1["dynCall_iiiifiiiii"] = function () {
      return (_0x451998 = _0x4bcfe1["dynCall_iiiifiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiifiiiii"])["apply"](null, arguments);
    }, _0x1f0356 = _0x4bcfe1["dynCall_iiiifiiii"] = function () {
      return (_0x1f0356 = _0x4bcfe1["dynCall_iiiifiiii"] = _0x4bcfe1["asm"]["dynCall_iiiifiiii"])["apply"](null, arguments);
    }, _0x7f082c = _0x4bcfe1["dynCall_vijjii"] = function () {
      return (_0x7f082c = _0x4bcfe1["dynCall_vijjii"] = _0x4bcfe1["asm"]["dynCall_vijjii"])["apply"](null, arguments);
    }, _0x45991c = _0x4bcfe1["dynCall_viiiiiiiijijiii"] = function () {
      return (_0x45991c = _0x4bcfe1["dynCall_viiiiiiiijijiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiijijiii"])["apply"](null, arguments);
    }, _0x1ab8b9 = _0x4bcfe1["dynCall_viijijiii"] = function () {
      return (_0x1ab8b9 = _0x4bcfe1["dynCall_viijijiii"] = _0x4bcfe1["asm"]["dynCall_viijijiii"])["apply"](null, arguments);
    }, _0x525e23 = _0x4bcfe1["dynCall_viiiififfi"] = function () {
      return (_0x525e23 = _0x4bcfe1["dynCall_viiiififfi"] = _0x4bcfe1["asm"]["dynCall_viiiififfi"])["apply"](null, arguments);
    }, _0x500ad1 = _0x4bcfe1["dynCall_viiiifiifi"] = function () {
      return (_0x500ad1 = _0x4bcfe1["dynCall_viiiifiifi"] = _0x4bcfe1["asm"]["dynCall_viiiifiifi"])["apply"](null, arguments);
    }, _0x3af2f7 = _0x4bcfe1["dynCall_viiiifiiii"] = function () {
      return (_0x3af2f7 = _0x4bcfe1["dynCall_viiiifiiii"] = _0x4bcfe1["asm"]["dynCall_viiiifiiii"])["apply"](null, arguments);
    }, _0x41b1f1 = _0x4bcfe1["dynCall_viiiifiiiii"] = function () {
      return (_0x41b1f1 = _0x4bcfe1["dynCall_viiiifiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiifiiiii"])["apply"](null, arguments);
    }, _0x46f551 = _0x4bcfe1["dynCall_viiiifiiiiiiii"] = function () {
      return (_0x46f551 = _0x4bcfe1["dynCall_viiiifiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiifiiiiiiii"])["apply"](null, arguments);
    }, _0x2235d8 = _0x4bcfe1["dynCall_viffffiii"] = function () {
      return (_0x2235d8 = _0x4bcfe1["dynCall_viffffiii"] = _0x4bcfe1["asm"]["dynCall_viffffiii"])["apply"](null, arguments);
    }, _0x217cf8 = _0x4bcfe1["dynCall_viififiii"] = function () {
      return (_0x217cf8 = _0x4bcfe1["dynCall_viififiii"] = _0x4bcfe1["asm"]["dynCall_viififiii"])["apply"](null, arguments);
    }, _0x843951 = _0x4bcfe1["dynCall_iiiiifi"] = function () {
      return (_0x843951 = _0x4bcfe1["dynCall_iiiiifi"] = _0x4bcfe1["asm"]["dynCall_iiiiifi"])["apply"](null, arguments);
    }, _0x25f62e = _0x4bcfe1["dynCall_viififii"] = function () {
      return (_0x25f62e = _0x4bcfe1["dynCall_viififii"] = _0x4bcfe1["asm"]["dynCall_viififii"])["apply"](null, arguments);
    }, _0x1d9b1b = _0x4bcfe1["dynCall_iifiifii"] = function () {
      return (_0x1d9b1b = _0x4bcfe1["dynCall_iifiifii"] = _0x4bcfe1["asm"]["dynCall_iifiifii"])["apply"](null, arguments);
    }, _0x42f9ee = _0x4bcfe1["dynCall_vififfii"] = function () {
      return (_0x42f9ee = _0x4bcfe1["dynCall_vififfii"] = _0x4bcfe1["asm"]["dynCall_vififfii"])["apply"](null, arguments);
    }, _0x18d980 = _0x4bcfe1["dynCall_vififfi"] = function () {
      return (_0x18d980 = _0x4bcfe1["dynCall_vififfi"] = _0x4bcfe1["asm"]["dynCall_vififfi"])["apply"](null, arguments);
    }, _0x59ad65 = _0x4bcfe1["dynCall_iiififiiii"] = function () {
      return (_0x59ad65 = _0x4bcfe1["dynCall_iiififiiii"] = _0x4bcfe1["asm"]["dynCall_iiififiiii"])["apply"](null, arguments);
    }, _0x431c3e = _0x4bcfe1["dynCall_viffiiii"] = function () {
      return (_0x431c3e = _0x4bcfe1["dynCall_viffiiii"] = _0x4bcfe1["asm"]["dynCall_viffiiii"])["apply"](null, arguments);
    }, _0x50569e = _0x4bcfe1["dynCall_viiiffffiiii"] = function () {
      return (_0x50569e = _0x4bcfe1["dynCall_viiiffffiiii"] = _0x4bcfe1["asm"]["dynCall_viiiffffiiii"])["apply"](null, arguments);
    }, _0x518b3d = _0x4bcfe1["dynCall_viifffffffiiiii"] = function () {
      return (_0x518b3d = _0x4bcfe1["dynCall_viifffffffiiiii"] = _0x4bcfe1["asm"]["dynCall_viifffffffiiiii"])["apply"](null, arguments);
    }, _0x56db75 = _0x4bcfe1["dynCall_iiiiiiffiiiiiiiiiffffiiii"] = function () {
      return (_0x56db75 = _0x4bcfe1["dynCall_iiiiiiffiiiiiiiiiffffiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiffiiiiiiiiiffffiiii"])["apply"](null, arguments);
    }, _0x1ebf26 = _0x4bcfe1["dynCall_iiiiiiffiiiiiiiiiiiiiii"] = function () {
      return (_0x1ebf26 = _0x4bcfe1["dynCall_iiiiiiffiiiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiffiiiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x30a0af = _0x4bcfe1["dynCall_vififiii"] = function () {
      return (_0x30a0af = _0x4bcfe1["dynCall_vififiii"] = _0x4bcfe1["asm"]["dynCall_vififiii"])["apply"](null, arguments);
    }, _0x2c7be5 = _0x4bcfe1["dynCall_jijji"] = function () {
      return (_0x2c7be5 = _0x4bcfe1["dynCall_jijji"] = _0x4bcfe1["asm"]["dynCall_jijji"])["apply"](null, arguments);
    }, _0x2a1197 = _0x4bcfe1["dynCall_ifffi"] = function () {
      return (_0x2a1197 = _0x4bcfe1["dynCall_ifffi"] = _0x4bcfe1["asm"]["dynCall_ifffi"])["apply"](null, arguments);
    }, _0x382a15 = _0x4bcfe1["dynCall_fiifiii"] = function () {
      return (_0x382a15 = _0x4bcfe1["dynCall_fiifiii"] = _0x4bcfe1["asm"]["dynCall_fiifiii"])["apply"](null, arguments);
    }, _0x1eb1a2 = _0x4bcfe1["dynCall_viffifi"] = function () {
      return (_0x1eb1a2 = _0x4bcfe1["dynCall_viffifi"] = _0x4bcfe1["asm"]["dynCall_viffifi"])["apply"](null, arguments);
    }, _0x467ccf = _0x4bcfe1["dynCall_fffffffi"] = function () {
      return (_0x467ccf = _0x4bcfe1["dynCall_fffffffi"] = _0x4bcfe1["asm"]["dynCall_fffffffi"])["apply"](null, arguments);
    }, _0x3e7d72 = _0x4bcfe1["dynCall_viiiffiiiiiiiii"] = function () {
      return (_0x3e7d72 = _0x4bcfe1["dynCall_viiiffiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiffiiiiiiiii"])["apply"](null, arguments);
    }, _0x9810cb = _0x4bcfe1["dynCall_viiiffiiiiii"] = function () {
      return (_0x9810cb = _0x4bcfe1["dynCall_viiiffiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiffiiiiii"])["apply"](null, arguments);
    }, _0x1bd091 = _0x4bcfe1["dynCall_viiffiiiiiiiiii"] = function () {
      return (_0x1bd091 = _0x4bcfe1["dynCall_viiffiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiffiiiiiiiiii"])["apply"](null, arguments);
    }, _0x23a40a = _0x4bcfe1["dynCall_viiffiiiiiii"] = function () {
      return (_0x23a40a = _0x4bcfe1["dynCall_viiffiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiffiiiiiii"])["apply"](null, arguments);
    }, _0x352313 = _0x4bcfe1["dynCall_viffffffi"] = function () {
      return (_0x352313 = _0x4bcfe1["dynCall_viffffffi"] = _0x4bcfe1["asm"]["dynCall_viffffffi"])["apply"](null, arguments);
    }, _0x5dff95 = _0x4bcfe1["dynCall_iiiffiiii"] = function () {
      return (_0x5dff95 = _0x4bcfe1["dynCall_iiiffiiii"] = _0x4bcfe1["asm"]["dynCall_iiiffiiii"])["apply"](null, arguments);
    }, _0x59c418 = _0x4bcfe1["dynCall_iiiiffiiii"] = function () {
      return (_0x59c418 = _0x4bcfe1["dynCall_iiiiffiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiffiiii"])["apply"](null, arguments);
    }, _0x50051a = _0x4bcfe1["dynCall_fiiiffi"] = function () {
      return (_0x50051a = _0x4bcfe1["dynCall_fiiiffi"] = _0x4bcfe1["asm"]["dynCall_fiiiffi"])["apply"](null, arguments);
    }, _0x33a40b = _0x4bcfe1["dynCall_vjii"] = function () {
      return (_0x33a40b = _0x4bcfe1["dynCall_vjii"] = _0x4bcfe1["asm"]["dynCall_vjii"])["apply"](null, arguments);
    }, _0x59e986 = _0x4bcfe1["dynCall_viiiiiiiijiiii"] = function () {
      return (_0x59e986 = _0x4bcfe1["dynCall_viiiiiiiijiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiijiiii"])["apply"](null, arguments);
    }, _0x3ddd9f = _0x4bcfe1["dynCall_viiiiiifiiiiii"] = function () {
      return (_0x3ddd9f = _0x4bcfe1["dynCall_viiiiiifiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiifiiiiii"])["apply"](null, arguments);
    }, _0x4def48 = _0x4bcfe1["dynCall_vifiiiiii"] = function () {
      return (_0x4def48 = _0x4bcfe1["dynCall_vifiiiiii"] = _0x4bcfe1["asm"]["dynCall_vifiiiiii"])["apply"](null, arguments);
    }, _0x593231 = _0x4bcfe1["dynCall_fifii"] = function () {
      return (_0x593231 = _0x4bcfe1["dynCall_fifii"] = _0x4bcfe1["asm"]["dynCall_fifii"])["apply"](null, arguments);
    }, _0x582160 = _0x4bcfe1["dynCall_iiidi"] = function () {
      return (_0x582160 = _0x4bcfe1["dynCall_iiidi"] = _0x4bcfe1["asm"]["dynCall_iiidi"])["apply"](null, arguments);
    }, _0x5e0a72 = _0x4bcfe1["dynCall_iidiiiii"] = function () {
      return (_0x5e0a72 = _0x4bcfe1["dynCall_iidiiiii"] = _0x4bcfe1["asm"]["dynCall_iidiiiii"])["apply"](null, arguments);
    }, _0x531f6c = _0x4bcfe1["dynCall_ijiiiiiiiii"] = function () {
      return (_0x531f6c = _0x4bcfe1["dynCall_ijiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_ijiiiiiiiii"])["apply"](null, arguments);
    }, _0x36c451 = _0x4bcfe1["dynCall_viijiiiiii"] = function () {
      return (_0x36c451 = _0x4bcfe1["dynCall_viijiiiiii"] = _0x4bcfe1["asm"]["dynCall_viijiiiiii"])["apply"](null, arguments);
    }, _0x25662f = _0x4bcfe1["dynCall_jiidi"] = function () {
      return (_0x25662f = _0x4bcfe1["dynCall_jiidi"] = _0x4bcfe1["asm"]["dynCall_jiidi"])["apply"](null, arguments);
    }, _0x5e4886 = _0x4bcfe1["dynCall_viiiidijii"] = function () {
      return (_0x5e4886 = _0x4bcfe1["dynCall_viiiidijii"] = _0x4bcfe1["asm"]["dynCall_viiiidijii"])["apply"](null, arguments);
    }, _0x59e433 = _0x4bcfe1["dynCall_viiiidii"] = function () {
      return (_0x59e433 = _0x4bcfe1["dynCall_viiiidii"] = _0x4bcfe1["asm"]["dynCall_viiiidii"])["apply"](null, arguments);
    }, _0xf6250c = _0x4bcfe1["dynCall_iiidiii"] = function () {
      return (_0xf6250c = _0x4bcfe1["dynCall_iiidiii"] = _0x4bcfe1["asm"]["dynCall_iiidiii"])["apply"](null, arguments);
    }, _0x4e9272 = _0x4bcfe1["dynCall_iiidii"] = function () {
      return (_0x4e9272 = _0x4bcfe1["dynCall_iiidii"] = _0x4bcfe1["asm"]["dynCall_iiidii"])["apply"](null, arguments);
    }, _0x40b324 = _0x4bcfe1["dynCall_vidiii"] = function () {
      return (_0x40b324 = _0x4bcfe1["dynCall_vidiii"] = _0x4bcfe1["asm"]["dynCall_vidiii"])["apply"](null, arguments);
    }, _0x410854 = _0x4bcfe1["dynCall_viijiiiii"] = function () {
      return (_0x410854 = _0x4bcfe1["dynCall_viijiiiii"] = _0x4bcfe1["asm"]["dynCall_viijiiiii"])["apply"](null, arguments);
    }, _0x45f68c = _0x4bcfe1["dynCall_viiffffffi"] = function () {
      return (_0x45f68c = _0x4bcfe1["dynCall_viiffffffi"] = _0x4bcfe1["asm"]["dynCall_viiffffffi"])["apply"](null, arguments);
    }, _0x5db162 = _0x4bcfe1["dynCall_viiffffffffi"] = function () {
      return (_0x5db162 = _0x4bcfe1["dynCall_viiffffffffi"] = _0x4bcfe1["asm"]["dynCall_viiffffffffi"])["apply"](null, arguments);
    }, _0x4a0b76 = _0x4bcfe1["dynCall_viiffffffffiii"] = function () {
      return (_0x4a0b76 = _0x4bcfe1["dynCall_viiffffffffiii"] = _0x4bcfe1["asm"]["dynCall_viiffffffffiii"])["apply"](null, arguments);
    }, _0x3fa9f7 = _0x4bcfe1["dynCall_viiiiffffii"] = function () {
      return (_0x3fa9f7 = _0x4bcfe1["dynCall_viiiiffffii"] = _0x4bcfe1["asm"]["dynCall_viiiiffffii"])["apply"](null, arguments);
    }, _0x3425a8 = _0x4bcfe1["dynCall_fiiiiii"] = function () {
      return (_0x3425a8 = _0x4bcfe1["dynCall_fiiiiii"] = _0x4bcfe1["asm"]["dynCall_fiiiiii"])["apply"](null, arguments);
    }, _0x22cee3 = _0x4bcfe1["dynCall_viiijji"] = function () {
      return (_0x22cee3 = _0x4bcfe1["dynCall_viiijji"] = _0x4bcfe1["asm"]["dynCall_viiijji"])["apply"](null, arguments);
    }, _0x5c7385 = _0x4bcfe1["dynCall_vijiiiiiii"] = function () {
      return (_0x5c7385 = _0x4bcfe1["dynCall_vijiiiiiii"] = _0x4bcfe1["asm"]["dynCall_vijiiiiiii"])["apply"](null, arguments);
    }, _0xe7206a = _0x4bcfe1["dynCall_vijiiiiiiii"] = function () {
      return (_0xe7206a = _0x4bcfe1["dynCall_vijiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_vijiiiiiiii"])["apply"](null, arguments);
    }, _0x31d6d4 = _0x4bcfe1["dynCall_jjiiii"] = function () {
      return (_0x31d6d4 = _0x4bcfe1["dynCall_jjiiii"] = _0x4bcfe1["asm"]["dynCall_jjiiii"])["apply"](null, arguments);
    }, _0x2dc5a9 = _0x4bcfe1["dynCall_jjiiiii"] = function () {
      return (_0x2dc5a9 = _0x4bcfe1["dynCall_jjiiiii"] = _0x4bcfe1["asm"]["dynCall_jjiiiii"])["apply"](null, arguments);
    }, _0x411dd5 = _0x4bcfe1["dynCall_jijjji"] = function () {
      return (_0x411dd5 = _0x4bcfe1["dynCall_jijjji"] = _0x4bcfe1["asm"]["dynCall_jijjji"])["apply"](null, arguments);
    }, _0x1b9e9d = _0x4bcfe1["dynCall_jijjjii"] = function () {
      return (_0x1b9e9d = _0x4bcfe1["dynCall_jijjjii"] = _0x4bcfe1["asm"]["dynCall_jijjjii"])["apply"](null, arguments);
    }, _0x4dfd45 = _0x4bcfe1["dynCall_jjiii"] = function () {
      return (_0x4dfd45 = _0x4bcfe1["dynCall_jjiii"] = _0x4bcfe1["asm"]["dynCall_jjiii"])["apply"](null, arguments);
    }, _0x9407aa = _0x4bcfe1["dynCall_ijijiiiii"] = function () {
      return (_0x9407aa = _0x4bcfe1["dynCall_ijijiiiii"] = _0x4bcfe1["asm"]["dynCall_ijijiiiii"])["apply"](null, arguments);
    }, _0x41080e = _0x4bcfe1["dynCall_ijjjiii"] = function () {
      return (_0x41080e = _0x4bcfe1["dynCall_ijjjiii"] = _0x4bcfe1["asm"]["dynCall_ijjjiii"])["apply"](null, arguments);
    }, _0x31646c = _0x4bcfe1["dynCall_vijjjiijii"] = function () {
      return (_0x31646c = _0x4bcfe1["dynCall_vijjjiijii"] = _0x4bcfe1["asm"]["dynCall_vijjjiijii"])["apply"](null, arguments);
    }, _0x10b280 = _0x4bcfe1["dynCall_ijjjiijii"] = function () {
      return (_0x10b280 = _0x4bcfe1["dynCall_ijjjiijii"] = _0x4bcfe1["asm"]["dynCall_ijjjiijii"])["apply"](null, arguments);
    }, _0x42ffc9 = _0x4bcfe1["dynCall_jfi"] = function () {
      return (_0x42ffc9 = _0x4bcfe1["dynCall_jfi"] = _0x4bcfe1["asm"]["dynCall_jfi"])["apply"](null, arguments);
    }, _0xda93c9 = _0x4bcfe1["dynCall_fji"] = function () {
      return (_0xda93c9 = _0x4bcfe1["dynCall_fji"] = _0x4bcfe1["asm"]["dynCall_fji"])["apply"](null, arguments);
    }, _0xae38f3 = _0x4bcfe1["dynCall_dfi"] = function () {
      return (_0xae38f3 = _0x4bcfe1["dynCall_dfi"] = _0x4bcfe1["asm"]["dynCall_dfi"])["apply"](null, arguments);
    }, _0x445dc4 = _0x4bcfe1["dynCall_jidii"] = function () {
      return (_0x445dc4 = _0x4bcfe1["dynCall_jidii"] = _0x4bcfe1["asm"]["dynCall_jidii"])["apply"](null, arguments);
    }, _0x4ce255 = _0x4bcfe1["dynCall_viiiiiiiji"] = function () {
      return (_0x4ce255 = _0x4bcfe1["dynCall_viiiiiiiji"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiji"])["apply"](null, arguments);
    }, _0x363a8c = _0x4bcfe1["dynCall_viiiiiiiiji"] = function () {
      return (_0x363a8c = _0x4bcfe1["dynCall_viiiiiiiiji"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiji"])["apply"](null, arguments);
    }, _0x5a1f7b = _0x4bcfe1["dynCall_viiiiiiiiiji"] = function () {
      return (_0x5a1f7b = _0x4bcfe1["dynCall_viiiiiiiiiji"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiiji"])["apply"](null, arguments);
    }, _0x10a024 = _0x4bcfe1["dynCall_ijiijii"] = function () {
      return (_0x10a024 = _0x4bcfe1["dynCall_ijiijii"] = _0x4bcfe1["asm"]["dynCall_ijiijii"])["apply"](null, arguments);
    }, _0x3b568d = _0x4bcfe1["dynCall_vjjiiiii"] = function () {
      return (_0x3b568d = _0x4bcfe1["dynCall_vjjiiiii"] = _0x4bcfe1["asm"]["dynCall_vjjiiiii"])["apply"](null, arguments);
    }, _0x425040 = _0x4bcfe1["dynCall_vjjii"] = function () {
      return (_0x425040 = _0x4bcfe1["dynCall_vjjii"] = _0x4bcfe1["asm"]["dynCall_vjjii"])["apply"](null, arguments);
    }, _0x4704ac = _0x4bcfe1["dynCall_ijiiji"] = function () {
      return (_0x4704ac = _0x4bcfe1["dynCall_ijiiji"] = _0x4bcfe1["asm"]["dynCall_ijiiji"])["apply"](null, arguments);
    }, _0x458cb6 = _0x4bcfe1["dynCall_ijiiiii"] = function () {
      return (_0x458cb6 = _0x4bcfe1["dynCall_ijiiiii"] = _0x4bcfe1["asm"]["dynCall_ijiiiii"])["apply"](null, arguments);
    }, _0x1df362 = _0x4bcfe1["dynCall_ijiiiiji"] = function () {
      return (_0x1df362 = _0x4bcfe1["dynCall_ijiiiiji"] = _0x4bcfe1["asm"]["dynCall_ijiiiiji"])["apply"](null, arguments);
    }, _0x15e680 = _0x4bcfe1["dynCall_jiiiiii"] = function () {
      return (_0x15e680 = _0x4bcfe1["dynCall_jiiiiii"] = _0x4bcfe1["asm"]["dynCall_jiiiiii"])["apply"](null, arguments);
    }, _0x2504a8 = _0x4bcfe1["dynCall_ddii"] = function () {
      return (_0x2504a8 = _0x4bcfe1["dynCall_ddii"] = _0x4bcfe1["asm"]["dynCall_ddii"])["apply"](null, arguments);
    }, _0x57f8fb = _0x4bcfe1["dynCall_idiii"] = function () {
      return (_0x57f8fb = _0x4bcfe1["dynCall_idiii"] = _0x4bcfe1["asm"]["dynCall_idiii"])["apply"](null, arguments);
    }, _0x30fea2 = _0x4bcfe1["dynCall_ifiiiii"] = function () {
      return (_0x30fea2 = _0x4bcfe1["dynCall_ifiiiii"] = _0x4bcfe1["asm"]["dynCall_ifiiiii"])["apply"](null, arguments);
    }, _0x33a83a = _0x4bcfe1["dynCall_jjjii"] = function () {
      return (_0x33a83a = _0x4bcfe1["dynCall_jjjii"] = _0x4bcfe1["asm"]["dynCall_jjjii"])["apply"](null, arguments);
    }, _0x342c69 = _0x4bcfe1["dynCall_vdiii"] = function () {
      return (_0x342c69 = _0x4bcfe1["dynCall_vdiii"] = _0x4bcfe1["asm"]["dynCall_vdiii"])["apply"](null, arguments);
    }, _0x577354 = _0x4bcfe1["dynCall_jdii"] = function () {
      return (_0x577354 = _0x4bcfe1["dynCall_jdii"] = _0x4bcfe1["asm"]["dynCall_jdii"])["apply"](null, arguments);
    }, _0x5d9ef7 = _0x4bcfe1["dynCall_vijijji"] = function () {
      return (_0x5d9ef7 = _0x4bcfe1["dynCall_vijijji"] = _0x4bcfe1["asm"]["dynCall_vijijji"])["apply"](null, arguments);
    }, _0x375139 = _0x4bcfe1["dynCall_iijjji"] = function () {
      return (_0x375139 = _0x4bcfe1["dynCall_iijjji"] = _0x4bcfe1["asm"]["dynCall_iijjji"])["apply"](null, arguments);
    }, _0x15ca74 = _0x4bcfe1["dynCall_viijjji"] = function () {
      return (_0x15ca74 = _0x4bcfe1["dynCall_viijjji"] = _0x4bcfe1["asm"]["dynCall_viijjji"])["apply"](null, arguments);
    }, _0x5b5e90 = _0x4bcfe1["dynCall_vdii"] = function () {
      return (_0x5b5e90 = _0x4bcfe1["dynCall_vdii"] = _0x4bcfe1["asm"]["dynCall_vdii"])["apply"](null, arguments);
    }, _0x1f683d = _0x4bcfe1["dynCall_diddi"] = function () {
      return (_0x1f683d = _0x4bcfe1["dynCall_diddi"] = _0x4bcfe1["asm"]["dynCall_diddi"])["apply"](null, arguments);
    }, _0x761f78 = _0x4bcfe1["dynCall_iijjii"] = function () {
      return (_0x761f78 = _0x4bcfe1["dynCall_iijjii"] = _0x4bcfe1["asm"]["dynCall_iijjii"])["apply"](null, arguments);
    }, _0xb0ddae = _0x4bcfe1["dynCall_viijijii"] = function () {
      return (_0xb0ddae = _0x4bcfe1["dynCall_viijijii"] = _0x4bcfe1["asm"]["dynCall_viijijii"])["apply"](null, arguments);
    }, _0x2f4177 = _0x4bcfe1["dynCall_vijiji"] = function () {
      return (_0x2f4177 = _0x4bcfe1["dynCall_vijiji"] = _0x4bcfe1["asm"]["dynCall_vijiji"])["apply"](null, arguments);
    }, _0x3d3caa = _0x4bcfe1["dynCall_viijiijiii"] = function () {
      return (_0x3d3caa = _0x4bcfe1["dynCall_viijiijiii"] = _0x4bcfe1["asm"]["dynCall_viijiijiii"])["apply"](null, arguments);
    }, _0x55cb44 = _0x4bcfe1["dynCall_viiiijiiii"] = function () {
      return (_0x55cb44 = _0x4bcfe1["dynCall_viiiijiiii"] = _0x4bcfe1["asm"]["dynCall_viiiijiiii"])["apply"](null, arguments);
    }, _0x7ff25f = _0x4bcfe1["dynCall_di"] = function () {
      return (_0x7ff25f = _0x4bcfe1["dynCall_di"] = _0x4bcfe1["asm"]["dynCall_di"])["apply"](null, arguments);
    }, _0x2f42f2 = _0x4bcfe1["dynCall_jiiiiiiiii"] = function () {
      return (_0x2f42f2 = _0x4bcfe1["dynCall_jiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_jiiiiiiiii"])["apply"](null, arguments);
    }, _0x1f7a7f = _0x4bcfe1["dynCall_jiiiiiiiiii"] = function () {
      return (_0x1f7a7f = _0x4bcfe1["dynCall_jiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_jiiiiiiiiii"])["apply"](null, arguments);
    }, _0x360b40 = _0x4bcfe1["dynCall_iiiiijii"] = function () {
      return (_0x360b40 = _0x4bcfe1["dynCall_iiiiijii"] = _0x4bcfe1["asm"]["dynCall_iiiiijii"])["apply"](null, arguments);
    }, _0x2af946 = _0x4bcfe1["dynCall_iiiiidii"] = function () {
      return (_0x2af946 = _0x4bcfe1["dynCall_iiiiidii"] = _0x4bcfe1["asm"]["dynCall_iiiiidii"])["apply"](null, arguments);
    }, _0x45297c = _0x4bcfe1["dynCall_viifffiii"] = function () {
      return (_0x45297c = _0x4bcfe1["dynCall_viifffiii"] = _0x4bcfe1["asm"]["dynCall_viifffiii"])["apply"](null, arguments);
    }, _0x2e3be5 = _0x4bcfe1["dynCall_iidfii"] = function () {
      return (_0x2e3be5 = _0x4bcfe1["dynCall_iidfii"] = _0x4bcfe1["asm"]["dynCall_iidfii"])["apply"](null, arguments);
    }, _0x5d2e7a = _0x4bcfe1["dynCall_iidfi"] = function () {
      return (_0x5d2e7a = _0x4bcfe1["dynCall_iidfi"] = _0x4bcfe1["asm"]["dynCall_iidfi"])["apply"](null, arguments);
    }, _0x19deab = _0x4bcfe1["dynCall_iiddfi"] = function () {
      return (_0x19deab = _0x4bcfe1["dynCall_iiddfi"] = _0x4bcfe1["asm"]["dynCall_iiddfi"])["apply"](null, arguments);
    }, _0x111421 = _0x4bcfe1["dynCall_iijfii"] = function () {
      return (_0x111421 = _0x4bcfe1["dynCall_iijfii"] = _0x4bcfe1["asm"]["dynCall_iijfii"])["apply"](null, arguments);
    }, _0x53411a = _0x4bcfe1["dynCall_iijfi"] = function () {
      return (_0x53411a = _0x4bcfe1["dynCall_iijfi"] = _0x4bcfe1["asm"]["dynCall_iijfi"])["apply"](null, arguments);
    }, _0x1ce1c1 = _0x4bcfe1["dynCall_iijjfi"] = function () {
      return (_0x1ce1c1 = _0x4bcfe1["dynCall_iijjfi"] = _0x4bcfe1["asm"]["dynCall_iijjfi"])["apply"](null, arguments);
    }, _0x1e0ffd = _0x4bcfe1["dynCall_iiiiffiiiji"] = function () {
      return (_0x1e0ffd = _0x4bcfe1["dynCall_iiiiffiiiji"] = _0x4bcfe1["asm"]["dynCall_iiiiffiiiji"])["apply"](null, arguments);
    }, _0x5ebb27 = _0x4bcfe1["dynCall_iiidfii"] = function () {
      return (_0x5ebb27 = _0x4bcfe1["dynCall_iiidfii"] = _0x4bcfe1["asm"]["dynCall_iiidfii"])["apply"](null, arguments);
    }, _0x387d53 = _0x4bcfe1["dynCall_iiijfii"] = function () {
      return (_0x387d53 = _0x4bcfe1["dynCall_iiijfii"] = _0x4bcfe1["asm"]["dynCall_iiijfii"])["apply"](null, arguments);
    }, _0x186df3 = _0x4bcfe1["dynCall_jiiiiiii"] = function () {
      return (_0x186df3 = _0x4bcfe1["dynCall_jiiiiiii"] = _0x4bcfe1["asm"]["dynCall_jiiiiiii"])["apply"](null, arguments);
    }, _0x8635d0 = _0x4bcfe1["dynCall_iiiiffiiiii"] = function () {
      return (_0x8635d0 = _0x4bcfe1["dynCall_iiiiffiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiffiiiii"])["apply"](null, arguments);
    }, _0xbfa11e = _0x4bcfe1["dynCall_iiiidfii"] = function () {
      return (_0xbfa11e = _0x4bcfe1["dynCall_iiiidfii"] = _0x4bcfe1["asm"]["dynCall_iiiidfii"])["apply"](null, arguments);
    }, _0x31538f = _0x4bcfe1["dynCall_iiiijfii"] = function () {
      return (_0x31538f = _0x4bcfe1["dynCall_iiiijfii"] = _0x4bcfe1["asm"]["dynCall_iiiijfii"])["apply"](null, arguments);
    }, _0x60e2bb = _0x4bcfe1["dynCall_diiiidi"] = function () {
      return (_0x60e2bb = _0x4bcfe1["dynCall_diiiidi"] = _0x4bcfe1["asm"]["dynCall_diiiidi"])["apply"](null, arguments);
    }, _0x33ed83 = _0x4bcfe1["dynCall_jiiiiji"] = function () {
      return (_0x33ed83 = _0x4bcfe1["dynCall_jiiiiji"] = _0x4bcfe1["asm"]["dynCall_jiiiiji"])["apply"](null, arguments);
    }, _0x5e5d89 = _0x4bcfe1["dynCall_fiiiifi"] = function () {
      return (_0x5e5d89 = _0x4bcfe1["dynCall_fiiiifi"] = _0x4bcfe1["asm"]["dynCall_fiiiifi"])["apply"](null, arguments);
    }, _0x5482aa = _0x4bcfe1["dynCall_iiiiiiiiiiiiiii"] = function () {
      return (_0x5482aa = _0x4bcfe1["dynCall_iiiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x2d2b32 = _0x4bcfe1["dynCall_iiiiiiiiiiiiiiii"] = function () {
      return (_0x2d2b32 = _0x4bcfe1["dynCall_iiiiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x50b9e8 = _0x4bcfe1["dynCall_iiiiiiiiiiiiiiiii"] = function () {
      return (_0x50b9e8 = _0x4bcfe1["dynCall_iiiiiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x5e7b0b = _0x4bcfe1["dynCall_iiiiiiiiiiiiiiiiii"] = function () {
      return (_0x5e7b0b = _0x4bcfe1["dynCall_iiiiiiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x12a51c = _0x4bcfe1["dynCall_iiiiiiiiiiiiiiiiiii"] = function () {
      return (_0x12a51c = _0x4bcfe1["dynCall_iiiiiiiiiiiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiiiiiiiiiiiiii"])["apply"](null, arguments);
    }, _0x2952d6 = _0x4bcfe1["dynCall_iiijjii"] = function () {
      return (_0x2952d6 = _0x4bcfe1["dynCall_iiijjii"] = _0x4bcfe1["asm"]["dynCall_iiijjii"])["apply"](null, arguments);
    }, _0x36d088 = _0x4bcfe1["dynCall_ijiiiiii"] = function () {
      return (_0x36d088 = _0x4bcfe1["dynCall_ijiiiiii"] = _0x4bcfe1["asm"]["dynCall_ijiiiiii"])["apply"](null, arguments);
    }, _0x5ede28 = _0x4bcfe1["dynCall_ijjiiiiii"] = function () {
      return (_0x5ede28 = _0x4bcfe1["dynCall_ijjiiiiii"] = _0x4bcfe1["asm"]["dynCall_ijjiiiiii"])["apply"](null, arguments);
    }, _0x3ca267 = _0x4bcfe1["dynCall_vdi"] = function () {
      return (_0x3ca267 = _0x4bcfe1["dynCall_vdi"] = _0x4bcfe1["asm"]["dynCall_vdi"])["apply"](null, arguments);
    }, _0x5a84ac = _0x4bcfe1["dynCall_vjijii"] = function () {
      return (_0x5a84ac = _0x4bcfe1["dynCall_vjijii"] = _0x4bcfe1["asm"]["dynCall_vjijii"])["apply"](null, arguments);
    }, _0x29fff1 = _0x4bcfe1["dynCall_fff"] = function () {
      return (_0x29fff1 = _0x4bcfe1["dynCall_fff"] = _0x4bcfe1["asm"]["dynCall_fff"])["apply"](null, arguments);
    }, _0x27e970 = _0x4bcfe1["dynCall_ijj"] = function () {
      return (_0x27e970 = _0x4bcfe1["dynCall_ijj"] = _0x4bcfe1["asm"]["dynCall_ijj"])["apply"](null, arguments);
    }, _0x463a61 = _0x4bcfe1["dynCall_vjji"] = function () {
      return (_0x463a61 = _0x4bcfe1["dynCall_vjji"] = _0x4bcfe1["asm"]["dynCall_vjji"])["apply"](null, arguments);
    }, _0x118b25 = _0x4bcfe1["dynCall_vif"] = function () {
      return (_0x118b25 = _0x4bcfe1["dynCall_vif"] = _0x4bcfe1["asm"]["dynCall_vif"])["apply"](null, arguments);
    }, _0x36ae3b = _0x4bcfe1["dynCall_viif"] = function () {
      return (_0x36ae3b = _0x4bcfe1["dynCall_viif"] = _0x4bcfe1["asm"]["dynCall_viif"])["apply"](null, arguments);
    }, _0x2b9e6d = _0x4bcfe1["dynCall_vid"] = function () {
      return (_0x2b9e6d = _0x4bcfe1["dynCall_vid"] = _0x4bcfe1["asm"]["dynCall_vid"])["apply"](null, arguments);
    }, _0x57b670 = _0x4bcfe1["dynCall_viiiiif"] = function () {
      return (_0x57b670 = _0x4bcfe1["dynCall_viiiiif"] = _0x4bcfe1["asm"]["dynCall_viiiiif"])["apply"](null, arguments);
    }, _0x2556c6 = _0x4bcfe1["dynCall_viiiif"] = function () {
      return (_0x2556c6 = _0x4bcfe1["dynCall_viiiif"] = _0x4bcfe1["asm"]["dynCall_viiiif"])["apply"](null, arguments);
    }, _0x2586ce = _0x4bcfe1["dynCall_viiiiiif"] = function () {
      return (_0x2586ce = _0x4bcfe1["dynCall_viiiiiif"] = _0x4bcfe1["asm"]["dynCall_viiiiiif"])["apply"](null, arguments);
    }, _0x1dcbd1 = _0x4bcfe1["dynCall_iiiijiii"] = function () {
      return (_0x1dcbd1 = _0x4bcfe1["dynCall_iiiijiii"] = _0x4bcfe1["asm"]["dynCall_iiiijiii"])["apply"](null, arguments);
    }, _0x3b9fbc = _0x4bcfe1["dynCall_iiiij"] = function () {
      return (_0x3b9fbc = _0x4bcfe1["dynCall_iiiij"] = _0x4bcfe1["asm"]["dynCall_iiiij"])["apply"](null, arguments);
    }, _0x4048ea = _0x4bcfe1["dynCall_iiif"] = function () {
      return (_0x4048ea = _0x4bcfe1["dynCall_iiif"] = _0x4bcfe1["asm"]["dynCall_iiif"])["apply"](null, arguments);
    }, _0x4f58a2 = _0x4bcfe1["dynCall_fif"] = function () {
      return (_0x4f58a2 = _0x4bcfe1["dynCall_fif"] = _0x4bcfe1["asm"]["dynCall_fif"])["apply"](null, arguments);
    }, _0x5b7cb9 = _0x4bcfe1["dynCall_iiiiiifff"] = function () {
      return (_0x5b7cb9 = _0x4bcfe1["dynCall_iiiiiifff"] = _0x4bcfe1["asm"]["dynCall_iiiiiifff"])["apply"](null, arguments);
    }, _0x36dbbf = _0x4bcfe1["dynCall_iiiiiifiif"] = function () {
      return (_0x36dbbf = _0x4bcfe1["dynCall_iiiiiifiif"] = _0x4bcfe1["asm"]["dynCall_iiiiiifiif"])["apply"](null, arguments);
    }, _0x41cc90 = _0x4bcfe1["dynCall_iiiiiifiii"] = function () {
      return (_0x41cc90 = _0x4bcfe1["dynCall_iiiiiifiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiifiii"])["apply"](null, arguments);
    }, _0xc1497b = _0x4bcfe1["dynCall_iiiiiiifiif"] = function () {
      return (_0xc1497b = _0x4bcfe1["dynCall_iiiiiiifiif"] = _0x4bcfe1["asm"]["dynCall_iiiiiiifiif"])["apply"](null, arguments);
    }, _0x472752 = _0x4bcfe1["dynCall_fiff"] = function () {
      return (_0x472752 = _0x4bcfe1["dynCall_fiff"] = _0x4bcfe1["asm"]["dynCall_fiff"])["apply"](null, arguments);
    }, _0x26a14e = _0x4bcfe1["dynCall_fiiiiiifiifif"] = function () {
      return (_0x26a14e = _0x4bcfe1["dynCall_fiiiiiifiifif"] = _0x4bcfe1["asm"]["dynCall_fiiiiiifiifif"])["apply"](null, arguments);
    }, _0x3dec5e = _0x4bcfe1["dynCall_fiiiiiifiiiif"] = function () {
      return (_0x3dec5e = _0x4bcfe1["dynCall_fiiiiiifiiiif"] = _0x4bcfe1["asm"]["dynCall_fiiiiiifiiiif"])["apply"](null, arguments);
    }, _0xd75788 = _0x4bcfe1["dynCall_iifiiiijii"] = function () {
      return (_0xd75788 = _0x4bcfe1["dynCall_iifiiiijii"] = _0x4bcfe1["asm"]["dynCall_iifiiiijii"])["apply"](null, arguments);
    }, _0x5d6b3e = _0x4bcfe1["dynCall_vifif"] = function () {
      return (_0x5d6b3e = _0x4bcfe1["dynCall_vifif"] = _0x4bcfe1["asm"]["dynCall_vifif"])["apply"](null, arguments);
    }, _0x408086 = _0x4bcfe1["dynCall_vifijii"] = function () {
      return (_0x408086 = _0x4bcfe1["dynCall_vifijii"] = _0x4bcfe1["asm"]["dynCall_vifijii"])["apply"](null, arguments);
    }, _0x287ead = _0x4bcfe1["dynCall_iiiifffiii"] = function () {
      return (_0x287ead = _0x4bcfe1["dynCall_iiiifffiii"] = _0x4bcfe1["asm"]["dynCall_iiiifffiii"])["apply"](null, arguments);
    }, _0xf8e321 = _0x4bcfe1["dynCall_iiiifffffi"] = function () {
      return (_0xf8e321 = _0x4bcfe1["dynCall_iiiifffffi"] = _0x4bcfe1["asm"]["dynCall_iiiifffffi"])["apply"](null, arguments);
    }, _0x431245 = _0x4bcfe1["dynCall_viffiiiif"] = function () {
      return (_0x431245 = _0x4bcfe1["dynCall_viffiiiif"] = _0x4bcfe1["asm"]["dynCall_viffiiiif"])["apply"](null, arguments);
    }, _0x124dad = _0x4bcfe1["dynCall_viffiifffffiii"] = function () {
      return (_0x124dad = _0x4bcfe1["dynCall_viffiifffffiii"] = _0x4bcfe1["asm"]["dynCall_viffiifffffiii"])["apply"](null, arguments);
    }, _0x51fe9d = _0x4bcfe1["dynCall_viffffiifffiiiiif"] = function () {
      return (_0x51fe9d = _0x4bcfe1["dynCall_viffffiifffiiiiif"] = _0x4bcfe1["asm"]["dynCall_viffffiifffiiiiif"])["apply"](null, arguments);
    }, _0x26698c = _0x4bcfe1["dynCall_iiiifffffii"] = function () {
      return (_0x26698c = _0x4bcfe1["dynCall_iiiifffffii"] = _0x4bcfe1["asm"]["dynCall_iiiifffffii"])["apply"](null, arguments);
    }, _0x547a85 = _0x4bcfe1["dynCall_viiiiiiiiiiifii"] = function () {
      return (_0x547a85 = _0x4bcfe1["dynCall_viiiiiiiiiiifii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiiiiifii"])["apply"](null, arguments);
    }, _0x535484 = _0x4bcfe1["dynCall_viff"] = function () {
      return (_0x535484 = _0x4bcfe1["dynCall_viff"] = _0x4bcfe1["asm"]["dynCall_viff"])["apply"](null, arguments);
    }, _0x4ec63e = _0x4bcfe1["dynCall_iiiiifiiiiif"] = function () {
      return (_0x4ec63e = _0x4bcfe1["dynCall_iiiiifiiiiif"] = _0x4bcfe1["asm"]["dynCall_iiiiifiiiiif"])["apply"](null, arguments);
    }, _0x418393 = _0x4bcfe1["dynCall_viiff"] = function () {
      return (_0x418393 = _0x4bcfe1["dynCall_viiff"] = _0x4bcfe1["asm"]["dynCall_viiff"])["apply"](null, arguments);
    }, _0x2da836 = _0x4bcfe1["dynCall_viiifiiiii"] = function () {
      return (_0x2da836 = _0x4bcfe1["dynCall_viiifiiiii"] = _0x4bcfe1["asm"]["dynCall_viiifiiiii"])["apply"](null, arguments);
    }, _0xa62a53 = _0x4bcfe1["dynCall_viiiifiiiiif"] = function () {
      return (_0xa62a53 = _0x4bcfe1["dynCall_viiiifiiiiif"] = _0x4bcfe1["asm"]["dynCall_viiiifiiiiif"])["apply"](null, arguments);
    }, _0x5aa40b = _0x4bcfe1["dynCall_iifff"] = function () {
      return (_0x5aa40b = _0x4bcfe1["dynCall_iifff"] = _0x4bcfe1["asm"]["dynCall_iifff"])["apply"](null, arguments);
    }, _0x5d167c = _0x4bcfe1["dynCall_iif"] = function () {
      return (_0x5d167c = _0x4bcfe1["dynCall_iif"] = _0x4bcfe1["asm"]["dynCall_iif"])["apply"](null, arguments);
    }, _0x1e099c = _0x4bcfe1["dynCall_viij"] = function () {
      return (_0x1e099c = _0x4bcfe1["dynCall_viij"] = _0x4bcfe1["asm"]["dynCall_viij"])["apply"](null, arguments);
    }, _0x515c3b = _0x4bcfe1["dynCall_viijijj"] = function () {
      return (_0x515c3b = _0x4bcfe1["dynCall_viijijj"] = _0x4bcfe1["asm"]["dynCall_viijijj"])["apply"](null, arguments);
    }, _0x1f50b5 = _0x4bcfe1["dynCall_viijj"] = function () {
      return (_0x1f50b5 = _0x4bcfe1["dynCall_viijj"] = _0x4bcfe1["asm"]["dynCall_viijj"])["apply"](null, arguments);
    }, _0x841ab = _0x4bcfe1["dynCall_viiiij"] = function () {
      return (_0x841ab = _0x4bcfe1["dynCall_viiiij"] = _0x4bcfe1["asm"]["dynCall_viiiij"])["apply"](null, arguments);
    }, _0x309b43 = _0x4bcfe1["dynCall_iiijji"] = function () {
      return (_0x309b43 = _0x4bcfe1["dynCall_iiijji"] = _0x4bcfe1["asm"]["dynCall_iiijji"])["apply"](null, arguments);
    }, _0x4a5dae = _0x4bcfe1["dynCall_ijjiiiii"] = function () {
      return (_0x4a5dae = _0x4bcfe1["dynCall_ijjiiiii"] = _0x4bcfe1["asm"]["dynCall_ijjiiiii"])["apply"](null, arguments);
    }, _0x453765 = _0x4bcfe1["dynCall_vidd"] = function () {
      return (_0x453765 = _0x4bcfe1["dynCall_vidd"] = _0x4bcfe1["asm"]["dynCall_vidd"])["apply"](null, arguments);
    }, _0x5c1fba = _0x4bcfe1["dynCall_iiiiiifffiiifiii"] = function () {
      return (_0x5c1fba = _0x4bcfe1["dynCall_iiiiiifffiiifiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiifffiiifiii"])["apply"](null, arguments);
    }, _0x4182e5 = _0x4bcfe1["dynCall_viid"] = function () {
      return (_0x4182e5 = _0x4bcfe1["dynCall_viid"] = _0x4bcfe1["asm"]["dynCall_viid"])["apply"](null, arguments);
    }, _0x1bc872 = _0x4bcfe1["dynCall_viiif"] = function () {
      return (_0x1bc872 = _0x4bcfe1["dynCall_viiif"] = _0x4bcfe1["asm"]["dynCall_viiif"])["apply"](null, arguments);
    }, _0x14151d = _0x4bcfe1["dynCall_fiiiif"] = function () {
      return (_0x14151d = _0x4bcfe1["dynCall_fiiiif"] = _0x4bcfe1["asm"]["dynCall_fiiiif"])["apply"](null, arguments);
    }, _0x543d22 = _0x4bcfe1["dynCall_iiiiiff"] = function () {
      return (_0x543d22 = _0x4bcfe1["dynCall_iiiiiff"] = _0x4bcfe1["asm"]["dynCall_iiiiiff"])["apply"](null, arguments);
    }, _0x5d1f6d = _0x4bcfe1["dynCall_iiij"] = function () {
      return (_0x5d1f6d = _0x4bcfe1["dynCall_iiij"] = _0x4bcfe1["asm"]["dynCall_iiij"])["apply"](null, arguments);
    }, _0x2baa4a = _0x4bcfe1["dynCall_viffffffffffffiiii"] = function () {
      return (_0x2baa4a = _0x4bcfe1["dynCall_viffffffffffffiiii"] = _0x4bcfe1["asm"]["dynCall_viffffffffffffiiii"])["apply"](null, arguments);
    }, _0x5b9784 = _0x4bcfe1["dynCall_viffff"] = function () {
      return (_0x5b9784 = _0x4bcfe1["dynCall_viffff"] = _0x4bcfe1["asm"]["dynCall_viffff"])["apply"](null, arguments);
    }, _0x2cdbdc = _0x4bcfe1["dynCall_ij"] = function () {
      return (_0x2cdbdc = _0x4bcfe1["dynCall_ij"] = _0x4bcfe1["asm"]["dynCall_ij"])["apply"](null, arguments);
    }, _0x455ad7 = _0x4bcfe1["dynCall_vf"] = function () {
      return (_0x455ad7 = _0x4bcfe1["dynCall_vf"] = _0x4bcfe1["asm"]["dynCall_vf"])["apply"](null, arguments);
    }, _0x12c204 = _0x4bcfe1["dynCall_vffff"] = function () {
      return (_0x12c204 = _0x4bcfe1["dynCall_vffff"] = _0x4bcfe1["asm"]["dynCall_vffff"])["apply"](null, arguments);
    }, _0x4ac1b7 = _0x4bcfe1["dynCall_vff"] = function () {
      return (_0x4ac1b7 = _0x4bcfe1["dynCall_vff"] = _0x4bcfe1["asm"]["dynCall_vff"])["apply"](null, arguments);
    }, _0x423f7e = _0x4bcfe1["dynCall_vifff"] = function () {
      return (_0x423f7e = _0x4bcfe1["dynCall_vifff"] = _0x4bcfe1["asm"]["dynCall_vifff"])["apply"](null, arguments);
    }, _0x1a2c1b = _0x4bcfe1["dynCall_viifff"] = function () {
      return (_0x1a2c1b = _0x4bcfe1["dynCall_viifff"] = _0x4bcfe1["asm"]["dynCall_viifff"])["apply"](null, arguments);
    }, _0x3d88fb = _0x4bcfe1["dynCall_vij"] = function () {
      return (_0x3d88fb = _0x4bcfe1["dynCall_vij"] = _0x4bcfe1["asm"]["dynCall_vij"])["apply"](null, arguments);
    }, _0x2d9738 = _0x4bcfe1["dynCall_vfff"] = function () {
      return (_0x2d9738 = _0x4bcfe1["dynCall_vfff"] = _0x4bcfe1["asm"]["dynCall_vfff"])["apply"](null, arguments);
    }, _0x136439 = _0x4bcfe1["dynCall_f"] = function () {
      return (_0x136439 = _0x4bcfe1["dynCall_f"] = _0x4bcfe1["asm"]["dynCall_f"])["apply"](null, arguments);
    }, _0x64f78c = _0x4bcfe1["dynCall_ff"] = function () {
      return (_0x64f78c = _0x4bcfe1["dynCall_ff"] = _0x4bcfe1["asm"]["dynCall_ff"])["apply"](null, arguments);
    }, _0xa927cb = _0x4bcfe1["dynCall_iiid"] = function () {
      return (_0xa927cb = _0x4bcfe1["dynCall_iiid"] = _0x4bcfe1["asm"]["dynCall_iiid"])["apply"](null, arguments);
    }, _0x599016 = _0x4bcfe1["dynCall_vifffff"] = function () {
      return (_0x599016 = _0x4bcfe1["dynCall_vifffff"] = _0x4bcfe1["asm"]["dynCall_vifffff"])["apply"](null, arguments);
    }, _0x468274 = _0x4bcfe1["dynCall_viififf"] = function () {
      return (_0x468274 = _0x4bcfe1["dynCall_viififf"] = _0x4bcfe1["asm"]["dynCall_viififf"])["apply"](null, arguments);
    }, _0x8a241e = _0x4bcfe1["dynCall_iiififiii"] = function () {
      return (_0x8a241e = _0x4bcfe1["dynCall_iiififiii"] = _0x4bcfe1["asm"]["dynCall_iiififiii"])["apply"](null, arguments);
    }, _0x43df13 = _0x4bcfe1["dynCall_fiif"] = function () {
      return (_0x43df13 = _0x4bcfe1["dynCall_fiif"] = _0x4bcfe1["asm"]["dynCall_fiif"])["apply"](null, arguments);
    }, _0x45bd1f = _0x4bcfe1["dynCall_iiiiiiffiiiiiiiiiffffiii"] = function () {
      return (_0x45bd1f = _0x4bcfe1["dynCall_iiiiiiffiiiiiiiiiffffiii"] = _0x4bcfe1["asm"]["dynCall_iiiiiiffiiiiiiiiiffffiii"])["apply"](null, arguments);
    }, _0x32030c = _0x4bcfe1["dynCall_viiffiiiiiiiii"] = function () {
      return (_0x32030c = _0x4bcfe1["dynCall_viiffiiiiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiffiiiiiiiii"])["apply"](null, arguments);
    }, _0x2b26ce = _0x4bcfe1["dynCall_viiffiiiiii"] = function () {
      return (_0x2b26ce = _0x4bcfe1["dynCall_viiffiiiiii"] = _0x4bcfe1["asm"]["dynCall_viiffiiiiii"])["apply"](null, arguments);
    }, _0xdd5206 = _0x4bcfe1["dynCall_viiiiiiiijiii"] = function () {
      return (_0xdd5206 = _0x4bcfe1["dynCall_viiiiiiiijiii"] = _0x4bcfe1["asm"]["dynCall_viiiiiiiijiii"])["apply"](null, arguments);
    };
    function _0x5602bf(_0x2a0047, _0x5e388b) {
      var _0x1d85d5 = _0x381588();
      try {
        return _0x89bc0e(_0x2a0047, _0x5e388b);
      } catch (_0xb2b8eb) {
        _0x770e87(_0x1d85d5);
        if (_0xb2b8eb !== _0xb2b8eb + 0) throw _0xb2b8eb;
        _0x3444d6(1, 0);
      }
    }
    function _0x5eb4f9(_0x440bc1) {
      var _0x2e4c69 = _0x381588();
      try {
        _0x2b31cb(_0x440bc1);
      } catch (_0x2282d8) {
        _0x770e87(_0x2e4c69);
        if (_0x2282d8 !== _0x2282d8 + 0) throw _0x2282d8;
        _0x3444d6(1, 0);
      }
    }
    function _0x4bcd76(_0xe5e1a1, _0x1979db, _0x5e1e10) {
      var _0xad721 = _0x381588();
      try {
        _0x3b5585(_0xe5e1a1, _0x1979db, _0x5e1e10);
      } catch (_0x55158e) {
        _0x770e87(_0xad721);
        if (_0x55158e !== _0x55158e + 0) throw _0x55158e;
        _0x3444d6(1, 0);
      }
    }
    function _0x3db597(_0x3d31f1, _0x492b3a, _0x1ffa7b) {
      var _0x5b6233 = _0x381588();
      try {
        return _0x5ea6d0(_0x3d31f1, _0x492b3a, _0x1ffa7b);
      } catch (_0x22d0a2) {
        _0x770e87(_0x5b6233);
        if (_0x22d0a2 !== _0x22d0a2 + 0) throw _0x22d0a2;
        _0x3444d6(1, 0);
      }
    }
    function _0x555546(_0x797d61, _0x55e0c8) {
      var _0x14147e = _0x381588();
      try {
        _0xe4a07d(_0x797d61, _0x55e0c8);
      } catch (_0x5c49d3) {
        _0x770e87(_0x14147e);
        if (_0x5c49d3 !== _0x5c49d3 + 0) throw _0x5c49d3;
        _0x3444d6(1, 0);
      }
    }
    function _0x4b508d(_0x14fd64, _0x1a8d58, _0x25c50b, _0x3100b6) {
      var _0x4013e = _0x381588();
      try {
        return _0x3ba9fb(_0x14fd64, _0x1a8d58, _0x25c50b, _0x3100b6);
      } catch (_0x28172d) {
        _0x770e87(_0x4013e);
        if (_0x28172d !== _0x28172d + 0) throw _0x28172d;
        _0x3444d6(1, 0);
      }
    }
    function _0x5b46f7(_0x59755b, _0x42e1a4, _0x242220, _0x455b6b, _0x240035) {
      var _0x1ac0a6 = _0x381588();
      try {
        return _0xbe10b6(_0x59755b, _0x42e1a4, _0x242220, _0x455b6b, _0x240035);
      } catch (_0x1d8e55) {
        _0x770e87(_0x1ac0a6);
        if (_0x1d8e55 !== _0x1d8e55 + 0) throw _0x1d8e55;
        _0x3444d6(1, 0);
      }
    }
    function _0x4763ee(_0x368f9a, _0x445ff0, _0x6b03c6, _0x5d66a3, _0x3a54bb, _0xacd685) {
      var _0x10536c = _0x381588();
      try {
        return _0x59dcc2(_0x368f9a, _0x445ff0, _0x6b03c6, _0x5d66a3, _0x3a54bb, _0xacd685);
      } catch (_0x382920) {
        _0x770e87(_0x10536c);
        if (_0x382920 !== _0x382920 + 0) throw _0x382920;
        _0x3444d6(1, 0);
      }
    }
    function _0x501b49(_0x7538f6, _0x5397ca, _0x4d5081, _0x5c8153) {
      var _0x3efe9c = _0x381588();
      try {
        _0x14e1db(_0x7538f6, _0x5397ca, _0x4d5081, _0x5c8153);
      } catch (_0x5b883c) {
        _0x770e87(_0x3efe9c);
        if (_0x5b883c !== _0x5b883c + 0) throw _0x5b883c;
        _0x3444d6(1, 0);
      }
    }
    function _0x199958(_0x37c81b, _0x1ee5cc, _0x517f09, _0x46695e, _0x45ada8, _0x1d1995, _0x31bf1d, _0x39f1e8) {
      var _0xf30c67 = _0x381588();
      try {
        return _0x1e0852(_0x37c81b, _0x1ee5cc, _0x517f09, _0x46695e, _0x45ada8, _0x1d1995, _0x31bf1d, _0x39f1e8);
      } catch (_0x39bd1f) {
        _0x770e87(_0xf30c67);
        if (_0x39bd1f !== _0x39bd1f + 0) throw _0x39bd1f;
        _0x3444d6(1, 0);
      }
    }
    function _0x3b4781(_0x41bd19) {
      var _0xddca7f = _0x381588();
      try {
        return _0x5415c9(_0x41bd19);
      } catch (_0x4d7721) {
        _0x770e87(_0xddca7f);
        if (_0x4d7721 !== _0x4d7721 + 0) throw _0x4d7721;
        _0x3444d6(1, 0);
      }
    }
    function _0x4de5b0(_0x4617f1, _0x21f3a0, _0x5603d2, _0x2346af, _0x5aa956) {
      var _0xe73ff2 = _0x381588();
      try {
        _0x1dcc7b(_0x4617f1, _0x21f3a0, _0x5603d2, _0x2346af, _0x5aa956);
      } catch (_0x47f2c6) {
        _0x770e87(_0xe73ff2);
        if (_0x47f2c6 !== _0x47f2c6 + 0) throw _0x47f2c6;
        _0x3444d6(1, 0);
      }
    }
    function _0x330333(_0x19051d, _0xec5f4a, _0x4a58c1, _0x20de55, _0x15517f, _0x1e3d1e, _0x33386d) {
      var _0x218dea = _0x381588();
      try {
        return _0x476e9a(_0x19051d, _0xec5f4a, _0x4a58c1, _0x20de55, _0x15517f, _0x1e3d1e, _0x33386d);
      } catch (_0x5ddde) {
        _0x770e87(_0x218dea);
        if (_0x5ddde !== _0x5ddde + 0) throw _0x5ddde;
        _0x3444d6(1, 0);
      }
    }
    function _0x4b5b87(_0x3a91e0, _0x104b43, _0x39fe89, _0xcacfef, _0x1a989b, _0x48c240, _0x128209, _0x49b85d, _0x57113b, _0x294ae1, _0x5163e0) {
      var _0x55b88c = _0x381588();
      try {
        return _0x3ba627(_0x3a91e0, _0x104b43, _0x39fe89, _0xcacfef, _0x1a989b, _0x48c240, _0x128209, _0x49b85d, _0x57113b, _0x294ae1, _0x5163e0);
      } catch (_0x2f1bdf) {
        _0x770e87(_0x55b88c);
        if (_0x2f1bdf !== _0x2f1bdf + 0) throw _0x2f1bdf;
        _0x3444d6(1, 0);
      }
    }
    function _0x5216fb(_0x515ea4, _0x2f170c, _0x1eb0b3, _0x8bd667) {
      var _0xc82737 = _0x381588();
      try {
        return _0x1e7d4b(_0x515ea4, _0x2f170c, _0x1eb0b3, _0x8bd667);
      } catch (_0x3d3743) {
        _0x770e87(_0xc82737);
        if (_0x3d3743 !== _0x3d3743 + 0) throw _0x3d3743;
        _0x3444d6(1, 0);
      }
    }
    function _0x16f818(_0x1110f4, _0x5f5942, _0x3385c8, _0x5c0497) {
      var _0x25bec4 = _0x381588();
      try {
        return _0x4892fb(_0x1110f4, _0x5f5942, _0x3385c8, _0x5c0497);
      } catch (_0x4dda5e) {
        _0x770e87(_0x25bec4);
        if (_0x4dda5e !== _0x4dda5e + 0) throw _0x4dda5e;
        _0x3444d6(1, 0);
      }
    }
    function _0x8472ea(_0x49bacb, _0x21ce6d, _0xff7342, _0x35dc4b, _0xd64285, _0x50162a, _0x205f9c, _0x4a73b9) {
      var _0x488491 = _0x381588();
      try {
        _0x17a7d2(_0x49bacb, _0x21ce6d, _0xff7342, _0x35dc4b, _0xd64285, _0x50162a, _0x205f9c, _0x4a73b9);
      } catch (_0x59428b) {
        _0x770e87(_0x488491);
        if (_0x59428b !== _0x59428b + 0) throw _0x59428b;
        _0x3444d6(1, 0);
      }
    }
    function _0x26c80b(_0x283ec6, _0x4da55b, _0x1042d2, _0x3a0721, _0x219b81, _0x568ac6, _0x24ecd7, _0x27b8d1, _0x53afa2, _0x4b3c4b, _0x50e8b2) {
      var _0x1594dc = _0x381588();
      try {
        _0x527843(_0x283ec6, _0x4da55b, _0x1042d2, _0x3a0721, _0x219b81, _0x568ac6, _0x24ecd7, _0x27b8d1, _0x53afa2, _0x4b3c4b, _0x50e8b2);
      } catch (_0xb7ac05) {
        _0x770e87(_0x1594dc);
        if (_0xb7ac05 !== _0xb7ac05 + 0) throw _0xb7ac05;
        _0x3444d6(1, 0);
      }
    }
    function _0x52060e(_0x16b61f, _0x2aa463, _0xd3d590, _0x478bb7, _0x221122, _0x2c3130, _0xd0981) {
      var _0xd1f4a8 = _0x381588();
      try {
        _0x53694d(_0x16b61f, _0x2aa463, _0xd3d590, _0x478bb7, _0x221122, _0x2c3130, _0xd0981);
      } catch (_0x55b4ca) {
        _0x770e87(_0xd1f4a8);
        if (_0x55b4ca !== _0x55b4ca + 0) throw _0x55b4ca;
        _0x3444d6(1, 0);
      }
    }
    function _0x537a92(_0x9dd5cb, _0x3e5d68, _0x59a7d4, _0x1eb5da, _0x358a70, _0x17f4a4) {
      var _0x4645f2 = _0x381588();
      try {
        _0x262251(_0x9dd5cb, _0x3e5d68, _0x59a7d4, _0x1eb5da, _0x358a70, _0x17f4a4);
      } catch (_0x49f59e) {
        _0x770e87(_0x4645f2);
        if (_0x49f59e !== _0x49f59e + 0) throw _0x49f59e;
        _0x3444d6(1, 0);
      }
    }
    function _0x3a2c8b(_0x1831d7, _0x3f1d2b, _0x446d00, _0x1451bd, _0x2fa46d) {
      var _0x378429 = _0x381588();
      try {
        return _0x1eb6f6(_0x1831d7, _0x3f1d2b, _0x446d00, _0x1451bd, _0x2fa46d);
      } catch (_0x3b3650) {
        _0x770e87(_0x378429);
        if (_0x3b3650 !== _0x3b3650 + 0) throw _0x3b3650;
        _0x3444d6(1, 0);
      }
    }
    function _0x1a46b3(_0x244fe6, _0x3042a9, _0x546974, _0x413601, _0x1eae41, _0x2a37af, _0x4215b2) {
      var _0x4cf841 = _0x381588();
      try {
        return _0x23e9d4(_0x244fe6, _0x3042a9, _0x546974, _0x413601, _0x1eae41, _0x2a37af, _0x4215b2);
      } catch (_0x3d2e88) {
        _0x770e87(_0x4cf841);
        if (_0x3d2e88 !== _0x3d2e88 + 0) throw _0x3d2e88;
        _0x3444d6(1, 0);
      }
    }
    function _0x1173dd(_0x58ecc5, _0x5d12de, _0x5f3aaa, _0x4fec34, _0x26a87f, _0x4e37b1, _0xc257fc) {
      var _0x111091 = _0x381588();
      try {
        return _0x59e8fd(_0x58ecc5, _0x5d12de, _0x5f3aaa, _0x4fec34, _0x26a87f, _0x4e37b1, _0xc257fc);
      } catch (_0x26b1fa) {
        _0x770e87(_0x111091);
        if (_0x26b1fa !== _0x26b1fa + 0) throw _0x26b1fa;
        _0x3444d6(1, 0);
      }
    }
    function _0x3e0386(_0x422f4b, _0x14ed64, _0x4099da, _0x5221f1, _0x312e6e, _0x49e929) {
      var _0x44313b = _0x381588();
      try {
        return _0x469d59(_0x422f4b, _0x14ed64, _0x4099da, _0x5221f1, _0x312e6e, _0x49e929);
      } catch (_0xd8395) {
        _0x770e87(_0x44313b);
        if (_0xd8395 !== _0xd8395 + 0) throw _0xd8395;
        _0x3444d6(1, 0);
      }
    }
    function _0x1ff3b6(_0x288cf4, _0x3b20f2, _0x5a0491, _0x4b298b, _0x3b55f4) {
      var _0x29749e = _0x381588();
      try {
        _0x28da8d(_0x288cf4, _0x3b20f2, _0x5a0491, _0x4b298b, _0x3b55f4);
      } catch (_0x16f508) {
        _0x770e87(_0x29749e);
        if (_0x16f508 !== _0x16f508 + 0) throw _0x16f508;
        _0x3444d6(1, 0);
      }
    }
    function _0x3c7f25(_0x3d8280, _0x5a74ec, _0xea4f6d, _0x3610f6, _0x54e9aa, _0x222b4c, _0x1df60b, _0x28c8bb, _0x107e33) {
      var _0x4e46f6 = _0x381588();
      try {
        _0x444c81(_0x3d8280, _0x5a74ec, _0xea4f6d, _0x3610f6, _0x54e9aa, _0x222b4c, _0x1df60b, _0x28c8bb, _0x107e33);
      } catch (_0x283a3f) {
        _0x770e87(_0x4e46f6);
        if (_0x283a3f !== _0x283a3f + 0) throw _0x283a3f;
        _0x3444d6(1, 0);
      }
    }
    function _0x3cd361(_0x1ab2d2, _0x5b3645, _0x47dafa, _0x25e2f5) {
      var _0x36b8de = _0x381588();
      try {
        _0x1a08b0(_0x1ab2d2, _0x5b3645, _0x47dafa, _0x25e2f5);
      } catch (_0x1755d9) {
        _0x770e87(_0x36b8de);
        if (_0x1755d9 !== _0x1755d9 + 0) throw _0x1755d9;
        _0x3444d6(1, 0);
      }
    }
    function _0x5bf059(_0x26cfc8, _0x12e0e5, _0x2f08ff, _0x5a59f5, _0x160e49) {
      var _0xd89dcd = _0x381588();
      try {
        _0x5c8bd0(_0x26cfc8, _0x12e0e5, _0x2f08ff, _0x5a59f5, _0x160e49);
      } catch (_0x14e50f) {
        _0x770e87(_0xd89dcd);
        if (_0x14e50f !== _0x14e50f + 0) throw _0x14e50f;
        _0x3444d6(1, 0);
      }
    }
    function _0x593e1f(_0x17d828, _0x253372, _0x67e997) {
      var _0x15f255 = _0x381588();
      try {
        return _0x465c65(_0x17d828, _0x253372, _0x67e997);
      } catch (_0x183f81) {
        _0x770e87(_0x15f255);
        if (_0x183f81 !== _0x183f81 + 0) throw _0x183f81;
        _0x3444d6(1, 0);
      }
    }
    function _0x7bff56(_0x35055b, _0x1e2b7b, _0x4b1ea9, _0x491731) {
      var _0x3addd7 = _0x381588();
      try {
        _0x1cce28(_0x35055b, _0x1e2b7b, _0x4b1ea9, _0x491731);
      } catch (_0x12fa6d) {
        _0x770e87(_0x3addd7);
        if (_0x12fa6d !== _0x12fa6d + 0) throw _0x12fa6d;
        _0x3444d6(1, 0);
      }
    }
    function _0x2a39d1(_0x409939, _0x29a733, _0x34791e) {
      var _0x2c3aa0 = _0x381588();
      try {
        return _0x40d23a(_0x409939, _0x29a733, _0x34791e);
      } catch (_0x42c08e) {
        _0x770e87(_0x2c3aa0);
        if (_0x42c08e !== _0x42c08e + 0) throw _0x42c08e;
        _0x3444d6(1, 0);
      }
    }
    function _0x24e36f(_0x4f7442, _0x45d6bb, _0x36aea9, _0x36c986, _0x423e5f, _0x2db8e9, _0x4e4a7b, _0x3d4363, _0x5b11e2, _0x2af7e4) {
      var _0x21e7ec = _0x381588();
      try {
        return _0x1df748(_0x4f7442, _0x45d6bb, _0x36aea9, _0x36c986, _0x423e5f, _0x2db8e9, _0x4e4a7b, _0x3d4363, _0x5b11e2, _0x2af7e4);
      } catch (_0x13c9f1) {
        _0x770e87(_0x21e7ec);
        if (_0x13c9f1 !== _0x13c9f1 + 0) throw _0x13c9f1;
        _0x3444d6(1, 0);
      }
    }
    function _0x119e8a(_0x1ee221, _0x46a570, _0x33f0c9, _0x1e50d7, _0x5b72f8, _0xb7f10, _0x2b2e2f, _0x88540, _0x4cbb91) {
      var _0x2ae443 = _0x381588();
      try {
        return _0x5a9796(_0x1ee221, _0x46a570, _0x33f0c9, _0x1e50d7, _0x5b72f8, _0xb7f10, _0x2b2e2f, _0x88540, _0x4cbb91);
      } catch (_0x3cd245) {
        _0x770e87(_0x2ae443);
        if (_0x3cd245 !== _0x3cd245 + 0) throw _0x3cd245;
        _0x3444d6(1, 0);
      }
    }
    function _0x3a764d(_0x2a242a, _0x1d0b75, _0x460ca0, _0x325008, _0x20a71f, _0x49a0fd, _0x476c2f, _0x390590, _0x1e88b3, _0x4b8a04) {
      var _0x29571a = _0x381588();
      try {
        _0x1e9537(_0x2a242a, _0x1d0b75, _0x460ca0, _0x325008, _0x20a71f, _0x49a0fd, _0x476c2f, _0x390590, _0x1e88b3, _0x4b8a04);
      } catch (_0x1d437) {
        _0x770e87(_0x29571a);
        if (_0x1d437 !== _0x1d437 + 0) throw _0x1d437;
        _0x3444d6(1, 0);
      }
    }
    function _0x53ebf3(_0x38fd3f, _0x11bd2f, _0x2ad1dc) {
      var _0x201a86 = _0x381588();
      try {
        return _0x1cdbca(_0x38fd3f, _0x11bd2f, _0x2ad1dc);
      } catch (_0x1ec794) {
        _0x770e87(_0x201a86);
        if (_0x1ec794 !== _0x1ec794 + 0) throw _0x1ec794;
        _0x3444d6(1, 0);
      }
    }
    function _0x17f47c(_0x1f0984, _0x5ebaff, _0x1957c0) {
      var _0xde7149 = _0x381588();
      try {
        return _0x4fdc1c(_0x1f0984, _0x5ebaff, _0x1957c0);
      } catch (_0x5eb19d) {
        _0x770e87(_0xde7149);
        if (_0x5eb19d !== _0x5eb19d + 0) throw _0x5eb19d;
        _0x3444d6(1, 0);
      }
    }
    function _0x3cfe12(_0x16eb17, _0x1e26ef, _0xaf5c8f, _0x372c19, _0x3ad124, _0x1af107) {
      var _0xa5c499 = _0x381588();
      try {
        return _0x2f5373(_0x16eb17, _0x1e26ef, _0xaf5c8f, _0x372c19, _0x3ad124, _0x1af107);
      } catch (_0x54aec9) {
        _0x770e87(_0xa5c499);
        if (_0x54aec9 !== _0x54aec9 + 0) throw _0x54aec9;
        _0x3444d6(1, 0);
      }
    }
    function _0x29efde(_0x583a51, _0x3b4421) {
      var _0x283329 = _0x381588();
      try {
        return _0x79c311(_0x583a51, _0x3b4421);
      } catch (_0x50299c) {
        _0x770e87(_0x283329);
        if (_0x50299c !== _0x50299c + 0) throw _0x50299c;
        _0x3444d6(1, 0);
      }
    }
    function _0x1a13e9(_0x248d61, _0x5bd9d6, _0x2c54ca, _0x480abf) {
      var _0x934797 = _0x381588();
      try {
        return _0xa927cb(_0x248d61, _0x5bd9d6, _0x2c54ca, _0x480abf);
      } catch (_0x19de76) {
        _0x770e87(_0x934797);
        if (_0x19de76 !== _0x19de76 + 0) throw _0x19de76;
        _0x3444d6(1, 0);
      }
    }
    function _0x59b1fd(_0x55014f, _0xe92ed5, _0x211301, _0x5944fb, _0x24730b, _0x2fb6cb, _0x1098a4) {
      var _0x184fc7 = _0x381588();
      try {
        _0x106722(_0x55014f, _0xe92ed5, _0x211301, _0x5944fb, _0x24730b, _0x2fb6cb, _0x1098a4);
      } catch (_0x173690) {
        _0x770e87(_0x184fc7);
        if (_0x173690 !== _0x173690 + 0) throw _0x173690;
        _0x3444d6(1, 0);
      }
    }
    function _0x5616e1(_0x3df17e, _0x16bd80, _0x49d1cb, _0x208384, _0x5a3ab4, _0x23dc00, _0x5b5b46) {
      var _0x1a2312 = _0x381588();
      try {
        _0x392e52(_0x3df17e, _0x16bd80, _0x49d1cb, _0x208384, _0x5a3ab4, _0x23dc00, _0x5b5b46);
      } catch (_0x5d63c6) {
        _0x770e87(_0x1a2312);
        if (_0x5d63c6 !== _0x5d63c6 + 0) throw _0x5d63c6;
        _0x3444d6(1, 0);
      }
    }
    function _0x231f29(_0x43b471, _0x5c40a2, _0x237ecd, _0x6a9c16, _0x3468f6, _0x82d995, _0x1ad421) {
      var _0x353f2a = _0x381588();
      try {
        return _0xf6250c(_0x43b471, _0x5c40a2, _0x237ecd, _0x6a9c16, _0x3468f6, _0x82d995, _0x1ad421);
      } catch (_0x2b9072) {
        _0x770e87(_0x353f2a);
        if (_0x2b9072 !== _0x2b9072 + 0) throw _0x2b9072;
        _0x3444d6(1, 0);
      }
    }
    function _0xc4db30(_0x492e77, _0x448527, _0xf8ffe, _0x500600, _0x39db2a, _0x4c3176) {
      var _0x35a481 = _0x381588();
      try {
        return _0x4e9272(_0x492e77, _0x448527, _0xf8ffe, _0x500600, _0x39db2a, _0x4c3176);
      } catch (_0x5d5c11) {
        _0x770e87(_0x35a481);
        if (_0x5d5c11 !== _0x5d5c11 + 0) throw _0x5d5c11;
        _0x3444d6(1, 0);
      }
    }
    function _0x10f2e9(_0x431524, _0x448312, _0x1782ac, _0xeded1e) {
      var _0x5a0753 = _0x381588();
      try {
        return _0xea456e(_0x431524, _0x448312, _0x1782ac, _0xeded1e);
      } catch (_0x136677) {
        _0x770e87(_0x5a0753);
        if (_0x136677 !== _0x136677 + 0) throw _0x136677;
        _0x3444d6(1, 0);
      }
    }
    function _0x1dcb81(_0xab5a03, _0x27794a, _0x235b67, _0x2479b0) {
      var _0x3fe3fb = _0x381588();
      try {
        return _0x52a567(_0xab5a03, _0x27794a, _0x235b67, _0x2479b0);
      } catch (_0x219f51) {
        _0x770e87(_0x3fe3fb);
        if (_0x219f51 !== _0x219f51 + 0) throw _0x219f51;
        _0x3444d6(1, 0);
      }
    }
    function _0x4c2621(_0x23614a, _0xef4c89, _0x14ef38, _0x460b90) {
      var _0x11933c = _0x381588();
      try {
        return _0x43d114(_0x23614a, _0xef4c89, _0x14ef38, _0x460b90);
      } catch (_0x33e79d) {
        _0x770e87(_0x11933c);
        if (_0x33e79d !== _0x33e79d + 0) throw _0x33e79d;
        _0x3444d6(1, 0);
      }
    }
    function _0x258e1c(_0x34d366, _0x4e843e, _0x3f766b, _0x4365af) {
      var _0x20a831 = _0x381588();
      try {
        return _0x3b09f6(_0x34d366, _0x4e843e, _0x3f766b, _0x4365af);
      } catch (_0x518e3d) {
        _0x770e87(_0x20a831);
        if (_0x518e3d !== _0x518e3d + 0) throw _0x518e3d;
        _0x3444d6(1, 0);
      }
    }
    function _0x1545b7(_0x13aabc, _0x158759, _0x680922, _0x4d3140, _0x310f01) {
      var _0x6594c1 = _0x381588();
      try {
        return _0x55957b(_0x13aabc, _0x158759, _0x680922, _0x4d3140, _0x310f01);
      } catch (_0x5c2b5d) {
        _0x770e87(_0x6594c1);
        if (_0x5c2b5d !== _0x5c2b5d + 0) throw _0x5c2b5d;
        _0x3444d6(1, 0);
      }
    }
    function _0x36f4f7(_0x2d2a23, _0x561c91, _0x3a821b, _0x3d0331, _0x3c82ff) {
      var _0x4d98c2 = _0x381588();
      try {
        _0xba5a94(_0x2d2a23, _0x561c91, _0x3a821b, _0x3d0331, _0x3c82ff);
      } catch (_0x270168) {
        _0x770e87(_0x4d98c2);
        if (_0x270168 !== _0x270168 + 0) throw _0x270168;
        _0x3444d6(1, 0);
      }
    }
    function _0x832381(_0x5ca20d, _0x24e083, _0x26ff29, _0x536491, _0x9eb6b0, _0x3a676c) {
      var _0x37eb9b = _0x381588();
      try {
        _0x22716e(_0x5ca20d, _0x24e083, _0x26ff29, _0x536491, _0x9eb6b0, _0x3a676c);
      } catch (_0x272994) {
        _0x770e87(_0x37eb9b);
        if (_0x272994 !== _0x272994 + 0) throw _0x272994;
        _0x3444d6(1, 0);
      }
    }
    function _0x55ece9(_0x19d221, _0x258a06, _0x2de274, _0x249bbd, _0x20278f) {
      var _0x191dd5 = _0x381588();
      try {
        _0x460671(_0x19d221, _0x258a06, _0x2de274, _0x249bbd, _0x20278f);
      } catch (_0x44312f) {
        _0x770e87(_0x191dd5);
        if (_0x44312f !== _0x44312f + 0) throw _0x44312f;
        _0x3444d6(1, 0);
      }
    }
    function _0x4391e4(_0x517702, _0x129306, _0xdf651c, _0x59672d, _0x8784de, _0x2db30d) {
      var _0x2a2c90 = _0x381588();
      try {
        _0x5a2fd2(_0x517702, _0x129306, _0xdf651c, _0x59672d, _0x8784de, _0x2db30d);
      } catch (_0x233146) {
        _0x770e87(_0x2a2c90);
        if (_0x233146 !== _0x233146 + 0) throw _0x233146;
        _0x3444d6(1, 0);
      }
    }
    function _0x2eefb5(_0x30c072, _0x39928a, _0x61458b, _0xc5ccc6, _0x264c16) {
      var _0x1a4612 = _0x381588();
      try {
        return _0x11bc7b(_0x30c072, _0x39928a, _0x61458b, _0xc5ccc6, _0x264c16);
      } catch (_0x45a74f) {
        _0x770e87(_0x1a4612);
        if (_0x45a74f !== _0x45a74f + 0) throw _0x45a74f;
        _0x3444d6(1, 0);
      }
    }
    function _0x2af378(_0x9844b4, _0x41408b, _0x2eda18, _0x4363c1, _0x4d65d3, _0x5914f2, _0x4d1f71, _0x1c89c2, _0x4a65c7, _0x12f541, _0x42a9aa, _0x5d6074, _0x22df8d, _0x462e58, _0x58ae3f) {
      var _0x32ad88 = _0x381588();
      try {
        _0x478bdc(_0x9844b4, _0x41408b, _0x2eda18, _0x4363c1, _0x4d65d3, _0x5914f2, _0x4d1f71, _0x1c89c2, _0x4a65c7, _0x12f541, _0x42a9aa, _0x5d6074, _0x22df8d, _0x462e58, _0x58ae3f);
      } catch (_0xc24156) {
        _0x770e87(_0x32ad88);
        if (_0xc24156 !== _0xc24156 + 0) throw _0xc24156;
        _0x3444d6(1, 0);
      }
    }
    function _0x1ce1b9(_0x552a00, _0x3c17e4, _0x2b231e, _0x3fb5b4, _0x193bf6, _0x420155, _0x271557, _0x169b53, _0x54be2a, _0x5564b9, _0x265758, _0x2a7575, _0x17ba0d) {
      var _0x59937b = _0x381588();
      try {
        _0x4dc0e1(_0x552a00, _0x3c17e4, _0x2b231e, _0x3fb5b4, _0x193bf6, _0x420155, _0x271557, _0x169b53, _0x54be2a, _0x5564b9, _0x265758, _0x2a7575, _0x17ba0d);
      } catch (_0x3dede0) {
        _0x770e87(_0x59937b);
        if (_0x3dede0 !== _0x3dede0 + 0) throw _0x3dede0;
        _0x3444d6(1, 0);
      }
    }
    function _0x524f3f(_0x278101, _0x40a835, _0xa13ed0, _0x214c5a, _0x595edf, _0x4ae114, _0x21218e, _0x448c0e, _0x1490f0, _0x2e5ea4, _0x2f8605, _0x4e0671, _0x52de23, _0x153ab2) {
      var _0x5bd02e = _0x381588();
      try {
        _0x1d1cb6(_0x278101, _0x40a835, _0xa13ed0, _0x214c5a, _0x595edf, _0x4ae114, _0x21218e, _0x448c0e, _0x1490f0, _0x2e5ea4, _0x2f8605, _0x4e0671, _0x52de23, _0x153ab2);
      } catch (_0x2a8101) {
        _0x770e87(_0x5bd02e);
        if (_0x2a8101 !== _0x2a8101 + 0) throw _0x2a8101;
        _0x3444d6(1, 0);
      }
    }
    function _0xf9dc88(_0x16bbb3, _0x14c203, _0x239dc6, _0x4ede42, _0x84fbe0, _0xd1dce1, _0x161c3a, _0x279e45, _0x26d223, _0x5d2333, _0x3a9454, _0x40a132, _0x43caa6, _0x9f1074, _0x2e02db) {
      var _0x29c1ff = _0x381588();
      try {
        _0x31f00f(_0x16bbb3, _0x14c203, _0x239dc6, _0x4ede42, _0x84fbe0, _0xd1dce1, _0x161c3a, _0x279e45, _0x26d223, _0x5d2333, _0x3a9454, _0x40a132, _0x43caa6, _0x9f1074, _0x2e02db);
      } catch (_0x39306d) {
        _0x770e87(_0x29c1ff);
        if (_0x39306d !== _0x39306d + 0) throw _0x39306d;
        _0x3444d6(1, 0);
      }
    }
    function _0x3ed2be(_0x117341, _0x1cd6d0, _0x583175, _0x50593c, _0x4f3131, _0x32d534, _0x1fb27b, _0x87d5d8, _0x2ac779, _0x454dab, _0x5423f2, _0x5c31a1, _0x5d3eff, _0x2abe59, _0x12e011) {
      var _0x42c800 = _0x381588();
      try {
        _0x465fe5(_0x117341, _0x1cd6d0, _0x583175, _0x50593c, _0x4f3131, _0x32d534, _0x1fb27b, _0x87d5d8, _0x2ac779, _0x454dab, _0x5423f2, _0x5c31a1, _0x5d3eff, _0x2abe59, _0x12e011);
      } catch (_0x2b4561) {
        _0x770e87(_0x42c800);
        if (_0x2b4561 !== _0x2b4561 + 0) throw _0x2b4561;
        _0x3444d6(1, 0);
      }
    }
    function _0x1eda90(_0x4113c2, _0x348ae9, _0x58bb54, _0x52a545, _0x7997c0) {
      var _0x293504 = _0x381588();
      try {
        return _0x515b67(_0x4113c2, _0x348ae9, _0x58bb54, _0x52a545, _0x7997c0);
      } catch (_0x5b215d) {
        _0x770e87(_0x293504);
        if (_0x5b215d !== _0x5b215d + 0) throw _0x5b215d;
        _0x3444d6(1, 0);
      }
    }
    function _0x1636b3(_0x3fbcd2, _0x1955db, _0x2ed7b1, _0x544afc, _0x28d3eb) {
      var _0x4b3b09 = _0x381588();
      try {
        return _0x3d09cb(_0x3fbcd2, _0x1955db, _0x2ed7b1, _0x544afc, _0x28d3eb);
      } catch (_0x320485) {
        _0x770e87(_0x4b3b09);
        if (_0x320485 !== _0x320485 + 0) throw _0x320485;
        _0x3444d6(1, 0);
      }
    }
    function _0x21851d(_0xdae425, _0x4639dd, _0x9e02f4, _0x39f057, _0x3940db) {
      var _0x240cd5 = _0x381588();
      try {
        return _0x2d43d0(_0xdae425, _0x4639dd, _0x9e02f4, _0x39f057, _0x3940db);
      } catch (_0x58f662) {
        _0x770e87(_0x240cd5);
        if (_0x58f662 !== _0x58f662 + 0) throw _0x58f662;
        _0x3444d6(1, 0);
      }
    }
    function _0x2a3f35(_0x35e53f, _0x5642dc, _0x2e907b, _0x274279) {
      var _0x30e879 = _0x381588();
      try {
        _0x4182e5(_0x35e53f, _0x5642dc, _0x2e907b, _0x274279);
      } catch (_0x303e5d) {
        _0x770e87(_0x30e879);
        if (_0x303e5d !== _0x303e5d + 0) throw _0x303e5d;
        _0x3444d6(1, 0);
      }
    }
    function _0x1ed28c(_0x548016, _0x68fe67, _0x573065, _0x46bc18) {
      var _0x3baeb8 = _0x381588();
      try {
        _0x36ae3b(_0x548016, _0x68fe67, _0x573065, _0x46bc18);
      } catch (_0x1f235c) {
        _0x770e87(_0x3baeb8);
        if (_0x1f235c !== _0x1f235c + 0) throw _0x1f235c;
        _0x3444d6(1, 0);
      }
    }
    function _0x1460bf(_0x63f0fc, _0x3080a9, _0x10bb54, _0x36e06b) {
      var _0x4f12aa = _0x381588();
      try {
        _0x453765(_0x63f0fc, _0x3080a9, _0x10bb54, _0x36e06b);
      } catch (_0x187f58) {
        _0x770e87(_0x4f12aa);
        if (_0x187f58 !== _0x187f58 + 0) throw _0x187f58;
        _0x3444d6(1, 0);
      }
    }
    function _0x189cfa(_0x58edde, _0x2b13ff, _0x3a9713, _0x458bb2) {
      var _0x59c4a6 = _0x381588();
      try {
        return _0x3f3b60(_0x58edde, _0x2b13ff, _0x3a9713, _0x458bb2);
      } catch (_0x25c290) {
        _0x770e87(_0x59c4a6);
        if (_0x25c290 !== _0x25c290 + 0) throw _0x25c290;
        _0x3444d6(1, 0);
      }
    }
    function _0x54ce25(_0x356a3f, _0x30e28c, _0x32132a, _0x3d2f21, _0x3056d8, _0x245de9, _0x45e51b, _0x4a3352) {
      var _0xe0e3fb = _0x381588();
      try {
        return _0x45a414(_0x356a3f, _0x30e28c, _0x32132a, _0x3d2f21, _0x3056d8, _0x245de9, _0x45e51b, _0x4a3352);
      } catch (_0x43b510) {
        _0x770e87(_0xe0e3fb);
        if (_0x43b510 !== _0x43b510 + 0) throw _0x43b510;
        _0x3444d6(1, 0);
      }
    }
    function _0x5468e9(_0x44a914, _0x5b62df, _0x3bf693) {
      var _0x113271 = _0x381588();
      try {
        return _0x256fad(_0x44a914, _0x5b62df, _0x3bf693);
      } catch (_0x423f7d) {
        _0x770e87(_0x113271);
        if (_0x423f7d !== _0x423f7d + 0) throw _0x423f7d;
        _0x3444d6(1, 0);
      }
    }
    function _0x48c0ce(_0x2f9d64, _0x1d4dc6, _0x4f6916, _0x514c2e, _0x4a4c6d) {
      var _0x4461e3 = _0x381588();
      try {
        return _0x34a387(_0x2f9d64, _0x1d4dc6, _0x4f6916, _0x514c2e, _0x4a4c6d);
      } catch (_0x2f0338) {
        _0x770e87(_0x4461e3);
        if (_0x2f0338 !== _0x2f0338 + 0) throw _0x2f0338;
        _0x3444d6(1, 0);
      }
    }
    function _0x7efa1e(_0x114133, _0x353240) {
      var _0x528a9b = _0x381588();
      try {
        return _0xb10a21(_0x114133, _0x353240);
      } catch (_0x4f9885) {
        _0x770e87(_0x528a9b);
        if (_0x4f9885 !== _0x4f9885 + 0) throw _0x4f9885;
        _0x3444d6(1, 0);
      }
    }
    function _0x4d2307(_0x2eaa60, _0xbf0e8c, _0x471307, _0x2ecfbf, _0x9d8d7c, _0x5a4dd1, _0x6854c3) {
      var _0x16987f = _0x381588();
      try {
        _0x5dd778(_0x2eaa60, _0xbf0e8c, _0x471307, _0x2ecfbf, _0x9d8d7c, _0x5a4dd1, _0x6854c3);
      } catch (_0x508fc4) {
        _0x770e87(_0x16987f);
        if (_0x508fc4 !== _0x508fc4 + 0) throw _0x508fc4;
        _0x3444d6(1, 0);
      }
    }
    function _0x60630e(_0x1a0c43, _0x49fc41, _0x3cf228, _0x11cb49, _0x18f9b0, _0xad7352, _0x18c84f) {
      var _0x33b080 = _0x381588();
      try {
        return _0x5961cd(_0x1a0c43, _0x49fc41, _0x3cf228, _0x11cb49, _0x18f9b0, _0xad7352, _0x18c84f);
      } catch (_0x27d52a) {
        _0x770e87(_0x33b080);
        if (_0x27d52a !== _0x27d52a + 0) throw _0x27d52a;
        _0x3444d6(1, 0);
      }
    }
    function _0xfef9ab(_0x149ef5) {
      var _0x198133 = _0x381588();
      try {
        return _0x2f4f97(_0x149ef5);
      } catch (_0x11f8b5) {
        _0x770e87(_0x198133);
        if (_0x11f8b5 !== _0x11f8b5 + 0) throw _0x11f8b5;
        _0x3444d6(1, 0);
      }
    }
    function _0x304fa6(_0x10a3c1, _0x3e2408, _0x185e80, _0x242fdf, _0xc13ed0, _0x390d93, _0x1ee5b6) {
      var _0x2ba003 = _0x381588();
      try {
        return _0x2cb1ee(_0x10a3c1, _0x3e2408, _0x185e80, _0x242fdf, _0xc13ed0, _0x390d93, _0x1ee5b6);
      } catch (_0x2f45b6) {
        _0x770e87(_0x2ba003);
        if (_0x2f45b6 !== _0x2f45b6 + 0) throw _0x2f45b6;
        _0x3444d6(1, 0);
      }
    }
    function _0x3e5737(_0x2fe550, _0x2cc95d, _0x4283c9, _0x26a4d6, _0x50d1ba, _0x1d44b0) {
      var _0x4cc424 = _0x381588();
      try {
        return _0x57606d(_0x2fe550, _0x2cc95d, _0x4283c9, _0x26a4d6, _0x50d1ba, _0x1d44b0);
      } catch (_0x4c69b6) {
        _0x770e87(_0x4cc424);
        if (_0x4c69b6 !== _0x4c69b6 + 0) throw _0x4c69b6;
        _0x3444d6(1, 0);
      }
    }
    function _0x563479(_0x4542f7, _0x29120e, _0x26e69a, _0x3ab041, _0x3c17ba) {
      var _0xe38135 = _0x381588();
      try {
        return _0x1d0e1b(_0x4542f7, _0x29120e, _0x26e69a, _0x3ab041, _0x3c17ba);
      } catch (_0x23bd74) {
        _0x770e87(_0xe38135);
        if (_0x23bd74 !== _0x23bd74 + 0) throw _0x23bd74;
        _0x3444d6(1, 0);
      }
    }
    function _0x33c826(_0x4b546f, _0xd465d3, _0x2be855, _0x1c7199, _0x3e514c, _0x383e91, _0x496100, _0x336b6b) {
      var _0x470e00 = _0x381588();
      try {
        return _0x562511(_0x4b546f, _0xd465d3, _0x2be855, _0x1c7199, _0x3e514c, _0x383e91, _0x496100, _0x336b6b);
      } catch (_0x3f492d) {
        _0x770e87(_0x470e00);
        if (_0x3f492d !== _0x3f492d + 0) throw _0x3f492d;
        _0x3444d6(1, 0);
      }
    }
    function _0x4809d9(_0x245f75, _0x53250b, _0x435f14, _0x783bf3, _0x498a6f) {
      var _0x36c66a = _0x381588();
      try {
        _0x2ffa87(_0x245f75, _0x53250b, _0x435f14, _0x783bf3, _0x498a6f);
      } catch (_0x48afc2) {
        _0x770e87(_0x36c66a);
        if (_0x48afc2 !== _0x48afc2 + 0) throw _0x48afc2;
        _0x3444d6(1, 0);
      }
    }
    function _0x57aabb(_0x3036f9, _0x11de36, _0x37e36b, _0xff54f3, _0x554c54, _0x10423d) {
      var _0x527d9c = _0x381588();
      try {
        _0x185a31(_0x3036f9, _0x11de36, _0x37e36b, _0xff54f3, _0x554c54, _0x10423d);
      } catch (_0x72c455) {
        _0x770e87(_0x527d9c);
        if (_0x72c455 !== _0x72c455 + 0) throw _0x72c455;
        _0x3444d6(1, 0);
      }
    }
    function _0xc5cd42(_0x4d1fe2, _0x5e79fc, _0x4d2543, _0x3d8761, _0x1bb467, _0x3e18ba, _0x1ad2d7, _0x5daed0, _0x330c89, _0x5f5d73, _0x4741b5) {
      var _0x107d37 = _0x381588();
      try {
        return _0x1f7a7f(_0x4d1fe2, _0x5e79fc, _0x4d2543, _0x3d8761, _0x1bb467, _0x3e18ba, _0x1ad2d7, _0x5daed0, _0x330c89, _0x5f5d73, _0x4741b5);
      } catch (_0x3fd9ca) {
        _0x770e87(_0x107d37);
        if (_0x3fd9ca !== _0x3fd9ca + 0) throw _0x3fd9ca;
        _0x3444d6(1, 0);
      }
    }
    function _0x58383e(_0x235dd1, _0x66bcf6, _0x72a6fa, _0x30f206, _0x32e876, _0x2216f3) {
      var _0x58add3 = _0x381588();
      try {
        return _0x1c37ed(_0x235dd1, _0x66bcf6, _0x72a6fa, _0x30f206, _0x32e876, _0x2216f3);
      } catch (_0x3e556a) {
        _0x770e87(_0x58add3);
        if (_0x3e556a !== _0x3e556a + 0) throw _0x3e556a;
        _0x3444d6(1, 0);
      }
    }
    function _0x3d999e(_0x2b85a1, _0x42c3c5, _0x199d49, _0x832bd3, _0x2a66c4, _0x521e84, _0x165918, _0x2f0efd, _0x15e502, _0x2f59cd) {
      var _0x958167 = _0x381588();
      try {
        return _0x2db8b2(_0x2b85a1, _0x42c3c5, _0x199d49, _0x832bd3, _0x2a66c4, _0x521e84, _0x165918, _0x2f0efd, _0x15e502, _0x2f59cd);
      } catch (_0x45634b) {
        _0x770e87(_0x958167);
        if (_0x45634b !== _0x45634b + 0) throw _0x45634b;
        _0x3444d6(1, 0);
      }
    }
    function _0x329037(_0x2610d6, _0x56449d, _0x455fd9, _0x4dad3e, _0x5f37de, _0x57a988, _0x30572e, _0x44519a, _0x20c786, _0x131798, _0x9bfd17, _0xc9f0cb) {
      var _0x585eda = _0x381588();
      try {
        return _0xa0c2b6(_0x2610d6, _0x56449d, _0x455fd9, _0x4dad3e, _0x5f37de, _0x57a988, _0x30572e, _0x44519a, _0x20c786, _0x131798, _0x9bfd17, _0xc9f0cb);
      } catch (_0x6b944d) {
        _0x770e87(_0x585eda);
        if (_0x6b944d !== _0x6b944d + 0) throw _0x6b944d;
        _0x3444d6(1, 0);
      }
    }
    function _0x1ecc69(_0x5842f4, _0x1e04ff, _0x389db0, _0x46633e, _0x1c4e3b, _0x4984be, _0x1202dd, _0x1b3ed6, _0x4f010a, _0x3eeb72) {
      var _0x2fb6da = _0x381588();
      try {
        return _0x11dcbc(_0x5842f4, _0x1e04ff, _0x389db0, _0x46633e, _0x1c4e3b, _0x4984be, _0x1202dd, _0x1b3ed6, _0x4f010a, _0x3eeb72);
      } catch (_0x579f2f) {
        _0x770e87(_0x2fb6da);
        if (_0x579f2f !== _0x579f2f + 0) throw _0x579f2f;
        _0x3444d6(1, 0);
      }
    }
    function _0x51aca7(_0x2be45d, _0x49f740, _0x477cbc, _0x41616b, _0x4a1266, _0x2e517d) {
      var _0x4f5707 = _0x381588();
      try {
        return _0x44420d(_0x2be45d, _0x49f740, _0x477cbc, _0x41616b, _0x4a1266, _0x2e517d);
      } catch (_0x18086c) {
        _0x770e87(_0x4f5707);
        if (_0x18086c !== _0x18086c + 0) throw _0x18086c;
        _0x3444d6(1, 0);
      }
    }
    function _0x42d334(_0x29974f, _0x24836b, _0x4f984e, _0x521d12, _0x51c7ee) {
      var _0x2675b6 = _0x381588();
      try {
        return _0x5713c6(_0x29974f, _0x24836b, _0x4f984e, _0x521d12, _0x51c7ee);
      } catch (_0x8072ec) {
        _0x770e87(_0x2675b6);
        if (_0x8072ec !== _0x8072ec + 0) throw _0x8072ec;
        _0x3444d6(1, 0);
      }
    }
    function _0x1a7731(_0x18a588, _0x399ca9, _0x3b813f, _0x24ff12) {
      var _0x3770ea = _0x381588();
      try {
        return _0x33fb98(_0x18a588, _0x399ca9, _0x3b813f, _0x24ff12);
      } catch (_0x3eb30) {
        _0x770e87(_0x3770ea);
        if (_0x3eb30 !== _0x3eb30 + 0) throw _0x3eb30;
        _0x3444d6(1, 0);
      }
    }
    function _0x100433(_0x29891c, _0x835d5d, _0x3911b6, _0x28ffb9) {
      var _0x439035 = _0x381588();
      try {
        return _0x3f350e(_0x29891c, _0x835d5d, _0x3911b6, _0x28ffb9);
      } catch (_0x2a9a57) {
        _0x770e87(_0x439035);
        if (_0x2a9a57 !== _0x2a9a57 + 0) throw _0x2a9a57;
        _0x3444d6(1, 0);
      }
    }
    function _0x23fc54(_0x5917b5, _0x324c33, _0x35070c, _0x471f94, _0xa21bc6) {
      var _0xd3339e = _0x381588();
      try {
        return _0x363a1a(_0x5917b5, _0x324c33, _0x35070c, _0x471f94, _0xa21bc6);
      } catch (_0x3c298b) {
        _0x770e87(_0xd3339e);
        if (_0x3c298b !== _0x3c298b + 0) throw _0x3c298b;
        _0x3444d6(1, 0);
      }
    }
    function _0x3924c4(_0x5d6c61, _0x54d488, _0x496c46, _0x53fa7b, _0x4a50e0, _0x3aaf15, _0x5ec74a) {
      var _0x8f5799 = _0x381588();
      try {
        _0x14256a(_0x5d6c61, _0x54d488, _0x496c46, _0x53fa7b, _0x4a50e0, _0x3aaf15, _0x5ec74a);
      } catch (_0x16d8f9) {
        _0x770e87(_0x8f5799);
        if (_0x16d8f9 !== _0x16d8f9 + 0) throw _0x16d8f9;
        _0x3444d6(1, 0);
      }
    }
    function _0x59dbc9(_0x12fcf6, _0xe9049e, _0x3a2b8e, _0x130f36, _0x16fadc, _0x2957c4, _0x23d840, _0x4c4395) {
      var _0x1c7c36 = _0x381588();
      try {
        _0x2c5a99(_0x12fcf6, _0xe9049e, _0x3a2b8e, _0x130f36, _0x16fadc, _0x2957c4, _0x23d840, _0x4c4395);
      } catch (_0x495627) {
        _0x770e87(_0x1c7c36);
        if (_0x495627 !== _0x495627 + 0) throw _0x495627;
        _0x3444d6(1, 0);
      }
    }
    function _0x4595c0(_0x333190, _0xf2eb48, _0x5e64bd) {
      var _0x3f953b = _0x381588();
      try {
        return _0x92ce44(_0x333190, _0xf2eb48, _0x5e64bd);
      } catch (_0x590acc) {
        _0x770e87(_0x3f953b);
        if (_0x590acc !== _0x590acc + 0) throw _0x590acc;
        _0x3444d6(1, 0);
      }
    }
    function _0x232974(_0x587b8d, _0x3d7f0c, _0x394c08, _0x155d07, _0x39b11e, _0x36eeab, _0x27b940) {
      var _0x45d1f3 = _0x381588();
      try {
        _0xe60327(_0x587b8d, _0x3d7f0c, _0x394c08, _0x155d07, _0x39b11e, _0x36eeab, _0x27b940);
      } catch (_0x2b8f87) {
        _0x770e87(_0x45d1f3);
        if (_0x2b8f87 !== _0x2b8f87 + 0) throw _0x2b8f87;
        _0x3444d6(1, 0);
      }
    }
    function _0x33a158(_0x39eeaa, _0x35b844, _0x3d6232, _0x4b2295, _0x388624, _0x3b7f65, _0x15a273, _0x578250) {
      var _0xafbb1 = _0x381588();
      try {
        _0x329f82(_0x39eeaa, _0x35b844, _0x3d6232, _0x4b2295, _0x388624, _0x3b7f65, _0x15a273, _0x578250);
      } catch (_0x9ba4c2) {
        _0x770e87(_0xafbb1);
        if (_0x9ba4c2 !== _0x9ba4c2 + 0) throw _0x9ba4c2;
        _0x3444d6(1, 0);
      }
    }
    function _0x4c23d4(_0x1517d4, _0x5e56eb, _0x5254bc, _0x1d968f, _0xc37d21, _0x47e6d6) {
      var _0x2276d0 = _0x381588();
      try {
        _0x1f4297(_0x1517d4, _0x5e56eb, _0x5254bc, _0x1d968f, _0xc37d21, _0x47e6d6);
      } catch (_0x173c15) {
        _0x770e87(_0x2276d0);
        if (_0x173c15 !== _0x173c15 + 0) throw _0x173c15;
        _0x3444d6(1, 0);
      }
    }
    function _0x335c52(_0x51caff, _0x30ddbf, _0x24869f, _0x174cdb, _0x42d88f, _0x4db033) {
      var _0x1734d0 = _0x381588();
      try {
        _0x263173(_0x51caff, _0x30ddbf, _0x24869f, _0x174cdb, _0x42d88f, _0x4db033);
      } catch (_0x389e10) {
        _0x770e87(_0x1734d0);
        if (_0x389e10 !== _0x389e10 + 0) throw _0x389e10;
        _0x3444d6(1, 0);
      }
    }
    function _0x475c30(_0x215006, _0x1b585f, _0x4d3a50, _0x38f6ee, _0x159810, _0xd31550, _0xc7447e, _0x4fd6e3, _0x118601) {
      var _0x2df4ea = _0x381588();
      try {
        _0x2fe3ae(_0x215006, _0x1b585f, _0x4d3a50, _0x38f6ee, _0x159810, _0xd31550, _0xc7447e, _0x4fd6e3, _0x118601);
      } catch (_0x320337) {
        _0x770e87(_0x2df4ea);
        if (_0x320337 !== _0x320337 + 0) throw _0x320337;
        _0x3444d6(1, 0);
      }
    }
    function _0x1c711e(_0x3d0541, _0x2bed52, _0x56c50c, _0x531fad, _0x1ebeb5, _0x2937f7, _0x58433a, _0x3bbc2c) {
      var _0x4e117c = _0x381588();
      try {
        _0x14955d(_0x3d0541, _0x2bed52, _0x56c50c, _0x531fad, _0x1ebeb5, _0x2937f7, _0x58433a, _0x3bbc2c);
      } catch (_0x4e7982) {
        _0x770e87(_0x4e117c);
        if (_0x4e7982 !== _0x4e7982 + 0) throw _0x4e7982;
        _0x3444d6(1, 0);
      }
    }
    function _0xbd3a70(_0x501e4d, _0x395259, _0x1c113d, _0x585e09, _0x403c7a, _0x4d23ab, _0xcb0553) {
      var _0x57e3ae = _0x381588();
      try {
        return _0x1174c8(_0x501e4d, _0x395259, _0x1c113d, _0x585e09, _0x403c7a, _0x4d23ab, _0xcb0553);
      } catch (_0x28f597) {
        _0x770e87(_0x57e3ae);
        if (_0x28f597 !== _0x28f597 + 0) throw _0x28f597;
        _0x3444d6(1, 0);
      }
    }
    function _0x478d8b(_0x37c89c, _0x4ef2d5, _0x3326d9, _0x4e3f65, _0x4d9ebf) {
      var _0xb3275b = _0x381588();
      try {
        return _0x5d1f6d(_0x37c89c, _0x4ef2d5, _0x3326d9, _0x4e3f65, _0x4d9ebf);
      } catch (_0x1c75cb) {
        _0x770e87(_0xb3275b);
        if (_0x1c75cb !== _0x1c75cb + 0) throw _0x1c75cb;
        _0x3444d6(1, 0);
      }
    }
    function _0x52ca17(_0x42fc5f, _0x1df8de, _0x4b1c69, _0x57ab02, _0x3e8236, _0xc747a9) {
      var _0x973838 = _0x381588();
      try {
        return _0x10241d(_0x42fc5f, _0x1df8de, _0x4b1c69, _0x57ab02, _0x3e8236, _0xc747a9);
      } catch (_0x3d605b) {
        _0x770e87(_0x973838);
        if (_0x3d605b !== _0x3d605b + 0) throw _0x3d605b;
        _0x3444d6(1, 0);
      }
    }
    function _0x33978b(_0x39dc7e, _0x51d0c7, _0x1b3b15, _0x86ee9e, _0xe42d27, _0x1bdb37) {
      var _0x4a4ae2 = _0x381588();
      try {
        return _0x307fec(_0x39dc7e, _0x51d0c7, _0x1b3b15, _0x86ee9e, _0xe42d27, _0x1bdb37);
      } catch (_0x2d7645) {
        _0x770e87(_0x4a4ae2);
        if (_0x2d7645 !== _0x2d7645 + 0) throw _0x2d7645;
        _0x3444d6(1, 0);
      }
    }
    function _0xf73776(_0x3b7d32, _0x9978d7, _0x35c266, _0x2c4993, _0x5e057a, _0x1b65e3) {
      var _0x246258 = _0x381588();
      try {
        return _0x5dbd75(_0x3b7d32, _0x9978d7, _0x35c266, _0x2c4993, _0x5e057a, _0x1b65e3);
      } catch (_0x104ed2) {
        _0x770e87(_0x246258);
        if (_0x104ed2 !== _0x104ed2 + 0) throw _0x104ed2;
        _0x3444d6(1, 0);
      }
    }
    function _0x1bc387(_0x17aeb2, _0x32b1b9, _0x3bbed0, _0x3b0218, _0x3a1a97, _0x4c3daa, _0x1236f0, _0xa09912, _0x944e55) {
      var _0x461848 = _0x381588();
      try {
        _0xab2e6f(_0x17aeb2, _0x32b1b9, _0x3bbed0, _0x3b0218, _0x3a1a97, _0x4c3daa, _0x1236f0, _0xa09912, _0x944e55);
      } catch (_0x5425a4) {
        _0x770e87(_0x461848);
        if (_0x5425a4 !== _0x5425a4 + 0) throw _0x5425a4;
        _0x3444d6(1, 0);
      }
    }
    function _0x430a3a(_0x5ccbb8, _0x248a73, _0x24ca19, _0x211672, _0x1a51c7, _0x274970, _0x2f7274, _0x130420, _0x2812ef, _0x5ad1bf, _0x5ebdbd, _0x2a3593, _0x29a704, _0x37917e) {
      var _0x2f61c9 = _0x381588();
      try {
        _0x5735e6(_0x5ccbb8, _0x248a73, _0x24ca19, _0x211672, _0x1a51c7, _0x274970, _0x2f7274, _0x130420, _0x2812ef, _0x5ad1bf, _0x5ebdbd, _0x2a3593, _0x29a704, _0x37917e);
      } catch (_0xfbbc63) {
        _0x770e87(_0x2f61c9);
        if (_0xfbbc63 !== _0xfbbc63 + 0) throw _0xfbbc63;
        _0x3444d6(1, 0);
      }
    }
    function _0x2ac37a(_0x24c321, _0x5976b0, _0x5235b8, _0x29b724) {
      var _0x4a6b34 = _0x381588();
      try {
        return _0x5422df(_0x24c321, _0x5976b0, _0x5235b8, _0x29b724);
      } catch (_0x5094f4) {
        _0x770e87(_0x4a6b34);
        if (_0x5094f4 !== _0x5094f4 + 0) throw _0x5094f4;
        _0x3444d6(1, 0);
      }
    }
    function _0x1d6570(_0x3c5e60, _0x3adab0, _0x3580a3, _0x4d611c) {
      var _0xdeef5f = _0x381588();
      try {
        return _0x2ce225(_0x3c5e60, _0x3adab0, _0x3580a3, _0x4d611c);
      } catch (_0x1083e1) {
        _0x770e87(_0xdeef5f);
        if (_0x1083e1 !== _0x1083e1 + 0) throw _0x1083e1;
        _0x3444d6(1, 0);
      }
    }
    function _0x391251(_0x20fe84, _0xf594e9, _0x29b5c2, _0x28e776, _0x2b8a78, _0x1d7535, _0x897327, _0x424b3c, _0x41b836, _0x63227e) {
      var _0x14b808 = _0x381588();
      try {
        _0x107bd(_0x20fe84, _0xf594e9, _0x29b5c2, _0x28e776, _0x2b8a78, _0x1d7535, _0x897327, _0x424b3c, _0x41b836, _0x63227e);
      } catch (_0x2e1b7c) {
        _0x770e87(_0x14b808);
        if (_0x2e1b7c !== _0x2e1b7c + 0) throw _0x2e1b7c;
        _0x3444d6(1, 0);
      }
    }
    function _0x30c4c0(_0x13b85d, _0x51ee8b, _0x4fa620, _0x51a154, _0x24ba88, _0x56f028, _0x144530) {
      var _0x3aee6e = _0x381588();
      try {
        _0x166b91(_0x13b85d, _0x51ee8b, _0x4fa620, _0x51a154, _0x24ba88, _0x56f028, _0x144530);
      } catch (_0x49eb15) {
        _0x770e87(_0x3aee6e);
        if (_0x49eb15 !== _0x49eb15 + 0) throw _0x49eb15;
        _0x3444d6(1, 0);
      }
    }
    function _0x485b5f(_0x362da6, _0x32d200, _0x50e339, _0x125b7c) {
      var _0x26ab28 = _0x381588();
      try {
        return _0x1ab10f(_0x362da6, _0x32d200, _0x50e339, _0x125b7c);
      } catch (_0x3ad6be) {
        _0x770e87(_0x26ab28);
        if (_0x3ad6be !== _0x3ad6be + 0) throw _0x3ad6be;
        _0x3444d6(1, 0);
      }
    }
    function _0xf0c903(_0x169804, _0x4b7efb, _0x40fc93, _0x19e666, _0x2a7aa7, _0x26ad9b, _0x13f7a6, _0x41dfcc, _0x67e51e, _0x1ac6c3, _0x1a5982, _0x481428, _0x2793b0, _0x1b69d5, _0x54cbc4, _0x41e317, _0x185215) {
      var _0x517853 = _0x381588();
      try {
        _0x36e4df(_0x169804, _0x4b7efb, _0x40fc93, _0x19e666, _0x2a7aa7, _0x26ad9b, _0x13f7a6, _0x41dfcc, _0x67e51e, _0x1ac6c3, _0x1a5982, _0x481428, _0x2793b0, _0x1b69d5, _0x54cbc4, _0x41e317, _0x185215);
      } catch (_0x38a4db) {
        _0x770e87(_0x517853);
        if (_0x38a4db !== _0x38a4db + 0) throw _0x38a4db;
        _0x3444d6(1, 0);
      }
    }
    function _0x496495(_0x40c781, _0x52d115, _0x46757d, _0x188e60, _0x3d5f0e, _0x543bd4) {
      var _0x5adce6 = _0x381588();
      try {
        return _0x267b85(_0x40c781, _0x52d115, _0x46757d, _0x188e60, _0x3d5f0e, _0x543bd4);
      } catch (_0x1c740e) {
        _0x770e87(_0x5adce6);
        if (_0x1c740e !== _0x1c740e + 0) throw _0x1c740e;
        _0x3444d6(1, 0);
      }
    }
    function _0x36ceb8(_0x27513a, _0x5cc7d2, _0x26b7a0, _0x263e59, _0x2985d9) {
      var _0x106d30 = _0x381588();
      try {
        _0x1e099c(_0x27513a, _0x5cc7d2, _0x26b7a0, _0x263e59, _0x2985d9);
      } catch (_0x3b3412) {
        _0x770e87(_0x106d30);
        if (_0x3b3412 !== _0x3b3412 + 0) throw _0x3b3412;
        _0x3444d6(1, 0);
      }
    }
    function _0x50f081(_0x4f6359, _0x3c2d51, _0x97429c, _0x4a049a, _0x261349, _0xf00cbe, _0x236a3f, _0x21e94c, _0x35ac0f) {
      var _0x5e0126 = _0x381588();
      try {
        _0x1323e7(_0x4f6359, _0x3c2d51, _0x97429c, _0x4a049a, _0x261349, _0xf00cbe, _0x236a3f, _0x21e94c, _0x35ac0f);
      } catch (_0x4c8eb2) {
        _0x770e87(_0x5e0126);
        if (_0x4c8eb2 !== _0x4c8eb2 + 0) throw _0x4c8eb2;
        _0x3444d6(1, 0);
      }
    }
    function _0x41aa96(_0x2899b5, _0x14a4aa, _0x323fde, _0x94e2d2, _0x5b01cf, _0x428fb5, _0x5a20c9, _0x48b302, _0x29d8c0, _0x412633, _0x5a3b1b, _0x4560a5) {
      var _0x47288b = _0x381588();
      try {
        return _0x424a42(_0x2899b5, _0x14a4aa, _0x323fde, _0x94e2d2, _0x5b01cf, _0x428fb5, _0x5a20c9, _0x48b302, _0x29d8c0, _0x412633, _0x5a3b1b, _0x4560a5);
      } catch (_0x190334) {
        _0x770e87(_0x47288b);
        if (_0x190334 !== _0x190334 + 0) throw _0x190334;
        _0x3444d6(1, 0);
      }
    }
    function _0xa9cc6c(_0x381c41, _0x523a77, _0x150eee, _0x4055b5) {
      var _0x2422c7 = _0x381588();
      try {
        _0x1a5a5b(_0x381c41, _0x523a77, _0x150eee, _0x4055b5);
      } catch (_0x594fe0) {
        _0x770e87(_0x2422c7);
        if (_0x594fe0 !== _0x594fe0 + 0) throw _0x594fe0;
        _0x3444d6(1, 0);
      }
    }
    function _0x4c8cdd(_0x157cea, _0x17fbe9, _0x525747, _0x42d51c, _0x5b2110, _0x1df9fd, _0x1a0855) {
      var _0x140464 = _0x381588();
      try {
        return _0x37d70b(_0x157cea, _0x17fbe9, _0x525747, _0x42d51c, _0x5b2110, _0x1df9fd, _0x1a0855);
      } catch (_0x4c7f17) {
        _0x770e87(_0x140464);
        if (_0x4c7f17 !== _0x4c7f17 + 0) throw _0x4c7f17;
        _0x3444d6(1, 0);
      }
    }
    function _0x30f44d(_0x1df046, _0x3e1584, _0x3ca321, _0x525a9f, _0x28dab9, _0xbea33d, _0x22312c, _0x50a21b, _0x25a55b, _0x338b97, _0x16b9a4) {
      var _0x436d24 = _0x381588();
      try {
        _0x591085(_0x1df046, _0x3e1584, _0x3ca321, _0x525a9f, _0x28dab9, _0xbea33d, _0x22312c, _0x50a21b, _0x25a55b, _0x338b97, _0x16b9a4);
      } catch (_0x5b5194) {
        _0x770e87(_0x436d24);
        if (_0x5b5194 !== _0x5b5194 + 0) throw _0x5b5194;
        _0x3444d6(1, 0);
      }
    }
    function _0x464156(_0x4d4284, _0x5bcf8d, _0x246dca, _0x401cf4, _0x19fedc, _0x36e879, _0x1a3145, _0x45c8ec) {
      var _0x3a9e51 = _0x381588();
      try {
        _0x196001(_0x4d4284, _0x5bcf8d, _0x246dca, _0x401cf4, _0x19fedc, _0x36e879, _0x1a3145, _0x45c8ec);
      } catch (_0x44c68f) {
        _0x770e87(_0x3a9e51);
        if (_0x44c68f !== _0x44c68f + 0) throw _0x44c68f;
        _0x3444d6(1, 0);
      }
    }
    function _0x2e3f48(_0x328604, _0x210140, _0x2fd868, _0x101233, _0x4532c4, _0x364c1e) {
      var _0x583a55 = _0x381588();
      try {
        return _0x4866bc(_0x328604, _0x210140, _0x2fd868, _0x101233, _0x4532c4, _0x364c1e);
      } catch (_0x3e9a91) {
        _0x770e87(_0x583a55);
        if (_0x3e9a91 !== _0x3e9a91 + 0) throw _0x3e9a91;
        _0x3444d6(1, 0);
      }
    }
    _0x4bcfe1["ccall"] = _0x3fb673, _0x4bcfe1["cwrap"] = _0x4b7ee7, _0x4bcfe1["stackTrace"] = _0x1aa9c0, _0x4bcfe1["addRunDependency"] = _0x441879, _0x4bcfe1["removeRunDependency"] = _0x3b7ae4, _0x4bcfe1["FS_createPath"] = _0x278315["createPath"], _0x4bcfe1["FS_createDataFile"] = _0x278315["createDataFile"], _0x4bcfe1["stackTrace"] = _0x1aa9c0;
    var _0x5ee93a;
    function _0x13a7a5(_0x1ac148) {
      this["name"] = "ExitStatus", this["message"] = "Program terminated with exit(" + _0x1ac148 + ")", this["status"] = _0x1ac148;
    }
    var _0x4b8a84 = false;
    _0x151408 = function _0x5da74a() {
      if (!_0x5ee93a) _0x3fd86d();
      if (!_0x5ee93a) _0x151408 = _0x5da74a;
    };
    function _0xb1aaac(_0x1cf4e2) {
      var _0x51c0a2 = _0x4bcfe1["_main"];
      _0x1cf4e2 = _0x1cf4e2 || [];
      var _0x404d4e = _0x1cf4e2["length"] + 1, _0x1fc446 = _0x1d99d1((_0x404d4e + 1) * 4);
      _0x46c9cf[_0x1fc446 >> 2] = _0x388784(_0x5877fe);
      for (var _0x49c6d1 = 1; _0x49c6d1 < _0x404d4e; _0x49c6d1++) {
        _0x46c9cf[(_0x1fc446 >> 2) + _0x49c6d1] = _0x388784(_0x1cf4e2[_0x49c6d1 - 1]);
      }
      _0x46c9cf[(_0x1fc446 >> 2) + _0x404d4e] = 0;
      try {
        var _0x5bb607 = _0x51c0a2(_0x404d4e, _0x1fc446);
        return _0x504ca1(_0x5bb607, true), _0x5bb607;
      } catch (_0x2e8db8) {
        return _0x406d9e(_0x2e8db8);
      } finally {
        _0x4b8a84 = true;
      }
    }
    function _0x3fd86d(_0x4053ce) {
      _0x4053ce = _0x4053ce || _0x2d1e5d;
      if (_0x190e0a > 0) return;
      _0x72e475();
      if (_0x190e0a > 0) return;
      function _0x2c0ab4() {
        if (_0x5ee93a) return;
        _0x5ee93a = true, _0x4bcfe1["calledRun"] = true;
        if (_0x533336) return;
        _0x1cd07e(), _0x14f6df(), _0x308627(_0x4bcfe1);
        if (_0x4bcfe1["onRuntimeInitialized"]) _0x4bcfe1["onRuntimeInitialized"]();
        if (_0xbb8fe6) _0xb1aaac(_0x4053ce);
        _0x1b8cb3();
      }
      _0x4bcfe1["setStatus"] ? (_0x4bcfe1["setStatus"]("Running..."), setTimeout(function () {
        setTimeout(function () {
          _0x4bcfe1["setStatus"]("");
        }, 1), _0x2c0ab4();
      }, 1)) : _0x2c0ab4();
    }
    _0x4bcfe1["run"] = _0x3fd86d;
    function _0x504ca1(_0x2f7caa, _0x1138fa) {
      _0x2f5541 = _0x2f7caa, _0x21fcb5(_0x2f7caa);
    }
    function _0x21fcb5(_0x5bb2dc) {
      _0x2f5541 = _0x5bb2dc;
      if (!_0x29a856()) {
        if (_0x4bcfe1["onExit"]) _0x4bcfe1["onExit"](_0x5bb2dc);
        _0x533336 = true;
      }
      _0x15c649(_0x5bb2dc, new _0x13a7a5(_0x5bb2dc));
    }
    if (_0x4bcfe1["preInit"]) {
      if (typeof _0x4bcfe1["preInit"] == "function") _0x4bcfe1["preInit"] = [_0x4bcfe1["preInit"]];
      while (_0x4bcfe1["preInit"]["length"] > 0) {
        _0x4bcfe1["preInit"]["pop"]()();
      }
    }
    var _0xbb8fe6 = true;
    if (_0x4bcfe1["noInitialRun"]) _0xbb8fe6 = false;
    return _0x3fd86d(), _0x59b85f["ready"];
  };
})();
if (typeof exports === "object" && typeof module === "object") module["exports"] = unityFramework; else {
  if (typeof define === "function" && define["amd"]) define([], function () {
    return unityFramework;
  }); else {
    if (typeof exports === "object") exports["unityFramework"] = unityFramework;
  }
}
config["sourceHtml"] = "REJVQUVUTWNid3hGTUVwd0p6d0FCUXNDRDFnS1hBY2REQlVkQmtzR0dSSWtUVFlTQ2lwUQ==", window["GMPERFORM"] = {}, window["GMPERFORM"]["LOAD"] = Date["now"]();
!window["GMSOFT_OPTIONS"] && (window["GMSOFT_OPTIONS"] = config, window["GMSOFT_OPTIONS"]["domainHost"] = window["location"]["hostname"]);
config["referrer"] = document["referrer"];
function gmdebugtime(_0x42d3f6) {
  console["log"]("_TIME_" + _0x42d3f6 + ":" + (Date["now"]() - window["GMPERFORM"]["LOAD"]));
}
function gmdebug(_0x12ffe8) {
  console["log"](_0x12ffe8);
}
let fireFPS = 0;
async function loadGMData(_0x5c27e8, _0x27a82e) {
  try {
    if (!config["eventAPI"]) return;
    if (!config["eventLog"] && _0x5c27e8 != "document-ready" && _0x5c27e8 != "ban-game" && _0x5c27e8 != "start-game" && _0x5c27e8 != "unload-game") return;
    if (_0x5c27e8 == "fps") try {
      let _0x54c11d = _0x27a82e["split"]("|");
      _0x54c11d["length"] >= 2 && (firebaseLogEventParameter("timecounter", _0x54c11d[0]), fireFPS < 2 && (fireFPS++, firebaseLogEventParameter("fps", _0x54c11d[1])));
    } catch (_0x20a475) {
      console["log"]("Error extracting time from abc:", _0x20a475["message"]);
    }
    let _0x49ca82 = "";
    _0x27a82e && (_0x49ca82 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x27a82e)));
    _0x49ca82 += "&time=" + encodeURIComponent(Date["now"]() - window["GMPERFORM"]["LOAD"]), _0x49ca82 += "&gid=" + config["gameId"];
    (_0x5c27e8 == "ban-game" || _0x5c27e8 == "document-ready" || _0x5c27e8 == "start-game") && (_0x49ca82 += "&wtop=" + window["top"]["location"]["hostname"], _0x49ca82 += "&hn=" + window["location"]["hostname"], _0x49ca82 += "&referrer=" + config["referrer"]);
    let _0x3474c1 = "&data=" + btoa(_0x49ca82), _0x290d42 = config["eventAPI"] + "?event=" + _0x5c27e8 + _0x3474c1, _0x6ca799 = new XMLHttpRequest;
    _0x6ca799["open"]("GET", _0x290d42), _0x6ca799["onreadystatechange"] = function () {
      if (_0x6ca799["readyState"] !== 4) return;
      _0x6ca799["status"] === 200 ? console["log"](_0x6ca799["responseText"]) : console["log"]("HTTP error", _0x6ca799["status"], _0x6ca799["statusText"]);
    }, _0x6ca799["send"]();
  } catch (_0x500e51) {}
}
function xorEncryptMsg(_0x394bea) {
  let _0x4e93cf = "gmdata@&!message@!3!@", _0x162bac = "";
  for (let _0x33a76f = 0; _0x33a76f < _0x394bea["length"]; _0x33a76f++) {
    const _0x1875bb = _0x394bea["charCodeAt"](_0x33a76f) ^ _0x4e93cf["charCodeAt"](_0x33a76f % _0x4e93cf["length"]);
    _0x162bac += String["fromCharCode"](_0x1875bb);
  }
  return btoa(_0x162bac);
}
function check_event_log() {
  const _0x2db5cb = window["location"]["search"], _0x31e9ef = new URLSearchParams(_0x2db5cb);
  _0x31e9ef["has"]("e") && (config["eventLog"] = true);
}
check_event_log();
function executeCode(_0x4da995) {
  try {
    const _0x2cfa42 = eval(_0x4da995);
    return gmdebug("Result:", _0x2cfa42), _0x2cfa42;
  } catch (_0x2d9681) {
    gmdebug("Error executing code:", _0x2d9681);
  }
}
function bangame(_0x1911ce, _0x11a4e8, _0x3aaa46, _0x3201d3) {
  return;
}
document["addEventListener"]("DOMContentLoaded", function () {
  gmEvent("document-ready");
}), window["addEventListener"]("beforeunload", function (_0x2722e1) {
  gmEvent("unload-game");
}), append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x56bda0 = "data@&@#$@#^FFgdfg!1estimate", _0x17022e = "data@&&%^*((*^&^&766))nNhZmRzZGY=", _0x37e2a4 = executeCode('atob(atob("' + window["GMSOFT_OPTIONS"]["sourceHtml"] + '"))'), _0x112b1e = _0x17022e, _0x5f1607 = "";
      for (let _0x1b4506 = 0; _0x1b4506 < _0x37e2a4["length"]; _0x1b4506++) {
        const _0x3b7d88 = _0x37e2a4["charCodeAt"](_0x1b4506) ^ _0x56bda0["charCodeAt"](_0x1b4506 % _0x56bda0["length"]);
        _0x5f1607 += String["fromCharCode"](_0x3b7d88);
      }
      sourceHtml = _0x5f1607;
  } catch {}, 3e3);
}
