export const initialState = {
    gallery: [
        {   
            "id": 1,
            "en": "Landscape",
            "ru": "Пейзажи",
            "photo": [
                {
                    "id": 1.1,
                    "title": "Изображение номер 1",
                    "image": "img/photo/landscape/1.jpg"
                },
                {
                    "id": 1.2,
                    "title": "Изображение номер 2",
                    "image": "img/photo/landscape/2.jpg"
                },
                {
                    "id": 1.3,
                    "title": "Изображение номер 3",
                    "image": "img/photo/landscape/3.jpg"
                },
                {
                    "id": 1.4,
                    "title": "Изображение номер 4",
                    "image": "img/photo/landscape/4.jpg"
                },
            ]
        },
        {   
            "id": 2,
            "en": "City",
            "ru": "Города",
            "photo": [
                {
                    "id": 2.1,
                    "title": "Изображение номер 1",
                    "image": "img/photo/city/1.jpg"
                },
                {
                    "id": 2.2,
                    "title": "Изображение номер 2",
                    "image": "img/photo/city/2.jpg"
                },
                {
                    "id": 2.3,
                    "title": "Изображение номер 3",
                    "image": "img/photo/city/3.jpg"
                },
                {
                    "id": 2.4,
                    "title": "Изображение номер 4",
                    "image": "img/photo/city/4.jpg"
                },
            ]
        },
        {   
            "id": 3,
            "en": "Peaple",
            "ru": "Люди",
            "photo": [
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

export function rootReducer(state = initialState) {
    return state
}