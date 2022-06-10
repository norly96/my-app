import React, {useState} from 'react'

const ComponentB = props => {
    const [connect, setconnect] = useState(props.conectado);

    const isConnect = () => {
        setconnect(!connect);
    }
  return (
    <div>
        <h1>{ connect == false ? 'Contacto no disponible' : 'Contacto en linea' }</h1>
      
        <button onClick={isConnect} >Cambiar estado</button>
    </div>
  )
}

export default ComponentB