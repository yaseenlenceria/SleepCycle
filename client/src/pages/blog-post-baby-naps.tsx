import { Link } from 'wouter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function BlogPostBabyNaps() {
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
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
              Baby Sleep Guide
            </span>
            <span>January 18, 2025</span>
            <span>8 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            How Long Should a Baby Nap? Complete Age-Based Guide for Optimal Infant Sleep
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding your baby's nap needs is crucial for healthy development and family well-being. This comprehensive guide provides pediatric sleep specialist recommendations for optimal nap duration from newborn to 24 months.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl p-6 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Reference</h3>
              <p className="text-gray-700">
                Baby nap duration varies by age: Newborns (2-4 hours), 3-6 months (1-3 hours), 6-12 months (1-2.5 hours), 12+ months (1-3 hours)
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Baby Naps Matter</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Proper napping is essential for infant brain development, memory consolidation, and emotional regulation. Research shows that well-rested babies have better cognitive function, stronger immune systems, and more stable mood patterns throughout their development.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <p className="text-yellow-900">
              <strong>Important:</strong> Every baby is unique. These guidelines provide general recommendations, but always consult your pediatrician for personalized advice, especially if you have concerns about your baby's sleep patterns.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Age-Based Nap Duration Guide</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Newborns (0-3 months)</h3>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Optimal Nap Duration:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Individual naps:</strong> 2-4 hours</li>
                  <li>• <strong>Total daily naps:</strong> 14-17 hours</li>
                  <li>• <strong>Nap frequency:</strong> 4-6 naps per day</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Sleep Characteristics:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Irregular sleep patterns</li>
                  <li>• No clear day/night distinction</li>
                  <li>• Sleep cycles are 45-60 minutes</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Newborns spend most of their time sleeping, waking primarily for feeding and diaper changes. Don't worry about strict schedules—follow your baby's natural rhythm while ensuring they're getting adequate nutrition.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">3-6 Months</h3>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Optimal Nap Duration:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Morning nap:</strong> 1-3 hours</li>
                  <li>• <strong>Afternoon nap:</strong> 1-3 hours</li>
                  <li>• <strong>Evening nap:</strong> 30-60 minutes</li>
                  <li>• <strong>Total daily naps:</strong> 4-6 hours</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Development Milestones:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Circadian rhythm developing</li>
                  <li>• Longer wake periods</li>
                  <li>• Beginning to consolidate sleep</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            This is when babies begin developing more predictable patterns. You can start introducing consistent nap times, but remain flexible as your baby's rhythm establishes.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">6-12 Months</h3>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Optimal Nap Duration:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Morning nap:</strong> 1-2 hours</li>
                  <li>• <strong>Afternoon nap:</strong> 1.5-2.5 hours</li>
                  <li>• <strong>Total daily naps:</strong> 2.5-4 hours</li>
                  <li>• <strong>Nap frequency:</strong> 2-3 naps per day</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Sleep Patterns:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• More predictable schedule</li>
                  <li>• Transitioning to 2 naps</li>
                  <li>• Longer nighttime sleep</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Many babies transition from 3 to 2 naps during this period, typically around 8-9 months. The afternoon nap often becomes the longest and most important for overnight sleep quality.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">12-24 Months (Toddlers)</h3>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Optimal Nap Duration:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Single nap:</strong> 1-3 hours</li>
                  <li>• <strong>Ideal timing:</strong> 12:00-3:00 PM</li>
                  <li>• <strong>Total daily naps:</strong> 1-3 hours</li>
                  <li>• <strong>Nap frequency:</strong> 1 nap per day</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Transition Signs:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Resisting morning nap</li>
                  <li>• Later bedtime if 2 naps</li>
                  <li>• Can stay awake 5-6 hours</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most toddlers transition to one nap between 12-18 months. This single nap becomes crucial for afternoon energy and evening behavior.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Signs Your Baby Needs Better Naps</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-semibold text-red-900 mb-4">Overtired Signs:</h4>
              <ul className="space-y-2 text-red-800">
                <li>• Excessive fussiness</li>
                <li>• Difficulty falling asleep</li>
                <li>• Frequent night wakings</li>
                <li>• Very short naps (under 45 minutes)</li>
                <li>• Hyperactivity before sleep</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-semibold text-green-900 mb-4">Well-Rested Signs:</h4>
              <ul className="space-y-2 text-green-800">
                <li>• Happy wake-ups</li>
                <li>• Easy transitions to sleep</li>
                <li>• Consistent nap lengths</li>
                <li>• Good nighttime sleep</li>
                <li>• Alert during wake times</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Optimal Nap Timing Tips</h2>
          
          <ol className="space-y-4 text-lg text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</span>
              <div>
                <strong>Watch wake windows:</strong> The time between sleep periods is crucial. Newborns: 45-90 minutes, 3-6 months: 1.5-3 hours, 6-12 months: 2.5-4 hours, 12+ months: 4-6 hours.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</span>
              <div>
                <strong>Create consistent environment:</strong> Dark room, comfortable temperature (68-70°F), white noise, and familiar sleep associations.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</span>
              <div>
                <strong>Avoid late naps:</strong> No naps after 4:00 PM to protect nighttime sleep quality.
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</span>
              <div>
                <strong>Be patient with transitions:</strong> Schedule changes take 1-2 weeks to establish. Consistency is key.
              </div>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Nap Challenges & Solutions</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Challenge: Short Naps (Under 45 minutes)</h4>
              <p className="text-gray-700 mb-3">
                <strong>Solutions:</strong>
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Check wake windows - may be overtired or undertired</li>
                <li>• Ensure dark, cool sleep environment</li>
                <li>• Practice putting baby down awake but drowsy</li>
                <li>• Allow 10-15 minutes for baby to potentially return to sleep</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Challenge: Fighting Naps</h4>
              <p className="text-gray-700 mb-3">
                <strong>Solutions:</strong>
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Establish consistent pre-nap routine</li>
                <li>• Watch for early sleepy cues (yawning, rubbing eyes)</li>
                <li>• Adjust wake windows if resistance continues</li>
                <li>• Consider nap transition timing</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Challenge: Early Morning Wake-ups</h4>
              <p className="text-gray-700 mb-3">
                <strong>Solutions:</strong>
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Ensure adequate daytime naps</li>
                <li>• Check bedtime - may be too early or late</li>
                <li>• Maintain dark environment until desired wake time</li>
                <li>• Consider last nap timing and duration</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When to Consult Your Pediatrician</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
            <p className="text-orange-900 mb-4">
              Contact your healthcare provider if you notice:
            </p>
            <ul className="text-orange-900 space-y-2">
              <li>• Significant changes in sleep patterns</li>
              <li>• Consistently short naps (under 30 minutes) after 6 months</li>
              <li>• Extreme difficulty falling asleep or staying asleep</li>
              <li>• Sleep regression lasting more than 2 weeks</li>
              <li>• Concerns about growth or development</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Final Thoughts</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Remember that healthy sleep habits take time to develop. Every baby is different, and what works for one may not work for another. Stay consistent with your approach, but remain flexible as your baby grows and their needs change.
          </p>

          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Get Personalized Baby Sleep Guidance</h3>
            <p className="text-lg mb-6 opacity-90 text-center">
              Use our scientifically-designed calculators and guides for age-specific recommendations
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-semibold mb-3 opacity-90">Baby Sleep Tools:</p>
                <div className="space-y-2">
                  <Link href="/baby-nap-calculator-0-12-months" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                    Baby Sleep (0-12m)
                  </Link>
                  <Link href="/newborn-sleep-schedule-calculator" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                    Newborn Schedule
                  </Link>
                  <Link href="/4-month-old-baby-sleep-calculator" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                    4-Month Sleep
                  </Link>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-3 opacity-90">Toddler Sleep:</p>
                <div className="space-y-2">
                  <Link href="/toddler-nap-calculator" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                    Toddler Nap Calculator
                  </Link>
                  <Link href="/2-year-old-nap-calculator" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                    2-Year-Old Naps
                  </Link>
                  <Link href="/sleep-calculator-by-age" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                    Sleep by Age
                  </Link>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-3 opacity-90">Adult Sleep:</p>
                <div className="space-y-2">
                  <Link href="/" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                    Main Sleep Calculator
                  </Link>
                  <Link href="/blog/sleep-stages-guide" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                    Sleep Stages Guide
                  </Link>
                  <Link href="/blog/sleep-cycle-length" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                    Cycle Length
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-gray-500 font-medium">Tags:</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Baby Sleep</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Nap Duration</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Infant Sleep</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Pediatric Sleep</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Sleep Schedule</span>
            </div>
            <div className="text-sm text-gray-500">
              Published on January 18, 2025 | Last updated: January 18, 2025 | Reviewed by pediatric sleep specialists
            </div>
          </div>
        </div>
      </article>
      </div>
      <Footer />
    </>
  );
}