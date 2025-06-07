import Title from "./Title"
import './About.css'

function About() {
  const size = '370px';
  return (
    <div>
      <Title title="About Me"></Title>
      <div className="flex flex-col bg-gray-200 p-5 mx-5 rounded-md">
        <div className="lg:flex mb-3 justify-center">
          <div className="flex justify-center md:min-w-max">
            <img src="gta.avif" height={size} width={size}></img>
          </div>
          <p className="lg:ml-3">
            I'm currently a Graduate Teaching Assistant for the University of Central Arkansas, where I'm getting my Master's degree in Applied Mathematics. I received my Bachelor's degree in Computer Science from UCA in December 2024. As of Summer 2025, I have assisted with College Algebra and Applied Calculus. I taught for three sessions of College Algebra and Applied Calculus each, writing and reviewing my own presentations for each. My presentations for Applied Calculus were to show computer science students some of the overlap in mathematics and computer science. These were the <a href="https://github.com/ColbysPrograms/balloonProject" target="_blank"><i>Balloon Project</i></a> and <a href="https://github.com/ColbysPrograms/NewtonPresentation" target="_blank"><i>Newton's Method</i></a> projects shown on the Projects page. I've highly enjoyed the process of teaching students about these intersections of knowledge and hope to do the same during the Fall 2025 semester when I will be fully teaching a College Algebra class.
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <p className="lg:mr-3">
            Outside of my educational career, I have many hobbies both inside and outside of my profession. On the right is an ordered chart of my favorite games. I enjoy a wide variety of genres, and the only real consistency between all of my picks is having a high degree of player expression. Another one of my hobbies is playing music. I performed in the UCA Marching Band and Concert Band for three years playing trumpet, and regularly play my piano. I'd hope to one day incorporate that experience in making my own music, like when I'm improvising on my piano. My least predictable hobby is my love for dance. I've attended dance classes, mainly Zumba, several times a week for years. My final hobby I'd like to share is baking. I love to bake for myself and my family. For Mother's Day, I went home and delivered my homemade chocolate chocolate chunk cookies to my Mom and my grandmothers. I hope this has been enlightening on my interests in and out of my career and given a more full idea of who I am.
          </p>
          <div className="flex justify-center md:min-w-max">
            <img src="chart.avif" height={size} width={size}></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <a href="resume.pdf" target="_blank" download="Colby Cox's Resume">
          <p className="text-4xl">Download Resume</p>
        </a>
      </div>
    </div>
  )
}

export default About
