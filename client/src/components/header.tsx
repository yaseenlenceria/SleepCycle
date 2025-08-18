import { Link } from 'wouter';

export function Header() {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Link href="/" className="block hover:opacity-90 transition-opacity">
          <img 
            src="/logo.png" 
            alt="SleepCycle.io"
            className="h-16 w-auto mx-auto"
            loading="eager"
          />
        </Link>
      </div>
    </header>
  );
}