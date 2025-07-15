import { DATA_VALUES } from "@/constants/content-home";
import Image from "next/image";
import { memo } from "react";

const Value = () => {
  return (
    <section className="mt-5">
      <p className="text-2xl text-text-default-color font-bold">
        Nilai-Nilai Kami
      </p>
      <p className="text-text-default-color">
        Di Serena Indo Pratama, kami memegang teguh empat nilai utama yang
        menjadi landasan setiap langkah kami
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-24 gap-y-6 py-5">
        {DATA_VALUES.map((value) => (
          <div
            key={value.title}
            className="flex flex-col sm:flex-row items-start sm:items-center rounded-lg"
          >
            <div className="bg-primary-color rounded-xl p-4 flex-shrink-0 mb-4 sm:mb-0">
              <div className="relative w-20 h-20">
                <Image
                  src={value.image.src}
                  alt={value.image.src || `Icon for ${value.title}`}
                  fill
                  sizes="64px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="ml-0 sm:ml-4 flex-grow">
              <h2 className="text-xl md:text-2xl font-bold text-text-default-color mb-2">
                {value.title}
              </h2>
              <p className="text-sm md:text-base text-text-default-color text-justify">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Value);
