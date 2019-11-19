import React, {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Login = (props) => {

    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value    
        })
    }

    const signup = e => {
        e.preventDefault()
        axios.post('https://lambda-mud-test.herokuapp.com/api/login/', user)
            .then(res => {
                localStorage.setItem('token', res.key)
                props.history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
        setUser({
            username: '',
            password: '',
        })
    }


    return (
        <div>
            <Link to='/'>Don't have an Account - Click Here to Register</Link>
            <h1>Welcome to JADA-MUD</h1>
            <h3>Login</h3>
            <form onSubmit={signup}>
                <input type='text' value={user.username} name='username' onChange={handleChanges} placeholder='username' />
                <input type='password' value={user.password1} name='password' onChange={handleChanges} placeholder='password'/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;