import { RecipeShopPage } from './app.po';

describe('recipe-shop App', () => {
  let page: RecipeShopPage;

  beforeEach(() => {
    page = new RecipeShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
