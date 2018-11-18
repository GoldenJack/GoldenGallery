export const initialState = {
    gallery: [
        {   
            "id": 1,
            "en": "Landscape",
            "ru": "Пейзажи",
            "photo": [
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
                    "image": "img/photo/landscape/3.jpg",
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
            "photo": [
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

export function galleryReducere(state = initialState, action) {
    switch (action.type) {
        case 'CLICK_ITEM':
            console.log(event.target)

        case 'SEARCH_ITEM':
            let searchQuery = action.payload.toLowerCase();

            let result = state.gallery.map(( item ) => {
                item.photo.map( (photo) => {
                    let title = photo.title.toLowerCase();
                    
                    photo.display = false;
                    if(title.indexOf(searchQuery) !== -1){
                        photo.display = true
                    }
                })
                return item;
            })

            return { ...state, gallery: result }
        default:
            return state
    }
}