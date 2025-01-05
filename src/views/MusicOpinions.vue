<template>
  <main>
    <div class="grid-container">
      <div class="grid-item song">
        <h1>Favorite Song</h1>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*5_pwedLFyMKMI4GaA7w8zQ.jpeg">
        <h2>Frank Ocean - Nights</h2>
      </div>
      <div class="grid-item artist">
        <h1>Favorite Artist</h1>
        <img src="https://i.scdn.co/image/ab6761610000e5ebdfa2b0c7544a772042a12e52">
        <h2>Tyler, The Creator</h2>
      </div>
      <div class="grid-item album">
        <h1>Favorite Album</h1>
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/fd/fd/8c/fdfd8c26-b8f9-4768-41d3-b24773250c65/886446605814.jpg/1200x1200bb.jpg">
        <h2>Tyler, The Creator - Flower Boy</h2>
      </div>
      <div class="grid-item playlist">
        <h1>My Playlist</h1>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*5_pwedLFyMKMI4GaA7w8zQ.jpeg">
        <h2>sldkfjsdflkjsdf</h2>
      </div>
    </div>
    
    <p class="message">i'm not gay</p>
  </main>
</template>

<style lang="css" scoped>

  main {
    padding-top: 1rem;
  }
  
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
    padding: 40px;
  }

  img {
    height: 27vw
  }

  .message {
    padding: 1in;
    align-items: center;
    justify-items: center;
    text-align: center;
  }

  @media (max-width: 600px) {
    .grid-container {
      display: block;
      overflow-y: auto;
    }
    .grid-item {
      margin-bottom: 20px;
    }
    img {
      height: auto;
      width: 100%;
    }
  }
</style>
