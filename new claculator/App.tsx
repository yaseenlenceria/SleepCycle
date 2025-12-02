import React, { useState } from 'react';
import TimeSelector from './components/TimeSelector';
import Results from './components/Results';
import { TimeState, CalculatorMode, CycleResult } from './types';
import { FALL_ASLEEP_MINUTES, SLEEP_CYCLE_MINUTES } from './constants';
import { Moon, Sun, ArrowRight, BedDouble, Info } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<CalculatorMode>(CalculatorMode.WAKE_UP);
  const [timeState, setTimeState] = useState<TimeState>({ hour: 7, minute: 0, meridiem: 'AM' });
  const [results, setResults] = useState<CycleResult[] | null>(null);

  const calculateTimes = () => {
    const resultsArray: CycleResult[] = [];
    const baseDate = new Date();
    baseDate.setSeconds(0);
    baseDate.setMilliseconds(0);

    // If calculating from "Now", use current time. Else use selected time.
    if (mode === CalculatorMode.BED_NOW) {
      const now = new Date();
      // Add fall asleep time first
      now.setMinutes(now.getMinutes() + FALL_ASLEEP_MINUTES);
      
      // Calculate NEXT 6 wake up times
      for (let i = 1; i <= 6; i++) {
        const cycleTime = new Date(now.getTime() + (i * SLEEP_CYCLE_MINUTES * 60000));
        resultsArray.push({
          time: cycleTime,
          cycles: i,
          label: `${i} Cycles`,
          isSuggested: i >= 5 && i <= 6
        });
      }
    } else {
      // User wants to wake up at specific time. We calculate backwards for bedtime.
      let targetHour = timeState.hour;
      if (timeState.meridiem === 'PM' && targetHour !== 12) targetHour += 12;
      if (timeState.meridiem === 'AM' && targetHour === 12) targetHour = 0;

      baseDate.setHours(targetHour);
      baseDate.setMinutes(timeState.minute);
      
      // If the target time has already passed today, assume tomorrow
      const now = new Date();
      if (baseDate.getTime() < now.getTime()) {
          baseDate.setDate(baseDate.getDate() + 1);
      }

      // We subtract: Fall Asleep Time + (Cycles * 90)
      for (let i = 6; i >= 1; i--) {
        const sleepTime = new Date(baseDate.getTime() - (i * SLEEP_CYCLE_MINUTES * 60000) - (FALL_ASLEEP_MINUTES * 60000));
        resultsArray.push({
          time: sleepTime,
          cycles: i,
          label: `${i} Cycles`,
          isSuggested: i >= 5 && i <= 6
        });
      }
      resultsArray.reverse();
    }

    setResults(resultsArray);
  };

  const formattedTargetTime = () => {
    if (mode === CalculatorMode.BED_NOW) return "Now";
    return `${timeState.hour}:${timeState.minute.toString().padStart(2, '0')} ${timeState.meridiem}`;
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-rose-900/10 blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-neutral-900/80 blur-[150px]" />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-rose-800/5 blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-4xl px-4 py-8 md:py-12 flex flex-col items-center min-h-screen justify-center">
        
        {/* Persistent Header Logo */}
        <div className="absolute top-6 left-6 md:left-8 flex items-center gap-2 text-rose-500 font-bold tracking-wider uppercase text-xs z-20">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
            SleepCycle.io
        </div>

        {/* Content Area */}
        <div className="w-full transition-all duration-500 ease-in-out">
          {results ? (
            <Results 
              results={results} 
              mode={mode} 
              onBack={() => setResults(null)}
              targetTimeFormatted={formattedTargetTime()}
            />
          ) : (
            <div className="space-y-12 animate-fade-in-up w-full max-w-2xl mx-auto">
              
              {/* Intro Text */}
              <div className="text-center space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 tracking-tighter">
                  Sleep Better.
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Calculate your perfect sleep window based on natural <span className="text-rose-400 font-semibold">90-minute cycles</span>.
                </p>
              </div>

              {/* Card Container */}
              <div className="glass-panel rounded-[2.5rem] p-2 md:p-3 border border-white/5 shadow-2xl shadow-black/50">
                
                {/* Mode Tabs */}
                <div className="grid grid-cols-2 p-1 bg-black/40 rounded-[2rem] mb-8 relative">
                    <button
                        onClick={() => setMode(CalculatorMode.WAKE_UP)}
                        className={`relative z-10 py-4 rounded-[1.8rem] text-sm md:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2
                        ${mode === CalculatorMode.WAKE_UP 
                            ? 'text-white shadow-lg' 
                            : 'text-neutral-500 hover:text-neutral-300'}`}
                    >
                        <Sun className={`w-4 h-4 ${mode === CalculatorMode.WAKE_UP ? 'text-rose-400' : ''}`} />
                        Wake Up At
                    </button>
                    <button
                        onClick={() => setMode(CalculatorMode.BED_NOW)}
                        className={`relative z-10 py-4 rounded-[1.8rem] text-sm md:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2
                        ${mode === CalculatorMode.BED_NOW 
                            ? 'text-white shadow-lg' 
                            : 'text-neutral-500 hover:text-neutral-300'}`}
                    >
                        <BedDouble className={`w-4 h-4 ${mode === CalculatorMode.BED_NOW ? 'text-rose-400' : ''}`} />
                        Sleep Now
                    </button>
                    
                    {/* Sliding Background Pill */}
                    <div 
                        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-neutral-800/80 rounded-[1.7rem] transition-transform duration-300 ease-out border border-white/5
                        ${mode === CalculatorMode.WAKE_UP ? 'translate-x-1' : 'translate-x-[calc(100%+4px)]'}`}
                    />
                </div>

                {/* Input Area */}
                <div className="py-4 md:py-8 px-4">
                    {mode === CalculatorMode.WAKE_UP ? (
                        <div className="space-y-6">
                            <div className="text-center">
                                <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">I want to wake up at</span>
                            </div>
                            <TimeSelector 
                                value={timeState} 
                                onChange={setTimeState} 
                            />
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-24 h-24 bg-gradient-to-br from-rose-500/20 to-transparent rounded-full flex items-center justify-center mx-auto mb-6 text-rose-400 border border-rose-500/20 shadow-[0_0_30px_rgba(225,29,72,0.1)]">
                                <Moon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Going to bed now?</h3>
                            <p className="text-neutral-400 max-w-xs mx-auto text-sm leading-relaxed">
                                We'll add 15 minutes for falling asleep and calculate your optimal wake-up times.
                            </p>
                        </div>
                    )}
                </div>

                {/* Action Button */}
                <div className="p-2">
                    <button
                        onClick={calculateTimes}
                        className="w-full group relative flex items-center justify-center py-5 md:py-6 bg-rose-600 hover:bg-rose-500 text-white rounded-[2rem] transition-all duration-300 shadow-lg shadow-rose-900/40 hover:shadow-rose-600/20 hover:-translate-y-1"
                    >
                        <span className="text-lg font-bold tracking-wide mr-2">
                            Calculate {mode === CalculatorMode.WAKE_UP ? 'Bedtime' : 'Wake Up'}
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

              </div>
              
              {/* Bottom Tip */}
              <div className="flex items-center justify-center gap-2 text-xs text-neutral-600 opacity-60">
                 <Info className="w-3 h-3" />
                 <span>Calculations assume 15 min to fall asleep</span>
              </div>

            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;