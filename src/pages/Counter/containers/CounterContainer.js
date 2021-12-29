import React from "react";
import { CounterView } from "../components/CounterView";

class CounterContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            countValue: 0,
        };
    }

    handleIncrement = () => {
        this.setState({
            countValue: this.state.countValue + 1,
        });
    };

    handleDicrement = () => {
        if (this.state.countValue > 0) {
            this.setState({
                countValue: this.state.countValue - 1,
            });
        }
    };

    render() {
        return (
            <CounterView
                countValue={this.state.countValue}
                handleIncrement={this.handleIncrement}
                handleDicrement={this.handleDicrement}
            />
        );
    }
}

export { CounterContainer };
