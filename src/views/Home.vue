<template>
  <div class="container">
    <div id="name-container">
      <img id="avatar" src="./../assets/images/av.png" alt="avatar" />
      <h1>Spencer Woo</h1>
    </div>
    <div class="title-desc-container">
      <a id="github" href="https://github.com/spencerwooo" target="_blank" rel="noopener noreferrer"
        ><img class="title-font" src="./../assets/images/github.svg" />Developer</a
      >
      <span>/</span>
      <a id="sspai" href="https://sspai.com/u/spencerwoo/posts" target="_blank" rel="noopener noreferrer"
        ><img class="title-font" src="./../assets/images/sspai.svg" />Writer</a
      >
      <span>/</span>
      <a id="blog" href="https://blog.spencerwoo.com" target="_blank" rel="noopener noreferrer"
        ><img class="title-font" src="./../assets/images/zeit.svg" />Blogger</a
      >
    </div>
    <div class="article">
      <h2>WHO AM I</h2>
      <p>
        I'm <i>Spencer Woo</i> with the ID <i>spencerwoo</i>. Some other variations:
        <a href="https://twitter.com/realSpencerWoo" target="_blank" rel="noopener noreferrer">@realSpencerWoo</a> /
        <a href="https://weibo.com/spencerwoo" target="_blank" rel="noopener noreferrer">@SpencerWoo</a> /
        <a href="https://github.com/spencerwooo" target="_blank" rel="noopener noreferrer">@spencerwooo</a>. You may
        know me from GitHub / Jike / SSPAI or other places. Yes, those are also me.
      </p>

      <h2>Academics</h2>
      <ul>
        <li>
          🙇 Postgraduate student at UofG (🇬🇧
          <a href="https://www.gla.ac.uk/" target="_blank" rel="noopener noreferrer">University of Glasgow</a>), 1/2021
          entry,
          <i
            ><a
              href="https://www.gla.ac.uk/postgraduate/taught/computingsciencemsc/"
              target="_blank"
              rel="noopener noreferrer"
              >MSc in CS</a
            ></i
          >.
        </li>
        <li>
          🍭 BIT Alumni (🇨🇳
          <a href="http://www.bit.edu.cn/" target="_blank" rel="noopener noreferrer">Beijing Institute of Technology</a
          >), <i>BSc in CS</i>.
        </li>
        <li>🔭 <b>Fields of interest:</b> Adversarial examples / AI vulnerability.</li>
      </ul>

      <h2>Devices</h2>
      <ul>
        <li>⚫ ThinkPad X1 Carbon 7th Gen</li>
        <li>🔵 iPhone 12 / iPad Air 3 / AirPods Pro</li>
      </ul>

      <h2>How can we trust you!</h2>
      <p>
        I have verified my identity with a GPG signature which proves my ownership of this domain. (See the cryptography
        proof here:
        <a
          href="http://keybase.io/spencerwoo/sigchain#abb6f40f8c804e7411e91544b7cdb8e011df8e6f84dcd0b709f848f85dc6248d0f"
          target="_blank"
          rel="noopener noreferrer"
          >Keybase - claimed ownership of <b>spencerwoo.com</b> via dns</a
        >.) In other words, <i>I AM LEGIT HERE.</i>
      </p>
      <p>
        I have my GPG public key hosted on
        <a href="http://keybase.io/spencerwoo" target="_blank" rel="noopener noreferrer">Keybase - spencerwoo</a>. You
        can pull and import my GPG public key with:
      </p>
      <pre>curl https://keybase.io/spencerwoo/pgp_keys.asc | gpg --import</pre>

      <h2>Contacts</h2>
      <ul>
        <li>
          <b>Email：</b>
          <a href="mailto:spencer.wushangbo@gmail.com">spencer.wushangbo#gmail.com</a><i> (Preferred)</i>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" scoped>
#name-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

#avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
}

#copyright:hover {
  border: none;
}

.title-font {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.title-desc-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 8px 0;
}

.title-desc-container a {
  display: flex;
  align-items: center;
}

.title-desc-container span {
  margin: 0px 4px;
}

.title-desc-container #github {
  color: #24292e;
}

.title-desc-container #sspai {
  color: #ca2c2a;
}

.title-desc-container #blog {
  color: #0070f3;
}
</style>
