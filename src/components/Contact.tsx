import Title from "./Title"

function Contact() {
  return (
    <div className="min-h-screen">
      <Title title="Contact"></Title>
      <p className="text-center">You can reach me at:</p>
      <div className="flex justify-center">
        <p className="mr-0.5">My Email: </p>
        <a href="mailto:colby.cox2020@gmail.com" className="text-blue-700 underline">colby.cox2020@gmail.com</a>
      </div>
      <div className="flex justify-center">
        <p className="mr-0.5">My Phone Number: </p>
        <a href="tel:8709985066" className="text-blue-700 underline">(870) 998-5066</a>
      </div>
      <div className="mt-10">
        <form action="https://formsubmit.co/colby.cox2020@gmail.com" method="POST" className="flex flex-col">
          <input type="text" name="_honey" className="hidden"></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <div className="grid-cols-1 md:grid-cols-2 grid justify-items-center">
            <div className="flex flex-col">
              <label>Name:</label>
              <input type="text" name="name" required className="border"></input>
            </div>
            <div className="flex flex-col">
              <label>Email:</label>
              <input type="email" name="email" required className="border"></input>
            </div>
          </div>
          <div className="flex flex-col mx-10">
            <label className="min-h-max">Message: </label>
            <input type="text" name="message" required className="border mt-2 mb-5"></input>
          </div>
          <input type="hidden" name="_autoresponse" value="Thank you for sending a message! I'll get back as soon as I can. -Colby Cox"></input>
          <input type="hidden" name="_next" value="https://colbysprograms.github.io/thanks.html"></input>
          <div className="flex justify-center">
            <button type="submit" className="bg-gray-300 max-w-min cursor-pointer py-2 px-5">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
