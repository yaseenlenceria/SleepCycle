import { Moon, Star } from 'lucide-react';
import { Link } from 'wouter';

export function Header() {
  return (
    <header className="bg-white bg-opacity-95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="text-center">
          <Link href="/" className="block hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center mb-2">
              {/* SleepCycle.io Logo */}
              <img 
                src="attached_assets/logo-sleepcyclecalculator.png" 
                alt="SleepCycle.io - World's #1 Sleep Cycle Calculator"
                className="h-8 sm:h-10 md:h-12 w-auto max-w-xs"
                loading="eager"
                decoding="async"
              />
            </div>
          </Link>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          World's #1 Sleep Calculator with FREE AI Health Assessment
          </p>
        </div>
      </div>
    </header>
  );
}