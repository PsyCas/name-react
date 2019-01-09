import React from 'react';
import "../styles/Names.css";

class Input extends React.Component {
    render() {
        return this.props.x
            ? (<div>{this.props.y}</div>)
            : (<input defaultValue={this.props.y} type="text" />);
    }
}

class DisplayNames extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            x: true,
            f: this.props.first,
            l: this.props.last,
        }
    }

    toggle() {
        this.setState({x: !this.state.x});
    }

    myClick(e) {
        e.preventDefault();
        if (!this.state.x) {
            this.setState({
                f: e.target.children[0].value,
                l: e.target.children[1].value
            });
        }
        this.toggle();
    }

    render() {
        return (
            <form onSubmit={(e) => {this.myClick(e)}}>
                <Input x={this.state.x} y={this.state.f} />
                <Input x={this.state.x} y={this.state.l} />
                {this.state.x || <button type="button" onClick={() => this.toggle()}>Cancel</button>}
                <button type="submit">{this.state.x ? "Edit" : "Save"}</button>
            </form>
        );
    }
}

export default DisplayNames;