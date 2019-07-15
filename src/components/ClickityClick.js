import React, {Component} from 'react'

export default class ClickityClick extends Component{
    constructor(){
        super()
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue',
            characters: {
                me: 'cool', 
                wife: null
            }
        }
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true,
            characters: {
                 ...this.state.characters,
                wife: "pretty cool"
            }
        })
    }

    render(){
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}