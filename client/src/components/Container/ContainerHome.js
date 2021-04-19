import React from 'react'
import './Container.css'
import NumberUs from '../Number/NumberUs'

const ContainerHome = () => {
  return (
    <article className="app">
      <p className="text-inside">US$ 1 hoje está valendo</p>
      <div className="number-cifrao">
        <p className="cifrao">R$</p>
        <span className="number">
          <NumberUs />
        </span>
      </div>
    </article>
  )
}

export default ContainerHome
