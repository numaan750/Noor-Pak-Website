import Image from "next/image";
import React from "react";

const Certifications = () => {
  return (
    <section id="Certifications" className="Mycontainer">
      <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5 leading-snug">
              Certifications
            </h2>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              International certifications contribute to ensuring that all
              activities at our factory are carried our in accordance with or
              better than international standards – to protect people and the
              environment.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              At Norpak, however, we want to go beyond these minimum standards.
              We continuously strive to exceed expectations, and will leave no
              stone unturned to find more sustainable ways to design, develop
              and make our products.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0 order-2 md:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/sustainability/Certifications.png"
                alt="Certifications"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-left pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5">
          Our Current Internationally Recognised Certifications Include:
        </h2>
        <ul className="text-[14px] sm:text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-left list-disc pl-5 space-y-2">
          <li>ISO 9001:2015: Quality management systems.</li>
          <li>ISO 14001:2015: Environmental management systems.</li>
          <li>
            GRS – Global Recycled Standard: Tracking and verifying the content
            of recycled materials in a final product, and to verify responsible
          </li>
          <li>
            Social, environmental and chemical practices in its production
          </li>
          <li>
            Sedex SMETA - Sedex Members Ethical Trade Audit: Labour standards,
            health & safety, environment and business ethics.
          </li>
          <li>
            Oeko-Tex: Certifies non-hazardous end-products and all of their
            components.
          </li>
          <li>
            FSC - Forest Stewardship Council: Ensuring that all paper and wood
            products come from responsibly managed forests that provide
            environmental, social and economic benefits.{" "}
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="w-full order-2 sm:order-1">
          <Image
            src="/Web-Images/sustainability/Sustainability-1.png"
            alt="products-1"
            width={400}
            height={300}
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover rounded-bl-[150px]"
          />
        </div>
        <div className="w-full order-1 sm:order-2">
          <Image
            src="/Web-Images/sustainability/Sustainability-2.png"
            alt="products-2"
            width={400}
            height={300}
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover rounded-tr-[150px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
