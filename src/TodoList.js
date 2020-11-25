import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} />
                </div>
                <ul>
                    <li>list</li>
                </ul>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
    };
};

export default connect(stateToProps, null)(TodoList);
