import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {

    const fetchRespo = async () => {
      try {
        let dataresp = await fetch("https://fakestoreapi.com/products");
        let datajson = await dataresp.json();
        setProducts(datajson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRespo();
  }, []);



  return (
    <div className="divbg  w-[100%] ">
      <div>
        <div className="ml-[200px]  gap-[100px] flex justify-start items-center ">
          <div className="image-slider  border-r-[4px]">
            <div className="image-slide-wrapper ">
              <div className="image-slide bg-backgg"></div>
              <div className="image-slide bg-backgg"></div>
              <div className="image-slide bg-backgg"></div>
            </div>
          </div>
          <div className="text-7xl  absolute top-[250px] translate-x-[570px]">
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
            <input
              onChange={(item) => setSearch(item.target.value)}
              className="h-[55px] w-[600px] rounded-[30px]"
              placeholder="      Search"
              type="      search"
            />
            <div className="absolute  right-[32.5%] text-2xl p-[8px] rounded-full bg-[#d1ae7f] hover:text-[#d1ae7f] hover:bg-white ">
              <IoMdSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b-[4px] "></div>
      <div>
        <h1 className="text-2xl p-[70px] pl-[100px]">ProDucts :</h1>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {
           products.filter((item) => {
            return search.toLowerCase() === '' || item.title.toLowerCase().includes(search.toLowerCase());
          }).map((e, i) => (
              <div key={i} className="h-[60vh] w-[29vh] flex flex-col rounded-[50px] gap-[10px] scaleee">
                <div className="h-[64%]  brownborder bg-cover bg-center rounded-[50px] overflow-hidden ">
                  <img style={{
                    width: '29vh',
                    height: '348px',

                  }} className="" src={e.image} alt="" />
                </div>
                <div className="h-[30%] brownborder p-4 bg-[#f3dba6] work text-[#bd6c02] flex-col rounded-[50px] flex justify-center items-center gap-2">
                  <div className="">{e.title}</div>
                  <div>{e.price}"$"</div>
                  <div></div>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
