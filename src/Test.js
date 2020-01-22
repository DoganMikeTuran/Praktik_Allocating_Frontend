import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,

        }
    }
    componentDidMount() {
        fetch('https://localhost:5001/api/user')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }


    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>

        }
        else {
            return (
                <div>
                    {items.map((person, i) => (
                        <div>
                            <div>{person.firstname} {person.lastname}</div>

                        </div>

                    ))}


                </div>
            );
        }
    }
}

export default Test;