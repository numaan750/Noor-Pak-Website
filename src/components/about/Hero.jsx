import Image from "next/image";
import React from "react";

const Hero = () => {
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
          About Us
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
          At Norpak International, we are passionate about people, the planet
          and sustainable design.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
          Together we can contribute to a brighter future for all.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed text-center">
          Norpak International is a social enterprise that contributes to secure
          and decent employment opportunities to hundreds of artisans, mostly
          female, in Sultan Town, Faisalabad, Pakistan. We design, manufacture
          and sell a broad range of unique, handmade textile and home interior
          products. Our staff’s children also benefit from free, quality
          education at the adjacent LAMS school.
        </p>
      </div>
      <div className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5 leading-snug">
              Sustainable
            </h2>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              At Norpak, sustainability isn’t simply a buzz-word we use in
              marketing. To us, being more sustainable means that we make
              conscious decisions daily, and continue to ask ourselves difficult
              questions, in our quest for a more responsible approach to what we
              do.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              Our care for both the planet and people directs and informs all
              our decisions, from product design to production and sales.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              We only use more sustainable materials in the production of all
              our products, and where possible, we use recycled or upcycled
              materials.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/about/Sustainable.png"
                alt="Sustainable"
                fill
                className="object-cover rounded-tr-[90px] rounded-bl-[90px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5 leading-snug">
              Human
            </h2>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              We do not employ people to make our products – we make products to
              employ people.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              With that vision as a guide and driving force in everything we do
              at Norpak, we strive to take a more humane approach to all
              decisions we make – from design, product development, production
              and beyond.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              The conscious choices we make has enabled us to create safe work
              environments, allowing us to engage more women and men, providing
              them with safe and decent employment opportunities.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0 order-2 md:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/about/Human.png"
                alt="Human"
                fill
                className="object-cover rounded-tl-[90px] rounded-br-[90px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5 leading-snug">
              Engaged
            </h2>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              Our commitment and dedication does not end at the gates of our
              factory.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              We wish to contribute to the well-being of our staff, their
              families and the wider local community in Sultan Town. Today and
              in the future.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              That is why we dedicate resources to ensure that all children,
              regardless of social or financial background – or gender – have
              access to free quality education at our LAMS school.
            </p>
            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              Quality education not only is every child’s right, it is also the
              prerequisite for a brighter future. Many of the girls who are
              enrolled at the LAMS school are pioneers, often the first in their
              families who can read and write.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/about/Engaged.png"
                alt="Engaged"
                fill
                className="object-cover rounded-tr-[90px] rounded-bl-[90px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
