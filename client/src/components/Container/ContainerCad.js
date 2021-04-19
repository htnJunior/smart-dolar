import React from 'react'
import './Container.css'
import NumberCad from '../Number/NumberCad'

const ContainerCad = () => {
  return (
    <article className="app">
      <p className="text-inside">CAD$ 1 hoje está valendo</p>
      <div className="number-cifrao">
        <p className="cifrao">R$</p>
        <span className="number">
          <NumberCad />
        </span>
      </div>
    </article>
  )
}

export default ContainerCad
