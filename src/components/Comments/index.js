import React from 'react'
import Faker from 'faker'

import MyButton from '../MyButton'

class Comments extends React.Component{
    constructor(){
        super()
        this.create = this.create.bind(this)
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

    create(){
        let newComment = {
            name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
            comment: Faker.lorem.paragraph(),
            avatar: Faker.image.avatar()
        }
        this.setState(newComment)
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
                        <div className="text">
                            {this.props.comment}
                        </div>
                    </div>
                </div>
                <MyButton eventClick={() => this.props.deleteComment(this.props.id)} text="Borrar comentario"></MyButton>
            </div>
        )
    }
}

export default Comments