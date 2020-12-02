import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
    const [username, setUsername] = React.useState("")
    const[password, setPassword]= React.useState('')

    function handleSubmit(event){
        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/jason/jwt-auth/v1/token',{
            method:'POST',
            headers:{
                'Content-Type':'Aplication/json',
            },
            body: JSON.stringify({username,password})
        })
        .then((response)=> {
            console.log(response)
            return response.json()
        })
        .then(json => {
            console.logO(json)
        })
    }


    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={({target})=>setUsername(target.value)}/>
                <input type="password" value={password} onChange={({target})=> setPassword(target.value)} />
                <button>Entrar</button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm
