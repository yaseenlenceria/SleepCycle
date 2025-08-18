import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';

export default function SitemapPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Complete Sitemap - SleepCycle.io | World's #1 Sleep Calculator 2025";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete sitemap of SleepCycle.io - Browse all sleep calculators, age-specific tools, expert blog posts, and comprehensive sleep guides. Find everything you need for optimal sleep.');
    }
    
    // Enhanced SEO meta tags
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
    
    setMeta('keywords', 'sitemap, sleep calculator, sleep cycle calculator, baby sleep, nap calculator, sleep blog, sleep guides');
    setMeta('og:title', 'Complete Sitemap - SleepCycle.io Sleep Calculator');
    setMeta('og:description', 'Browse all sleep calculators, tools, and expert content from the world\'s most trusted sleep platform.');
    setMeta('og:type', 'website');
    setMeta('og:url', 'https://sleepcycle.io/sitemap');
    setMeta('twitter:card', 'summary');
    setMeta('robots', 'index, follow');
  }, []);

  const sleepCalculators = [
    { title: 'Sleep Cycle Calculator', path: '/', desc: 'Main sleep calculator with bedtime and wake-up optimization' },
    { title: 'Sleep Calculator', path: '/sleep-calculator', desc: 'Comprehensive sleep optimization tool' },
    { title: '90-Minute Sleep Cycle Calculator', path: '/90-minute-sleep-cycle-calculator', desc: 'Calculate optimal wake times using 90-minute cycles' },
    { title: 'How Much Sleep Did I Get Calculator', path: '/how-much-sleep-did-i-get-calculator', desc: 'Track and calculate your actual sleep duration' },
    { title: 'Sleep Calculator by Age', path: '/sleep-calculator-by-age', desc: 'Age-specific sleep recommendations and calculators' },
    { title: 'Best Sleep Calculator by Age', path: '/best-sleep-calculator-by-age', desc: 'Optimized calculators for different age groups' },
    { title: 'Nap Calculator', path: '/nap-calculator', desc: 'Calculate optimal nap duration and timing' },
    { title: 'Baby Nap Calculator (0-12 months)', path: '/baby-nap-calculator-0-12-months', desc: 'Specialized nap calculator for infants' }
  ];

  const babyToddlerSleep = [
    { title: 'Newborn Sleep Cycles (0-3 months)', path: '/sleep-cycles-newborns', desc: 'Sleep patterns for newborns' },
    { title: '4-Month-Old Sleep Cycles', path: '/sleep-cycles-4-month-old', desc: 'Sleep regression and development at 4 months' },
    { title: '6-Month-Old Sleep Cycles', path: '/sleep-cycles-6-month-old', desc: 'Sleep training readiness at 6 months' },
    { title: '7-Month-Old Sleep Cycles', path: '/sleep-cycles-7-month-old', desc: 'Optimal sleep schedules for 7-month-olds' },
    { title: '2-Year-Old Sleep Cycles', path: '/sleep-cycles-2-year-olds', desc: 'Toddler sleep patterns and schedules' },
    { title: 'Toddler Sleep Cycles', path: '/sleep-cycles-toddlers', desc: 'Sleep guidance for ages 1-3 years' },
    { title: 'Baby Sleep Cycles', path: '/sleep-cycles-babies', desc: 'Understanding infant sleep development' }
  ];

  const adultSleepGuides = [
    { title: 'Adult Sleep Cycles', path: '/sleep-cycles-adults', desc: 'Complete guide to adult sleep patterns' },
    { title: 'Nap Calculator Guide', path: '/sleep-cycles-naps', desc: 'Optimal nap duration and timing for adults' },
    { title: 'Sleep Science', path: '/sleep-science', desc: 'The science behind sleep cycles and optimization' },
    { title: 'Why Best Sleep Calculator', path: '/why-best-sleep-calculator', desc: 'What makes our calculator the best choice' }
  ];

  const blogPosts = [
    { title: 'The Best Time to Go to Sleep and Wake Up (According to Science)', path: '/blog/best-time-sleep-wake-up', category: 'Sleep Optimization' },
    { title: 'How Many Sleep Cycles Do You Need Per Night?', path: '/blog/how-many-sleep-cycles-per-night', category: 'Sleep Science' },
    { title: 'How Long is One Sleep Cycle? A Complete Guide', path: '/blog/sleep-cycle-length', category: 'Sleep Science' },
    { title: 'How Long Is a Full Sleep Cycle?', path: '/blog/full-sleep-cycle-length', category: 'Sleep Science' },
    { title: 'Sleep Cycle Stages: A Complete Guide to Better Sleep', path: '/blog/sleep-stages-guide', category: 'Sleep Education' },
    { title: 'Stages of the Sleep Cycle: Everything You Need to Know', path: '/blog/sleep-cycle-stages', category: 'Sleep Science' },
    { title: 'The 90-Minute Sleep Cycle Myth: What Science Actually Says', path: '/blog/sleep-cycle-myth', category: 'Sleep Science' },
    { title: 'What Is the Uberman Sleep Cycle?', path: '/blog/uberman-sleep-cycle', category: 'Sleep Patterns' },
    { title: 'Best Sleep Cycle for Night Shift Workers', path: '/blog/night-shift-sleep-cycle', category: 'Work & Sleep' },
    { title: 'Baby Nap Duration Guide: How Long Should Your Baby Nap?', path: '/blog/baby-nap-duration-guide', category: 'Baby Sleep' },
    { title: 'Newborn and Baby Sleep Patterns: What Parents Need to Know', path: '/blog/newborn-sleep-patterns', category: 'Baby Sleep' },
    { title: 'How Long Is a Sleep Cycle for a 2-Year-Old?', path: '/blog/2-year-old-sleep-cycle', category: 'Toddler Sleep' },
    { title: '10 Best Sleep Doctors & Sleep Centers in Los Angeles 2025', path: '/blog/best-sleep-doctors-los-angeles', category: 'Sleep Medicine' },
    { title: 'Best Sleep Apps 2025: Top Rated Sleep Tracking Apps', path: '/blog/best-sleep-apps-2025', category: 'Sleep Technology' },
    { title: 'SleepCycle.io Officially Launches Worldwide', path: '/blog/sleepcycle-worldwide-launch', category: 'Company News' }
  ];

  const utilityPages = [
    { title: 'Age Calculator', path: '/age-calculator', desc: 'Calculate exact age for sleep recommendations' },
    { title: 'Blog', path: '/blog', desc: 'Expert sleep science articles and guides' },
    { title: 'About Us', path: '/about', desc: 'About SleepCycle.io and our mission' },
    { title: 'Help & Support', path: '/help', desc: 'Get help with our calculators and tools' },
    { title: 'Contact', path: '/contact', desc: 'Contact our sleep experts' },
    { title: 'More Resources', path: '/more-resources', desc: 'Additional sleep optimization resources' }
  ];

  const legalPages = [
    { title: 'Privacy Policy', path: '/privacy-policy', desc: 'How we protect your privacy and data' },
    { title: 'Terms of Service', path: '/terms-of-service', desc: 'Terms of use for our platform' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Website Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Browse all pages, calculators, and resources from SleepCycle.io - the world's most comprehensive sleep optimization platform. Find everything you need for better sleep.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-lg inline-block">
            <p className="text-lg font-semibold text-gray-800 mb-2">Quick Navigation</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#calculators" className="text-blue-600 hover:text-blue-800">Sleep Calculators</a>
              <a href="#baby-sleep" className="text-purple-600 hover:text-purple-800">Baby & Toddler</a>
              <a href="#adult-sleep" className="text-green-600 hover:text-green-800">Adult Sleep</a>
              <a href="#blog" className="text-orange-600 hover:text-orange-800">Blog Posts</a>
              <a href="#tools" className="text-indigo-600 hover:text-indigo-800">Tools & Support</a>
            </div>
          </div>
        </div>

        {/* Sleep Calculators */}
        <section id="calculators" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sleep Calculators & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sleepCalculators.map((calc, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={calc.path} className="text-blue-600 hover:text-blue-800 transition-colors">
                      {calc.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">{calc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Baby & Toddler Sleep */}
        <section id="baby-sleep" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Baby & Toddler Sleep</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {babyToddlerSleep.map((page, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={page.path} className="text-purple-600 hover:text-purple-800 transition-colors">
                      {page.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">{page.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Adult Sleep Guides */}
        <section id="adult-sleep" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Adult Sleep Guides & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adultSleepGuides.map((guide, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={guide.path} className="text-green-600 hover:text-green-800 transition-colors">
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">{guide.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section id="blog" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Expert Sleep Science Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold flex-1">
                      <Link href={post.path} className="text-orange-600 hover:text-orange-800 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                  </div>
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/blog">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                View All Blog Posts
              </button>
            </Link>
          </div>
        </section>

        {/* Tools & Support */}
        <section id="tools" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tools & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {utilityPages.map((page, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={page.path} className="text-indigo-600 hover:text-indigo-800 transition-colors">
                      {page.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">{page.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Legal Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal & Privacy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {legalPages.map((page, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-5 text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={page.path} className="text-gray-600 hover:text-gray-800 transition-colors">
                      {page.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">{page.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Summary */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Sleep Optimization Platform
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-6">
              SleepCycle.io offers the most comprehensive collection of sleep calculators, expert guides, and scientific resources. 
              From newborn sleep schedules to adult optimization, find everything you need for better sleep health.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">8+</div>
                <div className="text-gray-600 text-sm">Sleep Calculators</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">7+</div>
                <div className="text-gray-600 text-sm">Baby/Toddler Tools</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">13+</div>
                <div className="text-gray-600 text-sm">Expert Articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-gray-600 text-sm">Free Access</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}