const initialState = {
    urls: [{ title: 'Google.com', rating: 5 },
        { title: 'Yahoo.com', rating: 3 }]
}

export function urls(state = initialState, action) {
    switch (action.type) {
        case 'ADD_URL':
            return {
                ...state,
                urls: [
                    ...state.urls,
                    {
                        title: action.fields,
                        rating: 1
                    }
                ]
            }

        default:
            return state
    }
}