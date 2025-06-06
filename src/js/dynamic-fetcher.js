(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) =>
    function __require() {
      return (
        mod ||
          (0, cb[__getOwnPropNames(cb)[0]])(
            (mod = { exports: {} }).exports,
            mod
          ),
        mod.exports
      );
    };
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable:
              !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      isNodeMode || !mod || !mod.__esModule
        ? __defProp(target, "default", { value: mod, enumerable: true })
        : target,
      mod
    )
  );

  // node_modules/bootstrap/js/dist/dom/data.js
  var require_data = __commonJS({
    "node_modules/bootstrap/js/dist/dom/data.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? (module.exports = factory())
          : typeof define === "function" && define.amd
          ? define(factory)
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            (global.Data = factory()));
      })(exports, function () {
        "use strict";
        const elementMap = /* @__PURE__ */ new Map();
        const data = {
          set(element, key, instance) {
            if (!elementMap.has(element)) {
              elementMap.set(element, /* @__PURE__ */ new Map());
            }
            const instanceMap = elementMap.get(element);
            if (!instanceMap.has(key) && instanceMap.size !== 0) {
              console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                  Array.from(instanceMap.keys())[0]
                }.`
              );
              return;
            }
            instanceMap.set(key, instance);
          },
          get(element, key) {
            if (elementMap.has(element)) {
              return elementMap.get(element).get(key) || null;
            }
            return null;
          },
          remove(element, key) {
            if (!elementMap.has(element)) {
              return;
            }
            const instanceMap = elementMap.get(element);
            instanceMap.delete(key);
            if (instanceMap.size === 0) {
              elementMap.delete(element);
            }
          },
        };
        return data;
      });
    },
  });

  // node_modules/bootstrap/js/dist/util/index.js
  var require_util = __commonJS({
    "node_modules/bootstrap/js/dist/util/index.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? factory(exports)
          : typeof define === "function" && define.amd
          ? define(["exports"], factory)
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            factory((global.Index = {})));
      })(exports, function (exports2) {
        "use strict";
        const MAX_UID = 1e6;
        const MILLISECONDS_MULTIPLIER = 1e3;
        const TRANSITION_END = "transitionend";
        const parseSelector = (selector) => {
          if (selector && window.CSS && window.CSS.escape) {
            selector = selector.replace(
              /#([^\s"#']+)/g,
              (match, id) => `#${CSS.escape(id)}`
            );
          }
          return selector;
        };
        const toType = (object) => {
          if (object === null || object === void 0) {
            return `${object}`;
          }
          return Object.prototype.toString
            .call(object)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase();
        };
        const getUID = (prefix) => {
          do {
            prefix += Math.floor(Math.random() * MAX_UID);
          } while (document.getElementById(prefix));
          return prefix;
        };
        const getTransitionDurationFromElement = (element) => {
          if (!element) {
            return 0;
          }
          let { transitionDuration, transitionDelay } =
            window.getComputedStyle(element);
          const floatTransitionDuration = Number.parseFloat(transitionDuration);
          const floatTransitionDelay = Number.parseFloat(transitionDelay);
          if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
          }
          transitionDuration = transitionDuration.split(",")[0];
          transitionDelay = transitionDelay.split(",")[0];
          return (
            (Number.parseFloat(transitionDuration) +
              Number.parseFloat(transitionDelay)) *
            MILLISECONDS_MULTIPLIER
          );
        };
        const triggerTransitionEnd = (element) => {
          element.dispatchEvent(new Event(TRANSITION_END));
        };
        const isElement = (object) => {
          if (!object || typeof object !== "object") {
            return false;
          }
          if (typeof object.jquery !== "undefined") {
            object = object[0];
          }
          return typeof object.nodeType !== "undefined";
        };
        const getElement = (object) => {
          if (isElement(object)) {
            return object.jquery ? object[0] : object;
          }
          if (typeof object === "string" && object.length > 0) {
            return document.querySelector(parseSelector(object));
          }
          return null;
        };
        const isVisible = (element) => {
          if (!isElement(element) || element.getClientRects().length === 0) {
            return false;
          }
          const elementIsVisible =
            getComputedStyle(element).getPropertyValue("visibility") ===
            "visible";
          const closedDetails = element.closest("details:not([open])");
          if (!closedDetails) {
            return elementIsVisible;
          }
          if (closedDetails !== element) {
            const summary = element.closest("summary");
            if (summary && summary.parentNode !== closedDetails) {
              return false;
            }
            if (summary === null) {
              return false;
            }
          }
          return elementIsVisible;
        };
        const isDisabled = (element) => {
          if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return true;
          }
          if (element.classList.contains("disabled")) {
            return true;
          }
          if (typeof element.disabled !== "undefined") {
            return element.disabled;
          }
          return (
            element.hasAttribute("disabled") &&
            element.getAttribute("disabled") !== "false"
          );
        };
        const findShadowRoot = (element) => {
          if (!document.documentElement.attachShadow) {
            return null;
          }
          if (typeof element.getRootNode === "function") {
            const root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
          }
          if (element instanceof ShadowRoot) {
            return element;
          }
          if (!element.parentNode) {
            return null;
          }
          return findShadowRoot(element.parentNode);
        };
        const noop = () => {};
        const reflow = (element) => {
          element.offsetHeight;
        };
        const getjQuery = () => {
          if (
            window.jQuery &&
            !document.body.hasAttribute("data-bs-no-jquery")
          ) {
            return window.jQuery;
          }
          return null;
        };
        const DOMContentLoadedCallbacks = [];
        const onDOMContentLoaded = (callback) => {
          if (document.readyState === "loading") {
            if (!DOMContentLoadedCallbacks.length) {
              document.addEventListener("DOMContentLoaded", () => {
                for (const callback2 of DOMContentLoadedCallbacks) {
                  callback2();
                }
              });
            }
            DOMContentLoadedCallbacks.push(callback);
          } else {
            callback();
          }
        };
        const isRTL = () => document.documentElement.dir === "rtl";
        const defineJQueryPlugin = (plugin) => {
          onDOMContentLoaded(() => {
            const $2 = getjQuery();
            if ($2) {
              const name = plugin.NAME;
              const JQUERY_NO_CONFLICT = $2.fn[name];
              $2.fn[name] = plugin.jQueryInterface;
              $2.fn[name].Constructor = plugin;
              $2.fn[name].noConflict = () => {
                $2.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
              };
            }
          });
        };
        const execute = (
          possibleCallback,
          args = [],
          defaultValue = possibleCallback
        ) => {
          return typeof possibleCallback === "function"
            ? possibleCallback(...args)
            : defaultValue;
        };
        const executeAfterTransition = (
          callback,
          transitionElement,
          waitForTransition = true
        ) => {
          if (!waitForTransition) {
            execute(callback);
            return;
          }
          const durationPadding = 5;
          const emulatedDuration =
            getTransitionDurationFromElement(transitionElement) +
            durationPadding;
          let called = false;
          const handler = ({ target }) => {
            if (target !== transitionElement) {
              return;
            }
            called = true;
            transitionElement.removeEventListener(TRANSITION_END, handler);
            execute(callback);
          };
          transitionElement.addEventListener(TRANSITION_END, handler);
          setTimeout(() => {
            if (!called) {
              triggerTransitionEnd(transitionElement);
            }
          }, emulatedDuration);
        };
        const getNextActiveElement = (
          list,
          activeElement,
          shouldGetNext,
          isCycleAllowed
        ) => {
          const listLength = list.length;
          let index = list.indexOf(activeElement);
          if (index === -1) {
            return !shouldGetNext && isCycleAllowed
              ? list[listLength - 1]
              : list[0];
          }
          index += shouldGetNext ? 1 : -1;
          if (isCycleAllowed) {
            index = (index + listLength) % listLength;
          }
          return list[Math.max(0, Math.min(index, listLength - 1))];
        };
        exports2.defineJQueryPlugin = defineJQueryPlugin;
        exports2.execute = execute;
        exports2.executeAfterTransition = executeAfterTransition;
        exports2.findShadowRoot = findShadowRoot;
        exports2.getElement = getElement;
        exports2.getNextActiveElement = getNextActiveElement;
        exports2.getTransitionDurationFromElement =
          getTransitionDurationFromElement;
        exports2.getUID = getUID;
        exports2.getjQuery = getjQuery;
        exports2.isDisabled = isDisabled;
        exports2.isElement = isElement;
        exports2.isRTL = isRTL;
        exports2.isVisible = isVisible;
        exports2.noop = noop;
        exports2.onDOMContentLoaded = onDOMContentLoaded;
        exports2.parseSelector = parseSelector;
        exports2.reflow = reflow;
        exports2.toType = toType;
        exports2.triggerTransitionEnd = triggerTransitionEnd;
        Object.defineProperty(exports2, Symbol.toStringTag, {
          value: "Module",
        });
      });
    },
  });

  // node_modules/bootstrap/js/dist/dom/event-handler.js
  var require_event_handler = __commonJS({
    "node_modules/bootstrap/js/dist/dom/event-handler.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? (module.exports = factory(require_util()))
          : typeof define === "function" && define.amd
          ? define(["../util/index"], factory)
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            (global.EventHandler = factory(global.Index)));
      })(exports, function (index_js) {
        "use strict";
        const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
        const stripNameRegex = /\..*/;
        const stripUidRegex = /::\d+$/;
        const eventRegistry = {};
        let uidEvent = 1;
        const customEvents = {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
        };
        const nativeEvents = /* @__PURE__ */ new Set([
          "click",
          "dblclick",
          "mouseup",
          "mousedown",
          "contextmenu",
          "mousewheel",
          "DOMMouseScroll",
          "mouseover",
          "mouseout",
          "mousemove",
          "selectstart",
          "selectend",
          "keydown",
          "keypress",
          "keyup",
          "orientationchange",
          "touchstart",
          "touchmove",
          "touchend",
          "touchcancel",
          "pointerdown",
          "pointermove",
          "pointerup",
          "pointerleave",
          "pointercancel",
          "gesturestart",
          "gesturechange",
          "gestureend",
          "focus",
          "blur",
          "change",
          "reset",
          "select",
          "submit",
          "focusin",
          "focusout",
          "load",
          "unload",
          "beforeunload",
          "resize",
          "move",
          "DOMContentLoaded",
          "readystatechange",
          "error",
          "abort",
          "scroll",
        ]);
        function makeEventUid(element, uid) {
          return (
            (uid && `${uid}::${uidEvent++}`) || element.uidEvent || uidEvent++
          );
        }
        function getElementEvents(element) {
          const uid = makeEventUid(element);
          element.uidEvent = uid;
          eventRegistry[uid] = eventRegistry[uid] || {};
          return eventRegistry[uid];
        }
        function bootstrapHandler(element, fn) {
          return function handler(event) {
            hydrateObj(event, {
              delegateTarget: element,
            });
            if (handler.oneOff) {
              EventHandler.off(element, event.type, fn);
            }
            return fn.apply(element, [event]);
          };
        }
        function bootstrapDelegationHandler(element, selector, fn) {
          return function handler(event) {
            const domElements = element.querySelectorAll(selector);
            for (
              let { target } = event;
              target && target !== this;
              target = target.parentNode
            ) {
              for (const domElement of domElements) {
                if (domElement !== target) {
                  continue;
                }
                hydrateObj(event, {
                  delegateTarget: target,
                });
                if (handler.oneOff) {
                  EventHandler.off(element, event.type, selector, fn);
                }
                return fn.apply(target, [event]);
              }
            }
          };
        }
        function findHandler(events, callable, delegationSelector = null) {
          return Object.values(events).find(
            (event) =>
              event.callable === callable &&
              event.delegationSelector === delegationSelector
          );
        }
        function normalizeParameters(
          originalTypeEvent,
          handler,
          delegationFunction
        ) {
          const isDelegated = typeof handler === "string";
          const callable = isDelegated
            ? delegationFunction
            : handler || delegationFunction;
          let typeEvent = getTypeEvent(originalTypeEvent);
          if (!nativeEvents.has(typeEvent)) {
            typeEvent = originalTypeEvent;
          }
          return [isDelegated, callable, typeEvent];
        }
        function addHandler(
          element,
          originalTypeEvent,
          handler,
          delegationFunction,
          oneOff
        ) {
          if (typeof originalTypeEvent !== "string" || !element) {
            return;
          }
          let [isDelegated, callable, typeEvent] = normalizeParameters(
            originalTypeEvent,
            handler,
            delegationFunction
          );
          if (originalTypeEvent in customEvents) {
            const wrapFunction = (fn2) => {
              return function (event) {
                if (
                  !event.relatedTarget ||
                  (event.relatedTarget !== event.delegateTarget &&
                    !event.delegateTarget.contains(event.relatedTarget))
                ) {
                  return fn2.call(this, event);
                }
              };
            };
            callable = wrapFunction(callable);
          }
          const events = getElementEvents(element);
          const handlers = events[typeEvent] || (events[typeEvent] = {});
          const previousFunction = findHandler(
            handlers,
            callable,
            isDelegated ? handler : null
          );
          if (previousFunction) {
            previousFunction.oneOff = previousFunction.oneOff && oneOff;
            return;
          }
          const uid = makeEventUid(
            callable,
            originalTypeEvent.replace(namespaceRegex, "")
          );
          const fn = isDelegated
            ? bootstrapDelegationHandler(element, handler, callable)
            : bootstrapHandler(element, callable);
          fn.delegationSelector = isDelegated ? handler : null;
          fn.callable = callable;
          fn.oneOff = oneOff;
          fn.uidEvent = uid;
          handlers[uid] = fn;
          element.addEventListener(typeEvent, fn, isDelegated);
        }
        function removeHandler(
          element,
          events,
          typeEvent,
          handler,
          delegationSelector
        ) {
          const fn = findHandler(
            events[typeEvent],
            handler,
            delegationSelector
          );
          if (!fn) {
            return;
          }
          element.removeEventListener(
            typeEvent,
            fn,
            Boolean(delegationSelector)
          );
          delete events[typeEvent][fn.uidEvent];
        }
        function removeNamespacedHandlers(
          element,
          events,
          typeEvent,
          namespace
        ) {
          const storeElementEvent = events[typeEvent] || {};
          for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
            if (handlerKey.includes(namespace)) {
              removeHandler(
                element,
                events,
                typeEvent,
                event.callable,
                event.delegationSelector
              );
            }
          }
        }
        function getTypeEvent(event) {
          event = event.replace(stripNameRegex, "");
          return customEvents[event] || event;
        }
        const EventHandler = {
          on(element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, false);
          },
          one(element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, true);
          },
          off(element, originalTypeEvent, handler, delegationFunction) {
            if (typeof originalTypeEvent !== "string" || !element) {
              return;
            }
            const [isDelegated, callable, typeEvent] = normalizeParameters(
              originalTypeEvent,
              handler,
              delegationFunction
            );
            const inNamespace = typeEvent !== originalTypeEvent;
            const events = getElementEvents(element);
            const storeElementEvent = events[typeEvent] || {};
            const isNamespace = originalTypeEvent.startsWith(".");
            if (typeof callable !== "undefined") {
              if (!Object.keys(storeElementEvent).length) {
                return;
              }
              removeHandler(
                element,
                events,
                typeEvent,
                callable,
                isDelegated ? handler : null
              );
              return;
            }
            if (isNamespace) {
              for (const elementEvent of Object.keys(events)) {
                removeNamespacedHandlers(
                  element,
                  events,
                  elementEvent,
                  originalTypeEvent.slice(1)
                );
              }
            }
            for (const [keyHandlers, event] of Object.entries(
              storeElementEvent
            )) {
              const handlerKey = keyHandlers.replace(stripUidRegex, "");
              if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                removeHandler(
                  element,
                  events,
                  typeEvent,
                  event.callable,
                  event.delegationSelector
                );
              }
            }
          },
          trigger(element, event, args) {
            if (typeof event !== "string" || !element) {
              return null;
            }
            const $2 = index_js.getjQuery();
            const typeEvent = getTypeEvent(event);
            const inNamespace = event !== typeEvent;
            let jQueryEvent = null;
            let bubbles = true;
            let nativeDispatch = true;
            let defaultPrevented = false;
            if (inNamespace && $2) {
              jQueryEvent = $2.Event(event, args);
              $2(element).trigger(jQueryEvent);
              bubbles = !jQueryEvent.isPropagationStopped();
              nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
              defaultPrevented = jQueryEvent.isDefaultPrevented();
            }
            const evt = hydrateObj(
              new Event(event, {
                bubbles,
                cancelable: true,
              }),
              args
            );
            if (defaultPrevented) {
              evt.preventDefault();
            }
            if (nativeDispatch) {
              element.dispatchEvent(evt);
            }
            if (evt.defaultPrevented && jQueryEvent) {
              jQueryEvent.preventDefault();
            }
            return evt;
          },
        };
        function hydrateObj(obj, meta = {}) {
          for (const [key, value] of Object.entries(meta)) {
            try {
              obj[key] = value;
            } catch (_unused) {
              Object.defineProperty(obj, key, {
                configurable: true,
                get() {
                  return value;
                },
              });
            }
          }
          return obj;
        }
        return EventHandler;
      });
    },
  });

  // node_modules/bootstrap/js/dist/dom/manipulator.js
  var require_manipulator = __commonJS({
    "node_modules/bootstrap/js/dist/dom/manipulator.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? (module.exports = factory())
          : typeof define === "function" && define.amd
          ? define(factory)
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            (global.Manipulator = factory()));
      })(exports, function () {
        "use strict";
        function normalizeData(value) {
          if (value === "true") {
            return true;
          }
          if (value === "false") {
            return false;
          }
          if (value === Number(value).toString()) {
            return Number(value);
          }
          if (value === "" || value === "null") {
            return null;
          }
          if (typeof value !== "string") {
            return value;
          }
          try {
            return JSON.parse(decodeURIComponent(value));
          } catch (_unused) {
            return value;
          }
        }
        function normalizeDataKey(key) {
          return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
        }
        const Manipulator = {
          setDataAttribute(element, key, value) {
            element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
          },
          removeDataAttribute(element, key) {
            element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
          },
          getDataAttributes(element) {
            if (!element) {
              return {};
            }
            const attributes = {};
            const bsKeys = Object.keys(element.dataset).filter(
              (key) => key.startsWith("bs") && !key.startsWith("bsConfig")
            );
            for (const key of bsKeys) {
              let pureKey = key.replace(/^bs/, "");
              pureKey =
                pureKey.charAt(0).toLowerCase() +
                pureKey.slice(1, pureKey.length);
              attributes[pureKey] = normalizeData(element.dataset[key]);
            }
            return attributes;
          },
          getDataAttribute(element, key) {
            return normalizeData(
              element.getAttribute(`data-bs-${normalizeDataKey(key)}`)
            );
          },
        };
        return Manipulator;
      });
    },
  });

  // node_modules/bootstrap/js/dist/util/config.js
  var require_config = __commonJS({
    "node_modules/bootstrap/js/dist/util/config.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? (module.exports = factory(require_manipulator(), require_util()))
          : typeof define === "function" && define.amd
          ? define(["../dom/manipulator", "./index"], factory)
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            (global.Config = factory(global.Manipulator, global.Index)));
      })(exports, function (Manipulator, index_js) {
        "use strict";
        class Config {
          static get Default() {
            return {};
          }
          static get DefaultType() {
            return {};
          }
          static get NAME() {
            throw new Error(
              'You have to implement the static method "NAME", for each component!'
            );
          }
          _getConfig(config) {
            config = this._mergeConfigObj(config);
            config = this._configAfterMerge(config);
            this._typeCheckConfig(config);
            return config;
          }
          _configAfterMerge(config) {
            return config;
          }
          _mergeConfigObj(config, element) {
            const jsonConfig = index_js.isElement(element)
              ? Manipulator.getDataAttribute(element, "config")
              : {};
            return {
              ...this.constructor.Default,
              ...(typeof jsonConfig === "object" ? jsonConfig : {}),
              ...(index_js.isElement(element)
                ? Manipulator.getDataAttributes(element)
                : {}),
              ...(typeof config === "object" ? config : {}),
            };
          }
          _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
            for (const [property, expectedTypes] of Object.entries(
              configTypes
            )) {
              const value = config[property];
              const valueType = index_js.isElement(value)
                ? "element"
                : index_js.toType(value);
              if (!new RegExp(expectedTypes).test(valueType)) {
                throw new TypeError(
                  `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
                );
              }
            }
          }
        }
        return Config;
      });
    },
  });

  // node_modules/bootstrap/js/dist/base-component.js
  var require_base_component = __commonJS({
    "node_modules/bootstrap/js/dist/base-component.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? (module.exports = factory(
              require_data(),
              require_event_handler(),
              require_config(),
              require_util()
            ))
          : typeof define === "function" && define.amd
          ? define(
              [
                "./dom/data",
                "./dom/event-handler",
                "./util/config",
                "./util/index",
              ],
              factory
            )
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            (global.BaseComponent = factory(
              global.Data,
              global.EventHandler,
              global.Config,
              global.Index
            )));
      })(exports, function (Data, EventHandler, Config, index_js) {
        "use strict";
        const VERSION = "5.3.3";
        class BaseComponent extends Config {
          constructor(element, config) {
            super();
            element = index_js.getElement(element);
            if (!element) {
              return;
            }
            this._element = element;
            this._config = this._getConfig(config);
            Data.set(this._element, this.constructor.DATA_KEY, this);
          }
          dispose() {
            Data.remove(this._element, this.constructor.DATA_KEY);
            EventHandler.off(this._element, this.constructor.EVENT_KEY);
            for (const propertyName of Object.getOwnPropertyNames(this)) {
              this[propertyName] = null;
            }
          }
          _queueCallback(callback, element, isAnimated = true) {
            index_js.executeAfterTransition(callback, element, isAnimated);
          }
          _getConfig(config) {
            config = this._mergeConfigObj(config, this._element);
            config = this._configAfterMerge(config);
            this._typeCheckConfig(config);
            return config;
          }
          static getInstance(element) {
            return Data.get(index_js.getElement(element), this.DATA_KEY);
          }
          static getOrCreateInstance(element, config = {}) {
            return (
              this.getInstance(element) ||
              new this(element, typeof config === "object" ? config : null)
            );
          }
          static get VERSION() {
            return VERSION;
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
          static eventName(name) {
            return `${name}${this.EVENT_KEY}`;
          }
        }
        return BaseComponent;
      });
    },
  });

  // node_modules/bootstrap/js/dist/dom/selector-engine.js
  var require_selector_engine = __commonJS({
    "node_modules/bootstrap/js/dist/dom/selector-engine.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? (module.exports = factory(require_util()))
          : typeof define === "function" && define.amd
          ? define(["../util/index"], factory)
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            (global.SelectorEngine = factory(global.Index)));
      })(exports, function (index_js) {
        "use strict";
        const getSelector = (element) => {
          let selector = element.getAttribute("data-bs-target");
          if (!selector || selector === "#") {
            let hrefAttribute = element.getAttribute("href");
            if (
              !hrefAttribute ||
              (!hrefAttribute.includes("#") && !hrefAttribute.startsWith("."))
            ) {
              return null;
            }
            if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
              hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
            }
            selector =
              hrefAttribute && hrefAttribute !== "#"
                ? hrefAttribute.trim()
                : null;
          }
          return selector
            ? selector
                .split(",")
                .map((sel) => index_js.parseSelector(sel))
                .join(",")
            : null;
        };
        const SelectorEngine = {
          find(selector, element = document.documentElement) {
            return [].concat(
              ...Element.prototype.querySelectorAll.call(element, selector)
            );
          },
          findOne(selector, element = document.documentElement) {
            return Element.prototype.querySelector.call(element, selector);
          },
          children(element, selector) {
            return []
              .concat(...element.children)
              .filter((child) => child.matches(selector));
          },
          parents(element, selector) {
            const parents = [];
            let ancestor = element.parentNode.closest(selector);
            while (ancestor) {
              parents.push(ancestor);
              ancestor = ancestor.parentNode.closest(selector);
            }
            return parents;
          },
          prev(element, selector) {
            let previous = element.previousElementSibling;
            while (previous) {
              if (previous.matches(selector)) {
                return [previous];
              }
              previous = previous.previousElementSibling;
            }
            return [];
          },
          next(element, selector) {
            let next = element.nextElementSibling;
            while (next) {
              if (next.matches(selector)) {
                return [next];
              }
              next = next.nextElementSibling;
            }
            return [];
          },
          focusableChildren(element) {
            const focusables = [
              "a",
              "button",
              "input",
              "textarea",
              "select",
              "details",
              "[tabindex]",
              '[contenteditable="true"]',
            ]
              .map((selector) => `${selector}:not([tabindex^="-"])`)
              .join(",");
            return this.find(focusables, element).filter(
              (el) => !index_js.isDisabled(el) && index_js.isVisible(el)
            );
          },
          getSelectorFromElement(element) {
            const selector = getSelector(element);
            if (selector) {
              return SelectorEngine.findOne(selector) ? selector : null;
            }
            return null;
          },
          getElementFromSelector(element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.findOne(selector) : null;
          },
          getMultipleElementsFromSelector(element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.find(selector) : [];
          },
        };
        return SelectorEngine;
      });
    },
  });

  // node_modules/bootstrap/js/dist/util/backdrop.js
  var require_backdrop = __commonJS({
    "node_modules/bootstrap/js/dist/util/backdrop.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? (module.exports = factory(
              require_event_handler(),
              require_config(),
              require_util()
            ))
          : typeof define === "function" && define.amd
          ? define(["../dom/event-handler", "./config", "./index"], factory)
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            (global.Backdrop = factory(
              global.EventHandler,
              global.Config,
              global.Index
            )));
      })(exports, function (EventHandler, Config, index_js) {
        "use strict";
        const NAME = "backdrop";
        const CLASS_NAME_FADE = "fade";
        const CLASS_NAME_SHOW = "show";
        const EVENT_MOUSEDOWN = `mousedown.bs.${NAME}`;
        const Default = {
          className: "modal-backdrop",
          clickCallback: null,
          isAnimated: false,
          isVisible: true,
          rootElement: "body",
        };
        const DefaultType = {
          className: "string",
          clickCallback: "(function|null)",
          isAnimated: "boolean",
          isVisible: "boolean",
          rootElement: "(element|string)",
        };
        class Backdrop extends Config {
          constructor(config) {
            super();
            this._config = this._getConfig(config);
            this._isAppended = false;
            this._element = null;
          }
          static get Default() {
            return Default;
          }
          static get DefaultType() {
            return DefaultType;
          }
          static get NAME() {
            return NAME;
          }
          show(callback) {
            if (!this._config.isVisible) {
              index_js.execute(callback);
              return;
            }
            this._append();
            const element = this._getElement();
            if (this._config.isAnimated) {
              index_js.reflow(element);
            }
            element.classList.add(CLASS_NAME_SHOW);
            this._emulateAnimation(() => {
              index_js.execute(callback);
            });
          }
          hide(callback) {
            if (!this._config.isVisible) {
              index_js.execute(callback);
              return;
            }
            this._getElement().classList.remove(CLASS_NAME_SHOW);
            this._emulateAnimation(() => {
              this.dispose();
              index_js.execute(callback);
            });
          }
          dispose() {
            if (!this._isAppended) {
              return;
            }
            EventHandler.off(this._element, EVENT_MOUSEDOWN);
            this._element.remove();
            this._isAppended = false;
          }
          _getElement() {
            if (!this._element) {
              const backdrop = document.createElement("div");
              backdrop.className = this._config.className;
              if (this._config.isAnimated) {
                backdrop.classList.add(CLASS_NAME_FADE);
              }
              this._element = backdrop;
            }
            return this._element;
          }
          _configAfterMerge(config) {
            config.rootElement = index_js.getElement(config.rootElement);
            return config;
          }
          _append() {
            if (this._isAppended) {
              return;
            }
            const element = this._getElement();
            this._config.rootElement.append(element);
            EventHandler.on(element, EVENT_MOUSEDOWN, () => {
              index_js.execute(this._config.clickCallback);
            });
            this._isAppended = true;
          }
          _emulateAnimation(callback) {
            index_js.executeAfterTransition(
              callback,
              this._getElement(),
              this._config.isAnimated
            );
          }
        }
        return Backdrop;
      });
    },
  });

  // node_modules/bootstrap/js/dist/util/component-functions.js
  var require_component_functions = __commonJS({
    "node_modules/bootstrap/js/dist/util/component-functions.js"(
      exports,
      module
    ) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? factory(
              exports,
              require_event_handler(),
              require_selector_engine(),
              require_util()
            )
          : typeof define === "function" && define.amd
          ? define(
              [
                "exports",
                "../dom/event-handler",
                "../dom/selector-engine",
                "./index",
              ],
              factory
            )
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            factory(
              (global.ComponentFunctions = {}),
              global.EventHandler,
              global.SelectorEngine,
              global.Index
            ));
      })(exports, function (exports2, EventHandler, SelectorEngine, index_js) {
        "use strict";
        const enableDismissTrigger = (component, method = "hide") => {
          const clickEvent = `click.dismiss${component.EVENT_KEY}`;
          const name = component.NAME;
          EventHandler.on(
            document,
            clickEvent,
            `[data-bs-dismiss="${name}"]`,
            function (event) {
              if (["A", "AREA"].includes(this.tagName)) {
                event.preventDefault();
              }
              if (index_js.isDisabled(this)) {
                return;
              }
              const target =
                SelectorEngine.getElementFromSelector(this) ||
                this.closest(`.${name}`);
              const instance = component.getOrCreateInstance(target);
              instance[method]();
            }
          );
        };
        exports2.enableDismissTrigger = enableDismissTrigger;
        Object.defineProperty(exports2, Symbol.toStringTag, {
          value: "Module",
        });
      });
    },
  });

  // node_modules/bootstrap/js/dist/util/focustrap.js
  var require_focustrap = __commonJS({
    "node_modules/bootstrap/js/dist/util/focustrap.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? (module.exports = factory(
              require_event_handler(),
              require_selector_engine(),
              require_config()
            ))
          : typeof define === "function" && define.amd
          ? define(
              ["../dom/event-handler", "../dom/selector-engine", "./config"],
              factory
            )
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            (global.Focustrap = factory(
              global.EventHandler,
              global.SelectorEngine,
              global.Config
            )));
      })(exports, function (EventHandler, SelectorEngine, Config) {
        "use strict";
        const NAME = "focustrap";
        const DATA_KEY = "bs.focustrap";
        const EVENT_KEY = `.${DATA_KEY}`;
        const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
        const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`;
        const TAB_KEY2 = "Tab";
        const TAB_NAV_FORWARD = "forward";
        const TAB_NAV_BACKWARD = "backward";
        const Default = {
          autofocus: true,
          trapElement: null,
        };
        const DefaultType = {
          autofocus: "boolean",
          trapElement: "element",
        };
        class FocusTrap extends Config {
          constructor(config) {
            super();
            this._config = this._getConfig(config);
            this._isActive = false;
            this._lastTabNavDirection = null;
          }
          static get Default() {
            return Default;
          }
          static get DefaultType() {
            return DefaultType;
          }
          static get NAME() {
            return NAME;
          }
          activate() {
            if (this._isActive) {
              return;
            }
            if (this._config.autofocus) {
              this._config.trapElement.focus();
            }
            EventHandler.off(document, EVENT_KEY);
            EventHandler.on(document, EVENT_FOCUSIN, (event) =>
              this._handleFocusin(event)
            );
            EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) =>
              this._handleKeydown(event)
            );
            this._isActive = true;
          }
          deactivate() {
            if (!this._isActive) {
              return;
            }
            this._isActive = false;
            EventHandler.off(document, EVENT_KEY);
          }
          _handleFocusin(event) {
            const { trapElement } = this._config;
            if (
              event.target === document ||
              event.target === trapElement ||
              trapElement.contains(event.target)
            ) {
              return;
            }
            const elements = SelectorEngine.focusableChildren(trapElement);
            if (elements.length === 0) {
              trapElement.focus();
            } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
              elements[elements.length - 1].focus();
            } else {
              elements[0].focus();
            }
          }
          _handleKeydown(event) {
            if (event.key !== TAB_KEY2) {
              return;
            }
            this._lastTabNavDirection = event.shiftKey
              ? TAB_NAV_BACKWARD
              : TAB_NAV_FORWARD;
          }
        }
        return FocusTrap;
      });
    },
  });

  // node_modules/bootstrap/js/dist/util/scrollbar.js
  var require_scrollbar = __commonJS({
    "node_modules/bootstrap/js/dist/util/scrollbar.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? (module.exports = factory(
              require_manipulator(),
              require_selector_engine(),
              require_util()
            ))
          : typeof define === "function" && define.amd
          ? define(
              ["../dom/manipulator", "../dom/selector-engine", "./index"],
              factory
            )
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            (global.Scrollbar = factory(
              global.Manipulator,
              global.SelectorEngine,
              global.Index
            )));
      })(exports, function (Manipulator, SelectorEngine, index_js) {
        "use strict";
        const SELECTOR_FIXED_CONTENT =
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
        const SELECTOR_STICKY_CONTENT = ".sticky-top";
        const PROPERTY_PADDING = "padding-right";
        const PROPERTY_MARGIN = "margin-right";
        class ScrollBarHelper {
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            const documentWidth = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - documentWidth);
          }
          hide() {
            const width = this.getWidth();
            this._disableOverFlow();
            this._setElementAttributes(
              this._element,
              PROPERTY_PADDING,
              (calculatedValue) => calculatedValue + width
            );
            this._setElementAttributes(
              SELECTOR_FIXED_CONTENT,
              PROPERTY_PADDING,
              (calculatedValue) => calculatedValue + width
            );
            this._setElementAttributes(
              SELECTOR_STICKY_CONTENT,
              PROPERTY_MARGIN,
              (calculatedValue) => calculatedValue - width
            );
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow");
            this._resetElementAttributes(this._element, PROPERTY_PADDING);
            this._resetElementAttributes(
              SELECTOR_FIXED_CONTENT,
              PROPERTY_PADDING
            );
            this._resetElementAttributes(
              SELECTOR_STICKY_CONTENT,
              PROPERTY_MARGIN
            );
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow");
            this._element.style.overflow = "hidden";
          }
          _setElementAttributes(selector, styleProperty, callback) {
            const scrollbarWidth = this.getWidth();
            const manipulationCallBack = (element) => {
              if (
                element !== this._element &&
                window.innerWidth > element.clientWidth + scrollbarWidth
              ) {
                return;
              }
              this._saveInitialAttribute(element, styleProperty);
              const calculatedValue = window
                .getComputedStyle(element)
                .getPropertyValue(styleProperty);
              element.style.setProperty(
                styleProperty,
                `${callback(Number.parseFloat(calculatedValue))}px`
              );
            };
            this._applyManipulationCallback(selector, manipulationCallBack);
          }
          _saveInitialAttribute(element, styleProperty) {
            const actualValue = element.style.getPropertyValue(styleProperty);
            if (actualValue) {
              Manipulator.setDataAttribute(element, styleProperty, actualValue);
            }
          }
          _resetElementAttributes(selector, styleProperty) {
            const manipulationCallBack = (element) => {
              const value = Manipulator.getDataAttribute(
                element,
                styleProperty
              );
              if (value === null) {
                element.style.removeProperty(styleProperty);
                return;
              }
              Manipulator.removeDataAttribute(element, styleProperty);
              element.style.setProperty(styleProperty, value);
            };
            this._applyManipulationCallback(selector, manipulationCallBack);
          }
          _applyManipulationCallback(selector, callBack) {
            if (index_js.isElement(selector)) {
              callBack(selector);
              return;
            }
            for (const sel of SelectorEngine.find(selector, this._element)) {
              callBack(sel);
            }
          }
        }
        return ScrollBarHelper;
      });
    },
  });

  // node_modules/bootstrap/js/dist/modal.js
  var require_modal = __commonJS({
    "node_modules/bootstrap/js/dist/modal.js"(exports, module) {
      (function (global, factory) {
        typeof exports === "object" && typeof module !== "undefined"
          ? (module.exports = factory(
              require_base_component(),
              require_event_handler(),
              require_selector_engine(),
              require_backdrop(),
              require_component_functions(),
              require_focustrap(),
              require_util(),
              require_scrollbar()
            ))
          : typeof define === "function" && define.amd
          ? define(
              [
                "./base-component",
                "./dom/event-handler",
                "./dom/selector-engine",
                "./util/backdrop",
                "./util/component-functions",
                "./util/focustrap",
                "./util/index",
                "./util/scrollbar",
              ],
              factory
            )
          : ((global =
              typeof globalThis !== "undefined" ? globalThis : global || self),
            (global.Modal = factory(
              global.BaseComponent,
              global.EventHandler,
              global.SelectorEngine,
              global.Backdrop,
              global.ComponentFunctions,
              global.Focustrap,
              global.Index,
              global.Scrollbar
            )));
      })(
        exports,
        function (
          BaseComponent,
          EventHandler,
          SelectorEngine,
          Backdrop,
          componentFunctions_js,
          FocusTrap,
          index_js,
          ScrollBarHelper
        ) {
          "use strict";
          const NAME = "modal";
          const DATA_KEY = "bs.modal";
          const EVENT_KEY = `.${DATA_KEY}`;
          const DATA_API_KEY = ".data-api";
          const ESCAPE_KEY = "Escape";
          const EVENT_HIDE = `hide${EVENT_KEY}`;
          const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
          const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
          const EVENT_SHOW = `show${EVENT_KEY}`;
          const EVENT_SHOWN = `shown${EVENT_KEY}`;
          const EVENT_RESIZE = `resize${EVENT_KEY}`;
          const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
          const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`;
          const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
          const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
          const CLASS_NAME_OPEN = "modal-open";
          const CLASS_NAME_FADE = "fade";
          const CLASS_NAME_SHOW = "show";
          const CLASS_NAME_STATIC = "modal-static";
          const OPEN_SELECTOR = ".modal.show";
          const SELECTOR_DIALOG = ".modal-dialog";
          const SELECTOR_MODAL_BODY = ".modal-body";
          const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
          const Default = {
            backdrop: true,
            focus: true,
            keyboard: true,
          };
          const DefaultType = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean",
          };
          class Modal extends BaseComponent {
            constructor(element, config) {
              super(element, config);
              this._dialog = SelectorEngine.findOne(
                SELECTOR_DIALOG,
                this._element
              );
              this._backdrop = this._initializeBackDrop();
              this._focustrap = this._initializeFocusTrap();
              this._isShown = false;
              this._isTransitioning = false;
              this._scrollBar = new ScrollBarHelper();
              this._addEventListeners();
            }
            static get Default() {
              return Default;
            }
            static get DefaultType() {
              return DefaultType;
            }
            static get NAME() {
              return NAME;
            }
            toggle(relatedTarget) {
              return this._isShown ? this.hide() : this.show(relatedTarget);
            }
            show(relatedTarget) {
              if (this._isShown || this._isTransitioning) {
                return;
              }
              const showEvent = EventHandler.trigger(
                this._element,
                EVENT_SHOW,
                {
                  relatedTarget,
                }
              );
              if (showEvent.defaultPrevented) {
                return;
              }
              this._isShown = true;
              this._isTransitioning = true;
              this._scrollBar.hide();
              document.body.classList.add(CLASS_NAME_OPEN);
              this._adjustDialog();
              this._backdrop.show(() => this._showElement(relatedTarget));
            }
            hide() {
              if (!this._isShown || this._isTransitioning) {
                return;
              }
              const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
              if (hideEvent.defaultPrevented) {
                return;
              }
              this._isShown = false;
              this._isTransitioning = true;
              this._focustrap.deactivate();
              this._element.classList.remove(CLASS_NAME_SHOW);
              this._queueCallback(
                () => this._hideModal(),
                this._element,
                this._isAnimated()
              );
            }
            dispose() {
              EventHandler.off(window, EVENT_KEY);
              EventHandler.off(this._dialog, EVENT_KEY);
              this._backdrop.dispose();
              this._focustrap.deactivate();
              super.dispose();
            }
            handleUpdate() {
              this._adjustDialog();
            }
            _initializeBackDrop() {
              return new Backdrop({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
              });
            }
            _initializeFocusTrap() {
              return new FocusTrap({
                trapElement: this._element,
              });
            }
            _showElement(relatedTarget) {
              if (!document.body.contains(this._element)) {
                document.body.append(this._element);
              }
              this._element.style.display = "block";
              this._element.removeAttribute("aria-hidden");
              this._element.setAttribute("aria-modal", true);
              this._element.setAttribute("role", "dialog");
              this._element.scrollTop = 0;
              const modalBody = SelectorEngine.findOne(
                SELECTOR_MODAL_BODY,
                this._dialog
              );
              if (modalBody) {
                modalBody.scrollTop = 0;
              }
              index_js.reflow(this._element);
              this._element.classList.add(CLASS_NAME_SHOW);
              const transitionComplete = () => {
                if (this._config.focus) {
                  this._focustrap.activate();
                }
                this._isTransitioning = false;
                EventHandler.trigger(this._element, EVENT_SHOWN, {
                  relatedTarget,
                });
              };
              this._queueCallback(
                transitionComplete,
                this._dialog,
                this._isAnimated()
              );
            }
            _addEventListeners() {
              EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
                if (event.key !== ESCAPE_KEY) {
                  return;
                }
                if (this._config.keyboard) {
                  this.hide();
                  return;
                }
                this._triggerBackdropTransition();
              });
              EventHandler.on(window, EVENT_RESIZE, () => {
                if (this._isShown && !this._isTransitioning) {
                  this._adjustDialog();
                }
              });
              EventHandler.on(
                this._element,
                EVENT_MOUSEDOWN_DISMISS,
                (event) => {
                  EventHandler.one(
                    this._element,
                    EVENT_CLICK_DISMISS,
                    (event2) => {
                      if (
                        this._element !== event.target ||
                        this._element !== event2.target
                      ) {
                        return;
                      }
                      if (this._config.backdrop === "static") {
                        this._triggerBackdropTransition();
                        return;
                      }
                      if (this._config.backdrop) {
                        this.hide();
                      }
                    }
                  );
                }
              );
            }
            _hideModal() {
              this._element.style.display = "none";
              this._element.setAttribute("aria-hidden", true);
              this._element.removeAttribute("aria-modal");
              this._element.removeAttribute("role");
              this._isTransitioning = false;
              this._backdrop.hide(() => {
                document.body.classList.remove(CLASS_NAME_OPEN);
                this._resetAdjustments();
                this._scrollBar.reset();
                EventHandler.trigger(this._element, EVENT_HIDDEN);
              });
            }
            _isAnimated() {
              return this._element.classList.contains(CLASS_NAME_FADE);
            }
            _triggerBackdropTransition() {
              const hideEvent = EventHandler.trigger(
                this._element,
                EVENT_HIDE_PREVENTED
              );
              if (hideEvent.defaultPrevented) {
                return;
              }
              const isModalOverflowing =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              const initialOverflowY = this._element.style.overflowY;
              if (
                initialOverflowY === "hidden" ||
                this._element.classList.contains(CLASS_NAME_STATIC)
              ) {
                return;
              }
              if (!isModalOverflowing) {
                this._element.style.overflowY = "hidden";
              }
              this._element.classList.add(CLASS_NAME_STATIC);
              this._queueCallback(() => {
                this._element.classList.remove(CLASS_NAME_STATIC);
                this._queueCallback(() => {
                  this._element.style.overflowY = initialOverflowY;
                }, this._dialog);
              }, this._dialog);
              this._element.focus();
            }
            _adjustDialog() {
              const isModalOverflowing =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              const scrollbarWidth = this._scrollBar.getWidth();
              const isBodyOverflowing = scrollbarWidth > 0;
              if (isBodyOverflowing && !isModalOverflowing) {
                const property = index_js.isRTL()
                  ? "paddingLeft"
                  : "paddingRight";
                this._element.style[property] = `${scrollbarWidth}px`;
              }
              if (!isBodyOverflowing && isModalOverflowing) {
                const property = index_js.isRTL()
                  ? "paddingRight"
                  : "paddingLeft";
                this._element.style[property] = `${scrollbarWidth}px`;
              }
            }
            _resetAdjustments() {
              this._element.style.paddingLeft = "";
              this._element.style.paddingRight = "";
            }
            static jQueryInterface(config, relatedTarget) {
              return this.each(function () {
                const data = Modal.getOrCreateInstance(this, config);
                if (typeof config !== "string") {
                  return;
                }
                if (typeof data[config] === "undefined") {
                  throw new TypeError(`No method named "${config}"`);
                }
                data[config](relatedTarget);
              });
            }
          }
          EventHandler.on(
            document,
            EVENT_CLICK_DATA_API,
            SELECTOR_DATA_TOGGLE,
            function (event) {
              const target = SelectorEngine.getElementFromSelector(this);
              if (["A", "AREA"].includes(this.tagName)) {
                event.preventDefault();
              }
              EventHandler.one(target, EVENT_SHOW, (showEvent) => {
                if (showEvent.defaultPrevented) {
                  return;
                }
                EventHandler.one(target, EVENT_HIDDEN, () => {
                  if (index_js.isVisible(this)) {
                    this.focus();
                  }
                });
              });
              const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
              if (alreadyOpen) {
                Modal.getInstance(alreadyOpen).hide();
              }
              const data = Modal.getOrCreateInstance(target);
              data.toggle(this);
            }
          );
          componentFunctions_js.enableDismissTrigger(Modal);
          index_js.defineJQueryPlugin(Modal);
          return Modal;
        }
      );
    },
  });

  // src/globals/js/non-critical-index.js
  var import_modal = __toESM(require_modal());

  // src/globals/js/tooltip.js
  +(function ($2) {
    "use strict";
    var Tooltip = function (element, options) {
      this.type = null;
      this.options = null;
      this.enabled = null;
      this.timeout = null;
      this.hoverState = null;
      this.$element = null;
      this.inState = null;
      this.init("tooltip", element, options);
    };
    Tooltip.VERSION = "3.3.7";
    Tooltip.TRANSITION_DURATION = 150;
    Tooltip.DEFAULTS = {
      animation: true,
      placement: "top",
      selector: false,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: false,
      container: false,
      viewport: {
        selector: "body",
        padding: 0,
      },
    };
    Tooltip.prototype.init = function (type, element, options) {
      this.enabled = true;
      this.type = type;
      this.$element = $2(element);
      this.options = this.getOptions(options);
      this.$viewport =
        this.options.viewport &&
        $2(
          $2.isFunction(this.options.viewport)
            ? this.options.viewport.call(this, this.$element)
            : this.options.viewport.selector || this.options.viewport
        );
      this.inState = { click: false, hover: false, focus: false };
      if (
        this.$element[0] instanceof document.constructor &&
        !this.options.selector
      ) {
        throw new Error(
          "`selector` option must be specified when initializing " +
            this.type +
            " on the window.document object!"
        );
      }
      var triggers = this.options.trigger.split(" ");
      for (var i = triggers.length; i--; ) {
        var trigger = triggers[i];
        if (trigger == "click") {
          this.$element.on(
            "click." + this.type,
            this.options.selector,
            $2.proxy(this.toggle, this)
          );
        } else if (trigger != "manual") {
          var eventIn = trigger == "hover" ? "mouseenter" : "focusin";
          var eventOut = trigger == "hover" ? "mouseleave" : "focusout";
          this.$element.on(
            eventIn + "." + this.type,
            this.options.selector,
            $2.proxy(this.enter, this)
          );
          this.$element.on(
            eventOut + "." + this.type,
            this.options.selector,
            $2.proxy(this.leave, this)
          );
        }
      }
      this.options.selector
        ? (this._options = $2.extend({}, this.options, {
            trigger: "manual",
            selector: "",
          }))
        : this.fixTitle();
    };
    Tooltip.prototype.getDefaults = function () {
      return Tooltip.DEFAULTS;
    };
    Tooltip.prototype.getOptions = function (options) {
      options = $2.extend(
        {},
        this.getDefaults(),
        this.$element.data(),
        options
      );
      if (options.delay && typeof options.delay == "number") {
        options.delay = {
          show: options.delay,
          hide: options.delay,
        };
      }
      return options;
    };
    Tooltip.prototype.getDelegateOptions = function () {
      var options = {};
      var defaults = this.getDefaults();
      this._options &&
        $2.each(this._options, function (key, value) {
          if (defaults[key] != value) options[key] = value;
        });
      return options;
    };
    Tooltip.prototype.enter = function (obj) {
      var self2 =
        obj instanceof this.constructor
          ? obj
          : $2(obj.currentTarget).data("bs." + this.type);
      if (!self2) {
        self2 = new this.constructor(
          obj.currentTarget,
          this.getDelegateOptions()
        );
        $2(obj.currentTarget).data("bs." + this.type, self2);
      }
      if (obj instanceof $2.Event) {
        self2.inState[obj.type == "focusin" ? "focus" : "hover"] = true;
      }
      if (self2.tip().hasClass("in") || self2.hoverState == "in") {
        self2.hoverState = "in";
        return;
      }
      clearTimeout(self2.timeout);
      self2.hoverState = "in";
      if (!self2.options.delay || !self2.options.delay.show)
        return self2.show();
      self2.timeout = setTimeout(function () {
        if (self2.hoverState == "in") self2.show();
      }, self2.options.delay.show);
    };
    Tooltip.prototype.isInStateTrue = function () {
      for (var key in this.inState) {
        if (this.inState[key]) return true;
      }
      return false;
    };
    Tooltip.prototype.leave = function (obj) {
      var self2 =
        obj instanceof this.constructor
          ? obj
          : $2(obj.currentTarget).data("bs." + this.type);
      if (!self2) {
        self2 = new this.constructor(
          obj.currentTarget,
          this.getDelegateOptions()
        );
        $2(obj.currentTarget).data("bs." + this.type, self2);
      }
      if (obj instanceof $2.Event) {
        self2.inState[obj.type == "focusout" ? "focus" : "hover"] = false;
      }
      if (self2.isInStateTrue()) return;
      clearTimeout(self2.timeout);
      self2.hoverState = "out";
      if (!self2.options.delay || !self2.options.delay.hide)
        return self2.hide();
      self2.timeout = setTimeout(function () {
        if (self2.hoverState == "out") self2.hide();
      }, self2.options.delay.hide);
    };
    Tooltip.prototype.show = function () {
      var e = $2.Event("show.bs." + this.type);
      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);
        var inDom = $2.contains(
          this.$element[0].ownerDocument.documentElement,
          this.$element[0]
        );
        if (e.isDefaultPrevented() || !inDom) return;
        var that = this;
        var $tip = this.tip();
        var tipId = this.getUID(this.type);
        this.setContent();
        $tip.attr("id", tipId);
        this.$element.attr("aria-describedby", tipId);
        if (this.options.animation) $tip.addClass("fade");
        var placement =
          typeof this.options.placement == "function"
            ? this.options.placement.call(this, $tip[0], this.$element[0])
            : this.options.placement;
        var autoToken = /\s?auto?\s?/i;
        var autoPlace = autoToken.test(placement);
        if (autoPlace) placement = placement.replace(autoToken, "") || "top";
        $tip
          .detach()
          .css({ top: 0, left: 0, display: "block" })
          .addClass(placement)
          .data("bs." + this.type, this);
        this.options.container
          ? $tip.appendTo(this.options.container)
          : $tip.insertAfter(this.$element);
        this.$element.trigger("inserted.bs." + this.type);
        var pos = this.getPosition();
        var actualWidth = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;
        if (autoPlace) {
          var orgPlacement = placement;
          var viewportDim = this.getPosition(this.$viewport);
          placement =
            placement == "bottom" &&
            pos.bottom + actualHeight > viewportDim.bottom
              ? "top"
              : placement == "top" && pos.top - actualHeight < viewportDim.top
              ? "bottom"
              : placement == "right" &&
                pos.right + actualWidth > viewportDim.width
              ? "left"
              : placement == "left" && pos.left - actualWidth < viewportDim.left
              ? "right"
              : placement;
          $tip.removeClass(orgPlacement).addClass(placement);
        }
        var calculatedOffset = this.getCalculatedOffset(
          placement,
          pos,
          actualWidth,
          actualHeight
        );
        this.applyPlacement(calculatedOffset, placement);
        var complete = function () {
          var prevHoverState = that.hoverState;
          that.$element.trigger("shown.bs." + that.type);
          that.hoverState = null;
          if (prevHoverState == "out") that.leave(that);
        };
        $2.support.transition && this.$tip.hasClass("fade")
          ? $tip
              .one("bsTransitionEnd", complete)
              .emulateTransitionEnd(Tooltip.TRANSITION_DURATION)
          : complete();
      }
    };
    Tooltip.prototype.applyPlacement = function (offset, placement) {
      var $tip = this.tip();
      var width = $tip[0].offsetWidth;
      var height = $tip[0].offsetHeight;
      var marginTop = parseInt($tip.css("margin-top"), 10);
      var marginLeft = parseInt($tip.css("margin-left"), 10);
      if (isNaN(marginTop)) marginTop = 0;
      if (isNaN(marginLeft)) marginLeft = 0;
      offset.top += marginTop;
      offset.left += marginLeft;
      $2.offset.setOffset(
        $tip[0],
        $2.extend(
          {
            using: function (props) {
              $tip.css({
                top: Math.round(props.top),
                left: Math.round(props.left),
              });
            },
          },
          offset
        ),
        0
      );
      $tip.addClass("in");
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;
      if (placement == "top" && actualHeight != height) {
        offset.top = offset.top + height - actualHeight;
      }
      var delta = this.getViewportAdjustedDelta(
        placement,
        offset,
        actualWidth,
        actualHeight
      );
      if (delta.left) offset.left += delta.left;
      else offset.top += delta.top;
      var isVertical = /top|bottom/.test(placement);
      var arrowDelta = isVertical
        ? delta.left * 2 - width + actualWidth
        : delta.top * 2 - height + actualHeight;
      var arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";
      $tip.offset(offset);
      this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
    };
    Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
      this.arrow()
        .css(isVertical ? "left" : "top", 50 * (1 - delta / dimension) + "%")
        .css(isVertical ? "top" : "left", "");
    };
    Tooltip.prototype.setContent = function () {
      var $tip = this.tip();
      var title = this.getTitle();
      $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
      $tip.removeClass("fade in top bottom left right");
    };
    Tooltip.prototype.hide = function (callback) {
      var that = this;
      var $tip = $2(this.$tip);
      var e = $2.Event("hide.bs." + this.type);
      function complete() {
        if (that.hoverState != "in") $tip.detach();
        if (that.$element) {
          that.$element
            .removeAttr("aria-describedby")
            .trigger("hidden.bs." + that.type);
        }
        callback && callback();
      }
      this.$element.trigger(e);
      if (e.isDefaultPrevented()) return;
      $tip.removeClass("in");
      $2.support.transition && $tip.hasClass("fade")
        ? $tip
            .one("bsTransitionEnd", complete)
            .emulateTransitionEnd(Tooltip.TRANSITION_DURATION)
        : complete();
      this.hoverState = null;
      return this;
    };
    Tooltip.prototype.fixTitle = function () {
      var $e = this.$element;
      if (
        $e.attr("title") ||
        typeof $e.attr("data-original-title") != "string"
      ) {
        $e.attr("data-original-title", $e.attr("title") || "").attr(
          "title",
          ""
        );
      }
    };
    Tooltip.prototype.hasContent = function () {
      return this.getTitle();
    };
    Tooltip.prototype.getPosition = function ($element) {
      $element = $element || this.$element;
      var el = $element[0];
      var isBody = el.tagName == "BODY";
      var elRect = el.getBoundingClientRect();
      if (elRect.width == null) {
        elRect = $2.extend({}, elRect, {
          width: elRect.right - elRect.left,
          height: elRect.bottom - elRect.top,
        });
      }
      var isSvg = window.SVGElement && el instanceof window.SVGElement;
      var elOffset = isBody
        ? { top: 0, left: 0 }
        : isSvg
        ? null
        : $element.offset();
      var scroll = {
        scroll: isBody
          ? document.documentElement.scrollTop || document.body.scrollTop
          : $element.scrollTop(),
      };
      var outerDims = isBody
        ? { width: $2(window).width(), height: $2(window).height() }
        : null;
      return $2.extend({}, elRect, scroll, outerDims, elOffset);
    };
    Tooltip.prototype.getCalculatedOffset = function (
      placement,
      pos,
      actualWidth,
      actualHeight
    ) {
      return placement == "bottom"
        ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2,
          }
        : placement == "top"
        ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2,
          }
        : placement == "left"
        ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth,
          }
        : {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width,
          };
    };
    Tooltip.prototype.getViewportAdjustedDelta = function (
      placement,
      pos,
      actualWidth,
      actualHeight
    ) {
      var delta = { top: 0, left: 0 };
      if (!this.$viewport) return delta;
      var viewportPadding =
        (this.options.viewport && this.options.viewport.padding) || 0;
      var viewportDimensions = this.getPosition(this.$viewport);
      if (/right|left/.test(placement)) {
        var topEdgeOffset =
          pos.top - viewportPadding - viewportDimensions.scroll;
        var bottomEdgeOffset =
          pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
        if (topEdgeOffset < viewportDimensions.top) {
          delta.top = viewportDimensions.top - topEdgeOffset;
        } else if (
          bottomEdgeOffset >
          viewportDimensions.top + viewportDimensions.height
        ) {
          delta.top =
            viewportDimensions.top +
            viewportDimensions.height -
            bottomEdgeOffset;
        }
      } else {
        var leftEdgeOffset = pos.left - viewportPadding;
        var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
        if (leftEdgeOffset < viewportDimensions.left) {
          delta.left = viewportDimensions.left - leftEdgeOffset;
        } else if (rightEdgeOffset > viewportDimensions.right) {
          delta.left =
            viewportDimensions.left +
            viewportDimensions.width -
            rightEdgeOffset;
        }
      }
      return delta;
    };
    Tooltip.prototype.getTitle = function () {
      var title;
      var $e = this.$element;
      var o = this.options;
      title =
        $e.attr("data-original-title") ||
        (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
      return title;
    };
    Tooltip.prototype.getUID = function (prefix) {
      do prefix += ~~(Math.random() * 1e6);
      while (document.getElementById(prefix));
      return prefix;
    };
    Tooltip.prototype.tip = function () {
      if (!this.$tip) {
        this.$tip = $2(this.options.template);
        if (this.$tip.length != 1) {
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        }
      }
      return this.$tip;
    };
    Tooltip.prototype.arrow = function () {
      return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
    };
    Tooltip.prototype.enable = function () {
      this.enabled = true;
    };
    Tooltip.prototype.disable = function () {
      this.enabled = false;
    };
    Tooltip.prototype.toggleEnabled = function () {
      this.enabled = !this.enabled;
    };
    Tooltip.prototype.toggle = function (e) {
      var self2 = this;
      if (e) {
        self2 = $2(e.currentTarget).data("bs." + this.type);
        if (!self2) {
          self2 = new this.constructor(
            e.currentTarget,
            this.getDelegateOptions()
          );
          $2(e.currentTarget).data("bs." + this.type, self2);
        }
      }
      if (e) {
        self2.inState.click = !self2.inState.click;
        if (self2.isInStateTrue()) self2.enter(self2);
        else self2.leave(self2);
      } else {
        self2.tip().hasClass("in") ? self2.leave(self2) : self2.enter(self2);
      }
    };
    Tooltip.prototype.destroy = function () {
      var that = this;
      clearTimeout(this.timeout);
      this.hide(function () {
        that.$element.off("." + that.type).removeData("bs." + that.type);
        if (that.$tip) {
          that.$tip.detach();
        }
        that.$tip = null;
        that.$arrow = null;
        that.$viewport = null;
        that.$element = null;
      });
    };
    function Plugin(option) {
      return this.each(function () {
        var $this = $2(this);
        var data = $this.data("bs.tooltip");
        var options = typeof option == "object" && option;
        if (!data && /destroy|hide/.test(option)) return;
        if (!data)
          $this.data("bs.tooltip", (data = new Tooltip(this, options)));
        if (typeof option == "string") data[option]();
      });
    }
    var old = $2.fn.tooltip;
    $2.fn.tooltip = Plugin;
    $2.fn.tooltip.Constructor = Tooltip;
    $2.fn.tooltip.noConflict = function () {
      $2.fn.tooltip = old;
      return this;
    };
  })(jQuery);

  // src/utils/constants.js
  var FOCUSABLE_ELEMENTS = [
    'a[href]:not([tabindex^="-"])',
    'area[href]:not([tabindex^="-"])',
    'input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])',
    'input[type="radio"]:not([disabled]):not([tabindex^="-"]):checked',
    'select:not([disabled]):not([tabindex^="-"])',
    'textarea:not([disabled]):not([tabindex^="-"])',
    'button:not([disabled]):not([tabindex^="-"])',
    'iframe:not([tabindex^="-"])',
    'audio[controls]:not([tabindex^="-"])',
    'video[controls]:not([tabindex^="-"])',
    '[contenteditable]:not([tabindex^="-"])',
    '[tabindex]:not([tabindex^="-"])',
  ];
  var TAB_KEY = "Tab";
  var KEY_DOWN = "keydown";
  window.isMobile = window.matchMedia("(max-width: 767px)").matches;
  window.isTablet = window.matchMedia(
    "(min-width: 768px) and (max-width: 1023px)"
  ).matches;
  window.isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  // src/globals/js/trapFocus.js
  var trapFocus = () => {
    let prevFocus;
    const isVisible = (element) =>
      element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length;
    const getFocusableChildren = (rootElem) => {
      const elements = [
        ...rootElem.querySelectorAll(FOCUSABLE_ELEMENTS.join(",")),
      ];
      return elements.filter(isVisible);
    };
    const handleTrapEvent = (event, modal) => {
      const focusableElements = getFocusableChildren(modal);
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];
      if (event.key === TAB_KEY) {
        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          }
        } else if (document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstFocusableElement.focus();
        }
      }
    };
    $(".cmp-modal").on("shown.bs.modal", function () {
      const activeModal = this;
      const focusableElements = getFocusableChildren(activeModal);
      if (activeModal.classList.contains("has-autofocus")) {
        focusableElements[0].focus();
      }
      prevFocus = document.activeElement;
      document.addEventListener(KEY_DOWN, (e) =>
        handleTrapEvent(e, activeModal)
      );
    });
    $(".cmp-modal").on("hide.bs.modal", function () {
      const activeModal = this;
      document.removeEventListener(KEY_DOWN, (e) =>
        handleTrapEvent(e, activeModal)
      );
      prevFocus.focus();
    });
  };
  document.addEventListener("DOMContentLoaded", trapFocus);

  // src/components/footer/js/footer.js
  var groupColumns = () => {
    const list = document.querySelectorAll(
      ".cmp-footer-v2__secondary-footer-links ul"
    );
    list.forEach((eachList) => {
      const itemsPerColumn = eachList.getAttribute("data-items");
      const columns = Math.ceil(eachList.childElementCount / itemsPerColumn);
      eachList.classList.add("column-count--" + columns);
      eachList.style.opacity = 1;
    });
  };
  document.addEventListener("DOMContentLoaded", groupColumns);
})();
/*!
 * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
 * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
 * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
 * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
 * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
 * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
 * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
 * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
 * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
 * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
 * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
/*!
 * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
