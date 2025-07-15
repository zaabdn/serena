"use client";

import { DATA_PRODUCTS } from "@/constants/content-home";
import Image from "next/image";
import { memo } from "react";

const Product = () => {
  return (
    <section className="mt-5">
      <p className="text-2xl text-text-default-color font-bold">
        Produk Unggulan Kami
      </p>
      <p className="text-text-default-color">
        Kami percaya, rasa lezat dimulai dari bahan yang tepat. Tiga produk
        unggulan kami: battermix, premix, dan breader, dirancang untuk membantu
        Anda menghasilkan sajian berkualitas secara konsisten.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:gap-8 lg:px-20">
        {DATA_PRODUCTS.map((product) => (
          <div
            key={product.title}
            className="flex flex-col items-center bg-white rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-60 md:h-72 lg:h-80 bg-gray-100 flex items-center justify-center">
              <Image
                src={product.image.src}
                alt={product.image.src || `Gambar produk ${product.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                // priority={true} // Consider if these images are critical for initial load
              />
            </div>

            <div className="py-4 text-left">
              <h3 className="text-xl font-bold text-text-default-color mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-text-default-color">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Product);
