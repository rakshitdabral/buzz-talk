import { styles } from "../../styles";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div
        className={`${styles.paddingX} min-h-[100vh]  loading="eager"   bg-hero-pattern bg-cover bg-no-repeat w-full`}
      >
        <div className="w-full flex flex-col  sm:py-[100px] py-0 justify-center items-center max-w-7xl mx-auto">
          <h1 className="text-black  text-[30px] md:text-[50px] mb-7 font-bold uppercase ">
            Chat, Connect, Share
          </h1>
          <p className="max-w-[800px]  text-black mb-6  text-[30px] flex justify-center items-center">
            With our cutting-edge chatting app, staying connected with friends,
            family, and colleagues has never been easier or more enjoyable.
          </p>
          <Link to="/register">
          <button className="bg-white hover:text-[#7B2CBF] hover:drop-shadow-3xl text-black font-normal antialiased py-4 px-12 sm:mt-12  rounded-full">
            Get Started
          </button>
          </Link>
          <div className="middle ">
            <div className="mouse" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
