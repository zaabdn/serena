"use client";

import AppLayout from "@/components/layout";
import { CONTENT_PROCESS, LIST_PROCESS } from "@/constants/content-process";
import DOMPurify from "dompurify";

import Image from "next/image";

const ProcessPage = () => {
  const urlSertifikatISO = "/serena/SertifikatSerena.pdf" as const;
  const urlSertifikatHalal = "/serena/SertifikatHalal.pdf" as const;
  const urlSertifikatCPPOB = "/serena/SertifikatCPPOB.pdf" as const;

  const browserNotSupport =
    "This browser does not support PDFs. Please download the PDF to view it:" as const;

  return (
    <AppLayout>
      <section className="container mt-5">
        <div className="flex flex-col overflow-hidden">
          <p className="font-bold text-2xl text-text-default-color">
            {CONTENT_PROCESS.title}
          </p>
          <div
            className="text-justify text-text-default-color mt-5"
            style={{ lineHeight: 2 }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(CONTENT_PROCESS.description),
            }}
          />
        </div>
      </section>

      <section className="container mt-10">
        {LIST_PROCESS.map((process) => (
          <div
            className="mx-auto bg-[#FFF9F4] rounded-lg mt-6 flex flex-col md:flex-row justify-between"
            key={process.id}
          >
            <div className="md:w-3/4 p-6">
              <h2 className="text-lg font-bold text-text-default-color mb-4">
                {process.title}
              </h2>

              <div className="mb-6">
                <p className="text-text-secondary-color text-justify leading-relaxed text-xs">
                  {process.description}
                </p>
              </div>
            </div>
            <Image
              alt={`process-${process.id}`}
              src={process.image}
              width={245}
              height={199}
              className="object-contain w-full md:w-auto md:max-w-[245px]"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 25vw"
            />
          </div>
        ))}
      </section>

      <section className="container mt-10">
        <h2 className="text-lg font-bold text-text-default-color mb-4">
          Surat Ijin Legalitas ISO
        </h2>
        <div className="w-full h-[50vh] md:h-[100vh] bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src={urlSertifikatISO}
            title="Embedded PDF"
            className="w-full h-full border-none"
            allowFullScreen
          >
            {browserNotSupport}
          </iframe>
        </div>

        <h2 className="text-lg font-bold text-text-default-color mb-4 mt-12">
          Sertifikat Halal
        </h2>
        <div className="w-full h-[50vh] md:h-[100vh] bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src={urlSertifikatHalal}
            title="Embedded PDF"
            className="w-full h-full border-none"
            allowFullScreen
          >
            {browserNotSupport}
          </iframe>
        </div>

        <h2 className="text-lg font-bold text-text-default-color mb-4 mt-12">
          Sertifikat CPPOB
        </h2>
        <div className="w-full h-[50vh] md:h-[100vh] bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src={urlSertifikatCPPOB}
            title="Embedded PDF"
            className="w-full h-full border-none"
            allowFullScreen
          >
            {browserNotSupport}
          </iframe>
        </div>
      </section>
    </AppLayout>
  );
};

export default ProcessPage;
