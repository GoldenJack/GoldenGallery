import { galleryData } from 'data/gallery';
import { START, SUCCESS, FAIL, SEARCH, GET } from 'constants/common';

const GALLERY = 'GALLERY';

const initialState = {
    loading: false,
    loaded: false,
    error: false,
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
        default: return gallery
    }
}

export const getGallery = () => dispatch  => {
    try {
        dispatch({ type: GET + GALLERY + START });
        let res;
        setTimeout(() => {
            res = galleryData
            dispatch({ type: GET + GALLERY + SUCCESS, data: res });
        }, 3000 )
    } catch ( error ) {
        dispatch({ type: GET + GALLERY + FAIL, data: ['404'] });
    }
}

// export function searchItem ( value ) {
//     return (dispatch, getState) => {
//         let state = getState();
//         let searchQuery = value.toLowerCase();

//         let result = state.map(( item ) => {
//             item.photos.map( (photo) => {
//                 let title = photo.title.toLowerCase();
                
//                 photo.display = false;
//                 if(title.indexOf(searchQuery) !== -1){
//                     photo.display = true
//                 }
//             })
//             return item;
//         })

//         dispatch({
//             type: types.SEARCH_ITEM,
//             payload: result
//         })
//     }
// }