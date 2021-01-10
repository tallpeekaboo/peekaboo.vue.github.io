<template>
  <div>
    <div
      class="ud-app-loader ud-component--header-v6--header udlite-header"
      data-module-id="common/udlite/desktop"
      data-module-args='{"isInstructorSignupEnabled":false,"isLoggedIn":false,"tryUFBPlacements":{"bar":"ufb_header","profile":"account-menu","mobile":"ufb_header"},"mobileAppLink":{"url":"/mobile/"},"searchPhrase":null}'
      data-module-priority="-10"
    >
      <div data-unique-id="339" style="display: none"></div>

      <div
        class="udlite-text-sm header--header--3sK1h header--flex-middle--2Xqjv"
        data-purpose="header"
      >
        <div class="skip-to-content-button--skip-to-content--1MoIi">
          <button
            type="button"
            class="udlite-btn udlite-btn-large udlite-btn-primary udlite-heading-md skip-to-content-button--skip-to-content-btn--3Uakj"
          >
            <span
              aria-hidden="true"
              class="skip-to-content-button--skip-to-content-shadow--eBW6V"
            ></span
            ><span style="margin: 0">跳转至目录</span>
          </button>
        </div>
        <a href="/" class="header--flex-middle--2Xqjv header--logo--bdAod"
          ><img
            src="../assets/static/picture/logo-coral.svg"
            alt="Udemy"
            width="110"
            height="32"
        /></a>
        <nav
          class="header--gap-button--3bIww popper--popper--19faV popper--popper-hover--4YJ5J"
        >
          <span class="udlite-text-sm header--dropdown-button-text--2jtIM"
            >类别</span
          >
        </nav>

        <div
          class="udlite-search-form-autocomplete header--search-bar--1_mS0 udlite-form-group"
        >
          <label
            class="udlite-sr-only udlite-form-label udlite-heading-sm"
            for="u339-search-form-autocomplete--3"
            >搜索任何内容</label
          >

          <input
            placeholder="搜索任何内容"
            name="q"
            autoComplete="off"
            value=""
            id="u339-search-form-autocomplete--3"
            class="udlite-text-input udlite-text-input-small udlite-text-sm udlite-search-form-autocomplete-input js-header-search-field"
          />
        </div>
        <div style="flex: 1"></div>
      </div>
    </div>

    <div
      class="ud-app-loader ud-component--ui-feedback--ui-feedback"
      data-module-id="common/udlite/desktop"
      data-module-args='{"uiMessages":[]}'
      data-module-priority="-10"
    ></div>
    <div class="main-content">
      <div class="ud-component--logged-out-home--billboard">
        <div data-unique-id="340" style="display: none"></div>
        <div data-purpose="billboard" class="billboard--billboard--3-fQr">
          <div class="billboard--image-container--2JRqQ">
            <img
              src="../assets/static/picture/77f9aaeb-0bd4-48ff-ad3a-c88ff9f5f0fb.jpg"
              width="1340"
              height="400"
              alt=""
            />
          </div>
          <div class="billboard--content-box--JtXUJ">
            <h1
              class="udlite-heading-xxl"
              data-purpose="safely-set-inner-html:billboard:title"
            >
              优惠延长一天！
            </h1>
            <p
              class="udlite-text-md"
              data-purpose="safely-set-inner-html:billboard:subtitle"
            >
              课程 US$9.99 起。<b>此外，可获取免费学习指南</b>。<u
                ><a
                  target="_blank"
                  href="https://support.udemy.com/hc/articles/360058080354"
                  >条款适用</a
                ></u
              >。
            </p>
            <div
              class="udlite-search-form-autocomplete billboard--search-bar--3s2y1 udlite-form-group"
            >
              <label
                class="udlite-sr-only udlite-form-label udlite-heading-sm"
                for="u340-search-form-autocomplete--1"
                >您想学习什么内容？</label
              >
              <form
                action="/courses/search/"
                class="udlite-search-form-autocomplete-input-group"
              >
                <input
                  placeholder="您想学习什么内容？"
                  name="q"
                  autoComplete="off"
                  value=""
                  id="u340-search-form-autocomplete--1"
                  class="udlite-text-input udlite-text-input-large udlite-text-md udlite-search-form-autocomplete-input"
                /><button
                  type="submit"
                  class="udlite-btn udlite-btn-large udlite-btn-ghost udlite-heading-md udlite-btn-icon udlite-btn-icon-large"
                >
                  <svg
                    aria-label="提交搜索"
                    focusable="false"
                    class="udlite-icon udlite-icon-medium udlite-icon-color-neutral"
                  >
                    <use xlink:href="#icon-search"></use>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
</style>
