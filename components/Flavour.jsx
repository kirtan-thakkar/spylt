import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FlavourSlider from "./FlavourSlider";
import FlavourTitle from "./FlavourTitle";
import { useRef } from "react";
const FlavourPage = () => {
  return (
    <section className="flavor-section">
      {/* wrapper div */}
      <div className="relative flex h-full flex-col items-center lg:flex-row">
        <div className="h-80 flex-none md:mt-20 lg:h-full lg:w-[57%] xl:mt-0">
          <FlavourTitle />
        </div>
        <div className="h-full">
          <FlavourSlider />
        </div>
      </div>
    </section>
  );
};
export default FlavourPage;
