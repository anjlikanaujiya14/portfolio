/* eslint-disable react/no-unknown-property */
import "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import "../../public/homepic.png";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello I&apos;m a </h1>
              {/*<span className='text-red-700'>Developer</span> */}
              <ReactTyped
                className="text-red-700"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi, I&apos;m Anjli Kanaujiya, a creative and detail-oriented
              Full-Stack Web Developer. I specialize in building modern,
              responsive web applications with seamless functionality. With
              expertise in both front-end and back-end technologies, I bring
              ideas to life digitally. My passion lies in creating user-friendly
              and impactful solutions for businesses and individuals. Explore my
              portfolio to see my work and let&apos;s create something amazing
              together!
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/anjli-kanaujiya-32517b220/" target="blank">
                    <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                    </li>
                  <li>
                    <a href="https://web.telegram.org/k/" target="blank">
                    <FaTelegramPlane className="text-2xl cursor-pointer" />
                    </a>
                    </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5 ">
                  <DiMongodb className="text-xl md-text-3xl hover-scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md-text-3xl hover-scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md-text-3xl hover-scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md-text-3xl hover-scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex justify-center items-center">
            <div className="w-[450px] h-[450px] rounded-full overflow-hidden border-[4px] border-gray-300 shadow-md">
              <img
                src="../../public/homepic.png"
                className="w-full h-full object-cover"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      
    </>
  );
}

export default Home;
