
interface Props {
  title: string;
  link: string;
  src: string;
  alt: string;
  text: string;
}

function ProjectPanel({ title, link, src, alt, text }: Props) {
  return (
    <a href={link} target="_blank">
      <div className="text-center bg-blue-400 p-5 rounded-md hover:bg-yellow-300 transition duration-500">
        <div className="">
          <p className="text-xl">{title}</p>
          <img src={src} alt={alt}></img>
        </div>
        <div className="opacity-0 hover:opacity-100 transition hover:-translate-y-20 duration-500">
          <p>{text}</p>
        </div>
      </div>
    </a>
  )
}

export default ProjectPanel
