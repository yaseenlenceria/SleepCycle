import { useState } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Menu, X, Star } from 'lucide-react';
import { LanguageSwitcher } from '@/components/language-switcher';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function MobileNavigation() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { href: '/', label: 'Calculator', color: 'text-blue-600' },
    { href: '/sleep-cycles-babies', label: t('navigation.babySleep'), color: 'text-pink-600' },
    { href: '/sleep-cycles-adults', label: t('navigation.adultSleep'), color: 'text-green-600' },
    { href: '/sleep-science', label: 'Sleep Science', color: 'text-indigo-600' },
    { href: '/blog', label: 'Blog', color: 'text-orange-600' },
    { href: '/contact', label: 'Contact', color: 'text-purple-600' },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button 
          className="p-2 rounded-lg hover:bg-white/50 transition-colors"
          data-testid="mobile-menu-trigger"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-80 p-0 bg-gradient-to-b from-blue-50 to-purple-50">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Access all sleep calculator features and information</SheetDescription>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          {/* Header section with logo and close */}
          <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <img 
                  src="/logo.jpg" 
                  alt="SleepCycle.io"
                  className="h-8 w-auto"
                />
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            {/* Brand info */}
            <div className="mt-3">
              <p className="text-sm text-gray-600 font-medium">
                {t('header.title')}
              </p>
              <div className="flex items-center mt-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-2">{t('header.rating')}</span>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex-1 p-4">
            <nav className="space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-white/70 hover:${link.color} hover:scale-105 border border-transparent hover:border-gray-200 hover:shadow-sm`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Language switcher */}
          <div className="border-t border-gray-200 p-4 bg-white/50">
            <div className="text-xs text-gray-500 mb-2 font-medium">LANGUAGE</div>
            <LanguageSwitcher />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}