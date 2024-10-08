import React from "react";
import pricing from "../assets/pricing-image.jpg";

const Shërbimet: React.FC = () => {
  return (
    <div>
      <div className="h-[300px] relative">
        <img src={pricing} alt="Contact" className="w-full opacity-70 h-full object-cover" />

        <div className="absolute top-1/2 inset-x-0 text-center transform -translate-y-1/2">
          <h1 className="text-5xl text-[#6a483c]">Ofertat</h1>
        </div>
      </div>

      <div className="px-[8%] xl:px-[16%] mb-10">
        <div className="xl:flex justify-between gap-x-20">
          <div className="xl:w-1/2">
            <div className="py-4 border-2 border-[#6a483c] border-t-0 border-l-0 border-r-0 ">
              <div className="flex justify-between">
                <h1 className="text-[#6a483c] font-semibold text-2xl">Depilim me Laser</h1>
                <p className="text-[#6a483c] font-semibold text-2xl">€80</p>
              </div>
              <div>
                <h1 className="text-[#885D4D] mt-3">Komplet trupi (1 Seancë)</h1>
              </div>
            </div>
            <div className="py-4 border-2 border-[#6a483c] border-t-0 border-l-0 border-r-0 ">
              <div className="flex justify-between">
                <h1 className="text-[#6a483c] font-semibold text-2xl">Depilim me Laser</h1>
                <p className="text-[#6a483c] font-semibold text-2xl">€30</p>
              </div>
              <div>
                <h1 className="text-[#885D4D] mt-3">Fytyrën (1 Seancë)</h1>
              </div>
            </div>
            <div className="py-4 border-2 border-[#6a483c] border-t-0 border-l-0 border-r-0 ">
              <div className="flex justify-between">
                <h1 className="text-[#6a483c] font-semibold text-2xl">Depilim me Laser</h1>
                <p className="text-[#6a483c] font-semibold text-2xl">€40</p>
              </div>
              <div>
                <h1 className="text-[#885D4D] mt-3">Nënsqetulla (1 Seancë)</h1>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2">
            <div className="py-4 border-2 border-[#6a483c] border-t-0 border-l-0 border-r-0 ">
              <div className="flex justify-between">
                <h1 className="text-[#6a483c] font-semibold text-2xl">Depilim me Laser</h1>
                <p className="text-[#6a483c] font-semibold text-2xl">€40</p>
              </div>
              <div>
                <h1 className="text-[#885D4D] mt-3">Duart (1 Seancë)</h1>
              </div>
            </div>
            <div className="py-4 border-2 border-[#6a483c] border-t-0 border-l-0 border-r-0 ">
              <div className="flex justify-between">
                <h1 className="text-[#6a483c] font-semibold text-2xl">Depilim me Laser</h1>
                <p className="text-[#6a483c] font-semibold text-2xl">€40</p>
              </div>
              <div>
                <h1 className="text-[#885D4D] mt-3">Genital (1 Seancë)</h1>
              </div>
            </div>
            <div className="py-4 xl:border-2 xl:border-[#6a483c] xl:border-t-0 xl:border-l-0 xl:border-r-0 ">
              <div className="flex justify-between">
                <h1 className="text-[#6a483c] font-semibold text-2xl">Depilim me Laser</h1>
                <p className="text-[#6a483c] font-semibold text-2xl">€50</p>
              </div>
              <div>
                <h1 className="text-[#885D4D] mt-3">Këmbët (1 Seancë)</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shërbimet;
