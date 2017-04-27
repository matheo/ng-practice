import { NgPracticePage } from './app.po';

describe('ng-practice App', () => {
  let page: NgPracticePage;

  beforeEach(() => {
    page = new NgPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pr works!');
  });
});
