import { useState } from "react";
import '../App.css';


export default function Authenticate({token,setToken}){
    const [error,setError] = useState("");
    const [successMessage,setSuccessMessage] = useState("");

    async function handleClick(e){
     try{
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                 Authorization: `Bearer ${token}`
            }
        })
       
        const result = await response.json();

        if(successMessage !== null){ 
            setSuccessMessage(result.message);
            console.log(result.message);
        } 


     }catch(err){
        console.error(err.message);
        setError(err.message);
     }

    }

    return(
        <>
     

        
        <h2>Please Authenticate after Successful Sign In</h2>
        
        {error&& <p>{error}</p> }
       
        {successMessage && <p>{successMessage}</p>}
    
        <button onClick={handleClick}>Authenticate !!</button>
        </>
    )
}