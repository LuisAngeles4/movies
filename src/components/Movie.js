import React from 'react'

const Movie =(props)=>(
    <div>
        <h2>{props.p.nombre}</h2>
        <img className="img" src={props.p.imagen}/>
        <p>Genero: {props.p.genero}</p>
        <p>Duración: {props.p.duración}</p>
        <p>Año: {props.p.año}</p>
        <p>Dirección: {props.p.direccion}</p>
        <p>------------------------------</p>

    </div>
)

export default Movie 