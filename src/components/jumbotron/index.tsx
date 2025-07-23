import Link from "next/link";
import { memo } from "react";

const Jumbotron = () => {
  return (
    <section className="bg-center bg-cover mt-5 rounded-2xl bg-[url('/serena/banner.png')] bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1
          className="font-[family-name:var(--font-libre-baskerville)] mb-4 text-lg md:text-2xl md:px-24 font-extrabold text-white"
          style={{ lineHeight: 1.4 }}
        >
          Dari Lapisan Ke Kerenyahan, Inovasi Serena di Balik Setiap Gorengan
        </h1>
        <p className="mb-8 font-normal text-gray-300 lg:text-lg sm:px-16 lg:px-32">
          Berkomitmen selama lebih dari 15 tahun memberikan solusi bumbu dan
          pelapis berkualitas untuk kelezatan setiap sajian nusantara.
        </p>
        <div className="flex w-1/2 md:w-auto mx-auto flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            href="/produk"
            className="inline-flex justify-center items-center py-3 px-5 text-xs font-medium text-center text-text-default-color rounded-lg bg-primary-color focus:ring-4"
          >
            Lihat Produk Kami
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Jumbotron);
