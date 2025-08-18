import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Clock, Moon, ArrowUp, Zap } from 'lucide-react';
import { NewbornCalculator } from '@/components/newborn-calculator';
import { NewbornSleepResults } from '@/components/newborn-sleep-results';
import { calculateNewbornBedtimes, calculateNewbornNapTimes, calculateNewbornSleepNow } from '@/lib/newborn-sleep-calculations';

export default function SleepCycles7MonthOldPage() {
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
    document.title = "AI Sleep Calculator for 7 Month Old Babies | 2-Nap Schedule Tool - Sleepcycle.io";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI Sleep Calculator with FREE Health Assessment for 7-month babies. Master 2-nap schedules with personalized recommendations for mobility milestones. Calculate optimal sleep times now.');
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
            AI Sleep Calculator for 7 Month Old Babies
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            FREE personalized sleep calculator for 7-month babies. Master 2-nap schedules with AI-powered recommendations designed for mobility milestones and developmental sleep patterns.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🚼 7 Month Development</span>
            <span>🧠 AI-Powered</span>
            <span>🧗 Mobility Support</span>
            <span>📊 FREE Assessment</span>
          </div>
        </div>

        {/* 7-Month Sleep Calculator */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                <Baby className="text-orange-500" size={28} />
                7-Month Sleep Calculator
              </CardTitle>
              <p className="text-gray-600">Perfect for 2-nap schedules & mobility milestones (75-85 minute cycles)</p>
              <div className="mt-3 flex justify-center gap-2">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">7 Months Old</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">2-Nap Schedule</span>
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
                babyAgeWeeks={28} // 7 months = 28 weeks
              />
            )}
            {showNapResults && (
              <NewbornSleepResults
                times={wakeupTimes}
                type="napSchedule"
                babyAgeWeeks={28}
              />
            )}
            {showSleepNowResults && (
              <NewbornSleepResults
                times={sleepNowTimes}
                type="sleepNow"
                babyAgeWeeks={28}
              />
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Clock className="mx-auto text-green-500 mb-2" size={32} />
              <CardTitle className="text-lg">Total Sleep</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">12-14 hours</div>
              <p className="text-sm text-gray-600">More consolidated sleep</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Moon className="mx-auto text-blue-500 mb-2" size={32} />
              <CardTitle className="text-lg">Night Sleep</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">11-12 hours</div>
              <p className="text-sm text-gray-600">Can sleep through the night</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <ArrowUp className="mx-auto text-purple-500 mb-2" size={32} />
              <CardTitle className="text-lg">Daytime Naps</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">2 naps</div>
              <p className="text-sm text-gray-600">Morning and afternoon</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Baby className="text-orange-500" />
                7-Month Developmental Changes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">How Development Affects Sleep</h3>
                <p className="text-gray-600 mb-4">
                  Seven-month-old babies are experiencing rapid physical and cognitive development. Increased mobility, curiosity, and new skills can temporarily disrupt sleep patterns.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 mb-2">Physical Milestones</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sitting without support</li>
                      <li>• Beginning to crawl or scoot</li>
                      <li>• Pulling to stand (some babies)</li>
                      <li>• Better hand-eye coordination</li>
                      <li>• Increased strength and stamina</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Cognitive Development</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Object permanence developing</li>
                      <li>• Increased curiosity and exploration</li>
                      <li>• Better memory and recognition</li>
                      <li>• More defined personality traits</li>
                      <li>• Understanding cause and effect</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Sleep Impact</h4>
                  <p className="text-gray-600">
                    These developments can cause temporary sleep disruptions as babies practice new skills even during sleep times. This is normal and usually resolves within 1-2 weeks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Zap className="text-green-500" />
                Optimal 2-Nap Schedule for 7-Month-Olds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 mb-6">
                <h4 className="font-semibold text-green-800 mb-3">Why 2 Naps Work Best</h4>
                <p className="text-gray-600">
                  Most 7-month-olds have transitioned to a predictable 2-nap schedule. This provides adequate daytime rest while ensuring they're tired enough for bedtime.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-4">Sample Schedule</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">6:30-7:00 AM</span>
                      <span className="text-green-600 text-sm">Wake Up</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">9:30-11:00 AM</span>
                      <span className="text-blue-600 text-sm">Morning Nap (1-1.5 hrs)</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">11:00 AM-2:00 PM</span>
                      <span className="text-yellow-600 text-sm">Awake Time</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">2:00-3:30 PM</span>
                      <span className="text-blue-600 text-sm">Afternoon Nap (1-2 hrs)</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">3:30-7:30 PM</span>
                      <span className="text-yellow-600 text-sm">Awake Time</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium text-sm">7:30 PM</span>
                      <span className="text-indigo-600 text-sm">Bedtime</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">Wake Windows</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>First:</strong> 2.5-3 hours</li>
                      <li>• <strong>Second:</strong> 3-3.5 hours</li>
                      <li>• <strong>Third:</strong> 4-4.5 hours</li>
                      <li>• Gradually increase over time</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h5 className="font-semibold text-pink-800 mb-2">Nap Length Goals</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Morning:</strong> 1-1.5 hours</li>
                      <li>• <strong>Afternoon:</strong> 1-2 hours</li>
                      <li>• <strong>Total:</strong> 2.5-3.5 hours</li>
                      <li>• Quality over exact duration</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <h5 className="font-semibold text-teal-800 mb-2">Flexibility Tips</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Adjust times by ±30 minutes</li>
                      <li>• Watch baby's cues over clock</li>
                      <li>• Cap afternoon nap by 4 PM</li>
                      <li>• Maintain consistent bedtime</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Common 7-Month Sleep Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Standing in Crib</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">The Problem:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Baby stands but can't get down</li>
                        <li>• Cries for help during night</li>
                        <li>• Prefers standing to lying down</li>
                        <li>• Disrupts sleep for whole family</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Solutions:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Practice getting down during day</li>
                        <li>• Lower crib mattress for safety</li>
                        <li>• Give time to figure it out</li>
                        <li>• Stay consistent with sleep training</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Separation Anxiety</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Why It Happens:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Object permanence developing</li>
                        <li>• Awareness of being alone</li>
                        <li>• Preference for primary caregiver</li>
                        <li>• Normal cognitive milestone</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">How to Help:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Consistent bedtime routine</li>
                        <li>• Practice separations during day</li>
                        <li>• Comfort without creating dependencies</li>
                        <li>• Maintain sleep training consistency</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Short Naps</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Common Causes:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Overtiredness</li>
                        <li>• Undertiredness</li>
                        <li>• Environmental disruptions</li>
                        <li>• Developmental leaps</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Solutions to Try:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Adjust wake windows</li>
                        <li>• Improve sleep environment</li>
                        <li>• Use crib hour approach</li>
                        <li>• Give time for patterns to emerge</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Sleep Training Progress at 7 Months</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-6">
                <h4 className="font-semibold text-blue-800 mb-3">Continuing Sleep Training Success</h4>
                <p className="text-gray-600">
                  If you started sleep training at 6 months, your 7-month-old should be showing significant progress. If you're just starting, this is still an excellent age for sleep training.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Signs of Progress</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Falling asleep independently</li>
                      <li>• Longer stretches of sleep</li>
                      <li>• Less crying at bedtime</li>
                      <li>• Self-soothing when briefly awake</li>
                      <li>• More predictable schedule</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">If Progress Stalls</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Review and adjust schedule</li>
                      <li>• Check sleep environment</li>
                      <li>• Consider developmental factors</li>
                      <li>• Stay consistent with method</li>
                      <li>• Consult pediatric sleep specialist</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">Maintaining Success</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Stick to consistent routine</li>
                      <li>• Handle setbacks calmly</li>
                      <li>• Adjust for growth spurts</li>
                      <li>• Don't abandon progress for convenience</li>
                      <li>• Trust the process</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h5 className="font-semibold text-pink-800 mb-2">Nap Training Focus</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Often harder than night training</li>
                      <li>• May take 2-4 weeks longer</li>
                      <li>• Use same method as nights</li>
                      <li>• Consider "crib hour" for short naps</li>
                      <li>• Be patient with the process</li>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">My 7-month-old keeps standing in the crib. What should I do?</h3>
              <p className="text-gray-600">
                This is very common when babies learn to pull up. Practice helping them get down during the day, but at night, give them time to figure it out independently before intervening.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long should naps be for a 7-month-old?</h3>
              <p className="text-gray-600">
                Aim for 1-1.5 hours for the morning nap and 1-2 hours for the afternoon nap. Total daytime sleep should be 2.5-3.5 hours.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Is crawling affecting my baby's sleep?</h3>
              <p className="text-gray-600">
                Yes, new mobility skills often temporarily disrupt sleep as babies practice even during sleep times. This usually resolves within 1-2 weeks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Should I adjust the schedule if naps are short?</h3>
              <p className="text-gray-600">
                Try adjusting wake windows first - both undertiredness and overtiredness can cause short naps. If naps remain short, you may need an earlier bedtime.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}