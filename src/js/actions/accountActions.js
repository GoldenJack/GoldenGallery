export function clickItem(e) {
    return {
        type: 'CLICK_ITEM',
        payload: e,
    }
}

export function searchItem(value) {
    return {
        type: 'SEARCH_ITEM',
        payload: value
    }
}