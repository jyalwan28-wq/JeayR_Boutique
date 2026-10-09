# A4 Individual Integrated Web Design Project
**Student Name:** Jerusah Yalwan
**Student ID:** 24704056
**Subject:** ISO229 Web Design (Online Mode)

Design Project

**Website Topic:** JeayR Boutique – PNG Traditional Apparel &amp; Handcrafted Jewelry

---

### 🌐 Submission & Publication Links 
***GitHub Repository URL:*** (https://github.com/jyalwan28-wq/JeayR_Boutique)

***Published Live Website (GitHub Pages):*** https://jyalwan28-wq.github.io/JeayR_Boutique/

---
## 📌 Project Overview 
JeayR Boutique is an online e-commerce platform designed to showcase authentic Papua New Guinea (PNG) traditional fashion and hand-made accessories. The website highlights local cultural heritage by featuring products such as traditional Meri blouses and statement earrings handcrafted from local shells and seeds.

## Target Audience 
* Local PNG customers seeking comfortable daily apparel and traditional wear. 
* Cultural gift buyers and tourists interested in authentic PNG artistry.
* International shoppers seeking ethically produced traditional crafts.
---
## 🏗️ Structure & Technical Architecture
The website consists of three core connected pages structured according to web standards

* **`index.html\` (Home):** Introduces the brand purpose, value highlights, and featured products.
* **`services.html\` (Catalog/Services):** Provides detailed item categories and product specifications.
* **`contact.html\` (Order Inquiry):** Features a structured HTML form for customer custom sizing and order requests.

Semantic tags used include `<header>\`, `<nav>\`, `<main>\`, `<section>\`, `<article>\`,`<figure>\`,`<figcaption>\`, and `<footer>\`.

### 2.External CSS3 &amp; Responsive Design (`styles.css`)
The site uses a custom external stylesheet with a dedicated deep burgundy color system and responsive CSS rules:
* **Color Palette:** Deep Burgundy (`--primary-color: #800020\`), hover state (`#a31535\`), soft khaki gold accent (`#f0e68c\`), dark slate text (`#333333\`), and high-contrast blue focus ring (`#2563eb\`).
* **Flexbox Layout (1D):** Applied to the header navigation (`nav ul\`) to align menu links horizontally with responsive wrapping on narrow screens.
* **CSS Grid Layout (2D):** Applied to `.product-grid\` to display product cards across responsive viewports:
* **Mobile (320px – 480px):** Single-column stacked grid (`grid-template-columns: 1fr\`).
* **Tablet (600px – 900px):** Two-column grid (`grid-template-columns: repeat(2, 1fr)\`).
* **Desktop (1024px+):** Three-column grid (`grid-template-columns: repeat(3, 1fr)\`).
---
## ⚡ JavaScript Interactive Features (`js/script.js\`)
In accordance with Assessment 4 requirements, two user-focused JavaScript features were built without external dependencies:
### Feature 1: Product Image Lightbox Modal
* * **Purpose:** Enables shoppers to inspect high-resolution product photos and details up close.
* * **Functionality:** Clicking any product card image triggers an overlaid modal window (`#product-modal\`), populating the enlarged image and caption dynamically.
* * **Accessibility Controls:** Automatically shifts keyboard focus to the close button upon opening, supports dismissal by clicking outside the modal content, and includes an `Escape\` key event listener.

### Feature 2: Interactive Order Form Validation
* **Purpose:** Validates customer inputs on \`contact.html\` prior to order request submission.
* **Functionallity:**
* **Full Name:** Verifies that input is not empty.
* **Email Address:** Applies regular expression testing(`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
* **Phone Number:** Validates PNG phone number formatting (7 to 8 numerical digits).
* **Product Selection:** Ensures a product choice is selected from the dropdown menu.
* **Feedback Mechanism:** Highlights invalid inputs with red borders (`.input-error`) and displays real-time field error messages (`.error-msg`) alongside a prominent aria-live status banner (`.feedback-banner.success` / `.feedback-banner.error`)

---
## 🖼️ Responsive Testing Evidence
### Mobile Viewport (375px) ![Mobile Viewport Screenshot](screenshots/mobile-screenshot.png)
### Tablet Viewport (768px) ![Tablet Viewport Screenshot](screenshots/tablet-screenshot.png)
### Desktop Viewport (1200px) ![Desktop Viewport Screenshot](screenshots/desktop-screenshot.png)


---
## 🧪 Quality Assurance & Testing Summary

* **Functional Testing:** Verified that all navigation menu hyperlinks, form submissions, modal open/close actions, and keyboard shortcuts function as intended across all pages.
* **Cross-Browser Testing:** Tested layout rendering and script execution across Google Chrome and Microsoft Edge.
* **Accessibility Audit:** Ensured visible focus rings (`:focus-visible`), readable color contrast ratios, descriptive image `alt` attributes, and semantic landmarks.
* **Code Validation:** Checked markup against HTML5 standards and verified clean CSS syntax.
---
## 📝 300–500-Word Project Summary (Assessment 4)

### 1. Website Purpose JeayR Boutique is an online e-commerce platform designed to promote and sell authentic Papua New Guinea (PNG) traditional fashion—such as daily Meri blouses—and handcrafted shell and seed jewelry. The project aims to make PNG cultural craftsmanship accessible globally through a user-friendly digital storefront.
### 2. Target Audience The primary audience includes local PNG customers seeking quality traditional wear, cultural gift buyers, and international shoppers interested in handcrafted apparel and accessories.
### 3. Main Website Features Built with semantic HTML5 and customized external CSS3 (`styles.css`), the website incorporates a deep burgundy visual theme (`#800020`). The layout utilizes a 1D Flexbox navigation menu and a 2D CSS Grid product display that dynamically adjusts from 1 column on mobile to 2 columns on tablet and 3 columns on desktop. High-contrast focus outlines (`:focus-visible`) and descriptive image alt text ensure accessibility compliance.
### 4. JavaScript Functionality Implemented Two core interactive features are implemented in `script.js`: 1. **Product Lightbox Modal:** Displays enlarged product images and captions when clicked, featuring close button focus shifts and keyboard `Escape` dismissal. 2. **Interactive Form Validation:** Validates full name, email regex, PNG phone numbers (7–8 digits), and product selection on `contact.html`, providing instant visual feedback via error highlights and an `aria-live` status banner.
### 5. Testing Performed Testing encompassed functional checks for all links and modal behaviors, responsive checks at 375px, 768px, and 1200px in DevTools Device Mode across Chrome and Edge, and accessibility audits verifying focus visibility and contrast standards.
### 6. Known Limitations & Future Improvements Form data currently resets upon submission rather than persisting to a database or local storage. Future enhancements could integrate `localStorage` for cart persistence and dynamic catalog loading via a JSON fetch request.
### 7. AI Use Declaration I used generative AI (Gemini Notebook) to assist with explaining CSS Grid syntax, media query setup, and debugging JavaScript event listeners. I reviewed, modified, and tested all final code and documentation myself.

