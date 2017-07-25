import { CVPPage } from './app.po';

describe('cvp App', () => {
  let page: CVPPage;

  beforeEach(() => {
    page = new CVPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
