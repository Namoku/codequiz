module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  }
};
