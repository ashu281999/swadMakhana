
import OurTeam from "./components/teams";
import Product from "./components/product";
import SpicesSlider from "./components/spicesSlide";
import Policy from "./components/policy";
import Header from "./components/header";
import MakhanaFeature from "./components/makhanDes";

export default function Home() {
  return (
    <div>
      <Header />
          <SpicesSlider/>
          {/* <BlogSection/> */}
          <MakhanaFeature />  
          <Product />
           <OurTeam/>
          <Policy/>
    </div>
  );
}
