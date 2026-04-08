import Image from "next/image";
import React from "react";

const Careers = () => {
  return (
    <section>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
        <Image
          src="/Web-Images/about/about-hero-imag.png"
          alt="Artisan weaving textiles"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="text-center Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5">
          Careers
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#000000] font-bold leading-relaxed mb-5 text-center">
          Looking to make a real difference for people and the planet?
          <br />
          Want to build a career with potential for global impact?
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
          Together we can contribute to a brighter future for all.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
          International is a social enterprise based in Sultan Town, Faisalabad,
          with more than 30 years of experience in responsible and sustainable
          production of handmade home interior products and textiles for export
          and domestic sales.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
          Our professional team of motivated and ambitious staff is growing, so
          if you’re ready to take on a challenge and are passionate about what
          you do, we’d like to hear from you.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
          Norpak International celebrates diversity and especially encourages
          qualified female candidates and persons with disabilities to apply.
        </p>

        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
          Explore the below vacancies or drop us a line at
          <span className="font-bold"> careers@norpak.pk </span>
        </p>
      </div>

      <div className="text-center Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <h2 className="text-[32px] font-bold text-[#000000] mb-5">
          Current Vacancies
        </h2>
        <p className=" text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
          We currently have the following vacancies at Norpak International.
          <br />
          Click on the below links for full job descriptions and requirements to
          apply.
          <br />
          For any specific questions about these vacancies, please write to
          careers@norpak.pk
          <br />
          Note that applications without a supporting letter of motivation may
          not be considered. Only shortlisted candidates will be contacted.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#AE0000] font-bold leading-relaxed text-center">
          Sales & Marketing Manager
          <br />
          Human Resources Officer
          <br />
          Communications Officer (Corporate & Marketing)
        </p>

        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <button className="bg-[#000000] hover:bg-gray-700 text-white text-[16px] md:text-[18px] rounded-xl px-6 py-2.5 transition-colors duration-200 cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
