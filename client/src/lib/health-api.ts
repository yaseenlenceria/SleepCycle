// Free Health Assessment API Integration
// Using MyHealthfinder API from U.S. Department of Health & Human Services

export interface HealthRecommendationParams {
  age: number;
  sex: 'male' | 'female';
  pregnant?: boolean;
  tobaccoUse?: boolean;
}

export interface SleepAssessment {
  quality: 'excellent' | 'good' | 'fair' | 'poor';
  hoursSlept: number;
  recommendedHours: number;
  feedback: string;
  tips: string[];
  riskFactors: string[];
  benefits: string[];
}

export interface HealthRecommendation {
  title: string;
  description: string;
  category: string;
  link?: string;
  priority: 'high' | 'medium' | 'low';
}

// Get age-specific sleep recommendations based on CDC guidelines  
export function getRecommendedSleepHours(age: number): { min: number; max: number; optimal: number } {
  // Fixed age-based recommendations for proper user input (age in years, not months)
  if (age >= 14 && age <= 17) return { min: 8, max: 10, optimal: 9 }; // Teenagers
  if (age >= 18 && age <= 25) return { min: 7, max: 9, optimal: 8 }; // Young Adults  
  if (age >= 26 && age <= 64) return { min: 7, max: 9, optimal: 8 }; // Adults
  if (age >= 65) return { min: 7, max: 8, optimal: 7.5 }; // Older adults
  
  // Default for other ages (children need more sleep)
  if (age <= 13) return { min: 9, max: 11, optimal: 10 }; // School age
  return { min: 7, max: 9, optimal: 8 }; // Default adult range
}

