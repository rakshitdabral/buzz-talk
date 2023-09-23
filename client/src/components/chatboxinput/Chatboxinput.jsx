import { BsCameraVideo ,BsMic ,BsEmojiSmile,BsThreeDotsVertical} from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import divider from "../../assets/divider.png";
function Chatboxinput() {
  return (
    <>
      <div className="flex flex-col justify-between items-center h-[140px] w-full  pr-[34px] pb-[24px] pl-[34px] border-2 bg-white rounded-3xl   border-[#E3E8E7]">
        <div className="flex flex-col w-full pt-[20px] pr-[20px] pb-[32px] pl-[20px]">
          <textarea className="h-[36px] resize-none outline-none" />
        </div>
        <div className="flex justify-between items-center border-t-2 w-full border-[#E3E8E7] pt-[12px] pr-[20px] pb-[12px] pl-[20px]">
          <div className="flex gap-3 justify-start  items-center">
            <BsCameraVideo className="fill-[#758A89] h-[20px] w-[20px] cursor-pointer" />
            <BsMic className="fill-[#758A89] h-[20px] w-[20px] cursor-pointer" />
            <img src={divider}></img>
            <BsEmojiSmile className="fill-[#758A89] h-[20px] w-[20px] cursor-pointer" />
            <FiPaperclip className="text-[#758A89] h-[20px] w-[20px] cursor-pointer" />
            <img src={divider}></img>
            <BsThreeDotsVertical className="fill-[#758A89] h-[20px] w-[20px] cursor-pointer" />
          </div>
          <PiPaperPlaneRightFill className="cursor-pointer fill-[#329993] h-[25px] w-[25px]"/>
        </div>
      </div>
    </>
  );
}

export default Chatboxinput;
