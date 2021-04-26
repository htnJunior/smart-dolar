const puppeteer = require('puppeteer')

const consultQuotation = async (url) => {
  const browser = await puppeteer.launch({args: [
    '--no-sandbox',
    '--disable-setuid-sandbox'
  ]})
  const page = await browser.newPage()
  await page.goto(url)
  const dataInfo = await page.evaluate(() => {
    const value = document.querySelector('#comercial').value
    const resultValue = {
      data: value
    }

    return resultValue.data
  })

  return dataInfo
}

module.exports = {
  americanDolarConsult: async (req, res) => {
    const result = await consultQuotation('https://www.melhorcambio.com/dolar-hoje')
    return result
  },
  canadianDolarConsult: async (req, res) => {
      const result = await consultQuotation('https://www.melhorcambio.com/dolar-canadense-hoje')
      return result
  },
  australianDolarConsult: async (req, res) => {
      const result = await consultQuotation('https://www.melhorcambio.com/dolar-australiano-hoje')
      return result
  },
  euroConsult: async (req, res) => {
      const result = await consultQuotation('https://www.melhorcambio.com/euro-hoje')
      return result
  },
}
