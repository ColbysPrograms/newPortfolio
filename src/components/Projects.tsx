import ProjectPanel from "./ProjectPanel"
import Title from "./Title"

function Projects() {
  const projects = [
    { title: "Newton's Method", link: "https://github.com/ColbysPrograms/NewtonPresentation", src: "newton.avif", alt: "An image of my Newton's Method project calculating different numbers' roots.", text: "I presented Newton's Method to an Applied Calculus class using a program I wrote in C++ to show Newton's Method and Binary Search calculating the roots of a number." },
    { title: "Balloon Project", link: "https://github.com/ColbysPrograms/balloonProject", src: "balloon.avif", alt: "An image of my balloon project showing the starting screen.", text: "I wrote a program in Javascript with Three.js to show how related rates can be used to calculate the rate the radius of a sphere increases given the rate its volume increases." },
    { title: "CPU Scheduling", link: "https://github.com/ColbysPrograms/cpuScheduling", src: "cpuScheduling.avif", alt: "An image of the title screen for my CPU Scheduling project", text: "I wrote a CPU scheduling program in Godot allowing the user to input a number of processes' burst time, arrival time, and priority, along with FCFS and SJF scheduling and a selection for a number of threads, to show how different algorithms schedule the set of processes differently." },
    { title: "Multivariate Analysis", link: "https://github.com/ColbysPrograms/Multivariate-Analysis-Project", src: "KMeans.avif", alt: "A graph of how the KMeans algorithm sorted the demographic information of the 51 states into 2 clusters.", text: "I and a team member used K-Means clustering and Multidimensional Scaling to prove that age, income, sex, and ethnicity impacted voting tendencies." },
    { title: "Monty Hall", link: "https://github.com/ColbysPrograms/MontyHallProgram", src: "montyHall.avif", alt: "An image from the Monty Hall presentation of three doors, two of which have red x's and one with a yellow star.", text: "I and a team member generically proved the Monty Hall Problem both mathematically and by running it through a simulation." },
    { title: "Portfolio", link: "https://github.com/ColbysPrograms/newPortfolio", src: "portfolio.avif", alt: "An image of my portfolio", text: "I created this new portfolio in the summer of 2025 to teach myself React and Tailwindcss" },
  ]
  const projectPanels = projects.map((item) =>
    <ProjectPanel title={item.title} link={item.link} src={item.src} alt={item.alt} text={item.text}></ProjectPanel>
  )
  return (
    <div className="flex flex-col">
      <Title title="Projects"></Title>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-5/6">
        {projectPanels.map((item, index) =>
          <li
            className="mx-7 my-2"
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
