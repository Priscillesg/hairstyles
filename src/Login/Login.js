import React, {useState, useEffect} from 'react'
import APIService from '../hooks/yelp-api/APIService';
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom';
import './Login.css';
import TopNav from '../LandingPage/TopNav/TopNav';
import BottomNav from '../LandingPage/BottomNav/BottomNav'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(["mytoken"])
    const [isLogin, setLogin] = useState(true)

    let history = useHistory()



    const loginBtn = () => {
        APIService.LoginUser({username, password})
        .then(resp => {console.log(resp)
            setToken('mytoken',resp.token)
            setLogin(true)
            history.push('/')
        })
        
        .catch(error => console.log(error))

    }

    const RegisterBtn = () => {
        APIService.RegisterUser({username, password})
        .then(() =>  loginBtn())
        .catch(error =>console.log(error))

    }

    return (
        <div>

            <TopNav/>
            <div className="background-color d-flex justify-content-center">
                <div className="container-login">
                    {isLogin ? <h1>Please Login </h1> : <h1>Please Register </h1>}
                <form>
                <div className="form-control">
                        <label htmlFor="Email" className="form-label">Username</label>
                        <input type="text" className="login-input" id="inputText" placeholder="Enter your username" value = {username} onChange = {e => setUsername(e.target.value)} required/>
                </div>
                <div className="form-control">
                    <label htmlFor="inputText" className="form-label">Password</label>
                    <input type="password" className="login-input" id="inputPassword" value = {password} onChange = {e => setPassword(e.target.value)} placeholder="Enter your password" required/>
                </div> 
                
            {isLogin ?  <button className="btn primary"  onClick = {loginBtn}>Login</button>
            :  <button className="btn primary" onClick = {RegisterBtn} >Register</button>
            }

           
            {isLogin ? <p className="text">If You Don't Have Account, Please <button className="btn secondary" onClick = {() => setLogin(false)}>Register</button>Here</p>
                
            :  <p>If You Have Account, Please <button className="btn secondary" onClick = {() => setLogin(true)} href="a">Login</button>Here</p>
                }
            </form>
        </div>
        </div>
        <BottomNav/>
        </div>

    )
}

export default Login