const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  "presets": [
    "@babel/preset-react",
    "@babel/preset-env",
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "runtime": "automatic"
      }
    ],
    [
      "react-html-attrs"
    ]
  ]
};

if (isDevelopment) {
  module.exports.plugins.push([
    "react-refresh/babel"
  ]);
}
