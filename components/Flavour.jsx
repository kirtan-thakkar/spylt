import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FlavourSlider from "./FlavourSlider";
import FlavourTitle from "./FlavourTitle";
import { useRef } from "react";
const FlavourPage = () => {
  const sliderRef = useRef(null);
  useGSAP(()=>{
    const section = sliderRef.current;
    if (!section || typeof window === "undefined") return;

    const scrollAmount = section.scrollWidth - window.innerWidth;

    const t1 = gsap.timeline({
      scrollTrigger:{
        trigger:".flavor-section",
        start:"2% top",
        end:`+=${scrollAmount}px`,
        pin:true,
        scrub:true,
      }
    })
    t1.to(".flavor-section",{
      x:`-${scrollAmount}px`,
      ease:"power1.inOut",
    })

  },[])
  return (
    <section ref={sliderRef} className="flavor-section">
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
