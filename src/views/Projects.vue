<template>
  <div class="container">
    <h1>Projects</h1>
    <p>Projects I participated in and/or developed.</p>

    <GitHubCard
      title="📟 Dev on Windows with WSL"
      link="https://github.com/spencerwooo/dowww"
      :info="dowwwInfo"
      :loading="loading"
    >
      <p>
        WSL development best practices. Available at:
        <a href="https://dowww.spencerwoo.com/">Dev on Windows with WSL</a>.
      </p>
    </GitHubCard>

    <GitHubCard
      title="📈 Substats"
      link="https://github.com/spencerwooo/Substats"
      :info="substatsInfo"
      :loading="loading"
    >
      <p>
        Serverless function to count how many people are subscribed to you in your favorite services. Supporting Feedly,
        Inoreader, GitHub, Twitter, Jike, Zhihu, and much more.
      </p>
    </GitHubCard>

    <GitHubCard
      title="📖 BIThesis"
      link="https://github.com/BITNP/BIThesis"
      :info="bithesisInfo"
      :loading="loading"
    >
      <p>
        LaTeX templates for your bachelor graduation thesis (and more) here at BIT.
      </p>
    </GitHubCard>

    <GitHubCard
      title="💡 FATES"
      link="https://github.com/SecureCats/Evaluation_BackEnd"
      :info="fatesInfo"
      :loading="loading"
    >
      <p>
        <b>The Fully Anonymous Teaching Evaluation System:</b> a project that won National 2nd Prize on the
        <a href="http://www.ciscn.cn/">National College Student Information Security Contest</a>, based on OPAAK and CL
        signatures. More on:
        <a href="https://medium.com/spencerweekly/recap-on-fates-d9d17a6a7827">Medium - Recap on project FATES.</a>
      </p>
    </GitHubCard>

    <GitHubCard
      title="💻 My dotfiles"
      link="https://github.com/spencerwooo/dotfiles"
      :info="dotfilesInfo"
      :loading="loading"
    >
      <p>I freaking can't believe it that this is my most starred project...</p>
    </GitHubCard>
  </div>
</template>

<script>
import GitHubCard from '@/components/GitHubCard.vue'

export default {
  components: {
    GitHubCard,
  },
  data() {
    return {
      loading: true,
      dowwwInfo: {
        stargazers_count: 0,
        forks_count: 0,
      },
      substatsInfo: {
        stargazers_count: 0,
        forks_count: 0,
      },
      bithesisInfo: {
        stargazers_count: 0,
        forks_count: 0,
      },
      fatesInfo: {
        stargazers_count: 0,
        forks_count: 0,
      },
      dotfilesInfo: {
        stargazers_count: 0,
        forks_count: 0,
      },
    }
  },
  mounted() {
    const githubApiUrl = 'https://api.github.com/repos'

    const dowwwAxios = this.axios.get(`${githubApiUrl}/spencerwooo/dowww`)
    const substatsAxios = this.axios.get(`${githubApiUrl}/spencerwooo/Substats`)
    const bithesisAxios = this.axios.get(`${githubApiUrl}/BITNP/BIThesis`)
    const fatesAxios = this.axios.get(`${githubApiUrl}/SecureCats/Evaluation_BackEnd`)
    const dotfilesAxios = this.axios.get(`${githubApiUrl}/spencerwooo/dotfiles`)

    this.axios
      .all([dowwwAxios, substatsAxios, bithesisAxios, fatesAxios, dotfilesAxios])
      .then(
        this.axios.spread((...resp) => {
          this.loading = false
          this.dowwwInfo = resp[0].data
          this.substatsInfo = resp[1].data
          this.bithesisInfo = resp[2].data
          this.fatesInfo = resp[3].data
          this.dotfilesInfo = resp[4].data
        }),
      )
      .catch(err => {
        this.loading = false
        // eslint-disable-next-line no-console
        console.error(err)
      })
  },
}
</script>

<style scoped>
.container .github-project-card:not(:last-child) {
  margin-bottom: 40px;
}

</style>
