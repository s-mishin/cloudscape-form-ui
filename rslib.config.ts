import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  plugins: [pluginReact()],
  lib: [
    {
      format: 'esm',
      dts: {
        bundle: false, // Единый файл типов
        distPath: 'dist',
      },
    },
    {
      format: 'cjs',
      dts: false, // Типы уже сгенерированы для esm
    },
  ],
  output: {
    target: 'web',
    distPath: {
      root: 'dist',
    },
    copy: {
      patterns: [{ from: 'package.json' }],
    },
  },
});
