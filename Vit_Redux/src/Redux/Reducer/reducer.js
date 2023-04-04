const initialValue = {
    userData: [],
    editData: {}
}

const formReducer = (state = initialValue, action) => {
    const { type, payload } = action
    switch (type) {
        case "ADD":
            return {...state, userData: [...state.userData, {...payload, id: new Date().getTime().toString() }] }
        case "DELETE":
            return {...state,
                userData: state.userData.filter((e) => e.id !== payload)
            }
        case "EDIT":
            return {...state,
                editData: payload
            }
        case "RESET":
            return {...state,
                editData: null
            }
        case "UPDATE":
            return {
                ...state,
                userData: state.userData.map((e) => {
                    if (e.id === payload.id) {
                        return payload
                    } else {
                        return e
                    }

                })
            }
        default:
            return state;
    }

}
export default formReducer;