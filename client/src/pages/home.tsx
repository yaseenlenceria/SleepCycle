import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DarkSleepCalculator } from '@/components/dark-sleep-calculator';
import { Moon, Sun, Brain, Heart, Star, Shield } from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SleepCycle.io - Optimize Your Sleep with Science";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate optimal sleep times using 90-minute sleep cycles. Free, simple, and scientifically accurate sleep optimization tool.');
    }

    // Add dark theme class to body
    document.body.classList.add('dark-theme');
  }, []);

  return (
    <div className="min-h-screen dark-theme">
      {/* Use the beautiful dark calculator as the main content */}
      <DarkSleepCalculator />

      {/* Features Section - Keep the original content */}
      <section className="bg-gradient-to-t from-neutral-900 to-neutral-950 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose SleepCycle.io?
            </h2>
            <p className="text-xl text-neutral-400">
              Science-based sleep optimization made simple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-neutral-800 bg-neutral-900/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-rose-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  90-Minute Cycles
                </h3>
                <p className="text-neutral-400">
                  Based on natural sleep cycle science for optimal rest and recovery
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-900/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="text-green-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Wake Refreshed
                </h3>
                <p className="text-neutral-400">
                  Wake up at the optimal time in your sleep cycle for maximum energy
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-900/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Moon className="text-purple-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Sleep Better
                </h3>
                <p className="text-neutral-400">
                  Find your perfect bedtime for deeper, more restorative sleep
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}