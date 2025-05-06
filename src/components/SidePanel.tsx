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
    <div className="flex-1/5 text-center flex flex-col">
      <Header></Header>
      <ul>
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
      <Footer></Footer>
    </div>
  )

}

export default SidePanel;
