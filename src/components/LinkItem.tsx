import '../css/Home.css';

interface LinkItemProps {
  name: string,
  img: string,
  link: string,
};

function LinkItem(props: LinkItemProps) {
  return (
    <div className="link-box" onClick={() => window.open(props.link, '_blank')}>
      <img src={`/imgs/logos/${props.img}`} alt="Image" className="image" />
      <h2>{props.name}</h2>
    </div>
  )
};

export default LinkItem;