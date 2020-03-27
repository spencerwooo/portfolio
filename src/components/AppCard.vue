<template>
  <div class="app-card" :style="cardStyles">
    <img id="icon" :src="require('@/assets/' + this.icon)" />
    <div id="title">
      <div id="upper-container">
        <div id="msg">{{ msg }}</div>
        <div id="stars">{{ stars }}</div>
      </div>
      <div id="description">{{ description }}</div>
    </div>
    <div id="links">
      <a :href="link1">
        <img
          v-tooltip="link1Tooltip"
          class="app-icon"
          :src="require('@/assets/' + this.rightIcon1)"
          alt="Right icon 1"
        />
      </a>
      <a :href="link2">
        <img
          v-tooltip="link2Tooltip"
          class="app-icon"
          :src="require('@/assets/' + this.rightIcon2)"
          alt="Right icon 2"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: String,
    description: String,
    icon: String,
    link1: String,
    link1Tooltip: String,
    link2: String,
    link2Tooltip: String,
    stars: String,
    rightIcon1: String,
    rightIcon2: String
  },
  data() {
    return {
      backgroundColor: '#ffffff',
      textColor: '#2c2c2c',
      hoverColor: '#e6e6e6'
    }
  },
  computed: {
    cardStyles() {
      return {
        '--background-color': this.backgroundColor,
        '--color': this.textColor,
        '--color-hover': this.hoverColor
      }
    }
  }
}
</script>

<style>
.app-card {
  border-radius: 10px;
  /* border: 1px solid #d1d5da; */
  height: 110px;
  margin: 40px auto;
  max-width: 420px;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  transition: 0.3s;
  background-color: var(--background-color);
  color: var(--color);
}

.app-card:hover {
  -webkit-box-shadow: 0px 10px 40px -10px var(--color-hover);
  -moz-box-shadow: 0px 10px 40px -10px var(--color-hover);
  box-shadow: 0px 10px 40px -10px var(--color-hover);
}

.app-card a {
  text-decoration: none;
}

.app-card a:hover {
  border: none;
}

#icon {
  width: 30px;
  height: 30px;
  margin-left: 0px;
  margin-right: 30px;
  border-radius: 5px;
}

.app-icon {
  width: 30px;
  height: 30px;
  margin-left: 20px;
}

#links {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
}

#title {
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  width: 60%;
}

#title #description {
  margin-top: 5px;
  font-weight: 400;
  font-size: 16px;
}

#title #msg {
  width: 120px;
  font-family: 'Miriam Libre', -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, 'PingFang SC', 'Noto Sans CJK SC', 'Sarasa Gothic SC',
    'Microsoft YaHei', sans-serif, Apple Color Emoji, Segoe UI Emoji;
}

#title #stars {
  font-size: 12px;
  line-height: 1.2rem;
}

#upper-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
}

@media screen and (max-width: 960px) {
  .app-card {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    height: 100%;
    margin: 25px auto;
    padding: 0 15px;
    -webkit-box-shadow: 0px 10px 40px -10px var(--color-hover);
    -moz-box-shadow: 0px 10px 40px -10px var(--color-hover);
    box-shadow: 0px 10px 40px -10px var(--color-hover);
  }

  #icon {
    margin: 15px auto 15px 0;
  }

  .app-icon {
    margin-left: 15px;
  }

  #links {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    align-content: stretch;
    width: 100%;
    margin: 15px 0;
  }

  #title {
    width: 100%;
  }

  #upper-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;
  }
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: #1d1c1c;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: #1d1c1c;
  z-index: 1;
}

.tooltip[x-placement^='top'] {
  margin-bottom: 5px;
}

.tooltip[x-placement^='top'] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='bottom'] {
  margin-top: 5px;
}

.tooltip[x-placement^='bottom'] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^='right'] {
  margin-left: 5px;
}

.tooltip[x-placement^='right'] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^='left'] {
  margin-right: 5px;
}

.tooltip[x-placement^='left'] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: #1d1c1c;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(#1d1c1c, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.2s;
}
</style>
