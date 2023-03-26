const TsconfigPaths = require('vite-tsconfig-paths').default

module.exports = {
  "stories": [
    "../src/__stories__/*.story.mdx",
    "../src/__stories__/*.story.@(js|jsx|ts|tsx)",
    '../src/__stories__/**/*.story.@(js|jsx|ts|tsx|mdx)',
    '../src/__stories__/**/**/*.story.@(js|jsx|ts|tsx|mdx)',
    '../src/__stories__/**/**/**/*.story.@(js|jsx|ts|tsx|mdx)'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal(config) {
    config.plugins.push([TsconfigPaths()])
    return config
  }
}