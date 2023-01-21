import { Component } from "react";
import PostForm from "./components/postForm";
import PostData from "./components/postData";

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }
    PostAdd = (newPost) => {
        this.setState({ users: [...this.state.users, newPost]})
      }

    render() {
        let { users } = this.state
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <PostForm PostAdd={this.PostAdd}/>
                        </div>
                        <div className="col-6">
                            <PostData list={users}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}