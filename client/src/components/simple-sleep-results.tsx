import React, { useState, useEffect } from 'react';
import { Clock, Heart, Zap, ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EnhancedLoadingAnimation } from './enhanced-loading-animation';
import { SleepTime } from '@/lib/sleep-calculations';

import { 
  assessSleepQuality, 
  getPersonalizedHealthRecommendations, 
  calculateSleepHours
} from '@/lib/health-api';

interface SleepAssessment {
  sleepDuration: number;
  quality: string;
  bedtime: string;
  wakeTime: string;
  tips: string[];
  healthScore: number;
  recommendations: string[];
}

interface SimpleSleepResultsProps {
  times: SleepTime[];
  type: 'bedtime' | 'wakeup';
  selectedTime?: string;
  isLoading?: boolean;
  userAge?: number;
  userSex?: 'male' | 'female';
}

export function SimpleSleepResults({ 
  times, 
  type, 
  selectedTime,
  isLoading = false,
  userAge = 30,
  userSex = 'male'
}: SimpleSleepResultsProps) {
  const [showHealthTips, setShowHealthTips] = useState(false);

  const [sleepAssessment, setSleepAssessment] = useState<SleepAssessment | null>(null);

  useEffect(() => {
    if (times.length > 0 && selectedTime) {
      generateHealthAssessment();
    }
  }, [times, selectedTime, userAge, userSex]);

  const generateHealthAssessment = async () => {
    if (!times[0] || !selectedTime) return;

    try {
      let bedtime: string;
      let wakeTime: string;

      if (type === 'bedtime') {
        bedtime = times[0].time;
        wakeTime = selectedTime;
      } else {
        bedtime = selectedTime;
        wakeTime = times[0].time;
      }

      const sleepHours = calculateSleepHours(bedtime, wakeTime);
      const assessment = assessSleepQuality(sleepHours, userAge, userSex);
      const recommendations = await getPersonalizedHealthRecommendations({
        sleepDuration: sleepHours,
        age: userAge,
        sex: userSex
      });

      setSleepAssessment({
        sleepDuration: sleepHours,
        quality: assessment.quality,
        bedtime,
        wakeTime,
        tips: assessment.tips.slice(0, 6),
        healthScore: Math.round((sleepHours / 8) * 100),
        recommendations: recommendations.map(r => r.description)
      });
    } catch (error) {
      console.error('Error generating health assessment:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <EnhancedLoadingAnimation />
        <p className="mt-4 text-gray-600">Calculating your optimal sleep times...</p>
      </div>
    );
  }

  if (!times.length) return null;

  return (
    <div className="space-y-6">
      {/* Sleep Times Grid */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
            {type === 'bedtime' ? '🛏️ Your Optimal Bedtimes' : '⏰ You Should Wake Up At:'}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {times.slice(0, 6).map((time, index) => {
              // For wake-up times (Sleep Now), cycles start from 1 and go to 6
              // For bedtimes, cycles start from 6 and go down to 1
              const cycles = type === 'bedtime' ? 6 - index : index + 1;
              const isRecommended = type === 'bedtime' ? (index === 0 || index === 1) : (index === 3 || index === 4);
              
              return (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    isRecommended
                      ? 'bg-white border-green-300 shadow-lg'
                      : 'bg-white/70 border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-1">
                      {time.time}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {cycles} cycle{cycles > 1 ? 's' : ''}
                    </div>
                    <div className="text-xs text-gray-500">
                      {cycles * 1.5} hr
                    </div>
                    {isRecommended && (
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        {index === 0 ? '⭐ Best' : '👍 Good'}
                      </Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Sleep Cycle Visualization Toggle */}
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                🧠 Interactive Sleep Cycle Visualization
              </h4>
              <p className="text-sm text-gray-600">
                Watch your sleep journey unfold with animated cycles, stages, and real-time brain activity
              </p>
            </div>
            <Button
              onClick={() => setShowVisualization(!showVisualization)}
              variant="outline"
              className="flex items-center space-x-2"
            >
              {showVisualization ? <EyeOff size={16} /> : <Eye size={16} />}
              <span>{showVisualization ? 'Hide' : 'Show'} Visualization</span>
            </Button>
          </div>
        </CardContent>
      </Card>




      {/* Health Assessment */}
      {sleepAssessment && (
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-gray-800">
                Your Sleep Health Assessment
              </h4>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  sleepAssessment.quality === 'excellent' ? 'bg-green-500' :
                  sleepAssessment.quality === 'good' ? 'bg-blue-500' :
                  sleepAssessment.quality === 'fair' ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="font-semibold text-gray-700 capitalize">
                  {sleepAssessment.quality}
                </span>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-sm text-gray-600">Sleep Duration</div>
                <div className="text-xl font-bold text-blue-600">
                  {sleepAssessment.sleepDuration.toFixed(1)}h
                </div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-sm text-gray-600">Bedtime</div>
                <div className="text-lg font-semibold text-purple-600">
                  {sleepAssessment.bedtime}
                </div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-sm text-gray-600">Wake Time</div>
                <div className="text-lg font-semibold text-orange-600">
                  {sleepAssessment.wakeTime}
                </div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-sm text-gray-600">Health Score</div>
                <div className="text-xl font-bold text-green-600">
                  {sleepAssessment.healthScore}%
                </div>
              </div>
            </div>

            {/* Quick Tips Preview */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <h5 className="font-semibold text-gray-800 flex items-center">
                  <Zap className="mr-2 text-blue-600" size={18} />
                  Personalized Tips for {userSex === 'female' ? 'Women' : 'Men'} Aged {userAge}
                </h5>
                <Button
                  onClick={() => setShowHealthTips(!showHealthTips)}
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-300"
                >
                  {showHealthTips ? (
                    <>
                      Hide <ChevronUp size={16} className="ml-1" />
                    </>
                  ) : (
                    <>
                      Show Tips <ChevronDown size={16} className="ml-1" />
                    </>
                  )}
                </Button>
              </div>
              
              {!showHealthTips && (
                <p className="text-sm text-gray-600 mt-2">
                  Get {sleepAssessment.tips.length} personalized recommendations based on your sleep pattern
                </p>
              )}
            </div>

            {/* Expandable Health Tips */}
            {showHealthTips && (
              <div className="space-y-3 animate-in slide-in-from-top-5 duration-300">
                {sleepAssessment.tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                      <CheckCircle size={14} className="text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700 flex-1">{tip}</span>
                  </div>
                ))}
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center text-blue-700 mb-2">
                    <Brain size={16} className="mr-2" />
                    <span className="font-semibold">Why This Matters</span>
                  </div>
                  <p className="text-sm text-blue-600">
                    {sleepAssessment.sleepDuration >= 7 && sleepAssessment.sleepDuration <= 9
                      ? "Your sleep duration is in the optimal range! This helps with memory consolidation, immune function, and emotional regulation."
                      : sleepAssessment.sleepDuration < 7
                      ? "Consider extending your sleep time. Quality sleep boosts immune function, improves memory, and enhances mood regulation."
                      : "While you're getting plenty of sleep, ensure it's quality rest. Too much sleep can sometimes indicate underlying health issues."
                    }
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}