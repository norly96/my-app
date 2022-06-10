import PropTypes from 'prop-types'
import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = props => {
  return (
    <div>
        <h1>Nombre: {props.contacto.nombre}</h1>
        <h1>Apellido: {props.contacto.apellido}</h1>
        <h1>Email: {props.contacto.email}</h1>
        <ComponentB conectado={true}/>
    </div>
  )
}

ComponentA.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
}

export default ComponentA


