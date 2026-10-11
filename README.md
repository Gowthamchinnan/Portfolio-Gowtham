# Gowtham C — Developer Portfolio

A responsive personal portfolio built with **React** and **Vite** to present projects, technical skills, education, certifications, and contact information in a clean single-page experience.

## Features

- Cinematic **GOWTHAM — THE DATA SERIES** opening, viewing modes and project episodes
- Interactive resume collection with both original PDFs, on-demand preview, open and download controls
- Keyboard focus containment, Escape dismissal and focus restoration in the resume viewer
- Responsive resume layout, visible keyboard focus and a skip-to-content link
- Reduced-motion support for scene reveals, scrolling, portrait tilt, cursor glow and counters
- Responsive desktop and mobile navigation
- Smooth section scrolling
- Active-section navigation highlighting
- Animated UI using **Framer Motion**
- Icon system using **Lucide React**
- Resume access from the portfolio header
- Dedicated sections for:
  - Projects
  - Skills
  - Education
  - Certifications
  - Contact

## Tech Stack

- React 19
- Vite
- JavaScript
- CSS
- Framer Motion
- Lucide React

## Project Structure

```text
src/
├── App.jsx
├── main.jsx
├── index.css
├── assets/
└── Components/
    ├── Hero
    ├── MetricsBar
    ├── Projects
    ├── Skills
    ├── Education
    ├── Certifications
    ├── Contact
    └── CursorGlow
```

## Run Locally

```bash
npm ci
npm run dev
```

For a production build:

```bash
npm run build
```

## Resume and accessibility checks

Run `npm run build` and `npm run lint`. In the browser, check the following at phone, tablet and desktop widths:

- Open **View Resume** from the hero and resume section. Focus starts on Close; Tab and Shift+Tab wrap through the controls. Escape closes the viewer and returns focus to its opener.
- Switch between both resumes. **Load PDF preview** loads only the selected original file; **Open PDF in new tab** and **Download resume** remain available when a browser cannot embed PDFs.
- Check the mobile menu, project filters and case-study overlays. The resume viewer scrolls vertically on short screens without horizontal overflow.
- Enable reduced motion in the device settings. Smooth scrolling, decorative CSS animations, cursor glow, portrait tilt and animated counters stop.

Embedded PDF rendering and keyboard commands inside the PDF are controlled by the browser's PDF reader. Use the viewer's Close button or press Escape after leaving the embedded document.

## Purpose

This portfolio serves as a central place to showcase my development work, technical background, and project experience.

## Author

**Gowtham C**
