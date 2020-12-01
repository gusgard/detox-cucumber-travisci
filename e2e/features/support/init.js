const detox = require('detox');
const { Before, BeforeAll, AfterAll, After } = require('cucumber');
const shell = require('shelljs');

const detoxConfig = require('../../../package').detox;
const adapter = require('./adapter');

const MILLISECONDS = 1000;
const SECONDS = 60 * MILLISECONDS;
const DEFAULT_TIMEOUT = 30 * SECONDS;

BeforeAll({ timeout: DEFAULT_TIMEOUT }, async () => {
  // BeforeAll(async () => {
  console.log('\n BeforeAll - Started');
  // try {
  //   // https://github.com/wix/Detox/issues/1791
  //   shell.exec(`echo ["123"] > ~/Library/Detox/android-device.registry.state.lock`);
  //   // await startDevice(this);
  // } catch (error) {
  //   console.log('\n BeforeAll - catch', error);
  // }
  console.log('\n BeforeAll - Finished');
});

Before({ timeout: DEFAULT_TIMEOUT }, async (context) => {
  // Before(async (context) => {
  // console.log('\n Before - Started', context);
  console.log('\n Before - Started -', context.pickle.name);
  //   await detox.device.reloadReactNative();
  try {
    await detox.init(detoxConfig, { launchApp: true });
    await adapter.beforeEach(context);
  } catch (error) {
    console.log('\n Before - Catch', error);
    await detox.cleanup();
  }
  console.log('\n Before - Finished');
});

After({ timeout: DEFAULT_TIMEOUT }, async (context) => {
  // After(async (context) => {
  console.log('\n After - Started -', context.pickle.name);
  try {
    await adapter.afterEach(context);
    await detox.cleanup();
  } catch (error) {
    console.log('\n After - Catch', error);
    await detox.cleanup();
  }
  console.log('\n After - Finished');
});

AfterAll({ timeout: DEFAULT_TIMEOUT }, async () => {
  // AfterAll(async () => {
  console.log('\n AfterAll - Started');
  //   await detox.cleanup();
  // await detox.device.terminateApp();
  // await detox.device.uninstallApp();
  try {
    await detox.cleanup();
  } catch (error) {
    console.log('\n AfterAll - Catch', error);
  }
  console.log('\n AfterAll - Finished');
});
