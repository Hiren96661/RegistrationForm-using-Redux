export const addUser = (payload) => {
    return {
        type: "ADD",
        payload
    }
}
export const remove = (payload) => {
    return {
        type: "DELETE",
        payload
    }
}
export const edit = (payload) => {
    return {
        type: "EDIT",
        payload
    }
}
export const resetEdit = () => {
    return {
        type: "RESET",

    }
}
export const updateUser = (payload) => {
    return {
        type: "UPDATE",
        payload
    }
}