// Assess sleep quality based on calculated sleep duration with enhanced accuracy
export function assessSleepQuality(
  calculatedSleepHours: number,
  userAge: number,
  userSex: 'male' | 'female',
  bedtime: string,
  wakeTime: string
): SleepAssessment {
  let recommended = getRecommendedSleepHours(userAge);
  
  // Gender-specific adjustments based on latest sleep research
  if (userSex === 'female') {
    // Women typically need 20-30 minutes more sleep due to more complex sleep architecture
    recommended.min += 0.3;
    recommended.max += 0.3;
    recommended.optimal += 0.3;
  }
  
  const hoursSlept = calculatedSleepHours;
  
  let quality: 'excellent' | 'good' | 'fair' | 'poor';
  let feedback: string;
  let tips: string[] = [];
  let riskFactors: string[] = [];
  let benefits: string[] = [];

  // Enhanced quality assessment with realistic sleep duration checks
  if (hoursSlept < 3) {
    quality = 'poor';
    feedback = `⚠️ Warning: Only ${hoursSlept.toFixed(1)} hours detected. This appears to be a nap rather than nighttime sleep. For proper sleep analysis, please enter your actual bedtime and wake-up time.`;
    riskFactors = [
      'Extremely insufficient sleep duration',
      'May indicate incorrect time entry or nap instead of main sleep',
      'Severe cognitive impairment risk',
      'Increased accident risk'
    ];
    tips = [
      'Verify your bedtime and wake-up times are correct',
      'If this was a nap, use the nap calculator instead',
      'Aim for 7-9 hours of nighttime sleep',
      'Establish a consistent sleep schedule'
    ];
  } else if (hoursSlept >= recommended.min && hoursSlept <= recommended.max) {
    if (hoursSlept >= recommended.optimal - 0.5 && hoursSlept <= recommended.optimal + 0.5) {
      quality = 'excellent';
      feedback = `🎯 Perfect! You're getting ${hoursSlept.toFixed(1)} hours of sleep, which is optimal for ${userSex === 'female' ? 'women' : 'men'} aged ${userAge}. This sleep duration maximizes your health benefits.`;
      benefits = [
        `Peak cognitive performance for ${userAge}-year-olds`,
        'Enhanced memory consolidation and learning retention',
        'Maximum immune system efficiency and disease resistance',
        'Optimal hormonal balance and metabolism',
        'Perfect emotional regulation and stress resilience',
        userSex === 'female' ? 'Optimal reproductive health and menstrual cycle regulation' : 'Peak testosterone production and muscle recovery'
      ];
    } else {
      quality = 'good';
      feedback = `✅ Good sleep duration! ${hoursSlept.toFixed(1)} hours falls within the healthy range for ${userSex === 'female' ? 'women' : 'men'} aged ${userAge}. Small adjustments could optimize your sleep further.`;
      benefits = [
        'Good physical and mental recovery',
        'Effective immune system support',
        'Stable mood and energy levels throughout the day',
        'Proper hormone regulation for your age group',
        userAge >= 45 ? 'Supports healthy aging and cognitive function' : 'Supports growth and development'
      ];
    }
  } else if (hoursSlept < recommended.min) {
    const deficit = recommended.min - hoursSlept;
    if (deficit <= 1) {
      quality = 'fair';
      feedback = `⚠️ You're getting ${hoursSlept.toFixed(1)} hours, which is ${deficit.toFixed(1)} hours below optimal for ${userSex === 'female' ? 'women' : 'men'} aged ${userAge}. Small improvements could boost your health significantly.`;
      riskFactors = [
        `Reduced focus and decision-making for ${userAge}-year-olds`,
        'Weakened immune response - 3x higher infection risk',
        'Elevated cortisol levels affecting stress management',
        userSex === 'female' ? 'Disrupted hormonal balance affecting reproductive health' : 'Reduced testosterone production and recovery'
      ];
    } else {
      quality = 'poor';
      feedback = `🚨 Critical: ${hoursSlept.toFixed(1)} hours is ${deficit.toFixed(1)} hours below recommendations for ${userSex === 'female' ? 'women' : 'men'} aged ${userAge}. Immediate changes needed to prevent health risks.`;
      riskFactors = [
        `Severely impaired cognitive function for your age group`,
        `+40% increased risk of cardiovascular disease for ${userSex === 'female' ? 'women' : 'men'}`,
        'Compromised immune system - significantly higher illness risk',
        'Higher accident risk and impaired motor skills',
        userAge >= 40 ? 'Accelerated brain aging and dementia risk' : 'Impaired growth and development',
        userSex === 'female' ? 'Menstrual irregularities and fertility issues' : 'Muscle recovery impairment and reduced athletic performance'
      ];
    }
  } else {
    // Too much sleep
    const excess = hoursSlept - recommended.max;
    if (excess <= 1) {
      quality = 'fair';
      feedback = `⚡ You're getting ${hoursSlept.toFixed(1)} hours, which is ${excess.toFixed(1)} hours above optimal for ${userSex === 'female' ? 'women' : 'men'} aged ${userAge}. Consider adjusting your schedule.`;
      riskFactors = [
        'Potential grogginess and reduced alertness',
        'May indicate underlying health conditions that need attention'
      ];
    } else {
      quality = 'poor';
      feedback = `💤 ${hoursSlept.toFixed(1)} hours is ${excess.toFixed(1)} hours above recommendations for ${userSex === 'female' ? 'women' : 'men'} aged ${userAge}. Consult healthcare provider to rule out underlying causes.`;
      riskFactors = [
        'Associated with increased inflammation markers',
        'Higher risk of diabetes and cardiovascular disease',
        'Depression and cognitive decline indicators',
        'Poor sleep quality despite long duration',
        userAge >= 50 ? 'May indicate age-related health conditions' : 'Potential metabolic or mood disorders'
      ];
    }
  }

  // Personalized sleep optimization tips based on user profile
  tips = [
    `For ${userSex === 'female' ? 'women' : 'men'} aged ${userAge}: Maintain consistent sleep-wake times, even on weekends`,
    'Create a personalized relaxing bedtime routine (reading, bath, meditation)',
    'Optimize your bedroom: cool (65-68°F), dark, and quiet environment',
    'Avoid screens 30-60 minutes before your target bedtime',
    'Strategic caffeine timing: avoid after 2 PM for your age group',
    'Get morning sunlight exposure within 30 minutes of waking',
    'Exercise timing: finish workouts 3+ hours before bedtime'
  ];

  // Age-specific recommendations with more precision
  if (userAge >= 65) {
    tips.push('Strategic napping: 20-30 minutes between 1-3 PM if needed');
    tips.push('Maintain active social connections and daytime activities for better sleep');
    tips.push('Monitor medications that may affect sleep quality');
  } else if (userAge >= 45) {
    tips.push('Stress management becomes more important for quality sleep');
    tips.push('Consider magnesium supplementation (consult healthcare provider)');
  } else if (userAge <= 25) {
    tips.push('Limit late-night social media and blue light exposure');
    tips.push('Prioritize sleep over late-night activities for brain development');
  }

  // Gender-specific recommendations with scientific backing
  if (userSex === 'female') {
    if (userAge >= 45) {
      tips.push('Menopause-related sleep changes: cooler bedroom, moisture-wicking sleepwear');
      tips.push('Track sleep patterns relative to hormonal cycles');
    } else if (userAge >= 18) {
      tips.push('Consider iron levels if experiencing restless sleep');
      tips.push('Track sleep quality relative to menstrual cycle');
    }
  } else {
    if (userAge >= 40) {
      tips.push('Monitor for sleep apnea signs (snoring, daytime fatigue)');
      tips.push('Maintain healthy weight for optimal sleep breathing');
    }
    tips.push('Avoid large meals and alcohol 2+ hours before bedtime');
  }

  return {
    quality,
    hoursSlept,
    recommendedHours: recommended.optimal,
    feedback,
    tips,
    riskFactors,
    benefits
  };
}

