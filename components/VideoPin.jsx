import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Video } from "lucide-react"

const VideoPin =()=>{
    useGSAP(()=>{
        const t1 = gsap.timeline({
            scrollTrigger:{
                trigger:".vd-pin-section",
                start:"-15% top" //the animation will start when the top of the section is 15% above the top of the viewport
            }
        })
    })
    return(
        <section className="vd-pin-section">
            <div style={{
                clipPath:""
            }} className="size-full video-box">
                <video src="/videos/pin-video.mp4" autoPlay muted playsInline loop />

                <div className="abs-center md:scale-100 scale-200 ">
                    <img src="/images/circle-text.svg" alt="circular-text-image" className="spin-circle" />
                    <div className="play-btn">
                        <img src="/images/play(1).svg" alt="play-btn" className="size-[3vw] ml-[.5vw]" />
                    </div>

                </div>

            </div>

        </section>
    )
}
export default VideoPin;