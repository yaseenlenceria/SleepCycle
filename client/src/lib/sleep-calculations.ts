export interface SleepTime {
  time: string;
  cycles: number;
  duration: string;
  quality: 'poor' | 'fair' | 'good' | 'excellent';
}

export interface NapTime {
  duration: number; // in minutes
  type: 'power' | 'recovery' | 'full';
  description: string;
  benefits: string[];
}

export interface SleepData {
  bedtime: string;
  wakeTime: string;
  totalSleep: string;
  cycles: number;
  efficiency: number;
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export function calculateBedtimes(wakeUpTime: string): SleepTime[] {
  // Parse the wake-up time
  const [time, period] = wakeUpTime.split(' ');
  const [hourStr, minuteStr] = time.split(':');
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  // Convert to 24-hour format
  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;

  // Create wake-up date object (using today as reference)
  const wakeUp = new Date();
  wakeUp.setHours(hour, minute, 0, 0);

  // If wake-up time is earlier than current time, assume it's tomorrow
  const now = new Date();
  if (wakeUp < now) {
    wakeUp.setDate(wakeUp.getDate() + 1);
  }

  const bedtimes: SleepTime[] = [];

  // Calculate bedtimes for 1-6 sleep cycles
  for (let cycles = 1; cycles <= 6; cycles++) {
    // Each cycle is 90 minutes, plus 15 minutes to fall asleep
    const totalMinutes = (cycles * 90) + 15;
    
    const bedtime = new Date(wakeUp.getTime() - (totalMinutes * 60 * 1000));
    const duration = formatDuration(totalMinutes - 15);
    const quality = getSleepQuality(cycles);
    
    bedtimes.push({
      time: formatTime(bedtime),
      cycles: cycles,
      duration: duration,
      quality: quality
    });
  }

  // Return in reverse order (most sleep first)
  return bedtimes.reverse();
}

export function calculateWakeUpTimes(): SleepTime[] {
  const now = new Date();
  // Add 15 minutes for falling asleep
  const fallAsleepTime = new Date(now.getTime() + (15 * 60 * 1000));
  
  const wakeUpTimes: SleepTime[] = [];

  // Calculate wake-up times for 1-6 sleep cycles
  for (let cycles = 1; cycles <= 6; cycles++) {
    // Each cycle is 90 minutes
    const sleepMinutes = cycles * 90;
    
    const wakeUpTime = new Date(fallAsleepTime.getTime() + (sleepMinutes * 60 * 1000));
    const duration = formatDuration(sleepMinutes);
    const quality = getSleepQuality(cycles);
    
    wakeUpTimes.push({
      time: formatTime(wakeUpTime),
      cycles: cycles,
      duration: duration,
      quality: quality
    });
  }

  return wakeUpTimes;
}

export function calculateWakeUpTimesFromNow(): {times: SleepTime[], currentTime: string} {
  const now = new Date();
  const currentTimeString = formatTime(now);
  
  // Add 15 minutes for falling asleep
  const fallAsleepTime = new Date(now.getTime() + (15 * 60 * 1000));
  
  const wakeUpTimes: SleepTime[] = [];

  // Calculate wake-up times for 1-6 sleep cycles
  for (let cycles = 1; cycles <= 6; cycles++) {
    // Each cycle is 90 minutes
    const sleepMinutes = cycles * 90;
    
    const wakeUpTime = new Date(fallAsleepTime.getTime() + (sleepMinutes * 60 * 1000));
    const duration = formatDuration(sleepMinutes);
    const quality = getSleepQuality(cycles);
    
    wakeUpTimes.push({
      time: formatTime(wakeUpTime),
      cycles: cycles,
      duration: duration,
      quality: quality
    });
  }

  return {
    times: wakeUpTimes,
    currentTime: currentTimeString
  };
}

export function getCurrentTime(): string {
  return formatTime(new Date());
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours === 0) {
    return `${mins} minutes`;
  } else if (mins === 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  } else {
    return `${hours}h ${mins}m`;
  }
}

