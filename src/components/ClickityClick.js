import React from 'react'
// Code ClickityClick Component Here

class ClickityClick extends React.Component {

    //declare the state
    constructor() {
        super()

        this.state = {
            hasBeenClicked: false
        }
    }

    //update state here
    handleClick = (event) => {
        this.setState({
            hasBeenClicked: true
        })
    }

    render() {
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick