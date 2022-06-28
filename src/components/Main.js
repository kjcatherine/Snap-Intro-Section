export default function Main() {
  return (
    <main>
      <div className="hero--text">
        <h1>
          Make <br class="heading--break" /> Remote Work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a href="#">Learn more</a>
      </div>

      <div className="hero--img--contain pc">
        <img
          className="hero--img"
          src="/images/image-hero-desktop.png"
          alt="hero-pc"
        />
      </div>
      <div className="hero--img--contain mobile">
        <img
          src="/images/image-hero-mobile.png"
          alt="hero-mobile"
          class="hero--image_mobile"
        />
      </div>
    </main>
  );
}
