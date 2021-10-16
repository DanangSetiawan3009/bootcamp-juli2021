const defaultState = {
    statusLogin: false,
    token: ""
}
const loginReducer = (state = defaultState, action) => { // action = object return from mapDispatchToProps
    switch (action.type) {
        case "LOGIN_OKO":
            return {
                statusLogin: true,
                token: action.payload,
                keyBebas: action.asdf
            }

        case "LOGOUT_OK":
            return defaultState

        default:
            return state
    }
}

export default loginReducer