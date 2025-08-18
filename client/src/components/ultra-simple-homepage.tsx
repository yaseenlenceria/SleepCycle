import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon } from 'lucide-react';

interface UltraSimpleHomepageProps {
  onCalculateBedtime: () => void;
  onSleepNow: () => void;
  onTimeChange: (hour: string, minute: string, period: string) => void;
  hour: string;
  minute: string;
  period: string;
}

export function UltraSimpleHomepage({ 
  onCalculateBedtime, 
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
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardContent className="p-12">
          <div className="space-y-12">
            
            {/* Wake Up Time */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                I will wake up at…
              </h2>
              
              <div className="flex justify-center items-center space-x-3">
                {/* Hour */}
                <select 
                  value={wakeHour}
                  onChange={(e) => handleWakeTimeChange(e.target.value, wakeMinute, wakePeriod)}
                  className="w-20 h-20 text-4xl font-bold text-center border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none appearance-none bg-white cursor-pointer"
                  data-testid="wake-hour-select"
                >
                  {hours.map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>

                <div className="text-4xl font-bold text-gray-400">:</div>

                {/* Minute */}
                <select 
                  value={wakeMinute}
                  onChange={(e) => handleWakeTimeChange(wakeHour, e.target.value, wakePeriod)}
                  className="w-20 h-20 text-4xl font-bold text-center border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none appearance-none bg-white cursor-pointer"
                  data-testid="wake-minute-select"
                >
                  {minutes.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>

                {/* AM/PM */}
                <div className="bg-gray-100 rounded-xl p-2">
                  <button
                    onClick={() => handleWakeTimeChange(wakeHour, wakeMinute, 'AM')}
                    className={`px-4 py-3 rounded-lg text-xl font-bold transition-colors ${
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
                    className={`px-4 py-3 rounded-lg text-xl font-bold transition-colors ${
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
            </div>

            {/* Bed Time */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                I will go to bed at…
              </h2>
              
              <div className="flex justify-center items-center space-x-3">
                {/* Hour */}
                <select 
                  value={bedHour}
                  onChange={(e) => setBedHour(e.target.value)}
                  className="w-20 h-20 text-4xl font-bold text-center border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none appearance-none bg-white cursor-pointer"
                  data-testid="bed-hour-select"
                >
                  {hours.map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>

                <div className="text-4xl font-bold text-gray-400">:</div>

                {/* Minute */}
                <select 
                  value={bedMinute}
                  onChange={(e) => setBedMinute(e.target.value)}
                  className="w-20 h-20 text-4xl font-bold text-center border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none appearance-none bg-white cursor-pointer"
                  data-testid="bed-minute-select"
                >
                  {minutes.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>

                {/* AM/PM */}
                <div className="bg-gray-100 rounded-xl p-2">
                  <button
                    onClick={() => setBedPeriod('AM')}
                    className={`px-4 py-3 rounded-lg text-xl font-bold transition-colors ${
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
                    className={`px-4 py-3 rounded-lg text-xl font-bold transition-colors ${
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
            </div>

            {/* Sleep Now Button */}
            <div className="text-center pt-6">
              <Button
                onClick={onSleepNow}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-6 text-2xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                data-testid="button-sleep-now"
              >
                <Moon className="mr-3" size={28} />
                Sleep Now
              </Button>
            </div>
            
          </div>
        </CardContent>
      </Card>
    </div>
  );
}