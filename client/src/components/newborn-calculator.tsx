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
  isCalculating?: string;
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
  isCalculating = ''
}: NewbornCalculatorProps) {
  
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const minutes = ['00', '15', '30', '45'];
  const periods = ['AM', 'PM'];

  return (
    <div className="w-full max-w-sm mx-auto px-4 sm:max-w-lg lg:max-w-2xl sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
      {/* Perfect Mobile Time Selector */}
      <div className="bg-white rounded-xl p-4 shadow-inner border-2 border-pink-200 mb-4 sm:mb-6">
        <div className="flex justify-center items-center gap-3 sm:gap-4">
          {/* Hour Selector */}
          <div className="flex flex-col items-center">
            <label className="text-xs text-gray-500 mb-1">Hour</label>
            <select
              value={hour}
              onChange={(e) => onTimeChange(e.target.value, minute, period)}
              className="w-16 h-12 sm:w-18 sm:h-14 text-lg sm:text-xl font-bold text-center border-2 border-pink-300 rounded-lg focus:border-pink-500 focus:outline-none bg-white cursor-pointer hover:border-pink-400 transition-all shadow-sm"
              data-testid="hour-selector"
            >
              {hours.map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>

          <div className="text-2xl sm:text-3xl font-bold text-pink-600 mt-4">:</div>

          {/* Minute Selector */}
          <div className="flex flex-col items-center">
            <label className="text-xs text-gray-500 mb-1">Min</label>
            <select
              value={minute}
              onChange={(e) => onTimeChange(hour, e.target.value, period)}
              className="w-16 h-12 sm:w-18 sm:h-14 text-lg sm:text-xl font-bold text-center border-2 border-pink-300 rounded-lg focus:border-pink-500 focus:outline-none bg-white cursor-pointer hover:border-pink-400 transition-all shadow-sm"
              data-testid="minute-selector"
            >
              {minutes.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          {/* AM/PM Toggle */}
          <div className="flex flex-col items-center">
            <label className="text-xs text-gray-500 mb-1">Period</label>
            <div className="bg-pink-100 rounded-lg p-1 shadow-sm">
              <button
                onClick={() => onTimeChange(hour, minute, 'AM')}
                className={`block w-12 py-1.5 mb-1 rounded-md text-sm font-bold transition-all ${
                  period === 'AM' 
                    ? 'bg-pink-500 text-white shadow-md transform scale-105' 
                    : 'text-pink-600 hover:bg-pink-200'
                }`}
                data-testid="am-button"
              >
                AM
              </button>
              <button
                onClick={() => onTimeChange(hour, minute, 'PM')}
                className={`block w-12 py-1.5 rounded-md text-sm font-bold transition-all ${
                  period === 'PM' 
                    ? 'bg-pink-500 text-white shadow-md transform scale-105' 
                    : 'text-pink-600 hover:bg-pink-200'
                }`}
                data-testid="pm-button"
              >
                PM
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Calculator Cards - Mobile Optimized */}
      <div className="space-y-4 sm:space-y-5">
        
        {/* Baby Morning Wake Time - Mobile Optimized */}
        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 shadow-lg hover:shadow-xl transition-all">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-5">
              <div className="flex items-center mb-2 sm:mb-0">
                <Clock className="text-orange-500 mr-2" size={18} />
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                  Baby wakes up at
                </h3>
              </div>
              <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs self-start sm:self-auto">AI Baby Sleep</div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-600 mb-4 text-center">
              When should baby go to bed for this wake time?
            </p>
            
            {isCalculating === 'bedtime' ? (
              <EnhancedLoadingAnimation />
            ) : (
              <Button 
                onClick={onCalculateBedtime}
                className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-400 text-white py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-lg transition-colors shadow-md hover:shadow-lg touch-manipulation"
                disabled={isCalculating !== ''}
                data-testid="button-calculate-bedtime"
              >
                Find Baby's Bedtime
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Baby Bedtime/Nap Start - Mobile Optimized */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg hover:shadow-xl transition-all">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-5">
              <div className="flex items-center mb-2 sm:mb-0">
                <Moon className="text-blue-500 mr-2" size={18} />
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                  Baby goes to bed at
                </h3>
              </div>
              <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs self-start sm:self-auto">Nap Schedule</div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-600 mb-4 text-center">
              Create a nap schedule from this bedtime
            </p>
            
            {isCalculating === 'nap' ? (
              <EnhancedLoadingAnimation />
            ) : (
              <Button 
                onClick={onCalculateNapSchedule}
                className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-400 text-white py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-lg transition-colors shadow-md hover:shadow-lg touch-manipulation"
                disabled={isCalculating !== ''}
                data-testid="button-calculate-nap-schedule"
              >
                Create Nap Schedule
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Baby Sleep Now - Mobile Optimized */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg hover:shadow-xl transition-all">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-5">
              <div className="flex items-center mb-2 sm:mb-0">
                <Zap className="text-green-500 mr-2" size={18} />
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                  Baby Sleeps Now
                </h3>
              </div>
              <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs self-start sm:self-auto">Sleep Now</div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-600 mb-4 text-center">
              When will baby wake up if sleeping now?
            </p>
            
            {isCalculating === 'sleepnow' ? (
              <EnhancedLoadingAnimation />
            ) : (
              <Button 
                onClick={onSleepNow}
                className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-400 text-white py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-lg transition-colors shadow-md hover:shadow-lg touch-manipulation"
                disabled={isCalculating !== ''}
                data-testid="button-baby-sleep-now"
              >
                Baby Sleep Times
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
      {/* Results Section - Outside of Grid */}
      <div className="space-y-6">
        {showBedtimeResults && bedtimeResultsComponent && (
          <div className="w-full">
            {bedtimeResultsComponent}
          </div>
        )}
        
        {showNapResults && napResultsComponent && (
          <div className="w-full">
            {napResultsComponent}
          </div>
        )}
        
        {showSleepNowResults && sleepNowResultsComponent && (
          <div className="w-full">
            {sleepNowResultsComponent}
          </div>
        )}
      </div>
    </div>
  );
}