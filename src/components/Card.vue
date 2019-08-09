<template>
  <a :href="link">
    <div class="card" :style="cardStyles">
      <div id="title">{{ msg }}</div>
      <img id="icon" :src="require('@/assets/' + this.icon)" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: String,
    backgroundColor: String,
    textColor: String,
    icon: String,
    link: String
  },
  computed: {
    cardStyles() {
      return {
        'background-color': this.backgroundColor,
        color: this.textColor
      }
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

div.card {
  border-radius: 10px;
  max-width: 320px;
  height: 120px;
  margin: 40px auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  transition: 0.5s;
}
div.card:hover {
  -webkit-box-shadow: 0px 8px 36px -5px rgba(20, 19, 19, 0.5);
  -moz-box-shadow: 0px 8px 36px -5px rgba(20, 19, 19, 0.5);
  box-shadow: 0px 8px 36px -5px rgba(20, 19, 19, 0.5);
}

div#title {
  font-weight: 700;
  font-size: 20px;
}

img#icon {
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: 0px;
}
</style>
