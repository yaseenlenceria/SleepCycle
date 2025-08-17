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
  if (age <= 3) return { min: 14, max: 17, optimal: 15.5 }; // Newborns
  if (age <= 11) return { min: 12, max: 15, optimal: 13.5 }; // Infants
  if (age <= 24) return { min: 11, max: 14, optimal: 12.5 }; // Toddlers
  if (age <= 60) return { min: 10, max: 13, optimal: 11.5 }; // Preschoolers
  if (age <= 156) return { min: 9, max: 11, optimal: 10 }; // School age (6-13 years)
  if (age <= 204) return { min: 8, max: 10, optimal: 9 }; // Teenagers (14-17 years)
  if (age <= 768) return { min: 7, max: 9, optimal: 8 }; // Adults (18-64 years)
  return { min: 7, max: 8, optimal: 7.5 }; // Older adults (65+ years)
}

// Assess sleep quality based on calculated sleep duration
export function assessSleepQuality(
  calculatedSleepHours: number,
  userAge: number,
  userSex: 'male' | 'female',
  bedtime: string,
  wakeTime: string
): SleepAssessment {
  const recommended = getRecommendedSleepHours(userAge);
  const hoursSlept = calculatedSleepHours;
  
  let quality: 'excellent' | 'good' | 'fair' | 'poor';
  let feedback: string;
  let tips: string[] = [];
  let riskFactors: string[] = [];
  let benefits: string[] = [];

  // Quality assessment based on CDC guidelines
  if (hoursSlept >= recommended.min && hoursSlept <= recommended.max) {
    if (hoursSlept >= recommended.optimal - 0.5 && hoursSlept <= recommended.optimal + 0.5) {
      quality = 'excellent';
      feedback = `Perfect! You're getting ${hoursSlept.toFixed(1)} hours of sleep, which is optimal for your age group.`;
      benefits = [
        'Enhanced memory consolidation and learning',
        'Stronger immune system and disease resistance',
        'Better emotional regulation and mood stability',
        'Optimal physical recovery and muscle growth',
        'Improved cognitive performance and decision-making'
      ];
    } else {
      quality = 'good';
      feedback = `Good sleep duration! ${hoursSlept.toFixed(1)} hours falls within the healthy range for your age.`;
      benefits = [
        'Adequate physical and mental recovery',
        'Good immune system support',
        'Stable mood and energy levels',
        'Proper hormone regulation'
      ];
    }
  } else if (hoursSlept < recommended.min) {
    const deficit = recommended.min - hoursSlept;
    if (deficit <= 1) {
      quality = 'fair';
      feedback = `You're getting ${hoursSlept.toFixed(1)} hours, which is slightly below the recommended ${recommended.min}-${recommended.max} hours for your age.`;
      riskFactors = [
        'Reduced alertness and concentration',
        'Weakened immune system',
        'Increased stress hormone levels'
      ];
    } else {
      quality = 'poor';
      feedback = `Warning: ${hoursSlept.toFixed(1)} hours is significantly below the recommended ${recommended.min}-${recommended.max} hours for your age.`;
      riskFactors = [
        'Severely impaired cognitive function',
        'Increased risk of chronic diseases',
        'Compromised immune system',
        'Higher accident risk',
        'Mental health deterioration'
      ];
    }
  } else {
    // Too much sleep
    const excess = hoursSlept - recommended.max;
    if (excess <= 1) {
      quality = 'fair';
      feedback = `You're getting ${hoursSlept.toFixed(1)} hours, which is slightly above the recommended ${recommended.min}-${recommended.max} hours.`;
      riskFactors = [
        'Potential grogginess and sluggishness',
        'Possible underlying health issues'
      ];
    } else {
      quality = 'poor';
      feedback = `${hoursSlept.toFixed(1)} hours may be too much sleep for your age group (recommended: ${recommended.min}-${recommended.max} hours).`;
      riskFactors = [
        'Increased inflammation markers',
        'Higher risk of diabetes and heart disease',
        'Depression and cognitive decline',
        'Disrupted sleep quality'
      ];
    }
  }

  // Universal sleep hygiene tips
  tips = [
    'Maintain a consistent sleep schedule, even on weekends',
    'Create a relaxing bedtime routine (reading, bath, meditation)',
    'Keep your bedroom cool (65-68°F), dark, and quiet',
    'Avoid screens for at least 30 minutes before bedtime',
    'Limit caffeine after 2 PM and avoid alcohol before bed',
    'Get natural sunlight exposure during the day',
    'Exercise regularly, but not close to bedtime',
    'Use your bed only for sleep and intimacy'
  ];

  // Age and sex-specific recommendations
  if (userAge >= 65) {
    tips.push('Consider a short afternoon nap (20-30 minutes) if needed');
    tips.push('Maintain social connections and daytime activities');
  }
  
  if (userAge <= 18) {
    tips.push('Avoid late-night studying; prioritize consistent sleep schedule');
    tips.push('Limit evening social media and gaming');
  }

  if (userSex === 'female' && userAge >= 45) {
    tips.push('Consider sleep position changes for hormonal comfort');
    tips.push('Keep bedroom temperature slightly cooler during menopause');
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

// Get personalized health recommendations from MyHealthfinder API
export async function getPersonalizedHealthRecommendations(
  params: HealthRecommendationParams
): Promise<HealthRecommendation[]> {
  try {
    const { age, sex, pregnant = false, tobaccoUse = false } = params;
    
    // Convert age to months for the API
    const ageInMonths = age * 12;
    
    const url = new URL('https://odphp.health.gov/myhealthfinder/api/v4/myhealthfinder.json');
    url.searchParams.append('age', ageInMonths.toString());
    url.searchParams.append('sex', sex);
    if (sex === 'female') {
      url.searchParams.append('pregnant', pregnant ? 'yes' : 'no');
    }
    url.searchParams.append('tobaccoUse', tobaccoUse ? 'yes' : 'no');
    url.searchParams.append('category', 'sleep');

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error('Failed to fetch health recommendations');
    }

    const data = await response.json();
    
    // Parse the API response and extract sleep-related recommendations
    const recommendations: HealthRecommendation[] = [];
    
    if (data.resources) {
      data.resources.forEach((resource: any) => {
        if (resource.title && resource.title.toLowerCase().includes('sleep')) {
          recommendations.push({
            title: resource.title,
            description: resource.description || resource.excerpt,
            category: 'Sleep Health',
            link: resource.url,
            priority: 'high'
          });
        }
      });
    }

    // Add fallback evidence-based recommendations if API doesn't return sleep-specific content
    if (recommendations.length === 0) {
      recommendations.push(
        {
          title: 'Maintain Consistent Sleep Schedule',
          description: 'Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body\'s internal clock.',
          category: 'Sleep Hygiene',
          priority: 'high'
        },
        {
          title: 'Create an Optimal Sleep Environment',
          description: 'Keep your bedroom cool (65-68°F), dark, and quiet. Consider blackout curtains, eye masks, or white noise machines.',
          category: 'Sleep Environment',
          priority: 'high'
        },
        {
          title: 'Limit Screen Time Before Bed',
          description: 'Avoid phones, tablets, and TV for at least 30 minutes before bedtime. Blue light can interfere with melatonin production.',
          category: 'Sleep Hygiene',
          priority: 'medium'
        }
      );
    }

    return recommendations;
  } catch (error) {
    console.error('Error fetching health recommendations:', error);
    
    // Return evidence-based fallback recommendations
    return [
      {
        title: 'Follow Evidence-Based Sleep Guidelines',
        description: 'Adults need 7-9 hours of sleep per night for optimal health and cognitive function.',
        category: 'Sleep Duration',
        priority: 'high'
      },
      {
        title: 'Practice Good Sleep Hygiene',
        description: 'Maintain regular sleep schedules, create a relaxing bedtime routine, and optimize your sleep environment.',
        category: 'Sleep Hygiene',
        priority: 'high'
      }
    ];
  }
}

// Calculate sleep hours from time strings
export function calculateSleepHours(bedtime: string, wakeTime: string): number {
  const bed = new Date(`2024-01-01 ${bedtime}`);
  let wake = new Date(`2024-01-01 ${wakeTime}`);
  
  // If wake time is earlier than bedtime, it's the next day
  if (wake <= bed) {
    wake = new Date(`2024-01-02 ${wakeTime}`);
  }
  
  const diffMs = wake.getTime() - bed.getTime();
  return diffMs / (1000 * 60 * 60); // Convert to hours
}