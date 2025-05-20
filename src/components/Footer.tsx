function Footer() {
  return (
    <div className="text-center">
      <div className="text-blue-400 text-3xl mb-2 ">
        <a
          href="https://github.com/ColbysPrograms"
          target="_blank"
          className="mx-5"
        >
          <i className="fa-brands fa-github hover:text-blue-600 transition duration-500"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/williamcolbycox/"
          target="_blank"
          className="mx-5"
        >
          <i className="fa-brands fa-linkedin hover:text-blue-600 transition duration-500"></i>
        </a>
      </div>
      <p className="text-xl">Made by Colby Cox</p>
    </div>
  )
}

export default Footer
