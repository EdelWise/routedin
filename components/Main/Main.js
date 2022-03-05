export default function Main({ children }) {
  return (
    <div
      id="home"
      className=" bg-[url('../public/background.png')] h-screen w-full flex flex-col items-center"
    >
      {children}
      {/* title */}

      <div className=" lg:w-215 w-full px-3  lg:mt-32 mt-12">
        <div className="flex uppercase ml-1.5 font-roboto text-base lg:text-lg text-green">
          <span className="mr-8 flex">
            <img src="/green_line.svg" alt="" />{" "}
          </span>
          all in one freelancer tool
        </div>

        <div className="text-white font-podkova text-5xl lg:text-8xl font-semibold text-center lg:text-left">
          Bring your IT processes to today’s modern standards
        </div>
      </div>

      {/* scroll down */}

      <a
        href="#services"
        className="text-white text-2xl flex items-center h-6 font-roboto mt-32 animate-bounce"
      >
        <span className="mr-5 ">scroll down</span>
        <img src="/arrow_downward_24px.png" alt="" />{" "}
      </a>
    </div>
  );
}
