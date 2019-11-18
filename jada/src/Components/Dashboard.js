import React from 'react';

const Dashboard = (props) => {

    const logout = e => {
        localStorage.removeItem('token')
        props.history.push('/login')
    }


    return (
        <div>
            <h1> Hello from Dashboard</h1>
            <button onClick={logout}>logout</button>
        </div>
    );
};

export default Dashboard;