import { BrowserRouter  } from 'react-router-dom'
import {Routes,Route}from 'react-router-dom'
import LoginPage from './Pages/Login'
import SignUpPage from './Pages/SignUp'
import Home from './Pages/Home'
function App() {

  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUpPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
