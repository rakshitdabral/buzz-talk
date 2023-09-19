import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import HomeBody from "../../components/homebody/Homebody";
import { bodyContent } from "../../constants/bodyContent";
import Homebodybottom from "../../components/homebody/Homebodybottom";
import Footer from "../../components/footer/Footer";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        {bodyContent.map((content) => (
          <HomeBody
            key={content.id}
            id={content.id}
            src={content.src}
            alt={content.alt}
            title={content.title}
            desc={content.desc}
          />
        ))}
      </div>
      <motion.div ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 2, delay: 0.2, ease: "linear" }}>
        <Homebodybottom/>
      </motion.div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
