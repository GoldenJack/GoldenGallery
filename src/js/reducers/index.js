import { combineReducers } from 'redux'
import { galleryReducer } from './galleryReducer'
import { userReducer } from './userReducer'
import { previewReducer } from './previewReducer'


export const rootReducer = combineReducers({
    galleryReducer,
    userReducer,
    previewReducer
});