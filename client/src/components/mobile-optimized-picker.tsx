import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown, Clock } from 'lucide-react';

interface MobileOptimizedPickerProps {
  hour: string;
  minute: string;
  period: string;
  onTimeChange: (hour: string, minute: string, period: string) => void;
}

export function MobileOptimizedPicker({ hour, minute, period, onTimeChange }: MobileOptimizedPickerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutes = ['00', '15', '30', '45'];
  const periods = ['AM', 'PM'];

  const adjustValue = (current: string, values: string[], direction: 'up' | 'down') => {
    const currentIndex = values.indexOf(current);
    if (direction === 'up') {
      return values[(currentIndex + 1) % values.length];
    } else {
      return values[(currentIndex - 1 + values.length) % values.length];
    }
  };

  const handleHourChange = (direction: 'up' | 'down') => {
    const newHour = adjustValue(hour, hours, direction);
    onTimeChange(newHour, minute, period);
  };

  const handleMinuteChange = (direction: 'up' | 'down') => {
    const newMinute = adjustValue(minute, minutes, direction);
    onTimeChange(hour, newMinute, period);
  };

  const handlePeriodChange = (direction: 'up' | 'down') => {
    const newPeriod = adjustValue(period, periods, direction);
    onTimeChange(hour, minute, newPeriod);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Mobile-First Display */}
      <div className="bg-gradient-to-br from-sleep-blue-50 to-sleep-purple-50 border-2 border-sleep-blue-200 rounded-2xl p-6 shadow-lg">
        {/* Current Time Display */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-2">
            <Clock className="text-sleep-blue-600 mr-2" size={24} />
            <span className="text-lg font-semibold text-gray-700">Selected Time</span>
          </div>
          <div className="text-4xl font-bold text-sleep-blue-700 font-mono tracking-wider">
            {hour}:{minute} {period}
          </div>
        </div>

        {/* Large Touch-Friendly Controls */}
        <div className="grid grid-cols-3 gap-4">
          {/* Hour Controls */}
          <div className="text-center">
            <label className="block text-sm font-medium text-gray-600 mb-2">Hour</label>
            <div className="space-y-2">
              <Button
                onClick={() => handleHourChange('up')}
                variant="outline"
                size="sm"
                className="w-full h-12 bg-white hover:bg-gray-50 border-2"
                data-testid="hour-up"
              >
                <ChevronUp size={20} />
              </Button>
              <div className="h-16 flex items-center justify-center bg-white rounded-lg border-2 border-sleep-blue-300 text-2xl font-bold text-sleep-blue-700">
                {hour}
              </div>
              <Button
                onClick={() => handleHourChange('down')}
                variant="outline"
                size="sm"
                className="w-full h-12 bg-white hover:bg-gray-50 border-2"
                data-testid="hour-down"
              >
                <ChevronDown size={20} />
              </Button>
            </div>
          </div>

          {/* Minute Controls */}
          <div className="text-center">
            <label className="block text-sm font-medium text-gray-600 mb-2">Minute</label>
            <div className="space-y-2">
              <Button
                onClick={() => handleMinuteChange('up')}
                variant="outline"
                size="sm"
                className="w-full h-12 bg-white hover:bg-gray-50 border-2"
                data-testid="minute-up"
              >
                <ChevronUp size={20} />
              </Button>
              <div className="h-16 flex items-center justify-center bg-white rounded-lg border-2 border-sleep-blue-300 text-2xl font-bold text-sleep-blue-700">
                {minute}
              </div>
              <Button
                onClick={() => handleMinuteChange('down')}
                variant="outline"
                size="sm"
                className="w-full h-12 bg-white hover:bg-gray-50 border-2"
                data-testid="minute-down"
              >
                <ChevronDown size={20} />
              </Button>
            </div>
          </div>

          {/* Period Controls */}
          <div className="text-center">
            <label className="block text-sm font-medium text-gray-600 mb-2">AM/PM</label>
            <div className="space-y-2">
              <Button
                onClick={() => handlePeriodChange('up')}
                variant="outline"
                size="sm"
                className="w-full h-12 bg-white hover:bg-gray-50 border-2"
                data-testid="period-up"
              >
                <ChevronUp size={20} />
              </Button>
              <div className="h-16 flex items-center justify-center bg-white rounded-lg border-2 border-sleep-blue-300 text-xl font-bold text-sleep-blue-700">
                {period}
              </div>
              <Button
                onClick={() => handlePeriodChange('down')}
                variant="outline"
                size="sm"
                className="w-full h-12 bg-white hover:bg-gray-50 border-2"
                data-testid="period-down"
              >
                <ChevronDown size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Time Buttons for Mobile */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-600 mb-3 text-center">Quick Select</label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { time: '10:00 PM', label: 'Early' },
              { time: '11:00 PM', label: 'Standard' },
              { time: '6:00 AM', label: 'Early Rise' },
              { time: '7:00 AM', label: 'Standard' }
            ].map((preset) => (
              <Button
                key={preset.time}
                onClick={() => {
                  const [time, period] = preset.time.split(' ');
                  const [hour, minute] = time.split(':');
                  onTimeChange(hour, minute, period);
                }}
                variant="outline"
                size="sm"
                className="h-12 text-xs bg-white hover:bg-sleep-blue-50 border border-sleep-blue-200"
                data-testid={`preset-${preset.label.toLowerCase()}`}
              >
                <div className="text-center">
                  <div className="font-bold">{preset.time}</div>
                  <div className="text-gray-500">{preset.label}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}