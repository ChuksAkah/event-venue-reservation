/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!axios/)"], 
};

module.exports = config;
