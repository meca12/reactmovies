import axios from 'axios';

/*función llamando a la api*/
    const dataMovie = async (state) =>{
         const respuesta = await axios.get('http://localhost:8080/api/movies')
        
             state(respuesta.data.movies)
        
             console.log(respuesta.data.movies);
        
        /* se pasa un estado  por medio de la función para traer el userstate*/
        
       
        
        
    }

   
 
/*exportamos funcion*/  
 export {
      dataMovie
 }