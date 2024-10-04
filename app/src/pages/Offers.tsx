import React, { useEffect, useState } from "react";
import Legs from "../components/Legs";
import Arms from "../components/Arms";
import Body from "../components/Body";
import Face from "../components/Face";
import pricing from "../assets/pricing-image.jpg";

const Offers: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(getInitialTab());

  function getInitialTab() {
    const tabData = localStorage.getItem("PRICE_LIST");
    const savedTab = tabData ? JSON.parse(tabData) : null;
    return savedTab || "Legs";
  }

  useEffect(() => {
    const tabData = JSON.stringify(selectedTab);
    localStorage.setItem("PRICE_LIST", tabData);
  }, [selectedTab]);

  return (
    <div>
      <div className="h-[500px] relative">
        <img src={pricing} alt="Contact" className="w-full opacity-70 h-full object-cover" />

        <div className="absolute top-1/2 inset-x-0 text-center transform -translate-y-1/2">
          <h1 className="text-5xl text-[#6a483c]">Ofertat</h1>
        </div>
      </div>
      <div className="px-[16%] flex flex-col justify-center mt-24">
        <h2 className="text-5xl text-[#6a483c] text-center">Waxing Price List</h2>
        <p className="px-[20%] text-[#885D4D] text-center mt-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
      </div>
      <div className=" transform flex rounded-md w-[324px] mx-auto justify-center z-10 mt-5">
        <div className="">
          <button onClick={() => setSelectedTab("Legs")} className={`font-semibold py-4 px-6 rounded-md hover:text-[#ff7404] hover:duration-500 duration-500 ${selectedTab === "Cocktails" ? "bg-transparent text-[#6a483c]" : "text-[#6a483c]"}`}>
            Legs
          </button>
          <div className="h-[1.5px] w-full overflow-hidden">
            <div className={`orangeline w-full mx-auto border-b border-[1.5px] border-[#ff7404] transition-transform duration-300 ease-out ${selectedTab === "Cocktails" ? "scale-x-100" : "scale-x-0"}`}></div>
          </div>
        </div>
        <div className="flex flex-col">
          <button onClick={() => setSelectedTab("Arms")} className={`font-semibold py-4 px-6 rounded-md hover:text-[#ff7404] hover:duration-500 duration-500 ${selectedTab === "Food" ? "bg-transparent text-[#6a483c]" : "text-[#6a483c]"}`}>
            Arms
          </button>
          <div className="h-[1.5px] w-full overflow-hidden">
            <div className={`orangeline w-full mx-auto border-b border-[1.5px] border-[#ff7404] transition-transform duration-300 ease-out ${selectedTab === "Food" ? "scale-x-100" : "scale-x-0"}`}></div>
          </div>
        </div>
        <div className="">
          <button onClick={() => setSelectedTab("Body")} className={`font-semibold py-4 px-6 rounded-md hover:text-[#ff7404] hover:duration-500 duration-500 ${selectedTab === "Nuts" ? "bg-transparent text-[#6a483c]" : "text-[#6a483c]"}`}>
            Body
          </button>
          <div className="h-[1.5px] w-full overflow-hidden">
            <div className={`orangeline w-full mx-auto border-b border-[1.5px] border-[#ff7404] transition-transform duration-300 ease-out ${selectedTab === "Nuts" ? "scale-x-100" : "scale-x-0"}`}></div>
          </div>
        </div>
        <div className="">
          <button onClick={() => setSelectedTab("Face")} className={`font-semibold py-4 px-6 rounded-md hover:text-[#ff7404] hover:duration-500 duration-500 ${selectedTab === "Nuts" ? "bg-transparent text-[#6a483c]" : "text-[#6a483c]"}`}>
            Face
          </button>
          <div className="h-[1.5px] w-full overflow-hidden">
            <div className={`orangeline w-full mx-auto border-b border-[1.5px] border-[#ff7404] transition-transform duration-300 ease-out ${selectedTab === "Nuts" ? "scale-x-100" : "scale-x-0"}`}></div>
          </div>
        </div>
      </div>
      <div className="px-[16%] mb-10">
        {selectedTab === "Legs" && <Legs />}
        {selectedTab === "Arms" && <Arms />}
        {selectedTab === "Body" && <Body />}
        {selectedTab === "Face" && <Face />}
      </div>
    </div>
  );
};

export default Offers;
