import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDrawerOpen]);

  const redirect = (path: string) => {
    setIsDrawerOpen(false); // Close drawer on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#FFF7EF] h-[120px] flex justify-center items-center border-b-2 border-[#9A7566] px-[8%] xl:px-[16%]">
      <div className="container mx-auto xl:px-4 py-2 flex justify-between items-center">
        <div className="hidden xl:flex space-x-24 w-1/3 justify-start">
          <a href="/" className="text-[#9A7566] font-bold hover:text-[#a55839]">
            Faqja kryesore
          </a>
          <a href="/sherbimet" className="text-[#9A7566] font-bold hover:text-[#a55839]">
            Çmimet
          </a>
        </div>
        <div className="text-2xl font-bold text-[#9A7566] xl:w-1/3 flex justify-center">
          <img src="./img/Logo.jpg" alt="" className="w-[100px] h-[100px] rounded-full border-2 border-[#9A7566]" />
        </div>
        <div className="w-1/3 hidden xl:flex justify-end ">
          <a href="/kontakt" className="text-[#9A7566] border-2 border-[#9A7566] py-2 px-4 rounded-md font-bold hover:bg-[#9A7566] hover:text-white duration-300 transition-all">
            Kontakt
          </a>
        </div>
      </div>
      <div className="xl:hidden flex items-center">
        {isDrawerOpen === false && (
          <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        )}
      </div>
      {isDrawerOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsDrawerOpen(false)}></div>}
      <div className={`fixed top-0 left-0 w-[70%] h-full bg-white z-50 flex flex-col px-5 py-10 transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between w-full mb-10">
          <img src="./img/Logo.jpg" alt="logo image" className="w-[100px] h-[100px] rounded-full border-2 border-[#9A7566]" />
          <button className="mr-2 text-center" onClick={() => setIsDrawerOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <p className="text-[#42526B] font-medium text-sm mb-5">Menu</p>
        <div className="flex flex-col gap-y-5">
          <h2 className={`cursor-pointer text-[#9A7566] hover:text-[#a55839] hover:duration-300 font-medium text-lg duration-300 ${isActive("/") ? "font-bold text-[#a55839] underline" : "text-[#9A7566]"}`} onClick={() => redirect("/")}>
            {isActive("/")}
            Faqja kryesore
          </h2>
          <h2 className={`cursor-pointer text-[#9A7566] hover:text-[#a55839] hover:duration-300 font-medium text-lg duration-300 ${isActive("/sherbimet") ? "font-bold text-[#a55839] underline" : "text-[#9A7566]"}`} onClick={() => redirect("/sherbimet")}>
            {isActive("/sherbimet")}
            Çmimet
          </h2>
          <h2 className={`cursor-pointer text-[#9A7566] hover:text-[#a55839] hover:duration-300 font-medium text-lg duration-300 ${isActive("/kontakt") ? "font-bold text-[#a55839] underline" : "text-[#9A7566]"}`} onClick={() => redirect("/kontakt")}>
            {isActive("/kontakt")}
            Kontakt
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
