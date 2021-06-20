import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import './App.css';


function App() {
  const adminUser = {
    email: "test@test.com",
    password: "123"
  }
  const [user, setUser]= useState({name:"", email: ""});
  const [error, setError]= useState("");
  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password ){
      //console.log("Logged in")
      setUser ({
        name: details.name,
        email: details.email
      })
      }
      else{
        console.log("WRONG!!!!")
        setError ("WRONG!!!!")
        alert ('type in email: test@test.com and password: 123')
      } 
        
  }
  
      
  const logout = () => {
    //console.log("Logged out")
    setError ("")
    setUser({name:"", email:""}); //set to default
  }
  return (
    <div className="App">
        {(user.email !="") ? (
          <div className="welcome">
            <h2>Whats upppppp, <span>{user.name}</span>!!!!</h2>
          <button onClick={logout}>Logout</button> 
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      
    </div>
  );
}

export default App;
