import { test } from 'playwright-test-coverage';
import { visitStudy, checkForScreenshot, screenShotPaths } from './utils';

test.beforeEach(async ({ page }) => {
  const studyInstanceUID = '1.3.12.2.1107.5.2.32.35162.30000015050317233592200000046';
  const mode = 'viewer';
  await visitStudy(page, studyInstanceUID, mode, 2000);
});

test('should launch MPR with unhydrated SEG', async ({ page }) => {
  await page.getByTestId('side-panel-header-right').click();
  await page.getByTestId('study-browser-thumbnail-no-image').dblclick();

  await checkForScreenshot(page, page, screenShotPaths.segNoHydrationThenMPR.segNoHydrationPreMPR);

  await page.getByTestId('Layout').click();
  await page.getByTestId('MPR').click();

  await checkForScreenshot(page, page, screenShotPaths.segNoHydrationThenMPR.segNoHydrationPostMPR);
});
