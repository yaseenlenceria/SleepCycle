import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Clock, Bed, Moon, AlertTriangle } from 'lucide-react';

export default function SleepCycles2YearOldsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "2 Year Old Sleep - SleepCycle.io #1 App for Sleep Regression & Big Kid Bed";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SleepCycle.io is the #1 app for 2-year-old sleep. Master sleep regression, big kid bed transition & bedtime battles. Expert toddler sleep guidance & solutions.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sleep Cycles for 2 Year Olds
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Navigate the unique sleep challenges of 2-year-olds with expert guidance on nap transitions, big kid beds, the 2-year sleep regression, and establishing independence while maintaining healthy sleep habits.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>👶 24 Month Milestone</span>
            <span>😴 Nap Changes</span>
            <span>🛏️ Big Kid Bed</span>
            <span>🌙 Sleep Independence</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Clock className="mx-auto text-green-500 mb-2" size={32} />
              <CardTitle className="text-lg">Total Sleep</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">11-14 hours</div>
              <p className="text-sm text-gray-600">Night sleep plus naps</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Moon className="mx-auto text-blue-500 mb-2" size={32} />
              <CardTitle className="text-lg">Night Sleep</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">10-12 hours</div>
              <p className="text-sm text-gray-600">Consolidated nighttime sleep</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Bed className="mx-auto text-purple-500 mb-2" size={32} />
              <CardTitle className="text-lg">Daytime Naps</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">1-2 hours</div>
              <p className="text-sm text-gray-600">One afternoon nap</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="text-orange-500" />
                2-Year-Old Development and Sleep
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">The Terrible Twos and Sleep</h3>
                <p className="text-gray-600 mb-4">
                  Two-year-olds are asserting their independence while still needing structure and boundaries. This developmental stage brings unique sleep challenges but also opportunities for establishing good habits.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 mb-2">Developmental Milestones</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Strong need for independence</li>
                      <li>• Testing limits and boundaries</li>
                      <li>• Improved language skills</li>
                      <li>• Growing imagination and fears</li>
                      <li>• Better understanding of routines</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Sleep Impact</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Bedtime resistance and protests</li>
                      <li>• Desire to control sleep decisions</li>
                      <li>• New fears affecting sleep</li>
                      <li>• Stalling tactics at bedtime</li>
                      <li>• Testing sleep rules and boundaries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="text-red-500" />
                The 2-Year Sleep Regression
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-red-50 rounded-lg border border-red-200 mb-6">
                <h4 className="font-semibold text-red-800 mb-3">Understanding the 2-Year Regression</h4>
                <p className="text-gray-600 mb-3">
                  The 2-year sleep regression typically occurs between 23-26 months and can last 2-6 weeks. It's driven by cognitive and emotional development rather than physical changes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Common Signs:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Bedtime battles and protests</li>
                      <li>• Frequent night wakings</li>
                      <li>• Resisting naps or dropping them</li>
                      <li>• Early morning wake-ups</li>
                      <li>• Increased clinginess at bedtime</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Underlying Causes:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Language explosion</li>
                      <li>• Development of fears and anxiety</li>
                      <li>• Growing sense of independence</li>
                      <li>• Testing boundaries and control</li>
                      <li>• Potty training introduction</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">Management Strategies</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Maintain consistent routines</li>
                    <li>• Offer limited choices for control</li>
                    <li>• Address new fears with comfort</li>
                    <li>• Stay calm during protests</li>
                    <li>• Don't abandon good sleep habits</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">When to Seek Help</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Regression lasts longer than 6 weeks</li>
                    <li>• Significant behavior changes</li>
                    <li>• Family functioning severely impacted</li>
                    <li>• Signs of sleep disorders</li>
                    <li>• Persistent extreme anxiety</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Bed className="text-purple-500" />
                Transitioning to a Big Kid Bed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                  <h4 className="font-semibold text-purple-800 mb-2">When to Make the Switch</h4>
                  <p className="text-gray-600 mb-3">
                    Most children transition between 18 months - 3.5 years. There's no rush unless safety becomes a concern.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Good Times to Transition:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Climbing out of crib consistently</li>
                        <li>• Child expresses interest</li>
                        <li>• Potty training is established</li>
                        <li>• Family routine is stable</li>
                        <li>• After 2.5-3 years old</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Times to Wait:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• During sleep regressions</li>
                        <li>• Major life changes (new baby)</li>
                        <li>• Recent moving or travel</li>
                        <li>• Significant behavioral challenges</li>
                        <li>• Sleep is generally going well</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Transition Tips</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Make it exciting and special</li>
                      <li>• Let child help pick bedding</li>
                      <li>• Childproof the entire room</li>
                      <li>• Use a baby gate if needed</li>
                      <li>• Maintain same bedtime routine</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">Safety Considerations</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Secure furniture to walls</li>
                      <li>• Cover electrical outlets</li>
                      <li>• Remove choking hazards</li>
                      <li>• Install window guards</li>
                      <li>• Consider bed rails initially</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Nap Transitions at Age 2</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">The Great Nap Debate</h4>
                  <p className="text-gray-600 mb-3">
                    Some 2-year-olds are ready to drop naps, while others still need them. The key is reading your individual child's cues and needs.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Signs Child Still Needs Naps:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Falls asleep easily for naps</li>
                        <li>• Cranky without afternoon rest</li>
                        <li>• Meltdowns increase on no-nap days</li>
                        <li>• Bedtime remains reasonable (7-8 PM)</li>
                        <li>• Still naps easily in car/stroller</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Signs Ready to Drop Naps:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Consistently fights naptime</li>
                        <li>• Takes over 30 minutes to fall asleep</li>
                        <li>• Bedtime becomes very late (after 9 PM)</li>
                        <li>• Generally happy without naps</li>
                        <li>• Early morning wake-ups increase</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Keeping the Nap</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Maintain consistent nap schedule</li>
                      <li>• Optimal time: 12:00-1:00 PM start</li>
                      <li>• Cap naps at 2 hours</li>
                      <li>• Wake by 3:00-3:30 PM latest</li>
                      <li>• Use blackout curtains and white noise</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h5 className="font-semibold text-pink-800 mb-2">Quiet Time Alternative</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Same time as old nap schedule</li>
                      <li>• Stay in room for 1 hour</li>
                      <li>• Quiet activities (books, puzzles)</li>
                      <li>• Rest even if not sleeping</li>
                      <li>• Earlier bedtime (6:30-7:00 PM)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Bedtime Battles and Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Common Bedtime Stall Tactics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">The Classics:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• "I need water"</li>
                        <li>• "One more book"</li>
                        <li>• "I need to go potty"</li>
                        <li>• "I'm scared"</li>
                        <li>• "I forgot to tell you something"</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-2">Response Strategies:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Address needs during routine</li>
                        <li>• Set clear limits and stick to them</li>
                        <li>• Use bedtime passes (2 per night)</li>
                        <li>• Stay calm and consistent</li>
                        <li>• Don't negotiate after lights out</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Successful Bedtime Routine</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Same sequence every night</li>
                      <li>• 20-30 minutes total</li>
                      <li>• Include calming activities</li>
                      <li>• End in child's bedroom</li>
                      <li>• Consistent timing</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">Offering Choices</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• "Bath or shower?"</li>
                      <li>• "Two books or three songs?"</li>
                      <li>• "Pajama A or pajama B?"</li>
                      <li>• "Light on or off during story?"</li>
                      <li>• Limited options, not open-ended</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Is the 2-year sleep regression real?</h3>
              <p className="text-gray-600">
                Yes, it typically occurs between 23-26 months due to cognitive and emotional development. It can last 2-6 weeks but is manageable with consistency.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">When should I transition to a big kid bed?</h3>
              <p className="text-gray-600">
                Only when necessary for safety (climbing out consistently) or after 2.5-3 years old. There's no rush if your child is content and safe in their crib.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Does my 2-year-old still need naps?</h3>
              <p className="text-gray-600">
                Most 2-year-olds still benefit from naps, though some may be ready to transition to quiet time. Watch your child's behavior and mood to determine their needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I handle bedtime battles?</h3>
              <p className="text-gray-600">
                Stay consistent with routines, offer limited choices, address needs during the routine (not after), and remain calm. Consider using bedtime passes for older 2-year-olds.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}