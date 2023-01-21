import { useState } from "react";

const PostForm = (props) => {
const [file, setFile] = useState("")
const [des, setDis] = useState("")
const handleSubmit = (e)=>{
    e.preventDefault()
    props.PostAdd({file, des})
}




    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                <label>add file</label> <br />
                <input type="file" value={file} onChange={(e)=> setFile(e.target.value)} name="file upload" placeholder="file upload" required></input>
            </div>
            <div className="">
                <label>add discription</label> <br />
                <input type="text" value={des} onChange={(e)=> setDis(e.target.value)} name="description" placeholder="description" required></input>
            </div>
            <button type="submit">add post</button>
        </form>
    )
}

export default PostForm