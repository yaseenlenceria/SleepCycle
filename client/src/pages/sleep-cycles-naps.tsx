import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Clock, Zap, Sun, Battery } from 'lucide-react';

export default function SleepCyclesNapsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "★★★★★ Best Nap Calculator Online with AI | FREE AI-Powered Power Nap Optimization 2025 - SleepCycle.io";
    
    const setMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    setMeta('description', '★★★★★ Best Nap Calculator Online with AI! FREE AI-powered power nap optimization. Get optimal nap duration & timing personalized for your age & lifestyle. Science-backed AI recommendations to avoid sleep inertia. 6M+ users boost energy with our AI!');
    setMeta('keywords', 'best nap calculator online with AI, AI nap calculator, power nap calculator, nap duration calculator, optimal nap time calculator, AI nap optimization, power nap calculator AI, energy boost calculator, AI nap timing');
    setMeta('og:title', '★★★★★ Best Nap Calculator Online with AI | FREE AI-Powered Power Nap Optimization');
    setMeta('og:description', '★★★★★ Best Nap Calculator Online with AI! FREE AI-powered power nap optimization. 6M+ users boost energy with our AI recommendations!');
    setMeta('og:type', 'website');
    setMeta('og:url', 'https://sleepcycle.io/sleep-cycles-naps');
    setMeta('og:image', 'https://sleepcycle.io/favicon.jpg');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', '★★★★★ Best Nap Calculator Online with AI | FREE AI-Powered Power Nap Optimization');
    setMeta('twitter:description', '★★★★★ Best Nap Calculator Online with AI! FREE AI-powered power nap optimization. 6M+ users boost energy with our AI!');
    setMeta('twitter:image', 'https://sleepcycle.io/favicon.jpg');
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://sleepcycle.io/sleep-cycles-naps');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section with AI-Focused Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ★★★★★ Best Nap Calculator Online with AI
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            <strong>FREE AI-Powered Energy Optimization</strong> – Get personalized nap timing and duration with AI health assessment. Science-backed AI power nap recommendations that adapt to YOUR schedule and energy needs. 6M+ users boost productivity with our AI!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🤖 AI-Powered Power Naps</span>
            <span>🧠 AI Cognitive Boost Analysis</span>
            <span>⏰ AI Perfect Timing Optimization</span>
            <span>🚫 AI Sleep Inertia Prevention</span>
          </div>
        </div>

        {/* Nap Duration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Zap className="mx-auto text-yellow-500 mb-2" size={32} />
              <CardTitle className="text-lg">Power Nap</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-2">10-20 min</div>
              <p className="text-sm text-gray-600">Quick energy boost without grogginess</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Coffee className="mx-auto text-orange-500 mb-2" size={32} />
              <CardTitle className="text-lg">Recovery Nap</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">30 min</div>
              <p className="text-sm text-gray-600">Light sleep with mild grogginess</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Battery className="mx-auto text-green-500 mb-2" size={32} />
              <CardTitle className="text-lg">Full Cycle Nap</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">90 min</div>
              <p className="text-sm text-gray-600">Complete cycle with REM sleep benefits</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="space-y-8">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="text-blue-600" />
                Optimal Nap Durations and Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">The Science of Strategic Napping</h3>
                <p className="text-gray-600 mb-6">
                  Nap duration determines which sleep stages you experience and how you feel afterward. Understanding sleep cycle timing helps you choose the right nap length for your needs.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-yellow-800 mb-2">Power Nap (10-20 minutes)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2"><strong>What happens:</strong></p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Stay in Stage 1-2 light sleep</li>
                          <li>• Avoid deep sleep entry</li>
                          <li>• No sleep inertia upon waking</li>
                          <li>• Quick refresher for alertness</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2"><strong>Benefits:</strong></p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Immediate alertness boost</li>
                          <li>• Improved mood and focus</li>
                          <li>• Reduced fatigue</li>
                          <li>• No interference with night sleep</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 mb-2">Recovery Nap (30 minutes)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2"><strong>What happens:</strong></p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Enter deeper Stage 2 sleep</li>
                          <li>• Risk entering Stage 3 (deep sleep)</li>
                          <li>• Mild sleep inertia possible</li>
                          <li>• 15-30 minutes to full alertness</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2"><strong>Benefits:</strong></p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Greater fatigue relief</li>
                          <li>• Memory consolidation</li>
                          <li>• Cognitive performance boost</li>
                          <li>• Helpful for sleep debt</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-2">Full Cycle Nap (90 minutes)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2"><strong>What happens:</strong></p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Complete 90-minute sleep cycle</li>
                          <li>• Include REM sleep stage</li>
                          <li>• Wake during lighter sleep</li>
                          <li>• Minimal sleep inertia</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-2"><strong>Benefits:</strong></p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Full restorative benefits</li>
                          <li>• Enhanced creativity</li>
                          <li>• Emotional regulation</li>
                          <li>• Maximum cognitive boost</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Sun className="text-orange-500" />
                Perfect Nap Timing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">Ideal Nap Window: 1:00 PM - 3:00 PM</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• <strong>Natural Circadian Dip:</strong> Energy naturally drops after lunch</li>
                    <li>• <strong>Safe Distance:</strong> 6-7 hours before typical bedtime</li>
                    <li>• <strong>Maximum Benefit:</strong> Aligns with body's natural rhythm</li>
                    <li>• <strong>Won't Interfere:</strong> Doesn't disrupt nighttime sleep drive</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Good Nap Times</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• <strong>12:00 PM - 1:00 PM:</strong> Post-lunch energy dip</li>
                      <li>• <strong>1:00 PM - 3:00 PM:</strong> Optimal window</li>
                      <li>• <strong>Before 4:00 PM:</strong> Generally safe</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Avoid Napping</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• <strong>After 4:00 PM:</strong> May interfere with bedtime</li>
                      <li>• <strong>Late Evening:</strong> Disrupts sleep pressure</li>
                      <li>• <strong>When Well-Rested:</strong> May indicate sleep debt</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Napping Strategies for Different Situations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Shift Workers</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Strategic naps before night shifts</li>
                      <li>• 90-minute naps for maximum benefit</li>
                      <li>• Maintain consistent nap schedule</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-indigo-800 mb-2">Students</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 10-20 minute power naps between classes</li>
                      <li>• Post-study naps aid memory consolidation</li>
                      <li>• Avoid naps before important exams</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-teal-800 mb-2">Office Workers</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Lunch break power naps</li>
                      <li>• Use quiet spaces or nap pods</li>
                      <li>• Set phone alarms to prevent oversleeping</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">New Parents</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• "Sleep when baby sleeps" strategy</li>
                      <li>• Multiple short naps throughout day</li>
                      <li>• Prioritize rest over household tasks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>The Caffeine Nap Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-3">How to Execute the Perfect Caffeine Nap</h4>
                <ol className="text-gray-600 space-y-2">
                  <li><strong>1. Drink Coffee Quickly:</strong> Consume caffeine immediately before napping</li>
                  <li><strong>2. Nap for 20 Minutes:</strong> Set alarm for exactly 20 minutes</li>
                  <li><strong>3. Time It Right:</strong> Caffeine takes 20-30 minutes to take effect</li>
                  <li><strong>4. Wake Up Energized:</strong> Combined benefits of nap + caffeine kick in</li>
                </ol>
                <p className="text-sm text-gray-600 mt-3 italic">
                  This technique maximizes alertness by combining sleep restoration with caffeine stimulation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Why do I feel groggy after a 30-minute nap?</h3>
              <p className="text-gray-600">
                30-minute naps risk entering deep sleep (Stage 3), causing sleep inertia. Stick to 10-20 minutes or extend to 90 minutes for a complete cycle.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Can naps replace nighttime sleep?</h3>
              <p className="text-gray-600">
                No, naps supplement but can't fully replace nighttime sleep. A full night provides deeper restorative sleep stages that brief naps cannot achieve.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Is it normal to need naps every day?</h3>
              <p className="text-gray-600">
                Occasional naps are normal, but daily napping needs may indicate insufficient nighttime sleep, sleep disorders, or underlying health issues.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I create the perfect nap environment?</h3>
              <p className="text-gray-600">
                Use a cool, dark, quiet space. Consider eye masks, earplugs, or white noise. Set a phone alarm and ensure you won't be disturbed.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}