import { Link } from 'wouter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useEffect } from 'react';

export function BlogPostHowManySleepCycles() {
  useEffect(() => {
    document.title = "★★★★★ How Many Sleep Cycles Do You Need Per Night? Complete Guide 2025";
    
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
    
    setMeta('description', '★★★★★ Adults need 4-6 sleep cycles per night (6-9 hours). Learn why 5 cycles (7.5 hours) is optimal and how to wake up refreshed by timing your sleep cycles correctly.');
    setMeta('keywords', 'how many sleep cycles per night, adult sleep cycles, optimal sleep duration, sleep cycle calculator, 90 minute sleep cycles, deep sleep stages, sleep efficiency, sleep quality');
    setMeta('og:title', 'How Many Sleep Cycles Do You Need Per Night? Complete Guide 2025');
    setMeta('og:description', 'Adults need 4-6 sleep cycles per night for optimal rest. Discover why 5 cycles (7.5 hours) is ideal and how to wake up refreshed.');
    setMeta('og:type', 'article');
    setMeta('og:url', 'https://sleepcycle.io/blog/how-many-sleep-cycles-per-night');
    setMeta('og:image', 'https://sleepcycle.io/blog-images/sleep-cycles-per-night.png');
    setMeta('og:site_name', 'SleepCycle.io');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', 'How Many Sleep Cycles Do You Need Per Night?');
    setMeta('twitter:description', 'Adults need 4-6 sleep cycles per night. Learn the optimal duration and timing for refreshing sleep.');
    setMeta('twitter:image', 'https://sleepcycle.io/blog-images/sleep-cycles-per-night.png');
    setMeta('author', 'SleepCycle.io Sleep Experts');
    setMeta('article:published_time', '2025-01-18T00:00:00Z');
    setMeta('article:modified_time', '2025-01-20T00:00:00Z');
    setMeta('article:section', 'Sleep Science');
    setMeta('article:tag', 'sleep cycles');
    setMeta('article:tag', 'sleep duration');
    setMeta('article:tag', 'sleep optimization');
    setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://sleepcycle.io/blog/how-many-sleep-cycles-per-night');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }
    
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How Many Sleep Cycles Do You Need Per Night? Complete Guide 2025",
      "description": "Adults need 4-6 sleep cycles per night (6-9 hours). Learn why 5 cycles (7.5 hours) is optimal and how to wake up refreshed.",
      "author": {
        "@type": "Organization",
        "name": "SleepCycle.io Sleep Experts",
        "url": "https://sleepcycle.io"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SleepCycle.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sleepcycle.io/logo.jpg"
        }
      },
      "datePublished": "2025-01-18T00:00:00Z",
      "dateModified": "2025-01-20T00:00:00Z",
      "image": "https://sleepcycle.io/blog-images/sleep-cycles-per-night.png",
      "url": "https://sleepcycle.io/blog/how-many-sleep-cycles-per-night",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://sleepcycle.io/blog/how-many-sleep-cycles-per-night"
      },
      "articleSection": "Sleep Science",
      "keywords": ["how many sleep cycles per night", "adult sleep cycles", "optimal sleep duration"],
      "about": {
        "@type": "Thing",
        "name": "Sleep Cycle Requirements",
        "description": "Optimal number of sleep cycles needed per night for adults"
      }
    };
    
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <article className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium flex items-center mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                Sleep Science
              </span>
              <span>January 18, 2025</span>
              <span>8 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              How Many Sleep Cycles Do You Need Per Night?
            </h1>
            
            <div className="flex justify-center mb-8">
              <img 
                src="/blog-images/sleep-cycles-per-night.png" 
                alt="Sleep cycles per night infographic showing optimal 4-6 cycles for adults with detailed timeline"
                className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Sleep is one of the most powerful factors for health, productivity, and overall well-being. But when it comes to sleep, it's not just about the number of hours—you also need to think about sleep cycles.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Most adults don't realize that waking up in the wrong stage of sleep can leave you groggy, even if you've slept for eight hours. That's why understanding sleep cycles is key to waking up refreshed.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Is a Sleep Cycle?</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A sleep cycle is the progression your brain and body go through during sleep. Each cycle is made up of different stages:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Light Sleep (Stage 1 & 2):</strong> The transition into sleep and early rest.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Deep Sleep (Stage 3):</strong> Essential for physical recovery, cell repair, and immune strength.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">REM Sleep (Stage 4):</strong> Important for memory, creativity, and emotional balance.
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                A full cycle typically lasts 90 minutes. After one finishes, your brain starts another.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Many Sleep Cycles Do Adults Need Per Night?</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                On average, adults need <strong>4–6 sleep cycles per night</strong> to feel fully rested.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">4 cycles</span>
                    <span className="text-gray-700">= 6 hours of sleep</span>
                  </div>
                  <div className="flex justify-between items-center bg-blue-100 p-3 rounded">
                    <span className="font-semibold text-blue-900">5 cycles (OPTIMAL)</span>
                    <span className="text-blue-800 font-medium">= 7.5 hours of sleep</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">6 cycles</span>
                    <span className="text-gray-700">= 9 hours of sleep</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                For most people, <strong>5 cycles (around 7.5 hours) is ideal</strong>. This amount allows your body to complete enough deep sleep and REM stages for recovery and mental sharpness.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Sleep Cycles Matter More Than Hours Slept</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                You've probably experienced waking up groggy even after a full night's sleep. That happens when your alarm pulls you out of deep sleep instead of at the end of a cycle.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">😊</div>
                    <h3 className="font-bold text-green-700 mb-2">Wake Up Refreshed</h3>
                    <p className="text-sm text-gray-700">Waking up in light sleep or REM → You feel refreshed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">😴</div>
                    <h3 className="font-bold text-red-700 mb-2">Wake Up Groggy</h3>
                    <p className="text-sm text-gray-700">Waking up in deep sleep → You feel sluggish and disoriented</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                This is why planning your bedtime around sleep cycles—not just total hours—helps you wake up energized.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Calculate Your Sleep Cycles</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Instead of guessing, you can use tools to calculate when you should sleep or wake up. The best one is <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">SleepCycle.io</Link> – a smart sleep calculator that helps you plan your bedtime and wake-up time around natural sleep cycles.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">With SleepCycle.io, you can:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Enter your desired wake-up time and get recommended bedtimes
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Avoid waking up during deep sleep
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Improve energy, focus, and recovery
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Takeaways</h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Adults need 4-6 sleep cycles per night</strong> (6-9 hours total)</li>
                  <li><strong>5 cycles (7.5 hours) is optimal</strong> for most adults</li>
                  <li><strong>Timing matters more than total hours</strong> - wake up at the end of a cycle</li>
                  <li><strong>Use a sleep cycle calculator</strong> to optimize your sleep schedule</li>
                  <li><strong>Consistent sleep timing</strong> helps regulate your natural cycles</li>
                </ul>
              </div>

              <div className="text-center mt-12">
                <Link href="/">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
                    Calculate Your Optimal Sleep Times
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/sleep-cycle-length" className="block group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    How Long is One Sleep Cycle?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Learn about the 90-minute sleep cycle and its four stages
                  </p>
                </div>
              </Link>
              <Link href="/blog/sleep-cycle-stages" className="block group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    Stages of the Sleep Cycle
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Deep dive into each stage and their importance for health
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}