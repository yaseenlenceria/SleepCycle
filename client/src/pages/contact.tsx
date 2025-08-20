import { Link } from 'wouter';
import { ArrowLeft, Mail, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Sleep Calculator Support | SleepCycle.io | 24/7 Expert Help";
    
    const setMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    setMeta('description', 'Contact SleepCycle.io support for help with our free sleep cycle calculator. Expert assistance with bedtime calculations, sleep optimization, and technical issues. Response within 24 hours.');
    setMeta('keywords', 'sleep calculator support, contact sleep cycle, sleep calculator help, SleepCycle.io support, bedtime calculator assistance');
    setMeta('og:title', 'Contact Sleep Calculator Support | SleepCycle.io');
    setMeta('og:description', 'Get expert help with our sleep cycle calculator. 24/7 support for all your sleep optimization needs.');
    setMeta('og:type', 'website');
    setMeta('og:url', 'https://sleepcycle.io/contact');
    setMeta('og:image', 'https://sleepcycle.io/logo.jpg');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', 'Contact Sleep Calculator Support');
    setMeta('twitter:description', 'Expert help with our free sleep cycle calculator and optimization tools.');
    setMeta('twitter:image', 'https://sleepcycle.io/logo.jpg');
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://sleepcycle.io/contact');
    
    // Add structured data for organization contact info
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "SleepCycle.io",
        "url": "https://sleepcycle.io",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@sleepcycle.io",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Aspazijas bulvāris 20",
          "addressLocality": "Rīga",
          "postalCode": "LV-1050",
          "addressCountry": "LV"
        }
      }
    };
    
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sleep-blue-50 via-sleep-purple-50 to-pink-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <MessageCircle className="mx-auto mb-4 text-sleep-blue-600" size={48} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contact Support
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Need help with our sleep cycle calculator? We're here to help you optimize your sleep!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Contact Our Sleep Calculator Support Team</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-sleep-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Support</h3>
                    <p className="text-gray-600">support@sleepcycle.io</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="text-sleep-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Response Time</h3>
                    <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM (EET)</p>
                    <p className="text-sm text-gray-500">Weekend responses within 48 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-sleep-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Company Address</h3>
                    <p className="text-gray-600">SIA Webby</p>
                    <p className="text-gray-600">Aspazijas bulvāris 20</p>
                    <p className="text-gray-600">Rīga, LV-1050, Latvia</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Sleep Calculator Questions & Support Topics</h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-sleep-blue-50 to-sleep-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Sleep Calculator Issues</h3>
                  <p className="text-gray-600 text-sm">Problems with bedtime or wake-up calculations</p>
                </div>
                
                <div className="bg-gradient-to-br from-sleep-purple-50 to-pink-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Baby Nap Calculator</h3>
                  <p className="text-gray-600 text-sm">Questions about age-specific sleep schedules</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Mobile App Issues</h3>
                  <p className="text-gray-600 text-sm">Problems with mobile interface or touch controls</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Sleep Science Questions</h3>
                  <p className="text-gray-600 text-sm">Understanding 90-minute sleep cycles and recommendations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Support Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Why aren't my calculations showing?</h4>
                <p className="text-gray-600 text-sm mb-4">Make sure you've selected a valid time and clicked the calculate button. Try refreshing the page if issues persist.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Can I use this for different time zones?</h4>
                <p className="text-gray-600 text-sm mb-4">Yes, our calculator works for any time zone. Just input your local times and it will calculate optimal sleep cycles.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Is the baby nap calculator medically approved?</h4>
                <p className="text-gray-600 text-sm mb-4">Our recommendations are based on pediatric sleep research, but always consult your pediatrician for personalized advice.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">How accurate are 90-minute sleep cycles?</h4>
                <p className="text-gray-600 text-sm mb-4">Sleep cycles typically range 90-120 minutes. Our 90-minute calculation is a scientifically-backed average that works well for most people.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                ← Back to Sleep Calculator
              </Link>
              <Link href="/help" className="text-sleep-blue-600 hover:text-sleep-blue-700 font-medium">
                Help & FAQ
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