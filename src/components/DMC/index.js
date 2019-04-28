import React from 'react'

import {
    ButtonWrapper,
    Button,
    Range,
    Value
} from './../../containers/Body/Main/styles.js'

import "./../../containers/Body/Main/styles.css"

class DMC extends React.Component{
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
                <Button >DMC</Button>
                {this.state.displayMenu ? (
                    <Range onInput={this.props.sclicked} min='1.1' max='291.3' step='0.1' />
                ) : (null)}
                <Value>{this.props.value}</Value>
            </ButtonWrapper>
        );
    }
}

export default DMC;