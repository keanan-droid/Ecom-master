import React from 'react'
import { Nav } from "../Components/Nav";
import { CustomerService } from '../Components/CustomerService';
import { Footer } from "../Components/Footer";

export const CustomerServicePage = () => {
  return (
    <div>
        <Nav />
        <CustomerService />
        <Footer />
    </div>
  )
}
