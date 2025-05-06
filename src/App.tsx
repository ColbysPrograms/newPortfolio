import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SidePanel from "./components/SidePanel";
import { useState } from "react";

function App() {
  const pages = [
    <Home></Home>,
    <Projects></Projects>,
    <About></About>,
    <Contact></Contact>
  ]

  const [page, setPage] = useState(0);

  return (
    <div className="flex">
      <SidePanel setPage={setPage}></SidePanel>
      <div className="flex-4/5">
        {pages[page]}
      </div>
    </div>
  )
}

export default App;
