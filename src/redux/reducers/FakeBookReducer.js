const stateDefault = [
    {name:'so1',content:'càng ngày càng dở vậy'},
    {name:'so2',content:'đúng vậy'},
]

export const FakeBookReducer = ((state = stateDefault, action) => {
    switch (action.type) {
        case 'COMMENT': {

            // state = [...state.action.userContent]
            return [...state,action.userContent];
        }
    
        default:
            return state
    }
})