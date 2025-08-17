import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getAgeSpecificRecommendations } from '@/lib/sleep-calculations';
import { Users, Clock, Moon, Info } from 'lucide-react';

export function AgeCalculator() {
  const [age, setAge] = useState('');
  const [recommendations, setRecommendations] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    const ageNum = parseInt(age);
    if (ageNum >= 0 && ageNum <= 120) {
      const recs = getAgeSpecificRecommendations(ageNum);
      setRecommendations(recs);
      setShowResults(true);
    }
  };

  const getAgeGroup = (ageNum: number) => {
    if (ageNum < 1) return 'Newborn (0-12 months)';
    if (ageNum <= 2) return 'Toddler (1-2 years)';
    if (ageNum <= 5) return 'Preschooler (3-5 years)';
    if (ageNum <= 13) return 'School Age (6-13 years)';
    if (ageNum <= 17) return 'Teenager (14-17 years)';
    if (ageNum <= 64) return 'Adult (18-64 years)';
    return 'Older Adult (65+ years)';
  };

  const getAgeGroupColor = (ageNum: number) => {
    if (ageNum < 1) return 'from-pink-50 to-rose-50 border-pink-200 text-pink-800';
    if (ageNum <= 2) return 'from-purple-50 to-violet-50 border-purple-200 text-purple-800';
    if (ageNum <= 5) return 'from-blue-50 to-indigo-50 border-blue-200 text-blue-800';
    if (ageNum <= 13) return 'from-green-50 to-emerald-50 border-green-200 text-green-800';
    if (ageNum <= 17) return 'from-yellow-50 to-orange-50 border-yellow-200 text-yellow-800';
    if (ageNum <= 64) return 'from-teal-50 to-cyan-50 border-teal-200 text-teal-800';
    return 'from-gray-50 to-slate-50 border-gray-200 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Age-Specific Sleep Calculator
        </h3>
        <p className="text-gray-600">
          Get personalized sleep recommendations based on your age group
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your age (0-120 years)
            </label>
            <Input
              type="number"
              min="0"
              max="120"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setShowResults(false);
              }}
              placeholder="Enter age..."
              className="text-center text-lg"
              data-testid="input-age"
            />
          </div>
          <Button
            onClick={handleCalculate}
            disabled={!age || parseInt(age) < 0 || parseInt(age) > 120}
            className="w-full bg-sleep-blue-600 hover:bg-sleep-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
            data-testid="button-calculate-age"
          >
            <Users className="mr-2" size={18} />
            Get Age-Specific Recommendations
          </Button>
        </div>
      </div>

      {showResults && recommendations && (
        <div className="space-y-6 animate-in slide-in-from-bottom-5 duration-500">
          {/* Age Group Header */}
          <div className={`bg-gradient-to-br ${getAgeGroupColor(parseInt(age))} border rounded-xl p-6 text-center`}>
            <Users className="mx-auto mb-3 text-current" size={48} />
            <h4 className="text-2xl font-bold mb-2">
              {getAgeGroup(parseInt(age))}
            </h4>
            <p className="text-lg font-medium">
              Age {age} years old
            </p>
          </div>

          {/* Sleep Recommendations */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-sleep-blue-50 to-sleep-purple-50 border border-sleep-blue-200 rounded-xl p-6 text-center">
              <Moon className="mx-auto mb-3 text-sleep-blue-600" size={32} />
              <h4 className="text-lg font-semibold text-sleep-blue-800 mb-2">Sleep Duration</h4>
              <p className="text-2xl font-bold text-sleep-blue-600" data-testid="recommended-duration">
                {recommendations.duration}
              </p>
              <p className="text-sm text-sleep-blue-600 mt-1">per night</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
              <Clock className="mx-auto mb-3 text-green-600" size={32} />
              <h4 className="text-lg font-semibold text-green-800 mb-2">Sleep Cycles</h4>
              <p className="text-2xl font-bold text-green-600" data-testid="recommended-cycles">
                {recommendations.cycles}
              </p>
              <p className="text-sm text-green-600 mt-1">complete cycles</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6 text-center">
              <Clock className="mx-auto mb-3 text-orange-600" size={32} />
              <h4 className="text-lg font-semibold text-orange-800 mb-2">Bedtime Range</h4>
              <p className="text-lg font-bold text-orange-600" data-testid="recommended-bedtime">
                {recommendations.bedtimeRange}
              </p>
              <p className="text-sm text-orange-600 mt-1">optimal window</p>
            </div>
          </div>

          {/* Age-Specific Information */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6">
            <div className="flex items-start">
              <Info className="mt-1 mr-3 text-indigo-600" size={24} />
              <div>
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">
                  Why This Matters for Your Age Group
                </h4>
                <p className="text-indigo-700 leading-relaxed">
                  {recommendations.description}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Tips */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-teal-800 mb-3">Sleep Tips for Your Age</h4>
            <div className="grid md:grid-cols-2 gap-4 text-teal-700">
              {parseInt(age) < 18 ? (
                <>
                  <div>
                    <h5 className="font-semibold mb-1">Sleep Environment</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Dark, cool, and quiet room</li>
                      <li>• Consistent bedtime routine</li>
                      <li>• Limit screen time before bed</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Daily Habits</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Regular wake-up time</li>
                      <li>• Adequate physical activity</li>
                      <li>• Avoid caffeine late in day</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h5 className="font-semibold mb-1">Sleep Hygiene</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Maintain consistent schedule</li>
                      <li>• Create relaxing bedtime routine</li>
                      <li>• Optimize sleep environment</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Lifestyle Factors</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Regular exercise (not before bed)</li>
                      <li>• Limit alcohol and caffeine</li>
                      <li>• Manage stress and anxiety</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}