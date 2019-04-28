import React from 'react'

import {
    ButtonWrapper,
    Button,
    Range,
    Value
} from './../../containers/Body/Main/styles.js'

import "./../../containers/Body/Main/styles.css"

class FFMC extends React.Component{
    state={
        displayMenu: false,
    }

    selectShow = () => {
        // console.log(this.state.displayMenu);
        this.setState({displayMenu:!this.state.displayMenu});
    };

    displayMenuFalse = () => {
        // console.log(this.state.displayMenu);
        this.setState({displayMenu:false});
    };


    render(){
        return(
            <ButtonWrapper onClick={this.selectShow} onMouseLeave={this.displayMenuFalse}>
                <Button >FFMC</Button>
                {this.state.displayMenu ? (
                    <Range onInput={this.props.sclicked} min='18.7' max='96.20' step='0.1' />
                ) : (null)}
                <Value>{this.props.value}</Value>
            </ButtonWrapper>
        );
    }
}

export default FFMC;