# 🎨 ansii — Image to ANSI/ASCII Art Converter

**Convert images into styled ANSI art, ASCII text, or SVG — for terminals, READMEs, and retro vibes.**

---

## 🤖 Fully Vibecoded with Hermes Agent

This project was built entirely through natural language conversations with [Hermes Agent](https://hermes-agent.nousresearch.com) — an autonomous AI coding assistant. From architecture to deployment, every line of code was generated, tested, and shipped via chat prompts.

---

## ✨ Features

- **🖼️ Image → ANSI Art** — Any image converted to colored terminal output
- **🎨 Truecolor & 256-Color** — Full RGB support or compact xterm palette
- **🔤 Multiple Charsets** — Blocks (░▒▓█), dots (·•●⬤), classic (#%@*+=), custom
- **🌀 Floyd-Steinberg Dithering** — Better quality with limited color palettes
- **🎯 Gamma Correction** — Adjust brightness curve for optimal output
- **📐 SVG Output** — Standalone SVG files for embedding in docs and websites
- **⚡ Blazing Fast** — Written in Rust, compiles to a single binary

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | Rust |
| Image Processing | `image` crate (stb_image) |
| CLI Framework | clap (derive) |
| Design | 80s ANSI Art (frontend-design skill) |
| Hosting | Vercel (Static) |

---

## 🚀 Deployment

```bash
# 1. Build
npm install
npm run build

# 2. Deploy to Vercel
vercel --prod
```

Live unter: `ansii-site.vercel.app`

---

## 🎮 Usage

### CLI

```bash
# Basic ANSI output
ansii image.png

# Plain ASCII text for READMEs
ansii image.png -f text -w 60

# SVG for embedding in docs
ansii image.png -f svg -o output.svg

# With dithering (256-color mode)
ansii image.png --color256 --dither

# Different character sets
ansii image.png -c dots
ansii image.png -c classic
ansii image.png -c 'custom: .oO#'

# Invert colors + gamma correction
ansii image.png --invert --gamma 1.4
```

### Install

```bash
cargo install ansii
# OR
git clone https://github.com/kvnlnk/ansii.git
cd ansii && cargo build --release
```

---

## 🎨 Available Charsets

| Charset | Characters |
|---------|-----------|
| `blocks` | ` ░▒▓█` |
| `dots` | ` ·•●⬤` |
| `classic` | ` .:-=+*#%@` |
| `custom:<chars>` | Any characters in order from darkest to brightest |

---

## 📁 Project Structure

```
ansii-site/
├── index.html              # Landing page
├── package.json
├── vite.config.js
├── src/
│   ├── main.js             # Interactions + animations
│   └── styles/
│       └── main.css        # 80s retro ANSI art theme
└── README.md
```

---

## 📄 License

MIT

---

<p align="center">Made with ❤️ by <a href="https://github.com/kvnlnk">kvnlnk</a></p>
