import {Routes, Route} from 'react-router-dom'
import { About, Help, Home, Postdetail} from './pages'


const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-3 text-white flex'>
      <h1 className='text-xl flex-1'>
       <a href="/" >Be A Scientist</a>
      </h1>
      <ul className='grid grid-cols-2 gap-2' style={{listStyleType:"none"}}>
        <li><a href="/about/" >About</a></li>

        <li><a href="/help/">Help</a></li>
      </ul>
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
