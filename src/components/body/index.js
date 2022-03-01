import React,{useEffect,useState} from 'react';
import Boton from '../Boton';
import { dataMovie } from '../../functions/funciones';
import BotonMod from '../BotonMod';
import Spinner from '../spinner';


export default function Body(){
   const [Mvs, setMovie] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [searchText, setSearchText] = useState("");
  
    useEffect(()=>{
         setIsLoading(true);
        dataMovie(setMovie)
        setIsLoading(false);
     },[])

    if(isLoading){
      return <Spinner/>;
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
     
      
    }

return(
  <>  
      <form className="barraBusqueda" onSubmit={handleSubmit}>
          <div className="search-box">
          <input type="text" onChange={(e) => setSearchText(e.target.value)} value={setSearchText}  className="form-control  block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
        aria-describedby="emailHelp" placeholder="Buscar Pelicula o categoria"/>
        <button type="submit"></button>
        </div>
      </form>
      
      <div className="grid grid-cols-1 my-14 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Mvs.map((item) => (
            <div key={item.id}className="group">
              <h2 className="my-1 text-lg text-center font-medium text-gray-900">{item.category}</h2>
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={item.photoUrL}
                  alt={item.title}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-center text-gray-800">{item.title}</h3>
               <Boton item ={item}/>
            </div>
          ))}
        </div>
        
            <BotonMod/>
        
            
   

    </>
        
 );

 }

        







