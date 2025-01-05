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
      <h1 style="padding-bottom:1vw">Links</h1>
      <LinkItem name="Discord Server" img="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" link="https://discord.com/"></LinkItem>
    </div>

    

  </main>
</template>

<style lang="css" scoped>

  main {
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  main > * {
    padding-top: 4vh;
    padding-bottom: 4vh;
  }

  .pfp {
    height:2in;
    border-radius: 5%;
  }
  .intro-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
