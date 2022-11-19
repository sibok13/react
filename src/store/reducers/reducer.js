import {initState} from '../iniState'

export const mainReducer = (state = initState, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'SET_PARAM':
            return {
                ...state, ...payload
            }
        default:
            return state
        }
    }