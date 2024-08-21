import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracap'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={1} num2={2} />
      <Subtracao num1={1} num2={2} />

      <PrecisoEstudar nomeDaTecnologia={'React'}/>
    </div>
  )
}

export default App