import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import supabase from '../supabase'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function Postdetail() {
    const params = useParams()
    const [content, setPost] = useState<string>("")
    console.log(params)
    useEffect(() => {
      supabase.from('posts').select<"post", Post>().eq('title', params.title).then(res => { console.log(res); res.data && setPost(res.data[0].content)})
      
    }, [])
     return (
    <div className='p-5'>
      <h1 className='text-xl text-center'>{params.title}</h1>
      <p>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </p>
    </div>
  )
}
