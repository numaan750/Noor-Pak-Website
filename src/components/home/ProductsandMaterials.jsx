import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsandMaterials = () => {
  return (
    <div className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="relative w-full h-[300px] sm:h-[450px] md:h-[560px] overflow-hidden">
            <Image
              src="/Web-Images/product/products.png"
              alt="Human"
              fill
              className="object-cover rounded-tl-[90px]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5 leading-snug">
            Products & Materials
          </h2>

          <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-4">
            Our wide range of designs & products continuously evolves and
            includes rugs, yoga mats, bed throws, cushion covers, baskets, table
            mats, runners, potholders, tote bags, aprons & drawstring bags, to
            name a few.
          </p>

          <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-4">
            Inspired by modern Scandinavian design & Pakistani traditional
            artisanship, we strive to ensure that our design, product
            development & production is carried out in the most responsible &
            sustainable way possible. That means caring for the environment,
            using only upcycled, recycled or natural materials, and caring for
            our staff & their families.
          </p>

          <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-8">
            All our handmade products are made from upcycled, recycled & natural
            materials – they are therefore all unique & better for the
            environment.
          </p>
          <Link href="/products">
            <button className="bg-[#000000] hover:bg-gray-700 text-white text-[16px] md:text-[18px] rounded-xl px-6 py-2.5 transition-colors duration-200 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className=" text-center pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5">
          Responsible & Sustainabletracking-wide
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
          In everything we do, we have chosen a more conscious approach to
          sustainable design, production and overall more responsible business
          practices. Sustainability is in our DNA, and we strive to ensure that
          all product development and production is carried out in an
          environmentally sustainable, responsible and socially conscious
          manner.
        </p>

        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center max-w-full">
          Guided and inspired by the 17 UN Sustainable Development Goals, the
          world’s joint work plan for eradicating poverty, end inequality and
          stop climate change by 2030, our contribution to a more sustainable
          future extends beyond the minimum requirements.
        </p>

        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center max-w-full">
          We remain unapologetic in our continued efforts to contribute to real
          impact, in all dimensions: economic, social and environmental.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="w-full order-2 sm:order-1">
            <Image
              src="/Web-Images/home/Responsible-Sustainabletracking-wide.png"
              alt="Responsible-Sustainabletracking-wide"
              width={400}
              height={300}
              className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover rounded-bl-[150px]"
            />
          </div>
          <div className="w-full order-1 sm:order-2">
            <Image
              src="/Web-Images/home/Responsible-Sustainabletracking-wide-2.png"
              alt="Responsible-Sustainabletracking-wide-2"
              width={400}
              height={300}
              className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover rounded-tr-[150px]"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/sustainability">
            <button className="bg-[#000000] hover:bg-gray-700 text-white text-[16px] md:text-[18px] rounded-xl px-6 py-2.5 transition-colors duration-200 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsandMaterials;
