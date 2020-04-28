import {createStore} from "redux";
import {ActionType} from "./action-type";

function reducer(state = {count: 0}, action: Record<string, any>) {
    switch (action.type) {
        case ActionType.INCREMENT:
            return {
                count: state.count + 1
            };
        case ActionType.DECREMENT:
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
