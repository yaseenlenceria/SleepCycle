import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bed, Sun, BarChart3, Coffee, Baby, Users, ChevronDown } from 'lucide-react';

interface SimpleHomepageNavigationProps {
  activeTab: 'bedtime' | 'wakeup' | 'tracker' | 'nap' | 'baby' | 'age';
  onTabChange: (tab: 'bedtime' | 'wakeup' | 'tracker' | 'nap' | 'baby' | 'age') => void;
}

export function SimpleHomepageNavigation({ activeTab, onTabChange }: SimpleHomepageNavigationProps) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <Card className="bg-white shadow-lg mb-8">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🧠 AI Sleep Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get personalized sleep recommendations in seconds
          </p>
        </div>

        {/* Three Main Options */}
        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => onTabChange('bedtime')}
            className={`p-6 rounded-xl border-2 transition-all duration-200 ${
              activeTab === 'bedtime'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
            }`}
            data-testid="tab-bedtime"
          >
            <Bed className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Find Bedtime</h3>
            <p className="text-sm text-gray-600">
              I know when I want to wake up
            </p>
          </button>

          <button
            onClick={() => onTabChange('wakeup')}
            className={`p-6 rounded-xl border-2 transition-all duration-200 ${
              activeTab === 'wakeup'
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
            }`}
            data-testid="tab-wakeup"
          >
            <Sun className="mx-auto mb-4 text-orange-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Sleep Now</h3>
            <p className="text-sm text-gray-600">
              Going to bed right now
            </p>
          </button>

          <button
            onClick={() => onTabChange('tracker')}
            className={`p-6 rounded-xl border-2 transition-all duration-200 ${
              activeTab === 'tracker'
                ? 'border-purple-500 bg-purple-50 text-purple-700'
                : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
            }`}
            data-testid="tab-tracker"
          >
            <BarChart3 className="mx-auto mb-4 text-purple-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Track Sleep</h3>
            <p className="text-sm text-gray-600">
              Analyze my sleep duration
            </p>
          </button>
        </div>

        {/* More Options Toggle */}
        <div className="text-center mt-6">
          <Button
            onClick={() => setShowMoreOptions(!showMoreOptions)}
            variant="ghost"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {showMoreOptions ? 'Show Less' : 'More Options'} 
            <ChevronDown className={`inline ml-1 transition-transform ${showMoreOptions ? 'rotate-180' : ''}`} size={16} />
          </Button>
        </div>

        {/* Additional Options */}
        {showMoreOptions && (
          <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => onTabChange('nap')}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                activeTab === 'nap'
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
              }`}
              data-testid="tab-nap"
            >
              <Coffee className="mx-auto mb-2 text-green-600" size={32} />
              <h4 className="font-semibold">Nap Timer</h4>
              <p className="text-xs text-gray-600 mt-1">Power nap calculator</p>
            </button>

            <button
              onClick={() => onTabChange('baby')}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                activeTab === 'baby'
                  ? 'border-pink-500 bg-pink-50 text-pink-700'
                  : 'border-gray-200 hover:border-pink-300 hover:bg-pink-50'
              }`}
              data-testid="tab-baby"
            >
              <Baby className="mx-auto mb-2 text-pink-600" size={32} />
              <h4 className="font-semibold">Baby Sleep</h4>
              <p className="text-xs text-gray-600 mt-1">For infants & toddlers</p>
            </button>

            <button
              onClick={() => onTabChange('age')}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                activeTab === 'age'
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                  : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
              }`}
              data-testid="tab-age"
            >
              <Users className="mx-auto mb-2 text-indigo-600" size={32} />
              <h4 className="font-semibold">By Age</h4>
              <p className="text-xs text-gray-600 mt-1">Age-specific guidance</p>
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}