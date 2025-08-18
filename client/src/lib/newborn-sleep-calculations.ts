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
  // Parse the start time
  const [time, period] = startTime.split(' ');
  const [hourStr, minuteStr] = time.split(':');
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  // Convert to 24-hour format
  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;

  const startDate = new Date();
  startDate.setHours(hour, minute, 0, 0);

  const sleepTimes: NewbornSleepTime[] = [];

  // Newborns sleep 14-17 hours per day in 2-4 hour chunks
  // They wake every 2-3 hours for feeding
  const napDurations = [2, 2.5, 3, 1.5, 3.5, 2]; // hours
  let currentTime = new Date(startDate);

  for (let i = 0; i < 6; i++) {
    const napDuration = napDurations[i];
    const napMinutes = napDuration * 60;
    
    // Sleep period
    sleepTimes.push({
      time: formatTime(currentTime),
      duration: `${napDuration}h sleep`,
      type: 'nap',
      quality: i % 3 === 0 ? 'deep' : (i % 2 === 0 ? 'rem' : 'light')
    });

    // Add sleep duration
    currentTime = new Date(currentTime.getTime() + napMinutes * 60 * 1000);

    // Feeding/wake period (30-60 minutes)
    const wakeDuration = 30 + Math.random() * 30; // 30-60 minutes
    sleepTimes.push({
      time: formatTime(currentTime),
      duration: `${Math.round(wakeDuration)}min awake`,
      type: 'feeding-break',
      quality: 'light'
    });

    // Add wake duration
    currentTime = new Date(currentTime.getTime() + wakeDuration * 60 * 1000);
  }

  return sleepTimes.slice(0, 8); // Return first 8 periods (4 sleep, 4 wake)
}

export function calculateNewbornBedtimes(wakeUpTime: string): NewbornSleepTime[] {
  // Parse wake-up time
  const [time, period] = wakeUpTime.split(' ');
  const [hourStr, minuteStr] = time.split(':');
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

  // Newborns need different sleep durations throughout the day
  const sleepOptions = [
    { hours: 2, type: 'Short nap' },
    { hours: 2.5, type: 'Regular nap' },
    { hours: 3, type: 'Long nap' },
    { hours: 3.5, type: 'Extended nap' },
    { hours: 4, type: 'Night sleep stretch' },
    { hours: 5, type: 'Longest night stretch' }
  ];

  sleepOptions.forEach((option, index) => {
    const totalMinutes = option.hours * 60;
    const bedtime = new Date(wakeUp.getTime() - (totalMinutes * 60 * 1000));
    
    bedtimes.push({
      time: formatTime(bedtime),
      duration: `${option.hours}h (${option.type})`,
      type: option.hours <= 3 ? 'nap' : 'night-sleep',
      quality: option.hours <= 2 ? 'light' : (option.hours <= 3.5 ? 'rem' : 'deep')
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

  // Calculate different nap/sleep durations for newborns
  const newbornSleepOptions = [
    { minutes: 90, type: 'Short nap', quality: 'light' as const },
    { minutes: 120, type: 'Regular nap', quality: 'rem' as const },
    { minutes: 150, type: 'Long nap', quality: 'deep' as const },
    { minutes: 180, type: 'Extended nap', quality: 'deep' as const },
    { minutes: 240, type: 'Night sleep', quality: 'deep' as const },
    { minutes: 300, type: 'Long night sleep', quality: 'deep' as const }
  ];

  newbornSleepOptions.forEach(option => {
    const wakeUpTime = new Date(sleepStart.getTime() + (option.minutes * 60 * 1000));
    const hours = Math.floor(option.minutes / 60);
    const mins = option.minutes % 60;
    const durationText = mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
    
    wakeUpTimes.push({
      time: formatTime(wakeUpTime),
      duration: `${durationText} (${option.type})`,
      type: option.minutes <= 180 ? 'nap' : 'night-sleep',
      quality: option.quality
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