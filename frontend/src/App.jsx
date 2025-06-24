import { BrowserRouter  } from 'react-router-dom'
import {Routes,Route}from 'react-router-dom'
import LoginPage from './Pages/Login'

function App() {

  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
