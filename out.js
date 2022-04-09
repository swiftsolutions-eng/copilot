(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../wms-core-ui/node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "../wms-core-ui/node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends2 = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __2() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__2.prototype = b.prototype, new __2());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding2(o, m, p);
        };
        __createBinding2 = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          Object.defineProperty(o, k2, { enumerable: true, get: function() {
            return m[k];
          } });
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read2(arguments[i]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray2 = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding2(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      });
    }
  });

  // ../wms-core-ui/node_modules/tslib/modules/index.js
  var import_tslib, __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __createBinding, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet;
  var init_modules = __esm({
    "../wms-core-ui/node_modules/tslib/modules/index.js"() {
      import_tslib = __toESM(require_tslib(), 1);
      ({
        __extends,
        __assign,
        __rest,
        __decorate,
        __param,
        __metadata,
        __awaiter,
        __generator,
        __exportStar,
        __createBinding,
        __values,
        __read,
        __spread,
        __spreadArrays,
        __spreadArray,
        __await,
        __asyncGenerator,
        __asyncDelegator,
        __asyncValues,
        __makeTemplateObject,
        __importStar,
        __importDefault,
        __classPrivateFieldGet,
        __classPrivateFieldSet
      } = import_tslib.default);
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.esm.js
  function invariant(condition, message) {
    if (!condition) {
      throw new InvariantError(message);
    }
  }
  function wrapConsoleMethod(name) {
    return function() {
      if (verbosityLevels.indexOf(name) >= verbosityLevel) {
        var method = console[name] || console.log;
        return method.apply(console, arguments);
      }
    };
  }
  function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
  }
  var genericMessage, _a, setPrototypeOf, InvariantError, verbosityLevels, verbosityLevel;
  var init_invariant_esm = __esm({
    "../wms-core-ui/node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.esm.js"() {
      init_modules();
      genericMessage = "Invariant Violation";
      _a = Object.setPrototypeOf;
      setPrototypeOf = _a === void 0 ? function(obj, proto) {
        obj.__proto__ = proto;
        return obj;
      } : _a;
      InvariantError = function(_super) {
        __extends(InvariantError2, _super);
        function InvariantError2(message) {
          if (message === void 0) {
            message = genericMessage;
          }
          var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
          _this.framesToPop = 1;
          _this.name = genericMessage;
          setPrototypeOf(_this, InvariantError2.prototype);
          return _this;
        }
        return InvariantError2;
      }(Error);
      verbosityLevels = ["debug", "log", "warn", "error", "silent"];
      verbosityLevel = verbosityLevels.indexOf("log");
      (function(invariant3) {
        invariant3.debug = wrapConsoleMethod("debug");
        invariant3.log = wrapConsoleMethod("log");
        invariant3.warn = wrapConsoleMethod("warn");
        invariant3.error = wrapConsoleMethod("error");
      })(invariant || (invariant = {}));
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/utilities/globals/maybe.js
  function maybe(thunk) {
    try {
      return thunk();
    } catch (_a3) {
    }
  }
  var init_maybe = __esm({
    "../wms-core-ui/node_modules/@apollo/client/utilities/globals/maybe.js"() {
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/utilities/globals/global.js
  var global_default;
  var init_global = __esm({
    "../wms-core-ui/node_modules/@apollo/client/utilities/globals/global.js"() {
      init_maybe();
      global_default = maybe(function() {
        return globalThis;
      }) || maybe(function() {
        return window;
      }) || maybe(function() {
        return self;
      }) || maybe(function() {
        return global;
      }) || maybe(function() {
        return maybe.constructor("return this")();
      });
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/utilities/globals/DEV.js
  function getDEV() {
    try {
      return Boolean(__DEV__);
    } catch (_a3) {
      Object.defineProperty(global_default, GLOBAL_KEY, {
        value: maybe(function() {
          return "development";
        }) !== "production",
        enumerable: false,
        configurable: true,
        writable: true
      });
      return global_default[GLOBAL_KEY];
    }
  }
  var __, GLOBAL_KEY, DEV_default;
  var init_DEV = __esm({
    "../wms-core-ui/node_modules/@apollo/client/utilities/globals/DEV.js"() {
      init_global();
      init_maybe();
      __ = "__";
      GLOBAL_KEY = [__, __].join("DEV");
      DEV_default = getDEV();
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/node_modules/ts-invariant/process/index.js
  function maybe2(thunk) {
    try {
      return thunk();
    } catch (_) {
    }
  }
  function install() {
    if (safeGlobal && !maybe2(function() {
      return "development";
    }) && !maybe2(function() {
      return process;
    })) {
      Object.defineProperty(safeGlobal, "process", {
        value: {
          env: {
            NODE_ENV: "production"
          }
        },
        configurable: true,
        enumerable: false,
        writable: true
      });
      needToRemove = true;
    }
  }
  function remove() {
    if (needToRemove) {
      delete safeGlobal.process;
      needToRemove = false;
    }
  }
  var safeGlobal, needToRemove;
  var init_process = __esm({
    "../wms-core-ui/node_modules/@apollo/client/node_modules/ts-invariant/process/index.js"() {
      safeGlobal = maybe2(function() {
        return globalThis;
      }) || maybe2(function() {
        return window;
      }) || maybe2(function() {
        return self;
      }) || maybe2(function() {
        return global;
      }) || maybe2(function() {
        return maybe2.constructor("return this")();
      });
      needToRemove = false;
      install();
    }
  });

  // ../wms-core-ui/node_modules/graphql/jsutils/isObjectLike.mjs
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof5(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof5(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function isObjectLike(value) {
    return _typeof(value) == "object" && value !== null;
  }
  var init_isObjectLike = __esm({
    "../wms-core-ui/node_modules/graphql/jsutils/isObjectLike.mjs"() {
    }
  });

  // ../wms-core-ui/node_modules/graphql/polyfills/symbols.mjs
  var SYMBOL_ITERATOR, SYMBOL_ASYNC_ITERATOR, SYMBOL_TO_STRING_TAG;
  var init_symbols = __esm({
    "../wms-core-ui/node_modules/graphql/polyfills/symbols.mjs"() {
      SYMBOL_ITERATOR = typeof Symbol === "function" && Symbol.iterator != null ? Symbol.iterator : "@@iterator";
      SYMBOL_ASYNC_ITERATOR = typeof Symbol === "function" && Symbol.asyncIterator != null ? Symbol.asyncIterator : "@@asyncIterator";
      SYMBOL_TO_STRING_TAG = typeof Symbol === "function" && Symbol.toStringTag != null ? Symbol.toStringTag : "@@toStringTag";
    }
  });

  // ../wms-core-ui/node_modules/graphql/language/location.mjs
  function getLocation(source, position) {
    var lineRegexp = /\r\n|[\n\r]/g;
    var line = 1;
    var column = position + 1;
    var match;
    while ((match = lineRegexp.exec(source.body)) && match.index < position) {
      line += 1;
      column = position + 1 - (match.index + match[0].length);
    }
    return {
      line,
      column
    };
  }
  var init_location = __esm({
    "../wms-core-ui/node_modules/graphql/language/location.mjs"() {
    }
  });

  // ../wms-core-ui/node_modules/graphql/language/printLocation.mjs
  function printLocation(location) {
    return printSourceLocation(location.source, getLocation(location.source, location.start));
  }
  function printSourceLocation(source, sourceLocation) {
    var firstLineColumnOffset = source.locationOffset.column - 1;
    var body = whitespace(firstLineColumnOffset) + source.body;
    var lineIndex = sourceLocation.line - 1;
    var lineOffset = source.locationOffset.line - 1;
    var lineNum = sourceLocation.line + lineOffset;
    var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
    var columnNum = sourceLocation.column + columnOffset;
    var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
    var lines = body.split(/\r\n|[\n\r]/g);
    var locationLine = lines[lineIndex];
    if (locationLine.length > 120) {
      var subLineIndex = Math.floor(columnNum / 80);
      var subLineColumnNum = columnNum % 80;
      var subLines = [];
      for (var i = 0; i < locationLine.length; i += 80) {
        subLines.push(locationLine.slice(i, i + 80));
      }
      return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function(subLine) {
        return ["", subLine];
      }), [[" ", whitespace(subLineColumnNum - 1) + "^"], ["", subLines[subLineIndex + 1]]]));
    }
    return locationStr + printPrefixedLines([
      ["".concat(lineNum - 1), lines[lineIndex - 1]],
      ["".concat(lineNum), locationLine],
      ["", whitespace(columnNum - 1) + "^"],
      ["".concat(lineNum + 1), lines[lineIndex + 1]]
    ]);
  }
  function printPrefixedLines(lines) {
    var existingLines = lines.filter(function(_ref) {
      var _ = _ref[0], line = _ref[1];
      return line !== void 0;
    });
    var padLen = Math.max.apply(Math, existingLines.map(function(_ref2) {
      var prefix = _ref2[0];
      return prefix.length;
    }));
    return existingLines.map(function(_ref3) {
      var prefix = _ref3[0], line = _ref3[1];
      return leftPad(padLen, prefix) + (line ? " | " + line : " |");
    }).join("\n");
  }
  function whitespace(len) {
    return Array(len + 1).join(" ");
  }
  function leftPad(len, str) {
    return whitespace(len - str.length) + str;
  }
  var init_printLocation = __esm({
    "../wms-core-ui/node_modules/graphql/language/printLocation.mjs"() {
      init_location();
    }
  });

  // ../wms-core-ui/node_modules/graphql/error/GraphQLError.mjs
  function _typeof2(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof5(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof2 = function _typeof5(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof2(obj);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof2(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function undefinedIfEmpty(array) {
    return array === void 0 || array.length === 0 ? void 0 : array;
  }
  function printError(error) {
    var output = error.message;
    if (error.nodes) {
      for (var _i4 = 0, _error$nodes2 = error.nodes; _i4 < _error$nodes2.length; _i4++) {
        var node = _error$nodes2[_i4];
        if (node.loc) {
          output += "\n\n" + printLocation(node.loc);
        }
      }
    } else if (error.source && error.locations) {
      for (var _i6 = 0, _error$locations2 = error.locations; _i6 < _error$locations2.length; _i6++) {
        var location = _error$locations2[_i6];
        output += "\n\n" + printSourceLocation(error.source, location);
      }
    }
    return output;
  }
  var GraphQLError;
  var init_GraphQLError = __esm({
    "../wms-core-ui/node_modules/graphql/error/GraphQLError.mjs"() {
      init_isObjectLike();
      init_symbols();
      init_location();
      init_printLocation();
      GraphQLError = /* @__PURE__ */ function(_Error) {
        _inherits(GraphQLError2, _Error);
        var _super = _createSuper(GraphQLError2);
        function GraphQLError2(message, nodes, source, positions, path, originalError, extensions) {
          var _nodeLocations, _nodeLocations2, _nodeLocations3;
          var _this;
          _classCallCheck(this, GraphQLError2);
          _this = _super.call(this, message);
          _this.name = "GraphQLError";
          _this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
          _this.nodes = undefinedIfEmpty(Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0);
          var nodeLocations = [];
          for (var _i2 = 0, _ref3 = (_this$nodes = _this.nodes) !== null && _this$nodes !== void 0 ? _this$nodes : []; _i2 < _ref3.length; _i2++) {
            var _this$nodes;
            var _ref4 = _ref3[_i2];
            var loc = _ref4.loc;
            if (loc != null) {
              nodeLocations.push(loc);
            }
          }
          nodeLocations = undefinedIfEmpty(nodeLocations);
          _this.source = source !== null && source !== void 0 ? source : (_nodeLocations = nodeLocations) === null || _nodeLocations === void 0 ? void 0 : _nodeLocations[0].source;
          _this.positions = positions !== null && positions !== void 0 ? positions : (_nodeLocations2 = nodeLocations) === null || _nodeLocations2 === void 0 ? void 0 : _nodeLocations2.map(function(loc2) {
            return loc2.start;
          });
          _this.locations = positions && source ? positions.map(function(pos) {
            return getLocation(source, pos);
          }) : (_nodeLocations3 = nodeLocations) === null || _nodeLocations3 === void 0 ? void 0 : _nodeLocations3.map(function(loc2) {
            return getLocation(loc2.source, loc2.start);
          });
          _this.path = path !== null && path !== void 0 ? path : void 0;
          var originalExtensions = originalError === null || originalError === void 0 ? void 0 : originalError.extensions;
          if (extensions == null && isObjectLike(originalExtensions)) {
            _this.extensions = _objectSpread({}, originalExtensions);
          } else {
            _this.extensions = extensions !== null && extensions !== void 0 ? extensions : {};
          }
          Object.defineProperties(_assertThisInitialized(_this), {
            message: {
              enumerable: true
            },
            locations: {
              enumerable: _this.locations != null
            },
            path: {
              enumerable: _this.path != null
            },
            extensions: {
              enumerable: _this.extensions != null && Object.keys(_this.extensions).length > 0
            },
            name: {
              enumerable: false
            },
            nodes: {
              enumerable: false
            },
            source: {
              enumerable: false
            },
            positions: {
              enumerable: false
            },
            originalError: {
              enumerable: false
            }
          });
          if (originalError !== null && originalError !== void 0 && originalError.stack) {
            Object.defineProperty(_assertThisInitialized(_this), "stack", {
              value: originalError.stack,
              writable: true,
              configurable: true
            });
            return _possibleConstructorReturn(_this);
          }
          if (Error.captureStackTrace) {
            Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError2);
          } else {
            Object.defineProperty(_assertThisInitialized(_this), "stack", {
              value: Error().stack,
              writable: true,
              configurable: true
            });
          }
          return _this;
        }
        _createClass(GraphQLError2, [{
          key: "toString",
          value: function toString2() {
            return printError(this);
          }
        }, {
          key: SYMBOL_TO_STRING_TAG,
          get: function get() {
            return "Object";
          }
        }]);
        return GraphQLError2;
      }(/* @__PURE__ */ _wrapNativeSuper(Error));
    }
  });

  // ../wms-core-ui/node_modules/graphql/error/syntaxError.mjs
  function syntaxError(source, position, description) {
    return new GraphQLError("Syntax Error: ".concat(description), void 0, source, [position]);
  }
  var init_syntaxError = __esm({
    "../wms-core-ui/node_modules/graphql/error/syntaxError.mjs"() {
      init_GraphQLError();
    }
  });

  // ../wms-core-ui/node_modules/graphql/language/kinds.mjs
  var Kind;
  var init_kinds = __esm({
    "../wms-core-ui/node_modules/graphql/language/kinds.mjs"() {
      Kind = Object.freeze({
        NAME: "Name",
        DOCUMENT: "Document",
        OPERATION_DEFINITION: "OperationDefinition",
        VARIABLE_DEFINITION: "VariableDefinition",
        SELECTION_SET: "SelectionSet",
        FIELD: "Field",
        ARGUMENT: "Argument",
        FRAGMENT_SPREAD: "FragmentSpread",
        INLINE_FRAGMENT: "InlineFragment",
        FRAGMENT_DEFINITION: "FragmentDefinition",
        VARIABLE: "Variable",
        INT: "IntValue",
        FLOAT: "FloatValue",
        STRING: "StringValue",
        BOOLEAN: "BooleanValue",
        NULL: "NullValue",
        ENUM: "EnumValue",
        LIST: "ListValue",
        OBJECT: "ObjectValue",
        OBJECT_FIELD: "ObjectField",
        DIRECTIVE: "Directive",
        NAMED_TYPE: "NamedType",
        LIST_TYPE: "ListType",
        NON_NULL_TYPE: "NonNullType",
        SCHEMA_DEFINITION: "SchemaDefinition",
        OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
        SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
        OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
        FIELD_DEFINITION: "FieldDefinition",
        INPUT_VALUE_DEFINITION: "InputValueDefinition",
        INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
        UNION_TYPE_DEFINITION: "UnionTypeDefinition",
        ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
        ENUM_VALUE_DEFINITION: "EnumValueDefinition",
        INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
        DIRECTIVE_DEFINITION: "DirectiveDefinition",
        SCHEMA_EXTENSION: "SchemaExtension",
        SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
        OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
        INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
        UNION_TYPE_EXTENSION: "UnionTypeExtension",
        ENUM_TYPE_EXTENSION: "EnumTypeExtension",
        INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
      });
    }
  });

  // ../wms-core-ui/node_modules/graphql/jsutils/invariant.mjs
  function invariant2(condition, message) {
    var booleanCondition = Boolean(condition);
    if (!booleanCondition) {
      throw new Error(message != null ? message : "Unexpected invariant triggered.");
    }
  }
  var init_invariant = __esm({
    "../wms-core-ui/node_modules/graphql/jsutils/invariant.mjs"() {
    }
  });

  // ../wms-core-ui/node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs
  var nodejsCustomInspectSymbol, nodejsCustomInspectSymbol_default;
  var init_nodejsCustomInspectSymbol = __esm({
    "../wms-core-ui/node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs"() {
      nodejsCustomInspectSymbol = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
      nodejsCustomInspectSymbol_default = nodejsCustomInspectSymbol;
    }
  });

  // ../wms-core-ui/node_modules/graphql/jsutils/defineInspect.mjs
  function defineInspect(classObject) {
    var fn = classObject.prototype.toJSON;
    typeof fn === "function" || invariant2(0);
    classObject.prototype.inspect = fn;
    if (nodejsCustomInspectSymbol_default) {
      classObject.prototype[nodejsCustomInspectSymbol_default] = fn;
    }
  }
  var init_defineInspect = __esm({
    "../wms-core-ui/node_modules/graphql/jsutils/defineInspect.mjs"() {
      init_invariant();
      init_nodejsCustomInspectSymbol();
    }
  });

  // ../wms-core-ui/node_modules/graphql/language/ast.mjs
  var Location, Token;
  var init_ast = __esm({
    "../wms-core-ui/node_modules/graphql/language/ast.mjs"() {
      init_defineInspect();
      Location = /* @__PURE__ */ function() {
        function Location2(startToken, endToken, source) {
          this.start = startToken.start;
          this.end = endToken.end;
          this.startToken = startToken;
          this.endToken = endToken;
          this.source = source;
        }
        var _proto = Location2.prototype;
        _proto.toJSON = function toJSON() {
          return {
            start: this.start,
            end: this.end
          };
        };
        return Location2;
      }();
      defineInspect(Location);
      Token = /* @__PURE__ */ function() {
        function Token2(kind, start, end, line, column, prev, value) {
          this.kind = kind;
          this.start = start;
          this.end = end;
          this.line = line;
          this.column = column;
          this.value = value;
          this.prev = prev;
          this.next = null;
        }
        var _proto2 = Token2.prototype;
        _proto2.toJSON = function toJSON() {
          return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
          };
        };
        return Token2;
      }();
      defineInspect(Token);
    }
  });

  // ../wms-core-ui/node_modules/graphql/language/tokenKind.mjs
  var TokenKind;
  var init_tokenKind = __esm({
    "../wms-core-ui/node_modules/graphql/language/tokenKind.mjs"() {
      TokenKind = Object.freeze({
        SOF: "<SOF>",
        EOF: "<EOF>",
        BANG: "!",
        DOLLAR: "$",
        AMP: "&",
        PAREN_L: "(",
        PAREN_R: ")",
        SPREAD: "...",
        COLON: ":",
        EQUALS: "=",
        AT: "@",
        BRACKET_L: "[",
        BRACKET_R: "]",
        BRACE_L: "{",
        PIPE: "|",
        BRACE_R: "}",
        NAME: "Name",
        INT: "Int",
        FLOAT: "Float",
        STRING: "String",
        BLOCK_STRING: "BlockString",
        COMMENT: "Comment"
      });
    }
  });

  // ../wms-core-ui/node_modules/graphql/jsutils/inspect.mjs
  function _typeof3(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof3 = function _typeof5(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof3 = function _typeof5(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof3(obj);
  }
  function inspect(value) {
    return formatValue(value, []);
  }
  function formatValue(value, seenValues) {
    switch (_typeof3(value)) {
      case "string":
        return JSON.stringify(value);
      case "function":
        return value.name ? "[function ".concat(value.name, "]") : "[function]";
      case "object":
        if (value === null) {
          return "null";
        }
        return formatObjectValue(value, seenValues);
      default:
        return String(value);
    }
  }
  function formatObjectValue(value, previouslySeenValues) {
    if (previouslySeenValues.indexOf(value) !== -1) {
      return "[Circular]";
    }
    var seenValues = [].concat(previouslySeenValues, [value]);
    var customInspectFn = getCustomFn(value);
    if (customInspectFn !== void 0) {
      var customValue = customInspectFn.call(value);
      if (customValue !== value) {
        return typeof customValue === "string" ? customValue : formatValue(customValue, seenValues);
      }
    } else if (Array.isArray(value)) {
      return formatArray(value, seenValues);
    }
    return formatObject(value, seenValues);
  }
  function formatObject(object, seenValues) {
    var keys = Object.keys(object);
    if (keys.length === 0) {
      return "{}";
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
      return "[" + getObjectTag(object) + "]";
    }
    var properties = keys.map(function(key) {
      var value = formatValue(object[key], seenValues);
      return key + ": " + value;
    });
    return "{ " + properties.join(", ") + " }";
  }
  function formatArray(array, seenValues) {
    if (array.length === 0) {
      return "[]";
    }
    if (seenValues.length > MAX_RECURSIVE_DEPTH) {
      return "[Array]";
    }
    var len = Math.min(MAX_ARRAY_LENGTH, array.length);
    var remaining = array.length - len;
    var items = [];
    for (var i = 0; i < len; ++i) {
      items.push(formatValue(array[i], seenValues));
    }
    if (remaining === 1) {
      items.push("... 1 more item");
    } else if (remaining > 1) {
      items.push("... ".concat(remaining, " more items"));
    }
    return "[" + items.join(", ") + "]";
  }
  function getCustomFn(object) {
    var customInspectFn = object[String(nodejsCustomInspectSymbol_default)];
    if (typeof customInspectFn === "function") {
      return customInspectFn;
    }
    if (typeof object.inspect === "function") {
      return object.inspect;
    }
  }
  function getObjectTag(object) {
    var tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
    if (tag === "Object" && typeof object.constructor === "function") {
      var name = object.constructor.name;
      if (typeof name === "string" && name !== "") {
        return name;
      }
    }
    return tag;
  }
  var MAX_ARRAY_LENGTH, MAX_RECURSIVE_DEPTH;
  var init_inspect = __esm({
    "../wms-core-ui/node_modules/graphql/jsutils/inspect.mjs"() {
      init_nodejsCustomInspectSymbol();
      MAX_ARRAY_LENGTH = 10;
      MAX_RECURSIVE_DEPTH = 2;
    }
  });

  // ../wms-core-ui/node_modules/graphql/jsutils/devAssert.mjs
  function devAssert(condition, message) {
    var booleanCondition = Boolean(condition);
    if (!booleanCondition) {
      throw new Error(message);
    }
  }
  var init_devAssert = __esm({
    "../wms-core-ui/node_modules/graphql/jsutils/devAssert.mjs"() {
    }
  });

  // ../wms-core-ui/node_modules/graphql/jsutils/instanceOf.mjs
  function _typeof4(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof4 = function _typeof5(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof4 = function _typeof5(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof4(obj);
  }
  var instanceOf_default;
  var init_instanceOf = __esm({
    "../wms-core-ui/node_modules/graphql/jsutils/instanceOf.mjs"() {
      init_inspect();
      instanceOf_default = false ? function instanceOf(value, constructor) {
        return value instanceof constructor;
      } : function instanceOf2(value, constructor) {
        if (value instanceof constructor) {
          return true;
        }
        if (_typeof4(value) === "object" && value !== null) {
          var _value$constructor;
          var className = constructor.prototype[Symbol.toStringTag];
          var valueClassName = Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;
          if (className === valueClassName) {
            var stringifiedValue = inspect(value);
            throw new Error("Cannot use ".concat(className, ' "').concat(stringifiedValue, '" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.'));
          }
        }
        return false;
      };
    }
  });

  // ../wms-core-ui/node_modules/graphql/language/source.mjs
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties2(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties2(Constructor, staticProps);
    return Constructor;
  }
  function isSource(source) {
    return instanceOf_default(source, Source);
  }
  var Source;
  var init_source = __esm({
    "../wms-core-ui/node_modules/graphql/language/source.mjs"() {
      init_symbols();
      init_inspect();
      init_devAssert();
      init_instanceOf();
      Source = /* @__PURE__ */ function() {
        function Source2(body) {
          var name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "GraphQL request";
          var locationOffset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
            line: 1,
            column: 1
          };
          typeof body === "string" || devAssert(0, "Body must be a string. Received: ".concat(inspect(body), "."));
          this.body = body;
          this.name = name;
          this.locationOffset = locationOffset;
          this.locationOffset.line > 0 || devAssert(0, "line in locationOffset is 1-indexed and must be positive.");
          this.locationOffset.column > 0 || devAssert(0, "column in locationOffset is 1-indexed and must be positive.");
        }
        _createClass2(Source2, [{
          key: SYMBOL_TO_STRING_TAG,
          get: function get() {
            return "Source";
          }
        }]);
        return Source2;
      }();
    }
  });

  // ../wms-core-ui/node_modules/graphql/language/directiveLocation.mjs
  var DirectiveLocation;
  var init_directiveLocation = __esm({
    "../wms-core-ui/node_modules/graphql/language/directiveLocation.mjs"() {
      DirectiveLocation = Object.freeze({
        QUERY: "QUERY",
        MUTATION: "MUTATION",
        SUBSCRIPTION: "SUBSCRIPTION",
        FIELD: "FIELD",
        FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
        FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
        INLINE_FRAGMENT: "INLINE_FRAGMENT",
        VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
        SCHEMA: "SCHEMA",
        SCALAR: "SCALAR",
        OBJECT: "OBJECT",
        FIELD_DEFINITION: "FIELD_DEFINITION",
        ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
        INTERFACE: "INTERFACE",
        UNION: "UNION",
        ENUM: "ENUM",
        ENUM_VALUE: "ENUM_VALUE",
        INPUT_OBJECT: "INPUT_OBJECT",
        INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
      });
    }
  });

  // ../wms-core-ui/node_modules/graphql/language/blockString.mjs
  function dedentBlockStringValue(rawString) {
    var lines = rawString.split(/\r\n|[\n\r]/g);
    var commonIndent = getBlockStringIndentation(rawString);
    if (commonIndent !== 0) {
      for (var i = 1; i < lines.length; i++) {
        lines[i] = lines[i].slice(commonIndent);
      }
    }
    var startLine = 0;
    while (startLine < lines.length && isBlank(lines[startLine])) {
      ++startLine;
    }
    var endLine = lines.length;
    while (endLine > startLine && isBlank(lines[endLine - 1])) {
      --endLine;
    }
    return lines.slice(startLine, endLine).join("\n");
  }
  function isBlank(str) {
    for (var i = 0; i < str.length; ++i) {
      if (str[i] !== " " && str[i] !== "	") {
        return false;
      }
    }
    return true;
  }
  function getBlockStringIndentation(value) {
    var _commonIndent;
    var isFirstLine = true;
    var isEmptyLine = true;
    var indent = 0;
    var commonIndent = null;
    for (var i = 0; i < value.length; ++i) {
      switch (value.charCodeAt(i)) {
        case 13:
          if (value.charCodeAt(i + 1) === 10) {
            ++i;
          }
        case 10:
          isFirstLine = false;
          isEmptyLine = true;
          indent = 0;
          break;
        case 9:
        case 32:
          ++indent;
          break;
        default:
          if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
            commonIndent = indent;
          }
          isEmptyLine = false;
      }
    }
    return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
  }
  var init_blockString = __esm({
    "../wms-core-ui/node_modules/graphql/language/blockString.mjs"() {
    }
  });

  // ../wms-core-ui/node_modules/graphql/language/lexer.mjs
  function isPunctuatorTokenKind(kind) {
    return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
  }
  function printCharCode(code) {
    return isNaN(code) ? TokenKind.EOF : code < 127 ? JSON.stringify(String.fromCharCode(code)) : '"\\u'.concat(("00" + code.toString(16).toUpperCase()).slice(-4), '"');
  }
  function readToken(lexer, prev) {
    var source = lexer.source;
    var body = source.body;
    var bodyLength = body.length;
    var pos = prev.end;
    while (pos < bodyLength) {
      var code = body.charCodeAt(pos);
      var _line = lexer.line;
      var _col = 1 + pos - lexer.lineStart;
      switch (code) {
        case 65279:
        case 9:
        case 32:
        case 44:
          ++pos;
          continue;
        case 10:
          ++pos;
          ++lexer.line;
          lexer.lineStart = pos;
          continue;
        case 13:
          if (body.charCodeAt(pos + 1) === 10) {
            pos += 2;
          } else {
            ++pos;
          }
          ++lexer.line;
          lexer.lineStart = pos;
          continue;
        case 33:
          return new Token(TokenKind.BANG, pos, pos + 1, _line, _col, prev);
        case 35:
          return readComment(source, pos, _line, _col, prev);
        case 36:
          return new Token(TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);
        case 38:
          return new Token(TokenKind.AMP, pos, pos + 1, _line, _col, prev);
        case 40:
          return new Token(TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);
        case 41:
          return new Token(TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);
        case 46:
          if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
            return new Token(TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
          }
          break;
        case 58:
          return new Token(TokenKind.COLON, pos, pos + 1, _line, _col, prev);
        case 61:
          return new Token(TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);
        case 64:
          return new Token(TokenKind.AT, pos, pos + 1, _line, _col, prev);
        case 91:
          return new Token(TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);
        case 93:
          return new Token(TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);
        case 123:
          return new Token(TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);
        case 124:
          return new Token(TokenKind.PIPE, pos, pos + 1, _line, _col, prev);
        case 125:
          return new Token(TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);
        case 34:
          if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
            return readBlockString(source, pos, _line, _col, prev, lexer);
          }
          return readString(source, pos, _line, _col, prev);
        case 45:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return readNumber(source, pos, code, _line, _col, prev);
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 95:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          return readName(source, pos, _line, _col, prev);
      }
      throw syntaxError(source, pos, unexpectedCharacterMessage(code));
    }
    var line = lexer.line;
    var col = 1 + pos - lexer.lineStart;
    return new Token(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }
  function unexpectedCharacterMessage(code) {
    if (code < 32 && code !== 9 && code !== 10 && code !== 13) {
      return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
    }
    if (code === 39) {
      return `Unexpected single quote character ('), did you mean to use a double quote (")?`;
    }
    return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
  }
  function readComment(source, start, line, col, prev) {
    var body = source.body;
    var code;
    var position = start;
    do {
      code = body.charCodeAt(++position);
    } while (!isNaN(code) && (code > 31 || code === 9));
    return new Token(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
  }
  function readNumber(source, start, firstCode, line, col, prev) {
    var body = source.body;
    var code = firstCode;
    var position = start;
    var isFloat = false;
    if (code === 45) {
      code = body.charCodeAt(++position);
    }
    if (code === 48) {
      code = body.charCodeAt(++position);
      if (code >= 48 && code <= 57) {
        throw syntaxError(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
      }
    } else {
      position = readDigits(source, position, code);
      code = body.charCodeAt(position);
    }
    if (code === 46) {
      isFloat = true;
      code = body.charCodeAt(++position);
      position = readDigits(source, position, code);
      code = body.charCodeAt(position);
    }
    if (code === 69 || code === 101) {
      isFloat = true;
      code = body.charCodeAt(++position);
      if (code === 43 || code === 45) {
        code = body.charCodeAt(++position);
      }
      position = readDigits(source, position, code);
      code = body.charCodeAt(position);
    }
    if (code === 46 || isNameStart(code)) {
      throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
    }
    return new Token(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
  }
  function readDigits(source, start, firstCode) {
    var body = source.body;
    var position = start;
    var code = firstCode;
    if (code >= 48 && code <= 57) {
      do {
        code = body.charCodeAt(++position);
      } while (code >= 48 && code <= 57);
      return position;
    }
    throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }
  function readString(source, start, line, col, prev) {
    var body = source.body;
    var position = start + 1;
    var chunkStart = position;
    var code = 0;
    var value = "";
    while (position < body.length && !isNaN(code = body.charCodeAt(position)) && code !== 10 && code !== 13) {
      if (code === 34) {
        value += body.slice(chunkStart, position);
        return new Token(TokenKind.STRING, start, position + 1, line, col, prev, value);
      }
      if (code < 32 && code !== 9) {
        throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
      }
      ++position;
      if (code === 92) {
        value += body.slice(chunkStart, position - 1);
        code = body.charCodeAt(position);
        switch (code) {
          case 34:
            value += '"';
            break;
          case 47:
            value += "/";
            break;
          case 92:
            value += "\\";
            break;
          case 98:
            value += "\b";
            break;
          case 102:
            value += "\f";
            break;
          case 110:
            value += "\n";
            break;
          case 114:
            value += "\r";
            break;
          case 116:
            value += "	";
            break;
          case 117: {
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));
            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw syntaxError(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }
            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }
          default:
            throw syntaxError(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
        }
        ++position;
        chunkStart = position;
      }
    }
    throw syntaxError(source, position, "Unterminated string.");
  }
  function readBlockString(source, start, line, col, prev, lexer) {
    var body = source.body;
    var position = start + 3;
    var chunkStart = position;
    var code = 0;
    var rawValue = "";
    while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
      if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
        rawValue += body.slice(chunkStart, position);
        return new Token(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
      }
      if (code < 32 && code !== 9 && code !== 10 && code !== 13) {
        throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
      }
      if (code === 10) {
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
      } else if (code === 13) {
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer.line;
        lexer.lineStart = position;
      } else if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
        rawValue += body.slice(chunkStart, position) + '"""';
        position += 4;
        chunkStart = position;
      } else {
        ++position;
      }
    }
    throw syntaxError(source, position, "Unterminated string.");
  }
  function uniCharCode(a, b, c, d) {
    return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
  }
  function char2hex(a) {
    return a >= 48 && a <= 57 ? a - 48 : a >= 65 && a <= 70 ? a - 55 : a >= 97 && a <= 102 ? a - 87 : -1;
  }
  function readName(source, start, line, col, prev) {
    var body = source.body;
    var bodyLength = body.length;
    var position = start + 1;
    var code = 0;
    while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122)) {
      ++position;
    }
    return new Token(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
  }
  function isNameStart(code) {
    return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
  }
  var Lexer;
  var init_lexer = __esm({
    "../wms-core-ui/node_modules/graphql/language/lexer.mjs"() {
      init_syntaxError();
      init_ast();
      init_tokenKind();
      init_blockString();
      Lexer = /* @__PURE__ */ function() {
        function Lexer2(source) {
          var startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0, null);
          this.source = source;
          this.lastToken = startOfFileToken;
          this.token = startOfFileToken;
          this.line = 1;
          this.lineStart = 0;
        }
        var _proto = Lexer2.prototype;
        _proto.advance = function advance() {
          this.lastToken = this.token;
          var token = this.token = this.lookahead();
          return token;
        };
        _proto.lookahead = function lookahead() {
          var token = this.token;
          if (token.kind !== TokenKind.EOF) {
            do {
              var _token$next;
              token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
            } while (token.kind === TokenKind.COMMENT);
          }
          return token;
        };
        return Lexer2;
      }();
    }
  });

  // ../wms-core-ui/node_modules/graphql/language/parser.mjs
  function parse(source, options) {
    var parser = new Parser(source, options);
    return parser.parseDocument();
  }
  function getTokenDesc(token) {
    var value = token.value;
    return getTokenKindDesc(token.kind) + (value != null ? ' "'.concat(value, '"') : "");
  }
  function getTokenKindDesc(kind) {
    return isPunctuatorTokenKind(kind) ? '"'.concat(kind, '"') : kind;
  }
  var Parser;
  var init_parser = __esm({
    "../wms-core-ui/node_modules/graphql/language/parser.mjs"() {
      init_syntaxError();
      init_kinds();
      init_ast();
      init_tokenKind();
      init_source();
      init_directiveLocation();
      init_lexer();
      Parser = /* @__PURE__ */ function() {
        function Parser2(source, options) {
          var sourceObj = isSource(source) ? source : new Source(source);
          this._lexer = new Lexer(sourceObj);
          this._options = options;
        }
        var _proto = Parser2.prototype;
        _proto.parseName = function parseName() {
          var token = this.expectToken(TokenKind.NAME);
          return {
            kind: Kind.NAME,
            value: token.value,
            loc: this.loc(token)
          };
        };
        _proto.parseDocument = function parseDocument2() {
          var start = this._lexer.token;
          return {
            kind: Kind.DOCUMENT,
            definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
            loc: this.loc(start)
          };
        };
        _proto.parseDefinition = function parseDefinition() {
          if (this.peek(TokenKind.NAME)) {
            switch (this._lexer.token.value) {
              case "query":
              case "mutation":
              case "subscription":
                return this.parseOperationDefinition();
              case "fragment":
                return this.parseFragmentDefinition();
              case "schema":
              case "scalar":
              case "type":
              case "interface":
              case "union":
              case "enum":
              case "input":
              case "directive":
                return this.parseTypeSystemDefinition();
              case "extend":
                return this.parseTypeSystemExtension();
            }
          } else if (this.peek(TokenKind.BRACE_L)) {
            return this.parseOperationDefinition();
          } else if (this.peekDescription()) {
            return this.parseTypeSystemDefinition();
          }
          throw this.unexpected();
        };
        _proto.parseOperationDefinition = function parseOperationDefinition() {
          var start = this._lexer.token;
          if (this.peek(TokenKind.BRACE_L)) {
            return {
              kind: Kind.OPERATION_DEFINITION,
              operation: "query",
              name: void 0,
              variableDefinitions: [],
              directives: [],
              selectionSet: this.parseSelectionSet(),
              loc: this.loc(start)
            };
          }
          var operation = this.parseOperationType();
          var name;
          if (this.peek(TokenKind.NAME)) {
            name = this.parseName();
          }
          return {
            kind: Kind.OPERATION_DEFINITION,
            operation,
            name,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
          };
        };
        _proto.parseOperationType = function parseOperationType() {
          var operationToken = this.expectToken(TokenKind.NAME);
          switch (operationToken.value) {
            case "query":
              return "query";
            case "mutation":
              return "mutation";
            case "subscription":
              return "subscription";
          }
          throw this.unexpected(operationToken);
        };
        _proto.parseVariableDefinitions = function parseVariableDefinitions() {
          return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
        };
        _proto.parseVariableDefinition = function parseVariableDefinition() {
          var start = this._lexer.token;
          return {
            kind: Kind.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : void 0,
            directives: this.parseDirectives(true),
            loc: this.loc(start)
          };
        };
        _proto.parseVariable = function parseVariable() {
          var start = this._lexer.token;
          this.expectToken(TokenKind.DOLLAR);
          return {
            kind: Kind.VARIABLE,
            name: this.parseName(),
            loc: this.loc(start)
          };
        };
        _proto.parseSelectionSet = function parseSelectionSet() {
          var start = this._lexer.token;
          return {
            kind: Kind.SELECTION_SET,
            selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
            loc: this.loc(start)
          };
        };
        _proto.parseSelection = function parseSelection() {
          return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
        };
        _proto.parseField = function parseField() {
          var start = this._lexer.token;
          var nameOrAlias = this.parseName();
          var alias;
          var name;
          if (this.expectOptionalToken(TokenKind.COLON)) {
            alias = nameOrAlias;
            name = this.parseName();
          } else {
            name = nameOrAlias;
          }
          return {
            kind: Kind.FIELD,
            alias,
            name,
            arguments: this.parseArguments(false),
            directives: this.parseDirectives(false),
            selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0,
            loc: this.loc(start)
          };
        };
        _proto.parseArguments = function parseArguments(isConst) {
          var item = isConst ? this.parseConstArgument : this.parseArgument;
          return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
        };
        _proto.parseArgument = function parseArgument() {
          var start = this._lexer.token;
          var name = this.parseName();
          this.expectToken(TokenKind.COLON);
          return {
            kind: Kind.ARGUMENT,
            name,
            value: this.parseValueLiteral(false),
            loc: this.loc(start)
          };
        };
        _proto.parseConstArgument = function parseConstArgument() {
          var start = this._lexer.token;
          return {
            kind: Kind.ARGUMENT,
            name: this.parseName(),
            value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
            loc: this.loc(start)
          };
        };
        _proto.parseFragment = function parseFragment() {
          var start = this._lexer.token;
          this.expectToken(TokenKind.SPREAD);
          var hasTypeCondition = this.expectOptionalKeyword("on");
          if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
            return {
              kind: Kind.FRAGMENT_SPREAD,
              name: this.parseFragmentName(),
              directives: this.parseDirectives(false),
              loc: this.loc(start)
            };
          }
          return {
            kind: Kind.INLINE_FRAGMENT,
            typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
          };
        };
        _proto.parseFragmentDefinition = function parseFragmentDefinition() {
          var _this$_options;
          var start = this._lexer.token;
          this.expectKeyword("fragment");
          if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
            return {
              kind: Kind.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              variableDefinitions: this.parseVariableDefinitions(),
              typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
              directives: this.parseDirectives(false),
              selectionSet: this.parseSelectionSet(),
              loc: this.loc(start)
            };
          }
          return {
            kind: Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
          };
        };
        _proto.parseFragmentName = function parseFragmentName() {
          if (this._lexer.token.value === "on") {
            throw this.unexpected();
          }
          return this.parseName();
        };
        _proto.parseValueLiteral = function parseValueLiteral(isConst) {
          var token = this._lexer.token;
          switch (token.kind) {
            case TokenKind.BRACKET_L:
              return this.parseList(isConst);
            case TokenKind.BRACE_L:
              return this.parseObject(isConst);
            case TokenKind.INT:
              this._lexer.advance();
              return {
                kind: Kind.INT,
                value: token.value,
                loc: this.loc(token)
              };
            case TokenKind.FLOAT:
              this._lexer.advance();
              return {
                kind: Kind.FLOAT,
                value: token.value,
                loc: this.loc(token)
              };
            case TokenKind.STRING:
            case TokenKind.BLOCK_STRING:
              return this.parseStringLiteral();
            case TokenKind.NAME:
              this._lexer.advance();
              switch (token.value) {
                case "true":
                  return {
                    kind: Kind.BOOLEAN,
                    value: true,
                    loc: this.loc(token)
                  };
                case "false":
                  return {
                    kind: Kind.BOOLEAN,
                    value: false,
                    loc: this.loc(token)
                  };
                case "null":
                  return {
                    kind: Kind.NULL,
                    loc: this.loc(token)
                  };
                default:
                  return {
                    kind: Kind.ENUM,
                    value: token.value,
                    loc: this.loc(token)
                  };
              }
            case TokenKind.DOLLAR:
              if (!isConst) {
                return this.parseVariable();
              }
              break;
          }
          throw this.unexpected();
        };
        _proto.parseStringLiteral = function parseStringLiteral() {
          var token = this._lexer.token;
          this._lexer.advance();
          return {
            kind: Kind.STRING,
            value: token.value,
            block: token.kind === TokenKind.BLOCK_STRING,
            loc: this.loc(token)
          };
        };
        _proto.parseList = function parseList(isConst) {
          var _this = this;
          var start = this._lexer.token;
          var item = function item2() {
            return _this.parseValueLiteral(isConst);
          };
          return {
            kind: Kind.LIST,
            values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
            loc: this.loc(start)
          };
        };
        _proto.parseObject = function parseObject(isConst) {
          var _this2 = this;
          var start = this._lexer.token;
          var item = function item2() {
            return _this2.parseObjectField(isConst);
          };
          return {
            kind: Kind.OBJECT,
            fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
            loc: this.loc(start)
          };
        };
        _proto.parseObjectField = function parseObjectField(isConst) {
          var start = this._lexer.token;
          var name = this.parseName();
          this.expectToken(TokenKind.COLON);
          return {
            kind: Kind.OBJECT_FIELD,
            name,
            value: this.parseValueLiteral(isConst),
            loc: this.loc(start)
          };
        };
        _proto.parseDirectives = function parseDirectives(isConst) {
          var directives = [];
          while (this.peek(TokenKind.AT)) {
            directives.push(this.parseDirective(isConst));
          }
          return directives;
        };
        _proto.parseDirective = function parseDirective(isConst) {
          var start = this._lexer.token;
          this.expectToken(TokenKind.AT);
          return {
            kind: Kind.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(isConst),
            loc: this.loc(start)
          };
        };
        _proto.parseTypeReference = function parseTypeReference() {
          var start = this._lexer.token;
          var type;
          if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
            type = this.parseTypeReference();
            this.expectToken(TokenKind.BRACKET_R);
            type = {
              kind: Kind.LIST_TYPE,
              type,
              loc: this.loc(start)
            };
          } else {
            type = this.parseNamedType();
          }
          if (this.expectOptionalToken(TokenKind.BANG)) {
            return {
              kind: Kind.NON_NULL_TYPE,
              type,
              loc: this.loc(start)
            };
          }
          return type;
        };
        _proto.parseNamedType = function parseNamedType() {
          var start = this._lexer.token;
          return {
            kind: Kind.NAMED_TYPE,
            name: this.parseName(),
            loc: this.loc(start)
          };
        };
        _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
          var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
          if (keywordToken.kind === TokenKind.NAME) {
            switch (keywordToken.value) {
              case "schema":
                return this.parseSchemaDefinition();
              case "scalar":
                return this.parseScalarTypeDefinition();
              case "type":
                return this.parseObjectTypeDefinition();
              case "interface":
                return this.parseInterfaceTypeDefinition();
              case "union":
                return this.parseUnionTypeDefinition();
              case "enum":
                return this.parseEnumTypeDefinition();
              case "input":
                return this.parseInputObjectTypeDefinition();
              case "directive":
                return this.parseDirectiveDefinition();
            }
          }
          throw this.unexpected(keywordToken);
        };
        _proto.peekDescription = function peekDescription() {
          return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
        };
        _proto.parseDescription = function parseDescription() {
          if (this.peekDescription()) {
            return this.parseStringLiteral();
          }
        };
        _proto.parseSchemaDefinition = function parseSchemaDefinition() {
          var start = this._lexer.token;
          var description = this.parseDescription();
          this.expectKeyword("schema");
          var directives = this.parseDirectives(true);
          var operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
          return {
            kind: Kind.SCHEMA_DEFINITION,
            description,
            directives,
            operationTypes,
            loc: this.loc(start)
          };
        };
        _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
          var start = this._lexer.token;
          var operation = this.parseOperationType();
          this.expectToken(TokenKind.COLON);
          var type = this.parseNamedType();
          return {
            kind: Kind.OPERATION_TYPE_DEFINITION,
            operation,
            type,
            loc: this.loc(start)
          };
        };
        _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
          var start = this._lexer.token;
          var description = this.parseDescription();
          this.expectKeyword("scalar");
          var name = this.parseName();
          var directives = this.parseDirectives(true);
          return {
            kind: Kind.SCALAR_TYPE_DEFINITION,
            description,
            name,
            directives,
            loc: this.loc(start)
          };
        };
        _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
          var start = this._lexer.token;
          var description = this.parseDescription();
          this.expectKeyword("type");
          var name = this.parseName();
          var interfaces = this.parseImplementsInterfaces();
          var directives = this.parseDirectives(true);
          var fields = this.parseFieldsDefinition();
          return {
            kind: Kind.OBJECT_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
          };
        };
        _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
          var _this$_options2;
          if (!this.expectOptionalKeyword("implements")) {
            return [];
          }
          if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
            var types = [];
            this.expectOptionalToken(TokenKind.AMP);
            do {
              types.push(this.parseNamedType());
            } while (this.expectOptionalToken(TokenKind.AMP) || this.peek(TokenKind.NAME));
            return types;
          }
          return this.delimitedMany(TokenKind.AMP, this.parseNamedType);
        };
        _proto.parseFieldsDefinition = function parseFieldsDefinition() {
          var _this$_options3;
          if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
            this._lexer.advance();
            this._lexer.advance();
            return [];
          }
          return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
        };
        _proto.parseFieldDefinition = function parseFieldDefinition() {
          var start = this._lexer.token;
          var description = this.parseDescription();
          var name = this.parseName();
          var args = this.parseArgumentDefs();
          this.expectToken(TokenKind.COLON);
          var type = this.parseTypeReference();
          var directives = this.parseDirectives(true);
          return {
            kind: Kind.FIELD_DEFINITION,
            description,
            name,
            arguments: args,
            type,
            directives,
            loc: this.loc(start)
          };
        };
        _proto.parseArgumentDefs = function parseArgumentDefs() {
          return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
        };
        _proto.parseInputValueDef = function parseInputValueDef() {
          var start = this._lexer.token;
          var description = this.parseDescription();
          var name = this.parseName();
          this.expectToken(TokenKind.COLON);
          var type = this.parseTypeReference();
          var defaultValue;
          if (this.expectOptionalToken(TokenKind.EQUALS)) {
            defaultValue = this.parseValueLiteral(true);
          }
          var directives = this.parseDirectives(true);
          return {
            kind: Kind.INPUT_VALUE_DEFINITION,
            description,
            name,
            type,
            defaultValue,
            directives,
            loc: this.loc(start)
          };
        };
        _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
          var start = this._lexer.token;
          var description = this.parseDescription();
          this.expectKeyword("interface");
          var name = this.parseName();
          var interfaces = this.parseImplementsInterfaces();
          var directives = this.parseDirectives(true);
          var fields = this.parseFieldsDefinition();
          return {
            kind: Kind.INTERFACE_TYPE_DEFINITION,
            description,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
          };
        };
        _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
          var start = this._lexer.token;
          var description = this.parseDescription();
          this.expectKeyword("union");
          var name = this.parseName();
          var directives = this.parseDirectives(true);
          var types = this.parseUnionMemberTypes();
          return {
            kind: Kind.UNION_TYPE_DEFINITION,
            description,
            name,
            directives,
            types,
            loc: this.loc(start)
          };
        };
        _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
          return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
        };
        _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
          var start = this._lexer.token;
          var description = this.parseDescription();
          this.expectKeyword("enum");
          var name = this.parseName();
          var directives = this.parseDirectives(true);
          var values = this.parseEnumValuesDefinition();
          return {
            kind: Kind.ENUM_TYPE_DEFINITION,
            description,
            name,
            directives,
            values,
            loc: this.loc(start)
          };
        };
        _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
          return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
        };
        _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
          var start = this._lexer.token;
          var description = this.parseDescription();
          var name = this.parseName();
          var directives = this.parseDirectives(true);
          return {
            kind: Kind.ENUM_VALUE_DEFINITION,
            description,
            name,
            directives,
            loc: this.loc(start)
          };
        };
        _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
          var start = this._lexer.token;
          var description = this.parseDescription();
          this.expectKeyword("input");
          var name = this.parseName();
          var directives = this.parseDirectives(true);
          var fields = this.parseInputFieldsDefinition();
          return {
            kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
            description,
            name,
            directives,
            fields,
            loc: this.loc(start)
          };
        };
        _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
          return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
        };
        _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
          var keywordToken = this._lexer.lookahead();
          if (keywordToken.kind === TokenKind.NAME) {
            switch (keywordToken.value) {
              case "schema":
                return this.parseSchemaExtension();
              case "scalar":
                return this.parseScalarTypeExtension();
              case "type":
                return this.parseObjectTypeExtension();
              case "interface":
                return this.parseInterfaceTypeExtension();
              case "union":
                return this.parseUnionTypeExtension();
              case "enum":
                return this.parseEnumTypeExtension();
              case "input":
                return this.parseInputObjectTypeExtension();
            }
          }
          throw this.unexpected(keywordToken);
        };
        _proto.parseSchemaExtension = function parseSchemaExtension() {
          var start = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("schema");
          var directives = this.parseDirectives(true);
          var operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
          if (directives.length === 0 && operationTypes.length === 0) {
            throw this.unexpected();
          }
          return {
            kind: Kind.SCHEMA_EXTENSION,
            directives,
            operationTypes,
            loc: this.loc(start)
          };
        };
        _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
          var start = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("scalar");
          var name = this.parseName();
          var directives = this.parseDirectives(true);
          if (directives.length === 0) {
            throw this.unexpected();
          }
          return {
            kind: Kind.SCALAR_TYPE_EXTENSION,
            name,
            directives,
            loc: this.loc(start)
          };
        };
        _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
          var start = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("type");
          var name = this.parseName();
          var interfaces = this.parseImplementsInterfaces();
          var directives = this.parseDirectives(true);
          var fields = this.parseFieldsDefinition();
          if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
          }
          return {
            kind: Kind.OBJECT_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
          };
        };
        _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
          var start = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("interface");
          var name = this.parseName();
          var interfaces = this.parseImplementsInterfaces();
          var directives = this.parseDirectives(true);
          var fields = this.parseFieldsDefinition();
          if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
          }
          return {
            kind: Kind.INTERFACE_TYPE_EXTENSION,
            name,
            interfaces,
            directives,
            fields,
            loc: this.loc(start)
          };
        };
        _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
          var start = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("union");
          var name = this.parseName();
          var directives = this.parseDirectives(true);
          var types = this.parseUnionMemberTypes();
          if (directives.length === 0 && types.length === 0) {
            throw this.unexpected();
          }
          return {
            kind: Kind.UNION_TYPE_EXTENSION,
            name,
            directives,
            types,
            loc: this.loc(start)
          };
        };
        _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
          var start = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("enum");
          var name = this.parseName();
          var directives = this.parseDirectives(true);
          var values = this.parseEnumValuesDefinition();
          if (directives.length === 0 && values.length === 0) {
            throw this.unexpected();
          }
          return {
            kind: Kind.ENUM_TYPE_EXTENSION,
            name,
            directives,
            values,
            loc: this.loc(start)
          };
        };
        _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
          var start = this._lexer.token;
          this.expectKeyword("extend");
          this.expectKeyword("input");
          var name = this.parseName();
          var directives = this.parseDirectives(true);
          var fields = this.parseInputFieldsDefinition();
          if (directives.length === 0 && fields.length === 0) {
            throw this.unexpected();
          }
          return {
            kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
            name,
            directives,
            fields,
            loc: this.loc(start)
          };
        };
        _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
          var start = this._lexer.token;
          var description = this.parseDescription();
          this.expectKeyword("directive");
          this.expectToken(TokenKind.AT);
          var name = this.parseName();
          var args = this.parseArgumentDefs();
          var repeatable = this.expectOptionalKeyword("repeatable");
          this.expectKeyword("on");
          var locations = this.parseDirectiveLocations();
          return {
            kind: Kind.DIRECTIVE_DEFINITION,
            description,
            name,
            arguments: args,
            repeatable,
            locations,
            loc: this.loc(start)
          };
        };
        _proto.parseDirectiveLocations = function parseDirectiveLocations() {
          return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
        };
        _proto.parseDirectiveLocation = function parseDirectiveLocation() {
          var start = this._lexer.token;
          var name = this.parseName();
          if (DirectiveLocation[name.value] !== void 0) {
            return name;
          }
          throw this.unexpected(start);
        };
        _proto.loc = function loc(startToken) {
          var _this$_options4;
          if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
            return new Location(startToken, this._lexer.lastToken, this._lexer.source);
          }
        };
        _proto.peek = function peek(kind) {
          return this._lexer.token.kind === kind;
        };
        _proto.expectToken = function expectToken(kind) {
          var token = this._lexer.token;
          if (token.kind === kind) {
            this._lexer.advance();
            return token;
          }
          throw syntaxError(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
        };
        _proto.expectOptionalToken = function expectOptionalToken(kind) {
          var token = this._lexer.token;
          if (token.kind === kind) {
            this._lexer.advance();
            return token;
          }
          return void 0;
        };
        _proto.expectKeyword = function expectKeyword(value) {
          var token = this._lexer.token;
          if (token.kind === TokenKind.NAME && token.value === value) {
            this._lexer.advance();
          } else {
            throw syntaxError(this._lexer.source, token.start, 'Expected "'.concat(value, '", found ').concat(getTokenDesc(token), "."));
          }
        };
        _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
          var token = this._lexer.token;
          if (token.kind === TokenKind.NAME && token.value === value) {
            this._lexer.advance();
            return true;
          }
          return false;
        };
        _proto.unexpected = function unexpected(atToken) {
          var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
          return syntaxError(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
        };
        _proto.any = function any(openKind, parseFn, closeKind) {
          this.expectToken(openKind);
          var nodes = [];
          while (!this.expectOptionalToken(closeKind)) {
            nodes.push(parseFn.call(this));
          }
          return nodes;
        };
        _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
          if (this.expectOptionalToken(openKind)) {
            var nodes = [];
            do {
              nodes.push(parseFn.call(this));
            } while (!this.expectOptionalToken(closeKind));
            return nodes;
          }
          return [];
        };
        _proto.many = function many(openKind, parseFn, closeKind) {
          this.expectToken(openKind);
          var nodes = [];
          do {
            nodes.push(parseFn.call(this));
          } while (!this.expectOptionalToken(closeKind));
          return nodes;
        };
        _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
          this.expectOptionalToken(delimiterKind);
          var nodes = [];
          do {
            nodes.push(parseFn.call(this));
          } while (this.expectOptionalToken(delimiterKind));
          return nodes;
        };
        return Parser2;
      }();
    }
  });

  // ../wms-core-ui/node_modules/graphql/language/index.mjs
  var init_language = __esm({
    "../wms-core-ui/node_modules/graphql/language/index.mjs"() {
      init_source();
      init_parser();
    }
  });

  // ../wms-core-ui/node_modules/graphql/index.mjs
  var init_graphql = __esm({
    "../wms-core-ui/node_modules/graphql/index.mjs"() {
      init_language();
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/utilities/globals/fix-graphql.js
  function removeTemporaryGlobals() {
    return typeof Source === "function" ? remove() : remove();
  }
  var init_fix_graphql = __esm({
    "../wms-core-ui/node_modules/@apollo/client/utilities/globals/fix-graphql.js"() {
      init_process();
      init_graphql();
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/utilities/globals/index.js
  function checkDEV() {
    __DEV__ ? invariant(typeof DEV_default === "boolean", DEV_default) : invariant(typeof DEV_default === "boolean", 36);
  }
  var init_globals = __esm({
    "../wms-core-ui/node_modules/@apollo/client/utilities/globals/index.js"() {
      init_invariant_esm();
      init_DEV();
      init_fix_graphql();
      init_maybe();
      init_global();
      removeTemporaryGlobals();
      checkDEV();
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/link/core/types.js
  var init_types = __esm({
    "../wms-core-ui/node_modules/@apollo/client/link/core/types.js"() {
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/link/core/index.js
  var init_core = __esm({
    "../wms-core-ui/node_modules/@apollo/client/link/core/index.js"() {
      init_globals();
      init_types();
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/link/http/index.js
  var init_http = __esm({
    "../wms-core-ui/node_modules/@apollo/client/link/http/index.js"() {
      init_globals();
    }
  });

  // ../wms-core-ui/node_modules/@wry/equality/lib/equality.esm.js
  var _a2, toString, hasOwnProperty, fnToStr;
  var init_equality_esm = __esm({
    "../wms-core-ui/node_modules/@wry/equality/lib/equality.esm.js"() {
      _a2 = Object.prototype;
      toString = _a2.toString;
      hasOwnProperty = _a2.hasOwnProperty;
      fnToStr = Function.prototype.toString;
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/cache/inmemory/types.js
  var init_types2 = __esm({
    "../wms-core-ui/node_modules/@apollo/client/cache/inmemory/types.js"() {
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/core/types.js
  var init_types3 = __esm({
    "../wms-core-ui/node_modules/@apollo/client/core/types.js"() {
    }
  });

  // ../wms-core-ui/node_modules/graphql-tag/lib/index.js
  function normalize(string) {
    return string.replace(/[\s,]+/g, " ").trim();
  }
  function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
  }
  function processFragments(ast) {
    var seenKeys = /* @__PURE__ */ new Set();
    var definitions = [];
    ast.definitions.forEach(function(fragmentDefinition) {
      if (fragmentDefinition.kind === "FragmentDefinition") {
        var fragmentName = fragmentDefinition.name.value;
        var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
        var sourceKeySet = fragmentSourceMap.get(fragmentName);
        if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
          if (printFragmentWarnings) {
            console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
          }
        } else if (!sourceKeySet) {
          fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
        }
        sourceKeySet.add(sourceKey);
        if (!seenKeys.has(sourceKey)) {
          seenKeys.add(sourceKey);
          definitions.push(fragmentDefinition);
        }
      } else {
        definitions.push(fragmentDefinition);
      }
    });
    return __assign(__assign({}, ast), { definitions });
  }
  function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function(node) {
      if (node.loc)
        delete node.loc;
      Object.keys(node).forEach(function(key) {
        var value = node[key];
        if (value && typeof value === "object") {
          workSet.add(value);
        }
      });
    });
    var loc = doc.loc;
    if (loc) {
      delete loc.startToken;
      delete loc.endToken;
    }
    return doc;
  }
  function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
      var parsed = parse(source, {
        experimentalFragmentVariables,
        allowLegacyFragmentVariables: experimentalFragmentVariables
      });
      if (!parsed || parsed.kind !== "Document") {
        throw new Error("Not a valid GraphQL document.");
      }
      docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
  }
  function gql(literals) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (typeof literals === "string") {
      literals = [literals];
    }
    var result = literals[0];
    args.forEach(function(arg, i) {
      if (arg && arg.kind === "Document") {
        result += arg.loc.source.body;
      } else {
        result += arg;
      }
      result += literals[i + 1];
    });
    return parseDocument(result);
  }
  function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
  }
  function disableFragmentWarnings() {
    printFragmentWarnings = false;
  }
  function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
  }
  function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
  }
  var docCache, fragmentSourceMap, printFragmentWarnings, experimentalFragmentVariables, extras;
  var init_lib = __esm({
    "../wms-core-ui/node_modules/graphql-tag/lib/index.js"() {
      init_modules();
      init_graphql();
      docCache = /* @__PURE__ */ new Map();
      fragmentSourceMap = /* @__PURE__ */ new Map();
      printFragmentWarnings = true;
      experimentalFragmentVariables = false;
      extras = {
        gql,
        resetCaches,
        disableFragmentWarnings,
        enableExperimentalFragmentVariables,
        disableExperimentalFragmentVariables
      };
      (function(gql_1) {
        gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
      })(gql || (gql = {}));
      gql["default"] = gql;
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/core/index.js
  var init_core2 = __esm({
    "../wms-core-ui/node_modules/@apollo/client/core/index.js"() {
      init_globals();
      init_types3();
      init_types2();
      init_core();
      init_http();
      init_invariant_esm();
      init_lib();
      setVerbosity(DEV_default ? "log" : "silent");
    }
  });

  // ../wms-core-ui/node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "../wms-core-ui/node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty2 = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty2.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // ../wms-core-ui/node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "../wms-core-ui/node_modules/react/cjs/react.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var _assign = require_object_assign();
          var ReactVersion = "17.0.2";
          var REACT_ELEMENT_TYPE = 60103;
          var REACT_PORTAL_TYPE = 60106;
          exports.Fragment = 60107;
          exports.StrictMode = 60108;
          exports.Profiler = 60114;
          var REACT_PROVIDER_TYPE = 60109;
          var REACT_CONTEXT_TYPE = 60110;
          var REACT_FORWARD_REF_TYPE = 60112;
          exports.Suspense = 60113;
          var REACT_SUSPENSE_LIST_TYPE = 60120;
          var REACT_MEMO_TYPE = 60115;
          var REACT_LAZY_TYPE = 60116;
          var REACT_BLOCK_TYPE = 60121;
          var REACT_SERVER_BLOCK_TYPE = 60122;
          var REACT_FUNDAMENTAL_TYPE = 60117;
          var REACT_SCOPE_TYPE = 60119;
          var REACT_OPAQUE_ID_TYPE = 60128;
          var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
          var REACT_OFFSCREEN_TYPE = 60130;
          var REACT_LEGACY_HIDDEN_TYPE = 60131;
          if (typeof Symbol === "function" && Symbol.for) {
            var symbolFor = Symbol.for;
            REACT_ELEMENT_TYPE = symbolFor("react.element");
            REACT_PORTAL_TYPE = symbolFor("react.portal");
            exports.Fragment = symbolFor("react.fragment");
            exports.StrictMode = symbolFor("react.strict_mode");
            exports.Profiler = symbolFor("react.profiler");
            REACT_PROVIDER_TYPE = symbolFor("react.provider");
            REACT_CONTEXT_TYPE = symbolFor("react.context");
            REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
            exports.Suspense = symbolFor("react.suspense");
            REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
            REACT_MEMO_TYPE = symbolFor("react.memo");
            REACT_LAZY_TYPE = symbolFor("react.lazy");
            REACT_BLOCK_TYPE = symbolFor("react.block");
            REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
            REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
            REACT_SCOPE_TYPE = symbolFor("react.scope");
            REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
            REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
            REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
          }
          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: 0
          };
          var ReactCurrentOwner = {
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var IsSomeRendererActing = {
            current: false
          };
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner,
            IsSomeRendererActing,
            assign: _assign
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          }
          function warn(format) {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
          function error(format) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            isMounted: function(publicInstance) {
              return false;
            },
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
              {
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
              }
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          _assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || "";
            return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentName(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case exports.Fragment:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case exports.Profiler:
                return "Profiler";
              case exports.StrictMode:
                return "StrictMode";
              case exports.Suspense:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  return getComponentName(type.type);
                case REACT_BLOCK_TYPE:
                  return getComponentName(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentName(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty2 = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty2.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty2.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentName(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self2, source, owner, props) {
            var element = {
              $$typeof: REACT_ELEMENT_TYPE,
              type,
              key,
              ref,
              props,
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self2 = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              self2 = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (!!(element === null || element === void 0)) {
              {
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
              }
            }
            var propName;
            var props = _assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self2 = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self2, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (Array.isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (Array.isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = "" + children;
                {
                  {
                    throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                  }
                }
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              {
                throw Error("React.Children.only expected to receive a single React element child.");
              }
            }
            return children;
          }
          function createContext(defaultValue, calculateChangedBits) {
            if (calculateChangedBits === void 0) {
              calculateChangedBits = null;
            } else {
              {
                if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                  error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
                }
              }
            }
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              _calculateChangedBits: calculateChangedBits,
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context,
                _calculateChangedBits: context._calculateChangedBits
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
              thenable.then(function(moduleObject) {
                if (payload._status === Pending) {
                  var defaultExport = moduleObject.default;
                  {
                    if (defaultExport === void 0) {
                      error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                    }
                  }
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = defaultExport;
                }
              }, function(error2) {
                if (payload._status === Pending) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
            }
            if (payload._status === Resolved) {
              return payload._result;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              _status: -1,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (render.displayName == null) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var enableScopeAPI = false;
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (type.displayName == null) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            if (!(dispatcher !== null)) {
              {
                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext3(Context, unstable_observedBits) {
            var dispatcher = resolveDispatcher();
            {
              if (unstable_observedBits !== void 0) {
                error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : "");
              }
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context, unstable_observedBits);
          }
          function useState6(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef4(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect5(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback3(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo3(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: _assign({}, props, {
                    value: prevLog
                  }),
                  info: _assign({}, props, {
                    value: prevInfo
                  }),
                  warn: _assign({}, props, {
                    value: prevWarn
                  }),
                  error: _assign({}, props, {
                    value: prevError
                  }),
                  group: _assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: _assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: _assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case exports.Suspense:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_BLOCK_TYPE:
                  return describeFunctionComponentFrame(type._render);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(Object.prototype.hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentName(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (Array.isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentName(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentName(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (Array.isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === exports.Fragment) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          {
            try {
              var frozenObject = Object.freeze({});
              /* @__PURE__ */ new Map([[frozenObject, null]]);
              /* @__PURE__ */ new Set([frozenObject]);
            } catch (e) {
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.PureComponent = PureComponent;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.useCallback = useCallback3;
          exports.useContext = useContext3;
          exports.useDebugValue = useDebugValue;
          exports.useEffect = useEffect5;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo3;
          exports.useReducer = useReducer;
          exports.useRef = useRef4;
          exports.useState = useState6;
          exports.version = ReactVersion;
        })();
      }
    }
  });

  // ../wms-core-ui/node_modules/react/index.js
  var require_react = __commonJS({
    "../wms-core-ui/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/react/hooks/useApolloClient.js
  var import_react;
  var init_useApolloClient = __esm({
    "../wms-core-ui/node_modules/@apollo/client/react/hooks/useApolloClient.js"() {
      init_globals();
      import_react = __toESM(require_react(), 1);
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/react/hooks/useQuery.js
  var import_react2;
  var init_useQuery = __esm({
    "../wms-core-ui/node_modules/@apollo/client/react/hooks/useQuery.js"() {
      init_modules();
      import_react2 = __toESM(require_react(), 1);
      init_equality_esm();
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/react/hooks/useLazyQuery.js
  var import_react3;
  var init_useLazyQuery = __esm({
    "../wms-core-ui/node_modules/@apollo/client/react/hooks/useLazyQuery.js"() {
      init_modules();
      import_react3 = __toESM(require_react(), 1);
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/react/hooks/useMutation.js
  var import_react4;
  var init_useMutation = __esm({
    "../wms-core-ui/node_modules/@apollo/client/react/hooks/useMutation.js"() {
      init_modules();
      import_react4 = __toESM(require_react(), 1);
      init_equality_esm();
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/react/hooks/useSubscription.js
  var import_react5;
  var init_useSubscription = __esm({
    "../wms-core-ui/node_modules/@apollo/client/react/hooks/useSubscription.js"() {
      init_globals();
      import_react5 = __toESM(require_react(), 1);
      init_equality_esm();
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/react/hooks/useReactiveVar.js
  var import_react6;
  var init_useReactiveVar = __esm({
    "../wms-core-ui/node_modules/@apollo/client/react/hooks/useReactiveVar.js"() {
      import_react6 = __toESM(require_react(), 1);
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/react/hooks/index.js
  var init_hooks = __esm({
    "../wms-core-ui/node_modules/@apollo/client/react/hooks/index.js"() {
      init_globals();
      init_useApolloClient();
      init_useLazyQuery();
      init_useMutation();
      init_useQuery();
      init_useSubscription();
      init_useReactiveVar();
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/react/types/types.js
  var init_types4 = __esm({
    "../wms-core-ui/node_modules/@apollo/client/react/types/types.js"() {
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/react/index.js
  var init_react = __esm({
    "../wms-core-ui/node_modules/@apollo/client/react/index.js"() {
      init_globals();
      init_hooks();
      init_types4();
    }
  });

  // ../wms-core-ui/node_modules/@apollo/client/index.js
  var init_client = __esm({
    "../wms-core-ui/node_modules/@apollo/client/index.js"() {
      init_core2();
      init_react();
    }
  });

  // ../wms-core-ui/packages/gqls/fragments/inbound/inbound.fragment.ts
  var inbound_fragment_default;
  var init_inbound_fragment = __esm({
    "../wms-core-ui/packages/gqls/fragments/inbound/inbound.fragment.ts"() {
      init_client();
      inbound_fragment_default = gql`
  fragment InboundFragment on inbound_inbound {
    id
    number
    status
    arrivalDate: arrival_date
    totalQuantity: total_quantity
    tenant {
      id
      name
    }
    attributes {
      id
      key
      value
    }
    lines {
      id
      quantity
      product {
        id
        sku
        name
        status
        imageUrl: image_url
        image_url
        uom_list {
          id
          identifier {
            id
            type
            number
            is_primary
          }
        }
        serial_number_management
        shelf_life_management
        lot_management
        uom_conversion_management
      }
      product_uom {
        id
        uom_standard {
          id
          number
          name
        }
      }
    }
    instructions {
      id
      number
      status
      totalQuantity: total_quantity
      class {
        id
        name
      }
      attributes: instruction_attributes {
        id
        key
        value
      }
      instruction_status_history_list {
        id
        status
        created_at
        created_by
      }
    }
    trucks {
      id
      licensePlateNumber: license_plate_number
      driverName: driver_name
      arrivalTime: arrival_time
      truckType: truck_type
      notes
      dock_location {
        id
        number
      }
    }
    status_history_list {
      id
      status
      created_at
    }
    createdAt: created_at
    createdBy: created_by
    updatedAt: updated_at
    updatedBy: updated_by
  }
`;
    }
  });

  // ../wms-core-ui/packages/gqls/queries/inbound/inbound.query.ts
  var inbound_query_exports = {};
  __export(inbound_query_exports, {
    default: () => inbound_query_default
  });
  var inbound_query_default;
  var init_inbound_query = __esm({
    "../wms-core-ui/packages/gqls/queries/inbound/inbound.query.ts"() {
      init_client();
      init_inbound_fragment();
      inbound_query_default = gql`
  query Inbound($id: uuid!) {
    inbound: inbound_inbound_by_pk(id: $id) {
      ...InboundFragment
    }
  }
  ${inbound_fragment_default}
`;
    }
  });

  // try.ts
  var parseGraphqlQuery = () => {
    const gqlsource = (init_inbound_query(), __toCommonJS(inbound_query_exports)).default;
    const definitions = gqlsource.definitions;
    const operationsDef = definitions.find((item) => {
      if (item.kind === "OperationDefinition") {
        return true;
      }
      return false;
    });
    const findRelations = (collections) => {
      let result2 = [];
      collections.forEach((def) => {
        var _a3;
        const obj = { name: "", relations: [] };
        if (!def.selectionSet && def.kind === "Field") {
          return;
        }
        if (def.kind === "Field") {
          obj.name = def.name.value;
        }
        if (def.kind === "FragmentSpread") {
          const fragmentName = def.name.value;
          const fragment = definitions.find((item) => {
            return item.kind === "FragmentDefinition" && item.name.value === fragmentName;
          });
          if (fragment) {
            result2 = findRelations(fragment.selectionSet.selections);
            return;
          }
        }
        if (((_a3 = def.selectionSet) == null ? void 0 : _a3.selections.length) > 0) {
          obj.relations = [
            ...obj.relations,
            ...findRelations(def.selectionSet.selections)
          ];
        }
        result2.push(obj);
      });
      return result2;
    };
    const root = operationsDef.selectionSet.selections[0];
    const relations = findRelations(root.selectionSet.selections);
    const result = {
      name: root.name.value.replace("_by_pk", ""),
      relations
    };
    return result;
  };
  console.log(JSON.stringify(parseGraphqlQuery(), null, 2));
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
