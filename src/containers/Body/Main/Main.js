import React from 'react'
import X from './../../../components/X'
import Y from './../../../components/Y'
import Month from './../../../components/Month/'
import Day from './../../../components/Day/'
import FFMC from './../../../components/FFMC/'
import DMC from './../../../components/DMC/'
import DC from './../../../components/DC/'
import Rain from './../../../components/Rain/'
import RH from './../../../components/RH/'
import TEMP from './../../../components/TEMP/'
import Wind from './../../../components/Wind/'
import ISI from './../../../components/ISI/'
import axios from '../../../axios-order'

import {
    Layer2,
    Layer1,
    ButtonWrapper,
    ButtonArea,
} from './styles'

import "./styles.css"

class Main extends React.Component{
    state={
        displayMenu: false,
        Xvalue: null,
        Yvalue: null,
        monthValue: null,
        dayValue: null,
        FFMCValue: null,
        DMCValue: null,
        DCValue: null,
        ISIValue: null,
        tempValue: null,
        RHValue: null,
        windValue: null,
        rainValue: null,
        area: null,
        error: false
    }

    // componentDidMount(){
    //     axios.get()
    //         .then(response => {
    //             this.setState({ingredients: response.data});
    //         })
    //         .catch(error => {
    //             this.setState({error: true})
    //         });
    // }

    countAreaHandler = () => {
        // alert("Continue!");
        const measures = {
            Xvalue: this.state.Xvalue,
            Yvalue: this.state.Yvalue,
            monthValue: this.state.monthValue,
            dayValue: this.state.dayValue,
            FFMCValue: this.state.FFMCValue,
            DMCValue: this.state.DMCValue,
            DCValue: this.state.DCValue,
            ISIValue: this.state.ISIValue,
            tempValue: this.state.tempValue,
            RHValue: this.state.RHValue,
            windValue: this.state.windValue,
            rainValue: this.state.rainValue,
        }
        axios.post('', measures)
            .then(response => {
                this.setState({area:response.data});
                alert("The burned area of the forest (in ha):" + this.state.area);
            })
            .catch(error => {
                alert("Error!");
            });
    }

    selectValueX = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({Xvalue: event.target.value});
    };

    selectValueY = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({Yvalue: event.target.value});
    };

    selectValueMonth = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({monthValue: event.target.getAttribute('value')});
    };

    selectValueDay = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({dayValue: event.target.getAttribute('value')});
    };

    selectValueFFMC = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({FFMCValue: event.target.value});
    };

    selectValueDMC = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({DMCValue: event.target.value});
    };

    selectValueDC = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({DCValue: event.target.value});
    };

    selectValueRain = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({rainValue: event.target.value});
    };

    selectValueRH = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({RHValue: event.target.value});
    };

    selectValueTEMP = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({tempValue: event.target.value});
    };

    selectValueWind = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({windValue: event.target.value});
    };

    selectValueISI = (event) => {
        this.setState({displayMenu:!this.state.displayMenu});
        this.setState({ISIValue: event.target.value});
    };

    render(){
        return(
            <React.Fragment>
                <Layer1>

                    <X  sclicked={this.selectValueX} value={this.state.Xvalue}/>

                    <Y  sclicked={this.selectValueY} value={this.state.Yvalue}/>

                    <Month  sclicked={this.selectValueMonth} value={this.state.monthValue}/>

                    <Day  sclicked={this.selectValueDay} value={this.state.dayValue}/>

                    <FFMC  sclicked={this.selectValueFFMC} value={this.state.FFMCValue}/>

                    <DMC  sclicked={this.selectValueDMC} value={this.state.DMCValue}/>

                    <DC  sclicked={this.selectValueDC} value={this.state.DCValue}/>

                    <ISI  sclicked={this.selectValueISI} value={this.state.ISIValue}/>

                    <TEMP sclicked={this.selectValueTEMP} value={this.state.tempValue}/>

                    <RH sclicked={this.selectValueRH} value={this.state.RHValue}/>

                    <Wind sclicked={this.selectValueWind} value={this.state.windValue}/>

                    <Rain sclicked={this.selectValueRain} value={this.state.rainValue}/>

                    <ButtonWrapper>
                        <ButtonArea onClick={this.countAreaHandler}>Count Area</ButtonArea>
                    </ButtonWrapper>
                </Layer1>
                <Layer2/>
            </React.Fragment>
        );
    }
}

export default Main;