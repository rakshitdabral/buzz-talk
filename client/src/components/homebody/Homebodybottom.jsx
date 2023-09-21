import { styles } from "../../styles";
import fourth from "../../assets/fourth.svg";

function Homebodybottom() {
  return (
    <>
      <div className={`${styles.paddingX} bg-[#f6f6f6ff] mt-[90px]   w-full`}>
        <div className="w-full flex  flex-col p-5  justify-around items-center">
          <h1 className="text-black  text-[30px] md:text-[50px] mb-7 font-bold">
            Connecting the World, One Pixel at a Time
          </h1>
          <p className="max-w-[1000px] text-[20px] mb-7">
            Experience seamless video conferencing with our web app – where
            intelligence meets crisp clarity for your virtual meetings
          </p>
          <img className="w-[376px] h-[380px]" src={fourth} alt="video-call"></img>
        </div>
      </div>
    </>
  );
}

export default Homebodybottom;
