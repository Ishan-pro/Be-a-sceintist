import React from 'react'
import heroimage from '../assets/beethovenwritingnovel.png'

export default function About() {
  return (
       
    <div className='p-4 text-center bg-white lg:rounded lg:shadow-sm' >
      <img className="col-span-1 rounded-full border border-8 border-blue-200" src={heroimage} alt="Beethoven writing a book" />
     
      <h1 className='text-xl text-blue-900 text-bold'>About</h1>
      <p>
        This is an interactive blog which is setup to not just improve their well being but also provide them educational and intellectual fodder to think upon. 
        Together we can discuss the purpose of life the purpose of wealth and the purpose of the universe.
      </p>
      <p>This is not for people who have never questioned the purpose of life. As they may be quite amused over the idea of discussing meta physical phenomenon openly with the world.</p>
      <strong className='bg-red-400 text-white p-1 rounded'>If you are someone who likes to question the existence of things I welcome you to my small hut.</strong>
    </div>
  )
}
