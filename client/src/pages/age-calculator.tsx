import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, TrendingUp, Gift, Star } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function AgeCalculatorPage() {
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('1');
  const [birthDay, setBirthDay] = useState('1');
  const [results, setResults] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  const currentYear = new Date().getFullYear();
  const currentDate = new Date();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Age Calculator - SleepCycle.io #1 App for Exact Age & Life Statistics";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SleepCycle.io offers the #1 age calculator app. Calculate exact age in years, months, days, zodiac signs & life statistics. Free precise age calculation tool.');
    }
  }, []);

  const calculateAge = () => {
    if (!birthYear || parseInt(birthYear) < 1900 || parseInt(birthYear) > currentYear) {
      return;
    }

    const birthDate = new Date(parseInt(birthYear), parseInt(birthMonth) - 1, parseInt(birthDay));
    const today = new Date();
    
    // Calculate exact age
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += lastMonth.getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    // Calculate total days lived
    const timeDiff = today.getTime() - birthDate.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    const totalHours = Math.floor(timeDiff / (1000 * 3600));
    const totalMinutes = Math.floor(timeDiff / (1000 * 60));

    // Calculate next birthday
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 3600 * 24));

    // Life milestones
    const milestones = [];
    if (ageYears >= 18) milestones.push('Legal Adult');
    if (ageYears >= 21) milestones.push('Legal Drinking Age (US)');
    if (ageYears >= 25) milestones.push('Car Insurance Rates Drop');
    if (ageYears >= 30) milestones.push('Entered Third Decade');
    if (ageYears >= 40) milestones.push('Over the Hill');
    if (ageYears >= 50) milestones.push('Half Century');
    if (ageYears >= 65) milestones.push('Retirement Age');

    setResults({
      exactAge: { years: ageYears, months: ageMonths, days: ageDays },
      totalDays,
      totalHours,
      totalMinutes,
      daysUntilBirthday,
      nextBirthday: nextBirthday.toLocaleDateString(),
      milestones,
      zodiacSign: getZodiacSign(parseInt(birthMonth), parseInt(birthDay)),
      generation: getGeneration(parseInt(birthYear))
    });
    
    setShowResults(true);
  };

  const getZodiacSign = (month: number, day: number) => {
    const signs = [
      { name: 'Capricorn', dates: [[12, 22], [1, 19]] },
      { name: 'Aquarius', dates: [[1, 20], [2, 18]] },
      { name: 'Pisces', dates: [[2, 19], [3, 20]] },
      { name: 'Aries', dates: [[3, 21], [4, 19]] },
      { name: 'Taurus', dates: [[4, 20], [5, 20]] },
      { name: 'Gemini', dates: [[5, 21], [6, 20]] },
      { name: 'Cancer', dates: [[6, 21], [7, 22]] },
      { name: 'Leo', dates: [[7, 23], [8, 22]] },
      { name: 'Virgo', dates: [[8, 23], [9, 22]] },
      { name: 'Libra', dates: [[9, 23], [10, 22]] },
      { name: 'Scorpio', dates: [[10, 23], [11, 21]] },
      { name: 'Sagittarius', dates: [[11, 22], [12, 21]] }
    ];

    for (const sign of signs) {
      const [[startMonth, startDay], [endMonth, endDay]] = sign.dates;
      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay)
      ) {
        return sign.name;
      }
    }
    return 'Capricorn';
  };

  const getGeneration = (year: number) => {
    if (year >= 1997) return 'Gen Z';
    if (year >= 1981) return 'Millennial';
    if (year >= 1965) return 'Gen X';
    if (year >= 1946) return 'Baby Boomer';
    return 'Silent Generation';
  };

  const monthOptions = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  const dayOptions = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* SEO Optimized Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Age Calculator - How Old Am I?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Calculate your exact age in years, months, days, hours, and minutes. Find out how old you would be if you were born in any year, discover your zodiac sign, generation, and life milestones.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✨ Exact Age Calculator</span>
            <span>🎂 Days Until Birthday</span>
            <span>⭐ Zodiac Sign</span>
            <span>👥 Generation Identifier</span>
          </div>
        </div>

        {/* Age Calculator Form */}
        <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0 mb-8">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-3">
              <Calendar className="text-blue-600" size={28} />
              Enter Your Birth Date
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Select your birth year, month, and day to calculate your exact age
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Birth Date Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Birth Year
                </label>
                <Input
                  type="number"
                  placeholder="1990"
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  min="1900"
                  max={currentYear}
                  className="text-center text-lg font-semibold"
                  data-testid="input-birth-year"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Birth Month
                </label>
                <select
                  value={birthMonth}
                  onChange={(e) => setBirthMonth(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-center text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  data-testid="select-birth-month"
                >
                  {monthOptions.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Birth Day
                </label>
                <select
                  value={birthDay}
                  onChange={(e) => setBirthDay(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-center text-lg font-semibold focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  data-testid="select-birth-day"
                >
                  {dayOptions.map((day) => (
                    <option key={day.value} value={day.value}>
                      {day.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={calculateAge}
                disabled={!birthYear}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                data-testid="button-calculate-age"
              >
                <Clock className="mr-2" size={20} />
                Calculate My Age
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {showResults && results && (
          <div className="animate-in slide-in-from-bottom-5 duration-700 space-y-6">
            {/* Main Age Results */}
            <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Your Age Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-blue-600 mb-2">
                    {results.exactAge.years}
                  </div>
                  <div className="text-lg text-gray-600">
                    {results.exactAge.years} years, {results.exactAge.months} months, {results.exactAge.days} days old
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{results.totalDays.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Days</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{results.totalHours.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Hours</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{results.totalMinutes.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Total Minutes</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{results.daysUntilBirthday}</div>
                    <div className="text-sm text-gray-600">Days to Birthday</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="text-yellow-500" size={24} />
                    Personal Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zodiac Sign:</span>
                    <span className="font-semibold">{results.zodiacSign}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Generation:</span>
                    <span className="font-semibold">{results.generation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Birthday:</span>
                    <span className="font-semibold">{results.nextBirthday}</span>
                  </div>
                </CardContent>
              </Card>

              {results.milestones.length > 0 && (
                <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gift className="text-pink-500" size={24} />
                      Life Milestones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {results.milestones.map((milestone: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-gray-700">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Fun Facts */}
            <Card className="bg-white bg-opacity-90 backdrop-blur-md shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="text-green-500" size={24} />
                  Fun Age Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">
                      {Math.floor(results.totalDays / 365.25 * 52)} weeks
                    </div>
                    <div className="text-sm text-gray-600">You've lived approximately this many weeks</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-xl font-bold text-purple-600">
                      {Math.floor(results.totalDays / 7)} weekends
                    </div>
                    <div className="text-sm text-gray-600">Approximate weekends you've enjoyed</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600">
                      {results.exactAge.years} birthdays
                    </div>
                    <div className="text-sm text-gray-600">Birthday celebrations so far</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* SEO Content Section */}
        <div className="mt-12 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Use the Age Calculator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Calculate Your Exact Age</h3>
              <p className="text-gray-600 mb-4">
                Our age calculator helps you find out exactly how old you are in years, months, and days. Simply enter your birth year, month, and day to get precise results.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Exact age in years, months, and days</li>
                <li>Total days, hours, and minutes lived</li>
                <li>Days until your next birthday</li>
                <li>Your zodiac sign and generation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Discover Fun Facts</h3>
              <p className="text-gray-600 mb-4">
                Learn interesting facts about your age including life milestones you've reached, your astrological sign, and which generation you belong to.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Life milestones and achievements</li>
                <li>Astrological zodiac sign</li>
                <li>Generation classification</li>
                <li>Fun statistics about your lifetime</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Calculate Your Age?</h3>
            <p className="text-gray-600">
              Knowing your exact age can be useful for many purposes: planning retirement, understanding life stages, calculating insurance rates, or simply satisfying curiosity. Our calculator provides comprehensive age information in an easy-to-understand format.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}