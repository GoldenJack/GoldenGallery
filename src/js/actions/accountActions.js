import * as types  from '../constants';

export function clickItem(e) {
    return {
        type: 'CLICK_ITEM',
        payload: e,
    }
}

export function searchItem(value) {
    return {
        type: types.SEARCH_ITEM,
        payload: value
    }
}