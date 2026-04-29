// Vercel Serverless Function Entry Point
// This file routes all requests to the TanStack Start server bundle
// that is built into dist/server/server.js

import { handle } from '../dist/server/server.js';

export default async function handler(request, response) {
  try {
    // Delegate the request to the TanStack Start server
    await handle(request, response);
  } catch (error) {
    console.error('Error handling request:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}
