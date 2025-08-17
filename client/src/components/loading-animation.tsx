import { Moon, Star, Clock } from 'lucide-react';

interface LoadingAnimationProps {
  message?: string;
}

export function LoadingAnimation({ message = "Calculating your optimal sleep times..." }: LoadingAnimationProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-6">
      {/* Animated Sleep Icons */}
      <div className="relative">
        <div className="flex items-center space-x-4">
          <div className="animate-bounce">
            <Moon className="text-blue-500" size={32} />
          </div>
          <div className="animate-bounce delay-100">
            <Star className="text-yellow-400" size={24} />
          </div>
          <div className="animate-bounce delay-200">
            <Clock className="text-gray-600" size={28} />
          </div>
        </div>
        
        {/* Pulsing Circle Background */}
        <div className="absolute inset-0 -m-8 bg-blue-100 rounded-full animate-pulse opacity-20"></div>
      </div>

      {/* Loading Dots */}
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200"></div>
      </div>

      {/* Loading Message */}
      <p className="text-gray-600 text-center max-w-sm animate-fade-in">
        {message}
      </p>

      {/* Progress Bar */}
      <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-progress"></div>
      </div>
    </div>
  );
}