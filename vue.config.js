module.exports = {
  pwa: {
    name: 'Smart Door',
    themeColor: '#4DBA87',
    msTileColor: '#4DBA87', 
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    manifestOptions: {
      background_color: '#FBFAF5',
    },

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    }
  }
}
