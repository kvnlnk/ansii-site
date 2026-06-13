/**
 * Install section — shows installation instructions via cargo and git.
 */
export default function Install() {
  return (
    <section id="install" className="section" aria-label="Installation">
      <div className="container">
        <div className="section__header">
          <h2>Install</h2>
          <div className="rainbow-divider" aria-hidden="true" />
          <p>Get ansii up and running in seconds</p>
        </div>

        <div className="install__grid">
          {/* Cargo install */}
          <div className="install__method">
            <h3 className="install__method-title">
              <span className="ansi-block ansi-block--accent">◆</span> Cargo Install
            </h3>
            <p>If you have Rust installed, grab the latest release from crates.io:</p>
            <pre className="install__code"><code>cargo install ansii</code></pre>
          </div>

          {/* Build from source */}
          <div className="install__method">
            <h3 className="install__method-title">
              <span className="ansi-block ansi-block--secondary">◆</span> Build from Source
            </h3>
            <p>Clone the repo and build with cargo for the latest changes:</p>
            <pre className="install__code"><code>git clone https://github.com/kvnlnk/ansii.git
cd ansii
cargo build --release
./target/release/ansii --help</code></pre>
          </div>
        </div>

        <aside className="install__note" aria-label="Prerequisites">
          <span className="ansi-block ansi-block--accent">▸</span>
          {' '}Requires Rust 1.70+.{' '}
          <a href="https://rustup.rs" target="_blank" rel="noopener noreferrer">
            Install Rust
          </a>
        </aside>

        <div className="section-decoration" aria-hidden="true">
          █ cargo install █ 
        </div>
      </div>
    </section>
  );
}
