import React from "react";
import {
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Audio,
} from "remotion";
import { MessageCircle } from "lucide-react";
import { ding } from "@remotion/sfx";

export const CommentCard = ({ text, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 200,
    },
    durationInFrames: 30,
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const y = interpolate(entrance, [0, 1], [20, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px) scale(${entrance})`,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: "16px 24px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
        maxWidth: "350px",
        position: "absolute",
        bottom: "10%",
        right: "10%",
      }}
    >
      {frame >= delay && (
        <Audio src={ding} volume={0.5} />
      )}
      <div
        style={{
          backgroundColor: "#523122",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <MessageCircle size={20} />
      </div>
      <p
        style={{
          margin: 0,
          fontFamily: "Inter, sans-serif",
          fontSize: "18px",
          fontWeight: 600,
          color: "#523122",
          lineHeight: 1.4,
        }}
      >
        {text}
      </p>
    </div>
  );
};
