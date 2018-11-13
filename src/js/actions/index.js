import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';
 
class PhotoGallery {

    searchItem(item) {
        Dispatcher.dispatch({
            actionType: ActionTypes.SEARCH_ITEM,
            payload: item
        })
    }
 
}
 
export default new PhotoGallery();