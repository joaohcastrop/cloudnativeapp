const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',  // Garante que o Jest use babel-jest para transpilar JSX
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Para usar matchers como toBeInTheDocument()
};

module.exports = createJestConfig(customJestConfig);
