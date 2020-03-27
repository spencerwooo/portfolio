<template>
  <div class="statCard">
    <a :href="link"
      ><h3>{{ statTitle }}</h3></a
    >
    <div id="followers">{{ followers }} {{ suffix }}</div>
    <img id="statIcon" :src="require('@/assets/logos/' + this.icon)" />
  </div>
</template>

<script>
export default {
  name: 'statCard',
  props: {
    statTitle: String,
    followers: Number,
    suffix: String,
    icon: String,
    link: String,
  },
}
</script>

<style scoped>
.statCard {
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px 30px;
  margin: 15px 15px;
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
  margin-top: 10px;
  color: #24292e;
  -webkit-transition: 0.3s;
  transition: 0.3s;
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
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  color: #24292e;
}

.statCard a {
  text-decoration: none;
}
</style>
