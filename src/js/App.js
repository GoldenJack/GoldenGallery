import React, { Component } from 'react'
import Account from './containers/Account/Account'
import Home from './containers/Home/Home'
import Edit from './containers/Profile/Profile'
import Gallery from './containers/Gallery'
import PhotoPage from './components/PhotoPage/PhotoPage'
import Album from './components/Album/Album';

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
                        {/* <Route exact path='/gallery/:album' component={ Album }/> */}
                        <Route exact path='/gallery/:album/:number' component={ PhotoPage }/>
                    </Switch>
                    </div>
                </div>
            </div>

        )
    }
}