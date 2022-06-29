module.exports = {
  "roots": [
    "<rootDir>"
  ],
  "modulePaths": [
    "<rootDir>",
    "node_modules"
  ],
  "moduleFileExtensions": ["js", "jsx", "json", "ts", "tsx"],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.svg$": "jest-svg-transformer"
  },
  "moduleDirectories": [
    "node_modules"
  ],
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(png|svg|pdf|jpg|jpeg)$": "<rootDir>/__mocks__/fileMock.js"
  },
  "verbose": true
}