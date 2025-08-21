import { Link } from 'wouter';
import { Star, Heart, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* SEO-Optimized Logo Header */}
        <div className="text-center mb-12 border-b border-gray-700 pb-8">
          <div className="flex justify-center items-center mb-6">
            <img 
              src="/logo.png" 
              alt="SleepCycle.io - World's #1 Sleep Cycle Calculator"
              title="SleepCycle.io - Best Sleep Calculator Platform with AI Assessment"
              className="h-12 sm:h-16 w-auto max-w-sm"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-4">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" size={20} />
              <span className="text-sm font-semibold">★★★★★ 4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="text-red-400" size={20} />
              <span className="text-sm font-semibold">10M+ Happy Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-green-400" size={20} />
              <span className="text-sm font-semibold">100% FREE Forever</span>
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Best Sleep Online Calculator with AI</h3>
          <p className="text-gray-300 text-sm sm:text-base">Trusted by 10M+ users worldwide for AI-powered sleep cycle optimization</p>
        </div>

        {/* Main Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Top Sleep Calculators */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Top Sleep Calculators</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-blue-300 hover:text-blue-200 transition-colors">Sleep Calculator (Main)</Link></li>
              <li><Link href="/90-minute-sleep-cycle-calculator" className="text-blue-300 hover:text-blue-200 transition-colors">90-Minute Sleep Cycle Calculator</Link></li>
              <li><Link href="/how-much-sleep-did-i-get-calculator" className="text-blue-300 hover:text-blue-200 transition-colors">How Much Sleep Did I Get?</Link></li>
              <li><Link href="/best-sleep-calculator-by-age" className="text-blue-300 hover:text-blue-200 transition-colors">Best Sleep Calculator by Age</Link></li>
              <li><Link href="/sleep-cycles-naps" className="text-blue-300 hover:text-blue-200 transition-colors">Nap Calculator</Link></li>
            </ul>
          </div>

          {/* Baby & Child Sleep */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Baby & Child Sleep</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/sleep-cycles-babies" className="text-pink-300 hover:text-pink-200 transition-colors">Baby Sleep Calculator (0-12m)</Link></li>
              <li><Link href="/sleep-cycles-newborns" className="text-pink-300 hover:text-pink-200 transition-colors">Newborn Sleep (0-3 months)</Link></li>
              <li><Link href="/sleep-cycles-4-month-old" className="text-pink-300 hover:text-pink-200 transition-colors">4-Month Baby Sleep</Link></li>
              <li><Link href="/sleep-cycles-6-month-old" className="text-pink-300 hover:text-pink-200 transition-colors">6-Month Baby Sleep</Link></li>
              <li><Link href="/sleep-cycles-7-month-old" className="text-pink-300 hover:text-pink-200 transition-colors">7-Month Baby Sleep</Link></li>
              <li><Link href="/sleep-cycles-toddlers" className="text-pink-300 hover:text-pink-200 transition-colors">Toddler Sleep (1-3 years)</Link></li>
              <li><Link href="/sleep-cycles-2-year-olds" className="text-pink-300 hover:text-pink-200 transition-colors">2-Year-Old Sleep</Link></li>
            </ul>
          </div>

          {/* Adult Sleep & Science */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Adult Sleep & Science</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/sleep-cycles-adults" className="text-green-300 hover:text-green-200 transition-colors">Adult Sleep Cycles</Link></li>
              <li><Link href="/sleep-science" className="text-green-300 hover:text-green-200 transition-colors">Sleep Science Research</Link></li>
              <li><Link href="/age-calculator" className="text-green-300 hover:text-green-200 transition-colors">Age Calculator</Link></li>
              <li><Link href="/more-resources" className="text-green-300 hover:text-green-200 transition-colors">Sleep Resources</Link></li>
              <li><Link href="/why-best-sleep-calculator" className="text-green-300 hover:text-green-200 transition-colors">Why We're the Best</Link></li>
            </ul>
          </div>

          {/* Support & Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Support & Info</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-purple-300 hover:text-purple-200 transition-colors">About Sleepcycle.io</Link></li>
              <li><Link href="/blog" className="text-purple-300 hover:text-purple-200 transition-colors">Sleep Science Blog</Link></li>
              <li><Link href="/help" className="text-purple-300 hover:text-purple-200 transition-colors">Help & FAQ</Link></li>
              <li><Link href="/contact" className="text-purple-300 hover:text-purple-200 transition-colors">Contact Support</Link></li>
              <li><Link href="/sitemap" className="text-purple-300 hover:text-purple-200 transition-colors">Site Map</Link></li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Legal & Privacy</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy-policy" className="text-orange-300 hover:text-orange-200 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-orange-300 hover:text-orange-200 transition-colors">Terms of Service</Link></li>
              <li><a href="mailto:support@sleepcycle.io" className="text-orange-300 hover:text-orange-200 transition-colors">Email Support</a></li>
            </ul>
          </div>
        </div>

        {/* Popular AI Sleep Calculator Searches - Linked */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <h4 className="font-bold text-white mb-3 text-center">Popular AI Sleep Calculator Searches</h4>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <Link href="/" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-3 py-1 rounded-full transition-colors cursor-pointer">best sleep online calculator with AI</Link>
            <Link href="/" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-3 py-1 rounded-full transition-colors cursor-pointer">AI sleep calculator</Link>
            <Link href="/90-minute-sleep-cycle-calculator" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-3 py-1 rounded-full transition-colors cursor-pointer">90 minute sleep cycle calculator AI</Link>
            <Link href="/sleep-calculator-by-age" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-3 py-1 rounded-full transition-colors cursor-pointer">AI sleep calculator by age</Link>
            <Link href="/sleep-cycles-babies" className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white px-3 py-1 rounded-full transition-colors cursor-pointer">best baby sleep calculator with AI</Link>
            <Link href="/sleep-cycles-adults" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white px-3 py-1 rounded-full transition-colors cursor-pointer">AI adult sleep calculator</Link>
            <Link href="/sleep-cycles-naps" className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white px-3 py-1 rounded-full transition-colors cursor-pointer">AI nap calculator</Link>
            <Link href="/" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-3 py-1 rounded-full transition-colors cursor-pointer">free AI sleep calculator</Link>
            <Link href="/sleep-cycles-newborns" className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white px-3 py-1 rounded-full transition-colors cursor-pointer">AI newborn sleep calculator</Link>
            <Link href="/" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-3 py-1 rounded-full transition-colors cursor-pointer">AI sleep optimization</Link>
          </div>
        </div>

        {/* Company Info & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h5 className="font-bold text-lg text-white mb-1">Sleepcycle.io</h5>
              <p className="text-gray-400 text-sm">World's most trusted sleep optimization platform since 2012</p>
              <p className="text-gray-500 text-xs mt-1">
                © 2025 <a href="https://sleepcycle.io" className="text-blue-300 hover:text-blue-200">SleepCycle.io</a> | 
                Operated by SIA Webby, Latvia | All rights reserved
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-4 mb-2">
                <div className="text-yellow-400 flex items-center gap-1">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <span className="text-white text-sm ml-1">4.9/5</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs">Rated by 1.5M+ users worldwide</p>
            </div>
          </div>
          
          {/* Schema.org Rich Footer Keywords */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
              <strong>Comprehensive Sleep Calculator Suite:</strong> Free sleep cycle calculator by age and gender | 90-minute sleep cycle calculator | How much sleep did I get calculator | Best sleep calculator by age | Scientifically optimal bedtime calculator | Nap calculator for adults | Baby and toddler sleep calculators | Newborn sleep schedule calculator | AI-powered sleep health assessment | Sleep cycle time optimization | Circadian rhythm calculator | Sleep duration tracker | Wake-up time calculator | Bedtime calculator | Sleep quality analyzer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}