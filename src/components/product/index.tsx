"use client";

import { DATA_PRODUCTS } from "@/constants/content-home";
import Image from "next/image";
import { memo } from "react";

const Product = () => {
  return (
    <section className="mt-5">
      <p className="font-bold text-2xl text-text-default-color">
        Produk Unggulan Kami
      </p>
      <p className="text-text-default-color text-justify">
        Kami percaya, rasa lezat dimulai dari bahan yang tepat. Tiga produk
        unggulan kami: battermix, premix, dan breader, dirancang untuk membantu
        Anda menghasilkan sajian berkualitas secara konsisten.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 mt-5 md:gap-4">
        {DATA_PRODUCTS.map((product) => (
          <div
            key={product.title}
            className="flex flex-col items-center bg-white rounded-lg overflow-hidden"
          >
            <div className="relative w-full rounded h-60 md:h-52 lg:h-48 bg-gray-100 flex items-center justify-center">
              <Image
                src={product.image.src}
                alt={product.image.src || `Gambar produk ${product.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover", borderRadius: 8 }}
                // priority={true} // Consider if these images are critical for initial load
              />
            </div>

            <div className="py-4 text-left">
              <h3 className="text-xl font-bold text-text-default-color mb-2">
                {product.title}
              </h3>
              <p className="text-xs text-text-secondary-color text-justify">
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
