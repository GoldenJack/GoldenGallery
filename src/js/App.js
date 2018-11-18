import React, { Component } from 'react'
import Account from './components/Account'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Gallery from './pages/Gallery/Gallery'

import { Switch, Route } from 'react-router-dom';


export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="home">
                <div className="container flex"> 
                    <Account/>

                    <div className="content">
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        <Route exact path='/edit' component={ Edit }/>
                        <Route exact path='/gallery' component={ Gallery }/>
                    </Switch>
                    </div>
                </div>
            </div>

        )
    }
}