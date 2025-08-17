import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Heart, Info } from 'lucide-react';

interface UserProfile {
  age: number;
  sex: 'male' | 'female';
}

interface UserProfileFormProps {
  onProfileSet: (profile: UserProfile) => void;
  initialProfile?: UserProfile;
}

export function UserProfileForm({ onProfileSet, initialProfile }: UserProfileFormProps) {
  const [age, setAge] = useState(initialProfile?.age || 25);
  const [sex, setSex] = useState<'male' | 'female'>(initialProfile?.sex || 'male');
  const [showForm, setShowForm] = useState(!initialProfile);

  const handleSubmit = () => {
    onProfileSet({ age, sex });
    setShowForm(false);
  };

  if (!showForm && initialProfile) {
    return (
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 rounded-full p-2">
                <User className="text-purple-600" size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Personalized for {initialProfile.sex === 'male' ? 'Male' : 'Female'}, Age {initialProfile.age}
                </p>
                <p className="text-xs text-gray-600">Health recommendations will be customized for you</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowForm(true)}
              className="text-purple-600 border-purple-300 hover:bg-purple-100"
            >
              Change
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Heart className="text-red-500" size={20} />
          Get Personalized Health Recommendations
        </CardTitle>
        <p className="text-sm text-gray-600">
          Share your basic info to receive evidence-based sleep recommendations from health professionals
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Age Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Your Age</label>
          <div className="grid grid-cols-6 gap-2">
            {[18, 25, 30, 35, 45, 55, 65].map((ageOption) => (
              <Button
                key={ageOption}
                variant={age === ageOption ? "default" : "outline"}
                size="sm"
                onClick={() => setAge(ageOption)}
                className={age === ageOption 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-700 border-gray-300 hover:bg-blue-50"
                }
              >
                {ageOption}
              </Button>
            ))}
          </div>
          <div className="mt-2">
            <input
              type="range"
              min="18"
              max="80"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value))}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>18</span>
              <span className="font-medium text-blue-600">Age: {age}</span>
              <span>80</span>
            </div>
          </div>
        </div>

        {/* Sex Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Sex</label>
          <div className="flex gap-3">
            <Button
              variant={sex === 'male' ? "default" : "outline"}
              onClick={() => setSex('male')}
              className={`flex-1 ${sex === 'male' 
                ? "bg-blue-600 text-white" 
                : "text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
            >
              Male
            </Button>
            <Button
              variant={sex === 'female' ? "default" : "outline"}
              onClick={() => setSex('female')}
              className={`flex-1 ${sex === 'female' 
                ? "bg-pink-600 text-white" 
                : "text-gray-700 border-gray-300 hover:bg-pink-50"
              }`}
            >
              Female
            </Button>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
          <div className="flex items-start gap-2">
            <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
            <div className="text-xs text-blue-800">
              <p className="font-medium mb-1">Privacy Protected</p>
              <p>Your information is used only to provide personalized sleep recommendations and is not stored or shared.</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          data-testid="submit-profile"
        >
          Get My Personalized Recommendations
        </Button>
      </CardContent>
    </Card>
  );
}