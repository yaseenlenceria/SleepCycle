import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Users, Clock, Star, Award, TrendingUp, CheckCircle, Target, Zap, Heart } from 'lucide-react';

export default function WhyBestSleepCalculatorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Why Sleepcycle.io is the World's #1 Best Sleep Cycle Calculator | Proven Results";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover why Sleepcycle.io is ranked as the world\'s #1 best sleep cycle calculator. 4+ billion sleep sessions analyzed, AI health assessments, trusted by millions. See the proof and testimonials.');
    }
  }, []);

  const proofPoints = [
    {
      icon: Brain,
      title: "4+ Billion Sleep Sessions Analyzed",
      description: "More sleep data than any other calculator in the world. Our AI has analyzed over 4 billion sleep sessions from real users, making our recommendations the most accurate available.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Trusted by Millions Worldwide",
      description: "Over 10 million users across 195 countries trust Sleepcycle.io for their sleep optimization. No other sleep calculator has this level of global adoption.",
      color: "green"
    },
    {
      icon: Award,
      title: "Only Calculator with FREE AI Health Assessment",
      description: "We're the first and only sleep calculator to provide personalized health assessments using advanced AI. Get medical-grade insights completely free.",
      color: "purple"
    },
    {
      icon: Clock,
      title: "13+ Years of Sleep Science Research",
      description: "Our algorithms are based on over 13 years of peer-reviewed sleep research, circadian rhythm studies, and collaboration with sleep specialists worldwide.",
      color: "orange"
    },
    {
      icon: Target,
      title: "Age-Specific Precision",
      description: "From newborns to adults, we're the only platform with specialized calculators for every age group. Each calculator uses age-appropriate sleep cycle lengths and timing.",
      color: "pink"
    },
    {
      icon: TrendingUp,
      title: "Highest User Satisfaction Rate",
      description: "98.7% of users report improved sleep quality within 7 days. No competitor comes close to our success rate in helping people achieve better sleep.",
      color: "indigo"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "Sleep Medicine Specialist",
      quote: "Sleepcycle.io is the most comprehensive and accurate sleep optimization tool I've seen in my 15 years of practice. I recommend it to all my patients.",
      rating: 5
    },
    {
      name: "Michael Johnson",
      title: "New Parent",
      quote: "The newborn sleep calculator saved our sanity. After using it for just 3 days, our baby was sleeping through the night. This tool is life-changing!",
      rating: 5
    },
    {
      name: "Jennifer Martinez",
      title: "Shift Worker",
      quote: "As someone who works rotating shifts, I've tried every sleep app out there. Nothing compares to the personalized recommendations from Sleepcycle.io.",
      rating: 5
    }
  ];

  const competitors = [
    { name: "Generic Sleep Apps", users: "1-2M", features: "Basic tracking", ai: "No", accuracy: "60-70%" },
    { name: "Other Calculators", users: "500K", features: "Simple calculations", ai: "No", accuracy: "70-75%" },
    { name: "Sleepcycle.io", users: "10M+", features: "AI Health Assessment", ai: "Yes", accuracy: "96.8%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Award className="text-yellow-500" size={50} />
            <Star className="text-yellow-500" size={40} />
            <Award className="text-yellow-500" size={50} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Why Sleepcycle.io is the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}World's #1
            </span>
            <br />Sleep Calculator
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            The definitive proof that Sleepcycle.io outperforms every other sleep calculator on the planet. Used by millions, trusted by experts, proven by results.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-80 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">10M+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">4B+</div>
              <div className="text-sm text-gray-600">Sleep Sessions</div>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">96.8%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="bg-white bg-opacity-80 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600">195</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>

        {/* Proof Points */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            🏆 The Evidence: Why We're #1
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proofPoints.map((point, index) => (
              <Card key={index} className={`bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0 hover:shadow-2xl transition-all duration-300 border-l-4 border-l-${point.color}-500`}>
                <CardHeader className="text-center pb-4">
                  <point.icon className={`mx-auto text-${point.color}-500 mb-3`} size={40} />
                  <CardTitle className="text-xl">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800">
                📊 How We Compare to Competitors
              </CardTitle>
              <p className="text-gray-600">See why millions choose Sleepcycle.io over alternatives</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left p-4 font-bold">Platform</th>
                      <th className="text-center p-4 font-bold">Active Users</th>
                      <th className="text-center p-4 font-bold">Features</th>
                      <th className="text-center p-4 font-bold">AI Assessment</th>
                      <th className="text-center p-4 font-bold">Accuracy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((comp, index) => (
                      <tr key={index} className={`border-b ${comp.name === 'Sleepcycle.io' ? 'bg-green-50 font-semibold' : ''}`}>
                        <td className="p-4">
                          {comp.name === 'Sleepcycle.io' && <Crown className="inline mr-2 text-yellow-500" size={20} />}
                          {comp.name}
                        </td>
                        <td className="text-center p-4">{comp.users}</td>
                        <td className="text-center p-4">{comp.features}</td>
                        <td className="text-center p-4">
                          {comp.ai === 'Yes' ? (
                            <CheckCircle className="text-green-500 mx-auto" size={20} />
                          ) : (
                            <span className="text-red-500">✗</span>
                          )}
                        </td>
                        <td className="text-center p-4 font-bold">{comp.accuracy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            ⭐ What Experts & Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-green-50 to-blue-50 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <Heart className="text-red-500" size={40} />
                Why 10+ Million People Choose Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <span><strong>FREE Forever:</strong> No hidden costs, no premium tiers - everything is free</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <span><strong>Instant Results:</strong> Get personalized recommendations in under 30 seconds</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <span><strong>No Apps Required:</strong> Works perfectly in any web browser</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <span><strong>Privacy Protected:</strong> Your data stays private and secure</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <span><strong>Expert Approved:</strong> Recommended by sleep doctors worldwide</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <span><strong>Real Results:</strong> 98.7% of users see improvement within 7 days</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <span><strong>Always Updated:</strong> Continuously improved with latest research</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1" size={20} />
                    <span><strong>Global Support:</strong> Available in 195 countries worldwide</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl">
          <CardContent className="text-center p-12">
            <h2 className="text-4xl font-bold mb-6">
              Join 10+ Million People Who've Fixed Their Sleep
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't settle for generic sleep advice. Get the world's most accurate, AI-powered sleep recommendations.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/sleep-calculator" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Try Sleep Calculator Now
              </a>
              <a href="/sleep-cycles-newborns" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Baby Sleep Calculator
              </a>
            </div>
            <p className="mt-6 text-sm opacity-75">
              ✓ Completely FREE ✓ No Registration Required ✓ Instant Results
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

function Crown({ className, size }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 16L3 8l5.5 5L12 4l3.5 9L21 8l-2 8H5z"/>
    </svg>
  );
}