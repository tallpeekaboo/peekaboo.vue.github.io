<template>
  <div>
    <footer
      class="udlite-footer ud-app-loader"
      data-module-id="common/udlite/desktop"
      data-module-args='{"localeSelect":{"currentLanguageId":"zh_CN"}}'
      data-module-priority="-10"
    >
      <div class="ud-component--footer--bai-banner"></div>
      <div class="footer-section footer-section-main">
        <div class="links-and-locale">
          <div
            class="locale-select-container ud-component--footer--locale-select"
          ></div>
          <ul class="unstyled-list link-column">
            <li>
              <a
                class="link udlite-text-sm ud-ufb-notice-click-event"
                href="https://business.udemy.com/?locale=zh_CN&amp;ref=footer&amp;mx_pg=home-page"
                target="_blank"
                rel="noopener"
                data-placement="footer"
              >
                Udemy for Business
              </a>
            </li>
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="footer.links.teach"
                href="/teaching/?ref=teach_footer"
              >
                在 Udemy 上授课
              </a>
            </li>
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="None"
                href="/mobile/"
                target="_blank"
                rel="noopener noreferrer"
              >
                获取应用程序
              </a>
            </li>
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="footer.links.about"
                href="https://about.udemy.com/?locale=zh-cn"
              >
                关于我们
              </a>
            </li>
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="footer.links.contact"
                href="https://about.udemy.com/company?locale=zh-cn#offices"
              >
                联系我们
              </a>
            </li>
          </ul>
          <ul class="unstyled-list link-column">
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="footer.links.careers"
                href="https://about.udemy.com/careers?locale=zh-cn"
              >
                职业生涯
              </a>
            </li>
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="footer.links.blog"
                href="https://blog.udemy.com/?ref=footer"
              >
                博客
              </a>
            </li>
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="footer.links.support"
                href="/support/"
              >
                帮助和支持
              </a>
            </li>
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="footer.links.affiliates"
                href="/affiliate/"
              >
                营销联盟
              </a>
            </li>
          </ul>
          <ul class="unstyled-list link-column">
            <li>
              <a class="link udlite-text-sm" data-purpose="None" href="/terms/">
                条款
              </a>
            </li>
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="None"
                href="/terms/privacy/"
              >
                隐私政策
              </a>
            </li>
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="footer.links.cookie_preferences"
                href="javascript:void(0);"
                style="display: none"
              >
                Cookie 设置
              </a>
            </li>
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="footer.links.sitemap"
                href="/zh-cn/sitemap/"
              >
                网站地图
              </a>
            </li>
            <li>
              <a
                class="link udlite-text-sm"
                data-purpose="footer.links.popular_courses"
                href="/zh-cn/popular-courses/"
              >
                精选课程
              </a>
            </li>
          </ul>
        </div>
        <div class="logo-and-copyright">
          <div class="logo-container">
            <a href="/" style="display: block">
              <img
                alt="Udemy"
                class="ufb-logo"
                src="../assets/static/picture/logo-coral.svg"
                width="110"
                height="32"
              />
            </a>
          </div>
          <div class="copyright-container udlite-text-xs">
            &copy; 2021 Udemy, Inc.
          </div>
        </div>
      </div>
      <div class="ud-component--footer--eu-cookie-message"></div>
    </footer>
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
