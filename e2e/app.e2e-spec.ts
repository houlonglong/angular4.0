import { Angular4.0Page } from './app.po';

describe('angular4.0 App', () => {
  let page: Angular4.0Page;

  beforeEach(() => {
    page = new Angular4.0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
