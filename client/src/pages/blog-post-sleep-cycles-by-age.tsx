import { Link } from 'wouter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useEffect } from 'react';

export function BlogPostSleepCyclesByAge() {
  useEffect(() => {
    document.title = "Sleep Cycles by Age: How Much Sleep Do You Really Need? | SleepCycle.io 2025";
    
    const setMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    setMeta('description', 'Complete sleep guide by age: newborns need 14-17 hours, adults 7-9 hours. CDC and NHS recommendations with sleep cycles explained for every life stage from babies to seniors.');
    setMeta('keywords', 'sleep cycles by age, how much sleep by age, sleep recommendations CDC, NHS sleep guidelines, baby sleep needs, adult sleep hours, senior sleep patterns');
    setMeta('og:title', 'Sleep Cycles by Age: How Much Sleep Do You Really Need?');
    setMeta('og:description', 'Complete age-based sleep guide with CDC/NHS recommendations. From newborn 14-17 hours to adult 7-9 hours - find your optimal sleep needs.');
    setMeta('og:type', 'article');
    setMeta('og:url', 'https://sleepcycle.io/blog/sleep-cycles-by-age');
    setMeta('og:image', 'https://sleepcycle.io/blog-images/sleep-cycles-by-age.svg');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', 'Sleep Cycles by Age: How Much Sleep You Need (CDC Guidelines)');
    setMeta('twitter:description', 'Expert guide to sleep needs from newborns to seniors. Official CDC/NHS recommendations with sleep cycle breakdowns by age group.');
    setMeta('twitter:image', 'https://sleepcycle.io/blog-images/sleep-cycles-by-age.svg');
    setMeta('author', 'SleepCycle.io Sleep Experts');
    setMeta('article:published_time', '2025-01-18T00:00:00Z');
    setMeta('article:section', 'Sleep Science');
    
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://sleepcycle.io/blog/sleep-cycles-by-age');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium flex items-center mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                Sleep Science
              </span>
              <span>January 18, 2025</span>
              <span>10 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Sleep Cycles by Age: How Much Sleep Do You Really Need?
            </h1>
            
            <div className="flex justify-center mb-8">
              <img 
                src="/blog-images/sleep-cycles-by-age.svg" 
                alt="Sleep requirements by age chart showing CDC and NHS recommended sleep hours from newborns to seniors with sleep cycle breakdowns"
                className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Sleep needs aren't the same for everyone. A newborn's sleep looks very different from a teenager's or a senior's. That's because our sleep cycles—and how many hours we need—change as we age.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              According to the <strong>CDC and NHS</strong>, the recommended amount of sleep varies significantly by age group. Let's break it down so you know exactly how much sleep you (or your child) really need.
            </p>

            <h2>What Is a Sleep Cycle?</h2>
            
            <p>A sleep cycle is a 90-minute rhythm made up of:</p>
            
            <ul>
              <li><strong>Light sleep (stages 1 & 2)</strong> – transition and early rest</li>
              <li><strong>Deep sleep (stage 3)</strong> – physical recovery and repair</li>
              <li><strong>REM sleep (stage 4)</strong> – dreaming, learning, and memory consolidation</li>
            </ul>
            
            <p>
              Most adults need 4–6 cycles per night, while babies and children need more frequent, shorter cycles throughout the day and night.
            </p>

            <h2>Sleep Needs by Age (NHS & CDC Recommendations)</h2>
            
            <p>Here's the official breakdown of how much sleep different age groups need according to leading health authorities:</p>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Age Group</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900 border-b">Sleep Hours (per 24h)</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900 border-b">Sleep Cycles</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Important Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-blue-50">
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">Newborns (0–3 mo)</td>
                    <td className="px-4 py-4 text-sm text-center font-semibold text-blue-600">14–17 hours</td>
                    <td className="px-4 py-4 text-sm text-center text-gray-600">8–9 cycles</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Sleep is spread across day & night in short bursts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">Infants (4–12 mo)</td>
                    <td className="px-4 py-4 text-sm text-center font-semibold text-purple-600">12–16 hours</td>
                    <td className="px-4 py-4 text-sm text-center text-gray-600">7–8 cycles</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Regular night sleep develops + daytime naps</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">Toddlers (1–2 yrs)</td>
                    <td className="px-4 py-4 text-sm text-center font-semibold text-green-600">11–14 hours</td>
                    <td className="px-4 py-4 text-sm text-center text-gray-600">6–7 cycles</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Need consistent bedtime routines + naps</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">Children (3–5 yrs)</td>
                    <td className="px-4 py-4 text-sm text-center font-semibold text-orange-600">10–13 hours</td>
                    <td className="px-4 py-4 text-sm text-center text-gray-600">6–7 cycles</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Sleep consolidates mainly at night</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">School-age (6–12 yrs)</td>
                    <td className="px-4 py-4 text-sm text-center font-semibold text-yellow-600">9–12 hours</td>
                    <td className="px-4 py-4 text-sm text-center text-gray-600">5–6 cycles</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Critical for learning & physical growth</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">Teenagers (13–18 yrs)</td>
                    <td className="px-4 py-4 text-sm text-center font-semibold text-red-600">8–10 hours</td>
                    <td className="px-4 py-4 text-sm text-center text-gray-600">5–6 cycles</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Natural "night owl" tendency creates sleep debt</td>
                  </tr>
                  <tr className="bg-indigo-50">
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">Adults (18–64 yrs)</td>
                    <td className="px-4 py-4 text-sm text-center font-semibold text-indigo-600">7–9 hours</td>
                    <td className="px-4 py-4 text-sm text-center text-gray-600">4–6 cycles</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Most feel best with 7.5 hours (5 cycles)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">Older Adults (65+ yrs)</td>
                    <td className="px-4 py-4 text-sm text-center font-semibold text-gray-600">7–8 hours</td>
                    <td className="px-4 py-4 text-sm text-center text-gray-600">4–5 cycles</td>
                    <td className="px-4 py-4 text-sm text-gray-600">Lighter sleep, earlier wake times</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Sources:</strong> National Health Service (NHS), Centers for Disease Control and Prevention (CDC), American Academy of Sleep Medicine, Sleep Foundation
                  </p>
                </div>
              </div>
            </div>

            <h2>Why Sleep Needs Change With Age</h2>
            
            <p>Understanding why sleep requirements vary by age helps explain the importance of getting adequate rest at every life stage:</p>

            <h3>Babies and Toddlers (0-2 years)</h3>
            <ul>
              <li><strong>High REM sleep:</strong> Spend 50% of sleep in REM, essential for rapid brain development</li>
              <li><strong>Frequent cycles:</strong> Shorter 50-60 minute cycles instead of adult 90-minute cycles</li>
              <li><strong>Growth spurts:</strong> Deep sleep releases growth hormone crucial for physical development</li>
              <li><strong>Learning consolidation:</strong> Process massive amounts of new sensory information daily</li>
            </ul>

            <h3>Children and School-Age (3-12 years)</h3>
            <ul>
              <li><strong>Physical growth:</strong> Need extended deep sleep for bone and muscle development</li>
              <li><strong>Cognitive development:</strong> Sleep supports learning, memory formation, and academic performance</li>
              <li><strong>Immune system:</strong> Adequate sleep crucial for fighting infections and staying healthy</li>
              <li><strong>Emotional regulation:</strong> Sleep helps develop emotional control and social skills</li>
            </ul>

            <h3>Teenagers (13-18 years)</h3>
            <ul>
              <li><strong>Biological shift:</strong> Circadian rhythm naturally delays, making teens "night owls"</li>
              <li><strong>Melatonin timing:</strong> Hormone release shifts 2 hours later than in children and adults</li>
              <li><strong>Academic pressure:</strong> Often sacrifice sleep for homework, creating chronic sleep debt</li>
              <li><strong>Social factors:</strong> Technology use and social activities further delay bedtime</li>
            </ul>

            <h3>Adults (18-64 years)</h3>
            <ul>
              <li><strong>Stable patterns:</strong> Circadian rhythm stabilizes into consistent sleep-wake cycles</li>
              <li><strong>Maintenance mode:</strong> Sleep focus shifts from growth to repair and restoration</li>
              <li><strong>Cognitive performance:</strong> Optimal sleep maintains alertness, decision-making, and productivity</li>
              <li><strong>Health maintenance:</strong> Supports immune function, hormone regulation, and mental health</li>
            </ul>

            <h3>Older Adults (65+ years)</h3>
            <ul>
              <li><strong>Architecture changes:</strong> Less deep sleep and more light sleep stages</li>
              <li><strong>Advanced sleep phase:</strong> Natural tendency to sleep and wake earlier</li>
              <li><strong>Fragmented sleep:</strong> More frequent awakenings throughout the night</li>
              <li><strong>Medical factors:</strong> Medications and health conditions can affect sleep quality</li>
            </ul>

            <h2>Age-Specific Sleep Challenges and Solutions</h2>

            <h3>Newborns and Infants</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Common Challenges:</h4>
              <ul className="mb-4">
                <li>Irregular sleep patterns</li>
                <li>Frequent night wakings</li>
                <li>Day/night confusion</li>
                <li>Short sleep cycles</li>
              </ul>
              <h4 className="font-semibold mb-3">Solutions:</h4>
              <ul>
                <li>Create consistent bedtime routines</li>
                <li>Use <Link href="/baby-nap-calculator-0-12-months" className="text-blue-600 hover:text-blue-800">baby nap calculators</Link> for optimal timing</li>
                <li>Establish day/night differences (light/dark, activity/quiet)</li>
                <li>Be patient - patterns develop gradually</li>
              </ul>
            </div>

            <h3>School-Age Children</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Common Challenges:</h4>
              <ul className="mb-4">
                <li>Homework and activity schedules</li>
                <li>Screen time before bed</li>
                <li>Weekend sleep schedule disruption</li>
                <li>Sleep anxiety or resistance</li>
              </ul>
              <h4 className="font-semibold mb-3">Solutions:</h4>
              <ul>
                <li>Set consistent bedtimes, even on weekends</li>
                <li>Create technology-free bedrooms</li>
                <li>Use <Link href="/sleep-calculator-by-age" className="text-blue-600 hover:text-blue-800">age-specific sleep calculators</Link></li>
                <li>Establish calming bedtime routines</li>
              </ul>
            </div>

            <h3>Teenagers</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Common Challenges:</h4>
              <ul className="mb-4">
                <li>Natural tendency to stay up late</li>
                <li>Early school start times</li>
                <li>Academic and social pressures</li>
                <li>Technology and social media use</li>
              </ul>
              <h4 className="font-semibold mb-3">Solutions:</h4>
              <ul>
                <li>Prioritize weekend sleep catch-up (within limits)</li>
                <li>Use blue light filters in evenings</li>
                <li>Advocate for later school start times when possible</li>
                <li>Educate about long-term sleep debt consequences</li>
              </ul>
            </div>

            <h3>Adults</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Common Challenges:</h4>
              <ul className="mb-4">
                <li>Work-life balance and stress</li>
                <li>Shift work schedules</li>
                <li>Technology use and screen time</li>
                <li>Lifestyle factors (caffeine, alcohol, exercise)</li>
              </ul>
              <h4 className="font-semibold mb-3">Solutions:</h4>
              <ul>
                <li>Use <Link href="/90-minute-sleep-cycle-calculator" className="text-blue-600 hover:text-blue-800">90-minute cycle calculators</Link> for optimal timing</li>
                <li>Maintain consistent sleep schedules</li>
                <li>Create sleep-conducive environments</li>
                <li>Practice good sleep hygiene</li>
              </ul>
            </div>

            <h2>How to Calculate Your Optimal Sleep Schedule</h2>
            
            <p>Knowing your age-appropriate sleep needs is only the first step. The key to feeling refreshed is timing your sleep around complete 90-minute cycles:</p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Step-by-Step Sleep Optimization:</h3>
              <ol className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  <div>
                    <strong>Find your age group</strong> in the table above for recommended sleep hours
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  <div>
                    <strong>Calculate sleep cycles:</strong> Divide total hours by 1.5 to get your cycle count
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  <div>
                    <strong>Work backwards</strong> from your desired wake time using complete cycles
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  <div>
                    <strong>Add buffer time:</strong> Include 15-20 minutes to fall asleep
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                  <div>
                    <strong>Stay consistent:</strong> Maintain the same schedule daily, even weekends
                  </div>
                </li>
              </ol>
            </div>

            <h2>Sleep Quality vs. Quantity by Age</h2>
            
            <p>While duration is important, sleep quality becomes increasingly crucial as we age:</p>

            <ul>
              <li><strong>Infants and children:</strong> Focus primarily on getting enough total sleep hours</li>
              <li><strong>Teenagers:</strong> Balance quantity needs with realistic schedules</li>
              <li><strong>Adults:</strong> Optimize both duration and timing for complete cycles</li>
              <li><strong>Seniors:</strong> Prioritize sleep quality and consistency over perfect duration</li>
            </ul>

            <h2>When Age-Based Sleep Recommendations Don't Work</h2>
            
            <p>Individual variation is normal. You may need adjustments if you:</p>
            
            <ul>
              <li>Have medical conditions affecting sleep</li>
              <li>Take medications that impact sleep patterns</li>
              <li>Work non-traditional hours or shift schedules</li>
              <li>Are pregnant or breastfeeding</li>
              <li>Are extremely active or have high physical demands</li>
              <li>Are recovering from illness or surgery</li>
            </ul>

            <p>In these cases, consult with healthcare providers for personalized sleep recommendations.</p>

            <h2>The Bottom Line: Sleep Needs Are Age-Dependent</h2>
            
            <p>
              Your sleep needs change throughout your life, and that's completely normal. From the 14-17 hours newborns need for crucial brain development to the 7-8 hours that work well for older adults, each life stage has specific requirements backed by scientific research.
            </p>
            
            <p>
              The key is understanding your current life stage needs and optimizing your sleep timing around complete 90-minute cycles. This approach helps you wake up feeling refreshed rather than groggy, regardless of your age.
            </p>

            <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Find Your Optimal Sleep Schedule</h3>
              <p className="text-blue-700 mb-4">
                Ready to optimize your sleep based on your age and lifestyle? Use our age-specific sleep calculators to find your perfect bedtime and wake schedule.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/sleep-calculator-by-age">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Age-Specific Calculator
                  </button>
                </Link>
                <Link href="/baby-nap-calculator-0-12-months">
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                    Baby Sleep Calculator
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/how-many-sleep-cycles-per-night">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">How Many Sleep Cycles Do You Need Per Night?</h4>
                  <p className="text-gray-600 text-sm">Learn about optimal sleep cycles for adults and why 5 cycles works best for most people.</p>
                </div>
              </Link>
              <Link href="/blog/best-time-sleep-wake-up">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Best Time to Sleep and Wake Up According to Science</h4>
                  <p className="text-gray-600 text-sm">Discover the scientifically proven best bedtimes for common wake times.</p>
                </div>
              </Link>
              <Link href="/blog/2-year-old-sleep-cycle">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">How Long Is a Sleep Cycle for a 2-Year-Old?</h4>
                  <p className="text-gray-600 text-sm">Understand toddler sleep patterns and how they differ from adult cycles.</p>
                </div>
              </Link>
              <Link href="/sleep-calculator-by-age">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Sleep Calculator by Age Tool</h4>
                  <p className="text-gray-600 text-sm">Calculate your optimal sleep schedule based on your specific age group.</p>
                </div>
              </Link>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}