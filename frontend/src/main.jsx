import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomeScreen from './screens/HomeScreen.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginScreens from './screens/LoginScreens.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import {
  Route, 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route  index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreens/>} />
      <Route path='/register' element={<RegisterScreen/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
)
