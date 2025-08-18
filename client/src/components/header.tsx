import { Link } from 'wouter';

export function Header() {
  return (
    <header className="bg-white bg-opacity-95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="text-center">
          <Link href="/" className="block hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="SleepCycle.io - World's #1 Sleep Cycle Calculator"
              className="h-12 sm:h-16 md:h-20 w-auto mx-auto"
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}