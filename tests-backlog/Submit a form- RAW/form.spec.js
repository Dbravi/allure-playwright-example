import { test, expect } from '@playwright/test'

test.describe('Validation form tests', () => {
  test.beforeEach(async ({ page }) => {
    // Setup code before running any tests
    await page.goto('https://demoqa.com/automation-practice-form')
  })

  test('Test001', async ({ page }, testInfo) => {
    await test.step('Fill Form', async () => {
      await page.fill('input[name="firstname"]', 'Damian')
      await page.fill('input[name="lastname"]', 'Bravi')
      await page.fill('input[name="userEmail"]', 'damianbravi@somemail.com')
      await page.check('input[value="Male"]')
      await page.fill('input[name="userNumber"]', '1111111111')
      await page.click('input#dateOfBirthInput')
      await page.click('div.react-datepicker__day--012')
      await page.fill('input#subjectsInput', 'Test Mail')
      await page.check('input#hobbies-checkbox-1')
      await page.check('input#hobbies-checkbox-2')
      await page.fill('textarea#currentAddress', 'Fake address 1234, Buenos Aires, Argentina.')
      await page.selectOption('select#state', 'Uttar Pradesh')
      await page.selectOption('select#city', 'Agra')
    })

    await test.step('Submit Form', async () => {
      await page.click('button#submit')
    })

    await test.step('Validate form', async () => {
      await expect(page.locator('h5#example-modal-sizes-title-lg')).toHaveText(
        'Thanks for submitting the form'
      )

      // Attach screenshot as evidence
      await testInfo.attach('Report Validation', {
        body: await page.screenshot(),
        contentType: 'image/png'
      })
    })
  })
})
