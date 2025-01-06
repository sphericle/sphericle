<script setup>
  import LinkItem from "../components/LinkItem.vue"
</script>

<template>
  <main>
    <div class="intro-block">
      <img class="pfp" src="../assets/sphericle.png" />
      <h1>Sphericle</h1>
      <p>haiiiii</p>
    </div>

    <div class="links">
      <h1>Links</h1>
      <LinkItem name="YouTube" img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/512px-YouTube_full-color_icon_%282017%29.svg.png" link="https://youtube.com/@zsphericle"></LinkItem>
      <LinkItem name="Discord Server" img="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" link="https://discord.com/"></LinkItem>
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

  .links {
    height: initial;
    overflow: hidden;
  }

  main > * {
    padding-top: 4vh;
    padding-bottom: 4vh;
  }

  .pfp {
    height:2in;
    border-radius: 50%;
  }
  .intro-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
