/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
  };
  var paths = {
      'typescript':         'node_modules/typescript/lib/typescript.js',
      'systemjs':           'node_modules/systemjs/dist/system.js',
      'system-polyfills':   'node_modules/systemjs/dist/system-polyfills.js',
      'es6-module-loader':  'node_modules/es6-module-loader/dist/es6-module-loader.js',
      'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });
  var config = {
    map: map,
    paths: paths,
    packages: packages,
    transpiler: 'typescript'
  }
  System.config(config);
})(this);
