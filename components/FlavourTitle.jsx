import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavourTitle = () => {
    useGSAP(()=>{
        const firstTextsplit = new SplitText(".first-text-split h1", { type: "chars" });
        const secondTextsplit = new SplitText(".second-text-split h1", { type: "chars" });

        gsap.from(firstTextsplit.chars, {
            yPercent:200,
            stagger:0.03,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top 30%",
                
            }
        })

        gsap.to(".flavor-text-scroll", {
            duration:1,
            clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease:"circ.inOut",
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top 10%",
            }
        })

        gsap.from(secondTextsplit.chars, {
            yPercent:200,
            stagger:0.03,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:".flavor-section",
                start:"top 1%",
            }
        })
    },[])
  return (
    <div className="general-title col-center h-full gap-16 xl:gap-24 2xl:gap-32">
      <div className="first-text-split overflow-hidden py-3 2xl:py-0">
        <h1>We have 6</h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        }}
        className="flavor-text-scroll bg-mid-brown px-3 pt-3 pb-5 2xl:px-5 2xl:pt-0"
      >
        <h2 className="text-milk">freaking</h2>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>Delicious Flavors</h1>
      </div>
    </div>
  );
};
export default FlavourTitle;
