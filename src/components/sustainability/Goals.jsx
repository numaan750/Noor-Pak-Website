import Image from "next/image";
import React from "react";

const Goals = () => {
  return (
    <section className="Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="text-left">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5">
          UN Sustainable Development Goals
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-left ">
          Norpak is guided and inspired by the 17 UN Sustainable Development
          Goals (SDGs), the world’s joint work plan for eradicating poverty, end
          inequality and stop climate change by 2030. Through being responsible
          in all our business practices, we contribute directly to the
          achievement of several of these goals. We contribute indirectly to
          many more.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-left ">
          See below for more details on our contribution to individual
          goals:{" "}
        </p>
      </div>
      <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5 leading-snug">
              4 - Quality Education
            </h2>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              At Norpak International, we strongly believe that all children,
              regardless of social or economic background, or gender, are
              entitled to free quality education. In lieu of the government
              providing this service to all its citizens, we built the LAMS
              school in 1996, providing the children of our staff free, quality
              schooling from ages 4 to 18. Thousands of children have since been
              enrolled at the school. With the continued support from Norpak
              International, graduating students who wish to continue their
              studies at university-level are offered scholarships.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              LAMS enrols today nearly 1000 students, mostly girls. By offering
              quality education, we are also contributing to building a brighter
              future.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              Read more about LAMS at
              <a
                href="www.lams.no/en/"
                className="text-blue-500 hover:text-blue-600"
              >
                {" "}
                www.lams.no/en/
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0 order-2 md:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/sustainability/4-Quality-Education.png"
                alt="4-Quality-Education"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5 leading-snug">
              5 - Gender Equality
            </h2>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              At Norpak International, we strongly believe that all children,
              regardless of social or economic background, or gender, are
              entitled to free quality education. In lieu of the government
              providing this service to all its citizens, we built the LAMS
              school in 1996, providing the children of our staff free, quality
              schooling from ages 4 to 18. Thousands of children have since been
              enrolled at the school. With the continued support from Norpak
              International, graduating students who wish to continue their
              studies at university-level are offered scholarships.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              LAMS enrols today nearly 1000 students, mostly girls. By offering
              quality education, we are also contributing to building a brighter
              future.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              Read more about LAMS at
              <a
                href="www.lams.no/en/"
                className="text-blue-500 hover:text-blue-600"
              >
                {" "}
                www.lams.no/en/
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/sustainability/5-Gender-Equality.png"
                alt="5-Gender-Equality"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5 leading-snug">
              8 - Decent Work & Economic Growth
            </h2>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              Access to safe and decent work is one of the keys to ensuring
              women and men a sustainable future. Despite this, too many people
              work in unsafe and unacceptable conditions, including in Pakistan.
              Therefore, we pay particular attention to ensure that all our
              staff are provided safe and secure working conditions, and decent
              employment benefits. With its plants and trees, the factory is
              already a green oasis in the otherwise impoverished Sultan Town,
              but it’s also an oasis of workers’ rights where female and male
              staff are provided equal opportunities to engage and take on
              responsibilities. All our staff are provided with formal
              contracts, social insurance, access to parental leave and pension
              benefits, to name a few. We work tirelessly to further improve
              working conditions, including health, safety and environmental
              issues.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0 order-2 md:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/sustainability/8-Decent-Work-Economic-Growth.png"
                alt="8-Decent-Work-Economic-Growth"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5 leading-snug">
              12 - Responsible Consumption & Production
            </h2>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed">
              As a social enterprise, we believe it is our responsibility and
              duty – and privilege – to contribute in every way possible by
              being a force of good – for the environment and for people. We
              have made conscious choices to only work with more sustainable
              materials that are less harmful to nature. Thta means we always
              choose natural materials, upcycled or recycled to make our
              products. By making quality products that last, we also hope to
              contribute to consumers making more conscious choices. Because a
              product is always more than just a product. A product from Norpak
              also contributes to a better future. In line with our commitment
              to responsible production and the environment, we have installed
              solar panels at Norpak and the LAMS school. These provide us with
              renewable, clean energy and any surplus energy generated is
              transferred back into the public grid.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/sustainability/12-Responsible-Consumption-Production.png"
                alt="12-Responsible-Consumption-Production"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
