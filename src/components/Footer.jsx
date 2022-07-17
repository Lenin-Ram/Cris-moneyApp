import React from 'react';
import '../assets/style/Footer.scss';
import { FaCalendarDay, FaBalanceScale, FaClipboard, FaChartBar, FaBook,    } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    
    
    <a href="/Home">  <FaCalendarDay /> Hoy </a>
    <a href="/Saldo"> <FaBalanceScale /> Saldo</a>
    <a href="/Presupuesto"><FaClipboard />Presupuesto</a>
    <a href="/Informes"><FaChartBar />Informes</a>
    <a href="/Mas"><FaBook />Mas</a>

  </footer>
);

export default Footer;