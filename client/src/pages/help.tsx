import { Link } from 'wouter';
import { ArrowLeft, HelpCircle, Clock, Moon, Baby, Users, BarChart3, Coffee } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useEffect } from 'react';

export default function Help() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sleep-blue-50 via-sleep-purple-50 to-pink-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="text-center mb-12">
            <HelpCircle className="mx-auto mb-4 text-sleep-blue-600" size={48} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Help & FAQ
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Everything you need to know about using our sleep cycle calculator and optimizing your sleep
            </p>
          </div>

          {/* Calculator Guide Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">How to Use Our Sleep Calculators</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-sleep-blue-50 to-sleep-purple-50 rounded-xl p-6">
                <Clock className="text-sleep-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Bedtime Calculator</h3>
                <p className="text-gray-600 mb-4">Enter your desired wake-up time, and we'll calculate the optimal bedtimes based on 90-minute sleep cycles.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Select your wake-up time</li>
                  <li>• Click "Calculate Bedtimes"</li>
                  <li>• Choose from 4-6 sleep cycle options</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sleep-purple-50 to-pink-50 rounded-xl p-6">
                <Moon className="text-sleep-purple-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Wake-up Time Calculator</h3>
                <p className="text-gray-600 mb-4">Going to bed now? Find the best times to wake up feeling refreshed and energized.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Uses current time as bedtime</li>
                  <li>• Shows optimal wake-up windows</li>
                  <li>• Accounts for 15-minute fall-asleep time</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-6">
                <Coffee className="text-pink-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Nap Calculator for Adults</h3>
                <p className="text-gray-600 mb-4">Find the perfect nap duration to boost energy without disrupting nighttime sleep.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 20-minute power naps</li>
                  <li>• 60-minute cognitive boost</li>
                  <li>• 90-minute full cycle naps</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                <Baby className="text-green-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Baby Nap Calculator</h3>
                <p className="text-gray-600 mb-4">Age-specific sleep schedules for babies and toddlers based on developmental needs.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Newborn to 3+ years schedules</li>
                  <li>• Wake windows and nap durations</li>
                  <li>• Expert sleep tips included</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <BarChart3 className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sleep Duration Tracker</h3>
                <p className="text-gray-600 mb-4">Calculate how much sleep you got and analyze your sleep patterns over time.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Input bedtime and wake time</li>
                  <li>• See total sleep and cycles</li>
                  <li>• Track sleep quality trends</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <Users className="text-purple-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Age Calculator</h3>
                <p className="text-gray-600 mb-4">Get personalized sleep recommendations based on your age and lifestyle factors.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Age-specific sleep needs</li>
                  <li>• Lifestyle considerations</li>
                  <li>• Custom recommendations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">What are 90-minute sleep cycles?</h3>
                  <p className="text-gray-600">Sleep cycles are approximately 90-minute periods during which we progress through different stages of sleep, including light sleep, deep sleep, and REM sleep. Waking up at the end of a cycle helps you feel more refreshed.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">How accurate is the sleep cycle calculator?</h3>
                  <p className="text-gray-600">Our calculator uses the scientifically established 90-minute average. Individual cycles can range from 70-120 minutes, but 90 minutes works well for most people. The 15-minute fall-asleep buffer accounts for the time it takes to actually fall asleep.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">What's the best nap duration for adults?</h3>
                  <p className="text-gray-600">For adults, 20-minute power naps provide quick energy without grogginess. 60-minute naps boost cognitive function, while 90-minute naps complete a full sleep cycle. Avoid 30-45 minute naps as you may wake during deep sleep.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">How much sleep do I need by age?</h3>
                  <p className="text-gray-600">Adults (18-64) need 7-9 hours, older adults (65+) need 7-8 hours, teenagers need 8-10 hours, and school-age children need 9-11 hours. Our age calculator provides personalized recommendations.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Can I use this for baby sleep schedules?</h3>
                  <p className="text-gray-600">Yes! Our baby nap calculator provides age-specific schedules from newborn to 3+ years. However, every baby is unique, so use our guidelines as a starting point and adjust based on your baby's individual needs.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Why am I still tired despite following the calculator?</h3>
                  <p className="text-gray-600">Sleep quality matters as much as timing. Factors like stress, caffeine, screen time before bed, room temperature, and underlying sleep disorders can affect how rested you feel. Consider these factors alongside timing.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Is it better to go to bed early or wake up late?</h3>
                  <p className="text-gray-600">Consistency is key. Most adults benefit from sleeping between 10-11 PM and waking between 6-8 AM, aligning with natural circadian rhythms. Choose a schedule you can maintain consistently, even on weekends.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Can I improve my sleep quality?</h3>
                  <p className="text-gray-600">Yes! Keep a consistent sleep schedule, avoid caffeine after 2 PM, limit screen time before bed, keep your bedroom cool and dark, and consider a relaxing bedtime routine. Our sleep tracker can help monitor improvements.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sleep Tips Section */}
          <div className="bg-gradient-to-br from-sleep-blue-50 to-sleep-purple-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Expert Sleep Optimization Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Before Bedtime</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Stop eating 2-3 hours before bed</li>
                  <li>• Dim lights 1 hour before sleep</li>
                  <li>• Avoid screens or use blue light filters</li>
                  <li>• Try relaxation techniques</li>
                  <li>• Keep bedroom temperature 65-68°F</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">During the Day</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Get morning sunlight exposure</li>
                  <li>• Limit caffeine after 2 PM</li>
                  <li>• Exercise regularly (not close to bedtime)</li>
                  <li>• Keep consistent meal times</li>
                  <li>• Limit daytime naps to 20-30 minutes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Sleep Environment</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Invest in blackout curtains</li>
                  <li>• Use white noise or earplugs</li>
                  <li>• Comfortable mattress and pillows</li>
                  <li>• Remove electronic devices</li>
                  <li>• Keep bedroom for sleep only</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                ← Back to Sleep Calculator
              </Link>
              <Link href="/contact" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                Contact Support
              </Link>
              <Link href="/about" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}