const {Given, When, Then} = require('cucumber');

Then(/^text '([^']+)' is visible$/, async (value) => {
  await expect(element(by.text(value)).atIndex(0)).toBeVisible();
});

Then(/^text '([^']+)' is not visible$/, async (value) => {
  await expect(element(by.text(value)).atIndex(0)).toBeNotVisible();
});
