const puppeteer = require('puppeteer')

module.exports = {
  americanDolarConsult: async (req, res) => {
    const browser = await puppeteer.launch({args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]})
    const page = await browser.newPage()
    await page.goto('https://www.melhorcambio.com/dolar-hoje')
    const dataInfo = await page.evaluate(() => {
      const value = document.querySelector('#comercial').value
      const resultValue = {
        data: value,
      }

      return resultValue.data
    })

    return dataInfo
  },
  canadianDolarConsult: async (req, res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.melhorcambio.com/dolar-canadense-hoje')
    const dataInfo = await page.evaluate(() => {
      const value = document.querySelector('#comercial').value
      const resultValue = {
        data: value,
      }

      return resultValue.data
    })

    return dataInfo
  },
  australianDolarConsult: async (req, res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.melhorcambio.com/dolar-australiano-hoje')
    const dataInfo = await page.evaluate(() => {
      const value = document.querySelector('#comercial').value
      const resultValue = {
        data: value,
      }

      return resultValue.data
    })

    return dataInfo
  },
  euroConsult: async (req, res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.melhorcambio.com/euro-hoje')
    const dataInfo = await page.evaluate(() => {
      const value = document.querySelector('#comercial').value
      const resultValue = {
        data: value,
      }

      return resultValue.data
    })

    return dataInfo
  },
}
