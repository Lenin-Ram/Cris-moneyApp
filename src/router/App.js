import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../containers/Home';
import Saldo from '../containers/Saldo';
import Informes from  '../containers/Informes';
import Mas from  '../containers/Mas';
import Presupuesto from '../containers/Presupuesto';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';


const App = () => (

<Layout>
        <Routes>     
           <Route exact path="/Home" element={<Home />} />
           <Route exact path="/Saldo" element={<Saldo />} />
           <Route exact path="/Presupuesto" element={<Presupuesto />} />
           <Route exact path="/Informes" element={<Informes />} />
           <Route exact path="/Mas" element={<Mas />} />
           
           <Route   element={<NotFound />}/>
        </Routes> 
</Layout>
)

export default App;