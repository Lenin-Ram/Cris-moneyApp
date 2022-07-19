import React from 'react';
import '../assets/style/Home.scss';
import { Table } from 'reactstrap';
import { FaDollarSign } from "react-icons/fa";


const Presupuesto = () => {

  
    return ( 

  <>

  <div>
     <Table className='tables' hover>
                     
                     <thead className='thead'>
                               <tr>
                                         <th>
                                         Gastos
                                         </th>
                                        
                                         <th className='presupuest-table'>
                                         0,00/34 800.00 <FaDollarSign/>
                                         </th>
                                        
                               </tr>
                     </thead>
                    </Table>

  </div>




   </>
  
    );
}


export default Presupuesto;