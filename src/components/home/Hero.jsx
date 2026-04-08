import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
        <Image
          src="/Web-Images/home/Home-Hero-imag.png"
          alt="Artisan weaving textiles"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center">
          {" "}
          <div className="w-full md:w-1/2">
            <h2 className="text-[18px] md:text-[20px] font-bold text-[#000000] mb-5">
              Inspired by Scandinavian design & traditional Pakistani
              artisanship, we bring you home interior and textile products for a
              more conscious way of living.
            </h2>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-4">
              We are a social enterprise based in Sultan Town, Faisalabad,
              Pakistan. With more than 30 years of experience, we design,
              develop and manufacture exclusive, handmade interior home products
              from more sustainable materials.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-4">
              We strive to be a force for good – for the planet and its people.
              At the core of our values, lies the quest for a more responsible
              and sustainable approach to design and production.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-8">
              Norpak not only secures decent employment to artisans; we also
              provide free, quality education to children and adolescents at the
              LAMS school.
            </p>
            <Link href="/about">
              <button className="bg-[#000000] hover:bg-gray-700 text-white text-[16px] md:text-[18px] rounded-xl px-6 py-2.5 transition-colors duration-200 cursor-pointer">
                About Us
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/home/Inspired-by-Scandinavian-design-traditional-Pakistani.png"
                alt="Sustainable"
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
