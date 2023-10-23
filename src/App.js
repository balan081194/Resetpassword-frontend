import Login from "./component/Login"
import Signup from "./component/Signup"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Home from './component/Home'
import ForgotPassword from "./component/ForgotPassword"
import ResetPassword from "./component/ResetPassword"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset_password/:id/:token" element={<ResetPassword />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
