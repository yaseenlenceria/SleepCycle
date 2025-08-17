import { Link } from 'wouter';
import { Brain, Moon, Clock, Users, BarChart3, Lightbulb, Heart, Zap } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useEffect } from 'react';

export default function SleepScience() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sleep Science - Sleep Cycle: The World's Best Sleep App | Sleep Calculator: Ideal Bedtime & Wake Up Times";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Sleep Cycle uses sound analysis, 4 billion sleep sessions, and 13 years of science to educate millions. Learn REM cycles, circadian rhythms, and sleep optimization backed by research.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sleep-blue-50 via-sleep-purple-50 to-pink-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="text-center mb-12">
            <Brain className="mx-auto mb-4 text-sleep-blue-600" size={48} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sleep Science & Optimization
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover the fascinating science behind sleep cycles and learn how to optimize your rest for peak performance
            </p>
          </div>

          {/* 90 Minute Sleep Cycles */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-sleep-blue-50 to-sleep-purple-50 rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <Clock className="text-sleep-blue-600 mr-4" size={40} />
                <h2 className="text-2xl font-bold text-gray-800">REM and Non-REM Sleep Cycles</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">The Science Behind Sleep Cycles</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The sleep cycle oscillates between non-REM and REM sleep over periods averaging 90 minutes (ranging 70-120 minutes). Your brain progresses through distinct stages during each cycle:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Stage 1 (5%):</strong> Light sleep transition</li>
                    <li>• <strong>Stage 2 (45%):</strong> Deeper sleep with reduced awareness</li>
                    <li>• <strong>Stage 3 (25%):</strong> Deep sleep for physical restoration</li>
                    <li>• <strong>REM Sleep (25%):</strong> Rapid eye movement for mental processing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Optimal Timing Benefits</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Wake at Cycle End</h4>
                      <p className="text-gray-600 text-sm">Feel naturally refreshed and alert</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Complete 5-6 Cycles</h4>
                      <p className="text-gray-600 text-sm">Achieve 7.5-9 hours of quality sleep</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Avoid Sleep Inertia</h4>
                      <p className="text-gray-600 text-sm">Reduce grogginess from mid-cycle waking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* REM Sleep Optimization */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-sleep-purple-50 to-pink-50 rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <Brain className="text-sleep-purple-600 mr-4" size={40} />
                <h2 className="text-2xl font-bold text-gray-800">REM Sleep Optimization</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Lightbulb className="text-yellow-500 mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Memory Consolidation</h3>
                  <p className="text-gray-600 text-sm mb-4">REM sleep transfers information from short-term to long-term memory, crucial for learning and retention.</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Peak REM occurs in later sleep cycles</li>
                    <li>• Dreams process daily experiences</li>
                    <li>• Critical for creative problem-solving</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Heart className="text-red-500 mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Emotional Processing</h3>
                  <p className="text-gray-600 text-sm mb-4">REM sleep helps regulate emotions and process stress from the day.</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Reduces emotional reactivity</li>
                    <li>• Improves mood regulation</li>
                    <li>• Processes traumatic experiences</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Zap className="text-blue-500 mb-4" size={32} />
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Brain Development</h3>
                  <p className="text-gray-600 text-sm mb-4">REM sleep supports neural development and brain plasticity.</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Strengthens neural connections</li>
                    <li>• Supports brain detoxification</li>
                    <li>• Essential for cognitive function</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Circadian Rhythm Tips */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <Moon className="text-orange-600 mr-4" size={40} />
                <h2 className="text-2xl font-bold text-gray-800">Circadian Rhythm Tips</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Morning Optimization</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Get Sunlight Within 30 Minutes</h4>
                        <p className="text-gray-600 text-sm">Natural light signals your brain to stop melatonin production</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Consistent Wake Time</h4>
                        <p className="text-gray-600 text-sm">Wake at the same time daily, even on weekends</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Morning Exercise</h4>
                        <p className="text-gray-600 text-sm">Physical activity reinforces your circadian rhythm</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Evening Optimization</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Dim Lights 2 Hours Before Bed</h4>
                        <p className="text-gray-600 text-sm">Reduce blue light to trigger natural melatonin production</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Cool Environment</h4>
                        <p className="text-gray-600 text-sm">Keep bedroom at 65-68°F for optimal sleep</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Relaxation Routine</h4>
                        <p className="text-gray-600 text-sm">Develop consistent pre-sleep activities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Age-Specific Recommendations */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <Users className="text-green-600 mr-4" size={40} />
                <h2 className="text-2xl font-bold text-gray-800">Age-Specific Recommendations</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Infants (0-1 year)</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Sleep Need:</strong> 14-17 hours</p>
                    <p><strong>Cycles:</strong> 50-60 minutes</p>
                    <p><strong>REM:</strong> 50% of sleep</p>
                    <p><strong>Schedule:</strong> Multiple naps</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Children (6-13 years)</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Sleep Need:</strong> 9-11 hours</p>
                    <p><strong>Cycles:</strong> 90 minutes</p>
                    <p><strong>REM:</strong> 25% of sleep</p>
                    <p><strong>Schedule:</strong> Early bedtime</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Adults (18-64 years)</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Sleep Need:</strong> 7-9 hours</p>
                    <p><strong>Cycles:</strong> 90-120 minutes</p>
                    <p><strong>REM:</strong> 20-25% of sleep</p>
                    <p><strong>Schedule:</strong> Consistent timing</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Seniors (65+ years)</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Sleep Need:</strong> 7-8 hours</p>
                    <p><strong>Cycles:</strong> Shorter, fragmented</p>
                    <p><strong>REM:</strong> 15-20% of sleep</p>
                    <p><strong>Schedule:</strong> Earlier bedtime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sleep Quality Analysis */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <BarChart3 className="text-blue-600 mr-4" size={40} />
                <h2 className="text-2xl font-bold text-gray-800">Sleep Quality Analysis</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Quality Metrics</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Sleep Efficiency</h4>
                      <p className="text-gray-600 text-sm">Time asleep / Time in bed × 100</p>
                      <p className="text-green-600 text-xs font-medium">Target: &gt;85%</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Sleep Latency</h4>
                      <p className="text-gray-600 text-sm">Time to fall asleep</p>
                      <p className="text-green-600 text-xs font-medium">Target: 10-20 minutes</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-800 mb-2">Wake Frequency</h4>
                      <p className="text-gray-600 text-sm">Number of nighttime awakenings</p>
                      <p className="text-green-600 text-xs font-medium">Target: &lt;2 per night</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Indicators</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Feeling refreshed upon waking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Consistent energy throughout day</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">No afternoon crashes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Good mood and focus</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Falling asleep easily</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Improvement Strategies</h3>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p>• Track sleep patterns for 2+ weeks</p>
                    <p>• Maintain consistent sleep schedule</p>
                    <p>• Optimize sleep environment</p>
                    <p>• Limit caffeine after 2 PM</p>
                    <p>• Exercise regularly (not before bed)</p>
                    <p>• Manage stress and anxiety</p>
                    <p>• Consider sleep study if issues persist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                ← Back to Sleep Calculator
              </Link>
              <Link href="/help" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                Help & FAQ
              </Link>
              <Link href="/contact" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                Contact Support
              </Link>
            </div>
          </div>
          {/* Comprehensive Sleep Science Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <Brain className="text-indigo-600 mr-4" size={40} />
                <h2 className="text-2xl font-bold text-gray-800">Complete Sleep Science Guide</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">REM vs Non-REM Sleep</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    During sleep, the brain expends significantly less energy than when awake, particularly during non-REM sleep. The body typically cycles between non-REM and REM sleep over periods averaging 90 minutes, occurring 4-6 times per night.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Non-REM Sleep</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Begins with light sleep, progresses to slow-wave (deep) sleep</li>
                      <li>• Body temperature and heart rate fall</li>
                      <li>• Brain restores ATP (energy storage molecules)</li>
                      <li>• Growth hormone is released during slow-wave sleep</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">REM Sleep</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Named for rapid eye movements during this stage</li>
                      <li>• Virtual paralysis of the body occurs</li>
                      <li>• Dreams and nightmares typically occur</li>
                      <li>• Critical for emotional processing and memory</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Sleep Quality Measurement</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sleep quality is measured by the degree of difficulty falling asleep, staying asleep, and the number of times you wake up per night. It's also measured subjectively by how rested you feel upon waking.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Good Sleep Quality Indicators</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fall asleep within 15-20 minutes</li>
                        <li>• Stay asleep throughout the night</li>
                        <li>• Wake up feeling refreshed and alert</li>
                        <li>• No daytime sleepiness or dysfunction</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Optimal Sleep Timing</h4>
                      <p className="text-sm text-gray-600">
                        The timing of sleep must balance the maximum concentration of melatonin and minimum core body temperature occurring after the middle of sleep, before awakening.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CDC Sleep Recommendations Table */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">CDC Recommended Sleep Duration by Age</h3>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-800 border-b pb-1">Infants</div>
                      <div className="text-sm text-gray-600">0–3 months: 14–17 hours</div>
                      <div className="text-sm text-gray-600">4–12 months: 12–16 hours (including naps)</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-800 border-b pb-1">Children</div>
                      <div className="text-sm text-gray-600">1–2 years: 11–14 hours (including naps)</div>
                      <div className="text-sm text-gray-600">3–5 years: 10–13 hours (including naps)</div>
                      <div className="text-sm text-gray-600">6–12 years: 9–12 hours</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-800 border-b pb-1">Teens & Adults</div>
                      <div className="text-sm text-gray-600">13–18 years: 8–10 hours</div>
                      <div className="text-sm text-gray-600">18–60 years: 7+ hours per night</div>
                      <div className="text-sm text-gray-600">61–64 years: 7–9 hours</div>
                      <div className="text-sm text-gray-600">65+ years: 7–8 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Sleep Facts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Circadian Rhythm</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Sleep timing is based on hormonal signals from the circadian clock, which exhibits regular rhythm corresponding to outside signals (night/day) that can persist even without external cues.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Individual Variation</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Sleep needs vary largely based on age and individual factors. A person who sleeps adequately should experience no daytime sleepiness or dysfunction. Research shows 6-7 hours per night correlates with positive health outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}