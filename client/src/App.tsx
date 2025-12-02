import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, useEffect } from "react";
import HomePage from "@/pages/home";
import TermsOfService from "@/pages/terms-of-service";
import PrivacyPolicy from "@/pages/privacy-policy";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Help from "@/pages/help";
import SleepScience from "@/pages/sleep-science";
import MoreResources from "@/pages/more-resources";
import { NotFoundPage } from "@/pages/not-found";
import SleepCyclesBabies from '@/pages/sleep-cycles-babies';
import SleepCyclesAdults from '@/pages/sleep-cycles-adults';
import SleepCyclesNaps from '@/pages/sleep-cycles-naps';
import SleepCycles4MonthOld from '@/pages/sleep-cycles-4-month-old';
import SleepCyclesToddlers from '@/pages/sleep-cycles-toddlers';
import SleepCyclesNewborns from '@/pages/sleep-cycles-newborns';
import SleepCycles6MonthOld from '@/pages/sleep-cycles-6-month-old';
import SleepCycles7MonthOld from '@/pages/sleep-cycles-7-month-old';
import SleepCycles2YearOlds from '@/pages/sleep-cycles-2-year-olds';
import SitemapPage from '@/pages/sitemap';
import { BlogPage } from '@/pages/blog';
import { BlogPostLaunch } from '@/pages/blog-post-launch';
import { BlogPostBabyNaps } from '@/pages/blog-post-baby-naps';
import { BlogPostSleepCycleMyth } from '@/pages/blog-post-sleep-cycle-myth';
import { BlogPostSleepStages } from '@/pages/blog-post-sleep-stages';
import { BlogPostSleepCycleLength } from '@/pages/blog-post-sleep-cycle-length';
import { BlogPostSleepCycleStages } from '@/pages/blog-post-sleep-cycle-stages';
import { BlogPostNewbornSleepPatterns } from '@/pages/blog-post-newborn-sleep-patterns';
import { BlogPostLaSleepDoctors } from '@/pages/blog-post-la-sleep-doctors';
import { BlogPostFullSleepCycle } from '@/pages/blog-post-full-sleep-cycle';
import { BlogPostUbermanSleepCycle } from '@/pages/blog-post-uberman-sleep-cycle';
import { BlogPostBestSleepApps } from '@/pages/blog-post-best-sleep-apps';
import { BlogPostNightShiftSleep } from '@/pages/blog-post-night-shift-sleep';
import { BlogPost2YearOldSleepCycle } from '@/pages/blog-post-2-year-old-sleep-cycle';
import { BlogPostHowManySleepCycles } from '@/pages/blog-post-how-many-sleep-cycles';
import { BlogPostBestTimeSleepWakeUp } from '@/pages/blog-post-best-time-sleep-wake-up';
import { BlogPostSleepCyclesByAge } from '@/pages/blog-post-sleep-cycles-by-age';
import { BlogPostNapCalculatorScience } from '@/pages/blog-post-nap-calculator-science';
import { BlogPostWhyWakingWrongTimeTired } from '@/pages/blog-post-why-waking-wrong-time-tired';

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/help" component={Help} />
      <Route path="/sleep-science" component={SleepScience} />
      <Route path="/more-resources" component={MoreResources} />
      <Route path="/sleep-cycles-babies" component={SleepCyclesBabies} />
      <Route path="/sleep-cycles-adults" component={SleepCyclesAdults} />
      <Route path="/sleep-cycles-naps" component={SleepCyclesNaps} />
      <Route path="/sleep-cycles-4-month-old" component={SleepCycles4MonthOld} />
      <Route path="/sleep-cycles-toddlers" component={SleepCyclesToddlers} />
      <Route path="/sleep-cycles-newborns" component={SleepCyclesNewborns} />
      <Route path="/sleep-cycles-6-month-old" component={SleepCycles6MonthOld} />
      <Route path="/sleep-cycles-7-month-old" component={SleepCycles7MonthOld} />
      <Route path="/sleep-cycles-2-year-olds" component={SleepCycles2YearOlds} />
      <Route path="/sitemap" component={SitemapPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/sleep-cycle-length" component={BlogPostSleepCycleLength} />
      <Route path="/blog/sleep-stages-guide" component={BlogPostSleepStages} />
      <Route path="/blog/sleep-cycle-stages" component={BlogPostSleepCycleStages} />
      <Route path="/blog/sleep-cycle-myth" component={BlogPostSleepCycleMyth} />
      <Route path="/blog/sleepcycle-worldwide-launch" component={BlogPostLaunch} />
      <Route path="/blog/baby-nap-duration-guide" component={BlogPostBabyNaps} />
      <Route path="/blog/newborn-sleep-patterns" component={BlogPostNewbornSleepPatterns} />
      <Route path="/blog/best-sleep-doctors-los-angeles" component={BlogPostLaSleepDoctors} />
      <Route path="/blog/full-sleep-cycle-length" component={BlogPostFullSleepCycle} />
      <Route path="/blog/uberman-sleep-cycle" component={BlogPostUbermanSleepCycle} />
      <Route path="/blog/best-sleep-apps-2025" component={BlogPostBestSleepApps} />
      <Route path="/blog/night-shift-sleep-cycle" component={BlogPostNightShiftSleep} />
      <Route path="/blog/2-year-old-sleep-cycle" component={BlogPost2YearOldSleepCycle} />
      <Route path="/blog/how-many-sleep-cycles-per-night" component={BlogPostHowManySleepCycles} />
      <Route path="/blog/best-time-sleep-wake-up" component={BlogPostBestTimeSleepWakeUp} />
      <Route path="/blog/sleep-cycles-by-age" component={BlogPostSleepCyclesByAge} />
      <Route path="/blog/nap-calculator-science" component={BlogPostNapCalculatorScience} />
      <Route path="/blog/why-waking-wrong-time-makes-tired" component={BlogPostWhyWakingWrongTimeTired} />
      {/* Fallback to 404 */}
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();

  useEffect(() => {
    // Sanitize any accidental garbled characters in critical meta tags
    const hasGarbled = (s: string | null | undefined) => !!s && /\uFFFD|�/.test(s);

    if (hasGarbled(document.title)) {
      document.title = "Sleep Cycle Calculator - Optimize Your Sleep with Science | SleepCycle.io";
    }

    const fixMeta = (selector: string, fallback: string) => {
      const el = document.querySelector(selector) as HTMLMetaElement | null;
      const content = el?.getAttribute("content") || "";
      if (hasGarbled(content) && el) {
        el.setAttribute("content", fallback);
      }
    };

    fixMeta('meta[name="description"]', 'Calculate optimal bedtimes and wake times using 90-minute sleep cycles. Free and easy for all ages.');
    fixMeta('meta[property="og:title"]', 'Sleep Cycle Calculator - SleepCycle.io');
    fixMeta('meta[property="og:description"]', 'Calculate optimal bedtimes and wake times using 90-minute sleep cycles.');
    fixMeta('meta[name="twitter:title"]', 'Sleep Cycle Calculator - SleepCycle.io');
    fixMeta('meta[name="twitter:description"]', 'Calculate optimal bedtimes and wake times using 90-minute sleep cycles.');
  }, [location]);

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
