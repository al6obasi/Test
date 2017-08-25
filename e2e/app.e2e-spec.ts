import { Test0Page } from './app.po';

describe('test0 App', function() {
  let page: Test0Page;

  beforeEach(() => {
    page = new Test0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
