import React, { useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Register = (props) => {

    const [user, setUser] = useState({
        username: '',
        password1: '',
        password2: ''
    })

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value    
        })
    }

    const signup = e => {
        e.preventDefault()
        axios.post('https://lambda-mud-test.herokuapp.com/api/registration/', user)
            .then(res => {
                localStorage.setItem('token', res.key)
                props.history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
        setUser({
            username: '',
            password1: '',
            password2: ''
        })
    }


    return (
        <div>
            <Link to='/login'>Already Registered - Click Here to Login</Link>
            <h1> Welcome to JADA-Mud </h1>
            <h3> Register Now </h3>
            <form onSubmit={signup}>
                <input type='text' value={user.username} name='username' onChange={handleChanges} placeholder='username' />
                <input type='password' value={user.password1} name='password1' onChange={handleChanges} placeholder='password1'/>
                <input type='password' value={user.password2} name='password2' onChange={handleChanges} placeholder='password2'/>
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;