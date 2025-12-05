import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE,
    SET_FILTER,
    SET_THEME,
} from "./types";

const initialState = {
    items: [],
    loading: false,
    error: null,
    lastFetched: null,
    filters: {
        count: 100,
        createdAfter: null,
        language: 'All',
    },
    theme: 'light',
}

export default function reposReducer(state = initialState, action){
    switch(action.type){
        case FETCH_REPOS_REQUEST:
            return{
                ...state, 
                loading: true, 
                error: null
            };
        case FETCH_REPOS_SUCCESS:
            return{
                ...state, 
                loading: false, 
                items: action.payload.items,
                lastFetched: action.payload.fetchedAt
            };
        case FETCH_REPOS_FAILURE:
            return{
                ...state, 
                loading: false, 
                error: action.payload
            };
        case SET_FILTER:
            return{
                ...state,
                filters: {...state.filters, ...action.payload}
            };
        case SET_THEME:
            return{...state, theme: action.payload};
        default:
            return state;
    }
}