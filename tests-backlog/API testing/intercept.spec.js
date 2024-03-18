const { test } = require('@playwright/test')

test('Log network requests', async ({ page }) => {
  page.on('request', (request) =>
    console.log('>>', request.method(), request.url())
  )
  page.on('response', (response) =>
    console.log('<<', response.status(), response.url())
  )

  await page.goto('https://danube-web.shop/')

  await page.screenshot({ path: 'screenshot.png' })
})
