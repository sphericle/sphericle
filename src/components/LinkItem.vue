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
});
</script>

<template>
  <div class="link-box" @click="window.open(link, '_blank')">
    <img :src="`/imgs/logos/${img}`" alt="Image" class="image" />
    <h2>
      <a :href="link" target="_blank">{{ name }}</a>
    </h2>
  </div>
</template>

<style scoped>
.link-box {
  cursor: pointer;
  width: 300px;
  height: 100px;
  background-color: var(--color-background-soft);
  color: var(--heading-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2vw;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
  transform-origin: center;
}
.link-box:hover {
  transform: scale(1.05);
  z-index: 2;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  background-color: var(--color-background-mute);
}
.link-box > h2 {
  text-wrap: nowrap;
  color: var(--heading-color) !important;
  position: relative; /* Ensure position is relative */
}
.link-box:hover > h2 {
  transition: color 0.2s;
  color: rgb(0, 107, 189);
}
.image {
  margin-right: 10px;
  height: 5vw;
  transition: transform 0.2s ease;
  position: relative; /* Ensure position is relative */
  height: 60px;
  width: auto;
}
.link-box:hover > .image {
  transform: scale(1.1);
}
</style>
