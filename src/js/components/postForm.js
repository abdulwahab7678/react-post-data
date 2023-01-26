import { useRef, useState } from "react";

export default function PostForm({addPost}){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [filePath, setfilePath] = useState(null)
    const fileField = useRef()




const handleSubmit = (e)=>{
    e.preventDefault()
    addPost({title, description, image: filePath})
    setTitle(''),
    setDescription(''),
    setfilePath(null)
}

const handleUpload =(event)=>{
    setfilePath(URL.createObjectURL(fileField.current.files[0]))
}

    return(
        <form onSubmit={handleSubmit}>
            <div className="title_parent">
                <label>title</label><br/>
                <input type='text' name="title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className="description_parent">
                <label>description</label><br/>
                <textarea type='text' name="description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
            </div>
            <div className="image_parent">
                <label>file</label><br/>
                <input type='file' name="image" ref={fileField} onChange={(e)=> handleUpload(e)}/>
            </div>
            {filePath &&(
                <img src={filePath} alt="image"/>
            )}
            <div> <input type='submit'/></div>
        </form>
    )
}