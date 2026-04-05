import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  staticFile,
  Img,
  Video,
  Easing,
  Sequence,
  Audio,
} from "remotion";
import { whoosh } from "@remotion/sfx";
import { loadFont as loadAntonio } from "@remotion/google-fonts/Antonio";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { CommentCard } from "./components/CommentCard.jsx";

const { fontFamily: antonio } = loadAntonio();
const { fontFamily: inter } = loadInter();

// Sound effect triggers for transitions
const TRANSITION_FRAMES = [60, 170, 280];

const HeroSection = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 200 },
    durationInFrames: 60,
  });

  return (
    <div style={{ height: "1080px", width: "100%", position: "relative", backgroundColor: "#faeade", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      <Video 
        src={staticFile("videos/hero-bg.mp4")} 
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }}
        muted
      />
      
      <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        <h1 style={{
          fontFamily: antonio,
          fontSize: "120px",
          color: "#523122",
          textTransform: "uppercase",
          margin: 0,
          opacity: interpolate(titleSpring, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(titleSpring, [0, 1], [50, 0])}px)`,
        }}>
          Freaking Delicious
        </h1>
        
        <div style={{
          backgroundColor: "#a26833",
          display: "inline-block",
          padding: "10px 40px",
          marginTop: "20px",
          transform: `rotate(-3deg)`,
        }}>
          <h2 style={{
            fontFamily: antonio,
            fontSize: "60px",
            color: "#fce1cd",
            textTransform: "uppercase",
            margin: 0,
          }}>
            Protein + Caffeine
          </h2>
        </div>
      </div>
      
      {frame > 30 && frame < 100 && <CommentCard text="GSAP powered smooth animations" delay={30} />}
    </div>
  );
};

const FlavourSection = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ height: "1080px", width: "100%", position: "relative", backgroundColor: "#faeade", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        alignItems: "center",
      }}>
        <Img 
          src={staticFile("images/blue-drink.webp")} 
          style={{ 
            height: "600px", 
          }} 
        />
        <div style={{ maxWidth: "400px" }}>
          <h1 style={{
            fontFamily: antonio,
            fontSize: "80px",
            color: "#523122",
            textTransform: "uppercase",
            lineHeight: 1,
            margin: 0,
          }}>
            Explore Our Flavours
          </h1>
          <p style={{
            fontFamily: inter,
            fontSize: "24px",
            color: "#523122",
            marginTop: "20px",
          }}>
            Vibrant elements and dynamic scrolling.
          </p>
        </div>
      </div>
      
      {frame > 120 && frame < 200 && <CommentCard text="Horizontal scroll with GSAP ScrollTrigger" delay={120} />}
    </div>
  );
};

const NutritionSection = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ height: "1080px", width: "100%", position: "relative", background: "radial-gradient(circle, #f3ece2, #dcccb0)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      <Img 
        src={staticFile("images/big-img.png")} 
        style={{ 
          width: "80%",
        }} 
      />
      
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1 style={{
          fontFamily: antonio,
          fontSize: "80px",
          color: "#513022",
          textTransform: "uppercase",
          margin: 0,
        }}>
          Clean Nutrition
        </h1>
      </div>
      
      {frame > 220 && frame < 300 && <CommentCard text="Parallax effects for depth" delay={220} />}
    </div>
  );
};

const TestimonialsSection = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ height: "1080px", width: "100%", position: "relative", backgroundColor: "#faeade", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      <h1 style={{
        fontFamily: antonio,
        fontSize: "100px",
        color: "#523122",
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: "60px",
      }}>
        What They Say
      </h1>
      
      <div style={{ display: "flex", gap: "20px" }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{
            width: "250px",
            height: "350px",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "4px solid #faeade",
            boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
            overflow: "hidden",
          }}>
             <Img src={staticFile(`images/p${i}.png`)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>
      
      {frame > 320 && frame < 420 && <CommentCard text="Pinned scrolling animations" delay={320} />}
    </div>
  );
};

export const Showcase = () => {
  const frame = useCurrentFrame();
  const { height, fps, durationInFrames } = useVideoConfig();
  
  const scrollY = interpolate(
    frame,
    [0, 60, 110, 170, 220, 280, 330, 450],
    [0, 0, -1080, -1080, -2160, -2160, -3240, -3240],
    {
      easing: Easing.inOut(Easing.quad),
    }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#faeade" }}>
      {/* Background Track */}
      <Audio 
        src="https://github.com/kapishdima/soundcn/raw/main/assets/ambient.mp3" 
        volume={0.2}
        loop
      />

      {/* Transition Sounds */}
      {TRANSITION_FRAMES.map(f => (
        <Sequence from={f} key={f}>
          <Audio src={whoosh} volume={0.6} />
        </Sequence>
      ))}

      <div style={{ transform: `translateY(${scrollY}px)` }}>
        <HeroSection />
        <FlavourSection />
        <NutritionSection />
        <TestimonialsSection />
      </div>
    </AbsoluteFill>
  );
};
