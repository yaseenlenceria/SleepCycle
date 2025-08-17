import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Baby, Clock, Heart, Star } from 'lucide-react';

interface BabyNapSchedule {
  age: string;
  totalNaps: number;
  napDurations: string[];
  wakeTimes: string[];
  totalSleep: string;
  nightSleep: string;
  tips: string[];
}

export function BabyNapCalculator() {
  const [selectedAge, setSelectedAge] = useState('');
  const [schedule, setSchedule] = useState<BabyNapSchedule | null>(null);

  const babySchedules: Record<string, BabyNapSchedule> = {
    '0-3months': {
      age: '0-3 Months (Newborn)',
      totalNaps: 4,
      napDurations: ['30-60 min', '45-90 min', '30-60 min', '30-45 min'],
      wakeTimes: ['45-60 min', '45-60 min', '45-60 min', '45-60 min'],
      totalSleep: '14-17 hours',
      nightSleep: '8-9 hours (with feeds)',
      tips: [
        'Follow baby\'s cues - they may sleep 16-20 hours per day',
        'Expect frequent night wakings for feeding',
        'Short wake windows of 45-60 minutes',
        'Sleep when baby sleeps to rest yourself'
      ]
    },
    '4-6months': {
      age: '4-6 Months',
      totalNaps: 3,
      napDurations: ['60-90 min', '60-90 min', '30-45 min'],
      wakeTimes: ['1.5-2 hours', '2-2.5 hours', '2-2.5 hours'],
      totalSleep: '12-15 hours',
      nightSleep: '10-12 hours (may include 1-2 feeds)',
      tips: [
        'Establish more predictable nap schedule',
        'Watch for sleepy cues: yawning, eye rubbing',
        'Consider sleep training methods if desired',
        'Room should be dark and cool for better sleep'
      ]
    },
    '7-12months': {
      age: '7-12 Months',
      totalNaps: 2,
      napDurations: ['60-90 min', '60-90 min'],
      wakeTimes: ['2.5-3 hours', '3-4 hours'],
      totalSleep: '11-14 hours',
      nightSleep: '10-12 hours (may sleep through)',
      tips: [
        'Transition to 2 naps around 6-9 months',
        'Morning nap around 9-10 AM',
        'Afternoon nap around 1-2 PM',
        'Consistent bedtime routine is crucial'
      ]
    },
    '13-18months': {
      age: '13-18 Months (Toddler)',
      totalNaps: 1,
      napDurations: ['90-180 min'],
      wakeTimes: ['5-6 hours before nap'],
      totalSleep: '11-14 hours',
      nightSleep: '10-12 hours',
      tips: [
        'Transition to one afternoon nap',
        'Nap typically 12:30-1:00 PM',
        'May resist naps - stay consistent',
        'Ensure adequate physical activity during wake time'
      ]
    },
    '19months-3years': {
      age: '19 Months - 3 Years',
      totalNaps: 1,
      napDurations: ['60-120 min'],
      wakeTimes: ['5-6 hours before nap'],
      totalSleep: '10-13 hours',
      nightSleep: '10-11 hours',
      tips: [
        'Some children may drop naps by age 3',
        'Quiet time even if not sleeping',
        'Consistent nap timing helps maintain routine',
        'Watch for overtiredness signs'
      ]
    }
  };

  const handleAgeChange = (age: string) => {
    setSelectedAge(age);
    setSchedule(babySchedules[age] || null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Baby className="text-pink-500 mr-3 sleep-float" size={32} />
          <h3 className="text-2xl font-bold text-gray-800">
            Baby & Toddler Nap Calculator
          </h3>
        </div>
        <p className="text-gray-600 max-w-lg mx-auto">
          Get age-appropriate nap schedules and sleep recommendations for your little one
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select your baby's age
        </label>
        <Select value={selectedAge} onValueChange={handleAgeChange}>
          <SelectTrigger className="w-full text-lg py-6" data-testid="select-baby-age">
            <SelectValue placeholder="Choose age range..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-3months">0-3 Months (Newborn)</SelectItem>
            <SelectItem value="4-6months">4-6 Months</SelectItem>
            <SelectItem value="7-12months">7-12 Months</SelectItem>
            <SelectItem value="13-18months">13-18 Months</SelectItem>
            <SelectItem value="19months-3years">19 Months - 3 Years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {schedule && (
        <div className="space-y-6 animate-in slide-in-from-bottom-5 duration-500">
          {/* Age Header */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-xl p-6 text-center">
            <Baby className="mx-auto mb-3 text-pink-600" size={48} />
            <h4 className="text-xl font-bold text-pink-800 mb-2">
              {schedule.age}
            </h4>
          </div>

          {/* Sleep Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 text-center">
              <Clock className="mx-auto mb-2 text-blue-600" size={24} />
              <h5 className="font-semibold text-blue-800 text-sm">Total Sleep</h5>
              <p className="text-blue-600 font-bold">{schedule.totalSleep}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4 text-center">
              <Heart className="mx-auto mb-2 text-purple-600" size={24} />
              <h5 className="font-semibold text-purple-800 text-sm">Night Sleep</h5>
              <p className="text-purple-600 font-bold">{schedule.nightSleep}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 text-center">
              <Star className="mx-auto mb-2 text-green-600" size={24} />
              <h5 className="font-semibold text-green-800 text-sm">Daily Naps</h5>
              <p className="text-green-600 font-bold">{schedule.totalNaps}</p>
            </div>
          </div>

          {/* Nap Schedule */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
            <h4 className="text-lg font-bold text-yellow-800 mb-4">Daily Nap Schedule</h4>
            <div className="space-y-3">
              {schedule.napDurations.map((duration, index) => (
                <div key={index} className="flex justify-between items-center bg-white bg-opacity-70 rounded-lg p-3">
                  <span className="font-medium text-gray-700">
                    Nap {index + 1}
                  </span>
                  <div className="text-right">
                    <div className="font-bold text-yellow-700">{duration}</div>
                    <div className="text-xs text-gray-600">
                      Wake time: {schedule.wakeTimes[index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Tips */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-6">
            <h4 className="text-lg font-bold text-teal-800 mb-4">Expert Sleep Tips</h4>
            <ul className="space-y-2">
              {schedule.tips.map((tip, index) => (
                <li key={index} className="flex items-start text-teal-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Reminder */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-xl p-4">
            <h5 className="font-bold text-red-800 mb-2">Safe Sleep Reminder</h5>
            <p className="text-sm text-red-700">
              Always follow safe sleep guidelines: back to sleep, firm mattress, no loose bedding, 
              and room sharing without bed sharing for the first year.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}