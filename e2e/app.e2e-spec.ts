import { Angular2PolymerQuickstartPage } from './app.po';

describe('angular2-polymer-quickstart App', function() {
  let page: Angular2PolymerQuickstartPage;

  beforeEach(() => {
    page = new Angular2PolymerQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
