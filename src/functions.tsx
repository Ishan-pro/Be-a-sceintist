import supabase from './supabase'



export const fetchPosts = async(title="") => {
    const posts = await supabase.from('posts').select<"post", Post>().filter('title', "not.eq", title).order('created_at', {ascending:false})
    console.log(posts.data)
    return (posts.data ? posts.data : [])
}


export const PostView = (props:Post) => {
    const monthlist = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let date = props.created_at.substring(0, 10)
    const datelist = date.split("-")
    date =  parseInt(datelist[2]).toString() + " "+ monthlist[parseInt(date[1])] + " "+ datelist[0]
    return (
        <article className="bg-gray-300 p-3 rounded">
            <h3 className='text-lg font-semibold hover:underline hover:font-bold'><a href={`/read/${props.title}`}>{props.title}</a></h3>
            <span className='text-muted'>{date}</span>
        </article>

    )
}