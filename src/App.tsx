import {Routes, Route} from 'react-router-dom'
import { About, Help, Home, Postdetail} from './pages'


const Navbar = () => {
  return (
    <nav className=' p-3 bg-white flex h-14 items-center fixed top-0 left-0 shadow-lg z-10 ' 
    style={{width:"100%", height:"10vh", marginBottom:"10vh"}}>
      <h1 className='text-xl flex-1 strong' >
       <a href="/" >Be A Scientist</a>
      </h1>
      <ul className='grid grid-cols-2 gap-2' style={{listStyleType:"none"}}>
        <li><a href="#about" >About</a></li>

        <li><a href="/help/">Help</a></li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <>
    <Navbar/>
    <main className='lg:grid lg:grid-cols-4'>
      <div className='col-span-3'>
    <main className='bg-gray-200 min-h-screen lg:grid lg:place-items-center grid '>
    
    <Routes>
      
      <Route path='/help' element={<Help/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/read/:title" element={<Postdetail/>}/>

    </Routes>
    </main>
    </div>
    
    <About/>
    </main>
    </>

  )
}

export default App;
