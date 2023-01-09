import {Routes, Route} from 'react-router-dom'
import { About, Help, Home} from './pages'


const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-3 text-white'>
      <h1 className='text-xl'>LogIt</h1>
    </nav>
  )
}

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path="/" element={<Home/>}/>

    </Routes>
    </>

  )
}

export default App;
