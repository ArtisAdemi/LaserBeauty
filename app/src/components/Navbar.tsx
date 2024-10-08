import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#FFF7EF] h-[120px] flex justify-center items-center border-b-2 border-[#9A7566] px-[8%] xl:px-[16%]">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex space-x-24 w-1/3 justify-start">
          <a href="/" className="text-[#9A7566] font-bold hover:text-[#a55839]">
            Faqja kryesore
          </a>
          <a href="/sherbimet" className="text-[#9A7566] font-bold hover:text-[#a55839]">
            Shërbimet
          </a>
        </div>
        <div className="text-2xl font-bold text-[#9A7566] w-1/3 flex justify-center">
          <img src="./img/Logo.jpg" alt="" className="w-[100px] h-[100px] rounded-full border-2 border-[#9A7566]" />
        </div>
        <div className="w-1/3 flex justify-end ">
          <a href="/kontakt" className="text-[#9A7566] border-2 border-[#9A7566] py-2 px-4 rounded-md font-bold hover:bg-[#9A7566] hover:text-white duration-300 transition-all">
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
