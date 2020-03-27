<template>
  <a :href="link">
    <div class="card" :style="cardStyles">
      <div id="title">
        <div id="msg">{{ msg }}</div>
        <div id="description">{{ description }}</div>
      </div>
      <img id="icon" :src="require('@/assets/images/' + this.icon)" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: String,
    backgroundColor: String,
    description: String,
    textColor: String,
    icon: String,
    link: String,
  },
  computed: {
    cardStyles() {
      return {
        '--background-color': this.backgroundColor,
        '--color': this.textColor,
        '--color-hover': this.backgroundColor,
      }
    },
  },
}
</script>

<style scoped>
.card {
  border-radius: 10px;
  max-width: 320px;
  height: 120px;
  margin: 40px auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  color: var(--color);
  background-color: var(--background-color);
  -webkit-box-shadow: 0px 5px 20px -10px var(--color-hover);
  -moz-box-shadow: 0px 5px 20px -10px var(--color-hover);
  box-shadow: 0px 5px 20px -10px var(--color-hover);
}

.card:hover {
  -webkit-box-shadow: 0px 10px 40px -10px var(--color-hover);
  -moz-box-shadow: 0px 10px 40px -10px var(--color-hover);
  box-shadow: 0px 10px 40px -10px var(--color-hover);
}

#icon {
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: 0px;
}

#title {
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  font-family: 'Miriam Libre', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, 'PingFang SC',
    'Noto Sans CJK SC', 'Sarasa Gothic SC', 'Microsoft YaHei', sans-serif, Apple Color Emoji, Segoe UI Emoji;
}

#title #description {
  margin-top: 5px;
  font-weight: 400;
  font-size: 16px;
}

a {
  text-decoration: none;
}
</style>
