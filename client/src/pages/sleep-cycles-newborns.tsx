import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Clock, Baby, Moon, AlertCircle } from 'lucide-react';

export default function SleepCyclesNewbornsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Newborn Sleep Patterns - SleepCycle.io";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Understanding newborn sleep patterns and development. Learn about sleep cycles, feeding schedules, and sleep training readiness for babies 0-3 months.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-indigo-50">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Baby className="text-pink-500 mr-3" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Newborn Sleep Patterns
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding your newborn's sleep development and patterns during the first 3 months
          </p>
        </div>

        {/* Key Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                <Clock className="text-blue-500 mr-2" size={20} />
                Sleep Duration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                Newborns sleep 14-17 hours per day in short bursts of 2-4 hours.
                Sleep patterns are irregular and driven by hunger rather than day/night cycles.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                <Moon className="text-indigo-500 mr-2" size={20} />
                Sleep Cycles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                Newborn sleep cycles are much shorter (45-50 minutes) compared to adults.
                They spend more time in REM sleep, which is important for brain development.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                <Heart className="text-red-500 mr-2" size={20} />
                Feeding & Sleep
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                Newborns wake every 2-4 hours for feeding. The American Academy of Pediatrics
                recommends feeding on demand for the first few weeks.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Development Timeline */}
        <Card className="bg-white shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Newborn Sleep Development Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">0-2 Weeks</h4>
                <p className="text-gray-600">
                  Sleep is completely erratic with no day/night distinction. Babies sleep 16-18 hours
                  in short stretches of 2-4 hours, waking primarily for feeding.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2-4 Weeks</h4>
                <p className="text-gray-600">
                  Sleep patterns begin to show slight regularity. Some babies may start sleeping
                  slightly longer stretches at night (4-6 hours). Total sleep remains 15-17 hours.
                </p>
              </div>

              <div className="border-l-4 border-pink-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1-3 Months</h4>
                <p className="text-gray-600">
                  Circadian rhythms begin to develop. Sleep starts consolidating into longer
                  nighttime stretches. Day/night confusion typically resolves. Total sleep: 14-16 hours.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Tips */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertCircle className="text-yellow-600 mr-2" size={20} />
              Important Tips for Parents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Always place your baby on their back to sleep (Safe Sleep Guidelines)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Keep the room dark, quiet, and at a comfortable temperature (68-72°F)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Follow safe sleep guidelines: no loose bedding, pillows, or toys in the crib
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Be patient - sleep patterns will gradually become more predictable
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Consider swaddling to help your baby feel secure and sleep better
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}