import React from 'react'
import './Container.css'
import NumberAud from '../Number/NumberAud'

const ContainerAud = () => {
  return (
    <article className="app">
      <p className="text-inside">AUD$ 1 hoje está valendo</p>
      <div className="number-cifrao">
        <p className="cifrao">R$</p>
        <span className="number">
          <NumberAud />
        </span>
      </div>
    </article>
  )
}

export default ContainerAud
