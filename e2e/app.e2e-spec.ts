import { EstudoAngularMDPage } from './app.po';

describe('estudo-angular-md App', () => {
  let page: EstudoAngularMDPage;

  beforeEach(() => {
    page = new EstudoAngularMDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
