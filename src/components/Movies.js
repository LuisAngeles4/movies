import React, {Component} from 'react'

class Movies extends Component{
    constructor(props){
        super(props)
        this.state={
            movies:[
                {
                    nombre:"Los Increíbles 2",
                    genero:"Animación",
                    duración:"130 min",
                    año: "2018",
                    direccion: "Brad Bird",
                    imagen: "http://es.web.img3.acsta.net/c_215_290/pictures/18/04/13/11/46/5802807.jpg"



                },
                {
                    nombre:"Sherk",
                    genero:"Comedia",
                    duración:"120 min",
                    año: "2001",
                    direccion: "Andrew Adamson",
                    imagen: "https://is5-ssl.mzstatic.com/image/thumb/Video118/v4/0c/fa/92/0cfa92e1-6c91-d520-77c0-229ed50d0322/pr_source.lsr/268x0w.jpg"

                },
                {
                    nombre:"La Naranja Mecanica",
                    genero:"Drama",
                    duración:"136 min",
                    año: "1971",
                    direccion: "Stanley Kubrick",
                    imagen: "https://www.popularlibros.com/imagenes_grandes/9788445/978844500087.JPG"
                    
                },
                {
                    nombre:"Dunkerque",
                    genero:"Bélico",
                    duración:"106 min",
                    año: "2017",
                    direccion: "Christopher Nolan",
                    imagen: "http://es.web.img3.acsta.net/c_215_290/pictures/17/06/09/12/52/190097.jpg"


                },
                {
                    nombre:"Whiplash",
                    genero:"Drama",
                    duración:"106 min",
                    año: "2014",
                    direccion: "Demien Chazelle",
                    imagen: "https://i.blogs.es/d81b4a/650_1000_whiplash/450_1000.jpg"

                },


            ]
        }
    }
    render(){
        return(
            <div>
                <h1>Películas</h1>
                {this.state.movies.map((movies, index)=>(
                    <div>
                        <img src={movies.imagen}
                        alt={movies.nombre} width="100" height="100"/>
                        <h3>{movies.nombre}</h3>
                       
                        <p>----------------------------------</p>
                        <Movies p={movies}></Movies>
                    </div>
                ))}
            </div>
        )
    }
}

export default Movies