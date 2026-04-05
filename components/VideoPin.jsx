import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPin = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  useGSAP(() => {
    if(!isMobile){
      const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "-15% top", //the animation will start when the top of the section is 15% above the top of the viewport
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
      });
      t1.to(".vd-pin-section .video-box", {
      duration: 1,
      clipPath: "circle(70.7% at 50% 50%)",
      ease: "power1.inOut",
    });
    }
  });
  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile ? "circle(70.7% at 50% 50%)" : "circle(13.6% at 50% 50%)",
        }}
        className="video-box size-full"
      >
        <video src="/videos/pin-video.mp4" autoPlay muted playsInline loop />

        <div className="abs-center scale-200 md:scale-100">
          <img
            src="/images/circle-text.svg"
            alt="circular-text-image"
            className="spin-circle"
          />
          <div className="play-btn">
            <img
              src="/images/play(1).svg"
              alt="play-btn"
              className="ml-[.5vw] size-[3vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default VideoPin;
