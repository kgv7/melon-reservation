import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import regeneratorRuntime from "regenerator-runtime";

export default function Login() {

    const [username, getUsername] = useState({})
    const history = useHistory();
    const routeForm = () => {
      history.push("/make-appointment"); 
      history.go(0);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        getUsername(values => ({...values, [name]: value}))
      }


    const handleSubmit = async event => {
        event.preventDefault();
        try{
          const resp = await fetch('/api/login', {
              method: 'POST',
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(username),
              })
          if (resp.status !== 200) {
              alert("There has been an error");
              return false;
          }
        
          const data = await resp.json();
          sessionStorage.setItem("token", data.access_token);
          sessionStorage.setItem("username", data.username);
          sessionStorage.setItem("user_id", data.user_id)
          // alert("You are logged in")
          console.log(sessionStorage.getItem("token"))
  
          if (data) {
            routeForm()
          }
          
          return data;
        }
        catch(error){
          console.error("THERE WAS AN ERROR!!!", error)
        };
      };

    return(
        <div>
            <h1>Welcome to Melon Reservations!</h1>
            <h3>Login to get started</h3>
            <form action="/api/login" method="post" id="login" onSubmit={handleSubmit}>
                <input 
                        type="text" 
                        name="username" 
                        value={username.username}
                        onChange={handleChange}
                        id="email" 
                        placeholder="username" 
                        className="form-control" required />
                
                <button className="btn btn-outline-secondary" type="submit">Submit</button>

                </form>
        </div>
    )
}