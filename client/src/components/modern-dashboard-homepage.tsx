import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sun, 
  Moon, 
  Clock, 
  TrendingUp, 
  Brain, 
  Heart, 
  Zap,
  Calendar,
  BarChart3,
  Activity,
  Target
} from 'lucide-react';

interface ModernDashboardHomepageProps {
  activeTab: 'bedtime' | 'wakeup' | 'tracker' | 'nap' | 'baby' | 'age';
  onTabChange: (tab: 'bedtime' | 'wakeup' | 'tracker' | 'nap' | 'baby' | 'age') => void;
  hour: string;
  minute: string;
  period: string;
  onTimeChange: (hour: string, minute: string, period: string) => void;
  onCalculateBedtime: () => void;
  onSleepNow: () => void;
}

export function ModernDashboardHomepage({ 
  activeTab, 
  onTabChange, 
  hour, 
  minute, 
  period, 
  onTimeChange,
  onCalculateBedtime,
  onSleepNow 
}: ModernDashboardHomepageProps) {
  const [selectedHour, setSelectedHour] = useState(hour);
  const [selectedMinute, setSelectedMinute] = useState(minute);
  const [selectedPeriod, setSelectedPeriod] = useState(period);

  const updateTime = (newHour: string, newMinute: string, newPeriod: string) => {
    setSelectedHour(newHour);
    setSelectedMinute(newMinute);
    setSelectedPeriod(newPeriod);
    onTimeChange(newHour, newMinute, newPeriod);
  };

  // Generate hours array
  const hours = Array.from({ length: 12 }, (_, i) => String(i === 0 ? 12 : i).padStart(2, '0'));
  const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      {/* Top Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1 flex">
          <button
            onClick={() => onTabChange('bedtime')}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'bedtime' || activeTab === 'wakeup'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            data-testid="tab-wake-up"
          >
            <Sun size={18} />
            Wake up at
          </button>
          <button
            onClick={() => onTabChange('tracker')}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'tracker'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            data-testid="tab-go-to-bed"
          >
            <Moon size={18} />
            Go to bed at
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Sleep Health Score */}
        <div className="space-y-6">
          {/* Sleep Health Score Card */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Sleep Health Score</h3>
                <div className="flex items-center text-gray-400">
                  <Activity size={16} className="mr-1" />
                  <Target size={16} />
                </div>
              </div>
              
              {/* Circular Progress */}
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="stroke-gray-200"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="stroke-teal-500"
                      strokeWidth="3"
                      strokeDasharray="70, 100"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">70</div>
                      <div className="text-sm text-gray-500">Score</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-700">Good Sleep Quality</span>
                </div>
                <p className="text-xs text-gray-500">Based on Sahha Sleep API</p>
              </div>
            </CardContent>
          </Card>

          {/* Sleep Insights Card */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sleep Insights</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">Avg Sleep Duration</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">7.5h</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">Sleep Efficiency</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">85%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-600">Weekly Trend</span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">+4%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Today's Recommendation */}
          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Today's Recommendation</h3>
              <p className="text-sm text-blue-100 mb-4">
                Maintain consistent bedtime within 30 minutes to improve your sleep score by 8-12 points.
              </p>
              <Button 
                variant="secondary" 
                className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
              >
                View All Tips
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Center Column - Main Calculator */}
        <div className="lg:col-span-1">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  When do you want to wake up?
                </h2>
                <p className="text-gray-600">Set your desired wake-up time</p>
              </div>

              {/* Time Picker */}
              <div className="flex justify-center items-center space-x-4 mb-8">
                {/* Hour */}
                <div className="flex flex-col items-center">
                  <select 
                    value={selectedHour}
                    onChange={(e) => updateTime(e.target.value, selectedMinute, selectedPeriod)}
                    className="w-16 h-16 text-2xl font-bold text-center border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none appearance-none bg-white"
                  >
                    {hours.map(h => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                  <span className="text-xs text-gray-500 mt-1">Hour</span>
                </div>

                <div className="text-2xl font-bold text-gray-400">:</div>

                {/* Minute */}
                <div className="flex flex-col items-center">
                  <select 
                    value={selectedMinute}
                    onChange={(e) => updateTime(selectedHour, e.target.value, selectedPeriod)}
                    className="w-16 h-16 text-2xl font-bold text-center border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none appearance-none bg-white"
                  >
                    {minutes.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <span className="text-xs text-gray-500 mt-1">Min</span>
                </div>

                {/* AM/PM */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => updateTime(selectedHour, selectedMinute, 'AM')}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedPeriod === 'AM' 
                          ? 'bg-blue-500 text-white' 
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      AM
                    </button>
                    <button
                      onClick={() => updateTime(selectedHour, selectedMinute, 'PM')}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedPeriod === 'PM' 
                          ? 'bg-blue-500 text-white' 
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      PM
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  onClick={onCalculateBedtime}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-medium"
                  data-testid="button-calculate-optimal-times"
                >
                  Calculate Optimal Times
                </Button>
                
                <Button 
                  onClick={onSleepNow}
                  variant="outline"
                  className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 py-3 text-lg font-medium flex items-center justify-center gap-2"
                  data-testid="button-sleep-now"
                >
                  <Moon size={20} />
                  Sleep Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Additional Info */}
        <div className="space-y-6">
          {/* Optimal Sleep Times */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Optimal Sleep Times</h3>
              <p className="text-sm text-gray-600 mb-4">
                Select a time and click "Calculate Optimal Times" to see recommendations
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <Clock className="mx-auto mb-2 text-gray-400" size={24} />
                <p className="text-sm text-gray-500">Results will appear here</p>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Pattern */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Weekly Pattern</h3>
                <BarChart3 size={16} className="text-gray-400" />
              </div>
              
              <div className="space-y-3">
                {[
                  { day: 'Mon', hours: '7.2h', color: 'bg-teal-500', width: '85%' },
                  { day: 'Tue', hours: '6.1h', color: 'bg-orange-500', width: '65%' },
                  { day: 'Wed', hours: '7.8h', color: 'bg-teal-500', width: '95%' },
                  { day: 'Thu', hours: '7.5h', color: 'bg-teal-500', width: '90%' },
                  { day: 'Fri', hours: '5.2h', color: 'bg-red-500', width: '50%' },
                  { day: 'Sat', hours: '8.1h', color: 'bg-teal-500', width: '100%' },
                  { day: 'Sun', hours: '7.3h', color: 'bg-teal-500', width: '88%' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 w-8">{item.day}</span>
                    <div className="flex-1 mx-3">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${item.color} h-2 rounded-full`}
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-800 w-12 text-right">{item.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sleep Impact */}
          <Card className="bg-gradient-to-br from-teal-500 to-green-500 text-white shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Sleep Impact</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-100">Cognitive Performance</span>
                  <span className="text-sm font-semibold">+20%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-100">Muscle Recovery</span>
                  <span className="text-sm font-semibold">+18%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-100">Mood Stability</span>
                  <span className="text-sm font-semibold">+31%</span>
                </div>
              </div>

              <Button 
                variant="secondary" 
                className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border-0"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section - Sleep Cycle Breakdown */}
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Sleep Cycle Breakdown</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
              <div>
                <span className="text-sm font-medium text-gray-800">Deep Sleep (25%)</span>
                <p className="text-xs text-gray-500">Physical recovery and growth</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
              <div>
                <span className="text-sm font-medium text-gray-800">REM Sleep (25%)</span>
                <p className="text-xs text-gray-500">Memory consolidation and dreams</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-teal-500 rounded-full mr-3"></div>
              <div>
                <span className="text-sm font-medium text-gray-800">Light Sleep (50%)</span>
                <p className="text-xs text-gray-500">Transition and preparation phases</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">Each cycle lasts ~90 minutes</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}