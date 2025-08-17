import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Clock, Brain, Moon, Zap } from 'lucide-react';

export default function SleepCyclesAdultsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sleep Cycles for Adults - Complete Guide to Adult Sleep Patterns | SleepCycle.io";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master adult sleep cycles with our complete guide. Learn about 90-minute REM cycles, optimal sleep duration, and how to improve sleep quality for adults 18-65+.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sleep Cycles for Adults
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Optimize your sleep with scientific understanding of adult sleep cycles. Learn about 90-minute REM patterns, sleep stages, and how to wake up feeling refreshed every morning.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🧠 90-Minute Cycles</span>
            <span>😴 Sleep Stages</span>
            <span>⚡ Energy Optimization</span>
            <span>🎯 Wake Time Strategy</span>
          </div>
        </div>

        {/* Quick Reference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Clock className="mx-auto text-blue-500 mb-2" size={32} />
              <CardTitle className="text-lg">Sleep Cycle Length</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">90 minutes</div>
              <p className="text-sm text-gray-600">Complete cycle from light to deep sleep</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <User className="mx-auto text-green-500 mb-2" size={32} />
              <CardTitle className="text-lg">Recommended Sleep</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">7-9 hours</div>
              <p className="text-sm text-gray-600">Optimal nightly sleep for adults</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Brain className="mx-auto text-purple-500 mb-2" size={32} />
              <CardTitle className="text-lg">Sleep Cycles Per Night</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">4-6 cycles</div>
              <p className="text-sm text-gray-600">Complete cycles for restorative sleep</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="space-y-8">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Moon className="text-indigo-600" />
                Understanding Adult Sleep Stages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">The 90-Minute Sleep Cycle</h3>
                <p className="text-gray-600 mb-6">
                  Adult sleep follows predictable 90-minute cycles, moving through four distinct stages. Understanding these stages helps you time your sleep and wake times for maximum energy and alertness.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800 mb-2">Stage 1: Light Sleep (5%)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Transition from wake to sleep</li>
                        <li>• Easily awakened</li>
                        <li>• Muscle activity slows down</li>
                        <li>• Duration: 5-10 minutes</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 mb-2">Stage 2: Light Sleep (45%)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Body temperature drops</li>
                        <li>• Heart rate slows</li>
                        <li>• Sleep spindles and K-complexes</li>
                        <li>• Duration: 10-25 minutes</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-purple-800 mb-2">Stage 3: Deep Sleep (25%)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Physical restoration occurs</li>
                        <li>• Growth hormone release</li>
                        <li>• Immune system strengthening</li>
                        <li>• Very difficult to wake</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-orange-800 mb-2">REM Sleep (25%)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Dreams and memory consolidation</li>
                        <li>• Brain activity increases</li>
                        <li>• Emotional processing</li>
                        <li>• Increases toward morning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Zap className="text-yellow-500" />
                Age-Specific Sleep Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <h4 className="font-semibold text-green-800 mb-2">Young Adults (18-25 years)</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• <strong>Recommended:</strong> 7-9 hours per night</li>
                    <li>• <strong>Sleep Cycles:</strong> 4-6 complete 90-minute cycles</li>
                    <li>• <strong>Deep Sleep:</strong> 20-25% of total sleep</li>
                    <li>• <strong>REM Sleep:</strong> 20-25% of total sleep</li>
                    <li>• <strong>Recovery:</strong> Faster recovery from sleep debt</li>
                  </ul>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">Adults (26-64 years)</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• <strong>Recommended:</strong> 7-9 hours per night</li>
                    <li>• <strong>Sleep Cycles:</strong> 4-6 complete cycles</li>
                    <li>• <strong>Deep Sleep:</strong> 15-20% (gradually decreases)</li>
                    <li>• <strong>Wake-ups:</strong> More frequent brief awakenings</li>
                    <li>• <strong>Quality Focus:</strong> Consistency becomes more important</li>
                  </ul>
                </div>

                <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                  <h4 className="font-semibold text-purple-800 mb-2">Older Adults (65+ years)</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• <strong>Recommended:</strong> 7-8 hours per night</li>
                    <li>• <strong>Sleep Cycles:</strong> 4-5 cycles (may be shorter)</li>
                    <li>• <strong>Deep Sleep:</strong> 10-15% (significantly reduced)</li>
                    <li>• <strong>Earlier Bedtime:</strong> Natural shift to earlier sleep</li>
                    <li>• <strong>Naps:</strong> Short power naps may be beneficial</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Optimizing Your Sleep Cycles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Sleep Timing Strategy</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>✓ Plan sleep in 90-minute multiples</li>
                    <li>✓ Count backwards from wake time</li>
                    <li>✓ Allow 15 minutes to fall asleep</li>
                    <li>✓ Maintain consistent schedule</li>
                    <li>✓ Wake between cycles for alertness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Sleep Quality Factors</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>✓ Cool room temperature (65-68°F)</li>
                    <li>✓ Complete darkness</li>
                    <li>✓ Minimize noise disruptions</li>
                    <li>✓ Comfortable mattress and pillows</li>
                    <li>✓ No screens 1 hour before bed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Common Adult Sleep Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Sleep Debt</h4>
                  <p className="text-gray-600">Accumulated sleep loss affects cognitive function, mood, and health. Can't be fully "caught up" on weekends.</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Sleep Fragmentation</h4>
                  <p className="text-gray-600">Frequent awakenings disrupt sleep cycles, reducing restorative deep sleep and REM sleep.</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Circadian Misalignment</h4>
                  <p className="text-gray-600">Irregular sleep schedule disrupts natural sleep-wake cycle, affecting sleep quality and daytime alertness.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Why are adult sleep cycles 90 minutes?</h3>
              <p className="text-gray-600">
                The 90-minute cycle reflects the natural rhythm of brain wave activity, allowing progression through all sleep stages for optimal physical and mental restoration.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What happens if I wake up mid-cycle?</h3>
              <p className="text-gray-600">
                Waking during deep sleep (stages 3) causes sleep inertia - grogginess that can last 15-30 minutes. Try to time wake-ups between cycles for better alertness.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Do sleep cycles change with age?</h3>
              <p className="text-gray-600">
                Yes, deep sleep decreases and sleep becomes more fragmented with age. Older adults may have shorter cycles and need earlier bedtimes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How can I track my sleep cycles?</h3>
              <p className="text-gray-600">
                Use sleep tracking apps, wearable devices, or smart alarm clocks that monitor movement and wake you during lighter sleep phases.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}