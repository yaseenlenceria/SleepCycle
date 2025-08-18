import React from 'react';
import { Clock, Baby, Moon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnhancedLoadingAnimation } from './enhanced-loading-animation';
import { NewbornSleepTime } from '@/lib/newborn-sleep-calculations';
import { getNewbornSleepRecommendations } from '@/lib/newborn-sleep-calculations';

interface NewbornSleepResultsProps {
  times: NewbornSleepTime[];
  type: 'bedtime' | 'nap-schedule' | 'sleepNow';
  selectedTime?: string;
  isLoading?: boolean;
  babyAgeWeeks?: number;
}

export function NewbornSleepResults({ 
  times, 
  type, 
  selectedTime, 
  isLoading = false,
  babyAgeWeeks = 4
}: NewbornSleepResultsProps) {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <EnhancedLoadingAnimation />
        <p className="mt-4 text-gray-600">Calculating baby sleep times...</p>
      </div>
    );
  }

  if (!times.length) return null;

  const recommendations = getNewbornSleepRecommendations(babyAgeWeeks);

  return (
    <div className="space-y-4">
      {/* Sleep Times Grid */}
      <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 shadow-lg">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
            {type === 'bedtime' ? 'Recommended Bedtimes for Your Baby' : 
             type === 'sleepNow' ? 'If Baby Sleeps Now - Wake Up Times' : 
             'Baby Nap Schedule'}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {times.map((time, index) => {
              const isRecommended = type === 'bedtime' ? (index === 2 || index === 3) : (index === 1 || index === 2);
              
              return (
                <div
                  key={index}
                  className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                    isRecommended
                      ? 'bg-white border-pink-300 shadow-md'
                      : 'bg-white/70 border-gray-200 hover:border-pink-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                      {time.time}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {time.duration}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {time.type === 'nap' && <Baby size={16} className="text-pink-500" />}
                      {time.type === 'night-sleep' && <Moon size={16} className="text-indigo-500" />}
                      {time.type === 'feeding-break' && <Clock size={16} className="text-orange-500" />}
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          time.quality === 'deep' ? 'border-green-300 text-green-700' :
                          time.quality === 'rem' ? 'border-blue-300 text-blue-700' :
                          'border-yellow-300 text-yellow-700'
                        }`}
                      >
                        {time.quality === 'deep' ? 'Deep Sleep' : 
                         time.quality === 'rem' ? 'REM Sleep' : 
                         time.type === 'feeding-break' ? 'Awake/Feed' : 'Light Sleep'}
                      </Badge>
                    </div>
                    {isRecommended && (
                      <div className="text-xs text-pink-600 font-medium">
                        ⭐ Recommended
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Baby Sleep Recommendations */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Baby className="text-pink-500" size={20} />
            Sleep Guidance for {babyAgeWeeks}-Week-Old Baby
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-gray-700">{rec}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safe Sleep Reminder */}
      <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 shadow-lg">
        <CardContent className="p-4">
          <h4 className="text-base font-bold text-red-800 mb-2">🛡️ Safe Sleep Reminder</h4>
          <div className="text-xs text-red-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>✓ Always place baby on back to sleep</div>
            <div>✓ Use firm sleep surface</div>
            <div>✓ Keep crib bare (no loose bedding)</div>
            <div>✓ Room sharing recommended (not bed sharing)</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}