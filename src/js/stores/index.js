import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';
 
const CHANGE = 'CHANGE';
let _items_photo = [
    {
        id: 0,
        title: 'Item 1',
        src: 'img/avatar.png'
    },
    {
        id: 1,
        title: 'Item 2',
        src: 'img/avatar.png'
    }
];
 
class PhotoStore extends EventEmitter {
    constructor() {
        super();

        Dispatcher.register(this._registerToActions.bind(this));
    }
 
    _registerToActions(action) {
        switch(action.actionType) {

            case ActionTypes.CLICK_ITEM:
                this._clickItem(action.payload);

            case ActionTypes.DELETE_ITEM:
                this._deleteItem(action.payload);

            break;
        }
    }
 
    /*
        actions 
    */

    _addNewItem(item) {
        item.id = _walletState.length;
        _walletState.push(item);
        this.emit(CHANGE);
    }

    _deleteItem(id) {
        _items_photo.map((item) => {
            if(item.id === id) {
                console.log(item)
            }
        })
    }
 
    // Returns the current store's state.
    getAllItems() {
        return _items_photo;
    }
 
 
    // Calculate the total budget.
    getTotalBudget() {
        let totalBudget = 0;
 
        _walletState.forEach((item) => {
            totalBudget += parseFloat(item.amount);
        });
 
        return totalBudget;
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
 
export default new PhotoStore();