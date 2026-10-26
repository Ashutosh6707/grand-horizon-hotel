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


## 4. License & Credits

- **Fonts**: [Google Fonts](https://fonts.google.com/) (Playfair Display & Plus Jakarta Sans)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Photography**: [Unsplash](https://unsplash.com/) (Licensed for free academic and commercial use)
- **Developer**: Grand Horizon Project Team &copy; 2026. Distributed under the MIT License.
