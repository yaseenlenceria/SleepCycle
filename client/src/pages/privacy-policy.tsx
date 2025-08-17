import { Link } from 'wouter';
import { ArrowLeft, Shield } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sleep-blue-50 via-sleep-purple-50 to-pink-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Shield className="mx-auto mb-4 text-sleep-blue-600" size={48} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At <a href="https://sleepcycle.io" className="text-sleep-blue-600 hover:text-sleep-blue-700">SleepCycle.io</a>, we are committed to protecting your privacy. This privacy policy explains how we collect, use, and protect your information when you use our sleep cycle calculator and related services.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Collection</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Sleep calculation preferences (bedtime, wake-up time, nap durations)</li>
              <li>Usage analytics to improve our sleep calculator functionality</li>
              <li>Device information for mobile optimization</li>
              <li>Cookies for website functionality and user experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>To provide personalized sleep cycle calculations</li>
              <li>To improve our sleep calculator algorithms and user experience</li>
              <li>To analyze usage patterns for better service optimization</li>
              <li>To ensure the security and functionality of our platform</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use Google Analytics and other services to help us understand how our sleep calculator is used. These services may collect information sent by your browser or mobile device, including cookies and usage data.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cookies Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website uses cookies to enhance your experience with our sleep cycle calculator. We use cookies for:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Remembering your sleep calculation preferences</li>
              <li>Analytics and website performance optimization</li>
              <li>Ensuring proper functionality across different devices</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You have the right to access, update, or delete your personal information. You can also opt-out of certain data collection practices by adjusting your browser settings or contacting us directly.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-gray-700">
                <p className="font-semibold">SIA Webby</p>
                <p>Aspazijas bulvāris 20</p>
                <p>Rīga, LV-1050</p>
                <p>Latvia</p>
                <p className="mt-2">Email: <a href="mailto:privacy@sleepcycle.io" className="text-sleep-blue-600 hover:text-sleep-blue-700">privacy@sleepcycle.io</a></p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                ← Back to Sleep Calculator
              </Link>
              <Link href="/terms-of-service" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                Terms of Service
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