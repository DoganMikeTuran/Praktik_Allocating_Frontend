import React, { Component } from 'react';
import axios from 'axios'
class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            firstname: '',
            lastname: '',
            email: ''
        }
    }
    changeHandler = (event) => {
        if (event.target.name == "id") {
            this.setState({ [event.target.name]: parseInt(event.target.value) })
        }
        else {
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('https://localhost:5001/api/user/post', {
                id: this.state.id,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email
            })
            .then(response => {
                console.log('Hello world', response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="number" name="id" value={this.state.id.parseInt} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="password" value={this.state.password} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="firstname" value={this.state.firstname} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="lastname" value={this.state.lastname} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="email" value={this.state.email} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;