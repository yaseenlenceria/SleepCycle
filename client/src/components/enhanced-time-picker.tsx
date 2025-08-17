import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Clock } from 'lucide-react';

interface EnhancedTimePickerProps {
  hour: string;
  minute: string;
  period: string;
  onTimeChange: (hour: string, minute: string, period: string) => void;
  label: string;
  icon?: React.ReactNode;
}

export function EnhancedTimePicker({ 
  hour, 
  minute, 
  period, 
  onTimeChange, 
  label,
  icon = <Clock size={20} />
}: EnhancedTimePickerProps) {
  const [isHourOpen, setIsHourOpen] = useState(false);
  const [isMinuteOpen, setIsMinuteOpen] = useState(false);
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);

  // Generate hours (1-12)
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  
  // Generate minutes (00, 15, 30, 45)
  const minutes = ['00', '15', '30', '45'];
  
  // Periods
  const periods = ['AM', 'PM'];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hourRef.current && !hourRef.current.contains(event.target as Node)) {
        setIsHourOpen(false);
      }
      if (minuteRef.current && !minuteRef.current.contains(event.target as Node)) {
        setIsMinuteOpen(false);
      }
      if (periodRef.current && !periodRef.current.contains(event.target as Node)) {
        setIsPeriodOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const DropdownItem = ({ 
    value, 
    isSelected, 
    onClick 
  }: { 
    value: string; 
    isSelected: boolean; 
    onClick: () => void;
  }) => (
    <div
      className={`px-4 py-3 cursor-pointer transition-all duration-200 hover:bg-blue-50 ${
        isSelected ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700'
      }`}
      onClick={onClick}
    >
      {value}
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-blue-600">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
      </div>
      
      <div className="flex items-center space-x-3 justify-center">
        {/* Hour Picker */}
        <div className="relative" ref={hourRef}>
          <button
            className="bg-white border-2 border-gray-200 rounded-xl px-4 py-3 w-20 h-16 text-center font-bold text-2xl text-gray-800 shadow-sm hover:border-blue-300 focus:border-blue-500 focus:outline-none transition-all duration-200 flex items-center justify-between"
            onClick={() => {
              setIsHourOpen(!isHourOpen);
              setIsMinuteOpen(false);
              setIsPeriodOpen(false);
            }}
            data-testid="hour-picker"
          >
            <span className="flex-1">{hour}</span>
            <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isHourOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isHourOpen && (
            <div className="absolute top-full left-0 mt-1 w-20 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto">
              {hours.map((h) => (
                <DropdownItem
                  key={h}
                  value={h}
                  isSelected={h === hour}
                  onClick={() => {
                    onTimeChange(h, minute, period);
                    setIsHourOpen(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <span className="text-2xl font-bold text-gray-600">:</span>

        {/* Minute Picker */}
        <div className="relative" ref={minuteRef}>
          <button
            className="bg-white border-2 border-gray-200 rounded-xl px-4 py-3 w-20 h-16 text-center font-bold text-2xl text-gray-800 shadow-sm hover:border-blue-300 focus:border-blue-500 focus:outline-none transition-all duration-200 flex items-center justify-between"
            onClick={() => {
              setIsMinuteOpen(!isMinuteOpen);
              setIsHourOpen(false);
              setIsPeriodOpen(false);
            }}
            data-testid="minute-picker"
          >
            <span className="flex-1">{minute}</span>
            <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isMinuteOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isMinuteOpen && (
            <div className="absolute top-full left-0 mt-1 w-20 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto">
              {minutes.map((m) => (
                <DropdownItem
                  key={m}
                  value={m}
                  isSelected={m === minute}
                  onClick={() => {
                    onTimeChange(hour, m, period);
                    setIsMinuteOpen(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Period Picker */}
        <div className="relative" ref={periodRef}>
          <button
            className="bg-white border-2 border-gray-200 rounded-xl px-4 py-3 w-20 h-16 text-center font-bold text-lg text-gray-800 shadow-sm hover:border-blue-300 focus:border-blue-500 focus:outline-none transition-all duration-200 flex items-center justify-between"
            onClick={() => {
              setIsPeriodOpen(!isPeriodOpen);
              setIsHourOpen(false);
              setIsMinuteOpen(false);
            }}
            data-testid="period-picker"
          >
            <span className="flex-1">{period}</span>
            <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${isPeriodOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isPeriodOpen && (
            <div className="absolute top-full left-0 mt-1 w-20 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
              {periods.map((p) => (
                <DropdownItem
                  key={p}
                  value={p}
                  isSelected={p === period}
                  onClick={() => {
                    onTimeChange(hour, minute, p);
                    setIsPeriodOpen(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}