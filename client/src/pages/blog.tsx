import { Link } from 'wouter';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function BlogPage() {
  return (
    <>
      <head>
        <title>Sleep Science Blog: Expert Guides & Research from SleepCycle.io | 2025</title>
        <meta name="description" content="Expert sleep science blog with research-backed guides on sleep cycles, stages, optimization tips, and baby sleep advice. Join 10M+ users getting better sleep with SleepCycle.io's trusted insights." />
        <meta name="keywords" content="sleep science blog, sleep cycle guide, sleep stages, baby sleep advice, sleep optimization, sleep research, sleep calculator blog" />
        <meta property="og:title" content="Sleep Science Blog: Expert Guides & Research from SleepCycle.io" />
        <meta property="og:description" content="Research-backed sleep guides, optimization tips, and expert advice from the world's #1 sleep platform. Trusted by 10M+ users worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sleepcycle.io/blog" />
        <meta property="og:image" content="https://sleepcycle.io/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sleep Science Blog from SleepCycle.io" />
        <meta name="twitter:description" content="Expert sleep guides, research, and optimization tips from the world's most trusted sleep platform." />
        <meta name="twitter:image" content="https://sleepcycle.io/logo.jpg" />
        <link rel="canonical" href="https://sleepcycle.io/blog" />
      </head>
      <Header />
      <BlogContent />
      <Footer />
    </>
  );
}

function BlogContent() {
  const blogPosts = [
    {
      id: 'sleep-cycle-length',
      title: 'How Long is One Sleep Cycle? A Complete Guide',
      excerpt: 'Sleep is divided into cycles, each made up of multiple stages. Understanding how long a sleep cycle lasts and how many cycles you need can help you wake up refreshed and improve your well-being.',
      date: 'January 18, 2025',
      readTime: '8 min read',
      category: 'Sleep Fundamentals',
      image: '/blog-images/sleep-cycle-length.svg'
    },
    {
      id: 'sleep-stages-guide',
      title: 'Sleep Cycle Stages: A Complete Guide to Better Sleep',
      excerpt: 'Sleep is not just about closing your eyes and resting—it\'s a structured process your body goes through every night. Understanding the stages can help improve your health and well-being.',
      date: 'January 18, 2025',
      readTime: '7 min read',
      category: 'Sleep Education',
      image: '/blog-images/sleep-stages.svg'
    },
    {
      id: 'sleep-cycle-stages',
      title: 'Stages of the Sleep Cycle: Everything You Need to Know',
      excerpt: 'Sleep is not just a time when your body shuts down. It\'s an active process that occurs in different stages, each with a unique purpose for physical restoration, memory, and emotional health.',
      date: 'January 18, 2025',
      readTime: '9 min read',
      category: 'Sleep Science',
      image: '/blog-images/sleep-cycle-stages.svg'
    },
    {
      id: 'sleep-cycle-myth',
      title: 'The 90-Minute Sleep Cycle Myth: What Science Actually Says About Sleep Patterns',
      excerpt: 'The popular belief that everyone sleeps in perfect 90-minute cycles has become widespread online, but the scientific reality is far more complex and individualized.',
      date: 'January 18, 2025',
      readTime: '10 min read',
      category: 'Sleep Science',
      image: '/blog-images/sleep-myth.svg'
    },
    {
      id: 'sleepcycle-worldwide-launch',
      title: 'SleepCycle.io Officially Launches Worldwide: Revolutionizing Sleep Health with AI-Powered Sleep Cycle Calculator',
      excerpt: 'After 3 years of development and testing with over 10 million users, SleepCycle.io officially launches globally as the world\'s most trusted sleep optimization platform.',
      date: 'January 18, 2025',
      readTime: '5 min read',
      category: 'Company News',
      image: '/blog-images/company-launch.svg'
    },
    {
      id: 'baby-nap-duration-guide',
      title: 'How Long Should a Baby Nap? Complete Age-Based Guide for Optimal Infant Sleep',
      excerpt: 'Expert pediatric sleep guidance on optimal nap duration for babies 0-24 months. Science-based recommendations for healthy sleep development.',
      date: 'January 18, 2025',
      readTime: '8 min read',
      category: 'Baby Sleep Guide',
      image: '/blog-images/baby-naps.svg'
    },
    {
      id: 'newborn-sleep-patterns',
      title: 'Newborn and Baby Sleep Patterns: What Parents Need to Know',
      excerpt: 'One of the biggest challenges for new parents is understanding their baby\'s sleep. Learn normal newborn sleep patterns by week and month with NHS guidelines for worried parents.',
      date: 'January 18, 2025',
      readTime: '10 min read',
      category: 'Newborn Sleep Guide',
      image: '/blog-images/newborn-sleep-patterns.svg'
    },
    {
      id: 'best-sleep-doctors-los-angeles',
      title: '10 Best Sleep Doctors & Sleep Centers in Los Angeles (2025)',
      excerpt: 'Complete guide to top sleep medicine specialists in LA. Find expert treatment for sleep apnea, insomnia, snoring at UCLA, USC, Cedars-Sinai and leading private practices with contact details.',
      date: 'January 18, 2025',
      readTime: '12 min read',
      category: 'Sleep Medicine Directory',
      image: '/blog-images/la-sleep-doctors.svg'
    }
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sleep Science Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights, research-backed advice, and the latest updates from the world's most trusted sleep optimization platform
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
              <div className="aspect-[16/10] bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium text-xs sm:text-sm">
                    {post.category}
                  </span>
                  <span className="text-xs sm:text-sm">{post.date}</span>
                  <span className="text-xs sm:text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm sm:text-base flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center justify-center text-blue-600 hover:text-blue-700 font-semibold transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg text-sm sm:text-base mt-auto"
                >
                  Read Full Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with Sleep Science
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Get the latest sleep research, optimization tips, and platform updates delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}