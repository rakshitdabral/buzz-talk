import { styles } from "../../styles";
import { useEffect, useState } from "react";

function HomeBody(props) {
  const [isOdd, setOdd] = useState(true);
  let key = props.id
  useEffect(() => {
    if (key % 2 === 0) {
      setOdd(false);
    }
  },[key]);
  return (
    <>
      <div className={`${styles.paddingX} ${isOdd? "bg-white":"bg-[#f6f6f6ff]"} mt-[90px]   w-full`}>
        <div className={`${isOdd? "sm:flex-row-reverse" : "sm:flex-row" } w-full flex  flex-col p-5  justify-around items-center `}>
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
      </div>
    </>
  );
}

export default HomeBody;
