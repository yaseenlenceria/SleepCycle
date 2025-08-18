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
      <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 shadow-lg overflow-hidden">
        <CardContent className="p-4 md:p-6 lg:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6 md:mb-8">
            {type === 'bedtime' ? 'Recommended Bedtimes for Your Baby' : 
             type === 'sleepNow' ? 'If Baby Sleeps Now - Wake Up Times' : 
             'Baby Nap Schedule'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
            {times.map((time, index) => {
              const isRecommended = type === 'bedtime' ? (index === 2 || index === 3) : (index === 1 || index === 2);
              
              return (
                <div
                  key={index}
                  className={`p-4 md:p-5 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                    isRecommended
                      ? 'bg-white border-pink-300 shadow-lg ring-2 ring-pink-100'
                      : 'bg-white/90 border-gray-200 hover:border-pink-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-center space-y-3">
                    {/* Time Display */}
                    <div className="text-2xl md:text-3xl font-bold text-gray-800 leading-none">
                      {time.time}
                    </div>
                    
                    {/* Duration with better mobile text */}
                    <div className="text-sm md:text-base text-gray-600 font-medium px-2">
                      {time.duration}
                    </div>
                    
                    {/* Icon and Badge Row */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2">
                        {time.type === 'nap' && <Baby size={18} className="text-pink-500" />}
                        {time.type === 'night-sleep' && <Moon size={18} className="text-indigo-500" />}
                        {time.type === 'feeding-break' && <Clock size={18} className="text-orange-500" />}
                        <span className="text-xs text-gray-500 font-medium">
                          {time.type === 'nap' ? 'Nap' : 
                           time.type === 'night-sleep' ? 'Night Sleep' : 'Awake/Feed'}
                        </span>
                      </div>
                      
                      <Badge 
                        variant="outline" 
                        className={`text-xs px-3 py-1 ${
                          time.quality === 'deep' ? 'border-green-300 text-green-700 bg-green-50' :
                          time.quality === 'rem' ? 'border-blue-300 text-blue-700 bg-blue-50' :
                          'border-yellow-300 text-yellow-700 bg-yellow-50'
                        }`}
                      >
                        {time.quality === 'deep' ? 'Deep Sleep' : 
                         time.quality === 'rem' ? 'REM Sleep' : 
                         time.type === 'feeding-break' ? 'Awake/Feed' : 'Light Sleep'}
                      </Badge>
                    </div>
                    
                    {/* Recommendation Badge */}
                    {isRecommended && (
                      <div className="bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full inline-block">
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
        <CardContent className="p-4 md:p-6">
          <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2">
            <Baby className="text-pink-500" size={24} />
            Sleep Guidance for {babyAgeWeeks}-Week-Old Baby
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{rec}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safe Sleep Reminder */}
      <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 shadow-lg">
        <CardContent className="p-4 md:p-5">
          <h4 className="text-base md:text-lg font-bold text-red-800 mb-3 md:mb-4 flex items-center gap-2">
            🛡️ Safe Sleep Reminder
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            <div className="flex items-start gap-2 p-2 bg-white/50 rounded">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-xs md:text-sm text-red-700">Always place baby on back to sleep</span>
            </div>
            <div className="flex items-start gap-2 p-2 bg-white/50 rounded">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-xs md:text-sm text-red-700">Use firm sleep surface</span>
            </div>
            <div className="flex items-start gap-2 p-2 bg-white/50 rounded">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-xs md:text-sm text-red-700">Keep crib bare (no loose bedding)</span>
            </div>
            <div className="flex items-start gap-2 p-2 bg-white/50 rounded">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-xs md:text-sm text-red-700">Room sharing recommended (not bed sharing)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}