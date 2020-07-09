import React from 'react'
import Faker from 'faker'

import Comments from '../Comments'
import Header from '../header'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            comments: [],
            contador: 10,
            comment: {
                name: '',
                comment: '',
                avatar: ''
            }
        }
        this.aumentar = this.aumentar.bind(this)
        this.disminuir = this.disminuir.bind(this)
        this.createComment = this.createComment.bind(this)
    }

    createComment(){
        let newComment = {
            name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
            comment: Faker.lorem.paragraph(),
            avatar: Faker.image.avatar()
        }
        let newArray = this.state.comments
        newArray.push(newComment)
        this.setState({comments: newArray})
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
                <Header></Header>
                {/* <Comments></Comments> */}
                <button onClick={this.createComment}>Crear comentario</button> 
                {
                    this.state.comments.map((comment) => {
                        return(
                            <Comments 
                                name={comment.name}
                                comment={comment.comment}
                                avatar={comment.avatar}
                            >
                            </Comments>
                        )
                    })
                }
                {/* <button onClick={this.aumentar}>Aumentar</button>
                <button onClick={this.disminuir}>Disminuir</button>
                <div>{this.state.contador}</div> */}
            </div>
        )
    }
}

export default App