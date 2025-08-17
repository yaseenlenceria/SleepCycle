import { SleepTime } from "@/lib/sleep-calculations";
import { Clock, Lightbulb, Info } from "lucide-react";

interface SleepResultsProps {
  results: SleepTime[];
  mode: 'bedtime' | 'wakeup';
  selectedTime?: string;
}

export function SleepResults({ results, mode, selectedTime }: SleepResultsProps) {
  const isBedtimeMode = mode === 'bedtime';
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {isBedtimeMode ? 'Recommended Bedtimes' : 'Recommended Wake-up Times'}
        </h3>
        <p className="text-gray-600">
          {isBedtimeMode 
            ? `To wake up refreshed at ${selectedTime}, go to sleep at one of these times:`
            : 'If you go to sleep right now, try to wake up at one of these times:'
          }
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {results.map((result, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 text-center border ${
              isBedtimeMode
                ? 'bg-gradient-to-br from-sleep-blue-50 to-sleep-purple-50 border-sleep-blue-100'
                : 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-100'
            }`}
            data-testid={`result-time-${index}`}
          >
            <div className={`text-2xl font-bold ${
              isBedtimeMode ? 'text-sleep-blue-700' : 'text-orange-700'
            }`}>
              {result.time}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              {result.cycles} cycle{result.cycles !== 1 ? 's' : ''}
            </div>
          </div>
        ))}
      </div>

      <div className={`rounded-lg p-4 border ${
        isBedtimeMode
          ? 'bg-blue-50 border-blue-200'
          : 'bg-orange-50 border-orange-200'
      }`}>
        <div className="flex items-start">
          {isBedtimeMode ? (
            <Info className={`mt-1 mr-3 text-blue-500`} size={20} />
          ) : (
            <Lightbulb className={`mt-1 mr-3 text-orange-500`} size={20} />
          )}
          <div className={`text-sm ${
            isBedtimeMode ? 'text-blue-800' : 'text-orange-800'
          }`}>
            <p className="font-medium mb-1">
              {isBedtimeMode ? 'Sleep Cycle Information' : 'Optimal Sleep Duration'}
            </p>
            <p>
              The average human takes 15 minutes to fall asleep. If you wake up at one of these times, 
              you'll rise between 90-minute sleep cycles. A good night's sleep consists of 5-6 complete sleep cycles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
