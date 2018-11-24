import * as types from '../constants/accountConst'


export function searchItem ( value ) {
    return (dispatch, getState) => {
        let state = getState().galleryReducer.gallery;
        let searchQuery = value.toLowerCase();

        let result = state.map(( item ) => {
            item.photos.map( (photo) => {
                let title = photo.title.toLowerCase();
                
                photo.display = false;
                if(title.indexOf(searchQuery) !== -1){
                    photo.display = true
                }
            })
            return item;
        })

        dispatch({
            type: types.SEARCH_ITEM,
            payload: result
        })
    }
}