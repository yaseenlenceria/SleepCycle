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
  type: 'bedtime' | 'wakeup' | 'sleepNow';
  selectedTime?: string;
  selectedSleepDuration?: number;
  isLoading?: boolean;
  userAge?: number;
  userSex?: 'male' | 'female';
}

export function SimpleSleepResults({ 
  times, 
  type, 
  selectedTime,
  selectedSleepDuration,
  isLoading = false,
  userAge = 30,
  userSex = 'male'
}: SimpleSleepResultsProps) {
  const [showHealthTips, setShowHealthTips] = useState(false);

  const [sleepAssessment, setSleepAssessment] = useState<SleepAssessment | null>(null);

  useEffect(() => {
    if (times.length > 0 && (selectedTime || type === 'sleepNow')) {
      generateHealthAssessment();
    }
  }, [times, selectedTime, selectedSleepDuration, type, userAge, userSex]);

  const generateHealthAssessment = async () => {
    if (!times[0]) return;
    if (type !== 'sleepNow' && !selectedTime) return;

    try {
      let bedtime: string;
      let wakeTime: string;
      let sleepHours: number;

      if (type === 'sleepNow') {
        // For sleep now calculations
        const now = new Date();
        bedtime = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
        
        if (selectedSleepDuration) {
          // Use exact selected duration
          sleepHours = selectedSleepDuration;
          // Find the time that matches closest to selected duration
          const targetTime = times.find(t => Math.abs(t.cycles * 1.5 - selectedSleepDuration) <= 0.5) || times[0];
          wakeTime = targetTime.time;
        } else {
          // Use first recommended time
          const firstTime = times[0];
          sleepHours = firstTime.cycles * 1.5;
          wakeTime = firstTime.time;
        }
      } else if (type === 'bedtime') {
        bedtime = times[0].time;
        wakeTime = selectedTime!;
        sleepHours = calculateSleepHours(bedtime, wakeTime);
      } else {
        bedtime = selectedTime!;
        wakeTime = times[0].time;
        sleepHours = calculateSleepHours(bedtime, wakeTime);
      }

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
        healthScore: Math.round(Math.min(100, (sleepHours / 8) * 100)),
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
            {type === 'bedtime' ? 'Your Optimal Bedtimes' : 
             type === 'sleepNow' ? `Wake Up Times (${selectedSleepDuration ? selectedSleepDuration + 'h sleep' : 'Sleep Now'})` : 
             'You Should Wake Up At:'}
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
                        {index === 0 ? 'Best' : 'Good'}
                      </Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>






      {/* Health Assessment */}
      {sleepAssessment && (
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h4 className="text-base sm:text-lg font-bold text-gray-800">
                AI Health Assessment
              </h4>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  sleepAssessment.quality === 'excellent' ? 'bg-green-500' :
                  sleepAssessment.quality === 'good' ? 'bg-blue-500' :
                  sleepAssessment.quality === 'fair' ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="font-semibold text-gray-700 capitalize text-sm sm:text-base">
                  {sleepAssessment.quality}
                </span>
              </div>
            </div>

            {/* Quick Summary */}
            <div className="bg-white p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 border border-blue-100">
              <p className="text-sm sm:text-base text-gray-700 font-medium mb-2">
                Sleep Duration: {sleepAssessment.sleepDuration.toFixed(1)} hours
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                {sleepAssessment.quality === 'excellent' ? 'Perfect sleep duration! Your body will get optimal rest and recovery.' :
                 sleepAssessment.quality === 'good' ? 'Good sleep duration. You should feel refreshed and alert.' :
                 sleepAssessment.quality === 'fair' ? 'Adequate sleep, but consider adjusting for better energy.' :
                 'This may leave you feeling tired. Consider adjusting your schedule.'}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3">
              <Button
                onClick={() => setShowHealthTips(!showHealthTips)}
                variant="outline"
                className="flex-1 bg-white hover:bg-blue-50 border-blue-200 text-blue-700 text-xs sm:text-sm"
              >
                {showHealthTips ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                <span className="ml-1">{showHealthTips ? 'Hide' : 'Show'} Detailed Tips</span>
              </Button>
              
              <Button
                variant="outline"
                className="flex-1 bg-white hover:bg-green-50 border-green-200 text-green-700 text-xs sm:text-sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Zap size={16} />
                <span className="ml-1">Try Different Time</span>
              </Button>
            </div>

            {/* Brief Health Stats */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
              <div className="text-center p-2 sm:p-3 bg-white rounded-lg border border-blue-100">
                <div className="text-xs sm:text-sm text-gray-600">Quality Score</div>
                <div className="text-base sm:text-lg font-bold text-blue-600 capitalize">
                  {sleepAssessment.quality}
                </div>
              </div>
              <div className="text-center p-2 sm:p-3 bg-white rounded-lg border border-green-100">
                <div className="text-xs sm:text-sm text-gray-600">Health Score</div>
                <div className="text-base sm:text-lg font-bold text-green-600">
                  {sleepAssessment.healthScore}%
                </div>
              </div>
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