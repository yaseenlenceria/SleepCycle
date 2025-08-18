import { Moon, Star } from 'lucide-react';
import { Link } from 'wouter';

export function Header() {
  return (
    <header className="bg-white bg-opacity-95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="text-center">
          <Link href="/" className="block hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center mb-2">
              {/* SEO-Optimized Logo */}
              <img 
                src="/logo.png" 
                alt="SleepCycle.io - World's #1 Sleep Cycle Calculator Logo"
                title="SleepCycle.io - Best Sleep Calculator with AI Health Assessment"
                className="h-8 sm:h-10 w-auto mr-3 sm:mr-4"
                width="200"
                height="40"
                loading="eager"
                decoding="async"
              />
              <div className="flex items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">
                  SleepCycle.io
                </h1>
                <Star className="text-purple-600 ml-2 animate-pulse" size={16} />
              </div>
            </div>
          </Link>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ★★★★★ World's #1 Sleep Calculator with FREE AI Health Assessment
          </p>
        </div>
      </div>
    </header>
  );
}