module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
        // name => '/src/styles/xx.less'
      },
      'vant'
    ]
  ]
}
