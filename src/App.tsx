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
  const [menu, setMenu] = useState(false);

  function Menu() {
    if (menu) {
      return <SidePanel setPage={setPage}></SidePanel>
    }
  }
  return (
    <div className="flex bg-white">
      <div className="md:hidden z-50">
        <i className="fa fa-bars fa-lg fixed top-5 right-5 cursor-pointer" onClick={() => { if (menu) { setMenu(false) } else { setMenu(true) } }}></i>
      </div>
      <div className="max-h-dvh md:hidden fixed top-0 left-0 bg-white flex justify-center min-w-screen z-10" onClick={() => { setMenu(false) }}>
        <Menu></Menu>
      </div>
      <div className="flex-1/5 max-h-screen hidden md:block">
        <SidePanel setPage={setPage}></SidePanel>
      </div>
      <div className="md:flex-4/5 max-h-screen">
        {pages[page]}
      </div>
    </div>
  )
}

export default App;
