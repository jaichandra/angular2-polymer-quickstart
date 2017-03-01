// import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

import '../bower_components/webcomponentsjs/webcomponents-lite.min.js';
// import "vulcanize?compress=true&base=.!./elements.html";
// import './elements.html';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

document.addEventListener('WebComponentsReady', () => {
  console.log('WebComponentsReady');
  // platformBrowserDynamic().bootstrapModule(AppModule);
});