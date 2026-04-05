import { Composition, registerRoot } from "remotion";
import { Showcase } from "./Showcase.jsx";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="Showcase"
        component={Showcase}
        durationInFrames={450} // 15 seconds at 30fps
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};

registerRoot(RemotionRoot);
