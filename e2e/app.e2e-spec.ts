import { AeAssignmentDropdownPage } from './app.po';

describe('ae-assignment-dropdown App', () => {
  let page: AeAssignmentDropdownPage;

  beforeEach(() => {
    page = new AeAssignmentDropdownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
