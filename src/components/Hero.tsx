/**
 * Hero section — landing area with "ansii" in pixel font,
 * tagline, an ANSI art demo conversion, and call-to-action.
 */
export default function Hero() {
  return (
    <section id="hero" className="hero section" aria-label="Hero">
      <div className="container">
        {/* Decorative block chars top */}
        <div className="hero__deco" aria-hidden="true">
          <span className="ansi-block">▒▓█░▒▓█░▒▓█░▒▓█░▒▓█░▒▓█░▒▓█░▒▓█</span>
        </div>

        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-char hero__title-char--a">a</span>
            <span className="hero__title-char hero__title-char--n">n</span>
            <span className="hero__title-char hero__title-char--s">s</span>
            <span className="hero__title-char hero__title-char--i1">i</span>
            <span className="hero__title-char hero__title-char--i2">i</span>
          </h1>
          <p className="hero__tagline">images → ANSI art</p>
          <p className="hero__desc">
            A blazing-fast Rust CLI that converts images to authentic
            ANSI/ASCII art. Terminal-native, SVG-capable, fully customizable.
          </p>

          <div className="hero__actions">
            <a href="#install" className="btn btn--accent">Install</a>
            <a href="#demo" className="btn">See Demo</a>
          </div>
        </div>

        {/* Demo ANSI conversion */}
        <div className="hero__demo" aria-label="ANSI art conversion example">
          <div className="hero__demo-header">
            <span className="ansi-block ansi-block--accent">$</span>
            {' '}ansii input.jpg --charset blocks
          </div>
          <pre className="ansi-art hero__ansi-art"><code>{`\
▒▓████████████████████████████▓▒
▓█░░░░░░░░░░░░░░░░░░░░░░░░░░██
▓█░░████▓▓▒▒▓▓████░░████▓▓░░██
▓█░░██░░░░░░░░░░██░░██░░░░░░██
▓█░░██░░▓▓▓▓▓▓░░██░░████▓▓░░██
▓█░░██░░░░░░░░░░██░░██░░░░░░██
▓█░░████▓▓▒▒▓▓████░░██░░██████
▓█░░░░░░░░░░░░░░░░░░░░░░░░░░██
▓█░░████░░██░░████░░██░░██████
▓█░░██░░░░██░░██░░░░██░░██░░░░
▓█░░████▓▓██░░████▓▓██░░████▓▓
▓█░░░░░░░░░░░░░░░░░░░░░░░░░░██
▓██████████████████████████████`}</code></pre>
        </div>

        {/* Decorative block chars bottom */}
        <div className="hero__deco hero__deco--bottom" aria-hidden="true">
          <span className="ansi-block ansi-block--dim">█▓▒░█▓▒░█▓▒░█▓▒░█▓▒░█▓▒░█▓▒░█▓</span>
        </div>
      </div>
    </section>
  );
}
