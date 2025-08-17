import { Link } from 'wouter';
import { ArrowLeft, FileText } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service - SleepCycle.io #1 Sleep Calculator App Legal Terms";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read SleepCycle.io Terms of Service for the #1 sleep cycle calculator app. Legal terms, user agreements & service policies for sleep optimization platform.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sleep-blue-50 via-sleep-purple-50 to-pink-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <FileText className="mx-auto mb-4 text-sleep-blue-600" size={48} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              This agreement describes the conditions and rules under which SIA Webby ("our company", "we") offers you its services at <a href="https://sleepcycle.io" className="text-sleep-blue-600 hover:text-sleep-blue-700">sleepcycle.io</a>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              This agreement will be governed by the laws of The Republic of Latvia, without reference to conflict of laws principles. You agree that any litigation relating to this agreement may only be brought in, and shall be subject to the jurisdiction of, any Court of The Republic of Latvia.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By using the services of <a href="https://sleepcycle.io" className="text-sleep-blue-600 hover:text-sleep-blue-700">sleepcycle.io</a>, you agree to observe all of the following conditions and rules:
            </p>

            <ol className="list-decimal list-inside space-y-4 mb-8">
              <li className="text-gray-700">Use of the sleepcycle.io service is at your own risk.</li>
              <li className="text-gray-700">You bear full responsibility for any data transmitted to sleepcycle.io servers.</li>
              <li className="text-gray-700">You agree not to use the sleepcycle.io service to upload any illegal materials.</li>
              <li className="text-gray-700">You agree not to integrate the sleepcycle.io service into your own or 3rd party applications.</li>
              <li className="text-gray-700">You may use the sleepcycle.io service for any purpose, personal or commercial.</li>
              <li className="text-gray-700">We reserves the right to change or cease any of services at sleepcycle.io, at any time.</li>
              <li className="text-gray-700">We reserves the right to change the terms of this agreement without notice.</li>
              <li className="text-gray-700">The sleepcycle.io service does not provide any guarantees.</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Privacy</h2>
            <ol className="list-decimal list-inside space-y-4 mb-8" start={9}>
              <li className="text-gray-700">In order to improve the quality of the sleepcycle.io service, we may save and analyze the metadata of your requests.</li>
              <li className="text-gray-700">Google collects data and uses cookies for ad personalization and measurement for this site. <a href="https://policies.google.com/technologies/partner-sites" className="text-sleep-blue-600 hover:text-sleep-blue-700" target="_blank" rel="noopener noreferrer">Learn how Google collects and uses data</a>. You can turn off ad personalization at any time in your Google account settings. Also, we use cookies for statistical purposes. By using this site, you consent to our use of cookies.</li>
            </ol>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Company Information</h3>
              <div className="text-gray-700">
                <p className="font-semibold">SIA Webby</p>
                <p>Aspazijas bulvāris 20</p>
                <p>Rīga, LV-1050</p>
                <p>Latvia</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                ← Back to Sleep Calculator
              </Link>
              <Link href="/privacy-policy" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                Privacy Policy
              </Link>
              <Link href="/about" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}