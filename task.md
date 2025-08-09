# 🧠 Project Prompt for GitHub Spark / Copilot

## 🎯 Goal

Rebuild the website [https://www.almazsi.hu](https://www.almazsi.hu) as a **modern**, **responsive**, and **one-page** website using **React (Vite)** and **Tailwind CSS**. The new site should visually resemble the original but be restructured into a clean single-page layout with internal navigation (scroll-based).

## 💡 Features

- Full one-page layout (no routing)
- Sticky top navigation bar with smooth scroll to sections:
  - Hero
  - About (Kik vagyunk?)
  - Goals (Céljaink)
  - Activities (Tevékenységünk)
  - History (Előtörténet)
  - News (Hírek) - only appears in menu, but no section
  - Support & Contact (Támogatás és kapcsolat)
- Use Tailwind CSS for layout, spacing, typography, and responsiveness
- Use modern React functional components
- Smooth scroll behavior between sections
- Responsive and mobile-friendly
- Include a hero image with abstract community vibes
- Include Hungarian section titles and dummy content where text is missing

## 🛠️ Tech stack

- React (with Vite)
- Tailwind CSS
- (Optional) React Icons or HeroIcons
- No external UI libraries (e.g., no MUI, Chakra)

## 🖼️ Hero Image

Use a hero image that symbolizes community and togetherness. Abstract geometric design, similar in feel to the original site. use images from our public facebook gallery.

## 🧪 Test Instructions

- On `npm run dev`, the site should load at `localhost:5173`
- Verify section scroll works
- Verify responsiveness on mobile
- Check for accessibility (labels, contrast)

## 📦 Deliverables

- `/src/App.jsx` with all sections as components
- `/src/components/` folder for each section
- Tailwind configured in `tailwind.config.js`
- Final project builds with `npm run build`

## 📄 Optional Enhancements

- Animate sections on scroll (with AOS or Framer Motion)
- Include dynamic news via a JSON file or CMS in the future
- Replace dummy text with actual translations later

