import * as types from './_app.actionTypes'

const initialState = {
    tableXO: [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.CLICK:
            if (state.tableXO[action.pos] !== '') return state

            state.globalXO = (state.globalXO === 'X') ? 'O' : 'X'

            state.tableXO[action.pos] = state.globalXO

            return { ...state }

        default:
            return state
    }
}