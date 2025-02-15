<script>
export default {
  data() {
    return {
      statuses: {
        "Trimming": null,
        "Editing": null,
        "Final touches": null,
        "Uploading": null,
        "Released": null,
      },

      status: 0,
      progress: 15,
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
  },
};
</script>

<template>
  <main>
    <div class="main-info-container">
      <div v-if="status == -1">
        <img src="/imgs/sleeping.jpeg" class="img-curved" />
        <h1>No progress yet!</h1>
      </div>
      <div v-else>
        <iframe
          v-if="status == 5"
          ref="latestVideo"
          title="Latest Video"
          :src="'http://www.youtube.com/embed/videoseries?list=UUP9rAStP33um-j-Zov89nyQ&feature=player_embedded&index=0&loop=1&origin=http://sphericle.pages.dev/{{ $route.path }}&fs=1&widget_referrer=http://sphericle.pages.dev/{{ $route.path }}'"
          width="600"
          height="340"
        />
        <h1 class="main-header">Status:</h1>

        <table>
          <thead>
            <tr>
              <th>Substatus</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody class="table-data">
            <tr v-for="(subStatus, i) in Object.keys(statuses)" :key="subStatus">
              <td>{{ subStatus }}</td>
              <td>
                <img class="status-icon" v-if="i < status" src="/imgs/check.png" />
                <span v-if="i < status && statuses[subStatus]">&nbsp;{{ statuses[subStatus] }}</span>

                <div class="progress-bar" v-else-if="i == status" >
                  <div
                    style="background-color: rgb(0, 170, 220); height: 24px;"
                    :style="{
                      width: (progress && progress > 0 ? progress : 1) + '%',
                    }"
                  />
                </div>
                
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <br /><br /><br />

      <!-- if the video is released -->
      <div v-if="status !== 5">
        <h2>Latest video:</h2>
        <iframe
          ref="latestVideo"
          title="Latest Video"
          :src="'http://www.youtube.com/embed/videoseries?list=UUP9rAStP33um-j-Zov89nyQ&feature=player_embedded&index=0&loop=1&origin=http://sphericle.pages.dev/{{ $route.path }}&fs=1&widget_referrer=http://sphericle.pages.dev/{{ $route.path }}'"
          width="600"
          height="340"
        />
      </div>
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
  font-size: 3rem;
}

.progress-bar {
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  width: 300px;
  margin: 0 auto; /* Center the progress bar */
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
.status-icon {
  height: 1.5rem;
}

.img-curved {
  height: 2in;
  border-radius: 50%;
}

</style>
