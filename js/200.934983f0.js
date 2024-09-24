(self["webpackChunkcapsule_ui"] = self["webpackChunkcapsule_ui"] || []).push([
  [200],
  {
    2200: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return u;
          },
        });
      var s = function () {
          var e = this,
            t = e._self._c;
          return t("div", { attrs: { id: "main" } }, [
            t("div", {
              staticClass: "resetAnalytics",
              attrs: { id: "resetAnalytics" },
            }),
            t(
              "div",
              { staticClass: "modal" },
              [
                t(
                  "transition",
                  { key: e.vidSrc + "", attrs: { appear: "", name: "modal" } },
                  [
                    t(
                      "video",
                      {
                        key: e.modalVid,
                        ref: "bg_video",
                        attrs: {
                          playsinline: "",
                          width: "100%",
                          height: "100%",
                          id: "bg_video",
                          loop: "true",
                        },
                        domProps: { muted: e.$settings.Background_Vids_Muted },
                      },
                      [
                        t("source", {
                          key: e.modalVid,
                          attrs: { src: e.modalVid, type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]
                ),
              ],
              1
            ),
            t("div", { staticClass: "top_area" }, [
              t(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        JSON.stringify(
                          e.activeDirectory[e.activeDirectory.length - 1]
                        ) !== JSON.stringify(e.homeDirectory),
                      expression:
                        "JSON.stringify(activeDirectory[activeDirectory.length - 1]) !== JSON.stringify(homeDirectory)",
                    },
                  ],
                  ref: "top_area_wrapper",
                  staticClass: "top_area_wrapper",
                },
                [
                  t(
                    "div",
                    {
                      staticClass: "top_side_nav top",
                      attrs: { id: "top_side_nav_left" },
                    },
                    [
                      t(
                        "div",
                        { staticClass: "button", attrs: { id: "goback" } },
                        [
                          t("font-awesome-icon", {
                            staticClass: "close",
                            attrs: { icon: ["fas", "fa-circle-left"] },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                  e._v(" "),
                  t(
                    "a",
                    {
                      staticClass: "top_side_nav top",
                      attrs: { id: "top_side_nav_right" },
                    },
                    [
                      t(
                        "a",
                        {
                          staticClass: "button",
                          attrs: { href: "./index.html", id: "homedir" },
                        },
                        [
                          t("font-awesome-icon", {
                            staticClass: "close",
                            attrs: { icon: ["fas", "fa-house-chimney"] },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              ),
            ]),
            e._v(" "),
            t("div", { staticClass: "main_area" }, [
              e._m(0),
              t(
                "div",
                { staticClass: "tile_carousel_wrapper" },
                [
                  t("span", { staticClass: "tile_carousel_nav_wrapper" }, [
                    t(
                      "div",
                      {
                        staticClass: "tile_carousel_nav",
                        style:
                          0 === e.carouselPos
                            ? "filter: grayscale(1); pointer-events: none;"
                            : "pointer-events: auto;",
                        attrs: { id: "tile_carousel_nav_left" },
                      },
                      [
                        t("img", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                e.activeDirectory[e.activeDirectory.length - 1]
                                  .length > e.tilesPerPage,
                              expression:
                                "activeDirectory[activeDirectory.length - 1].length > tilesPerPage",
                            },
                          ],
                          attrs: { src: i(1677) },
                        }),
                      ]
                    ),
                    t(
                      "div",
                      {
                        staticClass: "tile_carousel_nav",
                        style:
                          e.carouselPos < e.carousels - 1
                            ? "pointer-events: auto;"
                            : "filter: grayscale(1); pointer-events: none;",
                        attrs: { id: "tile_carousel_nav_right" },
                      },
                      [
                        t("img", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                e.activeDirectory[e.activeDirectory.length - 1]
                                  .length > e.tilesPerPage,
                              expression:
                                "activeDirectory[activeDirectory.length - 1].length > tilesPerPage",
                            },
                          ],
                          attrs: { src: i(1756) },
                        }),
                      ]
                    ),
                  ]),
                  t("router-link", {
                    attrs: {
                      id: "screensaver",
                      to: "/screensavervideo#00-ScreenSaver",
                    },
                  }),
                  t(
                    "div",
                    {
                      key:
                        e.nestedRank +
                        e.activeDirectory[e.activeDirectory.length - 1],
                      style: `transform: translateX(-${e.carouselTransform}px); transition: all 1s ease;`,
                      attrs: { id: "tile_carousel_page_1" },
                    },
                    e._l(e.carousels, function (i, s) {
                      return t(
                        "div",
                        {
                          key: s,
                          staticClass: "tile_carousel_page",
                          attrs: { id: `carousel-${s}` },
                        },
                        e._l(
                          e.activeDirectory[e.activeDirectory.length - 1]
                            .length < e.tilesPerPage
                            ? e.activeDirectory[e.activeDirectory.length - 1]
                            : e.tilesPerPage,
                          function (i, r) {
                            return t(
                              "transition",
                              {
                                key:
                                  r +
                                  e.activeDirectory[
                                    e.activeDirectory.length - 1
                                  ],
                                attrs: { appear: "", name: "carousel" },
                              },
                              [
                                e.activeDirectory[e.activeDirectory.length - 1][
                                  r + s * e.tilesPerPage
                                ]
                                  ? t(
                                      "a",
                                      {
                                        staticClass: "tile",
                                        style: `background: ${e.$settings.Border_Color}`,
                                        attrs: {
                                          id: `clicktile_${
                                            r + s * e.tilesPerPage
                                          }`,
                                        },
                                      },
                                      [
                                        t(
                                          "span",
                                          {
                                            ref: `vid_${
                                              r + s * e.tilesPerPage
                                            }`,
                                            refInFor: !0,
                                            staticClass:
                                              "tile_content_link_wrapper",
                                            attrs: { target: "_self" },
                                          },
                                          [
                                            t(
                                              "a",
                                              {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      e.activeDirectory[
                                                        e.activeDirectory
                                                          .length - 1
                                                      ][
                                                        r + s * e.tilesPerPage
                                                      ] &&
                                                      e.activeDirectory[
                                                        e.activeDirectory
                                                          .length - 1
                                                      ][r + s * e.tilesPerPage]
                                                        .fields.Thumbnail[0]
                                                        .url &&
                                                      e.activeDirectory[
                                                        e.activeDirectory
                                                          .length - 1
                                                      ][
                                                        r + s * e.tilesPerPage
                                                      ].fields.Thumbnail.toString()
                                                        .length > 0,
                                                    expression:
                                                      "activeDirectory[activeDirectory.length - 1][i + j * tilesPerPage] && activeDirectory[activeDirectory.length - 1][i + j * tilesPerPage].fields.Thumbnail[0].url &&\n                    activeDirectory[activeDirectory.length - 1][i + j * tilesPerPage].fields.Thumbnail.toString().length > 0",
                                                  },
                                                ],
                                                staticClass:
                                                  "tile_content_thumb",
                                                attrs: {
                                                  id: `clicktile_${
                                                    r + s * e.tilesPerPage
                                                  }`,
                                                },
                                              },
                                              [
                                                t(
                                                  e.activeDirectory[
                                                    e.activeDirectory.length - 1
                                                  ][r + s * e.tilesPerPage] &&
                                                    e.activeDirectory[
                                                      e.activeDirectory.length -
                                                        1
                                                    ][
                                                      r + s * e.tilesPerPage
                                                    ].fields.Thumbnail[0].url.includes(
                                                      ".mp4"
                                                    )
                                                    ? "video"
                                                    : "img",
                                                  {
                                                    tag: "component",
                                                    attrs: {
                                                      src: e.activeDirectory[
                                                        e.activeDirectory
                                                          .length - 1
                                                      ][r + s * e.tilesPerPage]
                                                        .fields.Thumbnail[0]
                                                        .url,
                                                    },
                                                  },
                                                  [
                                                    t("source", {
                                                      attrs: {
                                                        src: e.activeDirectory[
                                                          e.activeDirectory
                                                            .length - 1
                                                        ][
                                                          r + s * e.tilesPerPage
                                                        ].fields.Thumbnail[0]
                                                          .url,
                                                        type: "video/mp4",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                            t(
                                              "p",
                                              {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      e.activeDirectory[
                                                        e.activeDirectory
                                                          .length - 1
                                                      ][
                                                        r + s * e.tilesPerPage
                                                      ] &&
                                                      e.activeDirectory[
                                                        e.activeDirectory
                                                          .length - 1
                                                      ][r + s * e.tilesPerPage]
                                                        .fields.Title,
                                                    expression:
                                                      "activeDirectory[activeDirectory.length - 1][i + j * tilesPerPage] && activeDirectory[activeDirectory.length - 1][i + j * tilesPerPage].fields.Title",
                                                  },
                                                ],
                                                staticClass: "tile_title",
                                                style: `color: ${e.$settings.Text_Color}`,
                                                attrs: {
                                                  id: `clicktile_${
                                                    r + s * e.tilesPerPage
                                                  }`,
                                                },
                                              },
                                              [
                                                e._v(
                                                  " " +
                                                    e._s(
                                                      e.activeDirectory[
                                                        e.activeDirectory
                                                          .length - 1
                                                      ][r + s * e.tilesPerPage]
                                                        .fields.Title
                                                    ) +
                                                    " "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    )
                                  : e._e(),
                              ]
                            );
                          }
                        ),
                        1
                      );
                    }),
                    0
                  ),
                ],
                1
              ),
              e._m(1),
            ]),
          ]);
        },
        r = [
          function () {
            var e = this,
              t = e._self._c;
            return t("div", { staticClass: "secondary_content_area_wrapper" }, [
              t("div", { staticClass: "secondary_content_area" }, [
                t("div", {
                  staticClass: "secondary_content_widgetarea",
                  attrs: { id: "secondary_content_widgetarea_left" },
                }),
                t("div", {
                  staticClass: "secondary_content_widgetarea",
                  attrs: { id: "secondary_content_widgetarea_center" },
                }),
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
                t("div", {
                  staticClass: "bottom_content_widgetarea",
                  attrs: { id: "bottom_content_widgetarea_center" },
                }),
                t("div", {
                  staticClass: "bottom_content_widgetarea",
                  attrs: { id: "bottom_content_widgetarea_right" },
                }),
              ]),
            ]);
          },
        ],
        a = i(6299),
        o = i(6369),
        l = i(9117);
      class n {
        constructor() {
          l.Z.commit("setCarouselTransform", 2160 * l.Z.state.carouselPos);
        }
        pause() {
          return new Promise((e) => {
            this.carousel &&
              [...this.carousel.children]
                .map((e) => [...e.getElementsByTagName("video")])
                .flat(3)
                .forEach((e) => e.pause()),
              e();
          });
        }
        play() {
          document.getElementById(`carousel-${l.Z.state.carouselPos}`) &&
            ((this.activeVids = [
              ...document.getElementById(`carousel-${l.Z.state.carouselPos}`)
                .children,
            ]
              .map((e) => e.getElementsByTagName("video")[0])
              .filter((e) => void 0 !== e)),
            o.ZP.nextTick(() => {
              this.activeVids.forEach((e) => {
                e.play();
              });
            }));
        }
        init(e, t) {
          (this.limit = Math.ceil(e.length / t) - 1),
            (this.carousel = document.getElementById("tile_carousel_page_1")),
            (this.pos = 0),
            (this.leftPressDisable = !1),
            (this.rightPressDisable = !1);
        }
        carouselleft(e) {
          if (
            (e.stopPropagation(),
            !(this.leftPressDisable || l.Z.state.carouselPos <= 0))
          )
            return (
              (this.leftPressDisable = !0),
              new Promise((e) => {
                l.Z.commit("setCarouselPos", l.Z.state.carouselPos - 1),
                  l.Z.commit(
                    "setCarouselTransform",
                    2160 * l.Z.state.carouselPos
                  ),
                  setTimeout(() => {
                    (this.leftPressDisable = !1), e();
                  }, 1e3);
              })
            );
        }
        carouselright(e) {
          if (
            (e.stopPropagation(),
            !(this.rightPressDisable || l.Z.state.carouselPos >= this.limit))
          )
            return (
              (this.rightPressDisable = !0),
              new Promise((e) => {
                l.Z.commit("setCarouselPos", l.Z.state.carouselPos + 1),
                  l.Z.commit(
                    "setCarouselTransform",
                    2160 * l.Z.state.carouselPos
                  ),
                  setTimeout(() => {
                    (this.rightPressDisable = !1), e();
                  }, 1e3);
              })
            );
        }
      }
      var c = i(3822);
      const d = new n();
      var A = {
          name: "App",
          components: {},
          props: {
            route: { type: Object, default: () => {} },
            clickedTiles: { type: Array, default: () => [] },
            tilesPerPage: { type: Number, default: 6 },
            differentBGOnNested: { type: Boolean, default: !1 },
            inactiveState: { type: Object, default: () => {} },
          },
          watch: {
            timeElapsed: {
              handler(e) {
                e &&
                  (this.timesTimeElapsed++,
                  this.inactiveState.screensaver &&
                    document.getElementById("screensaver").click(),
                  this.inactiveState.play_random_tile &&
                    this.$refs[
                      `vid_${[
                        Math.floor(
                          Math.random() * this.activeDirectory[0].length - 1
                        ),
                      ]}`
                    ][0].$el.click(),
                  this.inactiveState.go_to_home_page &&
                    document.getElementById("top_side_nav_right") &&
                    (clearInterval(this.timer),
                    this.$store.commit(
                      "setActiveDirectory",
                      this.homeDirectory
                    ),
                    this.$store.commit("setNestedRank", 0),
                    document.getElementById("resetAnalytics") &&
                      document.getElementById("resetAnalytics").click()));
              },
            },
            carouselPos: {
              handler() {
                this.$nextTick(() => {
                  this.handleTileSpacing(),
                    d.pause().then(() => {
                      setTimeout(() => {
                        d.play();
                      }, 1e3);
                    });
                });
              },
              immediate: !0,
              deep: !0,
            },
            activeDirectory: {
              handler() {
                this.differentBGOnNested &&
                  (this.homeDirectory.toString() !==
                  this.activeDirectory[
                    this.activeDirectory.length - 1
                  ].toString()
                    ? ((this.modalVid = i(4115)(
                        `./${i(8583).keys()[0].split("./")[1]}`
                      )),
                      console.log(this.modalVid))
                    : (this.modalVid = i(1060)(
                        `./${i(8264).keys()[0].split("./")[1]}`
                      ))),
                  this.$nextTick(() => {
                    this.handleTileSpacing(),
                      this.inactiveState.enabled && this.inactiveStateTimer(),
                      this.carousel(),
                      d.pause().then(() => {
                        setTimeout(() => {
                          d.play();
                        }, 1e3);
                      });
                  });
              },
              immediate: !0,
              deep: !0,
            },
          },
          computed: {
            ...(0, c.rn)([
              "carouselTransform",
              "carouselPos",
              "clickedTilesArray",
              "activeDirectory",
              "homeDirectory",
              "nestedRank",
              "activePage",
            ]),
          },
          methods: {
            getLink(e) {
              return e.Nested_Children
                ? `#nestedpage=${e.ID}`
                : e.Content &&
                  e.Content[0].url &&
                  e.Content[0].url.includes(".mp4")
                ? (document
                    .getElementById("main")
                    .removeEventListener("click", this.handleClick),
                  clearInterval(this.timer),
                  `video=${e.ID}`)
                : void 0;
            },
            handleTileSpacing() {
              this.$nextTick(() => {
                let e =
                  this.activeDirectory[this.activeDirectory.length - 1].length;
                document.getElementsByClassName("tile_carousel_page")[
                  this.carouselPos
                ] &&
                  (5 === this.tilesPerPage ||
                    5 === e ||
                    6 === e ||
                    6 === this.tilesPerPage) &&
                  document.getElementById("carousel-0").children.length > 4 &&
                  this.$nextTick(() => {
                    document
                      .getElementsByClassName("tile_carousel_page")
                      [this.carouselPos].getElementsByClassName("tile")[0] &&
                      (document
                        .getElementsByClassName("tile_carousel_page")
                        [this.carouselPos].getElementsByClassName(
                          "tile"
                        )[0].style = `margin-left: 80px; background: ${
                        this.$settings.Border_Color || "rgb(16, 158, 217)"
                      }`),
                      document
                        .getElementsByClassName("tile_carousel_page")
                        [this.carouselPos].getElementsByClassName("tile")[2] &&
                        (document
                          .getElementsByClassName("tile_carousel_page")
                          [this.carouselPos].getElementsByClassName(
                            "tile"
                          )[2].style = `margin-right: 80px; background: ${
                          this.$settings.Border_Color || "rgb(16, 158, 217)"
                        }`);
                  });
              });
            },
            goBackNestedPage() {
              this.$store.commit("setNestedRank", this.nestedRank - 1),
                this.activeDirectory.length > 1 && this.$store.commit("goBack"),
                this.homeDirectory.toString() ===
                  this.activeDirectory[
                    this.activeDirectory.length - 1
                  ].toString() && (window.location.href = "./index.html");
            },
            handleClick(e) {
              if (
                (this.inactiveState.enabled && this.inactiveStateTimer(),
                "resetAnalytics" === e.target.className &&
                  (this.$store.commit("resetAnalytics"),
                  this.$store.commit("setActivePage", "ScreensaverPage"),
                  location.reload()),
                "homedir" === e.target.id)
              )
                return (
                  e.preventDefault(),
                  this.$store.commit("setCarouselPos", 0),
                  this.$store.commit("setCarouselTransform", 0),
                  this.$store.commit("setActiveDirectory", this.homeDirectory),
                  void (window.location.href = "./index.html")
                );
              if (
                (e.stopPropagation(),
                "goback" === e.target.id &&
                  (e.preventDefault(), this.goBackNestedPage()),
                "tile_carousel_nav_right" === e.target.id && d.carouselright(e),
                "tile_carousel_nav_left" === e.target.id && d.carouselleft(e),
                e.target.id.includes("clicktile"))
              ) {
                var t = e.target.id.split("_")[1],
                  i = this.activeDirectory[this.activeDirectory.length - 1][t];
                this.$nextTick(() => {
                  this.tileClickEvents(i, t);
                });
              }
            },
            tileClickEvents(e, t) {
              this.$nextTick(() => {
                this.handleTileSpacing();
              }),
                (e.fields.Nested_Children ||
                  e.fields.Content ||
                  e.fields.is_screenshot_page ||
                  e.fields.HTML) &&
                  (this.$refs.bg_video.pause(),
                  this.$nextTick(() => {
                    if(e.fields["ID"] == "KBC1"){
                      window.location.href = "soul-integration.html"
                  }
                    if(e.fields["ID"] == "KBC4"){
                        window.location.href = "locker-integration.html"
                    }


                    if (e.fields["3D_Content"]) {
                      if (e.fields["3D_Content"].includes("autodesk?"))
                        return void this.$router.push(e.fields["3D_Content"]);
                      if (e.fields["3D_Content"].includes("sketchfab?"))
                        return void this.$router.push(e.fields["3D_Content"]);
                      this.$router.push(
                        `/view3d_screen#${e.fields["3D_Content"]}`
                      );
                    }
                    if (
                      (e.fields.Nested_Children &&
                        e.fields.Nested_Children.length > 0 &&
                        (this.$store.commit("setActiveDirectory", [
                          ...this.$videos.filter(
                            (t) =>
                              e.fields.Nested_Children.indexOf(t.fields.ID) > -1
                          ),
                        ]),
                        this.$store.commit(
                          "setNestedRank",
                          this.nestedRank + 1
                        )),
                      "yes" === e.fields.is_screenshot_page)
                    )
                      return (
                        document
                          .getElementById("main")
                          .removeEventListener("click", this.handleClick),
                        clearInterval(this.timer),
                        void this.$router.push("screenshot_screen")
                      );
                    if (e.fields.HTML)
                      return (
                        document
                          .getElementById("main")
                          .removeEventListener("click", this.handleClick),
                        clearInterval(this.timer),
                        void this.$router.push(`/iframe#${e.fields.ID}`)
                      );
                    void 0 !== this.getLink(e.fields) &&
                      this.$router.push(this.getLink(e.fields));
                    var i = this.clickedTilesArray;
                    i[t]++,
                      this.$store.commit("setClickedTiles", i),
                      this.$analytics.track(
                        {
                          event: "tileClick",
                          property: `Tile_${t}`,
                          result: i[t],
                          _id: `tileClick_Tile_${t}`,
                        },
                        (e) => {
                          a.Z.analytics(e.payload.properties);
                        }
                      );
                  }));
            },
            inactiveStateTimer() {
              (this.timeElapsed = !1),
                clearTimeout(this.timeout),
                (this.timeElapsed = !1),
                (this.timeout = setInterval(() => {
                  this.timeElapsed = !0;
                }, this.inactiveState.milliseconds));
            },
            carousel() {
              (this.carousels = Math.ceil(
                this.activeDirectory[this.activeDirectory.length - 1].length /
                  this.tilesPerPage
              )),
                d.init(
                  this.activeDirectory[this.activeDirectory.length - 1],
                  this.tilesPerPage
                );
            },
            introVideoEnded() {
              this.introVideoPlayed = !0;
            },
            randomizeVideo(e) {
              (this.modalVid = i(1060)(`./${this.dir[e]}`)),
                this.$refs.bg_video.removeEventListener("ended", () =>
                  this.handleEnded(e)
                ),
                this.$nextTick(() => {
                  this.$refs.bg_video.addEventListener("ended", () =>
                    this.handleEnded(e)
                  ),
                    "App" === this.activePage && this.$refs.bg_video.play();
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
          },
          data() {
            return {
              carousels: 1,
              modalVid: null,
              subFolder: null,
              timeElapsed: !1,
              timesTimeElapsed: 0,
              timer: null,
              timeout: null,
              vidSrc: { src: null },
              playPromise: null,
              videosPlayed: [],
              randomized: !0,
              counter: -1,
              dir:
                i(8264).keys().length > 0
                  ? i(8264)
                      .keys()
                      .map((e) => e.split("./")[1])
                  : null,
              loopAll: !0,
              modalVid: null,
            };
          },
          mounted() {
            this.$store.commit("setActivePage", "App"),
              document.getElementById("main") &&
                document
                  .getElementById("main")
                  .addEventListener("click", this.handleClick),
              this.$refs.bg_video.addEventListener("ended", () =>
                this.handleEnded(num)
              ),
              this.carousel(),
              this.handleTileSpacing(),
              this.inactiveState.enabled && this.inactiveStateTimer(),
              this.$nextTick(() => {
                "App" === this.activePage && this.$refs.bg_video.play();
              }),
              window.addEventListener("wheel", this.disablewheelzoom, {
                passive: !1,
              }),
              (window.ontouchstart = function (e) {
                e.touches.length > 1 && e.preventDefault();
              });
          },
        },
        g = A,
        m = i(1001),
        h = (0, m.Z)(g, s, r, !1, null, "a23177ca", null),
        u = h.exports;
    },
    1060: function (e, t, i) {
      var s = { "./KBC-Menu.mp4": 4230 };
      function r(e) {
        var t = a(e);
        return i(t);
      }
      function a(e) {
        if (!i.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return s[e];
      }
      (r.keys = function () {
        return Object.keys(s);
      }),
        (r.resolve = a),
        (e.exports = r),
        (r.id = 1060);
    },
    8264: function (e, t, i) {
      var s = { "./KBC-Menu.mp4": 4230 };
      function r(e) {
        var t = a(e);
        return i(t);
      }
      function a(e) {
        if (!i.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return s[e];
      }
      (r.keys = function () {
        return Object.keys(s);
      }),
        (r.resolve = a),
        (e.exports = r),
        (r.id = 8264);
    },
    4115: function (e, t, i) {
      var s = { "./KBC-Menu.mp4": 56 };
      function r(e) {
        var t = a(e);
        return i(t);
      }
      function a(e) {
        if (!i.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return s[e];
      }
      (r.keys = function () {
        return Object.keys(s);
      }),
        (r.resolve = a),
        (e.exports = r),
        (r.id = 4115);
    },
    8583: function (e, t, i) {
      var s = { "./KBC-Menu.mp4": 56 };
      function r(e) {
        var t = a(e);
        return i(t);
      }
      function a(e) {
        if (!i.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return s[e];
      }
      (r.keys = function () {
        return Object.keys(s);
      }),
        (r.resolve = a),
        (e.exports = r),
        (r.id = 8583);
    },
    1677: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    1756: function (e) {
      "use strict";
      e.exports =
        "data:image/png;base64,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";
    },
    4230: function (e, t, i) {
      "use strict";
      e.exports = i.p + "media/KBC-Menu.752680d1.mp4";
    },
    56: function (e, t, i) {
      "use strict";
      e.exports = i.p + "media/KBC-Menu.752680d1.mp4";
    },
  },
]);
//# sourceMappingURL=200.934983f0.js.map