import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component{
    static contextType = LanguageContext;
    render(){
        const text = this.context.language === 'english' ? 'Name' : 'Namm'
        return (
            <div className="ui field">
                <label htmlFor="name">{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;
