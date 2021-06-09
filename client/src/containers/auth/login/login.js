import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Login = () =>{

    const auth = useSelector( state => state.auth );

    if(auth.authenticate)
    {
        return <Redirect to={'/home'}/>
    }
    return (
        <div>
            login
        </div>
    )
}

export default Login;