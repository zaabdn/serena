import WhyChooseUs from "@/components/choose";
import Client from "@/components/client";
import Jumbotron from "@/components/jumbotron";
import AppLayout from "@/components/layout";
import Product from "@/components/product";
import Value from "@/components/value";

export default function Home() {
  return (
    <AppLayout>
      <Jumbotron />
      <Value />
      <Product />
      <Client />
      <WhyChooseUs />
    </AppLayout>
  );
}
