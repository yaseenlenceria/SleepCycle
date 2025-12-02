import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SimpleSleepCalculator } from '@/components/simple-sleep-calculator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Clock, Moon, Star } from 'lucide-react';

export default function SleepCycles6MonthOldPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "6-Month Old Sleep Patterns - SleepCycle.io";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Understanding 6-month old sleep patterns, schedules, and development. Calculate optimal sleep times using our sleep cycle calculator.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Baby className="text-green-500 mr-3" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              6-Month Old Sleep Patterns
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding sleep development and establishing healthy sleep habits
          </p>
        </div>

        {/* Calculator Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Calculate Your Baby's Sleep Schedule
            </h2>
            <p className="text-gray-600">
              Use our calculator to optimize sleep timing for your 6-month-old
            </p>
          </div>
          <SimpleSleepCalculator />
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
                At 6 months, babies need 12-16 hours of sleep per day. This includes
                10-12 hours at night and 2-3 hours across 2 naps.
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
                Sleep cycles continue to mature at 60-90 minutes. Babies have more
                consolidated nighttime sleep with longer stretches.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                <Star className="text-yellow-500 mr-2" size={20} />
                Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                Babies become more mobile and social. Sleep patterns become more
                predictable as circadian rhythms mature.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sample Schedule */}
        <Card className="bg-white shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Sample 6-Month Sleep Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium text-gray-900">Morning Wake-up</span>
                <span className="text-green-600 font-semibold">6:00 - 7:00 AM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-medium text-gray-900">First Nap</span>
                <span className="text-blue-600 font-semibold">9:00 - 11:00 AM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium text-gray-900">Second Nap</span>
                <span className="text-yellow-600 font-semibold">1:30 - 3:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-medium text-gray-900">Bedtime</span>
                <span className="text-purple-600 font-semibold">6:30 - 7:30 PM</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              *This is a sample schedule - adjust based on your baby's individual needs and wake windows
            </p>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Tips for 6-Month Sleep Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Focus on wake windows: 2-3 hours between sleep periods
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Maintain consistent nap and bedtime routines
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Create a sleep-conducive environment: dark, quiet, cool
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Encourage self-soothing skills while providing comfort
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Practice safe sleep guidelines consistently
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}