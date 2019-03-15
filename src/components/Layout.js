import React from "react";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to React SSR!",
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => { console.log('hi') }}>
                    hi
                </button>
                <h1>{ this.state.title }</h1>
            </div>
        );
    }
}
