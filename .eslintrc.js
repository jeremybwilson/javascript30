module.exports = {
    "env": {
      browser: true,
      node: true,
      es2021: true,
      jquery: true
    },
    "extends": [
      'eslint:recommended',
      'airbnb'
    ],
    // parser: '@babel/eslint-parser',
    parserOptions: {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 7,
      "sourceType": "module",
      requireConfigFile: false,
      babelOptions: {
        presets: ['@babel/preset-react'],
      },
    },
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    },

};
