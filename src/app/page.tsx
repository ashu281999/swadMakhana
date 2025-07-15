
import OurTeam from "./components/teams";
import Product from "./components/product";
import SpicesSlider from "./components/spicesSlide";
import Policy from "./components/policy";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header />
          <SpicesSlider/>
          {/* <BlogSection/> */}
          <Product />
           <OurTeam/>
          <Policy/>
    </div>
  );
}
