<template>
  <div class="container">
    <h1>👓</h1>
    <h1>About</h1>
    <p>这人是谁啊，这么牛逼哄哄的？</p>

    <hr id="top-hr" />
    <div class="article">
      <p>
        大家好，我是 Spencer Woo，正在北京理工大学就读 CS
        专业，目前我的研究方向是：The Robustness of Adversarial Examples。我将于
        2020 年秋天前往英国
        <a href="https://www.gla.ac.uk/">UofG</a> 攻读
        <a href="https://www.gla.ac.uk/postgraduate/taught/computingsciencemsc/"
          >MSc in Computing Science</a
        >。给大家鞠躬了。🙇
      </p>

      <h2>我的项目</h2>
      <p>
        我所做过的项目几乎都开源于
        <a href="https://github.com/spencerwooo">GitHub</a> 上面，欢迎大家 Star
        + Fork，笔芯 (✿◡‿◡)
      </p>

      <div class="github-project-card">
        <h3>
          <a href="https://github.com/spencerwooo/dowww"
            >📟 Dev on Windows with WSL</a
          >
        </h3>
        <p>
          Dev on Windows with WSL：在 Windows 上用 WSL 优雅开发。目前我关注量与
          Star 数量最高的一个项目，主要介绍了如何在 Windows 10 中引进的 Windows
          Subsystem for Linux 中进行开发与工作。主站：
          <a href="https://dowww.spencerwoo.com/">Dev on Windows with WSL</a>
        </p>
        <div class="github-repo-stats">
          <a href="https://github.com/spencerwooo/dowww/stargazers">
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
            {{ dowwwInfo.stargazers_count }}
          </a>
          <a href="https://github.com/spencerwooo/dowww/network/members">
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
            {{ dowwwInfo.forks_count }}
          </a>
        </div>
      </div>

      <div class="github-project-card">
        <h3>
          <a href="https://github.com/spencerwooo/Substats"
            >📈 Substats：快速统计你在各个平台的关注者</a
          >
        </h3>
        <p>
          Substats 是一个非常方便易用的请求订阅者、粉丝、关注用户数量 API
          服务，支持了包括 Feedly、GitHub、Twitter、知乎和少数派等 10
          余个网站和服务，并用 Cloudflare 全球部署，飞速响应。少数派介绍：<a
            href="https://sspai.com/post/59593"
            >《做一个好看的数据展示「小标签」，在个人网站实时展示你的粉丝数》</a
          >
        </p>
        <div class="github-repo-stats">
          <a href="https://github.com/spencerwooo/Substats/stargazers">
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
            {{ bitcsInfo.stargazers_count }}
          </a>
          <a href="https://github.com/spencerwooo/Substats/network/members">
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
            {{ bitcsInfo.forks_count }}
          </a>
        </div>
      </div>

      <div class="github-project-card">
        <h3>
          <a href="https://github.com/SecureCats"
            >🥇 The Fully Anonymous Teaching Evaluation System</a
          >
        </h3>
        <p>
          Secure Cats 团队作品：基于零知识证明和 CL
          签名的匿名课程评价系统。这一评教系统参加了「2019 年大学生信息安全竞赛
          —— 作品赛」，荣获国家级二等奖。推荐阅读：
          <a href="https://medium.com/spencerweekly/recap-on-fates-d9d17a6a7827"
            >什么时候「匿名」才是合理的？| 匿名评教平台复盘</a
          >
        </p>
        <div class="github-repo-stats">
          <a href="https://github.com/SecureCats/Evaluation_BackEnd/stargazers">
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
            {{ fatesInfo.stargazers_count }}
          </a>
          <a
            href="https://github.com/SecureCats/Evaluation_BackEnd/network/members"
          >
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
            {{ fatesInfo.forks_count }}
          </a>
        </div>
      </div>

      <div class="github-project-card">
        <h3>
          <a href="https://github.com/spencerwooo/jsbox-sspai-namecard"
            >🎫 少数派作者名片 | 一个 JSBox 小组件</a
          >
        </h3>
        <p>
          适合新版本少数派的作者名片，搭建在 JSBox 上。推荐阅读：
          <a href="https://sspai.com/post/55562"
            >新版少数派网站的作者成就墙好好看啊，于是我用它写了一个 JSBox
            小插件</a
          >
        </p>
        <div class="github-repo-stats">
          <a
            href="https://github.com/spencerwooo/jsbox-sspai-namecard/stargazers"
          >
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
            {{ sspaiCardInfo.stargazers_count }}
          </a>
          <a
            href="https://github.com/spencerwooo/jsbox-sspai-namecard/network/members"
          >
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
            {{ sspaiCardInfo.forks_count }}
          </a>
        </div>
      </div>

      <div class="github-project-card">
        <h3>
          <a href="https://github.com/spencerwooo/dotfiles">🎃 我的 dotfiles</a>
        </h3>
        <p>我的各种配置清单。从终端到 Vim，从 macOS 到 Windows，应有尽有。</p>
        <div class="github-repo-stats">
          <a href="https://github.com/spencerwooo/dotfiles/stargazers">
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
            {{ dotfilesInfo.stargazers_count }}
          </a>
          <a href="https://github.com/spencerwooo/dotfiles/network/members">
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
            {{ dotfilesInfo.forks_count }}
          </a>
        </div>
      </div>

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
              <a href="https://sspai.com/post/54788"
                >性能强劲的「迷你台式机」，Intel NUC 一周使用体验</a
              >
            </li>
          </ul>
        </li>
        <li>
          ThinkPad X1 Yoga (1st Gen)：
          <ul>
            <li>
              介绍：
              <a href="https://sspai.com/post/45742"
                >迁移到 Windows 后，我如何找回熟悉的 macOS 体验</a
              >
            </li>
          </ul>
        </li>
        <li>12-inch MacBook：观赏性质 > 实用价值</li>
        <li>
          Sony 1000XM3：
          <ul>
            <li>
              介绍：
              <a href="https://sspai.com/post/47794"
                >降噪、音质、续航一网打尽：索尼 1000XM3 降噪耳机体验</a
              >
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
          <a href="https://t.me/SpencerWoo">t.me/SpencerWoo</a>
        </li>
        <li>📍 Beijing Institute of Technology, Beijing, China</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dowwwInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      bitcsInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      fatesInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      sspaiCardInfo: {
        stargazers_count: 0,
        forks_count: 0
      },
      dotfilesInfo: {
        stargazers_count: 0,
        forks_count: 0
      }
    }
  },
  mounted() {
    this.axios
      .get('https://api.github.com/repos/spencerwooo/dowww')
      .then(resp => {
        this.dowwwInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/spencerwooo/Substats')
      .then(resp => {
        this.bitcsInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/SecureCats/Evaluation_BackEnd')
      .then(resp => {
        this.fatesInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/spencerwooo/jsbox-sspai-namecard')
      .then(resp => {
        this.sspaiCardInfo = resp.data
      })
    this.axios
      .get('https://api.github.com/repos/spencerwooo/dotfiles')
      .then(resp => {
        this.dotfilesInfo = resp.data
      })
  }
}
</script>

<style lang="css" scoped>
h2 {
  font-weight: 700;
  font-size: 20px;
  padding: 10px 0;
}

h3 {
  font-weight: 700;
  font-size: 18px;
  padding: 18px 0 0 0;
  margin: 0;
}

h3 a {
  color: #000000;
}

.github-project-card {
  /* border: 1px solid #d1d5da; */
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  margin: 40px 0;
  transition: 0.3s;
}

.github-project-card:hover {
  -webkit-box-shadow: 0px 10px 40px -10px #e6e6e6;
  -moz-box-shadow: 0px 10px 40px -10px #e6e6e6;
  box-shadow: 0px 10px 40px -10px #e6e6e6;
}

.github-project-card p {
  line-height: inherit;
}

.github-project-card .github-repo-stats a {
  color: #24292e;
  padding-right: 20px;
  font-size: 14px;
}

.github-project-card .github-repo-stats a:hover {
  border: none;
}

.octicon {
  vertical-align: text-top;
}

ul {
  padding-left: 15px;
  line-height: 30px;
  margin: 0;
}

p {
  line-height: 30px;
}
</style>
