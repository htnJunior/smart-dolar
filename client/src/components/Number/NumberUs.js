import React, { useState } from 'react'
import CoutUp from 'react-countup'
import axios from 'axios'

const NumberUs = () => {
  const [results, setResults] = useState(0)

  const api = axios.create({
    baseURL: 'http://localhost:3003/api/dolar-americano',
  })

  const getResult = () => {
    api.get('/').then((response) => {
      setResults(parseFloat(response.data.quotation))
    })
  }

  {
    getResult()
  }

  return (
    <div>
      <CoutUp end={results} duration={3} decimals={2} />
    </div>
  )
}
export default NumberUs
