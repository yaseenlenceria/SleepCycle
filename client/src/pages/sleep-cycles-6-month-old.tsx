import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Clock, Moon, Sun, Utensils } from 'lucide-react';
import { NewbornCalculator } from '@/components/newborn-calculator';
import { NewbornSleepResults } from '@/components/newborn-sleep-results';
import { calculateNewbornBedtimes, calculateNewbornNapTimes, calculateNewbornSleepNow } from '@/lib/newborn-sleep-calculations';

export default function SleepCycles6MonthOldPage() {
  // Calculator state
  const [hour, setHour] = useState('7');
  const [minute, setMinute] = useState('00');
  const [period, setPeriod] = useState('AM');
  const [bedtimes, setBedtimes] = useState<any[]>([]);
  const [wakeupTimes, setWakeupTimes] = useState<any[]>([]);
  const [sleepNowTimes, setSleepNowTimes] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState('');
  const [isCalculating, setIsCalculating] = useState('');
  const [showBedtimeResults, setShowBedtimeResults] = useState(false);
  const [showNapResults, setShowNapResults] = useState(false);
  const [showSleepNowResults, setShowSleepNowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AI Sleep Calculator for 6 Month Old Babies | Sleep Training Tool - Sleepcycle.io";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI Sleep Calculator with FREE Health Assessment for 6-month babies. Master sleep training with personalized recommendations. Calculate optimal nap schedules and bedtimes now.');
    }
  }, []);

  const handleTimeChange = (newHour: string, newMinute: string, newPeriod: string) => {
    setHour(newHour);
    setMinute(newMinute);
    setPeriod(newPeriod);
  };

  const handleCalculateBedtime = () => {
    setIsCalculating('bedtime');
    setShowNapResults(false);
    setShowSleepNowResults(false);
    
    setTimeout(() => {
      const wakeTime = `${hour}:${minute} ${period}`;
      const result = calculateNewbornBedtimes(wakeTime);
      setBedtimes(result);
      setIsCalculating('');
      setShowBedtimeResults(true);
    }, 1500);
  };

  const handleCalculateNapSchedule = () => {
    setIsCalculating('nap');
    setShowBedtimeResults(false);
    setShowSleepNowResults(false);
    
    setTimeout(() => {
      const napStartTime = `${hour}:${minute} ${period}`;
      const result = calculateNewbornNapTimes(napStartTime);
      setWakeupTimes(result);
      setIsCalculating('');
      setShowNapResults(true);
    }, 1500);
  };

  const handleSleepNow = () => {
    setIsCalculating('sleepnow');
    setShowBedtimeResults(false);
    setShowNapResults(false);
    
    setTimeout(() => {
      const {times, currentTime: liveTime} = calculateNewbornSleepNow();
      setSleepNowTimes(times);
      setCurrentTime(liveTime);
      setIsCalculating('');
      setShowSleepNowResults(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            AI Sleep Calculator for 6 Month Old Babies
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            FREE personalized sleep calculator for 6-month babies. Master sleep training with AI-powered recommendations optimized for developing sleep patterns and solid food introduction.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>👶 6 Month Milestone</span>
            <span>🧠 AI-Powered</span>
            <span>🥄 Solid Foods Support</span>
            <span>📊 FREE Assessment</span>
          </div>
        </div>

        {/* 6-Month Sleep Calculator */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                <Baby className="text-green-500" size={28} />
                6-Month Sleep Calculator
              </CardTitle>
              <p className="text-gray-600">Optimized for sleep training readiness (70-80 minute cycles)</p>
              <div className="mt-3 flex justify-center gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">6 Months Old</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Sleep Training Ready</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <NewbornCalculator
                hour={hour}
                minute={minute}
                period={period}
                onTimeChange={handleTimeChange}
                onCalculateBedtime={handleCalculateBedtime}
                onCalculateNapSchedule={handleCalculateNapSchedule}
                onSleepNow={handleSleepNow}
                isCalculating={isCalculating}
                showBedtimeResults={showBedtimeResults}
                showNapResults={showNapResults}
                showSleepNowResults={showSleepNowResults}
              />
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        {(showBedtimeResults || showNapResults || showSleepNowResults) && (
          <div className="mb-12">
            {showBedtimeResults && (
              <NewbornSleepResults
                times={bedtimes}
                type="bedtime"
                babyAgeWeeks={24} // 6 months = 24 weeks
              />
            )}
            {showNapResults && (
              <NewbornSleepResults
                times={wakeupTimes}
                type="napSchedule"
                babyAgeWeeks={24}
              />
            )}
            {showSleepNowResults && (
              <NewbornSleepResults
                times={sleepNowTimes}
                type="sleepNow"
                babyAgeWeeks={24}
              />
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Clock className="mx-auto text-blue-500 mb-2" size={32} />
              <CardTitle className="text-lg">Total Sleep</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">12-15 hours</div>
              <p className="text-sm text-gray-600">Including 2-3 naps daily</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Moon className="mx-auto text-indigo-500 mb-2" size={32} />
              <CardTitle className="text-lg">Night Sleep</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-2">10-12 hours</div>
              <p className="text-sm text-gray-600">Many can sleep through night</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Sun className="mx-auto text-orange-500 mb-2" size={32} />
              <CardTitle className="text-lg">Daytime Naps</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">2-3 naps</div>
              <p className="text-sm text-gray-600">Moving toward 2-nap schedule</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Baby className="text-green-500" />
                6-Month Sleep Milestones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">What Makes 6 Months Special</h3>
                <p className="text-gray-600 mb-4">
                  At 6 months, babies reach important developmental milestones that significantly impact sleep. Their circadian rhythms are more mature, and many are ready for more independent sleep.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-2">Sleep Developments</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Can sleep 6-8 hour stretches</li>
                      <li>• More predictable sleep patterns</li>
                      <li>• Beginning to drop 3rd nap</li>
                      <li>• Better sleep cycle connection</li>
                      <li>• Mature melatonin production</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Physical Milestones</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sitting with support</li>
                      <li>• Rolling both ways</li>
                      <li>• Starting solid foods</li>
                      <li>• Better head and neck control</li>
                      <li>• Increased alertness and curiosity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="text-purple-500" />
                Sample 6-Month Sleep Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-4">Option 1: Three Nap Schedule</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">6:30 AM</span>
                      <span className="text-green-600 text-sm">Wake & Feed</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">8:30-10:00 AM</span>
                      <span className="text-blue-600 text-sm">Morning Nap</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">10:00 AM</span>
                      <span className="text-green-600 text-sm">Feed & Play</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">12:30-2:30 PM</span>
                      <span className="text-blue-600 text-sm">Afternoon Nap</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">2:30 PM</span>
                      <span className="text-green-600 text-sm">Feed & Play</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">4:30-5:15 PM</span>
                      <span className="text-blue-600 text-sm">Catnap</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">7:30 PM</span>
                      <span className="text-indigo-600 text-sm">Bedtime</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-4">Option 2: Two Nap Schedule</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">6:30 AM</span>
                      <span className="text-green-600 text-sm">Wake & Feed</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">9:00-10:30 AM</span>
                      <span className="text-blue-600 text-sm">Morning Nap</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">10:30 AM</span>
                      <span className="text-green-600 text-sm">Feed & Play</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">1:00-3:00 PM</span>
                      <span className="text-blue-600 text-sm">Afternoon Nap</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">3:00 PM</span>
                      <span className="text-green-600 text-sm">Feed & Play</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">7:00 PM</span>
                      <span className="text-indigo-600 text-sm">Bedtime</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 italic text-center">
                Choose the schedule that works best for your baby's natural patterns. Many babies transition from 3 to 2 naps around this age.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Utensils className="text-orange-500" />
                Solid Foods and Sleep
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 mb-6">
                <h4 className="font-semibold text-orange-800 mb-3">How Solid Foods Impact Sleep</h4>
                <p className="text-gray-600">
                  Starting solid foods around 6 months can affect sleep patterns. While some parents hope solids will help baby sleep longer, the relationship is complex and varies by child.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Potential Benefits</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• May increase satiety</li>
                      <li>• Can provide more calories during day</li>
                      <li>• Helps establish meal routines</li>
                      <li>• May reduce night hunger</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Feeding Timeline</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Start with single grain cereals</li>
                      <li>• Introduce vegetables and fruits</li>
                      <li>• Offer solids before milk feeds</li>
                      <li>• Gradually increase variety</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-2">Watch for Issues</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Digestive upset from new foods</li>
                      <li>• Temporary sleep disruptions</li>
                      <li>• Changes in bowel movements</li>
                      <li>• Allergic reactions</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">Sleep-Friendly Feeding</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Avoid new foods close to bedtime</li>
                      <li>• Maintain consistent meal times</li>
                      <li>• Keep milk as primary nutrition</li>
                      <li>• Watch for food sensitivities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Sleep Training at 6 Months</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-6">
                <h4 className="font-semibold text-blue-800 mb-3">Why 6 Months is Ideal for Sleep Training</h4>
                <p className="text-gray-600">
                  Most sleep experts consider 6 months an optimal time to begin formal sleep training. Babies have developed more predictable patterns and can physically sleep for longer stretches.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Baby is Ready When:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Weighs at least 15 pounds</li>
                      <li>• Can sleep 6-hour stretches</li>
                      <li>• Has predictable wake windows</li>
                      <li>• Shows sleep readiness cues</li>
                      <li>• Generally healthy and thriving</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">Popular Methods</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ferber Method (graduated extinction)</li>
                      <li>• Chair Method (camping out)</li>
                      <li>• Pick-Up-Put-Down</li>
                      <li>• Extinction (cry it out)</li>
                      <li>• Gentle fading methods</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">Before You Start</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Choose a consistent approach</li>
                      <li>• Ensure all caregivers are on board</li>
                      <li>• Pick a good time (no travel/illness)</li>
                      <li>• Have realistic expectations</li>
                      <li>• Commit to consistency</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h5 className="font-semibold text-pink-800 mb-2">Timeline Expectations</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Initial improvement: 3-7 days</li>
                      <li>• Full habit formation: 2-4 weeks</li>
                      <li>• Some regression is normal</li>
                      <li>• Nap training may take longer</li>
                      <li>• Every baby is different</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Should my 6-month-old be sleeping through the night?</h3>
              <p className="text-gray-600">
                Many 6-month-olds can sleep 6-8 hour stretches, but not all do. Each baby develops at their own pace. Consistent routines and healthy sleep habits help.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">When should I transition from 3 naps to 2?</h3>
              <p className="text-gray-600">
                Most babies transition between 6-9 months. Signs include fighting the third nap, very short naps, or bedtime becoming later than desired.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Will solid foods help my baby sleep longer?</h3>
              <p className="text-gray-600">
                While some babies may sleep slightly longer after starting solids, it's not guaranteed. Sleep improvements often relate more to developmental readiness than food intake.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Is 6 months too early for sleep training?</h3>
              <p className="text-gray-600">
                No, most pediatric sleep experts consider 4-6 months an appropriate age to begin gentle sleep training methods, provided the baby is healthy and developing normally.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}