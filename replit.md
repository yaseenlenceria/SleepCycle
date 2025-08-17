# Overview

This is a comprehensive full-stack sleep optimization platform built with React and Express. The application provides multiple scientifically-based calculators to help users optimize their sleep cycles using 90-minute REM cycle science. It features an advanced SEO-optimized design with smooth animations, multiple calculator modes (bedtime, wake-up, nap, sleep tracking, age-specific), and educational content to rank highly on Google for sleep-related searches.

## Recent Enhancements (January 2025)
- **Comprehensive SEO Meta Optimization**: Updated all pages with "#1 app" positioning in titles and descriptions targeting competitive search terms
- **Advanced Sleep Science Content**: Replaced outdated "90-minute" references with comprehensive sleep cycle information including REM/non-REM cycles, CDC sleep recommendations, and sleep quality metrics
- **Educational Content Expansion**: Added complete sleep science guide covering circadian rhythms, sleep quality measurement, age-specific recommendations from CDC data
- **Scientific Accuracy Updates**: Integrated authoritative sleep research covering sleep cycle variations (70-120 minutes), REM vs non-REM functions, and individual sleep needs
- **More Resources Page**: Added competitor comparison with sleepytime.cc and sleepcalculator.com, showcasing unique features
- **Mobile-Responsive Calculators**: All calculator buttons and cards now properly sized for mobile devices
- **Unified Component Architecture**: Created reusable Header and Footer components used across all pages
- **Scroll-to-Top Navigation**: Implemented proper page scrolling behavior on route changes
- **Sleep Science Hub**: Comprehensive educational page with updated scientific content covering REM optimization, circadian rhythms, age-specific needs, and sleep quality analysis
- **Functional Calculator Links**: Footer calculator links now properly navigate to specific tabs with URL parameters
- **Contact Support & Help Pages**: Professional support system with SIA Webby company details
- **Mobile-Optimized Header**: Reduced header size from 3xl to xl/2xl for better mobile experience
- **SEO-Optimized Internal Linking**: Strategic footer navigation targeting all key sleep-related keywords
- **Legal Compliance**: Complete Terms of Service, Privacy Policy with GDPR compliance
- **URL Parameter Navigation**: Calculator tabs accessible via /?tab=bedtime, /?tab=wakeup, etc.
- **Comprehensive FAQ System**: Detailed help content for each calculator mode with scientific explanations
- **Complete SEO Optimization**: Proper XML sitemap, Google Search Console verification, structured data, meta tags, Open Graph, and robots.txt for maximum search visibility
- **Age Calculator Page**: Comprehensive age calculation tool that determines exact age in years, months, days, plus zodiac signs, generations, and fun statistics with full SEO optimization
- **Sleep Cycle Pages Collection**: Created 9 SEO-optimized pages covering all targeted keywords with updated scientific content:
  - sleep-cycles-babies.tsx - Complete baby sleep guide (0-12 months)
  - sleep-cycles-adults.tsx - Adult sleep cycles with REM/non-REM patterns  
  - sleep-cycles-naps.tsx - Power napping and strategic nap guide
  - sleep-cycles-newborns.tsx - Newborn sleep patterns (0-3 months)
  - sleep-cycles-4-month-old.tsx - 4-month sleep regression and milestones
  - sleep-cycles-6-month-old.tsx - 6-month sleep training and solid foods
  - sleep-cycles-7-month-old.tsx - 7-month mobility and sleep changes
  - sleep-cycles-toddlers.tsx - Toddler sleep patterns (1-3 years)
  - sleep-cycles-2-year-olds.tsx - 2-year sleep regression and big kid bed
- **Clickable Logo Navigation**: Header logo now links to home page for better user experience
- **Enhanced Footer Navigation**: Complete footer restructured with age-specific sleep cycle links organized by categories
- **Updated XML Sitemap**: All new pages added with appropriate priority rankings for SEO

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