"use client";
import React, { useState } from "react";

const categories = ["All", "Products", "People", "Production", "LAMS School"];

// const contentData = {
//   All: ["Product 01", "People 01", "Production 01", "LAMS 01", "Product 02", "People 02", "Production 02", "Product 03"],
//   Products: ["Product 01", "Product 02", "Product 03", "Product 04"],
//   People: ["People 01", "People 02", "People 03"],
//   Production: ["Production 01", "Production 02"],
//   "LAMS School": ["LAMS 01", "LAMS 02", "LAMS 03"],
// };

const Lookbook = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="text-left">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5">
          Lookbook
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5">
          Take a virtual tour of Norpak, our manufacturing facilities, see our
          products and familiarise yourself with the materials we use to make
          them. Meet some of our dedicated staff and browse our gallery showing
          our extensive range of handmade products made from more sustainable
          materials.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5">
          Click on the below tabs for your preferred category and enjoy
          browsing.
        </p>
      </div>
      <div className="hidden sm:flex gap-2 flex-wrap mb-8 pt-10 sm:pt-12 md:pt-16 lg:pt-20 flex justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-lg cursor-pointer text-[16px] md:text-[18px] transition-all duration-200 ${
              active === cat
                ? "bg-[#000000] text-white"
                : "bg-transparent text-[#000000] hover:bg-[#000000] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="block sm:hidden mb-6 pt-10 sm:pt-12 md:pt-16 lg:pt-20 relative flex items-center">
        <select
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="w-full border border-gray-900 rounded-lg px-3 pr-10 py-2 text-[16px] md:text-[18px] text-black bg-white appearance-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 mb-2 text-black text-[16px]">
          &#8964;
        </span>
      </div>

      {/* Content Grid */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {contentData[active].map((item, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center text-sm text-gray-400 border border-gray-200"
          >
            {item}
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Lookbook;
