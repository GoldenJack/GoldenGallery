import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';
 
class PhotoGallery {
 
    clickItem(item) {
        Dispatcher.dispatch({
            actionType: ActionTypes.CLICK_ITEM,
            payload: item 
        });
    }

    deleteItem(item) {
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_ITEM,
            payload: item
        })
    }

 
}
 
export default new PhotoGallery();