
interface Props {
  title: string;
  link: string;
  src: string;
  alt: string;
}

function ProjectPanel({ title, link, src, alt }: Props) {
  return (
    <a href={link} target="_blank">
      <div className="bg-sky-400 text-center p-10 rounded-md">
        <p>{title}</p>
        <img src={src} alt={alt}></img>
      </div>
    </a>
  )
}

export default ProjectPanel
