import ProjectPanel from "./ProjectPanel"
import Title from "./Title"

function Projects() {
  const projects = [
    { title: "Balloon Project", link: "https://github.com/ColbysPrograms/balloonProject", src: "/newPortfolio/assets/balloon.png", alt: "" },
    { title: "Balloon Project", link: "https://github.com/ColbysPrograms/balloonProject", src: "/newPortfolio/assets/balloon.png", alt: "" },
    { title: "Balloon Project", link: "https://github.com/ColbysPrograms/balloonProject", src: "/newPortfolio/assets/balloon.png", alt: "" },
    { title: "Balloon Project", link: "https://github.com/ColbysPrograms/balloonProject", src: "/newPortfolio/assets/balloon.png", alt: "" },
    { title: "Balloon Project", link: "https://github.com/ColbysPrograms/balloonProject", src: "/newPortfolio/assets/balloon.png", alt: "" },
    { title: "Balloon Project", link: "https://github.com/ColbysPrograms/balloonProject", src: "/newPortfolio/assets/balloon.png", alt: "" },
  ]
  const projectPanels = projects.map((item) =>
    <ProjectPanel title={item.title} link={item.link} src={item.src} alt={item.alt}></ProjectPanel>
  )
  return (
    <div>
      <Title title="Projects"></Title>
      <ul className="grid grid-cols-3">
        {projectPanels.map((item, index) =>
          <li
            className="m-10"
            key={index}
          >
            {item}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Projects
