import supabase from './supabase'
import {useNavigate} from 'react-router-dom'

const setCache = (cachename:string, cachebody:object) => {
    let item = sessionStorage.getItem(cachename)
    item && sessionStorage.removeItem(cachename)
    sessionStorage.setItem(cachename, cachebody.toString())
}

export const fetchPosts = async(title="") => {
    let sessionposts = sessionStorage.getItem("posts")
    let storedposts:object = sessionposts ? JSON.parse(sessionposts) : null
    const posts = storedposts ||await supabase.from('posts').select<"post", Post>().filter('title', "not.eq", title).order('created_at', {ascending:false})
    
    return (posts ? posts : [])
}


export const PostView = (props:Post) => {
    const navigate = useNavigate()
    const monthlist = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let date = props.created_at.substring(0, 10)
    const datelist = date.split("-")
    const month = monthlist[parseInt(datelist[1]) -1]
    date =  parseInt(datelist[2]).toString() + " "+ month + " "+ datelist[0]
    return (
        <article className="m-1 rounded shadow-md p-3 bg-white m-h-1/10 hover:scale-110 hover:cursor-pointer" onClick={() => {navigate(`/read/${props.title}`)}}>
            <h3 className='text-lg text-center font-semibold hover:underline hover:font-bold'><a href={`/read/${props.title}`}>{props.title}</a></h3>
            <span className='text-gray-700'>{date}</span>
            <p className=''>{props.summary}</p>
        </article>

    )
}

export const Loader = () => {
    return (
        <>

<div className='loader'></div>

        </>
    )
}