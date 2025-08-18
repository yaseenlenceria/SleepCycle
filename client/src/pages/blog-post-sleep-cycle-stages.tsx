import { Link } from 'wouter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function BlogPostSleepCycleStages() {
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
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
                Sleep Science
              </span>
              <span>January 18, 2025</span>
              <span>9 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Stages of the Sleep Cycle: Everything You Need to Know
            </h1>
            
            <div className="flex justify-center mb-8">
              <img 
                src="/blog-images/sleep-stages.svg" 
                alt="Complete sleep cycle stages illustration showing all 4 stages of NREM and REM sleep"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Sleep is not just a time when your body shuts down. It's an active process that occurs in different stages, each with a unique purpose. Understanding the stages of the sleep cycle can help you improve your sleep quality, wake up feeling refreshed, and support your long-term health.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">In this guide, we'll cover:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• What the sleep cycle is</li>
                <li>• The four stages of sleep</li>
                <li>• How long each stage lasts</li>
                <li>• Why sleep stages are important</li>
                <li>• Tips to optimize your sleep cycles</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is the Sleep Cycle?</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A sleep cycle is the progression your brain and body go through while you sleep. On average, one cycle lasts about 90 minutes and is repeated 4 to 6 times per night.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Each cycle includes both NREM (Non-Rapid Eye Movement) sleep and REM (Rapid Eye Movement) sleep. These stages play a crucial role in physical restoration, memory, and emotional health.
            </p>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mb-8">
              <p className="text-teal-900 mb-4">
                Want to optimize your sleep timing? Use our comprehensive calculators:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-teal-800 font-medium mb-3">Sleep Calculators:</p>
                  <div className="space-y-2">
                    <Link href="/" className="block bg-white text-teal-700 px-3 py-2 rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors text-xs font-medium">
                      Main Sleep Calculator
                    </Link>
                    <Link href="/90-minute-sleep-cycle-calculator" className="block bg-white text-teal-700 px-3 py-2 rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors text-xs font-medium">
                      90-Minute Calculator
                    </Link>
                    <Link href="/sleep-calculator-by-age" className="block bg-white text-teal-700 px-3 py-2 rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors text-xs font-medium">
                      Sleep by Age
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-teal-800 font-medium mb-3">Nap Calculators:</p>
                  <div className="space-y-2">
                    <Link href="/nap-calculator-for-adults" className="block bg-white text-teal-700 px-3 py-2 rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors text-xs font-medium">
                      Adult Nap Calculator
                    </Link>
                    <Link href="/toddler-nap-calculator" className="block bg-white text-teal-700 px-3 py-2 rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors text-xs font-medium">
                      Toddler Naps
                    </Link>
                    <Link href="/baby-nap-calculator-0-12-months" className="block bg-white text-teal-700 px-3 py-2 rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors text-xs font-medium">
                      Baby Sleep (0-12m)
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-teal-800 font-medium mb-3">Learn More:</p>
                  <div className="space-y-2">
                    <Link href="/blog/sleep-cycle-length" className="block bg-white text-teal-700 px-3 py-2 rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors text-xs font-medium">
                      Cycle Length Guide
                    </Link>
                    <Link href="/blog/sleep-cycle-myth" className="block bg-white text-teal-700 px-3 py-2 rounded-lg border border-teal-200 hover:bg-teal-50 transition-colors text-xs font-medium">
                      90-Minute Myth
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The 4 Stages of the Sleep Cycle</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Stage 1: NREM (Light Sleep)</h3>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Duration:</h4>
                  <p className="text-gray-700 mb-3">1–7 minutes</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Characteristics:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• The transition from wakefulness to sleep</li>
                    <li>• Breathing and heart rate slow down</li>
                    <li>• Muscles begin to relax</li>
                    <li>• Easy to wake up during this stage</li>
                  </ul>
                </div>
                <div className="bg-green-100 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700 mb-2">5%</div>
                    <p className="text-green-800 text-sm">of total sleep time</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Stage 2: NREM (Light Sleep)</h3>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Duration:</h4>
                  <p className="text-gray-700 mb-3">10–25 minutes per cycle</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Characteristics:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Heart rate slows further and body temperature drops</li>
                    <li>• Brain activity shows sleep spindles (bursts that support learning)</li>
                    <li>• Accounts for about 50% of total sleep time</li>
                  </ul>
                </div>
                <div className="bg-blue-100 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700 mb-2">50%</div>
                    <p className="text-blue-800 text-sm">of total sleep time</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Stage 3: NREM (Deep Sleep)</h3>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Duration:</h4>
                  <p className="text-gray-700 mb-3">20–40 minutes</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Characteristics:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Known as slow-wave sleep (SWS)</li>
                    <li>• Hardest stage to wake up from</li>
                    <li>• Critical for physical recovery and muscle repair</li>
                    <li>• Immune system strength and growth hormones released</li>
                  </ul>
                </div>
                <div className="bg-purple-100 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700 mb-2">20-25%</div>
                    <p className="text-purple-800 text-sm">of total sleep time</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Stage 4: REM Sleep</h3>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">First Occurrence:</h4>
                  <p className="text-gray-700 mb-3">About 70–90 minutes after falling asleep</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Characteristics:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Brain activity increases and resembles wakefulness</li>
                    <li>• Breathing and heart rate become irregular</li>
                    <li>• Most vivid dreams occur here</li>
                    <li>• Crucial for memory, emotional health, and learning</li>
                  </ul>
                </div>
                <div className="bg-orange-100 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-700 mb-2">20-25%</div>
                    <p className="text-orange-800 text-sm">of total sleep time</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why the Sleep Cycle Matters</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Each stage of sleep plays a different role in health:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3">Stages 1 & 2</h4>
                <p className="text-blue-800">Prepare the body for deep rest and account for the majority of your sleep time.</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-3">Stage 3 (Deep Sleep)</h4>
                <p className="text-purple-800">Restores the body physically through muscle repair and immune system strengthening.</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-3">Stage 4 (REM)</h4>
                <p className="text-orange-800">Restores the mind, supporting learning, memory consolidation, and emotional balance.</p>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="font-semibold text-red-900 mb-3">Sleep Disruption</h4>
                <p className="text-red-800">Can lead to fatigue, poor concentration, mood swings, and long-term health issues.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tips to Improve Your Sleep Cycles</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sleep Optimization Strategies:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Go to bed and wake up at the same time daily</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Avoid caffeine, alcohol, and heavy meals before bedtime</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Keep your bedroom dark, cool, and quiet</span>
                  </li>
                </ul>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Exercise regularly, but not too close to bedtime</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Use a sleep calculator to plan wake-up times at the end of cycles</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">How many sleep cycles do I need per night?</h4>
                <p className="text-gray-700">Most adults need 4–6 complete cycles, which equals 7–9 hours of sleep.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">What happens if I don't get enough deep sleep?</h4>
                <p className="text-gray-700">Lack of deep sleep affects physical recovery, immunity, and energy levels.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">What happens if I don't get REM sleep?</h4>
                <p className="text-gray-700">Missing REM sleep impacts memory, focus, creativity, and emotional balance.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Can naps replace sleep cycles?</h4>
                <p className="text-gray-700">Short naps (20–30 minutes) improve alertness but don't replace full cycles.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Optimize Your Sleep Cycles Today</h3>
              <p className="text-lg mb-6 opacity-90 text-center">
                Use our science-based calculators to find your optimal sleep and wake times for better rest
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-semibold mb-3 opacity-90">Sleep Timing:</p>
                  <div className="space-y-2">
                    <Link href="/" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      Main Sleep Calculator
                    </Link>
                    <Link href="/90-minute-sleep-cycle-calculator" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      90-Minute Calculator
                    </Link>
                    <Link href="/how-much-sleep-did-i-get-calculator" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      Sleep Duration
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-3 opacity-90">Age-Specific:</p>
                  <div className="space-y-2">
                    <Link href="/sleep-calculator-by-age" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      Sleep by Age
                    </Link>
                    <Link href="/baby-nap-calculator-0-12-months" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      Baby Sleep
                    </Link>
                    <Link href="/toddler-nap-calculator" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      Toddler Sleep
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-3 opacity-90">Learn More:</p>
                  <div className="space-y-2">
                    <Link href="/blog/sleep-cycle-length" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      Cycle Length
                    </Link>
                    <Link href="/blog/sleep-cycle-myth" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      90-Minute Myth
                    </Link>
                    <Link href="/blog/baby-nap-duration-guide" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      Baby Sleep Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-gray-500 font-medium">Tags:</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Sleep Stages</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Sleep Cycle</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">REM Sleep</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Deep Sleep</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Sleep Science</span>
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