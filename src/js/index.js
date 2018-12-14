import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import Layout from 'features/Layout'
import Home from 'features/Home'
import Gallery from 'features/Gallery'
import Login from 'features/Login';

library.add(faStroopwafel)


ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={ Home } />
                    <Route path="/gallery" component={ Gallery } />
                    <Route path="/login" component={ Login } />
                </Layout>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)