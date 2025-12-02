import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Clock, MoonStar } from 'lucide-react';

export function SimpleSleepCalculator() {
  const [calculationType, setCalculationType] = useState<'bedtime' | 'wakeup'>('bedtime');
  const [hour, setHour] = useState('7');
  const [minute, setMinute] = useState('00');
  const [period, setPeriod] = useState('AM');
  const [results, setResults] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const displayHour = hours > 12 ? hours - 12 : hours || 12;
      const displayPeriod = hours >= 12 ? 'PM' : 'AM';
      setCurrentTime(`${displayHour}:${minutes} ${displayPeriod}`);
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const calculateSleepTimes = () => {
    const selectedHour = parseInt(hour);
    const adjustedHour = period === 'PM' && selectedHour !== 12 ? selectedHour + 12 :
                       period === 'AM' && selectedHour === 12 ? 0 : selectedHour;
    const selectedMinutes = adjustedHour * 60 + parseInt(minute);

    const sleepTimes: string[] = [];

    if (calculationType === 'bedtime') {
      // Calculate bedtimes based on desired wake time
      for (let cycles = 4; cycles <= 6; cycles++) {
        const bedtimeMinutes = selectedMinutes - (cycles * 90) - 15; // 15 min to fall asleep
        const adjustedBedtime = ((bedtimeMinutes % (24 * 60)) + (24 * 60)) % (24 * 60);
        const bedtimeHour = Math.floor(adjustedBedtime / 60);
        const bedtimeMin = adjustedBedtime % 60;
        const displayHour = bedtimeHour === 0 ? 12 : bedtimeHour > 12 ? bedtimeHour - 12 : bedtimeHour;
        const displayPeriod = bedtimeHour >= 12 ? 'PM' : 'AM';
        const displayMin = bedtimeMin.toString().padStart(2, '0');

        sleepTimes.push(`${displayHour}:${displayMin} ${displayPeriod} (${cycles} cycles)`);
      }
    } else {
      // Calculate wake times based on desired bedtime
      for (let cycles = 4; cycles <= 6; cycles++) {
        const wakeTimeMinutes = selectedMinutes + (cycles * 90) + 15; // 15 min to fall asleep
        const adjustedWakeTime = ((wakeTimeMinutes % (24 * 60)) + (24 * 60)) % (24 * 60);
        const wakeHour = Math.floor(adjustedWakeTime / 60);
        const wakeMin = adjustedWakeTime % 60;
        const displayHour = wakeHour === 0 ? 12 : wakeHour > 12 ? wakeHour - 12 : wakeHour;
        const displayPeriod = wakeHour >= 12 ? 'PM' : 'AM';
        const displayMin = wakeMin.toString().padStart(2, '0');

        sleepTimes.push(`${displayHour}:${displayMin} ${displayPeriod} (${cycles} cycles)`);
      }
    }

    setResults(sleepTimes);
  };

  const sleepNow = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const totalMinutes = currentHour * 60 + currentMinutes;

    const wakeTimes: string[] = [];

    for (let cycles = 4; cycles <= 6; cycles++) {
      const wakeTimeMinutes = totalMinutes + (cycles * 90);
      const adjustedWakeTime = ((wakeTimeMinutes % (24 * 60)) + (24 * 60)) % (24 * 60);
      const wakeHour = Math.floor(adjustedWakeTime / 60);
      const wakeMin = adjustedWakeTime % 60;
      const displayHour = wakeHour === 0 ? 12 : wakeHour > 12 ? wakeHour - 12 : wakeHour;
      const displayPeriod = wakeHour >= 12 ? 'PM' : 'AM';
      const displayMin = wakeMin.toString().padStart(2, '0');

      wakeTimes.push(`${displayHour}:${displayMin} ${displayPeriod} (${cycles} cycles)`);
    }

    setResults(wakeTimes);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-none shadow-lg">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <MoonStar className="text-blue-600" size={32} />
            Sleep Cycle Calculator
          </CardTitle>
          <p className="text-gray-600 mt-2">Optimize your sleep with 90-minute sleep cycles</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Calculation Type Selector */}
          <div className="flex justify-center gap-4">
            <Button
              variant={calculationType === 'bedtime' ? 'default' : 'outline'}
              onClick={() => setCalculationType('bedtime')}
              className="flex items-center gap-2 px-6 py-2"
            >
              <Moon className="size-4" />
              Find Bedtime
            </Button>
            <Button
              variant={calculationType === 'wakeup' ? 'default' : 'outline'}
              onClick={() => setCalculationType('wakeup')}
              className="flex items-center gap-2 px-6 py-2"
            >
              <Sun className="size-4" />
              Find Wake Time
            </Button>
          </div>

          {/* Time Input */}
          <div className="flex justify-center items-center gap-2">
            <label className="text-gray-700 font-medium">
              I will {calculationType === 'bedtime' ? 'wake up' : 'go to bed'} at:
            </label>

            <select
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>

            <span className="text-gray-700">:</span>

            <select
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="00">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>

            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={calculateSleepTimes}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 flex items-center gap-2"
            >
              <Clock className="size-4" />
              Calculate
            </Button>
            <Button
              onClick={sleepNow}
              variant="outline"
              className="border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-2"
            >
              Sleep Now ({currentTime})
            </Button>
          </div>

          {/* Results */}
          {results.length > 0 && (
            <div className="mt-6 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                {calculationType === 'bedtime' ? 'Go to bed at one of these times:' : 'Wake up at one of these times:'}
              </h3>
              <div className="space-y-2">
                {results.map((time, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{time.split(' (')[0]}</span>
                    <span className="text-sm text-gray-600">{time.split(' (')[1]?.replace(')', '')}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center italic">
                Based on 90-minute sleep cycles + 15 minutes to fall asleep
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}