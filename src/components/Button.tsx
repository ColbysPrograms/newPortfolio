
interface Props {
  text: string;
}

function Button({ text }: Props) {
  return (
    <div className="cursor-pointer text-2xl p-10 m-5 bg-blue-400 rounded-md hover:bg-blue-600 duration-500">
      <p>{text}</p>
    </div>
  )
}

export default Button;
