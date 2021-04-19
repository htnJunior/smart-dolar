import React from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import ContainerHome from './components/Container/ContainerHome'
import ContainerCad from './components/Container/ContainerCad'
import ContainerAud from './components/Container/ContainerAud'
import ContainerEur from './components/Container/ContainerEur'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <section className="container">
          <div className="title">
            <h2>Cotação de Moedas</h2>
            <div className="underline"></div>
          </div>
          <Switch>
            <Route path="/" exact component={ContainerHome} />
            <Route path="/cad" component={ContainerCad} />
            <Route path="/aud" component={ContainerAud} />
            <Route path="/eur" component={ContainerEur} />
          </Switch>
        </section>
      </main>
    </Router>
  )
}

export default App
