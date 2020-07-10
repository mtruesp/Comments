import React from 'react'
import { Button } from 'react-bootstrap'

class MyButton extends React.Component{

    render(){
        return(
            <Button 
                variant="primary" 
                size="lg" 
                block
                onClick={this.props.eventClick}
            >
                {this.props.text}
            </Button>
        )
    }
}

export default MyButton