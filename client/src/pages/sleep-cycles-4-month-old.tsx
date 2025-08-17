import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Clock, Moon, Sun, Calendar } from 'lucide-react';

export default function SleepCycles4MonthOldPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "4 Month Sleep Regression - Sleep Cycle: The World's Best Sleep App | Sleep Calculator: Your Personalized Tool for Sleep";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Sleep Cycle navigates 4-month sleep regression using sound analysis, 4 billion sleep sessions, and 13 years of science. Master 4-month-old sleep schedules and developmental milestones.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sleep Cycles for 4 Month Old Babies
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Navigate the important 4-month milestone with expert guidance on sleep patterns, schedules, and the famous 4-month sleep regression. Learn how to establish healthy sleep habits during this crucial developmental period.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🍼 4-Month Development</span>
            <span>😴 Sleep Regression</span>
            <span>⏰ New Schedules</span>
            <span>🌙 Longer Night Sleep</span>
          </div>
        </div>

        {/* Quick Reference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Clock className="mx-auto text-blue-500 mb-2" size={32} />
              <CardTitle className="text-lg">Total Sleep</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">14-15 hours</div>
              <p className="text-sm text-gray-600">Including naps and nighttime sleep</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Moon className="mx-auto text-indigo-500 mb-2" size={32} />
              <CardTitle className="text-lg">Night Sleep</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-2">10-12 hours</div>
              <p className="text-sm text-gray-600">With 1-2 night feedings</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <Sun className="mx-auto text-orange-500 mb-2" size={32} />
              <CardTitle className="text-lg">Daytime Naps</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">3-4 naps</div>
              <p className="text-sm text-gray-600">30 minutes to 2 hours each</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Information */}
        <div className="space-y-8">
          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Baby className="text-pink-500" />
                4-Month Sleep Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">What's Happening at 4 Months</h3>
                <p className="text-gray-600 mb-4">
                  At 4 months, babies undergo significant neurological development that affects their sleep patterns. Their sleep cycles begin to mature, becoming more like adult sleep with distinct stages.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 mb-2">Sleep Cycle Changes</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cycles lengthen from 50 to 60 minutes</li>
                      <li>• Distinct sleep stages develop</li>
                      <li>• More predictable patterns emerge</li>
                      <li>• Ability to connect sleep cycles</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 mb-2">Developmental Milestones</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Increased alertness during wake times</li>
                      <li>• Better day/night distinction</li>
                      <li>• Longer attention spans</li>
                      <li>• Social smiling and interaction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Calendar className="text-purple-500" />
                Sample 4-Month Sleep Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-4">Typical Daily Schedule</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">6:00-7:00 AM</span>
                      <span className="text-green-600">Wake & Feed</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">8:00-9:30 AM</span>
                      <span className="text-blue-600">Morning Nap</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">9:30 AM</span>
                      <span className="text-green-600">Feed & Play</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">11:30 AM-1:00 PM</span>
                      <span className="text-blue-600">Midday Nap</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">1:00 PM</span>
                      <span className="text-green-600">Feed & Play</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">2:30-4:00 PM</span>
                      <span className="text-blue-600">Afternoon Nap</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">4:00 PM</span>
                      <span className="text-green-600">Feed & Play</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">5:30-6:00 PM</span>
                      <span className="text-blue-600">Catnap (Optional)</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">7:00-8:00 PM</span>
                      <span className="text-purple-600">Bedtime Routine</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span className="font-medium">8:00 PM</span>
                      <span className="text-indigo-600">Night Sleep</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Note: This is a sample schedule. Every baby is different, and timing may vary by ±30 minutes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>The 4-Month Sleep Regression</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-3">What is Sleep Regression?</h4>
                <p className="text-gray-600 mb-3">
                  The 4-month sleep regression is a permanent change in sleep patterns due to neurological development. It's not actually a regression but a progression to more mature sleep patterns.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Signs of Sleep Regression:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Frequent night wakings</li>
                      <li>• Shorter naps (30-45 minutes)</li>
                      <li>• Difficulty falling asleep</li>
                      <li>• More fussiness at bedtime</li>
                      <li>• Early morning wake-ups</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Why It Happens:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Brain development changes sleep architecture</li>
                      <li>• Learning to connect sleep cycles</li>
                      <li>• Increased awareness of surroundings</li>
                      <li>• Development of circadian rhythm</li>
                      <li>• Physical growth spurts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3">How to Handle Sleep Regression</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Do:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Maintain consistent routines</li>
                      <li>✓ Practice good sleep hygiene</li>
                      <li>✓ Allow time for adjustment</li>
                      <li>✓ Consider sleep training methods</li>
                      <li>✓ Be patient and consistent</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Avoid:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✗ Creating new sleep associations</li>
                      <li>✗ Abandoning good habits</li>
                      <li>✗ Expecting it to resolve overnight</li>
                      <li>✗ Increasing feeds unnecessarily</li>
                      <li>✗ Co-sleeping as a quick fix</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
            <CardHeader>
              <CardTitle>Sleep Training Considerations at 4 Months</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-6">
                <h4 className="font-semibold text-blue-800 mb-3">Is 4 Months the Right Time?</h4>
                <p className="text-gray-600 mb-3">
                  Many experts consider 4-6 months the ideal window to begin sleep training, as babies have developed more predictable patterns but haven't formed strong sleep associations yet.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Gentle Methods</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Gradual extinction (Ferber method)</li>
                      <li>• Chair method (camping out)</li>
                      <li>• Pick-up-put-down technique</li>
                      <li>• Fading methods</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">Before You Start</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ensure baby is healthy</li>
                      <li>• Establish consistent routine</li>
                      <li>• Choose the right timing</li>
                      <li>• Have realistic expectations</li>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does the 4-month sleep regression last?</h3>
              <p className="text-gray-600">
                The 4-month regression typically lasts 2-6 weeks. It's actually a permanent developmental change, but babies usually adjust to their new sleep patterns within this timeframe.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Should I start sleep training during a regression?</h3>
              <p className="text-gray-600">
                Many experts recommend starting sleep training after 4 months, even during regression. Consistent methods can help babies learn to navigate their new sleep cycles.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Why are my 4-month-old's naps so short?</h3>
              <p className="text-gray-600">
                Short naps (30-45 minutes) are common at 4 months as babies learn to connect sleep cycles. This often improves with consistency and time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">How many night feeds does a 4-month-old need?</h3>
              <p className="text-gray-600">
                Most 4-month-olds need 1-2 night feeds, though some may sleep through the night. Consult your pediatrician about your baby's specific nutritional needs.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}