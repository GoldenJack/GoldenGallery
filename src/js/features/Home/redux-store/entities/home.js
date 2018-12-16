import { START, SUCCESS, FAIL, GET } from 'constants/common';
import api from '../api';

const HOME = 'HOME';

const initialState = {
  loaded: false,
  loading: false,
  error: false,
  entities: []
}

export default (home = initialState, { type, data }) => {
  switch(type){
    case GET + HOME + START:
      return {
        ...home, loading: true
      }
    case GET + HOME + SUCCESS:
      return {
        ...home, loading: false, loaded: true, entities: data
      }
    case GET + HOME + FAIL:
      return {
        ...home, loading: false, loaded: false, error: data
      }
    default: return home
  }
};

export const getHome = () => dispatch => {
  dispatch({type: GET + HOME + START});
  return api.home.getHome()
    .then(res => {
      dispatch({type: GET + HOME + SUCCESS, data: res})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: GET + HOME + FAIL, data: err})
    })
  
};

// export const editHome = (data) => dispatch => {
  
// };
