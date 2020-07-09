import React from 'react'
import Faker from 'faker'

class Comments extends React.Component{
    constructor(){
        super()
        this.state = {
            name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
            comment: Faker.lorem.paragraph(),
            avatar: Faker.image.avatar()
        }
        this.create = this.create.bind(this)
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
            </div>
        )
    }
}

export default Comments