import React, { useState, useRef, useEffect } from 'react';

interface WheelPickerProps {
  items: (string | number)[];
  selectedValue: string | number;
  onValueChange: (value: string | number) => void;
  label?: string;
}

const WheelPicker: React.FC<WheelPickerProps> = ({ items, selectedValue, onValueChange, label }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemHeight = 56; // Height of each item in pixels
  const selectedIndex = items.findIndex(item => item === selectedValue);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const scrollTop = scrollRef.current.scrollTop;
    const calculatedIndex = Math.round(scrollTop / itemHeight);
    const clampedIndex = Math.max(0, Math.min(calculatedIndex, items.length - 1));
    const selected = items[clampedIndex];

    if (selected !== undefined && selected !== selectedValue) {
      onValueChange(selected);
    }
  };

  useEffect(() => {
    if (scrollRef.current && !isScrolling) {
      const targetScrollTop = selectedIndex * itemHeight;
      scrollRef.current.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
    }
  }, [selectedValue, selectedIndex, isScrolling]);

  return (
    <div className="relative flex flex-col items-center">
      {label && (
        <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-2">
          {label}
        </span>
      )}
      <div
        className="relative h-56 w-full overflow-hidden rounded-xl bg-neutral-900/40"
        onClick={() => scrollRef.current?.focus()}
      >
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-neutral-900/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-900/80 to-transparent z-10 pointer-events-none" />

        {/* Center selection indicator */}
        <div className="absolute top-1/2 left-0 right-0 h-14 -translate-y-1/2 border-y border-rose-500/30 bg-rose-500/5 z-20 pointer-events-none" />

        {/* Scrollable items */}
        <div
          ref={scrollRef}
          className="h-full overflow-y-auto no-scrollbar scroll-smooth"
          onScroll={handleScroll}
          onMouseDown={() => setIsScrolling(true)}
          onMouseUp={() => setIsScrolling(false)}
          onMouseLeave={() => setIsScrolling(false)}
          onTouchStart={() => setIsScrolling(true)}
          onTouchEnd={() => setIsScrolling(false)}
          style={{
            paddingTop: `${(items.length * itemHeight) / 2 - itemHeight / 2}px`,
            paddingBottom: `${(items.length * itemHeight) / 2 - itemHeight / 2}px`
          }}
        >
          {items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className={`h-14 flex items-center justify-center text-lg font-medium cursor-pointer transition-all duration-200
                ${item === selectedValue
                  ? 'text-white scale-110'
                  : 'text-neutral-500 hover:text-neutral-300'}
              `}
              onClick={() => onValueChange(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WheelPicker;