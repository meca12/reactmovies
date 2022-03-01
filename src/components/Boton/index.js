import React,{useEffect,useState} from 'react';

export default function Boton({item}){
 
 
 const [Boton, setBoton] = useState(true);
 
 const [Values, setValues] = useState([])

 const handleClick=()=>{
     setBoton(!Boton);
     const newmovie = {
       title: item,
       category: item
      }

      setValues([...Values, newmovie]);
      
 };
 

  return (
    <>
   <div  className ="text-center py-10">
  
    <button type="button"   onClick={handleClick} className="w-full inline-block px-6 py-2.5 bg-indigo-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-indigo-500 hover:shadow-lg focus:bg-indigo-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-100 
    active:shadow-lg transition duration-150 ease-in-out">
     {Boton ? "Votar" : "Seleccionada"}
    </button> 
     <p>{Values.title}</p>
     </div>
     
    </>
    
 

  );
}
