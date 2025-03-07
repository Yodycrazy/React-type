module.exports = {
  preset: "ts-jest", 
  testEnvironment: "jsdom", 
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], 
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", 
    "^react-router-dom$": "<rootDir>/node_modules/react-router-dom", 
  },
};