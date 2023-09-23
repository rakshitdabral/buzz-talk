import { BsThreeDots } from "react-icons/bs";
import { HiOutlineMagnifyingGlass,HiPlus } from "react-icons/hi2";
import Personcard from "../personcard/Personcard";

function Uimenu() {
  return (
    <>
      
        <div className="h-[100vh] w-[376px]  sm:border-r-2 sm:border-[#E3E8E7] pt-[20px] pb-[20px] pr-[24px] pl-[24px]">
        <div className=" flex-col gap-[24px]  sm:flex hidden">
            <div className="flex justify-between p-6 items-center">
                <h4 className="text-[24px]  leading-5 font-normal text-[#171C1B]">Messages</h4>
                <BsThreeDots className="fill-[#ACB9B8] w-[24px] h-[24px] cursor-pointer"/>
            </div>
            <div className=" flex items-center   justify-center rounded-full py-2 border-2 border-[#E3E8E7] w-full">
            <HiOutlineMagnifyingGlass className="w-[24px] h-[24px] text-[#758A88]"/>
            <input className="ml-[10px] text-[16px] text-[#758A88] font-normal leading-3 outline-none"  type="text" placeholder="Search for chats.."/>
            </div>
            <div className=" flex items-center   justify-center ">
                <button className="bg-[#329993] flex items-center pt-[12px] pr-[20px] pb-[12px] pl-[20px]  justify-center rounded-full border-2 w-full text-white font-normal"><HiPlus className="h-[20px] w-[20px] mr-3"/> Start New Chat</button>
            </div>
            <div>
              <Personcard/>
            </div>
            
        </div>

        </div>
    </>
  )
}

export default Uimenu