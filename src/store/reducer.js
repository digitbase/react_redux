import { CHANGE_INPUT, BTN_CLICK, DEL_ITEM } from "./actionTypes";

const defaultState = {
    inputValue: "write something",
    list: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    console.log(action.type);
    let newState = JSON.parse(JSON.stringify(state));

    if (action.type === CHANGE_INPUT) {
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === BTN_CLICK) {
        console.log("click");
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }

    if (action.type === DEL_ITEM) {
        newState.list.splice(action.index, 1);
        return newState;
    }

    if (action.type === "getListAction") {
        // newState.list = action.
        // return newState;
    }

    return state;
};
