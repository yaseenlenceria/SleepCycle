import { Moon, Star } from 'lucide-react';
import { Link } from 'wouter';

export function Header() {
  return (
    <header className="bg-white bg-opacity-95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="text-center">
          <Link href="/" className="block hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center mb-2">
              <Moon className="text-sleep-blue-600 mr-2 sleep-float" size={24} />
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sleep-blue-800 to-sleep-purple-600 bg-clip-text text-transparent">
                SleepCycle.io
              </h1>
              <Star className="text-sleep-purple-600 ml-2 sleep-pulse" size={20} />
            </div>
          </Link>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Optimize your sleep with scientifically-backed 90-minute sleep cycles
          </p>
        </div>
      </div>
    </header>
  );
}