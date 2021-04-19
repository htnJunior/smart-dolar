import React from 'react'
import './Container.css'
import NumberEur from '../Number/NumberEur'

const ContainerEur = () => {
  return (
    <article className="app">
      <p className="text-inside">EUR$ 1 hoje está valendo</p>
      <div className="number-cifrao">
        <p className="cifrao">R$</p>
        <span className="number">
          <NumberEur />
        </span>
      </div>
    </article>
  )
}

export default ContainerEur
