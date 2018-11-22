import { SEARCH_ITEM } from '../constants/accountConst'
import { gallery } from '../data/gallery'

export const initialState = {
    gallery: gallery 
}

export function galleryReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ITEM:
            return { ...state, gallery: action.payload }
        default:
            return state
    }
}