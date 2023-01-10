import {Routes, Route} from 'react-router-dom'
import { About, Help, Home, Postdetail} from './pages'


const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-3 text-white'>
      <h1 className='text-xl'>Be A Scientist</h1>
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
      <Route path="/read/:title" element={<Postdetail/>}/>

    </Routes>
    </>

  )
}

export default App;
