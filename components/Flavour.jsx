import FlavourSlider from "./FlavourSlider";
import FlavourTitle from "./FlavourTitle";
const FlavourPage = () => {
  return (
    <section className="flavor-section">
      {/* wrapper div */}
      <div className="relative h-full flex-col items-center lg:flex-row">
        <div className="h-80 flex-none md:mt-20 lg:h-full lg:w-[57%] xl:mt-0">
          <FlavourTitle />
        </div>
        <div className="relative z-50 h-full">
          <FlavourSlider />
        </div>
      </div>
    </section>
  );
};
export default FlavourPage;
