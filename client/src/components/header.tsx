import { Link } from 'wouter';

export function Header() {
  return (
    <header className="relative">
      {/* Beautiful gradient background */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Logo centered with elegant styling */}
          <div className="text-center">
            <Link href="/" className="inline-block hover:scale-105 transition-all duration-300 ease-out">
              <div className="relative group">
                {/* Subtle glow effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Logo with shadow and styling */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                  <img 
                    src="/logo.jpg" 
                    alt="SleepCycle.io - World's #1 Sleep Calculator"
                    className="h-16 sm:h-18 md:h-20 w-auto mx-auto drop-shadow-sm"
                    loading="eager"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Elegant tagline */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-lg font-light tracking-wide">
              World's Most Trusted Sleep Optimization Platform
            </p>
            <div className="flex items-center justify-center mt-2 space-x-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-2">Rated by 10M+ users worldwide</span>
            </div>
          </div>

          {/* Elegant Navigation Links */}
          <div className="text-center mt-8">
            <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/50"
              >
                Sleep Calculator
              </Link>
              <Link 
                href="/sleep-cycles-babies" 
                className="text-gray-700 hover:text-pink-600 font-medium text-lg transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/50"
              >
                Baby Sleep
              </Link>
              <Link 
                href="/90-minute-sleep-cycle-calculator" 
                className="text-gray-700 hover:text-purple-600 font-medium text-lg transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/50"
              >
                90-Min Cycles
              </Link>
              <Link 
                href="/sleep-cycles-adults" 
                className="text-gray-700 hover:text-green-600 font-medium text-lg transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/50"
              >
                Adult Sleep
              </Link>
              <Link 
                href="/sleep-science" 
                className="text-gray-700 hover:text-indigo-600 font-medium text-lg transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/50"
              >
                Sleep Science
              </Link>
            </nav>
          </div>
        </div>

        {/* Subtle bottom border gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
    </header>
  );
}