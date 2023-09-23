import Frame from "../../assets/Frame.svg";
import Group from "../../assets/group.svg";
import Chat from "../../assets/chat.svg";
import Call from "../../assets/call.svg";
import Setting from "../../assets/setting.svg";
import Help from "../../assets/help.svg";
import Logout from "../../assets/logout.svg";

function Sidebar() {
  return (
    <>
      <div className="w-[96px] h-[100vh] border-r-2 border-[#E3E8E7] flex items-start justify-center py-[32px]">
        <div className="flex md:justify-between justify-start gap-6 flex-col items-center  h-full">
          <div className="h-[44px] w-[44px] rounded-full bg-[#0f172a] "></div>
          <div className="flex justify-between flex-col items-center gap-12 ">
            <div className="cursor-pointer">
              <img src={Frame} alt="frame"></img>
            </div>
            <div className="cursor-pointer">
              <img src={Group} alt="frame"></img>
            </div>
            <div className="cursor-pointer ">
              <img className=" fill-white" src={Chat} alt="frame"></img>
            </div>
            <div className="cursor-pointer">
              <img src={Call} alt="frame"></img>
            </div>
            <div className="cursor-pointer">
              <img src={Setting} alt="frame"></img>
            </div>
          </div>
          <div className="flex flex-col justify-end items-center sm:m-0 mt-3 gap-7">
          <div className="cursor-pointer">
              <img src={Help} alt="frame"></img>
            </div>
            <div className="cursor-pointer">
              <img src={Logout} alt="frame"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
