import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar.jsx";


const Body = () => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <Outlet />
            </div>

        </div>
    );
};

export default Body;