import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Loginbox() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="flex  sm:h-screen  justify-center items-center "
      >
        <figure className="bg-[#313338] sm:w-[500px] w-full h-auto  rounded-xl p-8 dark:bg-slate-800 ">
          <h1 className="text-white tracking-wider flex mb-6 justify-center items-center font-bold">
            Welcome back!
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
              Password
            </label>
            <input
              className=" rounded-sm bg-[#1e1f22] mb-4 text-white h-[40px]"
              type="password"
              required
            ></input>
          </form>
          <a className="text-[#0b8dcf]" href="#">
            Forgot your password?
          </a>
          <button className=" capitalize mt-4 h-[40px] mb-6 flex justify-center items-center text-white bg-[#0b8dcf] rounded-sm w-full">
            Log In
          </button>
          <p className="text-[14px] text-[#777d85]">
            Need an account?{" "}
            <Link className="text-[#0b8dcf]" to="/register">
              Register
            </Link>
          </p>
        </figure>
      </motion.div>
    </>
  );
}

export default Loginbox;
