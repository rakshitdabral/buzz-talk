import { styles } from "../../styles";
import { useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";

function HomeBody(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const [isOdd, setOdd] = useState(true);
  let key = props.id;
  useEffect(() => {
    if (key % 2 === 0) {
      setOdd(false);
    }
  }, [key]);
  return (
    <>
      <motion.div
        className={`${styles.paddingX} ${
          isOdd ? "bg-white" : "bg-[#f6f6f6ff]"
        } mt-[90px]   w-full`}
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 2, delay: 0.2, ease: "linear" }}
      >
        <div
          className={`${
            isOdd ? "sm:flex-row-reverse" : "sm:flex-row"
          } w-full flex  flex-col p-5  justify-around items-center `}
        >
          <div>
            <img loading="lazy" src={props.src} alt={props.alt}></img>
          </div>
          <div className="sm:mt-0 mt-6">
            <div className="flex  justify-start items-start flex-col">
              <h1 className="text-black  text-[30px] md:text-[50px] mb-7 font-bold  ">
                {props.title}
              </h1>
              <p className="max-w-[550px]">{props.desc}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default HomeBody;
