#!/bin/bash

set -e  # Exit on any error

echo "Starting production build..."

# Clean previous build
rm -rf dist

# Build frontend and backend
echo "Building frontend and backend..."
vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

# Copy static assets to the build directory
echo "Copying static assets..."
if [ -d "public" ]; then
  cp -r public/* dist/public/ 2>/dev/null || true
  echo "Static assets copied successfully"
else
  echo "No public directory found, skipping static assets"
fi

echo "Production build complete!"
echo "Frontend built to: dist/public/"
echo "Backend built to: dist/index.js"