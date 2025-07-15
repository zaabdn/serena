import { DATA_BENEFITS } from "@/constants/content-home";
import Image from "next/image";
import { memo } from "react";

const WhyChooseUs = () => {
  return (
    <section className="mt-5">
      <p className="text-2xl text-text-default-color font-bold">
        Kenapa Memilih Serena?
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-4">
        {DATA_BENEFITS.map((benefit, index) => (
          <div
            key={index}
            className="border border-[#f89c13] rounded-lg p-5 hover:shadow-md transition duration-300 bg-white"
          >
            <div className="w-30 h-30 flex items-center justify-center bg-orange-400 rounded-full mb-4">
              <Image
                src={benefit.image}
                alt={benefit.title}
                width={index === 3 ? 120 : 80}
                height={index === 3 ? 120 : 80}
              />
            </div>
            <h3 className="font-bold text-lg mb-2 text-text-default-color">
              {benefit.title}
            </h3>
            <p className="text-sm text-gray-600 text-justify">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(WhyChooseUs);
