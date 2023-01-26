import { Component } from "react";
import PostForm from './components/PostForm'
import PostList from './components/PostList'




const posts = [
    {
        title: "post 1",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: null
    },
    {
        title: "post 2",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: null
    },
    {
        title: "post 3",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: null
    }
]

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            posts: [...posts]
        }
    }
    addPost = (post) => {
        console.log(post)
        this.setState({
            posts: [
                { ...post },
                ...this.state.posts
            ]
        })
    }

    render() {
        return (
            <div>
                <header>header</header>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <PostForm addPost={this.addPost} />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <PostList posts={this.state.posts} />
                            </div>
                        </div>
                    </div>
                </main>
                <footer>footer</footer>
            </div>
        )
    }

}