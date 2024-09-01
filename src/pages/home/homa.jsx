import React from "react";
import { IoMdSearch } from "react-icons/io";

export const Home = () => {
  return (
    <div className="divbg h-[230vh] w-[100%] ">
      <div>
        <div className="ml-[200px]  gap-[100px] flex justify-start items-center ">
          <div className="image-slider  border-r-[4px]">
            <div className="image-slide-wrapper ">
              <div className="image-slide bg-backgg"></div>
              <div className="image-slide bg-backgg"></div>
              <div className="image-slide bg-backgg"></div>
            </div>
          </div>
          <div className="text-7xl sliderr absolute top-[250px] right-[600px]">
            <h1>
              Find Your <br /> Clothes
            </h1>
          </div>
          <div className="text-md translate-x-[-54px] ">
            {" "}
            Feel free to adjust it to better fit your brand <br /> and the
            unique aspects of your store!
          </div>
        </div>
        <div className="w-full border-b-[4px] "></div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className=" py-[40px] flex flex-col justify-center items-center gap-y-4 ">
            <h1 className="text-3xl py-[5px]">Our Shop :</h1>
            <div className="flex gap-10 justify-center items-center">
                <input className="h-[55px] w-[600px] rounded-[30px]" placeholder="      Search" type="search" />
                <div className="absolute  right-[32.5%] text-2xl p-[8px] rounded-full bg-[#d1ae7f] hover:text-[#d1ae7f] hover:bg-white "><IoMdSearch /></div>

            </div>
        </div>

        
      </div>
      <div className="w-full border-b-[4px] "></div>
      <div>
            <h1 className="text-2xl p-[70px] pl-[100px]">ProDucts :</h1>
            <div className="flex flex-wrap justify-center items-center gap-10">
                <div className="h-[55vh] w-[29vh] flex flex-col  rounded-[50px] gap-[10px]">
                    <div className=" h-[70%] brownborder rounded-[50px]"></div>
                    <div className=" h-[25%] brownborder rounded-[50px]"></div>

                </div>
                <div className="h-[45vh] w-[29vh] bg-red-500 rounded-[50px]"></div>
                <div className="h-[45vh] w-[29vh] bg-red-500 rounded-[50px]"></div>
                <div className="h-[45vh] w-[29vh] bg-red-500 rounded-[50px]"></div>
                <div className="h-[45vh] w-[29vh] bg-red-500 rounded-[50px]"></div>
                <div className="h-[45vh] w-[29vh] bg-red-500 rounded-[50px]"></div>
                <div className="h-[45vh] w-[29vh] bg-red-500 rounded-[50px]"></div>
                <div className="h-[45vh] w-[29vh] bg-red-500 rounded-[50px]"></div>
                <div className="h-[45vh] w-[29vh] bg-red-500 rounded-[50px]"></div>
                <div className="h-[45vh] w-[29vh] bg-red-500 rounded-[50px]"></div>

            </div>
        </div>
    </div>
  );
};
