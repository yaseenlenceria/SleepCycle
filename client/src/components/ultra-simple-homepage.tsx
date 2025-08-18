import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, ArrowRight, Sun, Bed } from 'lucide-react';

interface UltraSimpleHomepageProps {
  onCalculateBedtime: () => void;
  onCalculateWakeup: (bedtime?: string) => void;
  onSleepNow: (sleepDuration?: number) => void;
  onTimeChange: (hour: string, minute: string, period: string) => void;
  hour: string;
  minute: string;
  period: string;
}

export function UltraSimpleHomepage({ 
  onCalculateBedtime,
  onCalculateWakeup, 
  onSleepNow, 
  onTimeChange,
  hour,
  minute,
  period 
}: UltraSimpleHomepageProps) {
  const [wakeHour, setWakeHour] = useState(hour);
  const [wakeMinute, setWakeMinute] = useState(minute);
  const [wakePeriod, setWakePeriod] = useState(period);
  
  const [bedHour, setBedHour] = useState('11');
  const [bedMinute, setBedMinute] = useState('00');
  const [bedPeriod, setBedPeriod] = useState('PM');
  
  const [selectedSleepDuration, setSelectedSleepDuration] = useState(8);

  // Generate hours and minutes
  const hours = Array.from({ length: 12 }, (_, i) => String(i === 0 ? 12 : i).padStart(2, '0'));
  const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));

  const handleWakeTimeChange = (newHour: string, newMinute: string, newPeriod: string) => {
    setWakeHour(newHour);
    setWakeMinute(newMinute);
    setWakePeriod(newPeriod);
    onTimeChange(newHour, newMinute, newPeriod);
  };

  return (
    <div className="w-full max-w-sm mx-auto px-3 sm:max-w-md sm:px-4">
      <div className="space-y-3 sm:space-y-4">
        
        {/* Wake Up Time Card */}
        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 shadow-lg hover:shadow-xl transition-all">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center">
                <Sun className="text-orange-500 mr-2" size={20} />
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  I will wake up at
                </h2>
              </div>
              <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-bold">With AI assistant </div>
            </div>
            
            <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-4 sm:mb-5">
              {/* Hour */}
              <select 
                value={wakeHour}
                onChange={(e) => handleWakeTimeChange(e.target.value, wakeMinute, wakePeriod)}
                className="w-14 h-14 sm:w-18 sm:h-18 text-xl sm:text-3xl font-bold text-center border-3 border-orange-300 rounded-xl focus:border-orange-500 focus:outline-none appearance-none bg-white cursor-pointer hover:border-orange-400 transition-colors shadow-md"
                data-testid="wake-hour-select"
              >
                {hours.map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>

              <div className="text-2xl sm:text-3xl font-bold text-orange-600">:</div>

              {/* Minute */}
              <select 
                value={wakeMinute}
                onChange={(e) => handleWakeTimeChange(wakeHour, e.target.value, wakePeriod)}
                className="w-14 h-14 sm:w-18 sm:h-18 text-xl sm:text-3xl font-bold text-center border-3 border-orange-300 rounded-xl focus:border-orange-500 focus:outline-none appearance-none bg-white cursor-pointer hover:border-orange-400 transition-colors shadow-md"
                data-testid="wake-minute-select"
              >
                {minutes.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              {/* AM/PM */}
              <div className="bg-orange-100 rounded-xl p-1 shadow-md">
                <button
                  onClick={() => handleWakeTimeChange(wakeHour, wakeMinute, 'AM')}
                  className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base font-bold transition-colors ${
                    wakePeriod === 'AM' 
                      ? 'bg-orange-500 text-white shadow-md' 
                      : 'text-orange-600 hover:text-orange-700 hover:bg-orange-200'
                  }`}
                  data-testid="wake-am-button"
                >
                  AM
                </button>
                <button
                  onClick={() => handleWakeTimeChange(wakeHour, wakeMinute, 'PM')}
                  className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base font-bold transition-colors ${
                    wakePeriod === 'PM' 
                      ? 'bg-orange-500 text-white shadow-md' 
                      : 'text-orange-600 hover:text-orange-700 hover:bg-orange-200'
                  }`}
                  data-testid="wake-pm-button"
                >
                  PM
                </button>
              </div>
            </div>

            <Button
              onClick={onCalculateBedtime}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl transition-colors shadow-lg hover:shadow-xl"
              data-testid="button-calculate-bedtime"
            >
              Find My Bedtime
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </CardContent>
        </Card>

        {/* Bed Time Card */}
        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 shadow-lg hover:shadow-xl transition-all">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center">
                <Bed className="text-purple-500 mr-2" size={20} />
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  I will go to bed at
                </h2>
              </div>
              <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-bold">With AI assistant </div>
            </div>
            
            <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-4 sm:mb-5">
              {/* Hour */}
              <select 
                value={bedHour}
                onChange={(e) => setBedHour(e.target.value)}
                className="w-14 h-14 sm:w-18 sm:h-18 text-xl sm:text-3xl font-bold text-center border-3 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none appearance-none bg-white cursor-pointer hover:border-purple-400 transition-colors shadow-md"
                data-testid="bed-hour-select"
              >
                {hours.map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>

              <div className="text-2xl sm:text-3xl font-bold text-purple-600">:</div>

              {/* Minute */}
              <select 
                value={bedMinute}
                onChange={(e) => setBedMinute(e.target.value)}
                className="w-14 h-14 sm:w-18 sm:h-18 text-xl sm:text-3xl font-bold text-center border-3 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none appearance-none bg-white cursor-pointer hover:border-purple-400 transition-colors shadow-md"
                data-testid="bed-minute-select"
              >
                {minutes.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              {/* AM/PM */}
              <div className="bg-purple-100 rounded-xl p-1 shadow-md">
                <button
                  onClick={() => setBedPeriod('AM')}
                  className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base font-bold transition-colors ${
                    bedPeriod === 'AM' 
                      ? 'bg-purple-500 text-white shadow-md' 
                      : 'text-purple-600 hover:text-purple-700 hover:bg-purple-200'
                  }`}
                  data-testid="bed-am-button"
                >
                  AM
                </button>
                <button
                  onClick={() => setBedPeriod('PM')}
                  className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base font-bold transition-colors ${
                    bedPeriod === 'PM' 
                      ? 'bg-purple-500 text-white shadow-md' 
                      : 'text-purple-600 hover:text-purple-700 hover:bg-purple-200'
                  }`}
                  data-testid="bed-pm-button"
                >
                  PM
                </button>
              </div>
            </div>

            <Button
              onClick={() => {
                const bedtime = `${bedHour}:${bedMinute} ${bedPeriod}`;
                onCalculateWakeup(bedtime);
              }}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl transition-colors shadow-lg hover:shadow-xl"
              data-testid="button-calculate-wakeup"
            >
              Find My Wake Time
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </CardContent>
        </Card>

        {/* Sleep Now Card */}
        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center">
                <Moon className="text-green-500 mr-2" size={18} />
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                  Sleep Now
                </h2>
              </div>
              <ArrowRight className="text-green-500" size={16} />
            </div>
            
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
              Get optimal wake-up times if you sleep right now
            </p>

            {/* Quick Sleep Duration Selector */}
            <div className="mb-3 sm:mb-4">
              <p className="text-xs text-gray-500 mb-2">How many hours do you want to sleep?</p>
              <div className="grid grid-cols-4 gap-1 sm:gap-2">
                {[6, 7, 8, 9].map(hours => (
                  <button 
                    key={hours}
                    onClick={() => setSelectedSleepDuration(hours)}
                    className={`p-2 text-xs sm:text-sm rounded border transition-colors ${
                      selectedSleepDuration === hours 
                        ? 'bg-green-100 border-green-300 text-green-700 font-medium'
                        : 'bg-gray-100 hover:bg-green-100 border-gray-300 text-gray-700 hover:text-green-700'
                    }`}
                  >
                    {hours}h
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => onSleepNow(selectedSleepDuration)}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-colors"
              data-testid="button-sleep-now"
            >
              Sleep Now ({selectedSleepDuration}h)
              <ArrowRight className="ml-1 sm:ml-2" size={14} />
            </Button>
          </CardContent>
        </Card>

        {/* How Does It Work Section */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-4 sm:p-6">
            <div className="text-center mb-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                How Does It Work?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our AI uses 90-minute sleep cycles to find your optimal bedtime and wake-up times. 
                You'll get personalized health assessments based on your age and sleep patterns.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-xs sm:text-sm font-bold text-blue-600">1</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">Pick Time</p>
              </div>
              
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-xs sm:text-sm font-bold text-purple-600">2</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">AI Calculates</p>
              </div>
              
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-xs sm:text-sm font-bold text-green-600">3</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">Get Results</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}