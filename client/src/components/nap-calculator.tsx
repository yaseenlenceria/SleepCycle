import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { getOptimalNapTimes, NapTime } from '@/lib/sleep-calculations';
import { Coffee, Battery, Zap, Clock } from 'lucide-react';

export function NapCalculator() {
  const [selectedNap, setSelectedNap] = useState<NapTime | null>(null);
  const napTimes = getOptimalNapTimes();

  const getIcon = (type: string) => {
    switch (type) {
      case 'power': return <Zap className="text-yellow-500" size={24} />;
      case 'recovery': return <Battery className="text-blue-500" size={24} />;
      case 'full': return <Coffee className="text-green-500" size={24} />;
      default: return <Clock className="text-gray-500" size={24} />;
    }
  };

  const getColorClasses = (type: string) => {
    switch (type) {
      case 'power': 
        return {
          bg: 'bg-gradient-to-br from-yellow-50 to-orange-50',
          border: 'border-yellow-200',
          text: 'text-yellow-800',
          button: 'bg-yellow-500 hover:bg-yellow-600'
        };
      case 'recovery':
        return {
          bg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
          border: 'border-blue-200',
          text: 'text-blue-800',
          button: 'bg-blue-500 hover:bg-blue-600'
        };
      case 'full':
        return {
          bg: 'bg-gradient-to-br from-green-50 to-emerald-50',
          border: 'border-green-200',
          text: 'text-green-800',
          button: 'bg-green-500 hover:bg-green-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          text: 'text-gray-800',
          button: 'bg-gray-500 hover:bg-gray-600'
        };
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Nap Calculator - Optimal Nap Duration
        </h3>
        <p className="text-gray-600">
          Choose the perfect nap length based on your needs and available time
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {napTimes.map((nap, index) => {
          const colors = getColorClasses(nap.type);
          const isSelected = selectedNap?.type === nap.type;
          
          return (
            <div
              key={index}
              className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                isSelected ? 'ring-2 ring-sleep-blue-500 scale-105 shadow-lg' : ''
              }`}
              onClick={() => setSelectedNap(nap)}
              data-testid={`nap-option-${nap.type}`}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {getIcon(nap.type)}
                </div>
                <h4 className={`text-xl font-bold ${colors.text} mb-2`}>
                  {nap.duration} minutes
                </h4>
                <p className={`font-semibold ${colors.text} mb-3`}>
                  {nap.description}
                </p>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedNap(nap);
                  }}
                  className={`${colors.button} text-white w-full transition-colors duration-200`}
                  data-testid={`button-select-${nap.type}`}
                >
                  Select This Nap
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedNap && (
        <div className="bg-gradient-to-br from-sleep-blue-50 to-sleep-purple-50 border border-sleep-blue-200 rounded-xl p-6 animate-in slide-in-from-bottom-5 duration-500">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              {getIcon(selectedNap.type)}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-sleep-blue-800 mb-3">
                {selectedNap.description} Benefits
              </h4>
              <ul className="space-y-2">
                {selectedNap.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sleep-blue-700">
                    <div className="w-2 h-2 bg-sleep-blue-500 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-white bg-opacity-60 rounded-lg">
                <p className="text-sm text-sleep-blue-600 font-medium">
                  💡 <strong>Tip:</strong> Set an alarm for exactly {selectedNap.duration} minutes from now to maximize the benefits of your {selectedNap.description.toLowerCase()}.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h4 className="font-semibold text-amber-800 mb-2">Napping Best Practices</h4>
        <ul className="text-sm text-amber-700 space-y-1">
          <li>• Best nap time is between 1:00 PM - 3:00 PM</li>
          <li>• Avoid napping after 4:00 PM to prevent nighttime sleep disruption</li>
          <li>• Create a dark, quiet environment for better nap quality</li>
          <li>• Consider having caffeine right before a 20-minute power nap</li>
        </ul>
      </div>
    </div>
  );
}