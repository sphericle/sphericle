<script>
export default {
  data() {
    return {
      oldProgress: {
        attempts: 30000,
        new_best: 73,
        video: "https://youtu.be/2pTXumcrsUo"
      },
      loading: true,
      totalTime: 0,
      greatestBest: null
    }
  },
  methods: {
    scrollToBottom() {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  async mounted() {
    this.ssdata = await fetch("/data/storming_summit_progress.json")
      .then(data => data.json())

    const greaterBest = await this.ssdata.find((entry) => entry.new_best > this.oldProgress.new_best)
    (greaterBest ? this.greatestBest = {percent: greaterBest.new_best, video: greaterBest.video} : this.greatestBest = {percent: this.oldProgress.new_best, video: this.oldProgress.video})
    this.loading = false;
  },
}
</script>

<template>
  <main>
    <p v-if="loading">Loading...</p>
    <div v-else>
      
      <div style="padding-top: 2rem;padding-bottom: 2rem;">
        <h1 style="margin-bottom: 1rem;font-size: 3rem;">Total progress</h1>
        <div style="background-color: #ddd; border-radius: 5px; overflow: hidden;">
          <div :style="{ width: greatestBest.percent + '%', backgroundColor: '#4caf50', height: '24px' }"></div>
        </div>
        <h2><a :href="greatestBest.video">{{ greatestBest.percent }}%</a> ({{ oldProgress.attempts.toLocaleString() }} attempts)</h2>
      </div>

      <h2>Total playtime:</h2>

      <h2>
        Best run: <span >(besides {{ greatestBest.percent }}%)</span>: 
        <a href="https://youtu.be/qK608YOhbxE">40%-100%</a>
      </h2>

      <p style="padding-bottom: 1rem;">Note: this table only contains progress from after 2/9/25.</p>
      <h2 @click="scrollToBottom"><a style="cursor: pointer;">Jump to latest</a></h2>

      <table>
      <thead>
        <tr>
        <th style="background-color: #222"></th>
        <th>Date</th>
        <th>Attempts</th>
        <th>Playtime</th>
        <th>New best?</th>
        <th>Drop attempts</th>
        <th>Video?</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(entry, index) in ssdata" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ entry.date }}</td>
        <td>{{ entry.attempts }}</td>
        <td>{{ entry.playtime }}</td>
        <td>{{ !entry.new_best ? "None" : entry.new_best + "%" }}</td>
        <td>{{ entry.drop_attempts }}</td>
        <td v-if="entry.stream"><a :href="entry.stream">Link</a></td>
        <td v-else>None</td>
        </tr>
      </tbody>
      </table>

      <h2 v-if="ssdata.length > 5" @click="scrollToTop"><a style="cursor: pointer;">Jump to top</a></h2>
    </div>
  </main>
</template>

<style lang="css" scoped>
  main {
    padding-top: 10vh;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  table {
    width: 100%;
    margin: 0 auto;
    border-collapse: collapse;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }

  th {
    border: 1px solid #444;
  }

  th, td {
    padding: 20px;
    font-size: 1.8rem;
  }

  th {
    background-color: #333;
    color: #fff;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #555;
  }

  tr:nth-child(odd) {
    background-color: #444;
  }

  td {
    text-align: center;
    color: #fff;
  }
  
</style>
