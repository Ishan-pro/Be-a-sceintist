import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import supabase from '../supabase'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { fetchPosts, PostView, Loader } from '../functions'
import { useDispatch } from 'react-redux'
import { getPost } from '../features/postSlice'
import { AppDispatch } from '../app/store'



export default function Postdetail() {
    const [posts, setPosts] = useState<Post[]>([])
    const params = useParams()
    const [content, setPost] = useState<Post>({title:params.title || "", content:"", created_at:"", id:0, summary:""})
    const dispatch = useDispatch<AppDispatch>()
    
    useEffect(() => {
      if (params.title)
      dispatch(getPost(params.title)).unwrap().then(result => setPost(result))
    })
    
    
     return (
      <div className='' style={{marginTop:"10vh"}}>

    <div className='p-5 md:col-start-2 col-end-4 bg-white p-4 '>
      <h1 className='text-center mb-3 text-2xl'>{params.title}</h1>
      <div className='text-lg p-4'>
        {content ? <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content.content}></ReactMarkdown> : <Loader/>}
      </div>
    </div>
      
    
      </div>
  )
}
