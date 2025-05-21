import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SidePanel from "./components/SidePanel";
import { useState } from "react";
import './App.css';

function App() {
  const pages = [
    <Home></Home>,
    <Projects></Projects>,
    <About></About>,
    <Contact></Contact>
  ]

  const [page, setPage] = useState(0);

  return (
    <div className="flex bg-white max-h-screen">
      <div className="hidden flex-1/5 md:block max-h-screen">
        <SidePanel setPage={setPage}></SidePanel>
      </div>
      <div id="" className="flex-4/5 max-h-screen">
        {pages[page]}
      </div>
    </div>
  )
}

export default App;
