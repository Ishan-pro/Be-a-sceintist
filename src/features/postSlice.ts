
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import supabase from '../supabase'

interface State  {
    posts:Post[],
    loading:boolean
}

const initialState:State = {
    posts:[],
    loading:false
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async(thunkAPI):Promise<Post[]>=> {
        const storedPostCookie = localStorage.getItem('posts')
        let posts:Post[] | null = []
        if (storedPostCookie) {
            posts = JSON.parse(storedPostCookie)
        } else {
                posts  = (await supabase.from('posts').select<"posts", Post>().order('created_at', {ascending:false}).limit(10)).data
                const newCookie = localStorage.setItem('posts', JSON.stringify(posts))

        }
            return posts || []
    }
)

export const getPost = createAsyncThunk(
    'posts/getPost',
    async(title:string, thunkAPI):Promise<Post> => {
        const storedPostsCookie = localStorage.getItem('posts')
        const basePost = {title:'', created_at:"", content:"", id:0, summary:""}
        let post:Post = basePost
        if (storedPostsCookie) {
            const posts:Post[] = JSON.parse(storedPostsCookie)
            post = posts.filter(object => object.title === title)[0]
        } else {
            const postdata  = (await supabase.from('posts').select<"posts", Post>().order('created_at', {ascending:false}).filter('title', 'eq', title)).data
            post = postdata ? postdata[0] : basePost
            
        }

        return post
    }

)


export const postSlice = createSlice({
    initialState,
    name:"posts",
    reducers:{}
})


export const postReducer = postSlice.reducer
