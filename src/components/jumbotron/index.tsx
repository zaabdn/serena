import { memo } from "react";

const Jumbotron = () => {
  return (
    <section className="bg-center mt-5 rounded-2xl bg-cover bg-[url('/serena/banner.jpg')] bg-gray-400 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1
          className="font-[family-name:var(--font-libre-baskerville)] mb-4 text-lg md:text-2xl md:px-24 font-extrabold text-white"
          style={{ lineHeight: 1.4 }}
        >
          Dari Lapisan Ke Kerenyahan, Inovasi Serena di Balik Setiap Gorengan
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Berkomitmen selama lebih dari 15 tahun memberikan solusi bumbu dan
          pelapis berkualitas untuk kelezatan setiap sajian nusantara.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="https://wa.me/085157111522"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-text-default-color rounded-lg bg-primary-color focus:ring-4"
          >
            Lihat Produk Kita
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Jumbotron);
