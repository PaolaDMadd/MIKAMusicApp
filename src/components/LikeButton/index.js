import React, { Component } from 'react'

class LikeButton extends Component {
    state = {
        liked: false
    };

    handleLike = e => {
        this.setState(prevState => ({ liked: !prevState.liked}))
    }
    
    render (){
        return (
            // needs a thumb up instead of string
            <>
                {/* <button onClick={this.handleLike} style={{background: this.state.liked ? 'green' : 'red'}}>👍</button> */}
                <button onClick={this.handleLike} style={{color: this.state.liked ? 'orange' : 'gray'}}><i class="far fa-thumbs-up"></i></button> 
            </>
        );
    };
};

export default LikeButton;