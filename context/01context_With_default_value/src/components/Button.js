import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{
    static contextType = LanguageContext;       //with STATIC we are adding a property directly to the class itself (not its instance only) or we can do Button.contextType = LanguageContext; now this class can reference this.context

    render(){
        // console.log(this.context);
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        return (
            <button className="ui button primary">{text}</button>
        );
    }
}

export default Button;
