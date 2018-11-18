export const initialState = {
    user: {
        name: 'Golden Jack',
        avatar: 'img/avatar.png'
    } 
}

export function userReducere(state = initialState, action) {
    switch (action.type) {
        case 'CLICK_ITEM':
            console.log(event.target)
        default:
            return state
    }
}