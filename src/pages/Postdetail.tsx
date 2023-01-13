import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import supabase from '../supabase'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { fetchPosts, PostView } from '../functions'

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
      <div className='md:grid md:grid-cols-3'>

    <div className='p-5 md:col-span-2'>
      <h1 className='text-center mb-3'>{params.title}</h1>
      <p>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content}></ReactMarkdown>
      </p>
    </div>
    <div className='block md:shadow-lg p-3'>
      <h1 className='text-lg'>
        More Posts
      </h1>
      <div>
        {posts.map((post) => <PostView {...post}/>)}
      </div>
    </div>
      </div>
  )
}
