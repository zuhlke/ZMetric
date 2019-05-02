import initStoryshots from '@storybook/addon-storyshots';
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer';

const devices = require('puppeteer/DeviceDescriptors');

const iPhone = devices['iPhone X'];

function customizePage(page) {
  return page.emulate(iPhone);
}

const getMatchOptions = () => ({
  failureThreshold: 0.05,
  failureThresholdType: 'percent',
  fullPage: false,
  waitUntil: 'networkidle0',
});

initStoryshots({
  suite: 'Image storyshots', test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    customizePage,
    getMatchOptions
  })
});
