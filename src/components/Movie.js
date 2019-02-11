import React from 'react'

const Product =(props)=>(
    <div>
        <h2>{props.p.nombre}</h2>
        <p>Genero: {props.genero}</p>
        <p>Duración: {props.duracion}</p>
        <p>Año: {props.año}</p>
        <p>Direccion: {props.direccion}</p>
        <img src={props.p.imagen} alt={props.p.nombre}></img>

    </div>
)