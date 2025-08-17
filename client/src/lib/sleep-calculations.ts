export interface SleepTime {
  time: string;
  cycles: number;
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
    
    bedtimes.push({
      time: formatTime(bedtime),
      cycles: cycles
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
    
    wakeUpTimes.push({
      time: formatTime(wakeUpTime),
      cycles: cycles
    });
  }

  return wakeUpTimes;
}

export function getCurrentTime(): string {
  return formatTime(new Date());
}
