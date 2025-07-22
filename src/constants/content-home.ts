import customerService from "@/assets/images/customer-service.png";
import innovation from "@/assets/images/innovation.png";
import quality from "@/assets/images/quality-value.png";
import support from "@/assets/images/support.png";

import product1 from "@/assets/images/product1.png";
import product2 from "@/assets/images/product2.png";
import product3 from "@/assets/images/product3.png";
import product4 from "@/assets/images/product4.png";
import product5 from "@/assets/images/product5.png";

import client1 from "@/assets/images/home/client/client1.png";
import client2 from "@/assets/images/home/client/client2.png";
import client3 from "@/assets/images/home/client/client3.png";
import client4 from "@/assets/images/home/client/client4.png";
import client5 from "@/assets/images/home/client/client5.jpg";
import client6 from "@/assets/images/home/client/client6.png";
import client7 from "@/assets/images/home/client/client7.png";

import benefit3 from "@/assets/images/home/diagram.png";
import benefit4 from "@/assets/images/home/partner.png";
import benefit2 from "@/assets/images/home/quality.png";
import benefit1 from "@/assets/images/home/role-model.png";

export const DATA_VALUES = [
  {
    id: 1,
    title: "Inovasi",
    description:
      "Kami terus berinovasi untuk menghadirkan produk pelapis makanan yang mengikuti perkembangan zaman dan kebutuhan industri pangan.",
    image: innovation,
  },
  {
    id: 2,
    title: "Kualitas",
    description:
      "Kami berkomitmen memberikan produk terbaik melalui pemilihan bahan baku berkualitas, proses produksi yang terkontrol, dan pengujian kualitas yang menyeluruh.",
    image: quality,
  },
  {
    id: 3,
    title: "Pelayanan Prima",
    description:
      "Kami percaya bahwa pelayanan terbaik lahir dari perhatian terhadap detail dan kebutuhan pelanggan, mulai dari konsultasi hingga pengiriman.",
    image: customerService,
  },
  {
    id: 4,
    title: "Kolaborasi",
    description:
      "Kami terbuka untuk tumbuh bersama mitra dan pelanggan melalui kerja sama yang saling menguntungkan dan berkelanjutan.",
    image: support,
  },
] as const;

export const DATA_PRODUCTS = [
  {
    id: 1,
    title: "Battermix",
    description:
      "Membantu adonan menempel sempurna untuk tekstur renyah yang tahan lama.",
    image: product1,
  },
  {
    id: 2,
    title: "Premix",
    description:
      "Campuran siap pakai yang mempercepat produksi tanpa mengorbankan rasa.",
    image: product2,
  },
  {
    id: 3,
    title: "Breader",
    description: "Memberikan hasil gorengan yang crispy dan menggugah selera.",
    image: product3,
  },
  {
    id: 4,
    title: "Marinade",
    description:
      "Rasa meresap lebih dalam dan hasil akhir menjadi lebih juicy serta tahan lama.",
    image: product4,
  },
  {
    id: 5,
    title: "Breadcrumb",
    description:
      "Memberikan lapisan akhir yang renyah dan tahan lama untuk hasil gorengan yang lebih menggugah selera.",
    image: product5,
  },
] as const;

export const DATA_CLIENTS = [
  {
    id: 1,
    image: client1,
  },
  {
    id: 2,
    image: client2,
  },
  {
    id: 3,
    image: client3,
  },
  {
    id: 4,
    image: client4,
  },
  {
    id: 5,
    image: client5,
  },
  {
    id: 6,
    image: client6,
  },
  {
    id: 7,
    image: client7,
  },
] as const;

export const DATA_BENEFITS = [
  {
    id: 1,
    title: "Ahli di Bidangnya",
    description:
      "Dengan pengalaman lebih dari 15 tahun, kami fokus mengembangkan produk pelapis makanan berkualitas untuk mendukung industri pangan Indonesia.",
    image: benefit1,
  },
  {
    id: 2,
    title: "Bersertifikasi & Terjamin",
    description:
      "Setiap produk kami melalui proses ketat dengan bahan baku bersertifikat halal, pengawasan mutu yang terstandar, serta sertifikasi HALAL BPJPH, CPOB BPOM, dan ISO 22000.",
    image: benefit2,
  },
  {
    id: 2,
    title: "Solusi Fleksibel untuk Bisnis Anda",
    description:
      "Kami melayani kebutuhan maklon dan pengembangan produk custom, sehingga Anda bisa mendapatkan produk sesuai karakter brand Anda.",
    image: benefit3,
  },
  {
    id: 2,
    title: "Mitra yang Tumbuh Bersama Anda",
    description:
      "Kami percaya pada kerja sama jangka panjang, dengan pelayanan yang cepat, ramah, dan mendengarkan kebutuhan setiap klien.",
    image: benefit4,
  },
] as const;
