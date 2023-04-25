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
    async(thunkAPI)=> {
        const posts  = await supabase.from('posts').select<"posts", Post>().order('created_at', {ascending:false}).then(res => {res.data})
        return posts
    }
)

export const postSlice = createSlice({
    initialState,
    name:"posts",
    reducers:{}
})


export const postReducer = postSlice.reducer
