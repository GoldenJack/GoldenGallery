import { combineReducers } from 'redux';
import Gallery from 'features/Gallery/redux-store';

export default combineReducers({
  ...Gallery
});
