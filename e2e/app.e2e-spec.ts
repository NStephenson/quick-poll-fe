import { QuickPollFePage } from './app.po';

describe('quick-poll-fe App', () => {
  let page: QuickPollFePage;

  beforeEach(() => {
    page = new QuickPollFePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
