import ProjectPanel from "./ProjectPanel"
import Title from "./Title"

function Projects() {
  const projects = [
    { title: "Newton's Method", link: "https://github.com/ColbysPrograms/NewtonPresentation", src: "/newPortfolio/newton.png", alt: "" },
    { title: "Balloon Project", link: "https://github.com/ColbysPrograms/balloonProject", src: "/newPortfolio/balloon.png", alt: "" },
    { title: "CPU Scheduling", link: "https://github.com/ColbysPrograms/cpuScheduling", src: "/newPortfolio/cpuScheduling.png", alt: "" },
    { title: "Multivariate Analysis", link: "https://github.com/ColbysPrograms/Multivariate-Analysis-Project", src: "/newPortfolio/KMeans.png", alt: "" },
    { title: "Monty Hall", link: "https://github.com/ColbysPrograms/MontyHallProgram", src: "/newPortfolio/montyHall.png", alt: "" },
    { title: "Portfolio", link: "https://github.com/ColbysPrograms/newPortfolio", src: "", alt: "" },
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
