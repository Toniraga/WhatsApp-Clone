import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';

const Login = () => {
    const [ {}, dispatch ] = useStateValue();


    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message)) 
    }


    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    src='https://lh3.googleusercontent.com/proxy/hQljRVB3YsGyIhqrQKbhqqjOoy_pDfT5JxheueGJoqu89932mVvjXc60pEURe_3-DNA_Fm0Tr3u7pTReF3qSnfA6aKVqjq1ITcjZLNrM1sEAKx8Qkn4'
                    alt=''
                />
                <div className='login__text'>
                    <h1> Sign in to WhatsApp </h1>
                </div> 

                <Button type='submit' onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
