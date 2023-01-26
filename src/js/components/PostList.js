import Post from './Post'
export default function PostList({posts}) {
    return(
        <div>
            {
                posts.map(
                    (post)=>{
                        return(
                        <Post image={post.image} title={post.title} description={post.description}/>)
                    }
                )
            }
          
        </div>
    )
}