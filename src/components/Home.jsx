import React from 'react';
import {Redirect} from "react-router-dom";

const Home =() => {
        return (
            <Redirect to={"/page-1"}/>
        );
};

export default Home;