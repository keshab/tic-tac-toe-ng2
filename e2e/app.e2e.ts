import { TicTacToeNg2Page } from './app.po';

describe('tic-tac-toe-ng2 App', function() {
  let page: TicTacToeNg2Page;

  beforeEach(() => {
    page = new TicTacToeNg2Page();
  })

  it('should display the title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Angular 2 Tic-Tac-Toe!');
  });
});
