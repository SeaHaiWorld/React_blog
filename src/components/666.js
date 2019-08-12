import React from "react"
 
class ComentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            childText: "this is child text"
        })
 
    }
    clickFun(text) {
        this.props.pfn(text)//这个地方把值传递给了props的事件当中
    }
    render() {
        return (
            <div className="list">
                <button onClick={this.clickFun.bind(this, this.state.childText)}>
                    click me
                </button>
            </div>
        )
    }
}
 
export default ComentList; 
