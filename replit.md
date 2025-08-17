# Overview

This is a comprehensive full-stack sleep optimization platform built with React and Express. The application provides multiple scientifically-based calculators to help users optimize their sleep cycles using 90-minute REM cycle science. It features an advanced SEO-optimized design with smooth animations, multiple calculator modes (bedtime, wake-up, nap, sleep tracking, age-specific), and educational content to rank highly on Google for sleep-related searches.

## Recent Enhancements (January 2025)
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