import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-12 md:pt-16 mt-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10">
          <div>
            <div className="mb-4">
              <Image
                src="/Web-Images/NORPAK-LOGO.png"
                width={120}
                height={40}
                alt="Logo"
                className="object-contain w-28"
              />
            </div>
            <p className="text-[15px] md:text-[16px] text-white leading-relaxed max-w-[220px]">
              Promoting sustainable textiles through ethical craftsmanship while
              empowering artisans and preserving traditional techniques
            </p>
          </div>
          <div>
            <h4 className="text-[18px] md:text-[20px] font-bold mb-4 md:mb-5 md:ml-15">
              Sitemap
            </h4>
            <ul className="flex flex-col gap-3 md:ml-15">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Lookbook", href: "/lookbook" },
                { name: "Certification", href: "/sustainability" },
                { name: "Contact Us", href: "/#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] md:text-[16px] text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] md:text-[20px] font-bold mb-4 md:mb-5">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Image
                  src="/Web-Images/location.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="cursor-pointer mt-1 shrink-0"
                />
                <span className="text-[14px] md:text-[16px] max-w-[200px] text-white leading-relaxed">
                  Off Narwala Road, Sultan Town, 38000 Faisalabad, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/Web-Images/mail-2.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="cursor-pointer shrink-0"
                />
                <a
                  href="mailto:info@norpak.pk"
                  className="text-[14px] md:text-[15px] text-white hover:text-gray-300 transition-colors break-all"
                >
                  info@norpak.pk
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/Web-Images/phone.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="cursor-pointer shrink-0"
                />
                <span className="text-[14px] md:text-[15px] text-white">
                  +92 (0) 41 269 1635
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-[18px] md:text-[20px] font-bold mb-4 md:mb-5">
              Social Links
            </h4>
            <div className="flex gap-4 mb-8 flex-wrap">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Image
                  src="/Web-Images/linkedin.svg"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className="cursor-pointer"
                />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Image
                  src="/Web-Images/insta.svg"
                  alt="Instagram"
                  width={22}
                  height={22}
                  className="cursor-pointer"
                />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Image
                  src="/Web-Images/youtube.svg"
                  alt="YouTube"
                  width={22}
                  height={22}
                  className="cursor-pointer"
                />
              </a>
            </div>

            <h4 className="text-[14px] md:text-[15px] font-semibold mb-3">
              News letter
            </h4>
            <div className="flex items-center border-b border-[#FFFFFF33] pb-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border-none outline-none text-gray-400 text-[13px] flex-1 placeholder-gray-500 min-w-0"
              />
              <Image
                src="/Web-Images/mail.svg"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer shrink-0 ml-2"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-[#FFFFFF33] py-5 text-center">
          <p className="text-[13px] md:text-sm text-white">
            Copyright 2019 - 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
