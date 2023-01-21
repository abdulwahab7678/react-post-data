const PostData = (props) => {
    const list = props.list
    if (list && list.length) {
        return (
            <div>
                {list.map((user) => 
                        <div className="user">
                            <div className=""><img src={user.file} alt="image"/></div>
                            <div className="">{user.des}</div>
                        </div>
                    )}
            </div>
        )
    }
    return(
    <p>There is no post data</p>
    )
}

export default PostData