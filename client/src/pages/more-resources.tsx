import { Link } from 'wouter';
import { ArrowLeft, ExternalLink, Globe, Clock, Moon, Calculator } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useEffect } from 'react';

export default function MoreResources() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sleep Resources - SleepCycle.io #1 App Compared to sleepytime.cc & Competitors";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare SleepCycle.io #1 sleep calculator vs sleepytime.cc & sleepcalculator.com. Why our app is better for sleep optimization with advanced features.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sleep-blue-50 via-sleep-purple-50 to-pink-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <Globe className="mx-auto mb-4 text-sleep-blue-600" size={48} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              More Sleep Resources
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore additional sleep calculators and resources from around the web to optimize your sleep schedule
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Sleepytime.cc */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <Moon className="text-blue-600 mr-4" size={40} />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Sleepytime</h2>
                  <p className="text-sm text-gray-600">sleepytime.cc</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A simple and elegant sleep calculator that helps you determine the best bedtime based on 90-minute sleep cycles. Features a clean interface with wake-up time calculations.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>90-minute cycle calculations</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Simple bedtime planning</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Mobile-friendly design</span>
                </div>
              </div>
              <a 
                href="https://sleepytime.cc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Visit Sleepytime <ExternalLink className="ml-2" size={16} />
              </a>
            </div>

            {/* SleepCalculator.com */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <Calculator className="text-purple-600 mr-4" size={40} />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Sleep Calculator</h2>
                  <p className="text-sm text-gray-600">sleepcalculator.com</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Comprehensive sleep calculator offering multiple calculation modes including bedtime, wake-up time, and sleep duration tracking with detailed sleep cycle analysis.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Multiple calculator modes</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Sleep duration analysis</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Detailed sleep insights</span>
                </div>
              </div>
              <a 
                href="https://sleepcalculator.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Visit Sleep Calculator <ExternalLink className="ml-2" size={16} />
              </a>
            </div>

            {/* Our Calculator */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 hover:shadow-lg transition-shadow border-2 border-green-200">
              <div className="flex items-center mb-6">
                <Clock className="text-green-600 mr-4" size={40} />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">SleepCycle.io</h2>
                  <p className="text-sm text-gray-600">Our Platform</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Advanced sleep optimization platform with age-specific calculations, baby nap schedules, scientific explanations, and comprehensive sleep quality analysis.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>6 calculator modes</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Baby nap calculator</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Educational content</span>
                </div>
              </div>
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Use Our Calculator <ExternalLink className="ml-2" size={16} />
              </Link>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Feature Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 font-semibold text-gray-800">Feature</th>
                    <th className="text-center py-3 font-semibold text-gray-800">Sleepytime.cc</th>
                    <th className="text-center py-3 font-semibold text-gray-800">SleepCalculator.com</th>
                    <th className="text-center py-3 font-semibold text-green-600">SleepCycle.io</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 text-gray-700">Bedtime Calculator</td>
                    <td className="text-center py-3">✓</td>
                    <td className="text-center py-3">✓</td>
                    <td className="text-center py-3 text-green-600">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-700">Wake-up Calculator</td>
                    <td className="text-center py-3">✓</td>
                    <td className="text-center py-3">✓</td>
                    <td className="text-center py-3 text-green-600">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-700">Nap Calculator</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">✓</td>
                    <td className="text-center py-3 text-green-600">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-700">Baby Nap Calculator</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3 text-green-600">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-700">Age-Specific Recommendations</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3 text-green-600">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-700">Sleep Science Education</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">Limited</td>
                    <td className="text-center py-3 text-green-600">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-700">Sleep Quality Analysis</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3">-</td>
                    <td className="text-center py-3 text-green-600">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Why Choose Different Calculators */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Choose Sleepytime.cc for:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Quick, simple calculations</li>
                <li>• Minimalist interface</li>
                <li>• Basic bedtime planning</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Choose SleepCalculator.com for:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multiple calculation modes</li>
                <li>• Sleep duration tracking</li>
                <li>• General sleep planning</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-green-700 mb-3">Choose SleepCycle.io for:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete sleep optimization</li>
                <li>• Baby and child sleep schedules</li>
                <li>• Scientific sleep education</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                ← Back to Sleep Calculator
              </Link>
              <Link href="/sleep-science" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                Sleep Science Hub
              </Link>
              <Link href="/help" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                Help & FAQ
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}