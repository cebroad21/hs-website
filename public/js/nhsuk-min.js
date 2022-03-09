!function (n) {
  var r = {};

  function o(e) {
    if (r[e]) return r[e].exports;
    var t = r[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
  }

  o.m = n, o.c = r, o.d = function (e, t, n) {
    o.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var r in t) o.d(n, r, function (e) {
      return t[e];
    }.bind(null, r));
    return n;
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return o.d(t, "a", t), t;
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "", o(o.s = 1);
}([function (e, t) {
  NodeList.prototype.forEach || (NodeList.prototype.forEach = Array.prototype.forEach), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    enumerable: !1,
    value: function (t) {
      return 0 < this.filter(function (e) {
        return e === t;
      }).length;
    }
  }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) {
    var t = this;

    do {
      if (Element.prototype.matches.call(t, e)) return t;
      t = t.parentElement || t.parentNode;
    } while (null !== t && 1 === t.nodeType);

    return null;
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);

  function d(e, t) {
    if (e && t) {
      var n = "true" === e.getAttribute(t) ? "false" : "true";
      e.setAttribute(t, n);
    }
  }

  function s(e, t) {
    if (e && t) {
      var n = e.getAttribute("aria-controls");

      if (n) {
        var r = document.getElementById(n);
        r && (r.classList.toggle(t), d(e, "aria-expanded"));
      }
    }
  }

  function f(e) {
    !function (e) {
      if ("A" === e.tagName && !1 !== e.href) {
        var t = document.querySelector(e.hash);

        if (t) {
          var n = function (e) {
            var t = e.closest("fieldset");

            if (t) {
              var n = t.getElementsByTagName("legend");

              if (n.length) {
                var r = n[0];
                if ("checkbox" === e.type || "radio" === e.type) return r;
                var o = r.getBoundingClientRect().top,
                    i = e.getBoundingClientRect();
                if (i.height && window.innerHeight && i.top + i.height - o < window.innerHeight / 2) return r;
              }
            }

            return document.querySelector("label[for='".concat(e.getAttribute("id"), "']")) || e.closest("label");
          }(t);

          return n && (n.scrollIntoView(), t.focus({
            preventScroll: !0
          }), 1);
        }
      }
    }(e.target) || e.preventDefault();
  }

  function p() {
    var t, e, n, r, o, i, c, u;

    function a(e) {
      e.preventDefault(), d(o, "aria-expanded"), o.classList.toggle("is-active"), c.classList.toggle("js-show"), u.classList.toggle("js-show");
    }

    t = document.querySelector("#toggle-menu"), e = document.querySelector("#close-menu"), n = document.querySelector("#header-navigation"), r = function (e) {
      e.preventDefault(), d(t, "aria-expanded"), t.classList.toggle("is-active"), n.classList.toggle("js-show");
    }, t && e && n && [t, e].forEach(function (e) {
      e.addEventListener("click", r);
    }), o = document.querySelector("#toggle-search"), i = document.querySelector("#close-search"), c = document.querySelector("#wrap-search"), u = document.querySelector("#content-header"), o && i && [o, i].forEach(function (e) {
      e.addEventListener("click", a);
    });
  }

  n(0), document.addEventListener("DOMContentLoaded", function () {
    var e, t, n, r, o, i, c, u, a;

    function l(e) {
      i.forEach(function (e) {
        return e.setAttribute("aria-expanded", "false");
      }), c.forEach(function (e) {
        return e.classList.add("nhsuk-radios__conditional--hidden");
      }), s(e.target, "nhsuk-radios__conditional--hidden");
    }

    document.querySelectorAll(".nhsuk-card--clickable").forEach(function (e) {
      null !== e.querySelector("a") && e.addEventListener("click", function () {
        e.querySelector("a").click();
      });
    }), e = document.querySelectorAll(".nhsuk-checkboxes--conditional .nhsuk-checkboxes__input"), t = function (e) {
      s(e.target, "nhsuk-checkboxes__conditional--hidden");
    }, e.forEach(function (e) {
      e.addEventListener("change", t);
    }), u = "boolean" == typeof document.createElement("details").open, (a = document.querySelectorAll("details")).length && a.forEach(function (e, t) {
      e.hasAttribute("nhsuk-polyfilled") || function (e, t) {
        e.setAttribute("nhsuk-polyfilled", "true"), e.id || e.setAttribute("id", "nhsuk-details".concat(t));
        var n = document.querySelector("#".concat(e.id, " .nhsuk-details__text"));
        n.id || n.setAttribute("id", "nhsuk-details__text".concat(t));
        var r = document.querySelector("#".concat(e.id, " .nhsuk-details__summary"));
        r.setAttribute("role", "button"), r.setAttribute("aria-controls", n.id), r.setAttribute("tabIndex", "0"), !0 == (null !== e.getAttribute("open")) ? (r.setAttribute("aria-expanded", "true"), n.setAttribute("aria-hidden", "false")) : (r.setAttribute("aria-expanded", "false"), n.setAttribute("aria-hidden", "true"), u || (n.style.display = "none")), r.addEventListener("click", function () {
          d(r, "aria-expanded"), d(n, "aria-hidden"), u || (n.style.display = "true" === n.getAttribute("aria-hidden") ? "none" : "", e.hasAttribute("open") ? e.removeAttribute("open") : e.setAttribute("open", "open"));
        }), r.addEventListener("keydown", function (e) {
          13 !== e.keyCode && 32 !== e.keyCode || (e.preventDefault(), r.click());
        });
      }(e, t);
    }), (n = document.querySelector(".nhsuk-error-summary")) && (n.focus(), n.addEventListener("click", f)), p(), i = document.querySelectorAll(".nhsuk-radios--conditional .nhsuk-radios__input"), c = document.querySelectorAll(".nhsuk-radios--conditional .nhsuk-radios__conditional"), i.forEach(function (e) {
      e.addEventListener("change", l);
    }), r = document.querySelector("h1"), o = document.querySelector(".nhsuk-skip-link"), r && o && (o.addEventListener("click", function (e) {
      e.preventDefault(), r.setAttribute("tabIndex", "-1"), r.focus();
    }), r.addEventListener("blur", function (e) {
      e.preventDefault(), r.removeAttribute("tabIndex");
    }));
  });
}]);