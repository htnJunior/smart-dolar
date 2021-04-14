const DataService = require('./DataScraper')

module.exports = {
  ping: (req, res) => {
    res.json({ pong: true })
  },

  americanDolar: async (req, res) => {
    let json = {
      result: {
        quotation: {},
        error: {},
      },
    }
    let value = await DataService.americanDolarConsult()
    if (value) {
      json.result.quotation = value
    } else {
      json.result.error = 'Nenhum valor encontrado.'
    }

    res.json(json)
  },
  canadianDolar: async (req, res) => {
    let json = {
      result: {
        quotation: {},
        error: {},
      },
    }
    let value = await DataService.canadianDolarConsult()
    if (value) {
      json.result.quotation = value
    } else {
      json.result.error = 'Nenhum valor encontrado.'
    }

    res.json(json)
  },
  australianDolar: async (req, res) => {
    let json = {
      result: {
        quotation: {},
        error: {},
      },
    }
    let value = await DataService.australianDolarConsult()
    if (value) {
      json.result.quotation = value
    } else {
      json.result.error = 'Nenhum valor encontrado.'
    }

    res.json(json)
  },
  euro: async (req, res) => {
    let json = {
      result: {
        quotation: {},
        error: {},
      },
    }
    let value = await DataService.euroConsult()
    if (value) {
      json.result.quotation = value
    } else {
      json.result.error = 'Nenhum valor encontrado.'
    }

    res.json(json)
  },
  //news: async (req, res) => {},
}
