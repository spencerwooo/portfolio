<template>
  <div class="container">
    <h1>👓</h1>
    <h1>About</h1>
    <p>这人是谁啊，这么牛逼哄哄的？</p>

    <hr id="top-hr" />
    <div class="article">
      <p>大噶好哇。我是 Spencer，一名在北京读书的学生，CS 专业大四在读。与此同时，我还是个 newbie 开发者、一个半吊子设计师和一个咕咕咕的 Tech 作者。我更喜欢叫自己「人民艺术家」，给大家鞠躬了。🙇</p>

      <h2>我的项目</h2>
      <p>
        我所做过的项目几乎都开源于
        <a href="https://github.com/spencerwooo">GitHub</a> 上面，欢迎大家 Star + Fork，笔芯 (✿◡‿◡)
      </p>

      <h3>
        <a href="https://github.com/spencerwooo/dowww">📟 Dev on Windows with WSL</a>
      </h3>
      <p>Dev on Windows with WSL：在 Windows 上用 WSL 优雅开发。主站：<a href="https://dowww.spencerwoo.com/">Dev on Windows with WSL</a></p>

      <h3>
        <a href="https://github.com/spencerwooo/BITCS-Coursework">📘 BITCS Coursework 大合集</a>
      </h3>
      <p>不完整北京理工大学计算机学院课程项目资料清单。</p>

      <h3>
        <a href="https://github.com/SecureCats">🥇 The Fully Anonymous Teaching Evaluation System</a>
      </h3>
      <p>Secure Cats 团队作品：基于零知识证明和 CL 签名的匿名课程评价系统。推荐阅读：<a href="https://medium.com/spencerweekly/recap-on-fates-d9d17a6a7827">什么时候「匿名」才是合理的？| 匿名评教平台复盘</a></p>

      <h3>
        <a href="https://github.com/spencerwooo/jsbox-sspai-namecard">🎫 少数派作者名片 | 一个 JSBox 小组件</a>
      </h3>
      <p>适合新版本少数派的作者名片，搭建在 JSBox 上。推荐阅读：<a href="https://beta.sspai.com/post/55562">新版少数派网站的作者成就墙好好看啊，于是我用它写了一个 JSBox 小插件</a></p>

      <h3>
        <a href="https://github.com/spencerwooo/dotfiles">🎃 我的 dotfiles</a>
      </h3>
      <p>我的各种配置清单。从终端到 Vim，从 macOS 到 Windows，应有尽有。</p>

      <h2>我的设备</h2>
      <ul>
        <li>
          主力台式机：Intel® NUC Kit NUC8I5BEK
          <ul>
            <li>
              配置清单：
              <ul>
                <li>CPU: Intel® Core™ i5-8295U</li>
                <li>RAM: ADATA 16GB (8GB×2) DDR4 2666MHz</li>
                <li>M.2 SSD: SAMSUNG PM981 M.2 NVME 256GB</li>
              </ul>
            </li>
            <li>
              介绍：
              <a href="https://sspai.com/post/54788">性能强劲的「迷你台式机」，Intel NUC 一周使用体验</a>
            </li>
          </ul>
        </li>
        <li>
          ThinkPad X1 Yoga (1st Gen)：
          <ul>
            <li>
              介绍：
              <a href="https://sspai.com/post/45742">迁移到 Windows 后，我如何找回熟悉的 macOS 体验</a>
            </li>
          </ul>
        </li>
        <li>12-inch MacBook：观赏性质 > 实用价值</li>
        <li>
          Sony 1000XM3：
          <ul>
            <li>
              介绍：
              <a href="https://sspai.com/post/47794">降噪、音质、续航一网打尽：索尼 1000XM3 降噪耳机体验</a>
            </li>
          </ul>
        </li>
        <li>iPhone XR</li>
        <li>iPad Air 3rd Gen</li>
        <li>Apple Watch Series 3</li>
        <li>AirPods Pro</li>
      </ul>

      <h2>联系我</h2>
      <p>
        欢迎大家直接订阅我的发布，详情请参考：
        <router-link to="/subscribe">Spencer Woo - Subscribe</router-link>
      </p>
      <p>我的联系方式：</p>
      <ul>
        <li>
          📫 邮箱：
          <a href="mailto:spencerwoo98@gmail.com">spencerwoo98#gmail.com</a>
        </li>
        <li>
          ✈ Telegram：
          <a href="https://t.me/Spencer_Woo">t.me/Spencer_Woo</a>
        </li>
        <li>📍 Beijing Institute of Technology, Beijing, China</li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" scoped>
h2 {
  font-weight: 700;
  font-size: 20px;
}

h3 {
  font-weight: 700;
  font-size: 18px;
}
</style>
