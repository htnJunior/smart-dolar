const DataService = require('./DataScraper')

module.exports = {
  ping: (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.json({ pong: true })
  },

  americanDolar: async (req, res) => {
    let json = {
      quotation: {},
      error: {},
    }

    let value = await DataService.americanDolarConsult()
    if (typeof value == 'string') {
      if (value.includes(',')) {
        const newValue = value.replace(',', '.')
        json.quotation = newValue
      }
    } else {
      json.error = 'Nenhum valor encontrado.'
    }

    res.header('Access-Control-Allow-Origin', '*')
    res.json(json)
  },
  canadianDolar: async (req, res) => {
    let json = {
      quotation: {},
      error: {},
    }
    let value = await DataService.canadianDolarConsult()
    if (typeof value == 'string') {
      if (value.includes(',')) {
        const newValue = value.replace(',', '.')
        json.quotation = newValue
      }
    } else {
      json.error = 'Nenhum valor encontrado.'
    }

    res.header('Access-Control-Allow-Origin', '*')
    res.json(json)
  },
  australianDolar: async (req, res) => {
    let json = {
      quotation: {},
      error: {},
    }
    let value = await DataService.australianDolarConsult()
    if (typeof value == 'string') {
      if (value.includes(',')) {
        const newValue = value.replace(',', '.')
        json.quotation = newValue
      }
    } else {
      json.error = 'Nenhum valor encontrado.'
    }

    res.header('Access-Control-Allow-Origin', '*')
    res.json(json)
  },
  euro: async (req, res) => {
    let json = {
      quotation: {},
      error: {},
    }
    let value = await DataService.euroConsult()
    if (typeof value == 'string') {
      if (value.includes(',')) {
        const newValue = value.replace(',', '.')
        json.quotation = newValue
      }
    } else {
      json.error = 'Nenhum valor encontrado.'
    }

    res.header('Access-Control-Allow-Origin', '*')
    res.json(json)
  },
  //news: async (req, res) => {},
}