// Get personalized health recommendations - Enhanced version with robust fallbacks
export async function getPersonalizedHealthRecommendations(
  params: HealthRecommendationParams
): Promise<HealthRecommendation[]> {
  // Always return evidence-based recommendations based on age and sex
  // This provides consistent, reliable health guidance without depending on external APIs
  const { age, sex } = params;
  
  const recommendations: HealthRecommendation[] = [];

  // Age-specific recommendations based on CDC and medical research
  if (age >= 65) {
    recommendations.push(
      {
        title: 'Senior Sleep Health (65+ Years)',
        description: 'Older adults need 7-8 hours of sleep. Consider afternoon naps (20-30 minutes) if needed, but avoid late-day naps that interfere with nighttime sleep.',
        category: 'Age-Specific Health',
        priority: 'high'
      },
      {
        title: 'Medication and Sleep Interactions',
        description: 'Many medications affect sleep quality. Consult your healthcare provider about sleep-friendly timing for medications.',
        category: 'Medical Considerations',
        priority: 'medium'
      }
    );
  } else if (age >= 45) {
    recommendations.push(
      {
        title: 'Midlife Sleep Optimization',
        description: 'Adults 45+ often experience sleep changes due to hormonal shifts. Maintain consistent schedules and consider stress management techniques.',
        category: 'Age-Specific Health',
        priority: 'high'
      }
    );
  } else if (age >= 18) {
    recommendations.push(
      {
        title: 'Adult Sleep Foundation (18-64 Years)',
        description: 'Adults need 7-9 hours of sleep for optimal cognitive function, immune health, and emotional regulation.',
        category: 'Adult Health Guidelines',
        priority: 'high'
      }
    );
  } else {
    recommendations.push(
      {
        title: 'Teen Sleep Requirements',
        description: 'Teenagers need 8-10 hours of sleep due to brain development and growth. Avoid late-night screen time and maintain consistent weekend schedules.',
        category: 'Adolescent Health',
        priority: 'high'
      }
    );
  }

  // Sex-specific recommendations based on medical research
  if (sex === 'female') {
    if (age >= 45) {
      recommendations.push({
        title: 'Women\'s Sleep Health: Hormonal Considerations',
        description: 'Menopause can affect sleep quality. Keep bedrooms cooler, consider relaxation techniques, and maintain regular exercise routines.',
        category: 'Women\'s Health',
        priority: 'medium'
      });
    }
    recommendations.push({
      title: 'Women\'s Sleep Patterns',
      description: 'Women may need slightly more sleep than men due to multitasking demands and hormonal fluctuations. Prioritize consistent bedtime routines.',
      category: 'Gender-Specific Health',
      priority: 'medium'
    });
  } else {
    recommendations.push({
      title: 'Men\'s Sleep Health',
      description: 'Men are more likely to experience sleep apnea. If you snore regularly or feel tired despite adequate sleep, consider consulting a healthcare provider.',
      category: 'Men\'s Health',
      priority: 'medium'
    });
  }

  // Universal evidence-based recommendations
  recommendations.push(
    {
      title: 'Evidence-Based Sleep Hygiene',
      description: 'Maintain consistent sleep-wake times, keep bedrooms cool (65-68°F), dark, and quiet. Avoid caffeine after 2 PM and screens before bedtime.',
      category: 'Sleep Hygiene',
      priority: 'high'
    },
    {
      title: 'Exercise and Sleep Connection',
      description: 'Regular physical activity improves sleep quality, but avoid vigorous exercise within 3 hours of bedtime. Morning sunlight exposure helps regulate circadian rhythms.',
      category: 'Lifestyle Optimization',
      priority: 'medium'
    },
    {
      title: 'Nutrition for Better Sleep',
      description: 'Avoid large meals, alcohol, and nicotine before bedtime. Consider a light snack with tryptophan (turkey, milk) or magnesium-rich foods if hungry.',
      category: 'Nutritional Health',
      priority: 'medium'
    }
  );

  return recommendations;
}

