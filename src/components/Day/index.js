import React from 'react'

import {
    ButtonWrapper,
    Button,
    Smenu,
    SmenuA,
    Value
} from './../../containers/Body/Main/styles.js'

import "./../../containers/Body/Main/styles.css"

class Day extends React.Component{
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
                <Button >day</Button>
                {this.state.displayMenu ? (
                    <Smenu onClick={this.props.sclicked}>
                        <SmenuA value='mon'>mon</SmenuA>
                        <SmenuA value='tue'>tue</SmenuA>
                        <SmenuA value='wed'>wed</SmenuA>
                        <SmenuA value='thu'>thu</SmenuA>
                        <SmenuA value='fri'>fri</SmenuA>
                        <SmenuA value='sat'>sat</SmenuA>
                        <SmenuA value='san'>san</SmenuA>                        
                    </Smenu >
                ) : (null)}
                <Value>{this.props.value}</Value>
            </ButtonWrapper>
        );
    }
}

export default Day;