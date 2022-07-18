import React from 'react';
import '../assets/style/Home.scss';

function ObjevitosList(){
          return (
                    <div className='container mt-5'>
                    <h1>Objetivos</h1>
                    <ht/>
                    <div className='row'>
                       <div className='col-4'>
                              
                    <span className='span'>Nombre de la tarea</span>
                                        
                       </div>
                       <div className='col-4 '>                     
                       <form className='form'>
                                 <input type="text" 
                                 className="form-control mb-2"
                                 placeholder="Ingresa la tarea..."
                                 />
                                 <button id='agregar' className='btn btn-warning '
                                 type="submit">
                                  Agregar
                                 </button>
                       </form>
                    </div>
                    </div>
                    </div>
          )
}

export default ObjevitosList;