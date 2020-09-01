<template>
  <div class="github-project-card">
    <h3>
      <a :href="link">{{ title }}</a>
    </h3>
    <slot> </slot>
    <div class="github-repo-stats">
      <transition name="fade">
        <content-loader v-if="loading" width="120" height="4">
          <rect x="0" y="0" rx="1" ry="1" width="8" height="4" />
          <rect x="10" y="0" rx="1" ry="1" width="8" height="4" />
        </content-loader>
        <div v-if="!loading" id="github-stats">
          <a :href="link + '/stargazers'">
            <svg
              aria-label="stars"
              class="octicon octicon-star"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              />
            </svg>
            {{ info.stargazers_count }}
          </a>
          <a :href="link + '/network/members'">
            <svg
              aria-label="forks"
              class="octicon octicon-repo-forked"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              />
            </svg>
            {{ info.forks_count }}
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'GitHubCard',
  components: {
    ContentLoader,
  },
  props: {
    loading: Boolean,
    title: String,
    link: String,
    info: {
      stargazers_count: Number,
      forks_count: Number,
    },
  },
}
</script>

<style scoped>
h3 {
  font-size: 18px;
  padding: 18px 0 0 0;
  margin: 0;
}

h3 a {
  color: #000000;
}

.github-project-card {
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  transition: 0.3s;
  background-image: -webkit-repeating-radial-gradient(
    center center,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 1px,
    transparent 0,
    transparent 100%
  );
  background-size: 20px 20px;
}

.github-project-card:hover {
  -webkit-box-shadow: 0px 10px 40px -10px #e6e6e6;
  -moz-box-shadow: 0px 10px 40px -10px #e6e6e6;
  box-shadow: 0px 10px 40px -10px #e6e6e6;
}

.github-project-card p {
  line-height: 25px;
}

.github-repo-stats {
  height: 16px;
}

.github-repo-stats a {
  color: #000;
  padding-right: 20px;
  font-size: 14px;
}

.github-repo-stats a:hover {
  border: none;
}

#github-stats {
  position: absolute;
  left: 0;
  bottom: 0;
  padding-left: 20px;
  padding-bottom: 20px;
}

.octicon {
  vertical-align: text-top;
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
