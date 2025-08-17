import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="border-t border-gray-200 pt-8">
          {/* Enhanced Footer with Internal Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Sleep Calculators</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#bedtime" className="text-sleep-blue-600 hover:text-sleep-blue-700">Bedtime Calculator</a></li>
                <li><a href="/#wakeup" className="text-sleep-blue-600 hover:text-sleep-blue-700">Wake-up Time Calculator</a></li>
                <li><a href="/#nap" className="text-sleep-blue-600 hover:text-sleep-blue-700">Nap Calculator for Adults</a></li>
                <li><a href="/#baby" className="text-sleep-blue-600 hover:text-sleep-blue-700">Baby Nap Calculator</a></li>
                <li><a href="/#tracker" className="text-sleep-blue-600 hover:text-sleep-blue-700">Sleep Duration Tracker</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Sleep Science</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-gray-600">90 Minute Sleep Cycles</span></li>
                <li><span className="text-gray-600">REM Sleep Optimization</span></li>
                <li><span className="text-gray-600">Circadian Rhythm Tips</span></li>
                <li><span className="text-gray-600">Age-Specific Recommendations</span></li>
                <li><span className="text-gray-600">Sleep Quality Analysis</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-sleep-blue-600 hover:text-sleep-blue-700">About SleepCycle.io</Link></li>
                <li><Link href="/" className="text-sleep-blue-600 hover:text-sleep-blue-700">Sleep Calculator Home</Link></li>
                <li><Link href="/help" className="text-sleep-blue-600 hover:text-sleep-blue-700">Help & FAQ</Link></li>
                <li><span className="text-gray-600">Best Time to Sleep</span></li>
                <li><span className="text-gray-600">Optimal Nap Duration</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Legal & Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="text-sleep-blue-600 hover:text-sleep-blue-700">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-sleep-blue-600 hover:text-sleep-blue-700">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-sleep-blue-600 hover:text-sleep-blue-700">Contact Support</Link></li>
                <li><Link href="/help" className="text-sleep-blue-600 hover:text-sleep-blue-700">Help & FAQ</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-200 pt-6">
            <p className="text-gray-600 text-sm mb-2">
              © 2025 <a href="https://sleepcycle.io" className="text-sleep-blue-600 hover:text-sleep-blue-700">SleepCycle.io</a> - Your trusted sleep optimization platform.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Free sleep cycle calculator | 90 minute sleep cycle calculator | Nap calculator for adults | Baby nap calculator | How much sleep did I get tracker | Scientifically best time to sleep | Bedtime calculator | Wake up time calculator
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}