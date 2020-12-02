import { CHANGE_INPUT, BTN_CLICK, DEL_ITEM } from "./actionTypes";
import Axios from "axios";

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value: value,
});

export const btnClickAction = () => ({
    type: BTN_CLICK,
});

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index: index,
});

export const getTodoList = () => {
    return (dispatch) => {
        Axios.get("https://s.ohltr.com/api/test.php").then((res) => {
            const data = res.data;
            console.log(res.data);
            //dispatch(getListAction(data));
        });
    };
};
