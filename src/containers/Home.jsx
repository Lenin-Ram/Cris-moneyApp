import React from 'react';
import ObjetivosList from '../components/ObjetivosList';
import '../assets/style/Home.scss';
import { Table, Button} from 'reactstrap';
import { FaDollarSign } from "react-icons/fa";



const Home = () => {

  
    return ( 

  <>

  <div>
    <h1>30 <p>Sabado </p></h1>

    <ObjetivosList/>
  </div>


     <Table className='tables' hover>
                     
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
 
                     
                     <th scope="row">
                      Salario
                    </th>
                    <td>
                    <Button className='button'
                      color="warning"
                    >
                     271 <FaDollarSign/>
                    </Button>
                    </td>
              
              
                     </tbody>
                    </Table>



   </>
  
    );
}


export default Home;