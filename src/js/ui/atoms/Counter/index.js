import React from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

const cn = bemHelper('counter');

let typeOfRecount =  ( recount)  => {
    return (recount instanceof Array) ? 'Array' : typeof recount
};

let countFiles = ( recount, arr ) => {
    let count = 0;
    let type = typeOfRecount( recount ).toLowerCase()
    
    switch(type){
        case 'array':
            if(recount.length){
                if(arr){
                    recount.map( ( item ) => {
                        count += item[arr].length
                    })
                } else {
                    return count = recount.length
                }
            };
            return count;
        case 'object':
            return count = recount.length;
        case 'number':
            return count = recount;
        case 'string':
            return count = recount;
    }
    return count;
}

const Counter = ({ mix, recount, arr }) => (
    <span { ...cn('', '', mix) }>{ countFiles( recount, arr ) }</span>
)

Counter.propTypes = {
    recount: PropTypes.oneOfType([ 
        PropTypes.string, 
        PropTypes.number, 
        PropTypes.array ]).isRequired,
    mix: PropTypes.string,
    arr: PropTypes.string
}

export default Counter;