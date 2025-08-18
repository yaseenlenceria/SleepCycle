# Overview

This is a comprehensive full-stack sleep optimization platform built with React and Express. The application provides multiple scientifically-based calculators to help users optimize their sleep cycles using 90-minute REM cycle science. It features an advanced SEO-optimized design with smooth animations, multiple calculator modes (bedtime, wake-up, nap, sleep tracking, age-specific), and educational content to rank highly on Google for sleep-related searches.

The platform is now positioned as the "World's #1 Sleep Cycle Calculator" with comprehensive SEO implementation targeting top Google rankings for sleep calculator keywords.

## Recent Enhancements (January 2025)

### COMPREHENSIVE SEO OPTIMIZATION IMPLEMENTATION (January 17, 2025)
- **PROFESSIONAL FAVICON GENERATION**: Created and implemented custom sleep-themed favicon with multiple sizes (16x16, 32x32, 180x180, 192x192, 512x512)
- **WORLD'S #1 POSITIONING**: Complete rebranding to "★★★★★ World's #1 Sleep Cycle Calculator" with aggressive authority messaging
- **ENHANCED STRUCTURED DATA**: Comprehensive Schema.org markup including WebApplication, Organization, FAQPage, HowTo, and ItemList schemas
- **ADVANCED META OPTIMIZATION**: Updated title tags, descriptions, Open Graph tags, Twitter Cards with 5-star ratings and trust signals
- **COMPREHENSIVE SITEMAP IMPLEMENTATION**: XML sitemap with proper priority hierarchy, image sitemaps, and structured URL organization
- **ROBOTS.TXT OPTIMIZATION**: Search engine crawler directives with specific crawl delays and sitemap references
- **TECHNICAL SEO FILES**: Added webmanifest, browserconfig.xml, humans.txt for enhanced search engine recognition
- **AUTHORITY PAGE CREATION**: "/why-best-sleep-calculator" page with proof points, testimonials, and competitive comparisons
- **COMPLETE SITEMAP PAGE**: "/sitemap" with visual site structure and trust signals for both users and search engines
- **SEO-OPTIMIZED HOMEPAGE**: Added trust signals, authority badges, and "World's #1" messaging throughout interface
- **GOOGLE-FRIENDLY RICH SNIPPETS**: FAQ structured data and rich snippet optimization for enhanced search result display
- **SEARCH ENGINE VERIFICATION**: Meta tags for Google, Bing, Yandex, and Pinterest verification
- **MOBILE-FIRST SEO**: Optimized for mobile search with proper viewport, touch icons, and responsive design signals

## Previous Enhancements
- **COMPLETE VISUALIZATION REMOVAL**: Eliminated all Interactive Sleep Cycle Visualization components per user preference for ultra-simple interface
- **MOBILE-FIRST OPTIMIZATION**: Fixed mobile card layouts with responsive sizing, reduced padding, and optimized touch targets for perfect mobile experience
- **ULTRA-SIMPLIFIED HOMEPAGE**: Streamlined interface to just three essential cards - "I will wake up at", "I will go to bed at", and "Sleep Now" buttons
- **FIXED BEDTIME FUNCTIONALITY**: Connected "Find My Wake Time" button to proper calculation handlers, resolving non-working bedtime calculator
- **CRITICAL BUG FIXES**: Fixed major accuracy issues with bedtime and wake-up calculation results in health assessments
- **Accurate Sleep Duration Calculations**: Fixed `calculateSleepHours` function to properly parse AM/PM time formats and handle overnight sleep periods
- **Enhanced Time Parsing**: Implemented robust time string parsing with proper 24-hour conversion for bedtime/wake-up calculations
- **Corrected Health Assessment Logic**: Fixed bedtime vs wake-up time assignment in health assessment generation to ensure accurate sleep duration analysis
- **Real-Time Current Time Integration**: Fixed wake-up calculator to use actual current time instead of placeholder strings for accurate health assessments
- **AI Health Assessment Integration**: Integrated FREE personalized health recommendations system providing evidence-based sleep advice based on user demographics (age, biological sex)
- **Comprehensive Health Recommendation Engine**: Created robust evidence-based recommendation system with age-specific, sex-specific, and universal sleep health guidance based on CDC guidelines and medical research
- **Privacy-Protected User Profile System**: Added user demographic collection (age, sex) with secure, local-only data storage for personalized health assessments
- **Real-Time Sleep Quality Analysis**: Enhanced results display with sleep quality assessments (Excellent/Good/Fair/Poor), health benefits analysis, and risk factor warnings based on actual sleep duration
- **Age-Specific Sleep Recommendations**: Implemented customized sleep guidance for different age groups (teens, adults 18-64, seniors 65+) based on medical research
- **Gender-Specific Health Insights**: Added specialized recommendations for men's and women's sleep health, including hormonal considerations and health risks
- **Evidence-Based Health Content**: Replaced generic advice with authoritative recommendations covering sleep hygiene, exercise, nutrition, and medical considerations
- **Aggressive AI-First SEO Messaging**: Completely rebranded entire website with "AI Sleep Calculator with FREE Health Assessment" positioning
- **"Fix Your Sleep with AI" Positioning**: Updated all meta titles, descriptions, and headlines to emphasize AI-powered personalized recommendations
- **Target Keywords Integration**: Optimized for "AI sleep calculator", "fix my sleep cycle", "sleep cycle AI tool", "personalized health assessment", "Baby & Toddler Nap Calculator", "Nap Calculator - Optimal Nap Duration", "Age-Specific Sleep Calculator"
- **AI-Powered Calculator Titles**: Updated all calculator sections with "AI" prefix and "Health Assessment" messaging
- **Comprehensive SEO Meta Optimization**: All pages now feature "AI Sleep Calculator with FREE Health Assessment" branding and aggressive AI positioning
- **Advanced Sleep Science Content**: Enhanced educational content with AI sleep science & personalized health assessment focus
- **Mobile-Responsive User Profile Forms**: Sleek age/sex selection interface with privacy notices and instant profile updates
- **Enhanced Results Integration**: Sleep calculation results now include personalized health recommendations, sleep quality analysis, and evidence-based guidance
- **Anti-Generic Messaging**: Implemented aggressive "Not just another calculator – AI that adapts to YOU" messaging throughout the platform
- **Medical Authority Positioning**: Emphasized evidence-based recommendations from U.S. Health Department data and CDC guidelines
- **Complete SEO Rebranding**: Updated homepage title to "AI Sleep Calculator with FREE Health Assessment | Fix Your Sleep Cycle - Sleepcycle.io"
- **Baby & Toddler Nap Calculator**: Rebranded baby sleep pages with AI-powered nap calculator messaging and personalized health assessment focus
- **Age-Specific Sleep Calculator**: Updated adult sleep cycles page with age-specific AI health assessment positioning
- **Nap Calculator - Optimal Duration**: Enhanced nap calculator with AI-powered optimal duration and timing recommendations
- **Sleep Cycle Pages Collection**: Updated 9 SEO-optimized pages with AI health assessment messaging
- **Unified Component Architecture**: Enhanced with health assessment integration across all calculator types
- **Complete Legal Compliance**: Terms of Service, Privacy Policy with health data protection and GDPR compliance

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