import React from 'react';
import {withRouter} from 'react-router'

const Navbar = (props) => {

    const logout = e => {
        localStorage.removeItem('token')
        props.history.push('/login')
    }

    return (
        <div>
            <button onClick={logout}>logout</button>
        </div>
    );
};

export default withRouter(Navbar);