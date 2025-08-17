import { Link } from 'wouter';
import { ArrowLeft, Heart, Users, Target, Award, Clock, Moon } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sleep-blue-50 via-sleep-purple-50 to-pink-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="text-center mb-12">
            <Heart className="mx-auto mb-4 text-sleep-blue-600" size={48} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About SleepCycle.io
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Your trusted companion for optimal sleep optimization using scientifically-backed 90-minute sleep cycles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At <a href="https://sleepcycle.io" className="text-sleep-blue-600 hover:text-sleep-blue-700">SleepCycle.io</a>, we're dedicated to helping millions of people achieve better sleep through science-based tools. Our comprehensive sleep cycle calculator helps you find the perfect bedtime and wake-up times using proven 90-minute sleep cycle research.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're looking for the optimal nap duration, trying to establish a healthy baby sleep schedule, or simply want to calculate how much sleep you got last night, our tools are designed to make sleep optimization accessible to everyone.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Sleep Cycles Matter</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Research shows that our sleep occurs in approximately 90-minute cycles. Waking up at the end of a complete cycle can help you feel more refreshed and alert, while waking up in the middle of a cycle often leads to grogginess and fatigue.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our <a href="/" className="text-sleep-blue-600 hover:text-sleep-blue-700">sleep cycle calculator</a> takes the guesswork out of timing your sleep, helping you wake up feeling naturally refreshed and energized.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-sleep-blue-50 to-sleep-purple-50 rounded-xl">
              <Clock className="mx-auto mb-4 text-sleep-blue-600" size={48} />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Scientifically Accurate</h3>
              <p className="text-gray-600">
                Our calculations are based on established sleep research and 90-minute REM cycle science for optimal timing.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-sleep-purple-50 to-pink-50 rounded-xl">
              <Users className="mx-auto mb-4 text-sleep-purple-600" size={48} />
              <h3 className="text-xl font-bold text-gray-800 mb-3">For Everyone</h3>
              <p className="text-gray-600">
                From adults seeking better sleep to parents needing baby nap schedules, our tools serve all ages and needs.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl">
              <Target className="mx-auto mb-4 text-pink-600" size={48} />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mobile-First</h3>
              <p className="text-gray-600">
                Designed primarily for mobile users with large touch targets and intuitive navigation for easy bedtime planning.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Sleep Calculator Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <Moon className="text-sleep-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Bedtime Calculator</h4>
                  <p className="text-gray-600 text-sm">Find optimal bedtimes based on when you need to wake up</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-sleep-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Wake-up Calculator</h4>
                  <p className="text-gray-600 text-sm">Discover the best wake-up times from your current bedtime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="text-sleep-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Nap Calculator</h4>
                  <p className="text-gray-600 text-sm">Find the perfect nap duration for adults and different needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-sleep-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Baby Nap Calculator</h4>
                  <p className="text-gray-600 text-sm">Age-specific sleep schedules for babies and toddlers</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="text-sleep-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Sleep Tracker</h4>
                  <p className="text-gray-600 text-sm">Calculate how much sleep you got and track your patterns</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="text-sleep-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Age-Specific Recommendations</h4>
                  <p className="text-gray-600 text-sm">Tailored sleep advice based on your age and lifestyle</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Optimize Your Sleep?</h2>
            <p className="text-gray-600 mb-6">
              Try our free sleep cycle calculator and discover the scientifically best time to sleep and wake up.
            </p>
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sleep-blue-600 to-sleep-purple-600 text-white font-semibold rounded-lg hover:from-sleep-blue-700 hover:to-sleep-purple-700 transition-all duration-300">
              Start Calculating Now →
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/privacy-policy" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}