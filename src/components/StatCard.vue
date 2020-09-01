<template>
  <div class="statCard">
    <h3>
      <a :href="link">{{ statTitle }}</a>
    </h3>
    <div id="followers">
      <transition name="fade">
        <content-loader v-if="loading" width="60" height="4">
          <rect x="0" y="0" rx="1" ry="1" width="18" height="4" />
          <rect x="20" y="0" rx="1" ry="1" width="40" height="4" />
        </content-loader>
        <span v-if="!loading">{{ followers }} {{ suffix }}</span>
      </transition>
    </div>
    <img id="statIcon" :src="require('@/assets/logos/' + this.icon)" />
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'statCard',
  components: {
    ContentLoader,
  },
  props: {
    statTitle: String,
    followers: Number,
    suffix: String,
    icon: String,
    link: String,
    loading: Boolean,
  },
}
</script>

<style scoped>
.statCard {
  position: relative;
  background-color: #ffffff;
  background-image: -webkit-repeating-radial-gradient(
    center center,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 1px,
    transparent 0,
    transparent 100%
  );
  background-size: 20px 20px;
  border-radius: 10px;
  padding: 20px 20px;
  min-width: 220px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  text-align: left;
  overflow: hidden;
}

.statCard:hover {
  -webkit-box-shadow: 0px 10px 40px -10px #e6e6e6;
  -moz-box-shadow: 0px 10px 40px -10px #e6e6e6;
  box-shadow: 0px 10px 40px -10px #e6e6e6;
}

#followers {
  height: 20px;
  margin-top: 12px;
  color: #000;
}

#followers span {
  position: absolute;
  left: 0;
  bottom: 0;
  padding-bottom: 20px;
  padding-left: 20px;
}

#statIcon {
  width: 64px;
  height: 64px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 10px;
  -webkit-transform: rotate(-25deg) translate(-2%, 32%);
  transform: rotate(-25deg) translate(-2%, 32%);
  -webkit-box-shadow: 0px 10px 20px #e6e6e6;
  -moz-box-shadow: 0px 10px 20px #e6e6e6;
  box-shadow: 0px 10px 20px #e6e6e6;
}

h3 {
  margin: 0;
}

.statCard a {
  color: #000000;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
