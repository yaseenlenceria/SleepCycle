# Overview

This is a comprehensive full-stack sleep optimization platform built with React and Express. The application provides multiple scientifically-based calculators to help users optimize their sleep cycles using 90-minute REM cycle science. It features an advanced SEO-optimized design with smooth animations, multiple calculator modes (bedtime, wake-up, nap, sleep tracking, age-specific), and educational content to rank highly on Google for sleep-related searches.

## Recent Enhancements (January 2025)
- **Full SEO Optimization for sleepcycle.io domain**: Updated all meta tags, structured data, and canonical URLs
- **Legal Pages**: Created Terms of Service, Privacy Policy, and About pages with proper internal linking
- **Enhanced Footer**: Added comprehensive footer with internal navigation targeting SEO keywords
- **Sitemap & Robots.txt**: Created XML sitemap and robots.txt for better search engine crawling
- **6 Calculator Modes**: Bedtime, Wake-up, Nap, Baby, Sleep Tracker, and Age-specific calculators
- **Mobile-First Design**: Optimized time picker with large touch targets for mobile users
- **Baby Nap Calculator**: Age-specific schedules (0-3 months to 3+ years) targeting "nap calculator baby"
- **Keyword Targeting**: "sleep calculator", "90 minute sleep cycle calculator", "nap calculator for adults", "baby nap calculator", "how much sleep did I get", "scientifically best time to sleep"
- **Internal Link Structure**: Strategic footer navigation and cross-page linking for SEO
- **Structured Data**: Comprehensive schema.org markup for better search visibility
- **Performance**: DNS prefetching, optimized fonts, and mobile viewport optimization

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

## External Dependencies
- **Database**: Neon serverless PostgreSQL (configured but not actively used)
- **UI Framework**: Radix UI for accessible component primitives
- **Form Handling**: React Hook Form with Zod resolvers for validation
- **Date Utilities**: date-fns for time calculations and formatting
- **Icons**: Lucide React for consistent iconography
- **Development**: Replit-specific plugins for runtime error handling and cartographer integration

The architecture follows a monorepo structure with clear separation between client, server, and shared code. The sleep calculation logic is implemented as pure functions that calculate optimal sleep times based on 90-minute sleep cycles, accounting for a 15-minute fall-asleep period.