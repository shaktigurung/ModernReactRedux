import React, { Component } from 'react';
import LanguageContext from './../contexts/LanguageContext';
import ColorContext from './../contexts/ColorContext';

export default class Button extends Component {
    //getting value using this.context
    //static contextType = LanguageContext;
    renderSubmit(value) {
        return value === 'english' ? 'Submit': 'Bujhau';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value)=> this.renderSubmit(value) }
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        //Using this.context
        // const text = this.context === 'english' ? "Submit" : "Bujhau" ;
        // return (
        //     <button className="ui button primary"> {text} </button>
        // );

        //Using Consumer
        return (
            <ColorContext.Consumer>
                {(color)=> this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}



