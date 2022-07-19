import React from 'react';
import ObjetivosList from '../components/ObjetivosList';
import '../assets/style/Home.scss';
import { Table, Button} from 'reactstrap';
import { FaBolt, FaCoffee, FaCreditCard, FaDollarSign, FaMoneyBill, FaTshirt } from "react-icons/fa";



const Home = () => {

  
    return ( 

  <>

  <div>
    <h1>30 <p>Sabado </p></h1>

    <ObjetivosList/>
  </div>


  <Table className='tables' borderless>
                     
                     <thead className='thead'>
                               <tr>
                                         <th>
                                        Planificadas
                                         </th>
                                         <th>
                                        
                                         </th>
                                        
                               </tr>
                     </thead>
 
 
                     <tbody>
 
                     <tr>
                     <th scope="row">
                     <FaBolt/> Electricidad
                     </th>
                     <th className='presupuest-table' scope="row">
                     <Button className='button'
                      color="warning"> 369,62 <FaDollarSign/>
                     </Button>
                     </th>
                     </tr>

                     
 
                     <tr>
                     <th scope="row">
                     <FaMoneyBill/> Salario
                     </th>
                     <th className='presupuest-table' scope="row">
                     <Button className='button'
                      color="primary"> 369,62 <FaDollarSign/>
                     </Button>
                     </th>
                     
                     </tr>
 
                    
 
                     </tbody>
                    </Table>
 
                    <Table className='tables' borderless>
                      
                      <thead className='thead'>
                                <tr>
                                          <th>
                                         Pagadas
                                          </th>
                                          <th>
                                         
                                          </th>
                                         
                                </tr>
                      </thead>
  
  
                      <tbody>
 
                     <tr>
                     <th scope="row">
                     <FaTshirt/> Ropa
                     </th>

                     <th className='presupuest-table' scope="row">
                     <Button className='button'
                      color="warning"> 369,62 <FaDollarSign/>
                     </Button>
                     </th>
                     </tr>          
  
                      <tr>
                      <th scope="row">
                      <FaCoffee/> Cafe
                      </th>
                      <th className='presupuest-table' scope="row">
                     <Button className='button'
                      color="warning"> 369,62 <FaDollarSign/>
                     </Button>
                     </th>
                      </tr>

                      <tr>
                      <th scope="row">
                      <FaCreditCard/> Banco Money pro 
                      </th>
                      <th className='presupuest-table' scope="row">
                     <Button className='button'
                      color="secondary"> 369,62 <FaDollarSign/>
                     </Button>
                     </th>
                      </tr>
   
                      </tbody>
                     </Table>


                     
                    


   </>
  
    );
}


export default Home;