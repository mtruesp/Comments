import React from 'react'
import Faker from 'faker'

import Comments from '../Comments'
import MyButton from '../MyButton'
import InputComment from '../InputComment'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            comments: [],
            contador: 10,
        }
        this.aumentar = this.aumentar.bind(this)
        this.disminuir = this.disminuir.bind(this)
        this.createComment = this.createComment.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
    }

    createComment(info){
        let newComment = {
            name: info.name,
            comment: info.comment,
            avatar: Faker.image.avatar(),
            id: Faker.random.uuid()
        }
        let newArray = this.state.comments
        newArray.push(newComment)
        this.setState({comments: newArray})
    }

    deleteComment(id){
        let copyComments = this.state.comments
        let newComments = copyComments.filter((comment) => comment.id !== id)
        let copyState = {...this.state, comments: newComments, contador: 0}
        this.setState(copyState)
    }

    aumentar(){
        let newContador = this.state.contador + 1
        this.setState({contador: newContador})
    }

    disminuir(){
        let newContador = this.state.contador - 1
        this.setState({contador: newContador})
    }

    render(){
        return(
            <div>
                <InputComment createComment={this.createComment}/>
                {
                    this.state.comments.map((comment) => {
                        return(
                            <Comments 
                                name={comment.name}
                                comment={comment.comment}
                                avatar={comment.avatar}
                                key={comment.id}
                                id={comment.id}
                                deleteComment={(id) => this.deleteComment(id)}
                            >
                            </Comments>
                        )
                    })
                }
            </div>
        )
    }
}

export default App