import React, {Component} from 'react'
import Movie from './Movie'

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


            ],


            newProduct: {
                nombre:null,
                genero:null,
                duración:null,
                año:null,
                direccion:null,
                imagen:null


            }
        }
    }

    changeName = (e) =>{
        let new_product = this.state.newProduct
        new_product.nombre = e.target.value
        this.setState({newProduct: new_product})
    }

    changeImagen = (e) =>{
        let new_product = this.state.newProduct
        new_product.imagen = e.target.value
        this.setState({newProduct: new_product})
    }

    changeGenero = (e) =>{
        let new_product = this.state.newProduct
        new_product.genero = e.target.value
        this.setState({newProduct: new_product})
    }

    changeDuracion = (e) =>{
        let new_product = this.state.newProduct
        new_product.duración = e.target.value
        this.setState({newProduct: new_product})
    }

    changeAño = (e) =>{
        let new_product = this.state.newProduct
        new_product.año = e.target.value
        this.setState({newProduct: new_product})
    }

    changeDireccion = (e) =>{
        let new_product = this.state.newProduct
        new_product.direccion = e.target.value
        this.setState({newProduct: new_product})
    }

    addProduct = (e)=>{
        e.preventDefault();
        let {movies}=this.state
        movies.push(this.state.newProduct)
        this.setState({movies})
    }



    render(){
        return(
            <div className="divmovies">
                <h1 className="text">Películas</h1>
                {this.state.movies.map((movie, index)=>(
                    <div className="infopelis">
                        <img className="img"src={movie.imagen}
                        
                        alt={movie.nombre} width="200" height="200"/>
                        <h3>{movie.nombre}</h3>
                        

                       <p>-----------------------------------------------</p>
                        

                       
              
                       <br></br>
                        <Movie p={movie}></Movie>
                    </div>
                ))}
            <div className="form-container">
            <h2>Agrega un nuevo producto</h2>
            <label for="nombre">Nombre: </label>
            <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            onChange={(e)=>this.changeName(e)}
            
            
            />
            <label for="genero">Genero: </label>
            <input
            type="text"
            name="genero"
            id="genero"
            placeholder="Genero"
            onChange={(e)=>this.changeGenero(e)}
            
            
            />
            <label for="duracion">Duración: </label>
            <input
            type="text"
            name="duracion"
            id="duracion"
            placeholder="Duración"
            onChange={(e)=>this.changeDuracion(e)}
            
            
            />
            <label for="año">Año: </label>
            <input
            type="text"
            name="año"
            id="año"
            placeholder="año"
            onChange={(e)=>this.changeAño(e)}
            
            
            />

            <label for="año">Dirección: </label>
            <input
            type="text"
            name="direccion"
            id="direccion"
            placeholder="Dirección"
            onChange={(e)=>this.changeDireccion(e)}
            
            
            />
             <label for="imagen">Imagen: </label>
            <input
            type="text"
            name="imagen"
            id="imagen"
            placeholder="Imagen"
            onChange={(e)=>this.changeImagen(e)}
            
            
            />

            <button onClick={(e)=>this.addProduct(e)}>Agregame</button>


        
            
            
            
            
            </div>
            
            
            </div>
        )
    }
}

export default Movies