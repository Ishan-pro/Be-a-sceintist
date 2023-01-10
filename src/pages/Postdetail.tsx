import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import supabase from '../supabase'

export default function Postdetail() {
    const params = useParams()
    const [post, setPost] = useState<Post>({title:"", created_at:"", content:"", id:0})
    useEffect(() => {
      supabase.from('posts').select<"post", Post>().eq('title', params.title).then(res => { console.log(res); res.data && setPost(res.data[0])})
 
    }, [])
     return (
    <div className='p-5'>
      <h1 className='text-xl text-center'>{params.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
