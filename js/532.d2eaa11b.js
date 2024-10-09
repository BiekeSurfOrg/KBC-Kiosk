(self["webpackChunkcapsule_ui"] = self["webpackChunkcapsule_ui"] || []).push([
  [532],
  {
    8532: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return l;
          },
        });
      var a = function () {
          var e = this,
            t = e._self._c;
          return t("div", { attrs: { id: "screensaverpage" } }, [
            e._m(0),
            e._v(" "),
            t("div", { staticClass: "main_area" }, [
              e._m(1),
              e._v(" "),
              t("a", {
                staticClass: "goBackLink",
                attrs: { href: "./index.html" },
                on: { click: e.resetAnalytics },
              }),
              t(
                "div",
                { staticClass: "modal" },
                [
                  t(
                    "transition",
                    { key: e.modalVid, attrs: { appear: "", name: "modal" } },
                    [
                      t(
                        "video",
                        {
                          key: e.modalVid,
                          ref: "modalVideo",
                          attrs: {
                            autoplay: "",
                            playsinline: "",
                            loop: e.loopScreensaverVideo,
                          },
                          domProps: {
                            muted: false,
                          },
                        },
                        [
                          t("source", {
                            attrs: { src: e.modalVid, type: "video/mp4" },
                          }),
                        ]
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]),
            e._m(2),
          ]);
        },
        s = [
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "background_media_layer fixed_media" },
              [
                t("div", {
                  staticClass: "background_media_layer_overlay fixed_media",
                }),
              ]
            );
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("div", { staticClass: "secondary_content_area_wrapper" }, [
              t("div", { staticClass: "secondary_content_area" }, [
                t("div", {
                  staticClass: "secondary_content_widgetarea",
                  attrs: { id: "secondary_content_widgetarea_left" },
                }),
                e._v(" "),
                t("div", {
                  staticClass: "secondary_content_widgetarea",
                  attrs: { id: "secondary_content_widgetarea_center" },
                }),
                e._v(" "),
                t("div", {
                  staticClass: "secondary_content_widgetarea",
                  attrs: { id: "secondary_content_widgetarea_right" },
                }),
              ]),
            ]);
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("div", { staticClass: "bottom_area" }, [
              t("div", { staticClass: "bottom_content_area_wrapper" }, [
                t("div", {
                  staticClass: "bottom_content_widgetarea",
                  attrs: { id: "bottom_content_widgetarea_left" },
                }),
                e._v(" "),
                t("div", {
                  staticClass: "bottom_content_widgetarea",
                  attrs: { id: "bottom_content_widgetarea_center" },
                }),
                e._v(" "),
                t("div", {
                  staticClass: "bottom_content_widgetarea",
                  attrs: { id: "bottom_content_widgetarea_right" },
                }),
              ]),
            ]);
          },
        ],
        r = i(3822),
        n = {
          name: "ScreenSaver",
          components: {},
          beforeUnmount() {
            this.$refs.modalVideo.pause();
          },
          methods: {
            randomizeVideo(e) {
              (this.modalVid = i(9318)(`./${this.dir[e]}`)),
                this.$refs.modalVideo.removeEventListener("ended", () =>
                  this.handleEnded(e)
                ),
                this.$nextTick(() => {
                  this.$refs.modalVideo.addEventListener("ended", () =>
                    this.handleEnded(e)
                  ),
                    "ScreensaverPage" === this.activePage &&
                      this.$refs.modalVideo.play();
                });
            },
            integer() {
              if (this.randomized) {
                var e = Math.floor(Math.random() * this.dir.length);
                while (this.videosPlayed.indexOf(e) > -1)
                  e = Math.floor(Math.random() * this.dir.length);
                return e;
              }
              return this.counter++, this.counter;
            },
            handleEnded(e) {
              if (
                (this.videosPlayed.push(e),
                this.videosPlayed.length === this.dir.length)
              ) {
                if (!this.loopAll) return;
                this.videosPlayed = [];
              }
              this.$nextTick(() => {
                this.randomizeVideo(this.integer());
              });
            },
            resetAnalytics() {
              this.$store.commit("resetAnalytics"),
                this.$store.commit("setActivePage", "IntroVideoPage");
            },
          },
          computed: {
            ...(0, r.rn)([
              "carouselTransform",
              "carouselPos",
              "clickedTilesArray",
              "activeDirectory",
              "homeDirectory",
              "nestedRank",
              "activePage",
            ]),
          },
          data() {
            return {
              modalVid: null,
              paused: !1,
              loopScreensaverVideo: !1,
              showControls: !1,
              timeout: null,
              dir:
                i(2205).keys().length > 0
                  ? i(2205)
                      .keys()
                      .map((e) => e.split("./")[1])
                  : null,
              videosPlayed: [],
              modalVid: null,
              loopAll: !0,
              randomized: !0,
              counter: -1,
            };
          },
          mounted() {
            this.randomizeVideo(this.integer()),
              this.$store.commit("setActivePage", "ScreensaverPage"),
              this.$refs.modalVideo.addEventListener("ended", () =>
                this.handleEnded(num)
              ),
              (this.timeout = setTimeout(() => {
                clearTimeout(this.timeout),
                  this.resetAnalytics(),
                  (window.location.href = "./index.html");
              }, this.$settings.Screensaver_Duration_in_Minutes)),
              this.randomizeVideo(this.integer()),
              this.$store.commit("setActivePage", "ScreensaverPage"),
              this.$refs.modalVideo.addEventListener("ended", () =>
                this.handleEnded(num)
              ),
              (this.timeout = setTimeout(() => {
                clearTimeout(this.timeout),
                  this.resetAnalytics(),
                  window.location.reload();
              }, 150000 ));
          },
          created() {},
        },
        o = n,
        d = i(1001),
        c = (0, d.Z)(o, a, s, !1, null, "55e804dd", null),
        l = c.exports;
    },
    9318: function (e, t, i) {
      var a = { "./KBC-Screensaver.mp4": 1119 };
      function s(e) {
        var t = r(e);
        return i(t);
      }
      function r(e) {
        if (!i.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (s.keys = function () {
        return Object.keys(a);
      }),
        (s.resolve = r),
        (e.exports = s),
        (s.id = 9318);
    },
    2205: function (e, t, i) {
      var a = { "./KBC-Screensaver.mp4": 1119 };
      function s(e) {
        var t = r(e);
        return i(t);
      }
      function r(e) {
        if (!i.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (s.keys = function () {
        return Object.keys(a);
      }),
        (s.resolve = r),
        (e.exports = s),
        (s.id = 2205);
    },
    1119: function (e, t, i) {
      "use strict";
      e.exports = i.p + "media/screensaver.mp4";
    },
  },
]);
//# sourceMappingURL=532.d2eaa11b.js.map
