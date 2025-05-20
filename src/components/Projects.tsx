import ProjectPanel from "./ProjectPanel"
import Title from "./Title"

function Projects() {
  const projects = [
    { title: "Newton's Method", link: "https://github.com/ColbysPrograms/NewtonPresentation", src: "/newPortfolio/newton.png", alt: "An image of my Newton's Method project calculating different numbers' roots.", text: "" },
    { title: "Balloon Project", link: "https://github.com/ColbysPrograms/balloonProject", src: "/newPortfolio/balloon.png", alt: "An image of my balloon project showing the starting screen.", text: "" },
    { title: "CPU Scheduling", link: "https://github.com/ColbysPrograms/cpuScheduling", src: "/newPortfolio/cpuScheduling.png", alt: "An image of the title screen for my CPU Scheduling project", text: "" },
    { title: "Multivariate Analysis", link: "https://github.com/ColbysPrograms/Multivariate-Analysis-Project", src: "/newPortfolio/KMeans.png", alt: "A graph of how the KMeans algorithm sorted the demographic information of the 51 states into 2 clusters.", text: "" },
    { title: "Monty Hall", link: "https://github.com/ColbysPrograms/MontyHallProgram", src: "/newPortfolio/montyHall.png", alt: "An image from the Monty Hall presentation of three doors, two of which have red x's and one with a yellow star.", text: "" },
    { title: "Portfolio", link: "https://github.com/ColbysPrograms/newPortfolio", src: "/newPortfolio/balloon.png", alt: "My Portfolio", text: "" },
  ]
  const projectPanels = projects.map((item) =>
    <ProjectPanel title={item.title} link={item.link} src={item.src} alt={item.alt} text={item.text}></ProjectPanel>
  )
  return (
    <div className="flex flex-col">
      <Title title="Projects"></Title>
      <ul className="grid md:grid-cols-3 grid-cols-1 flex-5/6">
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
