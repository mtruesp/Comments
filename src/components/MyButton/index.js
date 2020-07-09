import React from 'react'

class MyButton extends React.Component{

    render(){
        return(
            <div>
                <button onClick={this.props.eventClick}>{this.props.text}</button>
            </div>
        )
    }
}

export default MyButton