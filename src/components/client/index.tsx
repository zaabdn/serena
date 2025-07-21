"use client";

import { DATA_CLIENTS } from "@/constants/content-home";
import { Plus } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

const Client = () => {
  return (
    <section className="mt-5">
      <p className="text-2xl text-text-default-color font-bold">
        Kepercayaan Mereka, Kebanggaan Kami
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-items-center items-center py-5">
        {DATA_CLIENTS.map((client) => (
          <div
            key={client.id}
            className="relative w-full max-w-[500px] h-24 sm:h-28 md:h-32 flex items-center justify-center"
          >
            <Image
              src={client.image.src}
              alt={client.image.src || `Client logo ${client.id}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
              className="object-contain"
            />
          </div>
        ))}
        <div className="flex flex-row items-center justify-center md:-ml-10">
          <Plus color="black" />
          <Plus color="black" className="-ml-1" />
          <h2 className="text-lg md:text-2xl text-text-default-color font-bold">
            UMKM Lainnya
          </h2>
        </div>
      </div>
    </section>
  );
};

export default memo(Client);
