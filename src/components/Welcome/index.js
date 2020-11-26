import React, { Component } from 'react';
import './style.css';

class Welcome extends Component {
    state = {
        username: "",
        nameInput: "",
    };

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState(prevState => ({
            username: prevState.nameInput,
            nameInput: ""
        }));
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Hello {this.state.username ? this.state.username : "folk " } , welcome to Mika's Fanclub page</label>
                <input type='text' name="nameInput" id='nameInput' placeholder='Enter your name!'  value={this.state.nameInput} onChange={this.handleInput} />
                <input type='submit' value='Update!' />
            </form>
            )
    }
}

export default Welcome;