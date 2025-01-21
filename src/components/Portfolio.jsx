/* eslint-disable no-undef */
import "react";
import "../../public/react.png";
import "../../public/image.png";

function Portfolio() {
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10">
      <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
      <span className="underline font-semibold">Featured Projects</span>

      <div className="flex flex-col md:flex-row justify-between ">
        <div className="my-5 md:w-[380px] md:h-[270px] border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300 flex flex-col items-center">
          <img
            src="../../public/image.png"
            className="h-[100px] w-[100px] p-2 rounded-full border-2 mb-4"
            alt="Project Thumbnail"
          />
          <div className="text-center font-bold text-xl mb-4">
            Youtube Clone
          </div>
          <div className="flex space-x-4">
            <a
              href="https://youtube-clone-gray-sigma.vercel.app/"
              target="blank"
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                Demo
              </button>
            </a>
            <a
              href="https://github.com/anjlikanaujiya14/youtube-clone"
              target="blank"
            >
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                Source code
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="font-bold text-xl ">Description</h1>

          <p>
            Responsive YouTube clone with video search, playback, and API
            integration.
          </p>
          <h2 className="font-bold mt-2 underline">Frontend</h2>
          <div>
            React.js
            <img
              src="../../public/react.png"
              className=" w-[60px] h-[60px]"
              alt=""
            />
          </div>
          <span>CSS Modules, Axios</span>
          <h2 className="font-bold mt-2 underline">Backend</h2>
          <span>YouTube Data API v3</span>
        </div>
      </div>
      <br />
      <br />
    
    </div>
  );
}

export default Portfolio;
