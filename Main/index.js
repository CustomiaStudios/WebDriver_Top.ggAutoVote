const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://discord.com/login');
        
        await driver.findElement(By.name('email')).sendKeys(''); //YOUR_EMAIL
        await driver.findElement(By.name('password')).sendKeys('', Key.ENTER); //YOUR_PASSWORD

        await sleep(10000);
        console.log('Done!')

        await driver.findElements(By.id('')).sendKeys(Key.ENTER); //USER_ID
    }
    finally{
    }
})();
