import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Clock, TrendingUp, Award } from 'lucide-react';
import { UltraSimpleHomepage } from '@/components/ultra-simple-homepage';

export default function HowMuchSleepDidIGetCalculatorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "★★★★★ How Much Sleep Did I Get Calculator - Track Sleep Hours by Age | FREE AI Assessment - Sleepcycle.io";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '★★★★★ #1 How Much Sleep Did I Get Calculator by age & gender. Track sleep hours, quality, and cycles. FREE AI health assessment! Calculate total sleep, deep sleep phases, and optimization tips.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ★★★★★ How Much Sleep Did I Get Calculator
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            <strong>Calculate Exactly How Much Sleep You Got</strong> – Track your sleep hours, cycles, and quality with our advanced sleep calculator. Get personalized insights based on your age, gender, and sleep patterns. FREE AI health assessment included.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8">
            <span>📊 Track Sleep Hours</span>
            <span>🔄 Count Sleep Cycles</span>
            <span>🎯 Quality Analysis</span>
            <span>👥 Age-Specific</span>
            <span>🆓 100% FREE</span>
          </div>
        </div>

        {/* Interactive Calculator */}
        <UltraSimpleHomepage />

        {/* Sleep Tracking Features */}
        <div className="mt-16 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Advanced Sleep Tracking & Analysis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="text-center pb-4">
                <Calculator className="mx-auto text-blue-500 mb-2" size={40} />
                <CardTitle className="text-lg">Total Sleep Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Calculate exact sleep duration from bedtime to wake time, accounting for time to fall asleep.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="text-center pb-4">
                <Clock className="mx-auto text-green-500 mb-2" size={40} />
                <CardTitle className="text-lg">Sleep Cycles Count</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Track how many complete 90-minute sleep cycles you achieved for optimal rest.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="text-center pb-4">
                <TrendingUp className="mx-auto text-purple-500 mb-2" size={40} />
                <CardTitle className="text-lg">Sleep Quality Score</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Get a quality rating based on sleep duration, cycles, and age-appropriate needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="text-center pb-4">
                <Award className="mx-auto text-orange-500 mb-2" size={40} />
                <CardTitle className="text-lg">AI Health Insights</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Receive personalized recommendations to improve your sleep based on tracking data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sleep Duration Guidelines by Age */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            How Much Sleep Do You Need by Age?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">Newborns (0-3 months)</h3>
              <div className="text-2xl font-bold text-pink-600">14-17 hours</div>
              <p className="text-sm text-gray-600 mt-2">Multiple sleep periods throughout day and night</p>
            </div>
            
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Infants (4-11 months)</h3>
              <div className="text-2xl font-bold text-blue-600">12-15 hours</div>
              <p className="text-sm text-gray-600 mt-2">Including naps, more consolidated nighttime sleep</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Toddlers (1-2 years)</h3>
              <div className="text-2xl font-bold text-green-600">11-14 hours</div>
              <p className="text-sm text-gray-600 mt-2">Night sleep plus one or two naps</p>
            </div>
            
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-700 mb-2">Preschoolers (3-5 years)</h3>
              <div className="text-2xl font-bold text-yellow-600">10-13 hours</div>
              <p className="text-sm text-gray-600 mt-2">Mostly nighttime sleep, may still nap</p>
            </div>
            
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">School Age (6-13 years)</h3>
              <div className="text-2xl font-bold text-indigo-600">9-11 hours</div>
              <p className="text-sm text-gray-600 mt-2">Consistent bedtime routine becomes crucial</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">Teenagers (14-17 years)</h3>
              <div className="text-2xl font-bold text-purple-600">8-10 hours</div>
              <p className="text-sm text-gray-600 mt-2">Later bedtimes due to circadian shifts</p>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-700 mb-2">Young Adults (18-25 years)</h3>
              <div className="text-2xl font-bold text-orange-600">7-9 hours</div>
              <p className="text-sm text-gray-600 mt-2">Establishing lifelong sleep habits</p>
            </div>
            
            <div className="text-center p-4 bg-teal-50 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Adults (26-64 years)</h3>
              <div className="text-2xl font-bold text-teal-600">7-9 hours</div>
              <p className="text-sm text-gray-600 mt-2">Quality becomes as important as quantity</p>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Older Adults (65+ years)</h3>
              <div className="text-2xl font-bold text-gray-600">7-8 hours</div>
              <p className="text-sm text-gray-600 mt-2">Earlier bedtimes, may wake earlier</p>
            </div>
          </div>
        </div>

        {/* FAQ for Sleep Tracking */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Sleep Tracking FAQ: How Much Sleep Did I Get?
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How do I calculate how much sleep I got accurately?
              </h3>
              <p className="text-gray-600">
                Enter your exact bedtime and wake time into our calculator. We automatically account for the average 15 minutes it takes to fall asleep and calculate your total sleep duration, number of 90-minute cycles completed, and sleep quality score based on your age and gender.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                What's the difference between time in bed and actual sleep time?
              </h3>
              <p className="text-gray-600">
                Time in bed includes time spent falling asleep, potential wake-ups, and time lying awake. Our calculator focuses on actual sleep time by subtracting fall-asleep time and provides realistic sleep duration estimates for better accuracy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How many sleep cycles should I complete each night?
              </h3>
              <p className="text-gray-600">
                Most adults should complete 4-6 full 90-minute sleep cycles (6-9 hours total). Completing full cycles is more important than total hours - waking up mid-cycle causes grogginess. Our calculator shows exactly how many cycles you completed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Why does my sleep quality score matter?
              </h3>
              <p className="text-gray-600">
                Your sleep quality score combines duration, cycles completed, and age-appropriate needs. A higher score indicates better alignment with your biological sleep requirements, leading to improved energy, mood, cognitive function, and overall health.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Track Your Sleep Like Never Before
          </h2>
          <p className="text-lg mb-6">
            Get instant insights into your sleep patterns with our advanced "How Much Sleep Did I Get" calculator.
          </p>
          <p className="text-sm opacity-90">
            📊 Track exact hours • 🔄 Count sleep cycles • 🎯 Quality analysis • 🧠 FREE AI recommendations
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}