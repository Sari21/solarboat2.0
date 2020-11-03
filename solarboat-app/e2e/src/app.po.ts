import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToNews(): Promise<unknown> {
    return browser.get('http://localhost:4200/#/news') as Promise<unknown>;
  }
  navigateToLogin(): Promise<unknown> {
    return browser.get('http://localhost:4200/#/admin') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  // getParagraphText(): Promise<string> {
  //   return element(by.id('test-text')).getText() as Promise<string>;
  // }
  //
  // clickBtn() {
  //   element(by.id('test-id-btn')).click();
  // }

  setUsernameField(text: string) {
    element(by.id('username')).sendKeys(text);
  }

  setPasswordField(text: string) {
    element(by.id('password')).sendKeys(text);
  }

  clickLoginBtn() {
    element(by.id('login-btn')).click();
  }
}
