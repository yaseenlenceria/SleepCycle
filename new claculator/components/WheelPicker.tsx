import React, { useRef, useEffect, useState } from 'react';
import { WHEEL_ITEM_HEIGHT } from '../constants';

interface WheelPickerProps<T> {
  items: T[];
  selectedValue: T;
  onValueChange: (value: T) => void;
  label?: string;
}

const WheelPicker = <T extends string | number>({
  items,
  selectedValue,
  onValueChange,
  label,
}: WheelPickerProps<T>) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Scroll to selected value on mount or when value changes externally
  useEffect(() => {
    if (scrollRef.current && !isScrolling) {
      const index = items.indexOf(selectedValue);
      if (index !== -1) {
        scrollRef.current.scrollTop = index * WHEEL_ITEM_HEIGHT;
      }
    }
  }, [selectedValue, items, isScrolling]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    setIsScrolling(true);
    
    // Clear timeout if it exists
    if ((window as any).scrollTimeout) clearTimeout((window as any).scrollTimeout);

    // Set a timeout to detect when scrolling stops
    (window as any).scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
      if (!scrollRef.current) return;

      const scrollTop = scrollRef.current.scrollTop;
      const index = Math.round(scrollTop / WHEEL_ITEM_HEIGHT);
      
      // Snap to nearest
      const validIndex = Math.max(0, Math.min(index, items.length - 1));
      
      if (items[validIndex] !== selectedValue) {
        onValueChange(items[validIndex]);
      }
      
      // Smooth snap visual
      scrollRef.current.scrollTo({
        top: validIndex * WHEEL_ITEM_HEIGHT,
        behavior: 'smooth'
      });

    }, 150);
  };

  return (
    <div className="relative h-[200px] w-full flex flex-col items-center justify-center overflow-hidden group">
      {/* Overlay Gradients for 3D effect - matched to dark neutral bg */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent z-10 pointer-events-none" />
      
      {/* Selection Highlight */}
      <div className="absolute top-1/2 left-0 w-full h-[48px] -translate-y-1/2 bg-rose-500/10 border-y border-rose-500/30 z-0 pointer-events-none transition-all duration-300 group-hover:bg-rose-500/15 group-hover:border-rose-500/50" />

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="h-full w-full overflow-y-auto snap-y snap-mandatory no-scrollbar py-[76px]"
        onScroll={handleScroll}
      >
        {items.map((item, index) => {
          const isSelected = item === selectedValue;
          return (
            <div
              key={`${item}-${index}`}
              className={`h-[48px] flex items-center justify-center snap-center transition-all duration-200 cursor-pointer select-none ${
                isSelected 
                  ? 'text-white text-3xl font-bold scale-110 drop-shadow-[0_0_8px_rgba(225,29,72,0.5)]' 
                  : 'text-neutral-600 text-lg scale-90 hover:text-neutral-400'
              }`}
              onClick={() => {
                onValueChange(item);
                if(scrollRef.current) {
                    scrollRef.current.scrollTo({
                        top: index * WHEEL_ITEM_HEIGHT,
                        behavior: 'smooth'
                    })
                }
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      {label && <div className="text-[10px] text-rose-500/80 uppercase tracking-widest font-bold mt-2 absolute bottom-2">{label}</div>}
    </div>
  );
};

export default WheelPicker;