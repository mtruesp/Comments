import React from 'react'
import { Form } from 'react-bootstrap'

import MyButton from '../MyButton'

class InputComment extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            comment: ''
        }
        this.cambiarValor = this.cambiarValor.bind(this)
        this.handleSumbit = this.handleSumbit.bind(this)
    }

    cambiarValor(event, prop){
        let newState = {...this.state}
        newState[prop]=event.target.value;
        this.setState(newState);
    }

    handleSumbit(){
        if(this.state.name !== '' && this.state.comment !== ''){
            this.props.createComment(this.state)
            this.setState({name: '', comment: ''})
        }
        else    
            alert('Campos vacios')
    }

    render(){
        return(
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Escribe tu nombre" 
                        value={this.state.name} 
                        onChange={(event) => this.cambiarValor(event, 'name')}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comentario</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows="3" 
                        value={this.state.comment}
                        onChange={(e) => this.cambiarValor(e, 'comment')}
                    />
                </Form.Group>
                <MyButton text="Crear comentario" eventClick={this.handleSumbit}/>
            </Form> 
        )
    }
}

export default InputComment 