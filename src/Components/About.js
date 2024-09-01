import AboutImg from "../assets/me.png";
import { IoArrowForward } from "react-icons/io5";
import './style.css';
import resume from '../assets/Sreejith(Resume).pdf';
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis quos consectetur ea harum! Libero aut qui
                  similique recusandae provident consectetur sed itaque alias
                  sint ipsa?
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores explicabo deserunt asperiores quasi, vitae blanditiis
                  perferendis
                </p>
              </span>
            </div>
          </ul>
        </div>
        <div className="container">
            <a href={resume} target="_blank" rel="noreferrer" className="cta-button">My Resume</a>
      </div>
      </div>
    </div>
  );
};

export default About;
