import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { EnhancedTimePicker } from '@/components/enhanced-time-picker';
import { SimpleSleepResults } from '@/components/simple-sleep-results';
import { UserProfileForm } from '@/components/user-profile-form';
import { NapCalculator } from '@/components/nap-calculator';
import { SleepTracker } from '@/components/sleep-tracker';
import { AgeCalculator } from '@/components/age-calculator';
import { BabyNapCalculator } from '@/components/baby-nap-calculator';
import { SimpleHomepageNavigation } from '@/components/simple-homepage-navigation';
import { ModernDashboardHomepage } from '@/components/modern-dashboard-homepage';
import { UltraSimpleHomepage } from '@/components/ultra-simple-homepage';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { calculateBedtimes, calculateWakeUpTimes, calculateWakeUpTimesFromNow, calculateWakeUpTimesFromBedtime, getCurrentTime, SleepTime } from '@/lib/sleep-calculations';
import { Bed, Sun, Clock, Heart, Coffee, BarChart3, Users, Calculator, Moon, Star, Baby, Smartphone, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [userProfile, setUserProfile] = useState<{age: number; sex: 'male' | 'female'} | null>(null);
  const [selectedSleepDuration, setSelectedSleepDuration] = useState<number | undefined>(undefined);

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

  const handleCalculateWakeup = (bedtime?: string) => {
    setIsCalculating(true);
    setShowWakeupResults(false);
    
    setTimeout(() => {
      if (bedtime) {
        // Calculate wake-up times from specific bedtime
        const results = calculateWakeUpTimesFromBedtime(bedtime);
        setWakeupTimes(results);
      } else {
        // Calculate wake-up times from now
        const {times, currentTime: liveTime} = calculateWakeUpTimesFromNow();
        setWakeupTimes(times);
        setCurrentTime(liveTime);
      }
      setIsCalculating(false);
      setShowWakeupResults(true);
    }, 1500);
  };

  const handleSleepNow = (sleepDuration?: number) => {
    setSelectedSleepDuration(sleepDuration);
    setIsCalculating(true);
    setShowSleepNowResults(false);
    
    setTimeout(() => {
      const {times, currentTime: liveTime} = calculateWakeUpTimesFromNow(sleepDuration);
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

      <main className="px-2 py-4 sm:px-4 sm:py-6">
        {/* Ultra Simple Homepage */}
        <UltraSimpleHomepage
          hour={hour}
          minute={minute}
          period={period}
          onTimeChange={handleTimeChange}
          onCalculateBedtime={handleCalculateBedtime}
          onCalculateWakeup={handleCalculateWakeup}
          onSleepNow={handleSleepNow}
        />

        {/* Results Display - Takes Full Page on Mobile */}
        {(showBedtimeResults || showWakeupResults || showSleepNowResults) && (
          <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 z-50 overflow-y-auto">
            <div className="min-h-screen">
              <Header />
              <div className="px-2 py-4 sm:px-4 sm:py-6">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-6">
                    <Button
                      onClick={() => {
                        setShowBedtimeResults(false);
                        setShowWakeupResults(false);
                        setShowSleepNowResults(false);
                      }}
                      variant="outline"
                      className="mb-4"
                    >
                      ← Back to Calculator
                    </Button>
                  </div>
                  
                  {showBedtimeResults && (
                    <SimpleSleepResults
                      times={bedtimes}
                      type="bedtime"
                      selectedTime={selectedTimeString}
                      selectedSleepDuration={selectedSleepDuration}
                      isLoading={isCalculating}
                      userAge={userProfile?.age}
                      userSex={userProfile?.sex}
                      onSleepDurationChange={(duration) => {
                        setSelectedSleepDuration(duration);
                        // Optionally trigger re-calculation with new duration
                      }}
                    />
                  )}
                  {showWakeupResults && (
                    <SimpleSleepResults
                      times={wakeupTimes}
                      type="wakeup"
                      selectedTime={selectedTimeString}
                      selectedSleepDuration={selectedSleepDuration}
                      isLoading={isCalculating}
                      userAge={userProfile?.age}
                      userSex={userProfile?.sex}
                      onSleepDurationChange={(duration) => {
                        setSelectedSleepDuration(duration);
                      }}
                    />
                  )}
                  {showSleepNowResults && (
                    <SimpleSleepResults
                      times={sleepNowTimes}
                      type="sleepNow"
                      selectedTime={currentTime}
                      selectedSleepDuration={selectedSleepDuration}
                      isLoading={isCalculating}
                      userAge={userProfile?.age}
                      userSex={userProfile?.sex}
                    />
                  )}
                  
                  {/* Next Steps Navigation */}
                  <Card className="mt-8 bg-white shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">What's Next?</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Button
                          onClick={() => {
                            setShowBedtimeResults(false);
                            setShowWakeupResults(false);
                            setShowSleepNowResults(false);
                          }}
                          variant="outline"
                          className="flex items-center justify-center py-3"
                        >
                          Try Different Time
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                        <Button
                          onClick={() => handleSleepNow()}
                          className="bg-green-500 hover:bg-green-600 text-white py-3"
                        >
                          Sleep Now Instead
                          <Moon className="ml-2" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hidden Old Bedtime Calculator - Keep for other functionality */}
        {false && activeTab === 'bedtime' && (
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

              <div className="text-center mt-8 space-y-4">
                <Button
                  onClick={handleCalculateBedtime}
                  className="bg-gradient-to-r from-sleep-blue-600 to-sleep-purple-600 hover:from-sleep-blue-700 hover:to-sleep-purple-700 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
                  data-testid="button-calculate-bedtime"
                >
                  <Calculator className="mr-2 md:mr-3" size={18} />
                  <span className="hidden sm:inline">Find Your Perfect Bedtime</span>
                  <span className="sm:hidden">Find Bedtime</span>
                </Button>

                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-700 mb-2">Or</div>
                  <Button
                    onClick={() => handleSleepNow()}
                    variant="outline"
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0 px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    data-testid="button-sleep-now-bedtime"
                  >
                    <Moon className="mr-2" size={18} />
                    Sleep Now
                  </Button>
                  <p className="text-xs text-gray-500 mt-1">Get wake-up times if you sleep right now</p>
                </div>
              </div>
            </div>

            <SimpleSleepResults
              times={bedtimes}
              type="bedtime"
              selectedTime={showBedtimeResults ? selectedTimeString : undefined}
              isLoading={isCalculating}
              userAge={userProfile?.age}
              userSex={userProfile?.sex}
            />
          </div>
        )}

        {/* Hidden Old Wake-up Calculator */}
        {false && activeTab === 'wakeup' && (
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
                  <span className="hidden sm:inline">Calculate Wake-Up Times</span>
                  <span className="sm:hidden">Wake-Up Times</span>
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

            <SimpleSleepResults
              times={showWakeupResults ? wakeupTimes : sleepNowTimes}
              type="wakeup"
              selectedTime={showWakeupResults ? currentTime : showSleepNowResults ? currentTime : undefined}
              isLoading={isCalculating}
              userAge={userProfile?.age}
              userSex={userProfile?.sex}
            />

            {/* Show Sleep Now results - works from both bedtime and wake-up calculators */}
            {showSleepNowResults && (
              <SimpleSleepResults
                times={sleepNowTimes}
                type="wakeup" 
                selectedTime={currentTime}
                isLoading={isCalculating}
                userAge={userProfile?.age}
                userSex={userProfile?.sex}
              />
            )}
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




      </main>

      <Footer />
    </div>
  );
}
