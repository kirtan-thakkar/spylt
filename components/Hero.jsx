"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useGSAP(() => {
    const split = new SplitText(".hero-title", { type: "chars" });
    const timeline = gsap.timeline({
      delay: 1,
    });
    timeline
      .to(".hero-content", {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
      })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5",
      ) // position parameter is used to start the animation before/after/together with the previous animation in the timeline. so the -=0.5 means start this animation 0.5 seconds before the previous animation ends, creating an overlap between the two animations but here in the first animation we did not gave duration so default is 0.5s duration so both the animations runs together!.
      .from(
        split.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5",
      );

    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,  
        ease: "power3.inOut",
      },
    });
    heroTimeline.to(".hero-container", {
      rotate:7,
      scale:0.9,
      yPercent:30,
      ease: "power1.inOut",
    })
  }, []);
  return (
    <>
      <section className="bg-main-bg">
        <div className="hero-container">
          <img
            src="/images/static-img.png"
            alt="Hero Image"
            className="object-auto absolute bottom-0 left-1/2 -translate-x-1/2 scale-100 md:scale-150"
          />
          <div className="hero-content opacity-0">
            {/* Going to animate hence overflow-hidden */}
            <div className="overflow-hidden">
              <h1 className="hero-title">Freaking Delicious</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(50% 0, 50% 0%, 50% 100%, 50% 100%)",
              }}
              className="hero-text-scroll"
            >
              <div>
                <h1 className="hero-subtitle">Protein + Caffine</h1>
              </div>
            </div>
            <h2>
              Live life to the fullest with SPYLT: Shatter boredom and embrace
              your inner kid with every deliciously smooth chug.
            </h2>
            <div className="hero-button">
              <p>Chug a SPYLT</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
//className="absolute bottom-0 left-1/2 -translate-x-1/2" Way to center anything which has absolute property. It will be placed at the bottom of the container and centered horizontally.
