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
  
  // Generate minutes (00, 15, 30, 45)
  const minutes = ['00', '15', '30', '45'];
  
  const periods = ['AM', 'PM'];

  const scrollToValue = useCallback((ref: React.RefObject<HTMLDivElement>, value: string, items: string[]) => {
    if (!ref.current) return;
    
    const index = items.indexOf(value);
    if (index === -1) return;
    
    const itemHeight = 40; // Height of each item
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

    const itemHeight = 40;
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
      <div className="relative flex-1 h-[180px] overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        
        {/* Center highlight */}
        <div className="absolute top-1/2 left-1 right-1 h-[40px] -translate-y-1/2 bg-sleep-blue-50 border border-sleep-blue-200 rounded-lg z-5 pointer-events-none" />
        
        {/* Scrollable content */}
        <div
          ref={ref}
          className="h-full overflow-y-auto scrollbar-hide px-1 py-[70px]"
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
                  "h-[40px] flex items-center justify-center text-lg font-semibold transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "text-sleep-blue-700 scale-105"
                    : "text-gray-400 hover:text-gray-600"
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
      "bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-sm mx-auto",
      className
    )}>
      <div className="text-center mb-4">
        <div className="text-lg font-bold text-gray-800">
          {hour}:{minute} {period}
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        {/* Hour Column */}
        <div className="flex flex-col items-center flex-1">
          <div className="text-xs font-medium text-gray-500 mb-2">Hour</div>
          {renderScrollColumn(hourRef, hours, hour, 'hour')}
        </div>
        
        {/* Separator */}
        <div className="text-2xl font-bold text-sleep-blue-600 pt-6">:</div>
        
        {/* Minute Column */}
        <div className="flex flex-col items-center flex-1">
          <div className="text-xs font-medium text-gray-500 mb-2">Min</div>
          {renderScrollColumn(minuteRef, minutes, minute, 'minute')}
        </div>
        
        {/* Period Column */}
        <div className="flex flex-col items-center flex-1">
          <div className="text-xs font-medium text-gray-500 mb-2">Period</div>
          {renderScrollColumn(periodRef, periods, period, 'period')}
        </div>
      </div>
    </div>
  );
}