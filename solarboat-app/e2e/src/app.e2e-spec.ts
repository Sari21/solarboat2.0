import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateToNews();
    const title = page.getTitleText();
    expect(title).toEqual('HÍREK');
    // const p = page.getParagraphText();
    // expect(p).toEqual('0');
    // page.clickBtn();
    // const p2 = page.getParagraphText();
    // expect(p2).toEqual('1');
  });

  it('should sign in as admin', () => {
    page.navigateToLogin();
    page.setUsernameField('sb-admin');
    browser.sleep(1000);
    page.setPasswordField('uszikAhajo!');
    browser.sleep(1000);
    page.clickLoginBtn();
    browser.sleep(1000);
    page.navigateToNews();
    const title = page.getTitleText();
    expect(title).toEqual('HÍREK');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
