import React from 'react';
//router has BrowserRouter, Route and Link component
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';


//* Router has various types: BrowserRouter, HashRouter(adds hash), MemoryRouter(dont use url to navigate)
//note: if you put header outside of a browserroute, you cannot use Link tag inside header...so put it inside broswer router

const App = () =>{
    return (<div className="ui container">
        <Router history={history} >
            <div>
                <Header />  
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/:id" exact component={StreamShow} />
                </Switch>
            </div>
        </Router>
    </div>
    );
};

export default App;

