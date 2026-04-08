"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="Mycontainer grid md:grid-cols-2 bg-black">
      <div className="order-2 md:order-1 px-5 sm:px-5 md:px-10 lg:px-10 py-10 md:pt-10 lg:pt-10 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-[#FFFFFF1A] text-white placeholder-[#FFFFFFB2] rounded-xl px-5 py-4 text-[14px] md:text-[16px] outline-none focus:ring-2 focus:ring-[#2D3845] transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-[#FFFFFF1A] text-white placeholder-[#FFFFFFB2] rounded-xl px-5 py-4 text-[14px] md:text-[16px] outline-none focus:ring-2 focus:ring-[#2D3845] transition-all"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-[#FFFFFF1A] text-white placeholder-[#FFFFFFB2] rounded-xl px-5 py-4 text-[14px] md:text-[16px] outline-none focus:ring-2 focus:ring-[#2D3845] transition-all"
        />
        <input
          type="text"
          name="company"
          placeholder="Your Company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-[#FFFFFF1A] text-white placeholder-[#FFFFFFB2] rounded-xl px-5 py-4 text-[14px] md:text-[16px] outline-none focus:ring-2 focus:ring-[#2D3845] transition-all"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full bg-[#FFFFFF1A] text-white placeholder-[#FFFFFFB2] rounded-xl px-5 py-4 text-[14px] md:text-[16px] outline-none focus:ring-2 focus:ring-[#2D3845] transition-all resize-none"
        />
        <button
          type="submit"
          className="bg-white rounded-xl font-normal px-8 py-3 text-black w-full text-[16px] md:text-[18px]"
        >
          Send Message
        </button>
      </div>
      <div className="order-1 md:order-2 pl-5 sm-pl-0 pt-10 pr-5  flex flex-col justify-center pr-0 md:pr-10">
        <h2 className="text-[28px] md:text-[32px] font-bold mb-5 md:mb-7 leading-tight text-white">
          Contact Us
        </h2>
        <p className="text-[#EBEBEB] mb-4 leading-relaxed text-[16px] md:text-[18px]">
          Want to learn more about Norpak International and our products?
          Discover our story and explore our sustainable, thoughtfully crafted
          designs.{" "}
        </p>
        <div className="space-y-4 md:space-y-5">
          <p className="text-[#EBEBEB] leading-relaxed text-[16px] md:text-[18px]">
            Keen on joining our team of dedicated professionals?
          </p>
          <p className="text-[#EBEBEB] text-[16px] md:text-[18px]">
            We'd love to hear from you.
          </p>
          <p className="text-[#EBEBEB] text-[16px] md:text-[18px] break-all">
            Drop us a line at{" "}
            <span className="font-bold text-white">info@norpak.pk</span> or by
            completing the below form:
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
