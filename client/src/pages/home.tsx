import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SimpleSleepCalculator } from '@/components/simple-sleep-calculator';
import { Card, CardContent } from '@/components/ui/card';
import { Moon, Sun, Brain, Heart, Star, Shield } from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SleepCycle.io - Optimize Your Sleep with Science";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate optimal sleep times using 90-minute sleep cycles. Free, simple, and scientifically accurate sleep optimization tool.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-6">
              <Moon className="text-blue-600 mr-3" size={48} />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                SleepCycle.io
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Optimize Your Sleep with 90-Minute Sleep Cycles
            </p>
            <div className="flex justify-center items-center gap-6 text-gray-500">
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-current" size={20} />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="text-red-400" size={20} />
                <span>10M+ Users</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="text-green-400" size={20} />
                <span>100% Free</span>
              </div>
            </div>
          </div>

          {/* Calculator Section */}
          <div className="mb-16">
            <SimpleSleepCalculator />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose SleepCycle.io?
              </h2>
              <p className="text-xl text-gray-600">
                Science-based sleep optimization made simple
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    90-Minute Cycles
                  </h3>
                  <p className="text-gray-600">
                    Based on natural sleep cycle science for optimal rest and recovery
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Wake Refreshed
                  </h3>
                  <p className="text-gray-600">
                    Wake up at the optimal time in your sleep cycle for maximum energy
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Moon className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Sleep Better
                  </h3>
                  <p className="text-gray-600">
                    Find your perfect bedtime for deeper, more restorative sleep
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Three simple steps to better sleep
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Choose Your Time
                </h3>
                <p className="text-gray-600">
                  Enter when you want to wake up or go to bed
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  We Calculate
                </h3>
                <p className="text-gray-600">
                  Our algorithm finds optimal times based on sleep cycles
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sleep Better
                </h3>
                <p className="text-gray-600">
                  Wake up refreshed and energized every day
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Millions
              </h2>
              <p className="text-xl text-gray-600">
                Join the community of better sleepers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  10M+
                </div>
                <p className="text-gray-600">Happy Users</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  4.9★
                </div>
                <p className="text-gray-600">User Rating</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                  96.8%
                </div>
                <p className="text-gray-600">Accuracy Rate</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  24/7
                </div>
                <p className="text-gray-600">Always Free</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}