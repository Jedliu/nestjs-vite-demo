import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'nest',
      appPath: './src/main-vite.ts',
      tsCompiler: 'swc',
    }),
  ],
  optimizeDeps: {
    // Vite does not work well with optional dependencies,
    // mark them as ignored for now
    exclude: [
      '@nestjs/microservices',
      '@nestjs/websockets',
      'cache-manager',
      'class-transformer',
      'class-validator',
      'fastify-swagger',
      'libsql',
      'mock-aws-s3',
      'better-sqlite3',
      'nock',
      'aws-sdk',
      'mariadb/callback',
      '@mapbox/node-pre-gyp',
    ],
  },
});
