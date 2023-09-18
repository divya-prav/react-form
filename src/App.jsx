
import { useState } from 'react'
import './App.css'
import SignUpForm from './component/SignUpForm'
import Authenticate from './component/Authenticate';

function App() {
   const [token,setToken] = useState(null);

  return (
    <div className='signin-card'>
     <SignUpForm token={token} setToken={setToken}/>
     <Authenticate token={token} setToken={setToken}/>
    </div>
  )
}

export default App
