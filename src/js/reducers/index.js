import { combineReducers } from 'redux';
import { galleryReducere } from './galleryReduce';
import { userReducere } from './userReduce';


export const rootReducer = combineReducers({
    galleryReducere,
    userReducere
});