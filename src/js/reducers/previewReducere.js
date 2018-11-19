import * as types from '../constants/galleryConst'

export const initialState = {
    previewDisplay: false,
    previewImg: ''
}

export function previewReducere(state = initialState, action) {
    switch (action.type) {
        case types.PREVIEW_PHOTO:
            return  { 
                        ...state, 
                        previewDisplay: true,
                        previewImg: action.payload.target.src
                    }
        case types.CLOSE_PREVIEW:
            return  {
                        ...state,
                        previewDisplay: false,
                        previewDisplay: ''
                    }
        default:
            return state
    }
}