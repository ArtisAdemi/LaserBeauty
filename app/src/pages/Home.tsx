import React from "react";
import heroimage from "../assets/heroimage.jpg";
import legs from "../assets/legs.jpg";
import legss from "../assets/legss.jpg";
import body from "../assets/body.png"; // Import your treatment image
import dora from "../assets/dora.jpg";
import fytyra from "../assets/fytyra.jpg";
const Home: React.FC = () => {
  return (
    <div className="px-[8%] xl:px-[16%] py-6">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-md text-[#6a483c] mb-4">
            Merr Pamjen <br /> e Lëmuar që Dëshiron
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Merrni pamjen e lëmuar që dëshironi me trajtimet tona <br />
            efektive me laser. <br /> Rritni vetëbesimin tuaj me rezultate të
            shkëlqyera!
          </p>
          <button className="bg-transparent border-2 border-[#6a483c] text-[#6a483c] py-2 px-6 w-[40%] md:w-[200px]">
            Zbuloni Më Shumë
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0 relative">
          <img
            src={heroimage}
            alt="Home Image"
            className="w-[90%] md:w-[600px] h-auto object-cover rounded-t-full"
          />

          <img
            src={legs}
            alt="Small Image"
            className="w-[30%] md:w-[250px] h-auto object-cover absolute left-0 bottom-0 transform translate-x-[-5%] translate-y-[-15%]"
          />
        </div>
      </div>

      {/* About Us Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between">
        <div className="flex justify-center md:justify-end items-center space-x-4 md:space-x-16">
          <img
            src={legs}
            alt="About Us Image"
            className="w-[90%] md:w-[600px] h-auto object-cover rounded-b-full"
          />
        </div>

        <div className="w-full md:w-1/2 mt-6 px-12 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6a483c] mb-4">
            Rreth Nesh
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Platforma jonë është e dedikuar për t'ju ofruar shërbimet dhe
            zgjidhjet më të mira që përputhen me qëllimet tuaja. Nga opsionet e
            personalizuara te ekspertiza profesionale, ne jemi këtu për t'ju
            ndihmuar në çdo hap të rrugës. Le ta bëjmë udhëtimin tuaj drejt
            suksesit më të lehtë dhe më të arritshëm.
          </p>
        </div>
      </div>

      {/* Treatment Section */}
      <div className="flex flex-col md:flex-row items-center justify-between my-12">
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6a483c] mb-4">
            Depilim me Laser
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-4 text-left">
            Në Laser Beauty Sara, ne besojmë në fuqinë e teknologjisë së
            përparuar për të nxjerrë në pah shkëlqimin tuaj natyral. Trajtimet
            tona të avancuara me laser janë krijuar për të rinovuar,
            rigjallëruar dhe freskuar lëkurën tuaj, duke e lënë të lëmuar,
            rinore dhe rrezatuese. Qoftë që kërkoni heqjen e qimeve, rifreskimin
            e lëkurës apo zgjidhje kundër plakjes, teknikët tanë të specializuar
            sigurojnë saktësi me çdo impuls, duke ju dhënë vetëbesimin për të
            shkëlqyer në bukurinë tuaj unike.
          </p>

          <div className="grid grid-cols-3 gap-4 ">
            <div className="flex flex-col items-center py-8 space-y-4 p-2 bg-transparent shadow-md hover:shadow-lg transition-shadow border border-[#6a483c] duration-300 h-48">
              <img
                src={body}
                alt="Face Waxing"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">
                Komplet Trupi
              </h3>
            </div>

            <div className="flex flex-col items-center py-8 space-y-4 p-2 bg-transparent shadow-md hover:shadow-lg transition-shadow border border-[#6a483c] duration-300 h-48">
              <img
                src={fytyra}
                alt="Body Waxing"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">Fytyren</h3>
            </div>

            <div className="flex flex-col items-center p-2 py-8 space-y-4 shadow-md hover:shadow-lg transition-shadow border bg-transparent border-[#6a483c] duration-300 h-48">
              <img
                src={dora}
                alt="Facial Treatment"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">
                Nen Sqetulla
              </h3>
            </div>

            <div className="flex flex-col items-center p-2 py-8 space-y-4  shadow-md hover:shadow-lg transition-shadow border bg-transparent border-[#6a483c] duration-300 h-48">
              <img
                src={dora}
                alt="Massage Therapy"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">Duart</h3>
            </div>

            <div className="flex flex-col items-center py-8 space-y-4 p-2 bg-transparent shadow-md hover:shadow-lg transition-shadow border border-[#6a483c] duration-300 h-48">
              <img
                src={legss}
                alt="Hair Treatment"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">Kembet</h3>
            </div>

            <div className="flex flex-col items-center py-8 space-y-4 p-2 bg-transparent shadow-md hover:shadow-lg transition-shadow border border-[#6a483c]  duration-300 h-48">
              <img
                src={body}
                alt="Nail Care"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">
                Gjenitale
              </h3>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center mt-6 md:mt-0">
          <img
            src={heroimage}
            alt="Treatment Image"
            className="w-[60%] md:w-[400px] h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-32 mb-32"></div>
    </div>
  );
};

export default Home;
