import Brand from "@/components/Brand";
import Details from "@/components/Details";
import Hero from "@/components/Hero";
import SpecialOffers from "@/components/SpecialOffers";
import LatestBlog from "@/components/LatestBlog";
import ProductPage from "@/components/ProductPage";

export default function Home() {
  return (
    <>
      <Hero />
      <Details />
      <Brand />
      <ProductPage />
      <SpecialOffers />
      <LatestBlog />
    </>
  );
}
