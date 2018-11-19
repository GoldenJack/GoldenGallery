import * as types  from '../constants';

export function previewPhoto( target ) {
    return {
        type: types.PREVIEW_PHOTO,
        payload: target,
    }
}

export function closePreview() {
    return {
        type: types.CLOSE_PREVIEW,
        payload: '',
    }
}

export function searchItem( value ) {
    return {
        type: types.SEARCH_ITEM,
        payload: value
    }
}