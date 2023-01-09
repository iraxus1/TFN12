import React from 'react';
import {Outlet} from "react-router-dom";

function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
            <Outlet/>
        </div>
    );
}

export default Contact;