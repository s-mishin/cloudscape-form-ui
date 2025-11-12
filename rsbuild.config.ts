import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],

  output: {
    target: 'node',
    cleanDistPath: false,
    distPath: {
      js: '',
      css: '',
      html: '',
    },
    filename: {
      js: '[name].js',
      css: '[name].css',
    },
    legalComments: 'none',
    copy: {
      patterns: [{ from: './package.json' }],
    },
  },

  source: {
    entry: {
      index: './src/index.ts',
    },
  },

  performance: {
    chunkSplit: {
      strategy: 'all-in-one',
    },
  },

  dev: {
    writeToDisk: true,
  },

  tools: {
    rspack: (config) => {
      config.externals = {
        react: 'react',
        'react-dom': 'react-dom',
        'react-hook-form': 'react-hook-form',
        '@cloudscape-design/components': '@cloudscape-design/components',
      };

      return config;
    },
  },
});
