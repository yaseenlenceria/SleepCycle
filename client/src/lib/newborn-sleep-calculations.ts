export interface NewbornSleepTime {
  time: string;
  duration: string;
  type: 'nap' | 'night-sleep' | 'feeding-break';
  quality: 'light' | 'deep' | 'rem';
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

export function calculateNewbornNapTimes(startTime: string): NewbornSleepTime[] {
  // Ensure startTime is a string and has the expected format
  if (!startTime || typeof startTime !== 'string') {
    console.error('Invalid startTime:', startTime);
    return [];
  }

  // Parse the start time
  const timeParts = startTime.split(' ');
  if (timeParts.length !== 2) {
    console.error('Invalid time format:', startTime);
    return [];
  }

  const [time, period] = timeParts;
  const timePortion = time.split(':');
  if (timePortion.length !== 2) {
    console.error('Invalid time portion:', time);
    return [];
  }

  const [hourStr, minuteStr] = timePortion;
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  // Convert to 24-hour format
  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;

  const startDate = new Date();
  startDate.setHours(hour, minute, 0, 0);

  const sleepTimes: NewbornSleepTime[] = [];

  // Based on age-appropriate cycle lengths for newborns (40-60 minutes)
  // Create realistic nap and wake periods
  const napOptions = [
    { cycles: 2, minutes: 80, type: 'Short nap' },   // 1h 20m
    { cycles: 3, minutes: 120, type: 'Regular nap' }, // 2h
    { cycles: 4, minutes: 160, type: 'Long nap' },   // 2h 40m
    { cycles: 2, minutes: 90, type: 'Power nap' },   // 1h 30m
    { cycles: 5, minutes: 200, type: 'Extended nap' }, // 3h 20m
    { cycles: 3, minutes: 135, type: 'Good nap' }    // 2h 15m
  ];

  let currentTime = new Date(startDate);

  napOptions.forEach((option, index) => {
    // Sleep period
    sleepTimes.push({
      time: formatTime(currentTime),
      duration: `${Math.floor(option.minutes/60)}h ${option.minutes%60}m (${option.type})`,
      type: option.minutes <= 120 ? 'nap' : 'night-sleep',
      quality: option.cycles <= 2 ? 'light' : (option.cycles <= 3 ? 'rem' : 'deep')
    });

    // Add sleep duration
    currentTime = new Date(currentTime.getTime() + option.minutes * 60 * 1000);
  });

  return sleepTimes;
}

export function calculateNewbornBedtimes(wakeUpTime: string): NewbornSleepTime[] {
  // Ensure wakeUpTime is a string and has the expected format
  if (!wakeUpTime || typeof wakeUpTime !== 'string') {
    console.error('Invalid wakeUpTime:', wakeUpTime);
    return [];
  }

  // Parse wake-up time
  const timeParts = wakeUpTime.split(' ');
  if (timeParts.length !== 2) {
    console.error('Invalid wake-up time format:', wakeUpTime);
    return [];
  }

  const [time, period] = timeParts;
  const timePortion = time.split(':');
  if (timePortion.length !== 2) {
    console.error('Invalid time portion:', time);
    return [];
  }

  const [hourStr, minuteStr] = timePortion;
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  // Convert to 24-hour format
  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;

  const wakeUp = new Date();
  wakeUp.setHours(hour, minute, 0, 0);

  // If wake-up time is earlier than current time, assume it's tomorrow
  const now = new Date();
  if (wakeUp < now) {
    wakeUp.setDate(wakeUp.getDate() + 1);
  }

  const bedtimes: NewbornSleepTime[] = [];

  // Age-appropriate bedtime options for newborns
  // Based on 40-60 minute cycles typical for babies 0-3 months
  const sleepOptions = [
    { cycles: 3, minutes: 120, type: 'Short sleep' },    // 2h
    { cycles: 4, minutes: 160, type: 'Regular sleep' },  // 2h 40m
    { cycles: 5, minutes: 200, type: 'Good sleep' },     // 3h 20m
    { cycles: 6, minutes: 240, type: 'Long sleep' },     // 4h
    { cycles: 7, minutes: 280, type: 'Extended sleep' }, // 4h 40m
    { cycles: 8, minutes: 320, type: 'Night sleep' }     // 5h 20m
  ];

  sleepOptions.forEach((option, index) => {
    const bedtime = new Date(wakeUp.getTime() - (option.minutes * 60 * 1000));
    
    bedtimes.push({
      time: formatTime(bedtime),
      duration: `${Math.floor(option.minutes/60)}h ${option.minutes%60}m (${option.type})`,
      type: option.minutes <= 200 ? 'nap' : 'night-sleep',
      quality: option.cycles <= 4 ? 'light' : (option.cycles <= 6 ? 'rem' : 'deep')
    });
  });

  return bedtimes;
}

export function calculateNewbornSleepNow(): {times: NewbornSleepTime[], currentTime: string} {
  const now = new Date();
  const currentTimeString = formatTime(now);
  
  // Newborns can sleep immediately - no 15-min fall asleep time like adults
  const sleepStart = new Date(now);
  
  const wakeUpTimes: NewbornSleepTime[] = [];

  // Age-appropriate sleep durations for newborns (40-60 min cycles)
  const newbornSleepOptions = [
    { cycles: 2, minutes: 80, type: 'Short nap' },      // 1h 20m
    { cycles: 3, minutes: 120, type: 'Regular nap' },   // 2h
    { cycles: 4, minutes: 160, type: 'Good nap' },      // 2h 40m
    { cycles: 5, minutes: 200, type: 'Long nap' },      // 3h 20m
    { cycles: 6, minutes: 240, type: 'Night sleep' },   // 4h
    { cycles: 8, minutes: 320, type: 'Long night' }     // 5h 20m
  ];

  newbornSleepOptions.forEach(option => {
    const wakeUpTime = new Date(sleepStart.getTime() + (option.minutes * 60 * 1000));
    const hours = Math.floor(option.minutes / 60);
    const mins = option.minutes % 60;
    const durationText = mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
    
    wakeUpTimes.push({
      time: formatTime(wakeUpTime),
      duration: `${durationText} (${option.type})`,
      type: option.minutes <= 200 ? 'nap' : 'night-sleep',
      quality: option.cycles <= 3 ? 'light' : (option.cycles <= 5 ? 'rem' : 'deep')
    });
  });

  return {
    times: wakeUpTimes,
    currentTime: currentTimeString
  };
}

export function getNewbornSleepRecommendations(ageInWeeks: number): string[] {
  if (ageInWeeks <= 2) {
    return [
      "Sleep 16-20 hours per day",
      "Wake every 2-3 hours for feeding", 
      "No day/night pattern yet",
      "Sleep in 2-4 hour stretches"
    ];
  } else if (ageInWeeks <= 6) {
    return [
      "Sleep 15-18 hours per day",
      "Slightly longer wake periods",
      "Begin establishing routines",
      "May have longer 4-hour stretches"
    ];
  } else {
    return [
      "Sleep 14-16 hours per day",
      "Start showing day/night awareness",
      "Longer wake periods during day",
      "Night stretches may reach 5-6 hours"
    ];
  }
}