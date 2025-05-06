import Title from "./Title"

function Contact() {
  return (
    <div>
      <Title title="Contact"></Title>
      <div className="text-center">
        <p>You can reach me at:</p>
        <div className="flex justify-center">
          <p className="mr-0.5">My Email: </p>
          <a href="mailto:colby.cox2020@gmail.com" className="text-blue-700 underline">colby.cox2020@gmail.com</a>
        </div>
        <div className="flex justify-center">
          <p className="mr-0.5">My Phone Number: </p>
          <a href="tel:8709985066" className="text-blue-700 underline">(870) 998-5066</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
