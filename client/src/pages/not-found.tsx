import { Link } from 'wouter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Clock, Home, Calculator, BookOpen, Search, Moon, Zap } from 'lucide-react';
import { useEffect } from 'react';

export function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found - SleepCycle.io | World's #1 Sleep Calculator";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Oops! This page doesn\'t exist. Find what you need with our sleep calculators, optimization guides, and comprehensive blog on sleep science.');
    }
    
    // Set additional meta tags
    const setMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };
    
    setMeta('robots', 'noindex, nofollow');
    setMeta('og:title', 'Page Not Found - SleepCycle.io');
    setMeta('og:description', 'This page doesn\'t exist. Explore our sleep calculators and optimization tools instead.');
  }, []);

  const quickLinks = [
    {
      title: 'Sleep Calculator',
      description: 'Find your optimal bedtime and wake time',
      icon: Calculator,
      href: '/sleep-calculator',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: '90-Minute Calculator',
      description: 'Calculate perfect wake times using science',
      icon: Clock,
      href: '/90-minute-sleep-cycle-calculator',
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Sleep Tracking',
      description: 'Track how much sleep you actually got',
      icon: Zap,
      href: '/how-much-sleep-did-i-get-calculator',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Blog & Guides',
      description: 'Expert sleep optimization content',
      icon: BookOpen,
      href: '/blog',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const popularPages = [
    { title: 'Baby Nap Calculator (0-12 months)', href: '/baby-nap-calculator-0-12-months' },
    { title: 'Sleep Calculator by Age', href: '/sleep-calculator-by-age' },
    { title: 'Nap Calculator for Adults', href: '/nap-calculator' },
    { title: 'How Long is One Sleep Cycle?', href: '/blog/how-long-one-sleep-cycle' },
    { title: 'Sleep Cycle Stages Guide', href: '/blog/sleep-cycle-stages' },
    { title: 'Best Sleep Apps 2025', href: '/blog/best-sleep-apps-2025' }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-6">
                <Moon className="w-16 h-16 text-indigo-600" />
              </div>
              <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Looks Like You're Having Sleep Troubles
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                This page seems to have gone to sleep permanently. But don't worry — we have plenty of other ways to help optimize your rest!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Link href="/sleep-calculator">
                <Button variant="outline" size="lg" className="border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-8 py-3">
                  <Calculator className="w-5 h-5 mr-2" />
                  Try Sleep Calculator
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Popular Tools & Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 h-full border border-gray-100">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl mb-4`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {link.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Pages */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Looking for Something Specific?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularPages.map((page) => (
                <Link key={page.href} href={page.href}>
                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
                    <Search className="w-4 h-4 text-gray-400 mr-3 group-hover:text-indigo-600" />
                    <span className="text-gray-700 group-hover:text-indigo-700 font-medium">
                      {page.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Search suggestion */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for?
              </p>
              <Link href="/blog">
                <Button variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse All Articles
                </Button>
              </Link>
            </div>
          </div>

          {/* SEO-friendly content */}
          <div className="mt-12 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to SleepCycle.io - The World's #1 Sleep Optimization Platform
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Even though this page doesn't exist, you're in the right place for science-based sleep optimization. 
                Our comprehensive suite of calculators, guides, and tools helps millions of users achieve better sleep quality. 
                From 90-minute sleep cycle calculators to age-specific baby nap tools, we provide everything you need for optimal rest.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
                <span className="bg-white px-3 py-1 rounded-full">Sleep Calculator</span>
                <span className="bg-white px-3 py-1 rounded-full">90-Minute Cycles</span>
                <span className="bg-white px-3 py-1 rounded-full">Baby Sleep</span>
                <span className="bg-white px-3 py-1 rounded-full">Nap Optimization</span>
                <span className="bg-white px-3 py-1 rounded-full">Sleep Tracking</span>
                <span className="bg-white px-3 py-1 rounded-full">Expert Guides</span>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}