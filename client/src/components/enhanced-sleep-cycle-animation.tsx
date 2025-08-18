import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Moon, Sun, Brain, Heart, Zap, Play, Pause, RotateCcw } from 'lucide-react';

interface EnhancedSleepCycleAnimationProps {
  bedtime: string;
  wakeTime: string;
  cycles: number;
  isAnimating?: boolean;
}

const SLEEP_STAGES = [
  {
    name: 'N1 Light Sleep',
    duration: 10, // minutes
    color: '#E0F7FA',
    darkColor: '#0097A7',
    icon: <Moon size={16} className="text-cyan-600" />,
    description: 'Transition to sleep, easy to wake',
    benefits: ['Muscle relaxation begins', 'Brain waves slow down']
  },
  {
    name: 'N2 Light Sleep',
    duration: 45,
    color: '#E3F2FD',
    darkColor: '#1976D2',
    icon: <Brain size={16} className="text-blue-600" />,
    description: 'Deeper relaxation, sleep spindles',
    benefits: ['Memory processing starts', 'Heart rate decreases']
  },
  {
    name: 'N3 Deep Sleep',
    duration: 25,
    color: '#1A237E',
    darkColor: '#0D47A1',
    icon: <Heart size={16} className="text-white" />,
    description: 'Restorative deep sleep phase',
    benefits: ['Physical recovery', 'Growth hormone release', 'Immune system boost']
  },
  {
    name: 'REM Sleep',
    duration: 10,
    color: '#7B1FA2',
    darkColor: '#4A148C',
    icon: <Zap size={16} className="text-white" />,
    description: 'Dreams and brain consolidation',
    benefits: ['Memory consolidation', 'Emotional processing', 'Creativity enhancement']
  }
];

