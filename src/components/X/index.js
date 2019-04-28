import React from 'react'

import {
    ButtonWrapper,
    Button,
    Smenu,
    SmenuA,
    Value
} from './../../containers/Body/Main/styles.js'

import "./../../containers/Body/Main/styles.css"

class X extends React.Component{
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
                <Button >X</Button>
                {this.state.displayMenu ? (
                    <Smenu onClick={this.props.sclicked}>
                        <SmenuA value='1'>1</SmenuA>
                        <SmenuA value='2'>2</SmenuA>
                        <SmenuA value='3'>3</SmenuA>
                        <SmenuA value='4'>4</SmenuA>
                        <SmenuA value='5'>5</SmenuA>
                        <SmenuA value='6'>6</SmenuA>
                        <SmenuA value='7'>7</SmenuA>
                        <SmenuA value='8'>8</SmenuA>
                        <SmenuA value='9'>9</SmenuA>
                    </Smenu>
                ) : (null)}
                <Value>{this.props.value}</Value>
            </ButtonWrapper>
        );
    }
}

export default X;