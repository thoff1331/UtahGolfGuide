import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import axios from "axios";

const initialState = {
    currentPage: 1

};
const PAGE_FORWARD = "PAGE_FORWARD";
const PAGE_BACK = "PAGE_BACK"

export function pageForward() {
    return {
        type: PAGE_FORWARD,
        payload: initialState.currentPage + 1
    }
}
export function pageBack() {
    return {
        type: PAGE_BACK,
        payload: initialState.currentPage - 1
    }
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case `${PAGE_FORWARD}`:
            return {
                ...state,
                currentPage: initialState.currentPage + 1
            }
        case `${PAGE_BACK}`:
            return {
                ...state,
                currentPage: initialState.currentPage - 1
            }
        default:
            return state;
    }
}


export default createStore(reducer, applyMiddleware(promise));