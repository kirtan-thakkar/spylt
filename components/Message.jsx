import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
const MessagePage = () => {
  useGSAP(() => {
    const firstMsgSplit = new SplitText(".first-message", { type: "words" });
    const secondMsgSplit = new SplitText(".second-message", { type: "words" });
    const pSplit = new SplitText(".message-content", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });
    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top 90%",
        end: "60% center",
        scrub: true,
      },
    });

    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top 90%",
        end: "70% center",
        scrub: true,
      },
    });
  }, []);
  return (
    <section className="message-content">
      <div className="flex-center relative container mx-auto py-28">
        <div className="h-full w-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and </h1>
            <div className="msg-text-scroll">
              <div className="bg-light-brown md:pd-5 px-5 pb-3">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message">
              {" "}
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center mt-10 md:mt-20">
            <div className="flex-center max-w-md overflow-hidden px-10">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you're one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagePage;
