import React from "react";

export default function Login() {
    return(
        <div>
            <h1>Welcome to Melon Reservations!</h1>
            <h3>Login to get started</h3>
            <form>
                <input 
                        type="text" 
                        name="username" 
                        id="email" 
                        placeholder="username" 
                        className="form-control" required />
                
                <button className="btn btn-outline-secondary" type="submit">Submit</button>

                </form>
        </div>
    )
}