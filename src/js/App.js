import React, { Component } from 'react'
import Account from './components/Account'
import Home from './pages/Home';

import { Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="home">
                <div className="container"> 
                    <Account/>

                    <div className="content">
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        <Route exact path='/profile' component={ Profile }/>
                    </Switch>
                    </div>
                </div>
            </div>

        )
    }
}