export function getSleepQuality(cycles: number): 'poor' | 'fair' | 'good' | 'excellent' {
  if (cycles <= 2) return 'poor';
  if (cycles <= 3) return 'fair';
  if (cycles <= 5) return 'good';
  return 'excellent';
}

export function getOptimalNapTimes(): NapTime[] {
  return [
    {
      duration: 20,
      type: 'power',
      description: 'Power Nap',
      benefits: ['Quick energy boost', 'Improved alertness', 'Enhanced focus', 'No sleep inertia']
    },
    {
      duration: 60,
      type: 'recovery',
      description: 'Recovery Nap',
      benefits: ['Memory consolidation', 'Cognitive processing', 'Creative thinking', 'Moderate grogginess']
    },
    {
      duration: 90,
      type: 'full',
      description: 'Full Cycle Nap',
      benefits: ['Complete sleep cycle', 'REM sleep benefits', 'Memory formation', 'Wake up refreshed']
    }
  ];
}

export function calculateSleepDuration(bedtime: string, wakeTime: string): SleepData {
  // Parse times
  const parseBedtime = parseTimeString(bedtime);
  const parseWakeTime = parseTimeString(wakeTime);
  
  let bedDate = new Date();
  bedDate.setHours(parseBedtime.hour, parseBedtime.minute, 0, 0);
  
  let wakeDate = new Date();
  wakeDate.setHours(parseWakeTime.hour, parseWakeTime.minute, 0, 0);
  
  // If wake time is earlier than bedtime, it's the next day
  if (wakeDate <= bedDate) {
    wakeDate.setDate(wakeDate.getDate() + 1);
  }
  
  const diffMs = wakeDate.getTime() - bedDate.getTime();
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const cycles = Math.round(totalMinutes / 90);
  const efficiency = Math.min(100, Math.round((cycles * 90) / totalMinutes * 100));
  
  return {
    bedtime: formatTime(bedDate),
    wakeTime: formatTime(wakeDate),
    totalSleep: formatDuration(totalMinutes),
    cycles: cycles,
    efficiency: efficiency
  };
}

function parseTimeString(timeStr: string): { hour: number; minute: number } {
  const [time, period] = timeStr.split(' ');
  const [hourStr, minuteStr] = time.split(':');
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);
  
  // Convert to 24-hour format
  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;
  
  return { hour, minute };
}

export function getAgeSpecificRecommendations(age: number): { 
  cycles: number; 
  duration: string; 
  bedtimeRange: string; 
  description: string 
} {
  if (age < 1) {
    return {
      cycles: 8,
      duration: '12-16 hours',
      bedtimeRange: '6:00 PM - 8:00 PM',
      description: 'Newborns need the most sleep for rapid brain development'
    };
  } else if (age <= 2) {
    return {
      cycles: 7,
      duration: '10-12 hours',
      bedtimeRange: '7:00 PM - 8:30 PM',
      description: 'Toddlers require consistent sleep schedules for growth'
    };
  } else if (age <= 5) {
    return {
      cycles: 6,
      duration: '9-11 hours',
      bedtimeRange: '7:30 PM - 9:00 PM',
      description: 'Preschoolers benefit from regular bedtime routines'
    };
  } else if (age <= 13) {
    return {
      cycles: 6,
      duration: '9-11 hours',
      bedtimeRange: '8:00 PM - 9:30 PM',
      description: 'School-age children need adequate sleep for learning'
    };
  } else if (age <= 17) {
    return {
      cycles: 5,
      duration: '8-10 hours',
      bedtimeRange: '9:00 PM - 11:00 PM',
      description: 'Teenagers have shifted circadian rhythms'
    };
  } else if (age <= 64) {
    return {
      cycles: 5,
      duration: '7-9 hours',
      bedtimeRange: '10:00 PM - 12:00 AM',
      description: 'Adults need consistent sleep for optimal health'
    };
  } else {
    return {
      cycles: 5,
      duration: '7-8 hours',
      bedtimeRange: '9:00 PM - 11:00 PM',
      description: 'Older adults may experience changes in sleep patterns'
    };
  }
}
