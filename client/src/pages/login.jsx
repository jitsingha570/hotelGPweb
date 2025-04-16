import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div style={style.container}>
       
        <div style={style.card}>
            
            <div style={style.form}>
                <h2>LOG IN</h2>
            <input type="text" placeholder="Username" style={style.input}></input>
            <input type="password" placeholder="Password" style={style.input}></input>
            <button style={style.button}>LOGIN</button>
            <h3>i haven't any account </h3>
               <Link to ="/registration"><h3>Registration here</h3></Link>
            </div>
            
        </div>
    </div>
  )
}
const  style={
container:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "700px",
    
},

card:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#F5E899",
    width: "50%",
    height: "70%",
    position: "relative",
    top: "50px",
    borderRadius: "40px",
    boxShadow: "0px 0px 10px 3px rgba(0,0,0,40)",
},
form:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "900px",
},

input:{
    width: "300px",
    height: "40px",
    borderRadius: "20px",
    border: "none",
    margin: "10px",
    padding: "10px",
},
button:{
    width: "300px",
    height: "40px",
    borderRadius: "20px",
    backgroundColor: "orange",
    border: "none",
    margin: "10px",
    cursor: "pointer",
    transition: "all 0.3s",
    boxShadow: "0px 0px 10px 3px rgba(0,0,0,40)",
},

};
export default Login;