export const getSleepInsight = async (targetTime: string, mode: string): Promise<string> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const insights = {
    WAKE: [
      "Waking up at the end of a complete sleep cycle helps you feel more refreshed and alert throughout the day.",
      "Your body naturally follows 90-minute sleep cycles. Waking at the right time reduces grogginess and improves cognitive function.",
      "The golden window for waking allows your brain to complete its important cleaning and memory consolidation processes.",
      "By aligning with your natural sleep rhythm, you'll experience better mood regulation and physical energy."
    ],
    SLEEP: [
      "Going to bed now will optimize your sleep cycles for maximum restorative benefits and mental clarity.",
      "Your sleep cycles work in 90-minute patterns. Waking between cycles helps you feel naturally refreshed.",
      "The suggested wake times align with your body's natural rhythm, reducing sleep inertia and morning grogginess.",
      "Quality sleep following these cycles supports better memory, immune function, and overall wellbeing."
    ]
  };

  const modeInsights = insights[mode as keyof typeof insights] || insights.WAKE;
  return modeInsights[Math.floor(Math.random() * modeInsights.length)];
};