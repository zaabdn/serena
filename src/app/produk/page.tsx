"use client";

import image1 from "@/assets/images/produk/image1.png";
import AppLayout from "@/components/layout";

import {
  DATA_IMAGE_PRODUCTS,
  LIST_PRODUCTS,
} from "@/constants/content-product";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ProductPage = () => {
  const [isExpanded, setIsExpanded] = useState(LIST_PRODUCTS.map(() => false));

  return (
    <AppLayout>
      <section className="container mt-5">
        <div className="flex flex-col md:flex-row items-center overflow-hidden justify-between">
          <div className="md:w-2/3 md:pr-10">
            <p className="font-bold text-4xl text-text-default-color">
              Solusi Food Coating Berkualitas untuk Industri Pangan
            </p>
            <p
              className="text-justify text-text-default-color text-xl mt-5"
              style={{ lineHeight: 2 }}
            >
              Di Serena Indo Pratama, kami percaya bahwa kualitas sajian dimulai
              dari lapisan luar yang sempurna. Karena itu, kami menghadirkan
              produk food coating yang diformulasikan untuk menghasilkan tekstur
              renyah, rasa lezat, dan tampilan menarik, cocok digunakan oleh
              industri makanan, restoran, hingga pelaku UMKM.
            </p>
          </div>

          <div className="md:-mt-5">
            <Image
              alt="about-us"
              src={image1}
              width={545}
              height={306}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {DATA_IMAGE_PRODUCTS.map((item) => (
            <Image
              key={item.id}
              alt={`image-${item.id}`}
              src={item.image}
              width={372}
              height={209}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 33vw"
              className="object-contain rounded-2xl w-full h-auto"
            />
          ))}
        </div>
      </section>

      <section className="container mt-10">
        {LIST_PRODUCTS.map((product, idx) => (
          <div
            className="mx-auto p-6 bg-[#FFF9F4] rounded-lg mt-6"
            key={product.id}
          >
            <h2 className="text-2xl font-bold text-text-default-color mb-4">
              {product.title}
            </h2>

            <div className="mb-6">
              <p className="text-text-default-color leading-relaxed">
                <div
                  className="text-text-default-color leading-relaxed space-y-2 mt-2"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
                {product.description2 && isExpanded[idx] && (
                  <div
                    className="text-text-default-color leading-relaxed space-y-2 mt-2"
                    dangerouslySetInnerHTML={{ __html: product.description2 }}
                  />
                )}
              </p>
            </div>

            {product.description2 && (
              <button
                onClick={() =>
                  setIsExpanded((prev) => ({
                    ...prev,
                    [idx]: !isExpanded[idx],
                  }))
                }
                className="inline-flex items-center px-4 py-2 bg-orange-200 hover:bg-orange-300 text-orange-800 font-medium rounded-full transition-colors duration-200"
              >
                <span className="mr-2">
                  {isExpanded[idx] ? "Sembunyikan" : "Selengkapnya"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 mt-1 transition-transform duration-200 ${
                    isExpanded[idx] ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>
        ))}
      </section>
    </AppLayout>
  );
};

export default ProductPage;
