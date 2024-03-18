import { test } from '@playwright/test'
import { BasePage } from './page'
import data from './data.json'

test.describe('Test Suite 01', () => {
  test('testCase 01', async ({ page }) => {
    const basePage = new BasePage(page) // Create an instance of BasePage
    await basePage.navigate()
    await test.step('Fill Form', async () => {
      await basePage.fillForm(data.formData1)
    })

    await test.step('Validate Form and gather evidence', async () => {
      await basePage.validateForm()
      // await basePage.captureAndAttachScreenshot(testInfo, "Evidence")
    })
  })

  test('testCase 02', async ({ page }) => {
    const basePage = new BasePage(page) // Create an instance of BasePage
    await basePage.navigate()
    await test.step('Fill Form', async () => {
      await basePage.fillForm(data.formData2)
    })

    await test.step('Validate Form and gather evidence', async () => {
      await basePage.validateForm()
      // await basePage.captureAndAttachScreenshot(testInfo, "Evidence");
    })
  })
})
