<template>
  <div class="home">
    <img src="~/assets/back_and_obj_21.svg" class="image" alt="me" />

    <div class="text">
      <h1>Hi! I'm Jay Yan.</h1>
      <p>A web developer from China.</p>

      <div class="social">
        <a alt="github" class="github" href="https://github.com/coder-ysj" target="_blank" />
        <a alt="twitter" class="twitter" href="https://twitter.com/coder_ysj" target="_blank" />
        <a alt="weibo" class="weibo" href="https://www.weibo.com/jailjt" target="_blank" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div.home {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  width: 100%;
}

h1 {
  display: block;
  margin: 0.67em 0;
  font-weight: 700;
  font-size: 28px;
}

p {
  display: block;
  margin: 0.83em 0;
  font-size: 20px;
  font-weight: 400;
}

a {
  text-decoration: none;
  color: #c03237;
}

img.image {
  display: block;
  width: 40%;
  padding: 5em 0;
}

div.text {
  display: block;
  width: 40%;
  padding: 5em 0;
}

div.social {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
div.social > a {
  display: block;
  height: 25px;
  width: 25px;
  margin: 0.75em 1em;
  background: center no-repeat;
  background-size: 100%;
}
div.social > a.github {
  background-image: url("~assets/github.svg");
}
div.social > a.twitter {
  background-image: url("~assets/twitter.svg");
}
div.social > a.weibo {
  background-image: url("~assets/sinaweibo.svg");
}

@media screen and (max-width: 991px) {
  div.home {
    flex-direction: column;
  }

  img.image,
  div.text {
    width: 90%;
    padding: 2.5em 0;
  }
}

@media screen and (max-width: 480px) {
  img.image,
  div.text {
    padding: 1.5em 0;
  }

  h1 {
    font-size: 23px;
  }

  p {
    font-size: 15px;
  }
}

@media screen and (max-width: 320px) {
  img.image,
  div.text {
    padding: 0.5em 0;
  }
}
</style>
