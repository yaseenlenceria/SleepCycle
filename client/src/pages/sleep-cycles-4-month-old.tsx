import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Clock, Moon, AlertCircle, Star } from 'lucide-react';

export default function SleepCycles4MonthOldPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "4-Month Old Sleep Patterns - SleepCycle.io";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Understanding 4-month old sleep patterns, sleep regression, and development. Learn about sleep schedules and tips for better sleep at 4 months.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Baby className="text-purple-500 mr-3" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              4-Month Old Sleep Patterns
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding sleep development and the famous 4-month sleep regression
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
                At 4 months, babies need 12-16 hours of sleep per day. This typically includes
                10-12 hours at night and 3-4 hours across 2-3 naps.
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
                Sleep cycles mature to 60-90 minutes. Babies start developing more adult-like
                sleep patterns with deeper non-REM sleep stages.
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
                Babies become more social and aware. Motor skills develop, making sleep
                more challenging but also more predictable.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* The 4-Month Regression */}
        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 mb-8">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-red-100">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <AlertCircle className="text-orange-600 mr-2" size={24} />
              The 4-Month Sleep Regression
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-4">
              The 4-month sleep regression is a normal developmental phase where your baby's sleep patterns change
              dramatically. This is actually a positive sign that your baby's brain is developing!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What Causes It?</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Sleep cycles mature and become more adult-like</li>
                  <li>• Babies develop self-soothing skills</li>
                  <li>• Increased awareness and sensory development</li>
                  <li>• Growth spurts and developmental leaps</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Signs to Watch For</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Frequent night waking (every 1-2 hours)</li>
                  <li>• Shorter naps (30-45 minutes)</li>
                  <li>• Difficulty falling asleep</li>
                  <li>• Increased fussiness and clinginess</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sleep Schedule Example */}
        <Card className="bg-white shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Sample 4-Month Sleep Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-medium text-gray-900">Morning Wake-up</span>
                <span className="text-purple-600 font-semibold">6:00 - 7:00 AM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-medium text-gray-900">First Nap</span>
                <span className="text-blue-600 font-semibold">8:30 - 10:00 AM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium text-gray-900">Second Nap</span>
                <span className="text-green-600 font-semibold">12:30 - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium text-gray-900">Third Nap (catnap)</span>
                <span className="text-yellow-600 font-semibold">4:30 - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                <span className="font-medium text-gray-900">Bedtime</span>
                <span className="text-indigo-600 font-semibold">6:30 - 7:30 PM</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              *This is a sample schedule - adjust based on your baby's individual needs and wake windows
            </p>
          </CardContent>
        </Card>

        {/* Tips for Success */}
        <Card className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Tips for Managing the 4-Month Regression
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Stay consistent with your routine - babies thrive on predictability
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Focus on wake windows: 1.5-2 hours between sleep periods
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Create a calming bedtime routine (bath, massage, story, song)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Practice safe sleep guidelines: back to sleep, firm mattress, no loose bedding
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Be patient - this phase typically lasts 2-6 weeks
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}