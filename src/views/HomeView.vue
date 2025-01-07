<script setup>
import LinkItem from "../components/LinkItem.vue";
</script>

<template>
  <main>
    <div class="intro-block">
      <img class="pfp" src="/imgs/sphericle.png" />
      <h1>Sphericle</h1>
      <p>haiiiii</p>
    </div>

    <h1 style="padding-bottom: 1vw; padding-top: 4vw">Links</h1>
    <div class="links">
      <LinkItem
        name="YouTube"
        img="youtube.png"
        link="https://youtube.com/@zsphericle"
      ></LinkItem>
      <LinkItem
        name="Alt Channel"
        img="youtube.png"
        link="https://youtube.com/@sphericalt"
      ></LinkItem>
      <LinkItem
        name="Server"
        img="discord.png"
        link="https://discord.gg/gGH4FNe4PK"
      ></LinkItem>
      <LinkItem
        name="Layout List"
        img="laylist.png"
        link="https://laylist.pages.dev/"
      ></LinkItem>
      <LinkItem
        name="GitHub"
        img="github.png"
        link="https://github.com/sphericle/"
      ></LinkItem>
      <LinkItem
        name="Twitch"
        img="twitch.png"
        link="https://twitch.tv/zsphericle/"
      ></LinkItem>
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
.pfp {
  height: 2in;
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
