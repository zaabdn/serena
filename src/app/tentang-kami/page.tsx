"use client";

import image1 from "@/assets/images/tentang-kami/about-us.png";
import image3 from "@/assets/images/tentang-kami/mision.png";
import image2 from "@/assets/images/tentang-kami/vision.png";
import AppLayout from "@/components/layout";
import Image from "next/image";

const AboutUsPage = () => {
  const missions = [
    "Menyediakan produk pangan yang halal dan berkualitas dengan harga kompetitif agar dapat dijangkau berbagai lapisan masyarakat.",
    "Menjaga kualitas secara konsisten serta terus berinovasi mengikuti perkembangan teknologi dalam proses produksi.",
    "Memberikan pelayanan terbaik kepada pelanggan dan mitra bisnis demi menciptakan hubungan yang saling menguntungkan.",
    "Menjadi mitra kerja yang andal dalam membantu memenuhi kebutuhan pelanggan secara tepat dan profesional.",
  ];

  const milestones = [
    {
      year: "2008",
      description:
        "Kami berdiri dengan nama Jakarta Food Coating, memulai perjalanan di industri pangan dengan fokus pada produksi bread crumb sebagai produk utama kami.",
    },
    {
      year: "2017",
      description:
        "Kami berevolusi menjadi PT Anugrah Pangan Selaras dan memperluas lini produk, mencakup predust, batter mix, batter breader, breader, dan marinade.",
    },
    {
      year: "2023",
      description:
        "Dengan semangat inovasi, kami menambah variasi produk menjadi lebih lengkap, termasuk premix, untuk menjawab kebutuhan industri yang terus berkembang.",
    },
  ];

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
            <p className="font-bold text-4xl text-text-default-color">
              Tantang Kami
            </p>
            <p
              className="text-justify text-text-default-color text-xl mt-5"
              style={{ lineHeight: 2 }}
            >
              PT Serena Indo Pratama adalah perusahaan yang bergerak di industri
              bumbu dan pelapis makanan sejak 2008. Berawal dari nama Jakarta
              Food Coating, kami telah berkembang menjadi produsen terpercaya
              yang menyediakan berbagai jenis food coating seperti predust,
              battermix, seasoned battermix, marinade, premix hingga breadcrumb.
            </p>
          </div>
        </div>
      </section>

      <section className="container mt-20">
        <div className="flex flex-col md:flex-row items-center overflow-hidden justify-between">
          <div className="md:w-1/2 md:pr-10">
            <p className="font-bold text-4xl text-text-default-color">Visi</p>
            <p
              className="text-justify text-text-default-color text-xl mt-5"
              style={{ lineHeight: 2 }}
            >
              Menjadi perusahaan bumbu terkemuka di Indonesia dengan
              menghadirkan produk yang unggul secara kualitas dan kuantitas,
              mampu berdiri secara mandiri, serta dikenal dan dipercaya oleh
              masyarakat luas.
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
            <p className="font-bold text-4xl text-text-default-color">Misi</p>
            <p
              className="text-justify text-text-default-color text-xl mt-5"
              style={{ lineHeight: 2 }}
            >
              Kami percaya bahwa visi besar hanya dapat terwujud melalui
              langkah-langkah yang terarah dan konsisten. Karena itu, kami
              menetapkan misi berikut sebagai dasar dari setiap tindakan dan
              keputusan kami:
            </p>
            <div className="container mx-auto pl-5 mt-4">
              <ul className="list-disc space-y-3 leading-relaxed">
                {missions.map((mission, index) => (
                  <li key={index}>
                    <p className="text-justify text-text-default-color text-xl">
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
        <p className="font-bold text-4xl text-text-default-color">
          Perjalanan Kami
        </p>
        <p
          className="text-justify text-text-default-color text-xl mt-5"
          style={{ lineHeight: 2 }}
        >
          Setiap langkah dalam proses produksi PT Serena Indo Pratama dilakukan
          dengan perhatian penuh terhadap kualitas dan kehalalan. Mulai dari
          pemeriksaan bahan baku hingga produk jadi, kami memastikan setiap
          langkahnya menjamin keamanan, kehalalan, dan konsistensi kualitas.
        </p>

        {/* Responsive Timeline */}
        <div className="relative mt-8 sm:mt-10 md:mt-12">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#E8DED1]" />

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative mb-8 sm:mb-10 md:mb-12 flex items-start"
            >
              {/* Timeline Circle */}
              <div className="relative flex-shrink-0">
                <div className="bg-white lg:ml-5 rounded-full border-2 border-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center ml-2 sm:ml-3 md:ml-4 relative z-10" />
              </div>

              {/* Content */}
              <div className="ml-6 sm:ml-8 md:ml-10 mt-[-2px] sm:mt-[-4px] flex-1 min-w-0">
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-text-default-color mb-1 sm:mb-2">
                  {milestone.year}
                </h3>
                <p className="text-text-secondary-color text-sm sm:text-base md:text-lg text-justify leading-relaxed pr-4 sm:pr-6 md:pr-8">
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
