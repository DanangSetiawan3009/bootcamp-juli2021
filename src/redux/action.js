const actionHandlerLogin = token => {
    return {
        type: "LOGIN_OKO",
        payload: token
    }
}

export { actionHandlerLogin }