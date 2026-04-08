import React from "react";
import Image from "next/image";

const Lookbook = () => {
  return (
    <div className="text-center Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-10 sm:pb-12 md:pb-16 lg:pb-20">
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5">
        Lookbook
      </h2>
      <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
        Browse our Lookbook to see photos from across Norpak, including an
        opportunity to meet some of our staff, see how our products are made and
        explore our extensive range of handmade products made from more
        sustainable materials.
      </p>
      <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-center">
        You even get a chance to take a look at LAMS school, and meet students
        and teachers there.
      </p>
      <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed text-center">
        It's all right here, in the Norpak Lookbook.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shrink-0 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden h-[550px]">
            <Image
              src="/Web-Images/home/lookbook/lookbook-1.png"
              alt="Norpak product handmade"
              width={400}
              height={550}
              className="w-full h-full object-cover rounded-[36px] border border-[#2D3845]"
            />
          </div>
          <div className="overflow-hidden h-[550px]">
            <Image
              src="/Web-Images/home/lookbook/lookbook-2.png"
              alt="Norpak staff member"
              width={400}
              height={550}
              className="w-full h-full object-cover rounded-[36px] border border-[#2D3845]"
            />
          </div>
          <div className="overflow-hidden h-[625px]">
            <Image
              src="/Web-Images/home/lookbook/lookbook-3.png"
              alt="Sustainable materials"
              width={400}
              height={640}
              className="w-full h-full object-cover rounded-[36px] border border-[#2D3845]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden h-[360px]">
            <Image
              src="/Web-Images/home/lookbook/lookbook-4.png"
              alt="Product making process"
              width={400}
              height={360}
              className="w-full h-full object-cover rounded-[36px] border border-[#2D3845]"
            />
          </div>
          <div className="overflow-hidden h-[450px]">
            <Image
              src="/Web-Images/home/lookbook/lookbook-8.png"
              alt="Norpak handmade range"
              width={400}
              height={450}
              className="w-full h-full object-cover rounded-[36px] border border-[#2D3845]"
            />
          </div>
          <div className="overflow-hidden h-[450px]">
            <Image
              src="/Web-Images/home/lookbook/lookbook-6.png"
              alt="LAMS school students"
              width={400}
              height={450}
              className="w-full h-full object-cover rounded-[36px] border border-[#2D3845]"
            />
          </div>
          <div className="overflow-hidden h-[450px]">
            <Image
              src="/Web-Images/home/lookbook/lookbook-7.png"
              alt="LAMS school teachers"
              width={400}
              height={450}
              className="w-full h-full object-cover rounded-[36px] border border-[#2D3845]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden h-[580px]">
            <Image
              src="/Web-Images/home/lookbook/lookbook-5.png"
              alt="Norpak factory view"
              width={400}
              height={580}
              className="w-full h-full object-cover rounded-[36px] border border-[#2D3845]"
            />
          </div>
          <div className="overflow-hidden h-[550px]">
            <Image
              src="/Web-Images/home/lookbook/lookbook-9.png"
              alt="Eco friendly packaging"
              width={400}
              height={550}
              className="w-full h-full object-cover rounded-[36px] border border-[#2D3845]"
            />
          </div>
          <div className="overflow-hidden h-[595px]">
            <Image
              src="/Web-Images/home/lookbook/lookbook-10.png"
              alt="Norpak complete product range"
              width={400}
              height={600}
              className="w-full h-full object-cover rounded-[36px] border border-[#2D3845]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
