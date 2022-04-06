// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }
// module.exports = {
//   presets: ['@vue/app'],
//   plugins: ['@babel/plugin-transform-modules-commonjs']
// }

module.exports = {
  presets: [
    ["@vue/app", {
      modules: "commonjs"
    }]
  ]
};