import { Link } from 'wouter';
import { Menu, X, Calculator, Baby, Clock, Users, Brain } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <img 
              src="/logo.png" 
              alt="SleepCycle.io - World's #1 Sleep Calculator"
              className="h-12 sm:h-14 md:h-16 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              <Calculator size={18} />
              <span>Sleep Calculator</span>
            </Link>
            <Link href="/sleep-cycles-babies" className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 font-medium transition-colors">
              <Baby size={18} />
              <span>Baby Sleep</span>
            </Link>
            <Link href="/90-minute-sleep-cycle-calculator" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 font-medium transition-colors">
              <Clock size={18} />
              <span>90-Min Cycles</span>
            </Link>
            <Link href="/sleep-cycles-adults" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 font-medium transition-colors">
              <Users size={18} />
              <span>Adult Sleep</span>
            </Link>
            <Link href="/sleep-science" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              <Brain size={18} />
              <span>Sleep Science</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="grid grid-cols-1 gap-4">
              <Link 
                href="/" 
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calculator size={20} />
                <span>Main Sleep Calculator</span>
              </Link>
              <Link 
                href="/sleep-cycles-babies" 
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <Baby size={20} />
                <span>Baby & Toddler Sleep</span>
              </Link>
              <Link 
                href="/90-minute-sleep-cycle-calculator" 
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <Clock size={20} />
                <span>90-Minute Sleep Cycles</span>
              </Link>
              <Link 
                href="/sleep-cycles-adults" 
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users size={20} />
                <span>Adult Sleep Optimization</span>
              </Link>
              <Link 
                href="/sleep-science" 
                className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <Brain size={20} />
                <span>Sleep Science & Research</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}