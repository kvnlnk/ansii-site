/**
 * Charsets section — showcases available character sets with visual examples.
 */
const charsets = [
  {
    id: 'blocks',
    chars: '░▒▓█',
    label: 'Blocks',
    desc: 'Smooth shading using block characters. Best for photos and gradients.',
    example: '░▒▓████▓▒░',
  },
  {
    id: 'dots',
    chars: '·•●⬤',
    label: 'Dots',
    desc: 'Pointillist style using dot characters. Great for low-light images.',
    example: '·•●⬤●•·',
  },
  {
    id: 'classic',
    chars: '#%@*+=',
    label: 'Classic ASCII',
    desc: 'Traditional ASCII density set. The original terminal art standard.',
    example: '#%@*+=-:. ',
  },
  {
    id: 'custom',
    chars: '✧✦✶✷✹',
    label: 'Custom',
    desc: 'Define your own character set for unique artistic styles.',
    example: '✧✦✶✷✹✷✶✦✧',
  },
];

export default function Charsets() {
  return (
    <section id="charsets" className="section" aria-label="Character sets">
      <div className="container">
        <div className="section__header">
          <h2>Charsets</h2>
          <div className="rainbow-divider" aria-hidden="true" />
          <p>Choose your visual language — four built-in character sets</p>
        </div>

        <div className="grid-2 charsets__grid">
          {charsets.map((cs) => (
            <article key={cs.id} className="card charsets__card">
              <div className="charsets__preview" aria-label={`${cs.label} character set preview`}>
                <span className="charsets__chars">{cs.chars}</span>
              </div>
              <h3>{cs.label}</h3>
              <p>{cs.desc}</p>
              <code className="charsets__example">{cs.example}</code>
            </article>
          ))}
        </div>

        <div className="section-decoration" aria-hidden="true">
          ░ # % @ * + = - . : ░
        </div>
      </div>
    </section>
  );
}
