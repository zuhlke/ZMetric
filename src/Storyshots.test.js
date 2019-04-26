import initStoryshots from '@storybook/addon-storyshots';
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer';

const getMatchOptions = () => ({
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
  fullPage: false,
  waitUntil: 'networkidle0',
});

initStoryshots({
  suite: 'Image storyshots', test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    getMatchOptions
  })
});