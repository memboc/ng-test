import { SocialNgPage } from './app.po';

describe('social-ng App', function() {
  let page: SocialNgPage;

  beforeEach(() => {
    page = new SocialNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
