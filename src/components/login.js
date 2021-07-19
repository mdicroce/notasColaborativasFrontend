import React, {useState} from 'react'
import token from '../services/token'
import LoginService from '../services/login'

const Login = () => {
    const [onChangeLogin, setOnChangeLogin] = useState('')
    const [onChangePass, setOnChangePass] = useState('')
    const onClickHandler = (e) => {
        e.preventDefault()
        LoginService.login({username: onChangeLogin, password: onChangePass})
        .then(response => {
            token.setToken(response.token)
            window.localStorage.setItem('loggedUser', JSON.stringify(response))
            
            console.log(response)
        })
        
    }
    return(
        <div>
            <label>Username</label>
            <input type="text" className="login-input" value={onChangeLogin} onChange={(e)=>{setOnChangeLogin(e.target.value);console.log(e.target.value)}}/>
            <label>Password</label>
            <input type="password" className="login-input" value={onChangePass} onChange={(e)=>{setOnChangePass(e.target.value)}}/>
            <button type="submit" className="button-login" onClick={onClickHandler}> vamos menem </button>
        </div>
    )
}

export default Login