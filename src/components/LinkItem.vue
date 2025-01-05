<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="placeholder-rectangle" @click="window.open(link, '_blank')">
      <img :src="img" alt="Image" class="image">
      <h2><a :href="link" target="_blank">{{ name }}</a></h2>
  </div>
</template>

<style scoped>
  .placeholder-rectangle {
    cursor: pointer;
    width: 300px;
    height: 100px;
    background-color: var(--color-background-soft);
    color: var(--heading-color);
    border-radius: 10px;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    height: 100%;
    padding: 2vw;
    transition: background-color 0.2s;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
  .placeholder-rectangle > h2 {
    text-wrap: nowrap;
    color: var(--heading-color) !important;
  }
  .placeholder-rectangle:hover {
    background-color: var(--color-background-mute);
  }

  .placeholder-rectangle:hover > h2 {
    transition: color 0.2s;
    color: rgb(0, 107, 189);
  }

  .image {
    margin-right: 10px;
    height: 5vw;
  }

  .placeholder-rectangle:hover > img {
    transition: height 0.2s;
    height: 5.5vw;
  }
</style>
