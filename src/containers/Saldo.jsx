import React from 'react';
import '../assets/style/Home.scss';
import { Table, } from 'reactstrap';
import {  FaCcMastercard, FaCreditCard, FaDollarSign, FaHome, FaMoneyBill, FaMotorcycle, FaWallet   } from "react-icons/fa";

const Saldo = () => {

  
          
 return( 



          <div className='flex-table'>   
                              

          
           <Table className='tables' borderless>
                     
                    <thead className='thead'>
                              <tr>
                                        <th>
                                        Cuentas Corrientes
                                        </th>
                                       
                              </tr>
                    </thead>


                    <tbody>

                    <tr>
                    <th scope="row">
                    <FaCcMastercard />Banco Nacional
                    </th>
                   
                    </tr>

                    <tr>
                    <th scope="row">
                    <FaCreditCard />   Banco Money pro
                    </th>
                    
                    </tr>

                    <tr>
                    <th scope="row">
                    <FaDollarSign/> Cartera USD
                    </th>
                    
                    </tr>

                    <tr>
                    <th scope="row">
                    <FaWallet/> Cartera
                    </th>
                    
                    </tr>

                    </tbody>
                   </Table>

                   <Table className='tables' borderless>
                     
                     <thead className='thead'>
                               <tr>
                                         <th>
                                         Tarjetas de credito
                                         </th>
                                        
                               </tr>
                     </thead>
 
 
                     <tbody>

                    <tr>
                    <th scope="row">
                    <FaCreditCard /> Banco Money pro
                    </th>
                    
                    </tr>          
 
                     <tr>
                     <th scope="row">
                     <FaCreditCard /> Banco Nacional
                     </th>
                    
                     </tr>
  
                     </tbody>
                    </Table>

                    <Table className='tables' borderless>
                     
                     <thead className='thead'>
                               <tr>
                                         <th>
                                         Otros Activos
                                         </th>
                                        
                               </tr>
                     </thead>
 
 
                     <tbody>

                    <tr>
                    <th scope="row">
                    <FaMoneyBill /> Ahorros USD
                    </th>
                    
                    </tr>          
 
                     <tr>
                     <th scope="row">
                     <FaHome /> Casa
                     </th>
                    
                     </tr>

                     <tr>
                     <th scope="row">
                     <FaMotorcycle /> Moto
                     </th>
                    
                     </tr>
  
                     </tbody>
                    </Table>

                   <>

                   <h1>hello</h1>
                   </>
                   
                    
  </div>


  
    );
}


export default Saldo;