// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Configures for antfu's config
  },

  // ESLint Flat Configs
  // Can have multiple configs
  {
    files: ['**/*.vue'],
    rules: {
      'vue/no-restricted-syntax': [
        'error',
        {
          selector: 'VElement[name=\'a\']',
          message: 'Use NuxtLink instead.',
        },
      ],
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
)
