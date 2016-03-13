// Use DefinePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.

module.exports = __DEV__ ?  // eslint-disable-line no-undef
    require('./configureStore.dev')
    : require('./configureStore.prod')