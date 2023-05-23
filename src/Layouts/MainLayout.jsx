import React from 'react';
import NavBar from '../Components/ShareAbleComponents/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/ShareAbleComponents/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;