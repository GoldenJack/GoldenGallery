import React, { Component } from 'react'


export default class Search extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="home__search search">
                <form action="" className="search__form">
                    <div className="search__icon">
                        <input type="text" className="search__input" placeholder="search files"/>
                    </div>
                    
                </form>
            </div>
        )
    }
}