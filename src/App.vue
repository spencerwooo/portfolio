<template>
  <div id="app">
    <vue-navigation-bar :options="navbarOptions" />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <div id="footer">
      <div id="footer-text">
        <p>
          Built with ♥ and
          <a href="https://vuejs.org/">Vue.js</a>. Proudly deployed on
          <a href="https://vercel.com/spencerwoo/home">Vercel</a> with APIs hosted on
          <a href="https://www.cloudflare.com/">Cloudflare</a>.
        </p>
        <p>
          Designed, coded, and deployed from scratch by Spencer Woo. Open source on
          <a href="https://github.com/spencerwooo/portfolio">GitHub</a>.
        </p>
        <p id="busuanzi_container_site_pv">
          Viewed by you guys for a total of
          <span id="busuanzi_value_site_pv"></span> times ♥
        </p>
        <p id="footer-copyright">©2019 - {{ getYear() }} Spencer Woo</p>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-navigation-bar/dist/vue-navigation-bar.css'

export default {
  name: 'app',

  data() {
    return {
      navbarOptions: {
        elementId: 'main-navbar',
        mobileBreakpoint: 992,
        ariaLabelMainNav: 'Main Navigation',
        isUsingVueRouter: true,
        menuOptionsRight: [
          {
            type: 'link',
            text: 'HOME',
            path: '/',
          },
          {
            type: 'link',
            text: 'PROJECTS',
            path: '/projects',
          },
          {
            type: 'link',
            text: 'SOCIAL',
            path: '/social',
          },
        ],
      },
    }
  },
  methods: {
    getYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style>
.container {
  margin: 0px auto 0px auto;
  max-width: 664px;
  padding: 0px 20px 40px 20px;
}

#main-navbar {
  padding-right: 5px;
  background-color: #fafafa;
}

.vnb__collapse-button img {
  width: 24px;
  height: 24px;
  padding-bottom: 3px;
}

.vnb__menu-options--right {
  margin-left: 0;
  padding-left: 10px;
}

.vnb__popup__top__close-button {
  padding-top: 10px;
}

.vnb__menu-options__option a {
  font-size: 15px;
}

.vnb__menu-options__option a:focus {
  outline: none;
}

.vnb__popup__bottom__menu-options__option__link {
  padding: 6px 24px;
}

.vnb__popup__bottom__menu-options__option__link:focus {
  border-left: 2px solid #0070f3;
}

#footer {
  padding: 20px 20px;
  background-color: #000;
}

#footer p {
  color: var(--footer-color);
  line-height: initial;
}

#footer-text {
  margin: 0px auto;
  max-width: 664px;
  color: #ffffff;
}

#footer-text a,
#busuanzi_value_site_pv,
#footer-copyright {
  color: #ffffff;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
