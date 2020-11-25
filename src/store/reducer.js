console.log("this is reducer");

const defaultState = {
    inputValue: "write something",
    list: [],
};

export default (state = defaultState, action) => {
    if (action.type === "change_input") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === "btn_click") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        console.log(action.value);
        return newState;
    }

    if (action.type === "del_item") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        console.log(action.index);
        return newState;
    }
    return state;
};
