import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'

import Layout from 'features/Layout'
import Home from 'features/Home'
import Gallery from 'features/Gallery'



ReactDOM.render(
    <Provider store={ store }>
        <HashRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={ Home } />
                    <Route path="/gallery" component={ Gallery } />
                </Layout>
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)