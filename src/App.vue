<template>
  <div id="app">
    <vue-particles
      class="particles"
      color="#000000"
      :particleOpacity="0.3"
      :particlesNumber="20"
      shapeType="circle"
      :particleSize="4"
      :lineLinked="false"
      :moveSpeed="3"
      :hoverEffect="false"
      :clickEffect="false"
    />

    <vue-navigation-bar :options="navbarOptions">
      <template v-slot:custom-section>
        <div class="link">
          <router-link to="/">HOME</router-link>
        </div>
        <div class="link">
          <router-link to="/about">ABOUT</router-link>
        </div>
        <div class="link">
          <router-link to="/subscribe">SUBSCRIBE</router-link>
        </div>
        <div class="link">
          <router-link to="/stats">STATS</router-link>
        </div>
      </template>
    </vue-navigation-bar>

    <transition enter-active-class="animation-fade-in">
      <router-view />
    </transition>

    <div id="footer">
      <div id="footer-text">
        <p>
          Built with ♥ and
          <a href="https://vuejs.org/">Vue.js</a> | CSS animations by <a href="http://animista.net/">Animista</a> |
          Proudly deployed on
          <a href="https://vercel.com/spencerwoo/home">Vercel</a>
        </p>
        <p>
          Designed, coded, and deployed from scratch by Spencer Woo. Open source on
          <a href="https://github.com/spencerwooo/portfolio">GitHub</a>.
        </p>
        <p id="busuanzi_container_site_pv">
          Viewed by you guys for a total of
          <span id="busuanzi_value_site_pv"></span> times ♥
        </p>
        <p id="footer-copyright">©{{ getYear() }} Spencer Woo</p>
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
        menuOptionsRight: [
          {
            type: 'button',
            text: '🌟 ME ON GITHUB',
            path: 'https://github.com/spencerwooo/portfolio',
            class: 'button-github',
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
@import url('https://fonts.googleapis.com/css2?family=Miriam+Libre:wght@400;700&family=Rubik:wght@400;500&display=swap');

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  z-index: -9999;
}

html,
body {
  margin: 0;
  padding: 0;
}

.animation-fade-in {
  -webkit-animation: fade-in-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

#app {
  font-family: 'Rubik', 'Avenir Next', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, 'PingFang SC',
    'Noto Sans CJK SC', 'Sarasa Gothic SC', 'Microsoft YaHei', sans-serif, Apple Color Emoji, Segoe UI Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #24292e;
  background-color: #f7fafc;
  -webkit-animation: fade-in-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

.container {
  text-align: center;
  margin: 0px auto 0 auto;
  max-width: 664px;
  padding: 0px 20px 40px 20px;
}

#main-navbar {
  padding-left: 15px;
  padding-right: 5px;
  background-color: #f7fafc;
}

#main-navbar,
#main-navbar .link a {
  font-weight: 400;
}

#main-navbar .button-github {
  background: #f7fafc;
  color: #24292e;
  border: 1.5px solid #265ca2;
  /* border-radius: 50px; */
  transition: 0.3s;
}

#main-navbar .button-github:hover {
  background: #265ca2;
  color: #ffffff;
  -webkit-box-shadow: 0px 10px 40px -10px #265ca2;
  -moz-box-shadow: 0px 10px 40px -10px #265ca2;
  box-shadow: 0px 10px 40px -10px #265ca2;
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

.link {
  padding: 0px 10px 0 10px;
  cursor: pointer;
  -webkit-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
}

.link a {
  text-decoration: none;
  font-weight: 500;
  color: #595959;
  font-size: 1rem;
}

.vnb__popup__bottom__custom-section .link {
  padding-bottom: 10px;
}

#avatar {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-top: 40px;
}

.article {
  text-align: left;
}

h1 {
  font-weight: 700;
  font-size: 28px;
}

h2 {
  font-weight: 400;
  font-size: 20px;
  padding: 20px 0;
}

h1,
h2,
h3 {
  font-family: 'Miriam Libre', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, 'PingFang SC',
    'Noto Sans CJK SC', 'Sarasa Gothic SC', 'Microsoft YaHei', sans-serif, Apple Color Emoji, Segoe UI Emoji;
}

hr {
  width: 100px;
  margin: 60px 0 0 0;
  border-top: solid 3px #24292e;
}

p,
span {
  color: #666666;
}

#top-hr {
  width: 100px;
  margin: 60px auto;
  border-top: solid 3px #265ca2;
}

.social-media-card {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.social-media-card .media-icon {
  width: 20px;
  height: 20px;
  padding-right: 10px;
}

.container a {
  text-decoration: none;
  color: #265ca2;
}

.container a:hover {
  border-bottom: #265ca2 solid 1px;
}

#others {
  text-align: left;
}

#footer {
  padding: 20px 20px;
  background-color: #24292e;
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

/**
 * ----------------------------------------
 * animation fade-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
