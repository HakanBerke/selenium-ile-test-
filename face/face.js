const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginToFacebook() {
  const driver = new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.facebook.com');

    await driver.findElement(By.id('email')).sendKeys('temurhakanberke@gmail.com');
    await driver.findElement(By.id('pass')).sendKeys('Erzincan123456');
    await driver.findElement(By.name('login')).click();

    await driver.wait(until.titleIs('Facebook'), 20000);
  } finally {
    await driver.quit();
  }
}

loginToFacebook();
