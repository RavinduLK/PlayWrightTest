import {test} from "playwright/test";

test('Basic Navigation', async ({page}) => {
    const navigationTimeout = 60000; //60 seconds

    await page.goto('https://gitlab.com/', {timeout: navigationTimeout, waitUntil:'load'});
    await page.waitForTimeout(3000);
    await page.reload();
})

test.only ('Interacting with Web Elements on GitLab', async ({page}) => {
    const navigationTimeout = 90000; //90 seconds

    await page.goto('https://gitlab.com/', {timeout: navigationTimeout, waitUntil:'load'});
    await page.click('#slp-btn intro-block__button slp-mr-24 slp-btn-primary');
})