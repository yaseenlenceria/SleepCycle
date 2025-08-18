import React, { useState } from 'react';
import { Clock, Baby, Moon, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EnhancedLoadingAnimation } from './enhanced-loading-animation';

interface NewbornCalculatorProps {
  hour: string;
  minute: string;
  period: string;
  onTimeChange: (hour: string, minute: string, period: string) => void;
  onCalculateBedtime: () => void;
  onCalculateNapSchedule: () => void;
  onSleepNow: () => void;
  showBedtimeResults: boolean;
  showNapResults: boolean;
  showSleepNowResults: boolean;
  bedtimeResultsComponent?: React.ReactNode;
  napResultsComponent?: React.ReactNode;
  sleepNowResultsComponent?: React.ReactNode;
  isCalculating?: boolean;
}

export function NewbornCalculator({
  hour,
  minute,
  period,
  onTimeChange,
  onCalculateBedtime,
  onCalculateNapSchedule,
  onSleepNow,
  showBedtimeResults,
  showNapResults,
  showSleepNowResults,
  bedtimeResultsComponent,
  napResultsComponent,
  sleepNowResultsComponent,
  isCalculating = false
}: NewbornCalculatorProps) {
  
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const minutes = ['00', '15', '30', '45'];
  const periods = ['AM', 'PM'];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Time Selector */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2 mb-6">
          <select
            value={hour}
            onChange={(e) => onTimeChange(e.target.value, minute, period)}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold border-2 border-pink-300 rounded-lg px-3 py-2 bg-white focus:border-pink-500 focus:outline-none"
            data-testid="hour-selector"
          >
            {hours.map(h => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
          
          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-600">:</span>
          
          <select
            value={minute}
            onChange={(e) => onTimeChange(hour, e.target.value, period)}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold border-2 border-pink-300 rounded-lg px-3 py-2 bg-white focus:border-pink-500 focus:outline-none"
            data-testid="minute-selector"
          >
            {minutes.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          
          <select
            value={period}
            onChange={(e) => onTimeChange(hour, minute, e.target.value)}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold border-2 border-pink-300 rounded-lg px-3 py-2 bg-white focus:border-pink-500 focus:outline-none"
            data-testid="period-selector"
          >
            {periods.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Calculator Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        
        {/* Baby Morning Wake Time */}
        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
            <div className="mb-4">
              <Clock className="mx-auto text-orange-500 mb-3" size={32} />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                Baby wakes up at
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                When should baby go to bed for this wake time?
              </p>
            </div>
            
            {isCalculating ? (
              <EnhancedLoadingAnimation />
            ) : (
              <Button 
                onClick={onCalculateBedtime}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
                data-testid="button-calculate-bedtime"
              >
                Find Baby's Bedtime
              </Button>
            )}
            
            {showBedtimeResults && bedtimeResultsComponent && (
              <div className="mt-6">
                {bedtimeResultsComponent}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Baby Bedtime/Nap Start */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
            <div className="mb-4">
              <Moon className="mx-auto text-blue-500 mb-3" size={32} />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                Baby goes to bed at
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Create a nap schedule from this bedtime
              </p>
            </div>
            
            {isCalculating ? (
              <EnhancedLoadingAnimation />
            ) : (
              <Button 
                onClick={onCalculateNapSchedule}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
                data-testid="button-calculate-nap-schedule"
              >
                Create Nap Schedule
              </Button>
            )}
            
            {showNapResults && napResultsComponent && (
              <div className="mt-6">
                {napResultsComponent}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Baby Sleep Now */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
            <div className="mb-4">
              <Zap className="mx-auto text-green-500 mb-3" size={32} />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                Baby Sleeps Now
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                When will baby wake up if sleeping now?
              </p>
            </div>
            
            {isCalculating ? (
              <EnhancedLoadingAnimation />
            ) : (
              <Button 
                onClick={onSleepNow}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm sm:text-base"
                data-testid="button-baby-sleep-now"
              >
                Baby Sleep Times
              </Button>
            )}
            
            {showSleepNowResults && sleepNowResultsComponent && (
              <div className="mt-6">
                {sleepNowResultsComponent}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}