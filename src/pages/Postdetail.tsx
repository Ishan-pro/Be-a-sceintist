import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import supabase from '../supabase'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { fetchPosts, PostView, Loader } from '../functions'



export default function Postdetail() {
    const [posts, setPosts] = useState<Post[]>([])
    const [content, setPost] = useState<string>("")
    useEffect(() => {
      fetchPosts(params.title).then(res => setPosts(res))
    })
    const params = useParams()
    console.log(params)
    useEffect(() => {
      supabase.from('posts').select<"post", Post>().eq('title', params.title).then(res => { console.log(res); res.data && setPost(res.data[0].content)})
      
    }, [])
     return (
      <div className='md:grid md:grid-cols-4 ' style={{marginTop:"10vh"}}>

    <div className='p-5 md:col-start-2 col-end-4 bg-white'>
      <h1 className='text-center mb-3'>{params.title}</h1>
      <p>
        {content ? <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content}></ReactMarkdown> : <Loader/>}
      </p>
    </div>
      {content  && (<div className='block md:shadow-lg p-3'>
    <h3 >
      More Posts
    </h3>
    <div>
      {posts.map((post) => <PostView {...post}/>)}
    </div>
  </div>)}
    
      </div>
  )
}
