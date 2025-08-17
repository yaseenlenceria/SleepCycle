import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
