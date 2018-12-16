import { combineReducers } from 'redux';
import Gallery from 'features/Gallery/redux-store';
import Home from 'features/Home/redux-store';

export default combineReducers({
  ...Gallery,
  ...Home
});
