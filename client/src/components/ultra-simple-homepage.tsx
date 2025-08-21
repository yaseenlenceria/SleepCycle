import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Moon, ArrowRight, Sun, Bed } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo-head';

interface UltraSimpleHomepageProps {
  onCalculateBedtime: () => void;
  onCalculateWakeup: (bedtime?: string) => void;
  onSleepNow: (sleepDuration?: number) => void;
  onTimeChange: (hour: string, minute: string, period: string) => void;
  hour: string;
  minute: string;
  period: string;
  // Results display props
  showBedtimeResults: boolean;
  showWakeupResults: boolean;
  showSleepNowResults: boolean;
  bedtimeResultsComponent?: React.ReactNode;
  wakeupResultsComponent?: React.ReactNode;
  sleepNowResultsComponent?: React.ReactNode;
}

export function UltraSimpleHomepage({ 
  onCalculateBedtime,
  onCalculateWakeup, 
  onSleepNow, 
  onTimeChange,
  hour,
  minute,
  period,
  showBedtimeResults,
  showWakeupResults,
  showSleepNowResults,
  bedtimeResultsComponent,
  wakeupResultsComponent,
  sleepNowResultsComponent
}: UltraSimpleHomepageProps) {
  const { t } = useTranslation();
  const [wakeHour, setWakeHour] = useState(hour);
  const [wakeMinute, setWakeMinute] = useState(minute);
  const [wakePeriod, setWakePeriod] = useState(period);
  
  const [bedHour, setBedHour] = useState('11');
  const [bedMinute, setBedMinute] = useState('00');
  const [bedPeriod, setBedPeriod] = useState('PM');
  
  const [selectedSleepDuration, setSelectedSleepDuration] = useState(8);

  // Generate hours and minutes
  const hours = Array.from({ length: 12 }, (_, i) => String(i === 0 ? 12 : i).padStart(2, '0'));
  const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));

  const handleWakeTimeChange = (newHour: string, newMinute: string, newPeriod: string) => {
    setWakeHour(newHour);
    setWakeMinute(newMinute);
    setWakePeriod(newPeriod);
    onTimeChange(newHour, newMinute, newPeriod);
  };

  return (
    <>
      <SEOHead />
      <div className="w-full max-w-sm mx-auto px-4 sm:max-w-lg lg:max-w-2xl sm:px-6 lg:px-8">
        {/* Ultra-Minimal Hero */}
        <div className="text-center mb-3 sm:mb-4">
          <h1 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{t('homepage.title')}</h1>
          <div className="flex flex-wrap justify-center items-center gap-1 text-xs">
            <span className="text-green-600 font-medium">{t('homepage.trustBadges.bestCalculator')}</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-600 font-medium">{t('homepage.trustBadges.ageGenderBased')}</span>
            <span className="text-gray-400">•</span>
            <span className="text-purple-600 font-medium">{t('homepage.trustBadges.freeSleepCycle')}</span>
          </div>
        </div>

      

      <div className="space-y-4 sm:space-y-5 lg:space-y-6">
        
        {/* Wake Up Time Card - Mobile Optimized */}
        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 shadow-lg hover:shadow-xl transition-all">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-5">
              <div className="flex items-center mb-2 sm:mb-0">
                <Sun className="text-orange-500 mr-2" size={18} />
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                  {t('homepage.wakeUpCard.title')}
                </h2>
              </div>
              <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs self-start sm:self-auto">{t('homepage.wakeUpCard.badge')}</div>
            </div>
            
            {/* Perfect Mobile Time Selector */}
            <div className="bg-white rounded-xl p-4 shadow-inner border border-orange-200 mb-4 sm:mb-5">
              <div className="flex justify-center items-center gap-3 sm:gap-4">
                {/* Hour Selector */}
                <div className="flex flex-col items-center">
                  <label className="text-xs text-gray-500 mb-1">{t('homepage.timeSelector.hour')}</label>
                  <select 
                    value={wakeHour}
                    onChange={(e) => handleWakeTimeChange(e.target.value, wakeMinute, wakePeriod)}
                    className="w-16 h-12 sm:w-18 sm:h-14 text-lg sm:text-xl font-bold text-center border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none bg-white cursor-pointer hover:border-orange-400 transition-all shadow-sm"
                    data-testid="wake-hour-select"
                  >
                    {hours.map(h => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>

                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mt-4">:</div>

                {/* Minute Selector */}
                <div className="flex flex-col items-center">
                  <label className="text-xs text-gray-500 mb-1">{t('homepage.timeSelector.minute')}</label>
                  <select 
                    value={wakeMinute}
                    onChange={(e) => handleWakeTimeChange(wakeHour, e.target.value, wakePeriod)}
                    className="w-16 h-12 sm:w-18 sm:h-14 text-lg sm:text-xl font-bold text-center border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none bg-white cursor-pointer hover:border-orange-400 transition-all shadow-sm"
                    data-testid="wake-minute-select"
                  >
                    {minutes.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* AM/PM Toggle */}
                <div className="flex flex-col items-center">
                  <label className="text-xs text-gray-500 mb-1">{t('homepage.timeSelector.period')}</label>
                  <div className="bg-orange-100 rounded-lg p-1 shadow-sm">
                    <button
                      onClick={() => handleWakeTimeChange(wakeHour, wakeMinute, 'AM')}
                      className={`block w-12 py-1.5 mb-1 rounded-md text-sm font-bold transition-all ${
                        wakePeriod === 'AM' 
                          ? 'bg-orange-500 text-white shadow-md transform scale-105' 
                          : 'text-orange-600 hover:bg-orange-200'
                      }`}
                      data-testid="wake-am-button"
                    >
                      AM
                    </button>
                    <button
                      onClick={() => handleWakeTimeChange(wakeHour, wakeMinute, 'PM')}
                      className={`block w-12 py-1.5 rounded-md text-sm font-bold transition-all ${
                        wakePeriod === 'PM' 
                          ? 'bg-orange-500 text-white shadow-md transform scale-105' 
                          : 'text-orange-600 hover:bg-orange-200'
                      }`}
                      data-testid="wake-pm-button"
                    >
                      PM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={onCalculateBedtime}
              className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-lg transition-colors shadow-md hover:shadow-lg touch-manipulation"
              data-testid="button-calculate-bedtime"
            >
              {t('homepage.wakeUpCard.button')}
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </CardContent>
        </Card>

        {/* Expandable Results for Bedtime */}
        {showBedtimeResults && (
          <div className="mt-3 animate-in slide-in-from-top-5 duration-500">
            {bedtimeResultsComponent}
          </div>
        )}

        {/* Bed Time Card - Mobile Optimized */}
        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 shadow-lg hover:shadow-xl transition-all">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-5">
              <div className="flex items-center mb-2 sm:mb-0">
                <Bed className="text-purple-500 mr-2" size={18} />
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                  {t('homepage.bedTimeCard.title')}
                </h2>
              </div>
              <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs self-start sm:self-auto">{t('homepage.bedTimeCard.badge')}</div>
            </div>
            
            {/* Perfect Mobile Time Selector */}
            <div className="bg-white rounded-xl p-4 shadow-inner border border-purple-200 mb-4 sm:mb-5">
              <div className="flex justify-center items-center gap-3 sm:gap-4">
                {/* Hour Selector */}
                <div className="flex flex-col items-center">
                  <label className="text-xs text-gray-500 mb-1">{t('homepage.timeSelector.hour')}</label>
                  <select 
                    value={bedHour}
                    onChange={(e) => setBedHour(e.target.value)}
                    className="w-16 h-12 sm:w-18 sm:h-14 text-lg sm:text-xl font-bold text-center border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none bg-white cursor-pointer hover:border-purple-400 transition-all shadow-sm"
                    data-testid="bed-hour-select"
                  >
                    {hours.map(h => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>

                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mt-4">:</div>

                {/* Minute Selector */}
                <div className="flex flex-col items-center">
                  <label className="text-xs text-gray-500 mb-1">{t('homepage.timeSelector.minute')}</label>
                  <select 
                    value={bedMinute}
                    onChange={(e) => setBedMinute(e.target.value)}
                    className="w-16 h-12 sm:w-18 sm:h-14 text-lg sm:text-xl font-bold text-center border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none bg-white cursor-pointer hover:border-purple-400 transition-all shadow-sm"
                    data-testid="bed-minute-select"
                  >
                    {minutes.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* AM/PM Toggle */}
                <div className="flex flex-col items-center">
                  <label className="text-xs text-gray-500 mb-1">{t('homepage.timeSelector.period')}</label>
                  <div className="bg-purple-100 rounded-lg p-1 shadow-sm">
                    <button
                      onClick={() => setBedPeriod('AM')}
                      className={`block w-12 py-1.5 mb-1 rounded-md text-sm font-bold transition-all ${
                        bedPeriod === 'AM' 
                          ? 'bg-purple-500 text-white shadow-md transform scale-105' 
                          : 'text-purple-600 hover:bg-purple-200'
                      }`}
                      data-testid="bed-am-button"
                    >
                      AM
                    </button>
                    <button
                      onClick={() => setBedPeriod('PM')}
                      className={`block w-12 py-1.5 rounded-md text-sm font-bold transition-all ${
                        bedPeriod === 'PM' 
                          ? 'bg-purple-500 text-white shadow-md transform scale-105' 
                          : 'text-purple-600 hover:bg-purple-200'
                      }`}
                      data-testid="bed-pm-button"
                    >
                      PM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={() => {
                const bedtime = `${bedHour}:${bedMinute} ${bedPeriod}`;
                onCalculateWakeup(bedtime);
              }}
              className="w-full bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-white py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-lg transition-colors shadow-md hover:shadow-lg touch-manipulation"
              data-testid="button-calculate-wakeup"
            >
              {t('homepage.bedTimeCard.button')}
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </CardContent>
        </Card>

        {/* Expandable Results for Wake Up Time */}
        {showWakeupResults && (
          <div className="mt-3 animate-in slide-in-from-top-5 duration-500">
            {wakeupResultsComponent}
          </div>
        )}

        {/* Sleep Now Card - Mobile Optimized */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg hover:shadow-xl transition-all">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-5">
              <div className="flex items-center mb-2 sm:mb-0">
                <Moon className="text-green-500 mr-2" size={18} />
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                  {t('homepage.sleepNowCard.title')}
                </h2>
              </div>
              <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs self-start sm:self-auto">{t('homepage.sleepNowCard.badge')}</div>
            </div>
            
            <div className="mb-4 sm:mb-5">
              <p className="text-xs sm:text-sm text-gray-600 mb-3 text-center">{t('homepage.sleepNowCard.chooseDuration')}</p>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {[6, 7, 8, 9].map(hours => (
                  <button
                    key={hours}
                    onClick={() => setSelectedSleepDuration(hours)}
                    className={`py-2 px-1 text-sm sm:text-base rounded-lg border-2 transition-all touch-manipulation font-bold min-h-[2.5rem] ${
                      selectedSleepDuration === hours 
                        ? 'bg-green-500 border-green-500 text-white shadow-md scale-105'
                        : 'bg-white border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 shadow-sm'
                    }`}
                    data-testid={`sleep-duration-${hours}`}
                  >
                    {hours}h
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => onSleepNow(selectedSleepDuration)}
              className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-lg transition-colors shadow-md hover:shadow-lg touch-manipulation"
              data-testid="button-sleep-now"
            >
              {t('homepage.sleepNowCard.button', { duration: selectedSleepDuration })}
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </CardContent>
        </Card>

        {/* Expandable Results for Sleep Now */}
        {showSleepNowResults && (
          <div className="mt-3 animate-in slide-in-from-top-5 duration-500">
            {sleepNowResultsComponent}
          </div>
        )}

        {/* How Does It Work Section - Mobile Optimized */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="text-center mb-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                {t('homepage.howItWorks.title')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {t('homepage.howItWorks.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm sm:text-base font-bold text-blue-600">1</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">{t('homepage.howItWorks.steps.pickTime')}</p>
              </div>
              
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm sm:text-base font-bold text-purple-600">2</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">{t('homepage.howItWorks.steps.aiCalculates')}</p>
              </div>
              
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm sm:text-base font-bold text-green-600">3</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">{t('homepage.howItWorks.steps.getResults')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Signals and Social Proof - Mobile Optimized */}
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200 shadow-lg">
          <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
            <h4 className="text-sm sm:text-base font-bold text-gray-800 mb-3">{t('homepage.trustSignals.title')}</h4>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">{t('homepage.trustSignals.stats.sessionsAnalyzed')}</div>
                <div className="text-xs sm:text-sm text-gray-600">{t('homepage.trustSignals.stats.sessionsLabel')}</div>
              </div>
              <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">{t('homepage.trustSignals.stats.happyUsers')}</div>
                <div className="text-xs sm:text-sm text-gray-600">{t('homepage.trustSignals.stats.happyUsersLabel')}</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{t('homepage.trustSignals.description')}</p>
          </CardContent>
        </Card>
        
      </div>
    </div>
    </>
  );
}