/**
 * Features grid — showcases ansii's key capabilities.
 */
const features = [
  {
    icon: '🖼',
    title: 'Image to ANSI',
    desc: 'Convert any image format (PNG, JPG, GIF, WebP) to stunning ANSI/ASCII art directly in your terminal.',
  },
  {
    icon: '📝',
    title: 'Multiple Charsets',
    desc: 'Choose from blocks, dots, classic ASCII, or bring your own custom character set for unique results.',
  },
  {
    icon: '🎨',
    title: 'Truecolor & 256-Color',
    desc: 'Full truecolor (16M) and 256-color palette support for vibrant terminal output that pops.',
  },
  {
    icon: '🔲',
    title: 'Dithering',
    desc: 'Floyd-Steinberg dithering for stunning results with limited palettes — preserves image detail.',
  },
  {
    icon: '✨',
    title: 'Gamma Correction',
    desc: 'Built-in gamma correction ensures your ANSI art looks right on every terminal, bright or dark.',
  },
  {
    icon: '📐',
    title: 'SVG Output',
    desc: 'Export your ANSI art as SVG for sharing on the web, embedding in docs, or printing.',
  },
];

export default function Features() {
  return (
    <section id="features" className="section" aria-label="Features">
      <div className="container">
        <div className="section__header">
          <h2>Features</h2>
          <div className="rainbow-divider" aria-hidden="true" />
          <p>Everything you need to turn pixels into terminal art</p>
        </div>

        <div className="grid-3 features__grid">
          {features.map((f) => (
            <article key={f.title} className="card">
              <span className="card__icon" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>

        <div className="section-decoration" aria-hidden="true">
          ░ 🎯 ▒ ▓ █ ░ ▒ ▓ █ ░
        </div>
      </div>
    </section>
  );
}
