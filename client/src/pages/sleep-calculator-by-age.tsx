import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, Brain, Target, Trophy, Clock, Moon, Sun, Baby, Heart, Zap, Shield } from 'lucide-react';
import { Link } from 'wouter';

interface AgeRecommendation {
  category: string;
  sleepHours: string;
  cycles: string;
  bedtime: string;
  tips: string;
  bgColor: string;
  textColor: string;
  emoji: string;
  description: string;
  healthBenefits: string[];
  risks: string[];
}

export default function SleepCalculatorByAgePage() {
  const [selectedAge, setSelectedAge] = useState(25);
  const [wakeHour, setWakeHour] = useState('7');
  const [wakeMinute, setWakeMinute] = useState('00');
  const [wakePeriod, setWakePeriod] = useState('AM');
  const [results, setResults] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "★★★★★ Sleep Calculator by Age - FREE AI-Powered Age-Specific Sleep Optimization - Sleepcycle.io";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '★★★★★ Sleep Calculator by Age - FREE AI-powered sleep optimization for every age. From newborns to seniors, get personalized sleep schedules based on age-specific science. Trusted by millions worldwide.');
    }
  }, []);

  // Age-specific sleep recommendations
  const getAgeRecommendations = (age: number): AgeRecommendation => {
    if (age < 0.25) { // 0-3 months
      return {
        category: 'Newborn (0-3 months)',
        sleepHours: '14-17 hours',
        cycles: 'Short 50-60 min cycles',
        bedtime: 'No fixed schedule',
        tips: 'Sleep when tired, safe sleep position, room sharing',
        bgColor: 'from-pink-100 to-pink-200',
        textColor: 'text-pink-700',
        emoji: '👶',
        description: 'Newborns have irregular sleep patterns with frequent waking for feeding.',
        healthBenefits: ['Rapid brain development', 'Growth hormone release', 'Immune system development'],
        risks: ['SIDS risk with insufficient sleep', 'Feeding difficulties', 'Developmental delays']
      };
    } else if (age < 1) { // 4-11 months
      return {
        category: 'Infant (4-11 months)',
        sleepHours: '12-15 hours',
        cycles: '2-3 naps + 10-12 hour nights',
        bedtime: '7:00-8:00 PM',
        tips: 'Sleep training readiness, consistent routine, longer sleep stretches',
        bgColor: 'from-blue-100 to-blue-200',
        textColor: 'text-blue-700',
        emoji: '🍼',
        description: 'Sleep patterns begin to consolidate with longer nighttime sleep.',
        healthBenefits: ['Memory consolidation', 'Physical growth', 'Emotional regulation'],
        risks: ['Sleep regression periods', 'Overtiredness', 'Night waking habits']
      };
    } else if (age <= 2) { // 1-2 years
      return {
        category: 'Toddler (1-2 years)',
        sleepHours: '11-14 hours',
        cycles: '1-2 naps + 11-12 hour nights',
        bedtime: '7:00-8:30 PM',
        tips: 'Transitioning from 2 naps to 1, consistent bedtime routine',
        bgColor: 'from-green-100 to-green-200',
        textColor: 'text-green-700',
        emoji: '🧸',
        description: 'Major sleep transitions as naps consolidate and independence grows.',
        healthBenefits: ['Language development', 'Motor skill enhancement', 'Behavioral regulation'],
        risks: ['Nap transition difficulties', 'Bedtime resistance', 'Night terrors']
      };
    } else if (age <= 5) { // 3-5 years
      return {
        category: 'Preschooler (3-5 years)',
        sleepHours: '10-13 hours',
        cycles: '0-1 naps + 10-12 hour nights',
        bedtime: '7:30-8:30 PM',
        tips: 'May still need quiet time, consistent sleep schedule',
        bgColor: 'from-purple-100 to-purple-200',
        textColor: 'text-purple-700',
        emoji: '🎨',
        description: 'Most children drop naps and consolidate to nighttime sleep only.',
        healthBenefits: ['Cognitive development', 'Attention span', 'Social skills'],
        risks: ['Difficulty falling asleep', 'Nightmares', 'Behavioral issues']
      };
    } else if (age <= 13) { // 6-13 years
      return {
        category: 'School Age (6-13 years)',
        sleepHours: '9-11 hours',
        cycles: '6-7 complete 90-min cycles',
        bedtime: '8:00-9:00 PM',
        tips: 'Consistent bedtime crucial for school performance',
        bgColor: 'from-indigo-100 to-indigo-200',
        textColor: 'text-indigo-700',
        emoji: '📚',
        description: 'Sleep directly impacts academic performance and behavior.',
        healthBenefits: ['Learning consolidation', 'Academic performance', 'Growth spurts'],
        risks: ['Poor grades', 'ADHD-like symptoms', 'Mood problems']
      };
    } else if (age <= 17) { // 14-17 years
      return {
        category: 'Teen (14-17 years)',
        sleepHours: '8-10 hours',
        cycles: '5-6 complete 90-min cycles',
        bedtime: '9:00-11:00 PM',
        tips: 'Natural circadian shift - biologically later bedtime',
        bgColor: 'from-orange-100 to-orange-200',
        textColor: 'text-orange-700',
        emoji: '🎓',
        description: 'Hormonal changes cause natural delay in sleep timing.',
        healthBenefits: ['Brain maturation', 'Emotional stability', 'Physical development'],
        risks: ['Depression risk', 'Poor academic performance', 'Risk-taking behavior']
      };
    } else if (age <= 25) { // 18-25 years
      return {
        category: 'Young Adult (18-25 years)',
        sleepHours: '7-9 hours',
        cycles: '5-6 complete 90-min cycles',
        bedtime: '10:00 PM-12:00 AM',
        tips: 'Peak sleep efficiency, establish good habits for life',
        bgColor: 'from-cyan-100 to-cyan-200',
        textColor: 'text-cyan-700',
        emoji: '🎯',
        description: 'Peak years for sleep efficiency and recovery.',
        healthBenefits: ['Peak performance', 'Stress management', 'Optimal recovery'],
        risks: ['Poor lifestyle habits', 'Stress-related insomnia', 'Academic/work impairment']
      };
    } else if (age <= 64) { // 26-64 years
      return {
        category: 'Adult (26-64 years)',
        sleepHours: '7-9 hours',
        cycles: '5-6 complete 90-min cycles',
        bedtime: '9:30 PM-11:30 PM',
        tips: 'Maintain consistent schedule despite life demands',
        bgColor: 'from-teal-100 to-teal-200',
        textColor: 'text-teal-700',
        emoji: '💼',
        description: 'Balance work, family, and sleep health during prime adult years.',
        healthBenefits: ['Career performance', 'Immune function', 'Mental health'],
        risks: ['Chronic disease risk', 'Mental health issues', 'Reduced productivity']
      };
    } else { // 65+ years
      return {
        category: 'Older Adult (65+ years)',
        sleepHours: '7-8 hours',
        cycles: '4-5 complete 90-min cycles',
        bedtime: '8:00 PM-10:00 PM',
        tips: 'Earlier bedtime natural, may need naps, lighter sleep',
        bgColor: 'from-amber-100 to-amber-200',
        textColor: 'text-amber-700',
        emoji: '🌅',
        description: 'Natural changes in sleep architecture with age.',
        healthBenefits: ['Cognitive preservation', 'Physical health', 'Quality of life'],
        risks: ['Increased disease risk', 'Cognitive decline', 'Fall risk']
      };
    }
  };

  const calculateOptimalSleep = () => {
    const recommendation = getAgeRecommendations(selectedAge);
    const wakeTime = `${wakeHour}:${wakeMinute} ${wakePeriod}`;
    
    // Convert wake time to 24-hour format
    let wakeHour24 = parseInt(wakeHour);
    if (wakePeriod === 'PM' && wakeHour24 !== 12) wakeHour24 += 12;
    if (wakePeriod === 'AM' && wakeHour24 === 12) wakeHour24 = 0;
    
    // Calculate optimal bedtimes based on age
    const sleepHoursRange = recommendation.sleepHours.match(/(\d+)-(\d+)/);
    const minHours = sleepHoursRange ? parseInt(sleepHoursRange[1]) : 8;
    const maxHours = sleepHoursRange ? parseInt(sleepHoursRange[2]) : 9;
    
    const bedtimes = [];
    
    // Calculate for min, optimal, and max sleep duration
    for (let hours of [minHours, Math.round((minHours + maxHours) / 2), maxHours]) {
      const bedHour24 = (wakeHour24 - hours + 24) % 24;
      let bedHour12 = bedHour24;
      let bedPeriod = 'AM';
      
      if (bedHour24 === 0) {
        bedHour12 = 12;
      } else if (bedHour24 > 12) {
        bedHour12 = bedHour24 - 12;
        bedPeriod = 'PM';
      } else if (bedHour24 === 12) {
        bedPeriod = 'PM';
      }
      
      bedtimes.push({
        duration: hours,
        time: `${bedHour12}:${wakeMinute} ${bedPeriod}`,
        cycles: Math.round(hours / 1.5),
        quality: hours === Math.round((minHours + maxHours) / 2) ? 'Optimal' : 
                hours === minHours ? 'Minimum' : 'Maximum'
      });
    }
    
    setResults({
      recommendation,
      wakeTime,
      bedtimes,
      age: selectedAge
    });
    setShowResults(true);
  };

  const recommendation = getAgeRecommendations(selectedAge);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ★★★★★ Sleep Calculator by Age
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            <strong>The World's Most Accurate Age-Specific Sleep Calculator</strong> – Get personalized sleep schedules optimized for your exact age. Based on the latest sleep science research and trusted by millions worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-8">
            <span>👶 Newborn to Senior</span>
            <span>🧬 Age-Based Science</span>
            <span>🎯 Personalized Results</span>
            <span>⚡ Instant Calculation</span>
            <span>🆓 Always FREE</span>
          </div>
        </div>

        {/* Age-Specific Calculator */}
        <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0 mb-8">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-3">
              <Clock className="text-blue-600" size={28} />
              Calculate Your Optimal Sleep by Age
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Enter your age and wake-up time to get personalized sleep recommendations
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Age Input */}
            <div className="text-center mb-6">
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                Your Age
              </label>
              <div className="flex justify-center">
                <Input
                  type="number"
                  placeholder="25"
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(parseFloat(e.target.value) || 0)}
                  min="0"
                  max="100"
                  step="0.25"
                  className="text-center text-2xl font-bold w-32"
                  data-testid="input-age"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Use decimals for babies (e.g., 0.5 for 6 months, 0.25 for 3 months)
              </p>
            </div>

            {/* Current Age Recommendation Preview */}
            <div className={`bg-gradient-to-r ${recommendation.bgColor} p-6 rounded-xl text-center`}>
              <div className="text-4xl mb-2">{recommendation.emoji}</div>
              <h3 className={`text-xl font-bold ${recommendation.textColor} mb-2`}>
                {recommendation.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Sleep Duration:</strong><br />
                  {recommendation.sleepHours}
                </div>
                <div>
                  <strong>Sleep Pattern:</strong><br />
                  {recommendation.cycles}
                </div>
                <div>
                  <strong>Typical Bedtime:</strong><br />
                  {recommendation.bedtime}
                </div>
              </div>
            </div>

            {/* Wake Time Input */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hour
                </label>
                <select
                  value={wakeHour}
                  onChange={(e) => setWakeHour(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md text-center text-lg font-semibold"
                  data-testid="select-wake-hour"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Minute
                </label>
                <select
                  value={wakeMinute}
                  onChange={(e) => setWakeMinute(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md text-center text-lg font-semibold"
                  data-testid="select-wake-minute"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i * 5} value={String(i * 5).padStart(2, '0')}>
                      {String(i * 5).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  AM/PM
                </label>
                <select
                  value={wakePeriod}
                  onChange={(e) => setWakePeriod(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md text-center text-lg font-semibold"
                  data-testid="select-wake-period"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={calculateOptimalSleep}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                data-testid="button-calculate-sleep"
              >
                <Moon className="mr-2" size={24} />
                Calculate My Optimal Sleep
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {showResults && results && (
          <div className="animate-in slide-in-from-bottom-5 duration-700 space-y-6">
            {/* Main Results */}
            <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Your Personalized Sleep Schedule
                </CardTitle>
                <p className="text-gray-600">
                  For {results.recommendation.category} waking up at {results.wakeTime}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {results.bedtimes.map((bedtime: any, index: number) => (
                    <div 
                      key={index}
                      className={`p-6 rounded-xl text-center ${
                        bedtime.quality === 'Optimal' 
                          ? 'bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300' 
                          : 'bg-gradient-to-br from-gray-50 to-gray-100'
                      }`}
                    >
                      <div className="text-lg font-semibold text-gray-700 mb-2">
                        {bedtime.quality} Sleep
                      </div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {bedtime.time}
                      </div>
                      <div className="text-sm text-gray-600">
                        {bedtime.duration} hours ({bedtime.cycles} cycles)
                      </div>
                      {bedtime.quality === 'Optimal' && (
                        <div className="mt-2 text-xs text-green-700 font-semibold">
                          ⭐ RECOMMENDED
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Age-Specific Insights */}
            <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="text-purple-500" size={24} />
                  Age-Specific Sleep Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {results.recommendation.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                      <Heart className="text-green-500" size={16} />
                      Health Benefits of Adequate Sleep
                    </h4>
                    <ul className="space-y-2">
                      {results.recommendation.healthBenefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                      <Shield className="text-red-500" size={16} />
                      Risks of Sleep Deprivation
                    </h4>
                    <ul className="space-y-2">
                      {results.recommendation.risks.map((risk: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                    <Zap className="text-blue-500" size={16} />
                    Sleep Tips for Your Age Group
                  </h4>
                  <p className="text-gray-700">{results.recommendation.tips}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Age Group Quick Links */}
        <div className="mt-16 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Quick Access by Age Group
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { age: 0.25, label: 'Newborn', emoji: '👶', path: '/sleep-cycles-newborns' },
              { age: 0.5, label: '6 Months', emoji: '🍼', path: '/sleep-cycles-6-month-old' },
              { age: 2, label: 'Toddler', emoji: '🧸', path: '/sleep-cycles-toddlers' },
              { age: 10, label: 'Child', emoji: '📚', path: '/sleep-cycles-adults' },
              { age: 16, label: 'Teen', emoji: '🎓', path: '/sleep-cycles-adults' },
              { age: 35, label: 'Adult', emoji: '💼', path: '/sleep-cycles-adults' }
            ].map((group, index) => (
              <button
                key={index}
                onClick={() => setSelectedAge(group.age)}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-blue-300"
                data-testid={`button-age-${group.label.toLowerCase()}`}
              >
                <div className="text-2xl mb-1">{group.emoji}</div>
                <div className="font-semibold text-gray-700">{group.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Sleep Science by Age */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Age Matters for Sleep Calculation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Brain className="mx-auto text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Brain Development</h3>
              <p className="text-gray-600">
                Sleep needs change dramatically as the brain develops. Newborns need 14-17 hours for rapid neural growth, while adults need 7-9 hours for maintenance and memory consolidation.
              </p>
            </div>
            
            <div className="text-center">
              <Target className="mx-auto text-green-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Circadian Changes</h3>
              <p className="text-gray-600">
                Your internal clock shifts with age. Teenagers naturally sleep later due to delayed melatonin release, while older adults tend to sleep and wake earlier.
              </p>
            </div>
            
            <div className="text-center">
              <Trophy className="mx-auto text-purple-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sleep Architecture</h3>
              <p className="text-gray-600">
                Sleep cycle length and composition change with age. Babies have 50-60 minute cycles, while adults have 90-120 minute cycles with different REM percentages.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Optimize Your Sleep at Every Age
          </h2>
          <p className="text-lg mb-6">
            Join millions who've improved their sleep with our age-specific, scientifically-backed sleep calculator.
          </p>
          <p className="text-sm opacity-90">
            👶 Newborn to Senior • 🧬 Age-based science • 🎯 Personalized results • 🆓 Always FREE
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}