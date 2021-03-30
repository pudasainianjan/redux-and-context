import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component{
    state = { language:'english' };

    onLanguageChange = (language) =>{
        this.setState({ language: language });
    }

    render(){
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={()=>this.onLanguageChange('english')}></i>
                    <i className="flag nl" onClick={()=>this.onLanguageChange('dutch')}></i>
                </div>

                {/* because userCreate only has components that needs language state pass value prop the information we want to communicate with context object */}
                {/* we can wrap different context in any order inside or outside..here i put colorcontext outside of language context */}
                <ColorContext.Provider value="red">
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
                </ColorContext.Provider>

                {/* note: makiing a new provider creates a sepatarte pipe of information */}

                {/* this instance will always get fixed value..this make different provider instance */}
                {/* <LanguageContext.Provider value='dutch'>
                    <UserCreate />
                </LanguageContext.Provider> */}

                {/* this instance never sees any update */}
                {/* <UserCreate /> */}
            </div>
        )
    }
}

export default App;
