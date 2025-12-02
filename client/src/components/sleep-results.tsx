import React, { useEffect, useState } from 'react';
import { CycleResult, CalculatorMode } from '@/types/calculator';
import { Moon, Sun, ArrowLeft, Loader2, Sparkles, AlarmClock, CheckCircle2 } from 'lucide-react';
import { getSleepInsight } from '@/services/sleep-service';

interface ResultsProps {
  results: CycleResult[];
  mode: CalculatorMode;
  onBack: () => void;
  targetTimeFormatted: string;
}

const SleepResults: React.FC<ResultsProps> = ({ results, mode, onBack, targetTimeFormatted }) => {
  const [insight, setInsight] = useState<string>("");
  const [loadingInsight, setLoadingInsight] = useState(false);

  useEffect(() => {
    const fetchInsight = async () => {
      setLoadingInsight(true);
      const text = await getSleepInsight(
        targetTimeFormatted,
        mode === CalculatorMode.WAKE_UP ? 'WAKE' : 'SLEEP'
      );
      setInsight(text);
      setLoadingInsight(false);
    };
    fetchInsight();
  }, [mode, targetTimeFormatted]);

  const bestResults = results.filter(r => r.isSuggested);
  const otherResults = results.filter(r => !r.isSuggested).reverse(); // Show closest times first for others

  return (
    <div className="animate-fade-in w-full max-w-2xl mx-auto pb-20">

      {/* Navigation */}
      <button
        onClick={onBack}
        className="group flex items-center text-neutral-400 hover:text-white transition-colors mb-8 px-4 py-2 rounded-full hover:bg-white/5"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to calculator
      </button>

      {/* Header Section */}
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
          {mode === CalculatorMode.WAKE_UP
            ? "Your Ideal Bedtime"
            : "Your Optimal Wake Up"}
        </h2>

        <p className="text-neutral-400 max-w-md mx-auto leading-relaxed">
          {mode === CalculatorMode.WAKE_UP
            ? `To wake up refreshed at ${targetTimeFormatted}, aim to fall asleep at one of these times to complete full sleep cycles.`
            : `If you sleep now, set your alarm for one of these times to rise between cycles.`}
        </p>
      </div>

      {/* AI Insight Card */}
      <div className="mb-10 mx-4 md:mx-0 glass-panel border-l-4 border-l-rose-500 p-5 rounded-r-xl flex items-start gap-4 shadow-lg shadow-rose-900/10">
        <div className="bg-rose-500/20 p-2 rounded-full shrink-0">
            <Sparkles className="w-5 h-5 text-rose-400" />
        </div>
        <div>
           <h4 className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-1">Cycle Insight</h4>
           {loadingInsight ? (
             <div className="flex items-center gap-2 text-neutral-400 text-sm py-1">
               <Loader2 className="w-3 h-3 animate-spin" /> Analyzing your rhythm...
             </div>
           ) : (
             <p className="text-sm text-neutral-200 leading-relaxed font-medium">
               {insight}
             </p>
           )}
        </div>
      </div>

      {/* Primary Suggestion - "The Golden Window" */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-4 px-4 md:px-0">
             <div className="h-px bg-neutral-800 flex-1"></div>
             <span className="text-xs uppercase tracking-widest text-rose-500 font-bold">The Golden Window</span>
             <div className="h-px bg-neutral-800 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
            {bestResults.map((result, idx) => (
                <div
                    key={`best-${idx}`}
                    className="relative group overflow-hidden bg-gradient-to-br from-rose-900/80 to-rose-950/80 border border-rose-500/30 rounded-2xl p-6 text-center shadow-xl shadow-rose-900/20 hover:scale-[1.02] transition-transform duration-300"
                >
                    <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Moon className="w-12 h-12 text-white" />
                    </div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-1.5 bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                            <CheckCircle2 className="w-3 h-3" /> Best Choice
                        </div>
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                            {result.time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                        </div>
                        <div className="text-rose-200/80 text-sm font-medium">
                            {result.cycles} Sleep Cycles ({result.cycles * 1.5} Hours)
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Secondary Suggestions */}
        <div className="pt-8">
            <div className="flex items-center gap-4 mb-6 px-4 md:px-0">
                <div className="h-px bg-neutral-800 flex-1"></div>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Other Good Options</span>
                <div className="h-px bg-neutral-800 flex-1"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-2">
                {otherResults.map((result, idx) => (
                    <div
                        key={`other-${idx}`}
                        className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4 text-center hover:bg-neutral-800 transition-colors"
                    >
                        <div className="text-xl font-bold text-neutral-300 mb-1">
                            {result.time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                        </div>
                        <div className="text-neutral-500 text-xs">
                            {result.cycles} Cycles
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-12 text-center px-6">
         <p className="text-xs text-neutral-600 leading-relaxed max-w-lg mx-auto">
           <span className="font-bold text-rose-900/80 block mb-1">WHY THIS WORKS</span>
           A complete sleep cycle lasts about 90 minutes. Waking up in the middle of a cycle can leave you feeling groggy (sleep inertia). Waking up between cycles helps you start the day feeling alert and refreshed.
         </p>
      </div>
    </div>
  );
};

export default SleepResults;