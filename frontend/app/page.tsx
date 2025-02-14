import DiscountItem from "@/components/ui/discountItem";
import FeaturedProducts from "@/components/ui/featuredProducts";
import Hero from "@/components/ui/hero";
import LatestBlog from "@/components/ui/latestBlog";
import MiddleFour from "@/components/ui/middleFour";
import MiddleOne from "@/components/ui/middleOne";
import MiddleThree from "@/components/ui/middleThree";
import MiddleTwo from "@/components/ui/middleTwo";
import TopCategories from "@/components/ui/topProducts";
import TrendingProducts from "@/components/ui/trendingProducts";


export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <MiddleOne />
      <MiddleTwo />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <MiddleThree />
      <MiddleFour />
      <LatestBlog />
    </div>
  );
}
