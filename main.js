(() => {
  "use strict";
  var n = {
      523: (n, e, t) => {
        t.d(e, {A: () => c});
        var r = t(601),
          o = t.n(r),
          i = t(314),
          a = t.n(i)()(o());
        a.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap);",
        ]),
          a.push([
            n.id,
            '* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: "Rubik", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 500;\n  font-style: normal;\n}\n\n:root {\n  --color-background: #0b131e;\n  --color-primary: #202b3b;\n  --color-text-primary: #d7dadf;\n  --color-text-secondary: #8b919b;\n  --border-radius-mid: 8px;\n}\n\nbody {\n  padding: 8px;\n  display: grid;\n  gap: 8px;\n  grid-template-rows: 48px 240px 176px 1fr;\n  height: 100vh;\n  background-color: var(--color-background);\n}\n\n.element {\n  width: 100%;\n  background-color: var(--color-primary);\n  padding: 4px;\n  color: var(--color-text-secondary);\n  border-radius: var(--border-radius-mid);\n}\n\n.search-box {\n  width: 100%;\n  height: 100%;\n  & input {\n    width: 100%;\n    height: 100%;\n    background-color: var(--color-primary);\n    border-radius: var(--border-radius-mid);\n    border: none;\n    padding-left: 4px;\n    color: var(--color-text-primary);\n    &::placeholder {\n      color: var(--color-text-primary);\n    }\n    &:focus {\n      transition: 100ms;\n      outline: 2px solid white;\n    }\n  }\n}\n\n.hero {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 5fr 3fr;\n  & .upper {\n    display: grid;\n    grid-template-rows: 2fr 1fr;\n    grid-column: 1/-1;\n    padding: 8px;\n    & .city {\n      display: grid;\n      align-items: end;\n      margin-bottom: 4px;\n      font-size: 2rem;\n      color: var(--color-text-primary);\n    }\n    & .rain {\n      color: var(--color-text-secondary);\n    }\n  }\n  & .cur-temp {\n    display: grid;\n    align-items: center;\n    padding: 8px;\n    color: var(--color-text-primary);\n    grid-row: 2;\n    font-size: 5rem;\n  }\n}\n\n.forecast-container {\n  display: grid;\n  grid-template-rows: 40px 1fr;\n  & .forecast-text {\n    padding: 4px;\n  }\n  & .forecast-grid {\n    display: flex;\n    gap: 16px;\n    max-height: 100%;\n  }\n}\n\n.forecast-grid {\n  white-space: nowrap;\n  position: relative;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\n.hour-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hour-temp {\n  color: var(--color-text-primary);\n  font-size: 1.5rem;\n}\n\n.additional-text {\n  padding: 4px;\n}\n\n.additional-grid {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.additional-cell-title {\n  font-size: 1.2rem;\n  margin-bottom: 4px;\n}\n\n.additional-cell {\n  padding: 8px;\n}\n\n.additional-cell-text {\n  color: var(--color-text-primary);\n  font-size: 2rem;\n}\n',
            "",
          ]);
        const c = a;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < n.length; s++) {
                var l = [].concat(n[s]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var i = {}, a = [], c = 0; c < n.length; c++) {
            var u = n[c],
              s = r.base ? u[0] + r.base : u[0],
              l = i[s] || 0,
              d = "".concat(s, " ").concat(l);
            i[s] = l + 1;
            var p = t(d),
              f = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = c),
                e.splice(c, 0, {identifier: d, updater: m, references: 1});
            }
            a.push(d);
          }
          return a;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var c = t(i[a]);
              e[c].references--;
            }
            for (var u = r(n, o), s = 0; s < i.length; s++) {
              var l = t(i[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = u;
          };
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return {update: function () {}, remove: function () {}};
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = {id: r, exports: {}});
    return n[r](i, i.exports, t), i.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, {a: e}), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, {enumerable: !0, get: e[r]});
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0);
  var r = function (n, e, t, r) {
      return new (t || (t = Promise))(function (o, i) {
        function a(n) {
          try {
            u(r.next(n));
          } catch (n) {
            i(n);
          }
        }
        function c(n) {
          try {
            u(r.throw(n));
          } catch (n) {
            i(n);
          }
        }
        function u(n) {
          var e;
          n.done
            ? o(n.value)
            : ((e = n.value),
              e instanceof t
                ? e
                : new t(function (n) {
                    n(e);
                  })).then(a, c);
        }
        u((r = r.apply(n, e || [])).next());
      });
    },
    o = function (n, e) {
      var t,
        r,
        o,
        i,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = {next: c(0), throw: c(1), return: c(2)}),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function c(c) {
        return function (u) {
          return (function (c) {
            if (t) throw new TypeError("Generator is already executing.");
            for (; i && ((i = 0), c[0] && (a = 0)), a; )
              try {
                if (
                  ((t = 1),
                  r &&
                    (o =
                      2 & c[0]
                        ? r.return
                        : c[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                    !(o = o.call(r, c[1])).done)
                )
                  return o;
                switch (((r = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return a.label++, {value: c[1], done: !1};
                  case 5:
                    a.label++, (r = c[1]), (c = [0]);
                    continue;
                  case 7:
                    (c = a.ops.pop()), a.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (o = (o = a.trys).length > 0 && o[o.length - 1]) ||
                        (6 !== c[0] && 2 !== c[0])
                      )
                    ) {
                      a = 0;
                      continue;
                    }
                    if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                      a.label = c[1];
                      break;
                    }
                    if (6 === c[0] && a.label < o[1]) {
                      (a.label = o[1]), (o = c);
                      break;
                    }
                    if (o && a.label < o[2]) {
                      (a.label = o[2]), a.ops.push(c);
                      break;
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }
                c = e.call(n, a);
              } catch (n) {
                (c = [6, n]), (r = 0);
              } finally {
                t = o = 0;
              }
            if (5 & c[0]) throw c[1];
            return {value: c[0] ? c[1] : void 0, done: !0};
          })([c, u]);
        };
      }
    },
    i = (function () {
      function n() {}
      return (
        (n.prototype.getLocationPromise = function () {
          return r(this, void 0, void 0, function () {
            return o(this, function (n) {
              return [
                2,
                new Promise(function (n, e) {
                  "geolocation" in navigator
                    ? navigator.geolocation.getCurrentPosition(function (e) {
                        console.log("getLocation() resolved"),
                          n(
                            ""
                              .concat(e.coords.latitude, ",")
                              .concat(e.coords.longitude)
                          );
                      })
                    : e("Geolocation is not available");
                }),
              ];
            });
          });
        }),
        n
      );
    })(),
    a = (function () {
      function n() {}
      return (
        (n.prototype.getWeatherObject = function (n) {
          return r(this, void 0, void 0, function () {
            var e;
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return [
                    4,
                    fetch(
                      "https://api.weatherapi.com/v1/forecast.json?key=e48d2da8b8924f60876111321231306&q=".concat(
                        n,
                        "&days=3&aqi=no&alerts=no&lang=ru"
                      ),
                      {mode: "cors"}
                    ),
                  ];
                case 1:
                  return [4, t.sent().json()];
                case 2:
                  return (
                    (e = t.sent()),
                    console.log("weather object resolved"),
                    [2, e]
                  );
              }
            });
          });
        }),
        n
      );
    })(),
    c = (function () {
      function n(n) {
        this.document = n;
      }
      return (
        (n.prototype.getHourDiv = function (n) {
          var e = this.document.createElement("div");
          e.className = "hour-container";
          var t = this.document.createElement("div");
          (t.textContent = n.time), (t.className = "hour-text");
          var r = this.document.createElement("img");
          (r.src = n.icon), (r.className = "hour-icon");
          var o = this.document.createElement("div");
          return (
            (o.textContent = n.temp),
            (o.className = "hour-temp"),
            e.appendChild(t),
            e.appendChild(r),
            e.appendChild(o),
            e
          );
        }),
        (n.prototype.renderHourGrid = function (n) {
          var e = this,
            t = this.document.createElement("div");
          return (
            n.forEach(function (n) {
              t.appendChild(e.getHourDiv(n));
            }),
            t
          );
        }),
        n
      );
    })(),
    u = (function () {
      function n(n) {
        this.ui = n;
      }
      return (
        (n.prototype.formatTimeToDate = function (n) {
          return new Date(1e3 * n);
        }),
        (n.prototype.getHour = function (n) {
          return {
            time: "".concat(
              this.formatTimeToDate(n.time_epoch).getHours(),
              ":00"
            ),
            icon: "https:".concat(n.condition.icon),
            temp: "".concat(n.temp_c.toFixed(), "°"),
          };
        }),
        (n.prototype.getHoursArray = function (n, e) {
          var t = this;
          return n.filter(function (n) {
            return t.formatTimeToDate(n.time_epoch).getHours() >= e.getHours();
          });
        }),
        (n.prototype.getHourObjectArray = function (n) {
          var e = this,
            t = new Array();
          return (
            n.forEach(function (n) {
              t.push(e.getHour(n));
            }),
            t
          );
        }),
        (n.prototype.getForecastHourObjectArray = function (n, e) {
          var t = n.hour,
            r = this.getHoursArray(t, this.formatTimeToDate(e));
          return this.getHourObjectArray(r);
        }),
        n
      );
    })(),
    s = t(72),
    l = t.n(s),
    d = t(825),
    p = t.n(d),
    f = t(659),
    m = t.n(f),
    h = t(56),
    v = t.n(h),
    g = t(540),
    y = t.n(g),
    x = t(113),
    b = t.n(x),
    w = t(523),
    C = {};
  (C.styleTagTransform = b()),
    (C.setAttributes = v()),
    (C.insert = m().bind(null, "head")),
    (C.domAPI = p()),
    (C.insertStyleElement = y()),
    l()(w.A, C),
    w.A && w.A.locals && w.A.locals;
  var T = new a(),
    H = new i(),
    S = new c(document),
    k = new u(S),
    A = document.querySelector(".forecast-grid"),
    E = document.querySelector(".city"),
    j = document.querySelector(".cur-temp"),
    q = document.querySelector(".weather-logo"),
    M = document.querySelector(".feelslike"),
    O = document.querySelector(".speed"),
    L = document.querySelector(".chance"),
    P = document.querySelector(".index"),
    _ = document.querySelector(".search-box input");
  function D(n) {
    T.getWeatherObject(n).then(function (n) {
      (E.textContent = n.location.name),
        (j.textContent = "".concat(n.current.temp_c.toFixed(), "°")),
        (q.src = "https:".concat(
          n.current.condition.icon.replace("64x64", "128x128")
        )),
        (M.textContent = "".concat(n.current.feelslike_c, "°")),
        (O.textContent = "".concat(n.current.wind_kph, " км/ч")),
        (L.textContent = "".concat(n.current.humidity, "%")),
        (P.textContent = "".concat(n.current.uv));
      var e = n.forecast.forecastday[0],
        t = S.renderHourGrid(
          k.getForecastHourObjectArray(e, n.location.localtime_epoch)
        );
      A.innerHTML = t.innerHTML;
    });
  }
  H.getLocationPromise().then(function (n) {
    D(n);
  }),
    _.addEventListener("change", function (n) {
      D(_.value), (_.value = "");
    });
})();
