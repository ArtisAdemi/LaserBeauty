import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF7EF] border-t-2  border-[#9A7566] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center ">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 ">
            <img
              src="./img/Logo.jpg"
              alt=""
              className="w-[100px] h-[100px] rounded-full border-2 border-[#9A7566]"
            />

            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100093594040815"
                target="_blank"
                className="text-[#9A7566] hover:text-gray-900"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/laserbeautysara/"
                target="_blank"
                className="text-[#9A7566] hover:text-gray-900"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@saralaserbeauty"
                target="_blank"
                className="text-[#9A7566] hover:text-gray-900"
              >
                Tiktok
              </a>
            </div>
          </div>
          {/* Support Links */}

          {/* Contact Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-[#9A7566] mb-2">Kontakti</h3>
            <p className="text-[#9A7566]">Rr. Vellezrit Xhakli Nr.11</p>

            <p className="text-[#9A7566]">Tel: (+383) 48 375 704</p>
          </div>
          {/* Opening Hours */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold text-[#9A7566] mb-2">
              Orari i Punës
            </h3>
            <p className="text-[#9A7566]">Hene - Shtune: 10:00 AM - 19:00 PM</p>
            <p className="text-[#9A7566]">Diellen: Mbyllur</p>
          </div>
        </div>
        <div className="text-center text-[#9A7566] mt-12">
          <a href="https://influxo.vercel.app" target="_blank">
            Copyright © {new Date().getFullYear()} Influxo. All Rights Reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
