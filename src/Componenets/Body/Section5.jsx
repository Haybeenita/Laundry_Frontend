

const LeftSide = () => {
  return (
    <section>
      <div className="flex flex-col">
        <h2 className="w-[574px] mt-[100px] text-[50px]">
          no fading,only cleaning
        </h2>
        <span className="w-[574px] flex mt-[19.02px] justify-center items-center">
          Integer consectetur nunc arcu. Fusce in fermentum dolor. Sed at magna
          eget dolor aliquam tincidunt in a est. Quisque egestas pellentesque
          sapien id feugiat. Nulla quis ante vitae neque elementum maximus a
          vitae diam.
        </span>
      </div>
    </section>
  );
};

const RightSide = () => {
  return (
    <section>
      <div className="flex gap-[30px]">
        <div>
          <div className="w-[272.5px] h-[223.2px] bg-[#E8F6FF] Boxes relative mt-[6rem] rounded-2xl">
            <span className="font-bold text-[20.8px] text-[#54595F] flex justify-center items-center pt-[3.5rem]">
              Premium Perfume
            </span>
            <p className="w-[210.91px] font-medium text-base text-[#54595F] mt-[19.49px] flex justify-center text-center mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec.
            </p>
          </div>

          <div className="w-[89px] h-[89px] rounded-full Boxes2 bg-white absolute -mt-[16.5rem] ml-[5.5rem]">
            <img
              className="w-10 h-10 mt-[24px] ml-[28px]"
              src="/7-rose_512.png"
            ></img>
          </div>
        </div>

        <div>
          <div className="w-[272.5px] h-[223.2px] bg-[#E8F6FF] Boxes relative mt-[6rem] rounded-2xl">
            <span className="font-bold text-[20.8px] text-[#54595F] flex justify-center items-center pt-[3.5rem]">
              Trusted Detergent
            </span>
            <p className="w-[210.91px] font-medium text-base text-[#54595F] mt-[19.49px] flex justify-center text-center mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec.
            </p>
          </div>

          <div className="w-[89px] h-[89px] rounded-full Boxes2 bg-white absolute -mt-[16.5rem] ml-[5.5rem]">
            <img
              className="w-10 h-10 mt-[24px] ml-[28px]"
              src="/25-washing-powder_512.png"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

const BottomPart = ()=>{
    return (
        <div className="absolute z-10 mt-[6.5rem]">
            <div className="w-[1200px] h-[138.11px] rounded-full bg-[#FFA33E] relative flex gap-[20px]">
                <div className="w-[166.67px] h-[51.11px] absolute bg-white rounded-full flex justify-center items-center mt-[3rem] ml-[2rem]" >
                <img src="/logoipsum-265.png" className=" w-[126.67px] h-[30.94px]"></img>
                </div>
                <div className="w-[166.67px] h-[51.11px] absolute bg-white rounded-full flex justify-center items-center mt-[3rem] ml-[14rem]" >
                <img src="/logoipsum-264.png" className=" w-[126.67px] h-[30.94px]"></img>
                </div>
                 <div className="w-[166.67px] h-[51.11px] absolute bg-white rounded-full flex justify-center items-center mt-[3rem] ml-[26rem]" >
                <img src="/logoipsum-261.png" className=" w-[126.67px] h-[30.94px]"></img>
                </div>
                <div className="w-[166.67px] h-[51.11px] absolute bg-white rounded-full flex justify-center items-center mt-[3rem] ml-[38rem]" >
                <img src="/logoipsum-259.png" className=" w-[126.67px] h-[30.94px]"></img>
                </div>
                <div className="w-[166.67px] h-[51.11px] absolute bg-white rounded-full flex justify-center items-center mt-[3rem] ml-[50rem]" >
                <img src="/logoipsum-254.png" className=" w-[126.67px] h-[30.94px]"></img>
                </div>
                <div className="w-[166.67px] h-[51.11px] absolute bg-white rounded-full flex justify-center items-center mt-[3rem] ml-[62rem]" >
                <img src="/logoipsum-2.png" className=" w-[126.67px] h-[30.94px]"></img>
                </div> 

            </div>
        </div>

    )
}



export const NoFadingAway = () => {
  return (
    <div className=" mx-auto justify-center gap-[50px] mb-[170px]">
      <div className="flex">
      <LeftSide />
      <RightSide />
        </div>  
      
      <BottomPart/>
      
    </div>
  );
};
