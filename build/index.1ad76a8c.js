let e;
function t(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
function n(e) {
  return e && e.__esModule ? e.default : e;
}
var r,
  a,
  o,
  l,
  i,
  u,
  s,
  c,
  f,
  d,
  p,
  h,
  m,
  v,
  y,
  g,
  b,
  w,
  x,
  S,
  k,
  E =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  _ = {},
  C = {},
  P = E.parcelRequirefd18;
null == P &&
  (((P = function (e) {
    if (e in _) return _[e].exports;
    if (e in C) {
      var t = C[e];
      delete C[e];
      var n = { id: e, exports: {} };
      return (_[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var r = Error("Cannot find module '" + e + "'");
    throw ((r.code = "MODULE_NOT_FOUND"), r);
  }).register = function (e, t) {
    C[e] = t;
  }),
  (E.parcelRequirefd18 = P));
var T = P.register;
T("jiB90", function (e, n) {
  t(
    e.exports,
    "Fragment",
    function () {
      return r;
    },
    function (e) {
      return (r = e);
    }
  ),
    t(
      e.exports,
      "jsx",
      function () {
        return a;
      },
      function (e) {
        return (a = e);
      }
    ),
    t(
      e.exports,
      "jsxs",
      function () {
        return o;
      },
      function (e) {
        return (o = e);
      }
    );
  var r,
    a,
    o,
    l = P("i7uhG"),
    i = Symbol.for("react.element"),
    u = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    c = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(e, t, n) {
    var r,
      a = {},
      o = null,
      l = null;
    for (r in (void 0 !== n && (o = "" + n),
    void 0 !== t.key && (o = "" + t.key),
    void 0 !== t.ref && (l = t.ref),
    t))
      s.call(t, r) && !f.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps)
      for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
    return {
      $$typeof: i,
      type: e,
      key: o,
      ref: l,
      props: a,
      _owner: c.current,
    };
  }
  (r = u), (a = d), (o = d);
}),
  T("i7uhG", function (e, t) {
    e.exports = P("1geBQ");
  }),
  T("1geBQ", function (e, n) {
    t(
      e.exports,
      "Children",
      function () {
        return r;
      },
      function (e) {
        return (r = e);
      }
    ),
      t(
        e.exports,
        "Component",
        function () {
          return a;
        },
        function (e) {
          return (a = e);
        }
      ),
      t(
        e.exports,
        "Fragment",
        function () {
          return o;
        },
        function (e) {
          return (o = e);
        }
      ),
      t(
        e.exports,
        "Profiler",
        function () {
          return l;
        },
        function (e) {
          return (l = e);
        }
      ),
      t(
        e.exports,
        "PureComponent",
        function () {
          return i;
        },
        function (e) {
          return (i = e);
        }
      ),
      t(
        e.exports,
        "StrictMode",
        function () {
          return u;
        },
        function (e) {
          return (u = e);
        }
      ),
      t(
        e.exports,
        "Suspense",
        function () {
          return s;
        },
        function (e) {
          return (s = e);
        }
      ),
      t(
        e.exports,
        "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
        function () {
          return c;
        },
        function (e) {
          return (c = e);
        }
      ),
      t(
        e.exports,
        "cloneElement",
        function () {
          return f;
        },
        function (e) {
          return (f = e);
        }
      ),
      t(
        e.exports,
        "createContext",
        function () {
          return d;
        },
        function (e) {
          return (d = e);
        }
      ),
      t(
        e.exports,
        "createElement",
        function () {
          return p;
        },
        function (e) {
          return (p = e);
        }
      ),
      t(
        e.exports,
        "createFactory",
        function () {
          return h;
        },
        function (e) {
          return (h = e);
        }
      ),
      t(
        e.exports,
        "createRef",
        function () {
          return m;
        },
        function (e) {
          return (m = e);
        }
      ),
      t(
        e.exports,
        "forwardRef",
        function () {
          return v;
        },
        function (e) {
          return (v = e);
        }
      ),
      t(
        e.exports,
        "isValidElement",
        function () {
          return y;
        },
        function (e) {
          return (y = e);
        }
      ),
      t(
        e.exports,
        "lazy",
        function () {
          return g;
        },
        function (e) {
          return (g = e);
        }
      ),
      t(
        e.exports,
        "memo",
        function () {
          return b;
        },
        function (e) {
          return (b = e);
        }
      ),
      t(
        e.exports,
        "startTransition",
        function () {
          return w;
        },
        function (e) {
          return (w = e);
        }
      ),
      t(
        e.exports,
        "unstable_act",
        function () {
          return x;
        },
        function (e) {
          return (x = e);
        }
      ),
      t(
        e.exports,
        "useCallback",
        function () {
          return S;
        },
        function (e) {
          return (S = e);
        }
      ),
      t(
        e.exports,
        "useContext",
        function () {
          return k;
        },
        function (e) {
          return (k = e);
        }
      ),
      t(
        e.exports,
        "useDebugValue",
        function () {
          return E;
        },
        function (e) {
          return (E = e);
        }
      ),
      t(
        e.exports,
        "useDeferredValue",
        function () {
          return _;
        },
        function (e) {
          return (_ = e);
        }
      ),
      t(
        e.exports,
        "useEffect",
        function () {
          return C;
        },
        function (e) {
          return (C = e);
        }
      ),
      t(
        e.exports,
        "useId",
        function () {
          return P;
        },
        function (e) {
          return (P = e);
        }
      ),
      t(
        e.exports,
        "useImperativeHandle",
        function () {
          return T;
        },
        function (e) {
          return (T = e);
        }
      ),
      t(
        e.exports,
        "useInsertionEffect",
        function () {
          return N;
        },
        function (e) {
          return (N = e);
        }
      ),
      t(
        e.exports,
        "useLayoutEffect",
        function () {
          return R;
        },
        function (e) {
          return (R = e);
        }
      ),
      t(
        e.exports,
        "useMemo",
        function () {
          return j;
        },
        function (e) {
          return (j = e);
        }
      ),
      t(
        e.exports,
        "useReducer",
        function () {
          return O;
        },
        function (e) {
          return (O = e);
        }
      ),
      t(
        e.exports,
        "useRef",
        function () {
          return D;
        },
        function (e) {
          return (D = e);
        }
      ),
      t(
        e.exports,
        "useState",
        function () {
          return L;
        },
        function (e) {
          return (L = e);
        }
      ),
      t(
        e.exports,
        "useSyncExternalStore",
        function () {
          return z;
        },
        function (e) {
          return (z = e);
        }
      ),
      t(
        e.exports,
        "useTransition",
        function () {
          return M;
        },
        function (e) {
          return (M = e);
        }
      ),
      t(
        e.exports,
        "version",
        function () {
          return F;
        },
        function (e) {
          return (F = e);
        }
      );
    var r,
      a,
      o,
      l,
      i,
      u,
      s,
      c,
      f,
      d,
      p,
      h,
      m,
      v,
      y,
      g,
      b,
      w,
      x,
      S,
      k,
      E,
      _,
      C,
      P,
      T,
      N,
      R,
      j,
      O,
      D,
      L,
      z,
      M,
      F,
      I = Symbol.for("react.element"),
      U = Symbol.for("react.portal"),
      A = Symbol.for("react.fragment"),
      B = Symbol.for("react.strict_mode"),
      $ = Symbol.for("react.profiler"),
      W = Symbol.for("react.provider"),
      V = Symbol.for("react.context"),
      H = Symbol.for("react.forward_ref"),
      Q = Symbol.for("react.suspense"),
      q = Symbol.for("react.memo"),
      K = Symbol.for("react.lazy"),
      G = Symbol.iterator,
      Y = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      X = Object.assign,
      J = {};
    function Z(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = J),
        (this.updater = n || Y);
    }
    function ee() {}
    function et(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = J),
        (this.updater = n || Y);
    }
    (Z.prototype.isReactComponent = {}),
      (Z.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (Z.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (ee.prototype = Z.prototype);
    var en = (et.prototype = new ee());
    (en.constructor = et), X(en, Z.prototype), (en.isPureReactComponent = !0);
    var er = Array.isArray,
      ea = Object.prototype.hasOwnProperty,
      eo = { current: null },
      el = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ei(e, t, n) {
      var r,
        a = {},
        o = null,
        l = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (l = t.ref),
        void 0 !== t.key && (o = "" + t.key),
        t))
          ea.call(t, r) && !el.hasOwnProperty(r) && (a[r] = t[r]);
      var i = arguments.length - 2;
      if (1 === i) a.children = n;
      else if (1 < i) {
        for (var u = Array(i), s = 0; s < i; s++) u[s] = arguments[s + 2];
        a.children = u;
      }
      if (e && e.defaultProps)
        for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r]);
      return {
        $$typeof: I,
        type: e,
        key: o,
        ref: l,
        props: a,
        _owner: eo.current,
      };
    }
    function eu(e) {
      return "object" == typeof e && null !== e && e.$$typeof === I;
    }
    var es = /\/+/g;
    function ec(e, t) {
      var n, r;
      return "object" == typeof e && null !== e && null != e.key
        ? ((n = "" + e.key),
          (r = { "=": "=0", ":": "=2" }),
          "$" +
            n.replace(/[=:]/g, function (e) {
              return r[e];
            }))
        : t.toString(36);
    }
    function ef(e, t, n) {
      if (null == e) return e;
      var r = [],
        a = 0;
      return (
        (function e(t, n, r, a, o) {
          var l,
            i,
            u,
            s = typeof t;
          ("undefined" === s || "boolean" === s) && (t = null);
          var c = !1;
          if (null === t) c = !0;
          else
            switch (s) {
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (t.$$typeof) {
                  case I:
                  case U:
                    c = !0;
                }
            }
          if (c)
            return (
              (o = o((c = t))),
              (t = "" === a ? "." + ec(c, 0) : a),
              er(o)
                ? ((r = ""),
                  null != t && (r = t.replace(es, "$&/") + "/"),
                  e(o, n, r, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (eu(o) &&
                    ((l = o),
                    (i =
                      r +
                      (!o.key || (c && c.key === o.key)
                        ? ""
                        : ("" + o.key).replace(es, "$&/") + "/") +
                      t),
                    (o = {
                      $$typeof: I,
                      type: l.type,
                      key: i,
                      ref: l.ref,
                      props: l.props,
                      _owner: l._owner,
                    })),
                  n.push(o)),
              1
            );
          if (((c = 0), (a = "" === a ? "." : a + ":"), er(t)))
            for (var f = 0; f < t.length; f++) {
              var d = a + ec((s = t[f]), f);
              c += e(s, n, r, d, o);
            }
          else if (
            "function" ==
            typeof (d =
              null === (u = t) || "object" != typeof u
                ? null
                : "function" == typeof (u = (G && u[G]) || u["@@iterator"])
                ? u
                : null)
          )
            for (t = d.call(t), f = 0; !(s = t.next()).done; )
              (d = a + ec((s = s.value), f++)), (c += e(s, n, r, d, o));
          else if ("object" === s)
            throw Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === (n = String(t))
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : n) +
                "). If you meant to render a collection of children, use an array instead."
            );
          return c;
        })(e, r, "", "", function (e) {
          return t.call(n, e, a++);
        }),
        r
      );
    }
    function ed(e) {
      if (-1 === e._status) {
        var t = e._result;
        (t = t()).then(
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 1), (e._result = t));
          },
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 2), (e._result = t));
          }
        ),
          -1 === e._status && ((e._status = 0), (e._result = t));
      }
      if (1 === e._status) return e._result.default;
      throw e._result;
    }
    var ep = { current: null },
      eh = { transition: null };
    (r = {
      map: ef,
      forEach: function (e, t, n) {
        ef(
          e,
          function () {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function (e) {
        var t = 0;
        return (
          ef(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          ef(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!eu(e))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return e;
      },
    }),
      (a = Z),
      (o = A),
      (l = $),
      (i = et),
      (u = B),
      (s = Q),
      (c = {
        ReactCurrentDispatcher: ep,
        ReactCurrentBatchConfig: eh,
        ReactCurrentOwner: eo,
      }),
      (f = function (e, t, n) {
        if (null == e)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              e +
              "."
          );
        var r = X({}, e.props),
          a = e.key,
          o = e.ref,
          l = e._owner;
        if (null != t) {
          if (
            (void 0 !== t.ref && ((o = t.ref), (l = eo.current)),
            void 0 !== t.key && (a = "" + t.key),
            e.type && e.type.defaultProps)
          )
            var i = e.type.defaultProps;
          for (u in t)
            ea.call(t, u) &&
              !el.hasOwnProperty(u) &&
              (r[u] = void 0 === t[u] && void 0 !== i ? i[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (1 === u) r.children = n;
        else if (1 < u) {
          i = Array(u);
          for (var s = 0; s < u; s++) i[s] = arguments[s + 2];
          r.children = i;
        }
        return {
          $$typeof: I,
          type: e.type,
          key: a,
          ref: o,
          props: r,
          _owner: l,
        };
      }),
      (d = function (e) {
        return (
          ((e = {
            $$typeof: V,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }).Provider = { $$typeof: W, _context: e }),
          (e.Consumer = e)
        );
      }),
      (p = ei),
      (h = function (e) {
        var t = ei.bind(null, e);
        return (t.type = e), t;
      }),
      (m = function () {
        return { current: null };
      }),
      (v = function (e) {
        return { $$typeof: H, render: e };
      }),
      (y = eu),
      (g = function (e) {
        return {
          $$typeof: K,
          _payload: { _status: -1, _result: e },
          _init: ed,
        };
      }),
      (b = function (e, t) {
        return { $$typeof: q, type: e, compare: void 0 === t ? null : t };
      }),
      (w = function (e) {
        var t = eh.transition;
        eh.transition = {};
        try {
          e();
        } finally {
          eh.transition = t;
        }
      }),
      (x = function () {
        throw Error("act(...) is not supported in production builds of React.");
      }),
      (S = function (e, t) {
        return ep.current.useCallback(e, t);
      }),
      (k = function (e) {
        return ep.current.useContext(e);
      }),
      (E = function () {}),
      (_ = function (e) {
        return ep.current.useDeferredValue(e);
      }),
      (C = function (e, t) {
        return ep.current.useEffect(e, t);
      }),
      (P = function () {
        return ep.current.useId();
      }),
      (T = function (e, t, n) {
        return ep.current.useImperativeHandle(e, t, n);
      }),
      (N = function (e, t) {
        return ep.current.useInsertionEffect(e, t);
      }),
      (R = function (e, t) {
        return ep.current.useLayoutEffect(e, t);
      }),
      (j = function (e, t) {
        return ep.current.useMemo(e, t);
      }),
      (O = function (e, t, n) {
        return ep.current.useReducer(e, t, n);
      }),
      (D = function (e) {
        return ep.current.useRef(e);
      }),
      (L = function (e) {
        return ep.current.useState(e);
      }),
      (z = function (e, t, n) {
        return ep.current.useSyncExternalStore(e, t, n);
      }),
      (M = function () {
        return ep.current.useTransition();
      }),
      (F = "18.2.0");
  }),
  T("jQ4ul", function (e, n) {
    t(
      e.exports,
      "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      function () {
        return W;
      },
      function (e) {
        return (W = e);
      }
    ),
      t(
        e.exports,
        "createPortal",
        function () {
          return V;
        },
        function (e) {
          return (V = e);
        }
      ),
      t(
        e.exports,
        "createRoot",
        function () {
          return H;
        },
        function (e) {
          return (H = e);
        }
      ),
      t(
        e.exports,
        "findDOMNode",
        function () {
          return Q;
        },
        function (e) {
          return (Q = e);
        }
      ),
      t(
        e.exports,
        "flushSync",
        function () {
          return q;
        },
        function (e) {
          return (q = e);
        }
      ),
      t(
        e.exports,
        "hydrate",
        function () {
          return K;
        },
        function (e) {
          return (K = e);
        }
      ),
      t(
        e.exports,
        "hydrateRoot",
        function () {
          return G;
        },
        function (e) {
          return (G = e);
        }
      ),
      t(
        e.exports,
        "render",
        function () {
          return Y;
        },
        function (e) {
          return (Y = e);
        }
      ),
      t(
        e.exports,
        "unmountComponentAtNode",
        function () {
          return X;
        },
        function (e) {
          return (X = e);
        }
      ),
      t(
        e.exports,
        "unstable_batchedUpdates",
        function () {
          return J;
        },
        function (e) {
          return (J = e);
        }
      ),
      t(
        e.exports,
        "unstable_renderSubtreeIntoContainer",
        function () {
          return Z;
        },
        function (e) {
          return (Z = e);
        }
      ),
      t(
        e.exports,
        "version",
        function () {
          return ee;
        },
        function (e) {
          return (ee = e);
        }
      );
    var r,
      a,
      o,
      l,
      i,
      u,
      s = P("i7uhG"),
      c = P("dY8mw");
    function f(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var d = new Set(),
      p = {};
    function h(e, t) {
      m(e, t), m(e + "Capture", t);
    }
    function m(e, t) {
      for (p[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
    }
    var v = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      y = Object.prototype.hasOwnProperty,
      g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      b = {},
      w = {};
    function x(e, t, n, r, a, o, l) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = a),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = l);
    }
    var S = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        S[e] = new x(e, 0, !1, e, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (e) {
        var t = e[0];
        S[t] = new x(t, 1, !1, e[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        e
      ) {
        S[e] = new x(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (e) {
        S[e] = new x(e, 2, !1, e, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          S[e] = new x(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        S[e] = new x(e, 3, !0, e, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (e) {
        S[e] = new x(e, 4, !1, e, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        S[e] = new x(e, 6, !1, e, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        S[e] = new x(e, 5, !1, e.toLowerCase(), null, !1, !1);
      });
    var k = /[\-:]([a-z])/g;
    function E(e) {
      return e[1].toUpperCase();
    }
    function _(e, t, n, r) {
      var a,
        o = S.hasOwnProperty(t) ? S[t] : null;
      (null !== o
        ? 0 !== o.type
        : r ||
          !(2 < t.length) ||
          ("o" !== t[0] && "O" !== t[0]) ||
          ("n" !== t[1] && "N" !== t[1])) &&
        ((function (e, t, n, r) {
          if (
            null == t ||
            (function (e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  if (r) return !1;
                  if (null !== n) return !n.acceptsBooleans;
                  return (
                    "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                    "aria-" !== e
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, o, r) && (n = null),
        r || null === o
          ? ((a = t),
            (!!y.call(w, a) ||
              (!y.call(b, a) &&
                (g.test(a) ? (w[a] = !0) : ((b[a] = !0), !1)))) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)))
          : o.mustUseProperty
          ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
          : ((t = o.attributeName),
            (r = o.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n =
                  3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(k, E);
        S[t] = new x(t, 1, !1, e, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(k, E);
          S[t] = new x(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(k, E);
        S[t] = new x(
          t,
          1,
          !1,
          e,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        S[e] = new x(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (S.xlinkHref = new x(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        S[e] = new x(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });
    var C = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      T = Symbol.for("react.element"),
      N = Symbol.for("react.portal"),
      R = Symbol.for("react.fragment"),
      j = Symbol.for("react.strict_mode"),
      O = Symbol.for("react.profiler"),
      D = Symbol.for("react.provider"),
      L = Symbol.for("react.context"),
      z = Symbol.for("react.forward_ref"),
      M = Symbol.for("react.suspense"),
      F = Symbol.for("react.suspense_list"),
      I = Symbol.for("react.memo"),
      U = Symbol.for("react.lazy");
    Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
    var A = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden"),
      Symbol.for("react.cache"),
      Symbol.for("react.tracing_marker");
    var B = Symbol.iterator;
    function $(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (B && e[B]) || e["@@iterator"])
        ? e
        : null;
    }
    var W,
      V,
      H,
      Q,
      q,
      K,
      G,
      Y,
      X,
      J,
      Z,
      ee,
      et,
      en = Object.assign;
    function er(e) {
      if (void 0 === et)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          et = (t && t[1]) || "";
        }
      return "\n" + et + e;
    }
    var ea = !1;
    function eo(e, t) {
      if (!e || ea) return "";
      ea = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t) {
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            "object" == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r = e;
            }
            e.call(t.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (t) {
        if (t && r && "string" == typeof t.stack) {
          for (
            var a = t.stack.split("\n"),
              o = r.stack.split("\n"),
              l = a.length - 1,
              i = o.length - 1;
            1 <= l && 0 <= i && a[l] !== o[i];

          )
            i--;
          for (; 1 <= l && 0 <= i; l--, i--)
            if (a[l] !== o[i]) {
              if (1 !== l || 1 !== i)
                do
                  if ((l--, 0 > --i || a[l] !== o[i])) {
                    var u = "\n" + a[l].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        u.includes("<anonymous>") &&
                        (u = u.replace("<anonymous>", e.displayName)),
                      u
                    );
                  }
                while (1 <= l && 0 <= i);
              break;
            }
        }
      } finally {
        (ea = !1), (Error.prepareStackTrace = n);
      }
      return (e = e ? e.displayName || e.name : "") ? er(e) : "";
    }
    function el(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
          return e;
        default:
          return "";
      }
    }
    function ei(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function eu(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = ei(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            "function" == typeof n.get &&
            "function" == typeof n.set
          ) {
            var a = n.get,
              o = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return a.call(this);
                },
                set: function (e) {
                  (r = "" + e), o.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        })(e));
    }
    function es(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = ei(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function ec(e) {
      if (
        void 0 ===
        (e = e || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function ef(e, t) {
      var n = t.checked;
      return en({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
      });
    }
    function ed(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = el(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            "checkbox" === t.type || "radio" === t.type
              ? null != t.checked
              : null != t.value,
        });
    }
    function ep(e, t) {
      null != (t = t.checked) && _(e, "checked", t, !1);
    }
    function eh(e, t) {
      ep(e, t);
      var n = el(t.value),
        r = t.type;
      if (null != n)
        "number" === r
          ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n);
      else if ("submit" === r || "reset" === r) {
        e.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value")
        ? ev(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && ev(e, t.type, el(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function em(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
          !(
            ("submit" !== r && "reset" !== r) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return;
        (t = "" + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      "" !== (n = e.name) && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        "" !== n && (e.name = n);
    }
    function ev(e, t, n) {
      ("number" !== t || ec(e.ownerDocument) !== e) &&
        (null == n
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var ey = Array.isArray;
    function eg(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
        for (n = 0; n < e.length; n++)
          (a = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== a && (e[n].selected = a),
            a && r && (e[n].defaultSelected = !0);
      } else {
        for (a = 0, n = "" + el(n), t = null; a < e.length; a++) {
          if (e[a].value === n) {
            (e[a].selected = !0), r && (e[a].defaultSelected = !0);
            return;
          }
          null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function eb(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(f(91));
      return en({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function ew(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
          if (null != t) throw Error(f(92));
          if (ey(n)) {
            if (1 < n.length) throw Error(f(93));
            n = n[0];
          }
          t = n;
        }
        null == t && (t = ""), (n = t);
      }
      e._wrapperState = { initialValue: el(n) };
    }
    function ex(e, t) {
      var n = el(t.value),
        r = el(t.defaultValue);
      null != n &&
        ((n = "" + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r);
    }
    function eS(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        "" !== t &&
        null !== t &&
        (e.value = t);
    }
    function ek(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function eE(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? ek(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var e_,
      eC,
      eP =
        ((e_ = function (e, t) {
          if (
            "http://www.w3.org/2000/svg" !== e.namespaceURI ||
            "innerHTML" in e
          )
            e.innerHTML = t;
          else {
            for (
              (eC = eC || document.createElement("div")).innerHTML =
                "<svg>" + t.valueOf().toString() + "</svg>",
                t = eC.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
          }
        }),
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, t, n, r) {
              MSApp.execUnsafeLocalFunction(function () {
                return e_(e, t, n, r);
              });
            }
          : e_);
    function eT(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var eN = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      eR = ["Webkit", "ms", "Moz", "O"];
    function ej(e, t, n) {
      return null == t || "boolean" == typeof t || "" === t
        ? ""
        : n ||
          "number" != typeof t ||
          0 === t ||
          (eN.hasOwnProperty(e) && eN[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function eO(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            a = ej(n, t[n], r);
          "float" === n && (n = "cssFloat"),
            r ? e.setProperty(n, a) : (e[n] = a);
        }
    }
    Object.keys(eN).forEach(function (e) {
      eR.forEach(function (t) {
        eN[(t = t + e.charAt(0).toUpperCase() + e.substring(1))] = eN[e];
      });
    });
    var eD = en(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function eL(e, t) {
      if (t) {
        if (eD[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(f(137, e));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(f(60));
          if (
            "object" != typeof t.dangerouslySetInnerHTML ||
            !("__html" in t.dangerouslySetInnerHTML)
          )
            throw Error(f(61));
        }
        if (null != t.style && "object" != typeof t.style) throw Error(f(62));
      }
    }
    function ez(e, t) {
      if (-1 === e.indexOf("-")) return "string" == typeof t.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var eM = null;
    function eF(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var eI = null,
      eU = null,
      eA = null;
    function eB(e) {
      if ((e = rG(e))) {
        if ("function" != typeof eI) throw Error(f(280));
        var t = e.stateNode;
        t && ((t = rX(t)), eI(e.stateNode, e.type, t));
      }
    }
    function e$(e) {
      eU ? (eA ? eA.push(e) : (eA = [e])) : (eU = e);
    }
    function eW() {
      if (eU) {
        var e = eU,
          t = eA;
        if (((eA = eU = null), eB(e), t))
          for (e = 0; e < t.length; e++) eB(t[e]);
      }
    }
    function eV(e, t) {
      return e(t);
    }
    function eH() {}
    var eQ = !1;
    function eq(e, t, n) {
      if (eQ) return e(t, n);
      eQ = !0;
      try {
        return eV(e, t, n);
      } finally {
        (eQ = !1), (null !== eU || null !== eA) && (eH(), eW());
      }
    }
    function eK(e, t) {
      var n = e.stateNode;
      if (null === n) return null;
      var r = rX(n);
      if (null === r) return null;
      switch (((n = r[t]), t)) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) ||
            (r = !(
              "button" === (e = e.type) ||
              "input" === e ||
              "select" === e ||
              "textarea" === e
            )),
            (e = !r);
          break;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" != typeof n) throw Error(f(231, t, typeof n));
      return n;
    }
    var eG = !1;
    if (v)
      try {
        var eY = {};
        Object.defineProperty(eY, "passive", {
          get: function () {
            eG = !0;
          },
        }),
          window.addEventListener("test", eY, eY),
          window.removeEventListener("test", eY, eY);
      } catch (e) {
        eG = !1;
      }
    function eX(e, t, n, r, a, o, l, i, u) {
      var s = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, s);
      } catch (e) {
        this.onError(e);
      }
    }
    var eJ = !1,
      eZ = null,
      e0 = !1,
      e1 = null,
      e2 = {
        onError: function (e) {
          (eJ = !0), (eZ = e);
        },
      };
    function e3(e, t, n, r, a, o, l, i, u) {
      (eJ = !1), (eZ = null), eX.apply(e2, arguments);
    }
    function e4(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do 0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
        while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function e5(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function e8(e) {
      if (e4(e) !== e) throw Error(f(188));
    }
    function e6(e) {
      return null !==
        (e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = e4(e))) throw Error(f(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var a = n.return;
            if (null === a) break;
            var o = a.alternate;
            if (null === o) {
              if (null !== (r = a.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (a.child === o.child) {
              for (o = a.child; o; ) {
                if (o === n) return e8(a), e;
                if (o === r) return e8(a), t;
                o = o.sibling;
              }
              throw Error(f(188));
            }
            if (n.return !== r.return) (n = a), (r = o);
            else {
              for (var l = !1, i = a.child; i; ) {
                if (i === n) {
                  (l = !0), (n = a), (r = o);
                  break;
                }
                if (i === r) {
                  (l = !0), (r = a), (n = o);
                  break;
                }
                i = i.sibling;
              }
              if (!l) {
                for (i = o.child; i; ) {
                  if (i === n) {
                    (l = !0), (n = o), (r = a);
                    break;
                  }
                  if (i === r) {
                    (l = !0), (r = o), (n = a);
                    break;
                  }
                  i = i.sibling;
                }
                if (!l) throw Error(f(189));
              }
            }
            if (n.alternate !== r) throw Error(f(190));
          }
          if (3 !== n.tag) throw Error(f(188));
          return n.stateNode.current === n ? e : t;
        })(e))
        ? (function e(t) {
            if (5 === t.tag || 6 === t.tag) return t;
            for (t = t.child; null !== t; ) {
              var n = e(t);
              if (null !== n) return n;
              t = t.sibling;
            }
            return null;
          })(e)
        : null;
    }
    var e7 = c.unstable_scheduleCallback,
      e9 = c.unstable_cancelCallback,
      te = c.unstable_shouldYield,
      tt = c.unstable_requestPaint,
      tn = c.unstable_now,
      tr = c.unstable_getCurrentPriorityLevel,
      ta = c.unstable_ImmediatePriority,
      to = c.unstable_UserBlockingPriority,
      tl = c.unstable_NormalPriority,
      ti = c.unstable_LowPriority,
      tu = c.unstable_IdlePriority,
      ts = null,
      tc = null,
      tf = Math.clz32
        ? Math.clz32
        : function (e) {
            return 0 == (e >>>= 0) ? 32 : (31 - ((td(e) / tp) | 0)) | 0;
          },
      td = Math.log,
      tp = Math.LN2,
      th = 64,
      tm = 4194304;
    function tv(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return 130023424 & e;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function ty(e, t) {
      var n = e.pendingLanes;
      if (0 === n) return 0;
      var r = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes,
        l = 268435455 & n;
      if (0 !== l) {
        var i = l & ~a;
        0 !== i ? (r = tv(i)) : 0 != (o &= l) && (r = tv(o));
      } else 0 != (l = n & ~a) ? (r = tv(l)) : 0 !== o && (r = tv(o));
      if (0 === r) return 0;
      if (
        0 !== t &&
        t !== r &&
        0 == (t & a) &&
        ((a = r & -r) >= (o = t & -t) || (16 === a && 0 != (4194240 & o)))
      )
        return t;
      if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; )
          (a = 1 << (n = 31 - tf(t))), (r |= e[n]), (t &= ~a);
      return r;
    }
    function tg(e) {
      return 0 != (e = -1073741825 & e.pendingLanes)
        ? e
        : 1073741824 & e
        ? 1073741824
        : 0;
    }
    function tb() {
      var e = th;
      return 0 == (4194240 & (th <<= 1)) && (th = 64), e;
    }
    function tw(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function tx(e, t, n) {
      (e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - tf(t))] = n);
    }
    function tS(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - tf(n),
          a = 1 << r;
        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
      }
    }
    var tk = 0;
    function tE(e) {
      return 1 < (e &= -e)
        ? 4 < e
          ? 0 != (268435455 & e)
            ? 16
            : 536870912
          : 4
        : 1;
    }
    var t_,
      tC,
      tP,
      tT,
      tN,
      tR = !1,
      tj = [],
      tO = null,
      tD = null,
      tL = null,
      tz = new Map(),
      tM = new Map(),
      tF = [],
      tI = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
    function tU(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          tO = null;
          break;
        case "dragenter":
        case "dragleave":
          tD = null;
          break;
        case "mouseover":
        case "mouseout":
          tL = null;
          break;
        case "pointerover":
        case "pointerout":
          tz.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          tM.delete(t.pointerId);
      }
    }
    function tA(e, t, n, r, a, o) {
      return (
        null === e || e.nativeEvent !== o
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [a],
            }),
            null !== t && null !== (t = rG(t)) && tC(t))
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== a && -1 === t.indexOf(a) && t.push(a)),
        e
      );
    }
    function tB(e) {
      var t = rK(e.target);
      if (null !== t) {
        var n = e4(t);
        if (null !== n) {
          if (13 === (t = n.tag)) {
            if (null !== (t = e5(n))) {
              (e.blockedOn = t),
                tN(e.priority, function () {
                  tP(n);
                });
              return;
            }
          } else if (
            3 === t &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function t$(e) {
      if (null !== e.blockedOn) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = tZ(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n)
          return null !== (t = rG(n)) && tC(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (eM = r), n.target.dispatchEvent(r), (eM = null), t.shift();
      }
      return !0;
    }
    function tW(e, t, n) {
      t$(e) && n.delete(t);
    }
    function tV() {
      (tR = !1),
        null !== tO && t$(tO) && (tO = null),
        null !== tD && t$(tD) && (tD = null),
        null !== tL && t$(tL) && (tL = null),
        tz.forEach(tW),
        tM.forEach(tW);
    }
    function tH(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        tR ||
          ((tR = !0),
          c.unstable_scheduleCallback(c.unstable_NormalPriority, tV)));
    }
    function tQ(e) {
      function t(t) {
        return tH(t, e);
      }
      if (0 < tj.length) {
        tH(tj[0], e);
        for (var n = 1; n < tj.length; n++) {
          var r = tj[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== tO && tH(tO, e),
          null !== tD && tH(tD, e),
          null !== tL && tH(tL, e),
          tz.forEach(t),
          tM.forEach(t),
          n = 0;
        n < tF.length;
        n++
      )
        (r = tF[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < tF.length && null === (n = tF[0]).blockedOn; )
        tB(n), null === n.blockedOn && tF.shift();
    }
    var tq = C.ReactCurrentBatchConfig,
      tK = !0;
    function tG(e, t, n, r) {
      var a = tk,
        o = tq.transition;
      tq.transition = null;
      try {
        (tk = 1), tX(e, t, n, r);
      } finally {
        (tk = a), (tq.transition = o);
      }
    }
    function tY(e, t, n, r) {
      var a = tk,
        o = tq.transition;
      tq.transition = null;
      try {
        (tk = 4), tX(e, t, n, r);
      } finally {
        (tk = a), (tq.transition = o);
      }
    }
    function tX(e, t, n, r) {
      if (tK) {
        var a = tZ(e, t, n, r);
        if (null === a) rw(e, t, r, tJ, n), tU(e, r);
        else if (
          (function (e, t, n, r, a) {
            switch (t) {
              case "focusin":
                return (tO = tA(tO, e, t, n, r, a)), !0;
              case "dragenter":
                return (tD = tA(tD, e, t, n, r, a)), !0;
              case "mouseover":
                return (tL = tA(tL, e, t, n, r, a)), !0;
              case "pointerover":
                var o = a.pointerId;
                return tz.set(o, tA(tz.get(o) || null, e, t, n, r, a)), !0;
              case "gotpointercapture":
                return (
                  (o = a.pointerId),
                  tM.set(o, tA(tM.get(o) || null, e, t, n, r, a)),
                  !0
                );
            }
            return !1;
          })(a, e, t, n, r)
        )
          r.stopPropagation();
        else if ((tU(e, r), 4 & t && -1 < tI.indexOf(e))) {
          for (; null !== a; ) {
            var o = rG(a);
            if (
              (null !== o && t_(o),
              null === (o = tZ(e, t, n, r)) && rw(e, t, r, tJ, n),
              o === a)
            )
              break;
            a = o;
          }
          null !== a && r.stopPropagation();
        } else rw(e, t, r, null, n);
      }
    }
    var tJ = null;
    function tZ(e, t, n, r) {
      if (((tJ = null), null !== (e = rK((e = eF(r)))))) {
        if (null === (t = e4(e))) e = null;
        else if (13 === (n = t.tag)) {
          if (null !== (e = e5(t))) return e;
          e = null;
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return 3 === t.tag ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
      return (tJ = e), null;
    }
    function t0(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (tr()) {
            case ta:
              return 1;
            case to:
              return 4;
            case tl:
            case ti:
              return 16;
            case tu:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var t1 = null,
      t2 = null,
      t3 = null;
    function t4() {
      if (t3) return t3;
      var e,
        t,
        n = t2,
        r = n.length,
        a = "value" in t1 ? t1.value : t1.textContent,
        o = a.length;
      for (e = 0; e < r && n[e] === a[e]; e++);
      var l = r - e;
      for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
      return (t3 = a.slice(e, 1 < t ? 1 - t : void 0));
    }
    function t5(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    function t8() {
      return !0;
    }
    function t6() {
      return !1;
    }
    function t7(e) {
      function t(t, n, r, a, o) {
        for (var l in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = a),
        (this.target = o),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
        return (
          (this.isDefaultPrevented = (
            null != a.defaultPrevented
              ? a.defaultPrevented
              : !1 === a.returnValue
          )
            ? t8
            : t6),
          (this.isPropagationStopped = t6),
          this
        );
      }
      return (
        en(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = t8));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = t8));
          },
          persist: function () {},
          isPersistent: t8,
        }),
        t
      );
    }
    var t9,
      ne,
      nt,
      nn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      nr = t7(nn),
      na = en({}, nn, { view: 0, detail: 0 }),
      no = t7(na),
      nl = en({}, na, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ny,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== nt &&
                (nt && "mousemove" === e.type
                  ? ((t9 = e.screenX - nt.screenX),
                    (ne = e.screenY - nt.screenY))
                  : (ne = t9 = 0),
                (nt = e)),
              t9);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : ne;
        },
      }),
      ni = t7(nl),
      nu = t7(en({}, nl, { dataTransfer: 0 })),
      ns = t7(en({}, na, { relatedTarget: 0 })),
      nc = t7(
        en({}, nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      nf = t7(
        en({}, nn, {
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        })
      ),
      nd = t7(en({}, nn, { data: 0 })),
      np = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      nh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      nm = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function nv(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = nm[e]) && !!t[e];
    }
    function ny() {
      return nv;
    }
    var ng = t7(
        en({}, na, {
          key: function (e) {
            if (e.key) {
              var t = np[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = t5(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? nh[e.keyCode] || "Unidentified"
              : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: ny,
          charCode: function (e) {
            return "keypress" === e.type ? t5(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? t5(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        })
      ),
      nb = t7(
        en({}, nl, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      nw = t7(
        en({}, na, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: ny,
        })
      ),
      nx = t7(
        en({}, nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      nS = t7(
        en({}, nl, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      nk = [9, 13, 27, 32],
      nE = v && "CompositionEvent" in window,
      n_ = null;
    v && "documentMode" in document && (n_ = document.documentMode);
    var nC = v && "TextEvent" in window && !n_,
      nP = v && (!nE || (n_ && 8 < n_ && 11 >= n_)),
      nT = !1;
    function nN(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== nk.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function nR(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var nj = !1,
      nO = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
    function nD(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!nO[e.type] : "textarea" === t;
    }
    function nL(e, t, n, r) {
      e$(r),
        0 < (t = rS(t, "onChange")).length &&
          ((n = new nr("onChange", "change", null, n, r)),
          e.push({ event: n, listeners: t }));
    }
    var nz = null,
      nM = null;
    function nF(e) {
      rh(e, 0);
    }
    function nI(e) {
      if (es(rY(e))) return e;
    }
    function nU(e, t) {
      if ("change" === e) return t;
    }
    var nA = !1;
    if (v) {
      if (v) {
        var nB = "oninput" in document;
        if (!nB) {
          var n$ = document.createElement("div");
          n$.setAttribute("oninput", "return;"),
            (nB = "function" == typeof n$.oninput);
        }
        r = nB;
      } else r = !1;
      nA = r && (!document.documentMode || 9 < document.documentMode);
    }
    function nW() {
      nz && (nz.detachEvent("onpropertychange", nV), (nM = nz = null));
    }
    function nV(e) {
      if ("value" === e.propertyName && nI(nM)) {
        var t = [];
        nL(t, nM, e, eF(e)), eq(nF, t);
      }
    }
    function nH(e, t, n) {
      "focusin" === e
        ? (nW(), (nz = t), (nM = n), nz.attachEvent("onpropertychange", nV))
        : "focusout" === e && nW();
    }
    function nQ(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return nI(nM);
    }
    function nq(e, t) {
      if ("click" === e) return nI(t);
    }
    function nK(e, t) {
      if ("input" === e || "change" === e) return nI(t);
    }
    var nG =
      "function" == typeof Object.is
        ? Object.is
        : function (e, t) {
            return (
              (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            );
          };
    function nY(e, t) {
      if (nG(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!y.call(t, a) || !nG(e[a], t[a])) return !1;
      }
      return !0;
    }
    function nX(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function nJ(e, t) {
      var n,
        r = nX(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = nX(r);
      }
    }
    function nZ() {
      for (var e = window, t = ec(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ec(e.document);
      }
      return t;
    }
    function n0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var n1 = v && "documentMode" in document && 11 >= document.documentMode,
      n2 = null,
      n3 = null,
      n4 = null,
      n5 = !1;
    function n8(e, t, n) {
      var r =
        n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
      n5 ||
        null == n2 ||
        n2 !== ec(r) ||
        ((r =
          "selectionStart" in (r = n2) && n0(r)
            ? { start: r.selectionStart, end: r.selectionEnd }
            : {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
        (n4 && nY(n4, r)) ||
          ((n4 = r),
          0 < (r = rS(n3, "onSelect")).length &&
            ((t = new nr("onSelect", "select", null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = n2))));
    }
    function n6(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var n7 = {
        animationend: n6("Animation", "AnimationEnd"),
        animationiteration: n6("Animation", "AnimationIteration"),
        animationstart: n6("Animation", "AnimationStart"),
        transitionend: n6("Transition", "TransitionEnd"),
      },
      n9 = {},
      re = {};
    function rt(e) {
      if (n9[e]) return n9[e];
      if (!n7[e]) return e;
      var t,
        n = n7[e];
      for (t in n) if (n.hasOwnProperty(t) && t in re) return (n9[e] = n[t]);
      return e;
    }
    v &&
      ((re = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete n7.animationend.animation,
        delete n7.animationiteration.animation,
        delete n7.animationstart.animation),
      "TransitionEvent" in window || delete n7.transitionend.transition);
    var rn = rt("animationend"),
      rr = rt("animationiteration"),
      ra = rt("animationstart"),
      ro = rt("transitionend"),
      rl = new Map(),
      ri = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
    function ru(e, t) {
      rl.set(e, t), h(t, [e]);
    }
    for (var rs = 0; rs < ri.length; rs++) {
      var rc = ri[rs];
      ru(rc.toLowerCase(), "on" + (rc[0].toUpperCase() + rc.slice(1)));
    }
    ru(rn, "onAnimationEnd"),
      ru(rr, "onAnimationIteration"),
      ru(ra, "onAnimationStart"),
      ru("dblclick", "onDoubleClick"),
      ru("focusin", "onFocus"),
      ru("focusout", "onBlur"),
      ru(ro, "onTransitionEnd"),
      m("onMouseEnter", ["mouseout", "mouseover"]),
      m("onMouseLeave", ["mouseout", "mouseover"]),
      m("onPointerEnter", ["pointerout", "pointerover"]),
      m("onPointerLeave", ["pointerout", "pointerover"]),
      h(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " "
        )
      ),
      h(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      h(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      ),
      h(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      h(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
    var rf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
      rd = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(rf)
      );
    function rp(e, t, n) {
      var r = e.type || "unknown-event";
      (e.currentTarget = n),
        (function (e, t, n, r, a, o, l, i, u) {
          if ((e3.apply(this, arguments), eJ)) {
            if (eJ) {
              var s = eZ;
              (eJ = !1), (eZ = null);
            } else throw Error(f(198));
            e0 || ((e0 = !0), (e1 = s));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    function rh(e, t) {
      t = 0 != (4 & t);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          a = r.event;
        r = r.listeners;
        e: {
          var o = void 0;
          if (t)
            for (var l = r.length - 1; 0 <= l; l--) {
              var i = r[l],
                u = i.instance,
                s = i.currentTarget;
              if (((i = i.listener), u !== o && a.isPropagationStopped()))
                break e;
              rp(a, i, s), (o = u);
            }
          else
            for (l = 0; l < r.length; l++) {
              if (
                ((u = (i = r[l]).instance),
                (s = i.currentTarget),
                (i = i.listener),
                u !== o && a.isPropagationStopped())
              )
                break e;
              rp(a, i, s), (o = u);
            }
        }
      }
      if (e0) throw ((e = e1), (e0 = !1), (e1 = null), e);
    }
    function rm(e, t) {
      var n = t[rH];
      void 0 === n && (n = t[rH] = new Set());
      var r = e + "__bubble";
      n.has(r) || (rb(t, e, 2, !1), n.add(r));
    }
    function rv(e, t, n) {
      var r = 0;
      t && (r |= 4), rb(n, e, r, t);
    }
    var ry = "_reactListening" + Math.random().toString(36).slice(2);
    function rg(e) {
      if (!e[ry]) {
        (e[ry] = !0),
          d.forEach(function (t) {
            "selectionchange" !== t &&
              (rd.has(t) || rv(t, !1, e), rv(t, !0, e));
          });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[ry] || ((t[ry] = !0), rv("selectionchange", !1, t));
      }
    }
    function rb(e, t, n, r) {
      switch (t0(t)) {
        case 1:
          var a = tG;
          break;
        case 4:
          a = tY;
          break;
        default:
          a = tX;
      }
      (n = a.bind(null, t, n, e)),
        (a = void 0),
        eG &&
          ("touchstart" === t || "touchmove" === t || "wheel" === t) &&
          (a = !0),
        r
          ? void 0 !== a
            ? e.addEventListener(t, n, { capture: !0, passive: a })
            : e.addEventListener(t, n, !0)
          : void 0 !== a
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1);
    }
    function rw(e, t, n, r, a) {
      var o = r;
      if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
          if (null === r) return;
          var l = r.tag;
          if (3 === l || 4 === l) {
            var i = r.stateNode.containerInfo;
            if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
            if (4 === l)
              for (l = r.return; null !== l; ) {
                var u = l.tag;
                if (
                  (3 === u || 4 === u) &&
                  ((u = l.stateNode.containerInfo) === a ||
                    (8 === u.nodeType && u.parentNode === a))
                )
                  return;
                l = l.return;
              }
            for (; null !== i; ) {
              if (null === (l = rK(i))) return;
              if (5 === (u = l.tag) || 6 === u) {
                r = o = l;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
      eq(function () {
        var r = o,
          a = eF(n),
          l = [];
        e: {
          var i = rl.get(e);
          if (void 0 !== i) {
            var u = nr,
              s = e;
            switch (e) {
              case "keypress":
                if (0 === t5(n)) break e;
              case "keydown":
              case "keyup":
                u = ng;
                break;
              case "focusin":
                (s = "focus"), (u = ns);
                break;
              case "focusout":
                (s = "blur"), (u = ns);
                break;
              case "beforeblur":
              case "afterblur":
                u = ns;
                break;
              case "click":
                if (2 === n.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                u = ni;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                u = nu;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                u = nw;
                break;
              case rn:
              case rr:
              case ra:
                u = nc;
                break;
              case ro:
                u = nx;
                break;
              case "scroll":
                u = no;
                break;
              case "wheel":
                u = nS;
                break;
              case "copy":
              case "cut":
              case "paste":
                u = nf;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                u = nb;
            }
            var c = 0 != (4 & t),
              f = !c && "scroll" === e,
              d = c ? (null !== i ? i + "Capture" : null) : i;
            c = [];
            for (var p, h = r; null !== h; ) {
              var m = (p = h).stateNode;
              if (
                (5 === p.tag &&
                  null !== m &&
                  ((p = m),
                  null !== d && null != (m = eK(h, d)) && c.push(rx(h, m, p))),
                f)
              )
                break;
              h = h.return;
            }
            0 < c.length &&
              ((i = new u(i, s, null, n, a)),
              l.push({ event: i, listeners: c }));
          }
        }
        if (0 == (7 & t)) {
          if (
            ((i = "mouseover" === e || "pointerover" === e),
            (u = "mouseout" === e || "pointerout" === e),
            !(
              i &&
              n !== eM &&
              (s = n.relatedTarget || n.fromElement) &&
              (rK(s) || s[rV])
            ) &&
              (u || i) &&
              ((i =
                a.window === a
                  ? a
                  : (i = a.ownerDocument)
                  ? i.defaultView || i.parentWindow
                  : window),
              u
                ? ((s = n.relatedTarget || n.toElement),
                  (u = r),
                  null !== (s = s ? rK(s) : null) &&
                    ((f = e4(s)), s !== f || (5 !== s.tag && 6 !== s.tag)) &&
                    (s = null))
                : ((u = null), (s = r)),
              u !== s))
          ) {
            if (
              ((c = ni),
              (m = "onMouseLeave"),
              (d = "onMouseEnter"),
              (h = "mouse"),
              ("pointerout" === e || "pointerover" === e) &&
                ((c = nb),
                (m = "onPointerLeave"),
                (d = "onPointerEnter"),
                (h = "pointer")),
              (f = null == u ? i : rY(u)),
              (p = null == s ? i : rY(s)),
              ((i = new c(m, h + "leave", u, n, a)).target = f),
              (i.relatedTarget = p),
              (m = null),
              rK(a) === r &&
                (((c = new c(d, h + "enter", s, n, a)).target = p),
                (c.relatedTarget = f),
                (m = c)),
              (f = m),
              u && s)
            )
              t: {
                for (c = u, d = s, h = 0, p = c; p; p = rk(p)) h++;
                for (p = 0, m = d; m; m = rk(m)) p++;
                for (; 0 < h - p; ) (c = rk(c)), h--;
                for (; 0 < p - h; ) (d = rk(d)), p--;
                for (; h--; ) {
                  if (c === d || (null !== d && c === d.alternate)) break t;
                  (c = rk(c)), (d = rk(d));
                }
                c = null;
              }
            else c = null;
            null !== u && rE(l, i, u, c, !1),
              null !== s && null !== f && rE(l, f, s, c, !0);
          }
          e: {
            if (
              "select" ===
                (u =
                  (i = r ? rY(r) : window).nodeName &&
                  i.nodeName.toLowerCase()) ||
              ("input" === u && "file" === i.type)
            )
              var v,
                y = nU;
            else if (nD(i)) {
              if (nA) y = nK;
              else {
                y = nQ;
                var g = nH;
              }
            } else
              (u = i.nodeName) &&
                "input" === u.toLowerCase() &&
                ("checkbox" === i.type || "radio" === i.type) &&
                (y = nq);
            if (y && (y = y(e, r))) {
              nL(l, y, n, a);
              break e;
            }
            g && g(e, i, r),
              "focusout" === e &&
                (g = i._wrapperState) &&
                g.controlled &&
                "number" === i.type &&
                ev(i, "number", i.value);
          }
          switch (((g = r ? rY(r) : window), e)) {
            case "focusin":
              (nD(g) || "true" === g.contentEditable) &&
                ((n2 = g), (n3 = r), (n4 = null));
              break;
            case "focusout":
              n4 = n3 = n2 = null;
              break;
            case "mousedown":
              n5 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (n5 = !1), n8(l, n, a);
              break;
            case "selectionchange":
              if (n1) break;
            case "keydown":
            case "keyup":
              n8(l, n, a);
          }
          if (nE)
            t: {
              switch (e) {
                case "compositionstart":
                  var b = "onCompositionStart";
                  break t;
                case "compositionend":
                  b = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  b = "onCompositionUpdate";
                  break t;
              }
              b = void 0;
            }
          else
            nj
              ? nN(e, n) && (b = "onCompositionEnd")
              : "keydown" === e &&
                229 === n.keyCode &&
                (b = "onCompositionStart");
          b &&
            (nP &&
              "ko" !== n.locale &&
              (nj || "onCompositionStart" !== b
                ? "onCompositionEnd" === b && nj && (v = t4())
                : ((t2 = "value" in (t1 = a) ? t1.value : t1.textContent),
                  (nj = !0))),
            0 < (g = rS(r, b)).length &&
              ((b = new nd(b, e, null, n, a)),
              l.push({ event: b, listeners: g }),
              v ? (b.data = v) : null !== (v = nR(n)) && (b.data = v))),
            (v = nC
              ? (function (e, t) {
                  switch (e) {
                    case "compositionend":
                      return nR(t);
                    case "keypress":
                      if (32 !== t.which) return null;
                      return (nT = !0), " ";
                    case "textInput":
                      return " " === (e = t.data) && nT ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (nj)
                    return "compositionend" === e || (!nE && nN(e, t))
                      ? ((e = t4()), (t3 = t2 = t1 = null), (nj = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                    default:
                      return null;
                    case "keypress":
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return nP && "ko" !== t.locale ? null : t.data;
                  }
                })(e, n)) &&
              0 < (r = rS(r, "onBeforeInput")).length &&
              ((a = new nd("onBeforeInput", "beforeinput", null, n, a)),
              l.push({ event: a, listeners: r }),
              (a.data = v));
        }
        rh(l, t);
      });
    }
    function rx(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function rS(e, t) {
      for (var n = t + "Capture", r = []; null !== e; ) {
        var a = e,
          o = a.stateNode;
        5 === a.tag &&
          null !== o &&
          ((a = o),
          null != (o = eK(e, n)) && r.unshift(rx(e, o, a)),
          null != (o = eK(e, t)) && r.push(rx(e, o, a))),
          (e = e.return);
      }
      return r;
    }
    function rk(e) {
      if (null === e) return null;
      do e = e.return;
      while (e && 5 !== e.tag);
      return e || null;
    }
    function rE(e, t, n, r, a) {
      for (var o = t._reactName, l = []; null !== n && n !== r; ) {
        var i = n,
          u = i.alternate,
          s = i.stateNode;
        if (null !== u && u === r) break;
        5 === i.tag &&
          null !== s &&
          ((i = s),
          a
            ? null != (u = eK(n, o)) && l.unshift(rx(n, u, i))
            : a || (null != (u = eK(n, o)) && l.push(rx(n, u, i)))),
          (n = n.return);
      }
      0 !== l.length && e.push({ event: t, listeners: l });
    }
    var r_ = /\r\n?/g,
      rC = /\u0000|\uFFFD/g;
    function rP(e) {
      return ("string" == typeof e ? e : "" + e)
        .replace(r_, "\n")
        .replace(rC, "");
    }
    function rT(e, t, n) {
      if (((t = rP(t)), rP(e) !== t && n)) throw Error(f(425));
    }
    function rN() {}
    var rR = null,
      rj = null;
    function rO(e, t) {
      return (
        "textarea" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var rD = "function" == typeof setTimeout ? setTimeout : void 0,
      rL = "function" == typeof clearTimeout ? clearTimeout : void 0,
      rz = "function" == typeof Promise ? Promise : void 0,
      rM =
        "function" == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== rz
          ? function (e) {
              return rz.resolve(null).then(e).catch(rF);
            }
          : rD;
    function rF(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function rI(e, t) {
      var n = t,
        r = 0;
      do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && 8 === a.nodeType)) {
          if ("/$" === (n = a.data)) {
            if (0 === r) {
              e.removeChild(a), tQ(t);
              return;
            }
            r--;
          } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
        }
        n = a;
      } while (n);
      tQ(t);
    }
    function rU(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
          if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
          if ("/$" === t) return null;
        }
      }
      return e;
    }
    function rA(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("$" === n || "$!" === n || "$?" === n) {
            if (0 === t) return e;
            t--;
          } else "/$" === n && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var rB = Math.random().toString(36).slice(2),
      r$ = "__reactFiber$" + rB,
      rW = "__reactProps$" + rB,
      rV = "__reactContainer$" + rB,
      rH = "__reactEvents$" + rB,
      rQ = "__reactListeners$" + rB,
      rq = "__reactHandles$" + rB;
    function rK(e) {
      var t = e[r$];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[rV] || n[r$])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = rA(e); null !== e; ) {
              if ((n = e[r$])) return n;
              e = rA(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function rG(e) {
      return (e = e[r$] || e[rV]) &&
        (5 === e.tag || 6 === e.tag || 13 === e.tag || 3 === e.tag)
        ? e
        : null;
    }
    function rY(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(f(33));
    }
    function rX(e) {
      return e[rW] || null;
    }
    var rJ = [],
      rZ = -1;
    function r0(e) {
      return { current: e };
    }
    function r1(e) {
      0 > rZ || ((e.current = rJ[rZ]), (rJ[rZ] = null), rZ--);
    }
    function r2(e, t) {
      (rJ[++rZ] = e.current), (e.current = t);
    }
    var r3 = {},
      r4 = r0(r3),
      r5 = r0(!1),
      r8 = r3;
    function r6(e, t) {
      var n = e.type.contextTypes;
      if (!n) return r3;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var a,
        o = {};
      for (a in n) o[a] = t[a];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
      );
    }
    function r7(e) {
      return null != (e = e.childContextTypes);
    }
    function r9() {
      r1(r5), r1(r4);
    }
    function ae(e, t, n) {
      if (r4.current !== r3) throw Error(f(168));
      r2(r4, t), r2(r5, n);
    }
    function at(e, t, n) {
      var r = e.stateNode;
      if (((t = t.childContextTypes), "function" != typeof r.getChildContext))
        return n;
      for (var a in (r = r.getChildContext()))
        if (!(a in t))
          throw Error(
            f(
              108,
              (function (e) {
                var t = e.type;
                switch (e.tag) {
                  case 24:
                    return "Cache";
                  case 9:
                    return (t.displayName || "Context") + ".Consumer";
                  case 10:
                    return (t._context.displayName || "Context") + ".Provider";
                  case 18:
                    return "DehydratedFragment";
                  case 11:
                    return (
                      (e = (e = t.render).displayName || e.name || ""),
                      t.displayName ||
                        ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
                    );
                  case 7:
                    return "Fragment";
                  case 5:
                    return t;
                  case 4:
                    return "Portal";
                  case 3:
                    return "Root";
                  case 6:
                    return "Text";
                  case 16:
                    return (function e(t) {
                      if (null == t) return null;
                      if ("function" == typeof t)
                        return t.displayName || t.name || null;
                      if ("string" == typeof t) return t;
                      switch (t) {
                        case R:
                          return "Fragment";
                        case N:
                          return "Portal";
                        case O:
                          return "Profiler";
                        case j:
                          return "StrictMode";
                        case M:
                          return "Suspense";
                        case F:
                          return "SuspenseList";
                      }
                      if ("object" == typeof t)
                        switch (t.$$typeof) {
                          case L:
                            return (t.displayName || "Context") + ".Consumer";
                          case D:
                            return (
                              (t._context.displayName || "Context") +
                              ".Provider"
                            );
                          case z:
                            var n = t.render;
                            return (
                              (t = t.displayName) ||
                                (t =
                                  "" !== (t = n.displayName || n.name || "")
                                    ? "ForwardRef(" + t + ")"
                                    : "ForwardRef"),
                              t
                            );
                          case I:
                            return null !== (n = t.displayName || null)
                              ? n
                              : e(t.type) || "Memo";
                          case U:
                            (n = t._payload), (t = t._init);
                            try {
                              return e(t(n));
                            } catch (e) {}
                        }
                      return null;
                    })(t);
                  case 8:
                    return t === j ? "StrictMode" : "Mode";
                  case 22:
                    return "Offscreen";
                  case 12:
                    return "Profiler";
                  case 21:
                    return "Scope";
                  case 13:
                    return "Suspense";
                  case 19:
                    return "SuspenseList";
                  case 25:
                    return "TracingMarker";
                  case 1:
                  case 0:
                  case 17:
                  case 2:
                  case 14:
                  case 15:
                    if ("function" == typeof t)
                      return t.displayName || t.name || null;
                    if ("string" == typeof t) return t;
                }
                return null;
              })(e) || "Unknown",
              a
            )
          );
      return en({}, n, r);
    }
    function an(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          r3),
        (r8 = r4.current),
        r2(r4, e),
        r2(r5, r5.current),
        !0
      );
    }
    function ar(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(f(169));
      n
        ? ((e = at(e, t, r8)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          r1(r5),
          r1(r4),
          r2(r4, e))
        : r1(r5),
        r2(r5, n);
    }
    var aa = null,
      ao = !1,
      al = !1;
    function ai(e) {
      null === aa ? (aa = [e]) : aa.push(e);
    }
    function au() {
      if (!al && null !== aa) {
        al = !0;
        var e = 0,
          t = tk;
        try {
          var n = aa;
          for (tk = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (null !== r);
          }
          (aa = null), (ao = !1);
        } catch (t) {
          throw (null !== aa && (aa = aa.slice(e + 1)), e7(ta, au), t);
        } finally {
          (tk = t), (al = !1);
        }
      }
      return null;
    }
    var as = [],
      ac = 0,
      af = null,
      ad = 0,
      ap = [],
      ah = 0,
      am = null,
      av = 1,
      ay = "";
    function ag(e, t) {
      (as[ac++] = ad), (as[ac++] = af), (af = e), (ad = t);
    }
    function ab(e, t, n) {
      (ap[ah++] = av), (ap[ah++] = ay), (ap[ah++] = am), (am = e);
      var r = av;
      e = ay;
      var a = 32 - tf(r) - 1;
      (r &= ~(1 << a)), (n += 1);
      var o = 32 - tf(t) + a;
      if (30 < o) {
        var l = a - (a % 5);
        (o = (r & ((1 << l) - 1)).toString(32)),
          (r >>= l),
          (a -= l),
          (av = (1 << (32 - tf(t) + a)) | (n << a) | r),
          (ay = o + e);
      } else (av = (1 << o) | (n << a) | r), (ay = e);
    }
    function aw(e) {
      null !== e.return && (ag(e, 1), ab(e, 1, 0));
    }
    function ax(e) {
      for (; e === af; )
        (af = as[--ac]), (as[ac] = null), (ad = as[--ac]), (as[ac] = null);
      for (; e === am; )
        (am = ap[--ah]),
          (ap[ah] = null),
          (ay = ap[--ah]),
          (ap[ah] = null),
          (av = ap[--ah]),
          (ap[ah] = null);
    }
    var aS = null,
      ak = null,
      aE = !1,
      a_ = null;
    function aC(e, t) {
      var n = i7(5, null, null, 0);
      (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions)
          ? ((e.deletions = [n]), (e.flags |= 16))
          : t.push(n);
    }
    function aP(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t =
                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) &&
            ((e.stateNode = t), (aS = e), (ak = rU(t.firstChild)), !0)
          );
        case 6:
          return (
            null !==
              (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), (aS = e), (ak = null), !0)
          );
        case 13:
          return (
            null !== (t = 8 !== t.nodeType ? null : t) &&
            ((n = null !== am ? { id: av, overflow: ay } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            ((n = i7(18, null, null, 0)).stateNode = t),
            (n.return = e),
            (e.child = n),
            (aS = e),
            (ak = null),
            !0)
          );
        default:
          return !1;
      }
    }
    function aT(e) {
      return 0 != (1 & e.mode) && 0 == (128 & e.flags);
    }
    function aN(e) {
      if (aE) {
        var t = ak;
        if (t) {
          var n = t;
          if (!aP(e, t)) {
            if (aT(e)) throw Error(f(418));
            t = rU(n.nextSibling);
            var r = aS;
            t && aP(e, t)
              ? aC(r, n)
              : ((e.flags = (-4097 & e.flags) | 2), (aE = !1), (aS = e));
          }
        } else {
          if (aT(e)) throw Error(f(418));
          (e.flags = (-4097 & e.flags) | 2), (aE = !1), (aS = e);
        }
      }
    }
    function aR(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      aS = e;
    }
    function aj(e) {
      if (e !== aS) return !1;
      if (!aE) return aR(e), (aE = !0), !1;
      if (
        ((t = 3 !== e.tag) &&
          !(t = 5 !== e.tag) &&
          (t =
            "head" !== (t = e.type) &&
            "body" !== t &&
            !rO(e.type, e.memoizedProps)),
        t && (t = ak))
      ) {
        if (aT(e)) throw (aO(), Error(f(418)));
        for (; t; ) aC(e, t), (t = rU(t.nextSibling));
      }
      if ((aR(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(f(317));
        e: {
          for (t = 0, e = e.nextSibling; e; ) {
            if (8 === e.nodeType) {
              var t,
                n = e.data;
              if ("/$" === n) {
                if (0 === t) {
                  ak = rU(e.nextSibling);
                  break e;
                }
                t--;
              } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
            }
            e = e.nextSibling;
          }
          ak = null;
        }
      } else ak = aS ? rU(e.stateNode.nextSibling) : null;
      return !0;
    }
    function aO() {
      for (var e = ak; e; ) e = rU(e.nextSibling);
    }
    function aD() {
      (ak = aS = null), (aE = !1);
    }
    function aL(e) {
      null === a_ ? (a_ = [e]) : a_.push(e);
    }
    var az = C.ReactCurrentBatchConfig;
    function aM(e, t) {
      if (e && e.defaultProps)
        for (var n in ((t = en({}, t)), (e = e.defaultProps)))
          void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    var aF = r0(null),
      aI = null,
      aU = null,
      aA = null;
    function aB() {
      aA = aU = aI = null;
    }
    function a$(e) {
      var t = aF.current;
      r1(aF), (e._currentValue = t);
    }
    function aW(e, t, n) {
      for (; null !== e; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
            : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function aV(e, t) {
      (aI = e),
        (aA = aU = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (0 != (e.lanes & t) && (lb = !0), (e.firstContext = null));
    }
    function aH(e) {
      var t = e._currentValue;
      if (aA !== e) {
        if (((e = { context: e, memoizedValue: t, next: null }), null === aU)) {
          if (null === aI) throw Error(f(308));
          (aU = e), (aI.dependencies = { lanes: 0, firstContext: e });
        } else aU = aU.next = e;
      }
      return t;
    }
    var aQ = null;
    function aq(e) {
      null === aQ ? (aQ = [e]) : aQ.push(e);
    }
    function aK(e, t, n, r) {
      var a = t.interleaved;
      return (
        null === a ? ((n.next = n), aq(t)) : ((n.next = a.next), (a.next = n)),
        (t.interleaved = n),
        aG(e, r)
      );
    }
    function aG(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t),
          null !== (n = e.alternate) && (n.childLanes |= t),
          (n = e),
          (e = e.return);
      return 3 === n.tag ? n.stateNode : null;
    }
    var aY = !1;
    function aX(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function aJ(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function aZ(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function a0(e, t, n) {
      var r = e.updateQueue;
      if (null === r) return null;
      if (((r = r.shared), 0 != (2 & ii))) {
        var a = r.pending;
        return (
          null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
          (r.pending = t),
          aG(e, n)
        );
      }
      return (
        null === (a = r.interleaved)
          ? ((t.next = t), aq(r))
          : ((t.next = a.next), (a.next = t)),
        (r.interleaved = t),
        aG(e, n)
      );
    }
    function a1(e, t, n) {
      if (
        null !== (t = t.updateQueue) &&
        ((t = t.shared), 0 != (4194240 & n))
      ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), tS(e, n);
      }
    }
    function a2(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (null !== r && n === (r = r.updateQueue)) {
        var a = null,
          o = null;
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var l = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
          } while (null !== n);
          null === o ? (a = o = t) : (o = o.next = t);
        } else a = o = t;
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: o,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n);
        return;
      }
      null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    function a3(e, t, n, r) {
      var a = e.updateQueue;
      aY = !1;
      var o = a.firstBaseUpdate,
        l = a.lastBaseUpdate,
        i = a.shared.pending;
      if (null !== i) {
        a.shared.pending = null;
        var u = i,
          s = u.next;
        (u.next = null), null === l ? (o = s) : (l.next = s), (l = u);
        var c = e.alternate;
        null !== c &&
          (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
          (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
          (c.lastBaseUpdate = u));
      }
      if (null !== o) {
        var f = a.baseState;
        for (l = 0, c = s = u = null, i = o; ; ) {
          var d = i.lane,
            p = i.eventTime;
          if ((r & d) === d) {
            null !== c &&
              (c = c.next = {
                eventTime: p,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              });
            e: {
              var h = e,
                m = i;
              switch (((d = t), (p = n), m.tag)) {
                case 1:
                  if ("function" == typeof (h = m.payload)) {
                    f = h.call(p, f, d);
                    break e;
                  }
                  f = h;
                  break e;
                case 3:
                  h.flags = (-65537 & h.flags) | 128;
                case 0:
                  if (
                    null ==
                    (d =
                      "function" == typeof (h = m.payload)
                        ? h.call(p, f, d)
                        : h)
                  )
                    break e;
                  f = en({}, f, d);
                  break e;
                case 2:
                  aY = !0;
              }
            }
            null !== i.callback &&
              0 !== i.lane &&
              ((e.flags |= 64),
              null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
          } else
            (p = {
              eventTime: p,
              lane: d,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            }),
              null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
              (l |= d);
          if (null === (i = i.next)) {
            if (null === (i = a.shared.pending)) break;
            (i = (d = i).next),
              (d.next = null),
              (a.lastBaseUpdate = d),
              (a.shared.pending = null);
          }
        }
        if (
          (null === c && (u = f),
          (a.baseState = u),
          (a.firstBaseUpdate = s),
          (a.lastBaseUpdate = c),
          null !== (t = a.shared.interleaved))
        ) {
          a = t;
          do (l |= a.lane), (a = a.next);
          while (a !== t);
        } else null === o && (a.shared.lanes = 0);
        (iv |= l), (e.lanes = l), (e.memoizedState = f);
      }
    }
    function a4(e, t, n) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            a = r.callback;
          if (null !== a) {
            if (((r.callback = null), (r = n), "function" != typeof a))
              throw Error(f(191, a));
            a.call(r);
          }
        }
    }
    var a5 = new s.Component().refs;
    function a8(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : en({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
    }
    var a6 = {
      isMounted: function (e) {
        return !!(e = e._reactInternals) && e4(e) === e;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = iL(),
          a = iz(e),
          o = aZ(r, a);
        (o.payload = t),
          null != n && (o.callback = n),
          null !== (t = a0(e, o, a)) && (iM(t, e, a, r), a1(t, e, a));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = iL(),
          a = iz(e),
          o = aZ(r, a);
        (o.tag = 1),
          (o.payload = t),
          null != n && (o.callback = n),
          null !== (t = a0(e, o, a)) && (iM(t, e, a, r), a1(t, e, a));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = iL(),
          r = iz(e),
          a = aZ(n, r);
        (a.tag = 2),
          null != t && (a.callback = t),
          null !== (t = a0(e, a, r)) && (iM(t, e, r, n), a1(t, e, r));
      },
    };
    function a7(e, t, n, r, a, o, l) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, o, l)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !nY(n, r) ||
            !nY(a, o);
    }
    function a9(e, t, n) {
      var r = !1,
        a = r3,
        o = t.contextType;
      return (
        "object" == typeof o && null !== o
          ? (o = aH(o))
          : ((a = r7(t) ? r8 : r4.current),
            (o = (r = null != (r = t.contextTypes)) ? r6(e, a) : r3)),
        (t = new t(n, o)),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = a6),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      );
    }
    function oe(e, t, n, r) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && a6.enqueueReplaceState(t, t.state, null);
    }
    function ot(e, t, n, r) {
      var a = e.stateNode;
      (a.props = n), (a.state = e.memoizedState), (a.refs = a5), aX(e);
      var o = t.contextType;
      "object" == typeof o && null !== o
        ? (a.context = aH(o))
        : ((o = r7(t) ? r8 : r4.current), (a.context = r6(e, o))),
        (a.state = e.memoizedState),
        "function" == typeof (o = t.getDerivedStateFromProps) &&
          (a8(e, t, o, n), (a.state = e.memoizedState)),
        "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof a.getSnapshotBeforeUpdate ||
          ("function" != typeof a.UNSAFE_componentWillMount &&
            "function" != typeof a.componentWillMount) ||
          ((t = a.state),
          "function" == typeof a.componentWillMount && a.componentWillMount(),
          "function" == typeof a.UNSAFE_componentWillMount &&
            a.UNSAFE_componentWillMount(),
          t !== a.state && a6.enqueueReplaceState(a, a.state, null),
          a3(e, n, a, r),
          (a.state = e.memoizedState)),
        "function" == typeof a.componentDidMount && (e.flags |= 4194308);
    }
    function on(e, t, n) {
      if (
        null !== (e = n.ref) &&
        "function" != typeof e &&
        "object" != typeof e
      ) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(f(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(f(147, e));
          var a = r,
            o = "" + e;
          return null !== t &&
            null !== t.ref &&
            "function" == typeof t.ref &&
            t.ref._stringRef === o
            ? t.ref
            : (((t = function (e) {
                var t = a.refs;
                t === a5 && (t = a.refs = {}),
                  null === e ? delete t[o] : (t[o] = e);
              })._stringRef = o),
              t);
        }
        if ("string" != typeof e) throw Error(f(284));
        if (!n._owner) throw Error(f(290, e));
      }
      return e;
    }
    function or(e, t) {
      throw Error(
        f(
          31,
          "[object Object]" === (e = Object.prototype.toString.call(t))
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      );
    }
    function oa(e) {
      return (0, e._init)(e._payload);
    }
    function oo(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function a(e, t) {
        return ((e = ue(e, t)).index = 0), (e.sibling = null), e;
      }
      function o(t, n, r) {
        return ((t.index = r), e)
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags |= 2), n)
              : r
            : ((t.flags |= 2), n)
          : ((t.flags |= 1048576), n);
      }
      function l(t) {
        return e && null === t.alternate && (t.flags |= 2), t;
      }
      function i(e, t, n, r) {
        return (
          null === t || 6 !== t.tag
            ? ((t = ua(n, e.mode, r)).return = e)
            : ((t = a(t, n)).return = e),
          t
        );
      }
      function u(e, t, n, r) {
        var o = n.type;
        return o === R
          ? c(e, t, n.props.children, r, n.key)
          : (null !== t &&
            (t.elementType === o ||
              ("object" == typeof o &&
                null !== o &&
                o.$$typeof === U &&
                oa(o) === t.type))
              ? ((r = a(t, n.props)).ref = on(e, t, n))
              : ((r = ut(n.type, n.key, n.props, null, e.mode, r)).ref = on(
                  e,
                  t,
                  n
                )),
            (r.return = e),
            r);
      }
      function s(e, t, n, r) {
        return (
          null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
            ? ((t = uo(n, e.mode, r)).return = e)
            : ((t = a(t, n.children || [])).return = e),
          t
        );
      }
      function c(e, t, n, r, o) {
        return (
          null === t || 7 !== t.tag
            ? ((t = un(n, e.mode, r, o)).return = e)
            : ((t = a(t, n)).return = e),
          t
        );
      }
      function d(e, t, n) {
        if (("string" == typeof t && "" !== t) || "number" == typeof t)
          return ((t = ua("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case T:
              return (
                ((n = ut(t.type, t.key, t.props, null, e.mode, n)).ref = on(
                  e,
                  null,
                  t
                )),
                (n.return = e),
                n
              );
            case N:
              return ((t = uo(t, e.mode, n)).return = e), t;
            case U:
              return d(e, (0, t._init)(t._payload), n);
          }
          if (ey(t) || $(t))
            return ((t = un(t, e.mode, n, null)).return = e), t;
          or(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (("string" == typeof n && "" !== n) || "number" == typeof n)
          return null !== a ? null : i(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case T:
              return n.key === a ? u(e, t, n, r) : null;
            case N:
              return n.key === a ? s(e, t, n, r) : null;
            case U:
              return p(e, t, (a = n._init)(n._payload), r);
          }
          if (ey(n) || $(n)) return null !== a ? null : c(e, t, n, r, null);
          or(e, n);
        }
        return null;
      }
      function h(e, t, n, r, a) {
        if (("string" == typeof r && "" !== r) || "number" == typeof r)
          return i(t, (e = e.get(n) || null), "" + r, a);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case T:
              return u(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                a
              );
            case N:
              return s(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                a
              );
            case U:
              return h(e, t, n, (0, r._init)(r._payload), a);
          }
          if (ey(r) || $(r)) return c(t, (e = e.get(n) || null), r, a, null);
          or(t, r);
        }
        return null;
      }
      return function i(u, s, c, m) {
        if (
          ("object" == typeof c &&
            null !== c &&
            c.type === R &&
            null === c.key &&
            (c = c.props.children),
          "object" == typeof c && null !== c)
        ) {
          switch (c.$$typeof) {
            case T:
              e: {
                for (var v = c.key, y = s; null !== y; ) {
                  if (y.key === v) {
                    if ((v = c.type) === R) {
                      if (7 === y.tag) {
                        n(u, y.sibling),
                          ((s = a(y, c.props.children)).return = u),
                          (u = s);
                        break e;
                      }
                    } else if (
                      y.elementType === v ||
                      ("object" == typeof v &&
                        null !== v &&
                        v.$$typeof === U &&
                        oa(v) === y.type)
                    ) {
                      n(u, y.sibling),
                        ((s = a(y, c.props)).ref = on(u, y, c)),
                        (s.return = u),
                        (u = s);
                      break e;
                    }
                    n(u, y);
                    break;
                  }
                  t(u, y), (y = y.sibling);
                }
                c.type === R
                  ? (((s = un(c.props.children, u.mode, m, c.key)).return = u),
                    (u = s))
                  : (((m = ut(
                      c.type,
                      c.key,
                      c.props,
                      null,
                      u.mode,
                      m
                    )).ref = on(u, s, c)),
                    (m.return = u),
                    (u = m));
              }
              return l(u);
            case N:
              e: {
                for (y = c.key; null !== s; ) {
                  if (s.key === y) {
                    if (
                      4 === s.tag &&
                      s.stateNode.containerInfo === c.containerInfo &&
                      s.stateNode.implementation === c.implementation
                    ) {
                      n(u, s.sibling),
                        ((s = a(s, c.children || [])).return = u),
                        (u = s);
                      break e;
                    }
                    n(u, s);
                    break;
                  }
                  t(u, s), (s = s.sibling);
                }
                ((s = uo(c, u.mode, m)).return = u), (u = s);
              }
              return l(u);
            case U:
              return i(u, s, (y = c._init)(c._payload), m);
          }
          if (ey(c))
            return (function (a, l, i, u) {
              for (
                var s = null, c = null, f = l, m = (l = 0), v = null;
                null !== f && m < i.length;
                m++
              ) {
                f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
                var y = p(a, f, i[m], u);
                if (null === y) {
                  null === f && (f = v);
                  break;
                }
                e && f && null === y.alternate && t(a, f),
                  (l = o(y, l, m)),
                  null === c ? (s = y) : (c.sibling = y),
                  (c = y),
                  (f = v);
              }
              if (m === i.length) return n(a, f), aE && ag(a, m), s;
              if (null === f) {
                for (; m < i.length; m++)
                  null !== (f = d(a, i[m], u)) &&
                    ((l = o(f, l, m)),
                    null === c ? (s = f) : (c.sibling = f),
                    (c = f));
                return aE && ag(a, m), s;
              }
              for (f = r(a, f); m < i.length; m++)
                null !== (v = h(f, a, m, i[m], u)) &&
                  (e &&
                    null !== v.alternate &&
                    f.delete(null === v.key ? m : v.key),
                  (l = o(v, l, m)),
                  null === c ? (s = v) : (c.sibling = v),
                  (c = v));
              return (
                e &&
                  f.forEach(function (e) {
                    return t(a, e);
                  }),
                aE && ag(a, m),
                s
              );
            })(u, s, c, m);
          if ($(c))
            return (function (a, l, i, u) {
              var s = $(i);
              if ("function" != typeof s) throw Error(f(150));
              if (null == (i = s.call(i))) throw Error(f(151));
              for (
                var c = (s = null), m = l, v = (l = 0), y = null, g = i.next();
                null !== m && !g.done;
                v++, g = i.next()
              ) {
                m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
                var b = p(a, m, g.value, u);
                if (null === b) {
                  null === m && (m = y);
                  break;
                }
                e && m && null === b.alternate && t(a, m),
                  (l = o(b, l, v)),
                  null === c ? (s = b) : (c.sibling = b),
                  (c = b),
                  (m = y);
              }
              if (g.done) return n(a, m), aE && ag(a, v), s;
              if (null === m) {
                for (; !g.done; v++, g = i.next())
                  null !== (g = d(a, g.value, u)) &&
                    ((l = o(g, l, v)),
                    null === c ? (s = g) : (c.sibling = g),
                    (c = g));
                return aE && ag(a, v), s;
              }
              for (m = r(a, m); !g.done; v++, g = i.next())
                null !== (g = h(m, a, v, g.value, u)) &&
                  (e &&
                    null !== g.alternate &&
                    m.delete(null === g.key ? v : g.key),
                  (l = o(g, l, v)),
                  null === c ? (s = g) : (c.sibling = g),
                  (c = g));
              return (
                e &&
                  m.forEach(function (e) {
                    return t(a, e);
                  }),
                aE && ag(a, v),
                s
              );
            })(u, s, c, m);
          or(u, c);
        }
        return ("string" == typeof c && "" !== c) || "number" == typeof c
          ? ((c = "" + c),
            null !== s && 6 === s.tag
              ? (n(u, s.sibling), ((s = a(s, c)).return = u))
              : (n(u, s), ((s = ua(c, u.mode, m)).return = u)),
            l((u = s)))
          : n(u, s);
      };
    }
    var ol = oo(!0),
      oi = oo(!1),
      ou = {},
      os = r0(ou),
      oc = r0(ou),
      of = r0(ou);
    function od(e) {
      if (e === ou) throw Error(f(174));
      return e;
    }
    function op(e, t) {
      switch ((r2(of, t), r2(oc, e), r2(os, ou), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : eE(null, "");
          break;
        default:
          t = eE(
            (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
            (e = e.tagName)
          );
      }
      r1(os), r2(os, t);
    }
    function oh() {
      r1(os), r1(oc), r1(of);
    }
    function om(e) {
      od(of.current);
      var t = od(os.current),
        n = eE(t, e.type);
      t !== n && (r2(oc, e), r2(os, n));
    }
    function ov(e) {
      oc.current === e && (r1(os), r1(oc));
    }
    var oy = r0(0);
    function og(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (
            null !== n &&
            (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
          )
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (128 & t.flags)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var ob = [];
    function ow() {
      for (var e = 0; e < ob.length; e++)
        ob[e]._workInProgressVersionPrimary = null;
      ob.length = 0;
    }
    var ox = C.ReactCurrentDispatcher,
      oS = C.ReactCurrentBatchConfig,
      ok = 0,
      oE = null,
      o_ = null,
      oC = null,
      oP = !1,
      oT = !1,
      oN = 0,
      oR = 0;
    function oj() {
      throw Error(f(321));
    }
    function oO(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!nG(e[n], t[n])) return !1;
      return !0;
    }
    function oD(e, t, n, r, a, o) {
      if (
        ((ok = o),
        (oE = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ox.current = null === e || null === e.memoizedState ? ll : li),
        (e = n(r, a)),
        oT)
      ) {
        o = 0;
        do {
          if (((oT = !1), (oN = 0), 25 <= o)) throw Error(f(301));
          (o += 1),
            (oC = o_ = null),
            (t.updateQueue = null),
            (ox.current = lu),
            (e = n(r, a));
        } while (oT);
      }
      if (
        ((ox.current = lo),
        (t = null !== o_ && null !== o_.next),
        (ok = 0),
        (oC = o_ = oE = null),
        (oP = !1),
        t)
      )
        throw Error(f(300));
      return e;
    }
    function oL() {
      var e = 0 !== oN;
      return (oN = 0), e;
    }
    function oz() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return null === oC ? (oE.memoizedState = oC = e) : (oC = oC.next = e), oC;
    }
    function oM() {
      if (null === o_) {
        var e = oE.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = o_.next;
      var t = null === oC ? oE.memoizedState : oC.next;
      if (null !== t) (oC = t), (o_ = e);
      else {
        if (null === e) throw Error(f(310));
        (e = {
          memoizedState: (o_ = e).memoizedState,
          baseState: o_.baseState,
          baseQueue: o_.baseQueue,
          queue: o_.queue,
          next: null,
        }),
          null === oC ? (oE.memoizedState = oC = e) : (oC = oC.next = e);
      }
      return oC;
    }
    function oF(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function oI(e) {
      var t = oM(),
        n = t.queue;
      if (null === n) throw Error(f(311));
      n.lastRenderedReducer = e;
      var r = o_,
        a = r.baseQueue,
        o = n.pending;
      if (null !== o) {
        if (null !== a) {
          var l = a.next;
          (a.next = o.next), (o.next = l);
        }
        (r.baseQueue = a = o), (n.pending = null);
      }
      if (null !== a) {
        (o = a.next), (r = r.baseState);
        var i = (l = null),
          u = null,
          s = o;
        do {
          var c = s.lane;
          if ((ok & c) === c)
            null !== u &&
              (u = u.next = {
                lane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null,
              }),
              (r = s.hasEagerState ? s.eagerState : e(r, s.action));
          else {
            var d = {
              lane: c,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            };
            null === u ? ((i = u = d), (l = r)) : (u = u.next = d),
              (oE.lanes |= c),
              (iv |= c);
          }
          s = s.next;
        } while (null !== s && s !== o);
        null === u ? (l = r) : (u.next = i),
          nG(r, t.memoizedState) || (lb = !0),
          (t.memoizedState = r),
          (t.baseState = l),
          (t.baseQueue = u),
          (n.lastRenderedState = r);
      }
      if (null !== (e = n.interleaved)) {
        a = e;
        do (o = a.lane), (oE.lanes |= o), (iv |= o), (a = a.next);
        while (a !== e);
      } else null === a && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function oU(e) {
      var t = oM(),
        n = t.queue;
      if (null === n) throw Error(f(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (null !== a) {
        n.pending = null;
        var l = (a = a.next);
        do (o = e(o, l.action)), (l = l.next);
        while (l !== a);
        nG(o, t.memoizedState) || (lb = !0),
          (t.memoizedState = o),
          null === t.baseQueue && (t.baseState = o),
          (n.lastRenderedState = o);
      }
      return [o, r];
    }
    function oA() {}
    function oB(e, t) {
      var n = oE,
        r = oM(),
        a = t(),
        o = !nG(r.memoizedState, a);
      if (
        (o && ((r.memoizedState = a), (lb = !0)),
        (r = r.queue),
        oZ(oV.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (null !== oC && 1 & oC.memoizedState.tag))
      ) {
        if (
          ((n.flags |= 2048),
          oK(9, oW.bind(null, n, r, a, t), void 0, null),
          null === iu)
        )
          throw Error(f(349));
        0 != (30 & ok) || o$(n, t, a);
      }
      return a;
    }
    function o$(e, t, n) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = oE.updateQueue)
          ? ((t = { lastEffect: null, stores: null }),
            (oE.updateQueue = t),
            (t.stores = [e]))
          : null === (n = t.stores)
          ? (t.stores = [e])
          : n.push(e);
    }
    function oW(e, t, n, r) {
      (t.value = n), (t.getSnapshot = r), oH(t) && oQ(e);
    }
    function oV(e, t, n) {
      return n(function () {
        oH(t) && oQ(e);
      });
    }
    function oH(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !nG(e, n);
      } catch (e) {
        return !0;
      }
    }
    function oQ(e) {
      var t = aG(e, 1);
      null !== t && iM(t, e, 1, -1);
    }
    function oq(e) {
      var t = oz();
      return (
        "function" == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: oF,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = lt.bind(null, oE, e)),
        [t.memoizedState, e]
      );
    }
    function oK(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = oE.updateQueue)
          ? ((t = { lastEffect: null, stores: null }),
            (oE.updateQueue = t),
            (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function oG() {
      return oM().memoizedState;
    }
    function oY(e, t, n, r) {
      var a = oz();
      (oE.flags |= e),
        (a.memoizedState = oK(1 | t, n, void 0, void 0 === r ? null : r));
    }
    function oX(e, t, n, r) {
      var a = oM();
      r = void 0 === r ? null : r;
      var o = void 0;
      if (null !== o_) {
        var l = o_.memoizedState;
        if (((o = l.destroy), null !== r && oO(r, l.deps))) {
          a.memoizedState = oK(t, n, o, r);
          return;
        }
      }
      (oE.flags |= e), (a.memoizedState = oK(1 | t, n, o, r));
    }
    function oJ(e, t) {
      return oY(8390656, 8, e, t);
    }
    function oZ(e, t) {
      return oX(2048, 8, e, t);
    }
    function o0(e, t) {
      return oX(4, 2, e, t);
    }
    function o1(e, t) {
      return oX(4, 4, e, t);
    }
    function o2(e, t) {
      return "function" == typeof t
        ? (t((e = e())),
          function () {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
        : void 0;
    }
    function o3(e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null), oX(4, 4, o2.bind(null, t, e), n)
      );
    }
    function o4() {}
    function o5(e, t) {
      var n = oM();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && oO(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function o8(e, t) {
      var n = oM();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && oO(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function o6(e, t, n) {
      return 0 == (21 & ok)
        ? (e.baseState && ((e.baseState = !1), (lb = !0)),
          (e.memoizedState = n))
        : (nG(n, t) ||
            ((n = tb()), (oE.lanes |= n), (iv |= n), (e.baseState = !0)),
          t);
    }
    function o7(e, t) {
      var n = tk;
      (tk = 0 !== n && 4 > n ? n : 4), e(!0);
      var r = oS.transition;
      oS.transition = {};
      try {
        e(!1), t();
      } finally {
        (tk = n), (oS.transition = r);
      }
    }
    function o9() {
      return oM().memoizedState;
    }
    function le(e, t, n) {
      var r = iz(e);
      (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        ln(e)
          ? lr(t, n)
          : null !== (n = aK(e, t, n, r)) && (iM(n, e, r, iL()), la(n, t, r));
    }
    function lt(e, t, n) {
      var r = iz(e),
        a = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (ln(e)) lr(t, a);
      else {
        var o = e.alternate;
        if (
          0 === e.lanes &&
          (null === o || 0 === o.lanes) &&
          null !== (o = t.lastRenderedReducer)
        )
          try {
            var l = t.lastRenderedState,
              i = o(l, n);
            if (((a.hasEagerState = !0), (a.eagerState = i), nG(i, l))) {
              var u = t.interleaved;
              null === u
                ? ((a.next = a), aq(t))
                : ((a.next = u.next), (u.next = a)),
                (t.interleaved = a);
              return;
            }
          } catch (e) {
          } finally {
          }
        null !== (n = aK(e, t, a, r)) && (iM(n, e, r, (a = iL())), la(n, t, r));
      }
    }
    function ln(e) {
      var t = e.alternate;
      return e === oE || (null !== t && t === oE);
    }
    function lr(e, t) {
      oT = oP = !0;
      var n = e.pending;
      null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
    }
    function la(e, t, n) {
      if (0 != (4194240 & n)) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), tS(e, n);
      }
    }
    var lo = {
        readContext: aH,
        useCallback: oj,
        useContext: oj,
        useEffect: oj,
        useImperativeHandle: oj,
        useInsertionEffect: oj,
        useLayoutEffect: oj,
        useMemo: oj,
        useReducer: oj,
        useRef: oj,
        useState: oj,
        useDebugValue: oj,
        useDeferredValue: oj,
        useTransition: oj,
        useMutableSource: oj,
        useSyncExternalStore: oj,
        useId: oj,
        unstable_isNewReconciler: !1,
      },
      ll = {
        readContext: aH,
        useCallback: function (e, t) {
          return (oz().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: aH,
        useEffect: oJ,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            oY(4194308, 4, o2.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return oY(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return oY(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = oz();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = oz();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = le.bind(null, oE, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (e = { current: e }), (oz().memoizedState = e);
        },
        useState: oq,
        useDebugValue: o4,
        useDeferredValue: function (e) {
          return (oz().memoizedState = e);
        },
        useTransition: function () {
          var e = oq(!1),
            t = e[0];
          return (e = o7.bind(null, e[1])), (oz().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var r = oE,
            a = oz();
          if (aE) {
            if (void 0 === n) throw Error(f(407));
            n = n();
          } else {
            if (((n = t()), null === iu)) throw Error(f(349));
            0 != (30 & ok) || o$(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            oJ(oV.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            oK(9, oW.bind(null, r, o, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = oz(),
            t = iu.identifierPrefix;
          if (aE) {
            var n = ay,
              r = av;
            (t =
              ":" +
              t +
              "R" +
              (n = (r & ~(1 << (32 - tf(r) - 1))).toString(32) + n)),
              0 < (n = oN++) && (t += "H" + n.toString(32)),
              (t += ":");
          } else t = ":" + t + "r" + (n = oR++).toString(32) + ":";
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      li = {
        readContext: aH,
        useCallback: o5,
        useContext: aH,
        useEffect: oZ,
        useImperativeHandle: o3,
        useInsertionEffect: o0,
        useLayoutEffect: o1,
        useMemo: o8,
        useReducer: oI,
        useRef: oG,
        useState: function () {
          return oI(oF);
        },
        useDebugValue: o4,
        useDeferredValue: function (e) {
          return o6(oM(), o_.memoizedState, e);
        },
        useTransition: function () {
          return [oI(oF)[0], oM().memoizedState];
        },
        useMutableSource: oA,
        useSyncExternalStore: oB,
        useId: o9,
        unstable_isNewReconciler: !1,
      },
      lu = {
        readContext: aH,
        useCallback: o5,
        useContext: aH,
        useEffect: oZ,
        useImperativeHandle: o3,
        useInsertionEffect: o0,
        useLayoutEffect: o1,
        useMemo: o8,
        useReducer: oU,
        useRef: oG,
        useState: function () {
          return oU(oF);
        },
        useDebugValue: o4,
        useDeferredValue: function (e) {
          var t = oM();
          return null === o_
            ? (t.memoizedState = e)
            : o6(t, o_.memoizedState, e);
        },
        useTransition: function () {
          return [oU(oF)[0], oM().memoizedState];
        },
        useMutableSource: oA,
        useSyncExternalStore: oB,
        useId: o9,
        unstable_isNewReconciler: !1,
      };
    function ls(e, t) {
      try {
        var n = "",
          r = t;
        do
          (n += (function (e) {
            switch (e.tag) {
              case 5:
                return er(e.type);
              case 16:
                return er("Lazy");
              case 13:
                return er("Suspense");
              case 19:
                return er("SuspenseList");
              case 0:
              case 2:
              case 15:
                return (e = eo(e.type, !1));
              case 11:
                return (e = eo(e.type.render, !1));
              case 1:
                return (e = eo(e.type, !0));
              default:
                return "";
            }
          })(r)),
            (r = r.return);
        while (r);
        var a = n;
      } catch (e) {
        a = "\nError generating stack: " + e.message + "\n" + e.stack;
      }
      return { value: e, source: t, stack: a, digest: null };
    }
    function lc(e, t, n) {
      return {
        value: e,
        source: null,
        stack: null != n ? n : null,
        digest: null != t ? t : null,
      };
    }
    function lf(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var ld = "function" == typeof WeakMap ? WeakMap : Map;
    function lp(e, t, n) {
      ((n = aZ(-1, n)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function () {
          iE || ((iE = !0), (i_ = r)), lf(e, t);
        }),
        n
      );
    }
    function lh(e, t, n) {
      (n = aZ(-1, n)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var a = t.value;
        (n.payload = function () {
          return r(a);
        }),
          (n.callback = function () {
            lf(e, t);
          });
      }
      var o = e.stateNode;
      return (
        null !== o &&
          "function" == typeof o.componentDidCatch &&
          (n.callback = function () {
            lf(e, t),
              "function" != typeof r &&
                (null === iC ? (iC = new Set([this])) : iC.add(this));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: null !== n ? n : "",
            });
          }),
        n
      );
    }
    function lm(e, t, n) {
      var r = e.pingCache;
      if (null === r) {
        r = e.pingCache = new ld();
        var a = new Set();
        r.set(t, a);
      } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
      a.has(n) || (a.add(n), (e = i3.bind(null, e, t, n)), t.then(e, e));
    }
    function lv(e) {
      do {
        var t;
        if (
          ((t = 13 === e.tag) &&
            (t = null === (t = e.memoizedState) || null !== t.dehydrated),
          t)
        )
          return e;
        e = e.return;
      } while (null !== e);
      return null;
    }
    function ly(e, t, n, r, a) {
      return (
        0 == (1 & e.mode)
          ? e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              1 === n.tag &&
                (null === n.alternate
                  ? (n.tag = 17)
                  : (((t = aZ(-1, 1)).tag = 2), a0(n, t, 1))),
              (n.lanes |= 1))
          : ((e.flags |= 65536), (e.lanes = a)),
        e
      );
    }
    var lg = C.ReactCurrentOwner,
      lb = !1;
    function lw(e, t, n, r) {
      t.child = null === e ? oi(t, null, n, r) : ol(t, e.child, n, r);
    }
    function lx(e, t, n, r, a) {
      n = n.render;
      var o = t.ref;
      return (aV(t, a),
      (r = oD(e, t, n, r, o, a)),
      (n = oL()),
      null === e || lb)
        ? (aE && n && aw(t), (t.flags |= 1), lw(e, t, r, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          lA(e, t, a));
    }
    function lS(e, t, n, r, a) {
      if (null === e) {
        var o = n.type;
        return "function" != typeof o ||
          i9(o) ||
          void 0 !== o.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = ut(n.type, null, r, t, t.mode, a)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = o), lk(e, t, o, r, a));
      }
      if (((o = e.child), 0 == (e.lanes & a))) {
        var l = o.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : nY)(l, r) && e.ref === t.ref)
          return lA(e, t, a);
      }
      return (
        (t.flags |= 1),
        ((e = ue(o, r)).ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function lk(e, t, n, r, a) {
      if (null !== e) {
        var o = e.memoizedProps;
        if (nY(o, r) && e.ref === t.ref) {
          if (((lb = !1), (t.pendingProps = r = o), 0 == (e.lanes & a)))
            return (t.lanes = e.lanes), lA(e, t, a);
          0 != (131072 & e.flags) && (lb = !0);
        }
      }
      return lC(e, t, n, r, a);
    }
    function lE(e, t, n) {
      var r = t.pendingProps,
        a = r.children,
        o = null !== e ? e.memoizedState : null;
      if ("hidden" === r.mode) {
        if (0 == (1 & t.mode))
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            r2(ip, id),
            (id |= n);
        else {
          if (0 == (1073741824 & n))
            return (
              (e = null !== o ? o.baseLanes | n : n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              r2(ip, id),
              (id |= e),
              null
            );
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (r = null !== o ? o.baseLanes : n),
            r2(ip, id),
            (id |= r);
        }
      } else null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), r2(ip, id), (id |= r);
      return lw(e, t, a, n), t.child;
    }
    function l_(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function lC(e, t, n, r, a) {
      var o = r7(n) ? r8 : r4.current;
      return ((o = r6(t, o)),
      aV(t, a),
      (n = oD(e, t, n, r, o, a)),
      (r = oL()),
      null === e || lb)
        ? (aE && r && aw(t), (t.flags |= 1), lw(e, t, n, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          lA(e, t, a));
    }
    function lP(e, t, n, r, a) {
      if (r7(n)) {
        var o = !0;
        an(t);
      } else o = !1;
      if ((aV(t, a), null === t.stateNode))
        lU(e, t), a9(t, n, r), ot(t, n, r, a), (r = !0);
      else if (null === e) {
        var l = t.stateNode,
          i = t.memoizedProps;
        l.props = i;
        var u = l.context,
          s = n.contextType;
        s =
          "object" == typeof s && null !== s
            ? aH(s)
            : r6(t, (s = r7(n) ? r8 : r4.current));
        var c = n.getDerivedStateFromProps,
          f =
            "function" == typeof c ||
            "function" == typeof l.getSnapshotBeforeUpdate;
        f ||
          ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
            "function" != typeof l.componentWillReceiveProps) ||
          ((i !== r || u !== s) && oe(t, l, r, s)),
          (aY = !1);
        var d = t.memoizedState;
        (l.state = d),
          a3(t, r, l, a),
          (u = t.memoizedState),
          i !== r || d !== u || r5.current || aY
            ? ("function" == typeof c &&
                (a8(t, n, c, r), (u = t.memoizedState)),
              (i = aY || a7(t, n, i, r, d, u, s))
                ? (f ||
                    ("function" != typeof l.UNSAFE_componentWillMount &&
                      "function" != typeof l.componentWillMount) ||
                    ("function" == typeof l.componentWillMount &&
                      l.componentWillMount(),
                    "function" == typeof l.UNSAFE_componentWillMount &&
                      l.UNSAFE_componentWillMount()),
                  "function" == typeof l.componentDidMount &&
                    (t.flags |= 4194308))
                : ("function" == typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = u)),
              (l.props = r),
              (l.state = u),
              (l.context = s),
              (r = i))
            : ("function" == typeof l.componentDidMount && (t.flags |= 4194308),
              (r = !1));
      } else {
        (l = t.stateNode),
          aJ(e, t),
          (i = t.memoizedProps),
          (s = t.type === t.elementType ? i : aM(t.type, i)),
          (l.props = s),
          (f = t.pendingProps),
          (d = l.context),
          (u =
            "object" == typeof (u = n.contextType) && null !== u
              ? aH(u)
              : r6(t, (u = r7(n) ? r8 : r4.current)));
        var p = n.getDerivedStateFromProps;
        (c =
          "function" == typeof p ||
          "function" == typeof l.getSnapshotBeforeUpdate) ||
          ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
            "function" != typeof l.componentWillReceiveProps) ||
          ((i !== f || d !== u) && oe(t, l, r, u)),
          (aY = !1),
          (d = t.memoizedState),
          (l.state = d),
          a3(t, r, l, a);
        var h = t.memoizedState;
        i !== f || d !== h || r5.current || aY
          ? ("function" == typeof p && (a8(t, n, p, r), (h = t.memoizedState)),
            (s = aY || a7(t, n, s, r, d, h, u) || !1)
              ? (c ||
                  ("function" != typeof l.UNSAFE_componentWillUpdate &&
                    "function" != typeof l.componentWillUpdate) ||
                  ("function" == typeof l.componentWillUpdate &&
                    l.componentWillUpdate(r, h, u),
                  "function" == typeof l.UNSAFE_componentWillUpdate &&
                    l.UNSAFE_componentWillUpdate(r, h, u)),
                "function" == typeof l.componentDidUpdate && (t.flags |= 4),
                "function" == typeof l.getSnapshotBeforeUpdate &&
                  (t.flags |= 1024))
              : ("function" != typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = h)),
            (l.props = r),
            (l.state = h),
            (l.context = u),
            (r = s))
          : ("function" != typeof l.componentDidUpdate ||
              (i === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            "function" != typeof l.getSnapshotBeforeUpdate ||
              (i === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return lT(e, t, n, r, o, a);
    }
    function lT(e, t, n, r, a, o) {
      l_(e, t);
      var l = 0 != (128 & t.flags);
      if (!r && !l) return a && ar(t, n, !1), lA(e, t, o);
      (r = t.stateNode), (lg.current = t);
      var i =
        l && "function" != typeof n.getDerivedStateFromError
          ? null
          : r.render();
      return (
        (t.flags |= 1),
        null !== e && l
          ? ((t.child = ol(t, e.child, null, o)), (t.child = ol(t, null, i, o)))
          : lw(e, t, i, o),
        (t.memoizedState = r.state),
        a && ar(t, n, !0),
        t.child
      );
    }
    function lN(e) {
      var t = e.stateNode;
      t.pendingContext
        ? ae(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && ae(e, t.context, !1),
        op(e, t.containerInfo);
    }
    function lR(e, t, n, r, a) {
      return aD(), aL(a), (t.flags |= 256), lw(e, t, n, r), t.child;
    }
    var lj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function lO(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function lD(e, t, n) {
      var r,
        a = t.pendingProps,
        o = oy.current,
        l = !1,
        i = 0 != (128 & t.flags);
      if (
        ((r = i) ||
          (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
        r
          ? ((l = !0), (t.flags &= -129))
          : (null === e || null !== e.memoizedState) && (o |= 1),
        r2(oy, 1 & o),
        null === e)
      )
        return (aN(t),
        null !== (e = t.memoizedState) && null !== (e = e.dehydrated))
          ? (0 == (1 & t.mode)
              ? (t.lanes = 1)
              : "$!" === e.data
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((i = a.children),
            (e = a.fallback),
            l
              ? ((a = t.mode),
                (l = t.child),
                (i = { mode: "hidden", children: i }),
                0 == (1 & a) && null !== l
                  ? ((l.childLanes = 0), (l.pendingProps = i))
                  : (l = ur(i, a, 0, null)),
                (e = un(e, a, n, null)),
                (l.return = t),
                (e.return = t),
                (l.sibling = e),
                (t.child = l),
                (t.child.memoizedState = lO(n)),
                (t.memoizedState = lj),
                e)
              : lL(t, i));
      if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
        return (function (e, t, n, r, a, o, l) {
          if (n)
            return 256 & t.flags
              ? ((t.flags &= -257), lz(e, t, l, (r = lc(Error(f(422))))))
              : null !== t.memoizedState
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((o = r.fallback),
                (a = t.mode),
                (r = ur({ mode: "visible", children: r.children }, a, 0, null)),
                (o = un(o, a, l, null)),
                (o.flags |= 2),
                (r.return = t),
                (o.return = t),
                (r.sibling = o),
                (t.child = r),
                0 != (1 & t.mode) && ol(t, e.child, null, l),
                (t.child.memoizedState = lO(l)),
                (t.memoizedState = lj),
                o);
          if (0 == (1 & t.mode)) return lz(e, t, l, null);
          if ("$!" === a.data) {
            if ((r = a.nextSibling && a.nextSibling.dataset)) var i = r.dgst;
            return (
              (r = i), lz(e, t, l, (r = lc((o = Error(f(419))), r, void 0)))
            );
          }
          if (((i = 0 != (l & e.childLanes)), lb || i)) {
            if (null !== (r = iu)) {
              switch (l & -l) {
                case 4:
                  a = 2;
                  break;
                case 16:
                  a = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  a = 32;
                  break;
                case 536870912:
                  a = 268435456;
                  break;
                default:
                  a = 0;
              }
              0 !== (a = 0 != (a & (r.suspendedLanes | l)) ? 0 : a) &&
                a !== o.retryLane &&
                ((o.retryLane = a), aG(e, a), iM(r, e, a, -1));
            }
            return iG(), lz(e, t, l, (r = lc(Error(f(421)))));
          }
          return "$?" === a.data
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = i5.bind(null, e)),
              (a._reactRetry = t),
              null)
            : ((e = o.treeContext),
              (ak = rU(a.nextSibling)),
              (aS = t),
              (aE = !0),
              (a_ = null),
              null !== e &&
                ((ap[ah++] = av),
                (ap[ah++] = ay),
                (ap[ah++] = am),
                (av = e.id),
                (ay = e.overflow),
                (am = t)),
              (t = lL(t, r.children)),
              (t.flags |= 4096),
              t);
        })(e, t, i, a, r, o, n);
      if (l) {
        (l = a.fallback), (i = t.mode), (r = (o = e.child).sibling);
        var u = { mode: "hidden", children: a.children };
        return (
          0 == (1 & i) && t.child !== o
            ? (((a = t.child).childLanes = 0),
              (a.pendingProps = u),
              (t.deletions = null))
            : ((a = ue(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
          null !== r
            ? (l = ue(r, l))
            : ((l = un(l, i, n, null)), (l.flags |= 2)),
          (l.return = t),
          (a.return = t),
          (a.sibling = l),
          (t.child = a),
          (a = l),
          (l = t.child),
          (i =
            null === (i = e.child.memoizedState)
              ? lO(n)
              : {
                  baseLanes: i.baseLanes | n,
                  cachePool: null,
                  transitions: i.transitions,
                }),
          (l.memoizedState = i),
          (l.childLanes = e.childLanes & ~n),
          (t.memoizedState = lj),
          a
        );
      }
      return (
        (e = (l = e.child).sibling),
        (a = ue(l, { mode: "visible", children: a.children })),
        0 == (1 & t.mode) && (a.lanes = n),
        (a.return = t),
        (a.sibling = null),
        null !== e &&
          (null === (n = t.deletions)
            ? ((t.deletions = [e]), (t.flags |= 16))
            : n.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
      );
    }
    function lL(e, t) {
      return (
        ((t = ur(
          { mode: "visible", children: t },
          e.mode,
          0,
          null
        )).return = e),
        (e.child = t)
      );
    }
    function lz(e, t, n, r) {
      return (
        null !== r && aL(r),
        ol(t, e.child, null, n),
        (e = lL(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function lM(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      null !== r && (r.lanes |= t), aW(e.return, t, n);
    }
    function lF(e, t, n, r, a) {
      var o = e.memoizedState;
      null === o
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = a));
    }
    function lI(e, t, n) {
      var r = t.pendingProps,
        a = r.revealOrder,
        o = r.tail;
      if ((lw(e, t, r.children, n), 0 != (2 & (r = oy.current))))
        (r = (1 & r) | 2), (t.flags |= 128);
      else {
        if (null !== e && 0 != (128 & e.flags))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && lM(e, n, t);
            else if (19 === e.tag) lM(e, n, t);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((r2(oy, r), 0 == (1 & t.mode))) t.memoizedState = null;
      else
        switch (a) {
          case "forwards":
            for (a = null, n = t.child; null !== n; )
              null !== (e = n.alternate) && null === og(e) && (a = n),
                (n = n.sibling);
            null === (n = a)
              ? ((a = t.child), (t.child = null))
              : ((a = n.sibling), (n.sibling = null)),
              lF(t, !1, a, n, o);
            break;
          case "backwards":
            for (n = null, a = t.child, t.child = null; null !== a; ) {
              if (null !== (e = a.alternate) && null === og(e)) {
                t.child = a;
                break;
              }
              (e = a.sibling), (a.sibling = n), (n = a), (a = e);
            }
            lF(t, !0, n, null, o);
            break;
          case "together":
            lF(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function lU(e, t) {
      0 == (1 & t.mode) &&
        null !== e &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function lA(e, t, n) {
      if (
        (null !== e && (t.dependencies = e.dependencies),
        (iv |= t.lanes),
        0 == (n & t.childLanes))
      )
        return null;
      if (null !== e && t.child !== e.child) throw Error(f(153));
      if (null !== t.child) {
        for (
          n = ue((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling), ((n = n.sibling = ue(e, e.pendingProps)).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function lB(e, t) {
      if (!aE)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t; )
              null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; )
              null !== n.alternate && (r = n), (n = n.sibling);
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function l$(e) {
      var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var a = e.child; null !== a; )
          (n |= a.lanes | a.childLanes),
            (r |= 14680064 & a.subtreeFlags),
            (r |= 14680064 & a.flags),
            (a.return = e),
            (a = a.sibling);
      else
        for (a = e.child; null !== a; )
          (n |= a.lanes | a.childLanes),
            (r |= a.subtreeFlags),
            (r |= a.flags),
            (a.return = e),
            (a = a.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    (a = function (e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (o = function () {}),
      (l = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
          (e = t.stateNode), od(os.current);
          var o,
            l = null;
          switch (n) {
            case "input":
              (a = ef(e, a)), (r = ef(e, r)), (l = []);
              break;
            case "select":
              (a = en({}, a, { value: void 0 })),
                (r = en({}, r, { value: void 0 })),
                (l = []);
              break;
            case "textarea":
              (a = eb(e, a)), (r = eb(e, r)), (l = []);
              break;
            default:
              "function" != typeof a.onClick &&
                "function" == typeof r.onClick &&
                (e.onclick = rN);
          }
          for (s in (eL(n, r), (n = null), a))
            if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s]) {
              if ("style" === s) {
                var i = a[s];
                for (o in i)
                  i.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
              } else
                "dangerouslySetInnerHTML" !== s &&
                  "children" !== s &&
                  "suppressContentEditableWarning" !== s &&
                  "suppressHydrationWarning" !== s &&
                  "autoFocus" !== s &&
                  (p.hasOwnProperty(s)
                    ? l || (l = [])
                    : (l = l || []).push(s, null));
            }
          for (s in r) {
            var u = r[s];
            if (
              ((i = null != a ? a[s] : void 0),
              r.hasOwnProperty(s) && u !== i && (null != u || null != i))
            ) {
              if ("style" === s) {
                if (i) {
                  for (o in i)
                    !i.hasOwnProperty(o) ||
                      (u && u.hasOwnProperty(o)) ||
                      (n || (n = {}), (n[o] = ""));
                  for (o in u)
                    u.hasOwnProperty(o) &&
                      i[o] !== u[o] &&
                      (n || (n = {}), (n[o] = u[o]));
                } else n || (l || (l = []), l.push(s, n)), (n = u);
              } else
                "dangerouslySetInnerHTML" === s
                  ? ((u = u ? u.__html : void 0),
                    (i = i ? i.__html : void 0),
                    null != u && i !== u && (l = l || []).push(s, u))
                  : "children" === s
                  ? ("string" != typeof u && "number" != typeof u) ||
                    (l = l || []).push(s, "" + u)
                  : "suppressContentEditableWarning" !== s &&
                    "suppressHydrationWarning" !== s &&
                    (p.hasOwnProperty(s)
                      ? (null != u && "onScroll" === s && rm("scroll", e),
                        l || i === u || (l = []))
                      : (l = l || []).push(s, u));
            }
          }
          n && (l = l || []).push("style", n);
          var s = l;
          (t.updateQueue = s) && (t.flags |= 4);
        }
      }),
      (i = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      });
    var lW = !1,
      lV = !1,
      lH = "function" == typeof WeakSet ? WeakSet : Set,
      lQ = null;
    function lq(e, t) {
      var n = e.ref;
      if (null !== n) {
        if ("function" == typeof n)
          try {
            n(null);
          } catch (n) {
            i2(e, t, n);
          }
        else n.current = null;
      }
    }
    function lK(e, t, n) {
      try {
        n();
      } catch (n) {
        i2(e, t, n);
      }
    }
    var lG = !1;
    function lY(e, t, n) {
      var r = t.updateQueue;
      if (null !== (r = null !== r ? r.lastEffect : null)) {
        var a = (r = r.next);
        do {
          if ((a.tag & e) === e) {
            var o = a.destroy;
            (a.destroy = void 0), void 0 !== o && lK(t, n, o);
          }
          a = a.next;
        } while (a !== r);
      }
    }
    function lX(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function lJ(e) {
      var t = e.ref;
      if (null !== t) {
        var n = e.stateNode;
        e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
      }
    }
    function lZ(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function l0(e) {
      e: for (;;) {
        for (; null === e.sibling; ) {
          if (null === e.return || lZ(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

        ) {
          if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
      }
    }
    var l1 = null,
      l2 = !1;
    function l3(e, t, n) {
      for (n = n.child; null !== n; ) l4(e, t, n), (n = n.sibling);
    }
    function l4(e, t, n) {
      if (tc && "function" == typeof tc.onCommitFiberUnmount)
        try {
          tc.onCommitFiberUnmount(ts, n);
        } catch (e) {}
      switch (n.tag) {
        case 5:
          lV || lq(n, t);
        case 6:
          var r = l1,
            a = l2;
          (l1 = null),
            l3(e, t, n),
            (l1 = r),
            (l2 = a),
            null !== l1 &&
              (l2
                ? ((e = l1),
                  (n = n.stateNode),
                  8 === e.nodeType
                    ? e.parentNode.removeChild(n)
                    : e.removeChild(n))
                : l1.removeChild(n.stateNode));
          break;
        case 18:
          null !== l1 &&
            (l2
              ? ((e = l1),
                (n = n.stateNode),
                8 === e.nodeType
                  ? rI(e.parentNode, n)
                  : 1 === e.nodeType && rI(e, n),
                tQ(e))
              : rI(l1, n.stateNode));
          break;
        case 4:
          (r = l1),
            (a = l2),
            (l1 = n.stateNode.containerInfo),
            (l2 = !0),
            l3(e, t, n),
            (l1 = r),
            (l2 = a);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !lV &&
            null !== (r = n.updateQueue) &&
            null !== (r = r.lastEffect)
          ) {
            a = r = r.next;
            do {
              var o = a,
                l = o.destroy;
              (o = o.tag),
                void 0 !== l &&
                  (0 != (2 & o) ? lK(n, t, l) : 0 != (4 & o) && lK(n, t, l)),
                (a = a.next);
            } while (a !== r);
          }
          l3(e, t, n);
          break;
        case 1:
          if (
            !lV &&
            (lq(n, t),
            "function" == typeof (r = n.stateNode).componentWillUnmount)
          )
            try {
              (r.props = n.memoizedProps),
                (r.state = n.memoizedState),
                r.componentWillUnmount();
            } catch (e) {
              i2(n, t, e);
            }
          l3(e, t, n);
          break;
        case 21:
        default:
          l3(e, t, n);
          break;
        case 22:
          1 & n.mode
            ? ((lV = (r = lV) || null !== n.memoizedState),
              l3(e, t, n),
              (lV = r))
            : l3(e, t, n);
      }
    }
    function l5(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new lH()),
          t.forEach(function (t) {
            var r = i8.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    function l8(e, t) {
      var n = t.deletions;
      if (null !== n)
        for (var r = 0; r < n.length; r++) {
          var a = n[r];
          try {
            var o = t,
              l = o;
            e: for (; null !== l; ) {
              switch (l.tag) {
                case 5:
                  (l1 = l.stateNode), (l2 = !1);
                  break e;
                case 3:
                case 4:
                  (l1 = l.stateNode.containerInfo), (l2 = !0);
                  break e;
              }
              l = l.return;
            }
            if (null === l1) throw Error(f(160));
            l4(e, o, a), (l1 = null), (l2 = !1);
            var i = a.alternate;
            null !== i && (i.return = null), (a.return = null);
          } catch (e) {
            i2(a, t, e);
          }
        }
      if (12854 & t.subtreeFlags)
        for (t = t.child; null !== t; ) l6(t, e), (t = t.sibling);
    }
    function l6(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((l8(t, e), l7(e), 4 & r)) {
            try {
              lY(3, e, e.return), lX(3, e);
            } catch (t) {
              i2(e, e.return, t);
            }
            try {
              lY(5, e, e.return);
            } catch (t) {
              i2(e, e.return, t);
            }
          }
          break;
        case 1:
          l8(t, e), l7(e), 512 & r && null !== n && lq(n, n.return);
          break;
        case 5:
          if (
            (l8(t, e),
            l7(e),
            512 & r && null !== n && lq(n, n.return),
            32 & e.flags)
          ) {
            var a = e.stateNode;
            try {
              eT(a, "");
            } catch (t) {
              i2(e, e.return, t);
            }
          }
          if (4 & r && null != (a = e.stateNode)) {
            var o = e.memoizedProps,
              l = null !== n ? n.memoizedProps : o,
              i = e.type,
              u = e.updateQueue;
            if (((e.updateQueue = null), null !== u))
              try {
                "input" === i &&
                  "radio" === o.type &&
                  null != o.name &&
                  ep(a, o),
                  ez(i, l);
                var s = ez(i, o);
                for (l = 0; l < u.length; l += 2) {
                  var c = u[l],
                    d = u[l + 1];
                  "style" === c
                    ? eO(a, d)
                    : "dangerouslySetInnerHTML" === c
                    ? eP(a, d)
                    : "children" === c
                    ? eT(a, d)
                    : _(a, c, d, s);
                }
                switch (i) {
                  case "input":
                    eh(a, o);
                    break;
                  case "textarea":
                    ex(a, o);
                    break;
                  case "select":
                    var p = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!o.multiple;
                    var h = o.value;
                    null != h
                      ? eg(a, !!o.multiple, h, !1)
                      : !!o.multiple !== p &&
                        (null != o.defaultValue
                          ? eg(a, !!o.multiple, o.defaultValue, !0)
                          : eg(a, !!o.multiple, o.multiple ? [] : "", !1));
                }
                a[rW] = o;
              } catch (t) {
                i2(e, e.return, t);
              }
          }
          break;
        case 6:
          if ((l8(t, e), l7(e), 4 & r)) {
            if (null === e.stateNode) throw Error(f(162));
            (a = e.stateNode), (o = e.memoizedProps);
            try {
              a.nodeValue = o;
            } catch (t) {
              i2(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            (l8(t, e),
            l7(e),
            4 & r && null !== n && n.memoizedState.isDehydrated)
          )
            try {
              tQ(t.containerInfo);
            } catch (t) {
              i2(e, e.return, t);
            }
          break;
        case 4:
        default:
          l8(t, e), l7(e);
          break;
        case 13:
          l8(t, e),
            l7(e),
            8192 & (a = e.child).flags &&
              ((o = null !== a.memoizedState),
              (a.stateNode.isHidden = o),
              o &&
                (null === a.alternate || null === a.alternate.memoizedState) &&
                (ix = tn())),
            4 & r && l5(e);
          break;
        case 22:
          if (
            ((c = null !== n && null !== n.memoizedState),
            1 & e.mode ? ((lV = (s = lV) || c), l8(t, e), (lV = s)) : l8(t, e),
            l7(e),
            8192 & r)
          ) {
            if (
              ((s = null !== e.memoizedState),
              (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode))
            )
              for (lQ = e, c = e.child; null !== c; ) {
                for (d = lQ = c; null !== lQ; ) {
                  switch (((h = (p = lQ).child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      lY(4, p, p.return);
                      break;
                    case 1:
                      lq(p, p.return);
                      var m = p.stateNode;
                      if ("function" == typeof m.componentWillUnmount) {
                        (r = p), (n = p.return);
                        try {
                          (t = r),
                            (m.props = t.memoizedProps),
                            (m.state = t.memoizedState),
                            m.componentWillUnmount();
                        } catch (e) {
                          i2(r, n, e);
                        }
                      }
                      break;
                    case 5:
                      lq(p, p.return);
                      break;
                    case 22:
                      if (null !== p.memoizedState) {
                        ie(d);
                        continue;
                      }
                  }
                  null !== h ? ((h.return = p), (lQ = h)) : ie(d);
                }
                c = c.sibling;
              }
            e: for (c = null, d = e; ; ) {
              if (5 === d.tag) {
                if (null === c) {
                  c = d;
                  try {
                    (a = d.stateNode),
                      s
                        ? ((o = a.style),
                          "function" == typeof o.setProperty
                            ? o.setProperty("display", "none", "important")
                            : (o.display = "none"))
                        : ((i = d.stateNode),
                          (l =
                            null != (u = d.memoizedProps.style) &&
                            u.hasOwnProperty("display")
                              ? u.display
                              : null),
                          (i.style.display = ej("display", l)));
                  } catch (t) {
                    i2(e, e.return, t);
                  }
                }
              } else if (6 === d.tag) {
                if (null === c)
                  try {
                    d.stateNode.nodeValue = s ? "" : d.memoizedProps;
                  } catch (t) {
                    i2(e, e.return, t);
                  }
              } else if (
                ((22 !== d.tag && 23 !== d.tag) ||
                  null === d.memoizedState ||
                  d === e) &&
                null !== d.child
              ) {
                (d.child.return = d), (d = d.child);
                continue;
              }
              if (d === e) break;
              for (; null === d.sibling; ) {
                if (null === d.return || d.return === e) break e;
                c === d && (c = null), (d = d.return);
              }
              c === d && (c = null),
                (d.sibling.return = d.return),
                (d = d.sibling);
            }
          }
          break;
        case 19:
          l8(t, e), l7(e), 4 & r && l5(e);
        case 21:
      }
    }
    function l7(e) {
      var t = e.flags;
      if (2 & t) {
        try {
          e: {
            for (var n = e.return; null !== n; ) {
              if (lZ(n)) {
                var r = n;
                break e;
              }
              n = n.return;
            }
            throw Error(f(160));
          }
          switch (r.tag) {
            case 5:
              var a = r.stateNode;
              32 & r.flags && (eT(a, ""), (r.flags &= -33));
              var o = l0(e);
              !(function e(t, n, r) {
                var a = t.tag;
                if (5 === a || 6 === a)
                  (t = t.stateNode),
                    n ? r.insertBefore(t, n) : r.appendChild(t);
                else if (4 !== a && null !== (t = t.child))
                  for (e(t, n, r), t = t.sibling; null !== t; )
                    e(t, n, r), (t = t.sibling);
              })(e, o, a);
              break;
            case 3:
            case 4:
              var l = r.stateNode.containerInfo,
                i = l0(e);
              !(function e(t, n, r) {
                var a = t.tag;
                if (5 === a || 6 === a)
                  (t = t.stateNode),
                    n
                      ? 8 === r.nodeType
                        ? r.parentNode.insertBefore(t, n)
                        : r.insertBefore(t, n)
                      : (8 === r.nodeType
                          ? (n = r.parentNode).insertBefore(t, r)
                          : (n = r).appendChild(t),
                        null != (r = r._reactRootContainer) ||
                          null !== n.onclick ||
                          (n.onclick = rN));
                else if (4 !== a && null !== (t = t.child))
                  for (e(t, n, r), t = t.sibling; null !== t; )
                    e(t, n, r), (t = t.sibling);
              })(e, i, l);
              break;
            default:
              throw Error(f(161));
          }
        } catch (t) {
          i2(e, e.return, t);
        }
        e.flags &= -3;
      }
      4096 & t && (e.flags &= -4097);
    }
    function l9(e) {
      for (; null !== lQ; ) {
        var t = lQ;
        if (0 != (8772 & t.flags)) {
          var n = t.alternate;
          try {
            if (0 != (8772 & t.flags))
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  lV || lX(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (4 & t.flags && !lV) {
                    if (null === n) r.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type
                          ? n.memoizedProps
                          : aM(t.type, n.memoizedProps);
                      r.componentDidUpdate(
                        a,
                        n.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  }
                  var o = t.updateQueue;
                  null !== o && a4(t, o, r);
                  break;
                case 3:
                  var l = t.updateQueue;
                  if (null !== l) {
                    if (((n = null), null !== t.child))
                      switch (t.child.tag) {
                        case 5:
                        case 1:
                          n = t.child.stateNode;
                      }
                    a4(t, l, n);
                  }
                  break;
                case 5:
                  var i = t.stateNode;
                  if (null === n && 4 & t.flags) {
                    n = i;
                    var u = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        u.autoFocus && n.focus();
                        break;
                      case "img":
                        u.src && (n.src = u.src);
                    }
                  }
                  break;
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                case 13:
                  if (null === t.memoizedState) {
                    var s = t.alternate;
                    if (null !== s) {
                      var c = s.memoizedState;
                      if (null !== c) {
                        var d = c.dehydrated;
                        null !== d && tQ(d);
                      }
                    }
                  }
                  break;
                default:
                  throw Error(f(163));
              }
            lV || (512 & t.flags && lJ(t));
          } catch (e) {
            i2(t, t.return, e);
          }
        }
        if (t === e) {
          lQ = null;
          break;
        }
        if (null !== (n = t.sibling)) {
          (n.return = t.return), (lQ = n);
          break;
        }
        lQ = t.return;
      }
    }
    function ie(e) {
      for (; null !== lQ; ) {
        var t = lQ;
        if (t === e) {
          lQ = null;
          break;
        }
        var n = t.sibling;
        if (null !== n) {
          (n.return = t.return), (lQ = n);
          break;
        }
        lQ = t.return;
      }
    }
    function it(e) {
      for (; null !== lQ; ) {
        var t = lQ;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                lX(4, t);
              } catch (e) {
                i2(t, n, e);
              }
              break;
            case 1:
              var r = t.stateNode;
              if ("function" == typeof r.componentDidMount) {
                var a = t.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  i2(t, a, e);
                }
              }
              var o = t.return;
              try {
                lJ(t);
              } catch (e) {
                i2(t, o, e);
              }
              break;
            case 5:
              var l = t.return;
              try {
                lJ(t);
              } catch (e) {
                i2(t, l, e);
              }
          }
        } catch (e) {
          i2(t, t.return, e);
        }
        if (t === e) {
          lQ = null;
          break;
        }
        var i = t.sibling;
        if (null !== i) {
          (i.return = t.return), (lQ = i);
          break;
        }
        lQ = t.return;
      }
    }
    var ir = Math.ceil,
      ia = C.ReactCurrentDispatcher,
      io = C.ReactCurrentOwner,
      il = C.ReactCurrentBatchConfig,
      ii = 0,
      iu = null,
      is = null,
      ic = 0,
      id = 0,
      ip = r0(0),
      ih = 0,
      im = null,
      iv = 0,
      iy = 0,
      ig = 0,
      ib = null,
      iw = null,
      ix = 0,
      iS = 1 / 0,
      ik = null,
      iE = !1,
      i_ = null,
      iC = null,
      iP = !1,
      iT = null,
      iN = 0,
      iR = 0,
      ij = null,
      iO = -1,
      iD = 0;
    function iL() {
      return 0 != (6 & ii) ? tn() : -1 !== iO ? iO : (iO = tn());
    }
    function iz(e) {
      return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & ii) && 0 !== ic
        ? ic & -ic
        : null !== az.transition
        ? (0 === iD && (iD = tb()), iD)
        : 0 !== (e = tk)
        ? e
        : (e = void 0 === (e = window.event) ? 16 : t0(e.type));
    }
    function iM(e, t, n, r) {
      if (50 < iR) throw ((iR = 0), (ij = null), Error(f(185)));
      tx(e, n, r),
        (0 == (2 & ii) || e !== iu) &&
          (e === iu && (0 == (2 & ii) && (iy |= n), 4 === ih && iB(e, ic)),
          iF(e, r),
          1 === n &&
            0 === ii &&
            0 == (1 & t.mode) &&
            ((iS = tn() + 500), ao && au()));
    }
    function iF(e, t) {
      var n,
        r = e.callbackNode;
      !(function (e, t) {
        for (
          var n = e.suspendedLanes,
            r = e.pingedLanes,
            a = e.expirationTimes,
            o = e.pendingLanes;
          0 < o;

        ) {
          var l = 31 - tf(o),
            i = 1 << l,
            u = a[l];
          -1 === u
            ? (0 == (i & n) || 0 != (i & r)) &&
              (a[l] = (function (e, t) {
                switch (e) {
                  case 1:
                  case 2:
                  case 4:
                    return t + 250;
                  case 8:
                  case 16:
                  case 32:
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                    return t + 5e3;
                  default:
                    return -1;
                }
              })(i, t))
            : u <= t && (e.expiredLanes |= i),
            (o &= ~i);
        }
      })(e, t);
      var a = ty(e, e === iu ? ic : 0);
      if (0 === a)
        null !== r && e9(r), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((t = a & -a), e.callbackPriority !== t)) {
        if ((null != r && e9(r), 1 === t))
          0 === e.tag
            ? ((n = i$.bind(null, e)), (ao = !0), ai(n))
            : ai(i$.bind(null, e)),
            rM(function () {
              0 == (6 & ii) && au();
            }),
            (r = null);
        else {
          switch (tE(a)) {
            case 1:
              r = ta;
              break;
            case 4:
              r = to;
              break;
            case 16:
            default:
              r = tl;
              break;
            case 536870912:
              r = tu;
          }
          r = e7(r, iI.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = r);
      }
    }
    function iI(e, t) {
      if (((iO = -1), (iD = 0), 0 != (6 & ii))) throw Error(f(327));
      var n = e.callbackNode;
      if (i0() && e.callbackNode !== n) return null;
      var r = ty(e, e === iu ? ic : 0);
      if (0 === r) return null;
      if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = iY(e, r);
      else {
        t = r;
        var a = ii;
        ii |= 2;
        var o = iK();
        for (
          (iu !== e || ic !== t) && ((ik = null), (iS = tn() + 500), iQ(e, t));
          ;

        )
          try {
            (function () {
              for (; null !== is && !te(); ) iX(is);
            })();
            break;
          } catch (t) {
            iq(e, t);
          }
        aB(),
          (ia.current = o),
          (ii = a),
          null !== is ? (t = 0) : ((iu = null), (ic = 0), (t = ih));
      }
      if (0 !== t) {
        if (
          (2 === t && 0 !== (a = tg(e)) && ((r = a), (t = iU(e, a))), 1 === t)
        )
          throw ((n = im), iQ(e, 0), iB(e, r), iF(e, tn()), n);
        if (6 === t) iB(e, r);
        else {
          if (
            ((a = e.current.alternate),
            0 == (30 & r) &&
              !(function (e) {
                for (var t = e; ; ) {
                  if (16384 & t.flags) {
                    var n = t.updateQueue;
                    if (null !== n && null !== (n = n.stores))
                      for (var r = 0; r < n.length; r++) {
                        var a = n[r],
                          o = a.getSnapshot;
                        a = a.value;
                        try {
                          if (!nG(o(), a)) return !1;
                        } catch (e) {
                          return !1;
                        }
                      }
                  }
                  if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                    (n.return = t), (t = n);
                  else {
                    if (t === e) break;
                    for (; null === t.sibling; ) {
                      if (null === t.return || t.return === e) return !0;
                      t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                  }
                }
                return !0;
              })(a) &&
              (2 === (t = iY(e, r)) &&
                0 !== (o = tg(e)) &&
                ((r = o), (t = iU(e, o))),
              1 === t))
          )
            throw ((n = im), iQ(e, 0), iB(e, r), iF(e, tn()), n);
          switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 2:
            case 5:
              iZ(e, iw, ik);
              break;
            case 3:
              if (
                (iB(e, r), (130023424 & r) === r && 10 < (t = ix + 500 - tn()))
              ) {
                if (0 !== ty(e, 0)) break;
                if (((a = e.suspendedLanes) & r) !== r) {
                  iL(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = rD(iZ.bind(null, e, iw, ik), t);
                break;
              }
              iZ(e, iw, ik);
              break;
            case 4:
              if ((iB(e, r), (4194240 & r) === r)) break;
              for (a = -1, t = e.eventTimes; 0 < r; ) {
                var l = 31 - tf(r);
                (o = 1 << l), (l = t[l]) > a && (a = l), (r &= ~o);
              }
              if (
                ((r = a),
                10 <
                  (r =
                    (120 > (r = tn() - r)
                      ? 120
                      : 480 > r
                      ? 480
                      : 1080 > r
                      ? 1080
                      : 1920 > r
                      ? 1920
                      : 3e3 > r
                      ? 3e3
                      : 4320 > r
                      ? 4320
                      : 1960 * ir(r / 1960)) - r))
              ) {
                e.timeoutHandle = rD(iZ.bind(null, e, iw, ik), r);
                break;
              }
              iZ(e, iw, ik);
              break;
            default:
              throw Error(f(329));
          }
        }
      }
      return iF(e, tn()), e.callbackNode === n ? iI.bind(null, e) : null;
    }
    function iU(e, t) {
      var n = ib;
      return (
        e.current.memoizedState.isDehydrated && (iQ(e, t).flags |= 256),
        2 !== (e = iY(e, t)) && ((t = iw), (iw = n), null !== t && iA(t)),
        e
      );
    }
    function iA(e) {
      null === iw ? (iw = e) : iw.push.apply(iw, e);
    }
    function iB(e, t) {
      for (
        t &= ~ig,
          t &= ~iy,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;

      ) {
        var n = 31 - tf(t),
          r = 1 << n;
        (e[n] = -1), (t &= ~r);
      }
    }
    function i$(e) {
      if (0 != (6 & ii)) throw Error(f(327));
      i0();
      var t = ty(e, 0);
      if (0 == (1 & t)) return iF(e, tn()), null;
      var n = iY(e, t);
      if (0 !== e.tag && 2 === n) {
        var r = tg(e);
        0 !== r && ((t = r), (n = iU(e, r)));
      }
      if (1 === n) throw ((n = im), iQ(e, 0), iB(e, t), iF(e, tn()), n);
      if (6 === n) throw Error(f(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        iZ(e, iw, ik),
        iF(e, tn()),
        null
      );
    }
    function iW(e, t) {
      var n = ii;
      ii |= 1;
      try {
        return e(t);
      } finally {
        0 === (ii = n) && ((iS = tn() + 500), ao && au());
      }
    }
    function iV(e) {
      null !== iT && 0 === iT.tag && 0 == (6 & ii) && i0();
      var t = ii;
      ii |= 1;
      var n = il.transition,
        r = tk;
      try {
        if (((il.transition = null), (tk = 1), e)) return e();
      } finally {
        (tk = r), (il.transition = n), 0 == (6 & (ii = t)) && au();
      }
    }
    function iH() {
      (id = ip.current), r1(ip);
    }
    function iQ(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), rL(n)), null !== is))
        for (n = is.return; null !== n; ) {
          var r = n;
          switch ((ax(r), r.tag)) {
            case 1:
              null != (r = r.type.childContextTypes) && r9();
              break;
            case 3:
              oh(), r1(r5), r1(r4), ow();
              break;
            case 5:
              ov(r);
              break;
            case 4:
              oh();
              break;
            case 13:
            case 19:
              r1(oy);
              break;
            case 10:
              a$(r.type._context);
              break;
            case 22:
            case 23:
              iH();
          }
          n = n.return;
        }
      if (
        ((iu = e),
        (is = e = ue(e.current, null)),
        (ic = id = t),
        (ih = 0),
        (im = null),
        (ig = iy = iv = 0),
        (iw = ib = null),
        null !== aQ)
      ) {
        for (t = 0; t < aQ.length; t++)
          if (null !== (r = (n = aQ[t]).interleaved)) {
            n.interleaved = null;
            var a = r.next,
              o = n.pending;
            if (null !== o) {
              var l = o.next;
              (o.next = a), (r.next = l);
            }
            n.pending = r;
          }
        aQ = null;
      }
      return e;
    }
    function iq(e, t) {
      for (;;) {
        var n = is;
        try {
          if ((aB(), (ox.current = lo), oP)) {
            for (var r = oE.memoizedState; null !== r; ) {
              var a = r.queue;
              null !== a && (a.pending = null), (r = r.next);
            }
            oP = !1;
          }
          if (
            ((ok = 0),
            (oC = o_ = oE = null),
            (oT = !1),
            (oN = 0),
            (io.current = null),
            null === n || null === n.return)
          ) {
            (ih = 1), (im = t), (is = null);
            break;
          }
          e: {
            var o = e,
              l = n.return,
              i = n,
              u = t;
            if (
              ((t = ic),
              (i.flags |= 32768),
              null !== u && "object" == typeof u && "function" == typeof u.then)
            ) {
              var s = u,
                c = i,
                d = c.tag;
              if (0 == (1 & c.mode) && (0 === d || 11 === d || 15 === d)) {
                var p = c.alternate;
                p
                  ? ((c.updateQueue = p.updateQueue),
                    (c.memoizedState = p.memoizedState),
                    (c.lanes = p.lanes))
                  : ((c.updateQueue = null), (c.memoizedState = null));
              }
              var h = lv(l);
              if (null !== h) {
                (h.flags &= -257),
                  ly(h, l, i, o, t),
                  1 & h.mode && lm(o, s, t),
                  (t = h),
                  (u = s);
                var m = t.updateQueue;
                if (null === m) {
                  var v = new Set();
                  v.add(u), (t.updateQueue = v);
                } else m.add(u);
                break e;
              }
              if (0 == (1 & t)) {
                lm(o, s, t), iG();
                break e;
              }
              u = Error(f(426));
            } else if (aE && 1 & i.mode) {
              var y = lv(l);
              if (null !== y) {
                0 == (65536 & y.flags) && (y.flags |= 256),
                  ly(y, l, i, o, t),
                  aL(ls(u, i));
                break e;
              }
            }
            (o = u = ls(u, i)),
              4 !== ih && (ih = 2),
              null === ib ? (ib = [o]) : ib.push(o),
              (o = l);
            do {
              switch (o.tag) {
                case 3:
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var g = lp(o, u, t);
                  a2(o, g);
                  break e;
                case 1:
                  i = u;
                  var b = o.type,
                    w = o.stateNode;
                  if (
                    0 == (128 & o.flags) &&
                    ("function" == typeof b.getDerivedStateFromError ||
                      (null !== w &&
                        "function" == typeof w.componentDidCatch &&
                        (null === iC || !iC.has(w))))
                  ) {
                    (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                    var x = lh(o, i, t);
                    a2(o, x);
                    break e;
                  }
              }
              o = o.return;
            } while (null !== o);
          }
          iJ(n);
        } catch (e) {
          (t = e), is === n && null !== n && (is = n = n.return);
          continue;
        }
        break;
      }
    }
    function iK() {
      var e = ia.current;
      return (ia.current = lo), null === e ? lo : e;
    }
    function iG() {
      (0 === ih || 3 === ih || 2 === ih) && (ih = 4),
        null === iu ||
          (0 == (268435455 & iv) && 0 == (268435455 & iy)) ||
          iB(iu, ic);
    }
    function iY(e, t) {
      var n = ii;
      ii |= 2;
      var r = iK();
      for ((iu !== e || ic !== t) && ((ik = null), iQ(e, t)); ; )
        try {
          (function () {
            for (; null !== is; ) iX(is);
          })();
          break;
        } catch (t) {
          iq(e, t);
        }
      if ((aB(), (ii = n), (ia.current = r), null !== is)) throw Error(f(261));
      return (iu = null), (ic = 0), ih;
    }
    function iX(e) {
      var t = u(e.alternate, e, id);
      (e.memoizedProps = e.pendingProps),
        null === t ? iJ(e) : (is = t),
        (io.current = null);
    }
    function iJ(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), 0 == (32768 & t.flags))) {
          if (
            null !==
            (n = (function (e, t, n) {
              var r = t.pendingProps;
              switch ((ax(t), t.tag)) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                  return l$(t), null;
                case 1:
                case 17:
                  return r7(t.type) && r9(), l$(t), null;
                case 3:
                  return (
                    (r = t.stateNode),
                    oh(),
                    r1(r5),
                    r1(r4),
                    ow(),
                    r.pendingContext &&
                      ((r.context = r.pendingContext),
                      (r.pendingContext = null)),
                    (null === e || null === e.child) &&
                      (aj(t)
                        ? (t.flags |= 4)
                        : null === e ||
                          (e.memoizedState.isDehydrated &&
                            0 == (256 & t.flags)) ||
                          ((t.flags |= 1024),
                          null !== a_ && (iA(a_), (a_ = null)))),
                    o(e, t),
                    l$(t),
                    null
                  );
                case 5:
                  ov(t);
                  var u = od(of.current);
                  if (((n = t.type), null !== e && null != t.stateNode))
                    l(e, t, n, r, u),
                      e.ref !== t.ref &&
                        ((t.flags |= 512), (t.flags |= 2097152));
                  else {
                    if (!r) {
                      if (null === t.stateNode) throw Error(f(166));
                      return l$(t), null;
                    }
                    if (((e = od(os.current)), aj(t))) {
                      (r = t.stateNode), (n = t.type);
                      var s = t.memoizedProps;
                      switch (
                        ((r[r$] = t), (r[rW] = s), (e = 0 != (1 & t.mode)), n)
                      ) {
                        case "dialog":
                          rm("cancel", r), rm("close", r);
                          break;
                        case "iframe":
                        case "object":
                        case "embed":
                          rm("load", r);
                          break;
                        case "video":
                        case "audio":
                          for (u = 0; u < rf.length; u++) rm(rf[u], r);
                          break;
                        case "source":
                          rm("error", r);
                          break;
                        case "img":
                        case "image":
                        case "link":
                          rm("error", r), rm("load", r);
                          break;
                        case "details":
                          rm("toggle", r);
                          break;
                        case "input":
                          ed(r, s), rm("invalid", r);
                          break;
                        case "select":
                          (r._wrapperState = { wasMultiple: !!s.multiple }),
                            rm("invalid", r);
                          break;
                        case "textarea":
                          ew(r, s), rm("invalid", r);
                      }
                      for (var c in (eL(n, s), (u = null), s))
                        if (s.hasOwnProperty(c)) {
                          var d = s[c];
                          "children" === c
                            ? "string" == typeof d
                              ? r.textContent !== d &&
                                (!0 !== s.suppressHydrationWarning &&
                                  rT(r.textContent, d, e),
                                (u = ["children", d]))
                              : "number" == typeof d &&
                                r.textContent !== "" + d &&
                                (!0 !== s.suppressHydrationWarning &&
                                  rT(r.textContent, d, e),
                                (u = ["children", "" + d]))
                            : p.hasOwnProperty(c) &&
                              null != d &&
                              "onScroll" === c &&
                              rm("scroll", r);
                        }
                      switch (n) {
                        case "input":
                          eu(r), em(r, s, !0);
                          break;
                        case "textarea":
                          eu(r), eS(r);
                          break;
                        case "select":
                        case "option":
                          break;
                        default:
                          "function" == typeof s.onClick && (r.onclick = rN);
                      }
                      (r = u),
                        (t.updateQueue = r),
                        null !== r && (t.flags |= 4);
                    } else {
                      (c = 9 === u.nodeType ? u : u.ownerDocument),
                        "http://www.w3.org/1999/xhtml" === e && (e = ek(n)),
                        "http://www.w3.org/1999/xhtml" === e
                          ? "script" === n
                            ? (((e = c.createElement("div")).innerHTML =
                                "<script></script>"),
                              (e = e.removeChild(e.firstChild)))
                            : "string" == typeof r.is
                            ? (e = c.createElement(n, { is: r.is }))
                            : ((e = c.createElement(n)),
                              "select" === n &&
                                ((c = e),
                                r.multiple
                                  ? (c.multiple = !0)
                                  : r.size && (c.size = r.size)))
                          : (e = c.createElementNS(e, n)),
                        (e[r$] = t),
                        (e[rW] = r),
                        a(e, t, !1, !1),
                        (t.stateNode = e);
                      e: {
                        switch (((c = ez(n, r)), n)) {
                          case "dialog":
                            rm("cancel", e), rm("close", e), (u = r);
                            break;
                          case "iframe":
                          case "object":
                          case "embed":
                            rm("load", e), (u = r);
                            break;
                          case "video":
                          case "audio":
                            for (u = 0; u < rf.length; u++) rm(rf[u], e);
                            u = r;
                            break;
                          case "source":
                            rm("error", e), (u = r);
                            break;
                          case "img":
                          case "image":
                          case "link":
                            rm("error", e), rm("load", e), (u = r);
                            break;
                          case "details":
                            rm("toggle", e), (u = r);
                            break;
                          case "input":
                            ed(e, r), (u = ef(e, r)), rm("invalid", e);
                            break;
                          case "option":
                          default:
                            u = r;
                            break;
                          case "select":
                            (e._wrapperState = { wasMultiple: !!r.multiple }),
                              (u = en({}, r, { value: void 0 })),
                              rm("invalid", e);
                            break;
                          case "textarea":
                            ew(e, r), (u = eb(e, r)), rm("invalid", e);
                        }
                        for (s in (eL(n, u), (d = u)))
                          if (d.hasOwnProperty(s)) {
                            var h = d[s];
                            "style" === s
                              ? eO(e, h)
                              : "dangerouslySetInnerHTML" === s
                              ? null != (h = h ? h.__html : void 0) && eP(e, h)
                              : "children" === s
                              ? "string" == typeof h
                                ? ("textarea" !== n || "" !== h) && eT(e, h)
                                : "number" == typeof h && eT(e, "" + h)
                              : "suppressContentEditableWarning" !== s &&
                                "suppressHydrationWarning" !== s &&
                                "autoFocus" !== s &&
                                (p.hasOwnProperty(s)
                                  ? null != h &&
                                    "onScroll" === s &&
                                    rm("scroll", e)
                                  : null != h && _(e, s, h, c));
                          }
                        switch (n) {
                          case "input":
                            eu(e), em(e, r, !1);
                            break;
                          case "textarea":
                            eu(e), eS(e);
                            break;
                          case "option":
                            null != r.value &&
                              e.setAttribute("value", "" + el(r.value));
                            break;
                          case "select":
                            (e.multiple = !!r.multiple),
                              null != (s = r.value)
                                ? eg(e, !!r.multiple, s, !1)
                                : null != r.defaultValue &&
                                  eg(e, !!r.multiple, r.defaultValue, !0);
                            break;
                          default:
                            "function" == typeof u.onClick && (e.onclick = rN);
                        }
                        switch (n) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            r = !!r.autoFocus;
                            break e;
                          case "img":
                            r = !0;
                            break e;
                          default:
                            r = !1;
                        }
                      }
                      r && (t.flags |= 4);
                    }
                    null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                  }
                  return l$(t), null;
                case 6:
                  if (e && null != t.stateNode) i(e, t, e.memoizedProps, r);
                  else {
                    if ("string" != typeof r && null === t.stateNode)
                      throw Error(f(166));
                    if (((n = od(of.current)), od(os.current), aj(t))) {
                      if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[r$] = t),
                        (s = r.nodeValue !== n) && null !== (e = aS))
                      )
                        switch (e.tag) {
                          case 3:
                            rT(r.nodeValue, n, 0 != (1 & e.mode));
                            break;
                          case 5:
                            !0 !== e.memoizedProps.suppressHydrationWarning &&
                              rT(r.nodeValue, n, 0 != (1 & e.mode));
                        }
                      s && (t.flags |= 4);
                    } else
                      ((r = (9 === n.nodeType
                        ? n
                        : n.ownerDocument
                      ).createTextNode(r))[r$] = t),
                        (t.stateNode = r);
                  }
                  return l$(t), null;
                case 13:
                  if (
                    (r1(oy),
                    (r = t.memoizedState),
                    null === e ||
                      (null !== e.memoizedState &&
                        null !== e.memoizedState.dehydrated))
                  ) {
                    if (
                      aE &&
                      null !== ak &&
                      0 != (1 & t.mode) &&
                      0 == (128 & t.flags)
                    )
                      aO(), aD(), (t.flags |= 98560), (s = !1);
                    else if (
                      ((s = aj(t)), null !== r && null !== r.dehydrated)
                    ) {
                      if (null === e) {
                        if (!s) throw Error(f(318));
                        if (
                          !(s =
                            null !== (s = t.memoizedState)
                              ? s.dehydrated
                              : null)
                        )
                          throw Error(f(317));
                        s[r$] = t;
                      } else
                        aD(),
                          0 == (128 & t.flags) && (t.memoizedState = null),
                          (t.flags |= 4);
                      l$(t), (s = !1);
                    } else null !== a_ && (iA(a_), (a_ = null)), (s = !0);
                    if (!s) return 65536 & t.flags ? t : null;
                  }
                  if (0 != (128 & t.flags)) return (t.lanes = n), t;
                  return (
                    (r = null !== r) !=
                      (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 != (1 & t.mode) &&
                        (null === e || 0 != (1 & oy.current)
                          ? 0 === ih && (ih = 3)
                          : iG())),
                    null !== t.updateQueue && (t.flags |= 4),
                    l$(t),
                    null
                  );
                case 4:
                  return (
                    oh(),
                    o(e, t),
                    null === e && rg(t.stateNode.containerInfo),
                    l$(t),
                    null
                  );
                case 10:
                  return a$(t.type._context), l$(t), null;
                case 19:
                  if ((r1(oy), null === (s = t.memoizedState)))
                    return l$(t), null;
                  if (
                    ((r = 0 != (128 & t.flags)), null === (c = s.rendering))
                  ) {
                    if (r) lB(s, !1);
                    else {
                      if (0 !== ih || (null !== e && 0 != (128 & e.flags)))
                        for (e = t.child; null !== e; ) {
                          if (null !== (c = og(e))) {
                            for (
                              t.flags |= 128,
                                lB(s, !1),
                                null !== (r = c.updateQueue) &&
                                  ((t.updateQueue = r), (t.flags |= 4)),
                                t.subtreeFlags = 0,
                                r = n,
                                n = t.child;
                              null !== n;

                            )
                              (s = n),
                                (e = r),
                                (s.flags &= 14680066),
                                null === (c = s.alternate)
                                  ? ((s.childLanes = 0),
                                    (s.lanes = e),
                                    (s.child = null),
                                    (s.subtreeFlags = 0),
                                    (s.memoizedProps = null),
                                    (s.memoizedState = null),
                                    (s.updateQueue = null),
                                    (s.dependencies = null),
                                    (s.stateNode = null))
                                  : ((s.childLanes = c.childLanes),
                                    (s.lanes = c.lanes),
                                    (s.child = c.child),
                                    (s.subtreeFlags = 0),
                                    (s.deletions = null),
                                    (s.memoizedProps = c.memoizedProps),
                                    (s.memoizedState = c.memoizedState),
                                    (s.updateQueue = c.updateQueue),
                                    (s.type = c.type),
                                    (e = c.dependencies),
                                    (s.dependencies =
                                      null === e
                                        ? null
                                        : {
                                            lanes: e.lanes,
                                            firstContext: e.firstContext,
                                          })),
                                (n = n.sibling);
                            return r2(oy, (1 & oy.current) | 2), t.child;
                          }
                          e = e.sibling;
                        }
                      null !== s.tail &&
                        tn() > iS &&
                        ((t.flags |= 128),
                        (r = !0),
                        lB(s, !1),
                        (t.lanes = 4194304));
                    }
                  } else {
                    if (!r) {
                      if (null !== (e = og(c))) {
                        if (
                          ((t.flags |= 128),
                          (r = !0),
                          null !== (n = e.updateQueue) &&
                            ((t.updateQueue = n), (t.flags |= 4)),
                          lB(s, !0),
                          null === s.tail &&
                            "hidden" === s.tailMode &&
                            !c.alternate &&
                            !aE)
                        )
                          return l$(t), null;
                      } else
                        2 * tn() - s.renderingStartTime > iS &&
                          1073741824 !== n &&
                          ((t.flags |= 128),
                          (r = !0),
                          lB(s, !1),
                          (t.lanes = 4194304));
                    }
                    s.isBackwards
                      ? ((c.sibling = t.child), (t.child = c))
                      : (null !== (n = s.last)
                          ? (n.sibling = c)
                          : (t.child = c),
                        (s.last = c));
                  }
                  if (null !== s.tail)
                    return (
                      (t = s.tail),
                      (s.rendering = t),
                      (s.tail = t.sibling),
                      (s.renderingStartTime = tn()),
                      (t.sibling = null),
                      (n = oy.current),
                      r2(oy, r ? (1 & n) | 2 : 1 & n),
                      t
                    );
                  return l$(t), null;
                case 22:
                case 23:
                  return (
                    iH(),
                    (r = null !== t.memoizedState),
                    null !== e &&
                      (null !== e.memoizedState) !== r &&
                      (t.flags |= 8192),
                    r && 0 != (1 & t.mode)
                      ? 0 != (1073741824 & id) &&
                        (l$(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                      : l$(t),
                    null
                  );
                case 24:
                case 25:
                  return null;
              }
              throw Error(f(156, t.tag));
            })(n, t, id))
          ) {
            is = n;
            return;
          }
        } else {
          if (
            null !==
            (n = (function (e, t) {
              switch ((ax(t), t.tag)) {
                case 1:
                  return (
                    r7(t.type) && r9(),
                    65536 & (e = t.flags)
                      ? ((t.flags = (-65537 & e) | 128), t)
                      : null
                  );
                case 3:
                  return (
                    oh(),
                    r1(r5),
                    r1(r4),
                    ow(),
                    0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                      ? ((t.flags = (-65537 & e) | 128), t)
                      : null
                  );
                case 5:
                  return ov(t), null;
                case 13:
                  if (
                    (r1(oy),
                    null !== (e = t.memoizedState) && null !== e.dehydrated)
                  ) {
                    if (null === t.alternate) throw Error(f(340));
                    aD();
                  }
                  return 65536 & (e = t.flags)
                    ? ((t.flags = (-65537 & e) | 128), t)
                    : null;
                case 19:
                  return r1(oy), null;
                case 4:
                  return oh(), null;
                case 10:
                  return a$(t.type._context), null;
                case 22:
                case 23:
                  return iH(), null;
                default:
                  return null;
              }
            })(n, t))
          ) {
            (n.flags &= 32767), (is = n);
            return;
          }
          if (null !== e)
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          else {
            (ih = 6), (is = null);
            return;
          }
        }
        if (null !== (t = t.sibling)) {
          is = t;
          return;
        }
        is = t = e;
      } while (null !== t);
      0 === ih && (ih = 5);
    }
    function iZ(e, t, n) {
      var r = tk,
        a = il.transition;
      try {
        (il.transition = null),
          (tk = 1),
          (function (e, t, n, r) {
            do i0();
            while (null !== iT);
            if (0 != (6 & ii)) throw Error(f(327));
            n = e.finishedWork;
            var a = e.finishedLanes;
            if (null !== n) {
              if (
                ((e.finishedWork = null),
                (e.finishedLanes = 0),
                n === e.current)
              )
                throw Error(f(177));
              (e.callbackNode = null), (e.callbackPriority = 0);
              var o = n.lanes | n.childLanes;
              if (
                ((function (e, t) {
                  var n = e.pendingLanes & ~t;
                  (e.pendingLanes = t),
                    (e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.expiredLanes &= t),
                    (e.mutableReadLanes &= t),
                    (e.entangledLanes &= t),
                    (t = e.entanglements);
                  var r = e.eventTimes;
                  for (e = e.expirationTimes; 0 < n; ) {
                    var a = 31 - tf(n),
                      o = 1 << a;
                    (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                  }
                })(e, o),
                e === iu && ((is = iu = null), (ic = 0)),
                (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                  iP ||
                  ((iP = !0),
                  (l = tl),
                  (i = function () {
                    return i0(), null;
                  }),
                  e7(l, i)),
                (o = 0 != (15990 & n.flags)),
                0 != (15990 & n.subtreeFlags) || o)
              ) {
                (o = il.transition), (il.transition = null);
                var l,
                  i,
                  u,
                  s,
                  c,
                  d = tk;
                tk = 1;
                var p = ii;
                (ii |= 4),
                  (io.current = null),
                  (function (e, t) {
                    if (((rR = tK), n0((e = nZ())))) {
                      if ("selectionStart" in e)
                        var n = {
                          start: e.selectionStart,
                          end: e.selectionEnd,
                        };
                      else
                        e: {
                          var r =
                            (n =
                              ((n = e.ownerDocument) && n.defaultView) ||
                              window).getSelection && n.getSelection();
                          if (r && 0 !== r.rangeCount) {
                            n = r.anchorNode;
                            var a,
                              o = r.anchorOffset,
                              l = r.focusNode;
                            r = r.focusOffset;
                            try {
                              n.nodeType, l.nodeType;
                            } catch (e) {
                              n = null;
                              break e;
                            }
                            var i = 0,
                              u = -1,
                              s = -1,
                              c = 0,
                              d = 0,
                              p = e,
                              h = null;
                            t: for (;;) {
                              for (
                                ;
                                p !== n ||
                                  (0 !== o && 3 !== p.nodeType) ||
                                  (u = i + o),
                                  p !== l ||
                                    (0 !== r && 3 !== p.nodeType) ||
                                    (s = i + r),
                                  3 === p.nodeType && (i += p.nodeValue.length),
                                  null !== (a = p.firstChild);

                              )
                                (h = p), (p = a);
                              for (;;) {
                                if (p === e) break t;
                                if (
                                  (h === n && ++c === o && (u = i),
                                  h === l && ++d === r && (s = i),
                                  null !== (a = p.nextSibling))
                                )
                                  break;
                                h = (p = h).parentNode;
                              }
                              p = a;
                            }
                            n =
                              -1 === u || -1 === s
                                ? null
                                : { start: u, end: s };
                          } else n = null;
                        }
                      n = n || { start: 0, end: 0 };
                    } else n = null;
                    for (
                      rj = { focusedElem: e, selectionRange: n },
                        tK = !1,
                        lQ = t;
                      null !== lQ;

                    )
                      if (
                        ((e = (t = lQ).child),
                        0 != (1028 & t.subtreeFlags) && null !== e)
                      )
                        (e.return = t), (lQ = e);
                      else
                        for (; null !== lQ; ) {
                          t = lQ;
                          try {
                            var m = t.alternate;
                            if (0 != (1024 & t.flags))
                              switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (null !== m) {
                                    var v = m.memoizedProps,
                                      y = m.memoizedState,
                                      g = t.stateNode,
                                      b = g.getSnapshotBeforeUpdate(
                                        t.elementType === t.type
                                          ? v
                                          : aM(t.type, v),
                                        y
                                      );
                                    g.__reactInternalSnapshotBeforeUpdate = b;
                                  }
                                  break;
                                case 3:
                                  var w = t.stateNode.containerInfo;
                                  1 === w.nodeType
                                    ? (w.textContent = "")
                                    : 9 === w.nodeType &&
                                      w.documentElement &&
                                      w.removeChild(w.documentElement);
                                  break;
                                default:
                                  throw Error(f(163));
                              }
                          } catch (e) {
                            i2(t, t.return, e);
                          }
                          if (null !== (e = t.sibling)) {
                            (e.return = t.return), (lQ = e);
                            break;
                          }
                          lQ = t.return;
                        }
                    (m = lG), (lG = !1);
                  })(e, n),
                  l6(n, e),
                  (function (e) {
                    var t = nZ(),
                      n = e.focusedElem,
                      r = e.selectionRange;
                    if (
                      t !== n &&
                      n &&
                      n.ownerDocument &&
                      (function e(t, n) {
                        return (
                          !!t &&
                          !!n &&
                          (t === n ||
                            ((!t || 3 !== t.nodeType) &&
                              (n && 3 === n.nodeType
                                ? e(t, n.parentNode)
                                : "contains" in t
                                ? t.contains(n)
                                : !!t.compareDocumentPosition &&
                                  !!(16 & t.compareDocumentPosition(n)))))
                        );
                      })(n.ownerDocument.documentElement, n)
                    ) {
                      if (null !== r && n0(n)) {
                        if (
                          ((t = r.start),
                          void 0 === (e = r.end) && (e = t),
                          "selectionStart" in n)
                        )
                          (n.selectionStart = t),
                            (n.selectionEnd = Math.min(e, n.value.length));
                        else if (
                          (e =
                            ((t = n.ownerDocument || document) &&
                              t.defaultView) ||
                            window).getSelection
                        ) {
                          e = e.getSelection();
                          var a = n.textContent.length,
                            o = Math.min(r.start, a);
                          (r = void 0 === r.end ? o : Math.min(r.end, a)),
                            !e.extend && o > r && ((a = r), (r = o), (o = a)),
                            (a = nJ(n, o));
                          var l = nJ(n, r);
                          a &&
                            l &&
                            (1 !== e.rangeCount ||
                              e.anchorNode !== a.node ||
                              e.anchorOffset !== a.offset ||
                              e.focusNode !== l.node ||
                              e.focusOffset !== l.offset) &&
                            ((t = t.createRange()).setStart(a.node, a.offset),
                            e.removeAllRanges(),
                            o > r
                              ? (e.addRange(t), e.extend(l.node, l.offset))
                              : (t.setEnd(l.node, l.offset), e.addRange(t)));
                        }
                      }
                      for (t = [], e = n; (e = e.parentNode); )
                        1 === e.nodeType &&
                          t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop,
                          });
                      for (
                        "function" == typeof n.focus && n.focus(), n = 0;
                        n < t.length;
                        n++
                      )
                        ((e = t[n]).element.scrollLeft = e.left),
                          (e.element.scrollTop = e.top);
                    }
                  })(rj),
                  (tK = !!rR),
                  (rj = rR = null),
                  (e.current = n),
                  (u = n),
                  (s = e),
                  (c = a),
                  (lQ = u),
                  (function e(t, n, r) {
                    for (var a = 0 != (1 & t.mode); null !== lQ; ) {
                      var o = lQ,
                        l = o.child;
                      if (22 === o.tag && a) {
                        var i = null !== o.memoizedState || lW;
                        if (!i) {
                          var u = o.alternate,
                            s = (null !== u && null !== u.memoizedState) || lV;
                          u = lW;
                          var c = lV;
                          if (((lW = i), (lV = s) && !c))
                            for (lQ = o; null !== lQ; )
                              (s = (i = lQ).child),
                                22 === i.tag && null !== i.memoizedState
                                  ? it(o)
                                  : null !== s
                                  ? ((s.return = i), (lQ = s))
                                  : it(o);
                          for (; null !== l; )
                            (lQ = l), e(l, n, r), (l = l.sibling);
                          (lQ = o), (lW = u), (lV = c);
                        }
                        l9(t, n, r);
                      } else
                        0 != (8772 & o.subtreeFlags) && null !== l
                          ? ((l.return = o), (lQ = l))
                          : l9(t, n, r);
                    }
                  })(u, s, c),
                  tt(),
                  (ii = p),
                  (tk = d),
                  (il.transition = o);
              } else e.current = n;
              if (
                (iP && ((iP = !1), (iT = e), (iN = a)),
                0 === (o = e.pendingLanes) && (iC = null),
                (function (e) {
                  if (tc && "function" == typeof tc.onCommitFiberRoot)
                    try {
                      tc.onCommitFiberRoot(
                        ts,
                        e,
                        void 0,
                        128 == (128 & e.current.flags)
                      );
                    } catch (e) {}
                })(n.stateNode, r),
                iF(e, tn()),
                null !== t)
              )
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                  r((a = t[n]).value, {
                    componentStack: a.stack,
                    digest: a.digest,
                  });
              if (iE) throw ((iE = !1), (e = i_), (i_ = null), e);
              0 != (1 & iN) && 0 !== e.tag && i0(),
                0 != (1 & (o = e.pendingLanes))
                  ? e === ij
                    ? iR++
                    : ((iR = 0), (ij = e))
                  : (iR = 0),
                au();
            }
          })(e, t, n, r);
      } finally {
        (il.transition = a), (tk = r);
      }
      return null;
    }
    function i0() {
      if (null !== iT) {
        var e = tE(iN),
          t = il.transition,
          n = tk;
        try {
          if (((il.transition = null), (tk = 16 > e ? 16 : e), null === iT))
            var r = !1;
          else {
            if (((e = iT), (iT = null), (iN = 0), 0 != (6 & ii)))
              throw Error(f(331));
            var a = ii;
            for (ii |= 4, lQ = e.current; null !== lQ; ) {
              var o = lQ,
                l = o.child;
              if (0 != (16 & lQ.flags)) {
                var i = o.deletions;
                if (null !== i) {
                  for (var u = 0; u < i.length; u++) {
                    var s = i[u];
                    for (lQ = s; null !== lQ; ) {
                      var c = lQ;
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          lY(8, c, o);
                      }
                      var d = c.child;
                      if (null !== d) (d.return = c), (lQ = d);
                      else
                        for (; null !== lQ; ) {
                          var p = (c = lQ).sibling,
                            h = c.return;
                          if (
                            ((function e(t) {
                              var n = t.alternate;
                              null !== n && ((t.alternate = null), e(n)),
                                (t.child = null),
                                (t.deletions = null),
                                (t.sibling = null),
                                5 === t.tag &&
                                  null !== (n = t.stateNode) &&
                                  (delete n[r$],
                                  delete n[rW],
                                  delete n[rH],
                                  delete n[rQ],
                                  delete n[rq]),
                                (t.stateNode = null),
                                (t.return = null),
                                (t.dependencies = null),
                                (t.memoizedProps = null),
                                (t.memoizedState = null),
                                (t.pendingProps = null),
                                (t.stateNode = null),
                                (t.updateQueue = null);
                            })(c),
                            c === s)
                          ) {
                            lQ = null;
                            break;
                          }
                          if (null !== p) {
                            (p.return = h), (lQ = p);
                            break;
                          }
                          lQ = h;
                        }
                    }
                  }
                  var m = o.alternate;
                  if (null !== m) {
                    var v = m.child;
                    if (null !== v) {
                      m.child = null;
                      do {
                        var y = v.sibling;
                        (v.sibling = null), (v = y);
                      } while (null !== v);
                    }
                  }
                  lQ = o;
                }
              }
              if (0 != (2064 & o.subtreeFlags) && null !== l)
                (l.return = o), (lQ = l);
              else
                for (; null !== lQ; ) {
                  if (((o = lQ), 0 != (2048 & o.flags)))
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        lY(9, o, o.return);
                    }
                  var g = o.sibling;
                  if (null !== g) {
                    (g.return = o.return), (lQ = g);
                    break;
                  }
                  lQ = o.return;
                }
            }
            var b = e.current;
            for (lQ = b; null !== lQ; ) {
              var w = (l = lQ).child;
              if (0 != (2064 & l.subtreeFlags) && null !== w)
                (w.return = l), (lQ = w);
              else
                for (l = b; null !== lQ; ) {
                  if (((i = lQ), 0 != (2048 & i.flags)))
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          lX(9, i);
                      }
                    } catch (e) {
                      i2(i, i.return, e);
                    }
                  if (i === l) {
                    lQ = null;
                    break;
                  }
                  var x = i.sibling;
                  if (null !== x) {
                    (x.return = i.return), (lQ = x);
                    break;
                  }
                  lQ = i.return;
                }
            }
            if (
              ((ii = a),
              au(),
              tc && "function" == typeof tc.onPostCommitFiberRoot)
            )
              try {
                tc.onPostCommitFiberRoot(ts, e);
              } catch (e) {}
            r = !0;
          }
          return r;
        } finally {
          (tk = n), (il.transition = t);
        }
      }
      return !1;
    }
    function i1(e, t, n) {
      (t = lp(e, (t = ls(n, t)), 1)),
        (e = a0(e, t, 1)),
        (t = iL()),
        null !== e && (tx(e, 1, t), iF(e, t));
    }
    function i2(e, t, n) {
      if (3 === e.tag) i1(e, e, n);
      else
        for (; null !== t; ) {
          if (3 === t.tag) {
            i1(t, e, n);
            break;
          }
          if (1 === t.tag) {
            var r = t.stateNode;
            if (
              "function" == typeof t.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch &&
                (null === iC || !iC.has(r)))
            ) {
              (e = lh(t, (e = ls(n, e)), 1)),
                (t = a0(t, e, 1)),
                (e = iL()),
                null !== t && (tx(t, 1, e), iF(t, e));
              break;
            }
          }
          t = t.return;
        }
    }
    function i3(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        (t = iL()),
        (e.pingedLanes |= e.suspendedLanes & n),
        iu === e &&
          (ic & n) === n &&
          (4 === ih || (3 === ih && (130023424 & ic) === ic && 500 > tn() - ix)
            ? iQ(e, 0)
            : (ig |= n)),
        iF(e, t);
    }
    function i4(e, t) {
      0 === t &&
        (0 == (1 & e.mode)
          ? (t = 1)
          : ((t = tm), 0 == (130023424 & (tm <<= 1)) && (tm = 4194304)));
      var n = iL();
      null !== (e = aG(e, t)) && (tx(e, t, n), iF(e, n));
    }
    function i5(e) {
      var t = e.memoizedState,
        n = 0;
      null !== t && (n = t.retryLane), i4(e, n);
    }
    function i8(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          null !== a && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(f(314));
      }
      null !== r && r.delete(t), i4(e, n);
    }
    function i6(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function i7(e, t, n, r) {
      return new i6(e, t, n, r);
    }
    function i9(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function ue(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = i7(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = 14680064 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function ut(e, t, n, r, a, o) {
      var l = 2;
      if (((r = e), "function" == typeof e)) i9(e) && (l = 1);
      else if ("string" == typeof e) l = 5;
      else
        e: switch (e) {
          case R:
            return un(n.children, a, o, t);
          case j:
            (l = 8), (a |= 8);
            break;
          case O:
            return (
              ((e = i7(12, n, t, 2 | a)).elementType = O), (e.lanes = o), e
            );
          case M:
            return ((e = i7(13, n, t, a)).elementType = M), (e.lanes = o), e;
          case F:
            return ((e = i7(19, n, t, a)).elementType = F), (e.lanes = o), e;
          case A:
            return ur(n, a, o, t);
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case D:
                  l = 10;
                  break e;
                case L:
                  l = 9;
                  break e;
                case z:
                  l = 11;
                  break e;
                case I:
                  l = 14;
                  break e;
                case U:
                  (l = 16), (r = null);
                  break e;
              }
            throw Error(f(130, null == e ? e : typeof e, ""));
        }
      return (
        ((t = i7(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t
      );
    }
    function un(e, t, n, r) {
      return ((e = i7(7, e, r, t)).lanes = n), e;
    }
    function ur(e, t, n, r) {
      return (
        ((e = i7(22, e, r, t)).elementType = A),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function ua(e, t, n) {
      return ((e = i7(6, e, null, t)).lanes = n), e;
    }
    function uo(e, t, n) {
      return (
        ((t = i7(
          4,
          null !== e.children ? e.children : [],
          e.key,
          t
        )).lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function ul(e, t, n, r, a) {
      (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = tw(0)),
        (this.expirationTimes = tw(-1)),
        (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
        (this.entanglements = tw(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
    }
    function ui(e, t, n, r, a, o, l, i, u) {
      return (
        (e = new ul(e, t, n, i, u)),
        1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
        (o = i7(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        aX(o),
        e
      );
    }
    function uu(e) {
      if (!e) return r3;
      e = e._reactInternals;
      e: {
        if (e4(e) !== e || 1 !== e.tag) throw Error(f(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (r7(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (null !== t);
        throw Error(f(171));
      }
      if (1 === e.tag) {
        var n = e.type;
        if (r7(n)) return at(e, n, t);
      }
      return t;
    }
    function us(e, t, n, r, a, o, l, i, u) {
      return (
        ((e = ui(n, r, !0, e, a, o, l, i, u)).context = uu(null)),
        (n = e.current),
        ((o = aZ((r = iL()), (a = iz(n)))).callback = null != t ? t : null),
        a0(n, o, a),
        (e.current.lanes = a),
        tx(e, a, r),
        iF(e, r),
        e
      );
    }
    function uc(e, t, n, r) {
      var a = t.current,
        o = iL(),
        l = iz(a);
      return (
        (n = uu(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = aZ(o, l)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = a0(a, t, l)) && (iM(e, a, l, o), a1(e, a, l)),
        l
      );
    }
    function uf(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
    }
    function ud(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
      }
    }
    function up(e, t) {
      ud(e, t), (e = e.alternate) && ud(e, t);
    }
    u = function (e, t, n) {
      if (null !== e) {
        if (e.memoizedProps !== t.pendingProps || r5.current) lb = !0;
        else {
          if (0 == (e.lanes & n) && 0 == (128 & t.flags))
            return (
              (lb = !1),
              (function (e, t, n) {
                switch (t.tag) {
                  case 3:
                    lN(t), aD();
                    break;
                  case 5:
                    om(t);
                    break;
                  case 1:
                    r7(t.type) && an(t);
                    break;
                  case 4:
                    op(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    var r = t.type._context,
                      a = t.memoizedProps.value;
                    r2(aF, r._currentValue), (r._currentValue = a);
                    break;
                  case 13:
                    if (null !== (r = t.memoizedState)) {
                      if (null !== r.dehydrated)
                        return r2(oy, 1 & oy.current), (t.flags |= 128), null;
                      if (0 != (n & t.child.childLanes)) return lD(e, t, n);
                      return (
                        r2(oy, 1 & oy.current),
                        null !== (e = lA(e, t, n)) ? e.sibling : null
                      );
                    }
                    r2(oy, 1 & oy.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                      if (r) return lI(e, t, n);
                      t.flags |= 128;
                    }
                    if (
                      (null !== (a = t.memoizedState) &&
                        ((a.rendering = null),
                        (a.tail = null),
                        (a.lastEffect = null)),
                      r2(oy, oy.current),
                      !r)
                    )
                      return null;
                    break;
                  case 22:
                  case 23:
                    return (t.lanes = 0), lE(e, t, n);
                }
                return lA(e, t, n);
              })(e, t, n)
            );
          lb = 0 != (131072 & e.flags);
        }
      } else (lb = !1), aE && 0 != (1048576 & t.flags) && ab(t, ad, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var r = t.type;
          lU(e, t), (e = t.pendingProps);
          var a = r6(t, r4.current);
          aV(t, n), (a = oD(null, t, r, e, a, n));
          var o = oL();
          return (
            (t.flags |= 1),
            "object" == typeof a &&
            null !== a &&
            "function" == typeof a.render &&
            void 0 === a.$$typeof
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                r7(r) ? ((o = !0), an(t)) : (o = !1),
                (t.memoizedState =
                  null !== a.state && void 0 !== a.state ? a.state : null),
                aX(t),
                (a.updater = a6),
                (t.stateNode = a),
                (a._reactInternals = t),
                ot(t, r, e, n),
                (t = lT(null, t, r, !0, o, n)))
              : ((t.tag = 0),
                aE && o && aw(t),
                lw(null, t, a, n),
                (t = t.child)),
            t
          );
        case 16:
          r = t.elementType;
          e: {
            switch (
              (lU(e, t),
              (e = t.pendingProps),
              (r = (a = r._init)(r._payload)),
              (t.type = r),
              (a = t.tag = (function (e) {
                if ("function" == typeof e) return i9(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === z) return 11;
                  if (e === I) return 14;
                }
                return 2;
              })(r)),
              (e = aM(r, e)),
              a)
            ) {
              case 0:
                t = lC(null, t, r, e, n);
                break e;
              case 1:
                t = lP(null, t, r, e, n);
                break e;
              case 11:
                t = lx(null, t, r, e, n);
                break e;
              case 14:
                t = lS(null, t, r, aM(r.type, e), n);
                break e;
            }
            throw Error(f(306, r, ""));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : aM(r, a)),
            lC(e, t, r, a, n)
          );
        case 1:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : aM(r, a)),
            lP(e, t, r, a, n)
          );
        case 3:
          e: {
            if ((lN(t), null === e)) throw Error(f(387));
            (r = t.pendingProps),
              (a = (o = t.memoizedState).element),
              aJ(e, t),
              a3(t, r, null, n);
            var l = t.memoizedState;
            if (((r = l.element), o.isDehydrated)) {
              if (
                ((o = {
                  element: r,
                  isDehydrated: !1,
                  cache: l.cache,
                  pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                  transitions: l.transitions,
                }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                256 & t.flags)
              ) {
                (a = ls(Error(f(423)), t)), (t = lR(e, t, r, n, a));
                break e;
              }
              if (r !== a) {
                (a = ls(Error(f(424)), t)), (t = lR(e, t, r, n, a));
                break e;
              }
              for (
                ak = rU(t.stateNode.containerInfo.firstChild),
                  aS = t,
                  aE = !0,
                  a_ = null,
                  n = oi(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
            } else {
              if ((aD(), r === a)) {
                t = lA(e, t, n);
                break e;
              }
              lw(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            om(t),
            null === e && aN(t),
            (r = t.type),
            (a = t.pendingProps),
            (o = null !== e ? e.memoizedProps : null),
            (l = a.children),
            rO(r, a) ? (l = null) : null !== o && rO(r, o) && (t.flags |= 32),
            l_(e, t),
            lw(e, t, l, n),
            t.child
          );
        case 6:
          return null === e && aN(t), null;
        case 13:
          return lD(e, t, n);
        case 4:
          return (
            op(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = ol(t, null, r, n)) : lw(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : aM(r, a)),
            lx(e, t, r, a, n)
          );
        case 7:
          return lw(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return lw(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (
              ((r = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (l = a.value),
              r2(aF, r._currentValue),
              (r._currentValue = l),
              null !== o)
            ) {
              if (nG(o.value, l)) {
                if (o.children === a.children && !r5.current) {
                  t = lA(e, t, n);
                  break e;
                }
              } else
                for (null !== (o = t.child) && (o.return = t); null !== o; ) {
                  var i = o.dependencies;
                  if (null !== i) {
                    l = o.child;
                    for (var u = i.firstContext; null !== u; ) {
                      if (u.context === r) {
                        if (1 === o.tag) {
                          (u = aZ(-1, n & -n)).tag = 2;
                          var s = o.updateQueue;
                          if (null !== s) {
                            var c = (s = s.shared).pending;
                            null === c
                              ? (u.next = u)
                              : ((u.next = c.next), (c.next = u)),
                              (s.pending = u);
                          }
                        }
                        (o.lanes |= n),
                          null !== (u = o.alternate) && (u.lanes |= n),
                          aW(o.return, n, t),
                          (i.lanes |= n);
                        break;
                      }
                      u = u.next;
                    }
                  } else if (10 === o.tag)
                    l = o.type === t.type ? null : o.child;
                  else if (18 === o.tag) {
                    if (null === (l = o.return)) throw Error(f(341));
                    (l.lanes |= n),
                      null !== (i = l.alternate) && (i.lanes |= n),
                      aW(l, n, t),
                      (l = o.sibling);
                  } else l = o.child;
                  if (null !== l) l.return = o;
                  else
                    for (l = o; null !== l; ) {
                      if (l === t) {
                        l = null;
                        break;
                      }
                      if (null !== (o = l.sibling)) {
                        (o.return = l.return), (l = o);
                        break;
                      }
                      l = l.return;
                    }
                  o = l;
                }
            }
            lw(e, t, a.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (r = t.pendingProps.children),
            aV(t, n),
            (r = r((a = aH(a)))),
            (t.flags |= 1),
            lw(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (a = aM((r = t.type), t.pendingProps)),
            (a = aM(r.type, a)),
            lS(e, t, r, a, n)
          );
        case 15:
          return lk(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : aM(r, a)),
            lU(e, t),
            (t.tag = 1),
            r7(r) ? ((e = !0), an(t)) : (e = !1),
            aV(t, n),
            a9(t, r, a),
            ot(t, r, a, n),
            lT(null, t, r, !0, e, n)
          );
        case 19:
          return lI(e, t, n);
        case 22:
          return lE(e, t, n);
      }
      throw Error(f(156, t.tag));
    };
    var uh =
      "function" == typeof reportError
        ? reportError
        : function (e) {
            console.error(e);
          };
    function um(e) {
      this._internalRoot = e;
    }
    function uv(e) {
      this._internalRoot = e;
    }
    function uy(e) {
      return !(
        !e ||
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      );
    }
    function ug(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function ub() {}
    function uw(e, t, n, r, a) {
      var o = n._reactRootContainer;
      if (o) {
        var l = o;
        if ("function" == typeof a) {
          var i = a;
          a = function () {
            var e = uf(l);
            i.call(e);
          };
        }
        uc(t, l, e, a);
      } else
        l = (function (e, t, n, r, a) {
          if (a) {
            if ("function" == typeof r) {
              var o = r;
              r = function () {
                var e = uf(l);
                o.call(e);
              };
            }
            var l = us(t, r, e, 0, null, !1, !1, "", ub);
            return (
              (e._reactRootContainer = l),
              (e[rV] = l.current),
              rg(8 === e.nodeType ? e.parentNode : e),
              iV(),
              l
            );
          }
          for (; (a = e.lastChild); ) e.removeChild(a);
          if ("function" == typeof r) {
            var i = r;
            r = function () {
              var e = uf(u);
              i.call(e);
            };
          }
          var u = ui(e, 0, !1, null, null, !1, !1, "", ub);
          return (
            (e._reactRootContainer = u),
            (e[rV] = u.current),
            rg(8 === e.nodeType ? e.parentNode : e),
            iV(function () {
              uc(t, u, n, r);
            }),
            u
          );
        })(n, t, e, a, r);
      return uf(l);
    }
    (uv.prototype.render = um.prototype.render = function (e) {
      var t = this._internalRoot;
      if (null === t) throw Error(f(409));
      uc(e, t, null, null);
    }),
      (uv.prototype.unmount = um.prototype.unmount = function () {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          iV(function () {
            uc(null, e, null, null);
          }),
            (t[rV] = null);
        }
      }),
      (uv.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = tT();
          e = { blockedOn: null, target: e, priority: t };
          for (var n = 0; n < tF.length && 0 !== t && t < tF[n].priority; n++);
          tF.splice(n, 0, e), 0 === n && tB(e);
        }
      }),
      (t_ = function (e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
              var n = tv(t.pendingLanes);
              0 !== n &&
                (tS(t, 1 | n),
                iF(t, tn()),
                0 == (6 & ii) && ((iS = tn() + 500), au()));
            }
            break;
          case 13:
            iV(function () {
              var t = aG(e, 1);
              null !== t && iM(t, e, 1, iL());
            }),
              up(e, 1);
        }
      }),
      (tC = function (e) {
        if (13 === e.tag) {
          var t = aG(e, 134217728);
          null !== t && iM(t, e, 134217728, iL()), up(e, 134217728);
        }
      }),
      (tP = function (e) {
        if (13 === e.tag) {
          var t = iz(e),
            n = aG(e, t);
          null !== n && iM(n, e, t, iL()), up(e, t);
        }
      }),
      (tT = function () {
        return tk;
      }),
      (tN = function (e, t) {
        var n = tk;
        try {
          return (tk = e), t();
        } finally {
          tk = n;
        }
      }),
      (eI = function (e, t, n) {
        switch (t) {
          case "input":
            if ((eh(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = rX(r);
                  if (!a) throw Error(f(90));
                  es(r), eh(r, a);
                }
              }
            }
            break;
          case "textarea":
            ex(e, n);
            break;
          case "select":
            null != (t = n.value) && eg(e, !!n.multiple, t, !1);
        }
      }),
      (eV = iW),
      (eH = iV);
    var ux = {
        findFiberByHostInstance: rK,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
      },
      uS = {
        bundleType: ux.bundleType,
        version: ux.version,
        rendererPackageName: ux.rendererPackageName,
        rendererConfig: ux.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: C.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = e6(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
          ux.findFiberByHostInstance ||
          function () {
            return null;
          },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
      };
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var uk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!uk.isDisabled && uk.supportsFiber)
        try {
          (ts = uk.inject(uS)), (tc = uk);
        } catch (e) {}
    }
    (W = { usingClientEntryPoint: !1, Events: [rG, rY, rX, e$, eW, iW] }),
      (V = function (e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!uy(t)) throw Error(f(200));
        return (function (e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: N,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        })(e, t, null, n);
      }),
      (H = function (e, t) {
        if (!uy(e)) throw Error(f(299));
        var n = !1,
          r = "",
          a = uh;
        return (
          null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
          (t = ui(e, 1, !1, null, null, n, !1, r, a)),
          (e[rV] = t.current),
          rg(8 === e.nodeType ? e.parentNode : e),
          new um(t)
        );
      }),
      (Q = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(f(188));
          throw Error(f(268, (e = Object.keys(e).join(","))));
        }
        return (e = null === (e = e6(t)) ? null : e.stateNode);
      }),
      (q = function (e) {
        return iV(e);
      }),
      (K = function (e, t, n) {
        if (!ug(t)) throw Error(f(200));
        return uw(null, e, t, !0, n);
      }),
      (G = function (e, t, n) {
        if (!uy(e)) throw Error(f(405));
        var r = (null != n && n.hydratedSources) || null,
          a = !1,
          o = "",
          l = uh;
        if (
          (null != n &&
            (!0 === n.unstable_strictMode && (a = !0),
            void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
            void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
          (t = us(t, null, e, 1, null != n ? n : null, a, !1, o, l)),
          (e[rV] = t.current),
          rg(e),
          r)
        )
          for (e = 0; e < r.length; e++)
            (a = (a = (n = r[e])._getVersion)(n._source)),
              null == t.mutableSourceEagerHydrationData
                ? (t.mutableSourceEagerHydrationData = [n, a])
                : t.mutableSourceEagerHydrationData.push(n, a);
        return new uv(t);
      }),
      (Y = function (e, t, n) {
        if (!ug(t)) throw Error(f(200));
        return uw(null, e, t, !1, n);
      }),
      (X = function (e) {
        if (!ug(e)) throw Error(f(40));
        return (
          !!e._reactRootContainer &&
          (iV(function () {
            uw(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[rV] = null);
            });
          }),
          !0)
        );
      }),
      (J = iW),
      (Z = function (e, t, n, r) {
        if (!ug(n)) throw Error(f(200));
        if (null == e || void 0 === e._reactInternals) throw Error(f(38));
        return uw(e, t, n, !1, r);
      }),
      (ee = "18.2.0-next-9e3b772b8-20220608");
  }),
  T("dY8mw", function (e, t) {
    e.exports = P("EBDon");
  }),
  T("EBDon", function (e, n) {
    function r(e, t) {
      var n = e.length;
      for (e.push(t); 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < l(a, t)) (e[r] = t), (e[n] = a), (n = r);
        else break;
      }
    }
    function a(e) {
      return 0 === e.length ? null : e[0];
    }
    function o(e) {
      if (0 === e.length) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var i = 2 * (r + 1) - 1,
            u = e[i],
            s = i + 1,
            c = e[s];
          if (0 > l(u, n))
            s < a && 0 > l(c, u)
              ? ((e[r] = c), (e[s] = n), (r = s))
              : ((e[r] = u), (e[i] = n), (r = i));
          else if (s < a && 0 > l(c, n)) (e[r] = c), (e[s] = n), (r = s);
          else break;
        }
      }
      return t;
    }
    function l(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    if (
      (t(
        e.exports,
        "unstable_now",
        function () {
          return i;
        },
        function (e) {
          return (i = e);
        }
      ),
      t(
        e.exports,
        "unstable_IdlePriority",
        function () {
          return u;
        },
        function (e) {
          return (u = e);
        }
      ),
      t(
        e.exports,
        "unstable_ImmediatePriority",
        function () {
          return s;
        },
        function (e) {
          return (s = e);
        }
      ),
      t(
        e.exports,
        "unstable_LowPriority",
        function () {
          return c;
        },
        function (e) {
          return (c = e);
        }
      ),
      t(
        e.exports,
        "unstable_NormalPriority",
        function () {
          return f;
        },
        function (e) {
          return (f = e);
        }
      ),
      t(
        e.exports,
        "unstable_Profiling",
        function () {
          return d;
        },
        function (e) {
          return (d = e);
        }
      ),
      t(
        e.exports,
        "unstable_UserBlockingPriority",
        function () {
          return p;
        },
        function (e) {
          return (p = e);
        }
      ),
      t(
        e.exports,
        "unstable_cancelCallback",
        function () {
          return h;
        },
        function (e) {
          return (h = e);
        }
      ),
      t(
        e.exports,
        "unstable_continueExecution",
        function () {
          return m;
        },
        function (e) {
          return (m = e);
        }
      ),
      t(
        e.exports,
        "unstable_forceFrameRate",
        function () {
          return v;
        },
        function (e) {
          return (v = e);
        }
      ),
      t(
        e.exports,
        "unstable_getCurrentPriorityLevel",
        function () {
          return y;
        },
        function (e) {
          return (y = e);
        }
      ),
      t(
        e.exports,
        "unstable_getFirstCallbackNode",
        function () {
          return g;
        },
        function (e) {
          return (g = e);
        }
      ),
      t(
        e.exports,
        "unstable_next",
        function () {
          return b;
        },
        function (e) {
          return (b = e);
        }
      ),
      t(
        e.exports,
        "unstable_pauseExecution",
        function () {
          return w;
        },
        function (e) {
          return (w = e);
        }
      ),
      t(
        e.exports,
        "unstable_requestPaint",
        function () {
          return x;
        },
        function (e) {
          return (x = e);
        }
      ),
      t(
        e.exports,
        "unstable_runWithPriority",
        function () {
          return S;
        },
        function (e) {
          return (S = e);
        }
      ),
      t(
        e.exports,
        "unstable_scheduleCallback",
        function () {
          return k;
        },
        function (e) {
          return (k = e);
        }
      ),
      t(
        e.exports,
        "unstable_shouldYield",
        function () {
          return E;
        },
        function (e) {
          return (E = e);
        }
      ),
      t(
        e.exports,
        "unstable_wrapCallback",
        function () {
          return _;
        },
        function (e) {
          return (_ = e);
        }
      ),
      "object" == typeof performance && "function" == typeof performance.now)
    ) {
      var i,
        u,
        s,
        c,
        f,
        d,
        p,
        h,
        m,
        v,
        y,
        g,
        b,
        w,
        x,
        S,
        k,
        E,
        _,
        C,
        P = performance;
      i = function () {
        return P.now();
      };
    } else {
      var T = Date,
        N = T.now();
      i = function () {
        return T.now() - N;
      };
    }
    var R = [],
      j = [],
      O = 1,
      D = null,
      L = 3,
      z = !1,
      M = !1,
      F = !1,
      I = "function" == typeof setTimeout ? setTimeout : null,
      U = "function" == typeof clearTimeout ? clearTimeout : null,
      A = "undefined" != typeof setImmediate ? setImmediate : null;
    function B(e) {
      for (var t = a(j); null !== t; ) {
        if (null === t.callback) o(j);
        else if (t.startTime <= e)
          o(j), (t.sortIndex = t.expirationTime), r(R, t);
        else break;
        t = a(j);
      }
    }
    function $(e) {
      if (((F = !1), B(e), !M)) {
        if (null !== a(R)) (M = !0), Z(W);
        else {
          var t = a(j);
          null !== t && ee($, t.startTime - e);
        }
      }
    }
    function W(e, t) {
      (M = !1), F && ((F = !1), U(Q), (Q = -1)), (z = !0);
      var n = L;
      try {
        for (
          B(t), D = a(R);
          null !== D && (!(D.expirationTime > t) || (e && !G()));

        ) {
          var r = D.callback;
          if ("function" == typeof r) {
            (D.callback = null), (L = D.priorityLevel);
            var l = r(D.expirationTime <= t);
            (t = i()),
              "function" == typeof l ? (D.callback = l) : D === a(R) && o(R),
              B(t);
          } else o(R);
          D = a(R);
        }
        if (null !== D) var u = !0;
        else {
          var s = a(j);
          null !== s && ee($, s.startTime - t), (u = !1);
        }
        return u;
      } finally {
        (D = null), (L = n), (z = !1);
      }
    }
    "undefined" != typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var V = !1,
      H = null,
      Q = -1,
      q = 5,
      K = -1;
    function G() {
      return !(i() - K < q);
    }
    function Y() {
      if (null !== H) {
        var e = i();
        K = e;
        var t = !0;
        try {
          t = H(!0, e);
        } finally {
          t ? C() : ((V = !1), (H = null));
        }
      } else V = !1;
    }
    if ("function" == typeof A)
      C = function () {
        A(Y);
      };
    else if ("undefined" != typeof MessageChannel) {
      var X = new MessageChannel(),
        J = X.port2;
      (X.port1.onmessage = Y),
        (C = function () {
          J.postMessage(null);
        });
    } else
      C = function () {
        I(Y, 0);
      };
    function Z(e) {
      (H = e), V || ((V = !0), C());
    }
    function ee(e, t) {
      Q = I(function () {
        e(i());
      }, t);
    }
    (u = 5),
      (s = 1),
      (c = 4),
      (f = 3),
      (d = null),
      (p = 2),
      (h = function (e) {
        e.callback = null;
      }),
      (m = function () {
        M || z || ((M = !0), Z(W));
      }),
      (v = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (q = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (y = function () {
        return L;
      }),
      (g = function () {
        return a(R);
      }),
      (b = function (e) {
        switch (L) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = L;
        }
        var n = L;
        L = t;
        try {
          return e();
        } finally {
          L = n;
        }
      }),
      (w = function () {}),
      (x = function () {}),
      (S = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = L;
        L = e;
        try {
          return t();
        } finally {
          L = n;
        }
      }),
      (k = function (e, t, n) {
        var o = i();
        switch (
          ((n =
            "object" == typeof n &&
            null !== n &&
            "number" == typeof (n = n.delay) &&
            0 < n
              ? o + n
              : o),
          e)
        ) {
          case 1:
            var l = -1;
            break;
          case 2:
            l = 250;
            break;
          case 5:
            l = 1073741823;
            break;
          case 4:
            l = 1e4;
            break;
          default:
            l = 5e3;
        }
        return (
          (l = n + l),
          (e = {
            id: O++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: l,
            sortIndex: -1,
          }),
          n > o
            ? ((e.sortIndex = n),
              r(j, e),
              null === a(R) &&
                e === a(j) &&
                (F ? (U(Q), (Q = -1)) : (F = !0), ee($, n - o)))
            : ((e.sortIndex = l), r(R, e), M || z || ((M = !0), Z(W))),
          e
        );
      }),
      (E = G),
      (_ = function (e) {
        var t = L;
        return function () {
          var n = L;
          L = t;
          try {
            return e.apply(this, arguments);
          } finally {
            L = n;
          }
        };
      });
  }),
  T("6JCXe", function (e, n) {
    t(
      e.exports,
      "useSyncExternalStoreWithSelector",
      function () {
        return r;
      },
      function (e) {
        return (r = e);
      }
    );
    var r,
      a = P("i7uhG"),
      o =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      l = a.useSyncExternalStore,
      i = a.useRef,
      u = a.useEffect,
      s = a.useMemo,
      c = a.useDebugValue;
    r = function (e, t, n, r, a) {
      var f = i(null);
      if (null === f.current) {
        var d = { hasValue: !1, value: null };
        f.current = d;
      } else d = f.current;
      var p = l(
        e,
        (f = s(
          function () {
            function e(e) {
              if (!u) {
                if (
                  ((u = !0), (l = e), (e = r(e)), void 0 !== a && d.hasValue)
                ) {
                  var t = d.value;
                  if (a(t, e)) return (i = t);
                }
                return (i = e);
              }
              if (((t = i), o(l, e))) return t;
              var n = r(e);
              return void 0 !== a && a(t, n) ? t : ((l = e), (i = n));
            }
            var l,
              i,
              u = !1,
              s = void 0 === n ? null : n;
            return [
              function () {
                return e(t());
              },
              null === s
                ? void 0
                : function () {
                    return e(s());
                  },
            ];
          },
          [t, n, r, a]
        ))[0],
        f[1]
      );
      return (
        u(
          function () {
            (d.hasValue = !0), (d.value = p);
          },
          [p]
        ),
        c(p),
        p
      );
    };
  });
var N = {};
N = P("jiB90");
var R = P("i7uhG"),
  j = {};
t(
  j,
  "createRoot",
  function () {
    return h;
  },
  function (e) {
    return (h = e);
  }
),
  t(
    j,
    "hydrateRoot",
    function () {
      return m;
    },
    function (e) {
      return (m = e);
    }
  );
var O = {};
!(function e() {
  if (
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (e) {
      console.error(e);
    }
})(),
  (h = (O = P("jQ4ul")).createRoot),
  (m = O.hydrateRoot);
const D =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var R = (P("i7uhG"), P("i7uhG"));
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function L() {
  return (L = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
((a = v || (v = {})).Pop = "POP"), (a.Push = "PUSH"), (a.Replace = "REPLACE");
const z = "popstate";
function M(e, t) {
  if (!1 === e || null == e) throw Error(t);
}
function F(e, t) {
  if (!e) {
    "undefined" != typeof console && console.warn(t);
    try {
      throw Error(t);
    } catch (e) {}
  }
}
function I(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function U(e, t, n, r) {
  return (
    void 0 === n && (n = null),
    L(
      { pathname: "string" == typeof e ? e : e.pathname, search: "", hash: "" },
      "string" == typeof t ? B(t) : t,
      {
        state: n,
        key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
      }
    )
  );
}
function A(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
    r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
    t
  );
}
function B(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
((o = y || (y = {})).data = "data"),
  (o.deferred = "deferred"),
  (o.redirect = "redirect"),
  (o.error = "error");
const $ = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function W(e, t, n, r) {
  return (
    void 0 === n && (n = []),
    void 0 === r && (r = {}),
    e.map((e, a) => {
      let o = [...n, a],
        l = "string" == typeof e.id ? e.id : o.join("-");
      if (
        (M(
          !0 !== e.index || !e.children,
          "Cannot specify children on an index route"
        ),
        M(
          !r[l],
          'Found a route id collision on id "' +
            l +
            "\".  Route id's must be globally unique within Data Router usages"
        ),
        !0 === e.index)
      ) {
        let n = L({}, e, t(e), { id: l });
        return (r[l] = n), n;
      }
      {
        let n = L({}, e, t(e), { id: l, children: void 0 });
        return (
          (r[l] = n), e.children && (n.children = W(e.children, t, o, r)), n
        );
      }
    })
  );
}
function V(e, t, n) {
  void 0 === n && (n = "/");
  let r = q(("string" == typeof t ? B(t) : t).pathname || "/", n);
  if (null == r) return null;
  let a = (function e(t, n, r, a) {
    void 0 === n && (n = []),
      void 0 === r && (r = []),
      void 0 === a && (a = "");
    let o = (t, o, l) => {
      var i;
      let u,
        s,
        c = {
          relativePath: void 0 === l ? t.path || "" : l,
          caseSensitive: !0 === t.caseSensitive,
          childrenIndex: o,
          route: t,
        };
      c.relativePath.startsWith("/") &&
        (M(
          c.relativePath.startsWith(a),
          'Absolute route path "' +
            c.relativePath +
            '" nested under path "' +
            a +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
        ),
        (c.relativePath = c.relativePath.slice(a.length)));
      let f = J([a, c.relativePath]),
        d = r.concat(c);
      t.children &&
        t.children.length > 0 &&
        (M(
          !0 !== t.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            f +
            '".'
        ),
        e(t.children, n, d, f)),
        (null != t.path || t.index) &&
          n.push({
            path: f,
            score:
              ((i = t.index),
              (s = (u = f.split("/")).length),
              u.some(Q) && (s += -2),
              i && (s += 2),
              u
                .filter((e) => !Q(e))
                .reduce((e, t) => e + (H.test(t) ? 3 : "" === t ? 1 : 10), s)),
            routesMeta: d,
          });
    };
    return (
      t.forEach((e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
          for (let n of (function e(t) {
            let n = t.split("/");
            if (0 === n.length) return [];
            let [r, ...a] = n,
              o = r.endsWith("?"),
              l = r.replace(/\?$/, "");
            if (0 === a.length) return o ? [l, ""] : [l];
            let i = e(a.join("/")),
              u = [];
            return (
              u.push(...i.map((e) => ("" === e ? l : [l, e].join("/")))),
              o && u.push(...i),
              u.map((e) => (t.startsWith("/") && "" === e ? "/" : e))
            );
          })(e.path))
            o(e, t, n);
        else o(e, t);
      }),
      n
    );
  })(e);
  !(function (e) {
    e.sort((e, t) => {
      var n, r;
      return e.score !== t.score
        ? t.score - e.score
        : ((n = e.routesMeta.map((e) => e.childrenIndex)),
          (r = t.routesMeta.map((e) => e.childrenIndex)),
          n.length === r.length && n.slice(0, -1).every((e, t) => e === r[t])
            ? n[n.length - 1] - r[r.length - 1]
            : 0);
    });
  })(a);
  let o = null;
  for (let e = 0; null == o && e < a.length; ++e) {
    let t = (function (e) {
      try {
        return e
          .split("/")
          .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
          .join("/");
      } catch (t) {
        return (
          F(
            !1,
            'The URL path "' +
              e +
              '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
              t +
              ")."
          ),
          e
        );
      }
    })(r);
    o = (function (e, t) {
      let { routesMeta: n } = e,
        r = {},
        a = "/",
        o = [];
      for (let e = 0; e < n.length; ++e) {
        let l = n[e],
          i = e === n.length - 1,
          u = "/" === a ? t : t.slice(a.length) || "/",
          s = (function (e, t) {
            var n, r, a;
            let o, l;
            "string" == typeof e &&
              (e = { path: e, caseSensitive: !1, end: !0 });
            let [i, u] =
                ((n = e.path),
                (r = e.caseSensitive),
                (a = e.end),
                void 0 === r && (r = !1),
                void 0 === a && (a = !0),
                F(
                  "*" === n || !n.endsWith("*") || n.endsWith("/*"),
                  'Route path "' +
                    n +
                    '" will be treated as if it were "' +
                    n.replace(/\*$/, "/*") +
                    '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                    n.replace(/\*$/, "/*") +
                    '".'
                ),
                (o = []),
                (l =
                  "^" +
                  n
                    .replace(/\/*\*?$/, "")
                    .replace(/^\/*/, "/")
                    .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                    .replace(
                      /\/:([\w-]+)(\?)?/g,
                      (e, t, n) => (
                        o.push({ paramName: t, isOptional: null != n }),
                        n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                      )
                    )),
                n.endsWith("*")
                  ? (o.push({ paramName: "*" }),
                    (l +=
                      "*" === n || "/*" === n ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
                  : a
                  ? (l += "\\/*$")
                  : "" !== n && "/" !== n && (l += "(?:(?=\\/|$))"),
                [new RegExp(l, r ? void 0 : "i"), o]),
              s = t.match(i);
            if (!s) return null;
            let c = s[0],
              f = c.replace(/(.)\/+$/, "$1"),
              d = s.slice(1);
            return {
              params: u.reduce((e, t, n) => {
                let { paramName: r, isOptional: a } = t;
                if ("*" === r) {
                  let e = d[n] || "";
                  f = c.slice(0, c.length - e.length).replace(/(.)\/+$/, "$1");
                }
                let o = d[n];
                return (
                  a && !o
                    ? (e[r] = void 0)
                    : (e[r] = (o || "").replace(/%2F/g, "/")),
                  e
                );
              }, {}),
              pathname: c,
              pathnameBase: f,
              pattern: e,
            };
          })(
            { path: l.relativePath, caseSensitive: l.caseSensitive, end: i },
            u
          );
        if (!s) return null;
        Object.assign(r, s.params);
        let c = l.route;
        o.push({
          params: r,
          pathname: J([a, s.pathname]),
          pathnameBase: Z(J([a, s.pathnameBase])),
          route: c,
        }),
          "/" !== s.pathnameBase && (a = J([a, s.pathnameBase]));
      }
      return o;
    })(a[e], t);
  }
  return o;
}
const H = /^:[\w-]+$/,
  Q = (e) => "*" === e;
function q(e, t) {
  if ("/" === t) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && "/" !== r ? null : e.slice(n) || "/";
}
function K(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t) +
    "` field [" +
    JSON.stringify(r) +
    "].  Please separate it out to the `to." +
    n +
    '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
  );
}
function G(e) {
  return e.filter(
    (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
  );
}
function Y(e, t) {
  let n = G(e);
  return t
    ? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
    : n.map((e) => e.pathnameBase);
}
function X(e, t, n, r) {
  let a, o;
  void 0 === r && (r = !1),
    "string" == typeof e
      ? (a = B(e))
      : (M(
          !(a = L({}, e)).pathname || !a.pathname.includes("?"),
          K("?", "pathname", "search", a)
        ),
        M(
          !a.pathname || !a.pathname.includes("#"),
          K("#", "pathname", "hash", a)
        ),
        M(!a.search || !a.search.includes("#"), K("#", "search", "hash", a)));
  let l = "" === e || "" === a.pathname,
    i = l ? "/" : a.pathname;
  if (null == i) o = n;
  else {
    let e = t.length - 1;
    if (!r && i.startsWith("..")) {
      let t = i.split("/");
      for (; ".." === t[0]; ) t.shift(), (e -= 1);
      a.pathname = t.join("/");
    }
    o = e >= 0 ? t[e] : "/";
  }
  let u = (function (e, t) {
      let n;
      void 0 === t && (t = "/");
      let { pathname: r, search: a = "", hash: o = "" } =
        "string" == typeof e ? B(e) : e;
      return {
        pathname: r
          ? r.startsWith("/")
            ? r
            : ((n = t.replace(/\/+$/, "").split("/")),
              r.split("/").forEach((e) => {
                ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e);
              }),
              n.length > 1 ? n.join("/") : "/")
          : t,
        search: ee(a),
        hash: et(o),
      };
    })(a, o),
    s = i && "/" !== i && i.endsWith("/"),
    c = (l || "." === i) && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
const J = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Z = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ee = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
  et = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
class en {
  constructor(e, t, n, r) {
    void 0 === r && (r = !1),
      (this.status = e),
      (this.statusText = t || ""),
      (this.internal = r),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
function er(e) {
  return (
    null != e &&
    "number" == typeof e.status &&
    "string" == typeof e.statusText &&
    "boolean" == typeof e.internal &&
    "data" in e
  );
}
const ea = ["post", "put", "patch", "delete"],
  eo = new Set(ea),
  el = new Set(["get", ...ea]),
  ei = new Set([301, 302, 303, 307, 308]),
  eu = new Set([307, 308]),
  es = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ec = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ef = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  ed = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ep = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  eh = "remix-router-transitions";
function em(e, t, n, r, a, o, l, i) {
  let u, s;
  if (l) {
    for (let e of ((u = []), t))
      if ((u.push(e), e.route.id === l)) {
        s = e;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let c = X(a || ".", Y(u, o), q(e.pathname, n) || e.pathname, "path" === i);
  return (
    null == a && ((c.search = e.search), (c.hash = e.hash)),
    (null == a || "" === a || "." === a) &&
      s &&
      s.route.index &&
      !eI(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      "/" !== n &&
      (c.pathname = "/" === c.pathname ? n : J([n, c.pathname])),
    A(c)
  );
}
function ev(e, t, n, r) {
  var a;
  let o, l;
  if (
    !r ||
    !(
      null != r &&
      (("formData" in r && null != r.formData) ||
        ("body" in r && void 0 !== r.body))
    )
  )
    return { path: n };
  if (r.formMethod && ((a = r.formMethod), !el.has(a.toLowerCase())))
    return { path: n, error: eN(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: eN(400, { type: "invalid-body" }) }),
    u = r.formMethod || "get",
    s = e ? u.toUpperCase() : u.toLowerCase(),
    c = ej(n);
  if (void 0 !== r.body) {
    if ("text/plain" === r.formEncType) {
      if (!ez(s)) return i();
      let e =
        "string" == typeof r.body
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((e, t) => {
              let [n, r] = t;
              return "" + e + n + "=" + r + "\n";
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: s,
          formAction: c,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: e,
        },
      };
    }
    if ("application/json" === r.formEncType) {
      if (!ez(s)) return i();
      try {
        let e = "string" == typeof r.body ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: s,
            formAction: c,
            formEncType: r.formEncType,
            formData: void 0,
            json: e,
            text: void 0,
          },
        };
      } catch (e) {
        return i();
      }
    }
  }
  if (
    (M(
      "function" == typeof FormData,
      "FormData is not available in this environment"
    ),
    r.formData)
  )
    (o = ek(r.formData)), (l = r.formData);
  else if (r.body instanceof FormData) (o = ek(r.body)), (l = r.body);
  else if (r.body instanceof URLSearchParams) l = eE((o = r.body));
  else if (null == r.body) (o = new URLSearchParams()), (l = new FormData());
  else
    try {
      (o = new URLSearchParams(r.body)), (l = eE(o));
    } catch (e) {
      return i();
    }
  let f = {
    formMethod: s,
    formAction: c,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: l,
    json: void 0,
    text: void 0,
  };
  if (ez(f.formMethod)) return { path: n, submission: f };
  let d = B(n);
  return (
    t && d.search && eI(d.search) && o.append("index", ""),
    (d.search = "?" + o),
    { path: A(d), submission: f }
  );
}
function ey(e, t, n, r, a, o, l, i, u, s, c, f, d, p, h, m) {
  let v = m ? Object.values(m)[0] : h ? Object.values(h)[0] : void 0,
    y = e.createURL(t.location),
    g = e.createURL(a),
    b = (function (e, t) {
      let n = e;
      if (t) {
        let r = e.findIndex((e) => e.route.id === t);
        r >= 0 && (n = e.slice(0, r));
      }
      return n;
    })(n, m ? Object.keys(m)[0] : void 0).filter((e, n) => {
      var a, u;
      let s,
        c,
        { route: f } = e;
      if (f.lazy) return !0;
      if (null == f.loader) return !1;
      if (o)
        return (
          !!f.loader.hydrate ||
          (void 0 === t.loaderData[f.id] &&
            (!t.errors || void 0 === t.errors[f.id]))
        );
      if (
        ((a = t.loaderData),
        (s = !(u = t.matches[n]) || e.route.id !== u.route.id),
        (c = void 0 === a[e.route.id]),
        s || c || i.some((t) => t === e.route.id))
      )
        return !0;
      let d = t.matches[n];
      return eb(
        e,
        L(
          {
            currentUrl: y,
            currentParams: d.params,
            nextUrl: g,
            nextParams: e.params,
          },
          r,
          {
            actionResult: v,
            defaultShouldRevalidate:
              l ||
              y.pathname + y.search === g.pathname + g.search ||
              y.search !== g.search ||
              eg(d, e),
          }
        )
      );
    }),
    w = [];
  return (
    c.forEach((e, a) => {
      if (o || !n.some((t) => t.route.id === e.routeId) || s.has(a)) return;
      let i = V(d, e.path, p);
      if (!i) {
        w.push({
          key: a,
          routeId: e.routeId,
          path: e.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let c = t.fetchers.get(a),
        h = eU(i, e.path);
      !f.has(a) &&
        (u.includes(a) ||
          (c && "idle" !== c.state && void 0 === c.data
            ? l
            : eb(
                h,
                L(
                  {
                    currentUrl: y,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: g,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: v, defaultShouldRevalidate: l }
                )
              ))) &&
        w.push({
          key: a,
          routeId: e.routeId,
          path: e.path,
          matches: i,
          match: h,
          controller: new AbortController(),
        });
    }),
    [b, w]
  );
}
function eg(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (null != n && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function eb(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if ("boolean" == typeof n) return n;
  }
  return t.defaultShouldRevalidate;
}
async function ew(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let a = n[e.id];
  M(a, "No route found in manifest");
  let o = {};
  for (let e in r) {
    let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
    F(
      !t,
      'Route "' +
        a.id +
        '" has a static property "' +
        e +
        '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
        e +
        '" will be ignored.'
    ),
      t || $.has(e) || (o[e] = r[e]);
  }
  Object.assign(a, o), Object.assign(a, L({}, t(a), { lazy: void 0 }));
}
async function ex(e, t, n, r, a, o, l, i, u) {
  var s, c, f, d;
  let p, h, m;
  void 0 === u && (u = {});
  let v = (e) => {
    let r;
    let a = new Promise((e, t) => (r = t));
    return (
      (m = () => r()),
      t.signal.addEventListener("abort", m),
      Promise.race([
        e({ request: t, params: n.params, context: u.requestContext }),
        a,
      ])
    );
  };
  try {
    let r = n.route[e];
    if (n.route.lazy) {
      if (r) {
        let e;
        let t = await Promise.all([
          v(r).catch((t) => {
            e = t;
          }),
          ew(n.route, o, a),
        ]);
        if (e) throw e;
        h = t[0];
      } else if ((await ew(n.route, o, a), (r = n.route[e]))) h = await v(r);
      else {
        if ("action" !== e) return { type: y.data, data: void 0 };
        let r = new URL(t.url),
          a = r.pathname + r.search;
        throw eN(405, { method: t.method, pathname: a, routeId: n.route.id });
      }
    } else if (r) h = await v(r);
    else {
      let e = new URL(t.url),
        n = e.pathname + e.search;
      throw eN(404, { pathname: n });
    }
    M(
      void 0 !== h,
      "You defined " +
        ("action" === e ? "an action" : "a loader") +
        " for route " +
        ('"' + n.route.id) +
        "\" but didn't return anything from your `" +
        e +
        "` function. Please return a value or `null`."
    );
  } catch (e) {
    (p = y.error), (h = e);
  } finally {
    m && t.signal.removeEventListener("abort", m);
  }
  if (
    null != (s = h) &&
    "number" == typeof s.status &&
    "string" == typeof s.statusText &&
    "object" == typeof s.headers &&
    void 0 !== s.body
  ) {
    let e,
      a = h.status;
    if (ei.has(a)) {
      let e = h.headers.get("Location");
      if (
        (M(
          e,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        ed.test(e))
      ) {
        if (!u.isStaticRequest) {
          let n = new URL(t.url),
            r = new URL(e.startsWith("//") ? n.protocol + e : e),
            a = null != q(r.pathname, l);
          r.origin === n.origin && a && (e = r.pathname + r.search + r.hash);
        }
      } else e = em(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, e, i);
      if (u.isStaticRequest) throw (h.headers.set("Location", e), h);
      return {
        type: y.redirect,
        status: a,
        location: e,
        revalidate: null !== h.headers.get("X-Remix-Revalidate"),
        reloadDocument: null !== h.headers.get("X-Remix-Reload-Document"),
      };
    }
    if (u.isRouteRequest)
      throw { type: p === y.error ? y.error : y.data, response: h };
    try {
      let t = h.headers.get("Content-Type");
      e =
        t && /\bapplication\/json\b/.test(t)
          ? null == h.body
            ? null
            : await h.json()
          : await h.text();
    } catch (e) {
      return { type: y.error, error: e };
    }
    return p === y.error
      ? { type: p, error: new en(a, h.statusText, e), headers: h.headers }
      : { type: y.data, data: e, statusCode: h.status, headers: h.headers };
  }
  return p === y.error
    ? { type: p, error: h }
    : (c = h) &&
      "object" == typeof c &&
      "object" == typeof c.data &&
      "function" == typeof c.subscribe &&
      "function" == typeof c.cancel &&
      "function" == typeof c.resolveData
    ? {
        type: y.deferred,
        deferredData: h,
        statusCode: null == (f = h.init) ? void 0 : f.status,
        headers:
          (null == (d = h.init) ? void 0 : d.headers) &&
          new Headers(h.init.headers),
      }
    : { type: y.data, data: h };
}
function eS(e, t, n, r) {
  let a = e.createURL(ej(t)).toString(),
    o = { signal: n };
  if (r && ez(r.formMethod)) {
    let { formMethod: e, formEncType: t } = r;
    (o.method = e.toUpperCase()),
      "application/json" === t
        ? ((o.headers = new Headers({ "Content-Type": t })),
          (o.body = JSON.stringify(r.json)))
        : "text/plain" === t
        ? (o.body = r.text)
        : "application/x-www-form-urlencoded" === t && r.formData
        ? (o.body = ek(r.formData))
        : (o.body = r.formData);
  }
  return new Request(a, o);
}
function ek(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, "string" == typeof r ? r : r.name);
  return t;
}
function eE(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function e_(e, t, n, r, a, o, l, i) {
  var u;
  let s, c, f, d, p;
  let { loaderData: h, errors: m } =
    ((u = a),
    (c = {}),
    (f = null),
    (d = !1),
    (p = {}),
    r.forEach((e, r) => {
      let a = n[r].route.id;
      if (
        (M(!eL(e), "Cannot handle redirect results in processLoaderData"),
        eD(e))
      ) {
        let n = eP(t, a),
          r = e.error;
        u && ((r = Object.values(u)[0]), (u = void 0)),
          null == (f = f || {})[n.route.id] && (f[n.route.id] = r),
          (c[a] = void 0),
          d || ((d = !0), (s = er(e.error) ? e.error.status : 500)),
          e.headers && (p[a] = e.headers);
      } else
        eO(e)
          ? (i.set(a, e.deferredData), (c[a] = e.deferredData.data))
          : (c[a] = e.data),
          null == e.statusCode ||
            200 === e.statusCode ||
            d ||
            (s = e.statusCode),
          e.headers && (p[a] = e.headers);
    }),
    u && ((f = u), (c[Object.keys(u)[0]] = void 0)),
    { loaderData: c, errors: f, statusCode: s || 200, loaderHeaders: p });
  for (let t = 0; t < o.length; t++) {
    let { key: n, match: r, controller: a } = o[t];
    M(
      void 0 !== l && void 0 !== l[t],
      "Did not find corresponding fetcher result"
    );
    let i = l[t];
    if (!a || !a.signal.aborted) {
      if (eD(i)) {
        let t = eP(e.matches, null == r ? void 0 : r.route.id);
        (m && m[t.route.id]) || (m = L({}, m, { [t.route.id]: i.error })),
          e.fetchers.delete(n);
      } else if (eL(i)) M(!1, "Unhandled fetcher revalidation redirect");
      else if (eO(i)) M(!1, "Unhandled fetcher deferred data");
      else {
        let t = eW(i.data);
        e.fetchers.set(n, t);
      }
    }
  }
  return { loaderData: h, errors: m };
}
function eC(e, t, n, r) {
  let a = L({}, t);
  for (let o of n) {
    let n = o.route.id;
    if (
      (t.hasOwnProperty(n)
        ? void 0 !== t[n] && (a[n] = t[n])
        : void 0 !== e[n] && o.route.loader && (a[n] = e[n]),
      r && r.hasOwnProperty(n))
    )
      break;
  }
  return a;
}
function eP(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
      .reverse()
      .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
  );
}
function eT(e) {
  let t =
    1 === e.length
      ? e[0]
      : e.find((e) => e.index || !e.path || "/" === e.path) || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function eN(e, t) {
  let { pathname: n, routeId: r, method: a, type: o } = void 0 === t ? {} : t,
    l = "Unknown Server Error",
    i = "Unknown @remix-run/router error";
  return (
    400 === e
      ? ((l = "Bad Request"),
        a && n && r
          ? (i =
              "You made a " +
              a +
              ' request to "' +
              n +
              '" but did not provide a `loader` for route "' +
              r +
              '", so there is no way to handle the request.')
          : "defer-action" === o
          ? (i = "defer() is not supported in actions")
          : "invalid-body" === o && (i = "Unable to encode submission body"))
      : 403 === e
      ? ((l = "Forbidden"),
        (i = 'Route "' + r + '" does not match URL "' + n + '"'))
      : 404 === e
      ? ((l = "Not Found"), (i = 'No route matches URL "' + n + '"'))
      : 405 === e &&
        ((l = "Method Not Allowed"),
        a && n && r
          ? (i =
              "You made a " +
              a.toUpperCase() +
              ' request to "' +
              n +
              '" but did not provide an `action` for route "' +
              r +
              '", so there is no way to handle the request.')
          : a && (i = 'Invalid request method "' + a.toUpperCase() + '"')),
    new en(e || 500, l, Error(i), !0)
  );
}
function eR(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (eL(n)) return { result: n, idx: t };
  }
}
function ej(e) {
  let t = "string" == typeof e ? B(e) : e;
  return A(L({}, t, { hash: "" }));
}
function eO(e) {
  return e.type === y.deferred;
}
function eD(e) {
  return e.type === y.error;
}
function eL(e) {
  return (e && e.type) === y.redirect;
}
function ez(e) {
  return eo.has(e.toLowerCase());
}
async function eM(e, t, n, r, a, o) {
  for (let l = 0; l < n.length; l++) {
    let i = n[l],
      u = t[l];
    if (!u) continue;
    let s = e.find((e) => e.route.id === u.route.id),
      c = null != s && !eg(s, u) && (o && o[u.route.id]) !== void 0;
    if (eO(i) && (a || c)) {
      let e = r[l];
      M(e, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await eF(i, e, a).then((e) => {
          e && (n[l] = e || n[l]);
        });
    }
  }
}
async function eF(e, t, n) {
  if ((void 0 === n && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: y.data, data: e.deferredData.unwrappedData };
      } catch (e) {
        return { type: y.error, error: e };
      }
    return { type: y.data, data: e.deferredData.data };
  }
}
function eI(e) {
  return new URLSearchParams(e).getAll("index").some((e) => "" === e);
}
function eU(e, t) {
  let n = "string" == typeof t ? B(t).search : t.search;
  if (e[e.length - 1].route.index && eI(n || "")) return e[e.length - 1];
  let r = G(e);
  return r[r.length - 1];
}
function eA(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: a,
    formData: o,
    json: l,
  } = e;
  if (t && n && r) {
    if (null != a)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (null != o)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (void 0 !== l)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function eB(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function e$(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function eW(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
Symbol("deferred");
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var R = P("i7uhG");
function eV() {
  return (eV = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
const eH = R.createContext(null),
  eQ = R.createContext(null),
  eq = R.createContext(null),
  eK = R.createContext(null),
  eG = R.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  eY = R.createContext(null);
function eX() {
  return null != R.useContext(eK);
}
function eJ() {
  return eX() || M(!1), R.useContext(eK).location;
}
function eZ(e) {
  R.useContext(eq).static || R.useLayoutEffect(e);
}
const e0 = R.createContext(null);
function e1(e, t) {
  let { relative: n } = void 0 === t ? {} : t,
    { future: r } = R.useContext(eq),
    { matches: a } = R.useContext(eG),
    { pathname: o } = eJ(),
    l = JSON.stringify(Y(a, r.v7_relativeSplatPath));
  return R.useMemo(() => X(e, JSON.parse(l), o, "path" === n), [e, l, o, n]);
}
const e2 = R.createElement(function () {
  let e = e7(),
    t = er(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null;
  return R.createElement(
    R.Fragment,
    null,
    R.createElement("h2", null, "Unexpected Application Error!"),
    R.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n
      ? R.createElement(
          "pre",
          {
            style: {
              padding: "0.5rem",
              backgroundColor: "rgba(200,200,200, 0.5)",
            },
          },
          n
        )
      : null,
    null
  );
}, null);
class e3 extends R.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location ||
      ("idle" !== t.revalidation && "idle" === e.revalidation)
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: void 0 !== e.error ? e.error : t.error,
          location: t.location,
          revalidation: e.revalidation || t.revalidation,
        };
  }
  componentDidCatch(e, t) {
    console.error(
      "React Router caught the following error during render",
      e,
      t
    );
  }
  render() {
    return void 0 !== this.state.error
      ? R.createElement(
          eG.Provider,
          { value: this.props.routeContext },
          R.createElement(eY.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function e4(e) {
  let { routeContext: t, match: n, children: r } = e,
    a = R.useContext(eH);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement(eG.Provider, { value: t }, r)
  );
}
var e5 =
    (((l = e5 || {}).UseBlocker = "useBlocker"),
    (l.UseRevalidator = "useRevalidator"),
    (l.UseNavigateStable = "useNavigate"),
    l),
  e8 =
    (((i = e8 || {}).UseBlocker = "useBlocker"),
    (i.UseLoaderData = "useLoaderData"),
    (i.UseActionData = "useActionData"),
    (i.UseRouteError = "useRouteError"),
    (i.UseNavigation = "useNavigation"),
    (i.UseRouteLoaderData = "useRouteLoaderData"),
    (i.UseMatches = "useMatches"),
    (i.UseRevalidator = "useRevalidator"),
    (i.UseNavigateStable = "useNavigate"),
    (i.UseRouteId = "useRouteId"),
    i);
function e6(e) {
  let t;
  let n = ((t = R.useContext(eG)) || M(!1), t),
    r = n.matches[n.matches.length - 1];
  return r.route.id || M(!1), r.route.id;
}
function e7() {
  var e;
  let t;
  let n = R.useContext(eY),
    r = (e8.UseRouteError, (t = R.useContext(eQ)) || M(!1), t),
    a = e6(e8.UseRouteError);
  return void 0 !== n ? n : null == (e = r.errors) ? void 0 : e[a];
}
const e9 = {};
function te(e) {
  var t;
  let n;
  return (
    (t = e.context),
    (n = R.useContext(eG).outlet)
      ? R.createElement(e0.Provider, { value: t }, n)
      : n
  );
}
function tt(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: a = v.Pop,
    navigator: o,
    static: l = !1,
    future: i,
  } = e;
  eX() && M(!1);
  let u = t.replace(/^\/*/, "/"),
    s = R.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: l,
        future: eV({ v7_relativeSplatPath: !1 }, i),
      }),
      [u, i, o, l]
    );
  "string" == typeof r && (r = B(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: p = null,
      key: h = "default",
    } = r,
    m = R.useMemo(() => {
      let e = q(c, u);
      return null == e
        ? null
        : {
            location: { pathname: e, search: f, hash: d, state: p, key: h },
            navigationType: a,
          };
    }, [u, c, f, d, p, h, a]);
  return null == m
    ? null
    : R.createElement(
        eq.Provider,
        { value: s },
        R.createElement(eK.Provider, { children: n, value: m })
      );
}
R.startTransition;
var tn =
  (((u = tn || {})[(u.pending = 0)] = "pending"),
  (u[(u.success = 1)] = "success"),
  (u[(u.error = 2)] = "error"),
  u);
function tr() {
  return (tr = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
}
new Promise(() => {});
const ta = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
  "unstable_viewTransition",
];
try {
  window.__reactRouterVersion = "6";
} catch (e) {}
const to = R.createContext({ isTransitioning: !1 }),
  tl = R.createContext(new Map()),
  ti = R.startTransition,
  tu = O.flushSync;
function ts(e) {
  tu ? tu(e) : e();
}
R.useId;
class tc {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((e, t) => {
        (this.resolve = (t) => {
          "pending" === this.status && ((this.status = "resolved"), e(t));
        }),
          (this.reject = (e) => {
            "pending" === this.status && ((this.status = "rejected"), t(e));
          });
      }));
  }
}
function tf(e) {
  let { routes: t, future: n, state: r } = e;
  return (function (e, t, n, r) {
    let a;
    eX() || M(!1);
    let { navigator: o } = R.useContext(eq),
      { matches: l } = R.useContext(eG),
      i = l[l.length - 1],
      u = i ? i.params : {};
    i && i.pathname;
    let s = i ? i.pathnameBase : "/";
    i && i.route;
    let c = eJ();
    if (t) {
      var f;
      let e = "string" == typeof t ? B(t) : t;
      "/" === s ||
        (null == (f = e.pathname) ? void 0 : f.startsWith(s)) ||
        M(!1),
        (a = e);
    } else a = c;
    let d = a.pathname || "/",
      p = d;
    if ("/" !== s) {
      let e = s.replace(/^\//, "").split("/");
      p = "/" + d.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let h = V(e, { pathname: p }),
      m = (function (e, t, n, r) {
        var a, o;
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = null),
          void 0 === r && (r = null),
          null == e)
        ) {
          if (null == (o = n) || !o.errors) return null;
          e = n.matches;
        }
        let l = e,
          i = null == (a = n) ? void 0 : a.errors;
        if (null != i) {
          let e = l.findIndex(
            (e) => e.route.id && (null == i ? void 0 : i[e.route.id])
          );
          e >= 0 || M(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        let u = !1,
          s = -1;
        if (n && r && r.v7_partialHydration)
          for (let e = 0; e < l.length; e++) {
            let t = l[e];
            if (
              ((t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
                (s = e),
              t.route.id)
            ) {
              let { loaderData: e, errors: r } = n,
                a =
                  t.route.loader &&
                  void 0 === e[t.route.id] &&
                  (!r || void 0 === r[t.route.id]);
              if (t.route.lazy || a) {
                (u = !0), (l = s >= 0 ? l.slice(0, s + 1) : [l[0]]);
                break;
              }
            }
          }
        return l.reduceRight((e, r, a) => {
          var o;
          let c;
          let f = !1,
            d = null,
            p = null;
          n &&
            ((c = i && r.route.id ? i[r.route.id] : void 0),
            (d = r.route.errorElement || e2),
            u &&
              (s < 0 && 0 === a
                ? (e9[(o = "route-fallback")] || (e9[o] = !0),
                  (f = !0),
                  (p = null))
                : s === a &&
                  ((f = !0), (p = r.route.hydrateFallbackElement || null))));
          let h = t.concat(l.slice(0, a + 1)),
            m = () => {
              let t;
              return (
                (t = c
                  ? d
                  : f
                  ? p
                  : r.route.Component
                  ? R.createElement(r.route.Component, null)
                  : r.route.element
                  ? r.route.element
                  : e),
                R.createElement(e4, {
                  match: r,
                  routeContext: {
                    outlet: e,
                    matches: h,
                    isDataRoute: null != n,
                  },
                  children: t,
                })
              );
            };
          return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a)
            ? R.createElement(e3, {
                location: n.location,
                revalidation: n.revalidation,
                component: d,
                error: c,
                children: m(),
                routeContext: { outlet: null, matches: h, isDataRoute: !0 },
              })
            : m();
        }, null);
      })(
        h &&
          h.map((e) =>
            Object.assign({}, e, {
              params: Object.assign({}, u, e.params),
              pathname: J([
                s,
                o.encodeLocation
                  ? o.encodeLocation(e.pathname).pathname
                  : e.pathname,
              ]),
              pathnameBase:
                "/" === e.pathnameBase
                  ? s
                  : J([
                      s,
                      o.encodeLocation
                        ? o.encodeLocation(e.pathnameBase).pathname
                        : e.pathnameBase,
                    ]),
            })
          ),
        l,
        n,
        r
      );
    return t && m
      ? R.createElement(
          eK.Provider,
          {
            value: {
              location: eV(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                a
              ),
              navigationType: v.Pop,
            },
          },
          m
        )
      : m;
  })(t, void 0, r, n);
}
const td =
    "undefined" != typeof window &&
    void 0 !== window.document &&
    void 0 !== window.document.createElement,
  tp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  th = R.forwardRef(function (e, t) {
    let n,
      {
        onClick: r,
        relative: a,
        reloadDocument: o,
        replace: l,
        state: i,
        target: u,
        to: s,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = e,
      d = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      })(e, ta),
      { basename: p } = R.useContext(eq),
      h = !1;
    if ("string" == typeof s && tp.test(s) && ((n = s), td))
      try {
        let e = new URL(window.location.href),
          t = new URL(s.startsWith("//") ? e.protocol + s : s),
          n = q(t.pathname, p);
        t.origin === e.origin && null != n
          ? (s = n + t.search + t.hash)
          : (h = !0);
      } catch (e) {}
    let m = (function (e, t) {
        let { relative: n } = void 0 === t ? {} : t;
        eX() || M(!1);
        let { basename: r, navigator: a } = R.useContext(eq),
          { hash: o, pathname: l, search: i } = e1(e, { relative: n }),
          u = l;
        return (
          "/" !== r && (u = "/" === l ? r : J([r, l])),
          a.createHref({ pathname: u, search: i, hash: o })
        );
      })(s, { relative: a }),
      v = (function (e, t) {
        let {
            target: n,
            replace: r,
            state: a,
            preventScrollReset: o,
            relative: l,
            unstable_viewTransition: i,
          } = void 0 === t ? {} : t,
          u = (function () {
            let { isDataRoute: e } = R.useContext(eG);
            return e
              ? (function () {
                  let e;
                  let { router: t } =
                      (e5.UseNavigateStable,
                      (e = R.useContext(eH)) || M(!1),
                      e),
                    n = e6(e8.UseNavigateStable),
                    r = R.useRef(!1);
                  return (
                    eZ(() => {
                      r.current = !0;
                    }),
                    R.useCallback(
                      function (e, a) {
                        void 0 === a && (a = {}),
                          r.current &&
                            ("number" == typeof e
                              ? t.navigate(e)
                              : t.navigate(e, eV({ fromRouteId: n }, a)));
                      },
                      [t, n]
                    )
                  );
                })()
              : (function () {
                  eX() || M(!1);
                  let e = R.useContext(eH),
                    { basename: t, future: n, navigator: r } = R.useContext(eq),
                    { matches: a } = R.useContext(eG),
                    { pathname: o } = eJ(),
                    l = JSON.stringify(Y(a, n.v7_relativeSplatPath)),
                    i = R.useRef(!1);
                  return (
                    eZ(() => {
                      i.current = !0;
                    }),
                    R.useCallback(
                      function (n, a) {
                        if ((void 0 === a && (a = {}), !i.current)) return;
                        if ("number" == typeof n) {
                          r.go(n);
                          return;
                        }
                        let u = X(n, JSON.parse(l), o, "path" === a.relative);
                        null == e &&
                          "/" !== t &&
                          (u.pathname =
                            "/" === u.pathname ? t : J([t, u.pathname])),
                          (a.replace ? r.replace : r.push)(u, a.state, a);
                      },
                      [t, r, l, o, e]
                    )
                  );
                })();
          })(),
          s = eJ(),
          c = e1(e, { relative: l });
        return R.useCallback(
          (t) => {
            0 !== t.button ||
              (n && "_self" !== n) ||
              t.metaKey ||
              t.altKey ||
              t.ctrlKey ||
              t.shiftKey ||
              (t.preventDefault(),
              u(e, {
                replace: void 0 !== r ? r : A(s) === A(c),
                state: a,
                preventScrollReset: o,
                relative: l,
                unstable_viewTransition: i,
              }));
          },
          [s, u, c, r, a, n, e, o, l, i]
        );
      })(s, {
        replace: l,
        state: i,
        target: u,
        preventScrollReset: c,
        relative: a,
        unstable_viewTransition: f,
      });
    return R.createElement(
      "a",
      tr({}, d, {
        href: n || m,
        onClick:
          h || o
            ? r
            : function (e) {
                r && r(e), e.defaultPrevented || v(e);
              },
        ref: t,
        target: u,
      })
    );
  });
((s = g || (g = {})).UseScrollRestoration = "useScrollRestoration"),
  (s.UseSubmit = "useSubmit"),
  (s.UseSubmitFetcher = "useSubmitFetcher"),
  (s.UseFetcher = "useFetcher"),
  (s.useViewTransitionState = "useViewTransitionState"),
  ((c = b || (b = {})).UseFetcher = "useFetcher"),
  (c.UseFetchers = "useFetchers"),
  (c.UseScrollRestoration = "useScrollRestoration");
var R = P("i7uhG"),
  tm = () => {
    let [e, t] = (0, R.useState)(!0);
    return (
      (0, R.useEffect)(() => {
        window.addEventListener("offline", () => {
          t(!1);
        }),
          window.addEventListener("online", () => {
            t(!0);
          });
      }, []),
      e
    );
  },
  R = P("i7uhG");
const tv = (0, R.createContext)({ loggedInUser: "Default user" });
var R = P("i7uhG"),
  ty = {};
(ty = P("6JCXe")),
  Object.prototype.hasOwnProperty,
  Object.prototype.propertyIsEnumerable;
var tg = "default" in R ? R.default : R,
  tb = Symbol.for("react-redux-context"),
  tw = "undefined" != typeof globalThis ? globalThis : {},
  tx = (function () {
    var e;
    if (!tg.createContext) return {};
    let t = null != (e = tw[tb]) ? e : (tw[tb] = new Map()),
      n = t.get(tg.createContext);
    return n || ((n = tg.createContext(null)), t.set(tg.createContext, n)), n;
  })();
function tS(e = tx) {
  return function () {
    return tg.useContext(e);
  };
}
var tk = tS(),
  tE = () => {
    throw Error("uSES not initialized!");
  },
  t_ = (e, t) => e === t,
  tC = (function (e = tx) {
    let t = e === tx ? tk : tS(e),
      n = (e, n = {}) => {
        let { equalityFn: r = t_, devModeChecks: a = {} } =
            "function" == typeof n ? { equalityFn: n } : n,
          {
            store: o,
            subscription: l,
            getServerState: i,
            stabilityCheck: u,
            identityFunctionCheck: s,
          } = t();
        tg.useRef(!0);
        let c = tg.useCallback({ [e.name]: (t) => e(t) }[e.name], [
            e,
            u,
            a.stabilityCheck,
          ]),
          f = tE(l.addNestedSub, o.getState, i || o.getState, c, r);
        return tg.useDebugValue(f), f;
      };
    return Object.assign(n, { withTypes: () => n }), n;
  })();
Symbol.for("react.element"),
  Symbol.for("react.portal"),
  Symbol.for("react.fragment"),
  Symbol.for("react.strict_mode"),
  Symbol.for("react.profiler"),
  Symbol.for("react.provider"),
  Symbol.for("react.context"),
  Symbol.for("react.server_context"),
  Symbol.for("react.forward_ref"),
  Symbol.for("react.suspense"),
  Symbol.for("react.suspense_list"),
  Symbol.for("react.memo"),
  Symbol.for("react.lazy"),
  Symbol.for("react.offscreen"),
  Symbol.for("react.client.reference");
var tP = { notify() {}, get: () => [] },
  tT =
    "undefined" != typeof window &&
    void 0 !== window.document &&
    void 0 !== window.document.createElement
      ? tg.useLayoutEffect
      : tg.useEffect,
  tN = function ({
    store: e,
    context: t,
    children: n,
    serverState: r,
    stabilityCheck: a = "once",
    identityFunctionCheck: o = "once",
  }) {
    let l = tg.useMemo(() => {
        let t = (function (e, t) {
          let n;
          let r = tP,
            a = 0,
            o = !1;
          function l() {
            s.onStateChange && s.onStateChange();
          }
          function i() {
            if ((a++, !n)) {
              let t, a;
              (n = e.subscribe(l)),
                (t = null),
                (a = null),
                (r = {
                  clear() {
                    (t = null), (a = null);
                  },
                  notify() {
                    (() => {
                      let e = t;
                      for (; e; ) e.callback(), (e = e.next);
                    })();
                  },
                  get() {
                    let e = [],
                      n = t;
                    for (; n; ) e.push(n), (n = n.next);
                    return e;
                  },
                  subscribe(e) {
                    let n = !0,
                      r = (a = { callback: e, next: null, prev: a });
                    return (
                      r.prev ? (r.prev.next = r) : (t = r),
                      function () {
                        n &&
                          null !== t &&
                          ((n = !1),
                          r.next ? (r.next.prev = r.prev) : (a = r.prev),
                          r.prev ? (r.prev.next = r.next) : (t = r.next));
                      }
                    );
                  },
                });
            }
          }
          function u() {
            a--, n && 0 === a && (n(), (n = void 0), r.clear(), (r = tP));
          }
          let s = {
            addNestedSub: function (e) {
              i();
              let t = r.subscribe(e),
                n = !1;
              return () => {
                n || ((n = !0), t(), u());
              };
            },
            notifyNestedSubs: function () {
              r.notify();
            },
            handleChangeWrapper: l,
            isSubscribed: function () {
              return o;
            },
            trySubscribe: function () {
              o || ((o = !0), i());
            },
            tryUnsubscribe: function () {
              o && ((o = !1), u());
            },
            getListeners: () => r,
          };
          return s;
        })(e);
        return {
          store: e,
          subscription: t,
          getServerState: r ? () => r : void 0,
          stabilityCheck: a,
          identityFunctionCheck: o,
        };
      }, [e, r, a, o]),
      i = tg.useMemo(() => e.getState(), [e]);
    return (
      tT(() => {
        let { subscription: t } = l;
        return (
          (t.onStateChange = t.notifyNestedSubs),
          t.trySubscribe(),
          i !== e.getState() && t.notifyNestedSubs(),
          () => {
            t.tryUnsubscribe(), (t.onStateChange = void 0);
          }
        );
      }, [l, i]),
      tg.createElement((t || tx).Provider, { value: l }, n)
    );
  };
function tR(e = tx) {
  let t = e === tx ? tk : tS(e),
    n = () => {
      let { store: e } = t();
      return e;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var tj = tR(),
  tO = (function (e = tx) {
    let t = e === tx ? tj : tR(e),
      n = () => t().dispatch;
    return Object.assign(n, { withTypes: () => n }), n;
  })();
(tE = ty.useSyncExternalStoreWithSelector), R.useSyncExternalStore;
var tD = () => {
  let [e, t] = (0, R.useState)("Login"),
    n = tm(),
    r = (0, R.useContext)(tv),
    a = tC((e) => e.cart.items);
  return (
    console.log(a),
    (0, N.jsxs)("div", {
      className: "flex bg-yellow-500 justify-between p-2 shadow-md mb-2",
      children: [
        (0, N.jsx)("a", {
          href: "/",
          children: (0, N.jsx)("img", {
            className: "w-44 md:flex",
            alt: "logo",
            src:
              "https://play-lh.googleusercontent.com/h_-TAvnkWhChVpd79kaZO0hqacftSzZ0-jCCYPvHSfdkbCpJSA-x6t3rfdpE9NxT5jf7=w600-h300-pc0xffffff-pd",
          }),
        }),
        (0, N.jsx)("div", {
          className: "flex items-center",
          children: (0, N.jsxs)("ul", {
            className: "flex p-5 m-3",
            children: [
              (0, N.jsx)("li", {
                className:
                  "px-5 py-1 hover:border-yellow-500 hover:rounded-md hover:text-yellow-500 hover:bg-black",
                children: (0, N.jsx)(th, { to: "/", children: "Home" }),
              }),
              (0, N.jsx)("li", {
                className:
                  "px-5 py-1 hover:border-yellow-500 hover:rounded-md hover:text-yellow-500 hover:bg-black ",
                children: (0, N.jsxs)(th, {
                  to: "/cart",
                  children: ["Cart(", a.length, ")"],
                }),
              }),
              (0, N.jsx)("li", {
                className:
                  "px-5 py-1 hover:border-yellow-500 hover:rounded-md hover:text-yellow-500 hover:bg-black",
                children: r.loggedInUser,
              }),
              (0, N.jsx)("li", {
                className:
                  "px-5 py-1 hover:border-yellow-500 hover:rounded-md hover:text-yellow-500 hover:bg-black",
                children: n
                  ? (0, N.jsx)("span", { children: "Online ✅" })
                  : (0, N.jsx)("span", { children: "Offline ❌" }),
              }),
            ],
          }),
        }),
      ],
    })
  );
};
const tL = (e) => {
    let { resData: t } = e,
      {
        cloudinaryImageId: n,
        name: r,
        cuisines: a,
        avgRating: o,
        costForTwo: l,
      } = t?.info;
    return (0, N.jsxs)("div", {
      className:
        "m-2 p-2 w-[234px] bg-slate-200 overflow-hidden h-[480px] hover:border hover:border-black hover:shadow-inner",
      children: [
        (0, N.jsx)("img", { alt: "food-1", src: D + n }),
        (0, N.jsx)("h2", { className: "text-l font-semibold", children: r }),
        (0, N.jsx)("h4", {
          className: "text-m font-light",
          children: a.slice(0, 3).join(","),
        }),
        (0, N.jsxs)("h4", { children: [o, " stars"] }),
        (0, N.jsx)("h4", { children: l }),
      ],
    });
  },
  tz = () => (e) =>
    (0, N.jsxs)("div", {
      children: [
        (0, N.jsx)("label", { children: "Promoted" }),
        (0, N.jsx)(tL, { ...e }),
      ],
    });
var tM = () =>
    (0, N.jsxs)("div", {
      className: "card-container",
      children: [
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
        (0, N.jsx)("div", { className: "shimmer-card" }),
      ],
    }),
  R = (P("i7uhG"), P("i7uhG"), P("i7uhG"), P("i7uhG"));
class tF extends n(R).Component {
  constructor(e) {
    super(e), (this.state = { userInfo: { name: "Dummy", location: "Dummy" } });
  }
  async componentDidMount() {
    let e = await fetch("https://api.github.com/users/Kaifgour"),
      t = await e.json();
    this.setState({ userInfo: t });
  }
  render() {
    console.log("Render");
    let { login: e, avatar_url: t } = this.state.userInfo;
    return (0, N.jsxs)("div", {
      className: "user-card",
      children: [
        (0, N.jsx)("img", { src: t }),
        (0, N.jsx)("h2", { children: e }),
        (0, N.jsx)("h4", { children: "Location: Mumbai" }),
      ],
    });
  }
}
class tI extends n(R).Component {
  render() {
    return (0, N.jsxs)("div", {
      children: [
        (0, N.jsx)("h1", { children: "This is my about page" }),
        (0, N.jsx)(tF, { name: "Kaif Gour (class)", location: "Mumbai" }),
      ],
    });
  }
}
var R = P("i7uhG"),
  tU = (e) => {
    let [t, n] = (0, R.useState)(null);
    (0, R.useEffect)(() => {
      r();
    }, []);
    let r = async () => {
      let t = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING&restaurantId=" +
          e
      );
      n((await t.json()).data);
    };
    return t;
  },
  R = P("i7uhG");
function tA(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var tB = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
  t$ = () => Math.random().toString(36).substring(7).split("").join("."),
  tW = {
    INIT: `@@redux/INIT${t$()}`,
    REPLACE: `@@redux/REPLACE${t$()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${t$()}`,
  };
function tV(e) {
  if ("object" != typeof e || null === e) return !1;
  let t = e;
  for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e);
}
function tH(...e) {
  return 0 === e.length
    ? (e) => e
    : 1 === e.length
    ? e[0]
    : e.reduce((e, t) => (...n) => e(t(...n)));
}
var tQ = Object.defineProperty,
  tq = Object.getOwnPropertySymbols,
  tK = Object.prototype.hasOwnProperty,
  tG = Object.prototype.propertyIsEnumerable,
  tY = (e, t, n) =>
    t in e
      ? tQ(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  tX = (e, t) => {
    for (var n in t || (t = {})) tK.call(t, n) && tY(e, n, t[n]);
    if (tq) for (var n of tq(t)) tG.call(t, n) && tY(e, n, t[n]);
    return e;
  },
  tJ = Symbol.for("immer-nothing"),
  tZ = Symbol.for("immer-draftable"),
  t0 = Symbol.for("immer-state");
function t1(e, ...t) {
  throw Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var t2 = Object.getPrototypeOf;
function t3(e) {
  return !!e && !!e[t0];
}
function t4(e) {
  var t;
  return (
    !!e &&
    (t8(e) ||
      Array.isArray(e) ||
      !!e[tZ] ||
      !!(null == (t = e.constructor) ? void 0 : t[tZ]) ||
      nt(e) ||
      nn(e))
  );
}
var t5 = Object.prototype.constructor.toString();
function t8(e) {
  if (!e || "object" != typeof e) return !1;
  let t = t2(e);
  if (null === t) return !0;
  let n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return (
    n === Object || ("function" == typeof n && Function.toString.call(n) === t5)
  );
}
function t6(e, t) {
  0 === t7(e)
    ? Object.entries(e).forEach(([n, r]) => {
        t(n, r, e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function t7(e) {
  let t = e[t0];
  return t ? t.type_ : Array.isArray(e) ? 1 : nt(e) ? 2 : nn(e) ? 3 : 0;
}
function t9(e, t) {
  return 2 === t7(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ne(e, t, n) {
  let r = t7(e);
  2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
}
function nt(e) {
  return e instanceof Map;
}
function nn(e) {
  return e instanceof Set;
}
function nr(e) {
  return e.copy_ || e.base_;
}
function na(e, t) {
  if (nt(e)) return new Map(e);
  if (nn(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && t8(e))
    return t2(e) ? tX({}, e) : Object.assign(Object.create(null), e);
  let n = Object.getOwnPropertyDescriptors(e);
  delete n[t0];
  let r = Reflect.ownKeys(n);
  for (let t = 0; t < r.length; t++) {
    let a = r[t],
      o = n[a];
    !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (n[a] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[a],
        });
  }
  return Object.create(t2(e), n);
}
function no(e, t = !1) {
  return (
    ni(e) ||
      t3(e) ||
      !t4(e) ||
      (t7(e) > 1 && (e.set = e.add = e.clear = e.delete = nl),
      Object.freeze(e),
      t && t6(e, (e, t) => no(t, !0), !0)),
    e
  );
}
function nl() {
  t1(2);
}
function ni(e) {
  return Object.isFrozen(e);
}
var nu = {};
function ns(e) {
  let t = nu[e];
  return t || t1(0, e), t;
}
function nc(e, t) {
  t &&
    (ns("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function nf(e) {
  nd(e), e.drafts_.forEach(nh), (e.drafts_ = null);
}
function nd(e) {
  e === w && (w = e.parent_);
}
function np(e) {
  return (w = {
    drafts_: [],
    parent_: w,
    immer_: e,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  });
}
function nh(e) {
  let t = e[t0];
  0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
}
function nm(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  let n = t.drafts_[0];
  return (
    void 0 !== e && e !== n
      ? (n[t0].modified_ && (nf(t), t1(4)),
        t4(e) && ((e = nv(t, e)), t.parent_ || ng(t, e)),
        t.patches_ &&
          ns("Patches").generateReplacementPatches_(
            n[t0].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = nv(t, n, [])),
    nf(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== tJ ? e : void 0
  );
}
function nv(e, t, n) {
  if (ni(t)) return t;
  let r = t[t0];
  if (!r) return t6(t, (a, o) => ny(e, r, t, a, o, n), !0), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return ng(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    let t = r.copy_,
      a = t,
      o = !1;
    3 === r.type_ && ((a = new Set(t)), t.clear(), (o = !0)),
      t6(a, (a, l) => ny(e, r, t, a, l, n, o)),
      ng(e, t, !1),
      n &&
        e.patches_ &&
        ns("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function ny(e, t, n, r, a, o, l) {
  if (t3(a)) {
    let l = nv(
      e,
      a,
      o && t && 3 !== t.type_ && !t9(t.assigned_, r) ? o.concat(r) : void 0
    );
    if ((ne(n, r, l), !t3(l))) return;
    e.canAutoFreeze_ = !1;
  } else l && n.add(a);
  if (t4(a) && !ni(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    nv(e, a), (t && t.scope_.parent_) || ng(e, a);
  }
}
function ng(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && no(t, n);
}
var nb = {
    get(e, t) {
      if (t === t0) return e;
      let n = nr(e);
      if (!t9(n, t))
        return (function (e, t, n) {
          var r;
          let a = nS(t, n);
          return a
            ? "value" in a
              ? a.value
              : null == (r = a.get)
              ? void 0
              : r.call(e.draft_)
            : void 0;
        })(e, n, t);
      let r = n[t];
      return e.finalized_ || !t4(r)
        ? r
        : r === nx(e.base_, t)
        ? (nE(e), (e.copy_[t] = n_(r, e)))
        : r;
    },
    has: (e, t) => t in nr(e),
    ownKeys: (e) => Reflect.ownKeys(nr(e)),
    set(e, t, n) {
      let r = nS(nr(e), t);
      if (null == r ? void 0 : r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        let r = nx(nr(e), t),
          a = null == r ? void 0 : r[t0];
        if (a && a.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (
          (n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r) &&
          (void 0 !== n || t9(e.base_, t))
        )
          return !0;
        nE(e), nk(e);
      }
      return (
        !!(
          (e.copy_[t] === n && (void 0 !== n || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t]))
        ) || ((e.copy_[t] = n), (e.assigned_[t] = !0), !0)
      );
    },
    deleteProperty: (e, t) => (
      void 0 !== nx(e.base_, t) || t in e.base_
        ? ((e.assigned_[t] = !1), nE(e), nk(e))
        : delete e.assigned_[t],
      e.copy_ && delete e.copy_[t],
      !0
    ),
    getOwnPropertyDescriptor(e, t) {
      let n = nr(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return r
        ? {
            writable: !0,
            configurable: 1 !== e.type_ || "length" !== t,
            enumerable: r.enumerable,
            value: n[t],
          }
        : r;
    },
    defineProperty() {
      t1(11);
    },
    getPrototypeOf: (e) => t2(e.base_),
    setPrototypeOf() {
      t1(12);
    },
  },
  nw = {};
function nx(e, t) {
  let n = e[t0];
  return (n ? nr(n) : e)[t];
}
function nS(e, t) {
  if (!(t in e)) return;
  let n = t2(e);
  for (; n; ) {
    let e = Object.getOwnPropertyDescriptor(n, t);
    if (e) return e;
    n = t2(n);
  }
}
function nk(e) {
  !e.modified_ && ((e.modified_ = !0), e.parent_ && nk(e.parent_));
}
function nE(e) {
  e.copy_ || (e.copy_ = na(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
function n_(e, t) {
  let n = nt(e)
    ? ns("MapSet").proxyMap_(e, t)
    : nn(e)
    ? ns("MapSet").proxySet_(e, t)
    : (function (e, t) {
        let n = Array.isArray(e),
          r = {
            type_: n ? 1 : 0,
            scope_: t ? t.scope_ : w,
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: t,
            base_: e,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1,
          },
          a = r,
          o = nb;
        n && ((a = [r]), (o = nw));
        let { revoke: l, proxy: i } = Proxy.revocable(a, o);
        return (r.draft_ = i), (r.revoke_ = l), i;
      })(e, t);
  return (t ? t.scope_ : w).drafts_.push(n), n;
}
function nC(e) {
  return (
    t3(e) || t1(10, e),
    (function e(t) {
      let n;
      if (!t4(t) || ni(t)) return t;
      let r = t[t0];
      if (r) {
        if (!r.modified_) return r.base_;
        (r.finalized_ = !0), (n = na(t, r.scope_.immer_.useStrictShallowCopy_));
      } else n = na(t, !0);
      return (
        t6(n, (t, r) => {
          ne(n, t, e(r));
        }),
        r && (r.finalized_ = !1),
        n
      );
    })(e)
  );
}
t6(nb, (e, t) => {
  nw[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (nw.deleteProperty = function (e, t) {
    return nw.set.call(this, e, t, void 0);
  }),
  (nw.set = function (e, t, n) {
    return nb.set.call(this, e[0], t, n, e[0]);
  });
var nP = new (class {
    constructor(e) {
      (this.autoFreeze_ = !0),
        (this.useStrictShallowCopy_ = !1),
        (this.produce = (e, t, n) => {
          let r;
          if ("function" == typeof e && "function" != typeof t) {
            let n = t;
            t = e;
            let r = this;
            return function (e = n, ...a) {
              return r.produce(e, (e) => t.call(this, e, ...a));
            };
          }
          if (
            ("function" != typeof t && t1(6),
            void 0 !== n && "function" != typeof n && t1(7),
            t4(e))
          ) {
            let a = np(this),
              o = n_(e, void 0),
              l = !0;
            try {
              (r = t(o)), (l = !1);
            } finally {
              l ? nf(a) : nd(a);
            }
            return nc(a, n), nm(r, a);
          }
          if (e && "object" == typeof e) t1(1, e);
          else {
            if (
              (void 0 === (r = t(e)) && (r = e),
              r === tJ && (r = void 0),
              this.autoFreeze_ && no(r, !0),
              n)
            ) {
              let t = [],
                a = [];
              ns("Patches").generateReplacementPatches_(e, r, t, a), n(t, a);
            }
            return r;
          }
        }),
        (this.produceWithPatches = (e, t) => {
          let n, r;
          return "function" == typeof e
            ? (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n))
            : [
                this.produce(e, t, (e, t) => {
                  (n = e), (r = t);
                }),
                n,
                r,
              ];
        }),
        "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
          this.setAutoFreeze(e.autoFreeze),
        "boolean" == typeof (null == e ? void 0 : e.useStrictShallowCopy) &&
          this.setUseStrictShallowCopy(e.useStrictShallowCopy);
    }
    createDraft(e) {
      t4(e) || t1(8), t3(e) && (e = nC(e));
      let t = np(this),
        n = n_(e, void 0);
      return (n[t0].isManual_ = !0), nd(t), n;
    }
    finishDraft(e, t) {
      let n = e && e[t0];
      (n && n.isManual_) || t1(9);
      let { scope_: r } = n;
      return nc(r, t), nm(void 0, r);
    }
    setAutoFreeze(e) {
      this.autoFreeze_ = e;
    }
    setUseStrictShallowCopy(e) {
      this.useStrictShallowCopy_ = e;
    }
    applyPatches(e, t) {
      let n;
      for (n = t.length - 1; n >= 0; n--) {
        let r = t[n];
        if (0 === r.path.length && "replace" === r.op) {
          e = r.value;
          break;
        }
      }
      n > -1 && (t = t.slice(n + 1));
      let r = ns("Patches").applyPatches_;
      return t3(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
    }
  })(),
  nT = nP.produce;
nP.produceWithPatches.bind(nP),
  nP.setAutoFreeze.bind(nP),
  nP.setUseStrictShallowCopy.bind(nP),
  nP.applyPatches.bind(nP),
  nP.createDraft.bind(nP),
  nP.finishDraft.bind(nP);
var nN = Object.defineProperty,
  nR = Object.getOwnPropertySymbols,
  nj = Object.prototype.hasOwnProperty,
  nO = Object.prototype.propertyIsEnumerable,
  nD = (e, t, n) =>
    t in e
      ? nN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  nL = (e, t) => {
    for (var n in t || (t = {})) nj.call(t, n) && nD(e, n, t[n]);
    if (nR) for (var n of nR(t)) nO.call(t, n) && nD(e, n, t[n]);
    return e;
  },
  nz = (e, t, n) => (nD(e, "symbol" != typeof t ? t + "" : t, n), n),
  nM = (e) => (Array.isArray(e) ? e : [e]),
  nF = 0,
  nI = class {
    constructor(e, t = nU) {
      nz(this, "revision", nF),
        nz(this, "_value"),
        nz(this, "_lastValue"),
        nz(this, "_isEqual", nU),
        (this._value = this._lastValue = e),
        (this._isEqual = t);
    }
    get value() {
      return this._value;
    }
    set value(e) {
      this.value !== e && ((this._value = e), (this.revision = ++nF));
    }
  };
function nU(e, t) {
  return e === t;
}
function nA(e) {
  return e instanceof nI || console.warn("Not a valid cell! ", e), e.value;
}
var nB = (e, t) => !1;
function n$() {
  return (function (e, t = nU) {
    return new nI(null, t);
  })(0, nB);
}
var nW = (e) => {
  let t = e.collectionTag;
  null === t && (t = e.collectionTag = n$()), nA(t);
};
Symbol();
var nV = 0,
  nH = Object.getPrototypeOf({}),
  nQ = class {
    constructor(e) {
      (this.value = e),
        nz(this, "proxy", new Proxy(this, nq)),
        nz(this, "tag", n$()),
        nz(this, "tags", {}),
        nz(this, "children", {}),
        nz(this, "collectionTag", null),
        nz(this, "id", nV++),
        (this.value = e),
        (this.tag.value = e);
    }
  },
  nq = {
    get: (e, t) =>
      (function () {
        let { value: n } = e,
          r = Reflect.get(n, t);
        if ("symbol" == typeof t || t in nH) return r;
        if ("object" == typeof r && null !== r) {
          let n = e.children[t];
          return (
            void 0 === n &&
              (n = e.children[t] = Array.isArray(r) ? new nK(r) : new nQ(r)),
            n.tag && nA(n.tag),
            n.proxy
          );
        }
        {
          let n = e.tags[t];
          return void 0 === n && ((n = e.tags[t] = n$()).value = r), nA(n), r;
        }
      })(),
    ownKeys: (e) => (nW(e), Reflect.ownKeys(e.value)),
    getOwnPropertyDescriptor: (e, t) =>
      Reflect.getOwnPropertyDescriptor(e.value, t),
    has: (e, t) => Reflect.has(e.value, t),
  },
  nK = class {
    constructor(e) {
      (this.value = e),
        nz(this, "proxy", new Proxy([this], nG)),
        nz(this, "tag", n$()),
        nz(this, "tags", {}),
        nz(this, "children", {}),
        nz(this, "collectionTag", null),
        nz(this, "id", nV++),
        (this.value = e),
        (this.tag.value = e);
    }
  },
  nG = {
    get: ([e], t) => ("length" === t && nW(e), nq.get(e, t)),
    ownKeys: ([e]) => nq.ownKeys(e),
    getOwnPropertyDescriptor: ([e], t) => nq.getOwnPropertyDescriptor(e, t),
    has: ([e], t) => nq.has(e, t),
  },
  nY =
    "undefined" != typeof WeakRef
      ? WeakRef
      : class {
          constructor(e) {
            this.value = e;
          }
          deref() {
            return this.value;
          }
        };
function nX() {
  return { s: 0, v: void 0, o: null, p: null };
}
function nJ(e, t = {}) {
  let n,
    r = nX(),
    { resultEqualityCheck: a } = t,
    o = 0;
  function l() {
    var t, l;
    let i;
    let u = r,
      { length: s } = arguments;
    for (let e = 0; e < s; e++) {
      let t = arguments[e];
      if ("function" == typeof t || ("object" == typeof t && null !== t)) {
        let e = u.o;
        null === e && (u.o = e = new WeakMap());
        let n = e.get(t);
        void 0 === n ? ((u = nX()), e.set(t, u)) : (u = n);
      } else {
        let e = u.p;
        null === e && (u.p = e = new Map());
        let n = e.get(t);
        void 0 === n ? ((u = nX()), e.set(t, u)) : (u = n);
      }
    }
    let c = u;
    if (
      (1 === u.s ? (i = u.v) : ((i = e.apply(null, arguments)), o++),
      (c.s = 1),
      a)
    ) {
      let e =
        null !=
        (l = null == (t = null == n ? void 0 : n.deref) ? void 0 : t.call(n))
          ? l
          : n;
      null != e && a(e, i) && ((i = e), 0 !== o && o--),
        (n =
          ("object" == typeof i && null !== i) || "function" == typeof i
            ? new nY(i)
            : i);
    }
    return (c.v = i), i;
  }
  return (
    (l.clearCache = () => {
      (r = nX()), l.resetResultsCount();
    }),
    (l.resultsCount = () => o),
    (l.resetResultsCount = () => {
      o = 0;
    }),
    l
  );
}
function nZ(e, ...t) {
  let n = "function" == typeof e ? { memoize: e, memoizeOptions: t } : e,
    r = (...e) => {
      let t,
        r = 0,
        a = 0,
        o = {},
        l = e.pop();
      "object" == typeof l && ((o = l), (l = e.pop())),
        (function (e, t = `expected a function, instead received ${typeof e}`) {
          if ("function" != typeof e) throw TypeError(t);
        })(
          l,
          `createSelector expects an output function after the inputs, but received: [${typeof l}]`
        );
      let {
          memoize: i,
          memoizeOptions: u = [],
          argsMemoize: s = nJ,
          argsMemoizeOptions: c = [],
          devModeChecks: f = {},
        } = nL(nL({}, n), o),
        d = nM(u),
        p = nM(c),
        h = (function (e) {
          let t = Array.isArray(e[0]) ? e[0] : e;
          return (
            !(function (
              e,
              t = "expected all items to be functions, instead received the following types: "
            ) {
              if (!e.every((e) => "function" == typeof e)) {
                let n = e
                  .map((e) =>
                    "function" == typeof e
                      ? `function ${e.name || "unnamed"}()`
                      : typeof e
                  )
                  .join(", ");
                throw TypeError(`${t}[${n}]`);
              }
            })(
              t,
              "createSelector expects all input-selectors to be functions, but received the following types: "
            ),
            t
          );
        })(e),
        m = i(function () {
          return r++, l.apply(null, arguments);
        }, ...d);
      return Object.assign(
        s(function () {
          a++;
          let e = (function (e, t) {
            let n = [],
              { length: r } = e;
            for (let a = 0; a < r; a++) n.push(e[a].apply(null, t));
            return n;
          })(h, arguments);
          return (t = m.apply(null, e));
        }, ...p),
        {
          resultFunc: l,
          memoizedResultFunc: m,
          dependencies: h,
          dependencyRecomputations: () => a,
          resetDependencyRecomputations: () => {
            a = 0;
          },
          lastResult: () => t,
          recomputations: () => r,
          resetRecomputations: () => {
            r = 0;
          },
          memoize: i,
          argsMemoize: s,
        }
      );
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var n0 = nZ(nJ),
  n1 = Object.assign(
    (e, t = n0) => {
      !(function (e, t = `expected an object, instead received ${typeof e}`) {
        if ("object" != typeof e) throw TypeError(t);
      })(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      let n = Object.keys(e);
      return t(
        n.map((t) => e[t]),
        (...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {})
      );
    },
    { withTypes: () => n1 }
  );
function n2(e) {
  return ({ dispatch: t, getState: n }) => (r) => (a) =>
    "function" == typeof a ? a(t, n, e) : r(a);
}
var n3 = n2(),
  n4 = {};
function n5() {
  throw Error("setTimeout has not been defined");
}
function n8() {
  throw Error("clearTimeout has not been defined");
}
function n6(e) {
  if (x === setTimeout) return setTimeout(e, 0);
  if ((x === n5 || !x) && setTimeout) return (x = setTimeout), setTimeout(e, 0);
  try {
    return x(e, 0);
  } catch (t) {
    try {
      return x.call(null, e, 0);
    } catch (t) {
      return x.call(this, e, 0);
    }
  }
}
!(function () {
  try {
    x = "function" == typeof setTimeout ? setTimeout : n5;
  } catch (e) {
    x = n5;
  }
  try {
    S = "function" == typeof clearTimeout ? clearTimeout : n8;
  } catch (e) {
    S = n8;
  }
})();
var n7 = [],
  n9 = !1,
  re = -1;
function rt() {
  n9 &&
    k &&
    ((n9 = !1), k.length ? (n7 = k.concat(n7)) : (re = -1), n7.length && rn());
}
function rn() {
  if (!n9) {
    var e = n6(rt);
    n9 = !0;
    for (var t = n7.length; t; ) {
      for (k = n7, n7 = []; ++re < t; ) k && k[re].run();
      (re = -1), (t = n7.length);
    }
    (k = null),
      (n9 = !1),
      (function (e) {
        if (S === clearTimeout) return clearTimeout(e);
        if ((S === n8 || !S) && clearTimeout)
          return (S = clearTimeout), clearTimeout(e);
        try {
          S(e);
        } catch (t) {
          try {
            return S.call(null, e);
          } catch (t) {
            return S.call(this, e);
          }
        }
      })(e);
  }
}
function rr(e, t) {
  (this.fun = e), (this.array = t);
}
function ra() {}
(n4.nextTick = function (e) {
  var t = Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  n7.push(new rr(e, t)), 1 !== n7.length || n9 || n6(rn);
}),
  (rr.prototype.run = function () {
    this.fun.apply(null, this.array);
  }),
  (n4.title = "browser"),
  (n4.browser = !0),
  (n4.env = {}),
  (n4.argv = []),
  (n4.version = ""),
  (n4.versions = {}),
  (n4.on = ra),
  (n4.addListener = ra),
  (n4.once = ra),
  (n4.off = ra),
  (n4.removeListener = ra),
  (n4.removeAllListeners = ra),
  (n4.emit = ra),
  (n4.prependListener = ra),
  (n4.prependOnceListener = ra),
  (n4.listeners = function (e) {
    return [];
  }),
  (n4.binding = function (e) {
    throw Error("process.binding is not supported");
  }),
  (n4.cwd = function () {
    return "/";
  }),
  (n4.chdir = function (e) {
    throw Error("process.chdir is not supported");
  }),
  (n4.umask = function () {
    return 0;
  }),
  ((...e) => {
    let t = nZ(...e),
      n = Object.assign(
        (...e) => {
          let n = t(...e),
            r = (e, ...t) => n(t3(e) ? nC(e) : e, ...t);
          return Object.assign(r, n), r;
        },
        { withTypes: () => n }
      );
  })(nJ);
var ro =
  "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (0 != arguments.length)
          return "object" == typeof arguments[0]
            ? tH
            : tH.apply(null, arguments);
      };
"undefined" != typeof window &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__;
function rl(e, t) {
  function n(...r) {
    if (t) {
      let n = t(...r);
      if (!n) throw Error(rT(0));
      return {
        type: e,
        payload: n.payload,
        ...("meta" in n && { meta: n.meta }),
        ...("error" in n && { error: n.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (t) =>
      tV(t) && "type" in t && "string" == typeof t.type && t.type === e),
    n
  );
}
var ri = class e extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, e.prototype);
  }
  static get [Symbol.species]() {
    return e;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...t) {
    return 1 === t.length && Array.isArray(t[0])
      ? new e(...t[0].concat(this))
      : new e(...t.concat(this));
  }
};
function ru(e) {
  return t4(e) ? nT(e, () => {}) : e;
}
function rs(e, t, n) {
  if (e.has(t)) {
    let r = e.get(t);
    return n.update && ((r = n.update(r, t, e)), e.set(t, r)), r;
  }
  if (!n.insert) throw Error(rT(10));
  let r = n.insert(t, e);
  return e.set(t, r), r;
}
var rc = () =>
    function (e) {
      let {
          thunk: t = !0,
          immutableCheck: n = !0,
          serializableCheck: r = !0,
          actionCreatorCheck: a = !0,
        } = e ?? {},
        o = new ri();
      return (
        t && ("boolean" == typeof t ? o.push(n3) : o.push(n2(t.extraArgument))),
        o
      );
    },
  rf = (e) => (t) => {
    setTimeout(t, e);
  },
  rd =
    "undefined" != typeof window && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : rf(10),
  rp = (e = { type: "raf" }) => (t) => (...n) => {
    let r = t(...n),
      a = !0,
      o = !1,
      l = !1,
      i = new Set(),
      u =
        "tick" === e.type
          ? queueMicrotask
          : "raf" === e.type
          ? rd
          : "callback" === e.type
          ? e.queueNotification
          : rf(e.timeout),
      s = () => {
        (l = !1), o && ((o = !1), i.forEach((e) => e()));
      };
    return Object.assign({}, r, {
      subscribe(e) {
        let t = r.subscribe(() => a && e());
        return (
          i.add(e),
          () => {
            t(), i.delete(e);
          }
        );
      },
      dispatch(e) {
        try {
          return (
            (o = !(a = !e?.meta?.RTK_autoBatch)) && !l && ((l = !0), u(s)),
            r.dispatch(e)
          );
        } finally {
          a = !0;
        }
      },
    });
  },
  rh = (e) =>
    function (t) {
      let { autoBatch: n = !0 } = t ?? {},
        r = new ri(e);
      return n && r.push(rp("object" == typeof n ? n : void 0)), r;
    };
function rm(e) {
  let t;
  let n = {},
    r = [],
    a = {
      addCase(e, t) {
        let r = "string" == typeof e ? e : e.type;
        if (!r) throw Error(rT(28));
        if (r in n) throw Error(rT(29));
        return (n[r] = t), a;
      },
      addMatcher: (e, t) => (r.push({ matcher: e, reducer: t }), a),
      addDefaultCase: (e) => ((t = e), a),
    };
  return e(a), [n, r, t];
}
var rv = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; )
      t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
        (64 * Math.random()) | 0
      ];
    return t;
  },
  ry = Symbol.for("rtk-slice-createasyncthunk"),
  rg =
    (((f = rg || {}).reducer = "reducer"),
    (f.reducerWithPrepare = "reducerWithPrepare"),
    (f.asyncThunk = "asyncThunk"),
    f),
  rb = (function ({ creators: e } = {}) {
    let t = e?.asyncThunk?.[ry];
    return function (e) {
      let n;
      let { name: r, reducerPath: a = r } = e;
      if (!r) throw Error(rT(11));
      let o =
          ("function" == typeof e.reducers
            ? e.reducers(
                (function () {
                  function e(e, t) {
                    return {
                      _reducerDefinitionType: "asyncThunk",
                      payloadCreator: e,
                      ...t,
                    };
                  }
                  return (
                    (e.withTypes = () => e),
                    {
                      reducer: (e) =>
                        Object.assign({ [e.name]: (...t) => e(...t) }[e.name], {
                          _reducerDefinitionType: "reducer",
                        }),
                      preparedReducer: (e, t) => ({
                        _reducerDefinitionType: "reducerWithPrepare",
                        prepare: e,
                        reducer: t,
                      }),
                      asyncThunk: e,
                    }
                  );
                })()
              )
            : e.reducers) || {},
        l = Object.keys(o),
        i = {},
        u = {},
        s = {},
        c = [],
        f = {
          addCase(e, t) {
            let n = "string" == typeof e ? e : e.type;
            if (!n) throw Error(rT(12));
            if (n in u) throw Error(rT(13));
            return (u[n] = t), f;
          },
          addMatcher: (e, t) => (c.push({ matcher: e, reducer: t }), f),
          exposeAction: (e, t) => ((s[e] = t), f),
          exposeCaseReducer: (e, t) => ((i[e] = t), f),
        };
      function d() {
        let [t = {}, n = [], r] =
            "function" == typeof e.extraReducers
              ? rm(e.extraReducers)
              : [e.extraReducers],
          a = { ...t, ...u };
        return (function (e, t) {
          let n,
            [r, a, o] = rm(t);
          if ("function" == typeof e) n = () => ru(e());
          else {
            let t = ru(e);
            n = () => t;
          }
          function l(e = n(), t) {
            let l = [
              r[t.type],
              ...a.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e),
            ];
            return (
              0 === l.filter((e) => !!e).length && (l = [o]),
              l.reduce((e, n) => {
                if (n) {
                  if (t3(e)) {
                    let r = n(e, t);
                    return void 0 === r ? e : r;
                  }
                  if (t4(e)) return nT(e, (e) => n(e, t));
                  {
                    let r = n(e, t);
                    if (void 0 === r) {
                      if (null === e) return e;
                      throw Error(rT(9));
                    }
                    return r;
                  }
                }
                return e;
              }, e)
            );
          }
          return (l.getInitialState = n), l;
        })(e.initialState, (e) => {
          for (let t in a) e.addCase(t, a[t]);
          for (let t of c) e.addMatcher(t.matcher, t.reducer);
          for (let t of n) e.addMatcher(t.matcher, t.reducer);
          r && e.addDefaultCase(r);
        });
      }
      l.forEach((n) => {
        let a = o[n],
          l = {
            reducerName: n,
            type: `${r}/${n}`,
            createNotation: "function" == typeof e.reducers,
          };
        "asyncThunk" === a._reducerDefinitionType
          ? (function ({ type: e, reducerName: t }, n, r, a) {
              if (!a) throw Error(rT(18));
              let {
                  payloadCreator: o,
                  fulfilled: l,
                  pending: i,
                  rejected: u,
                  settled: s,
                  options: c,
                } = n,
                f = a(e, o, c);
              r.exposeAction(t, f),
                l && r.addCase(f.fulfilled, l),
                i && r.addCase(f.pending, i),
                u && r.addCase(f.rejected, u),
                s && r.addMatcher(f.settled, s),
                r.exposeCaseReducer(t, {
                  fulfilled: l || rw,
                  pending: i || rw,
                  rejected: u || rw,
                  settled: s || rw,
                });
            })(l, a, f, t)
          : (function ({ type: e, reducerName: t, createNotation: n }, r, a) {
              let o, l;
              if ("reducer" in r) {
                if (n && "reducerWithPrepare" !== r._reducerDefinitionType)
                  throw Error(rT(17));
                (o = r.reducer), (l = r.prepare);
              } else o = r;
              a.addCase(e, o)
                .exposeCaseReducer(t, o)
                .exposeAction(t, l ? rl(e, l) : rl(e));
            })(l, a, f);
      });
      let p = (e) => e,
        h = new Map();
      function m(e, t) {
        return n || (n = d()), n(e, t);
      }
      function v() {
        return n || (n = d()), n.getInitialState();
      }
      function y(t, n = !1) {
        function r(e) {
          let r = e[t];
          return void 0 === r && n && (r = v()), r;
        }
        function a(t = p) {
          let r = rs(h, n, { insert: () => new WeakMap() });
          return rs(r, t, {
            insert: () => {
              let r = {};
              for (let [a, o] of Object.entries(e.selectors ?? {}))
                r[a] = (function (e, t, n, r) {
                  function a(o, ...l) {
                    let i = t(o);
                    return void 0 === i && r && (i = n()), e(i, ...l);
                  }
                  return (a.unwrapped = e), a;
                })(o, t, v, n);
              return r;
            },
          });
        }
        return {
          reducerPath: t,
          getSelectors: a,
          get selectors() {
            return a(r);
          },
          selectSlice: r,
        };
      }
      let g = {
        name: r,
        reducer: m,
        actions: s,
        caseReducers: i,
        getInitialState: v,
        ...y(a),
        injectInto(e, { reducerPath: t, ...n } = {}) {
          let r = t ?? a;
          return (
            e.inject({ reducerPath: r, reducer: m }, n), { ...g, ...y(r, !0) }
          );
        },
      };
      return g;
    };
  })();
function rw() {}
var rx = (e, t) => {
    if ("function" != typeof e) throw Error(rT(32));
  },
  { assign: rS } = Object,
  rk = "listenerMiddleware",
  rE = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: a, effect: o } = e;
    if (t) a = rl(t).match;
    else if (n) (t = n.type), (a = n.match);
    else if (r) a = r;
    else if (a);
    else throw Error(rT(21));
    return rx(o, "options.listener"), { predicate: a, type: t, effect: o };
  },
  r_ = Object.assign(
    (e) => {
      let { type: t, predicate: n, effect: r } = rE(e);
      return {
        id: rv(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw Error(rT(22));
        },
      };
    },
    { withTypes: () => r_ }
  ),
  rC = Object.assign(rl(`${rk}/add`), { withTypes: () => rC });
rl(`${rk}/removeAll`);
var rP = Object.assign(rl(`${rk}/remove`), { withTypes: () => rP });
function rT(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
Symbol.for("rtk-state-proxy-original");
const rN = rb({
    name: "cart",
    initialState: { items: [] },
    reducers: {
      addItem: (e, t) => {
        e.items.push(t.payload);
      },
      removeItem: (e) => {
        e.items.pop();
      },
      clearCart: (e) => {
        e.items.length = 0;
      },
    },
  }),
  { addItem: rR, removeItem: rj, clearCart: rO } = rN.actions;
var rD = rN.reducer,
  rL = ({ items: e }) => {
    let t = tO(),
      n = (e) => {
        t(rR(e));
      };
    return (0, N.jsx)("div", {
      children: e.map((e) =>
        (0, N.jsxs)(
          "div",
          {
            className: "p-2 m-2 border-b-2 text-left flex",
            children: [
              (0, N.jsxs)("div", {
                className: "w-9/12",
                children: [
                  (0, N.jsx)("span", {
                    className: "py-2",
                    children: e.card.info.name,
                  }),
                  (0, N.jsxs)("span", {
                    children: [
                      " ",
                      "- ₹",
                      e.card.info.price
                        ? e.card.info.price / 100
                        : e.card.info.defaultPrice / 100,
                    ],
                  }),
                  (0, N.jsx)("p", {
                    className: "text-xs font-light",
                    children: e.card.info.description,
                  }),
                ],
              }),
              (0, N.jsxs)("div", {
                className: "w-3/12 p-4",
                onClick: (e) => e.stopPropagation(),
                children: [
                  (0, N.jsx)("button", {
                    className:
                      " bg-yellow-400 px-2 py-1  content-center rounded-sm hover:text-yellow-500 hover:bg-black absolute",
                    onClick: () => n(e),
                    children: "Add+",
                  }),
                  (0, N.jsx)("img", {
                    src: D + e.card.info.imageId,
                    className: "w-full h-32 rounded-md",
                  }),
                ],
              }),
            ],
          },
          e.card.info.id
        )
      ),
    });
  },
  rz = (e) => {
    let [t, n] = (0, R.useState)(!1);
    return (0, N.jsx)("div", {
      children: (0, N.jsxs)("div", {
        className: "w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4",
        onClick: () => {
          n(!t);
        },
        children: [
          (0, N.jsxs)("div", {
            className: "flex justify-between",
            children: [
              (0, N.jsxs)("span", {
                className: "font-bold text-lg",
                children: [e.data.title, "(", e.data.itemCards.length, ")"],
              }),
              !t && (0, N.jsx)("span", { children: "\uD83D\uDD3D" }),
            ],
          }),
          t && (0, N.jsx)(rL, { items: e.data.itemCards }),
        ],
      }),
    });
  };
const rM = (function (e) {
  let t, n;
  let r = rc(),
    {
      reducer: a,
      middleware: o,
      devTools: l = !0,
      preloadedState: i,
      enhancers: u,
    } = e || {};
  if ("function" == typeof a) t = a;
  else if (tV(a))
    t = (function (e) {
      let t;
      let n = Object.keys(e),
        r = {};
      for (let t = 0; t < n.length; t++) {
        let a = n[t];
        "function" == typeof e[a] && (r[a] = e[a]);
      }
      let a = Object.keys(r);
      try {
        !(function (e) {
          Object.keys(e).forEach((t) => {
            let n = e[t];
            if (void 0 === n(void 0, { type: tW.INIT })) throw Error(tA(12));
            if (void 0 === n(void 0, { type: tW.PROBE_UNKNOWN_ACTION() }))
              throw Error(tA(13));
          });
        })(r);
      } catch (e) {
        t = e;
      }
      return function (e = {}, n) {
        if (t) throw t;
        let o = !1,
          l = {};
        for (let t = 0; t < a.length; t++) {
          let i = a[t],
            u = r[i],
            s = e[i],
            c = u(s, n);
          if (void 0 === c) throw (n && n.type, Error(tA(14)));
          (l[i] = c), (o = o || c !== s);
        }
        return (o = o || a.length !== Object.keys(e).length) ? l : e;
      };
    })(a);
  else throw Error(rT(1));
  n = "function" == typeof o ? o(r) : r();
  let s = tH;
  l && (s = ro({ trace: !1, ...("object" == typeof l && l) }));
  let c = rh(
    (function (...e) {
      return (t) => (n, r) => {
        let a = t(n, r),
          o = () => {
            throw Error(tA(15));
          },
          l = { getState: a.getState, dispatch: (e, ...t) => o(e, ...t) };
        return (
          (o = tH(...e.map((e) => e(l)))(a.dispatch)), { ...a, dispatch: o }
        );
      };
    })(...n)
  );
  return (function e(t, n, r) {
    if ("function" != typeof t) throw Error(tA(2));
    if (
      ("function" == typeof n && "function" == typeof r) ||
      ("function" == typeof r && "function" == typeof arguments[3])
    )
      throw Error(tA(0));
    if (
      ("function" == typeof n && void 0 === r && ((r = n), (n = void 0)),
      void 0 !== r)
    ) {
      if ("function" != typeof r) throw Error(tA(1));
      return r(e)(t, n);
    }
    let a = t,
      o = n,
      l = new Map(),
      i = l,
      u = 0,
      s = !1;
    function c() {
      i === l &&
        ((i = new Map()),
        l.forEach((e, t) => {
          i.set(t, e);
        }));
    }
    function f() {
      if (s) throw Error(tA(3));
      return o;
    }
    function d(e) {
      if ("function" != typeof e) throw Error(tA(4));
      if (s) throw Error(tA(5));
      let t = !0;
      c();
      let n = u++;
      return (
        i.set(n, e),
        function () {
          if (t) {
            if (s) throw Error(tA(6));
            (t = !1), c(), i.delete(n), (l = null);
          }
        }
      );
    }
    function p(e) {
      if (!tV(e)) throw Error(tA(7));
      if (void 0 === e.type) throw Error(tA(8));
      if ("string" != typeof e.type) throw Error(tA(17));
      if (s) throw Error(tA(9));
      try {
        (s = !0), (o = a(o, e));
      } finally {
        s = !1;
      }
      return (
        (l = i).forEach((e) => {
          e();
        }),
        e
      );
    }
    return (
      p({ type: tW.INIT }),
      {
        dispatch: p,
        subscribe: d,
        getState: f,
        replaceReducer: function (e) {
          if ("function" != typeof e) throw Error(tA(10));
          (a = e), p({ type: tW.REPLACE });
        },
        [tB]: function () {
          return {
            subscribe(e) {
              if ("object" != typeof e || null === e) throw Error(tA(11));
              function t() {
                e.next && e.next(f());
              }
              return t(), { unsubscribe: d(t) };
            },
            [tB]() {
              return this;
            },
          };
        },
      }
    );
  })(t, i, s(...("function" == typeof u ? u(c) : c())));
})({ reducer: { cart: rD } });
var R = P("i7uhG"),
  rF = "default" in R ? R.default : R,
  rI = Symbol.for("react-redux-context"),
  rU = "undefined" != typeof globalThis ? globalThis : {},
  rA = (function () {
    if (!rF.createContext) return {};
    let e = rU[rI] ?? (rU[rI] = new Map()),
      t = e.get(rF.createContext);
    return t || ((t = rF.createContext(null)), e.set(rF.createContext, t)), t;
  })();
function rB(e = rA) {
  return function () {
    return rF.useContext(e);
  };
}
var r$ = rB();
function rW(e = rA) {
  let t = e === rA ? r$ : rB(e),
    n = () => {
      let { store: e } = t();
      return e;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
Symbol.for("react.element"),
  Symbol.for("react.portal"),
  Symbol.for("react.fragment"),
  Symbol.for("react.strict_mode"),
  Symbol.for("react.profiler"),
  Symbol.for("react.provider"),
  Symbol.for("react.context"),
  Symbol.for("react.server_context"),
  Symbol.for("react.forward_ref"),
  Symbol.for("react.suspense"),
  Symbol.for("react.suspense_list"),
  Symbol.for("react.memo"),
  Symbol.for("react.lazy"),
  Symbol.for("react.offscreen"),
  Symbol.for("react.client.reference"),
  "undefined" != typeof window &&
  void 0 !== window.document &&
  void 0 !== window.document.createElement
    ? rF.useLayoutEffect
    : rF.useEffect;
var rV = rW(),
  rH = (function (e = rA) {
    let t = e === rA ? rV : rW(e),
      n = () => t().dispatch;
    return Object.assign(n, { withTypes: () => n }), n;
  })();
ty.useSyncExternalStoreWithSelector, R.useSyncExternalStore;
var rQ = () => {
  let e = new Date();
  return (0, N.jsx)("div", {
    className:
      "bottom-0 left-0 font-bold bg-yellow-500 w-screen h-6 text-center align-middle",
    children: (0, N.jsxs)("span", {
      children: ["KaifGour-©Copyright ", e.getFullYear()],
    }),
  });
};
const rq =
  ((d = [
    {
      path: "/",
      element: (0, N.jsx)(() => {
        let [e, t] = (0, R.useState)();
        return (
          (0, R.useEffect)(() => {
            t("Default User");
          }),
          (0, N.jsx)(tN, {
            store: rM,
            children: (0, N.jsx)(tv.Provider, {
              value: { loggedInUser: e },
              children: (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(tD, {}),
                  (0, N.jsx)(te, {}),
                  (0, N.jsx)(rQ, {}),
                ],
              }),
            }),
          })
        );
      }, {}),
      children: [
        {
          path: "/",
          element: (0, N.jsx)(() => {
            let [e, t] = (0, R.useState)([]),
              [n, r] = (0, R.useState)([]),
              [a, o] = (0, R.useState)(""),
              l = tz(tL);
            (0, R.useEffect)(() => {
              i();
            }, []);
            let i = async () => {
              let e = await fetch(
                  "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
                ),
                n = await e.json();
              t(
                n.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
              ),
                r(
                  n.data.cards[4].card.card.gridElements.infoWithStyle
                    .restaurants
                );
            };
            return !1 === tm()
              ? (0, N.jsx)("h1", {
                  children: "You are offline,check your connection ",
                })
              : 0 === e.length
              ? (0, N.jsx)(tM, {})
              : (0, N.jsxs)("div", {
                  className: "body",
                  children: [
                    (0, N.jsx)("div", {
                      className: "flex",
                      children: (0, N.jsxs)("div", {
                        className: "m-2 p-2",
                        children: [
                          (0, N.jsx)("input", {
                            type: "text",
                            className: "border border-black rounded-md p-1",
                            value: a,
                            onChange: (e) => {
                              o(e.target.value);
                            },
                          }),
                          (0, N.jsx)("button", {
                            className:
                              " bg-yellow-400 px-3 py-1 m-2 rounded-md hover:text-yellow-500 hover:bg-black",
                            onClick: () => {
                              r(
                                e.filter((e) =>
                                  e.info.name
                                    .toLowerCase()
                                    .includes(a.toLowerCase())
                                )
                              );
                            },
                            children: "Search",
                          }),
                          (0, N.jsx)("button", {
                            className:
                              " bg-yellow-400 px-3 py-1 m-2 rounded-md hover:text-yellow-500 hover:bg-black",
                            onClick: () => {
                              r(
                                (filteredList = e.filter(
                                  (e) => e.info.avgRating > 4.2
                                ))
                              );
                            },
                            children: "Top Rated Restaurants",
                          }),
                        ],
                      }),
                    }),
                    (0, N.jsx)("div", {
                      className: "flex flex-wrap overflow-auto",
                      children: n.map((e) =>
                        (0, N.jsx)(
                          th,
                          {
                            to: "/restaurants/" + e.info.id,
                            children: e.info.promotion
                              ? (0, N.jsx)(l, { resData: e })
                              : (0, N.jsx)(tL, { resData: e }),
                          },
                          e.info.id
                        )
                      ),
                    }),
                  ],
                });
          }, {}),
        },
        { path: "/about", element: (0, N.jsx)(tI, {}) },
        {
          path: "/contact",
          element: (0, N.jsx)(() => {
            let [e, t] = (0, R.useState)(0);
            return (0, N.jsxs)(N.Fragment, {
              children: [
                (0, N.jsxs)("button", {
                  onClick: function () {
                    t(e + 1);
                  },
                  children: ["Click me ", e],
                }),
                (0, N.jsx)("h1", { children: "This is my Contact" }),
              ],
            });
          }, {}),
        },
        {
          path: "/cart",
          element: (0, N.jsx)(() => {
            let e = rH(),
              t = tC((e) => e.cart.items);
            return (
              console.log(t),
              (0, N.jsxs)("div", {
                className: "text-center m-5 p-5",
                children: [
                  (0, N.jsx)("h1", {
                    className: "text-2xl font-bold m-5",
                    children: "Cart",
                  }),
                  (0, N.jsxs)("div", {
                    className: "w-6/12 m-auto",
                    children: [
                      (0, N.jsx)("button", {
                        id: "btn",
                        className:
                          " bg-yellow-400 px-2 py-1 m-5 content-center rounded-sm hover:text-yellow-500 hover:bg-black",
                        onClick: () => {
                          e(rO());
                        },
                        children: "Clear Cart",
                      }),
                      (0, N.jsx)(rL, { items: t }),
                      0 == t.length &&
                        (0, N.jsx)("h1", { children: "Cart is empty" }),
                    ],
                  }),
                ],
              })
            );
          }, {}),
        },
        {
          path: "/restaurants/:resId",
          element: (0, N.jsx)(() => {
            let { resId: e } = (function () {
                let { matches: e } = R.useContext(eG),
                  t = e[e.length - 1];
                return t ? t.params : {};
              })(),
              t = tU(e);
            if (null === t) return (0, N.jsx)(tM, {});
            let {
              name: n,
              cuisines: r,
              costForTwoMessage: a,
            } = t?.cards[0].card.card.info;
            console.log(n);
            let {
                itemCards: o,
              } = t?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card,
              l = t?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (e) =>
                  e.card?.card?.["@type"] ===
                  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
              );
            return (0, N.jsxs)("div", {
              className: "text-center",
              children: [
                (0, N.jsx)("h1", {
                  className: "font-bold my-4 text-2xl",
                  children: n,
                }),
                (0, N.jsxs)("p", {
                  className: "font-semibold text-xl",
                  children: [r.join(", "), " - ", a],
                }),
                l.map((e) =>
                  (0, N.jsx)(rz, { data: e.card?.card }, e.card.card.title)
                ),
              ],
            });
          }, {}),
        },
      ],
      errorElement: (0, N.jsx)(() => {
        let e = e7();
        return (
          console.log(e),
          (0, N.jsxs)("div", {
            children: [
              (0, N.jsx)("h1", { children: "OOPS!!" }),
              (0, N.jsx)("h2", { children: "Something went wrong" }),
              (0, N.jsxs)("h2", { children: [e.status, ":", e.statusText] }),
            ],
          })
        );
      }, {}),
    },
  ]),
  (function (e) {
    let t, n, r, a, o;
    let l = e.window
        ? e.window
        : "undefined" != typeof window
        ? window
        : void 0,
      i =
        void 0 !== l &&
        void 0 !== l.document &&
        void 0 !== l.document.createElement,
      u = !i;
    if (
      (M(
        e.routes.length > 0,
        "You must provide a non-empty routes array to createRouter"
      ),
      e.mapRouteProperties)
    )
      t = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
      let n = e.detectErrorBoundary;
      t = (e) => ({ hasErrorBoundary: n(e) });
    } else t = ep;
    let s = {},
      c = W(e.routes, t, void 0, s),
      f = e.basename || "/",
      d = L(
        {
          v7_fetcherPersist: !1,
          v7_normalizeFormMethod: !1,
          v7_partialHydration: !1,
          v7_prependBasename: !1,
          v7_relativeSplatPath: !1,
        },
        e.future
      ),
      p = null,
      h = new Set(),
      m = null,
      g = null,
      b = null,
      w = null != e.hydrationData,
      x = V(c, e.history.location, f),
      S = null;
    if (null == x) {
      let t = eN(404, { pathname: e.history.location.pathname }),
        { matches: n, route: r } = eT(c);
      (x = n), (S = { [r.id]: t });
    }
    let k = x.some((e) => e.route.lazy),
      E = x.some((e) => e.route.loader);
    if (k) r = !1;
    else if (E) {
      if (d.v7_partialHydration) {
        let t = e.hydrationData ? e.hydrationData.loaderData : null,
          n = e.hydrationData ? e.hydrationData.errors : null,
          a = (e) =>
            !e.route.loader ||
            (!0 !== e.route.loader.hydrate &&
              ((t && void 0 !== t[e.route.id]) ||
                (n && void 0 !== n[e.route.id])));
        if (n) {
          let e = x.findIndex((e) => void 0 !== n[e.route.id]);
          r = x.slice(0, e + 1).every(a);
        } else r = x.every(a);
      } else r = null != e.hydrationData;
    } else r = !0;
    let _ = {
        historyAction: e.history.action,
        location: e.history.location,
        matches: x,
        initialized: r,
        navigation: es,
        restoreScrollPosition: null == e.hydrationData && null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
        actionData: (e.hydrationData && e.hydrationData.actionData) || null,
        errors: (e.hydrationData && e.hydrationData.errors) || S,
        fetchers: new Map(),
        blockers: new Map(),
      },
      C = v.Pop,
      P = !1,
      T = !1,
      N = new Map(),
      R = null,
      j = !1,
      O = !1,
      D = [],
      z = [],
      I = new Map(),
      A = 0,
      B = -1,
      $ = new Map(),
      H = new Set(),
      Q = new Map(),
      K = new Map(),
      G = new Set(),
      Y = new Map(),
      X = new Map(),
      J = !1;
    function Z(e, t) {
      void 0 === t && (t = {}), (_ = L({}, _, e));
      let n = [],
        r = [];
      d.v7_fetcherPersist &&
        _.fetchers.forEach((e, t) => {
          "idle" === e.state && (G.has(t) ? r.push(t) : n.push(t));
        }),
        [...h].forEach((e) =>
          e(_, {
            deletedFetchers: r,
            unstable_viewTransitionOpts: t.viewTransitionOpts,
            unstable_flushSync: !0 === t.flushSync,
          })
        ),
        d.v7_fetcherPersist &&
          (n.forEach((e) => _.fetchers.delete(e)), r.forEach((e) => ej(e)));
    }
    function ee(t, r, a) {
      var o, l;
      let i, u;
      let { flushSync: s } = void 0 === a ? {} : a,
        f =
          null != _.actionData &&
          null != _.navigation.formMethod &&
          ez(_.navigation.formMethod) &&
          "loading" === _.navigation.state &&
          (null == (o = t.state) ? void 0 : o._isRedirect) !== !0;
      i = r.actionData
        ? Object.keys(r.actionData).length > 0
          ? r.actionData
          : null
        : f
        ? _.actionData
        : null;
      let d = r.loaderData
          ? eC(_.loaderData, r.loaderData, r.matches || [], r.errors)
          : _.loaderData,
        p = _.blockers;
      p.size > 0 && (p = new Map(p)).forEach((e, t) => p.set(t, ef));
      let h =
        !0 === P ||
        (null != _.navigation.formMethod &&
          ez(_.navigation.formMethod) &&
          (null == (l = t.state) ? void 0 : l._isRedirect) !== !0);
      if (
        (n && ((c = n), (n = void 0)),
        j ||
          C === v.Pop ||
          (C === v.Push
            ? e.history.push(t, t.state)
            : C === v.Replace && e.history.replace(t, t.state)),
        C === v.Pop)
      ) {
        let e = N.get(_.location.pathname);
        e && e.has(t.pathname)
          ? (u = { currentLocation: _.location, nextLocation: t })
          : N.has(t.pathname) &&
            (u = { currentLocation: t, nextLocation: _.location });
      } else if (T) {
        let e = N.get(_.location.pathname);
        e
          ? e.add(t.pathname)
          : ((e = new Set([t.pathname])), N.set(_.location.pathname, e)),
          (u = { currentLocation: _.location, nextLocation: t });
      }
      Z(
        L({}, r, {
          actionData: i,
          loaderData: d,
          historyAction: C,
          location: t,
          initialized: !0,
          navigation: es,
          revalidation: "idle",
          restoreScrollPosition: eJ(t, r.matches || _.matches),
          preventScrollReset: h,
          blockers: p,
        }),
        { viewTransitionOpts: u, flushSync: !0 === s }
      ),
        (C = v.Pop),
        (P = !1),
        (T = !1),
        (j = !1),
        (O = !1),
        (D = []),
        (z = []);
    }
    async function et(t, n) {
      if ("number" == typeof t) {
        e.history.go(t);
        return;
      }
      let r = em(
          _.location,
          _.matches,
          f,
          d.v7_prependBasename,
          t,
          d.v7_relativeSplatPath,
          null == n ? void 0 : n.fromRouteId,
          null == n ? void 0 : n.relative
        ),
        { path: a, submission: o, error: l } = ev(
          d.v7_normalizeFormMethod,
          !1,
          r,
          n
        ),
        i = _.location,
        u = U(_.location, a, n && n.state);
      u = L({}, u, e.history.encodeLocation(u));
      let s = n && null != n.replace ? n.replace : void 0,
        c = v.Push;
      !0 === s
        ? (c = v.Replace)
        : !1 === s ||
          (null != o &&
            ez(o.formMethod) &&
            o.formAction === _.location.pathname + _.location.search &&
            (c = v.Replace));
      let p =
          n && "preventScrollReset" in n ? !0 === n.preventScrollReset : void 0,
        h = !0 === (n && n.unstable_flushSync),
        m = eG({ currentLocation: i, nextLocation: u, historyAction: c });
      if (m) {
        eK(m, {
          state: "blocked",
          location: u,
          proceed() {
            eK(m, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: u,
            }),
              et(t, n);
          },
          reset() {
            let e = new Map(_.blockers);
            e.set(m, ef), Z({ blockers: e });
          },
        });
        return;
      }
      return await en(c, u, {
        submission: o,
        pendingError: l,
        preventScrollReset: p,
        replace: n && n.replace,
        enableViewTransition: n && n.unstable_viewTransition,
        flushSync: h,
      });
    }
    async function en(t, r, a) {
      var l, i, u;
      let s, d;
      o && o.abort(),
        (o = null),
        (C = t),
        (j = !0 === (a && a.startUninterruptedRevalidation)),
        (l = _.location),
        (i = _.matches),
        m && b && (m[eX(l, i)] = b()),
        (P = !0 === (a && a.preventScrollReset)),
        (T = !0 === (a && a.enableViewTransition));
      let p = n || c,
        h = a && a.overrideNavigation,
        v = V(p, r, f),
        y = !0 === (a && a.flushSync);
      if (!v) {
        let e = eN(404, { pathname: r.pathname }),
          { matches: t, route: n } = eT(p);
        eY(),
          ee(
            r,
            { matches: t, loaderData: {}, errors: { [n.id]: e } },
            { flushSync: y }
          );
        return;
      }
      if (
        _.initialized &&
        !O &&
        (u = _.location).pathname === r.pathname &&
        u.search === r.search &&
        ("" === u.hash ? "" !== r.hash : u.hash === r.hash || "" !== r.hash) &&
        !(a && a.submission && ez(a.submission.formMethod))
      ) {
        ee(r, { matches: v }, { flushSync: y });
        return;
      }
      o = new AbortController();
      let g = eS(e.history, r, o.signal, a && a.submission);
      if (a && a.pendingError) d = { [eP(v).route.id]: a.pendingError };
      else if (a && a.submission && ez(a.submission.formMethod)) {
        let e = await er(g, r, a.submission, v, {
          replace: a.replace,
          flushSync: y,
        });
        if (e.shortCircuited) return;
        (s = e.pendingActionData),
          (d = e.pendingActionError),
          (h = eB(r, a.submission)),
          (y = !1),
          (g = new Request(g.url, { signal: g.signal }));
      }
      let { shortCircuited: w, loaderData: x, errors: S } = await ea(
        g,
        r,
        v,
        h,
        a && a.submission,
        a && a.fetcherSubmission,
        a && a.replace,
        a && !0 === a.initialHydration,
        y,
        s,
        d
      );
      w ||
        ((o = null),
        ee(
          r,
          L({ matches: v }, s ? { actionData: s } : {}, {
            loaderData: x,
            errors: S,
          })
        ));
    }
    async function er(e, n, r, a, o) {
      let l;
      void 0 === o && (o = {}),
        eb(),
        Z(
          {
            navigation: {
              state: "submitting",
              location: n,
              formMethod: r.formMethod,
              formAction: r.formAction,
              formEncType: r.formEncType,
              formData: r.formData,
              json: r.json,
              text: r.text,
            },
          },
          { flushSync: !0 === o.flushSync }
        );
      let i = eU(a, n);
      if (i.route.action || i.route.lazy) {
        if (
          ((l = await ex("action", e, i, a, s, t, f, d.v7_relativeSplatPath)),
          e.signal.aborted)
        )
          return { shortCircuited: !0 };
      } else
        l = {
          type: y.error,
          error: eN(405, {
            method: e.method,
            pathname: n.pathname,
            routeId: i.route.id,
          }),
        };
      if (eL(l)) {
        let e;
        return (
          (e =
            o && null != o.replace
              ? o.replace
              : l.location === _.location.pathname + _.location.search),
          await ei(_, l, { submission: r, replace: e }),
          { shortCircuited: !0 }
        );
      }
      if (eD(l)) {
        let e = eP(a, i.route.id);
        return (
          !0 !== (o && o.replace) && (C = v.Push),
          {
            pendingActionData: {},
            pendingActionError: { [e.route.id]: l.error },
          }
        );
      }
      if (eO(l)) throw eN(400, { type: "defer-action" });
      return { pendingActionData: { [i.route.id]: l.data } };
    }
    async function ea(t, r, a, l, i, u, s, p, h, m, v) {
      let y = l || eB(r, i),
        g = i || u || eA(y),
        b = n || c,
        [w, x] = ey(
          e.history,
          _,
          a,
          g,
          r,
          d.v7_partialHydration && !0 === p,
          O,
          D,
          z,
          G,
          Q,
          H,
          b,
          f,
          m,
          v
        );
      if (
        (eY(
          (e) =>
            !(a && a.some((t) => t.route.id === e)) ||
            (w && w.some((t) => t.route.id === e))
        ),
        (B = ++A),
        0 === w.length && 0 === x.length)
      ) {
        let e = eH();
        return (
          ee(
            r,
            L(
              { matches: a, loaderData: {}, errors: v || null },
              m ? { actionData: m } : {},
              e ? { fetchers: new Map(_.fetchers) } : {}
            ),
            { flushSync: h }
          ),
          { shortCircuited: !0 }
        );
      }
      if (!j && (!d.v7_partialHydration || !p)) {
        x.forEach((e) => {
          let t = _.fetchers.get(e.key),
            n = e$(void 0, t ? t.data : void 0);
          _.fetchers.set(e.key, n);
        });
        let e = m || _.actionData;
        Z(
          L(
            { navigation: y },
            e
              ? 0 === Object.keys(e).length
                ? { actionData: null }
                : { actionData: e }
              : {},
            x.length > 0 ? { fetchers: new Map(_.fetchers) } : {}
          ),
          { flushSync: h }
        );
      }
      x.forEach((e) => {
        I.has(e.key) && eI(e.key), e.controller && I.set(e.key, e.controller);
      });
      let S = () => x.forEach((e) => eI(e.key));
      o && o.signal.addEventListener("abort", S);
      let { results: k, loaderResults: E, fetcherResults: C } = await eg(
        _.matches,
        a,
        w,
        x,
        t
      );
      if (t.signal.aborted) return { shortCircuited: !0 };
      o && o.signal.removeEventListener("abort", S),
        x.forEach((e) => I.delete(e.key));
      let P = eR(k);
      if (P) {
        if (P.idx >= w.length) {
          let e = x[P.idx - w.length].key;
          H.add(e);
        }
        return await ei(_, P.result, { replace: s }), { shortCircuited: !0 };
      }
      let { loaderData: T, errors: N } = e_(_, a, w, E, v, x, C, Y);
      Y.forEach((e, t) => {
        e.subscribe((n) => {
          (n || e.done) && Y.delete(t);
        });
      }),
        d.v7_partialHydration &&
          p &&
          _.errors &&
          Object.entries(_.errors)
            .filter((e) => {
              let [t] = e;
              return !w.some((e) => e.route.id === t);
            })
            .forEach((e) => {
              let [t, n] = e;
              N = Object.assign(N || {}, { [t]: n });
            });
      let R = eH(),
        M = eQ(B),
        F = R || M || x.length > 0;
      return L(
        { loaderData: T, errors: N },
        F ? { fetchers: new Map(_.fetchers) } : {}
      );
    }
    async function eo(r, a, l, i, u, p, h) {
      if ((eb(), Q.delete(r), !i.route.action && !i.route.lazy)) {
        let e = eN(405, { method: h.formMethod, pathname: l, routeId: a });
        ek(r, a, e, { flushSync: p });
        return;
      }
      let m = _.fetchers.get(r);
      ew(
        r,
        {
          state: "submitting",
          formMethod: h.formMethod,
          formAction: h.formAction,
          formEncType: h.formEncType,
          formData: h.formData,
          json: h.json,
          text: h.text,
          data: m ? m.data : void 0,
        },
        { flushSync: p }
      );
      let v = new AbortController(),
        y = eS(e.history, l, v.signal, h);
      I.set(r, v);
      let g = A,
        b = await ex("action", y, i, u, s, t, f, d.v7_relativeSplatPath);
      if (y.signal.aborted) {
        I.get(r) === v && I.delete(r);
        return;
      }
      if (d.v7_fetcherPersist && G.has(r)) {
        if (eL(b) || eD(b)) {
          ew(r, eW(void 0));
          return;
        }
      } else {
        if (eL(b))
          return (I.delete(r), B > g)
            ? void ew(r, eW(void 0))
            : (H.add(r), ew(r, e$(h)), ei(_, b, { fetcherSubmission: h }));
        if (eD(b)) {
          ek(r, a, b.error);
          return;
        }
      }
      if (eO(b)) throw eN(400, { type: "defer-action" });
      let w = _.navigation.location || _.location,
        x = eS(e.history, w, v.signal),
        S = n || c,
        k =
          "idle" !== _.navigation.state
            ? V(S, _.navigation.location, f)
            : _.matches;
      M(k, "Didn't find any matches after fetcher action");
      let E = ++A;
      $.set(r, E);
      let P = e$(h, b.data);
      _.fetchers.set(r, P);
      let [T, N] = ey(
        e.history,
        _,
        k,
        h,
        w,
        !1,
        O,
        D,
        z,
        G,
        Q,
        H,
        S,
        f,
        { [i.route.id]: b.data },
        void 0
      );
      N.filter((e) => e.key !== r).forEach((e) => {
        let t = e.key,
          n = _.fetchers.get(t),
          r = e$(void 0, n ? n.data : void 0);
        _.fetchers.set(t, r),
          I.has(t) && eI(t),
          e.controller && I.set(t, e.controller);
      }),
        Z({ fetchers: new Map(_.fetchers) });
      let R = () => N.forEach((e) => eI(e.key));
      v.signal.addEventListener("abort", R);
      let { results: j, loaderResults: L, fetcherResults: F } = await eg(
        _.matches,
        k,
        T,
        N,
        x
      );
      if (v.signal.aborted) return;
      v.signal.removeEventListener("abort", R),
        $.delete(r),
        I.delete(r),
        N.forEach((e) => I.delete(e.key));
      let U = eR(j);
      if (U) {
        if (U.idx >= T.length) {
          let e = N[U.idx - T.length].key;
          H.add(e);
        }
        return ei(_, U.result);
      }
      let { loaderData: W, errors: q } = e_(
        _,
        _.matches,
        T,
        L,
        void 0,
        N,
        F,
        Y
      );
      if (_.fetchers.has(r)) {
        let e = eW(b.data);
        _.fetchers.set(r, e);
      }
      eQ(E),
        "loading" === _.navigation.state && E > B
          ? (M(C, "Expected pending action"),
            o && o.abort(),
            ee(_.navigation.location, {
              matches: k,
              loaderData: W,
              errors: q,
              fetchers: new Map(_.fetchers),
            }))
          : (Z({
              errors: q,
              loaderData: eC(_.loaderData, W, k, q),
              fetchers: new Map(_.fetchers),
            }),
            (O = !1));
    }
    async function el(n, r, a, o, l, i, u) {
      let c = _.fetchers.get(n);
      ew(n, e$(u, c ? c.data : void 0), { flushSync: i });
      let p = new AbortController(),
        h = eS(e.history, a, p.signal);
      I.set(n, p);
      let m = A,
        v = await ex("loader", h, o, l, s, t, f, d.v7_relativeSplatPath);
      if (
        (eO(v) && (v = (await eF(v, h.signal, !0)) || v),
        I.get(n) === p && I.delete(n),
        !h.signal.aborted)
      ) {
        if (G.has(n)) {
          ew(n, eW(void 0));
          return;
        }
        if (eL(v)) {
          if (B > m) {
            ew(n, eW(void 0));
            return;
          }
          H.add(n), await ei(_, v);
          return;
        }
        if (eD(v)) {
          ek(n, r, v.error);
          return;
        }
        M(!eO(v), "Unhandled fetcher deferred data"), ew(n, eW(v.data));
      }
    }
    async function ei(t, n, r) {
      let { submission: a, fetcherSubmission: u, replace: s } =
        void 0 === r ? {} : r;
      n.revalidate && (O = !0);
      let c = U(t.location, n.location, { _isRedirect: !0 });
      if ((M(c, "Expected a location on the redirect navigation"), i)) {
        let t = !1;
        if (n.reloadDocument) t = !0;
        else if (ed.test(n.location)) {
          let r = e.history.createURL(n.location);
          t = r.origin !== l.location.origin || null == q(r.pathname, f);
        }
        if (t) {
          s ? l.location.replace(n.location) : l.location.assign(n.location);
          return;
        }
      }
      o = null;
      let d = !0 === s ? v.Replace : v.Push,
        { formMethod: p, formAction: h, formEncType: m } = t.navigation;
      !a && !u && p && h && m && (a = eA(t.navigation));
      let y = a || u;
      if (eu.has(n.status) && y && ez(y.formMethod))
        await en(d, c, {
          submission: L({}, y, { formAction: n.location }),
          preventScrollReset: P,
        });
      else {
        let e = eB(c, a);
        await en(d, c, {
          overrideNavigation: e,
          fetcherSubmission: u,
          preventScrollReset: P,
        });
      }
    }
    async function eg(n, r, a, o, l) {
      let i = await Promise.all([
          ...a.map((e) =>
            ex("loader", l, e, r, s, t, f, d.v7_relativeSplatPath)
          ),
          ...o.map((n) =>
            n.matches && n.match && n.controller
              ? ex(
                  "loader",
                  eS(e.history, n.path, n.controller.signal),
                  n.match,
                  n.matches,
                  s,
                  t,
                  f,
                  d.v7_relativeSplatPath
                )
              : { type: y.error, error: eN(404, { pathname: n.path }) }
          ),
        ]),
        u = i.slice(0, a.length),
        c = i.slice(a.length);
      return (
        await Promise.all([
          eM(
            n,
            a,
            u,
            u.map(() => l.signal),
            !1,
            _.loaderData
          ),
          eM(
            n,
            o.map((e) => e.match),
            c,
            o.map((e) => (e.controller ? e.controller.signal : null)),
            !0
          ),
        ]),
        { results: i, loaderResults: u, fetcherResults: c }
      );
    }
    function eb() {
      (O = !0),
        D.push(...eY()),
        Q.forEach((e, t) => {
          I.has(t) && (z.push(t), eI(t));
        });
    }
    function ew(e, t, n) {
      void 0 === n && (n = {}),
        _.fetchers.set(e, t),
        Z(
          { fetchers: new Map(_.fetchers) },
          { flushSync: !0 === (n && n.flushSync) }
        );
    }
    function ek(e, t, n, r) {
      void 0 === r && (r = {});
      let a = eP(_.matches, t);
      ej(e),
        Z(
          { errors: { [a.route.id]: n }, fetchers: new Map(_.fetchers) },
          { flushSync: !0 === (r && r.flushSync) }
        );
    }
    function eE(e) {
      return (
        d.v7_fetcherPersist &&
          (K.set(e, (K.get(e) || 0) + 1), G.has(e) && G.delete(e)),
        _.fetchers.get(e) || ec
      );
    }
    function ej(e) {
      let t = _.fetchers.get(e);
      I.has(e) && !(t && "loading" === t.state && $.has(e)) && eI(e),
        Q.delete(e),
        $.delete(e),
        H.delete(e),
        G.delete(e),
        _.fetchers.delete(e);
    }
    function eI(e) {
      let t = I.get(e);
      M(t, "Expected fetch controller: " + e), t.abort(), I.delete(e);
    }
    function eV(e) {
      for (let t of e) {
        let e = eW(eE(t).data);
        _.fetchers.set(t, e);
      }
    }
    function eH() {
      let e = [],
        t = !1;
      for (let n of H) {
        let r = _.fetchers.get(n);
        M(r, "Expected fetcher: " + n),
          "loading" === r.state && (H.delete(n), e.push(n), (t = !0));
      }
      return eV(e), t;
    }
    function eQ(e) {
      let t = [];
      for (let [n, r] of $)
        if (r < e) {
          let e = _.fetchers.get(n);
          M(e, "Expected fetcher: " + n),
            "loading" === e.state && (eI(n), $.delete(n), t.push(n));
        }
      return eV(t), t.length > 0;
    }
    function eq(e) {
      _.blockers.delete(e), X.delete(e);
    }
    function eK(e, t) {
      let n = _.blockers.get(e) || ef;
      M(
        ("unblocked" === n.state && "blocked" === t.state) ||
          ("blocked" === n.state && "blocked" === t.state) ||
          ("blocked" === n.state && "proceeding" === t.state) ||
          ("blocked" === n.state && "unblocked" === t.state) ||
          ("proceeding" === n.state && "unblocked" === t.state),
        "Invalid blocker state transition: " + n.state + " -> " + t.state
      );
      let r = new Map(_.blockers);
      r.set(e, t), Z({ blockers: r });
    }
    function eG(e) {
      let { currentLocation: t, nextLocation: n, historyAction: r } = e;
      if (0 === X.size) return;
      X.size > 1 && F(!1, "A router only supports one blocker at a time");
      let a = Array.from(X.entries()),
        [o, l] = a[a.length - 1],
        i = _.blockers.get(o);
      if (
        (!i || "proceeding" !== i.state) &&
        l({ currentLocation: t, nextLocation: n, historyAction: r })
      )
        return o;
    }
    function eY(e) {
      let t = [];
      return (
        Y.forEach((n, r) => {
          (!e || e(r)) && (n.cancel(), t.push(r), Y.delete(r));
        }),
        t
      );
    }
    function eX(e, t) {
      return (
        (g &&
          g(
            e,
            t.map((e) =>
              (function (e, t) {
                let { route: n, pathname: r, params: a } = e;
                return {
                  id: n.id,
                  pathname: r,
                  params: a,
                  data: t[n.id],
                  handle: n.handle,
                };
              })(e, _.loaderData)
            )
          )) ||
        e.key
      );
    }
    function eJ(e, t) {
      if (m) {
        let n = m[eX(e, t)];
        if ("number" == typeof n) return n;
      }
      return null;
    }
    return (a = {
      get basename() {
        return f;
      },
      get future() {
        return d;
      },
      get state() {
        return _;
      },
      get routes() {
        return c;
      },
      get window() {
        return l;
      },
      initialize: function () {
        if (
          ((p = e.history.listen((t) => {
            let { action: n, location: r, delta: a } = t;
            if (J) {
              J = !1;
              return;
            }
            F(
              0 === X.size || null != a,
              "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
            );
            let o = eG({
              currentLocation: _.location,
              nextLocation: r,
              historyAction: n,
            });
            if (o && null != a) {
              (J = !0),
                e.history.go(-1 * a),
                eK(o, {
                  state: "blocked",
                  location: r,
                  proceed() {
                    eK(o, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: r,
                    }),
                      e.history.go(a);
                  },
                  reset() {
                    let e = new Map(_.blockers);
                    e.set(o, ef), Z({ blockers: e });
                  },
                });
              return;
            }
            return en(n, r);
          })),
          i)
        ) {
          (function (e, t) {
            try {
              let n = e.sessionStorage.getItem(eh);
              if (n) {
                let e = JSON.parse(n);
                for (let [n, r] of Object.entries(e || {}))
                  r && Array.isArray(r) && t.set(n, new Set(r || []));
              }
            } catch (e) {}
          })(l, N);
          let e = () =>
            (function (e, t) {
              if (t.size > 0) {
                let n = {};
                for (let [e, r] of t) n[e] = [...r];
                try {
                  e.sessionStorage.setItem(eh, JSON.stringify(n));
                } catch (e) {
                  F(
                    !1,
                    "Failed to save applied view transitions in sessionStorage (" +
                      e +
                      ")."
                  );
                }
              }
            })(l, N);
          l.addEventListener("pagehide", e),
            (R = () => l.removeEventListener("pagehide", e));
        }
        return (
          _.initialized || en(v.Pop, _.location, { initialHydration: !0 }), a
        );
      },
      subscribe: function (e) {
        return h.add(e), () => h.delete(e);
      },
      enableScrollRestoration: function (e, t, n) {
        if (((m = e), (b = t), (g = n || null), !w && _.navigation === es)) {
          w = !0;
          let e = eJ(_.location, _.matches);
          null != e && Z({ restoreScrollPosition: e });
        }
        return () => {
          (m = null), (b = null), (g = null);
        };
      },
      navigate: et,
      fetch: function (e, t, r, a) {
        if (u)
          throw Error(
            "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
          );
        I.has(e) && eI(e);
        let o = !0 === (a && a.unstable_flushSync),
          l = n || c,
          i = em(
            _.location,
            _.matches,
            f,
            d.v7_prependBasename,
            r,
            d.v7_relativeSplatPath,
            t,
            null == a ? void 0 : a.relative
          ),
          s = V(l, i, f);
        if (!s) {
          ek(e, t, eN(404, { pathname: i }), { flushSync: o });
          return;
        }
        let { path: p, submission: h, error: m } = ev(
          d.v7_normalizeFormMethod,
          !0,
          i,
          a
        );
        if (m) {
          ek(e, t, m, { flushSync: o });
          return;
        }
        let v = eU(s, p);
        if (((P = !0 === (a && a.preventScrollReset)), h && ez(h.formMethod))) {
          eo(e, t, p, v, s, o, h);
          return;
        }
        Q.set(e, { routeId: t, path: p }), el(e, t, p, v, s, o, h);
      },
      revalidate: function () {
        if (
          (eb(),
          Z({ revalidation: "loading" }),
          "submitting" !== _.navigation.state)
        ) {
          if ("idle" === _.navigation.state) {
            en(_.historyAction, _.location, {
              startUninterruptedRevalidation: !0,
            });
            return;
          }
          en(C || _.historyAction, _.navigation.location, {
            overrideNavigation: _.navigation,
          });
        }
      },
      createHref: (t) => e.history.createHref(t),
      encodeLocation: (t) => e.history.encodeLocation(t),
      getFetcher: eE,
      deleteFetcher: function (e) {
        if (d.v7_fetcherPersist) {
          let t = (K.get(e) || 0) - 1;
          t <= 0 ? (K.delete(e), G.add(e)) : K.set(e, t);
        } else ej(e);
        Z({ fetchers: new Map(_.fetchers) });
      },
      dispose: function () {
        p && p(),
          R && R(),
          h.clear(),
          o && o.abort(),
          _.fetchers.forEach((e, t) => ej(t)),
          _.blockers.forEach((e, t) => eq(t));
      },
      getBlocker: function (e, t) {
        let n = _.blockers.get(e) || ef;
        return X.get(e) !== t && X.set(e, t), n;
      },
      deleteBlocker: eq,
      _internalFetchControllers: I,
      _internalActiveDeferreds: Y,
      _internalSetRoutes: function (e) {
        n = W(e, t, void 0, (s = {}));
      },
    });
  })({
    basename: void 0,
    future: tr({}, null == p ? void 0 : p.future, { v7_prependBasename: !0 }),
    history: (function (e, t, n, r) {
      void 0 === r && (r = {});
      let { window: a = document.defaultView, v5Compat: o = !1 } = r,
        l = a.history,
        i = v.Pop,
        u = null,
        s = c();
      function c() {
        return (l.state || { idx: null }).idx;
      }
      function f() {
        i = v.Pop;
        let e = c(),
          t = null == e ? null : e - s;
        (s = e), u && u({ action: i, location: p.location, delta: t });
      }
      function d(e) {
        let t =
            "null" !== a.location.origin ? a.location.origin : a.location.href,
          n = "string" == typeof e ? e : A(e);
        return (
          M(
            t,
            "No window.location.(origin|href) available to create URL for href: " +
              (n = n.replace(/ $/, "%20"))
          ),
          new URL(n, t)
        );
      }
      null == s && ((s = 0), l.replaceState(L({}, l.state, { idx: s }), ""));
      let p = {
        get action() {
          return i;
        },
        get location() {
          return e(a, l);
        },
        listen(e) {
          if (u) throw Error("A history only accepts one active listener");
          return (
            a.addEventListener(z, f),
            (u = e),
            () => {
              a.removeEventListener(z, f), (u = null);
            }
          );
        },
        createHref: (e) => t(a, e),
        createURL: d,
        encodeLocation(e) {
          let t = d(e);
          return { pathname: t.pathname, search: t.search, hash: t.hash };
        },
        push: function (e, t) {
          i = v.Push;
          let n = U(p.location, e, t),
            r = I(n, (s = c() + 1)),
            f = p.createHref(n);
          try {
            l.pushState(r, "", f);
          } catch (e) {
            if (e instanceof DOMException && "DataCloneError" === e.name)
              throw e;
            a.location.assign(f);
          }
          o && u && u({ action: i, location: p.location, delta: 1 });
        },
        replace: function (e, t) {
          i = v.Replace;
          let n = U(p.location, e, t),
            r = I(n, (s = c())),
            a = p.createHref(n);
          l.replaceState(r, "", a),
            o && u && u({ action: i, location: p.location, delta: 0 });
        },
        go: (e) => l.go(e),
      };
      return p;
    })(
      function (e, t) {
        let { pathname: n, search: r, hash: a } = e.location;
        return U(
          "",
          { pathname: n, search: r, hash: a },
          (t.state && t.state.usr) || null,
          (t.state && t.state.key) || "default"
        );
      },
      function (e, t) {
        return "string" == typeof t ? t : A(t);
      },
      null,
      { window: null == p ? void 0 : p.window }
    ),
    hydrationData:
      (null == p ? void 0 : p.hydrationData) ||
      ((e = null == (r = window) ? void 0 : r.__staticRouterHydrationData) &&
        e.errors &&
        (e = tr({}, e, {
          errors: (function (e) {
            if (!e) return null;
            let t = Object.entries(e),
              n = {};
            for (let [e, r] of t)
              if (r && "RouteErrorResponse" === r.__type)
                n[e] = new en(
                  r.status,
                  r.statusText,
                  r.data,
                  !0 === r.internal
                );
              else if (r && "Error" === r.__type) {
                if (r.__subType) {
                  let t = window[r.__subType];
                  if ("function" == typeof t)
                    try {
                      let a = new t(r.message);
                      (a.stack = ""), (n[e] = a);
                    } catch (e) {}
                }
                if (null == n[e]) {
                  let t = Error(r.message);
                  (t.stack = ""), (n[e] = t);
                }
              } else n[e] = r;
            return n;
          })(e.errors),
        })),
      e),
    routes: d,
    mapRouteProperties: function (e) {
      let t = {
        hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement,
      };
      return (
        e.Component &&
          Object.assign(t, {
            element: R.createElement(e.Component),
            Component: void 0,
          }),
        e.HydrateFallback &&
          Object.assign(t, {
            hydrateFallbackElement: R.createElement(e.HydrateFallback),
            HydrateFallback: void 0,
          }),
        e.ErrorBoundary &&
          Object.assign(t, {
            errorElement: R.createElement(e.ErrorBoundary),
            ErrorBoundary: void 0,
          }),
        t
      );
    },
    window: null == p ? void 0 : p.window,
  }).initialize());
n(j)
  .createRoot(document.getElementById("root"))
  .render(
    (0, N.jsx)(
      function (e) {
        let { fallbackElement: t, router: n, future: r } = e,
          [a, o] = R.useState(n.state),
          [l, i] = R.useState(),
          [u, s] = R.useState({ isTransitioning: !1 }),
          [c, f] = R.useState(),
          [d, p] = R.useState(),
          [h, m] = R.useState(),
          v = R.useRef(new Map()),
          { v7_startTransition: y } = r || {},
          g = R.useCallback(
            (e) => {
              y && ti ? ti(e) : e();
            },
            [y]
          ),
          b = R.useCallback(
            (e, t) => {
              let {
                deletedFetchers: r,
                unstable_flushSync: a,
                unstable_viewTransitionOpts: l,
              } = t;
              r.forEach((e) => v.current.delete(e)),
                e.fetchers.forEach((e, t) => {
                  void 0 !== e.data && v.current.set(t, e.data);
                });
              let u =
                null == n.window ||
                "function" != typeof n.window.document.startViewTransition;
              if (!l || u) {
                a ? ts(() => o(e)) : g(() => o(e));
                return;
              }
              if (a) {
                ts(() => {
                  d && (c && c.resolve(), d.skipTransition()),
                    s({
                      isTransitioning: !0,
                      flushSync: !0,
                      currentLocation: l.currentLocation,
                      nextLocation: l.nextLocation,
                    });
                });
                let t = n.window.document.startViewTransition(() => {
                  ts(() => o(e));
                });
                t.finished.finally(() => {
                  ts(() => {
                    f(void 0), p(void 0), i(void 0), s({ isTransitioning: !1 });
                  });
                }),
                  ts(() => p(t));
                return;
              }
              d
                ? (c && c.resolve(),
                  d.skipTransition(),
                  m({
                    state: e,
                    currentLocation: l.currentLocation,
                    nextLocation: l.nextLocation,
                  }))
                : (i(e),
                  s({
                    isTransitioning: !0,
                    flushSync: !1,
                    currentLocation: l.currentLocation,
                    nextLocation: l.nextLocation,
                  }));
            },
            [n.window, d, c, v, g]
          );
        R.useLayoutEffect(() => n.subscribe(b), [n, b]),
          R.useEffect(() => {
            u.isTransitioning && !u.flushSync && f(new tc());
          }, [u]),
          R.useEffect(() => {
            if (c && l && n.window) {
              let e = c.promise,
                t = n.window.document.startViewTransition(async () => {
                  g(() => o(l)), await e;
                });
              t.finished.finally(() => {
                f(void 0), p(void 0), i(void 0), s({ isTransitioning: !1 });
              }),
                p(t);
            }
          }, [g, l, c, n.window]),
          R.useEffect(() => {
            c && l && a.location.key === l.location.key && c.resolve();
          }, [c, d, a.location, l]),
          R.useEffect(() => {
            !u.isTransitioning &&
              h &&
              (i(h.state),
              s({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: h.currentLocation,
                nextLocation: h.nextLocation,
              }),
              m(void 0));
          }, [u.isTransitioning, h]),
          R.useEffect(() => {}, []);
        let w = R.useMemo(
            () => ({
              createHref: n.createHref,
              encodeLocation: n.encodeLocation,
              go: (e) => n.navigate(e),
              push: (e, t, r) =>
                n.navigate(e, {
                  state: t,
                  preventScrollReset: null == r ? void 0 : r.preventScrollReset,
                }),
              replace: (e, t, r) =>
                n.navigate(e, {
                  replace: !0,
                  state: t,
                  preventScrollReset: null == r ? void 0 : r.preventScrollReset,
                }),
            }),
            [n]
          ),
          x = n.basename || "/",
          S = R.useMemo(
            () => ({ router: n, navigator: w, static: !1, basename: x }),
            [n, w, x]
          );
        return R.createElement(
          R.Fragment,
          null,
          R.createElement(
            eH.Provider,
            { value: S },
            R.createElement(
              eQ.Provider,
              { value: a },
              R.createElement(
                tl.Provider,
                { value: v.current },
                R.createElement(
                  to.Provider,
                  { value: u },
                  R.createElement(
                    tt,
                    {
                      basename: x,
                      location: a.location,
                      navigationType: a.historyAction,
                      navigator: w,
                      future: {
                        v7_relativeSplatPath: n.future.v7_relativeSplatPath,
                      },
                    },
                    a.initialized || n.future.v7_partialHydration
                      ? R.createElement(tf, {
                          routes: n.routes,
                          future: n.future,
                          state: a,
                        })
                      : t
                  )
                )
              )
            )
          ),
          null
        );
      },
      { router: rq }
    )
  );
//# sourceMappingURL=index.1ad76a8c.js.map
