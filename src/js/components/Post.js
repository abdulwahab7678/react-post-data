export default function Post({image, title, description}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            {image && (
                <img src={image} alt={title}/>
            )}
            <button>edit</button>
            <button>remove post</button>
        </div>
    )
}