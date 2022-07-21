import React from 'react';
import '../assets/style/Home.scss';
import '../assets/style/menu-orden.scss';
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
  
  <div class="my-order">
    <div class="my-order-container">
      <h1 class="title">My orders</h1>

      <div class="my-order-content">
        <div class="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
        </div>

        <div class="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
       
        </div>

        <div class="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
         
        </div>

        <div class="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
          </div>
      </div>
    </div>
  </div>
   </>
  
    );
}


export default Presupuesto;