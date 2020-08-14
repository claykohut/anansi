module.exports = {
  stories: ['../**/*.stories.@(tsx)'],
  addons: [
    '@storybook/addon-docs'
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
