import { Link } from 'wouter';

export function Header() {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Link href="/" className="block hover:opacity-90 transition-opacity">
          <div className="flex items-center justify-center">
            <svg width="400" height="80" viewBox="0 0 400 80" className="h-16 w-auto">
              {/* Calculator Icon */}
              <rect x="20" y="15" width="50" height="50" rx="8" fill="#8BB8E8" stroke="#5A8BC2" strokeWidth="2"/>
              <text x="30" y="32" fontSize="16" fill="#4A5568" fontFamily="Arial">+</text>
              <text x="25" y="50" fontSize="16" fill="#4A5568" fontFamily="Arial">×</text>
              <text x="42" y="50" fontSize="12" fill="#4A5568" fontFamily="Arial">÷</text>
              
              {/* Moon Icon */}
              <path d="M80 25 C 85 20, 95 25, 95 40 C 95 55, 85 60, 80 55 C 88 50, 88 30, 80 25 Z" fill="#9CA3E8"/>
              
              {/* Text */}
              <text x="120" y="50" fontSize="32" fill="#2D3748" fontFamily="Inter, sans-serif" fontWeight="600">
                SleepCycle.io
              </text>
            </svg>
          </div>
        </Link>
      </div>
    </header>
  );
}