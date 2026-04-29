/**
 * Vercel Build Output Generator
 * This script creates the .vercel/output structure that Vercel expects
 * for serverless function deployments with static assets.
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = '.vercel/output';
const API_DIR = path.join(OUTPUT_DIR, 'api');
const STATIC_DIR = path.join(OUTPUT_DIR, 'static');

// Clean output directory
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true });
}

// Create required directories
fs.mkdirSync(API_DIR, { recursive: true });
fs.mkdirSync(STATIC_DIR, { recursive: true });

// Copy static assets from dist/client to .vercel/output/static
if (fs.existsSync('dist/client')) {
  fs.cpSync('dist/client', STATIC_DIR, { recursive: true });
  console.log('✓ Copied static assets to .vercel/output/static');
}

// Generate Vercel config.json
const config = {
  version: 3,
  routes: [
    {
      src: '/^\\/_assets\\/(.*)/',
      headers: {
        'cache-control': 'public, max-age=31536000, immutable'
      }
    }
  ],
  output: {
    type: 'nodejs',
    version: 18
  }
};

fs.writeFileSync(
  path.join(OUTPUT_DIR, 'config.json'),
  JSON.stringify(config, null, 2)
);
console.log('✓ Generated config.json');

// Generate serverless function entry point (api/index.js)
const serverEntry = `
// Vercel Serverless Function for TanStack Start
import { pathToFileURL } from 'url';
import { handle } from '../../dist/server/server.js';

export default async function handler(request, response) {
  // Set Vercel-required headers
  response.setHeader('x-vercel-id', process.env.VERCEL_DEPLOYMENT_ID || 'unknown');

  try {
    // Let TanStack Start handle the request
    await handle(request, response);
  } catch (error) {
    console.error('Server error:', error);
    response.statusCode = 500;
    response.end('Internal Server Error');
  }
}
`;

fs.writeFileSync(path.join(API_DIR, 'index.js'), serverEntry);
console.log('✓ Generated api/index.js serverless function');

console.log('\\n✓ Vercel build output generated successfully!');
console.log('Output directory:', OUTPUT_DIR);
`;
