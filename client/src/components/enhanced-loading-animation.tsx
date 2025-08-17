import { Brain, Heart, Zap, Moon } from 'lucide-react';

interface EnhancedLoadingAnimationProps {
  message?: string;
  userAge?: number;
  userSex?: 'male' | 'female';
}

export function EnhancedLoadingAnimation({ 
  message = "Analyzing your sleep...", 
  userAge, 
  userSex 
}: EnhancedLoadingAnimationProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center shadow-lg">
      {/* Main AI Brain Animation */}
      <div className="relative mb-6">
        <div className="relative w-20 h-20 mx-auto">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-spin"></div>
          
          {/* Middle pulsing ring */}
          <div className="absolute inset-2 rounded-full border-4 border-purple-300 animate-pulse"></div>
          
          {/* Inner brain icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="w-8 h-8 text-blue-600 animate-bounce" />
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute -top-1 -right-3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute -bottom-2 -left-1 w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute -bottom-1 -right-2 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-700"></div>
      </div>

      {/* AI Processing Steps */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="flex items-center space-x-2 bg-white bg-opacity-70 rounded-full px-4 py-2 shadow-sm">
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">Analyzing health profile</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-3 delay-500">
          <div className="flex items-center space-x-2 bg-white bg-opacity-70 rounded-full px-4 py-2 shadow-sm">
            <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">Computing optimal sleep cycles</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-3 delay-1000">
          <div className="flex items-center space-x-2 bg-white bg-opacity-70 rounded-full px-4 py-2 shadow-sm">
            <Moon className="w-5 h-5 text-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-700">Generating personalized recommendations</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white bg-opacity-50 rounded-full h-3 mb-4 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse w-full"></div>
      </div>

      {/* Dynamic Message */}
      <p className="text-lg font-semibold text-gray-800 mb-2">
        {message}
      </p>
      
      {/* Personalized Loading Message */}
      {userAge && userSex && (
        <p className="text-sm text-gray-600">
          Customizing recommendations for {userSex === 'female' ? 'women' : 'men'} aged {userAge}...
        </p>
      )}
      
      {/* AI Enhancement Badge */}
      <div className="mt-4 inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-xs font-medium text-gray-700">AI Health Assessment Active</span>
      </div>
    </div>
  );
}