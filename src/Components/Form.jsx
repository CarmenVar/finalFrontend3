import React from "react";
import {useState} from "react";


const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
  })
const form = document.querySelector("#form")

const handlesubmit = (e) =>{
  e.preventDefault()
  setUser({...user, register: true})
  (form.reset)}

  return (
    <div>
      <form id="form" onSubmit={handlesubmit}>
          <label> Nombre completo</label>
          <input type="text" placeholder="Escriba su nombre y apellido" required onChange={(e) => setUser({...user, nombre: e.target.value})}/>
          <label> Email</label>
          <input type="email" placeholder="Escriba su e-mail aquí" /> 
          <button type="submit">Enviar</button>
      </form>

      
    {user.register &&
    <div className="form">
    <h5>Gracias, {user.nombre} te contactaremos cuanto antes via email</h5>
    </div>
    }
    </div>

);
  

};
export default Form;
