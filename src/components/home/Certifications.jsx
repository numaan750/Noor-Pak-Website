import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certifications = () => {
  return (
    <div className=" text-center Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20">
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5">
        Certifications{" "}
      </h2>
      <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
        Certifications contribute to ensuring that all activities at our factory
        are in accordance with international standards – to protect people and
        the environment and to ensure sound management and business practices.
      </p>

      <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
        All our products are made from more natural, upcycled or recycled
        materials.
      </p>

      <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
        At Norpak, however, we want to go beyond the minimum standards required
        by these certifications. We therefore continuously strive to exceed
        expectations in all areas related to environmental standards as well as
        securing decent working conditions, engagement and involvement of our
        staff and the local community.
      </p>
      <div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12 overflow-x-auto scrollbar-hide">
        <div className="flex flex-row gap-8 min-w-full px-4 sm:px-6 md:px-0 justify-start md:justify-center items-center py-4">
          <div className="flex-shrink-0">
            <Image
              src="/Web-Images/home/logo-1.png"
              alt="Logo 1"
              width={120}
              height={60}
              className="h-[70px] sm:h-[80px] w-auto object-contain"
            />
          </div>

          <div className="flex-shrink-0 relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1.5px] before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent">
            <Image
              src="/Web-Images/home/logo-2.png"
              alt="Logo 2"
              width={120}
              height={60}
              className="h-[70px] sm:h-[80px] w-auto object-contain"
            />
          </div>

          <div className="flex-shrink-0 relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1.5px] before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent">
            <Image
              src="/Web-Images/home/logo-3.png"
              alt="Logo 3"
              width={120}
              height={60}
              className="h-[70px] sm:h-[80px] w-auto object-contain"
            />
          </div>

          <div className="flex-shrink-0 relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1.5px] before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent">
            <Image
              src="/Web-Images/home/logo-4.png"
              alt="Logo 4"
              width={120}
              height={60}
              className="h-[70px] sm:h-[80px] w-auto object-contain"
            />
          </div>

          <div className="flex-shrink-0 relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1.5px] before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent">
            <Image
              src="/Web-Images/home/logo-5.png"
              alt="Logo 5"
              width={120}
              height={60}
              className="h-[70px] sm:h-[80px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/sustainability#Certifications">
        <button className="bg-[#000000] hover:bg-gray-700 text-white text-[16px] md:text-[18px] rounded-xl px-6 py-2.5 transition-colors duration-200 cursor-pointer">
          Read More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Certifications;
