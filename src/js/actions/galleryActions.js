import * as types  from '../constants/galleryConst';

export function previewPhoto( target ) {
    return {
        type: types.PREVIEW_PHOTO,
        payload: target,
    }
}

export function closePreview() {
    return {
        type: types.CLOSE_PREVIEW
    }
}