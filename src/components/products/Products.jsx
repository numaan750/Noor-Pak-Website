import Image from "next/image";
import React from "react";

const Products = () => {
  const images = [
    {
      src: "/Web-Images/product/product-4.png",
      alt: "Artisan hands weaving",
    },
    {
      src: "/Web-Images/product/product-5.png",
      alt: "Textile bag",
    },
    {
      src: "/Web-Images/home/our-story-4.png",
      alt: "Home textile",
    },
  ];
  return (
    <section className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-20">
      <div className="text-left">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5">
          Products
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-left ">
          At Norpak International, we are passionate about people, the planet
          and sustainable design.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-left ">
          Together we can contribute to a brighter future for all.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-left ">
          Norpak International is a social enterprise that contributes to secure
          and decent employment opportunities to hundreds of artisans, mostly
          female, in Sultan Town, Faisalabad, Pakistan. We design, manufacture
          and sell a broad range of unique, handmade textile and home interior
          products. Our staff’s children also benefit from free, quality
          education at the adjacent LAMS school.
        </p>
      </div>
      <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              From initially specialising in designing and weaving quality rag
              rugs for the Norwegian and Swedish domestic market, our portfolio
              of interior and home textile products today includes rugs, table
              mats, baskets, coasters, pot holders, and totes, using a wide
              range of materials and techniques.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              Our products can be found at a number of fine Scandinavian
              interior retailers, in Norway, Sweden, Finland, Denmark and
              beyond.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              We are also the exclusive manufacturer of{" "}
              <span className="font-bold text-[#AE0000]">
                Bokhari Collection{" "}
              </span>
              products, designed by award-winning Norwegian designer Runa Klock.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              By engaging with like-minded conscious designers and product
              developers, we regularly add products to our portfolio.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0 order-2 md:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/product/products.png"
                alt="Human"
                fill
                className="object-cover rounded-tl-[90px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="w-full order-2 sm:order-1">
          <Image
            src="/Web-Images/product/product-2.png"
            alt="products-1"
            width={400}
            height={300}
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover rounded-bl-[150px]"
          />
        </div>
        <div className="w-full order-1 sm:order-2">
          <Image
            src="/Web-Images/product/products-1.png"
            alt="products-2"
            width={400}
            height={300}
            className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover rounded-tr-[150px]"
          />
        </div>
      </div>
      <div className="text-left pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5">
          Craftsmanship
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-left ">
          At Norpak, we celebrate craftsmanship and the traditions and
          experience our artisans bring with them.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-left ">
          Craftsmen and women have a long and proud history in Pakistan and the
          Sub-Continent. From traditional handknitted carpets and rugs to
          carvings and pottery, their artistic skills deserve to be
          rediscovered. By combining Scandinavian design and this rich tradition
          through our handmade interior products, we wish to recognise the true
          value of craftsmanship.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-left ">
          Our staff bring their experience and know-how, often carried through
          generations, into the making of every product.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-left ">
          With their attention for detail and dedication and love for their
          work, they see to that the products are made to perfection. And
          perfection takes time; this is what makes our products unique.
        </p>
        <p className="text-[16px] md:text-[18px] text-[#000000] leading-relaxed mb-5 text-left ">
          As we invite you to browse our range of products, we hope you will
          join us in appreciating the dedication and hard work put into every
          single product.{" "}
        </p>
      </div>

      <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#000000] mb-5">
              Scandinavian design
            </h2>
            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              At Norpak International, and especially our Bokhari product range,
              is inspired and influenced by rich Scandinavian design traditions.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              Scandinavian design is characterized by a minimal, clean approach
              that seeks to combine functionality with beauty. Its focus is on
              simple lines and light spaces, devoid of clutter.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              These principles extend to all areas of design, from architecture
              to electronics, but it’s most commonly used to describe interior
              design, including furniture, textiles, ceramics, and lighting.
              Typically, there is nothing superfluous about Scandinavian design;
              it strips back the unnecessary, showcasing the essential elements
              of any product.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              The most-used Scandinavian colours are neutral and monochromatic –
              bright, warm whites with black and tan – with pops of colour added
              used as accents. Plush pinks, grey-blues, and colours rooted in
              nature – like sage – are the most popular in Scandinavian design.
            </p>
            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              Organic and natural materials often take pride of place in
              Scandinavian design, reflecting the Scandinavian and Nordic
              countries relationship to nature. Wood, lightened to fit with a
              neutral colour palette, cotton, and wool feature heavily in
              Scandinavian design, as do house plants.
            </p>
            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              This clean but warm theme, alongside the calming nature of a
              large, light-filled space without any clutter, is partly why
              Scandinavian design is so popular.{" "}
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0 order-2 md:order-1">
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[750px] overflow-hidden">
              <Image
                src="/Web-Images/product/Scandinavian-design.png"
                alt="Human"
                fill
                className="object-cover rounded-tr-[90px] rounded-bl-[90px] sm:rounded-tr-[150px] sm:rounded-bl-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              This sort of Nordic minimalism allows people to invite peace into
              their home without creating a space that is uninviting or cold. It
              is full of vitality without being chaotic.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              A guiding principle of Scandinavian design is to establish harmony
              with one’s environment and to create things made to last. It seeks
              to compliment the art of living well by promoting a simple home
              environment that is filled with quality items and enhances an
              unencumbered lifestyle devoid of excess consumerism.
            </p>

            <p className="text-[#000000] text-[16px] md:text-[18px] leading-relaxed mb-5">
              In this way it’s both important for an individual, as a home
              environment that encourages a life well lived is an increasingly
              important counter to the pressures of modern life, and for the
              planet, as it challenges rampant consumerism and deepens our
              connection to nature.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/product/product-3.png"
                alt="Engaged"
                fill
                className="object-cover rounded-tr-[90px] rounded-bl-[90px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-[36px] w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[350px] sm:h-[350px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
