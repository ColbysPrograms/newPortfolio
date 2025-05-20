
import './ProjectPanel.css';

interface Props {
  title: string;
  link: string;
  src: string;
  alt: string;
  text: string;
}

function ProjectPanel({ title, link, src, alt, text }: Props) {
  return (
    <div className='unit min-h-80'>
      <a href={link} target="_blank">
        <h1 className="text-xl">{title}</h1>
        <img src={src} alt={alt}></img>
        <div className='layer'>
          <p id='description' className=''>{text}</p>
        </div>
      </a>
    </div>
  )
}

export default ProjectPanel
