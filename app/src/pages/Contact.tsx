import React from "react";
import removal from "../assets/removal.jpg";
import location from "../assets/location.svg";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="h-[300px] relative w-screen">
        <img
          src={removal}
          alt="Contact"
          className="w-full opacity-70 h-full object-cover"
        />
        <div className="absolute top-1/2 inset-x-0 text-center transform -translate-y-1/2">
          <h1 className="text-5xl text-black">Contact Us</h1>{" "}
        </div>
      </div>

      <div className="justify-center text-center my-12">
        <h1 className="text-5xl text-[#9A7566] font-semibold">Get In Touch</h1>
        <p className="px-[24%] mt-6 text-[#9A7566]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sit
          aspernatur perferendis nostrum iste non alias ea doloremque, ipsum,
          quae nisi dolores sunt asperiores minus dicta quaerat quod at fugiat.
        </p>
        <div className="flex flex-row text-center justify-center space-x-40 mt-4 font-medium text-[#9A7566]">
          <div className="flex items-center space-x-2">
            <img src={location} alt="Location Icon" className="w-4 h-4" />
            <h1>Jl. Raya Seminyak 36, Badung, Bali</h1>
          </div>
          <h1>+383 23 2323 23 2</h1>
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <form className="w-full max-w-3xl">
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border border-[#9A7566] rounded-md p-2 bg-[#FFF7EF]"
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-[#9A7566] rounded-md p-2 bg-[#FFF7EF]"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border border-[#9A7566] rounded-md p-2 bg-[#FFF7EF] "
              />
            </div>
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              rows={4}
              placeholder="Send me a message"
              className="w-full border border-[#9A7566] rounded-md p-2 bg-[#FFF7EF]"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#9A7566] text-white py-4 px-6 w-full  rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
