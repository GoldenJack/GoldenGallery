import { combineReducers } from 'redux'
import { galleryReducere } from './galleryReduce'
import { userReducere } from './userReduce'
import { previewReducere } from './previewReducere'


export const rootReducer = combineReducers({
    galleryReducere,
    userReducere,
    previewReducere
});