import * as types from 'constants/CategoryActionTypes'
export const RequestGetCategories = 'REQUEST_GET_CATAGORIES'
export const SuccessGetCategories = 'SUCCESS_GET_CATAGORIES'
export const ErrorGetCategories = 'ERROR_GET_CATAGORIES'

const initialState = {
    categories: [],
    isLoading: false,
    errorMessage: ''
}

export function categories(state = initialState, action) {
    switch (action.type) {
        case types.RequestGetCategories:
            return {
                ...state,
                isLoading: true,
                errorMessage: ''
            }
        case types.SuccessGetCategories:
            return {
                ...state,
                isLoading: false,
                categories: action.categories
            }
        case types.ErrorGetCategories:
            return {...state,
                isLoading: false,
                errorMessage: action.message
            }

        default:
            return state
    }
}