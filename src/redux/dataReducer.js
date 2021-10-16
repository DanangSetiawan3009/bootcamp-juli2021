const defaultState = {
    employee: []
}
const dataReducer = (state = defaultState, action) => { // action = object return from mapDispatchToProps
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return {
                employee: state.employee.push(action.payload)

            }

        default:
            return state
    }
}

export default dataReducer