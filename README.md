# Grand Horizon – Luxury Stay & Resort

> **A Modern, Responsive, and Interactive Luxury Hotel Web Application**  
> *Developed for College Practical Demonstration, Lab Evaluation & Viva Voce.*

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-blue?style=flat&logo=github)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-orange?style=flat&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modern_Grid_%26_Flexbox-blue?style=flat&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 1. Project Overview

**Grand Horizon – Luxury Stay & Resort** is a five-star hotel booking website created using pure client-side web technologies (HTML5, CSS3, and modern Vanilla JavaScript). The project simulates an authentic luxury resort digital experience along the coastal shores of Candolim, Goa.

### Key Objectives
- **Zero-Dependency Architecture**: Runs directly in any modern web browser without requiring Node.js, npm builds, backend servers, or external databases.
- **State Persistence via Web Storage**: Saves demo room reservations, dark/light theme choices, and newsletter subscriptions in the browser's `localStorage`.
- **Dynamic Front-End Booking Engine**: Computes real-time room tariffs, stay duration, GST tax calculations (18%), discount codes, and validation rules.
- **Academic & Viva Ready**: Clean, modular code with descriptive comments and semantic architecture designed for easy oral presentation and examination.

---

## 2. Key Features

### 🏛️ Visual & UI/UX Design
- **Luxury Aesthetic**: Dark navy (`#070d18`), warm royal gold (`#c5a880`), ivory cream, and crisp white typography.
- **Glassmorphism Elements**: Frosted glass panels (`backdrop-filter: blur()`) with subtle gold borders and drop shadows.
- **Dark / Light Theme Toggle**: Seamless mode switching persisted in `localStorage`.
- **Responsive Layout**: Mobile-first responsive grids and flex layouts supporting mobile phones (375px+), tablets (768px+), laptops, and 4K displays.
- **Intersection Observer Animations**: Smooth scroll-triggered reveal animations for cards and statistics.

### 🛎️ Navigation & Header
- **Sticky Navbar**: Transparent floating bar over hero image that smoothly transforms to solid navy glass on scroll.
- **Active Scroll-Spy Navigation**: Automatically highlights the current section as the user scrolls.
- **Mobile Off-Canvas Drawer**: Accessible drawer menu with smooth backdrop blur.
- **Real-Time Bookings Counter**: Interactive counter badge showing total active demo bookings.

### 🛏️ Rooms & Suites Catalog
- **Four Signature Accommodations**:
  1. *Deluxe Heritage Room* (₹6,500/night)
  2. *Executive Club Suite* (₹12,000/night)
  3. *Oceanfront Azure Suite* (₹18,500/night)
  4. *The Grand Horizon Presidential Suite* (₹35,000/night)
- **Interactive Filtering**: Filter by category (`All`, `Deluxe`, `Executive`, `Suites`).
- **Dynamic Sorting**: Sort rooms by price (`Low to High`, `High to Low`) or guest capacity.
- **Room Details Modal**: High-res gallery preview, room dimensions, bed arrangements, complimentary perks, and policies.

### 💳 Front-End Booking Engine
- **Quick Availability Search**: Floating hero bar transferring dates and guest count directly into the booking engine.
- **Dynamic Date Validation**:
  - Restricts check-in to today or future dates (`min = today`).
  - Enforces check-out at least 1 day after check-in.
- **Real-Time Cost Calculator**:
  - Automatically calculates total nights: `nights = checkout - checkin`.
  - Calculates base tariff: `nights × room rate × rooms count`.
  - Luxury GST & Service Tax (18%) computation.
  - Interactive Promo Codes: `WEEKEND15` (15% off), `ROMANCE20` (20% off), `FAMILY25` (25% off), `HORIZON10` (10% off).
- **Demo Reference Code**: Generates authentic reference IDs (e.g., `GH-2026-8491`).
- **Printable Booking Voucher**: Formats and triggers native browser print dialog with custom `@media print` styling.

### 📂 "My Bookings" Local Management
- Inspect all saved bookings in a dedicated off-canvas modal.
- View room name, stay dates, guest counts, and total amount.
- **Cancellation Flow**: Safe modal confirmation dialog to cancel a demo booking with real-time UI & badge updates.
- **Clear All**: Option to reset demonstration data at any time.

### 🖼️ Interactive Lightbox Gallery
- Categorized photo gallery (`All`, `Rooms & Suites`, `Fine Dining`, `Pool & Spa`, `Resort Exterior`).
- Full-screen lightbox viewer with:
  - Previous (`←`) and Next (`→`) navigation buttons.
  - Keyboard shortcut support (`Escape` to close, Arrow keys to navigate).
  - Dynamic image counter (`1 / 8`) and title captions.

### 💬 Testimonials Carousel
- Automatic slide transition every 5 seconds.
- Pause on hover, resume on mouse leave.
- Manual navigation arrows and dot pagination.

### 📍 Contact & Demonstration Map
- Interactive mock map with pulsating GPS marker, coastal coordinates, and tooltip.
- Client-side validated contact form with custom non-intrusive toast notification feedback.

---

## 3. Technology Stack

| Layer | Technologies Used | Purpose |
| :--- | :--- | :--- |
| **Markup** | HTML5 Semantic Elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) | Accessible structure & SEO |
| **Styling** | CSS3 (Custom Properties, Flexbox, CSS Grid, Glassmorphism, Media Queries) | Modern responsive luxury design |
| **Behavior** | Vanilla JavaScript (ES6+ Classes, Modules, IntersectionObserver, Event Delegation) | Dynamic state & UI interactivity |
| **Persistence**| HTML5 Web Storage API (`localStorage`) | Preserving bookings & theme preference |
| **Typography** | Google Fonts (`Playfair Display`, `Plus Jakarta Sans`) | Editorial luxury typography |
| **Icons** | Font Awesome 6.5.1 CDN & Custom SVG Favicon | Crisp vector iconography |
| **Media** | High-Definition Unsplash Hotel Imagery with SVG Fallbacks | High visual fidelity |

