module.exports = {
  pwa: {
    name: 'Smart Door',
    themeColor: '#4DBA87',
    msTileColor: '#FBFAF5',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths:'src/assets/logo.png',

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/registerServiceWorker.js',
    }
  }
}
