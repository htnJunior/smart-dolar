import React from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Container from './components/Container/Container'
import axios from 'axios'
import cors from 'cors'

const api = axios.create({
  baseURL: `http://localhost:3003/api/dolar-americano`,
})

const App = () => {
  api.get('/').then((res) => {
    console.log(res.data)
  })

  return (
    <>
      <Navbar />
      <main>
        <section className="container">
          <div className="title">
            <h2>Cotação Dolar Comercial</h2>
            <div className="underline"></div>
          </div>
          <Container />
        </section>
      </main>
    </>
  )
}

export default App
