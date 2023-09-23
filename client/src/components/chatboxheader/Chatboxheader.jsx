import { BsThreeDots } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import Chatboxinput from "../chatboxinput/Chatboxinput";

function Chatboxheader() {
  return (
    <>
      <div className="h-[100vh] w-full bg-[#EEF1F1] flex flex-col ">
        <div className="flex justify-between items-center w-full pt-[24px] pr-[34px] pb-[24px] pl-[34px] border-2 border-[#E3E8E7]">
          <div className="flex gap-3 ">
            <div className="rounded-full sm:w-[52px] sm:h-[52px] w-[30px] h-[30px] bg-[#0f172a]"></div>
            <div className="flex flex-col ">
              <h1 className="text-[#171C1B] sm:text-[20px]  text-[12px] font-bold">William</h1>
              <div className="flex justify-center items-center gap-2">
                <div className="rounded-full sm:h-[8px] sm:w-[8px] h-[3px] w-[3px] bg-green-500" />
                <p className="text-[#465352] sm:text-[16px]  text-[10px] font-normal leading-3">
                  Active now
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="sm:w-[52px] sm:h-[52px] w-[30px] h-[30px] rounded-full border-2 border-[#E3E8E7] flex justify-center items-center">
              {" "}
              <BiSolidPhoneCall className="fill-[#329993]   w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] cursor-pointer" />
            </div>
            <div className="sm:w-[52px] sm:h-[52px] w-[30px] h-[30px] rounded-full border-2 border-[#E3E8E7] flex justify-center items-center">
              {" "}
              <BsFillCameraVideoFill className="fill-[#329993]  w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] cursor-pointer" />{" "}
            </div>
            <div className="sm:w-[52px] sm:h-[52px] w-[30px] h-[30px] rounded-full border-2 border-[#E3E8E7] flex justify-center items-center">
              <BsThreeDots className="fill-[#ACB9B8] w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] cursor-pointer" />{" "}
            </div>
          </div>
        </div>
          <div className="p-4 w-full overflow-x-hidden overflow-y-auto h-[100vh]">

          </div>
        <div className="p-3">
          <Chatboxinput />
        </div>
      </div>
    </>
  );
}

export default Chatboxheader;
