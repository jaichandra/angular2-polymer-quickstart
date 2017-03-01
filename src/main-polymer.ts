import '../bower_components/webcomponentsjs/webcomponents-lite.min.js';
import "vulcanize?compress=true&base=!./elements.html";
document.addEventListener('WebComponentsReady', () => {
  require('./main.ts');
});