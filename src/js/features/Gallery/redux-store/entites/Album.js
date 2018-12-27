import { galleryData } from 'data/gallery';
import { START, SUCCESS, FAIL, GET } from 'constants/common';

const ALBUM = 'ALBUM';

const initialState = {
  loaded: false,
  loading: false,
  error: false,
  entities: []
}

export default (galleryAlbum = initialState, { type, data }) => {
  switch(type){
    case GET + ALBUM + START:
      return { ...galleryAlbum, loading: true };
    case GET + ALBUM + SUCCESS:
    console.log(data)
      return { ...galleryAlbum, loading: false, loaded: true, entities: data };
    case GET + ALBUM + FAIL: 
      return { ...galleryAlbum, loaded: false, error: data }
    default: return galleryAlbum;
  }
}

export const getAlbum = (idAlbum) => dispatch => {
  try {
    dispatch({type: GET + ALBUM + START});
    const res = galleryData.filter(({id}) => id === idAlbum)
    dispatch({type: GET + ALBUM + SUCCESS, data: res});
  } catch {
    dispatch({type: GET + ALBUM + FAIL, data: ['404']});
  }
}