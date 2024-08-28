import React, {useState} from 'react'

const HookContador = () => {
  
    const [contador, setContador] = useState(1);

    function incrementaContador() {
        setContador(contador + 1);
    }
    return (
    <div>
        <h1>{contador}</h1>
        <button onClick={incrementaContador} >Mais 1</button>
    </div>
  )
}

export default HookContador