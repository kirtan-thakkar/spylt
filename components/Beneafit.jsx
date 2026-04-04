import { useGSAP } from "@gsap/react";
import ClipPathTitle from "./ClipPathTitle";
import gsap from "gsap";
import VideoPin from "./VideoPin";
const BeneafitPage = () => {
  useGSAP(() => {
    const revealTimeline = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        endTrigger: ".benefit-section .vd-pin-section",
        end: "top 90%",
        scrub: 1.5,
      },
    });
    revealTimeline
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  }, []);
  return (
    <section className="benefit-section ">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>
          <div className="col-center mt-20">
            <ClipPathTitle
              title={"Shelf stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title opacity-0"}
              borderColor={"#222123"}
            />

            <ClipPathTitle
              title={"Protein + Caffeine"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title opacity-0"}
              borderColor={"#222123"}
            />

            <ClipPathTitle
              title={"Infinitely recyclable"}
              color={"#faeade"}
              bg={"#7F3B2D"}
              className={"third-title opacity-0"}
              borderColor={"#222123"}
            />

            <ClipPathTitle
              title={"Lactose free"}
              color={"#2E2D2F"}
              bg={"#FED775"}
              className={"fourth-title opacity-0"}
              borderColor={"#222123"}
            />
          </div>
          <div className="mt-10 md:mt-0">
            <p>ANd much more ...</p>
          </div>
        </div>
      </div>
      <div className="relative overlay-box">
        <VideoPin />

      </div>
    </section>
  );
};
export default BeneafitPage;
