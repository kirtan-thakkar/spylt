const FooterPage = () => {
  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt="footer-dip"
        className="size-full -translate-y-1 object-cover"
      />
      <div className="relative pt-[10vh] md:pt-[20vh] 2xl:h-[110dvh]">
        <div className="z-10 overflow-hidden">
          <h1 className="general-title text-milk py-5 text-center">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        <video
          src="/videos/splash.mp4"
          playsInline
          autoPlay
          muted
          className="absolute top-0 object-contain mix-blend-lighten"
        />
        <div className="flex-center relative z-10 mt-5 gap-5 md:mt-20">
          <div className="social-btn">
            <img src="/images/yt.svg" alt="YouTube" />
          </div>
          <div className="social-btn">
            <img src="/images/insta.svg" alt="Instagram" />
          </div>
          <div className="social-btn">
            <img src="/images/yt.svg" alt="YouTube" />
          </div>

        </div>
      </div>
    </section>
  );
};
export default FooterPage;
