import { ShinySporkPage } from './app.po';

describe('shiny-spork App', () => {
  let page: ShinySporkPage;

  beforeEach(() => {
    page = new ShinySporkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
