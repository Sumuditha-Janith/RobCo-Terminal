# ☢️ RobCo Industries Unified Operating System

A highly immersive, responsive, and interactive web-based recreation of the classic Fallout Pip-Boy/RobCo terminal interface. This project features authentic CRT monitor effects, dynamic typing animations, and multiple theme colors inspired by the different factions and regions of the Wasteland.

## 🌟 Features

* **Authentic CRT Experience:** Includes CSS-driven scanlines, screen flicker, text glow, and a nostalgic "tube TV turn-on" boot animation.
* **Dynamic Terminal Output:** JavaScript-powered typewriter effects simulate an authentic 2077 computing experience, complete with a realistic boot sequence.
* **Multi-Faction Themes:** Choose your allegiance with four distinct color profiles (saved locally across sessions):
* 🟢 **Capital Wasteland (Green)** - The classic RobCo standard.
* 🟠 **Mojave (Amber)** - A warm glow for the New Vegas courier.
* ⚪ **Institute (White)** - Clean, modern, and terrifyingly advanced.
* 🔵 **Followers (Blue)** - Cool tones for the medically and scientifically inclined.


* **Highly Responsive Design:** Beautifully scales from mobile phones to 4K Ultrawide displays, and even includes a special CSS media query for 4:3 CRT TV emulation.
* **Accessibility Support:** Includes built-in support for users who prefer reduced motion (disables screen flicker and typing animation delays) and high contrast modes.

---

## 🚀 Getting Started

No holotape readers or complex local servers required. To run the terminal:

1. Clone or download this repository.
2. Ensure the directory structure matches the expected format (see below).
3. Open `index.html` in any modern web browser.

### Project Structure

```text
├── index.html
└── assets/
    ├── css/
    │   ├── styles.css        # Base styling, CRT effects, and animations
    │   └── responsive.css    # Media queries for all device sizes
    └── js/
        ├── data.js           # Boot sequence and Vault-Tec alert text
        ├── terminal.js       # Typewriter logic and UI revealing
        ├── themeManager.js   # Theme switching and localStorage management
        └── main.js           # Application initialization

```

---

## 🎮 Controls & Usage

* **Read the Logs:** The terminal will automatically boot up and print the classified Vault-Tec warning.
* **Change Themes (Mouse/Touch):** Click or tap the circular theme toggle button in the top right corner of the screen.
* **Change Themes (Keyboard):** Press `Alt + T` to quickly cycle through the available visual themes.

---

## 🛠️ Built With

* **HTML5:** Semantic structure mapping out the Pip-Boy interface (STAT, INV, DATA, MAP, RADIO).
* **CSS3:** Advanced animations, radial gradients, text-shadows, and complex media queries. Features the `VT323` font from Google Fonts.
* **Vanilla JavaScript (ES6+):** Object-oriented classes for modular theme management and asynchronous terminal text rendering.

---

## 📜 Disclaimer

*RobCo Industries and Vault-Tec are not responsible for permanent retinal scarring, atomic annihilation, or loss of limbs incurred while operating this terminal. Please report immediately to your assigned Vault.*