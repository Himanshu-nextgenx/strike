# STRIKE — Neo-Brutalist React Course Platform

A frontend-only React web application recreating the UI and structure of **strikes.in** in a bold **NEO-BRUTALIST COLLAGE MAXIMALISM** design, featuring a signature **HTML5 Canvas Scratch-Card Coupon** on every course detail page.

---

## 🚀 Quick Start

### 1. Installation
```bash
cd strike-app
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎨 Navigation & Features
- **All Navigation Items**:
  - `Home` (`/`)
  - `Courses` (`/#courses` smooth scroll)
  - `Practice` (`/practice`)
  - `CodeArena` (`/codearena`)
  - `Quiz` (`/quiz`)
  - `System Design` (`/system-design`)
  - `Contests` (`/contests`)
- **Back Buttons**: All course, membership, and coming-soon pages use `useNavigate` browser history navigation with safe fallback links.
- **Dedicated Membership Pages**: `Strike Plus` (`/membership/strike-plus`) & `Strike Ultra` (`/membership/strike-ultra`) feature full dedicated detail pages with course checklists & scratch card coupons.
