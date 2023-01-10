import React, {useEffect, useState} from 'react'
import supabase from '../supabase'



const fetchPosts = async() => {
    const posts = await supabase.from('posts').select<"post", Post>()
    console.log(posts.data)
    return (posts.data ? posts.data : [])
}


const PostView = (props:Post) => {
    return (
        <article className="bg-gray-300 p-3 rounded">
            <h3 className='text-lg font-semibold hover:underline hover:font-bold'><a href={`/read/${props.title}`}>{props.title}</a></h3>
            <span className='text-muted'>{props.created_at}</span>
        </article>

    )
}

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(
        () => {fetchPosts().then(res => setPosts(res))}, []
    )
    return (
    <div className='lg:grid lg:grid-cols-2'>
        <img className="col-span-1" src={"https://lh3.googleusercontent.com/8kEQ-JBg7ggq9ZzU8rzbNX2iZCcwVsDjkFe-JLHbk-HAh4fuae-2X-mX65qlcRD5_WgweqMy24U3QgetTM5YCazSGjQL2n98f1X3L4EBh55a0ELX8Ccz8iGbjlSxNUdUQwp-DtMg7EtJ9KXvlSWIv_wvRfzhWUJHAwQmseQAaS4qD6sD5f9ATg91eeok6P3YiPi4jImijtX955sS9xzXG2ySbA3IUPTlAATp1GtYM2d6pjCUCNp0HvHkJGQfhqT6MgjUuyH8a5RCzvGRQbnyhZ1567L_7bXBVnlg9Y1ne-91s6_0vPJweiJKfmHRUdSg6N7AaVNCRUAo_6h7c26jSj362Zvb8eF3GmQb0eztZ8lfsuPYyXjeC3uS6M72aT08wFujZeO-dc8d4Y2h7O15mADSPrUoJ-LZ0CgodXIMA__Vmr_x1FQbppHH4bjSNtE2YmXZd5pGSQcKnRmODxn8QIVzm4syabfBGv3Y6gmjorAFB1CluA9tpIkXnGxN95ltigE64H-SHTMTyYX8gIh1ezJQzHsdBWjbiqB1wf1LqKaCwSElnyRlo4SLK7_WQGCzJfahWshE2RWo_G8Po1uSB-q7uyh7lfEyjASRT61vIi2JWs-oa-Tw7id6EtCJdrkD7LzrpcwFWYxoDkeEhj3vxPAjZdYmMyQ5YdLs_CKhx30vLAYoy5bqgyGYkXJxTt0EfpjvPmi6_wCRhoVaeXQXtiDyGZbaemtrRUO7yME7pNvBaP5GxlkS_-o3XUFLrEEj6nryhJPejL9r4mDxQ2eE0UrzBluT4api2ihLNs4Ru21p7S1uJjbkkTwlpx4YIvmFNbk_iDdaF9-oQTVJb8yilFFQCoi0THvToyHQNKi7gBPmI5d0kEBF2sKk7_J-ecVGIQvoiwetZifWQSnQLDyAkVGuWoGuBSJZ8dZPRFMuCp6YBWhm=s577-no?authuser=0"} alt="Beethoven writing a book" />
        <main className='col-span-1 p-4'>
            <h1 className='text-xl'>Blog Posts </h1>
            <div className='lg:grid lg:grid-cols-2'>
                {posts.map(data => <PostView {...data}></PostView>)}
            </div>
        </main>
    </div>
    )
  
}
