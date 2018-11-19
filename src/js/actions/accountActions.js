import * as types from '../constants/accountConst'


export function searchItem( value ) {
    return {
        type: types.SEARCH_ITEM,
        payload: value
    }
}