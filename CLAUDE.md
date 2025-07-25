# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Start Next.js development server
- **Build**: `npm run build` - Build production application
- **Start production**: `npm start` - Start production server
- **Lint**: `npm run lint` - Run ESLint for code quality

## Project Architecture

This is a Next.js 15 application for "Soulful Dental Care" - a dental clinic website for Dr. Swapnil K. Rachha's practice in Kothrud, Pune.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Typography**: Google Fonts (Inter, Playfair Display, Crimson Text)
- **AI Integration**: CopilotKit for chatbot functionality
- **Animation**: Framer Motion

### Design System
The project uses a sophisticated dental-themed design system with:
- **Primary colors**: Blue (#0891b2) and Pink (#ec4899) theme
- **Typography**: Display fonts (Playfair Display), body text (Inter), accent text (Crimson Text)
- **Custom animations**: Elegant floating animations, shimmers, fade-ins
- **Responsive grid systems**: For gallery, services, and testimonials

### Component Architecture
- **Layout Components**: Multiple header variations (PinkBlueHeader, ElegantHeader, etc.)
- **Section Components**: Modular page sections (Hero, About, Services, Gallery, Contact, Testimonials)
- **UI Components**: Reusable components in `/src/components/ui/`
- **Chat Integration**: CopilotKit-powered chatbot for patient inquiries

### Key Features
- **Multi-theme support**: Pink/Blue theme currently active
- **AI Chatbot**: Patient consultation and appointment booking assistance
- **SEO optimized**: Comprehensive metadata, structured data, OpenGraph
- **Mobile responsive**: Tailored for dental practice marketing
- **Performance optimized**: Font optimization, image handling

### Content Structure
- **Clinic content**: Located in `/src/lib/contant.txt` with comprehensive dental service information
- **Image assets**: Dental clinic photos in `/public/soulfuldentalcare/`
- **Pages**: About, Services, Gallery, Contact with dedicated routes

### API Routes
- `/api/chat` - Handles chatbot conversations
- `/api/copilotkit` - CopilotKit integration endpoint

### Development Notes
- Uses TypeScript with strict configuration
- Path aliases configured (@/* maps to ./src/*)
- Tailwind configured with custom dental-themed design tokens
- Font loading optimized with display: swap for performance