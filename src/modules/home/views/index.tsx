import CategoryHome from "./category";
import SliderBanner from "./slider-banner";

const HomeView = () => {
  return (
    <div>
      <div>
        <SliderBanner />
      </div>
      <div>
        <CategoryHome />
      </div>
    </div>
  );
};

export default HomeView;
