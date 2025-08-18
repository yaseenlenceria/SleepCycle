import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Brain, Target, Trophy } from 'lucide-react';

import { Link } from 'wouter';

export default function BestSleepCalculatorByAgePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "★★★★★ Best Sleep Calculator by Age & Gender - FREE Sleep Cycle Calculator - Sleepcycle.io";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '★★★★★ Best Sleep Calculator by Age & Gender - FREE sleep cycle calculator age-based. From newborns to seniors, get personalized sleep schedules. AI-powered, scientifically accurate, trusted by millions.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Best Sleep Calculator by Age & Gender</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            <strong>The World's Most Accurate Sleep Calculator by Age</strong> – Personalized sleep schedules for every age group from newborns to seniors. FREE age-specific sleep cycle calculator with AI health assessment based on your age, gender, and unique sleep needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8">
            <span>Newborn to Senior</span>
            <span> Gender-Specific</span>
            <span>Age-Based Science</span>
            <span> Personalized Results</span>
            <span>Always FREE</span>
          </div>
        </div>

        {/* Interactive Calculator */}
        <div className="text-center mb-8">
          <Link href="/sleep-calculator-by-age">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">Try Our Advanced Age-Specific Calculator</Button>
          </Link>
        </div>

        {/* Age-Specific Sleep Calculators */}
        <div className="mt-16 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Choose Your Age-Specific Sleep Calculator
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Baby & Toddler Calculators */}
            <Link href="/sleep-cycles-newborns">
              <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <Users className="mx-auto text-pink-500 mb-2" size={40} />
                  <CardTitle className="text-xl text-pink-700">Newborns (0-3 months)</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-2">14-17 hours</div>
                  <p className="text-sm text-gray-600">Specialized newborn sleep calculator with safe sleep guidelines</p>
                  <div className="mt-4 text-xs text-pink-600 font-semibold">Click to Calculate →</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/sleep-cycles-4-month-old">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <Users className="mx-auto text-blue-500 mb-2" size={40} />
                  <CardTitle className="text-xl text-blue-700">4-Month Babies</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">12-16 hours</div>
                  <p className="text-sm text-gray-600">Sleep regression period with transitioning patterns</p>
                  <div className="mt-4 text-xs text-blue-600 font-semibold">Click to Calculate →</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/sleep-cycles-6-month-old">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <Users className="mx-auto text-green-500 mb-2" size={40} />
                  <CardTitle className="text-xl text-green-700">6-Month Babies</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">12-15 hours</div>
                  <p className="text-sm text-gray-600">Sleep training readiness with consolidating sleep</p>
                  <div className="mt-4 text-xs text-green-600 font-semibold">Click to Calculate →</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/sleep-cycles-toddlers">
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <Users className="mx-auto text-purple-500 mb-2" size={40} />
                  <CardTitle className="text-xl text-purple-700">Toddlers (1-3 years)</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">11-14 hours</div>
                  <p className="text-sm text-gray-600">Nap transitions and developing independence</p>
                  <div className="mt-4 text-xs text-purple-600 font-semibold">Click to Calculate →</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/sleep-cycles-adults">
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <Users className="mx-auto text-orange-500 mb-2" size={40} />
                  <CardTitle className="text-xl text-orange-700">Adults (18-64 years)</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">7-9 hours</div>
                  <p className="text-sm text-gray-600">Optimal adult sleep with 90-minute cycles</p>
                  <div className="mt-4 text-xs text-orange-600 font-semibold">Click to Calculate →</div>
                </CardContent>
              </Card>
            </Link>

            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 shadow-lg">
              <CardHeader className="text-center pb-4">
                <Users className="mx-auto text-gray-500 mb-2" size={40} />
                <CardTitle className="text-xl text-gray-700">Seniors (65+ years)</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-gray-600 mb-2">7-8 hours</div>
                <p className="text-sm text-gray-600">Age-appropriate sleep with earlier bedtimes</p>
                <div className="mt-4 text-xs text-gray-600 font-semibold">Use Adult Calculator</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Age Matters for Sleep */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Age & Gender Matter for Sleep Calculation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Brain className="mx-auto text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Brain Development</h3>
              <p className="text-gray-600">
                Sleep needs change dramatically as the brain develops. Newborns need 14-17 hours for rapid growth, while adults need 7-9 hours for maintenance and recovery.
              </p>
            </div>
            
            <div className="text-center">
              <Target className="mx-auto text-green-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Hormonal Differences</h3>
              <p className="text-gray-600">
                Men and women have different sleep patterns due to hormonal variations. Women often need slightly more sleep and experience different sleep disruptions during life stages.
              </p>
            </div>
            
            <div className="text-center">
              <Trophy className="mx-auto text-purple-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Circadian Changes</h3>
              <p className="text-gray-600">
                Your internal clock shifts with age. Teenagers naturally sleep later and wake later, while older adults tend to sleep and wake earlier.
              </p>
            </div>
          </div>
        </div>

        {/* Age-Specific Sleep Science */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Sleep Science by Age Group
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-xl font-semibold text-pink-700 mb-2">Infants & Babies (0-12 months)</h3>
              <p className="text-gray-600">
                Rapid brain development requires extensive sleep. Sleep cycles are shorter (50-60 minutes vs. adult 90 minutes). REM sleep comprises 50% of total sleep time for neural development. Our baby calculators account for these unique patterns.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Children & Teens (1-17 years)</h3>
              <p className="text-gray-600">
                Growth hormone release peaks during deep sleep stages. Teenagers experience a natural circadian shift, making them biologically programmed to sleep later. Our calculators adjust for these developmental changes.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Adults (18-64 years)</h3>
              <p className="text-gray-600">
                90-minute sleep cycles become fully established. Men typically need 7-8 hours, women 7.5-8.5 hours. Sleep efficiency peaks in the 20s-30s, then gradually declines. Our adult calculator optimizes for peak performance.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">Older Adults (65+ years)</h3>
              <p className="text-gray-600">
                Earlier bedtimes and wake times become natural. Deep sleep decreases, light sleep increases. Total sleep need slightly reduces to 7-8 hours. Our calculations account for these age-related changes.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Find Your Perfect Sleep Schedule by Age
          </h2>
          <p className="text-lg mb-6">
            Join millions who've optimized their sleep with our age-specific, scientifically-backed sleep calculators.
          </p>
          <p className="text-sm opacity-90">Newborn to Senior •  Gender-specific •  Age-based science •  Always FREE</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}