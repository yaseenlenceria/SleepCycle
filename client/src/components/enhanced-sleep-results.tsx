import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SleepTime } from '@/lib/sleep-calculations';
import { 
  assessSleepQuality, 
  getPersonalizedHealthRecommendations, 
  calculateSleepHours,
  SleepAssessment,
  HealthRecommendation 
} from '@/lib/health-api';
import { Clock, Moon, Star, Zap, Brain, Heart, CheckCircle, ArrowRight, AlertTriangle, TrendingUp, Shield, Info } from 'lucide-react';
import { EnhancedLoadingAnimation } from './enhanced-loading-animation';

interface EnhancedSleepResultsProps {
  times: SleepTime[];
  type: 'bedtime' | 'wakeup';
  selectedTime?: string;
  isLoading?: boolean;
  userAge?: number;
  userSex?: 'male' | 'female';
}

export function EnhancedSleepResults({ 
  times, 
  type, 
  selectedTime,
  isLoading = false,
  userAge = 30,
  userSex = 'male'
}: EnhancedSleepResultsProps) {
  const [showResults, setShowResults] = useState(false);
  const [animatedCards, setAnimatedCards] = useState<boolean[]>([]);
  const [sleepAssessment, setSleepAssessment] = useState<SleepAssessment | null>(null);
  const [healthRecommendations, setHealthRecommendations] = useState<HealthRecommendation[]>([]);
  const [showHealthInsights, setShowHealthInsights] = useState(false);

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
        
        // Generate health assessment for the optimal sleep option (first result)
        if (times[0] && selectedTime) {
          generateHealthAssessment();
        }
      }, 500);
    } else {
      setShowResults(false);
      setAnimatedCards([]);
      setSleepAssessment(null);
      setHealthRecommendations([]);
    }
  }, [times, isLoading]);

  const generateHealthAssessment = async () => {
    if (!times[0] || !selectedTime) return;

    try {
      // FIXED: Calculate sleep hours correctly based on calculator type
      let bedtime: string;
      let wakeTime: string;
      
      if (type === 'bedtime') {
        // User selected wake-up time, we calculated bedtimes
        bedtime = times[0].time;
        wakeTime = selectedTime;
      } else {
        // User is sleeping now, we calculated wake-up times
        bedtime = selectedTime; // This should now be the actual current time
        wakeTime = times[0].time;
      }

      // Calculate actual sleep duration
      const sleepHours = calculateSleepHours(bedtime, wakeTime);

      // Generate accurate assessment
      const assessment = assessSleepQuality(sleepHours, userAge, userSex, bedtime, wakeTime);
      setSleepAssessment(assessment);

      // Fetch personalized health recommendations
      const recommendations = await getPersonalizedHealthRecommendations({
        age: userAge,
        sex: userSex
      });
      setHealthRecommendations(recommendations);
    } catch (error) {
      console.error('Error generating health assessment:', error);
    }
  };

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
      <div className="mt-8">
        <EnhancedLoadingAnimation 
          message={
            type === 'bedtime' 
              ? "AI analyzing your perfect bedtimes..." 
              : "AI calculating optimal wake-up times..."
          }
          userAge={userAge}
          userSex={userSex}
        />
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

      {/* Health Assessment Section */}
      {sleepAssessment && (
        <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200 shadow-xl">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <TrendingUp className="text-blue-600" size={24} />
                Personalized Sleep Health Assessment
              </CardTitle>
              <Badge 
                className={`${getQualityColor(sleepAssessment.quality)} border px-3 py-1 font-bold`}
                data-testid="sleep-quality-badge"
              >
                {sleepAssessment.quality.charAt(0).toUpperCase() + sleepAssessment.quality.slice(1)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Assessment Overview */}
            <div className="bg-white rounded-xl p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <Brain className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">Sleep Quality Analysis</h4>
                  <p className="text-gray-700 leading-relaxed">{sleepAssessment.feedback}</p>
                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <span className="text-gray-600">
                      <strong>Your Sleep:</strong> {sleepAssessment.hoursSlept.toFixed(1)}h
                    </span>
                    <span className="text-gray-600">
                      <strong>Recommended:</strong> {sleepAssessment.recommendedHours}h
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            {sleepAssessment.benefits.length > 0 && (
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-3">Health Benefits You'll Experience</h4>
                    <div className="grid gap-2">
                      {sleepAssessment.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Risk Factors Section */}
            {sleepAssessment.riskFactors.length > 0 && (
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 rounded-full p-2 mt-1">
                    <AlertTriangle className="text-amber-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-3">Health Considerations</h4>
                    <div className="grid gap-2">
                      {sleepAssessment.riskFactors.map((risk, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <AlertTriangle className="text-amber-500 flex-shrink-0" size={16} />
                          {risk}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Personalized Tips */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <Shield className="text-blue-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-3">Evidence-Based Sleep Tips</h4>
                  <div className="grid gap-2">
                    {sleepAssessment.tips.slice(0, 5).map((tip, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <Zap className="text-blue-500 flex-shrink-0 mt-0.5" size={14} />
                        {tip}
                      </div>
                    ))}
                  </div>
                  
                  {!showHealthInsights && sleepAssessment.tips.length > 5 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowHealthInsights(true)}
                      className="mt-3 text-blue-600 border-blue-300 hover:bg-blue-100"
                    >
                      Show More Tips & Professional Recommendations
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Extended Health Recommendations */}
            {showHealthInsights && (
              <div className="space-y-4 animate-fade-in">
                {/* Remaining Tips */}
                {sleepAssessment.tips.length > 5 && (
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Heart className="text-purple-600" size={18} />
                      Additional Sleep Optimization Tips
                    </h4>
                    <div className="grid gap-2">
                      {sleepAssessment.tips.slice(5).map((tip, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <Star className="text-purple-500 flex-shrink-0 mt-0.5" size={14} />
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Professional Health Recommendations */}
                {healthRecommendations.length > 0 && (
                  <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Info className="text-indigo-600" size={18} />
                      Professional Health Recommendations
                    </h4>
                    <div className="space-y-3">
                      {healthRecommendations.map((rec, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 border border-indigo-100">
                          <h5 className="font-medium text-gray-800 mb-1">{rec.title}</h5>
                          <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {rec.category}
                            </Badge>
                            {rec.link && (
                              <a 
                                href={rec.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800 text-xs flex items-center gap-1"
                              >
                                Learn More <ArrowRight size={12} />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                      <Info size={12} />
                      Recommendations from U.S. Department of Health & Human Services
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}

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