import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {AppDispatch} from '../app/store'
import { getPosts } from '../features/postSlice'
import {Loader, PostView} from '../functions'

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([])
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getPosts()).unwrap().then((result) => {setPosts(result)})
    }, [])
    return (
    <div style={{marginTop:"10vh"}}>
        <main className='col-span-1 p-4 bg-white self-stretch rounded w-full' >
            
            
            <div className=''>
                
                {posts[0] ? posts.map(data => <PostView {...data} key={data.id}></PostView>) : <Loader/>}
            </div>
        </main>
    </div>
    )
  
}
