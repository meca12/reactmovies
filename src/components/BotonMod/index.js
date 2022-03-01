import  React from 'react';


export default function Btnmodal(){
       return(
       
           <><div className="flex  flex-col mt-6  block
        w-full">
               <button type="button" className="inline-block px-6 py-2.5 bg-indigo-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-500 hover:shadow-lg focus:bg-indigo-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-200 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                   Ver mis votos
               </button>

           </div><div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                   <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                       <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                           <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                               <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                                   Mis votos
                               </h5>
                               <button type="button"
                                   className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                   data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                           <div className="modal-body relative p-4">
                               <ul>
                                   <li>title</li>
                                </ul>
                           </div>
                           <div
                               className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                               <button type="button"
                                   className="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                                   data-bs-dismiss="modal">
                                   Cerrar
                               </button>

                           </div>
                       </div>
                   </div>
               </div></>
  

    );
      
   
}