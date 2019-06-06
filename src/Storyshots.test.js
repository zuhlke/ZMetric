
import initStoryshots from '@storybook/addon-storyshots';
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
  suite: 'Image storyshots', test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    getMatchOptions: () => ({
      failureThreshold: 0.01,
      failureThresholdType: 'percent'
    })
  })
});
