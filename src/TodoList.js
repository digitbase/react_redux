import React, { Component } from "react";
import { connect } from "react-redux";
import {
    changeInputAction,
    btnClickAction,
    delItemAction,
    getTodoList,
} from "./store/actionCreators";

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
    console.log(dispatch);
    return {
        inputChange(e) {
            console.log(changeInputAction);
            dispatch(changeInputAction(e.target.value));
        },
        clickBtn() {
            dispatch(btnClickAction());
        },
        delItem(index) {
            dispatch(delItemAction(index));
        },
    };
};

export default connect(stateToProps, dispatchToProps)(TodoList);
