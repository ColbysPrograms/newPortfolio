import Title from "./Title"

function About() {
  return (
    <div>
      <div className="flex-1/4">
        <Title title="About Me"></Title>
      </div>
      <div>
        <p>
          I'm currently a Graduate Teaching Assistant for the University of Central Arkansas, where I'm getting my Master's degree in Applied Mathematics. I received my Bachelor's degree in Computer Science from UCA in December 2024.
        </p>
      </div>
      <a href="/newPortfolio/resume.pdf" target="_blank" download="Colby Cox's Resume" className="max-w-min">
        <div className="text-center">
          <p className="text-4xl">Download Resume</p>
        </div>
      </a>
    </div>
  )
}

export default About
