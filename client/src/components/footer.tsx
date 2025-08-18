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
                <li><Link href="/?tab=bedtime" className="text-sleep-blue-600 hover:text-sleep-blue-700">Bedtime Calculator</Link></li>
                <li><Link href="/?tab=wakeup" className="text-sleep-blue-600 hover:text-sleep-blue-700">Wake-up Time Calculator</Link></li>
                <li><Link href="/sleep-cycles-naps" className="text-sleep-blue-600 hover:text-sleep-blue-700">Nap Calculator for Adults</Link></li>
                <li><Link href="/sleep-cycles-babies" className="text-sleep-blue-600 hover:text-sleep-blue-700">Baby Sleep Cycles</Link></li>
                <li><Link href="/?tab=tracker" className="text-sleep-blue-600 hover:text-sleep-blue-700">Sleep Duration Tracker</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Sleep by Age</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/sleep-cycles-newborns" className="text-sleep-blue-600 hover:text-sleep-blue-700">Newborn Sleep Cycles</Link></li>
                <li><Link href="/sleep-cycles-4-month-old" className="text-sleep-blue-600 hover:text-sleep-blue-700">4 Month Old Sleep</Link></li>
                <li><Link href="/sleep-cycles-6-month-old" className="text-sleep-blue-600 hover:text-sleep-blue-700">6 Month Old Sleep</Link></li>
                <li><Link href="/sleep-cycles-7-month-old" className="text-sleep-blue-600 hover:text-sleep-blue-700">7 Month Old Sleep</Link></li>
                <li><Link href="/sleep-cycles-toddlers" className="text-sleep-blue-600 hover:text-sleep-blue-700">Toddler Sleep Cycles</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">More Sleep Guides</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/sleep-cycles-adults" className="text-sleep-blue-600 hover:text-sleep-blue-700">Adult Sleep Cycles</Link></li>
                <li><Link href="/sleep-cycles-2-year-olds" className="text-sleep-blue-600 hover:text-sleep-blue-700">2 Year Old Sleep</Link></li>
                <li><Link href="/sleep-science" className="text-sleep-blue-600 hover:text-sleep-blue-700">Sleep Science</Link></li>
                <li><Link href="/about" className="text-sleep-blue-600 hover:text-sleep-blue-700">About SleepCycle.io</Link></li>
                <li><Link href="/help" className="text-sleep-blue-600 hover:text-sleep-blue-700">Help & FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Legal & Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/age-calculator" className="text-sleep-blue-600 hover:text-sleep-blue-700">Age Calculator</Link></li>
                <li><Link href="/more-resources" className="text-sleep-blue-600 hover:text-sleep-blue-700">More Resources</Link></li>
                <li><Link href="/why-best-sleep-calculator" className="text-sleep-blue-600 hover:text-sleep-blue-700">Why We're #1</Link></li>
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