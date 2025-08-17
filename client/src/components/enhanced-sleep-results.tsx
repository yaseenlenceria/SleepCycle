import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SleepTime } from '@/lib/sleep-calculations';
import { Clock, Moon, Star, Zap, Brain, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { LoadingAnimation } from './loading-animation';

interface EnhancedSleepResultsProps {
  times: SleepTime[];
  type: 'bedtime' | 'wakeup';
  selectedTime?: string;
  isLoading?: boolean;
}

export function EnhancedSleepResults({ 
  times, 
  type, 
  selectedTime,
  isLoading = false 
}: EnhancedSleepResultsProps) {
  const [showResults, setShowResults] = useState(false);
  const [animatedCards, setAnimatedCards] = useState<boolean[]>([]);

  useEffect(() => {
    if (times.length > 0 && !isLoading) {
      // Show results after a brief delay
      setTimeout(() => {
        setShowResults(true);
        // Animate cards one by one
        times.forEach((_, index) => {
          setTimeout(() => {
            setAnimatedCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }, index * 150);
        });
      }, 500);
    } else {
      setShowResults(false);
      setAnimatedCards([]);
    }
  }, [times, isLoading]);

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'bg-green-100 text-green-800 border-green-200';
      case 'good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'fair': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getQualityIcon = (quality: string) => {
    switch (quality) {
      case 'excellent': return <Star className="text-green-600" size={16} />;
      case 'good': return <CheckCircle className="text-blue-600" size={16} />;
      case 'fair': return <Clock className="text-yellow-600" size={16} />;
      default: return <Moon className="text-gray-600" size={16} />;
    }
  };

  const getCyclesBenefits = (cycles: number) => {
    if (cycles >= 5) return "Optimal recovery and performance";
    if (cycles >= 4) return "Good recovery with solid REM sleep";
    if (cycles >= 3) return "Adequate rest for most people";
    return "Short rest - may feel groggy";
  };

  if (isLoading) {
    return (
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <LoadingAnimation message={
          type === 'bedtime' 
            ? "Finding your perfect bedtimes..." 
            : "Calculating optimal wake-up times..."
        } />
      </div>
    );
  }

  if (!showResults || times.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Header with selected time */}
      {selectedTime && (
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-blue-50 rounded-xl px-6 py-4">
            <div className="text-blue-600">
              {type === 'bedtime' ? <Moon size={24} /> : <Clock size={24} />}
            </div>
            <div>
              <p className="text-sm text-blue-600 font-medium">
                {type === 'bedtime' ? 'I will wake up at' : 'If I sleep now, I should wake up at'}
              </p>
              <p className="text-2xl font-bold text-blue-800">{selectedTime}</p>
            </div>
          </div>
        </div>
      )}

      {/* Results Grid */}
      <div className="grid gap-4">
        {times.map((time, index) => (
          <Card
            key={index}
            className={`bg-white bg-opacity-95 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
              animatedCards[index] 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-4 opacity-0 scale-95'
            } hover:scale-105 group cursor-pointer`}
            data-testid={`sleep-result-${index}`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                {/* Time and Details */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3 text-white group-hover:scale-110 transition-transform duration-300">
                    {type === 'bedtime' ? <Bed className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-2xl font-bold text-gray-800">{time.time}</h3>
                      {getQualityIcon(time.quality)}
                    </div>
                    
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Brain size={14} />
                        <span>{time.cycles} cycles</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Heart size={14} />
                        <span>{time.duration}</span>
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-1">
                      {getCyclesBenefits(time.cycles)}
                    </p>
                  </div>
                </div>

                {/* Quality Badge and Action */}
                <div className="text-right space-y-2">
                  <Badge 
                    className={`${getQualityColor(time.quality)} capitalize font-medium px-3 py-1`}
                  >
                    {time.quality}
                  </Badge>
                  
                  {time.quality === 'excellent' && (
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      <Star size={14} className="mr-1" />
                      Recommended
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Bar for Sleep Cycles */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Sleep Cycles</span>
                  <span>{time.cycles}/6</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(time.cycles / 6) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sleep Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
          <Zap className="mr-2 text-blue-600" size={18} />
          Sleep Optimization Tips
        </h4>
        <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
          <div className="flex items-start space-x-2">
            <ArrowRight size={14} className="mt-0.5 text-blue-500" />
            <span>Keep your bedroom cool (60-67°F)</span>
          </div>
          <div className="flex items-start space-x-2">
            <ArrowRight size={14} className="mt-0.5 text-blue-500" />
            <span>Avoid screens 1 hour before bed</span>
          </div>
          <div className="flex items-start space-x-2">
            <ArrowRight size={14} className="mt-0.5 text-blue-500" />
            <span>Try meditation or deep breathing</span>
          </div>
          <div className="flex items-start space-x-2">
            <ArrowRight size={14} className="mt-0.5 text-blue-500" />
            <span>Maintain consistent sleep schedule</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for Bed icon (since it's not in lucide-react default export)
function Bed({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12V7a1 1 0 00-1-1H4a1 1 0 00-1 1v5m18 0v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7m18 0H3m6-4a3 3 0 116 0v1H9V8z"
      />
    </svg>
  );
}