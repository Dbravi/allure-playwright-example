import { expect } from '@playwright/test'

export class BasePage {
  // SELECTORS
  constructor (page) {
    this.page = page
    this.baseUrl = 'https://demoqa.com/automation-practice-form'
    this.firstName = page.getByPlaceholder('First Name')
    this.lastName = page.getByPlaceholder('Last Name')
    this.email = page.getByPlaceholder('name@example.com')
    this.gender = page.getByText('Male', { exact: true })
    this.phoneNumber = page.getByPlaceholder('Mobile Number')
    this.dateOfBirth = page.locator('#dateOfBirthInput')
    this.subjects = page.locator('#subjectsInput')
    this.date = page.getByLabel('Choose Monday, February 12th,')
    this.hobbieSports = page.getByText('Sports')
    this.address = page.getByPlaceholder('Current Address')
    this.selectState = page
      .locator('div')
      .filter({ hasText: /^Select State$/ })
      .nth(3)
    this.state = page.getByText('Uttar Pradesh', { exact: true })
    this.selectCity = page.getByText('Select City')
    this.city = page.getByText('Agra', { exact: true })
    this.submitButton = page.getByRole('button', { name: 'Submit' })
    this.modal = page.locator('#example-modal-sizes-title-lg')
  }

  // ACTIONS
  async navigate () {
    await this.page.goto(this.baseUrl)
  }

  async fillForm (input) {
    await this.firstName.fill(input.firstName)
    await this.lastName.fill(input.lastName)
    await this.email.fill(input.email)
    await this.gender.click()
    // await this.page.pause();
    await this.phoneNumber.fill(input.mobileNumber)
    await this.dateOfBirth.click()
    await this.subjects.fill(input.subjects)
    await this.hobbieSports.click()
    await this.address.fill(input.address)
    await this.selectState.click()
    await this.state.click()
    await this.selectCity.click()
    await this.city.click()
    await this.submitButton.click()
  }

  VALIDATIONS
  async validateForm () {
    await expect(this.modal).toContainText('Thanks for submitting the form')
  }

  async captureAndAttachScreenshot (testInfo, screenshotName) {
    const screenshot = await this.page.screenshot()
    await testInfo.attach(screenshotName, {
      body: screenshot,
      contentType: 'image/png'
    })
  }
}
