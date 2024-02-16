import React from "react";
import "./LoginForm.css";
import useAuth from "../..//hooks/useAuth"
const LoginForm = () =>{
const {isLoggedIn,handleLogin,handleLogout,userData}=useAuth()
const handleSubmit = (e) =>{

e.preventDefault ();
const form = e.target;
const nombre = form.nombre.value
const email = form.email.value

if (nombre && email){

    handleLogin({name:nombre, email})
    form.reset()



}else {
    alert ("Por favor ,completa todos los campos")
}


}

return (

    <div className="form-container">
    <form onSubmit={handleSubmit}>
    <label >
        Nombre:
        <input type="text" name="nombre"></input>

    </label>
    <label>
        <input type="email" name="emai"/>

    </label>
        {!isLoggedIn && <button type="submit">Login</button>}

    
    </form>
        {isLoggedIn &&(
         <div className="user-info">
            <button onClick={handleLogout} type="button">  
            Logout
            </button>
            <p>Quiers cerrar sesion {userData.name}</p>
            </div>
        )}
        </div>


   


)



}

export default LoginForm