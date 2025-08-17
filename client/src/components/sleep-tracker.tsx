import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollTimePicker } from '@/components/scroll-time-picker';
import { calculateSleepDuration, SleepData } from '@/lib/sleep-calculations';
import { BarChart3, Clock, TrendingUp, Award } from 'lucide-react';

export function SleepTracker() {
  const [bedtimeHour, setBedtimeHour] = useState('10');
  const [bedtimeMinute, setBedtimeMinute] = useState('30');
  const [bedtimePeriod, setBedtimePeriod] = useState('PM');
  
  const [wakeHour, setWakeHour] = useState('6');
  const [wakeMinute, setWakeMinute] = useState('30');
  const [wakePeriod, setWakePeriod] = useState('AM');
  
  const [sleepData, setSleepData] = useState<SleepData | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    const bedtimeStr = `${bedtimeHour}:${bedtimeMinute} ${bedtimePeriod}`;
    const waketimeStr = `${wakeHour}:${wakeMinute} ${wakePeriod}`;
    
    const data = calculateSleepDuration(bedtimeStr, waketimeStr);
    setSleepData(data);
    setShowResults(true);
  };

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 90) return 'text-green-600 bg-green-100';
    if (efficiency >= 75) return 'text-yellow-600 bg-yellow-100';
    if (efficiency >= 60) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getEfficiencyLabel = (efficiency: number) => {
    if (efficiency >= 90) return 'Excellent';
    if (efficiency >= 75) return 'Good';
    if (efficiency >= 60) return 'Fair';
    return 'Needs Improvement';
  };

  const getCyclesQuality = (cycles: number) => {
    if (cycles >= 5) return { label: 'Optimal', color: 'text-green-600' };
    if (cycles >= 4) return { label: 'Good', color: 'text-blue-600' };
    if (cycles >= 3) return { label: 'Adequate', color: 'text-yellow-600' };
    return { label: 'Insufficient', color: 'text-red-600' };
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
          Sleep Duration Calculator - How Much Sleep Did I Get?
        </h3>
        <p className="text-gray-600 text-sm md:text-base">
          Enter your bedtime and wake-up time to analyze your sleep quality and duration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
        {/* Bedtime Picker */}
        <div className="space-y-4">
          <h4 className="text-base md:text-lg font-semibold text-gray-800 text-center">
            When did you go to bed?
          </h4>
          <ScrollTimePicker
            hour={bedtimeHour}
            minute={bedtimeMinute}
            period={bedtimePeriod}
            onTimeChange={(h, m, p) => {
              setBedtimeHour(h);
              setBedtimeMinute(m);
              setBedtimePeriod(p);
              setShowResults(false);
            }}
          />
        </div>

        {/* Wake-up Picker */}
        <div className="space-y-4">
          <h4 className="text-base md:text-lg font-semibold text-gray-800 text-center">
            When did you wake up?
          </h4>
          <ScrollTimePicker
            hour={wakeHour}
            minute={wakeMinute}
            period={wakePeriod}
            onTimeChange={(h, m, p) => {
              setWakeHour(h);
              setWakeMinute(m);
              setWakePeriod(p);
              setShowResults(false);
            }}
          />
        </div>
      </div>

      <div className="text-center mb-6 md:mb-8">
        <Button
          onClick={handleCalculate}
          className="bg-gradient-to-r from-sleep-blue-600 to-sleep-purple-600 hover:from-sleep-blue-700 hover:to-sleep-purple-700 text-white px-6 md:px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base w-full md:w-auto"
        >
          <BarChart3 className="mr-2" size={20} />
          Analyze My Sleep
        </Button>
      </div>

      {showResults && sleepData && (
        <div className="space-y-6 animate-in slide-in-from-bottom-5 duration-500">
          {/* Main Results */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 text-center">
              <Clock className="mx-auto mb-3 text-blue-600" size={32} />
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Total Sleep</h4>
              <p className="text-2xl font-bold text-blue-600" data-testid="total-sleep">
                {sleepData.totalSleep}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 text-center">
              <TrendingUp className="mx-auto mb-3 text-purple-600" size={32} />
              <h4 className="text-lg font-semibold text-purple-800 mb-2">Sleep Cycles</h4>
              <p className="text-2xl font-bold text-purple-600" data-testid="sleep-cycles">
                {sleepData.cycles}
              </p>
              <p className={`text-sm font-medium ${getCyclesQuality(sleepData.cycles).color}`}>
                {getCyclesQuality(sleepData.cycles).label}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
              <Award className="mx-auto mb-3 text-green-600" size={32} />
              <h4 className="text-lg font-semibold text-green-800 mb-2">Sleep Efficiency</h4>
              <p className="text-2xl font-bold text-green-600" data-testid="sleep-efficiency">
                {sleepData.efficiency}%
              </p>
              <p className={`text-sm font-medium px-2 py-1 rounded-full ${getEfficiencyColor(sleepData.efficiency)}`}>
                {getEfficiencyLabel(sleepData.efficiency)}
              </p>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Sleep Analysis</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Sleep Schedule</h5>
                <ul className="space-y-1 text-gray-600">
                  <li>Bedtime: <span className="font-medium">{sleepData.bedtime}</span></li>
                  <li>Wake Time: <span className="font-medium">{sleepData.wakeTime}</span></li>
                  <li>Total Duration: <span className="font-medium">{sleepData.totalSleep}</span></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Quality Metrics</h5>
                <ul className="space-y-1 text-gray-600">
                  <li>Complete Cycles: <span className="font-medium">{sleepData.cycles}</span></li>
                  <li>Efficiency: <span className="font-medium">{sleepData.efficiency}%</span></li>
                  <li>Recommended: <span className="font-medium">5-6 cycles (7.5-9 hours)</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-amber-800 mb-3">Personalized Recommendations</h4>
            <div className="space-y-2 text-amber-700">
              {sleepData.cycles < 5 && (
                <p>• Consider going to bed earlier to get 5-6 complete sleep cycles</p>
              )}
              {sleepData.efficiency < 80 && (
                <p>• Your sleep timing could be optimized - try our bedtime calculator</p>
              )}
              {sleepData.cycles >= 5 && sleepData.efficiency >= 80 && (
                <p>• Great job! Your sleep schedule is well-optimized</p>
              )}
              <p>• Maintain consistent sleep and wake times for better sleep quality</p>
              <p>• Consider using our bedtime calculator for optimal sleep timing</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}