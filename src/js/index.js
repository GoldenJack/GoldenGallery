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

library.add(faStroopwafel)


ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={ Home } />
                    <Route path="/gallery" component={ Gallery } />
                </Layout>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)