import * as types from './_app.actionTypes'

export function push({pos}) {
    return {
        pos,

        type: types.CLICK
    }
}