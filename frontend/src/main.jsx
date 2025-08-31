import { createRoot } from 'react-dom/client'
import{BrowserRouter} from 'react-router-dom'
import './index.css'
import {App} from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter> 
  <AuthContext>
    <UserContext>
  <App /> {/*  this is children of authContext  and the whole of children of browswerRouter */}
    </UserContext>
   </AuthContext>
 </BrowserRouter>
  
  
)
