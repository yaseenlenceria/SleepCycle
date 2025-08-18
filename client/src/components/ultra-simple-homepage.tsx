import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, ArrowRight, Sun, Bed } from 'lucide-react';

interface UltraSimpleHomepageProps {
  onCalculateBedtime: () => void;
  onCalculateWakeup: () => void;
  onSleepNow: () => void;
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
        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center">
                <Sun className="text-orange-500 mr-2" size={18} />
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                  I will wake up at
                </h2>
              </div>
              <ArrowRight className="text-blue-500" size={16} />
            </div>
            
            <div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
              {/* Hour */}
              <select 
                value={wakeHour}
                onChange={(e) => handleWakeTimeChange(e.target.value, wakeMinute, wakePeriod)}
                className="w-12 h-12 sm:w-16 sm:h-16 text-lg sm:text-2xl font-bold text-center border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none appearance-none bg-white cursor-pointer"
                data-testid="wake-hour-select"
              >
                {hours.map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>

              <div className="text-lg sm:text-2xl font-bold text-gray-400">:</div>

              {/* Minute */}
              <select 
                value={wakeMinute}
                onChange={(e) => handleWakeTimeChange(wakeHour, e.target.value, wakePeriod)}
                className="w-12 h-12 sm:w-16 sm:h-16 text-lg sm:text-2xl font-bold text-center border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none appearance-none bg-white cursor-pointer"
                data-testid="wake-minute-select"
              >
                {minutes.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              {/* AM/PM */}
              <div className="bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => handleWakeTimeChange(wakeHour, wakeMinute, 'AM')}
                  className={`px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-bold transition-colors ${
                    wakePeriod === 'AM' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  data-testid="wake-am-button"
                >
                  AM
                </button>
                <button
                  onClick={() => handleWakeTimeChange(wakeHour, wakeMinute, 'PM')}
                  className={`px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-bold transition-colors ${
                    wakePeriod === 'PM' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  data-testid="wake-pm-button"
                >
                  PM
                </button>
              </div>
            </div>

            <Button
              onClick={onCalculateBedtime}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-colors"
              data-testid="button-calculate-bedtime"
            >
              Find My Bedtime
              <ArrowRight className="ml-1 sm:ml-2" size={14} />
            </Button>
          </CardContent>
        </Card>

        {/* Bed Time Card */}
        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center">
                <Bed className="text-purple-500 mr-2" size={18} />
                <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                  I will go to bed at
                </h2>
              </div>
              <ArrowRight className="text-purple-500" size={16} />
            </div>
            
            <div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
              {/* Hour */}
              <select 
                value={bedHour}
                onChange={(e) => setBedHour(e.target.value)}
                className="w-12 h-12 sm:w-16 sm:h-16 text-lg sm:text-2xl font-bold text-center border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none appearance-none bg-white cursor-pointer"
                data-testid="bed-hour-select"
              >
                {hours.map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>

              <div className="text-lg sm:text-2xl font-bold text-gray-400">:</div>

              {/* Minute */}
              <select 
                value={bedMinute}
                onChange={(e) => setBedMinute(e.target.value)}
                className="w-12 h-12 sm:w-16 sm:h-16 text-lg sm:text-2xl font-bold text-center border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none appearance-none bg-white cursor-pointer"
                data-testid="bed-minute-select"
              >
                {minutes.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              {/* AM/PM */}
              <div className="bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setBedPeriod('AM')}
                  className={`px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-bold transition-colors ${
                    bedPeriod === 'AM' 
                      ? 'bg-purple-500 text-white' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  data-testid="bed-am-button"
                >
                  AM
                </button>
                <button
                  onClick={() => setBedPeriod('PM')}
                  className={`px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-bold transition-colors ${
                    bedPeriod === 'PM' 
                      ? 'bg-purple-500 text-white' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  data-testid="bed-pm-button"
                >
                  PM
                </button>
              </div>
            </div>

            <Button
              onClick={onCalculateWakeup}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-colors"
              data-testid="button-calculate-wakeup"
            >
              Find My Wake Time
              <ArrowRight className="ml-1 sm:ml-2" size={14} />
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

            <Button
              onClick={onSleepNow}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-colors"
              data-testid="button-sleep-now"
            >
              Sleep Now
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