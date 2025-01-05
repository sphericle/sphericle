<template>
  <main>
    <div class="grid-container">
      <div class="grid-item song">
        <h1>Favorite Song</h1>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*5_pwedLFyMKMI4GaA7w8zQ.jpeg">
        <h2><a href="https://song.link/us/i/1146195720">Frank Ocean - Nights</a></h2>
      </div>
      <div class="grid-item artist">
        <h1>Favorite Artist</h1>
        <img src="https://i.scdn.co/image/ab6761610000e5ebdfa2b0c7544a772042a12e52">
        <h2><a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF&ved=2ahUKEwjZiqXzkd-KAxWetokEHQl6BFYQFnoECHoQAQ&usg=AOvVaw1_EH4O3JDtq2XxGRchj7zM">Tyler, The Creator</a></h2>
      </div>
      <div class="grid-item album">
        <h1>Favorite Album</h1>
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/fd/fd/8c/fdfd8c26-b8f9-4768-41d3-b24773250c65/886446605814.jpg/1200x1200bb.jpg">
        <h2><a href="https://album.link/us/i/1254572564">Tyler, The Creator - Flower Boy</a></h2>
      </div>
      <div class="grid-item playlist">
        <h1>Playlist</h1>
        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="358" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/main/pl.u-gxblko0tbgWgovA" class="music-embed"></iframe>
        <h2><a href="https://music.apple.com/us/playlist/main/pl.u-gxblko0tbgWgovA">Open in Apple Music</a></h2>
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
    border-radius: 10px;
    height: 27vw
  }

  .message {
    padding: 3in;
    align-items: center;
    justify-items: center;
    text-align: center;
  }

  .music-embed {
    background-color: var(--color-background-mute)
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
