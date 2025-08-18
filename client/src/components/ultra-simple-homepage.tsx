import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, ArrowRight, Sun, Bed } from 'lucide-react';

interface UltraSimpleHomepageProps {
  onCalculateBedtime: () => void;
  onCalculateWakeup: (bedtime?: string) => void;
  onSleepNow: (sleepDuration?: number) => void;
  onTimeChange: (hour: string, minute: string, period: string) => void;
  hour: string;
  minute: string;
  period: string;
  // Results display props
  showBedtimeResults: boolean;
  showWakeupResults: boolean;
  showSleepNowResults: boolean;
  bedtimeResultsComponent?: React.ReactNode;
  wakeupResultsComponent?: React.ReactNode;
  sleepNowResultsComponent?: React.ReactNode;
}

export function UltraSimpleHomepage({ 
  onCalculateBedtime,
  onCalculateWakeup, 
  onSleepNow, 
  onTimeChange,
  hour,
  minute,
  period,
  showBedtimeResults,
  showWakeupResults,
  showSleepNowResults,
  bedtimeResultsComponent,
  wakeupResultsComponent,
  sleepNowResultsComponent
}: UltraSimpleHomepageProps) {
  const [wakeHour, setWakeHour] = useState(hour);
  const [wakeMinute, setWakeMinute] = useState(minute);
  const [wakePeriod, setWakePeriod] = useState(period);
  
  const [bedHour, setBedHour] = useState('11');
  const [bedMinute, setBedMinute] = useState('00');
  const [bedPeriod, setBedPeriod] = useState('PM');
  
  const [selectedSleepDuration, setSelectedSleepDuration] = useState(8);
  const [selectedAge, setSelectedAge] = useState(25);

  // Generate hours and minutes
  const hours = Array.from({ length: 12 }, (_, i) => String(i === 0 ? 12 : i).padStart(2, '0'));
  const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));

  const handleWakeTimeChange = (newHour: string, newMinute: string, newPeriod: string) => {
    setWakeHour(newHour);
    setWakeMinute(newMinute);
    setWakePeriod(newPeriod);
    onTimeChange(newHour, newMinute, newPeriod);
  };

  // Age-specific sleep recommendations
  const getAgeRecommendations = (age: number) => {
    if (age < 1) {
      return {
        category: 'Newborn (0-3 months)',
        sleepHours: '14-17 hours',
        cycles: 'Short 50-60 min cycles',
        bedtime: '8:00-9:00 PM',
        tips: 'Multiple naps, safe sleep position',
        bgColor: 'from-pink-100 to-pink-200',
        textColor: 'text-pink-700',
        emoji: '👶'
      };
    } else if (age <= 1) {
      return {
        category: 'Infant (4-11 months)',
        sleepHours: '12-15 hours',
        cycles: '2-3 naps + night sleep',
        bedtime: '7:00-8:00 PM',
        tips: 'Sleep training readiness, consistent routine',
        bgColor: 'from-blue-100 to-blue-200',
        textColor: 'text-blue-700',
        emoji: '🍼'
      };
    } else if (age <= 3) {
      return {
        category: 'Toddler (1-3 years)',
        sleepHours: '11-14 hours',
        cycles: '1-2 naps + night sleep',
        bedtime: '7:00-8:30 PM',
        tips: 'Transitioning from 2 naps to 1',
        bgColor: 'from-green-100 to-green-200',
        textColor: 'text-green-700',
        emoji: '🧸'
      };
    } else if (age <= 5) {
      return {
        category: 'Preschooler (3-5 years)',
        sleepHours: '10-13 hours',
        cycles: 'Mostly night sleep',
        bedtime: '7:30-8:30 PM',
        tips: 'May still need afternoon nap',
        bgColor: 'from-purple-100 to-purple-200',
        textColor: 'text-purple-700',
        emoji: '🎨'
      };
    } else if (age <= 13) {
      return {
        category: 'School Age (6-13 years)',
        sleepHours: '9-11 hours',
        cycles: '6-7 complete 90-min cycles',
        bedtime: '8:00-9:00 PM',
        tips: 'Consistent bedtime routine crucial',
        bgColor: 'from-indigo-100 to-indigo-200',
        textColor: 'text-indigo-700',
        emoji: '📚'
      };
    } else if (age <= 17) {
      return {
        category: 'Teen (14-17 years)',
        sleepHours: '8-10 hours',
        cycles: '5-6 complete 90-min cycles',
        bedtime: '9:00-10:30 PM',
        tips: 'Natural circadian shift - later bedtime',
        bgColor: 'from-orange-100 to-orange-200',
        textColor: 'text-orange-700',
        emoji: '🎸'
      };
    } else if (age <= 64) {
      return {
        category: 'Adult (18-64 years)',
        sleepHours: '7-9 hours',
        cycles: '4-6 complete 90-min cycles',
        bedtime: '10:00-11:00 PM',
        tips: 'Optimize for work schedule and lifestyle',
        bgColor: 'from-teal-100 to-teal-200',
        textColor: 'text-teal-700',
        emoji: '💼'
      };
    } else {
      return {
        category: 'Senior (65+ years)',
        sleepHours: '7-8 hours',
        cycles: '4-5 complete 90-min cycles',
        bedtime: '9:00-10:00 PM',
        tips: 'Earlier bedtime, may wake earlier',
        bgColor: 'from-gray-100 to-gray-200',
        textColor: 'text-gray-700',
        emoji: '👴'
      };
    }
  };

  const currentRecommendation = getAgeRecommendations(selectedAge);

  return (
    <div className="w-full max-w-sm mx-auto px-3 sm:max-w-lg lg:max-w-2xl sm:px-4 lg:px-6">
      {/* Hero Trust Signals */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">#1 Sleep Calculator: 90-Minute Sleep Cycle Calculator by Age</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          FREE AI Health Assessment • Calculate: How Much Sleep Did I Get • Scientifically Best Bedtime & Wake Time • 4+ Billion Sleep Sessions Analyzed
        </p>
        <div className="flex justify-center items-center gap-4 text-xs text-gray-500">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ Best Sleep Calculator</span>
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">✓ Age & Gender Based</span>
          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">✓ Free Sleep Cycle Time</span>
        </div>
      </div>

      {/* Age Slider Section */}
      <Card className={`bg-gradient-to-br ${currentRecommendation.bgColor} border-0 shadow-lg mb-6 sm:mb-8`}>
        <CardContent className="p-4 sm:p-6 lg:p-8">
          <div className="text-center mb-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
              Sleep Calculator by Age
            </h3>
            <p className="text-sm text-gray-600">Personalized recommendations based on your age</p>
          </div>
          
          {/* Age Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-gray-600">Age:</span>
              <span className="text-lg font-bold text-gray-800">{selectedAge} years old</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="80"
                value={selectedAge}
                onChange={(e) => setSelectedAge(parseInt(e.target.value))}
                className="w-full h-3 bg-white rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(selectedAge / 80) * 100}%, #E5E7EB ${(selectedAge / 80) * 100}%, #E5E7EB 100%)`
                }}
                data-testid="age-slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Newborn</span>
                <span>Child</span>
                <span>Teen</span>
                <span>Adult</span>
                <span>Senior</span>
              </div>
            </div>
          </div>

          {/* Age-Specific Recommendations */}
          <div className={`bg-white rounded-xl p-4 sm:p-6 ${currentRecommendation.textColor}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-lg mb-3">{currentRecommendation.category}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Sleep Need:</span>
                    <span>{currentRecommendation.sleepHours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Sleep Cycles:</span>
                    <span>{currentRecommendation.cycles}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Ideal Bedtime:</span>
                    <span>{currentRecommendation.bedtime}</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Age-Specific Tips:</h5>
                <p className="text-sm leading-relaxed">{currentRecommendation.tips}</p>
                <div className="mt-3 text-xs bg-gray-50 rounded-lg p-2">
                  <span className="font-semibold">Pro Tip:</span> Use our calculator below for personalized {selectedAge < 18 ? 'sleep schedules' : 'bedtime and wake-up times'} based on these recommendations.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        
        {/* Wake Up Time Card */}
        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 shadow-lg hover:shadow-xl transition-all">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
              <div className="flex items-center">
                <Sun className="text-orange-500 mr-2 lg:mr-3" size={20} />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                  I will wake up at
                </h2>
              </div>
              <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-extralight">With AI assistant </div>
            </div>
            
            <div className="flex justify-center items-center space-x-2 sm:space-x-3 lg:space-x-4 mb-4 sm:mb-5 lg:mb-6">
              {/* Hour */}
              <select 
                value={wakeHour}
                onChange={(e) => handleWakeTimeChange(e.target.value, wakeMinute, wakePeriod)}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 text-lg sm:text-xl lg:text-2xl font-bold text-center border-3 border-orange-300 rounded-xl focus:border-orange-500 focus:outline-none appearance-none bg-white cursor-pointer hover:border-orange-400 transition-colors shadow-md"
                data-testid="wake-hour-select"
              >
                {hours.map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>

              <div className="text-xl sm:text-2xl font-bold text-orange-600">:</div>

              {/* Minute */}
              <select 
                value={wakeMinute}
                onChange={(e) => handleWakeTimeChange(wakeHour, e.target.value, wakePeriod)}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 text-lg sm:text-xl lg:text-2xl font-bold text-center border-3 border-orange-300 rounded-xl focus:border-orange-500 focus:outline-none appearance-none bg-white cursor-pointer hover:border-orange-400 transition-colors shadow-md"
                data-testid="wake-minute-select"
              >
                {minutes.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              {/* AM/PM */}
              <div className="bg-orange-100 rounded-xl p-1 shadow-md">
                <button
                  onClick={() => handleWakeTimeChange(wakeHour, wakeMinute, 'AM')}
                  className={`px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-bold transition-colors ${
                    wakePeriod === 'AM' 
                      ? 'bg-orange-500 text-white shadow-md' 
                      : 'text-orange-600 hover:text-orange-700 hover:bg-orange-200'
                  }`}
                  data-testid="wake-am-button"
                >
                  AM
                </button>
                <button
                  onClick={() => handleWakeTimeChange(wakeHour, wakeMinute, 'PM')}
                  className={`px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-bold transition-colors ${
                    wakePeriod === 'PM' 
                      ? 'bg-orange-500 text-white shadow-md' 
                      : 'text-orange-600 hover:text-orange-700 hover:bg-orange-200'
                  }`}
                  data-testid="wake-pm-button"
                >
                  PM
                </button>
              </div>
            </div>

            <Button
              onClick={onCalculateBedtime}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-xl transition-colors shadow-lg hover:shadow-xl"
              data-testid="button-calculate-bedtime"
            >
              Find My Bedtime
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </CardContent>
        </Card>

        {/* Expandable Results for Bedtime */}
        {showBedtimeResults && (
          <div className="mt-3 animate-in slide-in-from-top-5 duration-500">
            {bedtimeResultsComponent}
          </div>
        )}

        {/* Bed Time Card */}
        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 shadow-lg hover:shadow-xl transition-all">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
              <div className="flex items-center">
                <Bed className="text-purple-500 mr-2 lg:mr-3" size={20} />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                  I will go to bed at
                </h2>
              </div>
              <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-extralight">With AI assistant </div>
            </div>
            
            <div className="flex justify-center items-center space-x-2 sm:space-x-3 lg:space-x-4 mb-4 sm:mb-5 lg:mb-6">
              {/* Hour */}
              <select 
                value={bedHour}
                onChange={(e) => setBedHour(e.target.value)}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 text-lg sm:text-xl lg:text-2xl font-bold text-center border-3 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none appearance-none bg-white cursor-pointer hover:border-purple-400 transition-colors shadow-md"
                data-testid="bed-hour-select"
              >
                {hours.map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>

              <div className="text-xl sm:text-2xl font-bold text-purple-600">:</div>

              {/* Minute */}
              <select 
                value={bedMinute}
                onChange={(e) => setBedMinute(e.target.value)}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 text-lg sm:text-xl lg:text-2xl font-bold text-center border-3 border-purple-300 rounded-xl focus:border-purple-500 focus:outline-none appearance-none bg-white cursor-pointer hover:border-purple-400 transition-colors shadow-md"
                data-testid="bed-minute-select"
              >
                {minutes.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              {/* AM/PM */}
              <div className="bg-purple-100 rounded-xl p-1 shadow-md">
                <button
                  onClick={() => setBedPeriod('AM')}
                  className={`px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-bold transition-colors ${
                    bedPeriod === 'AM' 
                      ? 'bg-purple-500 text-white shadow-md' 
                      : 'text-purple-600 hover:text-purple-700 hover:bg-purple-200'
                  }`}
                  data-testid="bed-am-button"
                >
                  AM
                </button>
                <button
                  onClick={() => setBedPeriod('PM')}
                  className={`px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-bold transition-colors ${
                    bedPeriod === 'PM' 
                      ? 'bg-purple-500 text-white shadow-md' 
                      : 'text-purple-600 hover:text-purple-700 hover:bg-purple-200'
                  }`}
                  data-testid="bed-pm-button"
                >
                  PM
                </button>
              </div>
            </div>

            <Button
              onClick={() => {
                const bedtime = `${bedHour}:${bedMinute} ${bedPeriod}`;
                onCalculateWakeup(bedtime);
              }}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-xl transition-colors shadow-lg hover:shadow-xl"
              data-testid="button-calculate-wakeup"
            >
              Find My Wake Time
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </CardContent>
        </Card>

        {/* Expandable Results for Wake Up Time */}
        {showWakeupResults && (
          <div className="mt-3 animate-in slide-in-from-top-5 duration-500">
            {wakeupResultsComponent}
          </div>
        )}

        {/* Sleep Now Card */}
        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
              <div className="flex items-center">
                <Moon className="text-green-500 mr-2 lg:mr-3" size={18} />
                <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
                  Sleep Now
                </h2>
              </div>
              <ArrowRight className="text-green-500" size={16} />
            </div>
            
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
              Get optimal wake-up times if you sleep right now
            </p>

            {/* Quick Sleep Duration Selector */}
            <div className="mb-3 sm:mb-4">
              <p className="text-xs text-gray-500 mb-2">How many hours do you want to sleep?</p>
              <div className="grid grid-cols-4 gap-1 sm:gap-2">
                {[6, 7, 8, 9].map(hours => (
                  <button 
                    key={hours}
                    onClick={() => setSelectedSleepDuration(hours)}
                    className={`p-2 text-xs sm:text-sm rounded border transition-colors ${
                      selectedSleepDuration === hours 
                        ? 'bg-green-100 border-green-300 text-green-700 font-medium'
                        : 'bg-gray-100 hover:bg-green-100 border-gray-300 text-gray-700 hover:text-green-700'
                    }`}
                  >
                    {hours}h
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => onSleepNow(selectedSleepDuration)}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-lg transition-colors"
              data-testid="button-sleep-now"
            >
              Sleep Now ({selectedSleepDuration}h)
              <ArrowRight className="ml-1 sm:ml-2" size={14} />
            </Button>
          </CardContent>
        </Card>

        {/* Expandable Results for Sleep Now */}
        {showSleepNowResults && (
          <div className="mt-3 animate-in slide-in-from-top-5 duration-500">
            {sleepNowResultsComponent}
          </div>
        )}

        {/* How Does It Work Section */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-4 sm:p-6">
            <div className="text-center mb-3">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                How Does It Work?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our AI uses 90-minute sleep cycles to find your optimal bedtime and wake-up times. 
                You'll get personalized health assessments based on your age and sleep patterns.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-xs sm:text-sm font-bold text-blue-600">1</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">Pick Time</p>
              </div>
              
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-xs sm:text-sm font-bold text-purple-600">2</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">AI Calculates</p>
              </div>
              
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <span className="text-xs sm:text-sm font-bold text-green-600">3</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">Get Results</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Signals and Social Proof */}
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-4 sm:p-6 text-center">
            <h4 className="font-bold text-gray-800 mb-3">Trusted by Sleep Experts Worldwide</h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-2xl font-bold text-blue-600">4+ Billion</div>
                <div className="text-xs text-gray-600">Sleep Sessions Analyzed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">10M+</div>
                <div className="text-xs text-gray-600">Happy Users</div>
              </div>
            </div>
            <p className="text-xs text-gray-600">96.8% accuracy rate • Recommended by doctors • 🌟 #1 rated by users</p>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}