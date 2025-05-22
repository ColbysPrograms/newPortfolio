import Title from "./Title"
import './About.css'

function About() {
  const size = '400px';
  return (
    <div>
      <div className="flex-1/4">
        <Title title="About Me"></Title>
      </div>
      <div className="flex flex-col bg-gray-200 p-5 mr-5 rounded-md">
        <div className="flex mb-3">
          <img src="/newPortfolio/KMeans.png" height={size} width={size}></img>
          <p className="ml-3">
            I'm currently a Graduate Teaching Assistant for the University of Central Arkansas, where I'm getting my Master's degree in Applied Mathematics. I received my Bachelor's degree in Computer Science from UCA in December 2024. As of Summer 2025, I have assisted with College Algebra and Applied Calculus. I taught for three sessions of College Algebra and Applied Calculus each, writing and reviewing my own presentations for each. My presentations for Applied Calculus were to show computer science students some of the overlap in mathematics and computer science. My presentations were the <i>Balloon Project</i> and <i>Newton's Method</i> projects shown on the Projects page.
          </p>
        </div>
        <div className="flex">
          <p className="mr-3">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
          <img src="/newPortfolio/chart.png" height={size} width={size}></img>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <a href="/newPortfolio/resume.pdf" target="_blank" download="Colby Cox's Resume" className="">
          <p className="text-4xl">Download Resume</p>
        </a>
      </div>
    </div>
  )
}

export default About
