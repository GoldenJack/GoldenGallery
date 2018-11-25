import React, { Component } from 'react'
import Account  from 'features/Account'
import Home from 'features/Home/Home'
import Gallery from 'features/Gallery'
import PhotoPage from 'features/PhotoPage'

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
                        <Route exact path='/gallery' component={ Gallery }/>
                        <Route exact path='/gallery/:album/:number' component={ PhotoPage }/>
                    </Switch>
                    </div>
                </div>
            </div>

        )
    }
}