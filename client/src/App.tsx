import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy } from "react";
import SleepCalculator from "@/pages/sleep-calculator";
import TermsOfService from "@/pages/terms-of-service";
import PrivacyPolicy from "@/pages/privacy-policy";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Help from "@/pages/help";
import SleepScience from "@/pages/sleep-science";
import MoreResources from "@/pages/more-resources";
import NotFound from "@/pages/not-found";

const AgeCalculator = lazy(() => import('./pages/age-calculator'));
const SleepCyclesBabies = lazy(() => import('./pages/sleep-cycles-babies'));
const SleepCyclesAdults = lazy(() => import('./pages/sleep-cycles-adults'));
const SleepCyclesNaps = lazy(() => import('./pages/sleep-cycles-naps'));
const SleepCycles4MonthOld = lazy(() => import('./pages/sleep-cycles-4-month-old'));
const SleepCyclesToddlers = lazy(() => import('./pages/sleep-cycles-toddlers'));
const SleepCyclesNewborns = lazy(() => import('./pages/sleep-cycles-newborns'));
const SleepCycles6MonthOld = lazy(() => import('./pages/sleep-cycles-6-month-old'));
const SleepCycles7MonthOld = lazy(() => import('./pages/sleep-cycles-7-month-old'));
const SleepCycles2YearOlds = lazy(() => import('./pages/sleep-cycles-2-year-olds'));

function Router() {
  return (
    <Switch>
      <Route path="/" component={SleepCalculator} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/help" component={Help} />
      <Route path="/sleep-science" component={SleepScience} />
      <Route path="/more-resources" component={MoreResources} />
      <Route path="/age-calculator" component={AgeCalculator} />
      <Route path="/sleep-cycles-babies" component={SleepCyclesBabies} />
      <Route path="/sleep-cycles-adults" component={SleepCyclesAdults} />
      <Route path="/sleep-cycles-naps" component={SleepCyclesNaps} />
      <Route path="/sleep-cycles-4-month-old" component={SleepCycles4MonthOld} />
      <Route path="/sleep-cycles-toddlers" component={SleepCyclesToddlers} />
      <Route path="/sleep-cycles-newborns" component={SleepCyclesNewborns} />
      <Route path="/sleep-cycles-6-month-old" component={SleepCycles6MonthOld} />
      <Route path="/sleep-cycles-7-month-old" component={SleepCycles7MonthOld} />
      <Route path="/sleep-cycles-2-year-olds" component={SleepCycles2YearOlds} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
