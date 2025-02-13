<script>
export default {
  data() {
    return {
      oldProgress: {
        attempts: 28562,
        new_best: 73,
        video: "https://youtu.be/2pTXumcrsUo",
      },
      loading: true,
      greatestBest: {},
    };
  },
  methods: {
    scrollToBottom() {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  computed: {
    totalTime() {
      const startDate = new Date("2024-03-08T23:06:00Z");
      const currentDate = new Date();
      const diffTime = Math.abs(currentDate - startDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const diffMinutes = Math.floor(
        (diffTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      const years = Math.floor(diffDays / 365);
      const days = diffDays % 365;
      if (years !== 0) {
        return `${years} years, ${days} days, ${diffHours} hours, ${diffMinutes} minutes, and ${diffSeconds} seconds`;
      }
      return `${days} days, ${diffHours} hours, ${diffMinutes} minutes, and ${diffSeconds} seconds`;
    },
    totalAttempts() {
      let atts = this.oldProgress.attempts;
      for (const entry of this.ssdata) {
        atts += entry.attempts;
      }
      
      return atts.toLocaleString();
    }
  },
  async mounted() {
    this.ssdata = await fetch("/data/storming_summit_progress.json").then(
      (data) => data.json().then(
        (data) => data.reverse()
      )
    );

    const greaterBest = await this.ssdata.find((entry) => {
      if (entry.new_best === null) return false;
      return entry.new_best > this.oldProgress.new_best;
    });

    await (greaterBest
      ? (this.greatestBest = {
          percent: greaterBest.new_best,
          video: greaterBest.video,
        })
      : (this.greatestBest = {
          percent: this.oldProgress.new_best,
          video: this.oldProgress.video,
        }));
    this.loading = false;
  },
};
</script>

<template>
  <main>
    <p v-if="loading">Loading...</p>
    <div v-else>
      <div class="main-info-container">
        <h1 class="main-header">Total progress</h1>
        <div class="progress-bar">
          <div
            style="background-color: rgb(0, 170, 220); height: 24px;"
            :style="{
              width: greatestBest.percent + '%',
            }"
          ></div>
        </div>
        <h2>
          <a :href="greatestBest.video" target="_blank"
            >{{ greatestBest.percent }}%</a
          >
          ({{ totalAttempts }} attempts)
        </h2>
      </div>

      <h1>Total playtime:<br /></h1>
      <h2>{{ totalTime }}</h2>
      <p>(since 3/8/24)</p>
      <br />

      <h1>
        Best run
        <span class="besides-text"
          >(besides {{ greatestBest.percent }}%):
        </span>
      </h1>
      <h2>
        <a href="https://youtu.be/qK608YOhbxE" target="_blank">40%-100%</a>
      </h2>
      <br />

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Attempts</th>
            <th>Playtime</th>
            <th>New best?</th>
            <th>Far attempts</th>
            <th>Video?</th>
          </tr>
        </thead>

        <tbody>
          <tr v-if="ssdata.length == 0">
            <td v-for="i in 7" :key="i">None</td>
          </tr>
          <tr v-else v-for="(entry, index) in ssdata" :key="index">
            <td>{{ entry.date }}</td>
            <td>{{ entry.attempts }}</td>
            <td>{{ entry.playtime }}</td>
            <td>{{ !entry.new_best ? "None" : entry.new_best + "%" }}</td>
            <td>{{ entry.drop_attempts }}</td>
            <td v-if="entry.stream">
              <a :href="entry.stream" target="_blank">Link</a>
            </td>
            <td v-else>None</td>
          </tr>
        </tbody>
      </table>

      <h2 v-if="ssdata.length > 5" @click="scrollToTop"><a>Jump to top</a></h2>

      <br />
      <p class="grid-note" v-if="ssdata.length > 0">
        Note: this table only contains progress from after 2/12/25.
      </p>
      <br>
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

th,
td {
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

.main-info-container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.main-header {
  margin-bottom: 1rem;
  font-size: 3rem;
}

.progress-bar {
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.besides-text {
  font-size: 1rem;
}

.grid-corner {
  background-color: #222;
}

.grid-note {
  padding-bottom: 1rem;
}
</style>
