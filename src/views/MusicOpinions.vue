<template>
  <main>
    <div class="grid-container">
      <div class="grid-item song">
        <h1>Favorite Song</h1>
      </div>
      <div class="grid-item artist">
        <h1>Favorite Artist</h1>
      </div>
      <div class="grid-item album">
        <h1>Favorite Album</h1>
      </div>
      <div class="grid-item playlist">
        <h1>My Playlist</h1>
      </div>
    </div>

    

  </main>
</template>

<style lang="css" scoped>
  
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    align-items: center;
    justify-items: center;
    text-align: center;
  }
  .grid-item {
    padding: 20px;
    width: 0.5fr;
    border: 1px solid #ccc;
  }
</style>
