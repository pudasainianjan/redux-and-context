import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component{

    render(){
        return (
            <div className="ui container">
                <LanguageStore>
                <LanguageSelector />
                {/* because userCreate only has components that needs language state pass value prop the information we want to communicate with context object */}
                {/* we can wrap different context in any order inside or outside..here i put colorcontext outside of language context */}
                <ColorContext.Provider value="red">
                    <UserCreate />
                </ColorContext.Provider>
                </LanguageStore>

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
