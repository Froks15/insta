const initialState = {
    user: {
        name: 'movses'
    },
};
console.log(initialState)
export default function global(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}