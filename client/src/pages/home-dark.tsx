import { useEffect } from 'react';
import { DarkSleepCalculator } from '@/components/dark-sleep-calculator';

export default function DarkHomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SleepCycle.io - Optimize Your Sleep with Science";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate optimal sleep times using 90-minute sleep cycles. Free, simple, and scientifically accurate sleep optimization tool.');
    }

    // Add dark theme class to body
    document.body.classList.add('dark-theme');
  }, []);

  return <DarkSleepCalculator />;
}