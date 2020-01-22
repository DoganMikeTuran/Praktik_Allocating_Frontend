import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: '',
        }
    }
    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={this.state.userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={this.state.body} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;