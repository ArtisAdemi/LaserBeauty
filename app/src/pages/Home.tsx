import React from "react";
import heroimage from "../assets/heroimage.jpg";
import legs from "../assets/legs.jpg";
import legss from "../assets/legss.jpg"; // Import your treatment image

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-md text-[#6a483c] mb-4">
            Get The Smooth <br /> Look You Want
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Discover our amazing services and solutions designed <br /> to help
            you grow and succeed. <br /> We offer a wide range of options to
            meet your needs.
          </p>
          <button className="bg-transparent border-2 border-[#6a483c] text-[#6a483c] py-2 px-6 w-[40%] md:w-[200px]">
            Discover More
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
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        <div className="flex justify-center md:justify-end items-center space-x-4 md:space-x-16">
          <img
            src={legs}
            alt="About Us Image"
            className="w-[90%] md:w-[600px] h-auto object-cover rounded-b-full"
          />
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6a483c] mb-4">
            About Us
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Our platform is dedicated to providing you with the finest services
            and solutions that align with your goals. From personalized options
            to professional expertise, we are here to help you every step of the
            way. Let’s make your journey to success smoother and more
            achievable.
          </p>
        </div>
      </div>

      {/* Treatment Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 my-12">
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6a483c] mb-4">
            Depilim me Laser
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-4 text-left">
            Our platform is dedicated to providing you with the finest services
            and solutions that align with your goals. From personalized options
            to professional expertise, we are here to help you every step of the
            way. Let’s make your journey to success smoother and more
            achievable.
          </p>

          {/* Treatment Cards */}
          <div className="grid grid-cols-3 gap-4 ">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-2 bg-transparent shadow-md hover:shadow-lg transition-shadow border border-[#6a483c] duration-300 h-48">
              <img
                src={legss}
                alt="Face Waxing"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">
                Komplet Trupi
              </h3>
              <p className="text-gray-700 mb-2 text-center">
                A brief description of Treatment 4.
              </p>
              <button className="bg-transparent text-[#6a483c] text-sm">
                Learn More
              </button>
            </div>

            {/* Repeat the same structure for other cards */}
            <div className="flex flex-col items-center p-2 bg-transparent shadow-md hover:shadow-lg transition-shadow border border-[#6a483c] duration-300 h-48">
              <img
                src={legss}
                alt="Body Waxing"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">Fytyren</h3>
              <p className="text-gray-700 mb-2 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <button className="bg-transparent text-[#6a483c] text-sm">
                Learn More
              </button>
            </div>

            <div className="flex flex-col items-center p-2  shadow-md hover:shadow-lg transition-shadow border bg-transparent border-[#6a483c] duration-300 h-48">
              <img
                src={legss}
                alt="Facial Treatment"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">
                Nen Sqetulla
              </h3>
              <p className="text-gray-700 mb-2 text-center">
                A brief description of Treatment 6.
              </p>
              <button className="bg-transparent text-[#6a483c] text-sm">
                Learn More
              </button>
            </div>

            {/* Additional Cards */}
            <div className="flex flex-col items-center p-2  shadow-md hover:shadow-lg transition-shadow border bg-transparent border-[#6a483c] duration-300 h-48">
              <img
                src={legss}
                alt="Massage Therapy"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">Duart</h3>
              <p className="text-gray-700 mb-2 text-center">
                A brief description of Treatment 7.
              </p>
              <button className="bg-transparent text-[#6a483c] text-sm">
                Learn More
              </button>
            </div>

            <div className="flex flex-col items-center p-2 bg-transparent shadow-md hover:shadow-lg transition-shadow border border-[#6a483c] duration-300 h-48">
              <img
                src={legss}
                alt="Hair Treatment"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">Kembet</h3>
              <p className="text-gray-700 mb-2 text-center">
                A brief description of Treatment 8.
              </p>
              <button className="bg-transparent text-[#6a483c] text-sm">
                Learn More
              </button>
            </div>

            <div className="flex flex-col items-center p-2 bg-transparent shadow-md hover:shadow-lg transition-shadow border border-[#6a483c]  duration-300 h-48">
              <img
                src={legss}
                alt="Nail Care"
                className="w-16 h-16 object-contain rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-[#6a483c] mb-1">
                Gjenitale
              </h3>
              <p className="text-gray-700 mb-2 text-center">
                A brief description of Treatment 9.
              </p>
              <button className="bg-transparent text-[#6a483c] text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-[600px] flex justify-center items-center mt-6 md:mt-0">
          <img
            src={heroimage}
            alt="Treatment Image"
            className="w-[60%] md:w-[400px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
