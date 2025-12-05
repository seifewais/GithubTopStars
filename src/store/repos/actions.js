import {
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_FAILURE,
    SET_FILTER,
    SET_THEME
} from "./types";

export const setFilters = (filters) => ({type: SET_FILTER, payload: filters});
export const setTheme = (theme) => ({type: SET_THEME, payload: theme});

export const fetchRepos = (createdAfter = null, perPage = 100) => {
    return async (dispatch) => {
        dispatch({type: FETCH_REPOS_REQUEST});
        try{
            const created = createdAfter ? `created:>${createdAfter}` : `created:>2019-01-10`;
            const url = `https://api.github.com/search/repositories?q=${created}&sort=stars&order=desc&per_page=${perPage}`;
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(`Failed to fetch: ${response.status}`);
            }
            const data = await response.json();
            dispatch({type: FETCH_REPOS_SUCCESS, payload: {items: data.items, fetchedAt: new Date.now()}});
        }
        catch(error){
            dispatch({type: FETCH_REPOS_FAILURE, payload: error.message});
        }
    }
}