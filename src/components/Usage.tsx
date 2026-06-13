/**
 * Usage section — shows command examples with expected output.
 */
const examples = [
  {
    cmd: 'ansii input.jpg',
    desc: 'Convert an image to ANSI art with default settings (blocks charset, auto-width).',
  },
  {
    cmd: 'ansii photo.png --charset classic --width 120',
    desc: 'Use the classic ASCII charset at a custom width.',
  },
  {
    cmd: 'ansii image.jpg --truecolor --dither',
    desc: 'Enable truecolor output with Floyd-Steinberg dithering.',
  },
  {
    cmd: 'ansii art.png --gamma 2.2 --output art.svg',
    desc: 'Apply gamma correction and export directly to SVG.',
  },
  {
    cmd: 'ansii sunset.jpg --charset dots --palette 256',
    desc: 'Use the dots charset with 256-color palette mode.',
  },
  {
    cmd: 'ansii --list-charsets',
    desc: 'List all available character sets and exit.',
  },
];

export default function Usage() {
  return (
    <section id="usage" className="section" aria-label="Usage examples">
      <div className="container">
        <div className="section__header">
          <h2>Usage</h2>
          <div className="rainbow-divider" aria-hidden="true" />
          <p>Simple CLI — powerful options</p>
        </div>

        <div className="usage__grid">
          {examples.map((ex) => (
            <div key={ex.cmd} className="usage__example">
              <pre className="usage__cmd"><code>$ {ex.cmd}</code></pre>
              <p className="usage__desc">{ex.desc}</p>
            </div>
          ))}
        </div>

        <div className="usage__full">
          <h3>Full Options</h3>
          <p>Run <code>ansii --help</code> for all available flags and options.</p>
          <pre className="usage__help"><code>{`\
ansii 0.1.0
Image-to-ANSI/ASCII converter

USAGE:
    ansii [FLAGS] [OPTIONS] <INPUT>

FLAGS:
    --truecolor       Enable truecolor output (16M colors)
    --dither          Apply Floyd-Steinberg dithering
    --list-charsets   List available character sets
    -h, --help        Print help information
    -V, --version     Print version information

OPTIONS:
    --charset <CHARSET>    Character set [default: blocks]
    --width <WIDTH>        Output width in characters [default: auto]
    --gamma <GAMMA>        Gamma correction value [default: 1.0]
    --palette <PALETTE>    Color palette: 16, 256, truecolor [default: auto]
    --output <FILE>        Output file (SVG or text)

ARGS:
    <INPUT>    Input image file path`}</code></pre>
        </div>

        <div className="section-decoration" aria-hidden="true">
          $ ansii --help ░
        </div>
      </div>
    </section>
  );
}
