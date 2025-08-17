import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { TimePicker } from '@/components/time-picker';
import { SleepResults } from '@/components/sleep-results';
import { calculateBedtimes, calculateWakeUpTimes, getCurrentTime, SleepTime } from '@/lib/sleep-calculations';
import { Bed, Sun, Clock, Heart } from 'lucide-react';

export default function SleepCalculator() {
  const [activeTab, setActiveTab] = useState<'bedtime' | 'wakeup'>('bedtime');
  const [hour, setHour] = useState('6');
  const [minute, setMinute] = useState('30');
  const [period, setPeriod] = useState('AM');
  const [bedtimes, setBedtimes] = useState<SleepTime[]>([]);
  const [wakeupTimes, setWakeupTimes] = useState<SleepTime[]>([]);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [showBedtimeResults, setShowBedtimeResults] = useState(false);
  const [showWakeupResults, setShowWakeupResults] = useState(false);

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
    const selectedTime = `${hour}:${minute} ${period}`;
    const results = calculateBedtimes(selectedTime);
    setBedtimes(results);
    setShowBedtimeResults(true);
  };

  const handleCalculateWakeup = () => {
    const results = calculateWakeUpTimes();
    setWakeupTimes(results);
    setShowWakeupResults(true);
  };

  const selectedTimeString = `${hour}:${minute} ${period}`;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-sleep-blue-800 mb-2">UK Celebrants</h1>
            <h2 className="text-lg font-medium text-gray-700">Sleep Cycle Calculator</h2>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Mode Toggle */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <Button
                variant={activeTab === 'bedtime' ? 'default' : 'ghost'}
                onClick={() => {
                  setActiveTab('bedtime');
                  setShowBedtimeResults(false);
                  setShowWakeupResults(false);
                }}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'bedtime'
                    ? 'bg-sleep-blue-600 text-white hover:bg-sleep-blue-700'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                }`}
                data-testid="tab-bedtime"
              >
                <Bed className="mr-2" size={18} />
                Calculate Bedtime
              </Button>
              <Button
                variant={activeTab === 'wakeup' ? 'default' : 'ghost'}
                onClick={() => {
                  setActiveTab('wakeup');
                  setShowBedtimeResults(false);
                  setShowWakeupResults(false);
                }}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'wakeup'
                    ? 'bg-sleep-blue-600 text-white hover:bg-sleep-blue-700'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                }`}
                data-testid="tab-wakeup"
              >
                <Sun className="mr-2" size={18} />
                Calculate Wake-up Time
              </Button>
            </div>
          </div>
        </div>

        {/* Bedtime Calculator */}
        {activeTab === 'bedtime' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  What time do you want to wake up?
                </h3>
                <p className="text-gray-600">
                  Select your desired wake-up time using the time picker below
                </p>
              </div>

              <div className="flex justify-center">
                <TimePicker
                  hour={hour}
                  minute={minute}
                  period={period}
                  onTimeChange={handleTimeChange}
                />
              </div>

              <div className="text-center mt-6">
                <Button
                  onClick={handleCalculateBedtime}
                  className="bg-sleep-blue-600 hover:bg-sleep-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md"
                  data-testid="button-calculate-bedtime"
                >
                  <Clock className="mr-2" size={18} />
                  Calculate Bedtime
                </Button>
              </div>
            </div>

            {showBedtimeResults && (
              <SleepResults
                results={bedtimes}
                mode="bedtime"
                selectedTime={selectedTimeString}
              />
            )}
          </div>
        )}

        {/* Wake-up Calculator */}
        {activeTab === 'wakeup' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Going to Sleep Now?
                </h3>
                <p className="text-gray-600">
                  If you go to sleep right now, here are the optimal wake-up times
                </p>
              </div>

              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-gray-100 rounded-lg px-6 py-3">
                  <Clock className="text-gray-600 mr-2" size={20} />
                  <span className="text-lg font-semibold text-gray-800">Current time: </span>
                  <span className="text-lg font-bold text-sleep-blue-600 ml-2" data-testid="current-time">
                    {currentTime}
                  </span>
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={handleCalculateWakeup}
                  className="bg-sleep-blue-600 hover:bg-sleep-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md"
                  data-testid="button-calculate-wakeup"
                >
                  <Clock className="mr-2" size={18} />
                  Calculate Wake-up Times
                </Button>
              </div>
            </div>

            {showWakeupResults && (
              <SleepResults
                results={wakeupTimes}
                mode="wakeup"
              />
            )}
          </div>
        )}

        {/* Educational Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Understanding Sleep Cycles
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-sleep-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-sleep-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">90-Minute Cycles</h4>
              <p className="text-gray-600 text-sm">
                Each sleep cycle lasts approximately 90 minutes, consisting of light sleep, 
                deep sleep, and REM sleep stages.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-sleep-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bed className="text-sleep-purple-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">15-Minute Buffer</h4>
              <p className="text-gray-600 text-sm">
                The average person takes about 15 minutes to fall asleep, which is factored 
                into our calculations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-teal-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">5-6 Cycles Ideal</h4>
              <p className="text-gray-600 text-sm">
                Most adults need 5-6 complete sleep cycles (7.5-9 hours) for optimal rest and recovery.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-600 text-sm">© 2024 UK Celebrants. Sleep well, wake refreshed.</p>
        </div>
      </footer>
    </div>
  );
}
