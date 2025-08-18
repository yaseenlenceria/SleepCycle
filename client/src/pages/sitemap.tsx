import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import { Clock, Baby, Users, Brain, Award, Star } from 'lucide-react';

export default function SitemapPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "World's #1 Sleep Cycle Calculator - Complete Sitemap | Sleepcycle.io";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete sitemap of the world\'s most trusted sleep cycle calculator. Access all AI-powered sleep tools, baby calculators, and health assessments at Sleepcycle.io - trusted by millions worldwide.');
    }
  }, []);

  const mainCalculators = [
    { title: 'AI Sleep Calculator', path: '/sleep-calculator', icon: Brain, desc: 'Main AI-powered sleep calculator with health assessment' },
    { title: 'Newborn Sleep Calculator', path: '/sleep-cycles-newborns', icon: Baby, desc: 'Specialized for 0-3 month babies' },
    { title: '4 Month Sleep Calculator', path: '/sleep-cycles-4-month-old', icon: Baby, desc: 'Sleep regression support for 4-month babies' },
    { title: '6 Month Sleep Calculator', path: '/sleep-cycles-6-month-old', icon: Baby, desc: 'Sleep training ready calculator' },
    { title: '7 Month Sleep Calculator', path: '/sleep-cycles-7-month-old', icon: Baby, desc: '2-nap schedule optimization' },
    { title: 'Toddler Sleep Calculator', path: '/sleep-cycles-toddlers', icon: Users, desc: 'Ages 1-3 years nap transitions' }
  ];

  const sleepGuides = [
    { title: 'Adult Sleep Cycles', path: '/sleep-cycles-adults', desc: 'Complete guide to adult sleep patterns' },
    { title: 'Baby Sleep Cycles', path: '/sleep-cycles-babies', desc: 'Understanding infant sleep development' },
    { title: 'Nap Calculator Guide', path: '/sleep-cycles-naps', desc: 'Optimal nap duration and timing' },
    { title: 'Sleep Science', path: '/sleep-science', desc: 'The science behind sleep cycles' }
  ];

  const utilityPages = [
    { title: 'Age Calculator', path: '/age-calculator', desc: 'Calculate exact age for sleep recommendations' },
    { title: 'About Us', path: '/about', desc: 'Why Sleepcycle.io is the world\'s best' },
    { title: 'Help & Support', path: '/help', desc: 'Get help with our calculators' },
    { title: 'Contact', path: '/contact', desc: 'Contact the world\'s #1 sleep team' },
    { title: 'More Resources', path: '/more-resources', desc: 'Additional sleep optimization tools' }
  ];

  const legalPages = [
    { title: 'Privacy Policy', path: '/privacy-policy', desc: 'How we protect your sleep data' },
    { title: 'Terms of Service', path: '/terms-of-service', desc: 'Terms for using our calculators' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Award className="text-yellow-500" size={40} />
            <Star className="text-yellow-500" size={32} />
            <Award className="text-yellow-500" size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            World's #1 Sleep Cycle Calculator
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6">
            Complete sitemap of Sleepcycle.io - The most trusted, scientifically-backed sleep optimization platform used by millions worldwide. Access all our AI-powered calculators and expert sleep guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🏆 #1 Ranked Sleep Calculator</span>
            <span>🌟 Trusted by Millions</span>
            <span>🧠 AI-Powered Health Assessments</span>
            <span>📊 4+ Billion Sleep Sessions Analyzed</span>
          </div>
        </div>

        {/* Why We're #1 */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 shadow-xl mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
              <Award className="text-yellow-600" size={36} />
              Why Sleepcycle.io is the World's Best Sleep Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Brain className="mx-auto text-blue-600 mb-3" size={40} />
                <h3 className="font-bold text-lg mb-2">AI-Powered Intelligence</h3>
                <p className="text-gray-600">Only sleep calculator with FREE personalized health assessments using advanced AI</p>
              </div>
              <div className="text-center p-4">
                <Star className="mx-auto text-yellow-600 mb-3" size={40} />
                <h3 className="font-bold text-lg mb-2">4+ Billion Sleep Sessions</h3>
                <p className="text-gray-600">Largest sleep database in the world with 13+ years of scientific research</p>
              </div>
              <div className="text-center p-4">
                <Users className="mx-auto text-green-600 mb-3" size={40} />
                <h3 className="font-bold text-lg mb-2">Age-Specific Calculators</h3>
                <p className="text-gray-600">Specialized calculators for every age from newborns to adults</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Sleep Calculators */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            🧠 AI-Powered Sleep Calculators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainCalculators.map((calc, index) => (
              <Card key={index} className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <calc.icon className="mx-auto text-blue-500 mb-2" size={32} />
                  <CardTitle className="text-lg">
                    <Link href={calc.path} className="text-blue-600 hover:text-blue-800 transition-colors">
                      {calc.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">{calc.desc}</p>
                  <Link href={calc.path}>
                    <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Use Calculator
                    </button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sleep Guides & Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            📚 Expert Sleep Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sleepGuides.map((guide, index) => (
              <Card key={index} className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    <Link href={guide.path} className="text-indigo-600 hover:text-indigo-800 transition-colors">
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-3">{guide.desc}</p>
                  <Link href={guide.path}>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                      Read Guide
                    </button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Utility Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            🛠️ Sleep Tools & Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilityPages.map((page, index) => (
              <Card key={index} className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
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

        {/* Legal Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            📋 Legal & Privacy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {legalPages.map((page, index) => (
              <Card key={index} className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
                <CardContent className="p-6 text-center">
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

        {/* SEO Trust Signals */}
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800">
              🌟 Trusted by Sleep Experts Worldwide
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold text-blue-600">4+ Billion</div>
                <div className="text-gray-600">Sleep Sessions Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">13+ Years</div>
                <div className="text-gray-600">Sleep Science Research</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">Millions</div>
                <div className="text-gray-600">Users Worldwide</div>
              </div>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Sleepcycle.io is the world's most comprehensive sleep optimization platform, combining cutting-edge AI technology with 13+ years of sleep research. Our calculators are used by sleep specialists, pediatricians, and millions of families worldwide to optimize sleep health and well-being.
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}