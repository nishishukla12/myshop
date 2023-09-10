import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Index() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}


export default Index;
