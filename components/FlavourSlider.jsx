import { flavorlists } from "@/app/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
const FlavourSlider = () => {
  const sliderRef = useRef(null);
  const isTablet  = useMediaQuery({ query: "(max-width: 1024px)" });
  useGSAP(() => {
    const section = sliderRef.current;
    const scrollAmount = section.scrollWidth - window.innerWidth;
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        end: `+=${scrollAmount}px`,
        pin: true,
        scrub: true,
      },
    });
    t1.to(".flavor-section", {
      x: `-${scrollAmount}px`,
      ease: "power1.inOut",
    });
    const titleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top", // Top of the section and top of the viewport
        end: "bottom 80%",
        scrub: true,
      },
    });
    titleTimeline.to(".first-text-split",{
      xPercent:-25,
      ease:"power1.inOut",
    }).to(".flavor-text-scroll",{
      xPercent:-18,
      ease:"power1.inOut",
    },"<") // '<' means start this animation at the same time as the previous one 
    .to(".second-text-split",{
      xPercent:-4,
      ease:"power1.inOut",
    },"<") 
  }, []);
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor, index) => (
          <div
            key={index}
            className={`relative z-30 h-80 w-96 flex-none md:h-[50vh] md:w-[90vw] lg:h-[70vh] lg:w-[50vw] ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt={flavor.name}
              className="absolute bottom-0"
            />
            <img
              src={`/images/${flavor.color}-drink.webp `}
              alt={flavor.name}
              className="drinks"
            />
            <img
              src={`/images/${flavor.color}-elements.webp `}
              alt={flavor.name}
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FlavourSlider;
