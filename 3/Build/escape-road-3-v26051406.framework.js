var unityFramework = (() => {
  var _0x36c523 = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== "undefined") {
    _0x36c523 = _0x36c523 || __filename;
  }
  return function (_0x59b85f) {
    _0x59b85f = _0x59b85f || {};
    var _0x4bcfe1 = typeof _0x59b85f != "undefined" ? _0x59b85f : {};
    var _0x308627;
    var _0x57536e;
    _0x4bcfe1.ready = new Promise(function (_0x3d3858, _0x28328e) {
      _0x308627 = _0x3d3858;
      _0x57536e = _0x28328e;
    });
    function _0x46897a(_0x181783, _0x22ae90) {
      _0x528b37("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.");
      return _0x181783 ? _0x344b4c(_0x18c91b, _0x181783, _0x22ae90) : '';
    }
    _0x4bcfe1.Pointer_stringify = _0x46897a;
    var _0x20a9c5 = _0x4c743f().match(new RegExp("(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)"));
    if (_0x20a9c5) {
      _0x4bcfe1.stackTraceRegExp = new RegExp("(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)".replace("([^\\n]+)", _0x20a9c5[0x4].replace(/[\\^${}[\]().*+?|]/g, "\\$&")).replace("jsStackTrace", "[^\\n]+"));
    }
    var _0x4a2433 = function (_0x2ade37) {
      if (_0x533336) {
        return;
      }
      _0x533336 = true;
      _0x2f5541 = 0x1;
      if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) {
        console.error("Pthread aborting at " + new Error().stack);
      }
      if (_0x2ade37 !== undefined) {
        _0x3402e6(_0x2ade37);
        _0x119168(_0x2ade37);
        _0x2ade37 = JSON.stringify(_0x2ade37);
      } else {
        _0x2ade37 = '';
      }
      var _0x3a4716 = "abort(" + _0x2ade37 + ") at " + _0x1aa9c0();
      if (_0x4bcfe1.abortHandler && _0x4bcfe1.abortHandler(_0x3a4716)) {
        return;
      }
      throw _0x3a4716;
    };
    _0x4bcfe1.SetFullscreen = function (_0x3a349f) {
      if (typeof _0x44279c === "undefined" || !_0x44279c) {
        console.log("Runtime not initialized yet.");
      } else {
        if (typeof _0x1d6235 === "undefined") {
          console.log("Player not loaded yet.");
        } else {
          var _0x30cfcd = _0x1d6235.canPerformEventHandlerRequests;
          _0x1d6235.canPerformEventHandlerRequests = function () {
            return 0x1;
          };
          _0x4bcfe1.ccall("SetFullscreen", null, ["number"], [_0x3a349f]);
          _0x1d6235.canPerformEventHandlerRequests = _0x30cfcd;
        }
      }
    };
    if (!_0x4bcfe1.ENVIRONMENT_IS_PTHREAD) {
      _0x4bcfe1.preRun.push(function () {
        function _0x44494d() {
          _0x3eb30b.queuePersist = function (_0xd147cd) {
            function _0x25363e() {
              if (_0xd147cd.idbPersistState === "again") {
                _0x1434a3();
              } else {
                _0xd147cd.idbPersistState = 0x0;
              }
            }
            function _0x1434a3() {
              _0xd147cd.idbPersistState = "idb";
              _0x3eb30b.syncfs(_0xd147cd, false, _0x25363e);
            }
            if (!_0xd147cd.idbPersistState) {
              _0xd147cd.idbPersistState = setTimeout(_0x1434a3, 0x0);
            } else if (_0xd147cd.idbPersistState === "idb") {
              _0xd147cd.idbPersistState = "again";
            }
          };
          _0x3eb30b.mount = function (_0x1ef848) {
            var _0x5577dd = _0x187d72.createNode(null, "/", 16895, 0x0);
            if (typeof _0x1ef848 !== "undefined" && _0x1ef848.opts && _0x1ef848.opts.autoPersist) {
              _0x5577dd.idbPersistState = 0x0;
              var _0x3709c0 = _0x5577dd.node_ops;
              _0x5577dd.node_ops = Object.assign({}, _0x5577dd.node_ops);
              _0x5577dd.node_ops.mknod = function (_0x117621, _0x3ff04b, _0x524518, _0x1bed4a) {
                var _0x21c7f8 = _0x3709c0.mknod(_0x117621, _0x3ff04b, _0x524518, _0x1bed4a);
                _0x21c7f8.node_ops = _0x5577dd.node_ops;
                _0x21c7f8.idbfs_mount = _0x5577dd.mount;
                _0x21c7f8.memfs_stream_ops = _0x21c7f8.stream_ops;
                _0x21c7f8.stream_ops = Object.assign({}, _0x21c7f8.stream_ops);
                _0x21c7f8.stream_ops.write = function (_0x462f86, _0x173e86, _0x2e3c61, _0x5d4b63, _0x1ea822, _0x2511e0) {
                  _0x462f86.node.isModified = true;
                  return _0x21c7f8.memfs_stream_ops.write(_0x462f86, _0x173e86, _0x2e3c61, _0x5d4b63, _0x1ea822, _0x2511e0);
                };
                _0x21c7f8.stream_ops.close = function (_0x44a326) {
                  var _0x18453c = _0x44a326.node;
                  if (_0x18453c.isModified) {
                    _0x3eb30b.queuePersist(_0x18453c.idbfs_mount);
                    _0x18453c.isModified = false;
                  }
                  if (_0x18453c.memfs_stream_ops.close) {
                    return _0x18453c.memfs_stream_ops.close(_0x44a326);
                  }
                };
                return _0x21c7f8;
              };
              _0x5577dd.node_ops.rmdir = function (_0x4c28a0) {
                _0x3eb30b.queuePersist(_0x5577dd.mount);
                return _0x3709c0.rmdir(_0x4c28a0);
              };
              _0x5577dd.node_ops.unlink = function (_0x15e6a7) {
                _0x3eb30b.queuePersist(_0x5577dd.mount);
                return _0x3709c0.unlink(_0x15e6a7);
              };
              _0x5577dd.node_ops.mkdir = function (_0x3d6b14, _0x2a33a9) {
                _0x3eb30b.queuePersist(_0x5577dd.mount);
                return _0x3709c0.mkdir(_0x3d6b14, _0x2a33a9);
              };
              _0x5577dd.node_ops.symlink = function (_0x5a1069, _0xa88aef, _0x479b4b) {
                _0x3eb30b.queuePersist(_0x5577dd.mount);
                return _0x3709c0.symlink(_0x5a1069, _0xa88aef, _0x479b4b);
              };
              _0x5577dd.node_ops.rename = function (_0x227485, _0x4c5101, _0x28d0af) {
                _0x3eb30b.queuePersist(_0x5577dd.mount);
                return _0x3709c0.rename(_0x227485, _0x4c5101, _0x28d0af);
              };
            }
            return _0x5577dd;
          };
        }
        _0x44494d();
        var _0x490fbc = _0x4bcfe1.unityFileSystemInit || function () {
          _0x278315.mkdir("/idbfs");
          _0x4bcfe1.__unityIdbfsMount = _0x278315.mount(_0x3eb30b, {
            "autoPersist": !!_0x4bcfe1.autoSyncPersistentDataPath
          }, "/idbfs");
          _0x4bcfe1.addRunDependency("JS_FileSystem_Mount");
          _0x278315.syncfs(true, function (_0x5eda1f) {
            if (_0x5eda1f) {
              console.log("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
            }
            _0x4bcfe1.removeRunDependency("JS_FileSystem_Mount");
          });
        };
        _0x490fbc();
      });
    }
    var _0xe8e1c3 = [];
    var _0x492542 = false;
    var _0x2d9982;
    var _0x36ca1b = null;
    function _0x26ca7d(_0x188c66) {
      var _0x321cf = Object.keys(_0xe8e1c3);
      for (var _0x518b2a = 0x0; _0x518b2a < _0x321cf.length; ++_0x518b2a) {
        var _0x17aa8b = _0xe8e1c3[_0x321cf[_0x518b2a]];
        if (_0x17aa8b.deviceId && _0x17aa8b.deviceId == _0x188c66.deviceId) {
          return _0x17aa8b;
        }
      }
      for (var _0x518b2a = 0x0; _0x518b2a < _0x321cf.length; ++_0x518b2a) {
        var _0x17aa8b = _0xe8e1c3[_0x321cf[_0x518b2a]];
        if (_0x17aa8b == _0x188c66) {
          return _0x17aa8b;
        }
      }
      for (var _0x518b2a = 0x0; _0x518b2a < _0x321cf.length; ++_0x518b2a) {
        var _0x17aa8b = _0xe8e1c3[_0x321cf[_0x518b2a]];
        if (_0x17aa8b.label && _0x17aa8b.label == _0x188c66.label) {
          return _0x17aa8b;
        }
      }
      for (var _0x518b2a = 0x0; _0x518b2a < _0x321cf.length; ++_0x518b2a) {
        var _0x17aa8b = _0xe8e1c3[_0x321cf[_0x518b2a]];
        if (_0x17aa8b.groupId && _0x17aa8b.kind && _0x17aa8b.groupId == _0x188c66.groupId && _0x17aa8b.kind == _0x188c66.kind) {
          return _0x17aa8b;
        }
      }
    }
    function _0xb95ae5() {
      for (var _0xd062a9 = 0x0;; ++_0xd062a9) {
        if (!_0xe8e1c3[_0xd062a9]) {
          return _0xd062a9;
        }
      }
    }
    function _0x202b37(_0x45dbc5) {
      _0x2d9982();
      _0xe8e1c3 = [];
      var _0x1bd65b = {};
      var _0x2785ec = [];
      _0x45dbc5.forEach(function (_0x4576d3) {
        if (_0x4576d3.kind === "videoinput") {
          var _0x35de3b = _0x26ca7d(_0x4576d3);
          if (_0x35de3b) {
            _0x1bd65b[_0x35de3b.id] = _0x35de3b;
          } else {
            _0x2785ec.push(_0x4576d3);
          }
        }
      });
      _0xe8e1c3 = _0x1bd65b;
      _0x2785ec.forEach(function (_0x373aca) {
        if (!_0x373aca.id) {
          _0x373aca.id = _0xb95ae5();
          _0x373aca.name = _0x373aca.label || "Video input #" + (_0x373aca.id + 0x1);
          _0x373aca.isFrontFacing = _0x373aca.name.toLowerCase().includes("front") || !_0x373aca.name.toLowerCase().includes("front") && !_0x373aca.name.toLowerCase().includes("back");
          _0xe8e1c3[_0x373aca.id] = _0x373aca;
        }
      });
    }
    function _0x2d9bfe() {
      if (!_0xe8e1c3) {
        return;
      }
      navigator.mediaDevices.enumerateDevices().then(function (_0x174692) {
        _0x202b37(_0x174692);
        _0x492542 = true;
      })["catch"](function (_0x3566a4) {
        console.warn("Unable to enumerate media devices: " + _0x3566a4 + "\nWebcams will not be available.");
        _0x5a4664();
      });
      if (/Firefox/.test(navigator.userAgent)) {
        setTimeout(_0x2d9bfe, 0xea60);
        _0x528b37("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977");
      }
    }
    function _0x5a4664() {
      if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
        navigator.mediaDevices.removeEventListener("devicechange", _0x2d9bfe);
      }
      _0xe8e1c3 = null;
    }
    _0x4bcfe1.disableAccessToMediaDevices = _0x5a4664;
    if (!navigator.mediaDevices) {
      console.warn("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location.protocol == "https:" ? '' : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used."));
      _0x5a4664();
    } else {
      if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) {
        setTimeout(function () {
          try {
            _0x441879("enumerateMediaDevices");
            _0x2d9982 = function () {
              if (_0x36ca1b !== null) {
                clearTimeout(_0x36ca1b);
              }
              _0x3b7ae4("enumerateMediaDevices");
              if (navigator.mediaDevices) {
                console.log("navigator.mediaDevices support available");
              }
              _0x2d9982 = function () {};
            };
            _0x2d9bfe();
            _0x36ca1b = setTimeout(_0x2d9982, 0x3e8);
            navigator.mediaDevices.addEventListener("devicechange", _0x2d9bfe);
          } catch (_0x451aa3) {
            console.warn("Unable to enumerate media devices: " + _0x451aa3);
            _0x5a4664();
          }
        }, 0x0);
      }
    }
    function _0x2fae3e(_0x27e76a, _0x6e5d78, _0x3704eb) {
      var _0xcf4c90 = _0x539986(_0x6e5d78);
      var _0x1262e4 = _0x539986(_0x27e76a);
      var _0x17c014 = 0x0;
      try {
        if (_0x3704eb === undefined) {
          _0x5c8177(_0x1262e4, _0xcf4c90);
        } else {
          if (typeof _0x3704eb === "string") {
            _0x17c014 = _0x539986(_0x3704eb);
            _0x1d2ab4(_0x1262e4, _0xcf4c90, _0x17c014);
          } else {
            if (typeof _0x3704eb === "number") {
              _0x3bed77(_0x1262e4, _0xcf4c90, _0x3704eb);
            } else {
              throw '' + _0x3704eb + " is does not have a type which is supported by SendMessage.";
            }
          }
        }
      } finally {
        _0x14a4bc(_0x17c014);
        _0x14a4bc(_0x1262e4);
        _0x14a4bc(_0xcf4c90);
      }
    }
    _0x4bcfe1.SendMessage = _0x2fae3e;
    var _0x2101ce = Object.assign({}, _0x4bcfe1);
    var _0x2d1e5d = [];
    var _0x5877fe = "./this.program";
    var _0x15c649 = (_0x458822, _0xdb0efa) => {
      throw _0xdb0efa;
    };
    var _0x266229 = typeof window == "object";
    var _0x132c1d = typeof importScripts == "function";
    var _0x4da766 = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
    var _0x437a81 = '';
    function _0x42ee71(_0x125596) {
      if (_0x4bcfe1.locateFile) {
        return _0x4bcfe1.locateFile(_0x125596, _0x437a81);
      }
      return _0x437a81 + _0x125596;
    }
    var _0x44d954;
    var _0x27b369;
    var _0x27b012;
    var _0x1e8370;
    function _0xce63a0(_0x2eb69f) {
      if (_0x2eb69f instanceof _0x13a7a5) {
        return;
      }
      _0x119168("exiting due to exception: " + _0x2eb69f);
    }
    var _0x415551;
    var _0x4a7a82;
    var _0x2c3e93;
    if (_0x4da766) {
      if (_0x132c1d) {
        _0x437a81 = require("path").dirname(_0x437a81) + "/";
      } else {
        _0x437a81 = __dirname + "/";
      }
      _0x2c3e93 = () => {
        if (!_0x4a7a82) {
          _0x415551 = require("fs");
          _0x4a7a82 = require("path");
        }
      };
      _0x44d954 = function _0x587309(_0x12fa73, _0x290fbd) {
        _0x2c3e93();
        _0x12fa73 = _0x4a7a82.normalize(_0x12fa73);
        return _0x415551.readFileSync(_0x12fa73, _0x290fbd ? undefined : "utf8");
      };
      _0x27b012 = _0xdc81e9 => {
        var _0x5ba31d = _0x44d954(_0xdc81e9, true);
        if (!_0x5ba31d.buffer) {
          _0x5ba31d = new Uint8Array(_0x5ba31d);
        }
        return _0x5ba31d;
      };
      _0x27b369 = (_0x53770f, _0x970533, _0x519000) => {
        _0x2c3e93();
        _0x53770f = _0x4a7a82.normalize(_0x53770f);
        _0x415551.readFile(_0x53770f, function (_0xcd4025, _0x314fc3) {
          if (_0xcd4025) {
            _0x519000(_0xcd4025);
          } else {
            _0x970533(_0x314fc3.buffer);
          }
        });
      };
      if (process.argv.length > 0x1) {
        _0x5877fe = process.argv[0x1].replace(/\\/g, "/");
      }
      _0x2d1e5d = process.argv.slice(0x2);
      process.on("uncaughtException", function (_0xb11a72) {
        if (!(_0xb11a72 instanceof _0x13a7a5)) {
          throw _0xb11a72;
        }
      });
      process.on("unhandledRejection", function (_0x356abd) {
        throw _0x356abd;
      });
      _0x15c649 = (_0x2222fa, _0xf631e6) => {
        if (_0x4f166f) {
          process.exitCode = _0x2222fa;
          throw _0xf631e6;
        }
        _0xce63a0(_0xf631e6);
        process.exit(_0x2222fa);
      };
      _0x4bcfe1.inspect = function () {
        return "[Emscripten Module object]";
      };
    } else {
      if (_0x266229 || _0x132c1d) {
        if (_0x132c1d) {
          _0x437a81 = self.location.href;
        } else if (typeof document != "undefined" && document.currentScript) {
          _0x437a81 = document.currentScript.src;
        }
        if (_0x36c523) {
          _0x437a81 = _0x36c523;
        }
        if (_0x437a81.indexOf("blob:") !== 0x0) {
          _0x437a81 = _0x437a81.substr(0x0, _0x437a81.replace(/[?#].*/, '').lastIndexOf("/") + 0x1);
        } else {
          _0x437a81 = '';
        }
        {
          _0x44d954 = _0x23a5ee => {
            var _0x26ccf5 = new XMLHttpRequest();
            _0x26ccf5.open("GET", _0x23a5ee, false);
            _0x26ccf5.send(null);
            return _0x26ccf5.responseText;
          };
          if (_0x132c1d) {
            _0x27b012 = _0x569a67 => {
              var _0x452648 = new XMLHttpRequest();
              _0x452648.open("GET", _0x569a67, false);
              _0x452648.responseType = "arraybuffer";
              _0x452648.send(null);
              return new Uint8Array(_0x452648.response);
            };
          }
          _0x27b369 = (_0xa6e5b8, _0x8e96ea, _0x147633) => {
            var _0x7bef91 = new XMLHttpRequest();
            _0x7bef91.open("GET", _0xa6e5b8, true);
            _0x7bef91.responseType = "arraybuffer";
            _0x7bef91.onload = () => {
              if (_0x7bef91.status == 0xc8 || _0x7bef91.status == 0x0 && _0x7bef91.response) {
                _0x8e96ea(_0x7bef91.response);
                return;
              }
              _0x147633();
            };
            _0x7bef91.onerror = _0x147633;
            _0x7bef91.send(null);
          };
        }
        _0x1e8370 = _0x4b4208 => document.title = _0x4b4208;
      } else {}
    }
    var _0x3402e6 = _0x4bcfe1.print || console.log.bind(console);
    var _0x119168 = _0x4bcfe1.printErr || console.warn.bind(console);
    Object.assign(_0x4bcfe1, _0x2101ce);
    _0x2101ce = null;
    if (_0x4bcfe1.arguments) {
      _0x2d1e5d = _0x4bcfe1.arguments;
    }
    if (_0x4bcfe1.thisProgram) {
      _0x5877fe = _0x4bcfe1.thisProgram;
    }
    if (_0x4bcfe1.quit) {
      _0x15c649 = _0x4bcfe1.quit;
    }
    function _0x528b37(_0x3ff9e5) {
      if (!_0x528b37.shown) {
        _0x528b37.shown = {};
      }
      if (!_0x528b37.shown[_0x3ff9e5]) {
        _0x528b37.shown[_0x3ff9e5] = 0x1;
        _0x119168(_0x3ff9e5);
      }
    }
    var _0x8b7407;
    if (_0x4bcfe1.wasmBinary) {
      _0x8b7407 = _0x4bcfe1.wasmBinary;
    }
    var _0x4f166f = _0x4bcfe1.noExitRuntime || true;
    if (typeof WebAssembly != "object") {
      _0x4a2433("no native wasm support detected");
    }
    var _0x533336 = false;
    var _0x2f5541;
    function _0x35e637(_0xf7fc67, _0x394b47) {
      if (!_0xf7fc67) {
        _0x4a2433(_0x394b47);
      }
    }
    function _0x140af2(_0x11e3d4) {
      var _0x34f7fe = _0x4bcfe1["_" + _0x11e3d4];
      return _0x34f7fe;
    }
    function _0x3fb673(_0x5b8d62, _0x3a17d5, _0x21a181, _0x4fdacb, _0x337018) {
      var _0x3b3292 = {
        "string": function (_0x289e46) {
          var _0x4efc31 = 0x0;
          if (_0x289e46 !== null && _0x289e46 !== undefined && _0x289e46 !== 0x0) {
            var _0x581ee8 = (_0x289e46.length << 0x2) + 0x1;
            _0x4efc31 = _0x1d99d1(_0x581ee8);
            _0x2f86f3(_0x289e46, _0x18c91b, _0x4efc31, _0x581ee8);
          }
          return _0x4efc31;
        },
        "array": function (_0x23b729) {
          var _0x1387af = _0x1d99d1(_0x23b729.length);
          _0x12c519(_0x23b729, _0x1387af);
          return _0x1387af;
        }
      };
      function _0x13119e(_0x3f113f) {
        if (_0x3a17d5 === "string") {
          return _0x3f113f ? _0x344b4c(_0x18c91b, _0x3f113f, undefined) : '';
        }
        if (_0x3a17d5 === "boolean") {
          return Boolean(_0x3f113f);
        }
        return _0x3f113f;
      }
      var _0x53cb27 = _0x140af2(_0x5b8d62);
      var _0x3b249b = [];
      var _0x4b2ccc = 0x0;
      if (_0x4fdacb) {
        for (var _0x38173f = 0x0; _0x38173f < _0x4fdacb.length; _0x38173f++) {
          var _0x44910e = _0x3b3292[_0x21a181[_0x38173f]];
          if (_0x44910e) {
            if (_0x4b2ccc === 0x0) {
              _0x4b2ccc = _0x381588();
            }
            _0x3b249b[_0x38173f] = _0x44910e(_0x4fdacb[_0x38173f]);
          } else {
            _0x3b249b[_0x38173f] = _0x4fdacb[_0x38173f];
          }
        }
      }
      var _0x4b88e7 = _0x53cb27.apply(null, _0x3b249b);
      function _0x5cb3fa(_0x4367c5) {
        if (_0x4b2ccc !== 0x0) {
          _0x770e87(_0x4b2ccc);
        }
        return _0x13119e(_0x4367c5);
      }
      _0x4b88e7 = _0x5cb3fa(_0x4b88e7);
      return _0x4b88e7;
    }
    function _0x4b7ee7(_0x4e8482, _0xd9dbe0, _0x3f0f21, _0x1e1ff3) {
      _0x3f0f21 = _0x3f0f21 || [];
      var _0x691697 = _0x3f0f21.every(function (_0xe656f0) {
        return _0xe656f0 === "number";
      });
      var _0xea7310 = _0xd9dbe0 !== "string";
      if (_0xea7310 && _0x691697 && !_0x1e1ff3) {
        return _0x140af2(_0x4e8482);
      }
      return function () {
        return _0x3fb673(_0x4e8482, _0xd9dbe0, _0x3f0f21, arguments, _0x1e1ff3);
      };
    }
    var _0x2a51e5 = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
    function _0x344b4c(_0x33db72, _0x140287, _0x19cc21) {
      var _0x34aabe = _0x140287 + _0x19cc21;
      var _0x2226d9 = _0x140287;
      while (_0x33db72[_0x2226d9] && !(_0x2226d9 >= _0x34aabe)) {
        ++_0x2226d9;
      }
      if (_0x2226d9 - _0x140287 > 0x10 && _0x33db72.buffer && _0x2a51e5) {
        return _0x2a51e5.decode(_0x33db72.subarray(_0x140287, _0x2226d9));
      } else {
        var _0x4aa88a = '';
        while (_0x140287 < _0x2226d9) {
          var _0x5ccfbb = _0x33db72[_0x140287++];
          if (!(_0x5ccfbb & 0x80)) {
            _0x4aa88a += String.fromCharCode(_0x5ccfbb);
            continue;
          }
          var _0x3173fe = _0x33db72[_0x140287++] & 0x3f;
          if ((_0x5ccfbb & 0xe0) == 0xc0) {
            _0x4aa88a += String.fromCharCode((_0x5ccfbb & 0x1f) << 0x6 | _0x3173fe);
            continue;
          }
          var _0x1aeee6 = _0x33db72[_0x140287++] & 0x3f;
          if ((_0x5ccfbb & 0xf0) == 0xe0) {
            _0x5ccfbb = (_0x5ccfbb & 0xf) << 0xc | _0x3173fe << 0x6 | _0x1aeee6;
          } else {
            _0x5ccfbb = (_0x5ccfbb & 0x7) << 0x12 | _0x3173fe << 0xc | _0x1aeee6 << 0x6 | _0x33db72[_0x140287++] & 0x3f;
          }
          if (_0x5ccfbb < 0x10000) {
            _0x4aa88a += String.fromCharCode(_0x5ccfbb);
          } else {
            var _0x4f8e2a = _0x5ccfbb - 0x10000;
            _0x4aa88a += String.fromCharCode(0xd800 | _0x4f8e2a >> 0xa, 0xdc00 | _0x4f8e2a & 0x3ff);
          }
        }
      }
      return _0x4aa88a;
    }
    function _0x2f86f3(_0x406ac7, _0x23730c, _0xf81516, _0x541d5f) {
      if (!(_0x541d5f > 0x0)) {
        return 0x0;
      }
      var _0x1c2ff6 = _0xf81516;
      var _0x581302 = _0xf81516 + _0x541d5f - 0x1;
      for (var _0x1f1c4d = 0x0; _0x1f1c4d < _0x406ac7.length; ++_0x1f1c4d) {
        var _0x3bbccc = _0x406ac7.charCodeAt(_0x1f1c4d);
        if (_0x3bbccc >= 0xd800 && _0x3bbccc <= 0xdfff) {
          var _0x2ec49f = _0x406ac7.charCodeAt(++_0x1f1c4d);
          _0x3bbccc = 0x10000 + ((_0x3bbccc & 0x3ff) << 0xa) | _0x2ec49f & 0x3ff;
        }
        if (_0x3bbccc <= 0x7f) {
          if (_0xf81516 >= _0x581302) {
            break;
          }
          _0x23730c[_0xf81516++] = _0x3bbccc;
        } else {
          if (_0x3bbccc <= 0x7ff) {
            if (_0xf81516 + 0x1 >= _0x581302) {
              break;
            }
            _0x23730c[_0xf81516++] = 0xc0 | _0x3bbccc >> 0x6;
            _0x23730c[_0xf81516++] = 0x80 | _0x3bbccc & 0x3f;
          } else {
            if (_0x3bbccc <= 0xffff) {
              if (_0xf81516 + 0x2 >= _0x581302) {
                break;
              }
              _0x23730c[_0xf81516++] = 0xe0 | _0x3bbccc >> 0xc;
              _0x23730c[_0xf81516++] = 0x80 | _0x3bbccc >> 0x6 & 0x3f;
              _0x23730c[_0xf81516++] = 0x80 | _0x3bbccc & 0x3f;
            } else {
              if (_0xf81516 + 0x3 >= _0x581302) {
                break;
              }
              _0x23730c[_0xf81516++] = 0xf0 | _0x3bbccc >> 0x12;
              _0x23730c[_0xf81516++] = 0x80 | _0x3bbccc >> 0xc & 0x3f;
              _0x23730c[_0xf81516++] = 0x80 | _0x3bbccc >> 0x6 & 0x3f;
              _0x23730c[_0xf81516++] = 0x80 | _0x3bbccc & 0x3f;
            }
          }
        }
      }
      _0x23730c[_0xf81516] = 0x0;
      return _0xf81516 - _0x1c2ff6;
    }
    function _0x4d063a(_0x793076) {
      var _0x3a38b1 = 0x0;
      for (var _0x5a4b70 = 0x0; _0x5a4b70 < _0x793076.length; ++_0x5a4b70) {
        var _0x112011 = _0x793076.charCodeAt(_0x5a4b70);
        if (_0x112011 >= 0xd800 && _0x112011 <= 0xdfff) {
          _0x112011 = 0x10000 + ((_0x112011 & 0x3ff) << 0xa) | _0x793076.charCodeAt(++_0x5a4b70) & 0x3ff;
        }
        if (_0x112011 <= 0x7f) {
          ++_0x3a38b1;
        } else {
          if (_0x112011 <= 0x7ff) {
            _0x3a38b1 += 0x2;
          } else {
            if (_0x112011 <= 0xffff) {
              _0x3a38b1 += 0x3;
            } else {
              _0x3a38b1 += 0x4;
            }
          }
        }
      }
      return _0x3a38b1;
    }
    function _0x186836(_0xf184d5) {
      var _0x329eb5 = _0x4d063a(_0xf184d5) + 0x1;
      var _0x38f873 = _0x1f6602(_0x329eb5);
      if (_0x38f873) {
        _0x2f86f3(_0xf184d5, _0x59ed12, _0x38f873, _0x329eb5);
      }
      return _0x38f873;
    }
    function _0x388784(_0x142600) {
      var _0x3bf59d = _0x4d063a(_0x142600) + 0x1;
      var _0x5d9233 = _0x1d99d1(_0x3bf59d);
      _0x2f86f3(_0x142600, _0x59ed12, _0x5d9233, _0x3bf59d);
      return _0x5d9233;
    }
    function _0x12c519(_0x2b2c2e, _0x4c8584) {
      _0x59ed12.set(_0x2b2c2e, _0x4c8584);
    }
    var _0x14ab10;
    var _0x59ed12;
    var _0x18c91b;
    var _0x46c9cf;
    var _0x29f705;
    var _0x148e55 = [];
    var _0x76a5e8 = [];
    var _0x1654fa = [];
    var _0xdd5bdd = [];
    var _0x1ac4a3 = [];
    var _0x44279c = false;
    function _0x72e475() {
      if (_0x4bcfe1.preRun) {
        if (typeof _0x4bcfe1.preRun == "function") {
          _0x4bcfe1.preRun = [_0x4bcfe1.preRun];
        }
        while (_0x4bcfe1.preRun.length) {
          _0x427c41(_0x4bcfe1.preRun.shift());
        }
      }
      _0x45685e(_0x148e55);
    }
    function _0x1cd07e() {
      _0x44279c = true;
      if (!_0x4bcfe1.noFSInit && !_0x278315.init.initialized) {
        _0x278315.init();
      }
      _0x278315.ignorePermissions = false;
      _0x4f6acc.init();
      _0x2badf6.root = _0x278315.mount(_0x2badf6, {}, null);
      _0x593392.root = _0x278315.mount(_0x593392, {}, null);
      _0x45685e(_0x76a5e8);
    }
    function _0x14f6df() {
      _0x45685e(_0x1654fa);
    }
    function _0x1b8cb3() {
      if (_0x4bcfe1.postRun) {
        if (typeof _0x4bcfe1.postRun == "function") {
          _0x4bcfe1.postRun = [_0x4bcfe1.postRun];
        }
        while (_0x4bcfe1.postRun.length) {
          _0x5007d3(_0x4bcfe1.postRun.shift());
        }
      }
      _0x45685e(_0x1ac4a3);
    }
    function _0x427c41(_0x3cd73d) {
      _0x148e55.unshift(_0x3cd73d);
    }
    function _0x5007d3(_0x976867) {
      _0x1ac4a3.unshift(_0x976867);
    }
    var _0x190e0a = 0x0;
    var _0x8adb3a = null;
    var _0x151408 = null;
    function _0x441879(_0x16d37e) {
      _0x190e0a++;
      if (_0x4bcfe1.monitorRunDependencies) {
        _0x4bcfe1.monitorRunDependencies(_0x190e0a);
      }
    }
    function _0x3b7ae4(_0x47832c) {
      _0x190e0a--;
      if (_0x4bcfe1.monitorRunDependencies) {
        _0x4bcfe1.monitorRunDependencies(_0x190e0a);
      }
      if (_0x190e0a == 0x0) {
        if (_0x8adb3a !== null) {
          clearInterval(_0x8adb3a);
          _0x8adb3a = null;
        }
        if (_0x151408) {
          var _0x2c76d4 = _0x151408;
          _0x151408 = null;
          _0x2c76d4();
        }
      }
    }
    _0x4bcfe1.preloadedImages = {};
    _0x4bcfe1.preloadedAudios = {};
    function _0x4a2433(_0x1986e8) {
      {
        if (_0x4bcfe1.onAbort) {
          _0x4bcfe1.onAbort(_0x1986e8);
        }
      }
      _0x1986e8 = "Aborted(" + _0x1986e8 + ")";
      _0x119168(_0x1986e8);
      _0x533336 = true;
      _0x2f5541 = 0x1;
      _0x1986e8 += ". Build with -s ASSERTIONS=1 for more info.";
      var _0x4cd31d = new WebAssembly.RuntimeError(_0x1986e8);
      _0x57536e(_0x4cd31d);
      throw _0x4cd31d;
    }
    var _0x586392;
    _0x586392 = "build.wasm";
    if (!_0x586392.startsWith("data:application/octet-stream;base64,")) {
      _0x586392 = _0x42ee71(_0x586392);
    }
    var _0x12ce7f;
    var _0x3c0e3f;
    function _0x45685e(_0x597610) {
      while (_0x597610.length > 0x0) {
        var _0x12ab03 = _0x597610.shift();
        if (typeof _0x12ab03 == "function") {
          _0x12ab03(_0x4bcfe1);
          continue;
        }
        var _0x2a244e = _0x12ab03.func;
        if (typeof _0x2a244e == "number") {
          if (_0x12ab03.arg === undefined) {
            (function () {
              _0x2b31cb.call(null, _0x2a244e);
            })();
          } else {
            (function (_0x161d3f) {
              _0xe4a07d.apply(null, [_0x2a244e, _0x161d3f]);
            })(_0x12ab03.arg);
          }
        } else {
          _0x2a244e(_0x12ab03.arg === undefined ? null : _0x12ab03.arg);
        }
      }
    }
    function _0x53e2a6(_0x1f3110) {
      var _0x3c2461 = /\b_Z[\w\d_]+/g;
      return _0x1f3110.replace(_0x3c2461, function (_0xe4198b) {
        return _0xe4198b === _0x4a5e74 ? _0xe4198b : _0x4a5e74 + " [" + _0xe4198b + "]";
      });
    }
    function _0x406d9e(_0x3b6016) {
      if (_0x3b6016 instanceof _0x13a7a5 || _0x3b6016 == "unwind") {
        return _0x2f5541;
      }
      _0x15c649(0x1, _0x3b6016);
    }
    function _0x4c743f() {
      var _0x4b45cc = new Error();
      if (!_0x4b45cc.stack) {
        try {
          throw new Error();
        } catch (_0x10d8e7) {
          _0x4b45cc = _0x10d8e7;
        }
        if (!_0x4b45cc.stack) {
          return "(no stack trace available)";
        }
      }
      return _0x4b45cc.stack.toString();
    }
    function _0x1aa9c0() {
      var _0x4e51b4 = _0x4c743f();
      if (_0x4bcfe1.extraStackTrace) {
        _0x4e51b4 += "\n" + _0x4bcfe1.extraStackTrace();
      }
      return _0x53e2a6(_0x4e51b4);
    }
    function _0x5a8b17(_0x1c4734) {
      if (typeof window.CSS !== "undefined" && typeof window.CSS.escape !== "undefined") {
        return window.CSS.escape(_0x1c4734);
      }
      return _0x1c4734.replace(/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
    }
    function _0x13ac5b() {
      var _0x40d308 = _0x4bcfe1.canvas ? _0x4bcfe1.canvas.id : "unity-canvas";
      return "#" + _0x5a8b17(_0x40d308);
    }
    function _0x539986(_0x41e051) {
      var _0x1171ee = _0x4d063a(_0x41e051) + 0x1;
      var _0x5db908 = _0x1f6602(_0x1171ee);
      _0x2f86f3(_0x41e051, _0x18c91b, _0x5db908, _0x1171ee);
      return _0x5db908;
    }
    function _0x48476c() {
      var _0x330acf = _0x13ac5b();
      if (_0x48476c.selector != _0x330acf) {
        _0x14a4bc(_0x48476c.ptr);
        _0x48476c.ptr = _0x539986(_0x330acf);
        _0x48476c.selector = _0x330acf;
      }
      return _0x48476c.ptr;
    }
    function _0xb3ef3c(_0x1b3e13) {
      window.wgUnityInstance = _0x4bcfe1;
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: WeeGoo InGame Ad, pinging.");
        window[preroll.config.loaderObjectName].ping(_0x1b3e13);
      } catch (_0x56dba0) {
        console.log("WGSDK: No production WGSDK resources found, loading development resources.");
        var _0x5c6654 = document.createElement("script");
        _0x5c6654.addEventListener("load", function (_0x13cac6) {
          var _0x184f86 = document.createElement("script");
          _0x184f86.addEventListener("load", function (_0x326694) {
            console.log("WGSDK: Development resources loaded.");
            _0x5c0c4b(_0x1b3e13, true);
          }.bind(this));
          document.getElementsByTagName("head")[0x0].appendChild(_0x184f86);
          _0x184f86.src = window.GMSOFT_ADS_INFO.wgLibrary;
        }.bind(this));
        document.getElementsByTagName("head")[0x0].appendChild(_0x5c6654);
        _0x5c6654.src = window.GMSOFT_ADS_INFO.wgConf;
      }
    }
    function _0x5c0c4b(_0x2aea7b, _0x226662) {
      var _0x3bf0e2;
      if (_0x226662 === true) {
        _0x3bf0e2 = _0x2aea7b;
      } else {
        _0x3bf0e2 = _0x2aea7b ? _0x344b4c(_0x18c91b, _0x2aea7b, undefined) : '';
      }
      setTimeout(function () {
        _0xb3ef3c(_0x3bf0e2);
      }, 0xfa);
    }
    function _0x7ff2fc() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Game controls registered.");
        window[window.preroll.config.loaderObjectName].registerGameControls(_0x4bcfe1);
      } catch (_0x20a5ac) {
        console.log("WGSDK: Can not register game controls.");
        setTimeout(function () {
          _0x7ff2fc();
        }, 0xfa);
      }
    }
    function _0x38c99c() {
      try {
        window[preroll.config.loaderObjectName].log("WGSDK: Reward callbacks registered.");
        window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
          "onReady": "OnReadyMethod",
          "onSuccess": "OnSuccessMethod",
          "onFail": "OnFailMethod"
        });
      } catch (_0x432748) {
        console.log("WGSDK: Can not register reward ad callbacks.");
        _0x291595();
      }
    }
    function _0x291595() {
      setTimeout(function () {
        _0x38c99c();
      }, 0xfa);
    }
    var _0xd7c6e5 = {
      "requestInstances": {},
      "nextRequestId": 0x1,
      "loglevel": 0x2,
      "SendTextToCSharpSide": function (_0x3a451e, _0x37cdeb, _0x2d70c5) {
        const _0x20b179 = new TextEncoder();
        const _0x36af99 = _0x20b179.encode(_0x2d70c5);
        const _0x253aa1 = function (_0x4b81ce, _0x377580) {
          return _0x5ea6d0.apply(null, [_0xd7c6e5.onallocbuffer, _0x4b81ce, _0x377580]);
        }(_0x3a451e, _0x36af99.length);
        _0x18c91b.set(_0x36af99, _0x253aa1);
        (function (_0x1e44e5, _0x576d7d, _0x19593a) {
          _0x14e1db.apply(null, [_0x37cdeb, _0x1e44e5, _0x576d7d, _0x19593a]);
        })(_0x3a451e, _0x253aa1, _0x36af99.length);
      },
      "GetResponseHeaders": function (_0x118eb7, _0x3d2c2c) {
        var _0x13cd40 = '';
        if (document && document.cookie) {
          var _0x28a956 = document.cookie.split(";");
          for (var _0x47f908 = 0x0; _0x47f908 < _0x28a956.length; ++_0x47f908) {
            const _0x36a3db = _0x28a956[_0x47f908].trim();
            if (_0x36a3db.length > 0x0) {
              _0x13cd40 += "Set-Cookie:" + _0x36a3db + "\n";
            }
          }
        }
        const _0xeb450a = _0xd7c6e5.requestInstances[_0x118eb7].getAllResponseHeaders().trim().split(/[\r\n]+/);
        _0xeb450a.forEach(_0x22697c => {
          const _0x5bb1cd = _0x22697c.split(": ");
          const _0x3ce3e6 = _0x5bb1cd.shift();
          const _0x9e721a = _0x5bb1cd.join(": ");
          if (_0x3ce3e6 !== "content-length") {
            _0x13cd40 += _0x3ce3e6 + ":" + _0x9e721a + "\n";
          }
        });
        _0xd7c6e5.SendTextToCSharpSide(_0x118eb7, _0x3d2c2c, _0x13cd40);
      }
    };
    var _0x353c9a = {
      "splitPath": function (_0x4ddf09) {
        var _0x21e801 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return _0x21e801.exec(_0x4ddf09).slice(0x1);
      },
      "normalizeArray": function (_0xb2b510, _0x2ecd20) {
        var _0xe1eeea = 0x0;
        for (var _0x2670c6 = _0xb2b510.length - 0x1; _0x2670c6 >= 0x0; _0x2670c6--) {
          var _0x599f69 = _0xb2b510[_0x2670c6];
          if (_0x599f69 === ".") {
            _0xb2b510.splice(_0x2670c6, 0x1);
          } else {
            if (_0x599f69 === "..") {
              _0xb2b510.splice(_0x2670c6, 0x1);
              _0xe1eeea++;
            } else if (_0xe1eeea) {
              _0xb2b510.splice(_0x2670c6, 0x1);
              _0xe1eeea--;
            }
          }
        }
        if (_0x2ecd20) {
          for (; _0xe1eeea; _0xe1eeea--) {
            _0xb2b510.unshift("..");
          }
        }
        return _0xb2b510;
      },
      "normalize": function (_0x3115a7) {
        var _0x58ebbf = _0x3115a7.charAt(0x0) === "/";
        var _0x301ec3 = _0x3115a7.substr(-0x1) === "/";
        _0x3115a7 = _0x353c9a.normalizeArray(_0x3115a7.split("/").filter(function (_0x23bb4a) {
          return !!_0x23bb4a;
        }), !_0x58ebbf).join("/");
        if (!_0x3115a7 && !_0x58ebbf) {
          _0x3115a7 = ".";
        }
        if (_0x3115a7 && _0x301ec3) {
          _0x3115a7 += "/";
        }
        return (_0x58ebbf ? "/" : '') + _0x3115a7;
      },
      "dirname": function (_0x278b4f) {
        var _0x28bb4e = _0x353c9a.splitPath(_0x278b4f);
        var _0x5cbe40 = _0x28bb4e[0x0];
        var _0x4c7de8 = _0x28bb4e[0x1];
        if (!_0x5cbe40 && !_0x4c7de8) {
          return ".";
        }
        if (_0x4c7de8) {
          _0x4c7de8 = _0x4c7de8.substr(0x0, _0x4c7de8.length - 0x1);
        }
        return _0x5cbe40 + _0x4c7de8;
      },
      "basename": function (_0x397969) {
        if (_0x397969 === "/") {
          return "/";
        }
        _0x397969 = _0x353c9a.normalize(_0x397969);
        _0x397969 = _0x397969.replace(/\/$/, '');
        var _0x4eaf85 = _0x397969.lastIndexOf("/");
        if (_0x4eaf85 === -0x1) {
          return _0x397969;
        }
        return _0x397969.substr(_0x4eaf85 + 0x1);
      },
      "extname": function (_0x5b835d) {
        return _0x353c9a.splitPath(_0x5b835d)[0x3];
      },
      "join": function () {
        var _0x5deb3e = Array.prototype.slice.call(arguments, 0x0);
        return _0x353c9a.normalize(_0x5deb3e.join("/"));
      },
      "join2": function (_0xf9564d, _0x62e67a) {
        return _0x353c9a.normalize(_0xf9564d + "/" + _0x62e67a);
      }
    };
    function _0xe6f731() {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var _0x8af5f4 = new Uint8Array(0x1);
        return function () {
          crypto.getRandomValues(_0x8af5f4);
          return _0x8af5f4[0x0];
        };
      } else {
        if (_0x4da766) {
          try {
            var _0x28d28e = require("crypto");
            return function () {
              return _0x28d28e.randomBytes(0x1)[0x0];
            };
          } catch (_0x6ca540) {}
        }
      }
      return function () {
        _0x4a2433("randomDevice");
      };
    }
    var _0x7c6eff = {
      "resolve": function () {
        var _0x429e97 = '';
        var _0x3b9536 = false;
        for (var _0x5ab984 = arguments.length - 0x1; _0x5ab984 >= -0x1 && !_0x3b9536; _0x5ab984--) {
          var _0x49f7db = _0x5ab984 >= 0x0 ? arguments[_0x5ab984] : "/";
          if (typeof _0x49f7db != "string") {
            throw new TypeError("Arguments to path.resolve must be strings");
          } else {
            if (!_0x49f7db) {
              return '';
            }
          }
          _0x429e97 = _0x49f7db + "/" + _0x429e97;
          _0x3b9536 = _0x49f7db.charAt(0x0) === "/";
        }
        _0x429e97 = _0x353c9a.normalizeArray(_0x429e97.split("/").filter(function (_0x50a5c3) {
          return !!_0x50a5c3;
        }), !_0x3b9536).join("/");
        return (_0x3b9536 ? "/" : '') + _0x429e97 || ".";
      },
      "relative": function (_0x47b22f, _0xe905b3) {
        _0x47b22f = _0x7c6eff.resolve(_0x47b22f).substr(0x1);
        _0xe905b3 = _0x7c6eff.resolve(_0xe905b3).substr(0x1);
        function _0x1b34d1(_0x3f0e03) {
          var _0xe047d7 = 0x0;
          for (; _0xe047d7 < _0x3f0e03.length; _0xe047d7++) {
            if (_0x3f0e03[_0xe047d7] !== '') {
              break;
            }
          }
          var _0x28812d = _0x3f0e03.length - 0x1;
          for (; _0x28812d >= 0x0; _0x28812d--) {
            if (_0x3f0e03[_0x28812d] !== '') {
              break;
            }
          }
          if (_0xe047d7 > _0x28812d) {
            return [];
          }
          return _0x3f0e03.slice(_0xe047d7, _0x28812d - _0xe047d7 + 0x1);
        }
        var _0xcea4bc = _0x1b34d1(_0x47b22f.split("/"));
        var _0x537e54 = _0x1b34d1(_0xe905b3.split("/"));
        var _0x47ff9f = Math.min(_0xcea4bc.length, _0x537e54.length);
        var _0x247b6f = _0x47ff9f;
        for (var _0x5a24a9 = 0x0; _0x5a24a9 < _0x47ff9f; _0x5a24a9++) {
          if (_0xcea4bc[_0x5a24a9] !== _0x537e54[_0x5a24a9]) {
            _0x247b6f = _0x5a24a9;
            break;
          }
        }
        var _0x58e6f9 = [];
        for (var _0x5a24a9 = _0x247b6f; _0x5a24a9 < _0xcea4bc.length; _0x5a24a9++) {
          _0x58e6f9.push("..");
        }
        _0x58e6f9 = _0x58e6f9.concat(_0x537e54.slice(_0x247b6f));
        return _0x58e6f9.join("/");
      }
    };
    var _0x4f6acc = {
      "ttys": [],
      "init": function () {},
      "shutdown": function () {},
      "register": function (_0x30f67c, _0x5ccf1f) {
        _0x4f6acc.ttys[_0x30f67c] = {
          "input": [],
          "output": [],
          "ops": _0x5ccf1f
        };
        _0x278315.registerDevice(_0x30f67c, _0x4f6acc.stream_ops);
      },
      "stream_ops": {
        "open": function (_0x2af201) {
          var _0x3ee34d = _0x4f6acc.ttys[_0x2af201.node.rdev];
          if (!_0x3ee34d) {
            throw new null(0x2b);
          }
          _0x2af201.tty = _0x3ee34d;
          _0x2af201.seekable = false;
        },
        "close": function (_0x509f1d) {
          _0x509f1d.tty.ops.flush(_0x509f1d.tty);
        },
        "flush": function (_0x3cffbf) {
          _0x3cffbf.tty.ops.flush(_0x3cffbf.tty);
        },
        "read": function (_0x1e7fc5, _0x53fe95, _0x2cdd61, _0x2f39de, _0x20de94) {
          if (!_0x1e7fc5.tty || !_0x1e7fc5.tty.ops.get_char) {
            throw new null(0x3c);
          }
          var _0x1a1554 = 0x0;
          for (var _0x3939cf = 0x0; _0x3939cf < _0x2f39de; _0x3939cf++) {
            var _0x4cae82;
            try {
              _0x4cae82 = _0x1e7fc5.tty.ops.get_char(_0x1e7fc5.tty);
            } catch (_0x4b1aa0) {
              throw new null(0x1d);
            }
            if (_0x4cae82 === undefined && _0x1a1554 === 0x0) {
              throw new null(0x6);
            }
            if (_0x4cae82 === null || _0x4cae82 === undefined) {
              break;
            }
            _0x1a1554++;
            _0x53fe95[_0x2cdd61 + _0x3939cf] = _0x4cae82;
          }
          if (_0x1a1554) {
            _0x1e7fc5.node.timestamp = Date.now();
          }
          return _0x1a1554;
        },
        "write": function (_0x166886, _0x1945d1, _0xe8ab3a, _0x171d3c, _0x5540e1) {
          if (!_0x166886.tty || !_0x166886.tty.ops.put_char) {
            throw new null(0x3c);
          }
          try {
            for (var _0x421afe = 0x0; _0x421afe < _0x171d3c; _0x421afe++) {
              _0x166886.tty.ops.put_char(_0x166886.tty, _0x1945d1[_0xe8ab3a + _0x421afe]);
            }
          } catch (_0x1158fe) {
            throw new null(0x1d);
          }
          if (_0x171d3c) {
            _0x166886.node.timestamp = Date.now();
          }
          return _0x421afe;
        }
      },
      "default_tty_ops": {
        "get_char": function (_0x268b5d) {
          if (!_0x268b5d.input.length) {
            var _0x32828d = null;
            if (_0x4da766) {
              var _0xe9823e = Buffer.alloc(0x100);
              var _0x298027 = 0x0;
              try {
                _0x298027 = _0x415551.readSync(process.stdin.fd, _0xe9823e, 0x0, 0x100, -0x1);
              } catch (_0x31cf27) {
                if (_0x31cf27.toString().includes("EOF")) {
                  _0x298027 = 0x0;
                } else {
                  throw _0x31cf27;
                }
              }
              if (_0x298027 > 0x0) {
                _0x32828d = _0xe9823e.slice(0x0, _0x298027).toString("utf-8");
              } else {
                _0x32828d = null;
              }
            } else {
              if (typeof window != "undefined" && typeof window.prompt == "function") {
                _0x32828d = window.prompt("Input: ");
                if (_0x32828d !== null) {
                  _0x32828d += "\n";
                }
              } else if (typeof readline == "function") {
                _0x32828d = readline();
                if (_0x32828d !== null) {
                  _0x32828d += "\n";
                }
              }
            }
            if (!_0x32828d) {
              return null;
            }
            _0x268b5d.input = _0x3b0517(_0x32828d, true);
          }
          return _0x268b5d.input.shift();
        },
        "put_char": function (_0x1539b2, _0x3caea5) {
          if (_0x3caea5 === null || _0x3caea5 === 0xa) {
            _0x3402e6(_0x344b4c(_0x1539b2.output, 0x0));
            _0x1539b2.output = [];
          } else {
            if (_0x3caea5 != 0x0) {
              _0x1539b2.output.push(_0x3caea5);
            }
          }
        },
        "flush": function (_0x1c44c9) {
          if (_0x1c44c9.output && _0x1c44c9.output.length > 0x0) {
            _0x3402e6(_0x344b4c(_0x1c44c9.output, 0x0));
            _0x1c44c9.output = [];
          }
        }
      },
      "default_tty1_ops": {
        "put_char": function (_0x571a65, _0x2b0f01) {
          if (_0x2b0f01 === null || _0x2b0f01 === 0xa) {
            _0x119168(_0x344b4c(_0x571a65.output, 0x0));
            _0x571a65.output = [];
          } else {
            if (_0x2b0f01 != 0x0) {
              _0x571a65.output.push(_0x2b0f01);
            }
          }
        },
        "flush": function (_0x576cda) {
          if (_0x576cda.output && _0x576cda.output.length > 0x0) {
            _0x119168(_0x344b4c(_0x576cda.output, 0x0));
            _0x576cda.output = [];
          }
        }
      }
    };
    function _0x3988d6(_0x5e9986, _0x23ff0a) {
      _0x18c91b.fill(0x0, _0x5e9986, _0x5e9986 + _0x23ff0a);
    }
    function _0x33fedd(_0x1cc754) {
      _0x1cc754 = Math.ceil(_0x1cc754 / 0x10000) * 0x10000;
      var _0x23716c = _0x4469d9(0x10000, _0x1cc754);
      if (!_0x23716c) {
        return 0x0;
      }
      _0x3988d6(_0x23716c, _0x1cc754);
      return _0x23716c;
    }
    var _0x187d72 = {
      "ops_table": null,
      "mount": function (_0x497a92) {
        return _0x187d72.createNode(null, "/", 16895, 0x0);
      },
      "createNode": function (_0x1066bd, _0x54f8c8, _0x4e1f86, _0x252a66) {
        if ((_0x4e1f86 & 0xf000) === 0x6000 || (_0x4e1f86 & 0xf000) === 0x1000) {
          throw new null(0x3f);
        }
        _0x187d72.ops_table = {
          "dir": {
            "node": {
              "getattr": _0x187d72.node_ops.getattr,
              "setattr": _0x187d72.node_ops.setattr,
              "lookup": _0x187d72.node_ops.lookup,
              "mknod": _0x187d72.node_ops.mknod,
              "rename": _0x187d72.node_ops.rename,
              "unlink": _0x187d72.node_ops.unlink,
              "rmdir": _0x187d72.node_ops.rmdir,
              "readdir": _0x187d72.node_ops.readdir,
              "symlink": _0x187d72.node_ops.symlink
            },
            "stream": {
              "llseek": _0x187d72.stream_ops.llseek
            }
          },
          "file": {
            "node": {
              "getattr": _0x187d72.node_ops.getattr,
              "setattr": _0x187d72.node_ops.setattr
            },
            "stream": {
              "llseek": _0x187d72.stream_ops.llseek,
              "read": _0x187d72.stream_ops.read,
              "write": _0x187d72.stream_ops.write,
              "allocate": _0x187d72.stream_ops.allocate,
              "mmap": _0x187d72.stream_ops.mmap,
              "msync": _0x187d72.stream_ops.msync
            }
          },
          "link": {
            "node": {
              "getattr": _0x187d72.node_ops.getattr,
              "setattr": _0x187d72.node_ops.setattr,
              "readlink": _0x187d72.node_ops.readlink
            },
            "stream": {}
          },
          "chrdev": {
            "node": {
              "getattr": _0x187d72.node_ops.getattr,
              "setattr": _0x187d72.node_ops.setattr
            },
            "stream": _0x278315.chrdev_stream_ops
          }
        };
        var _0x2a501e = _0x278315.createNode(_0x1066bd, _0x54f8c8, _0x4e1f86, _0x252a66);
        if ((_0x2a501e.mode & 0xf000) === 0x4000) {
          _0x2a501e.node_ops = null.dir.node;
          _0x2a501e.stream_ops = null.dir.stream;
          _0x2a501e.contents = {};
        } else {
          if ((_0x2a501e.mode & 0xf000) === 0x8000) {
            _0x2a501e.node_ops = null.file.node;
            _0x2a501e.stream_ops = null.file.stream;
            _0x2a501e.usedBytes = 0x0;
            _0x2a501e.contents = null;
          } else {
            if ((_0x2a501e.mode & 0xf000) === 0xa000) {
              _0x2a501e.node_ops = null.link.node;
              _0x2a501e.stream_ops = null.link.stream;
            } else if ((_0x2a501e.mode & 0xf000) === 0x2000) {
              _0x2a501e.node_ops = null.chrdev.node;
              _0x2a501e.stream_ops = null.chrdev.stream;
            }
          }
        }
        _0x2a501e.timestamp = Date.now();
        if (_0x1066bd) {
          _0x1066bd.contents[_0x54f8c8] = _0x2a501e;
          _0x1066bd.timestamp = _0x2a501e.timestamp;
        }
        return _0x2a501e;
      },
      "getFileDataAsTypedArray": function (_0xf59fde) {
        if (!_0xf59fde.contents) {
          return new Uint8Array(0x0);
        }
        if (_0xf59fde.contents.subarray) {
          return _0xf59fde.contents.subarray(0x0, _0xf59fde.usedBytes);
        }
        return new Uint8Array(_0xf59fde.contents);
      },
      "expandFileStorage": function (_0xd0f55c, _0x5ab52c) {
        var _0x480966 = _0xd0f55c.contents ? _0xd0f55c.contents.length : 0x0;
        if (_0x480966 >= _0x5ab52c) {
          return;
        }
        _0x5ab52c = Math.max(_0x5ab52c, _0x480966 * (_0x480966 < 1048576 ? 0x2 : 1.125) >>> 0x0);
        if (_0x480966 != 0x0) {
          _0x5ab52c = Math.max(_0x5ab52c, 0x100);
        }
        var _0x19e6e8 = _0xd0f55c.contents;
        _0xd0f55c.contents = new Uint8Array(_0x5ab52c);
        if (_0xd0f55c.usedBytes > 0x0) {
          _0xd0f55c.contents.set(_0x19e6e8.subarray(0x0, _0xd0f55c.usedBytes), 0x0);
        }
      },
      "resizeFileStorage": function (_0x11d8fd, _0x36fbbe) {
        if (_0x11d8fd.usedBytes == _0x36fbbe) {
          return;
        }
        if (_0x36fbbe == 0x0) {
          _0x11d8fd.contents = null;
          _0x11d8fd.usedBytes = 0x0;
        } else {
          var _0x3e4083 = _0x11d8fd.contents;
          _0x11d8fd.contents = new Uint8Array(_0x36fbbe);
          if (_0x3e4083) {
            _0x11d8fd.contents.set(_0x3e4083.subarray(0x0, Math.min(_0x36fbbe, _0x11d8fd.usedBytes)));
          }
          _0x11d8fd.usedBytes = _0x36fbbe;
        }
      },
      "node_ops": {
        "getattr": function (_0x1557f3) {
          var _0x5d18e7 = {
            dev: (_0x1557f3.mode & 0xf000) === 0x2000 ? _0x1557f3.id : 0x1,
            ino: _0x1557f3.id,
            mode: _0x1557f3.mode,
            nlink: 0x1,
            uid: 0x0,
            gid: 0x0,
            rdev: _0x1557f3.rdev
          };
          if ((_0x1557f3.mode & 0xf000) === 0x4000) {
            _0x5d18e7.size = 0x1000;
          } else {
            if ((_0x1557f3.mode & 0xf000) === 0x8000) {
              _0x5d18e7.size = _0x1557f3.usedBytes;
            } else if ((_0x1557f3.mode & 0xf000) === 0xa000) {
              _0x5d18e7.size = _0x1557f3.link.length;
            } else {
              _0x5d18e7.size = 0x0;
            }
          }
          _0x5d18e7.atime = new Date(_0x1557f3.timestamp);
          _0x5d18e7.mtime = new Date(_0x1557f3.timestamp);
          _0x5d18e7.ctime = new Date(_0x1557f3.timestamp);
          _0x5d18e7.blksize = 0x1000;
          _0x5d18e7.blocks = Math.ceil(_0x5d18e7.size / _0x5d18e7.blksize);
          return _0x5d18e7;
        },
        "setattr": function (_0x1c3543, _0x4d2a6a) {
          if (_0x4d2a6a.mode !== undefined) {
            _0x1c3543.mode = _0x4d2a6a.mode;
          }
          if (_0x4d2a6a.timestamp !== undefined) {
            _0x1c3543.timestamp = _0x4d2a6a.timestamp;
          }
          if (_0x4d2a6a.size !== undefined) {
            _0x187d72.resizeFileStorage(_0x1c3543, _0x4d2a6a.size);
          }
        },
        "lookup": function (_0x3a9133, _0x285a69) {
          throw _0x278315.genericErrors[0x2c];
        },
        "mknod": function (_0x26f70e, _0x20fa46, _0x335fc1, _0x5f4b84) {
          return _0x187d72.createNode(_0x26f70e, _0x20fa46, _0x335fc1, _0x5f4b84);
        },
        "rename": function (_0x463d3e, _0x5a0d2c, _0x332c55) {
          if ((_0x463d3e.mode & 0xf000) === 0x4000) {
            var _0x1fd904;
            try {
              _0x1fd904 = _0x278315.lookupNode(_0x5a0d2c, _0x332c55);
            } catch (_0x4b5483) {}
            if (_0x1fd904) {
              for (var _0x3bca68 in _0x1fd904.contents) {
                throw new null(0x37);
              }
            }
          }
          delete _0x463d3e.parent.contents[_0x463d3e.name];
          _0x463d3e.parent.timestamp = Date.now();
          _0x463d3e.name = _0x332c55;
          _0x5a0d2c.contents[_0x332c55] = _0x463d3e;
          _0x5a0d2c.timestamp = _0x463d3e.parent.timestamp;
          _0x463d3e.parent = _0x5a0d2c;
        },
        "unlink": function (_0x234566, _0x3f2655) {
          delete _0x234566.contents[_0x3f2655];
          _0x234566.timestamp = Date.now();
        },
        "rmdir": function (_0x1ba029, _0x4d2a36) {
          var _0x47ccfd = _0x278315.lookupNode(_0x1ba029, _0x4d2a36);
          for (var _0x22a63c in _0x47ccfd.contents) {
            throw new null(0x37);
          }
          delete _0x1ba029.contents[_0x4d2a36];
          _0x1ba029.timestamp = Date.now();
        },
        "readdir": function (_0x1f8abf) {
          var _0xf0502 = [".", ".."];
          for (var _0x185837 in _0x1f8abf.contents) {
            if (!_0x1f8abf.contents.hasOwnProperty(_0x185837)) {
              continue;
            }
            _0xf0502.push(_0x185837);
          }
          return _0xf0502;
        },
        "symlink": function (_0x3b94d9, _0x422452, _0x2fa275) {
          var _0x329750 = _0x187d72.createNode(_0x3b94d9, _0x422452, 41471, 0x0);
          _0x329750.link = _0x2fa275;
          return _0x329750;
        },
        "readlink": function (_0x255f7c) {
          if (!((_0x255f7c.mode & 0xf000) === 0xa000)) {
            throw new null(0x1c);
          }
          return _0x255f7c.link;
        }
      },
      "stream_ops": {
        "read": function (_0x2af7df, _0x38cb9a, _0x5b6232, _0x4e04ad, _0x61f878) {
          var _0x25cb2d = _0x2af7df.node.contents;
          if (_0x61f878 >= _0x2af7df.node.usedBytes) {
            return 0x0;
          }
          var _0x1faeda = Math.min(_0x2af7df.node.usedBytes - _0x61f878, _0x4e04ad);
          if (_0x1faeda > 0x8 && _0x25cb2d.subarray) {
            _0x38cb9a.set(_0x25cb2d.subarray(_0x61f878, _0x61f878 + _0x1faeda), _0x5b6232);
          } else {
            for (var _0x3bac94 = 0x0; _0x3bac94 < _0x1faeda; _0x3bac94++) {
              _0x38cb9a[_0x5b6232 + _0x3bac94] = _0x25cb2d[_0x61f878 + _0x3bac94];
            }
          }
          return _0x1faeda;
        },
        "write": function (_0x1efb9b, _0x35cacc, _0x593841, _0x3a4217, _0x44f41f, _0x54755b) {
          if (_0x35cacc.buffer === _0x59ed12.buffer) {
            _0x54755b = false;
          }
          if (!_0x3a4217) {
            return 0x0;
          }
          var _0x1c125 = _0x1efb9b.node;
          _0x1c125.timestamp = Date.now();
          if (_0x35cacc.subarray && (!_0x1c125.contents || _0x1c125.contents.subarray)) {
            if (_0x54755b) {
              _0x1c125.contents = _0x35cacc.subarray(_0x593841, _0x593841 + _0x3a4217);
              _0x1c125.usedBytes = _0x3a4217;
              return _0x3a4217;
            } else {
              if (_0x1c125.usedBytes === 0x0 && _0x44f41f === 0x0) {
                _0x1c125.contents = _0x35cacc.slice(_0x593841, _0x593841 + _0x3a4217);
                _0x1c125.usedBytes = _0x3a4217;
                return _0x3a4217;
              } else {
                if (_0x44f41f + _0x3a4217 <= _0x1c125.usedBytes) {
                  _0x1c125.contents.set(_0x35cacc.subarray(_0x593841, _0x593841 + _0x3a4217), _0x44f41f);
                  return _0x3a4217;
                }
              }
            }
          }
          _0x187d72.expandFileStorage(_0x1c125, _0x44f41f + _0x3a4217);
          if (_0x1c125.contents.subarray && _0x35cacc.subarray) {
            _0x1c125.contents.set(_0x35cacc.subarray(_0x593841, _0x593841 + _0x3a4217), _0x44f41f);
          } else {
            for (var _0x3fbe9f = 0x0; _0x3fbe9f < _0x3a4217; _0x3fbe9f++) {
              _0x1c125.contents[_0x44f41f + _0x3fbe9f] = _0x35cacc[_0x593841 + _0x3fbe9f];
            }
          }
          _0x1c125.usedBytes = Math.max(_0x1c125.usedBytes, _0x44f41f + _0x3a4217);
          return _0x3a4217;
        },
        "llseek": function (_0x5973dd, _0x4217b1, _0x44ce62) {
          var _0x22156d = _0x4217b1;
          if (_0x44ce62 === 0x1) {
            _0x22156d += _0x5973dd.position;
          } else if (_0x44ce62 === 0x2) {
            if ((_0x5973dd.node.mode & 0xf000) === 0x8000) {
              _0x22156d += _0x5973dd.node.usedBytes;
            }
          }
          if (_0x22156d < 0x0) {
            throw new null(0x1c);
          }
          return _0x22156d;
        },
        "allocate": function (_0x1bf905, _0x108ccb, _0x4efb06) {
          _0x187d72.expandFileStorage(_0x1bf905.node, _0x108ccb + _0x4efb06);
          _0x1bf905.node.usedBytes = Math.max(_0x1bf905.node.usedBytes, _0x108ccb + _0x4efb06);
        },
        "mmap": function (_0x231490, _0x5d8ab3, _0x387823, _0x301f6a, _0x578c8a, _0xcebc4a) {
          if (_0x5d8ab3 !== 0x0) {
            throw new null(0x1c);
          }
          if (!((_0x231490.node.mode & 0xf000) === 0x8000)) {
            throw new null(0x2b);
          }
          var _0x5d9cf3;
          var _0x57cbff;
          var _0x3e5187 = _0x231490.node.contents;
          if (!(_0xcebc4a & 0x2) && _0x3e5187.buffer === _0x14ab10) {
            _0x57cbff = false;
            _0x5d9cf3 = _0x3e5187.byteOffset;
          } else {
            if (_0x301f6a > 0x0 || _0x301f6a + _0x387823 < _0x3e5187.length) {
              if (_0x3e5187.subarray) {
                _0x3e5187 = _0x3e5187.subarray(_0x301f6a, _0x301f6a + _0x387823);
              } else {
                _0x3e5187 = Array.prototype.slice.call(_0x3e5187, _0x301f6a, _0x301f6a + _0x387823);
              }
            }
            _0x57cbff = true;
            _0x5d9cf3 = _0x33fedd(_0x387823);
            if (!_0x5d9cf3) {
              throw new null(0x30);
            }
            _0x59ed12.set(_0x3e5187, _0x5d9cf3);
          }
          return {
            "ptr": _0x5d9cf3,
            "allocated": _0x57cbff
          };
        },
        "msync": function (_0xeeeff, _0xec641, _0x1be965, _0x3ce19b, _0x1e85e3) {
          if (!((_0xeeeff.node.mode & 0xf000) === 0x8000)) {
            throw new null(0x2b);
          }
          if (_0x1e85e3 & 0x2) {
            return 0x0;
          }
          return 0x0;
        }
      }
    };
    function _0x466e8b(_0x46d0a1, _0x3a2845, _0x17d4a2, _0x222a88) {
      var _0x5d1527 = !_0x222a88 ? _0x5928b2 : '';
      _0x27b369(_0x46d0a1, function (_0x134498) {
        _0x35e637(_0x134498, "Loading data file \"" + _0x46d0a1 + "\" failed (no arrayBuffer).");
        _0x3a2845(new Uint8Array(_0x134498));
        if (_0x5d1527) {
          _0x3b7ae4(_0x5d1527);
        }
      }, function (_0x353e82) {
        if (_0x17d4a2) {
          _0x17d4a2();
        } else {
          throw "Loading data file \"" + _0x46d0a1 + "\" failed.";
        }
      });
      if (_0x5d1527) {
        _0x441879(_0x5d1527);
      }
    }
    var _0x3eb30b = {
      "dbs": {},
      "indexedDB": () => {
        if (typeof indexedDB != "undefined") {
          return indexedDB;
        }
        var _0x46c788 = null;
        if (typeof window == "object") {
          _0x46c788 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        }
        _0x35e637(_0x46c788, "IDBFS used, but indexedDB not supported");
        return _0x46c788;
      },
      "DB_VERSION": 0x15,
      "DB_STORE_NAME": "FILE_DATA",
      "mount": function (_0x2b4c64) {
        return _0x187d72.mount.apply(null, arguments);
      },
      "syncfs": (_0x342750, _0x42e596, _0x86ec10) => {
        _0x3eb30b.getLocalSet(_0x342750, (_0x5865a6, _0x2a9544) => {
          if (_0x5865a6) {
            return _0x86ec10(_0x5865a6);
          }
          _0x3eb30b.getRemoteSet(_0x342750, (_0x2d0970, _0x1706e4) => {
            if (_0x2d0970) {
              return _0x86ec10(_0x2d0970);
            }
            var _0x41f728 = _0x42e596 ? _0x1706e4 : _0x2a9544;
            var _0x4549e0 = _0x42e596 ? _0x2a9544 : _0x1706e4;
            _0x3eb30b.reconcile(_0x41f728, _0x4549e0, _0x86ec10);
          });
        });
      },
      "getDB": (_0x6aacf9, _0x182833) => {
        var _0x8316d7 = _0x3eb30b.dbs[_0x6aacf9];
        if (_0x8316d7) {
          return _0x182833(null, _0x8316d7);
        }
        var _0x136e70;
        try {
          _0x136e70 = _0x3eb30b.indexedDB().open(_0x6aacf9, 0x15);
        } catch (_0xe29f67) {
          return _0x182833(_0xe29f67);
        }
        if (!_0x136e70) {
          return _0x182833("Unable to connect to IndexedDB");
        }
        _0x136e70.onupgradeneeded = _0x52b698 => {
          var _0x41a701 = _0x52b698.target.result;
          var _0x151850 = _0x52b698.target.transaction;
          var _0x3b8fb4;
          if (_0x41a701.objectStoreNames.contains("FILE_DATA")) {
            _0x3b8fb4 = _0x151850.objectStore("FILE_DATA");
          } else {
            _0x3b8fb4 = _0x41a701.createObjectStore("FILE_DATA");
          }
          if (!_0x3b8fb4.indexNames.contains("timestamp")) {
            _0x3b8fb4.createIndex("timestamp", "timestamp", {
              "unique": false
            });
          }
        };
        _0x136e70.onsuccess = () => {
          _0x8316d7 = _0x136e70.result;
          _0x3eb30b.dbs[_0x6aacf9] = _0x8316d7;
          _0x182833(null, _0x8316d7);
        };
        _0x136e70.onerror = _0x4552e5 => {
          _0x182833(this.error);
          _0x4552e5.preventDefault();
        };
      },
      "getLocalSet": (_0x4ab71c, _0x79d29d) => {
        var _0x55bc94 = {};
        function _0x1a485d(_0x2633f3) {
          return _0x2633f3 !== "." && _0x2633f3 !== "..";
        }
        function _0x25b676(_0x21d83f) {
          return _0x5e3711 => {
            return _0x353c9a.normalize(_0x21d83f + "/" + _0x5e3711);
          };
        }
        var _0x569893 = _0x278315.readdir(_0x4ab71c.mountpoint).filter(_0x1a485d).map(_0x25b676(_0x4ab71c.mountpoint));
        while (_0x569893.length) {
          var _0x530bdf = _0x569893.pop();
          var _0x40ace1;
          try {
            _0x40ace1 = _0x278315.stat(_0x530bdf);
          } catch (_0x5904b3) {
            return _0x79d29d(_0x5904b3);
          }
          if ((_0x40ace1.mode & 0xf000) === 0x4000) {
            _0x569893.push.apply(_0x569893, _0x278315.readdir(_0x530bdf).filter(_0x1a485d).map(_0x25b676(_0x530bdf)));
          }
          _0x55bc94[_0x530bdf] = {
            "timestamp": _0x40ace1.mtime
          };
        }
        return _0x79d29d(null, {
          "type": "local",
          "entries": _0x55bc94
        });
      },
      "getRemoteSet": (_0x274c72, _0x1ae25c) => {
        var _0xf2d67b = {};
        _0x3eb30b.getDB(_0x274c72.mountpoint, (_0x837445, _0x29d970) => {
          if (_0x837445) {
            return _0x1ae25c(_0x837445);
          }
          try {
            var _0x44c88e = _0x29d970.transaction(["FILE_DATA"], "readonly");
            _0x44c88e.onerror = _0x1d79a6 => {
              _0x1ae25c(this.error);
              _0x1d79a6.preventDefault();
            };
            var _0x5958ff = _0x44c88e.objectStore("FILE_DATA");
            var _0x312a93 = _0x5958ff.index("timestamp");
            _0x312a93.openKeyCursor().onsuccess = _0x2e2e04 => {
              var _0x2ed370 = _0x2e2e04.target.result;
              if (!_0x2ed370) {
                return _0x1ae25c(null, {
                  "type": "remote",
                  "db": _0x29d970,
                  "entries": _0xf2d67b
                });
              }
              _0xf2d67b[_0x2ed370.primaryKey] = {
                "timestamp": _0x2ed370.key
              };
              _0x2ed370["continue"]();
            };
          } catch (_0x3711ba) {
            return _0x1ae25c(_0x3711ba);
          }
        });
      },
      "loadLocalEntry": (_0x2770d6, _0x4aaba3) => {
        var _0x3ee98c;
        var _0x86f3cf;
        try {
          var _0x4a232b = _0x278315.lookupPath(_0x2770d6);
          _0x86f3cf = _0x4a232b.node;
          _0x3ee98c = _0x278315.stat(_0x2770d6);
        } catch (_0x41832c) {
          return _0x4aaba3(_0x41832c);
        }
        if ((_0x3ee98c.mode & 0xf000) === 0x4000) {
          return _0x4aaba3(null, {
            "timestamp": _0x3ee98c.mtime,
            "mode": _0x3ee98c.mode
          });
        } else {
          return (_0x3ee98c.mode & 0xf000) === 0x8000 ? (_0x86f3cf.contents = _0x187d72.getFileDataAsTypedArray(_0x86f3cf), _0x4aaba3(null, {
            "timestamp": _0x3ee98c.mtime,
            "mode": _0x3ee98c.mode,
            "contents": _0x86f3cf.contents
          })) : _0x4aaba3(new Error("node type not supported"));
        }
      },
      "storeLocalEntry": (_0x4bfb79, _0x5ac021, _0x46b035) => {
        try {
          if ((_0x5ac021.mode & 0xf000) === 0x4000) {
            _0x278315.mkdirTree(_0x4bfb79, _0x5ac021.mode);
          } else {
            if ((_0x5ac021.mode & 0xf000) === 0x8000) {
              _0x278315.writeFile(_0x4bfb79, _0x5ac021.contents, {
                "canOwn": true
              });
            } else {
              return _0x46b035(new Error("node type not supported"));
            }
          }
          _0x278315.chmod(_0x4bfb79, _0x5ac021.mode);
          _0x278315.utime(_0x4bfb79, _0x5ac021.timestamp, _0x5ac021.timestamp);
        } catch (_0x490f25) {
          return _0x46b035(_0x490f25);
        }
        _0x46b035(null);
      },
      "removeLocalEntry": (_0x286399, _0x3f54) => {
        try {
          var _0x44c24e = _0x278315.stat(_0x286399);
          if ((_0x44c24e.mode & 0xf000) === 0x4000) {
            _0x278315.rmdir(_0x286399);
          } else if ((_0x44c24e.mode & 0xf000) === 0x8000) {
            _0x278315.unlink(_0x286399);
          }
        } catch (_0x28fa1e) {
          return _0x3f54(_0x28fa1e);
        }
        _0x3f54(null);
      },
      "loadRemoteEntry": (_0x4f2dac, _0x4e7701, _0x181e3e) => {
        var _0x3f6509 = _0x4f2dac.get(_0x4e7701);
        _0x3f6509.onsuccess = _0x56f213 => {
          _0x181e3e(null, _0x56f213.target.result);
        };
        _0x3f6509.onerror = _0x52f80e => {
          _0x181e3e(this.error);
          _0x52f80e.preventDefault();
        };
      },
      "storeRemoteEntry": (_0x857946, _0x4126fc, _0x52fc1f, _0x1302fd) => {
        try {
          var _0x18a3f7 = _0x857946.put(_0x52fc1f, _0x4126fc);
        } catch (_0x230dec) {
          _0x1302fd(_0x230dec);
          return;
        }
        _0x18a3f7.onsuccess = () => {
          _0x1302fd(null);
        };
        _0x18a3f7.onerror = _0x235c70 => {
          _0x1302fd(this.error);
          _0x235c70.preventDefault();
        };
      },
      "removeRemoteEntry": (_0x1224ea, _0x5401dd, _0x296c90) => {
        var _0x256f10 = _0x1224ea["delete"](_0x5401dd);
        _0x256f10.onsuccess = () => {
          _0x296c90(null);
        };
        _0x256f10.onerror = _0x46df13 => {
          _0x296c90(this.error);
          _0x46df13.preventDefault();
        };
      },
      "reconcile": (_0x1b999e, _0x5b80df, _0x253f9a) => {
        var _0x16c6fd = 0x0;
        var _0x3844db = [];
        Object.keys(_0x1b999e.entries).forEach(function (_0xcdeef2) {
          var _0x173ee0 = _0x1b999e.entries[_0xcdeef2];
          var _0x2da87b = _0x5b80df.entries[_0xcdeef2];
          if (!_0x2da87b || _0x173ee0.timestamp.getTime() != _0x2da87b.timestamp.getTime()) {
            _0x3844db.push(_0xcdeef2);
            _0x16c6fd++;
          }
        });
        var _0x4b5359 = [];
        Object.keys(_0x5b80df.entries).forEach(function (_0x255033) {
          if (!_0x1b999e.entries[_0x255033]) {
            _0x4b5359.push(_0x255033);
            _0x16c6fd++;
          }
        });
        if (!_0x16c6fd) {
          return _0x253f9a(null);
        }
        var _0x399187 = false;
        var _0x228977 = _0x1b999e.type === "remote" ? _0x1b999e.db : _0x5b80df.db;
        var _0x39bc3b = _0x228977.transaction(["FILE_DATA"], "readwrite");
        var _0x3ea7dd = _0x39bc3b.objectStore("FILE_DATA");
        function _0x2f4f55(_0x3c1a39) {
          if (_0x3c1a39 && !_0x399187) {
            _0x399187 = true;
            return _0x253f9a(_0x3c1a39);
          }
        }
        _0x39bc3b.onerror = _0x213c0f => {
          _0x2f4f55(this.error);
          _0x213c0f.preventDefault();
        };
        _0x39bc3b.oncomplete = _0x2240ab => {
          if (!_0x399187) {
            _0x253f9a(null);
          }
        };
        _0x3844db.sort().forEach(_0x9bb921 => {
          if (_0x5b80df.type === "local") {
            _0x3eb30b.loadRemoteEntry(_0x3ea7dd, _0x9bb921, (_0x2ff605, _0x122266) => {
              if (_0x2ff605) {
                return _0x2f4f55(_0x2ff605);
              }
              _0x3eb30b.storeLocalEntry(_0x9bb921, _0x122266, _0x2f4f55);
            });
          } else {
            _0x3eb30b.loadLocalEntry(_0x9bb921, (_0x3469fc, _0x2fe0b5) => {
              if (_0x3469fc) {
                return _0x2f4f55(_0x3469fc);
              }
              _0x3eb30b.storeRemoteEntry(_0x3ea7dd, _0x9bb921, _0x2fe0b5, _0x2f4f55);
            });
          }
        });
        _0x4b5359.sort().reverse().forEach(_0x5173e2 => {
          if (_0x5b80df.type === "local") {
            _0x3eb30b.removeLocalEntry(_0x5173e2, _0x2f4f55);
          } else {
            _0x3eb30b.removeRemoteEntry(_0x3ea7dd, _0x5173e2, _0x2f4f55);
          }
        });
      }
    };
    var _0x278315 = {
      "root": null,
      "mounts": [],
      "devices": {},
      "streams": [],
      "nextInode": 0x1,
      "nameTable": null,
      "currentPath": "/",
      "initialized": false,
      "ignorePermissions": true,
      "ErrnoError": null,
      "genericErrors": {},
      "filesystems": null,
      "syncFSRequests": 0x0,
      "lookupPath": (_0x673342, _0x1d5ab0 = {}) => {
        _0x673342 = _0x7c6eff.resolve("/", _0x673342);
        if (!_0x673342) {
          return {
            "path": '',
            "node": null
          };
        }
        var _0x3068ce = {
          "follow_mount": true,
          "recurse_count": 0x0
        };
        _0x1d5ab0 = Object.assign(_0x3068ce, _0x1d5ab0);
        if (_0x1d5ab0.recurse_count > 0x8) {
          throw new null(0x20);
        }
        var _0x39a0ac = _0x353c9a.normalizeArray(_0x673342.split("/").filter(_0xac382e => !!_0xac382e), false);
        var _0x3b552d = null;
        var _0x32c850 = "/";
        for (var _0x1d6719 = 0x0; _0x1d6719 < _0x39a0ac.length; _0x1d6719++) {
          var _0x1a4671 = _0x1d6719 === _0x39a0ac.length - 0x1;
          if (_0x1a4671 && _0x1d5ab0.parent) {
            break;
          }
          _0x3b552d = _0x278315.lookupNode(_0x3b552d, _0x39a0ac[_0x1d6719]);
          _0x32c850 = _0x353c9a.normalize(_0x32c850 + "/" + _0x39a0ac[_0x1d6719]);
          if (!!_0x3b552d.mounted) {
            if (!_0x1a4671 || _0x1a4671 && _0x1d5ab0.follow_mount) {
              _0x3b552d = _0x3b552d.mounted.root;
            }
          }
          if (!_0x1a4671 || _0x1d5ab0.follow) {
            var _0x40d5ab = 0x0;
            while ((_0x3b552d.mode & 0xf000) === 0xa000) {
              var _0x2f4b4f = _0x278315.readlink(_0x32c850);
              _0x32c850 = _0x7c6eff.resolve(_0x353c9a.dirname(_0x32c850), _0x2f4b4f);
              var _0x14e612 = _0x278315.lookupPath(_0x32c850, {
                "recurse_count": _0x1d5ab0.recurse_count + 0x1
              });
              _0x3b552d = _0x14e612.node;
              if (_0x40d5ab++ > 0x28) {
                throw new null(0x20);
              }
            }
          }
        }
        return {
          "path": _0x32c850,
          "node": _0x3b552d
        };
      },
      "getPath": _0x4f28ab => {
        var _0x2d82fe;
        while (true) {
          if (_0x4f28ab === _0x4f28ab.parent) {
            var _0xfe21e8 = _0x4f28ab.mount.mountpoint;
            if (!_0x2d82fe) {
              return _0xfe21e8;
            }
            return _0xfe21e8[_0xfe21e8.length - 0x1] !== "/" ? _0xfe21e8 + "/" + _0x2d82fe : _0xfe21e8 + _0x2d82fe;
          }
          _0x2d82fe = _0x2d82fe ? _0x4f28ab.name + "/" + _0x2d82fe : _0x4f28ab.name;
          _0x4f28ab = _0x4f28ab.parent;
        }
      },
      "hashName": (_0x35c47d, _0x167fc8) => {
        var _0x21e72b = 0x0;
        for (var _0x1e42d9 = 0x0; _0x1e42d9 < _0x167fc8.length; _0x1e42d9++) {
          _0x21e72b = (_0x21e72b << 0x5) - _0x21e72b + _0x167fc8.charCodeAt(_0x1e42d9) | 0x0;
        }
        return (_0x35c47d + _0x21e72b >>> 0x0) % null.length;
      },
      "hashAddNode": _0x5d255e => {
        var _0x9e2ad2 = _0x278315.hashName(_0x5d255e.parent.id, _0x5d255e.name);
        _0x5d255e.name_next = null[_0x9e2ad2];
        null[_0x9e2ad2] = _0x5d255e;
      },
      "hashRemoveNode": _0x195f65 => {
        var _0x42e8c1 = _0x278315.hashName(_0x195f65.parent.id, _0x195f65.name);
        if (null[_0x42e8c1] === _0x195f65) {
          null[_0x42e8c1] = _0x195f65.name_next;
        } else {
          var _0x51784a = null[_0x42e8c1];
          while (_0x51784a) {
            if (_0x51784a.name_next === _0x195f65) {
              _0x51784a.name_next = _0x195f65.name_next;
              break;
            }
            _0x51784a = _0x51784a.name_next;
          }
        }
      },
      "lookupNode": (_0x5906fe, _0x45a089) => {
        var _0x386db8 = _0x278315.mayLookup(_0x5906fe);
        if (_0x386db8) {
          throw new null(_0x386db8, _0x5906fe);
        }
        var _0x1edf41 = _0x278315.hashName(_0x5906fe.id, _0x45a089);
        for (var _0x590ce2 = null[_0x1edf41]; _0x590ce2; _0x590ce2 = _0x590ce2.name_next) {
          var _0x11dbdd = _0x590ce2.name;
          if (_0x590ce2.parent.id === _0x5906fe.id && _0x11dbdd === _0x45a089) {
            return _0x590ce2;
          }
        }
        return _0x5906fe.node_ops.lookup(_0x5906fe, _0x45a089);
      },
      "createNode": (_0x53ba61, _0x21380a, _0x799a4b, _0x44a925) => {
        var _0x51cf30 = new _0x278315.FSNode(_0x53ba61, _0x21380a, _0x799a4b, _0x44a925);
        _0x278315.hashAddNode(_0x51cf30);
        return _0x51cf30;
      },
      "destroyNode": _0x3dcbdd => {
        _0x278315.hashRemoveNode(_0x3dcbdd);
      },
      "isRoot": _0x52717a => {
        return _0x52717a === _0x52717a.parent;
      },
      "isMountpoint": _0x1e4c8b => {
        return !!_0x1e4c8b.mounted;
      },
      "isFile": _0x507fcb => {
        return (_0x507fcb & 0xf000) === 0x8000;
      },
      "isDir": _0x41f24e => {
        return (_0x41f24e & 0xf000) === 0x4000;
      },
      "isLink": _0x142b07 => {
        return (_0x142b07 & 0xf000) === 0xa000;
      },
      "isChrdev": _0x20b6b5 => {
        return (_0x20b6b5 & 0xf000) === 0x2000;
      },
      "isBlkdev": _0x5d1ee6 => {
        return (_0x5d1ee6 & 0xf000) === 0x6000;
      },
      "isFIFO": _0x279f6a => {
        return (_0x279f6a & 0xf000) === 0x1000;
      },
      "isSocket": _0xed0555 => {
        return (_0xed0555 & 0xc000) === 0xc000;
      },
      "flagModes": {
        "r": 0x0,
        "r+": 0x2,
        "w": 0x241,
        "w+": 0x242,
        "a": 0x441,
        "a+": 0x442
      },
      "modeStringToFlags": _0x28ba8a => {
        var _0x22044b = _0x278315.flagModes[_0x28ba8a];
        if (typeof _0x22044b == "undefined") {
          throw new Error("Unknown file open mode: " + _0x28ba8a);
        }
        return _0x22044b;
      },
      "flagsToPermissionString": _0x20a52b => {
        var _0x1c83f3 = ["r", "w", "rw"][_0x20a52b & 0x3];
        if (_0x20a52b & 0x200) {
          _0x1c83f3 += "w";
        }
        return _0x1c83f3;
      },
      "nodePermissions": (_0x13798c, _0x40e8b5) => {
        return 0x0;
        if (_0x40e8b5.includes("r") && !(_0x13798c.mode & 0x124)) {
          return 0x2;
        } else {
          if (_0x40e8b5.includes("w") && !(_0x13798c.mode & 0x92)) {
            return 0x2;
          } else {
            if (_0x40e8b5.includes("x") && !(_0x13798c.mode & 0x49)) {
              return 0x2;
            }
          }
        }
        return 0x0;
      },
      "mayLookup": _0x2c2d98 => {
        var _0x198729 = _0x278315.nodePermissions(_0x2c2d98, "x");
        if (_0x198729) {
          return _0x198729;
        }
        if (!_0x2c2d98.node_ops.lookup) {
          return 0x2;
        }
        return 0x0;
      },
      "mayCreate": (_0x47aea3, _0x121429) => {
        try {
          return 0x14;
        } catch (_0x346438) {}
        return _0x278315.nodePermissions(_0x47aea3, "wx");
      },
      "mayDelete": (_0x2b7049, _0x41d024, _0x974b0) => {
        var _0x17c57e;
        try {
          _0x17c57e = _0x278315.lookupNode(_0x2b7049, _0x41d024);
        } catch (_0x5081bf) {
          return _0x5081bf.errno;
        }
        var _0x2feb11 = _0x278315.nodePermissions(_0x2b7049, "wx");
        if (_0x2feb11) {
          return _0x2feb11;
        }
        if (_0x974b0) {
          if (!((_0x17c57e.mode & 0xf000) === 0x4000)) {
            return 0x36;
          }
          if (_0x17c57e === _0x17c57e.parent || _0x278315.getPath(_0x17c57e) === "/") {
            return 0xa;
          }
        } else {
          if ((_0x17c57e.mode & 0xf000) === 0x4000) {
            return 0x1f;
          }
        }
        return 0x0;
      },
      "mayOpen": (_0x40c42a, _0xcd0a29) => {
        if (!_0x40c42a) {
          return 0x2c;
        }
        if ((_0x40c42a.mode & 0xf000) === 0xa000) {
          return 0x20;
        } else {
          if ((_0x40c42a.mode & 0xf000) === 0x4000) {
            if (_0x278315.flagsToPermissionString(_0xcd0a29) !== "r" || _0xcd0a29 & 0x200) {
              return 0x1f;
            }
          }
        }
        return _0x278315.nodePermissions(_0x40c42a, _0x278315.flagsToPermissionString(_0xcd0a29));
      },
      "MAX_OPEN_FDS": 0x1000,
      "nextfd": (_0x4c1aab = 0x0, _0x3b16e3 = 0x1000) => {
        for (var _0x456fee = _0x4c1aab; _0x456fee <= _0x3b16e3; _0x456fee++) {
          if (!_0x278315.streams[_0x456fee]) {
            return _0x456fee;
          }
        }
        throw new null(0x21);
      },
      "getStream": _0x4d69bf => _0x278315.streams[_0x4d69bf],
      "createStream": (_0x497d5d, _0x376048, _0x410197) => {
        if (!_0x278315.FSStream) {
          _0x278315.FSStream = function () {};
          _0x278315.FSStream.prototype = {
            "object": {
              "get": function () {
                return this.node;
              },
              "set": function (_0x3fc289) {
                this.node = _0x3fc289;
              }
            },
            "isRead": {
              "get": function () {
                return (this.flags & 0x200003) !== 0x1;
              }
            },
            "isWrite": {
              "get": function () {
                return (this.flags & 0x200003) !== 0x0;
              }
            },
            "isAppend": {
              "get": function () {
                return this.flags & 0x400;
              }
            }
          };
        }
        _0x497d5d = Object.assign(new _0x278315.FSStream(), _0x497d5d);
        var _0x496643 = _0x278315.nextfd(_0x376048, _0x410197);
        _0x497d5d.fd = _0x496643;
        _0x278315.streams[_0x496643] = _0x497d5d;
        return _0x497d5d;
      },
      "closeStream": _0x377933 => {
        _0x278315.streams[_0x377933] = null;
      },
      "chrdev_stream_ops": {
        "open": _0x544dcc => {
          var _0x9cf90b = _0x278315.devices[_0x544dcc.node.rdev];
          _0x544dcc.stream_ops = _0x9cf90b.stream_ops;
          if (_0x544dcc.stream_ops.open) {
            _0x544dcc.stream_ops.open(_0x544dcc);
          }
        },
        "llseek": () => {
          throw new null(0x46);
        }
      },
      "major": _0x233128 => _0x233128 >> 0x8,
      "minor": _0x3547ce => _0x3547ce & 0xff,
      "makedev": (_0x2113ca, _0x47bccf) => _0x2113ca << 0x8 | _0x47bccf,
      "registerDevice": (_0x132d8a, _0x2de60d) => {
        _0x278315.devices[_0x132d8a] = {
          "stream_ops": _0x2de60d
        };
      },
      "getDevice": _0x40fe9c => _0x278315.devices[_0x40fe9c],
      "getMounts": _0xefba1c => {
        var _0x55d77c = [];
        var _0xb42909 = [_0xefba1c];
        while (_0xb42909.length) {
          var _0x5acdd4 = _0xb42909.pop();
          _0x55d77c.push(_0x5acdd4);
          _0xb42909.push.apply(_0xb42909, _0x5acdd4.mounts);
        }
        return _0x55d77c;
      },
      "syncfs": (_0x1f7b42, _0x3e4d33) => {
        if (typeof _0x1f7b42 == "function") {
          _0x3e4d33 = _0x1f7b42;
          _0x1f7b42 = false;
        }
        0x0++;
        var _0x1df0ba = _0x278315.getMounts(null.mount);
        var _0x2c3b81 = 0x0;
        function _0x17bbb1(_0x58a7b1) {
          0x0--;
          return _0x3e4d33(_0x58a7b1);
        }
        function _0x565678(_0x34bbfe) {
          if (_0x34bbfe) {
            if (!_0x565678.errored) {
              _0x565678.errored = true;
              return _0x17bbb1(_0x34bbfe);
            }
            return;
          }
          if (++_0x2c3b81 >= _0x1df0ba.length) {
            _0x17bbb1(null);
          }
        }
        _0x1df0ba.forEach(_0x39c727 => {
          if (!_0x39c727.type.syncfs) {
            return _0x565678(null);
          }
          _0x39c727.type.syncfs(_0x39c727, _0x1f7b42, _0x565678);
        });
      },
      "mount": (_0x23f229, _0x3db249, _0x255e95) => {
        var _0x32fae1 = _0x255e95 === "/";
        var _0x2a1ede = !_0x255e95;
        var _0x20f49a;
        if (_0x32fae1 && null) {
          throw new null(0xa);
        } else {
          if (!_0x32fae1 && !_0x2a1ede) {
            var _0x22de7d = _0x278315.lookupPath(_0x255e95, {
              "follow_mount": false
            });
            _0x255e95 = _0x22de7d.path;
            _0x20f49a = _0x22de7d.node;
            if (!!_0x20f49a.mounted) {
              throw new null(0xa);
            }
            if (!((_0x20f49a.mode & 0xf000) === 0x4000)) {
              throw new null(0x36);
            }
          }
        }
        var _0x1ee8e1 = {
          "type": _0x23f229,
          "opts": _0x3db249,
          "mountpoint": _0x255e95,
          "mounts": []
        };
        var _0x21e2e8 = _0x23f229.mount(_0x1ee8e1);
        _0x21e2e8.mount = _0x1ee8e1;
        _0x1ee8e1.root = _0x21e2e8;
        if (_0x32fae1) {
          _0x278315.root = _0x21e2e8;
        } else if (_0x20f49a) {
          _0x20f49a.mounted = _0x1ee8e1;
          if (_0x20f49a.mount) {
            _0x20f49a.mount.mounts.push(_0x1ee8e1);
          }
        }
        return _0x21e2e8;
      },
      "unmount": _0x5daab7 => {
        var _0x58e5c5 = _0x278315.lookupPath(_0x5daab7, {
          "follow_mount": false
        });
        if (!!!_0x58e5c5.node.mounted) {
          throw new null(0x1c);
        }
        var _0x5562dc = _0x58e5c5.node;
        var _0x48fde1 = _0x5562dc.mounted;
        var _0x2a0ee8 = _0x278315.getMounts(_0x48fde1);
        Object.keys(null).forEach(_0x3aef40 => {
          var _0x55f972 = null[_0x3aef40];
          while (_0x55f972) {
            var _0x38d29c = _0x55f972.name_next;
            if (_0x2a0ee8.includes(_0x55f972.mount)) {
              _0x278315.destroyNode(_0x55f972);
            }
            _0x55f972 = _0x38d29c;
          }
        });
        _0x5562dc.mounted = null;
        var _0x22edf4 = _0x5562dc.mount.mounts.indexOf(_0x48fde1);
        _0x5562dc.mount.mounts.splice(_0x22edf4, 0x1);
      },
      "lookup": (_0x1b4243, _0x393b35) => {
        return _0x1b4243.node_ops.lookup(_0x1b4243, _0x393b35);
      },
      "mknod": (_0x4f00af, _0x117b18, _0x4f107a) => {
        var _0x4d9611 = _0x278315.lookupPath(_0x4f00af, {
          "parent": true
        });
        var _0x59f849 = _0x4d9611.node;
        var _0x4930c2 = _0x353c9a.basename(_0x4f00af);
        if (!_0x4930c2 || _0x4930c2 === "." || _0x4930c2 === "..") {
          throw new null(0x1c);
        }
        var _0x3e0b59 = _0x278315.mayCreate(_0x59f849, _0x4930c2);
        if (_0x3e0b59) {
          throw new null(_0x3e0b59);
        }
        if (!_0x59f849.node_ops.mknod) {
          throw new null(0x3f);
        }
        return _0x59f849.node_ops.mknod(_0x59f849, _0x4930c2, _0x117b18, _0x4f107a);
      },
      "create": (_0x19c544, _0x5eb3cb) => {
        _0x5eb3cb = _0x5eb3cb !== undefined ? _0x5eb3cb : 0x1b6;
        _0x5eb3cb &= 0xfff;
        _0x5eb3cb |= 0x8000;
        return _0x278315.mknod(_0x19c544, _0x5eb3cb, 0x0);
      },
      "mkdir": (_0x123c8b, _0x188096) => {
        _0x188096 = _0x188096 !== undefined ? _0x188096 : 0x1ff;
        _0x188096 &= 1023;
        _0x188096 |= 0x4000;
        return _0x278315.mknod(_0x123c8b, _0x188096, 0x0);
      },
      "mkdirTree": (_0x54c44e, _0x1a9fe0) => {
        var _0x590bbe = _0x54c44e.split("/");
        var _0x35558c = '';
        for (var _0x39f796 = 0x0; _0x39f796 < _0x590bbe.length; ++_0x39f796) {
          if (!_0x590bbe[_0x39f796]) {
            continue;
          }
          _0x35558c += "/" + _0x590bbe[_0x39f796];
          try {
            _0x278315.mkdir(_0x35558c, _0x1a9fe0);
          } catch (_0x323816) {
            if (_0x323816.errno != 0x14) {
              throw _0x323816;
            }
          }
        }
      },
      "mkdev": (_0x15dc57, _0x558e4d, _0x48af67) => {
        if (typeof _0x48af67 == "undefined") {
          _0x48af67 = _0x558e4d;
          _0x558e4d = 0x1b6;
        }
        _0x558e4d |= 0x2000;
        return _0x278315.mknod(_0x15dc57, _0x558e4d, _0x48af67);
      },
      "symlink": (_0xdc14f5, _0x8ab1b3) => {
        if (!_0x7c6eff.resolve(_0xdc14f5)) {
          throw new null(0x2c);
        }
        var _0xcd5c63 = _0x278315.lookupPath(_0x8ab1b3, {
          "parent": true
        });
        var _0x528fae = _0xcd5c63.node;
        if (!_0x528fae) {
          throw new null(0x2c);
        }
        var _0x14ef16 = _0x353c9a.basename(_0x8ab1b3);
        var _0x100bfe = _0x278315.mayCreate(_0x528fae, _0x14ef16);
        if (_0x100bfe) {
          throw new null(_0x100bfe);
        }
        if (!_0x528fae.node_ops.symlink) {
          throw new null(0x3f);
        }
        return _0x528fae.node_ops.symlink(_0x528fae, _0x14ef16, _0xdc14f5);
      },
      "rename": (_0x6979bf, _0x598577) => {
        var _0x5042a2 = _0x353c9a.dirname(_0x6979bf);
        var _0x865e69 = _0x353c9a.dirname(_0x598577);
        var _0x1488de = _0x353c9a.basename(_0x6979bf);
        var _0x199153 = _0x353c9a.basename(_0x598577);
        var _0x5d2e54;
        var _0x68e79f;
        var _0x421add;
        _0x5d2e54 = _0x278315.lookupPath(_0x6979bf, {
          "parent": true
        });
        _0x68e79f = _0x5d2e54.node;
        _0x5d2e54 = _0x278315.lookupPath(_0x598577, {
          "parent": true
        });
        _0x421add = _0x5d2e54.node;
        if (!_0x68e79f || !_0x421add) {
          throw new null(0x2c);
        }
        if (_0x68e79f.mount !== _0x421add.mount) {
          throw new null(0x4b);
        }
        var _0x56b43a = _0x278315.lookupNode(_0x68e79f, _0x1488de);
        var _0x5d5005 = _0x7c6eff.relative(_0x6979bf, _0x865e69);
        if (_0x5d5005.charAt(0x0) !== ".") {
          throw new null(0x1c);
        }
        _0x5d5005 = _0x7c6eff.relative(_0x598577, _0x5042a2);
        if (_0x5d5005.charAt(0x0) !== ".") {
          throw new null(0x37);
        }
        var _0xa750d;
        try {
          _0xa750d = _0x278315.lookupNode(_0x421add, _0x199153);
        } catch (_0x603a1) {}
        if (_0x56b43a === _0xa750d) {
          return;
        }
        var _0x310d10 = (_0x56b43a.mode & 0xf000) === 0x4000;
        var _0xc38c7e = _0x278315.mayDelete(_0x68e79f, _0x1488de, _0x310d10);
        if (_0xc38c7e) {
          throw new null(_0xc38c7e);
        }
        _0xc38c7e = _0xa750d ? _0x278315.mayDelete(_0x421add, _0x199153, _0x310d10) : _0x278315.mayCreate(_0x421add, _0x199153);
        if (_0xc38c7e) {
          throw new null(_0xc38c7e);
        }
        if (!_0x68e79f.node_ops.rename) {
          throw new null(0x3f);
        }
        if (!!_0x56b43a.mounted || _0xa750d && !!_0xa750d.mounted) {
          throw new null(0xa);
        }
        if (_0x421add !== _0x68e79f) {
          _0xc38c7e = _0x278315.nodePermissions(_0x68e79f, "w");
          if (_0xc38c7e) {
            throw new null(_0xc38c7e);
          }
        }
        _0x278315.hashRemoveNode(_0x56b43a);
        try {
          _0x68e79f.node_ops.rename(_0x56b43a, _0x421add, _0x199153);
        } catch (_0x2d8fdc) {
          throw _0x2d8fdc;
        } finally {
          _0x278315.hashAddNode(_0x56b43a);
        }
      },
      "rmdir": _0x1e9074 => {
        var _0x3249a9 = _0x278315.lookupPath(_0x1e9074, {
          "parent": true
        });
        var _0x30a495 = _0x3249a9.node;
        var _0x9cd452 = _0x353c9a.basename(_0x1e9074);
        var _0x3842bd = _0x278315.lookupNode(_0x30a495, _0x9cd452);
        var _0x50ed1a = _0x278315.mayDelete(_0x30a495, _0x9cd452, true);
        if (_0x50ed1a) {
          throw new null(_0x50ed1a);
        }
        if (!_0x30a495.node_ops.rmdir) {
          throw new null(0x3f);
        }
        if (!!_0x3842bd.mounted) {
          throw new null(0xa);
        }
        _0x30a495.node_ops.rmdir(_0x30a495, _0x9cd452);
        _0x278315.destroyNode(_0x3842bd);
      },
      "readdir": _0xd823c2 => {
        var _0x5f11ba = _0x278315.lookupPath(_0xd823c2, {
          "follow": true
        });
        var _0x408799 = _0x5f11ba.node;
        if (!_0x408799.node_ops.readdir) {
          throw new null(0x36);
        }
        return _0x408799.node_ops.readdir(_0x408799);
      },
      "unlink": _0x445a28 => {
        var _0x3bf94c = _0x278315.lookupPath(_0x445a28, {
          "parent": true
        });
        var _0x5adc05 = _0x3bf94c.node;
        if (!_0x5adc05) {
          throw new null(0x2c);
        }
        var _0x2da442 = _0x353c9a.basename(_0x445a28);
        var _0x32a923 = _0x278315.lookupNode(_0x5adc05, _0x2da442);
        var _0x179b5c = _0x278315.mayDelete(_0x5adc05, _0x2da442, false);
        if (_0x179b5c) {
          throw new null(_0x179b5c);
        }
        if (!_0x5adc05.node_ops.unlink) {
          throw new null(0x3f);
        }
        if (!!_0x32a923.mounted) {
          throw new null(0xa);
        }
        _0x5adc05.node_ops.unlink(_0x5adc05, _0x2da442);
        _0x278315.destroyNode(_0x32a923);
      },
      "readlink": _0x3a8a07 => {
        var _0x34ea7e = _0x278315.lookupPath(_0x3a8a07);
        var _0x2642c7 = _0x34ea7e.node;
        if (!_0x2642c7) {
          throw new null(0x2c);
        }
        if (!_0x2642c7.node_ops.readlink) {
          throw new null(0x1c);
        }
        return _0x7c6eff.resolve(_0x278315.getPath(_0x2642c7.parent), _0x2642c7.node_ops.readlink(_0x2642c7));
      },
      "stat": (_0x5943d7, _0x30f771) => {
        var _0x1a96e0 = _0x278315.lookupPath(_0x5943d7, {
          "follow": !_0x30f771
        });
        var _0x28793c = _0x1a96e0.node;
        if (!_0x28793c) {
          throw new null(0x2c);
        }
        if (!_0x28793c.node_ops.getattr) {
          throw new null(0x3f);
        }
        return _0x28793c.node_ops.getattr(_0x28793c);
      },
      "lstat": _0x27f8c7 => {
        return _0x278315.stat(_0x27f8c7, true);
      },
      "chmod": (_0x330683, _0x15083c, _0x2f63a7) => {
        var _0x2948fb;
        if (typeof _0x330683 == "string") {
          var _0x5e2036 = _0x278315.lookupPath(_0x330683, {
            "follow": !_0x2f63a7
          });
          _0x2948fb = _0x5e2036.node;
        } else {
          _0x2948fb = _0x330683;
        }
        if (!_0x2948fb.node_ops.setattr) {
          throw new null(0x3f);
        }
        _0x2948fb.node_ops.setattr(_0x2948fb, {
          "mode": _0x15083c & 0xfff | _0x2948fb.mode & -4096,
          "timestamp": Date.now()
        });
      },
      "lchmod": (_0x233a36, _0x107bd9) => {
        _0x278315.chmod(_0x233a36, _0x107bd9, true);
      },
      "fchmod": (_0x17e5dc, _0x1b9a2d) => {
        var _0x239d00 = _0x278315.streams[_0x17e5dc];
        if (!_0x239d00) {
          throw new null(0x8);
        }
        _0x278315.chmod(_0x239d00.node, _0x1b9a2d);
      },
      "chown": (_0x2906e1, _0x3489f4, _0x526494, _0x334451) => {
        var _0x5e3336;
        if (typeof _0x2906e1 == "string") {
          var _0x2f9d6a = _0x278315.lookupPath(_0x2906e1, {
            "follow": !_0x334451
          });
          _0x5e3336 = _0x2f9d6a.node;
        } else {
          _0x5e3336 = _0x2906e1;
        }
        if (!_0x5e3336.node_ops.setattr) {
          throw new null(0x3f);
        }
        _0x5e3336.node_ops.setattr(_0x5e3336, {
          "timestamp": Date.now()
        });
      },
      "lchown": (_0x5db2da, _0x48ef17, _0x84d647) => {
        _0x278315.chown(_0x5db2da, _0x48ef17, _0x84d647, true);
      },
      "fchown": (_0x5317e9, _0x58ef93, _0x516655) => {
        var _0x4f08c1 = _0x278315.streams[_0x5317e9];
        if (!_0x4f08c1) {
          throw new null(0x8);
        }
        _0x278315.chown(_0x4f08c1.node, _0x58ef93, _0x516655);
      },
      "truncate": (_0x5161ec, _0x3b927b) => {
        if (_0x3b927b < 0x0) {
          throw new null(0x1c);
        }
        var _0x390b72;
        if (typeof _0x5161ec == "string") {
          var _0x4de6ff = _0x278315.lookupPath(_0x5161ec, {
            "follow": true
          });
          _0x390b72 = _0x4de6ff.node;
        } else {
          _0x390b72 = _0x5161ec;
        }
        if (!_0x390b72.node_ops.setattr) {
          throw new null(0x3f);
        }
        if ((_0x390b72.mode & 0xf000) === 0x4000) {
          throw new null(0x1f);
        }
        if (!((_0x390b72.mode & 0xf000) === 0x8000)) {
          throw new null(0x1c);
        }
        var _0x25c01a = _0x278315.nodePermissions(_0x390b72, "w");
        if (_0x25c01a) {
          throw new null(_0x25c01a);
        }
        _0x390b72.node_ops.setattr(_0x390b72, {
          "size": _0x3b927b,
          "timestamp": Date.now()
        });
      },
      "ftruncate": (_0x31b475, _0x39704b) => {
        var _0x26e344 = _0x278315.streams[_0x31b475];
        if (!_0x26e344) {
          throw new null(0x8);
        }
        if ((_0x26e344.flags & 0x200003) === 0x0) {
          throw new null(0x1c);
        }
        _0x278315.truncate(_0x26e344.node, _0x39704b);
      },
      "utime": (_0x4e7242, _0x65fa13, _0x144a09) => {
        var _0x26a212 = _0x278315.lookupPath(_0x4e7242, {
          "follow": true
        });
        var _0x8950a3 = _0x26a212.node;
        _0x8950a3.node_ops.setattr(_0x8950a3, {
          "timestamp": Math.max(_0x65fa13, _0x144a09)
        });
      },
      "open": (_0x2127df, _0x312bd4, _0x3ce89f, _0x7aac99, _0x85a53e) => {
        if (_0x2127df === '') {
          throw new null(0x2c);
        }
        _0x312bd4 = typeof _0x312bd4 == "string" ? _0x278315.modeStringToFlags(_0x312bd4) : _0x312bd4;
        _0x3ce89f = typeof _0x3ce89f == "undefined" ? 0x1b6 : _0x3ce89f;
        if (_0x312bd4 & 0x40) {
          _0x3ce89f = _0x3ce89f & 0xfff | 0x8000;
        } else {
          _0x3ce89f = 0x0;
        }
        var _0x23bf6c;
        if (typeof _0x2127df == "object") {
          _0x23bf6c = _0x2127df;
        } else {
          _0x2127df = _0x353c9a.normalize(_0x2127df);
          try {
            var _0x1c68dd = _0x278315.lookupPath(_0x2127df, {
              "follow": !(_0x312bd4 & 0x20000)
            });
            _0x23bf6c = _0x1c68dd.node;
          } catch (_0x230345) {}
        }
        var _0x2a4c95 = false;
        if (_0x312bd4 & 0x40) {
          if (_0x23bf6c) {
            if (_0x312bd4 & 0x80) {
              throw new null(0x14);
            }
          } else {
            _0x23bf6c = _0x278315.mknod(_0x2127df, _0x3ce89f, 0x0);
            _0x2a4c95 = true;
          }
        }
        if (!_0x23bf6c) {
          throw new null(0x2c);
        }
        if ((_0x23bf6c.mode & 0xf000) === 0x2000) {
          _0x312bd4 &= -513;
        }
        if (_0x312bd4 & 0x10000 && !((_0x23bf6c.mode & 0xf000) === 0x4000)) {
          throw new null(0x36);
        }
        if (!_0x2a4c95) {
          var _0x16fbe7 = _0x278315.mayOpen(_0x23bf6c, _0x312bd4);
          if (_0x16fbe7) {
            throw new null(_0x16fbe7);
          }
        }
        if (_0x312bd4 & 0x200) {
          _0x278315.truncate(_0x23bf6c, 0x0);
        }
        _0x312bd4 &= -131713;
        var _0x2bde49 = _0x278315.createStream({
          "node": _0x23bf6c,
          "path": _0x278315.getPath(_0x23bf6c),
          "flags": _0x312bd4,
          "seekable": true,
          "position": 0x0,
          "stream_ops": _0x23bf6c.stream_ops,
          "ungotten": [],
          "error": false
        }, _0x7aac99, _0x85a53e);
        if (_0x2bde49.stream_ops.open) {
          _0x2bde49.stream_ops.open(_0x2bde49);
        }
        if (_0x4bcfe1.logReadFiles && !(_0x312bd4 & 0x1)) {
          if (!_0x278315.readFiles) {
            _0x278315.readFiles = {};
          }
          if (!(_0x2127df in _0x278315.readFiles)) {
            _0x278315.readFiles[_0x2127df] = 0x1;
          }
        }
        return _0x2bde49;
      },
      "close": _0x5731c5 => {
        if (_0x5731c5.fd === null) {
          throw new null(0x8);
        }
        if (_0x5731c5.getdents) {
          _0x5731c5.getdents = null;
        }
        try {
          if (_0x5731c5.stream_ops.close) {
            _0x5731c5.stream_ops.close(_0x5731c5);
          }
        } catch (_0x4384d3) {
          throw _0x4384d3;
        } finally {
          _0x278315.closeStream(_0x5731c5.fd);
        }
        _0x5731c5.fd = null;
      },
      "isClosed": _0xe32da => {
        return _0xe32da.fd === null;
      },
      "llseek": (_0x41b4c8, _0x213704, _0x415f1a) => {
        if (_0x41b4c8.fd === null) {
          throw new null(0x8);
        }
        if (!_0x41b4c8.seekable || !_0x41b4c8.stream_ops.llseek) {
          throw new null(0x46);
        }
        if (_0x415f1a != 0x0 && _0x415f1a != 0x1 && _0x415f1a != 0x2) {
          throw new null(0x1c);
        }
        _0x41b4c8.position = _0x41b4c8.stream_ops.llseek(_0x41b4c8, _0x213704, _0x415f1a);
        _0x41b4c8.ungotten = [];
        return _0x41b4c8.position;
      },
      "read": (_0x31c5fc, _0x5ae34f, _0x5ae412, _0x5a4bb2, _0x5799b6) => {
        if (_0x5a4bb2 < 0x0 || _0x5799b6 < 0x0) {
          throw new null(0x1c);
        }
        if (_0x31c5fc.fd === null) {
          throw new null(0x8);
        }
        if ((_0x31c5fc.flags & 0x200003) === 0x1) {
          throw new null(0x8);
        }
        if ((_0x31c5fc.node.mode & 0xf000) === 0x4000) {
          throw new null(0x1f);
        }
        if (!_0x31c5fc.stream_ops.read) {
          throw new null(0x1c);
        }
        var _0x5662ad = typeof _0x5799b6 != "undefined";
        if (!_0x5662ad) {
          _0x5799b6 = _0x31c5fc.position;
        } else {
          if (!_0x31c5fc.seekable) {
            throw new null(0x46);
          }
        }
        var _0x41c322 = _0x31c5fc.stream_ops.read(_0x31c5fc, _0x5ae34f, _0x5ae412, _0x5a4bb2, _0x5799b6);
        if (!_0x5662ad) {
          _0x31c5fc.position += _0x41c322;
        }
        return _0x41c322;
      },
      "write": (_0x2fded3, _0x52e4b5, _0x1a1b0e, _0x29612c, _0x1efcd7, _0x3f8fbd) => {
        if (_0x29612c < 0x0 || _0x1efcd7 < 0x0) {
          throw new null(0x1c);
        }
        if (_0x2fded3.fd === null) {
          throw new null(0x8);
        }
        if ((_0x2fded3.flags & 0x200003) === 0x0) {
          throw new null(0x8);
        }
        if ((_0x2fded3.node.mode & 0xf000) === 0x4000) {
          throw new null(0x1f);
        }
        if (!_0x2fded3.stream_ops.write) {
          throw new null(0x1c);
        }
        if (_0x2fded3.seekable && _0x2fded3.flags & 0x400) {
          _0x278315.llseek(_0x2fded3, 0x0, 0x2);
        }
        var _0x5999ea = typeof _0x1efcd7 != "undefined";
        if (!_0x5999ea) {
          _0x1efcd7 = _0x2fded3.position;
        } else {
          if (!_0x2fded3.seekable) {
            throw new null(0x46);
          }
        }
        var _0x29f00e = _0x2fded3.stream_ops.write(_0x2fded3, _0x52e4b5, _0x1a1b0e, _0x29612c, _0x1efcd7, _0x3f8fbd);
        if (!_0x5999ea) {
          _0x2fded3.position += _0x29f00e;
        }
        return _0x29f00e;
      },
      "allocate": (_0x1b2486, _0x171e3b, _0x9925d7) => {
        if (_0x1b2486.fd === null) {
          throw new null(0x8);
        }
        if (_0x171e3b < 0x0 || _0x9925d7 <= 0x0) {
          throw new null(0x1c);
        }
        if ((_0x1b2486.flags & 0x200003) === 0x0) {
          throw new null(0x8);
        }
        if (!((_0x1b2486.node.mode & 0xf000) === 0x8000) && !((_0x1b2486.node.mode & 0xf000) === 0x4000)) {
          throw new null(0x2b);
        }
        if (!_0x1b2486.stream_ops.allocate) {
          throw new null(0x8a);
        }
        _0x1b2486.stream_ops.allocate(_0x1b2486, _0x171e3b, _0x9925d7);
      },
      "mmap": (_0x25d5ec, _0x174b6d, _0x33b524, _0x5b0956, _0x59bd3f, _0x115c70) => {
        if ((_0x59bd3f & 0x2) !== 0x0 && (_0x115c70 & 0x2) === 0x0 && (_0x25d5ec.flags & 0x200003) !== 0x2) {
          throw new null(0x2);
        }
        if ((_0x25d5ec.flags & 0x200003) === 0x1) {
          throw new null(0x2);
        }
        if (!_0x25d5ec.stream_ops.mmap) {
          throw new null(0x2b);
        }
        return _0x25d5ec.stream_ops.mmap(_0x25d5ec, _0x174b6d, _0x33b524, _0x5b0956, _0x59bd3f, _0x115c70);
      },
      "msync": (_0x2f606e, _0x2f1022, _0xd33086, _0x31dbfb, _0x57dcb2) => {
        if (!_0x2f606e || !_0x2f606e.stream_ops.msync) {
          return 0x0;
        }
        return _0x2f606e.stream_ops.msync(_0x2f606e, _0x2f1022, _0xd33086, _0x31dbfb, _0x57dcb2);
      },
      "munmap": _0x1291a0 => 0x0,
      "ioctl": (_0x513319, _0x5f127f, _0x262b0d) => {
        if (!_0x513319.stream_ops.ioctl) {
          throw new null(0x3b);
        }
        return _0x513319.stream_ops.ioctl(_0x513319, _0x5f127f, _0x262b0d);
      },
      "readFile": (_0x30c489, _0x54612f = {}) => {
        _0x54612f.flags = _0x54612f.flags || 0x0;
        _0x54612f.encoding = _0x54612f.encoding || "binary";
        if (_0x54612f.encoding !== "utf8" && _0x54612f.encoding !== "binary") {
          throw new Error("Invalid encoding type \"" + _0x54612f.encoding + "\"");
        }
        var _0x391e67;
        var _0x3a3802 = _0x278315.open(_0x30c489, _0x54612f.flags);
        var _0x2a8425 = _0x278315.stat(_0x30c489);
        var _0x264ad2 = _0x2a8425.size;
        var _0x53933b = new Uint8Array(_0x264ad2);
        _0x278315.read(_0x3a3802, _0x53933b, 0x0, _0x264ad2, 0x0);
        if (_0x54612f.encoding === "utf8") {
          _0x391e67 = _0x344b4c(_0x53933b, 0x0);
        } else if (_0x54612f.encoding === "binary") {
          _0x391e67 = _0x53933b;
        }
        _0x278315.close(_0x3a3802);
        return _0x391e67;
      },
      "writeFile": (_0x336ebe, _0x4cb78b, _0x1baaf4 = {}) => {
        _0x1baaf4.flags = _0x1baaf4.flags || 0x241;
        var _0x5b3adf = _0x278315.open(_0x336ebe, _0x1baaf4.flags, _0x1baaf4.mode);
        if (typeof _0x4cb78b == "string") {
          var _0x2437a8 = new Uint8Array(_0x4d063a(_0x4cb78b) + 0x1);
          var _0x7bc888 = _0x2f86f3(_0x4cb78b, _0x2437a8, 0x0, _0x2437a8.length);
          _0x278315.write(_0x5b3adf, _0x2437a8, 0x0, _0x7bc888, undefined, _0x1baaf4.canOwn);
        } else {
          if (ArrayBuffer.isView(_0x4cb78b)) {
            _0x278315.write(_0x5b3adf, _0x4cb78b, 0x0, _0x4cb78b.byteLength, undefined, _0x1baaf4.canOwn);
          } else {
            throw new Error("Unsupported data type");
          }
        }
        _0x278315.close(_0x5b3adf);
      },
      "cwd": () => "/",
      "chdir": _0x5c5995 => {
        var _0x47fe3e = _0x278315.lookupPath(_0x5c5995, {
          "follow": true
        });
        if (_0x47fe3e.node === null) {
          throw new null(0x2c);
        }
        if (!((_0x47fe3e.node.mode & 0xf000) === 0x4000)) {
          throw new null(0x36);
        }
        var _0x4c931a = _0x278315.nodePermissions(_0x47fe3e.node, "x");
        if (_0x4c931a) {
          throw new null(_0x4c931a);
        }
        _0x278315.currentPath = _0x47fe3e.path;
      },
      "createDefaultDirectories": () => {
        _0x278315.mkdir("/tmp");
        _0x278315.mkdir("/home");
        _0x278315.mkdir("/home/web_user");
      },
      "createDefaultDevices": () => {
        _0x278315.mkdir("/dev");
        _0x278315.registerDevice(259, {
          "read": () => 0x0,
          "write": (_0x286c05, _0x248636, _0x52b5fe, _0x1b571d, _0x112845) => _0x1b571d
        });
        _0x278315.mkdev("/dev/null", 259);
        _0x4f6acc.register(1280, _0x4f6acc.default_tty_ops);
        _0x4f6acc.register(1536, _0x4f6acc.default_tty1_ops);
        _0x278315.mkdev("/dev/tty", 1280);
        _0x278315.mkdev("/dev/tty1", 1536);
        var _0x38b536 = _0xe6f731();
        _0x278315.createDevice("/dev", "random", _0x38b536);
        _0x278315.createDevice("/dev", "urandom", _0x38b536);
        _0x278315.mkdir("/dev/shm");
        _0x278315.mkdir("/dev/shm/tmp");
      },
      "createSpecialDirectories": () => {
        _0x278315.mkdir("/proc");
        var _0x1a3fc4 = _0x278315.mkdir("/proc/self");
        _0x278315.mkdir("/proc/self/fd");
        _0x278315.mount({
          "mount": () => {
            var _0x510fa4 = _0x278315.createNode(_0x1a3fc4, "fd", 16895, 0x49);
            _0x510fa4.node_ops = {
              "lookup": (_0x21810f, _0x3fa261) => {
                var _0x1b8371 = +_0x3fa261;
                var _0x15b5ce = _0x278315.streams[_0x1b8371];
                if (!_0x15b5ce) {
                  throw new null(0x8);
                }
                var _0x5699ac = {
                  "parent": null,
                  "mount": {
                    "mountpoint": "fake"
                  },
                  "node_ops": {
                    "readlink": () => _0x15b5ce.path
                  }
                };
                _0x5699ac.parent = _0x5699ac;
                return _0x5699ac;
              }
            };
            return _0x510fa4;
          }
        }, {}, "/proc/self/fd");
      },
      "createStandardStreams": () => {
        if (_0x4bcfe1.stdin) {
          _0x278315.createDevice("/dev", "stdin", _0x4bcfe1.stdin);
        } else {
          _0x278315.symlink("/dev/tty", "/dev/stdin");
        }
        if (_0x4bcfe1.stdout) {
          _0x278315.createDevice("/dev", "stdout", null, _0x4bcfe1.stdout);
        } else {
          _0x278315.symlink("/dev/tty", "/dev/stdout");
        }
        if (_0x4bcfe1.stderr) {
          _0x278315.createDevice("/dev", "stderr", null, _0x4bcfe1.stderr);
        } else {
          _0x278315.symlink("/dev/tty1", "/dev/stderr");
        }
      },
      "ensureErrnoError": () => {
        return;
        _0x278315.ErrnoError = function _0x487642(_0x20b99f, _0x40439b) {
          this.node = _0x40439b;
          this.setErrno = function (_0x32a333) {
            this.errno = _0x32a333;
          };
          this.setErrno(_0x20b99f);
          this.message = "FS error";
        };
        null.prototype = new Error();
        null.prototype.constructor = null;
        [0x2c].forEach(_0x378764 => {
          _0x278315.genericErrors[_0x378764] = new null(_0x378764);
          _0x278315.genericErrors[_0x378764].stack = "<generic error, no stack>";
        });
      },
      "staticInit": () => {
        _0x278315.ensureErrnoError();
        _0x278315.nameTable = new Array(0x1000);
        _0x278315.mount(_0x187d72, {}, "/");
        _0x278315.createDefaultDirectories();
        _0x278315.createDefaultDevices();
        _0x278315.createSpecialDirectories();
        _0x278315.filesystems = {
          "MEMFS": _0x187d72,
          "IDBFS": _0x3eb30b
        };
      },
      "init": (_0x3dd63e, _0xfde82, _0x8f6e4) => {
        _0x278315.init.initialized = true;
        _0x278315.ensureErrnoError();
        _0x4bcfe1.stdin = _0x3dd63e || _0x4bcfe1.stdin;
        _0x4bcfe1.stdout = _0xfde82 || _0x4bcfe1.stdout;
        _0x4bcfe1.stderr = _0x8f6e4 || _0x4bcfe1.stderr;
        _0x278315.createStandardStreams();
      },
      "quit": () => {
        _0x278315.init.initialized = false;
        for (var _0x29e461 = 0x0; _0x29e461 < _0x278315.streams.length; _0x29e461++) {
          var _0x3e878f = _0x278315.streams[_0x29e461];
          if (!_0x3e878f) {
            continue;
          }
          _0x278315.close(_0x3e878f);
        }
      },
      "getMode": (_0x62eb3d, _0x5368d1) => {
        var _0x58dd84 = 0x0;
        if (_0x62eb3d) {
          _0x58dd84 |= 365;
        }
        if (_0x5368d1) {
          _0x58dd84 |= 0x92;
        }
        return _0x58dd84;
      },
      "findObject": (_0x42747c, _0x5d0c50) => {
        var _0xe0f7ba = _0x278315.analyzePath(_0x42747c, _0x5d0c50);
        return _0xe0f7ba.exists ? _0xe0f7ba.object : null;
      },
      "analyzePath": (_0x47324a, _0x3c5d4f) => {
        try {
          var _0x3ec250 = _0x278315.lookupPath(_0x47324a, {
            "follow": !_0x3c5d4f
          });
          _0x47324a = _0x3ec250.path;
        } catch (_0x3199f) {}
        var _0x5dc587 = {
          "isRoot": false,
          "exists": false,
          "error": 0x0,
          "name": null,
          "path": null,
          "object": null,
          "parentExists": false,
          "parentPath": null,
          "parentObject": null
        };
        try {
          var _0x3ec250 = _0x278315.lookupPath(_0x47324a, {
            "parent": true
          });
          _0x5dc587.parentExists = true;
          _0x5dc587.parentPath = _0x3ec250.path;
          _0x5dc587.parentObject = _0x3ec250.node;
          _0x5dc587.name = _0x353c9a.basename(_0x47324a);
          _0x3ec250 = _0x278315.lookupPath(_0x47324a, {
            "follow": !_0x3c5d4f
          });
          _0x5dc587.exists = true;
          _0x5dc587.path = _0x3ec250.path;
          _0x5dc587.object = _0x3ec250.node;
          _0x5dc587.name = _0x3ec250.node.name;
          _0x5dc587.isRoot = _0x3ec250.path === "/";
        } catch (_0x25d571) {
          _0x5dc587.error = _0x25d571.errno;
        }
        return _0x5dc587;
      },
      "createPath": (_0x3b2ff6, _0x1b96df, _0x4da181, _0x9bf5c) => {
        _0x3b2ff6 = typeof _0x3b2ff6 == "string" ? _0x3b2ff6 : _0x278315.getPath(_0x3b2ff6);
        var _0x4b9386 = _0x1b96df.split("/").reverse();
        while (_0x4b9386.length) {
          var _0x117de4 = _0x4b9386.pop();
          if (!_0x117de4) {
            continue;
          }
          var _0x3b231a = _0x353c9a.normalize(_0x3b2ff6 + "/" + _0x117de4);
          try {
            _0x278315.mkdir(_0x3b231a);
          } catch (_0x20d1d9) {}
          _0x3b2ff6 = _0x3b231a;
        }
        return _0x3b231a;
      },
      "createFile": (_0x20871d, _0x44e180, _0x1246b0, _0x2bc879, _0x3e03e1) => {
        var _0x45f178 = _0x353c9a.normalize((typeof _0x20871d == "string" ? _0x20871d : _0x278315.getPath(_0x20871d)) + "/" + _0x44e180);
        var _0x3200cf = _0x278315.getMode(_0x2bc879, _0x3e03e1);
        return _0x278315.create(_0x45f178, _0x3200cf);
      },
      "createDataFile": (_0x25750a, _0x2390c6, _0x1fd75a, _0x352509, _0x721f1b, _0x48a049) => {
        var _0x487ef4 = _0x2390c6;
        if (_0x25750a) {
          _0x25750a = typeof _0x25750a == "string" ? _0x25750a : _0x278315.getPath(_0x25750a);
          _0x487ef4 = _0x2390c6 ? _0x353c9a.normalize(_0x25750a + "/" + _0x2390c6) : _0x25750a;
        }
        var _0x1d16bd = _0x278315.getMode(_0x352509, _0x721f1b);
        var _0x1bd00a = _0x278315.create(_0x487ef4, _0x1d16bd);
        if (_0x1fd75a) {
          if (typeof _0x1fd75a == "string") {
            var _0x204291 = new Array(_0x1fd75a.length);
            var _0x4003c8 = 0x0;
            for (var _0x112187 = _0x1fd75a.length; _0x4003c8 < _0x112187; ++_0x4003c8) {
              _0x204291[_0x4003c8] = _0x1fd75a.charCodeAt(_0x4003c8);
            }
            _0x1fd75a = _0x204291;
          }
          _0x278315.chmod(_0x1bd00a, _0x1d16bd | 0x92);
          var _0x496f2b = _0x278315.open(_0x1bd00a, 0x241);
          _0x278315.write(_0x496f2b, _0x1fd75a, 0x0, _0x1fd75a.length, 0x0, _0x48a049);
          _0x278315.close(_0x496f2b);
          _0x278315.chmod(_0x1bd00a, _0x1d16bd);
        }
        return _0x1bd00a;
      },
      "createDevice": (_0x22ce3d, _0x445fba, _0x1a3456, _0xac8439) => {
        var _0x2ff0aa = _0x353c9a.normalize((typeof _0x22ce3d == "string" ? _0x22ce3d : _0x278315.getPath(_0x22ce3d)) + "/" + _0x445fba);
        var _0x5efb7e = _0x278315.getMode(!!_0x1a3456, !!_0xac8439);
        if (!_0x278315.createDevice.major) {
          _0x278315.createDevice.major = 0x40;
        }
        var _0x3272bb = _0x278315.createDevice.major++ << 0x8 | 0x0;
        _0x278315.registerDevice(_0x3272bb, {
          "open": _0x4e9864 => {
            _0x4e9864.seekable = false;
          },
          "close": _0x2bb213 => {
            if (_0xac8439 && _0xac8439.buffer && _0xac8439.buffer.length) {
              _0xac8439(0xa);
            }
          },
          "read": (_0xe99b9, _0x2ba374, _0x408f1f, _0x39ba57, _0x2fb224) => {
            var _0xf21cdb = 0x0;
            for (var _0x4dbd9d = 0x0; _0x4dbd9d < _0x39ba57; _0x4dbd9d++) {
              var _0x4b1af8;
              try {
                _0x4b1af8 = _0x1a3456();
              } catch (_0x1ba6ef) {
                throw new null(0x1d);
              }
              if (_0x4b1af8 === undefined && _0xf21cdb === 0x0) {
                throw new null(0x6);
              }
              if (_0x4b1af8 === null || _0x4b1af8 === undefined) {
                break;
              }
              _0xf21cdb++;
              _0x2ba374[_0x408f1f + _0x4dbd9d] = _0x4b1af8;
            }
            if (_0xf21cdb) {
              _0xe99b9.node.timestamp = Date.now();
            }
            return _0xf21cdb;
          },
          "write": (_0x475468, _0xbc69fe, _0x2a6d30, _0x367892, _0x394321) => {
            for (var _0x2ac973 = 0x0; _0x2ac973 < _0x367892; _0x2ac973++) {
              try {
                _0xac8439(_0xbc69fe[_0x2a6d30 + _0x2ac973]);
              } catch (_0x4e85cb) {
                throw new null(0x1d);
              }
            }
            if (_0x367892) {
              _0x475468.node.timestamp = Date.now();
            }
            return _0x2ac973;
          }
        });
        return _0x278315.mkdev(_0x2ff0aa, _0x5efb7e, _0x3272bb);
      },
      "forceLoadFile": _0x1aef33 => {
        if (_0x1aef33.isDevice || _0x1aef33.isFolder || _0x1aef33.link || _0x1aef33.contents) {
          return true;
        }
        if (typeof XMLHttpRequest != "undefined") {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else {
          if (_0x44d954) {
            try {
              _0x1aef33.contents = _0x3b0517(_0x44d954(_0x1aef33.url), true);
              _0x1aef33.usedBytes = _0x1aef33.contents.length;
            } catch (_0x4db698) {
              throw new null(0x1d);
            }
          } else {
            throw new Error("Cannot load without read() or XMLHttpRequest.");
          }
        }
      },
      "createLazyFile": (_0x232e0, _0x202fad, _0x1531d5, _0x1cae1f, _0xe19b31) => {
        function _0x11a23c() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        _0x11a23c.prototype.get = function _0x27dc60(_0x24478b) {
          if (_0x24478b > this.length - 0x1 || _0x24478b < 0x0) {
            return undefined;
          }
          var _0x23d335 = _0x24478b % this.chunkSize;
          var _0x4ae567 = _0x24478b / this.chunkSize | 0x0;
          return this.getter(_0x4ae567)[_0x23d335];
        };
        _0x11a23c.prototype.setDataGetter = function _0x4bddb8(_0x4e50bb) {
          this.getter = _0x4e50bb;
        };
        _0x11a23c.prototype.cacheLength = function _0x307712() {
          var _0x5d0bac = new XMLHttpRequest();
          _0x5d0bac.open("HEAD", _0x1531d5, false);
          _0x5d0bac.send(null);
          if (!(_0x5d0bac.status >= 0xc8 && _0x5d0bac.status < 0x12c || _0x5d0bac.status === 0x130)) {
            throw new Error("Couldn't load " + _0x1531d5 + ". Status: " + _0x5d0bac.status);
          }
          var _0x213142 = Number(_0x5d0bac.getResponseHeader("Content-length"));
          var _0xb45b0a;
          var _0x2921e9 = (_0xb45b0a = _0x5d0bac.getResponseHeader("Accept-Ranges")) && _0xb45b0a === "bytes";
          var _0x1b588e = (_0xb45b0a = _0x5d0bac.getResponseHeader("Content-Encoding")) && _0xb45b0a === "gzip";
          var _0x2cb0d7 = 1048576;
          if (!_0x2921e9) {
            _0x2cb0d7 = _0x213142;
          }
          var _0x41e28d = (_0xf7dac8, _0x4659e2) => {
            if (_0xf7dac8 > _0x4659e2) {
              throw new Error("invalid range (" + _0xf7dac8 + ", " + _0x4659e2 + ") or no bytes requested!");
            }
            if (_0x4659e2 > _0x213142 - 0x1) {
              throw new Error("only " + _0x213142 + " bytes available! programmer error!");
            }
            var _0x12f716 = new XMLHttpRequest();
            _0x12f716.open("GET", _0x1531d5, false);
            if (_0x213142 !== _0x2cb0d7) {
              _0x12f716.setRequestHeader("Range", "bytes=" + _0xf7dac8 + "-" + _0x4659e2);
            }
            _0x12f716.responseType = "arraybuffer";
            if (_0x12f716.overrideMimeType) {
              _0x12f716.overrideMimeType("text/plain; charset=x-user-defined");
            }
            _0x12f716.send(null);
            if (!(_0x12f716.status >= 0xc8 && _0x12f716.status < 0x12c || _0x12f716.status === 0x130)) {
              throw new Error("Couldn't load " + _0x1531d5 + ". Status: " + _0x12f716.status);
            }
            return _0x12f716.response !== undefined ? new Uint8Array(_0x12f716.response || []) : _0x3b0517(_0x12f716.responseText || '', true);
          };
          var _0x20d465 = this;
          _0x20d465.setDataGetter(_0x16b569 => {
            var _0x2b1aec = _0x16b569 * _0x2cb0d7;
            var _0x167250 = (_0x16b569 + 0x1) * _0x2cb0d7 - 0x1;
            _0x167250 = Math.min(_0x167250, _0x213142 - 0x1);
            if (typeof _0x20d465.chunks[_0x16b569] == "undefined") {
              _0x20d465.chunks[_0x16b569] = _0x41e28d(_0x2b1aec, _0x167250);
            }
            if (typeof _0x20d465.chunks[_0x16b569] == "undefined") {
              throw new Error("doXHR failed!");
            }
            return _0x20d465.chunks[_0x16b569];
          });
          if (_0x1b588e || !_0x213142) {
            _0x2cb0d7 = _0x213142 = 0x1;
            _0x213142 = this.getter(0x0).length;
            _0x2cb0d7 = _0x213142;
            _0x3402e6("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = _0x213142;
          this._chunkSize = _0x2cb0d7;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != "undefined") {
          if (!_0x132c1d) {
            throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
          }
          var _0x5d2bb4 = new _0x11a23c();
          Object.defineProperties(_0x5d2bb4, {
            "length": {
              "get": function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            "chunkSize": {
              "get": function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
          var _0x5d09da = {
            "isDevice": false,
            "contents": _0x5d2bb4
          };
        } else {
          var _0x5d09da = {
            "isDevice": false,
            "url": _0x1531d5
          };
        }
        var _0x5a4a6e = _0x278315.createFile(_0x232e0, _0x202fad, _0x5d09da, _0x1cae1f, _0xe19b31);
        if (_0x5d09da.contents) {
          _0x5a4a6e.contents = _0x5d09da.contents;
        } else if (_0x5d09da.url) {
          _0x5a4a6e.contents = null;
          _0x5a4a6e.url = _0x5d09da.url;
        }
        Object.defineProperties(_0x5a4a6e, {
          "usedBytes": {
            "get": function () {
              return this.contents.length;
            }
          }
        });
        var _0x4daa66 = {};
        var _0x2420e1 = Object.keys(_0x5a4a6e.stream_ops);
        _0x2420e1.forEach(_0x5e6923 => {
          var _0x56a632 = _0x5a4a6e.stream_ops[_0x5e6923];
          _0x4daa66[_0x5e6923] = function _0x30b958() {
            _0x278315.forceLoadFile(_0x5a4a6e);
            return _0x56a632.apply(null, arguments);
          };
        });
        _0x4daa66.read = (_0xa1805d, _0x22e636, _0x1d9317, _0x434fad, _0x1b6742) => {
          _0x278315.forceLoadFile(_0x5a4a6e);
          var _0x2ffabc = _0xa1805d.node.contents;
          if (_0x1b6742 >= _0x2ffabc.length) {
            return 0x0;
          }
          var _0x534658 = Math.min(_0x2ffabc.length - _0x1b6742, _0x434fad);
          if (_0x2ffabc.slice) {
            for (var _0x249a2f = 0x0; _0x249a2f < _0x534658; _0x249a2f++) {
              _0x22e636[_0x1d9317 + _0x249a2f] = _0x2ffabc[_0x1b6742 + _0x249a2f];
            }
          } else {
            for (var _0x249a2f = 0x0; _0x249a2f < _0x534658; _0x249a2f++) {
              _0x22e636[_0x1d9317 + _0x249a2f] = _0x2ffabc.get(_0x1b6742 + _0x249a2f);
            }
          }
          return _0x534658;
        };
        _0x5a4a6e.stream_ops = _0x4daa66;
        return _0x5a4a6e;
      },
      "createPreloadedFile": (_0x2ca9d4, _0x3edc79, _0x4038a5, _0x1988f6, _0x401930, _0xeb3458, _0x4918e5, _0x3b27a4, _0x44d5d7, _0x36b7cf) => {
        var _0x2553ef = _0x3edc79 ? _0x7c6eff.resolve(_0x353c9a.normalize(_0x2ca9d4 + "/" + _0x3edc79)) : _0x2ca9d4;
        function _0x3d55d3(_0x3a6769) {
          function _0x4bd1b9(_0x2452d7) {
            if (_0x36b7cf) {
              _0x36b7cf();
            }
            if (!_0x3b27a4) {
              _0x278315.createDataFile(_0x2ca9d4, _0x3edc79, _0x2452d7, _0x1988f6, _0x401930, _0x44d5d7);
            }
            if (_0xeb3458) {
              _0xeb3458();
            }
            _0x3b7ae4(_0x5928b2);
          }
          if (_0x20045a.handledByPreloadPlugin(_0x3a6769, _0x2553ef, _0x4bd1b9, () => {
            if (_0x4918e5) {
              _0x4918e5();
            }
            _0x3b7ae4(_0x5928b2);
          })) {
            return;
          }
          _0x4bd1b9(_0x3a6769);
        }
        _0x441879(_0x5928b2);
        if (typeof _0x4038a5 == "string") {
          _0x466e8b(_0x4038a5, _0x20ac39 => _0x3d55d3(_0x20ac39), _0x4918e5);
        } else {
          _0x3d55d3(_0x4038a5);
        }
      },
      "indexedDB": () => {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      "DB_NAME": () => {
        return "EM_FS_" + window.location.pathname;
      },
      "DB_VERSION": 0x14,
      "DB_STORE_NAME": "FILE_DATA",
      "saveFilesToDB": (_0x4909dd, _0x35d7af, _0x244f39) => {
        _0x35d7af = _0x35d7af || (() => {});
        _0x244f39 = _0x244f39 || (() => {});
        var _0x4a3de5 = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        try {
          var _0x52c6c3 = _0x4a3de5.open("EM_FS_" + window.location.pathname, 0x14);
        } catch (_0xdccaaf) {
          return _0x244f39(_0xdccaaf);
        }
        _0x52c6c3.onupgradeneeded = () => {
          _0x3402e6("creating db");
          var _0x55939a = _0x52c6c3.result;
          _0x55939a.createObjectStore("FILE_DATA");
        };
        _0x52c6c3.onsuccess = () => {
          var _0x8afece = _0x52c6c3.result;
          var _0x50715b = _0x8afece.transaction(["FILE_DATA"], "readwrite");
          var _0x3d3bbe = _0x50715b.objectStore("FILE_DATA");
          var _0x26064d = 0x0;
          var _0x11a54d = 0x0;
          var _0x247016 = _0x4909dd.length;
          function _0x2df47b() {
            if (_0x11a54d == 0x0) {
              _0x35d7af();
            } else {
              _0x244f39();
            }
          }
          _0x4909dd.forEach(_0x44c2ba => {
            var _0x52da01 = _0x3d3bbe.put(_0x278315.analyzePath(_0x44c2ba).object.contents, _0x44c2ba);
            _0x52da01.onsuccess = () => {
              _0x26064d++;
              if (_0x26064d + _0x11a54d == _0x247016) {
                _0x2df47b();
              }
            };
            _0x52da01.onerror = () => {
              _0x11a54d++;
              if (_0x26064d + _0x11a54d == _0x247016) {
                _0x2df47b();
              }
            };
          });
          _0x50715b.onerror = _0x244f39;
        };
        _0x52c6c3.onerror = _0x244f39;
      },
      "loadFilesFromDB": (_0x2a8208, _0x2427ce, _0x4c5bda) => {
        _0x2427ce = _0x2427ce || (() => {});
        _0x4c5bda = _0x4c5bda || (() => {});
        var _0x1aabdf = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        try {
          var _0x3690f8 = _0x1aabdf.open("EM_FS_" + window.location.pathname, 0x14);
        } catch (_0x470039) {
          return _0x4c5bda(_0x470039);
        }
        _0x3690f8.onupgradeneeded = _0x4c5bda;
        _0x3690f8.onsuccess = () => {
          var _0x1763a6 = _0x3690f8.result;
          try {
            var _0x1b125a = _0x1763a6.transaction(["FILE_DATA"], "readonly");
          } catch (_0x75ce2d) {
            _0x4c5bda(_0x75ce2d);
            return;
          }
          var _0x59a561 = _0x1b125a.objectStore("FILE_DATA");
          var _0x29f8cf = 0x0;
          var _0x4330a6 = 0x0;
          var _0x83f5af = _0x2a8208.length;
          function _0x5435ce() {
            if (_0x4330a6 == 0x0) {
              _0x2427ce();
            } else {
              _0x4c5bda();
            }
          }
          _0x2a8208.forEach(_0x8e1712 => {
            var _0x2727e4 = _0x59a561.get(_0x8e1712);
            _0x2727e4.onsuccess = () => {
              if (_0x278315.analyzePath(_0x8e1712).exists) {
                _0x278315.unlink(_0x8e1712);
              }
              _0x278315.createDataFile(_0x353c9a.dirname(_0x8e1712), _0x353c9a.basename(_0x8e1712), _0x2727e4.result, true, true, true);
              _0x29f8cf++;
              if (_0x29f8cf + _0x4330a6 == _0x83f5af) {
                _0x5435ce();
              }
            };
            _0x2727e4.onerror = () => {
              _0x4330a6++;
              if (_0x29f8cf + _0x4330a6 == _0x83f5af) {
                _0x5435ce();
              }
            };
          });
          _0x1b125a.onerror = _0x4c5bda;
        };
        _0x3690f8.onerror = _0x4c5bda;
      }
    };
    var _0x3c26cf = {
      "DEFAULT_POLLMASK": 0x5,
      "calculateAt": function (_0x2002d6, _0x982470, _0x3632a5) {
        if (_0x982470[0x0] === "/") {
          return _0x982470;
        }
        var _0x34c49c;
        if (_0x2002d6 === -0x64) {
          _0x34c49c = "/";
        } else {
          var _0x2f483d = _0x278315.streams[_0x2002d6];
          if (!_0x2f483d) {
            throw new null(0x8);
          }
          _0x34c49c = _0x2f483d.path;
        }
        if (_0x982470.length == 0x0) {
          if (!_0x3632a5) {
            throw new null(0x2c);
          }
          return _0x34c49c;
        }
        return _0x353c9a.normalize(_0x34c49c + "/" + _0x982470);
      },
      "doStat": function (_0x2abe5a, _0x4cd2e1, _0xe778b7) {
        try {
          var _0x29b730 = _0x2abe5a(_0x4cd2e1);
        } catch (_0x446607) {
          if (_0x446607 && _0x446607.node && _0x353c9a.normalize(_0x4cd2e1) !== _0x353c9a.normalize(_0x278315.getPath(_0x446607.node))) {
            return -0x36;
          }
          throw _0x446607;
        }
        _0x46c9cf[_0xe778b7 >> 0x2] = _0x29b730.dev;
        _0x46c9cf[_0xe778b7 + 0x4 >> 0x2] = 0x0;
        _0x46c9cf[_0xe778b7 + 0x8 >> 0x2] = _0x29b730.ino;
        _0x46c9cf[_0xe778b7 + 0xc >> 0x2] = _0x29b730.mode;
        _0x46c9cf[_0xe778b7 + 0x10 >> 0x2] = _0x29b730.nlink;
        _0x46c9cf[_0xe778b7 + 0x14 >> 0x2] = _0x29b730.uid;
        _0x46c9cf[_0xe778b7 + 0x18 >> 0x2] = _0x29b730.gid;
        _0x46c9cf[_0xe778b7 + 0x1c >> 0x2] = _0x29b730.rdev;
        _0x46c9cf[_0xe778b7 + 0x20 >> 0x2] = 0x0;
        _0x12ce7f = _0x29b730.size;
        _0x3c0e3f = [_0x29b730.size >>> 0x0, +Math.abs(_0x12ce7f) >= 0x1 ? _0x12ce7f > 0x0 ? (Math.min(+Math.floor(_0x12ce7f / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math.ceil((_0x12ce7f - +(~~_0x12ce7f >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0];
        _0x46c9cf[_0xe778b7 + 0x28 >> 0x2] = _0x3c0e3f[0x0];
        _0x46c9cf[_0xe778b7 + 0x2c >> 0x2] = _0x3c0e3f[0x1];
        _0x46c9cf[_0xe778b7 + 0x30 >> 0x2] = 0x1000;
        _0x46c9cf[_0xe778b7 + 0x34 >> 0x2] = _0x29b730.blocks;
        _0x46c9cf[_0xe778b7 + 0x38 >> 0x2] = _0x29b730.atime.getTime() / 0x3e8 | 0x0;
        _0x46c9cf[_0xe778b7 + 0x3c >> 0x2] = 0x0;
        _0x46c9cf[_0xe778b7 + 0x40 >> 0x2] = _0x29b730.mtime.getTime() / 0x3e8 | 0x0;
        _0x46c9cf[_0xe778b7 + 0x44 >> 0x2] = 0x0;
        _0x46c9cf[_0xe778b7 + 0x48 >> 0x2] = _0x29b730.ctime.getTime() / 0x3e8 | 0x0;
        _0x46c9cf[_0xe778b7 + 0x4c >> 0x2] = 0x0;
        _0x12ce7f = _0x29b730.ino;
        _0x3c0e3f = [_0x29b730.ino >>> 0x0, +Math.abs(_0x12ce7f) >= 0x1 ? _0x12ce7f > 0x0 ? (Math.min(+Math.floor(_0x12ce7f / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math.ceil((_0x12ce7f - +(~~_0x12ce7f >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0];
        _0x46c9cf[_0xe778b7 + 0x50 >> 0x2] = _0x3c0e3f[0x0];
        _0x46c9cf[_0xe778b7 + 0x54 >> 0x2] = _0x3c0e3f[0x1];
        return 0x0;
      },
      "doMsync": function (_0x493d55, _0x4d649f, _0x4d0376, _0x1fe0bc, _0x2f96a9) {
        var _0x51b354 = _0x18c91b.slice(_0x493d55, _0x493d55 + _0x4d0376);
        _0x278315.msync(_0x4d649f, _0x51b354, _0x2f96a9, _0x4d0376, _0x1fe0bc);
      },
      "doMkdir": function (_0x512539, _0x41b15d) {
        _0x512539 = _0x353c9a.normalize(_0x512539);
        if (_0x512539[_0x512539.length - 0x1] === "/") {
          _0x512539 = _0x512539.substr(0x0, _0x512539.length - 0x1);
        }
        _0x278315.mkdir(_0x512539, _0x41b15d, 0x0);
        return 0x0;
      },
      "doMknod": function (_0x3095d4, _0x3ccb85, _0x10c2f7) {
        switch (_0x3ccb85 & 0xf000) {
          case 0x8000:
          case 0x2000:
          case 0x6000:
          case 0x1000:
          case 0xc000:
            break;
          default:
            return -0x1c;
        }
        _0x278315.mknod(_0x3095d4, _0x3ccb85, _0x10c2f7);
        return 0x0;
      },
      "doReadlink": function (_0x16b2e4, _0x495166, _0x11131c) {
        if (_0x11131c <= 0x0) {
          return -0x1c;
        }
        var _0x190e71 = _0x278315.readlink(_0x16b2e4);
        var _0x3c0d22 = Math.min(_0x11131c, _0x4d063a(_0x190e71));
        var _0x26a9fd = _0x59ed12[_0x495166 + _0x3c0d22];
        _0x2f86f3(_0x190e71, _0x18c91b, _0x495166, _0x11131c + 0x1);
        _0x59ed12[_0x495166 + _0x3c0d22] = _0x26a9fd;
        return _0x3c0d22;
      },
      "doAccess": function (_0x578626, _0x36d3d6) {
        if (_0x36d3d6 & -8) {
          return -0x1c;
        }
        var _0x43627c = _0x278315.lookupPath(_0x578626, {
          "follow": true
        });
        var _0x37b0d1 = _0x43627c.node;
        if (!_0x37b0d1) {
          return -0x2c;
        }
        var _0x3d5a58 = '';
        if (_0x36d3d6 & 0x4) {
          _0x3d5a58 += "r";
        }
        if (_0x36d3d6 & 0x2) {
          _0x3d5a58 += "w";
        }
        if (_0x36d3d6 & 0x1) {
          _0x3d5a58 += "x";
        }
        if (_0x3d5a58 && _0x278315.nodePermissions(_0x37b0d1, _0x3d5a58)) {
          return -0x2;
        }
        return 0x0;
      },
      "doReadv": function (_0xbe4466, _0x5ad2af, _0x328b8b, _0x44df96) {
        var _0x32d04a = 0x0;
        for (var _0x2faf00 = 0x0; _0x2faf00 < _0x328b8b; _0x2faf00++) {
          var _0x57147e = _0x46c9cf[_0x5ad2af + _0x2faf00 * 0x8 >> 0x2];
          var _0x346bcd = _0x46c9cf[_0x5ad2af + (_0x2faf00 * 0x8 + 0x4) >> 0x2];
          var _0x3d0827 = _0x278315.read(_0xbe4466, _0x59ed12, _0x57147e, _0x346bcd, _0x44df96);
          if (_0x3d0827 < 0x0) {
            return -0x1;
          }
          _0x32d04a += _0x3d0827;
          if (_0x3d0827 < _0x346bcd) {
            break;
          }
        }
        return _0x32d04a;
      },
      "doWritev": function (_0x266a2d, _0x8ebbe0, _0x476b57, _0x49a2e5) {
        var _0x390e74 = 0x0;
        for (var _0x38a10a = 0x0; _0x38a10a < _0x476b57; _0x38a10a++) {
          var _0x41531c = _0x46c9cf[_0x8ebbe0 + _0x38a10a * 0x8 >> 0x2];
          var _0x2ea12a = _0x46c9cf[_0x8ebbe0 + (_0x38a10a * 0x8 + 0x4) >> 0x2];
          var _0x3ba98f = _0x278315.write(_0x266a2d, _0x59ed12, _0x41531c, _0x2ea12a, _0x49a2e5);
          if (_0x3ba98f < 0x0) {
            return -0x1;
          }
          _0x390e74 += _0x3ba98f;
        }
        return _0x390e74;
      },
      "varargs": undefined,
      "get": function () {
        _0x3c26cf.varargs += 0x4;
        var _0x56a6e2 = _0x46c9cf[_0x3c26cf.varargs - 0x4 >> 0x2];
        return _0x56a6e2;
      },
      "getStr": function (_0xfc711e) {
        var _0x25452f = _0xfc711e ? _0x344b4c(_0x18c91b, _0xfc711e, undefined) : '';
        return _0x25452f;
      },
      "getStreamFromFD": function (_0x44eca2) {
        var _0x2b1c00 = _0x278315.streams[_0x44eca2];
        if (!_0x2b1c00) {
          throw new null(0x8);
        }
        return _0x2b1c00;
      },
      "get64": function (_0x52b2f4, _0x5a8f76) {
        return _0x52b2f4;
      }
    };
    var _0x2badf6 = {
      "mount": function (_0x15a3a1) {
        _0x4bcfe1.websocket = _0x4bcfe1.websocket && "object" === typeof _0x4bcfe1.websocket ? _0x4bcfe1.websocket : {};
        _0x4bcfe1.websocket._callbacks = {};
        _0x4bcfe1.websocket.on = function (_0x110304, _0x3a7dd8) {
          if ("function" === typeof _0x3a7dd8) {
            this._callbacks[_0x110304] = _0x3a7dd8;
          }
          return this;
        };
        _0x4bcfe1.websocket.emit = function (_0x5d4a90, _0x2ef566) {
          if ("function" === typeof this._callbacks[_0x5d4a90]) {
            this._callbacks[_0x5d4a90].call(this, _0x2ef566);
          }
        };
        return _0x278315.createNode(null, "/", 16895, 0x0);
      },
      "createSocket": function (_0x2dc994, _0x4afb8a, _0x2b2845) {
        _0x4afb8a &= -526337;
        var _0xe11b83 = _0x4afb8a == 0x1;
        if (_0xe11b83 && _0x2b2845 && _0x2b2845 != 0x6) {
          throw new null(0x42);
        }
        var _0x56d7ec = {
          "family": _0x2dc994,
          "type": _0x4afb8a,
          "protocol": _0x2b2845,
          "server": null,
          "error": null,
          "peers": {},
          "pending": [],
          "recv_queue": [],
          "sock_ops": _0x2badf6.websocket_sock_ops
        };
        var _0x1e6642 = _0x2badf6.nextname();
        var _0x17f74f = _0x278315.createNode(_0x2badf6.root, _0x1e6642, 0xc000, 0x0);
        _0x17f74f.sock = _0x56d7ec;
        var _0x22ab6e = _0x278315.createStream({
          "path": _0x1e6642,
          "node": _0x17f74f,
          "flags": 0x2,
          "seekable": false,
          "stream_ops": _0x2badf6.stream_ops
        });
        _0x56d7ec.stream = _0x22ab6e;
        return _0x56d7ec;
      },
      "getSocket": function (_0x176fa7) {
        var _0x4c948e = _0x278315.streams[_0x176fa7];
        if (!_0x4c948e || !((_0x4c948e.node.mode & 0xc000) === 0xc000)) {
          return null;
        }
        return _0x4c948e.node.sock;
      },
      "stream_ops": {
        "poll": function (_0x56974b) {
          var _0x48b0bb = _0x56974b.node.sock;
          return _0x48b0bb.sock_ops.poll(_0x48b0bb);
        },
        "ioctl": function (_0x593fb7, _0x3ef8ba, _0x3717d2) {
          var _0x50d856 = _0x593fb7.node.sock;
          return _0x50d856.sock_ops.ioctl(_0x50d856, _0x3ef8ba, _0x3717d2);
        },
        "read": function (_0x37effb, _0x1884a7, _0x28784f, _0x3412c0, _0x58a58f) {
          var _0x3eaa62 = _0x37effb.node.sock;
          var _0x16fab7 = _0x3eaa62.sock_ops.recvmsg(_0x3eaa62, _0x3412c0);
          if (!_0x16fab7) {
            return 0x0;
          }
          _0x1884a7.set(_0x16fab7.buffer, _0x28784f);
          return _0x16fab7.buffer.length;
        },
        "write": function (_0x28e3ed, _0x299d0f, _0x508d5c, _0x2842dc, _0x232e7c) {
          var _0x350ddd = _0x28e3ed.node.sock;
          return _0x350ddd.sock_ops.sendmsg(_0x350ddd, _0x299d0f, _0x508d5c, _0x2842dc);
        },
        "close": function (_0x26e0b9) {
          var _0xe09b4e = _0x26e0b9.node.sock;
          _0xe09b4e.sock_ops.close(_0xe09b4e);
        }
      },
      "nextname": function () {
        if (!_0x2badf6.nextname.current) {
          _0x2badf6.nextname.current = 0x0;
        }
        return "socket[" + _0x2badf6.nextname.current++ + "]";
      },
      "websocket_sock_ops": {
        "createPeer": function (_0x53e665, _0x13123e, _0x34cbc6) {
          var _0x1f0aa3;
          if (typeof _0x13123e == "object") {
            _0x1f0aa3 = _0x13123e;
            _0x13123e = null;
            _0x34cbc6 = null;
          }
          if (_0x1f0aa3) {
            if (_0x1f0aa3._socket) {
              _0x13123e = _0x1f0aa3._socket.remoteAddress;
              _0x34cbc6 = _0x1f0aa3._socket.remotePort;
            } else {
              var _0x2aea9d = /ws[s]?:\/\/([^:]+):(\d+)/.exec(_0x1f0aa3.url);
              if (!_0x2aea9d) {
                throw new Error("WebSocket URL must be in the format ws(s)://address:port");
              }
              _0x13123e = _0x2aea9d[0x1];
              _0x34cbc6 = parseInt(_0x2aea9d[0x2], 0xa);
            }
          } else {
            try {
              var _0x1d72b8 = _0x4bcfe1.websocket && "object" === typeof _0x4bcfe1.websocket;
              var _0x34a31b = "ws:#".replace("#", "//");
              if (_0x1d72b8) {
                if ("string" === typeof _0x4bcfe1.websocket.url) {
                  _0x34a31b = _0x4bcfe1.websocket.url;
                }
              }
              if (_0x34a31b === "ws://" || _0x34a31b === "wss://") {
                var _0x53faea = _0x13123e.split("/");
                _0x34a31b = _0x34a31b + _0x53faea[0x0] + ":" + _0x34cbc6 + "/" + _0x53faea.slice(0x1).join("/");
              }
              var _0x5456a3 = "binary";
              if (_0x1d72b8) {
                if ("string" === typeof _0x4bcfe1.websocket.subprotocol) {
                  _0x5456a3 = _0x4bcfe1.websocket.subprotocol;
                }
              }
              var _0x47eafd = undefined;
              if (_0x5456a3 !== "null") {
                _0x5456a3 = _0x5456a3.replace(/^ +| +$/g, '').split(/ *, */);
                _0x47eafd = _0x4da766 ? {
                  "protocol": _0x5456a3.toString()
                } : _0x5456a3;
              }
              if (_0x1d72b8 && null === _0x4bcfe1.websocket.subprotocol) {
                _0x5456a3 = "null";
                _0x47eafd = undefined;
              }
              var _0x23386a;
              if (_0x4da766) {
                _0x23386a = require("ws");
              } else {
                _0x23386a = WebSocket;
              }
              _0x1f0aa3 = new _0x23386a(_0x34a31b, _0x47eafd);
              _0x1f0aa3.binaryType = "arraybuffer";
            } catch (_0x41cbbe) {
              throw new null(0x17);
            }
          }
          var _0x541ad7 = {
            "addr": _0x13123e,
            "port": _0x34cbc6,
            "socket": _0x1f0aa3,
            "dgram_send_queue": []
          };
          _0x2badf6.websocket_sock_ops.addPeer(_0x53e665, _0x541ad7);
          _0x2badf6.websocket_sock_ops.handlePeerEvents(_0x53e665, _0x541ad7);
          if (_0x53e665.type === 0x2 && typeof _0x53e665.sport != "undefined") {
            _0x541ad7.dgram_send_queue.push(new Uint8Array([0xff, 0xff, 0xff, 0xff, "p".charCodeAt(0x0), "o".charCodeAt(0x0), "r".charCodeAt(0x0), "t".charCodeAt(0x0), (_0x53e665.sport & 0xff00) >> 0x8, _0x53e665.sport & 0xff]));
          }
          return _0x541ad7;
        },
        "getPeer": function (_0x583d11, _0x1d9d12, _0x70a069) {
          return _0x583d11.peers[_0x1d9d12 + ":" + _0x70a069];
        },
        "addPeer": function (_0x295fb3, _0x1275d7) {
          _0x295fb3.peers[_0x1275d7.addr + ":" + _0x1275d7.port] = _0x1275d7;
        },
        "removePeer": function (_0x45ec9d, _0x4e79af) {
          delete _0x45ec9d.peers[_0x4e79af.addr + ":" + _0x4e79af.port];
        },
        "handlePeerEvents": function (_0x3342bb, _0x49cd34) {
          var _0xb9c652 = true;
          var _0x4a59e9 = function () {
            _0x4bcfe1.websocket.emit("open", _0x3342bb.stream.fd);
            try {
              var _0xc5d463 = _0x49cd34.dgram_send_queue.shift();
              while (_0xc5d463) {
                _0x49cd34.socket.send(_0xc5d463);
                _0xc5d463 = _0x49cd34.dgram_send_queue.shift();
              }
            } catch (_0x40b551) {
              _0x49cd34.socket.close();
            }
          };
          function _0x1ab8dc(_0x297d65) {
            if (typeof _0x297d65 == "string") {
              var _0x36fba9 = new TextEncoder();
              _0x297d65 = _0x36fba9.encode(_0x297d65);
            } else {
              _0x35e637(_0x297d65.byteLength !== undefined);
              if (_0x297d65.byteLength == 0x0) {
                return;
              } else {
                _0x297d65 = new Uint8Array(_0x297d65);
              }
            }
            var _0x5643f8 = _0xb9c652;
            _0xb9c652 = false;
            if (_0x5643f8 && _0x297d65.length === 0xa && _0x297d65[0x0] === 0xff && _0x297d65[0x1] === 0xff && _0x297d65[0x2] === 0xff && _0x297d65[0x3] === 0xff && _0x297d65[0x4] === "p".charCodeAt(0x0) && _0x297d65[0x5] === "o".charCodeAt(0x0) && _0x297d65[0x6] === "r".charCodeAt(0x0) && _0x297d65[0x7] === "t".charCodeAt(0x0)) {
              var _0x1c2ea7 = _0x297d65[0x8] << 0x8 | _0x297d65[0x9];
              _0x2badf6.websocket_sock_ops.removePeer(_0x3342bb, _0x49cd34);
              _0x49cd34.port = _0x1c2ea7;
              _0x2badf6.websocket_sock_ops.addPeer(_0x3342bb, _0x49cd34);
              return;
            }
            _0x3342bb.recv_queue.push({
              "addr": _0x49cd34.addr,
              "port": _0x49cd34.port,
              "data": _0x297d65
            });
            _0x4bcfe1.websocket.emit("message", _0x3342bb.stream.fd);
          }
          if (_0x4da766) {
            _0x49cd34.socket.on("open", _0x4a59e9);
            _0x49cd34.socket.on("message", function (_0x51a722, _0x306cab) {
              if (!_0x306cab.binary) {
                return;
              }
              _0x1ab8dc(new Uint8Array(_0x51a722).buffer);
            });
            _0x49cd34.socket.on("close", function () {
              _0x4bcfe1.websocket.emit("close", _0x3342bb.stream.fd);
            });
            _0x49cd34.socket.on("error", function (_0x3f3b57) {
              _0x3342bb.error = 0xe;
              _0x4bcfe1.websocket.emit("error", [_0x3342bb.stream.fd, _0x3342bb.error, "ECONNREFUSED: Connection refused"]);
            });
          } else {
            _0x49cd34.socket.onopen = _0x4a59e9;
            _0x49cd34.socket.onclose = function () {
              _0x4bcfe1.websocket.emit("close", _0x3342bb.stream.fd);
            };
            _0x49cd34.socket.onmessage = function _0x4abf24(_0x268246) {
              _0x1ab8dc(_0x268246.data);
            };
            _0x49cd34.socket.onerror = function (_0x108872) {
              _0x3342bb.error = 0xe;
              _0x4bcfe1.websocket.emit("error", [_0x3342bb.stream.fd, _0x3342bb.error, "ECONNREFUSED: Connection refused"]);
            };
          }
        },
        "poll": function (_0x4066a6) {
          if (_0x4066a6.type === 0x1 && _0x4066a6.server) {
            return _0x4066a6.pending.length ? 65 : 0x0;
          }
          var _0x345b21 = 0x0;
          var _0x2eb7c4 = _0x4066a6.type === 0x1 ? _0x2badf6.websocket_sock_ops.getPeer(_0x4066a6, _0x4066a6.daddr, _0x4066a6.dport) : null;
          if (_0x4066a6.recv_queue.length || !_0x2eb7c4 || _0x2eb7c4 && _0x2eb7c4.socket.readyState === _0x2eb7c4.socket.CLOSING || _0x2eb7c4 && _0x2eb7c4.socket.readyState === _0x2eb7c4.socket.CLOSED) {
            _0x345b21 |= 65;
          }
          if (!_0x2eb7c4 || _0x2eb7c4 && _0x2eb7c4.socket.readyState === _0x2eb7c4.socket.OPEN) {
            _0x345b21 |= 0x4;
          }
          if (_0x2eb7c4 && _0x2eb7c4.socket.readyState === _0x2eb7c4.socket.CLOSING || _0x2eb7c4 && _0x2eb7c4.socket.readyState === _0x2eb7c4.socket.CLOSED) {
            _0x345b21 |= 0x10;
          }
          return _0x345b21;
        },
        "ioctl": function (_0x421b8e, _0x1f27ab, _0x39ec11) {
          switch (_0x1f27ab) {
            case 0x541b:
              var _0x161a27 = 0x0;
              if (_0x421b8e.recv_queue.length) {
                _0x161a27 = _0x421b8e.recv_queue[0x0].data.length;
              }
              _0x46c9cf[_0x39ec11 >> 0x2] = _0x161a27;
              return 0x0;
            default:
              return 0x1c;
          }
        },
        "close": function (_0x5a353a) {
          if (_0x5a353a.server) {
            try {
              _0x5a353a.server.close();
            } catch (_0x68633e) {}
            _0x5a353a.server = null;
          }
          var _0xb2df4b = Object.keys(_0x5a353a.peers);
          for (var _0x4d0ec0 = 0x0; _0x4d0ec0 < _0xb2df4b.length; _0x4d0ec0++) {
            var _0x493742 = _0x5a353a.peers[_0xb2df4b[_0x4d0ec0]];
            try {
              _0x493742.socket.close();
            } catch (_0x5cae22) {}
            _0x2badf6.websocket_sock_ops.removePeer(_0x5a353a, _0x493742);
          }
          return 0x0;
        },
        "bind": function (_0x3b3f01, _0x4194df, _0x2c05ac) {
          if (typeof _0x3b3f01.saddr != "undefined" || typeof _0x3b3f01.sport != "undefined") {
            throw new null(0x1c);
          }
          _0x3b3f01.saddr = _0x4194df;
          _0x3b3f01.sport = _0x2c05ac;
          if (_0x3b3f01.type === 0x2) {
            if (_0x3b3f01.server) {
              _0x3b3f01.server.close();
              _0x3b3f01.server = null;
            }
            try {
              _0x3b3f01.sock_ops.listen(_0x3b3f01, 0x0);
            } catch (_0x406363) {
              if (!(_0x406363 instanceof null)) {
                throw _0x406363;
              }
              if (_0x406363.errno !== 0x8a) {
                throw _0x406363;
              }
            }
          }
        },
        "connect": function (_0x53cc8a, _0x2f3cef, _0x2deadb) {
          if (_0x53cc8a.server) {
            throw new null(0x8a);
          }
          if (typeof _0x53cc8a.daddr != "undefined" && typeof _0x53cc8a.dport != "undefined") {
            var _0x5ab310 = _0x2badf6.websocket_sock_ops.getPeer(_0x53cc8a, _0x53cc8a.daddr, _0x53cc8a.dport);
            if (_0x5ab310) {
              if (_0x5ab310.socket.readyState === _0x5ab310.socket.CONNECTING) {
                throw new null(0x7);
              } else {
                throw new null(0x1e);
              }
            }
          }
          var _0x185061 = _0x2badf6.websocket_sock_ops.createPeer(_0x53cc8a, _0x2f3cef, _0x2deadb);
          _0x53cc8a.daddr = _0x185061.addr;
          _0x53cc8a.dport = _0x185061.port;
          throw new null(0x1a);
        },
        "listen": function (_0x19f5c7, _0x187f90) {
          if (!_0x4da766) {
            throw new null(0x8a);
          }
          if (_0x19f5c7.server) {
            throw new null(0x1c);
          }
          var _0x319ed0 = require("ws").Server;
          var _0xa1c14b = _0x19f5c7.saddr;
          _0x19f5c7.server = new _0x319ed0({
            "host": _0xa1c14b,
            "port": _0x19f5c7.sport
          });
          _0x4bcfe1.websocket.emit("listen", _0x19f5c7.stream.fd);
          _0x19f5c7.server.on("connection", function (_0x4e52fc) {
            if (_0x19f5c7.type === 0x1) {
              var _0x59ebfc = _0x2badf6.createSocket(_0x19f5c7.family, _0x19f5c7.type, _0x19f5c7.protocol);
              var _0x357acc = _0x2badf6.websocket_sock_ops.createPeer(_0x59ebfc, _0x4e52fc);
              _0x59ebfc.daddr = _0x357acc.addr;
              _0x59ebfc.dport = _0x357acc.port;
              _0x19f5c7.pending.push(_0x59ebfc);
              _0x4bcfe1.websocket.emit("connection", _0x59ebfc.stream.fd);
            } else {
              _0x2badf6.websocket_sock_ops.createPeer(_0x19f5c7, _0x4e52fc);
              _0x4bcfe1.websocket.emit("connection", _0x19f5c7.stream.fd);
            }
          });
          _0x19f5c7.server.on("closed", function () {
            _0x4bcfe1.websocket.emit("close", _0x19f5c7.stream.fd);
            _0x19f5c7.server = null;
          });
          _0x19f5c7.server.on("error", function (_0x13bcde) {
            _0x19f5c7.error = 0x17;
            _0x4bcfe1.websocket.emit("error", [_0x19f5c7.stream.fd, _0x19f5c7.error, "EHOSTUNREACH: Host is unreachable"]);
          });
        },
        "accept": function (_0x4aa335) {
          if (!_0x4aa335.server || !_0x4aa335.pending.length) {
            throw new null(0x1c);
          }
          var _0x52b581 = _0x4aa335.pending.shift();
          _0x52b581.stream.flags = _0x4aa335.stream.flags;
          return _0x52b581;
        },
        "getname": function (_0x3edbc9, _0x1b4251) {
          var _0x155437;
          var _0x3b62a9;
          if (_0x1b4251) {
            if (_0x3edbc9.daddr === undefined || _0x3edbc9.dport === undefined) {
              throw new null(0x35);
            }
            _0x155437 = _0x3edbc9.daddr;
            _0x3b62a9 = _0x3edbc9.dport;
          } else {
            _0x155437 = _0x3edbc9.saddr || 0x0;
            _0x3b62a9 = _0x3edbc9.sport || 0x0;
          }
          return {
            "addr": _0x155437,
            "port": _0x3b62a9
          };
        },
        "sendmsg": function (_0x4c3146, _0x2e76ab, _0x188de6, _0x5d6d11, _0x2c6a84, _0x1a1e4c) {
          if (_0x4c3146.type === 0x2) {
            if (_0x2c6a84 === undefined || _0x1a1e4c === undefined) {
              _0x2c6a84 = _0x4c3146.daddr;
              _0x1a1e4c = _0x4c3146.dport;
            }
            if (_0x2c6a84 === undefined || _0x1a1e4c === undefined) {
              throw new null(0x11);
            }
          } else {
            _0x2c6a84 = _0x4c3146.daddr;
            _0x1a1e4c = _0x4c3146.dport;
          }
          var _0x4b1e8a = _0x2badf6.websocket_sock_ops.getPeer(_0x4c3146, _0x2c6a84, _0x1a1e4c);
          if (_0x4c3146.type === 0x1) {
            if (!_0x4b1e8a || _0x4b1e8a.socket.readyState === _0x4b1e8a.socket.CLOSING || _0x4b1e8a.socket.readyState === _0x4b1e8a.socket.CLOSED) {
              throw new null(0x35);
            } else {
              if (_0x4b1e8a.socket.readyState === _0x4b1e8a.socket.CONNECTING) {
                throw new null(0x6);
              }
            }
          }
          if (ArrayBuffer.isView(_0x2e76ab)) {
            _0x188de6 += _0x2e76ab.byteOffset;
            _0x2e76ab = _0x2e76ab.buffer;
          }
          var _0x3737c0;
          _0x3737c0 = _0x2e76ab.slice(_0x188de6, _0x188de6 + _0x5d6d11);
          if (_0x4c3146.type === 0x2) {
            if (!_0x4b1e8a || _0x4b1e8a.socket.readyState !== _0x4b1e8a.socket.OPEN) {
              if (!_0x4b1e8a || _0x4b1e8a.socket.readyState === _0x4b1e8a.socket.CLOSING || _0x4b1e8a.socket.readyState === _0x4b1e8a.socket.CLOSED) {
                _0x4b1e8a = _0x2badf6.websocket_sock_ops.createPeer(_0x4c3146, _0x2c6a84, _0x1a1e4c);
              }
              _0x4b1e8a.dgram_send_queue.push(_0x3737c0);
              return _0x5d6d11;
            }
          }
          try {
            _0x4b1e8a.socket.send(_0x3737c0);
            return _0x5d6d11;
          } catch (_0x522549) {
            throw new null(0x1c);
          }
        },
        "recvmsg": function (_0x4dbc24, _0x1974c0) {
          if (_0x4dbc24.type === 0x1 && _0x4dbc24.server) {
            throw new null(0x35);
          }
          var _0xf120ae = _0x4dbc24.recv_queue.shift();
          if (!_0xf120ae) {
            if (_0x4dbc24.type === 0x1) {
              var _0x47615a = _0x2badf6.websocket_sock_ops.getPeer(_0x4dbc24, _0x4dbc24.daddr, _0x4dbc24.dport);
              if (!_0x47615a) {
                throw new null(0x35);
              } else {
                if (_0x47615a.socket.readyState === _0x47615a.socket.CLOSING || _0x47615a.socket.readyState === _0x47615a.socket.CLOSED) {
                  return null;
                } else {
                  throw new null(0x6);
                }
              }
            } else {
              throw new null(0x6);
            }
          }
          var _0x4f8861 = _0xf120ae.data.byteLength || _0xf120ae.data.length;
          var _0x4df36e = _0xf120ae.data.byteOffset || 0x0;
          var _0x204fc4 = _0xf120ae.data.buffer || _0xf120ae.data;
          var _0x469d0a = Math.min(_0x1974c0, _0x4f8861);
          var _0x4b14c1 = {
            "buffer": new Uint8Array(_0x204fc4, _0x4df36e, _0x469d0a),
            "addr": _0xf120ae.addr,
            "port": _0xf120ae.port
          };
          if (_0x4dbc24.type === 0x1 && _0x469d0a < _0x4f8861) {
            var _0x1a8910 = _0x4f8861 - _0x469d0a;
            _0xf120ae.data = new Uint8Array(_0x204fc4, _0x4df36e + _0x469d0a, _0x1a8910);
            _0x4dbc24.recv_queue.unshift(_0xf120ae);
          }
          return _0x4b14c1;
        }
      }
    };
    function _0x3f5c7b(_0x29e523) {
      var _0x476bfb = _0x29e523.split(".");
      for (var _0x2a7c77 = 0x0; _0x2a7c77 < 0x4; _0x2a7c77++) {
        var _0x545eab = Number(_0x476bfb[_0x2a7c77]);
        if (isNaN(_0x545eab)) {
          return null;
        }
        _0x476bfb[_0x2a7c77] = _0x545eab;
      }
      return (_0x476bfb[0x0] | _0x476bfb[0x1] << 0x8 | _0x476bfb[0x2] << 0x10 | _0x476bfb[0x3] << 0x18) >>> 0x0;
    }
    function _0x24e192(_0x165cf4) {
      var _0x4d4ef8;
      var _0x47281a;
      var _0xcfe5e0;
      var _0x7f82f;
      var _0x57f671 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
      var _0x1b9ce8 = [];
      if (!_0x57f671.test(_0x165cf4)) {
        return null;
      }
      if (_0x165cf4 === "::") {
        return [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
      }
      if (_0x165cf4.startsWith("::")) {
        _0x165cf4 = _0x165cf4.replace("::", "Z:");
      } else {
        _0x165cf4 = _0x165cf4.replace("::", ":Z:");
      }
      if (_0x165cf4.indexOf(".") > 0x0) {
        _0x165cf4 = _0x165cf4.replace(new RegExp("[.]", "g"), ":");
        _0x4d4ef8 = _0x165cf4.split(":");
        _0x4d4ef8[_0x4d4ef8.length - 0x4] = parseInt(_0x4d4ef8[_0x4d4ef8.length - 0x4]) + parseInt(_0x4d4ef8[_0x4d4ef8.length - 0x3]) * 0x100;
        _0x4d4ef8[_0x4d4ef8.length - 0x3] = parseInt(_0x4d4ef8[_0x4d4ef8.length - 0x2]) + parseInt(_0x4d4ef8[_0x4d4ef8.length - 0x1]) * 0x100;
        _0x4d4ef8 = _0x4d4ef8.slice(0x0, _0x4d4ef8.length - 0x2);
      } else {
        _0x4d4ef8 = _0x165cf4.split(":");
      }
      _0xcfe5e0 = 0x0;
      _0x7f82f = 0x0;
      for (_0x47281a = 0x0; _0x47281a < _0x4d4ef8.length; _0x47281a++) {
        if (typeof _0x4d4ef8[_0x47281a] == "string") {
          if (_0x4d4ef8[_0x47281a] === "Z") {
            for (_0x7f82f = 0x0; _0x7f82f < 0x8 - _0x4d4ef8.length + 0x1; _0x7f82f++) {
              _0x1b9ce8[_0x47281a + _0x7f82f] = 0x0;
            }
            _0xcfe5e0 = _0x7f82f - 0x1;
          } else {
            _0x1b9ce8[_0x47281a + _0xcfe5e0] = _0x373c28(parseInt(_0x4d4ef8[_0x47281a], 0x10));
          }
        } else {
          _0x1b9ce8[_0x47281a + _0xcfe5e0] = _0x4d4ef8[_0x47281a];
        }
      }
      return [_0x1b9ce8[0x1] << 0x10 | _0x1b9ce8[0x0], _0x1b9ce8[0x3] << 0x10 | _0x1b9ce8[0x2], _0x1b9ce8[0x5] << 0x10 | _0x1b9ce8[0x4], _0x1b9ce8[0x7] << 0x10 | _0x1b9ce8[0x6]];
    }
    var _0x29554d = {
      "address_map": {
        "id": 0x1,
        "addrs": {},
        "names": {}
      },
      "lookup_name": function (_0x123a38) {
        var _0x47ee96 = _0x3f5c7b(_0x123a38);
        if (_0x47ee96 !== null) {
          return _0x123a38;
        }
        _0x47ee96 = _0x24e192(_0x123a38);
        if (_0x47ee96 !== null) {
          return _0x123a38;
        }
        var _0x5ab786;
        if (_0x29554d.address_map.addrs[_0x123a38]) {
          _0x5ab786 = _0x29554d.address_map.addrs[_0x123a38];
        } else {
          var _0x272deb = _0x29554d.address_map.id++;
          _0x35e637(_0x272deb < 0xffff, "exceeded max address mappings of 65535");
          _0x5ab786 = "172.29." + (_0x272deb & 0xff) + "." + (_0x272deb & 0xff00);
          _0x29554d.address_map.names[_0x5ab786] = _0x123a38;
          _0x29554d.address_map.addrs[_0x123a38] = _0x5ab786;
        }
        return _0x5ab786;
      },
      "lookup_addr": function (_0x50091b) {
        if (_0x29554d.address_map.names[_0x50091b]) {
          return _0x29554d.address_map.names[_0x50091b];
        }
        return null;
      }
    };
    var _0x593392 = {
      "BUCKET_BUFFER_SIZE": 0x2000,
      "mount": function (_0x3eb8ec) {
        return _0x278315.createNode(null, "/", 16895, 0x0);
      },
      "createPipe": function () {
        var _0x5e7d20 = {
          "buckets": [],
          "refcnt": 0x2
        };
        _0x5e7d20.buckets.push({
          "buffer": new Uint8Array(0x2000),
          "offset": 0x0,
          "roffset": 0x0
        });
        var _0x37105d = _0x593392.nextname();
        var _0x52d95a = _0x593392.nextname();
        var _0x61c4d8 = _0x278315.createNode(_0x593392.root, _0x37105d, 0x1000, 0x0);
        var _0x371544 = _0x278315.createNode(_0x593392.root, _0x52d95a, 0x1000, 0x0);
        _0x61c4d8.pipe = _0x5e7d20;
        _0x371544.pipe = _0x5e7d20;
        var _0x261f26 = _0x278315.createStream({
          "path": _0x37105d,
          "node": _0x61c4d8,
          "flags": 0x0,
          "seekable": false,
          "stream_ops": _0x593392.stream_ops
        });
        _0x61c4d8.stream = _0x261f26;
        var _0x5dee15 = _0x278315.createStream({
          "path": _0x52d95a,
          "node": _0x371544,
          "flags": 0x1,
          "seekable": false,
          "stream_ops": _0x593392.stream_ops
        });
        _0x371544.stream = _0x5dee15;
        return {
          "readable_fd": _0x261f26.fd,
          "writable_fd": _0x5dee15.fd
        };
      },
      "stream_ops": {
        "poll": function (_0x14f5ef) {
          var _0x3de5fd = _0x14f5ef.node.pipe;
          if ((_0x14f5ef.flags & 0x200003) === 0x1) {
            return 260;
          } else {
            if (_0x3de5fd.buckets.length > 0x0) {
              for (var _0x1a2366 = 0x0; _0x1a2366 < _0x3de5fd.buckets.length; _0x1a2366++) {
                var _0x6f53f1 = _0x3de5fd.buckets[_0x1a2366];
                if (_0x6f53f1.offset - _0x6f53f1.roffset > 0x0) {
                  return 65;
                }
              }
            }
          }
          return 0x0;
        },
        "ioctl": function (_0x3a05fc, _0x37dd67, _0xf8c228) {
          return 0x1c;
        },
        "fsync": function (_0xe982d6) {
          return 0x1c;
        },
        "read": function (_0x4df91d, _0x2d7216, _0x440515, _0x40e592, _0x5429d1) {
          var _0x3a84df = _0x4df91d.node.pipe;
          var _0x1633fc = 0x0;
          for (var _0x36f06b = 0x0; _0x36f06b < _0x3a84df.buckets.length; _0x36f06b++) {
            var _0x34458b = _0x3a84df.buckets[_0x36f06b];
            _0x1633fc += _0x34458b.offset - _0x34458b.roffset;
          }
          _0x35e637(_0x2d7216 instanceof ArrayBuffer || ArrayBuffer.isView(_0x2d7216));
          var _0x3f9c2c = _0x2d7216.subarray(_0x440515, _0x440515 + _0x40e592);
          if (_0x40e592 <= 0x0) {
            return 0x0;
          }
          if (_0x1633fc == 0x0) {
            throw new null(0x6);
          }
          var _0x182ddc = Math.min(_0x1633fc, _0x40e592);
          var _0x328f2a = _0x182ddc;
          var _0x295e72 = 0x0;
          for (var _0x36f06b = 0x0; _0x36f06b < _0x3a84df.buckets.length; _0x36f06b++) {
            var _0x512bf5 = _0x3a84df.buckets[_0x36f06b];
            var _0x16faab = _0x512bf5.offset - _0x512bf5.roffset;
            if (_0x182ddc <= _0x16faab) {
              var _0xc5f645 = _0x512bf5.buffer.subarray(_0x512bf5.roffset, _0x512bf5.offset);
              if (_0x182ddc < _0x16faab) {
                _0xc5f645 = _0xc5f645.subarray(0x0, _0x182ddc);
                _0x512bf5.roffset += _0x182ddc;
              } else {
                _0x295e72++;
              }
              _0x3f9c2c.set(_0xc5f645);
              break;
            } else {
              var _0xc5f645 = _0x512bf5.buffer.subarray(_0x512bf5.roffset, _0x512bf5.offset);
              _0x3f9c2c.set(_0xc5f645);
              _0x3f9c2c = _0x3f9c2c.subarray(_0xc5f645.byteLength);
              _0x182ddc -= _0xc5f645.byteLength;
              _0x295e72++;
            }
          }
          if (_0x295e72 && _0x295e72 == _0x3a84df.buckets.length) {
            _0x295e72--;
            _0x3a84df.buckets[_0x295e72].offset = 0x0;
            _0x3a84df.buckets[_0x295e72].roffset = 0x0;
          }
          _0x3a84df.buckets.splice(0x0, _0x295e72);
          return _0x328f2a;
        },
        "write": function (_0x1195b3, _0x14affd, _0x299be1, _0xe1f3ff, _0x2d35f6) {
          var _0x224d21 = _0x1195b3.node.pipe;
          _0x35e637(_0x14affd instanceof ArrayBuffer || ArrayBuffer.isView(_0x14affd));
          var _0x10ccb9 = _0x14affd.subarray(_0x299be1, _0x299be1 + _0xe1f3ff);
          var _0x21b9eb = _0x10ccb9.byteLength;
          if (_0x21b9eb <= 0x0) {
            return 0x0;
          }
          var _0x328f14 = null;
          if (_0x224d21.buckets.length == 0x0) {
            _0x328f14 = {
              "buffer": new Uint8Array(0x2000),
              "offset": 0x0,
              "roffset": 0x0
            };
            _0x224d21.buckets.push(_0x328f14);
          } else {
            _0x328f14 = _0x224d21.buckets[_0x224d21.buckets.length - 0x1];
          }
          _0x35e637(_0x328f14.offset <= 0x2000);
          var _0xf218f = 0x2000 - _0x328f14.offset;
          if (_0xf218f >= _0x21b9eb) {
            _0x328f14.buffer.set(_0x10ccb9, _0x328f14.offset);
            _0x328f14.offset += _0x21b9eb;
            return _0x21b9eb;
          } else if (_0xf218f > 0x0) {
            _0x328f14.buffer.set(_0x10ccb9.subarray(0x0, _0xf218f), _0x328f14.offset);
            _0x328f14.offset += _0xf218f;
            _0x10ccb9 = _0x10ccb9.subarray(_0xf218f, _0x10ccb9.byteLength);
          }
          var _0x2ad6e0 = _0x10ccb9.byteLength / 0x2000 | 0x0;
          var _0x3648ff = _0x10ccb9.byteLength % 0x2000;
          for (var _0x2a7396 = 0x0; _0x2a7396 < _0x2ad6e0; _0x2a7396++) {
            var _0xaf61cc = {
              "buffer": new Uint8Array(0x2000),
              "offset": 0x2000,
              "roffset": 0x0
            };
            _0x224d21.buckets.push(_0xaf61cc);
            _0xaf61cc.buffer.set(_0x10ccb9.subarray(0x0, 0x2000));
            _0x10ccb9 = _0x10ccb9.subarray(0x2000, _0x10ccb9.byteLength);
          }
          if (_0x3648ff > 0x0) {
            var _0xaf61cc = {
              "buffer": new Uint8Array(0x2000),
              "offset": _0x10ccb9.byteLength,
              "roffset": 0x0
            };
            _0x224d21.buckets.push(_0xaf61cc);
            _0xaf61cc.buffer.set(_0x10ccb9);
          }
          return _0x21b9eb;
        },
        "close": function (_0x2cdf7a) {
          var _0x2d5cb8 = _0x2cdf7a.node.pipe;
          _0x2d5cb8.refcnt--;
          if (_0x2d5cb8.refcnt === 0x0) {
            _0x2d5cb8.buckets = null;
          }
        }
      },
      "nextname": function () {
        if (!_0x593392.nextname.current) {
          _0x593392.nextname.current = 0x0;
        }
        return "pipe[" + _0x593392.nextname.current++ + "]";
      }
    };
    function _0x241df7(_0x2c4504, _0x420e97, _0x10f36d) {
      var _0x49ac01 = new Date().getFullYear();
      var _0xa74c07 = new Date(_0x49ac01, 0x0, 0x1);
      var _0x849834 = new Date(_0x49ac01, 0x6, 0x1);
      var _0x4c5d53 = _0xa74c07.getTimezoneOffset();
      var _0x38fd5f = _0x849834.getTimezoneOffset();
      var _0x111ff7 = Math.max(_0x4c5d53, _0x38fd5f);
      _0x46c9cf[_0x2c4504 >> 0x2] = _0x111ff7 * 0x3c;
      _0x46c9cf[_0x420e97 >> 0x2] = Number(_0x4c5d53 != _0x38fd5f);
      function _0x5cef4e(_0x4b6ddb) {
        var _0x1692c7 = _0x4b6ddb.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return _0x1692c7 ? _0x1692c7[0x1] : "GMT";
      }
      var _0xfbd882 = _0x5cef4e(_0xa74c07);
      var _0x34c1ad = _0x5cef4e(_0x849834);
      var _0x475ea6 = _0x186836(_0xfbd882);
      var _0xe0be5e = _0x186836(_0x34c1ad);
      if (_0x38fd5f < _0x4c5d53) {
        _0x46c9cf[_0x10f36d >> 0x2] = _0x475ea6;
        _0x46c9cf[_0x10f36d + 0x4 >> 0x2] = _0xe0be5e;
      } else {
        _0x46c9cf[_0x10f36d >> 0x2] = _0xe0be5e;
        _0x46c9cf[_0x10f36d + 0x4 >> 0x2] = _0x475ea6;
      }
    }
    function _0xd8c7be(_0x3753e9, _0x5e712f, _0x3c63be) {
      if (_0xd8c7be.called) {
        return;
      }
      _0xd8c7be.called = true;
      _0x241df7(_0x3753e9, _0x5e712f, _0x3c63be);
    }
    function _0x1fa8ea(_0x67b53f, _0x4306c8) {
      _0x20045a.mainLoop.timingMode = _0x67b53f;
      _0x20045a.mainLoop.timingValue = _0x4306c8;
      if (!_0x20045a.mainLoop.func) {
        return 0x1;
      }
      if (!_0x20045a.mainLoop.running) {
        _0x20045a.mainLoop.running = true;
      }
      if (_0x67b53f == 0x0) {
        _0x20045a.mainLoop.scheduler = function _0x10cc49() {
          var _0x51c2a2 = Math.max(0x0, _0x20045a.mainLoop.tickStartTime + _0x4306c8 - _0x511ea2()) | 0x0;
          setTimeout(_0x20045a.mainLoop.runner, _0x51c2a2);
        };
        _0x20045a.mainLoop.method = "timeout";
      } else {
        if (_0x67b53f == 0x1) {
          _0x20045a.mainLoop.scheduler = function _0x125176() {
            _0x20045a.requestAnimationFrame(_0x20045a.mainLoop.runner);
          };
          _0x20045a.mainLoop.method = "rAF";
        } else {
          if (_0x67b53f == 0x2) {
            if (typeof setImmediate == "undefined") {
              var _0x58fd07 = [];
              var _0x3e0659 = function (_0x53f33a) {
                if (_0x53f33a.data === "setimmediate" || _0x53f33a.data.target === "setimmediate") {
                  _0x53f33a.stopPropagation();
                  _0x58fd07.shift()();
                }
              };
              addEventListener("message", _0x3e0659, true);
              setImmediate = function _0x39daca(_0x598bbc) {
                _0x58fd07.push(_0x598bbc);
                if (_0x132c1d) {
                  if (_0x4bcfe1.setImmediates === undefined) {
                    _0x4bcfe1.setImmediates = [];
                  }
                  _0x4bcfe1.setImmediates.push(_0x598bbc);
                  postMessage({
                    "target": "setimmediate"
                  });
                } else {
                  postMessage("setimmediate", "*");
                }
              };
            }
            _0x20045a.mainLoop.scheduler = function _0x3c665b() {
              setImmediate(_0x20045a.mainLoop.runner);
            };
            _0x20045a.mainLoop.method = "immediate";
          }
        }
      }
      return 0x0;
    }
    var _0x511ea2;
    if (_0x4da766) {
      _0x511ea2 = () => {
        var _0x3bd08a = process.hrtime();
        return _0x3bd08a[0x0] * 0x3e8 + _0x3bd08a[0x1] / 0xf4240;
      };
    } else {
      _0x511ea2 = () => performance.now();
    }
    function _0x76466d() {}
    function _0xe33019(_0x42f95e, _0x1d1b78, _0x29953c, _0x2b8e9b, _0x55ee85) {
      _0x35e637(!_0x20045a.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
      _0x20045a.mainLoop.func = _0x42f95e;
      _0x20045a.mainLoop.arg = _0x2b8e9b;
      var _0x294310 = _0x20045a.mainLoop.currentlyRunningMainloop;
      function _0xff61b9() {
        if (_0x294310 < _0x20045a.mainLoop.currentlyRunningMainloop) {
          _0x76466d();
          return false;
        }
        return true;
      }
      _0x20045a.mainLoop.running = false;
      _0x20045a.mainLoop.runner = function _0x219345() {
        if (_0x533336) {
          return;
        }
        if (_0x20045a.mainLoop.queue.length > 0x0) {
          var _0x176db3 = Date.now();
          var _0x5449cd = _0x20045a.mainLoop.queue.shift();
          _0x5449cd.func(_0x5449cd.arg);
          if (_0x20045a.mainLoop.remainingBlockers) {
            var _0x39a2e0 = _0x20045a.mainLoop.remainingBlockers;
            var _0x26ff7d = _0x39a2e0 % 0x1 == 0x0 ? _0x39a2e0 - 0x1 : Math.floor(_0x39a2e0);
            if (_0x5449cd.counted) {
              _0x20045a.mainLoop.remainingBlockers = _0x26ff7d;
            } else {
              _0x26ff7d = _0x26ff7d + 0.5;
              _0x20045a.mainLoop.remainingBlockers = (0x8 * _0x39a2e0 + _0x26ff7d) / 0x9;
            }
          }
          _0x3402e6("main loop blocker \"" + _0x5449cd.name + "\" took " + (Date.now() - _0x176db3) + " ms");
          _0x20045a.mainLoop.updateStatus();
          if (!_0xff61b9()) {
            return;
          }
          setTimeout(_0x20045a.mainLoop.runner, 0x0);
          return;
        }
        if (!_0xff61b9()) {
          return;
        }
        _0x20045a.mainLoop.currentFrameNumber = _0x20045a.mainLoop.currentFrameNumber + 0x1 | 0x0;
        if (_0x20045a.mainLoop.timingMode == 0x1 && _0x20045a.mainLoop.timingValue > 0x1 && _0x20045a.mainLoop.currentFrameNumber % _0x20045a.mainLoop.timingValue != 0x0) {
          _0x20045a.mainLoop.scheduler();
          return;
        } else if (_0x20045a.mainLoop.timingMode == 0x0) {
          _0x20045a.mainLoop.tickStartTime = _0x511ea2();
        }
        _0x2ab728.newRenderingFrameStarted();
        _0x20045a.mainLoop.runIter(_0x42f95e);
        if (!_0xff61b9()) {
          return;
        }
        if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) {
          SDL.audio.queueNewAudioData();
        }
        _0x20045a.mainLoop.scheduler();
      };
      if (!_0x55ee85) {
        if (_0x1d1b78 && _0x1d1b78 > 0x0) {
          _0x1fa8ea(0x0, 0x3e8 / _0x1d1b78);
        } else {
          _0x1fa8ea(0x1, 0x1);
        }
        _0x20045a.mainLoop.scheduler();
      }
      if (_0x29953c) {
        throw "unwind";
      }
    }
    function _0x580d98(_0x235409, _0xcaaf1f) {
      if (_0x533336) {
        return;
      }
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
    var _0x20045a = {
      "mainLoop": {
        "running": false,
        "scheduler": null,
        "method": '',
        "currentlyRunningMainloop": 0x0,
        "func": null,
        "arg": 0x0,
        "timingMode": 0x0,
        "timingValue": 0x0,
        "currentFrameNumber": 0x0,
        "queue": [],
        "pause": function () {
          _0x20045a.mainLoop.scheduler = null;
          _0x20045a.mainLoop.currentlyRunningMainloop++;
        },
        "resume": function () {
          _0x20045a.mainLoop.currentlyRunningMainloop++;
          var _0x59fba4 = _0x20045a.mainLoop.timingMode;
          var _0x1a25d3 = _0x20045a.mainLoop.timingValue;
          var _0x3fa8a7 = _0x20045a.mainLoop.func;
          _0x20045a.mainLoop.func = null;
          _0xe33019(_0x3fa8a7, 0x0, false, _0x20045a.mainLoop.arg, true);
          _0x1fa8ea(_0x59fba4, _0x1a25d3);
          _0x20045a.mainLoop.scheduler();
        },
        "updateStatus": function () {
          if (_0x4bcfe1.setStatus) {
            var _0x2f530b = _0x4bcfe1.statusMessage || "Please wait...";
            var _0x170570 = _0x20045a.mainLoop.remainingBlockers;
            var _0x2660b0 = _0x20045a.mainLoop.expectedBlockers;
            if (_0x170570) {
              if (_0x170570 < _0x2660b0) {
                _0x4bcfe1.setStatus(_0x2f530b + " (" + (_0x2660b0 - _0x170570) + "/" + _0x2660b0 + ")");
              } else {
                _0x4bcfe1.setStatus(_0x2f530b);
              }
            } else {
              _0x4bcfe1.setStatus('');
            }
          }
        },
        "runIter": function (_0x489c67) {
          if (_0x533336) {
            return;
          }
          if (_0x4bcfe1.preMainLoop) {
            var _0xc31f4a = _0x4bcfe1.preMainLoop();
            if (_0xc31f4a === false) {
              return;
            }
          }
          _0x580d98(_0x489c67);
          if (_0x4bcfe1.postMainLoop) {
            _0x4bcfe1.postMainLoop();
          }
        }
      },
      "isFullscreen": false,
      "pointerLock": false,
      "moduleContextCreatedCallbacks": [],
      "workers": [],
      "init": function () {
        if (!_0x4bcfe1.preloadPlugins) {
          _0x4bcfe1.preloadPlugins = [];
        }
        if (_0x20045a.initted) {
          return;
        }
        _0x20045a.initted = true;
        try {
          new Blob();
          _0x20045a.hasBlobConstructor = true;
        } catch (_0x5da89d) {
          _0x20045a.hasBlobConstructor = false;
          _0x3402e6("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        _0x20045a.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0x20045a.hasBlobConstructor ? _0x3402e6("warning: no BlobBuilder") : null;
        _0x20045a.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
        if (!_0x4bcfe1.noImageDecoding && typeof _0x20045a.URLObject == "undefined") {
          _0x3402e6("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          _0x4bcfe1.noImageDecoding = true;
        }
        var _0x540ddb = {
          canHandle: function _0x371bb9(_0x45968a) {
            return !_0x4bcfe1.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(_0x45968a);
          },
          handle: function _0x181cce(_0x1e6293, _0x2ea39d, _0x1031e6, _0x44e194) {
            var _0x1cc403 = null;
            if (_0x20045a.hasBlobConstructor) {
              try {
                _0x1cc403 = new Blob([_0x1e6293], {
                  "type": {
                    "jpg": "image/jpeg",
                    "jpeg": "image/jpeg",
                    "png": "image/png",
                    "bmp": "image/bmp",
                    "ogg": "audio/ogg",
                    "wav": "audio/wav",
                    "mp3": "audio/mpeg"
                  }[_0x2ea39d.substr(_0x2ea39d.lastIndexOf(".") + 0x1)]
                });
                if (_0x1cc403.size !== _0x1e6293.length) {
                  _0x1cc403 = new Blob([new Uint8Array(_0x1e6293).buffer], {
                    "type": {
                      "jpg": "image/jpeg",
                      "jpeg": "image/jpeg",
                      "png": "image/png",
                      "bmp": "image/bmp",
                      "ogg": "audio/ogg",
                      "wav": "audio/wav",
                      "mp3": "audio/mpeg"
                    }[_0x2ea39d.substr(_0x2ea39d.lastIndexOf(".") + 0x1)]
                  });
                }
              } catch (_0x275688) {
                _0x528b37("Blob constructor present but fails: " + _0x275688 + "; falling back to blob builder");
              }
            }
            if (!_0x1cc403) {
              var _0x47f0d4 = new _0x20045a.BlobBuilder();
              _0x47f0d4.append(new Uint8Array(_0x1e6293).buffer);
              _0x1cc403 = _0x47f0d4.getBlob();
            }
            var _0x172c92 = _0x20045a.URLObject.createObjectURL(_0x1cc403);
            var _0x4c1f50 = new Image();
            _0x4c1f50.onload = () => {
              _0x35e637(_0x4c1f50.complete, "Image " + _0x2ea39d + " could not be decoded");
              var _0x1e586a = document.createElement("canvas");
              _0x1e586a.width = _0x4c1f50.width;
              _0x1e586a.height = _0x4c1f50.height;
              var _0x273fa1 = _0x1e586a.getContext("2d");
              _0x273fa1.drawImage(_0x4c1f50, 0x0, 0x0);
              _0x4bcfe1.preloadedImages[_0x2ea39d] = _0x1e586a;
              _0x20045a.URLObject.revokeObjectURL(_0x172c92);
              if (_0x1031e6) {
                _0x1031e6(_0x1e6293);
              }
            };
            _0x4c1f50.onerror = _0x87abc9 => {
              _0x3402e6("Image " + _0x172c92 + " could not be decoded");
              if (_0x44e194) {
                _0x44e194();
              }
            };
            _0x4c1f50.src = _0x172c92;
          }
        };
        _0x4bcfe1.preloadPlugins.push(_0x540ddb);
        var _0x3b9ee6 = {
          canHandle: function _0xfa1d14(_0x2cc50f) {
            return !_0x4bcfe1.noAudioDecoding && _0x2cc50f.substr(-0x4) in {
              ".ogg": 0x1,
              ".wav": 0x1,
              ".mp3": 0x1
            };
          },
          handle: function _0x4cbf7a(_0xc479b0, _0x1e1632, _0x1abc78, _0x361087) {
            var _0x205ab9 = false;
            function _0xed821a(_0x4c2306) {
              if (_0x205ab9) {
                return;
              }
              _0x205ab9 = true;
              _0x4bcfe1.preloadedAudios[_0x1e1632] = _0x4c2306;
              if (_0x1abc78) {
                _0x1abc78(_0xc479b0);
              }
            }
            function _0x4dbfd4() {
              if (_0x205ab9) {
                return;
              }
              _0x205ab9 = true;
              _0x4bcfe1.preloadedAudios[_0x1e1632] = new Audio();
              if (_0x361087) {
                _0x361087();
              }
            }
            if (_0x20045a.hasBlobConstructor) {
              try {
                var _0x37da50 = new Blob([_0xc479b0], {
                  "type": {
                    "jpg": "image/jpeg",
                    "jpeg": "image/jpeg",
                    "png": "image/png",
                    "bmp": "image/bmp",
                    "ogg": "audio/ogg",
                    "wav": "audio/wav",
                    "mp3": "audio/mpeg"
                  }[_0x1e1632.substr(_0x1e1632.lastIndexOf(".") + 0x1)]
                });
              } catch (_0x4c0cc5) {
                return _0x4dbfd4();
              }
              var _0x3fa88a = _0x20045a.URLObject.createObjectURL(_0x37da50);
              var _0xf5d77c = new Audio();
              _0xf5d77c.addEventListener("canplaythrough", function () {
                _0xed821a(_0xf5d77c);
              }, false);
              _0xf5d77c.onerror = function _0x113ffd(_0x1ec5b4) {
                if (_0x205ab9) {
                  return;
                }
                _0x3402e6("warning: browser could not fully decode audio " + _0x1e1632 + ", trying slower base64 approach");
                function _0x2e7c8d(_0xa3f66e) {
                  var _0x297caa = '';
                  var _0x25f2e1 = 0x0;
                  var _0x2fe326 = 0x0;
                  for (var _0x2e9de6 = 0x0; _0x2e9de6 < _0xa3f66e.length; _0x2e9de6++) {
                    _0x25f2e1 = _0x25f2e1 << 0x8 | _0xa3f66e[_0x2e9de6];
                    _0x2fe326 += 0x8;
                    while (_0x2fe326 >= 0x6) {
                      var _0x2902cd = _0x25f2e1 >> _0x2fe326 - 0x6 & 0x3f;
                      _0x2fe326 -= 0x6;
                      _0x297caa += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[_0x2902cd];
                    }
                  }
                  if (_0x2fe326 == 0x2) {
                    _0x297caa += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(_0x25f2e1 & 0x3) << 0x4];
                    _0x297caa += "==";
                  } else if (_0x2fe326 == 0x4) {
                    _0x297caa += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(_0x25f2e1 & 0xf) << 0x2];
                    _0x297caa += "=";
                  }
                  return _0x297caa;
                }
                _0xf5d77c.src = "data:audio/x-" + _0x1e1632.substr(-0x3) + ";base64," + _0x2e7c8d(_0xc479b0);
                _0xed821a(_0xf5d77c);
              };
              _0xf5d77c.src = _0x3fa88a;
              _0x38e9bb(function () {
                _0xed821a(_0xf5d77c);
              }, 0x2710);
            } else {
              return _0x4dbfd4();
            }
          }
        };
        _0x4bcfe1.preloadPlugins.push(_0x3b9ee6);
        function _0x5eb206() {
          _0x20045a.pointerLock = document.pointerLockElement === _0x4bcfe1.canvas || document.mozPointerLockElement === _0x4bcfe1.canvas || document.webkitPointerLockElement === _0x4bcfe1.canvas || document.msPointerLockElement === _0x4bcfe1.canvas;
        }
        var _0x513c69 = _0x4bcfe1.canvas;
        if (_0x513c69) {
          _0x513c69.requestPointerLock = _0x513c69.requestPointerLock || _0x513c69.mozRequestPointerLock || _0x513c69.webkitRequestPointerLock || _0x513c69.msRequestPointerLock || function () {};
          _0x513c69.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {};
          _0x513c69.exitPointerLock = _0x513c69.exitPointerLock.bind(document);
          document.addEventListener("pointerlockchange", _0x5eb206, false);
          document.addEventListener("mozpointerlockchange", _0x5eb206, false);
          document.addEventListener("webkitpointerlockchange", _0x5eb206, false);
          document.addEventListener("mspointerlockchange", _0x5eb206, false);
          if (_0x4bcfe1.elementPointerLock) {
            _0x513c69.addEventListener("click", function (_0x423f33) {
              if (true && _0x4bcfe1.canvas.requestPointerLock) {
                _0x4bcfe1.canvas.requestPointerLock();
                _0x423f33.preventDefault();
              }
            }, false);
          }
        }
      },
      "handledByPreloadPlugin": function (_0x348d55, _0x565ce7, _0x405fd0, _0x260e70) {
        _0x20045a.init();
        var _0x4e7233 = false;
        _0x4bcfe1.preloadPlugins.forEach(function (_0x5db8fa) {
          if (_0x4e7233) {
            return;
          }
          if (_0x5db8fa.canHandle(_0x565ce7)) {
            _0x5db8fa.handle(_0x348d55, _0x565ce7, _0x405fd0, _0x260e70);
            _0x4e7233 = true;
          }
        });
        return _0x4e7233;
      },
      "createContext": function (_0x502c13, _0x2a620f, _0x657a77, _0x35ed35) {
        if (_0x2a620f && _0x4bcfe1.ctx && _0x502c13 == _0x4bcfe1.canvas) {
          return _0x4bcfe1.ctx;
        }
        var _0x10d19a;
        var _0x682b9c;
        if (_0x2a620f) {
          var _0x4dfaaf = {
            "antialias": false,
            "alpha": false,
            "majorVersion": typeof WebGL2RenderingContext != "undefined" ? 0x2 : 0x1
          };
          if (_0x35ed35) {
            for (var _0x353b58 in _0x35ed35) {
              _0x4dfaaf[_0x353b58] = _0x35ed35[_0x353b58];
            }
          }
          if (typeof _0x2ab728 != "undefined") {
            _0x682b9c = _0x2ab728.createContext(_0x502c13, _0x4dfaaf);
            if (_0x682b9c) {
              _0x10d19a = _0x2ab728.contexts[_0x682b9c].GLctx;
            }
          }
        } else {
          _0x10d19a = _0x502c13.getContext("2d");
        }
        if (!_0x10d19a) {
          return null;
        }
        if (_0x657a77) {
          if (!_0x2a620f) {
            _0x35e637(typeof _0x20ed22 == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
          }
          _0x4bcfe1.ctx = _0x10d19a;
          if (_0x2a620f) {
            _0x2ab728.makeContextCurrent(_0x682b9c);
          }
          _0x4bcfe1.useWebGL = _0x2a620f;
          _0x20045a.moduleContextCreatedCallbacks.forEach(function (_0x5b1482) {
            _0x5b1482();
          });
          _0x20045a.init();
        }
        return _0x10d19a;
      },
      "destroyContext": function (_0x58bfab, _0x41795e, _0x477029) {},
      "fullscreenHandlersInstalled": false,
      "lockPointer": undefined,
      "resizeCanvas": undefined,
      "requestFullscreen": function (_0x1a5927, _0x5e9f83) {
        _0x20045a.lockPointer = _0x1a5927;
        _0x20045a.resizeCanvas = _0x5e9f83;
        if (typeof _0x20045a.lockPointer == "undefined") {
          _0x20045a.lockPointer = true;
        }
        if (typeof _0x20045a.resizeCanvas == "undefined") {
          _0x20045a.resizeCanvas = false;
        }
        var _0x2a98bb = _0x4bcfe1.canvas;
        function _0x19a7aa() {
          _0x20045a.isFullscreen = false;
          var _0x6e2fb6 = _0x2a98bb.parentNode;
          if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x6e2fb6) {
            _0x2a98bb.exitFullscreen = _0x20045a.exitFullscreen;
            if (_0x20045a.lockPointer) {
              _0x2a98bb.requestPointerLock();
            }
            _0x20045a.isFullscreen = true;
            if (_0x20045a.resizeCanvas) {
              _0x20045a.setFullscreenCanvasSize();
            } else {
              _0x20045a.updateCanvasDimensions(_0x2a98bb);
            }
          } else {
            _0x6e2fb6.parentNode.insertBefore(_0x2a98bb, _0x6e2fb6);
            _0x6e2fb6.parentNode.removeChild(_0x6e2fb6);
            if (_0x20045a.resizeCanvas) {
              _0x20045a.setWindowedCanvasSize();
            } else {
              _0x20045a.updateCanvasDimensions(_0x2a98bb);
            }
          }
          if (_0x4bcfe1.onFullScreen) {
            _0x4bcfe1.onFullScreen(false);
          }
          if (_0x4bcfe1.onFullscreen) {
            _0x4bcfe1.onFullscreen(false);
          }
        }
        _0x20045a.fullscreenHandlersInstalled = true;
        document.addEventListener("fullscreenchange", _0x19a7aa, false);
        document.addEventListener("mozfullscreenchange", _0x19a7aa, false);
        document.addEventListener("webkitfullscreenchange", _0x19a7aa, false);
        document.addEventListener("MSFullscreenChange", _0x19a7aa, false);
        var _0x43a4c4 = document.createElement("div");
        _0x2a98bb.parentNode.insertBefore(_0x43a4c4, _0x2a98bb);
        _0x43a4c4.appendChild(_0x2a98bb);
        _0x43a4c4.requestFullscreen = _0x43a4c4.requestFullscreen || _0x43a4c4.mozRequestFullScreen || _0x43a4c4.msRequestFullscreen || (_0x43a4c4.webkitRequestFullscreen ? function () {
          _0x43a4c4.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null) || (_0x43a4c4.webkitRequestFullScreen ? function () {
          _0x43a4c4.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null);
        _0x43a4c4.requestFullscreen();
      },
      "exitFullscreen": function () {
        return false;
        var _0x566218 = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {};
        _0x566218.apply(document, []);
        return true;
      },
      "nextRAF": 0x0,
      "fakeRequestAnimationFrame": function (_0x2dd5d2) {
        var _0x2392ce = Date.now();
        _0x20045a.nextRAF = _0x2392ce + 16.666666666666668;
        var _0x41a77f = Math.max(0x0 - _0x2392ce, 0x0);
        setTimeout(_0x2dd5d2, _0x41a77f);
      },
      "requestAnimationFrame": function (_0x3422a1) {
        if (typeof requestAnimationFrame == "function") {
          requestAnimationFrame(_0x3422a1);
          return;
        }
        var _0x137a28 = _0x20045a.fakeRequestAnimationFrame;
        _0x137a28(_0x3422a1);
      },
      "safeSetTimeout": function (_0x40ef7b) {
        return _0x38e9bb(_0x40ef7b);
      },
      "safeRequestAnimationFrame": function (_0x4c7876) {
        return _0x20045a.requestAnimationFrame(function () {
          _0x580d98(_0x4c7876);
        });
      },
      "getMimetype": function (_0x1abde9) {
        return {
          "jpg": "image/jpeg",
          "jpeg": "image/jpeg",
          "png": "image/png",
          "bmp": "image/bmp",
          "ogg": "audio/ogg",
          "wav": "audio/wav",
          "mp3": "audio/mpeg"
        }[_0x1abde9.substr(_0x1abde9.lastIndexOf(".") + 0x1)];
      },
      "getUserMedia": function (_0x2ec320) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia;
        }
        window.getUserMedia(_0x2ec320);
      },
      "getMovementX": function (_0x56f0da) {
        return _0x56f0da.movementX || _0x56f0da.mozMovementX || _0x56f0da.webkitMovementX || 0x0;
      },
      "getMovementY": function (_0x5d2d13) {
        return _0x5d2d13.movementY || _0x5d2d13.mozMovementY || _0x5d2d13.webkitMovementY || 0x0;
      },
      "getMouseWheelDelta": function (_0x43c3cf) {
        var _0x5cc864 = 0x0;
        switch (_0x43c3cf.type) {
          case "DOMMouseScroll":
            _0x5cc864 = _0x43c3cf.detail / 0x3;
            break;
          case "mousewheel":
            _0x5cc864 = _0x43c3cf.wheelDelta / 0x78;
            break;
          case "wheel":
            _0x5cc864 = _0x43c3cf.deltaY;
            switch (_0x43c3cf.deltaMode) {
              case 0x0:
                _0x5cc864 /= 0x64;
                break;
              case 0x1:
                _0x5cc864 /= 0x3;
                break;
              case 0x2:
                _0x5cc864 *= 0x50;
                break;
              default:
                throw "unrecognized mouse wheel delta mode: " + _0x43c3cf.deltaMode;
            }
            break;
          default:
            throw "unrecognized mouse wheel event: " + _0x43c3cf.type;
        }
        return _0x5cc864;
      },
      "mouseX": 0x0,
      "mouseY": 0x0,
      "mouseMovementX": 0x0,
      "mouseMovementY": 0x0,
      "touches": {},
      "lastTouches": {},
      "calculateMouseEvent": function (_0x3953bf) {
        var _0x46a6eb = _0x4bcfe1.canvas.getBoundingClientRect();
        var _0x319ad4 = _0x4bcfe1.canvas.width;
        var _0x529709 = _0x4bcfe1.canvas.height;
        var _0x894575 = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
        var _0x47a62a = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
        if (_0x3953bf.type === "touchstart" || _0x3953bf.type === "touchend" || _0x3953bf.type === "touchmove") {
          var _0x543fed = _0x3953bf.touch;
          if (_0x543fed === undefined) {
            return;
          }
          var _0x2834cc = _0x543fed.pageX - (_0x894575 + _0x46a6eb.left);
          var _0x2ccc57 = _0x543fed.pageY - (_0x47a62a + _0x46a6eb.top);
          _0x2834cc = _0x2834cc * (_0x319ad4 / _0x46a6eb.width);
          _0x2ccc57 = _0x2ccc57 * (_0x529709 / _0x46a6eb.height);
          var _0x97aba0 = {
            "x": _0x2834cc,
            "y": _0x2ccc57
          };
          if (_0x3953bf.type === "touchstart") {
            _0x20045a.lastTouches[_0x543fed.identifier] = _0x97aba0;
            _0x20045a.touches[_0x543fed.identifier] = _0x97aba0;
          } else {
            if (_0x3953bf.type === "touchend" || _0x3953bf.type === "touchmove") {
              var _0x3f2fe2 = _0x20045a.touches[_0x543fed.identifier];
              if (!_0x3f2fe2) {
                _0x3f2fe2 = _0x97aba0;
              }
              _0x20045a.lastTouches[_0x543fed.identifier] = _0x3f2fe2;
              _0x20045a.touches[_0x543fed.identifier] = _0x97aba0;
            }
          }
          return;
        }
        var _0x49eb1c = _0x3953bf.pageX - (_0x894575 + _0x46a6eb.left);
        var _0x2cbfa2 = _0x3953bf.pageY - (_0x47a62a + _0x46a6eb.top);
        _0x49eb1c = _0x49eb1c * (_0x319ad4 / _0x46a6eb.width);
        _0x2cbfa2 = _0x2cbfa2 * (_0x529709 / _0x46a6eb.height);
        _0x20045a.mouseMovementX = _0x49eb1c - 0x0;
        _0x20045a.mouseMovementY = _0x2cbfa2 - 0x0;
        _0x20045a.mouseX = _0x49eb1c;
        _0x20045a.mouseY = _0x2cbfa2;
      },
      "resizeListeners": [],
      "updateResizeListeners": function () {
        var _0x12e033 = _0x4bcfe1.canvas;
        _0x20045a.resizeListeners.forEach(function (_0x29bb2b) {
          _0x29bb2b(_0x12e033.width, _0x12e033.height);
        });
      },
      "setCanvasSize": function (_0x1fa7bf, _0x3ea0c7, _0x3bb855) {
        var _0x59e49f = _0x4bcfe1.canvas;
        _0x20045a.updateCanvasDimensions(_0x59e49f, _0x1fa7bf, _0x3ea0c7);
        if (!_0x3bb855) {
          _0x20045a.updateResizeListeners();
        }
      },
      "windowedWidth": 0x0,
      "windowedHeight": 0x0,
      "setFullscreenCanvasSize": function () {
        if (typeof SDL != "undefined") {
          var _0x5b3c8c = _0x29f705[SDL.screen >> 0x2];
          _0x5b3c8c = _0x5b3c8c | 0x800000;
          _0x46c9cf[SDL.screen >> 0x2] = _0x5b3c8c;
        }
        _0x20045a.updateCanvasDimensions(_0x4bcfe1.canvas);
        _0x20045a.updateResizeListeners();
      },
      "setWindowedCanvasSize": function () {
        if (typeof SDL != "undefined") {
          var _0x287970 = _0x29f705[SDL.screen >> 0x2];
          _0x287970 = _0x287970 & -8388609;
          _0x46c9cf[SDL.screen >> 0x2] = _0x287970;
        }
        _0x20045a.updateCanvasDimensions(_0x4bcfe1.canvas);
        _0x20045a.updateResizeListeners();
      },
      "updateCanvasDimensions": function (_0x2ae3bb, _0x5e8062, _0x2ba6dd) {
        if (_0x5e8062 && _0x2ba6dd) {
          _0x2ae3bb.widthNative = _0x5e8062;
          _0x2ae3bb.heightNative = _0x2ba6dd;
        } else {
          _0x5e8062 = _0x2ae3bb.widthNative;
          _0x2ba6dd = _0x2ae3bb.heightNative;
        }
        var _0x159846 = _0x5e8062;
        var _0x48dfc6 = _0x2ba6dd;
        if (_0x4bcfe1.forcedAspectRatio && _0x4bcfe1.forcedAspectRatio > 0x0) {
          if (_0x159846 / _0x48dfc6 < _0x4bcfe1.forcedAspectRatio) {
            _0x159846 = Math.round(_0x48dfc6 * _0x4bcfe1.forcedAspectRatio);
          } else {
            _0x48dfc6 = Math.round(_0x159846 / _0x4bcfe1.forcedAspectRatio);
          }
        }
        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === _0x2ae3bb.parentNode && typeof screen != "undefined") {
          var _0x255450 = Math.min(screen.width / _0x159846, screen.height / _0x48dfc6);
          _0x159846 = Math.round(_0x159846 * _0x255450);
          _0x48dfc6 = Math.round(_0x48dfc6 * _0x255450);
        }
        if (_0x20045a.resizeCanvas) {
          if (_0x2ae3bb.width != _0x159846) {
            _0x2ae3bb.width = _0x159846;
          }
          if (_0x2ae3bb.height != _0x48dfc6) {
            _0x2ae3bb.height = _0x48dfc6;
          }
          if (typeof _0x2ae3bb.style != "undefined") {
            _0x2ae3bb.style.removeProperty("width");
            _0x2ae3bb.style.removeProperty("height");
          }
        } else {
          if (_0x2ae3bb.width != _0x5e8062) {
            _0x2ae3bb.width = _0x5e8062;
          }
          if (_0x2ae3bb.height != _0x2ba6dd) {
            _0x2ae3bb.height = _0x2ba6dd;
          }
          if (typeof _0x2ae3bb.style != "undefined") {
            if (_0x159846 != _0x5e8062 || _0x48dfc6 != _0x2ba6dd) {
              _0x2ae3bb.style.setProperty("width", _0x159846 + "px", "important");
              _0x2ae3bb.style.setProperty("height", _0x48dfc6 + "px", "important");
            } else {
              _0x2ae3bb.style.removeProperty("width");
              _0x2ae3bb.style.removeProperty("height");
            }
          }
        }
      }
    };
    var _0x1d6235 = {
      "inEventHandler": 0x0,
      "removeAllEventListeners": function () {
        for (var _0x141c38 = _0x1d6235.eventHandlers.length - 0x1; _0x141c38 >= 0x0; --_0x141c38) {
          _0x1d6235._removeHandler(_0x141c38);
        }
        _0x1d6235.eventHandlers = [];
        _0x1d6235.deferredCalls = [];
      },
      "registerRemoveEventListeners": function () {
        if (!_0x1d6235.removeEventListenersRegistered) {
          _0xdd5bdd.push(_0x1d6235.removeAllEventListeners);
          _0x1d6235.removeEventListenersRegistered = true;
        }
      },
      "deferredCalls": [],
      "deferCall": function (_0x31f008, _0x5d7ad3, _0x87e931) {
        function _0x1d8f3e(_0x48ba38, _0x510de5) {
          if (_0x48ba38.length != _0x510de5.length) {
            return false;
          }
          for (var _0xea1a23 in _0x48ba38) {
            if (_0x48ba38[_0xea1a23] != _0x510de5[_0xea1a23]) {
              return false;
            }
          }
          return true;
        }
        for (var _0x46ffe9 in _0x1d6235.deferredCalls) {
          var _0x2629f9 = _0x1d6235.deferredCalls[_0x46ffe9];
          if (_0x2629f9.targetFunction == _0x31f008 && _0x1d8f3e(_0x2629f9.argsList, _0x87e931)) {
            return;
          }
        }
        _0x1d6235.deferredCalls.push({
          "targetFunction": _0x31f008,
          "precedence": _0x5d7ad3,
          "argsList": _0x87e931
        });
        _0x1d6235.deferredCalls.sort(function (_0x2c933a, _0x2f9ea2) {
          return _0x2c933a.precedence < _0x2f9ea2.precedence;
        });
      },
      "removeDeferredCalls": function (_0x5c16b7) {
        for (var _0x25ec7a = 0x0; _0x25ec7a < _0x1d6235.deferredCalls.length; ++_0x25ec7a) {
          if (_0x1d6235.deferredCalls[_0x25ec7a].targetFunction == _0x5c16b7) {
            _0x1d6235.deferredCalls.splice(_0x25ec7a, 0x1);
            --_0x25ec7a;
          }
        }
      },
      "canPerformEventHandlerRequests": function () {
        return 0x0 && _0x1d6235.currentEventHandler.allowsDeferredCalls;
      },
      "runDeferredCalls": function () {
        if (!(0x0 && _0x1d6235.currentEventHandler.allowsDeferredCalls)) {
          return;
        }
        for (var _0x113728 = 0x0; _0x113728 < _0x1d6235.deferredCalls.length; ++_0x113728) {
          var _0x305e56 = _0x1d6235.deferredCalls[_0x113728];
          _0x1d6235.deferredCalls.splice(_0x113728, 0x1);
          --_0x113728;
          _0x305e56.targetFunction.apply(null, _0x305e56.argsList);
        }
      },
      "eventHandlers": [],
      "removeAllHandlersOnTarget": function (_0x2b6cd2, _0x102dbd) {
        for (var _0x23fff4 = 0x0; _0x23fff4 < _0x1d6235.eventHandlers.length; ++_0x23fff4) {
          if (_0x1d6235.eventHandlers[_0x23fff4].target == _0x2b6cd2 && (!_0x102dbd || _0x102dbd == _0x1d6235.eventHandlers[_0x23fff4].eventTypeString)) {
            _0x1d6235._removeHandler(_0x23fff4--);
          }
        }
      },
      "_removeHandler": function (_0x41a0a4) {
        var _0x480fbf = _0x1d6235.eventHandlers[_0x41a0a4];
        _0x480fbf.target.removeEventListener(_0x480fbf.eventTypeString, _0x480fbf.eventListenerFunc, _0x480fbf.useCapture);
        _0x1d6235.eventHandlers.splice(_0x41a0a4, 0x1);
      },
      "registerOrRemoveHandler": function (_0x45b1ba) {
        var _0x12250d = function _0x346513(_0x4ecc5e) {
          ++0x0;
          _0x1d6235.currentEventHandler = _0x45b1ba;
          _0x1d6235.runDeferredCalls();
          _0x45b1ba.handlerFunc(_0x4ecc5e);
          _0x1d6235.runDeferredCalls();
          --0x0;
        };
        if (_0x45b1ba.callbackfunc) {
          _0x45b1ba.eventListenerFunc = _0x12250d;
          _0x45b1ba.target.addEventListener(_0x45b1ba.eventTypeString, _0x12250d, _0x45b1ba.useCapture);
          _0x1d6235.eventHandlers.push(_0x45b1ba);
          _0x1d6235.registerRemoveEventListeners();
        } else {
          for (var _0x2f67e7 = 0x0; _0x2f67e7 < _0x1d6235.eventHandlers.length; ++_0x2f67e7) {
            if (_0x1d6235.eventHandlers[_0x2f67e7].target == _0x45b1ba.target && _0x1d6235.eventHandlers[_0x2f67e7].eventTypeString == _0x45b1ba.eventTypeString) {
              _0x1d6235._removeHandler(_0x2f67e7--);
            }
          }
        }
      },
      "getNodeNameForTarget": function (_0x38debe) {
        if (!_0x38debe) {
          return '';
        }
        if (_0x38debe == window) {
          return "#window";
        }
        if (_0x38debe == screen) {
          return "#screen";
        }
        return _0x38debe && _0x38debe.nodeName ? _0x38debe.nodeName : '';
      },
      "fullscreenEnabled": function () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled;
      }
    };
    function _0x20a35b(_0x17ab7c) {
      var _0x5e0150 = _0x17ab7c.getExtension("ANGLE_instanced_arrays");
      if (_0x5e0150) {
        _0x17ab7c.vertexAttribDivisor = function (_0x23072c, _0x1eec86) {
          _0x5e0150.vertexAttribDivisorANGLE(_0x23072c, _0x1eec86);
        };
        _0x17ab7c.drawArraysInstanced = function (_0x55ccc2, _0x57e3e8, _0x2dd1a1, _0x9a4a18) {
          _0x5e0150.drawArraysInstancedANGLE(_0x55ccc2, _0x57e3e8, _0x2dd1a1, _0x9a4a18);
        };
        _0x17ab7c.drawElementsInstanced = function (_0x1bd335, _0x1e3586, _0x2f9915, _0x48cbf9, _0x584fd2) {
          _0x5e0150.drawElementsInstancedANGLE(_0x1bd335, _0x1e3586, _0x2f9915, _0x48cbf9, _0x584fd2);
        };
        return 0x1;
      }
    }
    function _0x5a8970(_0x374785) {
      var _0x156e6e = _0x374785.getExtension("OES_vertex_array_object");
      if (_0x156e6e) {
        _0x374785.createVertexArray = function () {
          return _0x156e6e.createVertexArrayOES();
        };
        _0x374785.deleteVertexArray = function (_0x1a9da3) {
          _0x156e6e.deleteVertexArrayOES(_0x1a9da3);
        };
        _0x374785.bindVertexArray = function (_0x58b2f7) {
          _0x156e6e.bindVertexArrayOES(_0x58b2f7);
        };
        _0x374785.isVertexArray = function (_0x2cedd6) {
          return _0x156e6e.isVertexArrayOES(_0x2cedd6);
        };
        return 0x1;
      }
    }
    function _0x1b6ee6(_0x53384d) {
      var _0x4011d9 = _0x53384d.getExtension("WEBGL_draw_buffers");
      if (_0x4011d9) {
        _0x53384d.drawBuffers = function (_0x5cf9ca, _0x469300) {
          _0x4011d9.drawBuffersWEBGL(_0x5cf9ca, _0x469300);
        };
        return 0x1;
      }
    }
    function _0x7aabcf(_0x2a6e5d) {
      return !!(_0x2a6e5d.dibvbi = _0x2a6e5d.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
    }
    function _0xbfdc42(_0xebc101) {
      return !!(_0xebc101.mdibvbi = _0xebc101.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
    }
    function _0x14d8d2(_0x2009e8) {
      return !!(_0x2009e8.multiDrawWebgl = _0x2009e8.getExtension("WEBGL_multi_draw"));
    }
    var _0x2ab728 = {
      "counter": 0x1,
      "buffers": [],
      "mappedBuffers": {},
      "programs": [],
      "framebuffers": [],
      "renderbuffers": [],
      "textures": [],
      "shaders": [],
      "vaos": [],
      "contexts": [],
      "offscreenCanvases": {},
      "queries": [],
      "samplers": [],
      "transformFeedbacks": [],
      "syncs": [],
      "byteSizeByTypeRoot": 0x1400,
      "byteSizeByType": [0x1, 0x1, 0x2, 0x2, 0x4, 0x4, 0x4, 0x2, 0x3, 0x4, 0x8],
      "stringCache": {},
      "stringiCache": {},
      "unpackAlignment": 0x4,
      "recordError": function _0x42b2d5(_0x52974e) {
        if (!_0x2ab728.lastError) {
          _0x2ab728.lastError = _0x52974e;
        }
      },
      "getNewId": function (_0x5098f7) {
        var _0x99b31a = 0x1++;
        for (var _0x21e473 = _0x5098f7.length; _0x21e473 < _0x99b31a; _0x21e473++) {
          _0x5098f7[_0x21e473] = null;
        }
        return _0x99b31a;
      },
      "MAX_TEMP_BUFFER_SIZE": 0x200000,
      "numTempVertexBuffersPerSize": 0x40,
      "log2ceilLookup": function (_0x2ba604) {
        return 0x20 - Math.clz32(_0x2ba604 === 0x0 ? 0x0 : _0x2ba604 - 0x1);
      },
      "generateTempBuffers": function (_0x47f62b, _0x203113) {
        var _0x2a8a83 = 0x20 - Math.clz32(2097151);
        _0x203113.tempVertexBufferCounters1 = [];
        _0x203113.tempVertexBufferCounters2 = [];
        _0x203113.tempVertexBufferCounters1.length = _0x203113.tempVertexBufferCounters2.length = _0x2a8a83 + 0x1;
        _0x203113.tempVertexBuffers1 = [];
        _0x203113.tempVertexBuffers2 = [];
        _0x203113.tempVertexBuffers1.length = _0x203113.tempVertexBuffers2.length = _0x2a8a83 + 0x1;
        _0x203113.tempIndexBuffers = [];
        _0x203113.tempIndexBuffers.length = _0x2a8a83 + 0x1;
        for (var _0x2a5af3 = 0x0; _0x2a5af3 <= _0x2a8a83; ++_0x2a5af3) {
          _0x203113.tempIndexBuffers[_0x2a5af3] = null;
          _0x203113.tempVertexBufferCounters1[_0x2a5af3] = _0x203113.tempVertexBufferCounters2[_0x2a5af3] = 0x0;
          _0x203113.tempVertexBuffers1[_0x2a5af3] = [];
          _0x203113.tempVertexBuffers2[_0x2a5af3] = [];
          var _0x2cde9c = _0x203113.tempVertexBuffers1[_0x2a5af3];
          var _0x2911f9 = _0x203113.tempVertexBuffers2[_0x2a5af3];
          _0x2cde9c.length = _0x2911f9.length = 0x40;
          for (var _0x8754f8 = 0x0; _0x8754f8 < 0x40; ++_0x8754f8) {
            _0x2cde9c[_0x8754f8] = _0x2911f9[_0x8754f8] = null;
          }
        }
        if (_0x47f62b) {
          _0x203113.tempQuadIndexBuffer = _0x20ed22.createBuffer();
          _0x203113.GLctx.bindBuffer(0x8893, _0x203113.tempQuadIndexBuffer);
          var _0x545110 = new Uint16Array(1048576);
          var _0x2a5af3 = 0x0;
          var _0x305e73 = 0x0;
          while (0x1) {
            _0x545110[_0x2a5af3++] = _0x305e73;
            if (_0x2a5af3 >= 1048576) {
              break;
            }
            _0x545110[_0x2a5af3++] = _0x305e73 + 0x1;
            if (_0x2a5af3 >= 1048576) {
              break;
            }
            _0x545110[_0x2a5af3++] = _0x305e73 + 0x2;
            if (_0x2a5af3 >= 1048576) {
              break;
            }
            _0x545110[_0x2a5af3++] = _0x305e73;
            if (_0x2a5af3 >= 1048576) {
              break;
            }
            _0x545110[_0x2a5af3++] = _0x305e73 + 0x2;
            if (_0x2a5af3 >= 1048576) {
              break;
            }
            _0x545110[_0x2a5af3++] = _0x305e73 + 0x3;
            if (_0x2a5af3 >= 1048576) {
              break;
            }
            _0x305e73 += 0x4;
          }
          _0x203113.GLctx.bufferData(0x8893, _0x545110, 0x88e4);
          _0x203113.GLctx.bindBuffer(0x8893, null);
        }
      },
      "getTempVertexBuffer": function _0x645800(_0x56ea43) {
        var _0x16df42 = 0x20 - Math.clz32(_0x56ea43 === 0x0 ? 0x0 : _0x56ea43 - 0x1);
        var _0x16b5dd = _0x2ab728.currentContext.tempVertexBuffers1[_0x16df42];
        var _0x44914f = _0x2ab728.currentContext.tempVertexBufferCounters1[_0x16df42];
        _0x2ab728.currentContext.tempVertexBufferCounters1[_0x16df42] = _0x2ab728.currentContext.tempVertexBufferCounters1[_0x16df42] + 0x1 & 63;
        var _0xaf5a45 = _0x16b5dd[_0x44914f];
        if (_0xaf5a45) {
          return _0xaf5a45;
        }
        var _0x148377 = _0x20ed22.getParameter(0x8894);
        _0x16b5dd[_0x44914f] = _0x20ed22.createBuffer();
        _0x20ed22.bindBuffer(0x8892, _0x16b5dd[_0x44914f]);
        _0x20ed22.bufferData(0x8892, 0x1 << _0x16df42, 0x88e8);
        _0x20ed22.bindBuffer(0x8892, _0x148377);
        return _0x16b5dd[_0x44914f];
      },
      "getTempIndexBuffer": function _0x273e85(_0xba5657) {
        var _0x154004 = 0x20 - Math.clz32(_0xba5657 === 0x0 ? 0x0 : _0xba5657 - 0x1);
        var _0x25ab4d = _0x2ab728.currentContext.tempIndexBuffers[_0x154004];
        if (_0x25ab4d) {
          return _0x25ab4d;
        }
        var _0x15ba1e = _0x20ed22.getParameter(0x8895);
        _0x2ab728.currentContext.tempIndexBuffers[_0x154004] = _0x20ed22.createBuffer();
        _0x20ed22.bindBuffer(0x8893, _0x2ab728.currentContext.tempIndexBuffers[_0x154004]);
        _0x20ed22.bufferData(0x8893, 0x1 << _0x154004, 0x88e8);
        _0x20ed22.bindBuffer(0x8893, _0x15ba1e);
        return _0x2ab728.currentContext.tempIndexBuffers[_0x154004];
      },
      "newRenderingFrameStarted": function _0x322e97() {
        if (!_0x2ab728.currentContext) {
          return;
        }
        var _0x2b7f64 = _0x2ab728.currentContext.tempVertexBuffers1;
        _0x2ab728.currentContext.tempVertexBuffers1 = _0x2ab728.currentContext.tempVertexBuffers2;
        _0x2ab728.currentContext.tempVertexBuffers2 = _0x2b7f64;
        _0x2b7f64 = _0x2ab728.currentContext.tempVertexBufferCounters1;
        _0x2ab728.currentContext.tempVertexBufferCounters1 = _0x2ab728.currentContext.tempVertexBufferCounters2;
        _0x2ab728.currentContext.tempVertexBufferCounters2 = _0x2b7f64;
        var _0x50abb5 = 0x20 - Math.clz32(2097151);
        for (var _0x22b878 = 0x0; _0x22b878 <= _0x50abb5; ++_0x22b878) {
          _0x2ab728.currentContext.tempVertexBufferCounters1[_0x22b878] = 0x0;
        }
      },
      "getSource": function (_0x428396, _0x4597e8, _0x5196ec, _0x1fc74f) {
        var _0x443224 = '';
        for (var _0xc2c3b6 = 0x0; _0xc2c3b6 < _0x4597e8; ++_0xc2c3b6) {
          var _0x2a98f7 = _0x1fc74f ? _0x46c9cf[_0x1fc74f + _0xc2c3b6 * 0x4 >> 0x2] : -0x1;
          _0x443224 += _0x46c9cf[_0x5196ec + _0xc2c3b6 * 0x4 >> 0x2] ? _0x344b4c(_0x18c91b, _0x46c9cf[_0x5196ec + _0xc2c3b6 * 0x4 >> 0x2], _0x2a98f7 < 0x0 ? undefined : _0x2a98f7) : '';
        }
        return _0x443224;
      },
      "calcBufLength": function _0x44b3e0(_0x37cf14, _0x2dd290, _0x4b6539, _0x3e7594) {
        if (_0x4b6539 > 0x0) {
          return _0x3e7594 * _0x4b6539;
        }
        var _0x5cad7f = _0x2ab728.byteSizeByType[_0x2dd290 - 0x1400];
        return _0x37cf14 * _0x5cad7f * _0x3e7594;
      },
      "usedTempBuffers": [],
      "preDrawHandleClientVertexAttribBindings": function _0x2c2473(_0x4a964e) {
        _0x2ab728.resetBufferBinding = false;
        for (var _0x3e156a = 0x0; _0x3e156a < _0x2ab728.currentContext.maxVertexAttribs; ++_0x3e156a) {
          var _0x542968 = _0x2ab728.currentContext.clientBuffers[_0x3e156a];
          if (!_0x542968.clientside || !_0x542968.enabled) {
            continue;
          }
          _0x2ab728.resetBufferBinding = true;
          var _0x288ef6 = _0x2ab728.calcBufLength(_0x542968.size, _0x542968.type, _0x542968.stride, _0x4a964e);
          var _0x142ef4 = _0x2ab728.getTempVertexBuffer(_0x288ef6);
          _0x20ed22.bindBuffer(0x8892, _0x142ef4);
          _0x20ed22.bufferSubData(0x8892, 0x0, _0x18c91b.subarray(_0x542968.ptr, _0x542968.ptr + _0x288ef6));
          _0x542968.vertexAttribPointerAdaptor.call(_0x20ed22, _0x3e156a, _0x542968.size, _0x542968.type, _0x542968.normalized, _0x542968.stride, 0x0);
        }
      },
      "postDrawHandleClientVertexAttribBindings": function _0x4f1a27() {
        if (_0x2ab728.resetBufferBinding) {
          _0x20ed22.bindBuffer(0x8892, _0x2ab728.buffers[_0x20ed22.currentArrayBufferBinding]);
        }
      },
      "createContext": function (_0x4ee31c, _0x52cabe) {
        if (!_0x4ee31c.getContextSafariWebGL2Fixed) {
          _0x4ee31c.getContextSafariWebGL2Fixed = _0x4ee31c.getContext;
          function _0x40f987(_0x28a34c, _0x53b1f6) {
            var _0x50790a = _0x4ee31c.getContextSafariWebGL2Fixed(_0x28a34c, _0x53b1f6);
            return _0x28a34c == "webgl" == _0x50790a instanceof WebGLRenderingContext ? _0x50790a : null;
          }
          _0x4ee31c.getContext = _0x40f987;
        }
        var _0x54584f = _0x52cabe.majorVersion > 0x1 ? _0x4ee31c.getContext("webgl2", _0x52cabe) : _0x4ee31c.getContext("webgl", _0x52cabe);
        if (!_0x54584f) {
          return 0x0;
        }
        var _0x117d16 = _0x2ab728.registerContext(_0x54584f, _0x52cabe);
        return _0x117d16;
      },
      "registerContext": function (_0x2578b3, _0x4ff221) {
        var _0x3eda0c = _0x2ab728.getNewId(_0x2ab728.contexts);
        var _0x4a5df4 = {
          "handle": _0x3eda0c,
          "attributes": _0x4ff221,
          "version": _0x4ff221.majorVersion,
          "GLctx": _0x2578b3
        };
        if (_0x2578b3.canvas) {
          _0x2578b3.canvas.GLctxObject = _0x4a5df4;
        }
        _0x2ab728.contexts[_0x3eda0c] = _0x4a5df4;
        if (typeof _0x4ff221.enableExtensionsByDefault == "undefined" || _0x4ff221.enableExtensionsByDefault) {
          _0x2ab728.initExtensions(_0x4a5df4);
        }
        _0x4a5df4.maxVertexAttribs = _0x4a5df4.GLctx.getParameter(0x8869);
        _0x4a5df4.clientBuffers = [];
        for (var _0x16bc75 = 0x0; _0x16bc75 < _0x4a5df4.maxVertexAttribs; _0x16bc75++) {
          _0x4a5df4.clientBuffers[_0x16bc75] = {
            "enabled": false,
            "clientside": false,
            "size": 0x0,
            "type": 0x0,
            "normalized": 0x0,
            "stride": 0x0,
            "ptr": 0x0,
            "vertexAttribPointerAdaptor": null
          };
        }
        _0x2ab728.generateTempBuffers(false, _0x4a5df4);
        return _0x3eda0c;
      },
      "makeContextCurrent": function (_0x178853) {
        _0x2ab728.currentContext = _0x2ab728.contexts[_0x178853];
        _0x4bcfe1.ctx = _0x20ed22 = _0x2ab728.currentContext && _0x2ab728.currentContext.GLctx;
        return !(_0x178853 && !_0x20ed22);
      },
      "getContext": function (_0x4d3379) {
        return _0x2ab728.contexts[_0x4d3379];
      },
      "deleteContext": function (_0x58c19b) {
        if (_0x2ab728.currentContext === _0x2ab728.contexts[_0x58c19b]) {
          _0x2ab728.currentContext = null;
        }
        if (typeof _0x1d6235 == "object") {
          _0x1d6235.removeAllHandlersOnTarget(_0x2ab728.contexts[_0x58c19b].GLctx.canvas);
        }
        if (_0x2ab728.contexts[_0x58c19b] && _0x2ab728.contexts[_0x58c19b].GLctx.canvas) {
          _0x2ab728.contexts[_0x58c19b].GLctx.canvas.GLctxObject = undefined;
        }
        _0x2ab728.contexts[_0x58c19b] = null;
      },
      "initExtensions": function (_0x1c78bd) {
        if (!_0x1c78bd) {
          _0x1c78bd = _0x2ab728.currentContext;
        }
        if (_0x1c78bd.initExtensionsDone) {
          return;
        }
        _0x1c78bd.initExtensionsDone = true;
        var _0x5bc221 = _0x1c78bd.GLctx;
        _0x20a35b(_0x5bc221);
        _0x5a8970(_0x5bc221);
        _0x1b6ee6(_0x5bc221);
        _0x7aabcf(_0x5bc221);
        _0xbfdc42(_0x5bc221);
        if (_0x1c78bd.version >= 0x2) {
          _0x5bc221.disjointTimerQueryExt = _0x5bc221.getExtension("EXT_disjoint_timer_query_webgl2");
        }
        if (_0x1c78bd.version < 0x2 || !_0x5bc221.disjointTimerQueryExt) {
          _0x5bc221.disjointTimerQueryExt = _0x5bc221.getExtension("EXT_disjoint_timer_query");
        }
        _0x14d8d2(_0x5bc221);
        var _0x268748 = _0x5bc221.getSupportedExtensions() || [];
        _0x268748.forEach(function (_0x331a4d) {
          if (!_0x331a4d.includes("lose_context") && !_0x331a4d.includes("debug")) {
            _0x5bc221.getExtension(_0x331a4d);
          }
        });
      }
    };
    var _0x5c0616 = {};
    function _0xca7c4a() {
      if (!_0xca7c4a.strings) {
        var _0x4b1e2a = (typeof navigator == "object" && navigator.languages && navigator.languages[0x0] || "C").replace("-", "_") + ".UTF-8";
        var _0x3591f0 = {
          "USER": "web_user",
          "LOGNAME": "web_user",
          "PATH": "/",
          "PWD": "/",
          "HOME": "/home/web_user",
          "LANG": _0x4b1e2a,
          "_": _0x5877fe || "./this.program"
        };
        for (var _0x4ed7b1 in _0x5c0616) {
          if (_0x5c0616[_0x4ed7b1] === undefined) {
            delete _0x3591f0[_0x4ed7b1];
          } else {
            _0x3591f0[_0x4ed7b1] = _0x5c0616[_0x4ed7b1];
          }
        }
        var _0x1aa832 = [];
        for (var _0x4ed7b1 in _0x3591f0) {
          _0x1aa832.push(_0x4ed7b1 + "=" + _0x3591f0[_0x4ed7b1]);
        }
        _0xca7c4a.strings = _0x1aa832;
      }
      return _0xca7c4a.strings;
    }
    var _0x526991 = [];
    var _0x1ffef2 = [];
    var _0x4a9edb = [];
    var _0x3e947d = function (_0x1c2a30, _0x3e55df, _0x8e600e, _0x5c5603) {
      if (!_0x1c2a30) {
        _0x1c2a30 = this;
      }
      this.parent = _0x1c2a30;
      this.mount = _0x1c2a30.mount;
      this.mounted = null;
      this.id = 0x1++;
      this.name = _0x3e55df;
      this.mode = _0x8e600e;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = _0x5c5603;
    };
    Object.defineProperties(_0x3e947d.prototype, {
      "read": {
        "get": function () {
          return (this.mode & 365) === 365;
        },
        "set": function (_0x332b9b) {
          if (_0x332b9b) {
            this.mode |= 365;
          } else {
            this.mode &= -366;
          }
        }
      },
      "write": {
        "get": function () {
          return (this.mode & 0x92) === 0x92;
        },
        "set": function (_0x4557e2) {
          if (_0x4557e2) {
            this.mode |= 0x92;
          } else {
            this.mode &= -147;
          }
        }
      },
      "isFolder": {
        "get": function () {
          return (this.mode & 0xf000) === 0x4000;
        }
      },
      "isDevice": {
        "get": function () {
          return (this.mode & 0xf000) === 0x2000;
        }
      }
    });
    _0x278315.FSNode = _0x3e947d;
    _0x278315.staticInit();
    _0x4bcfe1.FS_createPath = _0x278315.createPath;
    _0x4bcfe1.FS_createDataFile = _0x278315.createDataFile;
    _0x4bcfe1.requestFullscreen = function _0x133193(_0x19dcde, _0x5cb286) {
      _0x20045a.requestFullscreen(_0x19dcde, _0x5cb286);
    };
    _0x4bcfe1.requestAnimationFrame = function _0x5d64d9(_0x18830d) {
      _0x20045a.requestAnimationFrame(_0x18830d);
    };
    _0x4bcfe1.setCanvasSize = function _0x58052b(_0x506989, _0x3838cc, _0x284b0e) {
      _0x20045a.setCanvasSize(_0x506989, _0x3838cc, _0x284b0e);
    };
    _0x4bcfe1.pauseMainLoop = function _0x1606ff() {
      _0x20045a.mainLoop.pause();
    };
    _0x4bcfe1.resumeMainLoop = function _0x3a0baa() {
      _0x20045a.mainLoop.resume();
    };
    _0x4bcfe1.getUserMedia = function _0x594a79() {
      _0x20045a.getUserMedia();
    };
    _0x4bcfe1.createContext = function _0x33adb6(_0x426f80, _0x1e76ed, _0x5458a7, _0x1b4dbd) {
      return _0x20045a.createContext(_0x426f80, _0x1e76ed, _0x5458a7, _0x1b4dbd);
    };
    var _0x20ed22;
    for (var _0xa3263e = 0x0; _0xa3263e < 0x20; ++_0xa3263e) {
      _0x526991.push(new Array(_0xa3263e));
    }
    var _0x487b63 = new Float32Array(0x120);
    for (var _0xa3263e = 0x0; _0xa3263e < 0x120; ++_0xa3263e) {
      _0x1ffef2[_0xa3263e] = _0x487b63.subarray(0x0, _0xa3263e + 0x1);
    }
    var _0x45dae3 = new Int32Array(0x120);
    for (var _0xa3263e = 0x0; _0xa3263e < 0x120; ++_0xa3263e) {
      _0x4a9edb[_0xa3263e] = _0x45dae3.subarray(0x0, _0xa3263e + 0x1);
    }
    function _0x3b0517(_0x20741e, _0x30b3af, _0x1b27a2) {
      var _0x21b73a = _0x1b27a2 > 0x0 ? _0x1b27a2 : _0x4d063a(_0x20741e) + 0x1;
      var _0x59abd0 = new Array(_0x21b73a);
      var _0x24b149 = _0x2f86f3(_0x20741e, _0x59abd0, 0x0, _0x59abd0.length);
      if (_0x30b3af) {
        _0x59abd0.length = _0x24b149;
      }
      return _0x59abd0;
    }
    var _0x5334a3 = _0x4bcfe1.___wasm_call_ctors = function () {
      return (_0x5334a3 = _0x4bcfe1.___wasm_call_ctors = _0x4bcfe1.asm.__wasm_call_ctors).apply(null, arguments);
    };
    var _0x1a342e = _0x4bcfe1._ReleaseKeys = function () {
      return (_0x1a342e = _0x4bcfe1._ReleaseKeys = _0x4bcfe1.asm.ReleaseKeys).apply(null, arguments);
    };
    var _0x3cd625 = _0x4bcfe1._getMemInfo = function () {
      return (_0x3cd625 = _0x4bcfe1._getMemInfo = _0x4bcfe1.asm.getMemInfo).apply(null, arguments);
    };
    var _0x3bed77 = _0x4bcfe1._SendMessageFloat = function () {
      return (_0x3bed77 = _0x4bcfe1._SendMessageFloat = _0x4bcfe1.asm.SendMessageFloat).apply(null, arguments);
    };
    var _0x1d2ab4 = _0x4bcfe1._SendMessageString = function () {
      return (_0x1d2ab4 = _0x4bcfe1._SendMessageString = _0x4bcfe1.asm.SendMessageString).apply(null, arguments);
    };
    var _0x5c8177 = _0x4bcfe1._SendMessage = function () {
      return (_0x5c8177 = _0x4bcfe1._SendMessage = _0x4bcfe1.asm.SendMessage).apply(null, arguments);
    };
    var _0x404ecd = _0x4bcfe1._SetFullscreen = function () {
      return (_0x404ecd = _0x4bcfe1._SetFullscreen = _0x4bcfe1.asm.SetFullscreen).apply(null, arguments);
    };
    var _0x4d1486 = _0x4bcfe1._main = function () {
      return (_0x4d1486 = _0x4bcfe1._main = _0x4bcfe1.asm.main).apply(null, arguments);
    };
    var _0x55cd07 = _0x4bcfe1.___errno_location = function () {
      return (_0x55cd07 = _0x4bcfe1.___errno_location = _0x4bcfe1.asm.__errno_location).apply(null, arguments);
    };
    var _0x1e1e7c = _0x4bcfe1.___dl_seterr = function () {
      return (_0x1e1e7c = _0x4bcfe1.___dl_seterr = _0x4bcfe1.asm.__dl_seterr).apply(null, arguments);
    };
    var _0x43d3ca = _0x4bcfe1._htonl = function () {
      return (_0x43d3ca = _0x4bcfe1._htonl = _0x4bcfe1.asm.htonl).apply(null, arguments);
    };
    var _0x373c28 = _0x4bcfe1._htons = function () {
      return (_0x373c28 = _0x4bcfe1._htons = _0x4bcfe1.asm.htons).apply(null, arguments);
    };
    var _0x5bda42 = _0x4bcfe1._ntohs = function () {
      return (_0x5bda42 = _0x4bcfe1._ntohs = _0x4bcfe1.asm.ntohs).apply(null, arguments);
    };
    var _0x3ebd1b = _0x4bcfe1._strlen = function () {
      return (_0x3ebd1b = _0x4bcfe1._strlen = _0x4bcfe1.asm.strlen).apply(null, arguments);
    };
    var _0x1f6602 = _0x4bcfe1._malloc = function () {
      return (_0x1f6602 = _0x4bcfe1._malloc = _0x4bcfe1.asm.malloc).apply(null, arguments);
    };
    var _0x14a4bc = _0x4bcfe1._free = function () {
      return (_0x14a4bc = _0x4bcfe1._free = _0x4bcfe1.asm.free).apply(null, arguments);
    };
    var _0x4469d9 = _0x4bcfe1._emscripten_builtin_memalign = function () {
      return (_0x4469d9 = _0x4bcfe1._emscripten_builtin_memalign = _0x4bcfe1.asm.emscripten_builtin_memalign).apply(null, arguments);
    };
    var _0x3444d6 = _0x4bcfe1._setThrew = function () {
      return (_0x3444d6 = _0x4bcfe1._setThrew = _0x4bcfe1.asm.setThrew).apply(null, arguments);
    };
    var _0x39ed5c = _0x4bcfe1._saveSetjmp = function () {
      return (_0x39ed5c = _0x4bcfe1._saveSetjmp = _0x4bcfe1.asm.saveSetjmp).apply(null, arguments);
    };
    var _0x381588 = _0x4bcfe1.stackSave = function () {
      return (_0x381588 = _0x4bcfe1.stackSave = _0x4bcfe1.asm.stackSave).apply(null, arguments);
    };
    var _0x770e87 = _0x4bcfe1.stackRestore = function () {
      return (_0x770e87 = _0x4bcfe1.stackRestore = _0x4bcfe1.asm.stackRestore).apply(null, arguments);
    };
    var _0x1d99d1 = _0x4bcfe1.stackAlloc = function () {
      return (_0x1d99d1 = _0x4bcfe1.stackAlloc = _0x4bcfe1.asm.stackAlloc).apply(null, arguments);
    };
    var _0x15648c = _0x4bcfe1.___cxa_can_catch = function () {
      return (_0x15648c = _0x4bcfe1.___cxa_can_catch = _0x4bcfe1.asm.__cxa_can_catch).apply(null, arguments);
    };
    var _0x158620 = _0x4bcfe1.___cxa_is_pointer_type = function () {
      return (_0x158620 = _0x4bcfe1.___cxa_is_pointer_type = _0x4bcfe1.asm.__cxa_is_pointer_type).apply(null, arguments);
    };
    var _0x4b0972 = _0x4bcfe1.dynCall_iidiiii = function () {
      return (_0x4b0972 = _0x4bcfe1.dynCall_iidiiii = _0x4bcfe1.asm.dynCall_iidiiii).apply(null, arguments);
    };
    var _0x3b5585 = _0x4bcfe1.dynCall_vii = function () {
      return (_0x3b5585 = _0x4bcfe1.dynCall_vii = _0x4bcfe1.asm.dynCall_vii).apply(null, arguments);
    };
    var _0x3ba9fb = _0x4bcfe1.dynCall_iiii = function () {
      return (_0x3ba9fb = _0x4bcfe1.dynCall_iiii = _0x4bcfe1.asm.dynCall_iiii).apply(null, arguments);
    };
    var _0x5ea6d0 = _0x4bcfe1.dynCall_iii = function () {
      return (_0x5ea6d0 = _0x4bcfe1.dynCall_iii = _0x4bcfe1.asm.dynCall_iii).apply(null, arguments);
    };
    var _0x89bc0e = _0x4bcfe1.dynCall_ii = function () {
      return (_0x89bc0e = _0x4bcfe1.dynCall_ii = _0x4bcfe1.asm.dynCall_ii).apply(null, arguments);
    };
    var _0x363a1a = _0x4bcfe1.dynCall_jiji = function () {
      return (_0x363a1a = _0x4bcfe1.dynCall_jiji = _0x4bcfe1.asm.dynCall_jiji).apply(null, arguments);
    };
    var _0xe4a07d = _0x4bcfe1.dynCall_vi = function () {
      return (_0xe4a07d = _0x4bcfe1.dynCall_vi = _0x4bcfe1.asm.dynCall_vi).apply(null, arguments);
    };
    var _0xbe10b6 = _0x4bcfe1.dynCall_iiiii = function () {
      return (_0xbe10b6 = _0x4bcfe1.dynCall_iiiii = _0x4bcfe1.asm.dynCall_iiiii).apply(null, arguments);
    };
    var _0x14e1db = _0x4bcfe1.dynCall_viii = function () {
      return (_0x14e1db = _0x4bcfe1.dynCall_viii = _0x4bcfe1.asm.dynCall_viii).apply(null, arguments);
    };
    var _0x2b31cb = _0x4bcfe1.dynCall_v = function () {
      return (_0x2b31cb = _0x4bcfe1.dynCall_v = _0x4bcfe1.asm.dynCall_v).apply(null, arguments);
    };
    var _0x53694d = _0x4bcfe1.dynCall_viiiiii = function () {
      return (_0x53694d = _0x4bcfe1.dynCall_viiiiii = _0x4bcfe1.asm.dynCall_viiiiii).apply(null, arguments);
    };
    var _0x262251 = _0x4bcfe1.dynCall_viiiii = function () {
      return (_0x262251 = _0x4bcfe1.dynCall_viiiii = _0x4bcfe1.asm.dynCall_viiiii).apply(null, arguments);
    };
    var _0x1dcc7b = _0x4bcfe1.dynCall_viiii = function () {
      return (_0x1dcc7b = _0x4bcfe1.dynCall_viiii = _0x4bcfe1.asm.dynCall_viiii).apply(null, arguments);
    };
    var _0x59dcc2 = _0x4bcfe1.dynCall_iiiiii = function () {
      return (_0x59dcc2 = _0x4bcfe1.dynCall_iiiiii = _0x4bcfe1.asm.dynCall_iiiiii).apply(null, arguments);
    };
    var _0x1e0852 = _0x4bcfe1.dynCall_iiiiiiii = function () {
      return (_0x1e0852 = _0x4bcfe1.dynCall_iiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiii).apply(null, arguments);
    };
    var _0x45a414 = _0x4bcfe1.dynCall_iiijiii = function () {
      return (_0x45a414 = _0x4bcfe1.dynCall_iiijiii = _0x4bcfe1.asm.dynCall_iiijiii).apply(null, arguments);
    };
    var _0x3f3b60 = _0x4bcfe1.dynCall_iij = function () {
      return (_0x3f3b60 = _0x4bcfe1.dynCall_iij = _0x4bcfe1.asm.dynCall_iij).apply(null, arguments);
    };
    var _0x5415c9 = _0x4bcfe1.dynCall_i = function () {
      return (_0x5415c9 = _0x4bcfe1.dynCall_i = _0x4bcfe1.asm.dynCall_i).apply(null, arguments);
    };
    var _0x476e9a = _0x4bcfe1.dynCall_iiiiiii = function () {
      return (_0x476e9a = _0x4bcfe1.dynCall_iiiiiii = _0x4bcfe1.asm.dynCall_iiiiiii).apply(null, arguments);
    };
    var _0x256fad = _0x4bcfe1.dynCall_jii = function () {
      return (_0x256fad = _0x4bcfe1.dynCall_jii = _0x4bcfe1.asm.dynCall_jii).apply(null, arguments);
    };
    var _0x23e9d4 = _0x4bcfe1.dynCall_iiiifii = function () {
      return (_0x23e9d4 = _0x4bcfe1.dynCall_iiiifii = _0x4bcfe1.asm.dynCall_iiiifii).apply(null, arguments);
    };
    var _0x562511 = _0x4bcfe1.dynCall_iiiijii = function () {
      return (_0x562511 = _0x4bcfe1.dynCall_iiiijii = _0x4bcfe1.asm.dynCall_iiiijii).apply(null, arguments);
    };
    var _0x59e8fd = _0x4bcfe1.dynCall_iiiidii = function () {
      return (_0x59e8fd = _0x4bcfe1.dynCall_iiiidii = _0x4bcfe1.asm.dynCall_iiiidii).apply(null, arguments);
    };
    var _0x2ffa87 = _0x4bcfe1.dynCall_viji = function () {
      return (_0x2ffa87 = _0x4bcfe1.dynCall_viji = _0x4bcfe1.asm.dynCall_viji).apply(null, arguments);
    };
    var _0x185a31 = _0x4bcfe1.dynCall_viiji = function () {
      return (_0x185a31 = _0x4bcfe1.dynCall_viiji = _0x4bcfe1.asm.dynCall_viiji).apply(null, arguments);
    };
    var _0x469d59 = _0x4bcfe1.dynCall_iiifii = function () {
      return (_0x469d59 = _0x4bcfe1.dynCall_iiifii = _0x4bcfe1.asm.dynCall_iiifii).apply(null, arguments);
    };
    var _0x28da8d = _0x4bcfe1.dynCall_viifi = function () {
      return (_0x28da8d = _0x4bcfe1.dynCall_viifi = _0x4bcfe1.asm.dynCall_viifi).apply(null, arguments);
    };
    var _0x1a08b0 = _0x4bcfe1.dynCall_vidi = function () {
      return (_0x1a08b0 = _0x4bcfe1.dynCall_vidi = _0x4bcfe1.asm.dynCall_vidi).apply(null, arguments);
    };
    var _0x5c8bd0 = _0x4bcfe1.dynCall_viidi = function () {
      return (_0x5c8bd0 = _0x4bcfe1.dynCall_viidi = _0x4bcfe1.asm.dynCall_viidi).apply(null, arguments);
    };
    var _0x1cce28 = _0x4bcfe1.dynCall_vifi = function () {
      return (_0x1cce28 = _0x4bcfe1.dynCall_vifi = _0x4bcfe1.asm.dynCall_vifi).apply(null, arguments);
    };
    var _0x1df748 = _0x4bcfe1.dynCall_iiiiiiiiii = function () {
      return (_0x1df748 = _0x4bcfe1.dynCall_iiiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiiiii).apply(null, arguments);
    };
    var _0x17a7d2 = _0x4bcfe1.dynCall_viiiiiii = function () {
      return (_0x17a7d2 = _0x4bcfe1.dynCall_viiiiiii = _0x4bcfe1.asm.dynCall_viiiiiii).apply(null, arguments);
    };
    var _0x5a9796 = _0x4bcfe1.dynCall_iiiiiiiii = function () {
      return (_0x5a9796 = _0x4bcfe1.dynCall_iiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiiii).apply(null, arguments);
    };
    var _0x1e9537 = _0x4bcfe1.dynCall_viiiiiiiii = function () {
      return (_0x1e9537 = _0x4bcfe1.dynCall_viiiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiiii).apply(null, arguments);
    };
    var _0x5713c6 = _0x4bcfe1.dynCall_jjii = function () {
      return (_0x5713c6 = _0x4bcfe1.dynCall_jjii = _0x4bcfe1.asm.dynCall_jjii).apply(null, arguments);
    };
    var _0x444c81 = _0x4bcfe1.dynCall_viiiiiiii = function () {
      return (_0x444c81 = _0x4bcfe1.dynCall_viiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiii).apply(null, arguments);
    };
    var _0x2a78a3 = _0x4bcfe1.dynCall_viidii = function () {
      return (_0x2a78a3 = _0x4bcfe1.dynCall_viidii = _0x4bcfe1.asm.dynCall_viidii).apply(null, arguments);
    };
    var _0x3f350e = _0x4bcfe1.dynCall_jji = function () {
      return (_0x3f350e = _0x4bcfe1.dynCall_jji = _0x4bcfe1.asm.dynCall_jji).apply(null, arguments);
    };
    var _0x5dd778 = _0x4bcfe1.dynCall_viijii = function () {
      return (_0x5dd778 = _0x4bcfe1.dynCall_viijii = _0x4bcfe1.asm.dynCall_viijii).apply(null, arguments);
    };
    var _0x1d0e1b = _0x4bcfe1.dynCall_iiji = function () {
      return (_0x1d0e1b = _0x4bcfe1.dynCall_iiji = _0x4bcfe1.asm.dynCall_iiji).apply(null, arguments);
    };
    var _0x14256a = _0x4bcfe1.dynCall_viiiji = function () {
      return (_0x14256a = _0x4bcfe1.dynCall_viiiji = _0x4bcfe1.asm.dynCall_viiiji).apply(null, arguments);
    };
    var _0x1c37ed = _0x4bcfe1.dynCall_iijii = function () {
      return (_0x1c37ed = _0x4bcfe1.dynCall_iijii = _0x4bcfe1.asm.dynCall_iijii).apply(null, arguments);
    };
    var _0x55ac1a = _0x4bcfe1.dynCall_iiddi = function () {
      return (_0x55ac1a = _0x4bcfe1.dynCall_iiddi = _0x4bcfe1.asm.dynCall_iiddi).apply(null, arguments);
    };
    var _0x515b67 = _0x4bcfe1.dynCall_diidi = function () {
      return (_0x515b67 = _0x4bcfe1.dynCall_diidi = _0x4bcfe1.asm.dynCall_diidi).apply(null, arguments);
    };
    var _0x55957b = _0x4bcfe1.dynCall_diiii = function () {
      return (_0x55957b = _0x4bcfe1.dynCall_diiii = _0x4bcfe1.asm.dynCall_diiii).apply(null, arguments);
    };
    var _0x34a387 = _0x4bcfe1.dynCall_jiiii = function () {
      return (_0x34a387 = _0x4bcfe1.dynCall_jiiii = _0x4bcfe1.asm.dynCall_jiiii).apply(null, arguments);
    };
    var _0x2d43d0 = _0x4bcfe1.dynCall_fiiii = function () {
      return (_0x2d43d0 = _0x4bcfe1.dynCall_fiiii = _0x4bcfe1.asm.dynCall_fiiii).apply(null, arguments);
    };
    var _0x267b85 = _0x4bcfe1.dynCall_jiiji = function () {
      return (_0x267b85 = _0x4bcfe1.dynCall_jiiji = _0x4bcfe1.asm.dynCall_jiiji).apply(null, arguments);
    };
    var _0x3d09cb = _0x4bcfe1.dynCall_fiifi = function () {
      return (_0x3d09cb = _0x4bcfe1.dynCall_fiifi = _0x4bcfe1.asm.dynCall_fiifi).apply(null, arguments);
    };
    var _0x5d2b96 = _0x4bcfe1.dynCall_iiffi = function () {
      return (_0x5d2b96 = _0x4bcfe1.dynCall_iiffi = _0x4bcfe1.asm.dynCall_iiffi).apply(null, arguments);
    };
    var _0x2f5373 = _0x4bcfe1.dynCall_iiiifi = function () {
      return (_0x2f5373 = _0x4bcfe1.dynCall_iiiifi = _0x4bcfe1.asm.dynCall_iiiifi).apply(null, arguments);
    };
    var _0x527843 = _0x4bcfe1.dynCall_viiiiiiiiii = function () {
      return (_0x527843 = _0x4bcfe1.dynCall_viiiiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiiiii).apply(null, arguments);
    };
    var _0x52ed12 = _0x4bcfe1.dynCall_viiiiiiiiiii = function () {
      return (_0x52ed12 = _0x4bcfe1.dynCall_viiiiiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiiiiii).apply(null, arguments);
    };
    var _0x2c5a99 = _0x4bcfe1.dynCall_viijji = function () {
      return (_0x2c5a99 = _0x4bcfe1.dynCall_viijji = _0x4bcfe1.asm.dynCall_viijji).apply(null, arguments);
    };
    var _0xb10a21 = _0x4bcfe1.dynCall_ji = function () {
      return (_0xb10a21 = _0x4bcfe1.dynCall_ji = _0x4bcfe1.asm.dynCall_ji).apply(null, arguments);
    };
    var _0x92ce44 = _0x4bcfe1.dynCall_jdi = function () {
      return (_0x92ce44 = _0x4bcfe1.dynCall_jdi = _0x4bcfe1.asm.dynCall_jdi).apply(null, arguments);
    };
    var _0xe60327 = _0x4bcfe1.dynCall_vijiii = function () {
      return (_0xe60327 = _0x4bcfe1.dynCall_vijiii = _0x4bcfe1.asm.dynCall_vijiii).apply(null, arguments);
    };
    var _0x44420d = _0x4bcfe1.dynCall_ijiii = function () {
      return (_0x44420d = _0x4bcfe1.dynCall_ijiii = _0x4bcfe1.asm.dynCall_ijiii).apply(null, arguments);
    };
    var _0x329f82 = _0x4bcfe1.dynCall_viijiii = function () {
      return (_0x329f82 = _0x4bcfe1.dynCall_viijiii = _0x4bcfe1.asm.dynCall_viijiii).apply(null, arguments);
    };
    var _0x1f4297 = _0x4bcfe1.dynCall_vjiii = function () {
      return (_0x1f4297 = _0x4bcfe1.dynCall_vjiii = _0x4bcfe1.asm.dynCall_vjiii).apply(null, arguments);
    };
    var _0x2fe3ae = _0x4bcfe1.dynCall_vjiiiiii = function () {
      return (_0x2fe3ae = _0x4bcfe1.dynCall_vjiiiiii = _0x4bcfe1.asm.dynCall_vjiiiiii).apply(null, arguments);
    };
    var _0x14955d = _0x4bcfe1.dynCall_vijiiii = function () {
      return (_0x14955d = _0x4bcfe1.dynCall_vijiiii = _0x4bcfe1.asm.dynCall_vijiiii).apply(null, arguments);
    };
    var _0x52b293 = _0x4bcfe1.dynCall_vijiiiiii = function () {
      return (_0x52b293 = _0x4bcfe1.dynCall_vijiiiiii = _0x4bcfe1.asm.dynCall_vijiiiiii).apply(null, arguments);
    };
    var _0x1174c8 = _0x4bcfe1.dynCall_iiijii = function () {
      return (_0x1174c8 = _0x4bcfe1.dynCall_iiijii = _0x4bcfe1.asm.dynCall_iiijii).apply(null, arguments);
    };
    var _0x79c311 = _0x4bcfe1.dynCall_fi = function () {
      return (_0x79c311 = _0x4bcfe1.dynCall_fi = _0x4bcfe1.asm.dynCall_fi).apply(null, arguments);
    };
    var _0x4257c1 = _0x4bcfe1.dynCall_viijjii = function () {
      return (_0x4257c1 = _0x4bcfe1.dynCall_viijjii = _0x4bcfe1.asm.dynCall_viijjii).apply(null, arguments);
    };
    var _0x465c65 = _0x4bcfe1.dynCall_dii = function () {
      return (_0x465c65 = _0x4bcfe1.dynCall_dii = _0x4bcfe1.asm.dynCall_dii).apply(null, arguments);
    };
    var _0x106722 = _0x4bcfe1.dynCall_viiiifi = function () {
      return (_0x106722 = _0x4bcfe1.dynCall_viiiifi = _0x4bcfe1.asm.dynCall_viiiifi).apply(null, arguments);
    };
    var _0x392e52 = _0x4bcfe1.dynCall_viiidii = function () {
      return (_0x392e52 = _0x4bcfe1.dynCall_viiidii = _0x4bcfe1.asm.dynCall_viiidii).apply(null, arguments);
    };
    var _0x33fb98 = _0x4bcfe1.dynCall_jiii = function () {
      return (_0x33fb98 = _0x4bcfe1.dynCall_jiii = _0x4bcfe1.asm.dynCall_jiii).apply(null, arguments);
    };
    var _0x1eb6f6 = _0x4bcfe1.dynCall_ddiii = function () {
      return (_0x1eb6f6 = _0x4bcfe1.dynCall_ddiii = _0x4bcfe1.asm.dynCall_ddiii).apply(null, arguments);
    };
    var _0x10241d = _0x4bcfe1.dynCall_ijji = function () {
      return (_0x10241d = _0x4bcfe1.dynCall_ijji = _0x4bcfe1.asm.dynCall_ijji).apply(null, arguments);
    };
    var _0x307fec = _0x4bcfe1.dynCall_jjji = function () {
      return (_0x307fec = _0x4bcfe1.dynCall_jjji = _0x4bcfe1.asm.dynCall_jjji).apply(null, arguments);
    };
    var _0x5dbd75 = _0x4bcfe1.dynCall_iiiji = function () {
      return (_0x5dbd75 = _0x4bcfe1.dynCall_iiiji = _0x4bcfe1.asm.dynCall_iiiji).apply(null, arguments);
    };
    var _0xab2e6f = _0x4bcfe1.dynCall_vijjji = function () {
      return (_0xab2e6f = _0x4bcfe1.dynCall_vijjji = _0x4bcfe1.asm.dynCall_vijjji).apply(null, arguments);
    };
    var _0x5735e6 = _0x4bcfe1.dynCall_viijiiijiiii = function () {
      return (_0x5735e6 = _0x4bcfe1.dynCall_viijiiijiiii = _0x4bcfe1.asm.dynCall_viijiiijiiii).apply(null, arguments);
    };
    var _0x40d23a = _0x4bcfe1.dynCall_fii = function () {
      return (_0x40d23a = _0x4bcfe1.dynCall_fii = _0x4bcfe1.asm.dynCall_fii).apply(null, arguments);
    };
    var _0x1cdbca = _0x4bcfe1.dynCall_ifi = function () {
      return (_0x1cdbca = _0x4bcfe1.dynCall_ifi = _0x4bcfe1.asm.dynCall_ifi).apply(null, arguments);
    };
    var _0x4fdc1c = _0x4bcfe1.dynCall_idi = function () {
      return (_0x4fdc1c = _0x4bcfe1.dynCall_idi = _0x4bcfe1.asm.dynCall_idi).apply(null, arguments);
    };
    var _0xea456e = _0x4bcfe1.dynCall_fffi = function () {
      return (_0xea456e = _0x4bcfe1.dynCall_fffi = _0x4bcfe1.asm.dynCall_fffi).apply(null, arguments);
    };
    var _0x52a567 = _0x4bcfe1.dynCall_dddi = function () {
      return (_0x52a567 = _0x4bcfe1.dynCall_dddi = _0x4bcfe1.asm.dynCall_dddi).apply(null, arguments);
    };
    var _0x1e7d4b = _0x4bcfe1.dynCall_fiii = function () {
      return (_0x1e7d4b = _0x4bcfe1.dynCall_fiii = _0x4bcfe1.asm.dynCall_fiii).apply(null, arguments);
    };
    var _0x4892fb = _0x4bcfe1.dynCall_diii = function () {
      return (_0x4892fb = _0x4bcfe1.dynCall_diii = _0x4bcfe1.asm.dynCall_diii).apply(null, arguments);
    };
    var _0x43d114 = _0x4bcfe1.dynCall_iidi = function () {
      return (_0x43d114 = _0x4bcfe1.dynCall_iidi = _0x4bcfe1.asm.dynCall_iidi).apply(null, arguments);
    };
    var _0x3b09f6 = _0x4bcfe1.dynCall_iifi = function () {
      return (_0x3b09f6 = _0x4bcfe1.dynCall_iifi = _0x4bcfe1.asm.dynCall_iifi).apply(null, arguments);
    };
    var _0x5422df = _0x4bcfe1.dynCall_dji = function () {
      return (_0x5422df = _0x4bcfe1.dynCall_dji = _0x4bcfe1.asm.dynCall_dji).apply(null, arguments);
    };
    var _0x2ce225 = _0x4bcfe1.dynCall_iji = function () {
      return (_0x2ce225 = _0x4bcfe1.dynCall_iji = _0x4bcfe1.asm.dynCall_iji).apply(null, arguments);
    };
    var _0xba5a94 = _0x4bcfe1.dynCall_vifii = function () {
      return (_0xba5a94 = _0x4bcfe1.dynCall_vifii = _0x4bcfe1.asm.dynCall_vifii).apply(null, arguments);
    };
    var _0xdcba70 = _0x4bcfe1.dynCall_viiiifii = function () {
      return (_0xdcba70 = _0x4bcfe1.dynCall_viiiifii = _0x4bcfe1.asm.dynCall_viiiifii).apply(null, arguments);
    };
    var _0x22716e = _0x4bcfe1.dynCall_viiffi = function () {
      return (_0x22716e = _0x4bcfe1.dynCall_viiffi = _0x4bcfe1.asm.dynCall_viiffi).apply(null, arguments);
    };
    var _0x3a204e = _0x4bcfe1.dynCall_fifi = function () {
      return (_0x3a204e = _0x4bcfe1.dynCall_fifi = _0x4bcfe1.asm.dynCall_fifi).apply(null, arguments);
    };
    var _0x287019 = _0x4bcfe1.dynCall_fiffi = function () {
      return (_0x287019 = _0x4bcfe1.dynCall_fiffi = _0x4bcfe1.asm.dynCall_fiffi).apply(null, arguments);
    };
    var _0x4ef2ab = _0x4bcfe1.dynCall_fifffi = function () {
      return (_0x4ef2ab = _0x4bcfe1.dynCall_fifffi = _0x4bcfe1.asm.dynCall_fifffi).apply(null, arguments);
    };
    var _0x107bd = _0x4bcfe1.dynCall_viiiijiii = function () {
      return (_0x107bd = _0x4bcfe1.dynCall_viiiijiii = _0x4bcfe1.asm.dynCall_viiiijiii).apply(null, arguments);
    };
    var _0x5961cd = _0x4bcfe1.dynCall_iiiiij = function () {
      return (_0x5961cd = _0x4bcfe1.dynCall_iiiiij = _0x4bcfe1.asm.dynCall_iiiiij).apply(null, arguments);
    };
    var _0x5616c4 = _0x4bcfe1.dynCall_iijiiii = function () {
      return (_0x5616c4 = _0x4bcfe1.dynCall_iijiiii = _0x4bcfe1.asm.dynCall_iijiiii).apply(null, arguments);
    };
    var _0x82a43b = _0x4bcfe1.dynCall_jijiii = function () {
      return (_0x82a43b = _0x4bcfe1.dynCall_jijiii = _0x4bcfe1.asm.dynCall_jijiii).apply(null, arguments);
    };
    var _0x11dcbc = _0x4bcfe1.dynCall_iijiiiiii = function () {
      return (_0x11dcbc = _0x4bcfe1.dynCall_iijiiiiii = _0x4bcfe1.asm.dynCall_iijiiiiii).apply(null, arguments);
    };
    var _0xa0c2b6 = _0x4bcfe1.dynCall_iijjiiiiii = function () {
      return (_0xa0c2b6 = _0x4bcfe1.dynCall_iijjiiiiii = _0x4bcfe1.asm.dynCall_iijjiiiiii).apply(null, arguments);
    };
    var _0x2db8b2 = _0x4bcfe1.dynCall_iiiijjii = function () {
      return (_0x2db8b2 = _0x4bcfe1.dynCall_iiiijjii = _0x4bcfe1.asm.dynCall_iiiijjii).apply(null, arguments);
    };
    var _0x5a2fd2 = _0x4bcfe1.dynCall_viifii = function () {
      return (_0x5a2fd2 = _0x4bcfe1.dynCall_viifii = _0x4bcfe1.asm.dynCall_viifii).apply(null, arguments);
    };
    var _0x11bc7b = _0x4bcfe1.dynCall_iiifi = function () {
      return (_0x11bc7b = _0x4bcfe1.dynCall_iiifi = _0x4bcfe1.asm.dynCall_iiifi).apply(null, arguments);
    };
    var _0xd00f09 = _0x4bcfe1.dynCall_fiffffi = function () {
      return (_0xd00f09 = _0x4bcfe1.dynCall_fiffffi = _0x4bcfe1.asm.dynCall_fiffffi).apply(null, arguments);
    };
    var _0x16daf4 = _0x4bcfe1.dynCall_iiiiji = function () {
      return (_0x16daf4 = _0x4bcfe1.dynCall_iiiiji = _0x4bcfe1.asm.dynCall_iiiiji).apply(null, arguments);
    };
    var _0x1d1cb6 = _0x4bcfe1.dynCall_viiiiiiiiiiiii = function () {
      return (_0x1d1cb6 = _0x4bcfe1.dynCall_viiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x4dc0e1 = _0x4bcfe1.dynCall_viiiiiiiiiiii = function () {
      return (_0x4dc0e1 = _0x4bcfe1.dynCall_viiiiiiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiiiiiii).apply(null, arguments);
    };
    var _0x2cafc2 = _0x4bcfe1.dynCall_viiiiiiiiiiiiii = function () {
      return (_0x2cafc2 = _0x4bcfe1.dynCall_viiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x49e505 = _0x4bcfe1.dynCall_viiiiiiiiiiiiiii = function () {
      return (_0x49e505 = _0x4bcfe1.dynCall_viiiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x580621 = _0x4bcfe1.dynCall_viiiiiiiiiiiiiiii = function () {
      return (_0x580621 = _0x4bcfe1.dynCall_viiiiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x403bee = _0x4bcfe1.dynCall_viiiiiiiiiiiiiiiii = function () {
      return (_0x403bee = _0x4bcfe1.dynCall_viiiiiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x1eb96d = _0x4bcfe1.dynCall_viiiiiiiiiiiiiiiiii = function () {
      return (_0x1eb96d = _0x4bcfe1.dynCall_viiiiiiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x263173 = _0x4bcfe1.dynCall_vijii = function () {
      return (_0x263173 = _0x4bcfe1.dynCall_vijii = _0x4bcfe1.asm.dynCall_vijii).apply(null, arguments);
    };
    var _0x28bd4a = _0x4bcfe1.dynCall_viiidi = function () {
      return (_0x28bd4a = _0x4bcfe1.dynCall_viiidi = _0x4bcfe1.asm.dynCall_viiidi).apply(null, arguments);
    };
    var _0x2b7ac4 = _0x4bcfe1.dynCall_viiifi = function () {
      return (_0x2b7ac4 = _0x4bcfe1.dynCall_viiifi = _0x4bcfe1.asm.dynCall_viiifi).apply(null, arguments);
    };
    var _0x1323e7 = _0x4bcfe1.dynCall_vijijii = function () {
      return (_0x1323e7 = _0x4bcfe1.dynCall_vijijii = _0x4bcfe1.asm.dynCall_vijijii).apply(null, arguments);
    };
    var _0x77da4f = _0x4bcfe1.dynCall_viiiiiiiiiiiiiiiiiii = function () {
      return (_0x77da4f = _0x4bcfe1.dynCall_viiiiiiiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_viiiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x94ce4b = _0x4bcfe1.dynCall_didi = function () {
      return (_0x94ce4b = _0x4bcfe1.dynCall_didi = _0x4bcfe1.asm.dynCall_didi).apply(null, arguments);
    };
    var _0x57606d = _0x4bcfe1.dynCall_jijii = function () {
      return (_0x57606d = _0x4bcfe1.dynCall_jijii = _0x4bcfe1.asm.dynCall_jijii).apply(null, arguments);
    };
    var _0x1ab10f = _0x4bcfe1.dynCall_jidi = function () {
      return (_0x1ab10f = _0x4bcfe1.dynCall_jidi = _0x4bcfe1.asm.dynCall_jidi).apply(null, arguments);
    };
    var _0x519b13 = _0x4bcfe1.dynCall_fiiffi = function () {
      return (_0x519b13 = _0x4bcfe1.dynCall_fiiffi = _0x4bcfe1.asm.dynCall_fiiffi).apply(null, arguments);
    };
    var _0x49e422 = _0x4bcfe1.dynCall_viiififii = function () {
      return (_0x49e422 = _0x4bcfe1.dynCall_viiififii = _0x4bcfe1.asm.dynCall_viiififii).apply(null, arguments);
    };
    var _0x37d70b = _0x4bcfe1.dynCall_iijji = function () {
      return (_0x37d70b = _0x4bcfe1.dynCall_iijji = _0x4bcfe1.asm.dynCall_iijji).apply(null, arguments);
    };
    var _0x2f4f97 = _0x4bcfe1.dynCall_j = function () {
      return (_0x2f4f97 = _0x4bcfe1.dynCall_j = _0x4bcfe1.asm.dynCall_j).apply(null, arguments);
    };
    var _0x424a42 = _0x4bcfe1.dynCall_iiiiiiiiiji = function () {
      return (_0x424a42 = _0x4bcfe1.dynCall_iiiiiiiiiji = _0x4bcfe1.asm.dynCall_iiiiiiiiiji).apply(null, arguments);
    };
    var _0x1a5a5b = _0x4bcfe1.dynCall_vji = function () {
      return (_0x1a5a5b = _0x4bcfe1.dynCall_vji = _0x4bcfe1.asm.dynCall_vji).apply(null, arguments);
    };
    var _0x591085 = _0x4bcfe1.dynCall_vjjjiiii = function () {
      return (_0x591085 = _0x4bcfe1.dynCall_vjjjiiii = _0x4bcfe1.asm.dynCall_vjjjiiii).apply(null, arguments);
    };
    var _0x196001 = _0x4bcfe1.dynCall_vjiiiii = function () {
      return (_0x196001 = _0x4bcfe1.dynCall_vjiiiii = _0x4bcfe1.asm.dynCall_vjiiiii).apply(null, arguments);
    };
    var _0x2cb1ee = _0x4bcfe1.dynCall_iijiii = function () {
      return (_0x2cb1ee = _0x4bcfe1.dynCall_iijiii = _0x4bcfe1.asm.dynCall_iijiii).apply(null, arguments);
    };
    var _0x4866bc = _0x4bcfe1.dynCall_jiiiii = function () {
      return (_0x4866bc = _0x4bcfe1.dynCall_jiiiii = _0x4bcfe1.asm.dynCall_jiiiii).apply(null, arguments);
    };
    var _0x460671 = _0x4bcfe1.dynCall_viffi = function () {
      return (_0x460671 = _0x4bcfe1.dynCall_viffi = _0x4bcfe1.asm.dynCall_viffi).apply(null, arguments);
    };
    var _0x372774 = _0x4bcfe1.dynCall_vffi = function () {
      return (_0x372774 = _0x4bcfe1.dynCall_vffi = _0x4bcfe1.asm.dynCall_vffi).apply(null, arguments);
    };
    var _0x2d59c0 = _0x4bcfe1.dynCall_viiifiii = function () {
      return (_0x2d59c0 = _0x4bcfe1.dynCall_viiifiii = _0x4bcfe1.asm.dynCall_viiifiii).apply(null, arguments);
    };
    var _0x38b795 = _0x4bcfe1.dynCall_vifiiiii = function () {
      return (_0x38b795 = _0x4bcfe1.dynCall_vifiiiii = _0x4bcfe1.asm.dynCall_vifiiiii).apply(null, arguments);
    };
    var _0x513af6 = _0x4bcfe1.dynCall_viffffiiii = function () {
      return (_0x513af6 = _0x4bcfe1.dynCall_viffffiiii = _0x4bcfe1.asm.dynCall_viffffiiii).apply(null, arguments);
    };
    var _0x5c76da = _0x4bcfe1.dynCall_vfiiiii = function () {
      return (_0x5c76da = _0x4bcfe1.dynCall_vfiiiii = _0x4bcfe1.asm.dynCall_vfiiiii).apply(null, arguments);
    };
    var _0x51d61a = _0x4bcfe1.dynCall_vffffiiii = function () {
      return (_0x51d61a = _0x4bcfe1.dynCall_vffffiiii = _0x4bcfe1.asm.dynCall_vffffiiii).apply(null, arguments);
    };
    var _0x540fcd = _0x4bcfe1.dynCall_iifffi = function () {
      return (_0x540fcd = _0x4bcfe1.dynCall_iifffi = _0x4bcfe1.asm.dynCall_iifffi).apply(null, arguments);
    };
    var _0x4188b5 = _0x4bcfe1.dynCall_iiffffi = function () {
      return (_0x4188b5 = _0x4bcfe1.dynCall_iiffffi = _0x4bcfe1.asm.dynCall_iiffffi).apply(null, arguments);
    };
    var _0x218fe9 = _0x4bcfe1.dynCall_iifii = function () {
      return (_0x218fe9 = _0x4bcfe1.dynCall_iifii = _0x4bcfe1.asm.dynCall_iifii).apply(null, arguments);
    };
    var _0x49063b = _0x4bcfe1.dynCall_viiiifiii = function () {
      return (_0x49063b = _0x4bcfe1.dynCall_viiiifiii = _0x4bcfe1.asm.dynCall_viiiifiii).apply(null, arguments);
    };
    var _0x4ec152 = _0x4bcfe1.dynCall_viiiiiiiffiii = function () {
      return (_0x4ec152 = _0x4bcfe1.dynCall_viiiiiiiffiii = _0x4bcfe1.asm.dynCall_viiiiiiiffiii).apply(null, arguments);
    };
    var _0x1c3509 = _0x4bcfe1.dynCall_viifffi = function () {
      return (_0x1c3509 = _0x4bcfe1.dynCall_viifffi = _0x4bcfe1.asm.dynCall_viifffi).apply(null, arguments);
    };
    var _0x39a832 = _0x4bcfe1.dynCall_iiiiffi = function () {
      return (_0x39a832 = _0x4bcfe1.dynCall_iiiiffi = _0x4bcfe1.asm.dynCall_iiiiffi).apply(null, arguments);
    };
    var _0x50f087 = _0x4bcfe1.dynCall_iiiiiffi = function () {
      return (_0x50f087 = _0x4bcfe1.dynCall_iiiiiffi = _0x4bcfe1.asm.dynCall_iiiiiffi).apply(null, arguments);
    };
    var _0x4f3575 = _0x4bcfe1.dynCall_viiffffi = function () {
      return (_0x4f3575 = _0x4bcfe1.dynCall_viiffffi = _0x4bcfe1.asm.dynCall_viiffffi).apply(null, arguments);
    };
    var _0x1e9cea = _0x4bcfe1.dynCall_viifffffffi = function () {
      return (_0x1e9cea = _0x4bcfe1.dynCall_viifffffffi = _0x4bcfe1.asm.dynCall_viifffffffi).apply(null, arguments);
    };
    var _0x5d7d24 = _0x4bcfe1.dynCall_viifffffffffi = function () {
      return (_0x5d7d24 = _0x4bcfe1.dynCall_viifffffffffi = _0x4bcfe1.asm.dynCall_viifffffffffi).apply(null, arguments);
    };
    var _0x2e7a9b = _0x4bcfe1.dynCall_viiiffi = function () {
      return (_0x2e7a9b = _0x4bcfe1.dynCall_viiiffi = _0x4bcfe1.asm.dynCall_viiiffi).apply(null, arguments);
    };
    var _0x1f96e6 = _0x4bcfe1.dynCall_viiiiffi = function () {
      return (_0x1f96e6 = _0x4bcfe1.dynCall_viiiiffi = _0x4bcfe1.asm.dynCall_viiiiffi).apply(null, arguments);
    };
    var _0x416f96 = _0x4bcfe1.dynCall_viiiiifi = function () {
      return (_0x416f96 = _0x4bcfe1.dynCall_viiiiifi = _0x4bcfe1.asm.dynCall_viiiiifi).apply(null, arguments);
    };
    var _0x2b57d2 = _0x4bcfe1.dynCall_viiifii = function () {
      return (_0x2b57d2 = _0x4bcfe1.dynCall_viiifii = _0x4bcfe1.asm.dynCall_viiifii).apply(null, arguments);
    };
    var _0xa67dc1 = _0x4bcfe1.dynCall_ffi = function () {
      return (_0xa67dc1 = _0x4bcfe1.dynCall_ffi = _0x4bcfe1.asm.dynCall_ffi).apply(null, arguments);
    };
    var _0x315404 = _0x4bcfe1.dynCall_fiiffffi = function () {
      return (_0x315404 = _0x4bcfe1.dynCall_fiiffffi = _0x4bcfe1.asm.dynCall_fiiffffi).apply(null, arguments);
    };
    var _0x2d6a64 = _0x4bcfe1.dynCall_viffffi = function () {
      return (_0x2d6a64 = _0x4bcfe1.dynCall_viffffi = _0x4bcfe1.asm.dynCall_viffffi).apply(null, arguments);
    };
    var _0x2b4d5f = _0x4bcfe1.dynCall_viiiffffi = function () {
      return (_0x2b4d5f = _0x4bcfe1.dynCall_viiiffffi = _0x4bcfe1.asm.dynCall_viiiffffi).apply(null, arguments);
    };
    var _0x1c6c6b = _0x4bcfe1.dynCall_viffffii = function () {
      return (_0x1c6c6b = _0x4bcfe1.dynCall_viffffii = _0x4bcfe1.asm.dynCall_viffffii).apply(null, arguments);
    };
    var _0x397087 = _0x4bcfe1.dynCall_viffii = function () {
      return (_0x397087 = _0x4bcfe1.dynCall_viffii = _0x4bcfe1.asm.dynCall_viffii).apply(null, arguments);
    };
    var _0x2088a0 = _0x4bcfe1.dynCall_vifffii = function () {
      return (_0x2088a0 = _0x4bcfe1.dynCall_vifffii = _0x4bcfe1.asm.dynCall_vifffii).apply(null, arguments);
    };
    var _0x5f06ac = _0x4bcfe1.dynCall_viiiiiiifi = function () {
      return (_0x5f06ac = _0x4bcfe1.dynCall_viiiiiiifi = _0x4bcfe1.asm.dynCall_viiiiiiifi).apply(null, arguments);
    };
    var _0x14227d = _0x4bcfe1.dynCall_vifffffii = function () {
      return (_0x14227d = _0x4bcfe1.dynCall_vifffffii = _0x4bcfe1.asm.dynCall_vifffffii).apply(null, arguments);
    };
    var _0x46589e = _0x4bcfe1.dynCall_viiffiffi = function () {
      return (_0x46589e = _0x4bcfe1.dynCall_viiffiffi = _0x4bcfe1.asm.dynCall_viiffiffi).apply(null, arguments);
    };
    var _0x55511b = _0x4bcfe1.dynCall_viiffifi = function () {
      return (_0x55511b = _0x4bcfe1.dynCall_viiffifi = _0x4bcfe1.asm.dynCall_viiffifi).apply(null, arguments);
    };
    var _0x9e2875 = _0x4bcfe1.dynCall_viiffii = function () {
      return (_0x9e2875 = _0x4bcfe1.dynCall_viiffii = _0x4bcfe1.asm.dynCall_viiffii).apply(null, arguments);
    };
    var _0x379a1e = _0x4bcfe1.dynCall_viifffiffi = function () {
      return (_0x379a1e = _0x4bcfe1.dynCall_viifffiffi = _0x4bcfe1.asm.dynCall_viifffiffi).apply(null, arguments);
    };
    var _0x361710 = _0x4bcfe1.dynCall_viifffifi = function () {
      return (_0x361710 = _0x4bcfe1.dynCall_viifffifi = _0x4bcfe1.asm.dynCall_viifffifi).apply(null, arguments);
    };
    var _0x1583d1 = _0x4bcfe1.dynCall_viifffii = function () {
      return (_0x1583d1 = _0x4bcfe1.dynCall_viifffii = _0x4bcfe1.asm.dynCall_viifffii).apply(null, arguments);
    };
    var _0x32d4e6 = _0x4bcfe1.dynCall_viiffffiffi = function () {
      return (_0x32d4e6 = _0x4bcfe1.dynCall_viiffffiffi = _0x4bcfe1.asm.dynCall_viiffffiffi).apply(null, arguments);
    };
    var _0x5bfa29 = _0x4bcfe1.dynCall_viiffffifi = function () {
      return (_0x5bfa29 = _0x4bcfe1.dynCall_viiffffifi = _0x4bcfe1.asm.dynCall_viiffffifi).apply(null, arguments);
    };
    var _0x7d8721 = _0x4bcfe1.dynCall_viiffffii = function () {
      return (_0x7d8721 = _0x4bcfe1.dynCall_viiffffii = _0x4bcfe1.asm.dynCall_viiffffii).apply(null, arguments);
    };
    var _0x5d6d14 = _0x4bcfe1.dynCall_iififfi = function () {
      return (_0x5d6d14 = _0x4bcfe1.dynCall_iififfi = _0x4bcfe1.asm.dynCall_iififfi).apply(null, arguments);
    };
    var _0x32547d = _0x4bcfe1.dynCall_vifiii = function () {
      return (_0x32547d = _0x4bcfe1.dynCall_vifiii = _0x4bcfe1.asm.dynCall_vifiii).apply(null, arguments);
    };
    var _0x8d15db = _0x4bcfe1.dynCall_iiiiffii = function () {
      return (_0x8d15db = _0x4bcfe1.dynCall_iiiiffii = _0x4bcfe1.asm.dynCall_iiiiffii).apply(null, arguments);
    };
    var _0x347aae = _0x4bcfe1.dynCall_iifiii = function () {
      return (_0x347aae = _0x4bcfe1.dynCall_iifiii = _0x4bcfe1.asm.dynCall_iifiii).apply(null, arguments);
    };
    var _0x4c1b38 = _0x4bcfe1.dynCall_iiffiii = function () {
      return (_0x4c1b38 = _0x4bcfe1.dynCall_iiffiii = _0x4bcfe1.asm.dynCall_iiffiii).apply(null, arguments);
    };
    var _0x4e994b = _0x4bcfe1.dynCall_iifffiii = function () {
      return (_0x4e994b = _0x4bcfe1.dynCall_iifffiii = _0x4bcfe1.asm.dynCall_iifffiii).apply(null, arguments);
    };
    var _0x1cd92f = _0x4bcfe1.dynCall_vfi = function () {
      return (_0x1cd92f = _0x4bcfe1.dynCall_vfi = _0x4bcfe1.asm.dynCall_vfi).apply(null, arguments);
    };
    var _0x1c73d8 = _0x4bcfe1.dynCall_ffffi = function () {
      return (_0x1c73d8 = _0x4bcfe1.dynCall_ffffi = _0x4bcfe1.asm.dynCall_ffffi).apply(null, arguments);
    };
    var _0x322c1b = _0x4bcfe1.dynCall_ffffffi = function () {
      return (_0x322c1b = _0x4bcfe1.dynCall_ffffffi = _0x4bcfe1.asm.dynCall_ffffffi).apply(null, arguments);
    };
    var _0x485f65 = _0x4bcfe1.dynCall_ffffffffi = function () {
      return (_0x485f65 = _0x4bcfe1.dynCall_ffffffffi = _0x4bcfe1.asm.dynCall_ffffffffi).apply(null, arguments);
    };
    var _0x388bfd = _0x4bcfe1.dynCall_fiifffi = function () {
      return (_0x388bfd = _0x4bcfe1.dynCall_fiifffi = _0x4bcfe1.asm.dynCall_fiifffi).apply(null, arguments);
    };
    var _0x1b72a7 = _0x4bcfe1.dynCall_fffii = function () {
      return (_0x1b72a7 = _0x4bcfe1.dynCall_fffii = _0x4bcfe1.asm.dynCall_fffii).apply(null, arguments);
    };
    var _0x22ef40 = _0x4bcfe1.dynCall_vifffi = function () {
      return (_0x22ef40 = _0x4bcfe1.dynCall_vifffi = _0x4bcfe1.asm.dynCall_vifffi).apply(null, arguments);
    };
    var _0x350dae = _0x4bcfe1.dynCall_viffiii = function () {
      return (_0x350dae = _0x4bcfe1.dynCall_viffiii = _0x4bcfe1.asm.dynCall_viffiii).apply(null, arguments);
    };
    var _0x1c56d2 = _0x4bcfe1.dynCall_iiiifffii = function () {
      return (_0x1c56d2 = _0x4bcfe1.dynCall_iiiifffii = _0x4bcfe1.asm.dynCall_iiiifffii).apply(null, arguments);
    };
    var _0x2d4398 = _0x4bcfe1.dynCall_fiiiifffi = function () {
      return (_0x2d4398 = _0x4bcfe1.dynCall_fiiiifffi = _0x4bcfe1.asm.dynCall_fiiiifffi).apply(null, arguments);
    };
    var _0x22ee3d = _0x4bcfe1.dynCall_viifffffi = function () {
      return (_0x22ee3d = _0x4bcfe1.dynCall_viifffffi = _0x4bcfe1.asm.dynCall_viifffffi).apply(null, arguments);
    };
    var _0x396599 = _0x4bcfe1.dynCall_fiffii = function () {
      return (_0x396599 = _0x4bcfe1.dynCall_fiffii = _0x4bcfe1.asm.dynCall_fiffii).apply(null, arguments);
    };
    var _0x486aca = _0x4bcfe1.dynCall_viiiffiii = function () {
      return (_0x486aca = _0x4bcfe1.dynCall_viiiffiii = _0x4bcfe1.asm.dynCall_viiiffiii).apply(null, arguments);
    };
    var _0x4066c8 = _0x4bcfe1.dynCall_fiiiffii = function () {
      return (_0x4066c8 = _0x4bcfe1.dynCall_fiiiffii = _0x4bcfe1.asm.dynCall_fiiiffii).apply(null, arguments);
    };
    var _0x3f090c = _0x4bcfe1.dynCall_fiiiiiii = function () {
      return (_0x3f090c = _0x4bcfe1.dynCall_fiiiiiii = _0x4bcfe1.asm.dynCall_fiiiiiii).apply(null, arguments);
    };
    var _0x16f083 = _0x4bcfe1.dynCall_vijijijii = function () {
      return (_0x16f083 = _0x4bcfe1.dynCall_vijijijii = _0x4bcfe1.asm.dynCall_vijijijii).apply(null, arguments);
    };
    var _0x316441 = _0x4bcfe1.dynCall_iiidiiii = function () {
      return (_0x316441 = _0x4bcfe1.dynCall_iiidiiii = _0x4bcfe1.asm.dynCall_iiidiiii).apply(null, arguments);
    };
    var _0x40acab = _0x4bcfe1.dynCall_viiiijii = function () {
      return (_0x40acab = _0x4bcfe1.dynCall_viiiijii = _0x4bcfe1.asm.dynCall_viiiijii).apply(null, arguments);
    };
    var _0x7bcedf = _0x4bcfe1.dynCall_viiijiii = function () {
      return (_0x7bcedf = _0x4bcfe1.dynCall_viiijiii = _0x4bcfe1.asm.dynCall_viiijiii).apply(null, arguments);
    };
    var _0x714468 = _0x4bcfe1.dynCall_iijiiiii = function () {
      return (_0x714468 = _0x4bcfe1.dynCall_iijiiiii = _0x4bcfe1.asm.dynCall_iijiiiii).apply(null, arguments);
    };
    var _0x4f7f6f = _0x4bcfe1.dynCall_iijiiiiiiii = function () {
      return (_0x4f7f6f = _0x4bcfe1.dynCall_iijiiiiiiii = _0x4bcfe1.asm.dynCall_iijiiiiiiii).apply(null, arguments);
    };
    var _0x2b50ad = _0x4bcfe1.dynCall_viiiijiiiii = function () {
      return (_0x2b50ad = _0x4bcfe1.dynCall_viiiijiiiii = _0x4bcfe1.asm.dynCall_viiiijiiiii).apply(null, arguments);
    };
    var _0x3ba627 = _0x4bcfe1.dynCall_iiiiiiiiiii = function () {
      return (_0x3ba627 = _0x4bcfe1.dynCall_iiiiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiiiiii).apply(null, arguments);
    };
    var _0x45452d = _0x4bcfe1.dynCall_vidii = function () {
      return (_0x45452d = _0x4bcfe1.dynCall_vidii = _0x4bcfe1.asm.dynCall_vidii).apply(null, arguments);
    };
    var _0x3b05aa = _0x4bcfe1.dynCall_viiidiiiii = function () {
      return (_0x3b05aa = _0x4bcfe1.dynCall_viiidiiiii = _0x4bcfe1.asm.dynCall_viiidiiiii).apply(null, arguments);
    };
    var _0x530670 = _0x4bcfe1.dynCall_vifiiii = function () {
      return (_0x530670 = _0x4bcfe1.dynCall_vifiiii = _0x4bcfe1.asm.dynCall_vifiiii).apply(null, arguments);
    };
    var _0x1538c5 = _0x4bcfe1.dynCall_iiiffi = function () {
      return (_0x1538c5 = _0x4bcfe1.dynCall_iiiffi = _0x4bcfe1.asm.dynCall_iiiffi).apply(null, arguments);
    };
    var _0x13798d = _0x4bcfe1.dynCall_iiffii = function () {
      return (_0x13798d = _0x4bcfe1.dynCall_iiffii = _0x4bcfe1.asm.dynCall_iiffii).apply(null, arguments);
    };
    var _0x2febed = _0x4bcfe1.dynCall_iiifiii = function () {
      return (_0x2febed = _0x4bcfe1.dynCall_iiifiii = _0x4bcfe1.asm.dynCall_iiifiii).apply(null, arguments);
    };
    var _0x57fb42 = _0x4bcfe1.dynCall_iiififii = function () {
      return (_0x57fb42 = _0x4bcfe1.dynCall_iiififii = _0x4bcfe1.asm.dynCall_iiififii).apply(null, arguments);
    };
    var _0x49ec71 = _0x4bcfe1.dynCall_iiifiiiii = function () {
      return (_0x49ec71 = _0x4bcfe1.dynCall_iiifiiiii = _0x4bcfe1.asm.dynCall_iiifiiiii).apply(null, arguments);
    };
    var _0x2f76b6 = _0x4bcfe1.dynCall_iiffifiiii = function () {
      return (_0x2f76b6 = _0x4bcfe1.dynCall_iiffifiiii = _0x4bcfe1.asm.dynCall_iiffifiiii).apply(null, arguments);
    };
    var _0x8416cd = _0x4bcfe1.dynCall_iifiifiiii = function () {
      return (_0x8416cd = _0x4bcfe1.dynCall_iifiifiiii = _0x4bcfe1.asm.dynCall_iifiifiiii).apply(null, arguments);
    };
    var _0x394414 = _0x4bcfe1.dynCall_iiiifiii = function () {
      return (_0x394414 = _0x4bcfe1.dynCall_iiiifiii = _0x4bcfe1.asm.dynCall_iiiifiii).apply(null, arguments);
    };
    var _0x1af8c6 = _0x4bcfe1.dynCall_iiifiiii = function () {
      return (_0x1af8c6 = _0x4bcfe1.dynCall_iiifiiii = _0x4bcfe1.asm.dynCall_iiifiiii).apply(null, arguments);
    };
    var _0x1859ff = _0x4bcfe1.dynCall_iiiffiii = function () {
      return (_0x1859ff = _0x4bcfe1.dynCall_iiiffiii = _0x4bcfe1.asm.dynCall_iiiffiii).apply(null, arguments);
    };
    var _0x20086e = _0x4bcfe1.dynCall_iiiiifii = function () {
      return (_0x20086e = _0x4bcfe1.dynCall_iiiiifii = _0x4bcfe1.asm.dynCall_iiiiifii).apply(null, arguments);
    };
    var _0x336aa9 = _0x4bcfe1.dynCall_iifiifffii = function () {
      return (_0x336aa9 = _0x4bcfe1.dynCall_iifiifffii = _0x4bcfe1.asm.dynCall_iifiifffii).apply(null, arguments);
    };
    var _0x5ab2d0 = _0x4bcfe1.dynCall_fiifii = function () {
      return (_0x5ab2d0 = _0x4bcfe1.dynCall_fiifii = _0x4bcfe1.asm.dynCall_fiifii).apply(null, arguments);
    };
    var _0x478bdc = _0x4bcfe1.dynCall_viiiiiifiifiiii = function () {
      return (_0x478bdc = _0x4bcfe1.dynCall_viiiiiifiifiiii = _0x4bcfe1.asm.dynCall_viiiiiifiifiiii).apply(null, arguments);
    };
    var _0xb6e8fc = _0x4bcfe1.dynCall_iiffffiii = function () {
      return (_0xb6e8fc = _0x4bcfe1.dynCall_iiffffiii = _0x4bcfe1.asm.dynCall_iiffffiii).apply(null, arguments);
    };
    var _0x29c7bd = _0x4bcfe1.dynCall_iiidfi = function () {
      return (_0x29c7bd = _0x4bcfe1.dynCall_iiidfi = _0x4bcfe1.asm.dynCall_iiidfi).apply(null, arguments);
    };
    var _0x4da97d = _0x4bcfe1.dynCall_iiijfi = function () {
      return (_0x4da97d = _0x4bcfe1.dynCall_iiijfi = _0x4bcfe1.asm.dynCall_iiijfi).apply(null, arguments);
    };
    var _0x56825d = _0x4bcfe1.dynCall_iiiffii = function () {
      return (_0x56825d = _0x4bcfe1.dynCall_iiiffii = _0x4bcfe1.asm.dynCall_iiiffii).apply(null, arguments);
    };
    var _0x1e5fb3 = _0x4bcfe1.dynCall_iiiififi = function () {
      return (_0x1e5fb3 = _0x4bcfe1.dynCall_iiiififi = _0x4bcfe1.asm.dynCall_iiiififi).apply(null, arguments);
    };
    var _0x5b7a33 = _0x4bcfe1.dynCall_iiiffifiiii = function () {
      return (_0x5b7a33 = _0x4bcfe1.dynCall_iiiffifiiii = _0x4bcfe1.asm.dynCall_iiiffifiiii).apply(null, arguments);
    };
    var _0x31d60e = _0x4bcfe1.dynCall_iiifiifiii = function () {
      return (_0x31d60e = _0x4bcfe1.dynCall_iiifiifiii = _0x4bcfe1.asm.dynCall_iiifiifiii).apply(null, arguments);
    };
    var _0xe1e1e9 = _0x4bcfe1.dynCall_iiifiifiiiii = function () {
      return (_0xe1e1e9 = _0x4bcfe1.dynCall_iiifiifiiiii = _0x4bcfe1.asm.dynCall_iiifiifiiiii).apply(null, arguments);
    };
    var _0x93cb99 = _0x4bcfe1.dynCall_ifii = function () {
      return (_0x93cb99 = _0x4bcfe1.dynCall_ifii = _0x4bcfe1.asm.dynCall_ifii).apply(null, arguments);
    };
    var _0x22e9b0 = _0x4bcfe1.dynCall_ifffii = function () {
      return (_0x22e9b0 = _0x4bcfe1.dynCall_ifffii = _0x4bcfe1.asm.dynCall_ifffii).apply(null, arguments);
    };
    var _0x3ff933 = _0x4bcfe1.dynCall_ffffii = function () {
      return (_0x3ff933 = _0x4bcfe1.dynCall_ffffii = _0x4bcfe1.asm.dynCall_ffffii).apply(null, arguments);
    };
    var _0x2621ce = _0x4bcfe1.dynCall_ffffifi = function () {
      return (_0x2621ce = _0x4bcfe1.dynCall_ffffifi = _0x4bcfe1.asm.dynCall_ffffifi).apply(null, arguments);
    };
    var _0x47f79f = _0x4bcfe1.dynCall_ffffiffi = function () {
      return (_0x47f79f = _0x4bcfe1.dynCall_ffffiffi = _0x4bcfe1.asm.dynCall_ffffiffi).apply(null, arguments);
    };
    var _0x137340 = _0x4bcfe1.dynCall_viiififi = function () {
      return (_0x137340 = _0x4bcfe1.dynCall_viiififi = _0x4bcfe1.asm.dynCall_viiififi).apply(null, arguments);
    };
    var _0x23473a = _0x4bcfe1.dynCall_viiififfi = function () {
      return (_0x23473a = _0x4bcfe1.dynCall_viiififfi = _0x4bcfe1.asm.dynCall_viiififfi).apply(null, arguments);
    };
    var _0x52af47 = _0x4bcfe1.dynCall_ifiii = function () {
      return (_0x52af47 = _0x4bcfe1.dynCall_ifiii = _0x4bcfe1.asm.dynCall_ifiii).apply(null, arguments);
    };
    var _0xf9c52e = _0x4bcfe1.dynCall_iifiiiiii = function () {
      return (_0xf9c52e = _0x4bcfe1.dynCall_iifiiiiii = _0x4bcfe1.asm.dynCall_iifiiiiii).apply(null, arguments);
    };
    var _0xe154f = _0x4bcfe1.dynCall_iifiiiii = function () {
      return (_0xe154f = _0x4bcfe1.dynCall_iifiiiii = _0x4bcfe1.asm.dynCall_iifiiiii).apply(null, arguments);
    };
    var _0x432ea8 = _0x4bcfe1.dynCall_iiffiiiii = function () {
      return (_0x432ea8 = _0x4bcfe1.dynCall_iiffiiiii = _0x4bcfe1.asm.dynCall_iiffiiiii).apply(null, arguments);
    };
    var _0x52539e = _0x4bcfe1.dynCall_iiffifiii = function () {
      return (_0x52539e = _0x4bcfe1.dynCall_iiffifiii = _0x4bcfe1.asm.dynCall_iiffifiii).apply(null, arguments);
    };
    var _0x2cb4b3 = _0x4bcfe1.dynCall_iifiifiii = function () {
      return (_0x2cb4b3 = _0x4bcfe1.dynCall_iifiifiii = _0x4bcfe1.asm.dynCall_iifiifiii).apply(null, arguments);
    };
    var _0x1d6a10 = _0x4bcfe1.dynCall_iififi = function () {
      return (_0x1d6a10 = _0x4bcfe1.dynCall_iififi = _0x4bcfe1.asm.dynCall_iififi).apply(null, arguments);
    };
    var _0x30494b = _0x4bcfe1.dynCall_iiififi = function () {
      return (_0x30494b = _0x4bcfe1.dynCall_iiififi = _0x4bcfe1.asm.dynCall_iiififi).apply(null, arguments);
    };
    var _0x2d284f = _0x4bcfe1.dynCall_iiiiifiiii = function () {
      return (_0x2d284f = _0x4bcfe1.dynCall_iiiiifiiii = _0x4bcfe1.asm.dynCall_iiiiifiiii).apply(null, arguments);
    };
    var _0x541a6c = _0x4bcfe1.dynCall_viidiii = function () {
      return (_0x541a6c = _0x4bcfe1.dynCall_viidiii = _0x4bcfe1.asm.dynCall_viidiii).apply(null, arguments);
    };
    var _0x567d8c = _0x4bcfe1.dynCall_fiifdi = function () {
      return (_0x567d8c = _0x4bcfe1.dynCall_fiifdi = _0x4bcfe1.asm.dynCall_fiifdi).apply(null, arguments);
    };
    var _0x31f00f = _0x4bcfe1.dynCall_viiiiiifddfiiii = function () {
      return (_0x31f00f = _0x4bcfe1.dynCall_viiiiiifddfiiii = _0x4bcfe1.asm.dynCall_viiiiiifddfiiii).apply(null, arguments);
    };
    var _0x101fdc = _0x4bcfe1.dynCall_fiifji = function () {
      return (_0x101fdc = _0x4bcfe1.dynCall_fiifji = _0x4bcfe1.asm.dynCall_fiifji).apply(null, arguments);
    };
    var _0x36e4df = _0x4bcfe1.dynCall_viiiiiifjjfiiii = function () {
      return (_0x36e4df = _0x4bcfe1.dynCall_viiiiiifjjfiiii = _0x4bcfe1.asm.dynCall_viiiiiifjjfiiii).apply(null, arguments);
    };
    var _0x2b9229 = _0x4bcfe1.dynCall_viifiii = function () {
      return (_0x2b9229 = _0x4bcfe1.dynCall_viifiii = _0x4bcfe1.asm.dynCall_viifiii).apply(null, arguments);
    };
    var _0x465fe5 = _0x4bcfe1.dynCall_viiiiiiffffiiii = function () {
      return (_0x465fe5 = _0x4bcfe1.dynCall_viiiiiiffffiiii = _0x4bcfe1.asm.dynCall_viiiiiiffffiiii).apply(null, arguments);
    };
    var _0x49123e = _0x4bcfe1.dynCall_viifiiii = function () {
      return (_0x49123e = _0x4bcfe1.dynCall_viifiiii = _0x4bcfe1.asm.dynCall_viifiiii).apply(null, arguments);
    };
    var _0x528c16 = _0x4bcfe1.dynCall_iiiiifiii = function () {
      return (_0x528c16 = _0x4bcfe1.dynCall_iiiiifiii = _0x4bcfe1.asm.dynCall_iiiiifiii).apply(null, arguments);
    };
    var _0x26415d = _0x4bcfe1.dynCall_fffffi = function () {
      return (_0x26415d = _0x4bcfe1.dynCall_fffffi = _0x4bcfe1.asm.dynCall_fffffi).apply(null, arguments);
    };
    var _0x12cedd = _0x4bcfe1.dynCall_fffifffi = function () {
      return (_0x12cedd = _0x4bcfe1.dynCall_fffifffi = _0x4bcfe1.asm.dynCall_fffifffi).apply(null, arguments);
    };
    var _0x228280 = _0x4bcfe1.dynCall_ifiiii = function () {
      return (_0x228280 = _0x4bcfe1.dynCall_ifiiii = _0x4bcfe1.asm.dynCall_ifiiii).apply(null, arguments);
    };
    var _0xe6f76 = _0x4bcfe1.dynCall_idiiiii = function () {
      return (_0xe6f76 = _0x4bcfe1.dynCall_idiiiii = _0x4bcfe1.asm.dynCall_idiiiii).apply(null, arguments);
    };
    var _0x2c0b99 = _0x4bcfe1.dynCall_idiiii = function () {
      return (_0x2c0b99 = _0x4bcfe1.dynCall_idiiii = _0x4bcfe1.asm.dynCall_idiiii).apply(null, arguments);
    };
    var _0xb56779 = _0x4bcfe1.dynCall_idii = function () {
      return (_0xb56779 = _0x4bcfe1.dynCall_idii = _0x4bcfe1.asm.dynCall_idii).apply(null, arguments);
    };
    var _0x5c6b90 = _0x4bcfe1.dynCall_iiijiiii = function () {
      return (_0x5c6b90 = _0x4bcfe1.dynCall_iiijiiii = _0x4bcfe1.asm.dynCall_iiijiiii).apply(null, arguments);
    };
    var _0xffb591 = _0x4bcfe1.dynCall_vjiiii = function () {
      return (_0xffb591 = _0x4bcfe1.dynCall_vjiiii = _0x4bcfe1.asm.dynCall_vjiiii).apply(null, arguments);
    };
    var _0x2ad655 = _0x4bcfe1.dynCall_iddi = function () {
      return (_0x2ad655 = _0x4bcfe1.dynCall_iddi = _0x4bcfe1.asm.dynCall_iddi).apply(null, arguments);
    };
    var _0x394039 = _0x4bcfe1.dynCall_iiiiiiiiiiii = function () {
      return (_0x394039 = _0x4bcfe1.dynCall_iiiiiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiiiiiii).apply(null, arguments);
    };
    var _0x1d8363 = _0x4bcfe1.dynCall_iiiiiiiiiiiiii = function () {
      return (_0x1d8363 = _0x4bcfe1.dynCall_iiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x2eaea7 = _0x4bcfe1.dynCall_viifiifi = function () {
      return (_0x2eaea7 = _0x4bcfe1.dynCall_viifiifi = _0x4bcfe1.asm.dynCall_viifiifi).apply(null, arguments);
    };
    var _0x2f26c5 = _0x4bcfe1.dynCall_vifiifi = function () {
      return (_0x2f26c5 = _0x4bcfe1.dynCall_vifiifi = _0x4bcfe1.asm.dynCall_vifiifi).apply(null, arguments);
    };
    var _0x50b7c9 = _0x4bcfe1.dynCall_viddfffi = function () {
      return (_0x50b7c9 = _0x4bcfe1.dynCall_viddfffi = _0x4bcfe1.asm.dynCall_viddfffi).apply(null, arguments);
    };
    var _0x4a3a5d = _0x4bcfe1.dynCall_viidfffi = function () {
      return (_0x4a3a5d = _0x4bcfe1.dynCall_viidfffi = _0x4bcfe1.asm.dynCall_viidfffi).apply(null, arguments);
    };
    var _0x2c6952 = _0x4bcfe1.dynCall_vidifffi = function () {
      return (_0x2c6952 = _0x4bcfe1.dynCall_vidifffi = _0x4bcfe1.asm.dynCall_vidifffi).apply(null, arguments);
    };
    var _0xa9086e = _0x4bcfe1.dynCall_viiifffi = function () {
      return (_0xa9086e = _0x4bcfe1.dynCall_viiifffi = _0x4bcfe1.asm.dynCall_viiifffi).apply(null, arguments);
    };
    var _0x4a5e1a = _0x4bcfe1.dynCall_viddi = function () {
      return (_0x4a5e1a = _0x4bcfe1.dynCall_viddi = _0x4bcfe1.asm.dynCall_viddi).apply(null, arguments);
    };
    var _0x5a967e = _0x4bcfe1.dynCall_viiiiffffffffii = function () {
      return (_0x5a967e = _0x4bcfe1.dynCall_viiiiffffffffii = _0x4bcfe1.asm.dynCall_viiiiffffffffii).apply(null, arguments);
    };
    var _0x6134e7 = _0x4bcfe1.dynCall_iffi = function () {
      return (_0x6134e7 = _0x4bcfe1.dynCall_iffi = _0x4bcfe1.asm.dynCall_iffi).apply(null, arguments);
    };
    var _0x2ce45a = _0x4bcfe1.dynCall_ffii = function () {
      return (_0x2ce45a = _0x4bcfe1.dynCall_ffii = _0x4bcfe1.asm.dynCall_ffii).apply(null, arguments);
    };
    var _0x4e3625 = _0x4bcfe1.dynCall_fiiiii = function () {
      return (_0x4e3625 = _0x4bcfe1.dynCall_fiiiii = _0x4bcfe1.asm.dynCall_fiiiii).apply(null, arguments);
    };
    var _0x2309f9 = _0x4bcfe1.dynCall_ddddi = function () {
      return (_0x2309f9 = _0x4bcfe1.dynCall_ddddi = _0x4bcfe1.asm.dynCall_ddddi).apply(null, arguments);
    };
    var _0x18835c = _0x4bcfe1.dynCall_ddi = function () {
      return (_0x18835c = _0x4bcfe1.dynCall_ddi = _0x4bcfe1.asm.dynCall_ddi).apply(null, arguments);
    };
    var _0x2973d2 = _0x4bcfe1.dynCall_viiijiiii = function () {
      return (_0x2973d2 = _0x4bcfe1.dynCall_viiijiiii = _0x4bcfe1.asm.dynCall_viiijiiii).apply(null, arguments);
    };
    var _0x3c1729 = _0x4bcfe1.dynCall_iiiiiiiiiiiii = function () {
      return (_0x3c1729 = _0x4bcfe1.dynCall_iiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x3e0951 = _0x4bcfe1.dynCall_iiiiiji = function () {
      return (_0x3e0951 = _0x4bcfe1.dynCall_iiiiiji = _0x4bcfe1.asm.dynCall_iiiiiji).apply(null, arguments);
    };
    var _0x4dcf3a = _0x4bcfe1.dynCall_viiijii = function () {
      return (_0x4dcf3a = _0x4bcfe1.dynCall_viiijii = _0x4bcfe1.asm.dynCall_viiijii).apply(null, arguments);
    };
    var _0x5de217 = _0x4bcfe1.dynCall_viiiiiji = function () {
      return (_0x5de217 = _0x4bcfe1.dynCall_viiiiiji = _0x4bcfe1.asm.dynCall_viiiiiji).apply(null, arguments);
    };
    var _0xea4223 = _0x4bcfe1.dynCall_ijii = function () {
      return (_0xea4223 = _0x4bcfe1.dynCall_ijii = _0x4bcfe1.asm.dynCall_ijii).apply(null, arguments);
    };
    var _0x56fc5c = _0x4bcfe1.dynCall_ijjiiii = function () {
      return (_0x56fc5c = _0x4bcfe1.dynCall_ijjiiii = _0x4bcfe1.asm.dynCall_ijjiiii).apply(null, arguments);
    };
    var _0x1bb9cd = _0x4bcfe1.dynCall_vdiiiii = function () {
      return (_0x1bb9cd = _0x4bcfe1.dynCall_vdiiiii = _0x4bcfe1.asm.dynCall_vdiiiii).apply(null, arguments);
    };
    var _0xbbd32 = _0x4bcfe1.dynCall_diiji = function () {
      return (_0xbbd32 = _0x4bcfe1.dynCall_diiji = _0x4bcfe1.asm.dynCall_diiji).apply(null, arguments);
    };
    var _0x173cff = _0x4bcfe1.dynCall_vjiiiiiiii = function () {
      return (_0x173cff = _0x4bcfe1.dynCall_vjiiiiiiii = _0x4bcfe1.asm.dynCall_vjiiiiiiii).apply(null, arguments);
    };
    var _0x41016e = _0x4bcfe1.dynCall_vjiiiiiii = function () {
      return (_0x41016e = _0x4bcfe1.dynCall_vjiiiiiii = _0x4bcfe1.asm.dynCall_vjiiiiiii).apply(null, arguments);
    };
    var _0xd4708c = _0x4bcfe1.dynCall_ijiiii = function () {
      return (_0xd4708c = _0x4bcfe1.dynCall_ijiiii = _0x4bcfe1.asm.dynCall_ijiiii).apply(null, arguments);
    };
    var _0x1c1e79 = _0x4bcfe1.dynCall_iidii = function () {
      return (_0x1c1e79 = _0x4bcfe1.dynCall_iidii = _0x4bcfe1.asm.dynCall_iidii).apply(null, arguments);
    };
    var _0x44aa7a = _0x4bcfe1.dynCall_iidiii = function () {
      return (_0x44aa7a = _0x4bcfe1.dynCall_iidiii = _0x4bcfe1.asm.dynCall_iidiii).apply(null, arguments);
    };
    var _0x209272 = _0x4bcfe1.dynCall_diji = function () {
      return (_0x209272 = _0x4bcfe1.dynCall_diji = _0x4bcfe1.asm.dynCall_diji).apply(null, arguments);
    };
    var _0x3d6177 = _0x4bcfe1.dynCall_fidi = function () {
      return (_0x3d6177 = _0x4bcfe1.dynCall_fidi = _0x4bcfe1.asm.dynCall_fidi).apply(null, arguments);
    };
    var _0x17cff3 = _0x4bcfe1.dynCall_vifffffi = function () {
      return (_0x17cff3 = _0x4bcfe1.dynCall_vifffffi = _0x4bcfe1.asm.dynCall_vifffffi).apply(null, arguments);
    };
    var _0x1ece98 = _0x4bcfe1.dynCall_viiiiiffii = function () {
      return (_0x1ece98 = _0x4bcfe1.dynCall_viiiiiffii = _0x4bcfe1.asm.dynCall_viiiiiffii).apply(null, arguments);
    };
    var _0x2dc9b5 = _0x4bcfe1.dynCall_viiiiiffi = function () {
      return (_0x2dc9b5 = _0x4bcfe1.dynCall_viiiiiffi = _0x4bcfe1.asm.dynCall_viiiiiffi).apply(null, arguments);
    };
    var _0x306fec = _0x4bcfe1.dynCall_viififi = function () {
      return (_0x306fec = _0x4bcfe1.dynCall_viififi = _0x4bcfe1.asm.dynCall_viififi).apply(null, arguments);
    };
    var _0x3fbcde = _0x4bcfe1.dynCall_viififfi = function () {
      return (_0x3fbcde = _0x4bcfe1.dynCall_viififfi = _0x4bcfe1.asm.dynCall_viififfi).apply(null, arguments);
    };
    var _0x64a697 = _0x4bcfe1.dynCall_ijjiii = function () {
      return (_0x64a697 = _0x4bcfe1.dynCall_ijjiii = _0x4bcfe1.asm.dynCall_ijjiii).apply(null, arguments);
    };
    var _0xc9c2c0 = _0x4bcfe1.dynCall_diiiii = function () {
      return (_0xc9c2c0 = _0x4bcfe1.dynCall_diiiii = _0x4bcfe1.asm.dynCall_diiiii).apply(null, arguments);
    };
    var _0x166b91 = _0x4bcfe1.dynCall_vijji = function () {
      return (_0x166b91 = _0x4bcfe1.dynCall_vijji = _0x4bcfe1.asm.dynCall_vijji).apply(null, arguments);
    };
    var _0x1c4674 = _0x4bcfe1.dynCall_vfffi = function () {
      return (_0x1c4674 = _0x4bcfe1.dynCall_vfffi = _0x4bcfe1.asm.dynCall_vfffi).apply(null, arguments);
    };
    var _0x362e10 = _0x4bcfe1.dynCall_vffffi = function () {
      return (_0x362e10 = _0x4bcfe1.dynCall_vffffi = _0x4bcfe1.asm.dynCall_vffffi).apply(null, arguments);
    };
    var _0x2b2005 = _0x4bcfe1.dynCall_viiiffii = function () {
      return (_0x2b2005 = _0x4bcfe1.dynCall_viiiffii = _0x4bcfe1.asm.dynCall_viiiffii).apply(null, arguments);
    };
    var _0xd88d5 = _0x4bcfe1.dynCall_viiiifffi = function () {
      return (_0xd88d5 = _0x4bcfe1.dynCall_viiiifffi = _0x4bcfe1.asm.dynCall_viiiifffi).apply(null, arguments);
    };
    var _0x155cdf = _0x4bcfe1.dynCall_vfiii = function () {
      return (_0x155cdf = _0x4bcfe1.dynCall_vfiii = _0x4bcfe1.asm.dynCall_vfiii).apply(null, arguments);
    };
    var _0x4cd0ad = _0x4bcfe1.dynCall_fdi = function () {
      return (_0x4cd0ad = _0x4bcfe1.dynCall_fdi = _0x4bcfe1.asm.dynCall_fdi).apply(null, arguments);
    };
    var _0x255e82 = _0x4bcfe1.dynCall_vfii = function () {
      return (_0x255e82 = _0x4bcfe1.dynCall_vfii = _0x4bcfe1.asm.dynCall_vfii).apply(null, arguments);
    };
    var _0x3d93bb = _0x4bcfe1.dynCall_jjjji = function () {
      return (_0x3d93bb = _0x4bcfe1.dynCall_jjjji = _0x4bcfe1.asm.dynCall_jjjji).apply(null, arguments);
    };
    var _0x2dc1ce = _0x4bcfe1.dynCall_iiiifiiiiii = function () {
      return (_0x2dc1ce = _0x4bcfe1.dynCall_iiiifiiiiii = _0x4bcfe1.asm.dynCall_iiiifiiiiii).apply(null, arguments);
    };
    var _0x451998 = _0x4bcfe1.dynCall_iiiifiiiii = function () {
      return (_0x451998 = _0x4bcfe1.dynCall_iiiifiiiii = _0x4bcfe1.asm.dynCall_iiiifiiiii).apply(null, arguments);
    };
    var _0x1f0356 = _0x4bcfe1.dynCall_iiiifiiii = function () {
      return (_0x1f0356 = _0x4bcfe1.dynCall_iiiifiiii = _0x4bcfe1.asm.dynCall_iiiifiiii).apply(null, arguments);
    };
    var _0x7f082c = _0x4bcfe1.dynCall_vijjii = function () {
      return (_0x7f082c = _0x4bcfe1.dynCall_vijjii = _0x4bcfe1.asm.dynCall_vijjii).apply(null, arguments);
    };
    var _0x45991c = _0x4bcfe1.dynCall_viiiiiiiijijiii = function () {
      return (_0x45991c = _0x4bcfe1.dynCall_viiiiiiiijijiii = _0x4bcfe1.asm.dynCall_viiiiiiiijijiii).apply(null, arguments);
    };
    var _0x1ab8b9 = _0x4bcfe1.dynCall_viijijiii = function () {
      return (_0x1ab8b9 = _0x4bcfe1.dynCall_viijijiii = _0x4bcfe1.asm.dynCall_viijijiii).apply(null, arguments);
    };
    var _0x525e23 = _0x4bcfe1.dynCall_viiiififfi = function () {
      return (_0x525e23 = _0x4bcfe1.dynCall_viiiififfi = _0x4bcfe1.asm.dynCall_viiiififfi).apply(null, arguments);
    };
    var _0x500ad1 = _0x4bcfe1.dynCall_viiiifiifi = function () {
      return (_0x500ad1 = _0x4bcfe1.dynCall_viiiifiifi = _0x4bcfe1.asm.dynCall_viiiifiifi).apply(null, arguments);
    };
    var _0x3af2f7 = _0x4bcfe1.dynCall_viiiifiiii = function () {
      return (_0x3af2f7 = _0x4bcfe1.dynCall_viiiifiiii = _0x4bcfe1.asm.dynCall_viiiifiiii).apply(null, arguments);
    };
    var _0x41b1f1 = _0x4bcfe1.dynCall_viiiifiiiii = function () {
      return (_0x41b1f1 = _0x4bcfe1.dynCall_viiiifiiiii = _0x4bcfe1.asm.dynCall_viiiifiiiii).apply(null, arguments);
    };
    var _0x46f551 = _0x4bcfe1.dynCall_viiiifiiiiiiii = function () {
      return (_0x46f551 = _0x4bcfe1.dynCall_viiiifiiiiiiii = _0x4bcfe1.asm.dynCall_viiiifiiiiiiii).apply(null, arguments);
    };
    var _0x2235d8 = _0x4bcfe1.dynCall_viffffiii = function () {
      return (_0x2235d8 = _0x4bcfe1.dynCall_viffffiii = _0x4bcfe1.asm.dynCall_viffffiii).apply(null, arguments);
    };
    var _0x217cf8 = _0x4bcfe1.dynCall_viififiii = function () {
      return (_0x217cf8 = _0x4bcfe1.dynCall_viififiii = _0x4bcfe1.asm.dynCall_viififiii).apply(null, arguments);
    };
    var _0x843951 = _0x4bcfe1.dynCall_iiiiifi = function () {
      return (_0x843951 = _0x4bcfe1.dynCall_iiiiifi = _0x4bcfe1.asm.dynCall_iiiiifi).apply(null, arguments);
    };
    var _0x25f62e = _0x4bcfe1.dynCall_viififii = function () {
      return (_0x25f62e = _0x4bcfe1.dynCall_viififii = _0x4bcfe1.asm.dynCall_viififii).apply(null, arguments);
    };
    var _0x1d9b1b = _0x4bcfe1.dynCall_iifiifii = function () {
      return (_0x1d9b1b = _0x4bcfe1.dynCall_iifiifii = _0x4bcfe1.asm.dynCall_iifiifii).apply(null, arguments);
    };
    var _0x42f9ee = _0x4bcfe1.dynCall_vififfii = function () {
      return (_0x42f9ee = _0x4bcfe1.dynCall_vififfii = _0x4bcfe1.asm.dynCall_vififfii).apply(null, arguments);
    };
    var _0x18d980 = _0x4bcfe1.dynCall_vififfi = function () {
      return (_0x18d980 = _0x4bcfe1.dynCall_vififfi = _0x4bcfe1.asm.dynCall_vififfi).apply(null, arguments);
    };
    var _0x59ad65 = _0x4bcfe1.dynCall_iiififiiii = function () {
      return (_0x59ad65 = _0x4bcfe1.dynCall_iiififiiii = _0x4bcfe1.asm.dynCall_iiififiiii).apply(null, arguments);
    };
    var _0x431c3e = _0x4bcfe1.dynCall_viffiiii = function () {
      return (_0x431c3e = _0x4bcfe1.dynCall_viffiiii = _0x4bcfe1.asm.dynCall_viffiiii).apply(null, arguments);
    };
    var _0x50569e = _0x4bcfe1.dynCall_viiiffffiiii = function () {
      return (_0x50569e = _0x4bcfe1.dynCall_viiiffffiiii = _0x4bcfe1.asm.dynCall_viiiffffiiii).apply(null, arguments);
    };
    var _0x518b3d = _0x4bcfe1.dynCall_viifffffffiiiii = function () {
      return (_0x518b3d = _0x4bcfe1.dynCall_viifffffffiiiii = _0x4bcfe1.asm.dynCall_viifffffffiiiii).apply(null, arguments);
    };
    var _0x56db75 = _0x4bcfe1.dynCall_iiiiiiffiiiiiiiiiffffiiii = function () {
      return (_0x56db75 = _0x4bcfe1.dynCall_iiiiiiffiiiiiiiiiffffiiii = _0x4bcfe1.asm.dynCall_iiiiiiffiiiiiiiiiffffiiii).apply(null, arguments);
    };
    var _0x1ebf26 = _0x4bcfe1.dynCall_iiiiiiffiiiiiiiiiiiiiii = function () {
      return (_0x1ebf26 = _0x4bcfe1.dynCall_iiiiiiffiiiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiffiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x30a0af = _0x4bcfe1.dynCall_vififiii = function () {
      return (_0x30a0af = _0x4bcfe1.dynCall_vififiii = _0x4bcfe1.asm.dynCall_vififiii).apply(null, arguments);
    };
    var _0x2c7be5 = _0x4bcfe1.dynCall_jijji = function () {
      return (_0x2c7be5 = _0x4bcfe1.dynCall_jijji = _0x4bcfe1.asm.dynCall_jijji).apply(null, arguments);
    };
    var _0x2a1197 = _0x4bcfe1.dynCall_ifffi = function () {
      return (_0x2a1197 = _0x4bcfe1.dynCall_ifffi = _0x4bcfe1.asm.dynCall_ifffi).apply(null, arguments);
    };
    var _0x382a15 = _0x4bcfe1.dynCall_fiifiii = function () {
      return (_0x382a15 = _0x4bcfe1.dynCall_fiifiii = _0x4bcfe1.asm.dynCall_fiifiii).apply(null, arguments);
    };
    var _0x1eb1a2 = _0x4bcfe1.dynCall_viffifi = function () {
      return (_0x1eb1a2 = _0x4bcfe1.dynCall_viffifi = _0x4bcfe1.asm.dynCall_viffifi).apply(null, arguments);
    };
    var _0x467ccf = _0x4bcfe1.dynCall_fffffffi = function () {
      return (_0x467ccf = _0x4bcfe1.dynCall_fffffffi = _0x4bcfe1.asm.dynCall_fffffffi).apply(null, arguments);
    };
    var _0x3e7d72 = _0x4bcfe1.dynCall_viiiffiiiiiiiii = function () {
      return (_0x3e7d72 = _0x4bcfe1.dynCall_viiiffiiiiiiiii = _0x4bcfe1.asm.dynCall_viiiffiiiiiiiii).apply(null, arguments);
    };
    var _0x9810cb = _0x4bcfe1.dynCall_viiiffiiiiii = function () {
      return (_0x9810cb = _0x4bcfe1.dynCall_viiiffiiiiii = _0x4bcfe1.asm.dynCall_viiiffiiiiii).apply(null, arguments);
    };
    var _0x1bd091 = _0x4bcfe1.dynCall_viiffiiiiiiiiii = function () {
      return (_0x1bd091 = _0x4bcfe1.dynCall_viiffiiiiiiiiii = _0x4bcfe1.asm.dynCall_viiffiiiiiiiiii).apply(null, arguments);
    };
    var _0x23a40a = _0x4bcfe1.dynCall_viiffiiiiiii = function () {
      return (_0x23a40a = _0x4bcfe1.dynCall_viiffiiiiiii = _0x4bcfe1.asm.dynCall_viiffiiiiiii).apply(null, arguments);
    };
    var _0x352313 = _0x4bcfe1.dynCall_viffffffi = function () {
      return (_0x352313 = _0x4bcfe1.dynCall_viffffffi = _0x4bcfe1.asm.dynCall_viffffffi).apply(null, arguments);
    };
    var _0x5dff95 = _0x4bcfe1.dynCall_iiiffiiii = function () {
      return (_0x5dff95 = _0x4bcfe1.dynCall_iiiffiiii = _0x4bcfe1.asm.dynCall_iiiffiiii).apply(null, arguments);
    };
    var _0x59c418 = _0x4bcfe1.dynCall_iiiiffiiii = function () {
      return (_0x59c418 = _0x4bcfe1.dynCall_iiiiffiiii = _0x4bcfe1.asm.dynCall_iiiiffiiii).apply(null, arguments);
    };
    var _0x50051a = _0x4bcfe1.dynCall_fiiiffi = function () {
      return (_0x50051a = _0x4bcfe1.dynCall_fiiiffi = _0x4bcfe1.asm.dynCall_fiiiffi).apply(null, arguments);
    };
    var _0x33a40b = _0x4bcfe1.dynCall_vjii = function () {
      return (_0x33a40b = _0x4bcfe1.dynCall_vjii = _0x4bcfe1.asm.dynCall_vjii).apply(null, arguments);
    };
    var _0x59e986 = _0x4bcfe1.dynCall_viiiiiiiijiiii = function () {
      return (_0x59e986 = _0x4bcfe1.dynCall_viiiiiiiijiiii = _0x4bcfe1.asm.dynCall_viiiiiiiijiiii).apply(null, arguments);
    };
    var _0x3ddd9f = _0x4bcfe1.dynCall_viiiiiifiiiiii = function () {
      return (_0x3ddd9f = _0x4bcfe1.dynCall_viiiiiifiiiiii = _0x4bcfe1.asm.dynCall_viiiiiifiiiiii).apply(null, arguments);
    };
    var _0x4def48 = _0x4bcfe1.dynCall_vifiiiiii = function () {
      return (_0x4def48 = _0x4bcfe1.dynCall_vifiiiiii = _0x4bcfe1.asm.dynCall_vifiiiiii).apply(null, arguments);
    };
    var _0x593231 = _0x4bcfe1.dynCall_fifii = function () {
      return (_0x593231 = _0x4bcfe1.dynCall_fifii = _0x4bcfe1.asm.dynCall_fifii).apply(null, arguments);
    };
    var _0x582160 = _0x4bcfe1.dynCall_iiidi = function () {
      return (_0x582160 = _0x4bcfe1.dynCall_iiidi = _0x4bcfe1.asm.dynCall_iiidi).apply(null, arguments);
    };
    var _0x5e0a72 = _0x4bcfe1.dynCall_iidiiiii = function () {
      return (_0x5e0a72 = _0x4bcfe1.dynCall_iidiiiii = _0x4bcfe1.asm.dynCall_iidiiiii).apply(null, arguments);
    };
    var _0x531f6c = _0x4bcfe1.dynCall_ijiiiiiiiii = function () {
      return (_0x531f6c = _0x4bcfe1.dynCall_ijiiiiiiiii = _0x4bcfe1.asm.dynCall_ijiiiiiiiii).apply(null, arguments);
    };
    var _0x36c451 = _0x4bcfe1.dynCall_viijiiiiii = function () {
      return (_0x36c451 = _0x4bcfe1.dynCall_viijiiiiii = _0x4bcfe1.asm.dynCall_viijiiiiii).apply(null, arguments);
    };
    var _0x25662f = _0x4bcfe1.dynCall_jiidi = function () {
      return (_0x25662f = _0x4bcfe1.dynCall_jiidi = _0x4bcfe1.asm.dynCall_jiidi).apply(null, arguments);
    };
    var _0x5e4886 = _0x4bcfe1.dynCall_viiiidijii = function () {
      return (_0x5e4886 = _0x4bcfe1.dynCall_viiiidijii = _0x4bcfe1.asm.dynCall_viiiidijii).apply(null, arguments);
    };
    var _0x59e433 = _0x4bcfe1.dynCall_viiiidii = function () {
      return (_0x59e433 = _0x4bcfe1.dynCall_viiiidii = _0x4bcfe1.asm.dynCall_viiiidii).apply(null, arguments);
    };
    var _0xf6250c = _0x4bcfe1.dynCall_iiidiii = function () {
      return (_0xf6250c = _0x4bcfe1.dynCall_iiidiii = _0x4bcfe1.asm.dynCall_iiidiii).apply(null, arguments);
    };
    var _0x4e9272 = _0x4bcfe1.dynCall_iiidii = function () {
      return (_0x4e9272 = _0x4bcfe1.dynCall_iiidii = _0x4bcfe1.asm.dynCall_iiidii).apply(null, arguments);
    };
    var _0x40b324 = _0x4bcfe1.dynCall_vidiii = function () {
      return (_0x40b324 = _0x4bcfe1.dynCall_vidiii = _0x4bcfe1.asm.dynCall_vidiii).apply(null, arguments);
    };
    var _0x410854 = _0x4bcfe1.dynCall_viijiiiii = function () {
      return (_0x410854 = _0x4bcfe1.dynCall_viijiiiii = _0x4bcfe1.asm.dynCall_viijiiiii).apply(null, arguments);
    };
    var _0x45f68c = _0x4bcfe1.dynCall_viiffffffi = function () {
      return (_0x45f68c = _0x4bcfe1.dynCall_viiffffffi = _0x4bcfe1.asm.dynCall_viiffffffi).apply(null, arguments);
    };
    var _0x5db162 = _0x4bcfe1.dynCall_viiffffffffi = function () {
      return (_0x5db162 = _0x4bcfe1.dynCall_viiffffffffi = _0x4bcfe1.asm.dynCall_viiffffffffi).apply(null, arguments);
    };
    var _0x4a0b76 = _0x4bcfe1.dynCall_viiffffffffiii = function () {
      return (_0x4a0b76 = _0x4bcfe1.dynCall_viiffffffffiii = _0x4bcfe1.asm.dynCall_viiffffffffiii).apply(null, arguments);
    };
    var _0x3fa9f7 = _0x4bcfe1.dynCall_viiiiffffii = function () {
      return (_0x3fa9f7 = _0x4bcfe1.dynCall_viiiiffffii = _0x4bcfe1.asm.dynCall_viiiiffffii).apply(null, arguments);
    };
    var _0x3425a8 = _0x4bcfe1.dynCall_fiiiiii = function () {
      return (_0x3425a8 = _0x4bcfe1.dynCall_fiiiiii = _0x4bcfe1.asm.dynCall_fiiiiii).apply(null, arguments);
    };
    var _0x22cee3 = _0x4bcfe1.dynCall_viiijji = function () {
      return (_0x22cee3 = _0x4bcfe1.dynCall_viiijji = _0x4bcfe1.asm.dynCall_viiijji).apply(null, arguments);
    };
    var _0x5c7385 = _0x4bcfe1.dynCall_vijiiiiiii = function () {
      return (_0x5c7385 = _0x4bcfe1.dynCall_vijiiiiiii = _0x4bcfe1.asm.dynCall_vijiiiiiii).apply(null, arguments);
    };
    var _0xe7206a = _0x4bcfe1.dynCall_vijiiiiiiii = function () {
      return (_0xe7206a = _0x4bcfe1.dynCall_vijiiiiiiii = _0x4bcfe1.asm.dynCall_vijiiiiiiii).apply(null, arguments);
    };
    var _0x31d6d4 = _0x4bcfe1.dynCall_jjiiii = function () {
      return (_0x31d6d4 = _0x4bcfe1.dynCall_jjiiii = _0x4bcfe1.asm.dynCall_jjiiii).apply(null, arguments);
    };
    var _0x2dc5a9 = _0x4bcfe1.dynCall_jjiiiii = function () {
      return (_0x2dc5a9 = _0x4bcfe1.dynCall_jjiiiii = _0x4bcfe1.asm.dynCall_jjiiiii).apply(null, arguments);
    };
    var _0x411dd5 = _0x4bcfe1.dynCall_jijjji = function () {
      return (_0x411dd5 = _0x4bcfe1.dynCall_jijjji = _0x4bcfe1.asm.dynCall_jijjji).apply(null, arguments);
    };
    var _0x1b9e9d = _0x4bcfe1.dynCall_jijjjii = function () {
      return (_0x1b9e9d = _0x4bcfe1.dynCall_jijjjii = _0x4bcfe1.asm.dynCall_jijjjii).apply(null, arguments);
    };
    var _0x4dfd45 = _0x4bcfe1.dynCall_jjiii = function () {
      return (_0x4dfd45 = _0x4bcfe1.dynCall_jjiii = _0x4bcfe1.asm.dynCall_jjiii).apply(null, arguments);
    };
    var _0x9407aa = _0x4bcfe1.dynCall_ijijiiiii = function () {
      return (_0x9407aa = _0x4bcfe1.dynCall_ijijiiiii = _0x4bcfe1.asm.dynCall_ijijiiiii).apply(null, arguments);
    };
    var _0x41080e = _0x4bcfe1.dynCall_ijjjiii = function () {
      return (_0x41080e = _0x4bcfe1.dynCall_ijjjiii = _0x4bcfe1.asm.dynCall_ijjjiii).apply(null, arguments);
    };
    var _0x31646c = _0x4bcfe1.dynCall_vijjjiijii = function () {
      return (_0x31646c = _0x4bcfe1.dynCall_vijjjiijii = _0x4bcfe1.asm.dynCall_vijjjiijii).apply(null, arguments);
    };
    var _0x10b280 = _0x4bcfe1.dynCall_ijjjiijii = function () {
      return (_0x10b280 = _0x4bcfe1.dynCall_ijjjiijii = _0x4bcfe1.asm.dynCall_ijjjiijii).apply(null, arguments);
    };
    var _0x42ffc9 = _0x4bcfe1.dynCall_jfi = function () {
      return (_0x42ffc9 = _0x4bcfe1.dynCall_jfi = _0x4bcfe1.asm.dynCall_jfi).apply(null, arguments);
    };
    var _0xda93c9 = _0x4bcfe1.dynCall_fji = function () {
      return (_0xda93c9 = _0x4bcfe1.dynCall_fji = _0x4bcfe1.asm.dynCall_fji).apply(null, arguments);
    };
    var _0xae38f3 = _0x4bcfe1.dynCall_dfi = function () {
      return (_0xae38f3 = _0x4bcfe1.dynCall_dfi = _0x4bcfe1.asm.dynCall_dfi).apply(null, arguments);
    };
    var _0x445dc4 = _0x4bcfe1.dynCall_jidii = function () {
      return (_0x445dc4 = _0x4bcfe1.dynCall_jidii = _0x4bcfe1.asm.dynCall_jidii).apply(null, arguments);
    };
    var _0x4ce255 = _0x4bcfe1.dynCall_viiiiiiiji = function () {
      return (_0x4ce255 = _0x4bcfe1.dynCall_viiiiiiiji = _0x4bcfe1.asm.dynCall_viiiiiiiji).apply(null, arguments);
    };
    var _0x363a8c = _0x4bcfe1.dynCall_viiiiiiiiji = function () {
      return (_0x363a8c = _0x4bcfe1.dynCall_viiiiiiiiji = _0x4bcfe1.asm.dynCall_viiiiiiiiji).apply(null, arguments);
    };
    var _0x5a1f7b = _0x4bcfe1.dynCall_viiiiiiiiiji = function () {
      return (_0x5a1f7b = _0x4bcfe1.dynCall_viiiiiiiiiji = _0x4bcfe1.asm.dynCall_viiiiiiiiiji).apply(null, arguments);
    };
    var _0x10a024 = _0x4bcfe1.dynCall_ijiijii = function () {
      return (_0x10a024 = _0x4bcfe1.dynCall_ijiijii = _0x4bcfe1.asm.dynCall_ijiijii).apply(null, arguments);
    };
    var _0x3b568d = _0x4bcfe1.dynCall_vjjiiiii = function () {
      return (_0x3b568d = _0x4bcfe1.dynCall_vjjiiiii = _0x4bcfe1.asm.dynCall_vjjiiiii).apply(null, arguments);
    };
    var _0x425040 = _0x4bcfe1.dynCall_vjjii = function () {
      return (_0x425040 = _0x4bcfe1.dynCall_vjjii = _0x4bcfe1.asm.dynCall_vjjii).apply(null, arguments);
    };
    var _0x4704ac = _0x4bcfe1.dynCall_ijiiji = function () {
      return (_0x4704ac = _0x4bcfe1.dynCall_ijiiji = _0x4bcfe1.asm.dynCall_ijiiji).apply(null, arguments);
    };
    var _0x458cb6 = _0x4bcfe1.dynCall_ijiiiii = function () {
      return (_0x458cb6 = _0x4bcfe1.dynCall_ijiiiii = _0x4bcfe1.asm.dynCall_ijiiiii).apply(null, arguments);
    };
    var _0x1df362 = _0x4bcfe1.dynCall_ijiiiiji = function () {
      return (_0x1df362 = _0x4bcfe1.dynCall_ijiiiiji = _0x4bcfe1.asm.dynCall_ijiiiiji).apply(null, arguments);
    };
    var _0x15e680 = _0x4bcfe1.dynCall_jiiiiii = function () {
      return (_0x15e680 = _0x4bcfe1.dynCall_jiiiiii = _0x4bcfe1.asm.dynCall_jiiiiii).apply(null, arguments);
    };
    var _0x2504a8 = _0x4bcfe1.dynCall_ddii = function () {
      return (_0x2504a8 = _0x4bcfe1.dynCall_ddii = _0x4bcfe1.asm.dynCall_ddii).apply(null, arguments);
    };
    var _0x57f8fb = _0x4bcfe1.dynCall_idiii = function () {
      return (_0x57f8fb = _0x4bcfe1.dynCall_idiii = _0x4bcfe1.asm.dynCall_idiii).apply(null, arguments);
    };
    var _0x30fea2 = _0x4bcfe1.dynCall_ifiiiii = function () {
      return (_0x30fea2 = _0x4bcfe1.dynCall_ifiiiii = _0x4bcfe1.asm.dynCall_ifiiiii).apply(null, arguments);
    };
    var _0x33a83a = _0x4bcfe1.dynCall_jjjii = function () {
      return (_0x33a83a = _0x4bcfe1.dynCall_jjjii = _0x4bcfe1.asm.dynCall_jjjii).apply(null, arguments);
    };
    var _0x342c69 = _0x4bcfe1.dynCall_vdiii = function () {
      return (_0x342c69 = _0x4bcfe1.dynCall_vdiii = _0x4bcfe1.asm.dynCall_vdiii).apply(null, arguments);
    };
    var _0x577354 = _0x4bcfe1.dynCall_jdii = function () {
      return (_0x577354 = _0x4bcfe1.dynCall_jdii = _0x4bcfe1.asm.dynCall_jdii).apply(null, arguments);
    };
    var _0x5d9ef7 = _0x4bcfe1.dynCall_vijijji = function () {
      return (_0x5d9ef7 = _0x4bcfe1.dynCall_vijijji = _0x4bcfe1.asm.dynCall_vijijji).apply(null, arguments);
    };
    var _0x375139 = _0x4bcfe1.dynCall_iijjji = function () {
      return (_0x375139 = _0x4bcfe1.dynCall_iijjji = _0x4bcfe1.asm.dynCall_iijjji).apply(null, arguments);
    };
    var _0x15ca74 = _0x4bcfe1.dynCall_viijjji = function () {
      return (_0x15ca74 = _0x4bcfe1.dynCall_viijjji = _0x4bcfe1.asm.dynCall_viijjji).apply(null, arguments);
    };
    var _0x5b5e90 = _0x4bcfe1.dynCall_vdii = function () {
      return (_0x5b5e90 = _0x4bcfe1.dynCall_vdii = _0x4bcfe1.asm.dynCall_vdii).apply(null, arguments);
    };
    var _0x1f683d = _0x4bcfe1.dynCall_diddi = function () {
      return (_0x1f683d = _0x4bcfe1.dynCall_diddi = _0x4bcfe1.asm.dynCall_diddi).apply(null, arguments);
    };
    var _0x761f78 = _0x4bcfe1.dynCall_iijjii = function () {
      return (_0x761f78 = _0x4bcfe1.dynCall_iijjii = _0x4bcfe1.asm.dynCall_iijjii).apply(null, arguments);
    };
    var _0xb0ddae = _0x4bcfe1.dynCall_viijijii = function () {
      return (_0xb0ddae = _0x4bcfe1.dynCall_viijijii = _0x4bcfe1.asm.dynCall_viijijii).apply(null, arguments);
    };
    var _0x2f4177 = _0x4bcfe1.dynCall_vijiji = function () {
      return (_0x2f4177 = _0x4bcfe1.dynCall_vijiji = _0x4bcfe1.asm.dynCall_vijiji).apply(null, arguments);
    };
    var _0x3d3caa = _0x4bcfe1.dynCall_viijiijiii = function () {
      return (_0x3d3caa = _0x4bcfe1.dynCall_viijiijiii = _0x4bcfe1.asm.dynCall_viijiijiii).apply(null, arguments);
    };
    var _0x55cb44 = _0x4bcfe1.dynCall_viiiijiiii = function () {
      return (_0x55cb44 = _0x4bcfe1.dynCall_viiiijiiii = _0x4bcfe1.asm.dynCall_viiiijiiii).apply(null, arguments);
    };
    var _0x7ff25f = _0x4bcfe1.dynCall_di = function () {
      return (_0x7ff25f = _0x4bcfe1.dynCall_di = _0x4bcfe1.asm.dynCall_di).apply(null, arguments);
    };
    var _0x2f42f2 = _0x4bcfe1.dynCall_jiiiiiiiii = function () {
      return (_0x2f42f2 = _0x4bcfe1.dynCall_jiiiiiiiii = _0x4bcfe1.asm.dynCall_jiiiiiiiii).apply(null, arguments);
    };
    var _0x1f7a7f = _0x4bcfe1.dynCall_jiiiiiiiiii = function () {
      return (_0x1f7a7f = _0x4bcfe1.dynCall_jiiiiiiiiii = _0x4bcfe1.asm.dynCall_jiiiiiiiiii).apply(null, arguments);
    };
    var _0x360b40 = _0x4bcfe1.dynCall_iiiiijii = function () {
      return (_0x360b40 = _0x4bcfe1.dynCall_iiiiijii = _0x4bcfe1.asm.dynCall_iiiiijii).apply(null, arguments);
    };
    var _0x2af946 = _0x4bcfe1.dynCall_iiiiidii = function () {
      return (_0x2af946 = _0x4bcfe1.dynCall_iiiiidii = _0x4bcfe1.asm.dynCall_iiiiidii).apply(null, arguments);
    };
    var _0x45297c = _0x4bcfe1.dynCall_viifffiii = function () {
      return (_0x45297c = _0x4bcfe1.dynCall_viifffiii = _0x4bcfe1.asm.dynCall_viifffiii).apply(null, arguments);
    };
    var _0x2e3be5 = _0x4bcfe1.dynCall_iidfii = function () {
      return (_0x2e3be5 = _0x4bcfe1.dynCall_iidfii = _0x4bcfe1.asm.dynCall_iidfii).apply(null, arguments);
    };
    var _0x5d2e7a = _0x4bcfe1.dynCall_iidfi = function () {
      return (_0x5d2e7a = _0x4bcfe1.dynCall_iidfi = _0x4bcfe1.asm.dynCall_iidfi).apply(null, arguments);
    };
    var _0x19deab = _0x4bcfe1.dynCall_iiddfi = function () {
      return (_0x19deab = _0x4bcfe1.dynCall_iiddfi = _0x4bcfe1.asm.dynCall_iiddfi).apply(null, arguments);
    };
    var _0x111421 = _0x4bcfe1.dynCall_iijfii = function () {
      return (_0x111421 = _0x4bcfe1.dynCall_iijfii = _0x4bcfe1.asm.dynCall_iijfii).apply(null, arguments);
    };
    var _0x53411a = _0x4bcfe1.dynCall_iijfi = function () {
      return (_0x53411a = _0x4bcfe1.dynCall_iijfi = _0x4bcfe1.asm.dynCall_iijfi).apply(null, arguments);
    };
    var _0x1ce1c1 = _0x4bcfe1.dynCall_iijjfi = function () {
      return (_0x1ce1c1 = _0x4bcfe1.dynCall_iijjfi = _0x4bcfe1.asm.dynCall_iijjfi).apply(null, arguments);
    };
    var _0x1e0ffd = _0x4bcfe1.dynCall_iiiiffiiiji = function () {
      return (_0x1e0ffd = _0x4bcfe1.dynCall_iiiiffiiiji = _0x4bcfe1.asm.dynCall_iiiiffiiiji).apply(null, arguments);
    };
    var _0x5ebb27 = _0x4bcfe1.dynCall_iiidfii = function () {
      return (_0x5ebb27 = _0x4bcfe1.dynCall_iiidfii = _0x4bcfe1.asm.dynCall_iiidfii).apply(null, arguments);
    };
    var _0x387d53 = _0x4bcfe1.dynCall_iiijfii = function () {
      return (_0x387d53 = _0x4bcfe1.dynCall_iiijfii = _0x4bcfe1.asm.dynCall_iiijfii).apply(null, arguments);
    };
    var _0x186df3 = _0x4bcfe1.dynCall_jiiiiiii = function () {
      return (_0x186df3 = _0x4bcfe1.dynCall_jiiiiiii = _0x4bcfe1.asm.dynCall_jiiiiiii).apply(null, arguments);
    };
    var _0x8635d0 = _0x4bcfe1.dynCall_iiiiffiiiii = function () {
      return (_0x8635d0 = _0x4bcfe1.dynCall_iiiiffiiiii = _0x4bcfe1.asm.dynCall_iiiiffiiiii).apply(null, arguments);
    };
    var _0xbfa11e = _0x4bcfe1.dynCall_iiiidfii = function () {
      return (_0xbfa11e = _0x4bcfe1.dynCall_iiiidfii = _0x4bcfe1.asm.dynCall_iiiidfii).apply(null, arguments);
    };
    var _0x31538f = _0x4bcfe1.dynCall_iiiijfii = function () {
      return (_0x31538f = _0x4bcfe1.dynCall_iiiijfii = _0x4bcfe1.asm.dynCall_iiiijfii).apply(null, arguments);
    };
    var _0x60e2bb = _0x4bcfe1.dynCall_diiiidi = function () {
      return (_0x60e2bb = _0x4bcfe1.dynCall_diiiidi = _0x4bcfe1.asm.dynCall_diiiidi).apply(null, arguments);
    };
    var _0x33ed83 = _0x4bcfe1.dynCall_jiiiiji = function () {
      return (_0x33ed83 = _0x4bcfe1.dynCall_jiiiiji = _0x4bcfe1.asm.dynCall_jiiiiji).apply(null, arguments);
    };
    var _0x5e5d89 = _0x4bcfe1.dynCall_fiiiifi = function () {
      return (_0x5e5d89 = _0x4bcfe1.dynCall_fiiiifi = _0x4bcfe1.asm.dynCall_fiiiifi).apply(null, arguments);
    };
    var _0x5482aa = _0x4bcfe1.dynCall_iiiiiiiiiiiiiii = function () {
      return (_0x5482aa = _0x4bcfe1.dynCall_iiiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x2d2b32 = _0x4bcfe1.dynCall_iiiiiiiiiiiiiiii = function () {
      return (_0x2d2b32 = _0x4bcfe1.dynCall_iiiiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x50b9e8 = _0x4bcfe1.dynCall_iiiiiiiiiiiiiiiii = function () {
      return (_0x50b9e8 = _0x4bcfe1.dynCall_iiiiiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x5e7b0b = _0x4bcfe1.dynCall_iiiiiiiiiiiiiiiiii = function () {
      return (_0x5e7b0b = _0x4bcfe1.dynCall_iiiiiiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x12a51c = _0x4bcfe1.dynCall_iiiiiiiiiiiiiiiiiii = function () {
      return (_0x12a51c = _0x4bcfe1.dynCall_iiiiiiiiiiiiiiiiiii = _0x4bcfe1.asm.dynCall_iiiiiiiiiiiiiiiiiii).apply(null, arguments);
    };
    var _0x2952d6 = _0x4bcfe1.dynCall_iiijjii = function () {
      return (_0x2952d6 = _0x4bcfe1.dynCall_iiijjii = _0x4bcfe1.asm.dynCall_iiijjii).apply(null, arguments);
    };
    var _0x36d088 = _0x4bcfe1.dynCall_ijiiiiii = function () {
      return (_0x36d088 = _0x4bcfe1.dynCall_ijiiiiii = _0x4bcfe1.asm.dynCall_ijiiiiii).apply(null, arguments);
    };
    var _0x5ede28 = _0x4bcfe1.dynCall_ijjiiiiii = function () {
      return (_0x5ede28 = _0x4bcfe1.dynCall_ijjiiiiii = _0x4bcfe1.asm.dynCall_ijjiiiiii).apply(null, arguments);
    };
    var _0x3ca267 = _0x4bcfe1.dynCall_vdi = function () {
      return (_0x3ca267 = _0x4bcfe1.dynCall_vdi = _0x4bcfe1.asm.dynCall_vdi).apply(null, arguments);
    };
    var _0x5a84ac = _0x4bcfe1.dynCall_vjijii = function () {
      return (_0x5a84ac = _0x4bcfe1.dynCall_vjijii = _0x4bcfe1.asm.dynCall_vjijii).apply(null, arguments);
    };
    var _0x29fff1 = _0x4bcfe1.dynCall_fff = function () {
      return (_0x29fff1 = _0x4bcfe1.dynCall_fff = _0x4bcfe1.asm.dynCall_fff).apply(null, arguments);
    };
    var _0x27e970 = _0x4bcfe1.dynCall_ijj = function () {
      return (_0x27e970 = _0x4bcfe1.dynCall_ijj = _0x4bcfe1.asm.dynCall_ijj).apply(null, arguments);
    };
    var _0x463a61 = _0x4bcfe1.dynCall_vjji = function () {
      return (_0x463a61 = _0x4bcfe1.dynCall_vjji = _0x4bcfe1.asm.dynCall_vjji).apply(null, arguments);
    };
    var _0x118b25 = _0x4bcfe1.dynCall_vif = function () {
      return (_0x118b25 = _0x4bcfe1.dynCall_vif = _0x4bcfe1.asm.dynCall_vif).apply(null, arguments);
    };
    var _0x36ae3b = _0x4bcfe1.dynCall_viif = function () {
      return (_0x36ae3b = _0x4bcfe1.dynCall_viif = _0x4bcfe1.asm.dynCall_viif).apply(null, arguments);
    };
    var _0x2b9e6d = _0x4bcfe1.dynCall_vid = function () {
      return (_0x2b9e6d = _0x4bcfe1.dynCall_vid = _0x4bcfe1.asm.dynCall_vid).apply(null, arguments);
    };
    var _0x57b670 = _0x4bcfe1.dynCall_viiiiif = function () {
      return (_0x57b670 = _0x4bcfe1.dynCall_viiiiif = _0x4bcfe1.asm.dynCall_viiiiif).apply(null, arguments);
    };
    var _0x2556c6 = _0x4bcfe1.dynCall_viiiif = function () {
      return (_0x2556c6 = _0x4bcfe1.dynCall_viiiif = _0x4bcfe1.asm.dynCall_viiiif).apply(null, arguments);
    };
    var _0x2586ce = _0x4bcfe1.dynCall_viiiiiif = function () {
      return (_0x2586ce = _0x4bcfe1.dynCall_viiiiiif = _0x4bcfe1.asm.dynCall_viiiiiif).apply(null, arguments);
    };
    var _0x1dcbd1 = _0x4bcfe1.dynCall_iiiijiii = function () {
      return (_0x1dcbd1 = _0x4bcfe1.dynCall_iiiijiii = _0x4bcfe1.asm.dynCall_iiiijiii).apply(null, arguments);
    };
    var _0x3b9fbc = _0x4bcfe1.dynCall_iiiij = function () {
      return (_0x3b9fbc = _0x4bcfe1.dynCall_iiiij = _0x4bcfe1.asm.dynCall_iiiij).apply(null, arguments);
    };
    var _0x4048ea = _0x4bcfe1.dynCall_iiif = function () {
      return (_0x4048ea = _0x4bcfe1.dynCall_iiif = _0x4bcfe1.asm.dynCall_iiif).apply(null, arguments);
    };
    var _0x4f58a2 = _0x4bcfe1.dynCall_fif = function () {
      return (_0x4f58a2 = _0x4bcfe1.dynCall_fif = _0x4bcfe1.asm.dynCall_fif).apply(null, arguments);
    };
    var _0x5b7cb9 = _0x4bcfe1.dynCall_iiiiiifff = function () {
      return (_0x5b7cb9 = _0x4bcfe1.dynCall_iiiiiifff = _0x4bcfe1.asm.dynCall_iiiiiifff).apply(null, arguments);
    };
    var _0x36dbbf = _0x4bcfe1.dynCall_iiiiiifiif = function () {
      return (_0x36dbbf = _0x4bcfe1.dynCall_iiiiiifiif = _0x4bcfe1.asm.dynCall_iiiiiifiif).apply(null, arguments);
    };
    var _0x41cc90 = _0x4bcfe1.dynCall_iiiiiifiii = function () {
      return (_0x41cc90 = _0x4bcfe1.dynCall_iiiiiifiii = _0x4bcfe1.asm.dynCall_iiiiiifiii).apply(null, arguments);
    };
    var _0xc1497b = _0x4bcfe1.dynCall_iiiiiiifiif = function () {
      return (_0xc1497b = _0x4bcfe1.dynCall_iiiiiiifiif = _0x4bcfe1.asm.dynCall_iiiiiiifiif).apply(null, arguments);
    };
    var _0x472752 = _0x4bcfe1.dynCall_fiff = function () {
      return (_0x472752 = _0x4bcfe1.dynCall_fiff = _0x4bcfe1.asm.dynCall_fiff).apply(null, arguments);
    };
    var _0x26a14e = _0x4bcfe1.dynCall_fiiiiiifiifif = function () {
      return (_0x26a14e = _0x4bcfe1.dynCall_fiiiiiifiifif = _0x4bcfe1.asm.dynCall_fiiiiiifiifif).apply(null, arguments);
    };
    var _0x3dec5e = _0x4bcfe1.dynCall_fiiiiiifiiiif = function () {
      return (_0x3dec5e = _0x4bcfe1.dynCall_fiiiiiifiiiif = _0x4bcfe1.asm.dynCall_fiiiiiifiiiif).apply(null, arguments);
    };
    var _0xd75788 = _0x4bcfe1.dynCall_iifiiiijii = function () {
      return (_0xd75788 = _0x4bcfe1.dynCall_iifiiiijii = _0x4bcfe1.asm.dynCall_iifiiiijii).apply(null, arguments);
    };
    var _0x5d6b3e = _0x4bcfe1.dynCall_vifif = function () {
      return (_0x5d6b3e = _0x4bcfe1.dynCall_vifif = _0x4bcfe1.asm.dynCall_vifif).apply(null, arguments);
    };
    var _0x408086 = _0x4bcfe1.dynCall_vifijii = function () {
      return (_0x408086 = _0x4bcfe1.dynCall_vifijii = _0x4bcfe1.asm.dynCall_vifijii).apply(null, arguments);
    };
    var _0x287ead = _0x4bcfe1.dynCall_iiiifffiii = function () {
      return (_0x287ead = _0x4bcfe1.dynCall_iiiifffiii = _0x4bcfe1.asm.dynCall_iiiifffiii).apply(null, arguments);
    };
    var _0xf8e321 = _0x4bcfe1.dynCall_iiiifffffi = function () {
      return (_0xf8e321 = _0x4bcfe1.dynCall_iiiifffffi = _0x4bcfe1.asm.dynCall_iiiifffffi).apply(null, arguments);
    };
    var _0x431245 = _0x4bcfe1.dynCall_viffiiiif = function () {
      return (_0x431245 = _0x4bcfe1.dynCall_viffiiiif = _0x4bcfe1.asm.dynCall_viffiiiif).apply(null, arguments);
    };
    var _0x124dad = _0x4bcfe1.dynCall_viffiifffffiii = function () {
      return (_0x124dad = _0x4bcfe1.dynCall_viffiifffffiii = _0x4bcfe1.asm.dynCall_viffiifffffiii).apply(null, arguments);
    };
    var _0x51fe9d = _0x4bcfe1.dynCall_viffffiifffiiiiif = function () {
      return (_0x51fe9d = _0x4bcfe1.dynCall_viffffiifffiiiiif = _0x4bcfe1.asm.dynCall_viffffiifffiiiiif).apply(null, arguments);
    };
    var _0x26698c = _0x4bcfe1.dynCall_iiiifffffii = function () {
      return (_0x26698c = _0x4bcfe1.dynCall_iiiifffffii = _0x4bcfe1.asm.dynCall_iiiifffffii).apply(null, arguments);
    };
    var _0x547a85 = _0x4bcfe1.dynCall_viiiiiiiiiiifii = function () {
      return (_0x547a85 = _0x4bcfe1.dynCall_viiiiiiiiiiifii = _0x4bcfe1.asm.dynCall_viiiiiiiiiiifii).apply(null, arguments);
    };
    var _0x535484 = _0x4bcfe1.dynCall_viff = function () {
      return (_0x535484 = _0x4bcfe1.dynCall_viff = _0x4bcfe1.asm.dynCall_viff).apply(null, arguments);
    };
    var _0x4ec63e = _0x4bcfe1.dynCall_iiiiifiiiiif = function () {
      return (_0x4ec63e = _0x4bcfe1.dynCall_iiiiifiiiiif = _0x4bcfe1.asm.dynCall_iiiiifiiiiif).apply(null, arguments);
    };
    var _0x418393 = _0x4bcfe1.dynCall_viiff = function () {
      return (_0x418393 = _0x4bcfe1.dynCall_viiff = _0x4bcfe1.asm.dynCall_viiff).apply(null, arguments);
    };
    var _0x2da836 = _0x4bcfe1.dynCall_viiifiiiii = function () {
      return (_0x2da836 = _0x4bcfe1.dynCall_viiifiiiii = _0x4bcfe1.asm.dynCall_viiifiiiii).apply(null, arguments);
    };
    var _0xa62a53 = _0x4bcfe1.dynCall_viiiifiiiiif = function () {
      return (_0xa62a53 = _0x4bcfe1.dynCall_viiiifiiiiif = _0x4bcfe1.asm.dynCall_viiiifiiiiif).apply(null, arguments);
    };
    var _0x5aa40b = _0x4bcfe1.dynCall_iifff = function () {
      return (_0x5aa40b = _0x4bcfe1.dynCall_iifff = _0x4bcfe1.asm.dynCall_iifff).apply(null, arguments);
    };
    var _0x5d167c = _0x4bcfe1.dynCall_iif = function () {
      return (_0x5d167c = _0x4bcfe1.dynCall_iif = _0x4bcfe1.asm.dynCall_iif).apply(null, arguments);
    };
    var _0x1e099c = _0x4bcfe1.dynCall_viij = function () {
      return (_0x1e099c = _0x4bcfe1.dynCall_viij = _0x4bcfe1.asm.dynCall_viij).apply(null, arguments);
    };
    var _0x515c3b = _0x4bcfe1.dynCall_viijijj = function () {
      return (_0x515c3b = _0x4bcfe1.dynCall_viijijj = _0x4bcfe1.asm.dynCall_viijijj).apply(null, arguments);
    };
    var _0x1f50b5 = _0x4bcfe1.dynCall_viijj = function () {
      return (_0x1f50b5 = _0x4bcfe1.dynCall_viijj = _0x4bcfe1.asm.dynCall_viijj).apply(null, arguments);
    };
    var _0x841ab = _0x4bcfe1.dynCall_viiiij = function () {
      return (_0x841ab = _0x4bcfe1.dynCall_viiiij = _0x4bcfe1.asm.dynCall_viiiij).apply(null, arguments);
    };
    var _0x309b43 = _0x4bcfe1.dynCall_iiijji = function () {
      return (_0x309b43 = _0x4bcfe1.dynCall_iiijji = _0x4bcfe1.asm.dynCall_iiijji).apply(null, arguments);
    };
    var _0x4a5dae = _0x4bcfe1.dynCall_ijjiiiii = function () {
      return (_0x4a5dae = _0x4bcfe1.dynCall_ijjiiiii = _0x4bcfe1.asm.dynCall_ijjiiiii).apply(null, arguments);
    };
    var _0x453765 = _0x4bcfe1.dynCall_vidd = function () {
      return (_0x453765 = _0x4bcfe1.dynCall_vidd = _0x4bcfe1.asm.dynCall_vidd).apply(null, arguments);
    };
    var _0x5c1fba = _0x4bcfe1.dynCall_iiiiiifffiiifiii = function () {
      return (_0x5c1fba = _0x4bcfe1.dynCall_iiiiiifffiiifiii = _0x4bcfe1.asm.dynCall_iiiiiifffiiifiii).apply(null, arguments);
    };
    var _0x4182e5 = _0x4bcfe1.dynCall_viid = function () {
      return (_0x4182e5 = _0x4bcfe1.dynCall_viid = _0x4bcfe1.asm.dynCall_viid).apply(null, arguments);
    };
    var _0x1bc872 = _0x4bcfe1.dynCall_viiif = function () {
      return (_0x1bc872 = _0x4bcfe1.dynCall_viiif = _0x4bcfe1.asm.dynCall_viiif).apply(null, arguments);
    };
    var _0x14151d = _0x4bcfe1.dynCall_fiiiif = function () {
      return (_0x14151d = _0x4bcfe1.dynCall_fiiiif = _0x4bcfe1.asm.dynCall_fiiiif).apply(null, arguments);
    };
    var _0x543d22 = _0x4bcfe1.dynCall_iiiiiff = function () {
      return (_0x543d22 = _0x4bcfe1.dynCall_iiiiiff = _0x4bcfe1.asm.dynCall_iiiiiff).apply(null, arguments);
    };
    var _0x5d1f6d = _0x4bcfe1.dynCall_iiij = function () {
      return (_0x5d1f6d = _0x4bcfe1.dynCall_iiij = _0x4bcfe1.asm.dynCall_iiij).apply(null, arguments);
    };
    var _0x2baa4a = _0x4bcfe1.dynCall_viffffffffffffiiii = function () {
      return (_0x2baa4a = _0x4bcfe1.dynCall_viffffffffffffiiii = _0x4bcfe1.asm.dynCall_viffffffffffffiiii).apply(null, arguments);
    };
    var _0x5b9784 = _0x4bcfe1.dynCall_viffff = function () {
      return (_0x5b9784 = _0x4bcfe1.dynCall_viffff = _0x4bcfe1.asm.dynCall_viffff).apply(null, arguments);
    };
    var _0x2cdbdc = _0x4bcfe1.dynCall_ij = function () {
      return (_0x2cdbdc = _0x4bcfe1.dynCall_ij = _0x4bcfe1.asm.dynCall_ij).apply(null, arguments);
    };
    var _0x455ad7 = _0x4bcfe1.dynCall_vf = function () {
      return (_0x455ad7 = _0x4bcfe1.dynCall_vf = _0x4bcfe1.asm.dynCall_vf).apply(null, arguments);
    };
    var _0x12c204 = _0x4bcfe1.dynCall_vffff = function () {
      return (_0x12c204 = _0x4bcfe1.dynCall_vffff = _0x4bcfe1.asm.dynCall_vffff).apply(null, arguments);
    };
    var _0x4ac1b7 = _0x4bcfe1.dynCall_vff = function () {
      return (_0x4ac1b7 = _0x4bcfe1.dynCall_vff = _0x4bcfe1.asm.dynCall_vff).apply(null, arguments);
    };
    var _0x423f7e = _0x4bcfe1.dynCall_vifff = function () {
      return (_0x423f7e = _0x4bcfe1.dynCall_vifff = _0x4bcfe1.asm.dynCall_vifff).apply(null, arguments);
    };
    var _0x1a2c1b = _0x4bcfe1.dynCall_viifff = function () {
      return (_0x1a2c1b = _0x4bcfe1.dynCall_viifff = _0x4bcfe1.asm.dynCall_viifff).apply(null, arguments);
    };
    var _0x3d88fb = _0x4bcfe1.dynCall_vij = function () {
      return (_0x3d88fb = _0x4bcfe1.dynCall_vij = _0x4bcfe1.asm.dynCall_vij).apply(null, arguments);
    };
    var _0x2d9738 = _0x4bcfe1.dynCall_vfff = function () {
      return (_0x2d9738 = _0x4bcfe1.dynCall_vfff = _0x4bcfe1.asm.dynCall_vfff).apply(null, arguments);
    };
    var _0x136439 = _0x4bcfe1.dynCall_f = function () {
      return (_0x136439 = _0x4bcfe1.dynCall_f = _0x4bcfe1.asm.dynCall_f).apply(null, arguments);
    };
    var _0x64f78c = _0x4bcfe1.dynCall_ff = function () {
      return (_0x64f78c = _0x4bcfe1.dynCall_ff = _0x4bcfe1.asm.dynCall_ff).apply(null, arguments);
    };
    var _0xa927cb = _0x4bcfe1.dynCall_iiid = function () {
      return (_0xa927cb = _0x4bcfe1.dynCall_iiid = _0x4bcfe1.asm.dynCall_iiid).apply(null, arguments);
    };
    var _0x599016 = _0x4bcfe1.dynCall_vifffff = function () {
      return (_0x599016 = _0x4bcfe1.dynCall_vifffff = _0x4bcfe1.asm.dynCall_vifffff).apply(null, arguments);
    };
    var _0x468274 = _0x4bcfe1.dynCall_viififf = function () {
      return (_0x468274 = _0x4bcfe1.dynCall_viififf = _0x4bcfe1.asm.dynCall_viififf).apply(null, arguments);
    };
    var _0x8a241e = _0x4bcfe1.dynCall_iiififiii = function () {
      return (_0x8a241e = _0x4bcfe1.dynCall_iiififiii = _0x4bcfe1.asm.dynCall_iiififiii).apply(null, arguments);
    };
    var _0x43df13 = _0x4bcfe1.dynCall_fiif = function () {
      return (_0x43df13 = _0x4bcfe1.dynCall_fiif = _0x4bcfe1.asm.dynCall_fiif).apply(null, arguments);
    };
    var _0x45bd1f = _0x4bcfe1.dynCall_iiiiiiffiiiiiiiiiffffiii = function () {
      return (_0x45bd1f = _0x4bcfe1.dynCall_iiiiiiffiiiiiiiiiffffiii = _0x4bcfe1.asm.dynCall_iiiiiiffiiiiiiiiiffffiii).apply(null, arguments);
    };
    var _0x32030c = _0x4bcfe1.dynCall_viiffiiiiiiiii = function () {
      return (_0x32030c = _0x4bcfe1.dynCall_viiffiiiiiiiii = _0x4bcfe1.asm.dynCall_viiffiiiiiiiii).apply(null, arguments);
    };
    var _0x2b26ce = _0x4bcfe1.dynCall_viiffiiiiii = function () {
      return (_0x2b26ce = _0x4bcfe1.dynCall_viiffiiiiii = _0x4bcfe1.asm.dynCall_viiffiiiiii).apply(null, arguments);
    };
    var _0xdd5206 = _0x4bcfe1.dynCall_viiiiiiiijiii = function () {
      return (_0xdd5206 = _0x4bcfe1.dynCall_viiiiiiiijiii = _0x4bcfe1.asm.dynCall_viiiiiiiijiii).apply(null, arguments);
    };
    _0x4bcfe1.ccall = _0x3fb673;
    _0x4bcfe1.cwrap = _0x4b7ee7;
    _0x4bcfe1.stackTrace = _0x1aa9c0;
    _0x4bcfe1.addRunDependency = _0x441879;
    _0x4bcfe1.removeRunDependency = _0x3b7ae4;
    _0x4bcfe1.FS_createPath = _0x278315.createPath;
    _0x4bcfe1.FS_createDataFile = _0x278315.createDataFile;
    _0x4bcfe1.stackTrace = _0x1aa9c0;
    var _0x5ee93a;
    function _0x13a7a5(_0x1ac148) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + _0x1ac148 + ")";
      this.status = _0x1ac148;
    }
    var _0x4b8a84 = false;
    _0x151408 = function _0x5da74a() {
      if (!_0x5ee93a) {
        _0x3fd86d();
      }
      if (!_0x5ee93a) {
        _0x151408 = _0x5da74a;
      }
    };
    function _0xb1aaac(_0x1cf4e2) {
      var _0x51c0a2 = _0x4bcfe1._main;
      _0x1cf4e2 = _0x1cf4e2 || [];
      var _0x404d4e = _0x1cf4e2.length + 0x1;
      var _0x1fc446 = _0x1d99d1((_0x404d4e + 0x1) * 0x4);
      _0x46c9cf[_0x1fc446 >> 0x2] = _0x388784(_0x5877fe);
      for (var _0x49c6d1 = 0x1; _0x49c6d1 < _0x404d4e; _0x49c6d1++) {
        _0x46c9cf[(_0x1fc446 >> 0x2) + _0x49c6d1] = _0x388784(_0x1cf4e2[_0x49c6d1 - 0x1]);
      }
      _0x46c9cf[(_0x1fc446 >> 0x2) + _0x404d4e] = 0x0;
      try {
        var _0x5bb607 = _0x51c0a2(_0x404d4e, _0x1fc446);
        _0x504ca1(_0x5bb607, true);
        return _0x5bb607;
      } catch (_0x2e8db8) {
        return _0x406d9e(_0x2e8db8);
      } finally {
        _0x4b8a84 = true;
      }
    }
    function _0x3fd86d(_0x4053ce) {
      _0x4053ce = _0x4053ce || _0x2d1e5d;
      if (_0x190e0a > 0x0) {
        return;
      }
      _0x72e475();
      if (_0x190e0a > 0x0) {
        return;
      }
      function _0x2c0ab4() {
        if (_0x5ee93a) {
          return;
        }
        _0x5ee93a = true;
        _0x4bcfe1.calledRun = true;
        if (_0x533336) {
          return;
        }
        _0x1cd07e();
        _0x14f6df();
        _0x308627(_0x4bcfe1);
        if (_0x4bcfe1.onRuntimeInitialized) {
          _0x4bcfe1.onRuntimeInitialized();
        }
        if (_0xbb8fe6) {
          _0xb1aaac(_0x4053ce);
        }
        _0x1b8cb3();
      }
      if (_0x4bcfe1.setStatus) {
        _0x4bcfe1.setStatus("Running...");
        setTimeout(function () {
          setTimeout(function () {
            _0x4bcfe1.setStatus('');
          }, 0x1);
          _0x2c0ab4();
        }, 0x1);
      } else {
        _0x2c0ab4();
      }
    }
    _0x4bcfe1.run = _0x3fd86d;
    function _0x504ca1(_0x2f7caa, _0x1138fa) {
      _0x2f5541 = _0x2f7caa;
      _0x21fcb5(_0x2f7caa);
    }
    function _0x21fcb5(_0x5bb2dc) {
      _0x2f5541 = _0x5bb2dc;
      if (!_0x4f166f) {
        if (_0x4bcfe1.onExit) {
          _0x4bcfe1.onExit(_0x5bb2dc);
        }
        _0x533336 = true;
      }
      _0x15c649(_0x5bb2dc, new _0x13a7a5(_0x5bb2dc));
    }
    if (_0x4bcfe1.preInit) {
      if (typeof _0x4bcfe1.preInit == "function") {
        _0x4bcfe1.preInit = [_0x4bcfe1.preInit];
      }
      while (_0x4bcfe1.preInit.length > 0x0) {
        _0x4bcfe1.preInit.pop()();
      }
    }
    var _0xbb8fe6 = true;
    if (_0x4bcfe1.noInitialRun) {
      _0xbb8fe6 = false;
    }
    _0x3fd86d();
    return _0x59b85f.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object") {
  module.exports = unityFramework;
} else {
  if (typeof define === "function" && define.amd) {
    define([], function () {
      return unityFramework;
    });
  } else {
    if (typeof exports === "object") {
      exports.unityFramework = unityFramework;
    }
  }
}
config.sourceHtml = "REJVQUVUTWNid3hGTUVwd0p6d0FCUXNDRDFnS1hBY2REQlVkQmtzR0dSSWtUVFlTQ2lwUQ==";
window.GMPERFORM = {};
window.GMPERFORM.LOAD = Date.now();
if (!window.GMSOFT_OPTIONS) {
  window.GMSOFT_OPTIONS = config;
  window.GMSOFT_OPTIONS.domainHost = window.location.hostname;
}
config.referrer = document.referrer;
function gmdebugtime(_0x42d3f6) {
  console.log("_TIME_" + _0x42d3f6 + ":" + (Date.now() - window.GMPERFORM.LOAD));
}
function gmdebug(_0x12ffe8) {
  console.log(_0x12ffe8);
}
let fireFPS = 0x0;
async function loadGMData(_0x5c27e8, _0x27a82e) {
  try {
    if (!config.eventAPI) {
      return;
    }
    if (!config.eventLog && _0x5c27e8 != "document-ready" && _0x5c27e8 != "ban-game" && _0x5c27e8 != "start-game" && _0x5c27e8 != "unload-game") {
      return;
    }
    if (_0x5c27e8 == "fps") {
      try {
        let _0x54c11d = _0x27a82e.split("|");
        if (_0x54c11d.length >= 0x2) {
          firebaseLogEventParameter("timecounter", _0x54c11d[0x0]);
          if (fireFPS < 0x2) {
            fireFPS++;
            firebaseLogEventParameter("fps", _0x54c11d[0x1]);
          }
        }
      } catch (_0x20a475) {
        console.log("Error extracting time from abc:", _0x20a475.message);
      }
    }
    let _0x49ca82 = '';
    if (_0x27a82e) {
      _0x49ca82 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0x27a82e));
    }
    _0x49ca82 += "&time=" + encodeURIComponent(Date.now() - window.GMPERFORM.LOAD);
    _0x49ca82 += "&gid=" + config.gameId;
    if (_0x5c27e8 == "ban-game" || _0x5c27e8 == "document-ready" || _0x5c27e8 == "start-game") {
      _0x49ca82 += "&wtop=" + window.top.location.hostname;
      _0x49ca82 += "&hn=" + window.location.hostname;
      _0x49ca82 += "&referrer=" + config.referrer;
    }
    let _0x3474c1 = "&data=" + btoa(_0x49ca82);
    let _0x290d42 = config.eventAPI + "?event=" + _0x5c27e8 + _0x3474c1;
    let _0x6ca799 = new XMLHttpRequest();
    _0x6ca799.open("GET", _0x290d42);
    _0x6ca799.onreadystatechange = function () {
      if (_0x6ca799.readyState !== 0x4) {
        return;
      }
      if (_0x6ca799.status === 0xc8) {
        console.log(_0x6ca799.responseText);
      } else {
        console.log("HTTP error", _0x6ca799.status, _0x6ca799.statusText);
      }
    };
    _0x6ca799.send();
  } catch (_0x500e51) {}
}
function xorEncryptMsg(_0x394bea) {
  let _0x162bac = '';
  for (let _0x33a76f = 0x0; _0x33a76f < _0x394bea.length; _0x33a76f++) {
    const _0x1875bb = _0x394bea.charCodeAt(_0x33a76f) ^ "gmdata@&!message@!3!@".charCodeAt(_0x33a76f % "gmdata@&!message@!3!@".length);
    _0x162bac += String.fromCharCode(_0x1875bb);
  }
  return btoa(_0x162bac);
}
function check_event_log() {
  const _0x2db5cb = window.location.search;
  const _0x31e9ef = new URLSearchParams(_0x2db5cb);
  if (_0x31e9ef.has("e")) {
    config.eventLog = true;
  }
}
check_event_log();
function executeCode(_0x4da995) {
  try {
    const _0x2cfa42 = eval(_0x4da995);
    gmdebug("Result:", _0x2cfa42);
    return _0x2cfa42;
  } catch (_0x2d9681) {
    gmdebug("Error executing code:", _0x2d9681);
  }
}
function bangame(_0x1911ce, _0x11a4e8, _0x3aaa46, _0x3201d3) {
  return;
}
document.addEventListener("DOMContentLoaded", function () {
  gmEvent("document-ready");
});
window.addEventListener("beforeunload", function (_0x2722e1) {
  gmEvent("unload-game");
});
append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x37e2a4 = executeCode("atob(atob(\"" + window.GMSOFT_OPTIONS.sourceHtml + "\"))");
      let _0x5f1607 = '';
      for (let _0x1b4506 = 0x0; _0x1b4506 < _0x37e2a4.length; _0x1b4506++) {
        const _0x3b7d88 = _0x37e2a4.charCodeAt(_0x1b4506) ^ "data@&@#$@#^FFgdfg!1estimate".charCodeAt(_0x1b4506 % "data@&@#$@#^FFgdfg!1estimate".length);
        _0x5f1607 += String.fromCharCode(_0x3b7d88);
      }
      sourceHtml = _0x5f1607;
      let _0x39cc7f = document.getElementById("gmsoft-jssdk");
      if (!_0x39cc7f || _0x39cc7f.src != sourceHtml) {
        bangame("d", "s", "id", "code 1");
      }
    } catch (_0x18ed32) {
      bangame("d", "s", "id", "JS code 2:" + _0x18ed32.message);
    }
  }, 0xbb8);
}