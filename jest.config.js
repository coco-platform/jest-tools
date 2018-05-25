module.exports = {
  transform: {
    '\\.(jpg|jpeg|png|giff|webp|svg)$': '<rootDir>/lib/asset-transformer.js',
  },
  moduleFileExtensions: ['js', 'json'],
  moduleDirectories: ['node_modules'],
  // Test configuration
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\]'],
  // Coverage report
  // Test configuration
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.spec.js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/es/'],
};
