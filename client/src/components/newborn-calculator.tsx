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
      <div className="text-center mb-10">
        <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 inline-block">
          <div className="flex justify-center items-center gap-3 md:gap-4">
            <select
              value={hour}
              onChange={(e) => onTimeChange(e.target.value, minute, period)}
              className="text-3xl md:text-4xl lg:text-5xl font-bold border-2 border-pink-300 rounded-xl px-4 py-3 bg-white focus:border-pink-500 focus:outline-none min-w-[80px] text-center"
              data-testid="hour-selector"
            >
              {hours.map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
            
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600">:</span>
            
            <select
              value={minute}
              onChange={(e) => onTimeChange(hour, e.target.value, period)}
              className="text-3xl md:text-4xl lg:text-5xl font-bold border-2 border-pink-300 rounded-xl px-4 py-3 bg-white focus:border-pink-500 focus:outline-none min-w-[80px] text-center"
              data-testid="minute-selector"
            >
              {minutes.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            
            <select
              value={period}
              onChange={(e) => onTimeChange(hour, minute, e.target.value)}
              className="text-3xl md:text-4xl lg:text-5xl font-bold border-2 border-pink-300 rounded-xl px-4 py-3 bg-white focus:border-pink-500 focus:outline-none min-w-[80px] text-center"
              data-testid="period-selector"
            >
              {periods.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Calculator Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Baby Morning Wake Time */}
        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[280px]">
          <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col justify-between">
            <div className="space-y-4">
              <Clock className="mx-auto text-orange-500" size={40} />
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                  Baby wakes up at
                </h3>
                <p className="text-sm lg:text-base text-gray-600 px-2">
                  When should baby go to bed for this wake time?
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              {isCalculating ? (
                <EnhancedLoadingAnimation />
              ) : (
                <Button 
                  onClick={onCalculateBedtime}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-base lg:text-lg"
                  data-testid="button-calculate-bedtime"
                >
                  Find Baby's Bedtime
                </Button>
              )}
            </div>
            
            {showBedtimeResults && bedtimeResultsComponent && (
              <div className="mt-6">
                {bedtimeResultsComponent}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Baby Bedtime/Nap Start */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[280px]">
          <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col justify-between">
            <div className="space-y-4">
              <Moon className="mx-auto text-blue-500" size={40} />
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                  Baby goes to bed at
                </h3>
                <p className="text-sm lg:text-base text-gray-600 px-2">
                  Create a nap schedule from this bedtime
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              {isCalculating ? (
                <EnhancedLoadingAnimation />
              ) : (
                <Button 
                  onClick={onCalculateNapSchedule}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-base lg:text-lg"
                  data-testid="button-calculate-nap-schedule"
                >
                  Create Nap Schedule
                </Button>
              )}
            </div>
            
            {showNapResults && napResultsComponent && (
              <div className="mt-6">
                {napResultsComponent}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Baby Sleep Now */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[280px]">
          <CardContent className="p-6 lg:p-8 text-center h-full flex flex-col justify-between">
            <div className="space-y-4">
              <Zap className="mx-auto text-green-500" size={40} />
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                  Baby Sleeps Now
                </h3>
                <p className="text-sm lg:text-base text-gray-600 px-2">
                  When will baby wake up if sleeping now?
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              {isCalculating ? (
                <EnhancedLoadingAnimation />
              ) : (
                <Button 
                  onClick={onSleepNow}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-base lg:text-lg"
                  data-testid="button-baby-sleep-now"
                >
                  Baby Sleep Times
                </Button>
              )}
            </div>
            
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