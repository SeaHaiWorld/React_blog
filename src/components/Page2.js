import React from "react"
import ComentList from "./666"
 
class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parentText: "this is parent text",
        }
    }
 
    fn(data) {
        this.setState({
            parentText: data //把父组件中的parentText替换为子组件传递的值
        },() =>{
           console.log(this.state.parentText);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
        });
 
    }
 
 
 
    render() {
        return (
            <div>
                <ComentList pfn={this.fn.bind(this)}>
                </ComentList>
                <p>
                    text is {this.state.parentText}
                </p>
        
            </div>
 
        )
    }
}
 
export default Comment;    