import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Clock, Baby, Moon, AlertCircle } from 'lucide-react';

export default function SleepCyclesNewbornsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sleep Cycles for Newborns (0-3 Months) - Complete Guide | SleepCycle.io";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Newborn sleep guide: cycles, safe sleep, feeding schedules, and healthy habits for babies 0-3 months. Expert advice for new parents.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sleep Cycles for Newborns
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Understanding newborn sleep patterns is essential for new parents. Learn about sleep cycles, safe sleep practices, and establishing healthy routines for babies 0-3 months old.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>👶 0-3 Months</span>
            <span>😴 50-60 Min Cycles</span>
            <span>🛡️ Safe Sleep</span>
            <span>🍼 Feed-Sleep Pattern</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Clock className="mx-auto text-pink-500 mb-2" size={32} />
              <CardTitle className="text-lg">Sleep Cycle Length</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-pink-600 mb-2">50-60 min</div>
              <p className="text-sm text-gray-600">Shorter than adult cycles</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Baby className="mx-auto text-blue-500 mb-2" size={32} />
              <CardTitle className="text-lg">Total Daily Sleep</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">14-17 hours</div>
              <p className="text-sm text-gray-600">Around the clock sleeping</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Moon className="mx-auto text-indigo-500 mb-2" size={32} />
              <CardTitle className="text-lg">REM Sleep</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-2">50%</div>
              <p className="text-sm text-gray-600">Critical for brain development</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="text-red-500" />
                Understanding Newborn Sleep
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Newborn Sleep Characteristics</h3>
                <p className="text-gray-600 mb-6">
                  Newborn sleep is fundamentally different from adult sleep. Understanding these unique patterns helps set realistic expectations and promotes better sleep for the whole family.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                    <h4 className="font-semibold text-pink-800 mb-2">Active Sleep (REM)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 50% of total sleep time</li>
                      <li>• Rapid eye movements</li>
                      <li>• Facial expressions and sounds</li>
                      <li>• Light sleep - easily awakened</li>
                      <li>• Critical for brain development</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Quiet Sleep (NREM)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 50% of total sleep time</li>
                      <li>• Still body and regular breathing</li>
                      <li>• Deeper sleep state</li>
                      <li>• Physical growth and repair</li>
                      <li>• Harder to wake from</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertCircle className="text-orange-500" />
                Safe Sleep Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-red-50 rounded-lg border border-red-200 mb-6">
                <h4 className="font-semibold text-red-800 mb-3">Critical Safe Sleep Rules</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-2">Always Do:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Place baby on back to sleep</li>
                      <li>✓ Use firm sleep surface</li>
                      <li>✓ Keep crib bare (no loose bedding)</li>
                      <li>✓ Use fitted sheet only</li>
                      <li>✓ Keep baby's face uncovered</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-2">Never Do:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✗ Sleep with baby in adult bed</li>
                      <li>✗ Use bumper pads</li>
                      <li>✗ Place pillows or blankets in crib</li>
                      <li>✗ Let baby get overheated</li>
                      <li>✗ Expose to smoke</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Sleep Environment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Room temperature 68-70°F</li>
                    <li>• Quiet, dark environment</li>
                    <li>• Well-ventilated room</li>
                    <li>• Baby in parents' room (not bed)</li>
                    <li>• Approved bassinet or crib</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">What to Expect</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Frequent night wakings normal</li>
                    <li>• 2-4 hour sleep stretches</li>
                    <li>• No day/night distinction initially</li>
                    <li>• Noisy sleepers (grunts, sighs)</li>
                    <li>• Sleep anywhere, anytime</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Week-by-Week Newborn Sleep Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-800 mb-2">0-2 Weeks: Adjustment Period</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Sleep 16-20 hours per day</li>
                    <li>• Wake every 1-3 hours for feeding</li>
                    <li>• No predictable patterns</li>
                    <li>• Day/night confusion common</li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-800 mb-2">3-6 Weeks: Emerging Patterns</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Sleep 15-18 hours per day</li>
                    <li>• Slightly longer wake periods</li>
                    <li>• Begin to show preferences</li>
                    <li>• Fussy periods may emerge</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-2">6-12 Weeks: Growing Awareness</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Sleep 14-16 hours per day</li>
                    <li>• Longer stretches of 3-4 hours</li>
                    <li>• More alert during wake times</li>
                    <li>• Beginning of day/night distinction</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Common Newborn Sleep Concerns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Day/Night Confusion</h4>
                  <p className="text-gray-600 mb-2">Newborns don't have established circadian rhythms.</p>
                  <p className="text-sm text-gray-600"><strong>Help:</strong> Bright light during day feeds, dim lights at night, keep nighttime interactions quiet and boring.</p>
                </div>
                
                <div className="p-4 bg-teal-50 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Catnapping</h4>
                  <p className="text-gray-600 mb-2">Very short naps (20-30 minutes) are normal for newborns.</p>
                  <p className="text-sm text-gray-600"><strong>Normal:</strong> Newborn sleep cycles are shorter. Longer naps develop around 3-4 months.</p>
                </div>

                <div className="p-4 bg-pink-50 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">Noisy Sleep</h4>
                  <p className="text-gray-600 mb-2">Grunting, sighing, and movement during sleep is normal.</p>
                  <p className="text-sm text-gray-600"><strong>When to check:</strong> Only if crying or appears distressed. Light movements and sounds are typical.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How often should my newborn sleep?</h3>
              <p className="text-gray-600">
                Newborns sleep 14-17 hours per day in short stretches of 2-4 hours. They typically wake every 2-3 hours to feed, even at night.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Is it safe for newborns to sleep on their side?</h3>
              <p className="text-gray-600">
                No, always place newborns on their back to sleep. Side sleeping increases SIDS risk as babies can roll to their stomach.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">When will my newborn sleep through the night?</h3>
              <p className="text-gray-600">
                Most babies don't sleep through the night until 4-6 months. Newborns need frequent feedings and haven't developed mature sleep patterns yet.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Should I wake my newborn to feed?</h3>
              <p className="text-gray-600">
                Yes, if your newborn hasn't eaten in 4-5 hours during the day or is losing weight. Consult your pediatrician for specific guidance.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}