import { BrowserRouter  } from 'react-router-dom'
import {Routes,Route}from 'react-router-dom'
import LoginPage from './Pages/Login'
import SignUpPage from './Pages/SignUp'
function App() {

  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUpPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
