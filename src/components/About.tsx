import Title from "./Title"

function About() {
  return (
    <div>
      <Title title="About Me"></Title>
      <a href="/newPortfolio/resume.pdf" target="_blank" download="Colby Cox's Resume" className="max-w-min">
        <div className="text-center">
          <p className="text-4xl">Download Resume</p>
        </div>
      </a>
    </div>
  )
}

export default About
