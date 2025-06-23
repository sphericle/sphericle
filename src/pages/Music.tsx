import '../css/Music.css'

interface MusicElementProps {
  type: "song" | "album" | "artist" | "soundtrack",
  img: string,
  src: string,
  text: string,
}

function MusicElement(props: MusicElementProps) {
  const capitalizedSongType = props.type.charAt(0).toUpperCase() + props.type.slice(1);
  return (
    <div className={`grid-item ${props.type}`}>
      <h1>Favorite {capitalizedSongType}</h1>
      <img src={`/imgs/music/${props.img}`} alt={props.text} />
      <h2>
        <a href={props.src}>{props.text}</a>
      </h2>
    </div>
  )
}

function Music() {
  return (
    <>
      <div className="grid-container">
        <MusicElement 
          type="song" 
          img="blonde.jpeg" 
          src="https://song.link/us/i/1146195720"
          text="Frank Ocean - Nights"
        />
        <MusicElement 
          type="artist" 
          img="tyler.jpeg" 
          src="https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
          text="Tyler, The Creator"
        />
        <MusicElement 
          type="album" 
          img="flowerboy.jpeg" 
          src="https://album.link/us/i/1254572564"
          text="Tyler, The Creator - Flower Boy"
        />
        <MusicElement 
          type="soundtrack" 
          img="oneshot.jpg" 
          src="https://nightmargin.bandcamp.com/album/oneshot-soundtrack"
          text="Nightmargin - OneShot OST"
        />
      </div>
      <div className="grid-item playlist">
          <h1>Playlist</h1>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            height="358"
            style={{
              width: "100%",
              maxWidth: "660px",
              overflow: "hidden",
              borderRadius: "10px",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/playlist/music/pl.u-WabZZvPteqWqDm0"
            className="music-embed"
           />
          <h2>
            <a
              href="https://music.apple.com/us/playlist/main/pl.u-gxblko0tbgWgovA"
              >Open in Apple Music</a
            >
          </h2>
        </div>
      <p className="music-message">i'm not gay</p>
    </>
  )
}

export default Music
