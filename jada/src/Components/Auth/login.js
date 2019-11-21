import React, {useState} from 'react';
import axios from 'axios'

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
        axios.post(`http://127.0.0.1:8000/api/login/`, user)
            .then(res => {
                localStorage.setItem('token', res.data.key)
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
            <form onSubmit={signup}>
                <input type='text' value={user.username} name='username' onChange={handleChanges} placeholder='username' />
                <input type='password' value={user.password1} name='password' onChange={handleChanges} placeholder='password'/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;