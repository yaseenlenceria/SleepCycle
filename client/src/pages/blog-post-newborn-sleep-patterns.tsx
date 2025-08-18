import { Link } from 'wouter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function BlogPostNewbornSleepPatterns() {
  return (
    <>
      <head>
        <title>Newborn Sleep Patterns: Complete Parent's Guide by Week & Month | NHS Guidelines 2025</title>
        <meta name="description" content="Expert guide to newborn sleep patterns: 18-22 hours daily, 2-4 hour cycles, feeding schedules. NHS-approved guidance on baby sleep by week/month for worried parents. When to contact pediatrician." />
        <meta name="keywords" content="newborn sleep patterns, baby sleep by week, newborn sleep cycle, how much do newborns sleep, baby sleep patterns by month, NHS newborn sleep, infant sleep guide" />
        <meta property="og:title" content="Newborn Sleep Patterns: Complete Parent's Guide by Week & Month" />
        <meta property="og:description" content="Expert guide to newborn sleep patterns with NHS guidelines. Learn normal sleep duration (18-22 hours), cycles, and feeding schedules by week and month." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://sleepcycle.io/blog/newborn-sleep-patterns" />
        <meta property="og:image" content="https://sleepcycle.io/blog-images/newborn-sleep-patterns.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Newborn Sleep Patterns: Complete Parent's Guide" />
        <meta name="twitter:description" content="NHS-approved guide to newborn sleep patterns. Expert advice on normal sleep duration, cycles, and feeding schedules." />
        <meta name="twitter:image" content="https://sleepcycle.io/blog-images/newborn-sleep-patterns.svg" />
        <meta name="author" content="SleepCycle.io Pediatric Sleep Experts" />
        <meta name="article:published_time" content="2025-01-18T00:00:00Z" />
        <meta name="article:section" content="Newborn Sleep Guide" />
        <link rel="canonical" href="https://sleepcycle.io/blog/newborn-sleep-patterns" />
      </head>
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
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
                Newborn Sleep Guide
              </span>
              <span>January 18, 2025</span>
              <span>10 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Newborn and Baby Sleep Patterns: What Parents Need to Know
            </h1>
            
            <div className="flex justify-center mb-8">
              <img 
                src="/blog-images/newborn-sleep-patterns.svg" 
                alt="Newborn sleep patterns illustration showing baby sleep cycles and feeding schedule"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              One of the biggest challenges for new parents is understanding their baby's sleep. From long naps to night wakings, newborns have very different sleep patterns compared to adults. Knowing what's normal and what to expect at each stage can give you peace of mind and help your baby get the rest they need.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">In this guide, we'll cover:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• How long newborns sleep each day</li>
                <li>• Newborn sleep patterns by week and by month</li>
                <li>• How sleep changes as babies grow</li>
                <li>• NHS guidance on newborn sleep cycles</li>
                <li>• When to feed your baby during the night</li>
                <li>• Signs your newborn may be sleeping too much</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Much Do Newborns Sleep?</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It's normal for newborns to sleep a lot. In fact, newborns can sleep up to 22 hours a day during their first weeks of life. Their sleep is spread out in short bursts of 2–4 hours because their tiny stomachs need frequent feeding.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              So if your baby seems to sleep "all day," don't worry — it's a normal part of development.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Normal Newborn Sleep Duration</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">18-22 Hours</div>
                <p className="text-blue-800 mb-4">per day in the first weeks of life</p>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-blue-900 font-medium">Sleep Bursts:</p>
                    <p className="text-blue-700">2-4 hours at a time</p>
                  </div>
                  <div>
                    <p className="text-blue-900 font-medium">Reason:</p>
                    <p className="text-blue-700">Small stomach needs frequent feeds</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8">
              <p className="text-pink-900 mb-4">
                Use our specialized baby sleep calculators for personalized guidance:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-pink-800 font-medium mb-3">Newborn Sleep:</p>
                  <div className="space-y-2">
                    <Link href="/sleep-cycles-newborns" className="block bg-white text-pink-700 px-3 py-2 rounded-lg border border-pink-200 hover:bg-pink-50 transition-colors text-xs font-medium">
                      Newborn Calculator
                    </Link>
                    <Link href="/baby-nap-calculator-0-12-months" className="block bg-white text-pink-700 px-3 py-2 rounded-lg border border-pink-200 hover:bg-pink-50 transition-colors text-xs font-medium">
                      0-12 Month Calculator
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-pink-800 font-medium mb-3">By Age:</p>
                  <div className="space-y-2">
                    <Link href="/sleep-cycles-4-month-old" className="block bg-white text-pink-700 px-3 py-2 rounded-lg border border-pink-200 hover:bg-pink-50 transition-colors text-xs font-medium">
                      4-Month Sleep
                    </Link>
                    <Link href="/sleep-cycles-6-month-old" className="block bg-white text-pink-700 px-3 py-2 rounded-lg border border-pink-200 hover:bg-pink-50 transition-colors text-xs font-medium">
                      6-Month Sleep
                    </Link>
                    <Link href="/sleep-cycles-7-month-old" className="block bg-white text-pink-700 px-3 py-2 rounded-lg border border-pink-200 hover:bg-pink-50 transition-colors text-xs font-medium">
                      7-Month Sleep
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-pink-800 font-medium mb-3">Toddler Sleep:</p>
                  <div className="space-y-2">
                    <Link href="/toddler-nap-calculator" className="block bg-white text-pink-700 px-3 py-2 rounded-lg border border-pink-200 hover:bg-pink-50 transition-colors text-xs font-medium">
                      Toddler Naps
                    </Link>
                    <Link href="/sleep-cycles-2-year-olds" className="block bg-white text-pink-700 px-3 py-2 rounded-lg border border-pink-200 hover:bg-pink-50 transition-colors text-xs font-medium">
                      2-Year-Old Sleep
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Newborn Sleep Patterns by Week</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Week 1–2</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Sleep Duration:</h4>
                    <p className="text-gray-700 mb-3">18–22 hours a day</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Pattern:</h4>
                    <p className="text-gray-700">Babies wake mainly for feeding, then fall back asleep quickly</p>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-700 mb-2">Normal</div>
                      <p className="text-green-800 text-sm">Sleeping "all day" is expected</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Week 3–4</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Sleep Duration:</h4>
                    <p className="text-gray-700 mb-3">18–20 hours a day</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Pattern:</h4>
                    <p className="text-gray-700">Sleep becomes slightly more predictable, still in 2–3 hour stretches</p>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700 mb-2">2-3 Hours</div>
                      <p className="text-blue-800 text-sm">Between feeding sessions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Week 5–6</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Sleep Duration:</h4>
                    <p className="text-gray-700 mb-3">16–18 hours a day</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Pattern:</h4>
                    <p className="text-gray-700">Some babies begin one longer sleep (4–5 hours) at night, frequent daytime naps</p>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-700 mb-2">4-5 Hours</div>
                      <p className="text-purple-800 text-sm">First longer night sleep</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Baby Sleep Patterns by Month</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As your baby grows, their sleep gradually consolidates into longer stretches.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-3">0–2 Months</h4>
                <p className="text-blue-800 mb-2">16–20 hours of sleep daily</p>
                <p className="text-blue-700 text-sm">Sleep occurs in short cycles throughout day and night</p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-3">3–4 Months</h4>
                <p className="text-green-800 mb-2">14–16 hours a day</p>
                <p className="text-green-700 text-sm">Some babies sleep 5–6 hours at night</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="font-semibold text-purple-900 mb-3">6 Months</h4>
                <p className="text-purple-800 mb-2">Around 14 hours a day</p>
                <p className="text-purple-700 text-sm">Longer night sleep with 2–3 daytime naps</p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-3">9–12 Months</h4>
                <p className="text-orange-800 mb-2">Around 12–14 hours a day</p>
                <p className="text-orange-700 text-sm">Many babies sleep through the night</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Newborn Sleep Cycle (NHS Guidance)</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              According to the NHS, newborns don't have the same structured sleep cycles as adults. They move between light sleep (active sleep) and deep sleep (quiet sleep). Each cycle lasts about 50 minutes.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              That's why newborns wake frequently — it's completely normal and not a sign something is wrong.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h4 className="font-semibold text-yellow-900 mb-3">NHS Key Points:</h4>
              <ul className="text-yellow-800 space-y-2">
                <li>• Newborn sleep cycles are about 50 minutes long</li>
                <li>• They alternate between light sleep (active) and deep sleep (quiet)</li>
                <li>• Frequent waking is completely normal</li>
                <li>• Adult-like sleep patterns develop gradually over months</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Long Should a Newborn Sleep Without Feeding?</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In the first weeks, babies should not go longer than 3–4 hours without feeding, even at night. Their stomachs are small, and they need frequent feeds for healthy growth.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              After the first month, some babies may sleep for 5–6 hours at a time, but always follow your doctor's advice.
            </p>

            <div className="bg-red-50 rounded-xl p-6 mb-8 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 mb-3">Feeding Guidelines:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-red-800 font-medium mb-2">First Month:</p>
                  <p className="text-red-700">Feed every 3-4 hours maximum</p>
                </div>
                <div>
                  <p className="text-red-800 font-medium mb-2">After 1 Month:</p>
                  <p className="text-red-700">May sleep 5-6 hours between feeds</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Is My Newborn Sleeping Too Much?</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most of the time, even very long sleep stretches are normal. However, contact your pediatrician if:
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Contact Your Pediatrician If:</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Your baby consistently sleeps more than 22 hours a day</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">They're very difficult to wake for feeding</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">They show signs of illness (fever, poor feeding, lethargy)</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What If My Newborn Slept 7 Hours Without Feeding?</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It's not uncommon for a newborn to occasionally sleep for a longer stretch, especially at night. But in the first weeks, babies need regular feeds. If your baby sleeps longer than 6–7 hours in the early weeks, it's usually best to wake them for a feed, unless your pediatrician has advised otherwise.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h4 className="font-semibold text-green-900 mb-3">Key Takeaways</h4>
              <ul className="text-green-800 space-y-2">
                <li>• Newborns can sleep up to 22 hours a day</li>
                <li>• Sleep happens in short bursts of 2–4 hours, especially in the first month</li>
                <li>• By month 3–4, babies start to sleep longer stretches</li>
                <li>• The NHS explains newborn sleep cycles last around 50 minutes</li>
                <li>• Babies should be fed every 2–4 hours in the early weeks</li>
                <li>• Always check with a doctor if your baby is excessively sleepy or hard to wake</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every baby is different, but understanding newborn sleep patterns by week and month can help you know what's normal. Newborns need a lot of rest and frequent feeding, and sleep gradually becomes more structured as they grow.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              If you're unsure about your baby's sleep needs, follow NHS guidance and talk to your pediatrician for reassurance.
            </p>

            <div className="bg-gradient-to-r from-pink-600 to-blue-600 rounded-xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Get Personalized Baby Sleep Guidance</h3>
              <p className="text-lg mb-6 opacity-90 text-center">
                Use our specialized calculators for age-specific sleep recommendations and optimal nap timing
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-semibold mb-3 opacity-90">Newborn (0-3m):</p>
                  <div className="space-y-2">
                    <Link href="/sleep-cycles-newborns" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      Newborn Sleep Calculator
                    </Link>
                    <Link href="/baby-nap-calculator-0-12-months" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      0-12 Month Guide
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-3 opacity-90">Infant (4-12m):</p>
                  <div className="space-y-2">
                    <Link href="/sleep-cycles-4-month-old" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      4-Month Sleep
                    </Link>
                    <Link href="/sleep-cycles-6-month-old" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      6-Month Sleep
                    </Link>
                    <Link href="/sleep-cycles-7-month-old" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 transition-colors font-medium">
                      7-Month Sleep
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-3 opacity-90">Toddler (1-3y):</p>
                  <div className="space-y-2">
                    <Link href="/toddler-nap-calculator" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      Toddler Naps
                    </Link>
                    <Link href="/sleep-cycles-2-year-olds" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      2-Year-Old Sleep
                    </Link>
                    <Link href="/blog/baby-nap-duration-guide" className="block bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-colors font-medium">
                      Nap Duration Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-gray-500 font-medium">Tags:</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Newborn Sleep</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Baby Sleep Patterns</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">NHS Guidelines</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Infant Sleep</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Pediatric Sleep</span>
              </div>
              <div className="text-sm text-gray-500">
                Published on January 18, 2025 | Last updated: January 18, 2025 | Reviewed by pediatric sleep specialists | Based on NHS guidelines
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}