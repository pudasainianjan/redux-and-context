import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{

    renderSubmit(language){
        return language === 'english' ? 'Submit': 'Voorlegen';
    }

    renderButton(color){
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                 {({language})=>this.renderSubmit(language)}          
                </LanguageContext.Consumer>
            </button>
        )
    }
    

    render(){
        // console.log(this.context);
        //Note: consumer take a function as a child and auto calls with current value in the pipe 
        //NOTE: we cannot use this.context when we have multiphe context objects..so Consumer is important in this case..for eg:  i also have Colorcontext that tells color of button
        return (
            <ColorContext.Consumer>
                {(color)=> this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
