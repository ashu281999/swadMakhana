import Image from "next/image";
import OurTeam from "./components/teams";
import BlogSection from "./components/blog-post";
import Product from "./components/product";
import SpicesSlider from "./components/spicesSlide";
import Policy from "./components/policy";

export default function Home() {
  return (
    <div>
          <SpicesSlider/>
          <OurTeam/>
          {/* <BlogSection/> */}
          <Product />
          <Policy/>
    </div>
  );
}
