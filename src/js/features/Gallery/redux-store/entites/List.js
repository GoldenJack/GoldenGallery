import { galleryData } from 'data/gallery';
import { START, SUCCESS, FAIL, SEARCH, GET, SET } from 'constants/common';

const GALLERY = 'GALLERY';
const BY_NAME = 'BY_NAME';
const SIZE = 'SIZE';

const initialState = {
    loading: false,
    loaded: false,
    error: false,
    size: 4,
    entities: []
}

export default (gallery = initialState, { type, data }) => {
    switch (type) {
        case GET + GALLERY + START: 
            return { 
              ...gallery, loading: true, loaded: false, error: false, entities: {} 
            }
        case GET + GALLERY + SUCCESS: 
            return { 
              ...gallery, loading: false, loaded: true, error: false, entities: data 
            }
        case GET + GALLERY + FAIL: 
            return { 
              ...gallery, loading: false, loaded: false, error: data
            }
        case GET + GALLERY + BY_NAME + START: 
            return { 
              ...gallery, loading: true, loaded: false, error: false
            }
        case GET + GALLERY + BY_NAME + SUCCESS: 
            return { 
              ...gallery, loading: false, loaded: true, error: false, entities: data 
            }
        case GET + GALLERY + BY_NAME + FAIL: 
            return { 
              ...gallery, loading: false, loaded: false, error: data
            }
        case SET + SIZE:
            return {
                ...gallery, size: data
            }
        default: return gallery
    }
}

export const getGallery = () => dispatch  => {
    try {
        dispatch({ type: GET + GALLERY + START });
        let res;
        setTimeout(() => {
            res = galleryData
            dispatch({ type: GET + GALLERY + SUCCESS, data: res })
        }, 3000);
    } catch ( error ) {
        dispatch({ type: GET + GALLERY + FAIL, data: ['404'] });
    }
}

export const getGalleryByTitle = value => (dispatch, getState)  => {
    try {
        dispatch({ type: GET + GALLERY + BY_NAME + START });
        const gallery = getState().gallery.entities;
        let res = gallery.map(( item ) => {
            item.photos.map( (photo) => {
                let title = photo.title.toLowerCase();
                
                photo.display = false;
                if(title.indexOf(value.toLowerCase()) !== -1){
                    photo.display = true
                }
            })
            return item;
        })
        
        dispatch({ type: GET + GALLERY + BY_NAME + SUCCESS, data: res });
    } catch ( error ) {
        dispatch({ type: GET + GALLERY + FAIL, data: ['404'] });
    }
}

export const reSizeGallery = (value) => dispatch => {
    dispatch({ type: SET + SIZE, data: value })
}