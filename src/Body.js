import React, { Component } from 'react';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        };
    }
    render() {
        return (
            <div>
                <h2>Body Props Number : {this.props.number}</h2>
                <h2>Body State Number : {this.state.number}</h2>
            </div>
        );
    }
}

export default Body;