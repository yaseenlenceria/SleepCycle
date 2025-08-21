import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Clock, Moon, Sun, Heart } from 'lucide-react';

export default function SleepCyclesBabiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "★★★★★ Best Baby Sleep Calculator Online with AI | FREE AI-Powered Baby Sleep Schedules 2025 - SleepCycle.io";
    
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

    setMeta('description', '★★★★★ Best Baby Sleep Calculator Online with AI! FREE AI-powered baby & toddler sleep schedules for ages 0-12 months. Get personalized nap times, bedtime routines & safe sleep guidance. 5M+ parents trust our AI recommendations for better baby sleep!');
    setMeta('keywords', 'best baby sleep calculator online with AI, AI baby sleep calculator, baby sleep schedule calculator, baby nap calculator, toddler sleep calculator, baby sleep tracker, AI baby sleep schedules, baby sleep patterns, infant sleep calculator');
    setMeta('og:title', '★★★★★ Best Baby Sleep Calculator Online with AI | FREE AI-Powered Baby Sleep Schedules');
    setMeta('og:description', '★★★★★ Best Baby Sleep Calculator Online with AI! FREE AI-powered baby & toddler sleep schedules. 5M+ parents trust our AI recommendations for better baby sleep!');
    setMeta('og:type', 'website');
    setMeta('og:url', 'https://sleepcycle.io/sleep-cycles-babies');
    setMeta('og:image', 'https://sleepcycle.io/favicon.jpg');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', '★★★★★ Best Baby Sleep Calculator Online with AI | FREE AI-Powered Baby Sleep Schedules');
    setMeta('twitter:description', '★★★★★ Best Baby Sleep Calculator Online with AI! FREE AI-powered baby sleep schedules. 5M+ parents trust our AI recommendations!');
    setMeta('twitter:image', 'https://sleepcycle.io/favicon.jpg');
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://sleepcycle.io/sleep-cycles-babies');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section with AI-Focused Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Best Baby Sleep Calculator Online with AI</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            <strong>FREE AI-Powered Baby Sleep Optimization</strong> – Get personalized baby & toddler sleep schedules with AI recommendations. Science-backed, AI-driven advice that adapts to your baby's unique needs from 0-12 months. 5M+ parents trust our AI for better baby sleep!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🤖 AI-Powered Baby Sleep Schedules</span>
            <span>😴 AI Safe Sleep Guidelines</span>
            <span>⏰ Age-Specific AI Recommendations</span>
            <span>🌙 AI Night Sleep Optimization</span>
          </div>
        </div>

        {/* Quick Reference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Baby className="mx-auto text-pink-500 mb-2" size={32} />
              <CardTitle className="text-lg">Newborns (0-3 months)</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-pink-600 mb-2">14-17 hours</div>
              <p className="text-sm text-gray-600">Total daily sleep including frequent naps</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Moon className="mx-auto text-blue-500 mb-2" size={32} />
              <CardTitle className="text-lg">Infants (4-11 months)</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">12-15 hours</div>
              <p className="text-sm text-gray-600">Night sleep plus 2-3 daytime naps</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Sun className="mx-auto text-orange-500 mb-2" size={32} />
              <CardTitle className="text-lg">Sleep Cycle Length</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">50-60 min</div>
              <p className="text-sm text-gray-600">Shorter than adult 90-minute cycles</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="space-y-8">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="text-blue-600" />
                Baby Sleep Cycle Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">How Baby Sleep Cycles Work</h3>
                <p className="text-gray-600 mb-4">
                  Baby sleep cycles are much shorter than adult cycles, lasting only 50-60 minutes compared to the adult 90-minute cycle. Newborns spend about 50% of their sleep in REM (active sleep), which is crucial for brain development.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Active Sleep (REM)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Brain development and memory formation</li>
                      <li>• Eyes moving, facial expressions</li>
                      <li>• Light sleep, easily awakened</li>
                      <li>• 50% of total sleep time in newborns</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Quiet Sleep (NREM)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Physical growth and repair</li>
                      <li>• Still body, regular breathing</li>
                      <li>• Deep sleep, harder to wake</li>
                      <li>• Increases as baby grows older</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="text-red-500" />
                Age-Specific Sleep Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border-l-4 border-pink-500 bg-pink-50">
                  <h4 className="font-semibold text-pink-800 mb-2">Newborns (0-3 months)</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• <strong>Total Sleep:</strong> 14-17 hours per day</li>
                    <li>• <strong>Night Sleep:</strong> 8-9 hours (with frequent wakings)</li>
                    <li>• <strong>Daytime Naps:</strong> 3-5 naps, 30 minutes to 3 hours each</li>
                    <li>• <strong>Wake Windows:</strong> 45-60 minutes between sleeps</li>
                    <li>• <strong>Feeding:</strong> Every 2-3 hours, including overnight</li>
                  </ul>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">Infants (4-6 months)</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• <strong>Total Sleep:</strong> 12-15 hours per day</li>
                    <li>• <strong>Night Sleep:</strong> 9-11 hours (longer stretches)</li>
                    <li>• <strong>Daytime Naps:</strong> 3-4 naps, 30 minutes to 2 hours each</li>
                    <li>• <strong>Wake Windows:</strong> 1.5-2.5 hours between sleeps</li>
                    <li>• <strong>Sleep Training:</strong> Can begin around 4-6 months</li>
                  </ul>
                </div>

                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <h4 className="font-semibold text-green-800 mb-2">Older Infants (7-11 months)</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• <strong>Total Sleep:</strong> 12-14 hours per day</li>
                    <li>• <strong>Night Sleep:</strong> 10-12 hours (consistent overnight sleep)</li>
                    <li>• <strong>Daytime Naps:</strong> 2-3 naps, 1-2 hours each</li>
                    <li>• <strong>Wake Windows:</strong> 2-4 hours between sleeps</li>
                    <li>• <strong>Bedtime:</strong> Consistent routine between 6-8 PM</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Safe Sleep Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Sleep Environment</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>✓ Firm sleep surface</li>
                    <li>✓ Fitted sheet only</li>
                    <li>✓ Room temperature 68-70°F</li>
                    <li>✓ Dark, quiet environment</li>
                    <li>✓ Back sleeping position</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">What to Avoid</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>✗ Loose bedding or pillows</li>
                    <li>✗ Bumper pads</li>
                    <li>✗ Overheating</li>
                    <li>✗ Smoke exposure</li>
                    <li>✗ Co-sleeping in adult bed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Common Baby Sleep Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Sleep Regressions</h4>
                  <p className="text-gray-600">Common at 4, 8-10, and 18 months due to developmental leaps and growth spurts.</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Night Wakings</h4>
                  <p className="text-gray-600">Normal in first 6 months. Gradually decrease as sleep cycles mature.</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Short Naps</h4>
                  <p className="text-gray-600">Often due to overtiredness or environmental factors. Watch wake windows.</p>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">When do babies develop regular sleep patterns?</h3>
              <p className="text-gray-600">
                Most babies begin to develop more predictable sleep patterns around 3-4 months of age. Their circadian rhythms mature, and they can sleep for longer stretches at night.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long should a baby nap?</h3>
              <p className="text-gray-600">
                Nap length varies by age: newborns may nap 30 minutes to 3 hours, while older infants typically nap 1-2 hours. Quality matters more than exact duration.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Should I wake my baby from a nap?</h3>
              <p className="text-gray-600">
                Generally, let sleeping babies sleep. However, if late afternoon naps interfere with nighttime sleep, consider gentle wake-ups after 2 hours.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">When can babies sleep through the night?</h3>
              <p className="text-gray-600">
                Most babies can physically sleep through the night (6-8 hour stretches) by 4-6 months. However, all babies develop at different rates.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}