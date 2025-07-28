import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { memo } from "react";

const FooterHero = () => {
  return (
    <footer className="relative w-full mt-5 mx-0">
      {/* Background Image */}
      <div className="relative h-[400px] lg:h-[450px] xl:h-[500px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40">
        <Image
          src="/serena/footer.jpg"
          alt="Serena team meeting"
          fill
          className="object-cover absolute bottom-0"
        />

        <Image
          src="/serena/gradient.png"
          alt="gradient"
          fill
          className="object-cover absolute bottom-0"
        />
        {/* <div className="absolute inset-0 bg-black bg-blend-multiply opacity-10" /> */}

        <div className="absolute inset-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col justify-between text-white">
          {/* Main Heading */}
          <div className="flex-1 flex items-center justify-center">
            <h1
              style={{ lineHeight: 1.4 }}
              className="w-full sm:w-5/6 md:w-4/5 lg:w-3/4 text-lg md:text-xl lg:text-3xl font-extrabold text-center mx-auto text-white font-[family-name:var(--font-libre-baskerville)]"
            >
              Wujudkan gorengan terbaik dengan kualitas coating dari Serena
            </h1>
          </div>

          {/* Bottom Contact Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-8 mt-auto">
            {/* Company Info */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <Image
                src={logo}
                alt="Logo Serena"
                width={100}
                height={42}
                className="sm:w-[110px] sm:h-[46px] md:w-[120px] md:h-[50px] my-3 md:my-4"
              />
              <div className="text-xs sm:text-sm leading-relaxed">
                <p>
                  Jl. Kranggan Lembur No. 18, Jatiranggga,
                  <br />
                  Kec. Jati Sampurna, Kota Bekasi,
                  <br />
                  Jawa Barat 17434
                </p>
                <p className="mt-2">
                  Telepon: (021) 2867 1233
                  <br />
                  Faksimile: (021) 2281 3645
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
              <p
                className="text-sm sm:text-base mb-3 md:mb-4"
                style={{ textShadow: "3px 3px 9px rgba(0, 0, 0, 0.6)" }}
              >
                Yuk, ngobrol dengan tim Serena sekarang
              </p>

              <a href="https://wa.me/6285353114285" target="_blank">
                <button className="bg-primary-color cursor-pointer text-sm text-black px-4 py-2 sm:px-5 md:px-6 rounded-xl hover:bg-primary-color-hover transition-colors duration-200">
                  Hubungi Kami
                </button>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-gray-300 text-center mt-4 sm:mt-6 pt-4 sm:pt-6">
            © 2025 Serena. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(FooterHero);
