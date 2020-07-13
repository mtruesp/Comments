import React from 'react'
import Faker from 'faker'

import Comments from '../Comments'
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
        this.fakeComment = this.fakeComment.bind(this)
        this.editComment = this.editComment.bind(this)
        this.saveComment = this.saveComment.bind(this)
    }

    createComment(info){
        let newComment = {
            name: info.name,
            comment: info.comment,
            avatar: Faker.image.avatar(),
            id: Faker.random.uuid(),
            edit: false
        }
        let newArray = this.state.comments
        newArray.push(newComment)
        this.setState({comments: newArray})
    }

    fakeComment(){
        let newComment = {
            name: Faker.name.firstName(),
            comment: Faker.lorem.paragraph(),
            avatar: Faker.image.avatar(),
            id: Faker.random.uuid(),
            edit: false
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

    editComment(id){
        let copyComments = this.state.comments
        let newComments = copyComments.map((comment) => {
            if(comment.id === id){
                comment.edit = true
            }
            return comment
        })
        this.setState({comments: newComments})
    }

    saveComment(id, newComment){
        let newComments = this.state.comments.map((comment) => {
            if(comment.id === id){
                comment.comment = newComment
                comment.edit = false
            }
            return comment
        })
        this.setState({comments: newComments})
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
                <InputComment createComment={this.createComment} fakeComment={this.fakeComment}/>
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
                                edit={comment.edit}
                                saveComment={(id, newComment) => this.saveComment(id, newComment)}
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