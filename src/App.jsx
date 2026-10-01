import Nav from './Componentes/Nav'
import Card from './Componentes/Card'
import Usterd from './Componentes/Usterd'
import Paises from './Componentes/Paises'
import Objetos from './Componentes/Objetos'
import Animais from './Componentes/Animais'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    
     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/times' element={<Usterd/>}/>
        <Route path='/Paises' element={<Paises/>}/>
        <Route path='/Objetos' element={<Objetos/>}/>
        <Route path='/Animais' element={<Animais/>}/>
      </Routes>
     </BrowserRouter>

  )
}

export default App
