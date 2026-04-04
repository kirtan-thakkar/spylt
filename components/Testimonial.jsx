import { cards } from "@/app/constants";
import { useRef } from "react";
const Testimonial = () => {

    const videoRef = useRef([]);
    const handlePlay = (index)=>{
        const video = videoRef.current[index];
        video.play();
    }
    const handlePause = (index)=>{
        const video = videoRef.current[index];
        video.pause();
    }


  return (
    <section className="testimonials-section">
      <div className="absolute flex size-full flex-col items-center pt-[5vw]">
        <h1 className="first-title text-black">What's</h1>
        <h1 className="sec-title text-light-brown">Everyone</h1>
        <h1 className="third-title text-black">Talking</h1>
      </div>
      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
          >
            <video ref={(el) => (videoRef.current[index] = el)} src={card.src} playsInline muted loop className="size-full object-cover" onMouseEnter={()=>handlePlay(index)} onMouseLeave={()=>handlePause(index)} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonial;
