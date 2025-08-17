import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TimePickerProps {
  hour: string;
  minute: string;
  period: string;
  onTimeChange: (hour: string, minute: string, period: string) => void;
}

export function TimePicker({ hour, minute, period, onTimeChange }: TimePickerProps) {
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const minutes = ['00', '15', '30', '45'];
  const periods = ['AM', 'PM'];

  return (
    <div className="flex items-center space-x-4 bg-gray-50 rounded-lg p-6">
      {/* Hour Picker */}
      <div className="text-center">
        <label className="block text-sm font-medium text-gray-700 mb-2">Hour</label>
        <Select 
          value={hour} 
          onValueChange={(value) => onTimeChange(value, minute, period)}
          data-testid="select-hour"
        >
          <SelectTrigger className="w-20 text-2xl font-semibold text-center focus:ring-2 focus:ring-sleep-blue-500 focus:border-transparent">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {hours.map((h) => (
              <SelectItem key={h} value={h} data-testid={`hour-${h}`}>
                {h}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="text-3xl font-bold text-gray-400">:</div>

      {/* Minute Picker */}
      <div className="text-center">
        <label className="block text-sm font-medium text-gray-700 mb-2">Minute</label>
        <Select 
          value={minute} 
          onValueChange={(value) => onTimeChange(hour, value, period)}
          data-testid="select-minute"
        >
          <SelectTrigger className="w-20 text-2xl font-semibold text-center focus:ring-2 focus:ring-sleep-blue-500 focus:border-transparent">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {minutes.map((m) => (
              <SelectItem key={m} value={m} data-testid={`minute-${m}`}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* AM/PM Picker */}
      <div className="text-center">
        <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
        <Select 
          value={period} 
          onValueChange={(value) => onTimeChange(hour, minute, value)}
          data-testid="select-period"
        >
          <SelectTrigger className="w-20 text-2xl font-semibold text-center focus:ring-2 focus:ring-sleep-blue-500 focus:border-transparent">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {periods.map((p) => (
              <SelectItem key={p} value={p} data-testid={`period-${p}`}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
