import { Link } from 'wouter';
import { Brain, Moon, Clock, Users, BarChart3, Lightbulb, Heart, Zap } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useEffect } from 'react';

export default function SleepScience() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
                <h2 className="text-2xl font-bold text-gray-800">90 Minute Sleep Cycles</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">The Science Behind Sleep Cycles</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sleep occurs in approximately 90-minute cycles, during which your brain progresses through distinct stages:
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
        </div>
      </main>

      <Footer />
    </div>
  );
}