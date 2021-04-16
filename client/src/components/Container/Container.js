import React from 'react'
import './Container.css'
import Number from '../Number/Number'

const Container = () => {
  return (
    <article className="app">
      <p className="text-inside">US$ 1 hoje está valendo</p>
      <div className="number-cifrao">
        <p className="cifrao">R$</p>
        <span className="number">
          <Number />
        </span>
      </div>
    </article>
  )
}

export default Container
