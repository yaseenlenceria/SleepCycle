import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { EnhancedTimePicker } from '@/components/enhanced-time-picker';
import { EnhancedSleepResults } from '@/components/enhanced-sleep-results';
import { UserProfileForm } from '@/components/user-profile-form';
import { NapCalculator } from '@/components/nap-calculator';
import { SleepTracker } from '@/components/sleep-tracker';
import { AgeCalculator } from '@/components/age-calculator';
import { BabyNapCalculator } from '@/components/baby-nap-calculator';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { calculateBedtimes, calculateWakeUpTimes, calculateWakeUpTimesFromNow, getCurrentTime, SleepTime } from '@/lib/sleep-calculations';
import { Bed, Sun, Clock, Heart, Coffee, BarChart3, Users, Calculator, Moon, Star, Baby, Smartphone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function SleepCalculator() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const tabFromUrl = urlParams.get('tab') as 'bedtime' | 'wakeup' | 'nap' | 'tracker' | 'age' | 'baby' | null;
  
  const [activeTab, setActiveTab] = useState<'bedtime' | 'wakeup' | 'nap' | 'tracker' | 'age' | 'baby'>(tabFromUrl || 'bedtime');
  const isMobile = useIsMobile();
  const [hour, setHour] = useState('6');
  const [minute, setMinute] = useState('30');
  const [period, setPeriod] = useState('AM');
  const [bedtimes, setBedtimes] = useState<SleepTime[]>([]);
  const [wakeupTimes, setWakeupTimes] = useState<SleepTime[]>([]);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [showBedtimeResults, setShowBedtimeResults] = useState(false);
  const [showWakeupResults, setShowWakeupResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [sleepNowTimes, setSleepNowTimes] = useState<SleepTime[]>([]);
  const [showSleepNowResults, setShowSleepNowResults] = useState(false);
  const [userProfile, setUserProfile] = useState<{age: number; sex: 'male' | 'female'} | null>(null);

  // Scroll to top on page load and set SEO meta
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sleep Cycle — The World's Best Sleep App | Sleep Calculator: Ideal Bedtime & Wake Up Times";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Track and improve your sleep with Sleep Cycle. The app uses sound analysis, 4 billion sleep sessions, and 13 years of science to help millions sleep better. Find your ideal bedtime and wake up times.');
    }
  }, []);

  // Update tab from URL
  useEffect(() => {
    if (tabFromUrl && ['bedtime', 'wakeup', 'nap', 'tracker', 'age', 'baby'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const handleTimeChange = (newHour: string, newMinute: string, newPeriod: string) => {
    setHour(newHour);
    setMinute(newMinute);
    setPeriod(newPeriod);
    setShowBedtimeResults(false); // Reset results when time changes
  };

  const handleCalculateBedtime = () => {
    setIsCalculating(true);
    setShowBedtimeResults(false);
    
    setTimeout(() => {
      const selectedTime = `${hour}:${minute} ${period}`;
      const results = calculateBedtimes(selectedTime);
      setBedtimes(results);
      setIsCalculating(false);
      setShowBedtimeResults(true);
    }, 1500); // Show loading animation for 1.5 seconds
  };

  const handleCalculateWakeup = () => {
    setIsCalculating(true);
    setShowWakeupResults(false);
    
    setTimeout(() => {
      const {times, currentTime: liveTime} = calculateWakeUpTimesFromNow();
      setWakeupTimes(times);
      setCurrentTime(liveTime); // Update with actual current time
      setIsCalculating(false);
      setShowWakeupResults(true);
    }, 1500);
  };

  const handleSleepNow = () => {
    setIsCalculating(true);
    setShowSleepNowResults(false);
    
    setTimeout(() => {
      const {times, currentTime: liveTime} = calculateWakeUpTimesFromNow();
      setSleepNowTimes(times);
      setCurrentTime(liveTime); // Update with actual current time
      setIsCalculating(false);
      setShowSleepNowResults(true);
    }, 1500);
  };

  const selectedTimeString = `${hour}:${minute} ${period}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 animate-gradient">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Amazing Sleep Calculator Navigation */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl"></div>
          
          {/* Main Navigation Card */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-3 sm:p-6 mb-8 overflow-hidden">
            {/* Floating Gradient Orbs */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            {/* Header */}
            <div className="relative text-center mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                AI Sleep Calculator
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Choose your calculator and get personalized health assessments powered by AI
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="relative">
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto scrollbar-hide">
                <div className="flex space-x-2 pb-2 px-1" style={{minWidth: 'max-content'}}>
                  {[
                    { id: 'bedtime', label: 'Bedtime', icon: Bed, gradient: 'from-blue-500 to-blue-600', description: 'Perfect bedtime' },
                    { id: 'wakeup', label: 'Wake-up', icon: Sun, gradient: 'from-amber-500 to-orange-500', description: 'Optimal wake time' },
                    { id: 'nap', label: 'Nap', icon: Coffee, gradient: 'from-green-500 to-teal-500', description: 'Power nap timer' },
                    { id: 'baby', label: 'Baby', icon: Baby, gradient: 'from-pink-500 to-rose-500', description: 'Baby sleep guide' },
                    { id: 'tracker', label: 'Tracker', icon: BarChart3, gradient: 'from-purple-500 to-violet-500', description: 'Sleep analytics' },
                    { id: 'age', label: 'Age-Specific', icon: Users, gradient: 'from-indigo-500 to-purple-500', description: 'By age group' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id as any);
                        if (tab.id === 'bedtime' || tab.id === 'wakeup') {
                          setShowBedtimeResults(false);
                          setShowWakeupResults(false);
                        }
                      }}
                      className={`relative flex flex-col items-center justify-center p-3 rounded-2xl min-w-[80px] transition-all duration-300 transform hover:scale-105 ${
                        activeTab === tab.id
                          ? `bg-gradient-to-br ${tab.gradient} text-white shadow-lg shadow-${tab.gradient.split('-')[1]}-500/25`
                          : 'bg-white/60 hover:bg-white/80 text-gray-600 hover:text-gray-800'
                      }`}
                      data-testid={`tab-${tab.id}`}
                    >
                      <div className={`p-2 rounded-xl mb-1 ${activeTab === tab.id ? 'bg-white/20' : 'bg-gradient-to-br ' + tab.gradient + ' bg-opacity-10'}`}>
                        <tab.icon size={20} className={activeTab === tab.id ? 'text-white' : `text-${tab.gradient.split('-')[1]}-500`} />
                      </div>
                      <span className="text-xs font-semibold">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid Layout */}
              <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { id: 'bedtime', label: 'Bedtime Calculator', icon: Bed, gradient: 'from-blue-500 to-blue-600', description: 'Find your perfect bedtime' },
                  { id: 'wakeup', label: 'Wake-up Timer', icon: Sun, gradient: 'from-amber-500 to-orange-500', description: 'Optimal wake-up times' },
                  { id: 'nap', label: 'Nap Calculator', icon: Coffee, gradient: 'from-green-500 to-teal-500', description: 'Power nap optimization' },
                  { id: 'baby', label: 'Baby & Toddler', icon: Baby, gradient: 'from-pink-500 to-rose-500', description: 'Baby sleep schedules' },
                  { id: 'tracker', label: 'Sleep Tracker', icon: BarChart3, gradient: 'from-purple-500 to-violet-500', description: 'Track your progress' },
                  { id: 'age', label: 'Age-Specific', icon: Users, gradient: 'from-indigo-500 to-purple-500', description: 'Recommendations by age' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      if (tab.id === 'bedtime' || tab.id === 'wakeup') {
                        setShowBedtimeResults(false);
                        setShowWakeupResults(false);
                      }
                    }}
                    className={`group relative flex flex-col items-center p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      activeTab === tab.id
                        ? `bg-gradient-to-br ${tab.gradient} text-white shadow-lg shadow-${tab.gradient.split('-')[1]}-500/25`
                        : 'bg-white/60 hover:bg-white/80 text-gray-700 hover:text-gray-900'
                    }`}
                    data-testid={`tab-${tab.id}`}
                  >
                    {/* Icon Container */}
                    <div className={`relative p-3 rounded-xl mb-3 transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'bg-white/20' 
                        : `bg-gradient-to-br ${tab.gradient} bg-opacity-10 group-hover:bg-opacity-20`
                    }`}>
                      <tab.icon 
                        size={24} 
                        className={`transition-all duration-300 ${
                          activeTab === tab.id 
                            ? 'text-white' 
                            : `text-${tab.gradient.split('-')[1]}-600 group-hover:text-${tab.gradient.split('-')[1]}-700`
                        }`} 
                      />
                      
                      {/* Active Indicator */}
                      {activeTab === tab.id && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    {/* Text */}
                    <div className="text-center">
                      <h3 className={`font-semibold text-sm mb-1 transition-all duration-300 ${
                        activeTab === tab.id ? 'text-white' : 'text-gray-800 group-hover:text-gray-900'
                      }`}>
                        {tab.label}
                      </h3>
                      <p className={`text-xs transition-all duration-300 ${
                        activeTab === tab.id ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-600'
                      }`}>
                        {tab.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bedtime Calculator */}
        {activeTab === 'bedtime' && (
          <div className="space-y-8 animate-in slide-in-from-right-5 duration-500">
            <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  AI Bedtime Calculator with Health Assessment
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto">
                  Select your desired wake-up time and get personalized bedtimes with FREE health recommendations. Not just another calculator – AI that adapts to YOUR needs
                </p>
              </div>

              <div className="flex justify-center">
                <EnhancedTimePicker
                  hour={hour}
                  minute={minute}
                  period={period}
                  onTimeChange={handleTimeChange}
                  label="I will wake up at..."
                  icon={<Sun size={20} />}
                />
              </div>

              <div className="text-center mt-8">
                <Button
                  onClick={handleCalculateBedtime}
                  className="bg-gradient-to-r from-sleep-blue-600 to-sleep-purple-600 hover:from-sleep-blue-700 hover:to-sleep-purple-700 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
                  data-testid="button-calculate-bedtime"
                >
                  <Calculator className="mr-2 md:mr-3" size={18} />
                  <span className="hidden sm:inline">Calculate Optimal Bedtimes</span>
                  <span className="sm:hidden">Calculate Bedtime</span>
                </Button>
              </div>
            </div>

            <EnhancedSleepResults
              times={bedtimes}
              type="bedtime"
              selectedTime={showBedtimeResults ? selectedTimeString : undefined}
              isLoading={isCalculating}
              userAge={userProfile?.age}
              userSex={userProfile?.sex}
            />
          </div>
        )}

        {/* Wake-up Calculator */}
        {activeTab === 'wakeup' && (
          <div className="space-y-8 animate-in slide-in-from-right-5 duration-500">
            <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  AI Wake-Up Time Calculator with Health Assessment
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto">
                  Going to sleep now? Get AI-powered wake-up times with FREE personalized health analysis. Science-backed recommendations that optimize YOUR sleep quality
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl px-8 py-4 shadow-md">
                  <Clock className="text-blue-600 mr-3 sleep-pulse" size={24} />
                  <span className="text-lg font-semibold text-gray-800">Current time: </span>
                  <span className="text-xl font-bold text-sleep-blue-600 ml-3" data-testid="current-time">
                    {currentTime}
                  </span>
                </div>
              </div>

              <div className="text-center space-y-6">
                <Button
                  onClick={handleCalculateWakeup}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  data-testid="button-calculate-wakeup"
                >
                  <Sun className="mr-3" size={20} />
                  Calculate Wake-Up Times
                </Button>

                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-700 mb-2">Or</div>
                  <Button
                    onClick={handleSleepNow}
                    variant="outline"
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0 px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    data-testid="button-sleep-now"
                  >
                    <Moon className="mr-2" size={18} />
                    Sleep Now
                  </Button>
                </div>
              </div>
            </div>

            <EnhancedSleepResults
              times={showWakeupResults ? wakeupTimes : sleepNowTimes}
              type="wakeup"
              selectedTime={showWakeupResults ? currentTime : showSleepNowResults ? currentTime : undefined}
              isLoading={isCalculating}
              userAge={userProfile?.age}
              userSex={userProfile?.sex}
            />
          </div>
        )}

        {/* Nap Calculator */}
        {activeTab === 'nap' && (
          <div className="animate-in slide-in-from-right-5 duration-500">
            <NapCalculator />
          </div>
        )}

        {/* Sleep Tracker */}
        {activeTab === 'tracker' && (
          <div className="animate-in slide-in-from-right-5 duration-500">
            <SleepTracker />
          </div>
        )}

        {/* Age Calculator */}
        {activeTab === 'age' && (
          <div className="animate-in slide-in-from-right-5 duration-500">
            <AgeCalculator />
          </div>
        )}

        {/* Baby Nap Calculator */}
        {activeTab === 'baby' && (
          <div className="animate-in slide-in-from-right-5 duration-500">
            <BabyNapCalculator />
          </div>
        )}

        {/* User Profile Form for Personalized Recommendations */}
        <div className="mt-12">
          <UserProfileForm 
            onProfileSet={setUserProfile}
            initialProfile={userProfile || undefined}
          />
        </div>

        {/* Enhanced Educational Content */}
        <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 mt-12">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-sleep-blue-800 to-sleep-purple-600 bg-clip-text text-transparent mb-8">
            AI Sleep Science & Personalized Health Assessment
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-sleep-blue-100 to-sleep-blue-200 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg sleep-float">
                <Clock className="text-sleep-blue-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">90-Minute Cycles</h4>
              <p className="text-gray-600 leading-relaxed">
                Each sleep cycle lasts approximately 90 minutes, consisting of light sleep, 
                deep sleep, and REM sleep stages. Waking up between cycles helps you feel refreshed.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-sleep-purple-100 to-sleep-purple-200 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg sleep-float">
                <Bed className="text-sleep-purple-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">15-Minute Buffer</h4>
              <p className="text-gray-600 leading-relaxed">
                The average person takes about 15 minutes to fall asleep, which is factored 
                into our calculations for accurate bedtime recommendations.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-teal-100 to-emerald-200 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg sleep-float">
                <Heart className="text-teal-600" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">5-6 Cycles Ideal</h4>
              <p className="text-gray-600 leading-relaxed">
                Most adults need 5-6 complete sleep cycles (7.5-9 hours) for optimal rest, recovery, 
                and cognitive performance.
              </p>
            </div>
          </div>

          {/* SEO-focused content section */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-70 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Why Sleep Cycles Matter</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Memory Consolidation:</strong> Deep sleep helps transfer memories from short-term to long-term storage</li>
                <li>• <strong>Physical Recovery:</strong> Growth hormone is released during deep sleep stages</li>
                <li>• <strong>Brain Detoxification:</strong> The glymphatic system clears metabolic waste during sleep</li>
                <li>• <strong>Emotional Regulation:</strong> REM sleep helps process emotions and stress</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-70 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Scientifically Best Sleep Times</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Bedtime:</strong> Between 10:00 PM - 11:00 PM aligns with natural circadian rhythms</li>
                <li>• <strong>Wake Time:</strong> 6:00 AM - 7:00 AM maximizes morning light exposure</li>
                <li>• <strong>Consistency:</strong> Same sleep/wake times daily strengthen your body clock</li>
                <li>• <strong>Temperature:</strong> Core body temperature drops 1-2°F during optimal sleep</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
