function Personcard() {
  return (
    <>
      <div className="flex flex-col overflow-y-auto overflow-x-hidden">
        <div className="flex items-start justify-between self-stretch mb-[24px]">
          <div className="flex gap-3">
            <div className="rounded-full w-[58px] h-[58px] shrink-0 bg-slate-50"></div>
            <div className="flex justify-start items-start flex-col ">
              <h4 className="text-[16px] font-medium leading-3  text-[#171C1B]">
                William
              </h4>
              <p className="h-[37px] whitespace-nowrap  overflow-hidden text-[14px] text-[#465352] text-ellipsis  font-normal leading-4 w-[196px]">
              Sure, that sounds good. I need to 
              take a break from staring at my computer screen all day.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end gap-3">
            <span className="text-[#758A89] text-[14px] text-ellipsis">4s</span>
            <div className=" flex justify-center text-white items-center w-[24px] h-[24px] rounded-full bg-red-400">
              2
            </div>
          </div>
        </div>
        <div className="border-b-2 border-[#E3E8E7]" />
      </div>
    </>
  );
}

export default Personcard;
