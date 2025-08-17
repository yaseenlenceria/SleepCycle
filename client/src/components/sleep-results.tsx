import { SleepTime } from "@/lib/sleep-calculations";
import { Clock, Lightbulb, Info, Star, Award, Zap } from "lucide-react";

interface SleepResultsProps {
  results: SleepTime[];
  mode: 'bedtime' | 'wakeup';
  selectedTime?: string;
}

export function SleepResults({ results, mode, selectedTime }: SleepResultsProps) {
  const isBedtimeMode = mode === 'bedtime';
  
  const getQualityIcon = (quality: string) => {
    switch (quality) {
      case 'excellent': return <Star className="text-yellow-500" size={16} />;
      case 'good': return <Award className="text-green-500" size={16} />;
      case 'fair': return <Zap className="text-blue-500" size={16} />;
      case 'poor': return <Clock className="text-gray-500" size={16} />;
      default: return null;
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'text-yellow-600 bg-yellow-100';
      case 'good': return 'text-green-600 bg-green-100';
      case 'fair': return 'text-blue-600 bg-blue-100';
      case 'poor': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };
  
  return (
    <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {isBedtimeMode ? 'Optimal Bedtime Recommendations' : 'Optimal Wake-up Times'}
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto">
          {isBedtimeMode 
            ? `To wake up refreshed at ${selectedTime}, go to sleep at one of these scientifically calculated times:`
            : 'If you go to sleep right now, these are the optimal times to wake up based on 90-minute sleep cycles:'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {results.map((result, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-center border-2 transition-all duration-500 transform hover:scale-105 hover:shadow-lg animate-in slide-in-from-bottom-5 stagger-${index + 1} ${
              isBedtimeMode
                ? 'bg-gradient-to-br from-sleep-blue-50 to-sleep-purple-50 border-sleep-blue-200 hover:border-sleep-blue-300'
                : 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 hover:border-orange-300'
            }`}
            data-testid={`result-time-${index}`}
          >
            <div className={`text-3xl font-bold mb-2 ${
              isBedtimeMode ? 'text-sleep-blue-700' : 'text-orange-700'
            }`}>
              {result.time}
            </div>
            
            <div className="space-y-2">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getQualityColor(result.quality)}`}>
                {getQualityIcon(result.quality)}
                <span className="ml-1 capitalize">{result.quality}</span>
              </div>
              
              <div className="text-sm text-gray-600">
                {result.cycles} cycle{result.cycles !== 1 ? 's' : ''} • {result.duration}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`rounded-xl p-6 border-2 animate-in slide-in-from-bottom-5 duration-700 ${
        isBedtimeMode
          ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
          : 'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200'
      }`}>
        <div className="flex items-start">
          {isBedtimeMode ? (
            <Info className={`mt-1 mr-4 text-blue-600 sleep-pulse`} size={24} />
          ) : (
            <Lightbulb className={`mt-1 mr-4 text-orange-600 sleep-pulse`} size={24} />
          )}
          <div className={`text-sm ${
            isBedtimeMode ? 'text-blue-800' : 'text-orange-800'
          }`}>
            <p className="font-bold mb-3 text-lg">
              {isBedtimeMode ? 'Sleep Cycle Science' : 'Why These Times Work'}
            </p>
            <div className="space-y-2">
              <p>
                <strong>15-Minute Buffer:</strong> The average human takes 15 minutes to fall asleep, factored into all calculations.
              </p>
              <p>
                <strong>90-Minute Cycles:</strong> Each complete sleep cycle lasts ~90 minutes with stages from light to deep sleep and REM.
              </p>
              <p>
                <strong>Optimal Recovery:</strong> Waking between cycles (not during them) helps you feel refreshed and energized.
              </p>
              <p>
                <strong>Quality Sleep:</strong> 5-6 complete cycles (7.5-9 hours) provide optimal cognitive and physical recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