export function EnhancedSleepCycleAnimation({ 
  bedtime, 
  wakeTime, 
  cycles, 
  isAnimating = true 
}: EnhancedSleepCycleAnimationProps) {
  const [currentCycle, setCurrentCycle] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(isAnimating);
  const [animationSpeed, setAnimationSpeed] = useState(1500);

  // Reset animation
  const resetAnimation = () => {
    setCurrentCycle(0);
    setCurrentStage(0);
  };

  // Animation loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStage(prev => {
        if (prev >= SLEEP_STAGES.length - 1) {
          setCurrentCycle(prevCycle => {
            if (prevCycle >= cycles - 1) {
              return 0;
            }
            return prevCycle + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [isPlaying, cycles, animationSpeed]);

  const totalDuration = cycles * 90;
  const hours = Math.floor(totalDuration / 60);
  const minutes = totalDuration % 60;

  const getCurrentStageInfo = () => SLEEP_STAGES[currentStage];
  const getProgressPercentage = () => ((currentCycle * 4 + currentStage + 1) / (cycles * 4)) * 100;

  return (
    <div className="space-y-6">
      {/* Main Visualization Card */}
      <Card className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white border-0 shadow-2xl overflow-hidden">
        <CardContent className="p-0">
          {/* Header */}
          <div className="p-6 bg-black/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Sleep Cycle Journey
                </h3>
                <p className="text-blue-200 text-sm">
                  {bedtime} → {wakeTime} • {hours}h {minutes}m • {cycles} cycles
                </p>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  size="sm"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </Button>
                <Button
                  onClick={resetAnimation}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  size="sm"
                >
                  <RotateCcw size={16} />
                </Button>
              </div>
            </div>

            {/* Speed Control */}
            <div className="flex items-center space-x-3 text-sm">
              <span>Speed:</span>
              <Button
                onClick={() => setAnimationSpeed(2500)}
                variant={animationSpeed === 2500 ? "default" : "outline"}
                size="sm"
                className="text-xs px-2 py-1"
              >
                Slow
              </Button>
              <Button
                onClick={() => setAnimationSpeed(1500)}
                variant={animationSpeed === 1500 ? "default" : "outline"}
                size="sm"
                className="text-xs px-2 py-1"
              >
                Normal
              </Button>
              <Button
                onClick={() => setAnimationSpeed(800)}
                variant={animationSpeed === 800 ? "default" : "outline"}
                size="sm"
                className="text-xs px-2 py-1"
              >
                Fast
              </Button>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="px-6 py-4 bg-black/10">
            <div className="relative h-6 bg-white/10 rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 rounded-full transition-all duration-1000 ease-in-out"
                style={{ width: `${getProgressPercentage()}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                Cycle {currentCycle + 1} of {cycles} • {getCurrentStageInfo().name}
              </div>
            </div>
          </div>

          {/* Main Animation Area */}
          <div className="p-6">
            {/* Cycles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {Array.from({ length: cycles }, (_, cycleIndex) => (
                <div
                  key={cycleIndex}
                  className={`relative p-4 rounded-xl transition-all duration-500 ${
                    cycleIndex === currentCycle
                      ? 'bg-white/20 border-2 border-white/50 shadow-xl transform scale-105'
                      : cycleIndex < currentCycle
                      ? 'bg-green-600/30 border border-green-400/50'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  {/* Cycle Header */}
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      className={`${
                        cycleIndex === currentCycle 
                          ? 'bg-yellow-500 text-black font-bold' 
                          : cycleIndex < currentCycle
                          ? 'bg-green-500 text-white'
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      {cycleIndex < currentCycle ? '✓ ' : ''}Cycle {cycleIndex + 1}
                    </Badge>
                    <span className="text-sm text-blue-200">90 min</span>
                  </div>

                  {/* Sleep Stages */}
                  <div className="space-y-2">
                    {SLEEP_STAGES.map((stage, stageIndex) => {
                      const isActive = cycleIndex === currentCycle && stageIndex === currentStage;
                      const isComplete = cycleIndex < currentCycle || (cycleIndex === currentCycle && stageIndex < currentStage);
                      
                      return (
                        <div
                          key={stageIndex}
                          className={`relative h-4 rounded-lg overflow-hidden transition-all duration-500 ${
                            isActive
                              ? 'transform scale-110 shadow-lg'
                              : isComplete
                              ? 'opacity-80'
                              : 'opacity-40'
                          }`}
                          style={{ 
                            backgroundColor: isActive ? stage.darkColor : stage.color 
                          }}
                        >
                          {/* Animated pulse for active stage */}
                          {isActive && (
                            <div className="absolute inset-0 bg-white/30 animate-pulse" />
                          )}
                          
                          <div className="absolute inset-0 flex items-center justify-between px-2">
                            <div className="flex items-center space-x-1">
                              {stage.icon}
                              <span className={`text-xs font-medium ${
                                isActive ? 'text-white' : 'text-gray-700'
                              }`}>
                                {stage.name}
                              </span>
                            </div>
                            <span className={`text-xs ${
                              isActive ? 'text-white' : 'text-gray-600'
                            }`}>
                              {stage.duration}m
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Stage Details */}
            <Card className="bg-black/30 border-white/10">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Stage Info */}
                  <div>
                    <h4 className="text-xl font-bold mb-3 flex items-center">
                      {getCurrentStageInfo().icon}
                      <span className="ml-2">{getCurrentStageInfo().name}</span>
                    </h4>
                    <p className="text-blue-200 mb-4">{getCurrentStageInfo().description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm text-gray-300">What's happening:</h5>
                      {getCurrentStageInfo().benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-blue-200">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sleep Stats */}
                  <div className="space-y-4">
                    <h5 className="font-semibold text-gray-300">Sleep Analytics</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <Brain className="mx-auto mb-1 text-blue-400" size={20} />
                        <div className="text-xs text-blue-200">Memory</div>
                        <div className="text-xs text-white/60">Processing</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <Heart className="mx-auto mb-1 text-red-400" size={20} />
                        <div className="text-xs text-red-200">Physical</div>
                        <div className="text-xs text-white/60">Recovery</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <Zap className="mx-auto mb-1 text-yellow-400" size={20} />
                        <div className="text-xs text-yellow-200">Energy</div>
                        <div className="text-xs text-white/60">Restoration</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <Sun className="mx-auto mb-1 text-orange-400" size={20} />
                        <div className="text-xs text-orange-200">Mood</div>
                        <div className="text-xs text-white/60">Balance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}