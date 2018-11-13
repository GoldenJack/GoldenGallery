import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';
import Immutable from 'immutable'

import Gallery from '../data/gallery'
 
const CHANGE = 'CHANGE';

let _gallery_store = Gallery;
 
class GalleryStore extends EventEmitter {
    constructor(data) {
        super(Dispatcher);

        this.data = data;

        Dispatcher.register(this._registerToActions.bind(this));
    }
 
    _registerToActions(action) {
        switch(action.actionType) {

            case ActionTypes.SEARCH_ITEM:
                this._searchItem(action.payload);

            break;
        }
    }

    _searchItem(value){
        let result;
        let searchQuery = value.toLowerCase();

        result = this.data.map(( item ) => {
            item.photo = item.photo.filter( (photo) => {
                let title = photo.title.toLowerCase();
                return title.indexOf(searchQuery) !== -1;
            })
            return item;
        })

        this.data = result

        this.emit(CHANGE);
    }

    _deleteItem(id) {
        _items_photo.map((item, iter) => {
            if(item.id === id) {
                _items_photo.splice(iter, 1);
                this.emit(CHANGE);
            }
        })
    }
 
    // Returns the current store's state.
    getAllItems() {
        return this.data;
    }
 
    // Hooks a React component's callback to the CHANGED event.
    addChangeListener(callback) {
        this.on(CHANGE, callback);
    }
 
    // Removes the listener from the CHANGED event.
    removeChangeListener(callback) {
        this.removeListener(CHANGE, callback);
    }
}
 
export default new GalleryStore(_gallery_store);