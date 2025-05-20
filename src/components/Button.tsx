
interface Props {
  text: string;
}

function Button({ text }: Props) {
  return (
    <div className="cursor-pointer text-2xl p-10 m-5 bg-blue-400 rounded-md">
      <p>{text}</p>
    </div>
  )
}

export default Button;
