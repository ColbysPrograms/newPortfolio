
interface Props {
  text: string;
}

function Button({ text }: Props) {
  return (
    <div className="bg-sky-400 cursor-pointer m-10 rounded-md p-10 text-2xl">
      <p>{text}</p>
    </div>
  )
}

export default Button;
