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
      <div>
        <form action="186c6d12f611a86ad07a2c26db1158b0" method="POST" className="flex flex-col">
          <input type="text" name="_honey" className="hidden"></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <div className="flex justify-center">
            <label>Name:</label>
            <input type="text" name="name" required className="border"></input>
            <label>Email: </label>
            <input type="email" name="email" required className="border"></input>
          </div>
          <div className="flex flex-col">
            <label className="min-h-max">Message: </label>
            <input type="text" name="message" required className="border py-10"></input>
          </div>
          <input type="hidden" name="_autoresponse" value="Thank you for sending a message! I'll get back as soon as I can. -Colby Cox"></input>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
