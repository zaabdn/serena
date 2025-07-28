"use client";

import image1 from "@/assets/images/tentang-kami/about-us.png";
import image3 from "@/assets/images/tentang-kami/mision.png";
import image2 from "@/assets/images/tentang-kami/vision.png";
import AppLayout from "@/components/layout";
import {
  CONTENT_ABOUT_US,
  DATA_MILESTONES,
  DATA_MISSIONS,
} from "@/constants/content-about-us";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <AppLayout>
      <section className="container mt-5">
        <div className="flex flex-col md:flex-row items-center overflow-hidden">
          <div className="md:w-1/2">
            <Image
              alt="about-us"
              src={image1}
              width={555}
              height={291}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
              className="object-contain rounded-2xl"
            />
          </div>

          <div className="md:pl-6 md:w-1/2">
            <p className="font-bold text-2xl text-text-default-color">
              Tentang Kami
            </p>
            <p
              className="text-justify text-text-default-color mt-2"
              style={{ lineHeight: 2 }}
            >
              {CONTENT_ABOUT_US.description}
            </p>
          </div>
        </div>
      </section>

      <section className="container mt-20">
        <div className="flex flex-col md:flex-row items-center overflow-hidden justify-between">
          <div className="md:w-1/2 md:pr-10">
            <p className="font-bold text-2xl text-text-default-color">Visi</p>
            <p
              className="text-justify text-text-default-color mt-2"
              style={{ lineHeight: 2 }}
            >
              {CONTENT_ABOUT_US.vision}
            </p>
          </div>

          <div className="">
            <Image
              alt="about-us"
              src={image2}
              width={545}
              height={306}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container mt-20">
        <div className="flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2">
            <Image
              alt="about-us"
              src={image3}
              width={555}
              height={291}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
              className="object-contain rounded-2xl"
            />
          </div>

          <div className="lg:pl-6 md:w-1/2">
            <p className="font-bold text-2xl text-text-default-color">Misi</p>
            <p
              className="text-justify text-text-default-color mt-2"
              style={{ lineHeight: 2 }}
            >
              {CONTENT_ABOUT_US.mission}
            </p>
            <div className="container mx-auto pl-5 mt-4">
              <ul className="list-disc space-y-3 leading-relaxed">
                {DATA_MISSIONS.map((mission, index) => (
                  <li key={index}>
                    <p className="text-justify text-text-default-color">
                      {mission}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-20">
        <p className="font-bold text-2xl text-text-default-color">
          Perjalanan Kami
        </p>
        <p
          className="text-justify text-text-default-color mt-2"
          style={{ lineHeight: 2 }}
        >
          {CONTENT_ABOUT_US.milestone}
        </p>

        <div className="relative mt-8 sm:mt-10 md:mt-12">
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#E8DED1]" />

          {DATA_MILESTONES.map((milestone, index) => (
            <div
              key={index}
              className="relative mb-8 sm:mb-10 md:mb-12 flex items-start"
            >
              <div className="relative flex-shrink-0">
                <div className="bg-white lg:ml-5 rounded-full border-2 border-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center ml-2 sm:ml-3 md:ml-4 relative z-10" />
              </div>

              <div className="ml-6 sm:ml-8 md:ml-10 mt-[-2px] sm:mt-[-4px] flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base md:text-lg text-text-default-color mb-1 sm:mb-2">
                  {milestone.year}
                </h3>
                <p className="text-text-secondary-color text-xs md:text-sm text-justify leading-relaxed pr-4 sm:pr-6 md:pr-8">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
};

export default AboutUsPage;
