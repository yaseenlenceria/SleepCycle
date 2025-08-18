import { Link } from 'wouter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function BlogPostSleepStages() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium flex items-center mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                Sleep Education
              </span>
              <span>January 18, 2025</span>
              <span>7 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Sleep Cycle Stages: A Complete Guide to Better Sleep
            </h1>
            
            <div className="flex justify-center mb-8">
              <img 
                src="/blog-images/sleep-stages.svg" 
                alt="Four stages of sleep illustration showing NREM and REM sleep phases"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Sleep is not just about closing your eyes and resting—it's a structured process your body goes through every night. Understanding the stages of the sleep cycle can help you improve your health, focus, and overall well-being.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">In this guide, we'll cover:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• What the sleep cycle is</li>
                <li>• The 4 main stages of sleep</li>
                <li>• How long each stage lasts</li>
                <li>• Tips for improving sleep quality</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is the Sleep Cycle?</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A sleep cycle is the progression your body goes through between different stages of sleep. On average, one sleep cycle lasts about 90 minutes, and a healthy adult typically experiences 4–6 cycles per night.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Each cycle includes both non-REM (NREM) sleep and REM (Rapid Eye Movement) sleep, which are essential for physical and mental recovery.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-900 mb-4">
                Find your optimal sleep and wake times with our specialized calculators:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-blue-800 font-medium mb-3">Sleep Calculators:</p>
                  <div className="space-y-2">
                    <Link href="/" className="block bg-white text-blue-700 px-3 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors text-xs font-medium">
                      Main Sleep Calculator
                    </Link>
                    <Link href="/sleep-calculator-by-age" className="block bg-white text-blue-700 px-3 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors text-xs font-medium">
                      By Age Calculator
                    </Link>
                    <Link href="/how-much-sleep-did-i-get-calculator" className="block bg-white text-blue-700 px-3 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors text-xs font-medium">
                      Sleep Duration
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-blue-800 font-medium mb-3">Baby Sleep:</p>
                  <div className="space-y-2">
                    <Link href="/baby-nap-calculator-0-12-months" className="block bg-white text-blue-700 px-3 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors text-xs font-medium">
                      0-12 Months
                    </Link>
                    <Link href="/toddler-nap-calculator" className="block bg-white text-blue-700 px-3 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors text-xs font-medium">
                      Toddler Naps
                    </Link>
                    <Link href="/blog/baby-nap-duration-guide" className="block bg-white text-blue-700 px-3 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors text-xs font-medium">
                      Baby Sleep Guide
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-blue-800 font-medium mb-3">Learn More:</p>
                  <div className="space-y-2">
                    <Link href="/blog/sleep-cycle-length" className="block bg-white text-blue-700 px-3 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors text-xs font-medium">
                      Cycle Length Guide
                    </Link>
                    <Link href="/blog/sleep-cycle-myth" className="block bg-white text-blue-700 px-3 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors text-xs font-medium">
                      90-Min Myth
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The 4 Stages of the Sleep Cycle</h2>

            <div className="space-y-8 mb-12">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                <h3 className="text-2xl font-semibold text-green-900 mb-3">Stage 1 (NREM – Light Sleep)</h3>
                <p className="text-green-800 font-medium mb-3">Duration: 1–7 minutes</p>
                <ul className="text-green-700 space-y-2">
                  <li>• The transition from wakefulness to sleep</li>
                  <li>• Muscles begin to relax, heartbeat and breathing slow down</li>
                  <li>• Easy to wake up during this stage</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">Stage 2 (NREM – Light Sleep)</h3>
                <p className="text-blue-800 font-medium mb-3">Duration: 10–25 minutes per cycle</p>
                <ul className="text-blue-700 space-y-2">
                  <li>• Heart rate slows further, body temperature drops</li>
                  <li>• Brain activity produces sleep spindles (bursts that help with memory and learning)</li>
                  <li>• Accounts for about 50% of total sleep time</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-l-4 border-purple-400">
                <h3 className="text-2xl font-semibold text-purple-900 mb-3">Stage 3 (NREM – Deep Sleep)</h3>
                <p className="text-purple-800 font-medium mb-3">Duration: 20–40 minutes</p>
                <ul className="text-purple-700 space-y-2">
                  <li>• The most restorative stage of sleep</li>
                  <li>• Blood pressure drops, muscles repair, and energy is restored</li>
                  <li>• Difficult to wake someone during deep sleep</li>
                  <li>• Important for physical recovery and immune system health</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border-l-4 border-pink-400">
                <h3 className="text-2xl font-semibold text-pink-900 mb-3">Stage 4 (REM Sleep)</h3>
                <p className="text-pink-800 font-medium mb-3">Usually begins about 90 minutes after falling asleep</p>
                <ul className="text-pink-700 space-y-2">
                  <li>• Brain activity increases and resembles wakefulness</li>
                  <li>• Most vivid dreams occur during this stage</li>
                  <li>• Important for memory consolidation, learning, and emotional health</li>
                  <li>• Breathing becomes irregular, eyes move rapidly behind closed lids</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Long Should You Sleep?</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The recommended amount of sleep depends on age:
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Sleep Duration by Age:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Adults:</strong> 7–9 hours per night</li>
                    <li><strong>Teenagers:</strong> 8–10 hours</li>
                    <li><strong>Children:</strong> 9–12 hours</li>
                    <li><strong>Infants:</strong> 12–16 hours</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Important Note:</h4>
                  <p className="text-gray-700">
                    Each person's sleep needs are slightly different, but completing full sleep cycles is more important than just hours. Waking up in the middle of deep sleep can leave you groggy, while waking up at the end of a cycle makes you feel refreshed.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tips for Improving Sleep Quality</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</div>
                  <p className="text-gray-700">Stick to a consistent sleep schedule, even on weekends.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</div>
                  <p className="text-gray-700">Avoid caffeine and heavy meals before bedtime.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</div>
                  <p className="text-gray-700">Keep your bedroom cool, dark, and quiet.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</div>
                  <p className="text-gray-700">Limit screen time at least 1 hour before bed.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">5</div>
                  <p className="text-gray-700">Try relaxation techniques such as meditation or deep breathing.</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">6</div>
                  <p className="text-gray-700">Use a sleep calculator to plan your cycles for optimal wake-up times.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">How many sleep cycles do I need per night?</h4>
                <p className="text-gray-700">Most adults need 4–6 complete cycles, which equals about 7–9 hours of sleep.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">What happens if I don't get REM sleep?</h4>
                <p className="text-gray-700">Lack of REM sleep can affect memory, mood, and learning ability.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Can naps affect my sleep cycle?</h4>
                <p className="text-gray-700">Short naps (20–30 minutes) can improve alertness without disrupting nighttime sleep. Long naps may interfere with deep sleep cycles.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Is it better to wake up at the end of a cycle?</h4>
                <p className="text-gray-700">Yes, waking up at the end of a cycle helps you feel more refreshed and less groggy.</p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">Optimize Your Sleep Cycles Tonight</h3>
              <p className="text-lg mb-6 opacity-90">
                Use our scientifically-designed sleep calculator to find your perfect bedtime and wake-up times
              </p>
              <Link href="/" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
                Try Sleep Calculator Now
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-gray-500 font-medium">Tags:</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Sleep Stages</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Sleep Cycle</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">REM Sleep</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Deep Sleep</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Sleep Quality</span>
              </div>
              <div className="text-sm text-gray-500">
                Published on January 18, 2025 | Last updated: January 18, 2025 | Reviewed by sleep specialists
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}