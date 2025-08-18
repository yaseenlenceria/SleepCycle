import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Free AI service for generating sleep tips (using Groq or similar free API)
async function generatePersonalizedSleepTips(sleepData: any) {
  const { sleepDuration, bedtime, wakeTime, age, quality, healthScore } = sleepData;
  
  // Use a free AI API (Groq) - if no API key available, use intelligent rule-based system
  try {
    // Check if we have API access (you can add Groq or other free API here)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY || ''}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'You are a sleep expert. Provide 3-5 specific, actionable sleep tips based on the user\'s data. Keep each tip under 100 characters.'
          },
          {
            role: 'user',
            content: `User sleep data: Duration: ${sleepDuration}h, Bedtime: ${bedtime}, Wake: ${wakeTime}, Age: ${age}, Quality: ${quality}, Health Score: ${healthScore}%. Give personalized tips.`
          }
        ],
        model: 'llama3-8b-8192',
        max_tokens: 300
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      const content = data.choices[0]?.message?.content || '';
      return content.split('\n').filter((tip: string) => tip.trim().length > 0).slice(0, 5);
    }
  } catch (error) {
    console.log('Free AI API not available, using intelligent rule-based system');
  }
  
  // Fallback to intelligent rule-based system
  const tips = [];
  
  // Duration-based tips
  if (sleepDuration < 7) {
    tips.push(`Aim for ${7 + Math.floor(Math.random() * 2)} hours of sleep for better health and performance`);
    tips.push('Consider an earlier bedtime to get adequate rest for your age group');
  } else if (sleepDuration > 9) {
    tips.push('Excessive sleep may indicate underlying issues - consider consulting a doctor');
    tips.push('Try maintaining a consistent wake time even on weekends');
  } else {
    tips.push('Your sleep duration is optimal! Maintain this consistent schedule');
  }
  
  // Age-specific tips
  if (age < 18) {
    tips.push('Growing teens need consistent sleep schedules for brain development');
    tips.push('Avoid screens 1 hour before bedtime for better sleep quality');
  } else if (age >= 18 && age <= 30) {
    tips.push('Create a relaxing bedtime routine to signal your body it\'s time to sleep');
    tips.push('Regular exercise improves sleep quality, but avoid vigorous activity 3 hours before bed');
  } else if (age >= 31 && age <= 50) {
    tips.push('Manage stress through meditation or journaling before bed');
    tips.push('Keep your bedroom cool (60-67°F) for optimal sleep temperature');
  } else {
    tips.push('Afternoon naps (20-30 minutes) can be beneficial if needed');
    tips.push('Consider morning light exposure to maintain circadian rhythm');
  }
  
  // Quality-based tips
  if (quality === 'poor' || healthScore < 60) {
    tips.push('Avoid caffeine after 2 PM to improve sleep quality');
    tips.push('Create a dark, quiet sleep environment for deeper rest');
    tips.push('Consider a consistent pre-sleep routine starting 30 minutes before bed');
  } else if (quality === 'excellent' || healthScore > 85) {
    tips.push('Excellent sleep! Maintain your current sleep hygiene practices');
    tips.push('Share your good sleep habits with others who struggle with sleep');
  }
  
  // Time-based tips
  const bedHour = parseInt(bedtime.split(':')[0]);
  const bedPeriod = bedtime.includes('PM') ? 'PM' : 'AM';
  const effectiveBedHour = bedPeriod === 'PM' && bedHour !== 12 ? bedHour + 12 : (bedPeriod === 'AM' && bedHour === 12 ? 0 : bedHour);
  
  if (effectiveBedHour > 23 || effectiveBedHour < 5) {
    tips.push('Late bedtimes can disrupt natural circadian rhythms');
    tips.push('Gradually shift bedtime earlier by 15 minutes each night');
  }
  
  // Return unique tips, limited to 5
  return [...new Set(tips)].slice(0, 5);
}

export async function registerRoutes(app: Express): Promise<Server> {
  // SEO routes - serve static files with correct MIME types
  app.get('/sitemap.xml', (req, res) => {
    res.setHeader('Content-Type', 'application/xml');
    res.sendFile('sitemap.xml', { root: 'public' });
  });

  app.get('/robots.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile('robots.txt', { root: 'public' });
  });

  // SEO verification endpoint
  app.get('/api/seo-check', (req, res) => {
    res.json({
      status: 'SEO Ready',
      sitemap: 'https://sleepcycle.io/sitemap.xml',
      robots: 'https://sleepcycle.io/robots.txt',
      googleVerification: '-YSqbuf-McGr_DNLSS75_pYZnv1OtSfXq0OojJeQNIA',
      features: [
        'XML Sitemap with all pages and calculator URLs',
        'Google Search Console verification meta tag',
        'Robots.txt with proper crawl permissions', 
        'Structured data for rich snippets',
        'Open Graph meta tags for social sharing',
        'Twitter Card meta tags',
        'Canonical URLs and proper meta descriptions',
        'All target keywords optimized in meta tags'
      ]
    });
  });

  // Sleep tips API endpoint
  app.post('/api/sleep-tips', async (req, res) => {
    try {
      const { sleepData } = req.body;
      
      if (!sleepData) {
        return res.status(400).json({ error: 'Sleep data is required' });
      }

      // Generate personalized tips using free AI service (Groq)
      const tips = await generatePersonalizedSleepTips(sleepData);
      
      res.json({ tips });
    } catch (error) {
      console.error('Error generating sleep tips:', error);
      res.status(500).json({ error: 'Failed to generate personalized tips' });
    }
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
