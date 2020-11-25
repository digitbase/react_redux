import React from "react";
import { connect } from "react-redux";

const TodoList = (props) => {
    let { inputValue, inputChange, clickBtn, delItem, list } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange} />
                <button onClick={clickBtn}>提交</button>
            </div>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li
                            onClick={() => {
                                delItem(index);
                            }}
                            key={index}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
    };
};

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            console.log(e.target.value);
            //this.props.inputValue = "";
            let action = {
                type: "change_input",
                value: e.target.value,
            };
            dispatch(action);
        },
        clickBtn() {
            let action = {
                type: "btn_click",
            };
            dispatch(action);
        },
        delItem(index) {
            // console.log(index);
            let action = {
                type: "del_item",
                index: index,
            };
            dispatch(action);
        },
    };
};

export default connect(stateToProps, dispatchToProps)(TodoList);
