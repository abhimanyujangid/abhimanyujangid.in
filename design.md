# Minimal Creative Portfolio — Design System

## Design Style
Minimal brutal + editorial portfolio aesthetic inspired by modern creative agencies and award-winning portfolios.

Core principles:
- Large typography
- Strong whitespace
- Monochrome palette
- Thin separators
- Grid-based layout
- Subtle motion
- Premium scroll feel

---

# Color Palette

## Primary Colors

| Name | HEX |
|---|---|
| Background | #F3F1EE |
| Primary Text | #111111 |
| Secondary Text | #5A5A5A |
| Border | #D8D5D1 |
| Button BG | #000000 |
| Button Text | #FFFFFF |

---

# Typography

## Font Pairing

### Headings
Use:
- Suisse Intl
- General Sans
- Satoshi
- Inter Tight

Fallback:
```css
font-family: "Inter", sans-serif;
````

### Body

```css
font-family: "Inter", sans-serif;
```

---

# Typography Scale

## Hero Heading

```css
font-size: clamp(5rem, 12vw, 14rem);
font-weight: 500;
line-height: 0.9;
letter-spacing: -0.06em;
text-transform: uppercase;
```

## Section Labels

```css
font-size: 0.95rem;
font-weight: 500;
letter-spacing: -0.02em;
text-transform: uppercase;
```

## Body Text

```css
font-size: 1.1rem;
line-height: 1.5;
font-weight: 400;
```

## Navigation

```css
font-size: 0.95rem;
font-weight: 500;
text-transform: uppercase;
```

---

# Layout System

## Container

```css
width: min(92%, 1600px);
margin-inline: auto;
```

## Grid

Use:

```css
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 2rem;
```

---

# Spacing System

| Token | Size   |
| ----- | ------ |
| xs    | 0.5rem |
| sm    | 1rem   |
| md    | 2rem   |
| lg    | 4rem   |
| xl    | 8rem   |
| xxl   | 12rem  |

---

# Components

# Navbar

## Style

* Transparent background
* Floating layout
* Minimal navigation
* Rounded CTA button

## CTA Button

```css
padding: 1rem 2rem;
border-radius: 999px;
background: #000;
color: #fff;
font-size: 0.9rem;
```

---

# Hero Section

## Layout

* Oversized typography
* Floating portrait image
* Editorial composition
* Large whitespace

## Hero Image

```css
border-radius: 12px;
transform: rotate(-2deg);
object-fit: cover;
```

---

# Section Labels

Use thin line + label.

Example:

```html
<div class="section-label">
  <span class="line"></span>
  <p>Experience</p>
</div>
```

CSS:

```css
.section-label {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.section-label .line {
  width: 32px;
  height: 1px;
  background: #111;
}
```

---

# Experience Table

## Style

* Minimal rows
* Thin dividers
* Left aligned content
* Plenty of breathing space

```css
.row {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  padding: 1rem 0;
  border-bottom: 1px solid #d8d5d1;
}
```

---

# Motion System

# Recommended Stack

Use:

* GSAP
* ScrollTrigger
* Lenis

---

# Animation Principles

## Entrance Animations

* Fade + translateY
* Scale reveal
* Text masking

## Scroll Feel

* Smooth scrolling
* Slow easing
* Subtle parallax

## Timing

```js
duration: 1.2
ease: "power3.out"
```

---

# Recommended Animations

## Hero Text Reveal

```js
y: 120 -> 0
opacity: 0 -> 1
```

## Image Float

```js
rotate: -2deg
y: [-10, 10]
repeat: -1
```

## Section Reveal

```js
opacity: 0
y: 40
```

---

# ScrollTrigger Ideas

## Experience Section

Animate rows individually:

* stagger reveal
* line expansion
* fade upward

## Awards Section

Number counter animation:

```js
0 -> final number
```

---

# Cursor Ideas

Optional:

* Custom cursor
* Magnetic button hover
* Image preview hover

Use:

* GSAP quickTo
* Framer Motion spring

---

# Responsive Rules

## Tablet

* Reduce hero text
* Stack columns
* Reduce spacing

## Mobile

```css
grid-template-columns: 1fr;
```

Hero:

```css
font-size: clamp(3rem, 16vw, 6rem);
```

---

# Design Keywords

* Editorial
* Minimal
* Swiss
* Brutalist
* Luxury
* Portfolio
* Clean
* Creative Developer
* Motion-first

---

# Best Stack

## Frontend

* Next.js
* Tailwind CSS
* GSAP
* Lenis

## Alternative

* Webflow + GSAP
* Framer + GSAP

---

# Inspiration References

Look at:

* Awwwards
* Minimal Gallery
* Godly.website
* Locomotive portfolios
* Studio Freight
* Active Theory
* Basic Agency

---

# Recommended Folder Structure

```bash
src/
 ├── components/
 ├── sections/
 ├── animations/
 ├── hooks/
 ├── styles/
 └── assets/
```

---

# Final Feel

The website should feel:

* calm
* premium
* spacious
* cinematic
* motion-driven
* modern editorial
* highly polished
