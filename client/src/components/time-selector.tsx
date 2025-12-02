import React from 'react';
import WheelPicker from './wheel-picker';
import { HOURS, MINUTES, MERIDIEMS } from '@/constants/calculator';
import { TimeState, Meridiem } from '@/types/calculator';

interface TimeSelectorProps {
  value: TimeState;
  onChange: (value: TimeState) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      {/* Decorative glow behind the selector */}
      <div className="absolute inset-0 bg-rose-600/5 blur-2xl rounded-3xl transform scale-90"></div>

      <div className="relative flex justify-center items-center gap-0 md:gap-4 glass-panel rounded-3xl p-6 shadow-2xl max-w-lg mx-auto border border-white/10">
        <div className="w-24">
          <WheelPicker
            items={HOURS}
            selectedValue={value.hour}
            onValueChange={(h) => onChange({ ...value, hour: h })}
            label="Hour"
          />
        </div>
        <div className="text-4xl font-light text-rose-500/50 pb-4 animate-pulse">:</div>
        <div className="w-24">
          <WheelPicker
            items={MINUTES}
            selectedValue={value.minute.toString().padStart(2, '0')}
            onValueChange={(m) => onChange({ ...value, minute: parseInt(m as string) })}
            label="Min"
          />
        </div>
        <div className="w-24 border-l border-white/10 pl-2 md:pl-4 ml-2">
          <WheelPicker
            items={MERIDIEMS}
            selectedValue={value.meridiem}
            onValueChange={(m) => onChange({ ...value, meridiem: m as Meridiem })}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeSelector;