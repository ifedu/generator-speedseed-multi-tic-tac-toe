import * as types from './app.actionTypes'

export function push({pos}) {
    return {
        pos,

        type: types.CLICK
    }
}
