const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://discord.com/login');
        
        await driver.findElement(By.name('email')).sendKeys('adhamtarek2007@gmail.com');
        await driver.findElement(By.name('password')).sendKeys('adham2007oda', Key.ENTER);

        await sleep(10000);
        console.log('Done!')

        await driver.findElements(By.id('people___353978751484297219')).sendKeys(Key.ENTER);
    }
    finally{
    }
})();