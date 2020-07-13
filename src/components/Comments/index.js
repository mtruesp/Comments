import React from 'react'
import Faker from 'faker'
import {Form} from 'react-bootstrap'

import MyButton from '../MyButton'

class Comments extends React.Component{
    constructor(props){
        super()
        this.state = {
            comment: props.comment,
            edit: props.edit
        }

        this.create = this.create.bind(this)
        this.editComment = this.editComment.bind(this)
        this.changeToEdit = this.changeToEdit.bind(this)
        this.saveComment = this.saveComment.bind(this)
    }

    componentWillMount(){
        console.log('Component Will Mount')
    }

    componentDidMount(){
        console.log('Component Did Mount')
    }

    componentWillUnmount(){
        console.log('Component Will Unmount')
    }

    componentWillReceiveProps(nextProps){
        console.log('next props', nextProps)
        this.setState({comment: nextProps.comment, edit: nextProps.edit})
    }

    create(){
        let newComment = {
            name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
            comment: Faker.lorem.paragraph(),
            avatar: Faker.image.avatar()
        }
        this.setState(newComment)
    }

    editComment(comment){
        this.setState({comment: comment})
    }

    changeToEdit(){
        this.setState({edit: true})
    }

    saveComment(){
        this.setState({edit: false})
        
    }

    render(){
        return(
            <div className="ui comments">
                {/* <button onClick={this.create}>Create</button> */}
                <div className="comment">
                    <a className="avatar">
                        <img src={this.props.avatar}/>
                    </a>
                    <div className="content">
                        <a className="author">{this.props.name}</a>
                        <div className="metadata">
                            <div className="date">{new Date().toLocaleDateString()}</div>
                            </div>
                        {
                            this.state.edit ?
                                <Form.Control 
                                    as="textarea" 
                                    rows="3" 
                                    value={this.state.comment}
                                    onChange={(e) => this.editComment(e.target.value)}
                                /> :
                                <div className="text">
                                    {this.state.comment}
                                </div>

                        }
                    </div>
                </div>
                <MyButton eventClick={() => this.props.deleteComment(this.props.id)} text="Borrar comentario"></MyButton>
                { 
                    this.state.edit ?
                        <MyButton 
                            eventClick={() => this.props.saveComment(this.props.id, this.state.comment)} 
                            text="Guardar comentario"
                        ></MyButton>
                        
                    :
                        <MyButton eventClick={this.changeToEdit} text="Editar comentario"></MyButton>
                }
            </div>
        )
    }
}

export default Comments