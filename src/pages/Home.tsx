import '../css/Home.css'
import LinkItem from "../components/LinkItem";

function Home() {
  return (
    <>
      <div className="intro-block">
        <img className="img-curved" src="/imgs/sphericle.png" />
        <h1>Sphericle</h1>
      </div>
      <div className='links'>
        <LinkItem 
          name="YouTube"
          img="youtube.png"
          link="https://youtube.com/@zsphericle"
        />
        <LinkItem
          name="Alt Channel"
          img="youtube.png"
          link="https://youtube.com/@sphericalt"
        />
        <LinkItem
          name="Server"
          img="discord.png"
          link="https://discord.gg/gGH4FNe4PK"
        />
        <LinkItem
          name="Layout List"
          img="laylist.png"
          link="https://laylist.pages.dev/"
        />
        <LinkItem
          name="GitHub"
          img="github.png"
          link="https://github.com/sphericle/"
        />
        <LinkItem
          name="Twitch"
          img="twitch.png"
          link="https://twitch.tv/zsphericle/"
        />
        <LinkItem
          name="AREDL"
          img="aredl.png"
          link="https://aredl.net/"
        />
        <LinkItem
          name="The 1.0 List"
          img="10list.png"
          link="https://1dot0list.pages.dev/"
        />
      </div>
    </>
  )
}

export default Home
