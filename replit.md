# Overview

This is a comprehensive full-stack sleep optimization platform built with React and Express. The application provides multiple scientifically-based calculators to help users optimize their sleep cycles using 90-minute REM cycle science. It features an advanced SEO-optimized design with smooth animations, multiple calculator modes (bedtime, wake-up, nap, sleep tracking, age-specific), and educational content to rank highly on Google for sleep-related searches. The platform is positioned as the "World's #1 Sleep Cycle Calculator" with comprehensive SEO implementation targeting top Google rankings for sleep calculator keywords. Key capabilities include a comprehensive blog system, stunning header design, and complete mobile responsiveness.

# User Preferences

Preferred communication style: Simple, everyday language.
Target audience: Mobile users (primary), with very easy-to-use mobile interface
SEO focus: Target keywords including "sleep calculator", "90 minute sleep cycle calculator", "nap calculator for adults", "baby nap calculator", "how much sleep did I get", "scientifically best time to sleep"
Design priority: Mobile-first responsive design with large touch targets and simplified navigation
Domain: sleepcycle.io with comprehensive SEO optimization and legal compliance
Legal structure: SIA Webby (Latvia) with proper Terms of Service and Privacy Policy

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React hooks for local state, TanStack Query for server state
- **Build Tool**: Vite for fast development and optimized production builds
- **UI/UX Decisions**: Elegant gradient header, custom logo and favicon integration, professional tagline, responsive branding, redesigned time selection interface for mobile-first approach, responsive card layouts, enhanced touch interactions, and consistent branding across all pages.
- **Feature Specifications**: Scientifically-based calculators (bedtime, wake-up, nap, sleep tracking, age-specific), comprehensive blog system with SEO-optimized posts and navigation, AI health assessment integration providing evidence-based sleep advice based on user demographics, real-time sleep quality analysis, and age/gender-specific recommendations.

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server Setup**: Custom Vite middleware integration for development
- **Storage**: In-memory storage implementation with interface for future database integration
- **API Structure**: RESTful endpoints with `/api` prefix
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Data Storage Solutions
- **Current**: In-memory storage using Map data structures
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Schema**: User table with username/password fields and UUID primary keys
- **Migrations**: Drizzle-kit setup for database schema management

## Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **User Model**: Basic user schema with username and password fields
- **Storage Interface**: Abstracted storage layer supporting user CRUD operations

## System Design Choices
The architecture follows a monorepo structure with clear separation between client, server, and shared code. The sleep calculation logic is implemented as pure functions that calculate optimal sleep times based on 90-minute sleep cycles, accounting for a 15-minute fall-asleep period. Mobile-first optimization is a core design principle, resulting in streamlined interfaces and optimized touch targets. Extensive SEO optimization is integrated at all levels, including structured data, meta optimization, sitemaps, and robots.txt.

# External Dependencies
- **Database**: Neon serverless PostgreSQL (configured but not actively used)
- **UI Framework**: Radix UI for accessible component primitives
- **Form Handling**: React Hook Form with Zod resolvers for validation
- **Date Utilities**: date-fns for time calculations and formatting
- **Icons**: Lucide React for consistent iconography