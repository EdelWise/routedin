export default function Main({ children }) {
  return (
    <div
      id="home"
      className=" bg-[url('../public/background.png')] h-screen w-full flex flex-col items-center"
    >
      {children}
      {/* title */}

      <div className=" w-215 mt-32">
        <div className="flex uppercase ml-1.5 font-roboto text-4.5 text-green">
          <span className="mr-8 flex">
            <img src="/green_line.svg" alt="" />{" "}
          </span>
          all in one freelancer tool
        </div>

        <div className="text-white font-podkova text-8xl font-semibold">
          Bring your IT processes to today’s modern standards
        </div>
      </div>

      {/* scroll down */}

      <div className="text-white text-2xl flex items-center h-6 font-roboto mt-32">
        <span className="mr-5">scroll down</span>
        <img src="/arrow_downward_24px.png" alt="" />{" "}
      </div>
    </div>
  );
}
