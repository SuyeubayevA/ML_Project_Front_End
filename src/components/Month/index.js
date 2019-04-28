import React from 'react'

import {
    ButtonWrapper,
    Button,
    Smenu,
    SmenuA,
    Value
} from './../../containers/Body/Main/styles.js'

import "./../../containers/Body/Main/styles.css"

class Month extends React.Component{
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
            <ButtonWrapper onClick={this.selectShow} onMouseLeave={this.displayMenuFalse} >
                <Button >month</Button>
                {this.state.displayMenu ? (
                    <Smenu onClick={this.props.sclicked}>
                        <SmenuA value='jan'>jan</SmenuA>
                        <SmenuA value='feb'>feb</SmenuA>
                        <SmenuA value='mar'>mar</SmenuA>
                        <SmenuA value='apr'>apr</SmenuA>
                        <SmenuA value='may'>may</SmenuA>
                        <SmenuA value='jun'>jun</SmenuA>
                        <SmenuA value='jul'>jul</SmenuA>
                        <SmenuA value='aug'>aug</SmenuA>
                        <SmenuA value='sep'>sep</SmenuA>
                        <SmenuA value='oct'>oct</SmenuA>
                        <SmenuA value='nov'>nov</SmenuA>
                        <SmenuA value='dec'>dec</SmenuA>
                        
                    </Smenu >
                ) : (null)}
                <Value>{this.props.value}</Value>
            </ButtonWrapper>
        );
    }
}

export default Month;