import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Registerbox() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity : 1,
          scale : 1,
        }}
        transition={{ duration: 0.5,ease: "easeInOut" }}
        className="flex  sm:h-screen  justify-center items-center "
      >
        <figure className="bg-[#313338] sm:w-[500px] w-full h-auto  rounded-xl p-8 dark:bg-slate-800 ">
          <h1 className="text-white tracking-wider flex mb-6 justify-center items-center font-bold">
            Register
          </h1>
          <form className="flex flex-col">
            <label className="mb-3 required leading-4 text-white uppercase text-[12px] font-bold tracking-wider ">
              Email
            </label>
            <input
              className=" rounded-sm bg-[#1e1f22] mb-4 text-white h-[40px]"
              type="text"
              required
            ></input>
            <label className="mb-3 required leading-4 text-white uppercase text-[12px] font-bold tracking-wider ">
              Username
            </label>
            <input
              className=" rounded-sm bg-[#1e1f22] mb-4 text-white h-[40px]"
              type="text"
              required
            ></input>
            <label className="mb-3 required leading-4 text-white uppercase text-[12px] font-bold tracking-wider ">
              Password
            </label>
            <input
              className=" rounded-sm bg-[#1e1f22] mb-4 text-white h-[40px]"
              type="password"
              required
            ></input>
          </form>
          <button className=" capitalize mt-4 h-[40px] mb-6 flex justify-center items-center text-white bg-[#0b8dcf] rounded-sm w-full">
            Continue
          </button>
          <p className="text-[12px] text-[#777d85]">
            By registering, you agree to BuzzTalk's
            <a className="text-[#0b8dcf]" href="">
              Terms and Services
            </a>{" "}
            and{" "}
            <a className="text-[#0b8dcf]" href="">
              Privacy Policy
            </a>
          </p>
          <Link to="/login">
            <p className="text-[#0b8dcf] text-[12px] mt-4">
              Already have an account?
            </p>
          </Link>
        </figure>
      </motion.div>
    </>
  );
}

export default Registerbox;
