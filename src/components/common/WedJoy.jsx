import React from 'react';
import "../common/WedJoy.css"; 
import { Footer } from "../common/Footer";
// import backgroundImage from "../../assets/pexels-carolina-basi-911290106-30892419.jpg";
// import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Header } from './Header';
import { Features } from './Features';
import { VenderMenu } from './VenderMenu';
import Banner from './Banner';

export const WedJoy = () => {
    return (
        <div className='bg-orange-50'>
        <Header />
        {/* <VenderMenu /> */}
        <Features />
        </div>
    )
};
