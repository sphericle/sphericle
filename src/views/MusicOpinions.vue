<template>
  <main>
    <div class="grid-container">
      <div class="grid-item song">
        <h1>Favorite Song</h1>
        <img src="/imgs/music/blonde.jpeg" />
        <h2>
          <a href="https://song.link/us/i/1146195720">Frank Ocean - Nights</a>
        </h2>
      </div>
      <div class="grid-item artist">
        <h1>Favorite Artist</h1>
        <img src="/imgs/music/tyler.jpeg" />
        <h2>
          <a
            href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF&ved=2ahUKEwjZiqXzkd-KAxWetokEHQl6BFYQFnoECHoQAQ&usg=AOvVaw1_EH4O3JDtq2XxGRchj7zM"
            >Tyler, The Creator</a
          >
        </h2>
      </div>
      <div class="grid-item album">
        <h1>Favorite Album</h1>
        <img src="/imgs/music/flowerboy.jpeg" />
        <h2>
          <a href="https://album.link/us/i/1254572564"
            >Tyler, The Creator - Flower Boy</a
          >
        </h2>
      </div>
      <div class="grid-item playlist">
        <h1>Playlist</h1>
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameborder="0"
          height="358"
          style="
            width: 100%;
            max-width: 660px;
            overflow: hidden;
            border-radius: 10px;
          "
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/playlist/main/pl.u-gxblko0tbgWgovA"
          class="music-embed"
        ></iframe>
        <h2>
          <a
            href="https://music.apple.com/us/playlist/main/pl.u-gxblko0tbgWgovA"
            >Open in Apple Music</a
          >
        </h2>
      </div>
    </div>

    <h1>
      <a href="https://www.albumoftheyear.org/user/sphericle/" target="_blank"
        >Album of the Year account</a
      >
    </h1>

    <p class="message">i'm not gay</p>
  </main>
</template>

<style lang="css" scoped>
main {
  padding-top: 1rem;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}
.grid-item {
  padding: 40px;
}

img {
  border-radius: 10px;
  height: 27vw;
}

.message {
  padding: 3in;
}

.music-embed {
  background-color: var(--color-background-mute);
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
