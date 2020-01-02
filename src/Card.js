import React, { Component } from 'react';
import Portfolio from './Portfolio'

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            fade: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({fade: "Fade-out"})
        setTimeout(()=> {
            this.setState({clicked: true})
        }, 1000)
    }

    render(){
    	return(
    		<div>
                {this.state.clicked
                ?<Portfolio />
                : <div className={`Card ${this.state.fade}`}>
                <p onClick={this.handleClick} className={`Card-button ${this.state.fade}`}>portfolio</p>
            </div>
                }

    		</div>
    	);
    }
}
export default Card ;