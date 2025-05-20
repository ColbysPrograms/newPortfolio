
interface Props {
  title: string;
}

function Title({ title }: Props) {
  return (
    <div className="text-5xl text-center m-10 flex-1/6">
      <p>{title}</p>
    </div>
  )
}

export default Title
