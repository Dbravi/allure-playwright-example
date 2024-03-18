// @ts-check
import { test } from '@playwright/test'
import 'dotenv/config'

test('Console log ENV', ({ page }) => {
  console.log(process.env.URL)
  // expect(process.env.URL).toBeDefined()
})
