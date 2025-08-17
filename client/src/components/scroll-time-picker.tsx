import { useEffect, useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ScrollTimePickerProps {
  hour: string;
  minute: string;
  period: string;
  onTimeChange: (hour: string, minute: string, period: string) => void;
  className?: string;
}

export function ScrollTimePicker({ hour, minute, period, onTimeChange, className }: ScrollTimePickerProps) {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const periodRef = useRef<HTMLDivElement>(null);

  const [isScrolling, setIsScrolling] = useState({ hour: false, minute: false, period: false });

  // Generate hours (1-12)
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  
  // Generate minutes (00, 05, 10, ..., 55)
  const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, '0'));
  
  const periods = ['AM', 'PM'];

  const scrollToValue = useCallback((ref: React.RefObject<HTMLDivElement>, value: string, items: string[]) => {
    if (!ref.current) return;
    
    const index = items.indexOf(value);
    if (index === -1) return;
    
    const itemHeight = 60; // Height of each item
    const containerHeight = ref.current.clientHeight;
    const scrollTop = index * itemHeight - (containerHeight / 2) + (itemHeight / 2);
    
    ref.current.scrollTo({
      top: scrollTop,
      behavior: 'smooth'
    });
  }, []);

  // Initialize scroll positions
  useEffect(() => {
    setTimeout(() => {
      scrollToValue(hourRef, hour, hours);
      scrollToValue(minuteRef, minute, minutes);
      scrollToValue(periodRef, period, periods);
    }, 100);
  }, [hour, minute, period, scrollToValue, hours, minutes, periods]);

  const handleScroll = useCallback((
    ref: React.RefObject<HTMLDivElement>,
    items: string[],
    type: 'hour' | 'minute' | 'period'
  ) => {
    if (!ref.current) return;

    const itemHeight = 60;
    const scrollTop = ref.current.scrollTop;
    const containerHeight = ref.current.clientHeight;
    const centerOffset = containerHeight / 2;
    
    // Calculate which item is closest to center
    const index = Math.round((scrollTop + centerOffset - itemHeight / 2) / itemHeight);
    const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
    
    const newValue = items[clampedIndex];
    
    // Update the time
    if (type === 'hour' && newValue !== hour) {
      onTimeChange(newValue, minute, period);
    } else if (type === 'minute' && newValue !== minute) {
      onTimeChange(hour, newValue, period);
    } else if (type === 'period' && newValue !== period) {
      onTimeChange(hour, minute, newValue);
    }
  }, [hour, minute, period, onTimeChange]);

  const createScrollHandler = (type: 'hour' | 'minute' | 'period') => {
    let timeoutId: NodeJS.Timeout;
    
    return () => {
      setIsScrolling(prev => ({ ...prev, [type]: true }));
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(prev => ({ ...prev, [type]: false }));
        
        const ref = type === 'hour' ? hourRef : type === 'minute' ? minuteRef : periodRef;
        const items = type === 'hour' ? hours : type === 'minute' ? minutes : periods;
        
        handleScroll(ref, items, type);
      }, 150);
    };
  };

  const renderScrollColumn = (
    ref: React.RefObject<HTMLDivElement>,
    items: string[],
    currentValue: string,
    type: 'hour' | 'minute' | 'period'
  ) => {
    const isCurrentlyScrolling = isScrolling[type];
    
    return (
      <div className="relative flex-1 h-[240px] overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        {/* Center highlight */}
        <div className="absolute top-1/2 left-0 right-0 h-[60px] -translate-y-1/2 bg-gradient-to-r from-sleep-blue-50 to-sleep-purple-50 border-2 border-sleep-blue-200 rounded-xl z-5 pointer-events-none shadow-lg" />
        
        {/* Scrollable content */}
        <div
          ref={ref}
          className="h-full overflow-y-auto scrollbar-hide px-2 py-[90px]"
          onScroll={createScrollHandler(type)}
          style={{
            scrollSnapType: 'y mandatory',
            scrollBehavior: isCurrentlyScrolling ? 'auto' : 'smooth'
          }}
        >
          {items.map((item, index) => {
            const isSelected = item === currentValue;
            return (
              <div
                key={item}
                className={cn(
                  "h-[60px] flex items-center justify-center text-2xl font-bold transition-all duration-300 cursor-pointer select-none",
                  isSelected
                    ? "text-sleep-blue-700 scale-110 drop-shadow-lg"
                    : "text-gray-400 hover:text-gray-600 scale-90"
                )}
                style={{ scrollSnapAlign: 'center' }}
                onClick={() => {
                  if (type === 'hour') onTimeChange(item, minute, period);
                  else if (type === 'minute') onTimeChange(hour, item, period);
                  else onTimeChange(hour, minute, item);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={cn(
      "bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 max-w-md mx-auto",
      "bg-gradient-to-br from-white via-gray-50 to-gray-100",
      className
    )}>
      <div className="text-center mb-6">
        <div className="text-sm font-medium text-gray-600 mb-2">Select Time</div>
        <div className="text-lg font-bold text-gray-800">
          {hour}:{minute} {period}
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Hour Column */}
        <div className="flex flex-col items-center">
          <div className="text-xs font-medium text-gray-500 mb-2">Hour</div>
          {renderScrollColumn(hourRef, hours, hour, 'hour')}
        </div>
        
        {/* Separator */}
        <div className="text-3xl font-bold text-sleep-blue-600 pt-8">:</div>
        
        {/* Minute Column */}
        <div className="flex flex-col items-center">
          <div className="text-xs font-medium text-gray-500 mb-2">Min</div>
          {renderScrollColumn(minuteRef, minutes, minute, 'minute')}
        </div>
        
        {/* Period Column */}
        <div className="flex flex-col items-center">
          <div className="text-xs font-medium text-gray-500 mb-2">Period</div>
          {renderScrollColumn(periodRef, periods, period, 'period')}
        </div>
      </div>
      
      {/* Visual indicators */}
      <div className="flex justify-center mt-4 space-x-1">
        <div className="w-2 h-2 rounded-full bg-sleep-blue-400 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-sleep-purple-400 animate-pulse delay-100" />
        <div className="w-2 h-2 rounded-full bg-sleep-blue-400 animate-pulse delay-200" />
      </div>
    </div>
  );
}