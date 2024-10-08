import React, { useState } from "react";
import removal from "../assets/removal.jpg";
import location from "../assets/location.svg";
import Swal from "sweetalert2";

const Kontakt: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    html: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    html: "",
  });

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "", html: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{10,15}$/;

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format.";
    }
    if (!formData.html) newErrors.html = "Message is required.";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonColor: "#9A7566", // Match the button color to your theme
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to send your message. Please try again later.",
            icon: "error",
            confirmButtonColor: "#9A7566",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `An error occurred while sending your message. ${error}`,
          icon: "error",
          confirmButtonColor: "#9A7566",
        });
      }
    }
  };

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
        <form className="w-full max-w-3xl" onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[#9A7566] rounded-md p-2 bg-[#FFF7EF]"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#9A7566] rounded-md p-2 bg-[#FFF7EF]"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-[#9A7566] rounded-md p-2 bg-[#FFF7EF]"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
          </div>

          <div className="mb-6">
            <textarea
              name="html"
              rows={4}
              placeholder="Send me a message"
              value={formData.html}
              onChange={handleChange}
              className="w-full border border-[#9A7566] rounded-md p-2 bg-[#FFF7EF]"
            ></textarea>
            {errors.html && <p className="text-red-500">{errors.html}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#9A7566] text-white py-4 px-6 w-full rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
