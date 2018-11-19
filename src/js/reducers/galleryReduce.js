import * as types from '../constants/galleryConst'
import { SEARCH_ITEM } from '../constants/accountConst'

export const initialState = {
    gallery: [
        {   
            "id": 1,
            "en": "Landscape",
            "ru": "Пейзажи",
            "photos": [
                {
                    "id": 1.1,
                    "title": "Германия",
                    "image": "img/photo/landscape/1.jpg",
                    "display": true
                },
                {
                    "id": 1.2,
                    "title": "Гержиния",
                    "image": "img/photo/landscape/2.jpg",
                    "display": true
                },
                {
                    "id": 1.3,
                    "title": "Дания",
                    "image": "img/photo/landscape/2.jpg",
                    "display": true
                },
                {
                    "id": 1.4,
                    "title": "Изображение номер 4",
                    "image": "img/photo/landscape/4.jpg",
                    "display": true
                },
            ]
        },
        {   
            "id": 2,
            "en": "City",
            "ru": "Города",
            "photos": [
                {
                    "id": 2.1,
                    "title": "Изображение номер 1",
                    "image": "img/photo/city/1.jpg",
                    "display": true
                },
                {
                    "id": 2.2,
                    "title": "Изображение номер 2",
                    "image": "img/photo/city/2.jpg",
                    "display": true
                },
                {
                    "id": 2.3,
                    "title": "Изображение номер 3",
                    "image": "img/photo/city/3.jpg",
                    "display": true
                },
                {
                    "id": 2.4,
                    "title": "Изображение номер 4",
                    "image": "img/photo/city/4.jpg",
                    "display": true
                },
            ]
        },
        {   
            "id": 3,
            "en": "Peaple",
            "ru": "Люди",
            "photos": [
                // {
                //     "id": 2.1,
                //     "title": "Изображение номер 1",
                //     "image": "img/photo/city/1.jpg"
                // },
                // {
                //     "id": 2.2,
                //     "title": "Изображение номер 2",
                //     "image": "img/photo/city/2.jpg"
                // },
                // {
                //     "id": 2.3,
                //     "title": "Изображение номер 3",
                //     "image": "img/photo/city/3.jpg"
                // },
                // {
                //     "id": 2.4,
                //     "title": "Изображение номер 4",
                //     "image": "img/photo/city/4.jpg"
                // },
            ]
        }
    ]
}

export function galleryReducere(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ITEM:
            return { ...state, gallery: action.payload }
        default:
            return state
    }
}