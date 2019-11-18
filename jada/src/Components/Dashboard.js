import React from 'react';

//components
import Map from './Map'
import Commands from './Commands'
import Description from './Description'

const Dashboard = (props) => {


    return (
        <div className='container'>
            <Commands />
            <div className='sidebar'>
                <Map />
                <Description />
            </div>
        </div>
    );
};

export default Dashboard;