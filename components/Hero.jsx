

const Hero = () => {
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="/images/static-img.png"
          alt="Hero Image"
          className="object-auto absolute bottom-0 left-1/2 -translate-x-1/2 scale-100 md:scale-150"
        />
        <div className="hero-content">
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
  );
};

export default Hero;
//className="absolute bottom-0 left-1/2 -translate-x-1/2" Way to center anything which has absolute property. It will be placed at the bottom of the container and centered horizontally.
