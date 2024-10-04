import React from "react";

const Body: React.FC = () => {
  return (
    <div className="xl:flex justify-between gap-x-20">
      <div className="xl:w-1/2">
        <div className="py-4 border-2 border-[#6a483c] border-t-0 border-l-0 border-r-0 ">
          <div className="flex justify-between">
            <h1 className="text-[#6a483c] font-semibold text-2xl">Half Body</h1>
            <p className="text-[#6a483c] font-semibold text-2xl">$50</p>
          </div>
          <div>
            <h1 className="text-[#885D4D] mt-3">Lorem ipsum dolor sit amet</h1>
          </div>
        </div>
        <div className="py-4">
          <div className="flex justify-between">
            <h1 className="text-[#6a483c] font-semibold text-2xl">Half Body</h1>
            <p className="text-[#6a483c] font-semibold text-2xl">$50</p>
          </div>
          <div>
            <h1 className="text-[#885D4D] mt-3">Lorem ipsum dolor sit amet</h1>
          </div>
        </div>
      </div>
      <div className="xl:w-1/2">
        <div className="py-4 border-2 border-[#6a483c] border-t-0 border-l-0 border-r-0">
          <div className="flex justify-between">
            <h1 className="text-[#6a483c] font-semibold text-2xl">Half Body</h1>
            <p className="text-[#6a483c] font-semibold text-2xl">$50</p>
          </div>
          <div>
            <h1 className="text-[#885D4D] mt-3">Lorem ipsum dolor sit amet</h1>
          </div>
        </div>
        <div className="py-4">
          <div className="flex justify-between">
            <h1 className="text-[#6a483c] font-semibold text-2xl">Half Body</h1>
            <p className="text-[#6a483c] font-semibold text-2xl">$50</p>
          </div>
          <div>
            <h1 className="text-[#885D4D] mt-3">Lorem ipsum dolor sit amet</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
