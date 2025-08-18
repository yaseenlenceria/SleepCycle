import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Moon, Sun, Brain, Heart, Zap, Play, Pause } from 'lucide-react';

interface SleepCycleVisualizationProps {
  bedtime: string;
  wakeTime: string;
  cycles: number;
  isAnimating?: boolean;
}

interface SleepStage {
  name: string;
  duration: number; // in minutes
  color: string;
  icon: React.ReactNode;
  description: string;
}

const sleepStages: SleepStage[] = [
  {
    name: 'Light Sleep',
    duration: 15,
    color: '#E0F2FE', // light blue
    icon: <Moon size={16} className="text-blue-500" />,
    description: 'Falling asleep, muscle relaxation begins'
  },
  {
    name: 'Deep Sleep',
    duration: 45,
    color: '#1E40AF', // dark blue
    icon: <Brain size={16} className="text-white" />,
    description: 'Physical restoration, memory consolidation'
  },
  {
    name: 'REM Sleep',
    duration: 30,
    color: '#7C3AED', // purple
    icon: <Zap size={16} className="text-white" />,
    description: 'Dreams, brain processing, creativity boost'
  }
];

export function SleepCycleVisualization({ 
  bedtime, 
  wakeTime, 
  cycles, 
  isAnimating = true 
}: SleepCycleVisualizationProps) {
  const [currentCycle, setCurrentCycle] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(isAnimating);

  // Calculate time progression through cycles
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStage(prev => {
        if (prev >= 2) {
          // Move to next cycle
          setCurrentCycle(prevCycle => {
            if (prevCycle >= cycles - 1) {
              return 0; // Reset to beginning
            }
            return prevCycle + 1;
          });
          return 0; // Reset to first stage
        }
        return prev + 1;
      });
    }, 1500); // Each stage lasts 1.5 seconds in animation

    return () => clearInterval(interval);
  }, [isPlaying, cycles]);

  const totalDuration = cycles * 90; // Total sleep in minutes
  const hours = Math.floor(totalDuration / 60);
  const minutes = totalDuration % 60;

  return (
    <Card className="bg-gradient-to-br from-slate-900 to-blue-900 text-white border-0 shadow-2xl">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Sleep Cycle Journey</h3>
            <p className="text-blue-200">
              {bedtime} → {wakeTime} ({hours}h {minutes}m)
            </p>
          </div>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
            size="sm"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </Button>
        </div>

        {/* Cycles Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {Array.from({ length: cycles }, (_, cycleIndex) => (
            <div
              key={cycleIndex}
              className={`relative p-4 rounded-xl transition-all duration-500 ${
                cycleIndex === currentCycle
                  ? 'bg-white/20 border-2 border-white/40 shadow-lg scale-105'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {/* Cycle Header */}
              <div className="flex items-center justify-between mb-3">
                <Badge 
                  className={`${
                    cycleIndex === currentCycle 
                      ? 'bg-yellow-500 text-black' 
                      : 'bg-white/10 text-white'
                  }`}
                >
                  Cycle {cycleIndex + 1}
                </Badge>
                <span className="text-sm text-blue-200">90 min</span>
              </div>

              {/* Stages Progress Bar */}
              <div className="space-y-2">
                {sleepStages.map((stage, stageIndex) => (
                  <div
                    key={stageIndex}
                    className={`relative h-3 rounded-full overflow-hidden transition-all duration-300 ${
                      cycleIndex === currentCycle && stageIndex <= currentStage
                        ? 'opacity-100 transform scale-105'
                        : cycleIndex < currentCycle
                        ? 'opacity-80'
                        : 'opacity-30'
                    }`}
                    style={{ backgroundColor: stage.color }}
                  >
                    {/* Animation wave effect for current stage */}
                    {cycleIndex === currentCycle && stageIndex === currentStage && (
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    )}
                    
                    {/* Stage label */}
                    <div className="absolute inset-0 flex items-center justify-between px-2">
                      <div className="flex items-center space-x-1">
                        {stage.icon}
                        <span className="text-xs font-medium text-white">
                          {stage.name}
                        </span>
                      </div>
                      <span className="text-xs text-white/80">
                        {stage.duration}m
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Stage Details */}
              {cycleIndex === currentCycle && (
                <div className="mt-3 p-2 bg-black/20 rounded-lg">
                  <p className="text-xs text-blue-100">
                    {sleepStages[currentStage]?.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="bg-black/30 rounded-xl p-4">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Heart className="mr-2 text-red-400" size={20} />
            Sleep Timeline
          </h4>
          
          {/* Progress bar */}
          <div className="relative h-4 bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 rounded-full transition-all duration-1000 ease-in-out"
              style={{
                width: `${((currentCycle * 3 + currentStage + 1) / (cycles * 3)) * 100}%`
              }}
            />
            
            {/* Time markers */}
            <div className="absolute inset-0 flex items-center justify-between px-2 text-xs text-white/80">
              <span>{bedtime}</span>
              <span>Sleep Progress</span>
              <span>{wakeTime}</span>
            </div>
          </div>

          {/* Sleep Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center p-2 bg-white/5 rounded-lg">
              <Brain className="mx-auto mb-1 text-blue-400" size={20} />
              <div className="text-xs text-blue-200">Memory</div>
              <div className="text-xs text-white/60">Consolidation</div>
            </div>
            <div className="text-center p-2 bg-white/5 rounded-lg">
              <Heart className="mx-auto mb-1 text-red-400" size={20} />
              <div className="text-xs text-red-200">Physical</div>
              <div className="text-xs text-white/60">Recovery</div>
            </div>
            <div className="text-center p-2 bg-white/5 rounded-lg">
              <Zap className="mx-auto mb-1 text-yellow-400" size={20} />
              <div className="text-xs text-yellow-200">Energy</div>
              <div className="text-xs text-white/60">Restoration</div>
            </div>
            <div className="text-center p-2 bg-white/5 rounded-lg">
              <Sun className="mx-auto mb-1 text-orange-400" size={20} />
              <div className="text-xs text-orange-200">Mood</div>
              <div className="text-xs text-white/60">Enhancement</div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 p-3 bg-white/5 rounded-lg">
          <h5 className="text-sm font-semibold mb-2">Sleep Stages</h5>
          <div className="flex flex-wrap gap-3">
            {sleepStages.map((stage, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: stage.color }}
                />
                <span className="text-xs text-white/80">{stage.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}