---

## 4. Project Folder Structure

```text
grand-horizon/
├── index.html              # Main HTML5 entry point & semantic markup
├── style.css               # Design system tokens, layouts, animations & responsive styles
├── script.js               # Application state, controllers, booking calculations & DOM logic
├── README.md               # Comprehensive documentation & practical viva guide
└── assets/
    ├── icons/
    │   └── favicon.svg     # Custom luxury monogram vector favicon
    └── images/
        └── placeholder.svg # Reliable offline fallback placeholder image
```

---

## 5. How to Run Locally

You do not need to install Node.js, Python, or Apache to run this website.

### Method 1: Direct Browser Launch (Easiest)
1. Download or clone this repository.
2. Navigate into the `grand-horizon/` directory.
3. Double-click `index.html` or right-click and choose **Open with > Google Chrome** (or Edge, Safari, Firefox).

### Method 2: VS Code Live Server
1. Open the `grand-horizon` folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and click **Open with Live Server**.
4. The project will open automatically at `http://127.0.0.1:5500`.

### Method 3: Python Built-in HTTP Server
If you have Python installed, run:
```bash
# In the grand-horizon directory:
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 6. How to Deploy on GitHub Pages

Follow these step-by-step instructions to host the project live on GitHub:

1. **Initialize Git & Commit**:
   ```bash
   cd grand-horizon
   git init
   git add .
   git commit -m "Initial release: Grand Horizon Luxury Hotel Website"
   ```

2. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Enter repository name: `grand-horizon-hotel`.
   - Set visibility to **Public**.
   - Do not initialize with README (you already have one).
   - Click **Create repository**.

3. **Push Code to GitHub**:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/grand-horizon-hotel.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - In your GitHub repository, click on **Settings** (top tab).
   - On the left sidebar, click on **Pages**.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.

5. **Access Your Live Website**:
   - Within 1–2 minutes, GitHub Pages will deploy your site at:
     `https://<YOUR-USERNAME>.github.io/grand-horizon-hotel/`

---

## 7. Adding Screenshots

To add screenshots to this repository:
1. Capture screenshots of the following views:
   - `screenshot-hero.png` (Desktop Hero & Search Panel)
   - `screenshot-rooms.png` (Rooms Grid with Filter & Sort)
   - `screenshot-booking.png` (Interactive Booking Form with Live Summary)
   - `screenshot-mobile.png` (Mobile Responsive View)
2. Save them into `assets/images/screenshots/`.
3. Add the Markdown preview links in this section:

```markdown
### Desktop Hero Section
![Hero View](assets/images/screenshots/screenshot-hero.png)

### Room Catalog & Booking Engine
![Rooms View](assets/images/screenshots/screenshot-rooms.png)
```

---

## 8. Limitations of the Front-End Demo

Because this project is designed as a pure front-end demonstration for academic evaluation:
1. **No Backend Database**: Reservations are stored in the client's browser `localStorage`. Bookings created on one device or browser will not appear on another.
2. **Simulated Payment Gateway**: No financial transactions, credit card processing, or real merchant IDs are integrated.
3. **Simulated Email & SMS**: Confirmation vouchers are rendered dynamically in the UI and can be printed/saved as PDF, but no automated SMTP emails are dispatched.
4. **Demonstration Map**: Uses a styled interactive demonstration map widget instead of an API-key-restricted third-party map provider to ensure zero setup friction.

---

## 9. College Practical & Viva Voce Guide

When demonstrating this project to external examiners or professors, use the following technical explanations:

### Q1: Why did you choose vanilla HTML, CSS, and JavaScript instead of React or Angular?
> *"For this practical demonstration, pure HTML5, CSS3, and ES6+ JavaScript were selected to prove core foundational competency in DOM manipulation, asynchronous event handling, and browser APIs. This approach eliminates bundle overhead, requires zero build configuration, and guarantees lightning-fast loading on GitHub Pages."*

### Q2: How does the dynamic booking calculation work?
> *"The booking engine listens to input and change events on room selection, check-in date, check-out date, and room count. It calculates duration using Date epoch differences: `Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24))`. It then applies promotional discounts, computes 18% GST according to hospitality tax brackets, and updates the DOM in real-time."*

### Q3: How is data preserved after the browser is refreshed?
> *"We utilize the HTML5 Web Storage API (`localStorage.setItem('gh_bookings', JSON.stringify(bookings))`). Upon page load, an initialization function parses the JSON string back into the application state object, updating the navigation badge and the 'My Bookings' modal."*

### Q4: How is responsive design achieved without a framework like Bootstrap?
> *"We utilized CSS Grid (`grid-template-columns: repeat(auto-fit, minmax(...))`) and Flexbox alongside CSS Custom Properties and mobile-first media queries (`@media (max-width: 768px)`). Fluid typography was achieved using the CSS `clamp()` function."*

### Q5: What is the benefit of using `IntersectionObserver` over traditional `window.onscroll`?
> *"Traditional scroll listeners trigger on every pixel scrolled, causing layout thrashing and high CPU utilization. `IntersectionObserver` asynchronously monitors when an element enters or leaves the viewport on a separate thread, providing 60 FPS scroll performance and smooth animations."*

---

## 10. License & Credits

- **Fonts**: [Google Fonts](https://fonts.google.com/) (Playfair Display & Plus Jakarta Sans)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Photography**: [Unsplash](https://unsplash.com/) (Licensed for free academic and commercial use)
- **Developer**: Grand Horizon Project Team &copy; 2026. Distributed under the MIT License.
