import { galleryData } from 'data/gallery';
import { START, SUCCESS, FAIL, GET } from 'constants/common';

const PHOTO = 'PHOTO';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  entities: {
    title: '',
    image: '',
    comments: [],
    countLikes: 0
  }

};

export default (photo = initialState, { type, data }) => {
  switch (type) {
    case GET + PHOTO + START:
      return {
        ...photo, loading: true, entities: {}
      };
    case GET + PHOTO + SUCCESS:
      return {
        ...photo, loading: false, loaded: true, entities: data
      };
    case GET + PHOTO + FAIL:
      return {
        ...photo, loading: false, error: data
      };
    default: return photo;
  }
};

export const getPhoto = (album, id) => dispatch => {
  try {
    dispatch({ type: GET + PHOTO + START });

    const [filteredAlbum] = galleryData.filter(albumData => albumData.id === album);
    const [filteredPhoto] = filteredAlbum.photos.filter(({ id }) => id === +id);
    const { title, image, comments, countLikes } = filteredPhoto;
    const res = { title, image, comments, countLikes };
    dispatch({ type: GET + PHOTO + SUCCESS, data: res });
  } catch (error) {
    dispatch({ type: GET + PHOTO + FAIL, data: ['404'] });
  }
};
