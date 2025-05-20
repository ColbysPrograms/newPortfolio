import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  setPage: (index: number) => void;
}

function SidePanel({ setPage }: Props) {
  const buttons = [
    <Button text="Home Page"></Button>,
    <Button text="Projects"></Button>,
    <Button text="About Me"></Button>,
    <Button text="Contact"></Button>,
  ]
  return (
    <div className="text-center flex flex-col min-h-screen">
      <div className="flex-1/6">
        <Header></Header>
      </div>
      <ul className="flex-2/3">
        {buttons.map((item, index) =>
          <li
            className=""
            key={index}
            onClick={() => { setPage(index); }}
          >
            {item}
          </li>
        )}
      </ul>
      <div className="flex-1/6">
        <Footer></Footer>
      </div>
    </div>
  )

}

export default SidePanel;
