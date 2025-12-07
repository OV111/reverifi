import React from "react";
const CardFeature = ({ data }) => {
  return (
    <React.Fragment>
      <div className="grid justify-center items-center mx-4 rounded-2xl">
        <div className="">
          <div className="max-h-78">
            <span className="relative top-10 left-4 bg-[#FE5D26] px-6 py-2 rounded-2xl text-white">
              {data.badge}
            </span>
            <img
              src={data.mainImage}
              alt=""
              className="w-100 rounded-t-2xl p-0 m-0"
            />
            <img
              src={data.secondaryImage}
              width={30}
              height={30}
              alt=""
              className="relative rounded-full bottom-14 left-90"
            />
          </div>

          <div className="mx-4 ">
            <h4 className="text-2xl font-semibold">{data.title}</h4>
            <p className="text-[#222222] font-light">{data.location}</p>{" "}
            <div className="my-1">
              <img src={data.icon} alt="" />
            </div>
          </div>
        </div>

        <div className="flex border-t-1 border-[#222222] my-2 mx-4 gap-60">
          <div>
            <h4 className=" text-[#222222] text-xl font-semibold mt-3 ">
              {data.price}
            </h4>
          </div>
          <div className="flex">
            <img src={data.button} className="cursor-pointer  mt-3" />
            <img src={data.button2} className="cursor-pointer mt-3" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardFeature;
