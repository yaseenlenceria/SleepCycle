import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Clock, Bed, Sun, Moon } from 'lucide-react';

export default function SleepCyclesToddlersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Toddler Sleep Cycles - SleepCycle.io #1 App for Ages 1-3 Sleep Schedules";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SleepCycle.io is the #1 toddler sleep app. Master sleep cycles, nap transitions & bedtime routines for ages 1-3. Expert guidance for healthy toddler sleep habits.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sleep Cycles for Toddlers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Navigate toddler sleep challenges with expert guidance on sleep patterns, nap transitions, and bedtime routines for children ages 1-3 years. Learn how to handle sleep regressions and establish healthy sleep habits.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>👶 Ages 1-3 Years</span>
            <span>😴 Nap Transitions</span>
            <span>🛏️ Bedtime Routines</span>
            <span>🌙 Sleep Independence</span>
          </div>
        </div>

        {/* Age-Specific Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Users className="mx-auto text-green-500 mb-2" size={32} />
              <CardTitle className="text-lg">12-18 Months</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">11-14 hours</div>
              <p className="text-sm text-gray-600">2 naps transitioning to 1</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Clock className="mx-auto text-blue-500 mb-2" size={32} />
              <CardTitle className="text-lg">18 Months-2 Years</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">11-14 hours</div>
              <p className="text-sm text-gray-600">1 afternoon nap</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Bed className="mx-auto text-purple-500 mb-2" size={32} />
              <CardTitle className="text-lg">2-3 Years</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">10-13 hours</div>
              <p className="text-sm text-gray-600">Nap becoming optional</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="space-y-8">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Moon className="text-indigo-600" />
                Toddler Sleep Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">How Toddler Sleep Cycles Evolve</h3>
                <p className="text-gray-600 mb-4">
                  Toddler sleep patterns continue to mature, with cycles becoming more adult-like while still requiring more total sleep than adults. This period involves significant nap transitions and new sleep challenges.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Sleep Cycle Changes</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cycles approach 90-minute adult length</li>
                      <li>• More consolidated nighttime sleep</li>
                      <li>• Gradual reduction in daytime sleep needs</li>
                      <li>• Better sleep cycle connections</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-2">Developmental Factors</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Rapid brain development affects sleep</li>
                      <li>• Increased independence and testing limits</li>
                      <li>• Language development and communication</li>
                      <li>• Physical growth spurts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Sun className="text-orange-500" />
                Nap Transitions by Age
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <h4 className="font-semibold text-green-800 mb-2">12-18 Months: 2 to 1 Nap Transition</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Signs to Transition:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fighting one of the naps consistently</li>
                        <li>• Taking very long to fall asleep at bedtime</li>
                        <li>• Short morning or afternoon naps</li>
                        <li>• Early morning wake-ups</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">How to Transition:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Gradually push morning nap later</li>
                        <li>• Aim for 12:00-1:00 PM single nap</li>
                        <li>• May need earlier bedtime temporarily</li>
                        <li>• Allow 2-6 weeks for adjustment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">18 Months-2 Years: One Nap Schedule</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Typical Schedule:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Wake: 6:00-7:00 AM</li>
                        <li>• Nap: 12:00-2:00 PM (1-3 hours)</li>
                        <li>• Bedtime: 7:00-8:00 PM</li>
                        <li>• Night sleep: 10-12 hours</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Wake Windows:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Morning: 5-6 hours before nap</li>
                        <li>• Afternoon: 4-5 hours after nap</li>
                        <li>• Adjust based on nap length</li>
                        <li>• Watch for overtiredness cues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                  <h4 className="font-semibold text-purple-800 mb-2">2-3 Years: Dropping the Nap</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Signs Nap May Not Be Needed:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Consistently fighting naptime</li>
                        <li>• Very late bedtimes (after 9 PM)</li>
                        <li>• Early morning wake-ups</li>
                        <li>• Good mood without afternoon nap</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Transition Strategy:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Institute "quiet time" instead</li>
                        <li>• Earlier bedtime (6:30-7:00 PM)</li>
                        <li>• Some days nap, some days don't</li>
                        <li>• Watch for overtiredness</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Common Toddler Sleep Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Bedtime Resistance</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Common Causes:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Overtiredness or undertiredness</li>
                        <li>• Need for independence/control</li>
                        <li>• Fear of missing out (FOMO)</li>
                        <li>• Inconsistent routines</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Solutions:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Consistent bedtime routine</li>
                        <li>• Offer limited choices</li>
                        <li>• Earlier bedtime if overtired</li>
                        <li>• Stay calm and consistent</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Night Wakings and Fears</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Why They Happen:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Imagination development</li>
                        <li>• Separation anxiety</li>
                        <li>• Nightmares vs. night terrors</li>
                        <li>• Need for comfort and reassurance</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">How to Help:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Comfort without creating dependencies</li>
                        <li>• Night light if afraid of dark</li>
                        <li>• Consistent response to night wakings</li>
                        <li>• Discuss fears during daytime</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Sleep Regressions</h4>
                  <div className="grid grid-cols-1 md:grid-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Common Ages:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 12 months (walking milestone)</li>
                        <li>• 18 months (language explosion)</li>
                        <li>• 2 years (cognitive development)</li>
                        <li>• 2.5-3 years (potty training/preschool)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Management:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Maintain consistent routines</li>
                        <li>• Extra practice of new skills during day</li>
                        <li>• Temporary schedule adjustments</li>
                        <li>• Extra patience and comfort</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Creating the Perfect Toddler Sleep Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Room Setup</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Blackout curtains or shades</li>
                      <li>• White noise machine</li>
                      <li>• Comfortable room temperature (68-72°F)</li>
                      <li>• Safe, toddler-proofed environment</li>
                      <li>• Night light if needed for fears</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Bedtime Routine</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Same sequence every night</li>
                      <li>• 20-30 minutes total</li>
                      <li>• Calming activities (bath, books)</li>
                      <li>• Limited choices to give control</li>
                      <li>• Consistent timing</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Transitioning to Big Kid Bed</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Usually between 18 months - 3 years</li>
                      <li>• Wait until climbing out of crib</li>
                      <li>• Make room toddler-safe</li>
                      <li>• Consider bed rails initially</li>
                      <li>• Involve toddler in setup</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">Comfort Items</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Lovey or stuffed animal</li>
                      <li>• Special blanket</li>
                      <li>• Books in bed for quiet time</li>
                      <li>• Family photo nearby</li>
                      <li>• Consistent comfort objects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">When should my toddler transition from 2 naps to 1?</h3>
              <p className="text-gray-600">
                Most toddlers transition between 12-18 months. Watch for signs like fighting one nap, very short naps, or bedtime resistance. The transition typically takes 2-6 weeks.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I handle toddler bedtime battles?</h3>
              <p className="text-gray-600">
                Stay consistent with routines, offer limited choices, ensure appropriate wake windows, and remain calm. Bedtime resistance is often a normal part of toddler development.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Is it normal for my 2-year-old to stop napping?</h3>
              <p className="text-gray-600">
                While some 2-year-olds may drop naps, most still benefit from afternoon rest until age 3-4. Try "quiet time" if naps become difficult, and consider an earlier bedtime.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How much night sleep does my toddler need?</h3>
              <p className="text-gray-600">
                Toddlers typically need 10-12 hours of night sleep, with total sleep (including naps) ranging from 11-14 hours per day, depending on age.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}