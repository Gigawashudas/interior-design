# FORM/SPACE

**Interior Architecture & Design Studio Website**

A modern, premium, responsive website for **FORM/SPACE**, an interior architecture and design studio based in Bangladesh.

The website is designed around a minimalist editorial aesthetic with strong typography, large imagery, subtle interactions, and a clean black, white, and orange visual identity.

---

## Overview

FORM/SPACE is a full-stack-ready studio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

The website includes:

- Premium responsive design
- Dark / light mode
- Interior design portfolio
- Services showcase
- About page
- Contact page
- Lead submission system
- Admin lead management
- Lead status tracking
- WhatsApp integration
- Phone and email contact actions
- Mobile-first layouts
- Technical SEO foundation

---

## Features

### Public Website

#### Home

- Full-screen hero section
- Studio introduction
- Philosophy section
- Services preview
- Selected work / portfolio
- Client testimonials
- Project CTA
- Footer navigation

#### Services

Showcase the studio's major services, including:

- Residential Design
- Commercial Spaces
- 3D Visualization

#### Portfolio

A visual project showcase designed around large architectural imagery.

#### About

Information about the studio, its approach, philosophy, and design process.

#### Contact

A dedicated contact form for potential clients to submit project inquiries.

---

## Lead Management

The website includes a lead management system for handling project inquiries.

Each lead can contain:

- Name
- Phone number
- Email
- Project type
- Budget
- Location
- Message
- Status
- Created date
- Updated date

### Lead statuses

```text
NEW
CONTACTED
QUALIFIED
CONVERTED
LOST
```

The admin dashboard allows leads to be:

- Searched
- Filtered by status
- Sorted by date
- Viewed individually
- Updated with a new status

Status changes are saved immediately through the API.

---

## Contact Actions

Lead details support direct communication through:

### Phone

```text
tel:+880...
```

### Email

```text
mailto:...
```

### WhatsApp

WhatsApp opens with a pre-filled message so the studio can quickly start a conversation with a potential client.

The floating WhatsApp button is designed to match the FORM/SPACE visual language:

- Circular icon on mobile
- WhatsApp icon + "Chat with us" on desktop
- Responsive positioning
- Minimal premium appearance

---

## Theme System

FORM/SPACE supports both:

- Light mode
- Dark mode

The selected theme is stored in `localStorage`.

Theme behavior:

1. Use the user's saved preference when available.
2. Otherwise detect the system preference.
3. Apply the theme before the page renders to reduce visual flashing.

The website uses Tailwind's `dark:` utilities throughout the UI.

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Next/Image
- Next/Link

### Backend

- Next.js API Routes
- Lead API
- Lead status updates

### Deployment

Designed for deployment with:

- Vercel
- GitHub

---

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── portfolio/
│   ├── services/
│   ├── admin/
│   │   └── leads/
│   ├── api/
│   │   └── leads/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── footer.tsx
│   ├── navbar.tsx
│   ├── theme-toggle.tsx
│   └── whatsapp-button.tsx
│
└── ...
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Enter the project

```bash
cd interior-design
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

Run the production server:

```bash
npm start
```

---

## Environment Variables

If your lead system or future CMS/database requires environment variables, create:

```text
.env.local
```

Example:

```env
# Add project-specific environment variables here
```

Never commit `.env.local` or private API keys to Git.

---

## SEO

The project includes a basic Next.js metadata configuration.

Current metadata includes:

```text
Title:
FORM/SPACE — Interior Architecture & Design

Description:
Interior architecture and design studio creating thoughtful spaces across Bangladesh.
```

Before production launch, consider adding:

- Custom domain
- Open Graph image
- Twitter/X metadata
- Sitemap
- Robots.txt
- Google Search Console
- Google Analytics
- Structured data
- Local SEO for Dhaka/Bangladesh
- Optimized page-specific metadata

---

## Responsive Design

The website is designed for:

- Mobile phones
- Tablets
- Laptops
- Desktop displays

Layouts adapt using Tailwind responsive breakpoints.

Special attention is given to:

- Navigation
- Typography
- Portfolio imagery
- Contact actions
- Admin dashboard
- WhatsApp CTA
- Dark mode

---

## Design System

### Primary colors

```text
Black       #111111
White       #FFFFFF
Accent      #F97316
```

The orange accent is used for:

- Buttons
- Links
- Icons
- Active states
- Section labels
- Important visual details

The design intentionally keeps the interface restrained and editorial rather than using excessive cards, gradients, or animations.

---

## Image Handling

The portfolio and hero sections currently use external image sources.

For production, replace temporary images with:

- Licensed project photography
- Optimized WebP/AVIF images
- Local project images
- Proper image dimensions
- Descriptive alt text

---

## Development Guidelines

Keep the visual language consistent:

- Minimal layouts
- Strong typography
- Generous spacing
- High-quality imagery
- Orange accent used selectively
- Subtle interactions
- Responsive behavior
- Accessible buttons and links

Avoid unnecessary dependencies unless they provide significant value.

---

## Deployment

The recommended deployment workflow is:

```text
Local Development
       ↓
GitHub
       ↓
Vercel
       ↓
Custom Domain
       ↓
Production
```

Every push to the production branch can trigger a new Vercel deployment when GitHub and Vercel are connected.

---

## Future Improvements

Potential future features:

- CMS for portfolio management
- Database-backed lead management
- Lead notes
- Follow-up reminders
- Lead activity history
- Email notifications
- WhatsApp notification automation
- Google Analytics
- Google Search Console
- Sitemap generation
- Structured data
- Project detail pages
- Client login area
- Blog / journal
- Testimonials management
- Image optimization pipeline

---

## License

This project is proprietary software created for FORM/SPACE.

Unauthorized copying, redistribution, or commercial reuse is not permitted without permission from the project owner.

---

## FORM/SPACE

**Interior Architecture & Design**

Dhaka, Bangladesh

> Spaces that feel like you.
