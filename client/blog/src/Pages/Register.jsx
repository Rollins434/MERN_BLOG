import React, { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
      
            const data =  await fetch("http://localhost:5000/register",{
                method: 'POST',
                body: JSON.stringify({username,password}),
                headers:{'Content-Type':'application/json'}
                
            })
            if(data.status ===200) {
            
                alert("registration successfull")
            }else{
                alert("registration failed")
            }
        
    }
  return (
    <form className="register" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input type="text"
             placeholder="username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button type='submit'>Register</button>
    </form>
  )
}

export default Register