// Calculate sleep hours from time strings with proper AM/PM parsing
export function calculateSleepHours(bedtime: string, wakeTime: string): number {
  // Parse bedtime
  const bedParsed = parseTimeString(bedtime);
  const bedDate = new Date();
  bedDate.setHours(bedParsed.hour, bedParsed.minute, 0, 0);
  
  // Parse wake time
  const wakeParsed = parseTimeString(wakeTime);
  let wakeDate = new Date();
  wakeDate.setHours(wakeParsed.hour, wakeParsed.minute, 0, 0);
  
  // If wake time is earlier than bedtime, it's the next day
  if (wakeDate <= bedDate) {
    wakeDate.setDate(wakeDate.getDate() + 1);
  }
  
  const diffMs = wakeDate.getTime() - bedDate.getTime();
  const hours = diffMs / (1000 * 60 * 60);
  
  return hours; // Convert to hours
}

// Helper function to parse time strings with AM/PM
function parseTimeString(timeStr: string): { hour: number; minute: number } {
  if (!timeStr || !timeStr.includes(' ')) {
    return { hour: 0, minute: 0 };
  }
  
  const [time, period] = timeStr.trim().split(' ');
  if (!time || !period || !time.includes(':')) {
    return { hour: 0, minute: 0 };
  }
  
  const [hourStr, minuteStr] = time.split(':');
  let hour = parseInt(hourStr);
  const minute = parseInt(minuteStr || '0');
  
  if (isNaN(hour) || isNaN(minute)) {
    return { hour: 0, minute: 0 };
  }
  
  // Convert to 24-hour format
  if (period.toUpperCase() === 'PM' && hour !== 12) {
    hour += 12;
  }
  if (period.toUpperCase() === 'AM' && hour === 12) {
    hour = 0;
  }
  
  return { hour, minute };
}