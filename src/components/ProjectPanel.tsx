
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
    <div className='unit bg-gray-200 rounded-md'>
      <a href={link} target="_blank">
        <h1 className="text-xl mb-1">{title}</h1>
        <img src={src} alt={alt}></img>
        <div className='layer rounded-md'>
          <p id='description' className=''>{text}</p>
        </div>
      </a>
    </div>
  )
}

export default ProjectPanel
